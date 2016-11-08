---
layout: post
title: "Python Performance Comparison"
date: 2016-11-08
---

It has been shown in most cases that Python performs better with vectorized process than generic pandas `DataFrame.apply()` method. Here is an example from my work.

In our study, the participants wear accelerometers to record their physical activities. I need to summarize the activities and classify them as sedentary, light, moderate and vigorous. Here `meterplus.data` is a list of movement counts within each 30 seconds epoch. `len(meterplus.data)=20639`. Another list `valid` is a list of the same length of `meterplus.data`, generated from a function `validate()`. The `cutoff` is a list of thresholds.

The first way to apply a function to both `meterplus.data` and `valid` is the `apply` method from pandas DataFrame.

```python
import pandas as pd
meterplus.df = pd.DataFrame({
    'y': meterplus.data,
    'timestamp': timestamp,
    'valid': validate(meterplus.data)
})

def categorize(row):
	if row['valid']==0:
		return 'nonvalid'
	elif row['valid']==1:
		if cutoff[0] <= row['y'] < cutoff[1]:
			return 'sed'
		elif cutoff[1] <= row['y'] < cutoff[2]:
			return 'light'
		elif cutoff[2] <= row['y'] < cutoff[3]:
			return 'mod'
		elif cutoff[3] < row['y']:
			return 'vig'
		else:
			return np.NaN
	else:
			return np.NaN
	
meterplus.df['mvpa'] = meterplus.df.apply(categorize, axis = 1)
```  

Using `%timeit` and `%prun -l` from ipython, we can see the performance of this process
<blockquote>
<div style="font-size:80%">
In [7]: %timeit acc2.label(acctest) <br>
1 loop, best of 3: 1.72 s per loop <br>
In [9]: %prun -l 3 acc2.label(acctest) <br>
5169897 function calls (5079010 primitive calls) in 2.827 seconds <br> <br>

Ordered by: internal time <br>
List reduced from 320 to 3 due to restriction <3> <br> <br>

ncalls  tottime  percall  cumtime  percall filename:lineno(function) <br>
1048969    0.143    0.000    0.263    0.000 {built-in method builtins.isinstance} <br>
185798    0.131    0.000    0.294    0.000 dtypes.py:74(is_dtype) <br>
20639    0.125    0.000    0.125    0.000 internals.py:2202(<lambda>) <br>
</div>
</blockquote>

Another way to apply a function to both list is vecterization.

```python
def categorize(valid, y):
    if valid==0:
        return 'nonvalid'
    elif valid==1:
        if cutoff[0] <= y < cutoff[1]:
            return 'sed'
        elif cutoff[1] <= y < cutoff[2]:
            return 'light'
        elif cutoff[2] <= y < cutoff[3]:
            return 'mod'
        elif cutoff[3] < y:
            return 'vig'
        else:
            return 'NA'
    else:
        return 'NA'

mvpa = list(map(categorize, valid, meterplus.data))
```

Again, using `%timeit` and `%prun -l` to time the performance.
<blockquote>
<div style="font-size:80%">
In [10]: %timeit acc1.label(acctest) <br>
10 loops, best of 3: 174 ms per loop <br> <br>

In [11]: %prun -l 3 acc1.label(acctest) <br>
     230767 function calls (230755 primitive calls) in 0.205 seconds <br> <br>

Ordered by: internal time <br>
List reduced from 248 to 3 due to restriction <3> <br> <br>

ncalls  tottime  percall  cumtime  percall filename:lineno(function) <br>
41290    0.048    0.000    0.048    0.000 {method 'replace' of 'datetime.datetime' objects} <br>
    1    0.039    0.039    0.039    0.039 {pandas.tslib.datetime_to_datetime64} <br>
20641    0.033    0.000    0.093    0.000 tzinfo.py:179(fromutc) <br>
</div>
</blockquote>

Vectorization outperformed the `apply` method easily with almost 10 fold increase in speed. 

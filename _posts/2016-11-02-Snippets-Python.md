---
layout: post
title: "Some Snippets in Python"
date: 2016-11-02
---

```python
# common packages
import numpy as np
import pandas as pd
from pandas import Series, DataFramez
import matplotlib.pyplot as plt
```

```python
# x if condition else y
[(x if c else y) for x, y, c in zip(xarr, yarr, cond)]
np.where(cond, xarr, yarr)
np.where(cond, value1, value2)
np.where(arr>2, 2, arr)
```

```python
# plotting pc1, pc2, pc3 in 3D stratified by color
from mpl_toolkits.mplot3d import Axes3D
fig=plt.figure()
ax=fig.gca(projection='3d')
# ax.set_xticks([])
# ax.set_yticks([])
# ax.set_zticks([])

# ax.w_xaxis.line.set_color((1.0, 1.0, 1.0, 0.0))
# ax.w_yaxis.line.set_color((1.0, 1.0, 1.0, 0.0))
# ax.w_zaxis.line.set_color((1.0, 1.0, 1.0, 0.0))

ax.scatter(eur.PC1, eur.PC2, eur.PC3, color='blue')
ax.scatter(afr.PC1, afr.PC2, afr.PC3, color='black')
ax.scatter(amr.PC1, amr.PC2, amr.PC3, color='green')

for ii in xrange(0,361,1):
    ax.view_init(elev=10, azim=ii)
    plt.savefig("movie%03d"%ii+".png")

# creating a GIF from the 3d snapshots using imageMagick
import os
os.system('convert -delay 10 -loop 0 movie*.png kgpc3d.gif')
os.system('convert kgpc3d.gif -resize 360x360 kgpc3d_small.gif')
```

```python
# check speed in ipython
%time it 
%prun -l 10
```

```python
# element-wise group two list, then apply function element-wise
map(lambda (x,y): x+y, zip([1,2,3,4],[4,5,6,7]))
```
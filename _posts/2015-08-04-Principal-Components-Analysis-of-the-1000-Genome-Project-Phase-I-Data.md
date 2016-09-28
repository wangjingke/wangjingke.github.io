---
layout: post
title: "Principal Components Analysis of the 1000 Genome Project Phase I Data"
date: 2015-08-04
---


<div align="center">
<script src="{{site.url}}/assets/images/1kg/CanvasMatrix.js" type="text/javascript"></script>
<canvas id="textureCanvas" style="display: none;" width="256" height="256">
    <img src="snapshot.png" alt="snapshot" width=1313/><br>
Your browser does not support the HTML5 canvas element.</canvas>

<!-- ****** points object 281 ****** -->
<script id="vshader281" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
void main(void) {
  vPosition = mvMatrix * vec4(aPos, 1.);
  gl_Position = prMatrix * vPosition;
  gl_PointSize = 5.;
  vCol = aCol;
}
</script>

<script id="fshader281" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  gl_FragColor = lighteffect;
}
</script>

<!-- ****** text object 283 ****** -->
<script id="vshader283" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
attribute vec2 aTexcoord;
varying vec2 vTexcoord;
uniform vec2 textScale;
attribute vec2 aOfs;
void main(void) {
  vCol = aCol;
  vTexcoord = aTexcoord;
  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
  pos = pos/pos.w;
  gl_Position = pos + vec4(aOfs*textScale, 0.,0.);
}
</script>

<script id="fshader283" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
varying vec2 vTexcoord;
uniform sampler2D uSampler;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
  if (textureColor.a < 0.1)
    discard;
  else
    gl_FragColor = textureColor;
}
</script>

<!-- ****** text object 284 ****** -->
<script id="vshader284" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
attribute vec2 aTexcoord;
varying vec2 vTexcoord;
uniform vec2 textScale;
attribute vec2 aOfs;
void main(void) {
  vCol = aCol;
  vTexcoord = aTexcoord;
  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
  pos = pos/pos.w;
  gl_Position = pos + vec4(aOfs*textScale, 0.,0.);
}
</script>

<script id="fshader284" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
varying vec2 vTexcoord;
uniform sampler2D uSampler;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
  if (textureColor.a < 0.1)
    discard;
  else
    gl_FragColor = textureColor;
}
</script>

<!-- ****** text object 285 ****** -->
<script id="vshader285" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
attribute vec2 aTexcoord;
varying vec2 vTexcoord;
uniform vec2 textScale;
attribute vec2 aOfs;
void main(void) {
  vCol = aCol;
  vTexcoord = aTexcoord;
  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
  pos = pos/pos.w;
  gl_Position = pos + vec4(aOfs*textScale, 0.,0.);
}
</script>

<script id="fshader285" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
varying vec2 vTexcoord;
uniform sampler2D uSampler;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
  if (textureColor.a < 0.1)
    discard;
  else
    gl_FragColor = textureColor;
}
</script>

<!-- ****** points object 286 ****** -->
<script id="vshader286" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
void main(void) {
  vPosition = mvMatrix * vec4(aPos, 1.);
  gl_Position = prMatrix * vPosition;
  gl_PointSize = 5.;
  vCol = aCol;
}
</script>

<script id="fshader286" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  gl_FragColor = lighteffect;
}
</script>

<!-- ****** points object 287 ****** -->
<script id="vshader287" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
void main(void) {
  vPosition = mvMatrix * vec4(aPos, 1.);
  gl_Position = prMatrix * vPosition;
  gl_PointSize = 5.;
  vCol = aCol;
}
</script>

<script id="fshader287" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  gl_FragColor = lighteffect;
}
</script>

<!-- ****** points object 288 ****** -->
<script id="vshader288" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
void main(void) {
  vPosition = mvMatrix * vec4(aPos, 1.);
  gl_Position = prMatrix * vPosition;
  gl_PointSize = 5.;
  vCol = aCol;
}
</script>

<script id="fshader288" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  gl_FragColor = lighteffect;
}
</script>

<!-- ****** lines object 289 ****** -->
<script id="vshader289" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
void main(void) {
  vPosition = mvMatrix * vec4(aPos, 1.);
  gl_Position = prMatrix * vPosition;
  vCol = aCol;
}
</script>

<script id="fshader289" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  gl_FragColor = lighteffect;
}
</script>

<!-- ****** text object 290 ****** -->
<script id="vshader290" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
attribute vec2 aTexcoord;
varying vec2 vTexcoord;
uniform vec2 textScale;
attribute vec2 aOfs;
void main(void) {
  vCol = aCol;
  vTexcoord = aTexcoord;
  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
  pos = pos/pos.w;
  gl_Position = pos + vec4(aOfs*textScale, 0.,0.);
}
</script>

<script id="fshader290" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
varying vec2 vTexcoord;
uniform sampler2D uSampler;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
  if (textureColor.a < 0.1)
    discard;
  else
    gl_FragColor = textureColor;
}
</script>

<!-- ****** lines object 291 ****** -->
<script id="vshader291" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
void main(void) {
  vPosition = mvMatrix * vec4(aPos, 1.);
  gl_Position = prMatrix * vPosition;
  vCol = aCol;
}
</script>

<script id="fshader291" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  gl_FragColor = lighteffect;
}
</script>

<!-- ****** text object 292 ****** -->
<script id="vshader292" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
attribute vec2 aTexcoord;
varying vec2 vTexcoord;
uniform vec2 textScale;
attribute vec2 aOfs;
void main(void) {
  vCol = aCol;
  vTexcoord = aTexcoord;
  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
  pos = pos/pos.w;
  gl_Position = pos + vec4(aOfs*textScale, 0.,0.);
}
</script>

<script id="fshader292" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
varying vec2 vTexcoord;
uniform sampler2D uSampler;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
  if (textureColor.a < 0.1)
    discard;
  else
    gl_FragColor = textureColor;
}
</script>

<!-- ****** lines object 293 ****** -->
<script id="vshader293" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
void main(void) {
  vPosition = mvMatrix * vec4(aPos, 1.);
  gl_Position = prMatrix * vPosition;
  vCol = aCol;
}
</script>

<script id="fshader293" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  gl_FragColor = lighteffect;
}
</script>

<!-- ****** text object 294 ****** -->
<script id="vshader294" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
attribute vec2 aTexcoord;
varying vec2 vTexcoord;
uniform vec2 textScale;
attribute vec2 aOfs;
void main(void) {
  vCol = aCol;
  vTexcoord = aTexcoord;
  vec4 pos = prMatrix * mvMatrix * vec4(aPos, 1.);
  pos = pos/pos.w;
  gl_Position = pos + vec4(aOfs*textScale, 0.,0.);
}
</script>

<script id="fshader294" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
varying vec2 vTexcoord;
uniform sampler2D uSampler;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  vec4 textureColor = lighteffect*texture2D(uSampler, vTexcoord);
  if (textureColor.a < 0.1)
    discard;
  else
    gl_FragColor = textureColor;
}
</script>

<!-- ****** lines object 295 ****** -->
<script id="vshader295" type="x-shader/x-vertex">
attribute vec3 aPos;
attribute vec4 aCol;
uniform mat4 mvMatrix;
uniform mat4 prMatrix;
varying vec4 vCol;
varying vec4 vPosition;
void main(void) {
  vPosition = mvMatrix * vec4(aPos, 1.);
  gl_Position = prMatrix * vPosition;
  vCol = aCol;
}
</script>

<script id="fshader295" type="x-shader/x-fragment">
#ifdef GL_ES
precision highp float;
#endif
varying vec4 vCol; // carries alpha
varying vec4 vPosition;
void main(void) {
  vec4 colDiff = vCol;
  vec4 lighteffect = colDiff;
  gl_FragColor = lighteffect;
}
</script>


<script type="text/javascript">

var min = Math.min;
var max = Math.max;
var sqrt = Math.sqrt;
var sin = Math.sin;
var acos = Math.acos;
var tan = Math.tan;
var SQRT2 = Math.SQRT2;
var PI = Math.PI;
var log = Math.log;
var exp = Math.exp;

var rglClass = function() {
  this.zoom = new Array();
  this.FOV  = new Array();
  this.userMatrix = new CanvasMatrix4();
  this.viewport = new Array();
  this.listeners = new Array();
  this.clipplanes = new Array();
  this.opaque = new Array();
  this.transparent = new Array();
  this.subscenes = new Array();

  this.flags = new Array();
  this.prog = new Array();
  this.ofsLoc = new Array();
  this.origLoc = new Array();
  this.sizeLoc = new Array();
  this.usermatLoc = new Array();
  this.vClipplane = new Array();
  this.texture = new Array();
  this.texLoc = new Array();
  this.sampler = new Array();
  this.origsize = new Array();
  this.values = new Array();
  this.offsets = new Array();
  this.normLoc = new Array();
  this.clipLoc = new Array();
  this.centers = new Array();
  this.f = new Array();
  this.buf = new Array();
  this.ibuf = new Array();
  this.mvMatLoc = new Array();
  this.prMatLoc = new Array();
  this.textScaleLoc = new Array();
  this.normMatLoc = new Array();
  this.IMVClip = new Array();

  this.drawFns = new Array();
  this.clipFns = new Array();

  this.prMatrix = new CanvasMatrix4();
  this.mvMatrix = new CanvasMatrix4();
  this.vp = null;
  this.prmvMatrix = null;
  this.origs = null;

  this.gl = null;
};

(function() {
  this.getShader = function( gl, id ){
    var shaderScript = document.getElementById ( id );
    var str = "";
    var k = shaderScript.firstChild;
    while ( k ){
      if ( k.nodeType == 3 ) str += k.textContent;
      k = k.nextSibling;
    }
    var shader;
    if ( shaderScript.type == "x-shader/x-fragment" )
      shader = gl.createShader ( gl.FRAGMENT_SHADER );
    else if ( shaderScript.type == "x-shader/x-vertex" )
      shader = gl.createShader(gl.VERTEX_SHADER);
    else return null;
    gl.shaderSource(shader, str);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) == 0)
      alert(gl.getShaderInfoLog(shader));
    return shader;
  }
  this.multMV = function(M, v) {
     return [M.m11*v[0] + M.m12*v[1] + M.m13*v[2] + M.m14*v[3],
         M.m21*v[0] + M.m22*v[1] + M.m23*v[2] + M.m24*v[3],
         M.m31*v[0] + M.m32*v[1] + M.m33*v[2] + M.m34*v[3],
         M.m41*v[0] + M.m42*v[1] + M.m43*v[2] + M.m44*v[3]];
  }
  this.f_is_lit = 1;
  this.f_is_smooth = 2;
  this.f_has_texture = 4;
  this.f_is_indexed = 8;
  this.f_depth_sort = 16;
  this.f_fixed_quads = 32;
  this.f_is_transparent = 64;
  this.f_is_lines = 128;
  this.f_sprites_3d = 256;
  this.f_sprite_3d = 512;
  this.f_is_subscene = 1024;
  this.f_is_clipplanes = 2048;
  this.f_reuse = 4096;
  this.whichList = function(id) {
    if (this.flags[id] & this.f_is_subscene)
      return "subscenes";
    else if (this.flags[id] & this.f_is_clipplanes)
      return "clipplanes";
    else if (this.flags[id] & this.f_is_transparent)
      return "transparent";
    else
      return "opaque";
      }
  this.inSubscene = function(id, subscene) {
    var thelist = this.whichList(id);
    return this[thelist][subscene].indexOf(id) > -1;
  }
      this.addToSubscene = function(id, subscene) {
        var thelist = this.whichList(id);
    if (this[thelist][subscene].indexOf(id) == -1)
      this[thelist][subscene].push(id);
  }
  this.delFromSubscene = function(id, subscene) {
    var thelist = this.whichList(id);
    var i = this[thelist][subscene].indexOf(id);
    if (i > -1)
      this[thelist][subscene].splice(i, 1);
  }
  this.setSubsceneEntries = function(ids, subscene) {
    this.subscenes[subscene] = [];
    this.clipplanes[subscene] = [];
    this.transparent[subscene] = [];
    this.opaque[subscene] = [];
    for (var i = 0; i < ids.length; i++)
      this.addToSubscene(ids[i], subscene);
  }
  this.getSubsceneEntries = function(subscene) {
    return(this.subscenes[subscene].concat(this.clipplanes[subscene]).
               concat(this.transparent[subscene]).concat(this.opaque[subscene]));
  }
}).call(rglClass.prototype);


var rgl = new rglClass();
rgl.start = function() {
   var debug = function(msg) {
     document.getElementById("debug").innerHTML = msg;
   }
   debug("");

   var canvas = document.getElementById("canvas");
   if (!window.WebGLRenderingContext){
     debug("<img src=\"snapshot.png\" alt=\"snapshot\" width=1313/><br> Your browser does not support WebGL. See <a href=\"http://get.webgl.org\">http://get.webgl.org</a>");
     return;
   }
   try {
     // Try to grab the standard context. If it fails, fallback to experimental.
     this.gl = canvas.getContext("webgl")
       || canvas.getContext("experimental-webgl");
   }
   catch(e) {}
   if ( !this.gl ) {
     debug("<img src=\"snapshot.png\" alt=\"snapshot\" width=1313/><br> Your browser appears to support WebGL, but did not create a WebGL context.  See <a href=\"http://get.webgl.org\">http://get.webgl.org</a>");
     return;
   }
   var gl = this.gl;
   var width = 1313;  var height = 941;
   canvas.width = width;   canvas.height = height;
   var normMatrix = new CanvasMatrix4();
   var saveMat = new Object();
   var distance;
   var posLoc = 0;
   var colLoc = 1;

   var activeSubscene = 275;
   this.flags[275] = 1192;
   this.zoom[275] = 1;
   this.FOV[275] = 30;
   this.viewport[275] = [0, 0, 1312, 940];
   this.userMatrix[275] = new CanvasMatrix4();
   this.userMatrix[275].load([
    0.3526027, -0.1731371, 0.9196167, 0,
    0.9269994, 0.1988837, -0.3179893, 0,
    -0.1278411, 0.964608, 0.2306249, 0,
    0, 0, 0, 1
    ]);
   this.clipplanes[275] = [];
   this.opaque[275] = [281,283,284,285,286,287,288,289,290,291,292,293,294,295];
   this.transparent[275] = [];
   this.subscenes[275] = [];

   function getPowerOfTwo(value) {
     var pow = 1;
     while(pow<value) {
       pow *= 2;
     }
     return pow;
   }

   function handleLoadedTexture(texture, textureCanvas) {
     gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

     gl.bindTexture(gl.TEXTURE_2D, texture);
     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
     gl.generateMipmap(gl.TEXTURE_2D);

     gl.bindTexture(gl.TEXTURE_2D, null);
   }

   function loadImageToTexture(filename, texture) {   
     var canvas = document.getElementById("textureCanvas");
     var ctx = canvas.getContext("2d");
     var image = new Image();

     image.onload = function() {
       var w = image.width;
       var h = image.height;
       var canvasX = getPowerOfTwo(w);
       var canvasY = getPowerOfTwo(h);
       canvas.width = canvasX;
       canvas.height = canvasY;
       ctx.imageSmoothingEnabled = true;
       ctx.drawImage(image, 0, 0, canvasX, canvasY);
       handleLoadedTexture(texture, canvas);
       rgl.drawScene();
     }
     image.src = filename;
   }  	   

   function drawTextToCanvas(text, cex) {
     var canvasX, canvasY;
     var textX, textY;

     var textHeight = 20 * cex;
     var textColour = "white";
     var fontFamily = "Arial";

     var backgroundColour = "rgba(0,0,0,0)";

     var canvas = document.getElementById("textureCanvas");
     var ctx = canvas.getContext("2d");

     ctx.font = textHeight+"px "+fontFamily;

     canvasX = 1;
     var widths = [];
     for (var i = 0; i < text.length; i++)  {
       widths[i] = ctx.measureText(text[i]).width;
       canvasX = (widths[i] > canvasX) ? widths[i] : canvasX;
     }	  
     canvasX = getPowerOfTwo(canvasX);

     var offset = 2*textHeight; // offset to first baseline
     var skip = 2*textHeight;   // skip between baselines	  
     canvasY = getPowerOfTwo(offset + text.length*skip);

     canvas.width = canvasX;
     canvas.height = canvasY;

     ctx.fillStyle = backgroundColour;
     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

     ctx.fillStyle = textColour;
     ctx.textAlign = "left";

     ctx.textBaseline = "alphabetic";
     ctx.font = textHeight+"px "+fontFamily;

     for(var i = 0; i < text.length; i++) {
       textY = i*skip + offset;
       ctx.fillText(text[i], 0,  textY);
     }
     return {canvasX:canvasX, canvasY:canvasY,
             widths:widths, textHeight:textHeight,
             offset:offset, skip:skip};
   }


   // ****** points object 281 ******
   this.flags[281] = 0;
   this.prog[281]  = gl.createProgram();
   gl.attachShader(this.prog[281], this.getShader( gl, "vshader281" ));
   gl.attachShader(this.prog[281], this.getShader( gl, "fshader281" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[281], 0, "aPos");
   gl.bindAttribLocation(this.prog[281], 1, "aCol");
   gl.linkProgram(this.prog[281]);
   this.offsets[281]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:-1, tofs:-1, stride:3};
   var v=new Float32Array([
    0.0236, 0.0286, -0.0143,
    0.0224, 0.0252, -0.0132,
    0.0231, 0.0297, -0.0103,
    0.0227, 0.026, -0.0149,
    0.023, 0.0282, -0.0097,
    0.023, 0.0292, -0.0096,
    0.0225, 0.0294, -0.0145,
    0.0226, 0.0283, -0.0147,
    0.0231, 0.0286, -0.0138,
    0.0228, 0.0293, -0.0137,
    0.0235, 0.0269, -0.0123,
    0.0235, 0.0275, -0.0159,
    0.0229, 0.0276, -0.0081,
    0.0233, 0.0284, -0.0112,
    0.0231, 0.028, -0.0152,
    0.0226, 0.0276, -0.0119,
    0.0233, 0.0287, -0.012,
    0.0232, 0.0275, -0.009,
    0.0235, 0.0263, -0.0114,
    0.0233, 0.0297, -0.0137,
    0.0235, 0.0309, -0.0087,
    0.0235, 0.0296, -0.0216,
    0.0223, 0.0272, -0.0143,
    0.023, 0.029, -0.0107,
    0.0239, 0.0297, -0.0135,
    0.0221, 0.0298, -0.0098,
    0.0233, 0.0286, -0.0148,
    0.0229, 0.0293, -0.0158,
    0.0234, 0.0301, -0.0214,
    0.0232, 0.0299, -0.0064,
    0.0224, 0.0298, -0.0202,
    0.023, 0.0269, -0.0123,
    0.0225, 0.0289, -0.0139,
    0.0228, 0.0289, -0.0058,
    0.0229, 0.0294, -0.0129,
    0.0232, 0.0284, -0.0061,
    0.0238, 0.0298, -0.0111,
    0.0227, 0.031, -0.0167,
    0.0223, 0.0287, -0.0041,
    0.0239, 0.0287, -0.0118,
    0.0241, 0.0277, -0.0076,
    0.0223, 0.0275, -0.0117,
    0.0229, 0.0315, -0.0139,
    0.0235, 0.0317, -0.0079,
    0.0233, 0.0296, -0.0147,
    0.0227, 0.0292, -0.0147,
    0.0224, 0.0279, -0.0074,
    0.0227, 0.0265, -0.0163,
    0.0228, 0.0304, -0.0113,
    0.0233, 0.0305, -0.0142,
    0.0233, 0.0278, -0.0091,
    0.0233, 0.031, -0.0156,
    0.0223, 0.0265, -0.009,
    0.0227, 0.0301, -0.0094,
    0.0223, 0.0288, -0.011,
    0.0231, 0.0234, -0.0046,
    0.0229, 0.0236, -0.0058,
    0.0233, 0.0238, -0.0093,
    0.023, 0.0209, -0.0146,
    0.0229, 0.0197, -0.0057,
    0.0232, 0.0256, -0.0076,
    0.0227, 0.0224, -0.0126,
    0.0224, 0.0247, -0.0091,
    0.0226, 0.0218, -0.0099,
    0.0228, 0.0226, -0.002,
    0.0228, 0.0231, -0.0112,
    0.0227, 0.0249, -0.0041,
    0.0221, 0.0207, -0.0102,
    0.0232, 0.0218, -0.0071,
    0.0227, 0.022, -0.008,
    0.0228, 0.0257, -0.0088,
    0.023, 0.0289, -0.0104,
    0.0226, 0.0289, -0.0127,
    0.0225, 0.0298, -0.0157,
    0.0236, 0.0297, -0.0108,
    0.0223, 0.0307, -0.0223,
    0.0226, 0.0301, -0.0108,
    0.0231, 0.0284, -0.0087,
    0.0228, 0.0294, -0.0169,
    0.0224, 0.0322, -0.0126,
    0.0223, 0.0277, -0.0148,
    0.0231, 0.0291, -0.0098,
    0.0233, 0.029, -0.009,
    0.0233, 0.0285, -0.0126,
    0.0223, 0.0294, -0.0061,
    0.0227, 0.0283, -0.017,
    0.0226, 0.0299, -0.0094,
    0.0231, 0.03, -0.0166,
    0.0231, 0.0308, -0.0126,
    0.0225, 0.0276, -0.0116,
    0.0233, 0.029, -0.0105,
    0.0225, 0.0284, -0.0098,
    0.0228, 0.0277, -0.0107,
    0.0228, 0.0286, -0.0165,
    0.0238, 0.0286, -0.014,
    0.022, 0.03, -0.0066,
    0.0235, 0.0301, -0.0136,
    0.0236, 0.0317, -0.0185,
    0.0224, 0.0281, -0.0126,
    0.0233, 0.0294, -0.0125,
    0.0235, 0.028, -0.015,
    0.0227, 0.0277, -0.0053,
    0.0215, 0.0268, -0.0191,
    0.0239, 0.0293, -0.0155,
    0.0229, 0.0242, -0.0166,
    0.0219, 0.0246, -0.0124,
    0.0231, 0.025, -0.0059,
    0.0231, 0.0227, -0.0071,
    0.0231, 0.0259, -0.0135,
    0.0222, 0.0207, -0.0052,
    0.0214, 0.0216, 0.0001,
    0.0233, 0.0267, -0.0061,
    0.0234, 0.0244, -0.0032,
    0.0229, 0.0241, -0.0109,
    0.0223, 0.0232, -0.0035,
    0.023, 0.0282, -0.006,
    0.0229, 0.0233, -0.0071,
    0.0228, 0.0249, -0.0085,
    0.0227, 0.0246, 0.002,
    0.0224, 0.0235, -0.0063,
    0.0239, 0.0244, -0.0129,
    0.0225, 0.0223, -0.0139,
    0.023, 0.0247, -0.0086,
    0.023, 0.0248, -0.0079,
    0.0233, 0.0226, -0.0102,
    0.023, 0.0283, -0.0004,
    0.0227, 0.0254, -0.0079,
    0.0229, 0.0223, -0.0013,
    0.0227, 0.0223, -0.0074,
    0.0233, 0.0234, -0.0047,
    0.0226, 0.0248, -0.0126,
    0.0225, 0.0228, -0.0058,
    0.022, 0.0214, -0.0084,
    0.0227, 0.0244, -0.0066,
    0.0228, 0.0209, -0.0088,
    0.0241, 0.0208, -0.0139,
    0.0229, 0.0227, -0.0095,
    0.0217, 0.0204, -0.016,
    0.0235, 0.0247, -0.0129,
    0.0228, 0.0243, -0.0105,
    0.0229, 0.0237, -0.0042,
    0.0228, 0.026, -0.0008,
    0.0224, 0.0236, -0.0162,
    0.0231, 0.026, -0.0045,
    0.0229, 0.025, -0.0117,
    0.0226, 0.0244, -0.0096,
    0.0227, 0.023, -0.0126,
    0.0229, 0.0239, -0.0118,
    0.0227, 0.0232, -0.003,
    0.0211, 0.0236, -0.0081,
    0.0225, 0.0228, -0.0115,
    0.0228, 0.0228, -0.0132,
    0.0229, 0.0258, -0.0131,
    0.0229, 0.0245, -0.0057,
    0.024, 0.0247, 0.0037,
    0.0228, 0.0217, -0.0095,
    0.023, 0.0263, -0.01,
    0.0221, 0.0238, -0.0122,
    0.023, 0.0256, -0.0088,
    0.0228, 0.0229, -0.004,
    0.0229, 0.0234, -0.0106,
    0.0227, 0.0239, -0.009,
    0.0222, 0.0194, -0.0045,
    0.0233, 0.024, -0.0006,
    0.0217, 0.0233, -0.0125,
    0.0224, 0.0215, -0.008,
    0.0224, 0.0227, -0.0138,
    0.0228, 0.0226, -0.0039,
    0.0227, 0.0235, -0.0063,
    0.023, 0.0239, -0.0108,
    0.023, 0.0218, -0.0022,
    0.0235, 0.0238, -0.0085,
    0.0231, 0.0227, -0.0137,
    0.0227, 0.0259, -0.0109,
    0.0232, 0.0241, -0.0081,
    0.0228, 0.0204, -0.0109,
    0.0232, 0.0235, -0.0141,
    0.0238, 0.0256, -0.0113,
    0.0218, 0.0224, -0.0083,
    0.0229, 0.0233, -0.0111,
    0.0237, 0.0242, -0.0099,
    0.0227, 0.0298, -0.0151,
    0.0234, 0.0312, -0.0173,
    0.0225, 0.0319, -0.0131,
    0.0224, 0.0301, -0.0205,
    0.0227, 0.0305, -0.0155,
    0.023, 0.0302, -0.0116,
    0.0227, 0.0301, -0.0089,
    0.0207, 0.0278, -0.0163,
    0.0201, 0.0294, -0.009,
    0.0205, 0.0279, -0.0189,
    0.0207, 0.0286, -0.0194,
    0.0204, 0.0299, -0.0149,
    0.0197, 0.0303, -0.009,
    0.0211, 0.0303, -0.0128,
    0.0206, 0.0289, -0.0118,
    0.0238, 0.0306, -0.0181,
    0.0225, 0.0298, -0.0159,
    0.0234, 0.0281, -0.0238,
    0.0228, 0.0299, -0.0124,
    0.0226, 0.0285, -0.0106,
    0.0222, 0.0297, -0.0188,
    0.0221, 0.0298, -0.0183,
    0.0235, 0.0306, -0.0106,
    0.0233, 0.0291, -0.0144,
    0.0234, 0.0289, -0.0101,
    0.023, 0.0288, -0.0129,
    0.0231, 0.0309, -0.0097,
    0.0233, 0.0321, -0.0141,
    0.0225, 0.0289, -0.0142,
    0.0232, 0.0295, -0.0076,
    0.0223, 0.0299, -0.0118,
    0.0231, 0.0299, -0.0148,
    0.0225, 0.028, -0.0141,
    0.0233, 0.0296, -0.0158,
    0.0233, 0.03, -0.0085,
    0.0224, 0.0288, -0.0077,
    0.0233, 0.0279, -0.0112,
    0.0223, 0.0283, -0.0127,
    0.0231, 0.0284, -0.0149,
    0.0218, 0.0299, -0.0193,
    0.0225, 0.0297, -0.019,
    0.0228, 0.03, -0.0128,
    0.022, 0.0295, -0.0148,
    0.0226, 0.0287, -0.0096,
    0.0227, 0.0302, -0.0135,
    0.0223, 0.0271, -0.0048,
    0.0227, 0.0284, -0.0085,
    0.0226, 0.0274, -0.0117,
    0.0232, 0.0312, -0.0173,
    0.0229, 0.0298, -0.0176,
    0.0231, 0.0286, -0.005,
    0.0219, 0.0282, -0.0154,
    0.023, 0.0297, -0.0079,
    0.0224, 0.028, -0.0135,
    0.0236, 0.0275, -0.0156,
    0.0231, 0.0306, -0.0083,
    0.0221, 0.0298, -0.0068,
    0.0229, 0.0314, -0.0128,
    0.0226, 0.0298, -0.0105,
    0.0225, 0.027, -0.0094,
    0.0227, 0.0312, -0.0065,
    0.0221, 0.0274, -0.0157,
    0.0225, 0.0257, -0.0164,
    0.0233, 0.0292, -0.0176,
    0.0223, 0.0302, -0.0152,
    0.0229, 0.0299, -0.0108,
    0.0228, 0.0297, -0.0116,
    0.0233, 0.0304, -0.0105,
    0.0229, 0.0284, -0.0061,
    0.0226, 0.0302, -0.0113,
    0.0229, 0.0297, -0.0126,
    0.0236, 0.0284, -0.0091,
    0.0224, 0.0292, -0.0041,
    0.0226, 0.0298, -0.0136,
    0.0223, 0.0285, -0.0098,
    0.0234, 0.0281, -0.015,
    0.0223, 0.0295, -0.01,
    0.0231, 0.0294, -0.0127,
    0.0221, 0.0292, -0.022,
    0.0237, 0.03, -0.0118,
    0.0226, 0.0282, -0.0181,
    0.022, 0.0311, -0.0128,
    0.0227, 0.0284, -0.0146,
    0.0228, 0.0283, -0.0098,
    0.0232, 0.0309, -0.0137,
    0.0239, 0.0316, -0.0139,
    0.0241, 0.0298, -0.0149,
    0.0231, 0.0304, -0.0184,
    0.0225, 0.0301, -0.0104,
    0.0229, 0.0312, -0.0097,
    0.0228, 0.03, -0.0125,
    0.023, 0.0277, -0.0141,
    0.0226, 0.0279, -0.0088,
    0.0228, 0.0307, -0.0149,
    0.0233, 0.028, -0.0196,
    0.022, 0.0272, -0.0146,
    0.023, 0.0306, -0.0058,
    0.022, 0.0282, -0.0157,
    0.0223, 0.031, -0.0102,
    0.0232, 0.0296, -0.0101,
    0.0215, 0.0277, -0.0182,
    0.021, 0.0289, -0.0092,
    0.0212, 0.0267, -0.0149,
    0.0214, 0.0301, -0.0146,
    0.0213, 0.0283, -0.0152,
    0.0215, 0.0296, -0.022,
    0.022, 0.0279, -0.0183,
    0.021, 0.0298, -0.0129,
    0.0213, 0.0286, -0.015,
    0.0212, 0.0288, -0.0126,
    0.0206, 0.0288, -0.016,
    0.0212, 0.0293, -0.0154,
    0.0215, 0.0303, -0.0148,
    0.0215, 0.0303, -0.009,
    0.0213, 0.0302, -0.0189,
    0.0207, 0.0275, -0.0149,
    0.0209, 0.0283, -0.0211,
    0.0212, 0.0306, -0.0221,
    0.0212, 0.026, -0.0133,
    0.0219, 0.0302, -0.0158,
    0.021, 0.0304, -0.0196,
    0.0214, 0.0254, -0.0128,
    0.0211, 0.0291, -0.0189,
    0.0215, 0.0288, -0.0103,
    0.0222, 0.0289, -0.0134,
    0.0211, 0.0288, -0.0148,
    0.0213, 0.0278, -0.0164,
    0.0221, 0.029, -0.0114,
    0.0209, 0.0314, -0.0205,
    0.0213, 0.029, -0.0133,
    0.0215, 0.0299, -0.0122,
    0.0211, 0.031, -0.0148,
    0.0202, 0.0307, -0.0087,
    0.0215, 0.0293, -0.0173,
    0.0223, 0.0306, -0.0186,
    0.0211, 0.0284, -0.0228,
    0.0217, 0.0285, -0.0165,
    0.0217, 0.029, -0.0139,
    0.0209, 0.0271, -0.0141,
    0.0214, 0.0291, -0.0138,
    0.0219, 0.0282, -0.019,
    0.0218, 0.0282, -0.0123,
    0.0218, 0.0293, -0.0143,
    0.0217, 0.032, -0.0179,
    0.0218, 0.0301, -0.0197,
    0.0219, 0.0293, -0.0176,
    0.0208, 0.0289, -0.0179,
    0.0211, 0.0286, -0.0163,
    0.021, 0.0316, -0.0238,
    0.0212, 0.0282, -0.0137,
    0.0199, 0.0289, -0.0156,
    0.021, 0.0288, -0.0185,
    0.0208, 0.0278, -0.0175,
    0.0218, 0.029, -0.018,
    0.0211, 0.0308, -0.0206,
    0.0209, 0.0287, -0.0194,
    0.0209, 0.0287, -0.0138,
    0.0207, 0.0285, -0.0166,
    0.0214, 0.0301, -0.009,
    0.0211, 0.0283, -0.0215,
    0.0215, 0.0302, -0.0148,
    0.0209, 0.0287, -0.0169,
    0.0213, 0.0284, -0.0177,
    0.0208, 0.0292, -0.0199,
    0.0212, 0.0302, -0.0116,
    0.0223, 0.0306, -0.0148,
    0.0215, 0.0309, -0.0179,
    0.0217, 0.0303, -0.0184,
    0.0217, 0.0285, -0.0166,
    0.0211, 0.029, -0.0188,
    0.0213, 0.0299, -0.0135,
    0.0215, 0.0282, -0.0224,
    0.0215, 0.0276, -0.0182,
    0.0211, 0.0294, -0.021,
    0.021, 0.0296, -0.0194,
    0.022, 0.0285, -0.0199,
    0.0212, 0.03, -0.017,
    0.022, 0.03, -0.0204,
    0.0217, 0.0287, -0.0149,
    0.0211, 0.029, -0.022,
    0.0218, 0.0319, -0.0164,
    0.0215, 0.0286, -0.018,
    0.0218, 0.0305, -0.0249,
    0.0209, 0.0282, -0.0117,
    0.0215, 0.0308, -0.0164,
    0.0213, 0.0302, -0.0082,
    0.0216, 0.0287, -0.0108,
    0.0212, 0.0298, -0.0167,
    0.0208, 0.0297, -0.011,
    0.0214, 0.0268, -0.0124,
    0.0212, 0.0292, -0.0171,
    0.0217, 0.0281, -0.0216,
    0.0206, 0.0296, -0.015,
    0.0213, 0.028, -0.013,
    0.0214, 0.0289, -0.0205,
    0.0216, 0.0298, -0.0162,
    0.0214, 0.0275, -0.0223,
    0.0209, 0.0277, -0.0213
   ]);
   this.values[281] = v;
   this.buf[281] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[281]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[281], gl.STATIC_DRAW);
   this.mvMatLoc[281] = gl.getUniformLocation(this.prog[281],"mvMatrix");
   this.prMatLoc[281] = gl.getUniformLocation(this.prog[281],"prMatrix");


   // ****** text object 283 ******
   this.flags[283] = 40;
   this.prog[283]  = gl.createProgram();
   gl.attachShader(this.prog[283], this.getShader( gl, "vshader283" ));
   gl.attachShader(this.prog[283], this.getShader( gl, "fshader283" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[283], 0, "aPos");
   gl.bindAttribLocation(this.prog[283], 1, "aCol");
   gl.linkProgram(this.prog[283]);
   var texts = [
    "PC_aim1"
   ];
   var texinfo = drawTextToCanvas(texts, 1);
   this.ofsLoc[283] = gl.getAttribLocation(this.prog[283], "aOfs");
   this.texture[283] = gl.createTexture();
   this.texLoc[283] = gl.getAttribLocation(this.prog[283], "aTexcoord");
   this.sampler[283] = gl.getUniformLocation(this.prog[283],"uSampler");
   handleLoadedTexture(this.texture[283], document.getElementById("textureCanvas"));
   this.offsets[283]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:5, tofs:3, stride:7};
   var v=new Float32Array([
    0.0219, 0.0172304, -0.0297477, 0, -0.5, 0.5, 0.5,
    0.0219, 0.0172304, -0.0297477, 1, -0.5, 0.5, 0.5,
    0.0219, 0.0172304, -0.0297477, 1, 1.5, 0.5, 0.5,
    0.0219, 0.0172304, -0.0297477, 0, 1.5, 0.5, 0.5
   ]);
   for (var i=0; i<1; i++)
     for (var j=0; j<4; j++) {
         var ind = this.offsets[283]["stride"]*(4*i + j) + this.offsets[283]["tofs"];
         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i];
         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight;
         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip
           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
     }
   this.values[283] = v;
   var f=new Uint16Array([
    0, 1, 2, 0, 2, 3
   ]);
   this.buf[283] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[283]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[283], gl.STATIC_DRAW);
   this.ibuf[283] = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[283]);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
   this.mvMatLoc[283] = gl.getUniformLocation(this.prog[283],"mvMatrix");
   this.prMatLoc[283] = gl.getUniformLocation(this.prog[283],"prMatrix");
   this.textScaleLoc[283] = gl.getUniformLocation(this.prog[283],"textScale");


   // ****** text object 284 ******
   this.flags[284] = 40;
   this.prog[284]  = gl.createProgram();
   gl.attachShader(this.prog[284], this.getShader( gl, "vshader284" ));
   gl.attachShader(this.prog[284], this.getShader( gl, "fshader284" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[284], 0, "aPos");
   gl.bindAttribLocation(this.prog[284], 1, "aCol");
   gl.linkProgram(this.prog[284]);
   var texts = [
    "PC_aim2"
   ];
   var texinfo = drawTextToCanvas(texts, 1);
   this.ofsLoc[284] = gl.getAttribLocation(this.prog[284], "aOfs");
   this.texture[284] = gl.createTexture();
   this.texLoc[284] = gl.getAttribLocation(this.prog[284], "aTexcoord");
   this.sampler[284] = gl.getUniformLocation(this.prog[284],"uSampler");
   handleLoadedTexture(this.texture[284], document.getElementById("textureCanvas"));
   this.offsets[284]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:5, tofs:3, stride:7};
   var v=new Float32Array([
    0.0189542, 0.0258, -0.0297477, 0, -0.5, 0.5, 0.5,
    0.0189542, 0.0258, -0.0297477, 1, -0.5, 0.5, 0.5,
    0.0189542, 0.0258, -0.0297477, 1, 1.5, 0.5, 0.5,
    0.0189542, 0.0258, -0.0297477, 0, 1.5, 0.5, 0.5
   ]);
   for (var i=0; i<1; i++)
     for (var j=0; j<4; j++) {
         var ind = this.offsets[284]["stride"]*(4*i + j) + this.offsets[284]["tofs"];
         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i];
         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight;
         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip
           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
     }
   this.values[284] = v;
   var f=new Uint16Array([
    0, 1, 2, 0, 2, 3
   ]);
   this.buf[284] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[284]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[284], gl.STATIC_DRAW);
   this.ibuf[284] = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[284]);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
   this.mvMatLoc[284] = gl.getUniformLocation(this.prog[284],"mvMatrix");
   this.prMatLoc[284] = gl.getUniformLocation(this.prog[284],"prMatrix");
   this.textScaleLoc[284] = gl.getUniformLocation(this.prog[284],"textScale");


   // ****** text object 285 ******
   this.flags[285] = 40;
   this.prog[285]  = gl.createProgram();
   gl.attachShader(this.prog[285], this.getShader( gl, "vshader285" ));
   gl.attachShader(this.prog[285], this.getShader( gl, "fshader285" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[285], 0, "aPos");
   gl.bindAttribLocation(this.prog[285], 1, "aCol");
   gl.linkProgram(this.prog[285]);
   var texts = [
    "PC_aim3"
   ];
   var texinfo = drawTextToCanvas(texts, 1);
   this.ofsLoc[285] = gl.getAttribLocation(this.prog[285], "aOfs");
   this.texture[285] = gl.createTexture();
   this.texLoc[285] = gl.getAttribLocation(this.prog[285], "aTexcoord");
   this.sampler[285] = gl.getUniformLocation(this.prog[285],"uSampler");
   handleLoadedTexture(this.texture[285], document.getElementById("textureCanvas"));
   this.offsets[285]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:5, tofs:3, stride:7};
   var v=new Float32Array([
    0.0189542, 0.0172304, -0.0106, 0, -0.5, 0.5, 0.5,
    0.0189542, 0.0172304, -0.0106, 1, -0.5, 0.5, 0.5,
    0.0189542, 0.0172304, -0.0106, 1, 1.5, 0.5, 0.5,
    0.0189542, 0.0172304, -0.0106, 0, 1.5, 0.5, 0.5
   ]);
   for (var i=0; i<1; i++)
     for (var j=0; j<4; j++) {
         var ind = this.offsets[285]["stride"]*(4*i + j) + this.offsets[285]["tofs"];
         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i];
         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight;
         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip
           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
     }
   this.values[285] = v;
   var f=new Uint16Array([
    0, 1, 2, 0, 2, 3
   ]);
   this.buf[285] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[285]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[285], gl.STATIC_DRAW);
   this.ibuf[285] = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[285]);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
   this.mvMatLoc[285] = gl.getUniformLocation(this.prog[285],"mvMatrix");
   this.prMatLoc[285] = gl.getUniformLocation(this.prog[285],"prMatrix");
   this.textScaleLoc[285] = gl.getUniformLocation(this.prog[285],"textScale");


   // ****** points object 286 ******
   this.flags[286] = 0;
   this.prog[286]  = gl.createProgram();
   gl.attachShader(this.prog[286], this.getShader( gl, "vshader286" ));
   gl.attachShader(this.prog[286], this.getShader( gl, "fshader286" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[286], 0, "aPos");
   gl.bindAttribLocation(this.prog[286], 1, "aCol");
   gl.linkProgram(this.prog[286]);
   this.offsets[286]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:-1, tofs:-1, stride:3};
   var v=new Float32Array([
    0.0092, -0.0482, -0.0177,
    0.0091, -0.0483, -0.0174,
    0.0093, -0.0467, -0.0192,
    0.0081, -0.0467, -0.0216,
    0.0089, -0.0469, -0.0191,
    0.0096, -0.0484, -0.0215,
    0.009, -0.0482, -0.0254,
    0.0092, -0.0482, -0.0135,
    0.0096, -0.0469, -0.0179,
    0.0095, -0.0479, -0.0198,
    0.0093, -0.0488, -0.0144,
    0.0093, -0.0482, -0.0212,
    0.0087, -0.0495, -0.0212,
    0.0087, -0.0474, -0.0157,
    0.009, -0.0467, -0.0235,
    0.0092, -0.0476, -0.0105,
    0.0084, -0.0469, -0.0131,
    0.0088, -0.0457, -0.0212,
    0.0095, -0.0468, -0.0144,
    0.0083, -0.0501, -0.0171,
    0.0088, -0.0476, -0.018,
    0.0096, -0.0474, -0.018,
    0.0091, -0.0461, -0.0279,
    0.0094, -0.0468, -0.0143,
    0.0094, -0.0475, -0.024,
    0.0093, -0.0469, -0.0196,
    0.0095, -0.0487, -0.0201,
    0.0092, -0.0475, -0.0253,
    0.0088, -0.048, -0.0124,
    0.0098, -0.0489, -0.0189,
    0.0102, -0.0467, -0.0175,
    0.0094, -0.0479, -0.0202,
    0.0098, -0.0482, -0.0244,
    0.009, -0.0477, -0.0271,
    0.0095, -0.0473, -0.0161,
    0.0098, -0.0466, -0.021,
    0.0097, -0.0463, -0.0226,
    0.0093, -0.0481, -0.0094,
    0.0095, -0.0463, -0.0184,
    0.0097, -0.0473, -0.0237,
    0.0088, -0.0474, -0.0195,
    0.0095, -0.0482, -0.0178,
    0.0096, -0.0465, -0.028,
    0.0086, -0.0476, -0.0161,
    0.0094, -0.0484, -0.0187,
    0.0093, -0.0475, -0.0268,
    0.0094, -0.0477, -0.0192,
    0.0086, -0.0464, -0.0152,
    0.0092, -0.0476, -0.0219,
    0.0088, -0.0465, -0.0183,
    0.0089, -0.0499, -0.0183,
    0.0089, -0.0479, -0.0164,
    0.0097, -0.0476, -0.0134,
    0.0094, -0.0481, -0.0151,
    0.0086, -0.0468, -0.0149,
    0.0084, -0.0489, -0.0194,
    0.0087, -0.0468, -0.016,
    0.0091, -0.0479, -0.0211,
    0.0084, -0.0468, -0.0164,
    0.009, -0.047, -0.0221,
    0.009, -0.0468, -0.0214,
    0.0079, -0.0492, -0.0206,
    0.0089, -0.049, -0.0183,
    0.0086, -0.0498, -0.011,
    0.0089, -0.0487, -0.0149,
    0.01, -0.0472, -0.0076,
    0.0084, -0.0485, -0.0176,
    0.0094, -0.0448, -0.018,
    0.0097, -0.0484, -0.0192,
    0.0092, -0.0472, -0.0157,
    0.0089, -0.0469, -0.025,
    0.0096, -0.048, -0.0208,
    0.0087, -0.0484, -0.0139,
    0.0095, -0.0488, -0.0235,
    0.009, -0.0464, -0.0218,
    0.0103, -0.049, -0.0095,
    0.0085, -0.0464, -0.026,
    0.009, -0.0471, -0.0158,
    0.0083, -0.0473, -0.0244,
    0.009, -0.047, -0.021,
    0.0079, -0.0482, -0.0197,
    0.0086, -0.0493, -0.0188,
    0.0086, -0.0473, -0.0153,
    0.0096, -0.0454, -0.0164,
    0.0086, -0.0451, -0.0304,
    0.0093, -0.0466, -0.0119,
    0.0087, -0.0486, -0.0182,
    0.0089, -0.0443, -0.0161,
    0.0089, -0.0484, -0.0163,
    0.009, -0.0481, -0.0175,
    0.0084, -0.0471, -0.0146,
    0.0101, -0.047, -0.0258,
    0.0091, -0.048, -0.0128,
    0.0083, -0.0476, -0.0198,
    0.0087, -0.0461, -0.0153,
    0.0084, -0.0498, -0.0156,
    0.0085, -0.0499, -0.0114,
    0.0086, -0.047, -0.0218,
    0.0099, -0.0459, -0.0208,
    0.0096, -0.0453, -0.026,
    0.0095, -0.0469, -0.0129,
    0.0093, -0.0475, -0.0136,
    0.0098, -0.0464, -0.0092,
    0.0085, -0.0457, -0.0194,
    0.0092, -0.0477, -0.0121,
    0.0098, -0.0483, -0.0124,
    0.0094, -0.0464, -0.016,
    0.0102, -0.0455, -0.0146,
    0.0091, -0.0471, -0.0237,
    0.0098, -0.0456, -0.022,
    0.0095, -0.0474, -0.0129,
    0.0086, -0.0479, -0.011,
    0.0087, -0.0472, -0.0103,
    0.0088, -0.0457, -0.0185,
    0.0091, -0.0452, -0.0225,
    0.0091, -0.0469, -0.02,
    0.0095, -0.0463, -0.0086,
    0.0092, -0.0487, -0.0198,
    0.0096, -0.0464, -0.0183,
    0.0095, -0.0464, -0.0097,
    0.0082, -0.0484, -0.0209,
    0.0083, -0.0463, -0.0202,
    0.0099, -0.0458, -0.0115,
    0.0096, -0.0451, -0.0191,
    0.0091, -0.0478, -0.0124,
    0.0095, -0.0479, -0.0142,
    0.01, -0.0475, -0.0127,
    0.0093, -0.0467, -0.0242,
    0.009, -0.0488, -0.0181,
    0.0091, -0.0454, -0.0089,
    0.0095, -0.0456, -0.0062,
    0.0096, -0.0455, -0.0084,
    0.0097, -0.0467, -0.0091,
    0.009, -0.0465, -0.0207,
    0.0106, -0.047, -0.0121,
    0.0091, -0.048, -0.0159,
    0.0091, -0.0497, -0.0201,
    0.009, -0.0478, -0.0234,
    0.0096, -0.0494, -0.0086,
    0.0091, -0.046, -0.0194,
    0.0098, -0.0468, -0.0208,
    0.0094, -0.046, -0.0098,
    0.009, -0.047, -0.0107,
    0.0099, -0.0487, -0.011,
    0.0097, -0.0469, -0.0167,
    0.0086, -0.048, -0.0148,
    0.0089, -0.0489, -0.0172,
    0.0101, -0.0449, -0.0148,
    0.0095, -0.0462, -0.0153,
    0.0087, -0.048, -0.0152,
    0.0092, -0.0468, -0.0166,
    0.0095, -0.0464, -0.0069,
    0.0088, -0.0491, -0.0144,
    0.0101, -0.0476, -0.0163,
    0.0094, -0.0477, -0.0165,
    0.0107, -0.046, -0.0103,
    0.0098, -0.0469, -0.0135,
    0.0096, -0.0477, -0.0144,
    0.0098, -0.0462, -0.0163,
    0.0098, -0.0473, -0.0189,
    0.0109, -0.0451, -0.0058,
    0.0099, -0.0465, -0.0221,
    0.0094, -0.0475, -0.0223,
    0.0093, -0.0485, -0.02,
    0.0087, -0.0474, -0.0193,
    0.0094, -0.0467, -0.0121,
    0.0099, -0.0483, -0.0207,
    0.0098, -0.0465, -0.012,
    0.0087, -0.0487, -0.014,
    0.0098, -0.047, -0.0129,
    0.0086, -0.0465, -0.0163,
    0.0093, -0.0477, -0.0182,
    0.0096, -0.0463, -0.0109,
    0.0091, -0.047, -0.0208,
    0.0085, -0.047, -0.0233,
    0.0095, -0.0444, -0.0218,
    0.009, -0.0481, -0.0199,
    0.0079, -0.0482, -0.021,
    0.009, -0.0495, -0.0171,
    0.0086, -0.0488, -0.0203,
    0.0099, -0.0457, -0.0155,
    0.0091, -0.0458, -0.0242,
    0.0084, -0.0466, -0.0204,
    0.0093, -0.0462, -0.0219,
    0.0089, -0.0487, -0.0224,
    0.0093, -0.0464, -0.0076,
    0.0086, -0.0476, -0.0166,
    0.0099, -0.0445, -0.012,
    0.01, -0.0459, -0.0147,
    0.0092, -0.0498, -0.0136,
    0.0093, -0.0464, -0.0199,
    0.0093, -0.0481, -0.0182,
    0.0096, -0.0472, -0.0089,
    0.0094, -0.0478, -0.0233,
    0.0087, -0.0467, -0.0188,
    0.0089, -0.0461, -0.0158,
    0.0101, -0.047, -0.0168,
    0.0097, -0.0469, -0.0073,
    0.0087, -0.0484, -0.0148,
    0.0091, -0.0475, -0.011,
    0.0088, -0.0488, -0.0069,
    0.0093, -0.0479, -0.0207,
    0.009, -0.0487, -0.0181,
    0.0092, -0.0462, -0.017,
    0.0088, -0.0458, -0.0102,
    0.0094, -0.0478, -0.0194,
    0.0091, -0.0442, -0.0068,
    0.0098, -0.0463, -0.0103,
    0.0092, -0.047, -0.0131,
    0.0092, -0.0472, -0.0117,
    0.0101, -0.0479, -0.0147,
    0.0102, -0.0487, -0.0116,
    0.01, -0.0472, -0.006,
    0.0085, -0.0476, -0.0208,
    0.0092, -0.0454, -0.0127,
    0.0091, -0.0474, -0.0091,
    0.0084, -0.047, -0.0169,
    0.0095, -0.0454, -0.0171,
    0.0089, -0.0477, -0.0131,
    0.0087, -0.0482, -0.0181,
    0.0091, -0.0472, -0.0066,
    0.0086, -0.049, -0.0125,
    0.0089, -0.047, -0.0129,
    0.0082, -0.0479, -0.0122,
    0.0097, -0.0477, -0.0165,
    0.0098, -0.0473, -0.0107,
    0.0091, -0.0461, -0.0113,
    0.0099, -0.0462, -0.0235,
    0.0091, -0.0479, -0.0056,
    0.0093, -0.0465, -0.0061,
    0.0092, -0.0484, -0.0125,
    0.0096, -0.0475, -0.0098,
    0.0095, -0.046, -0.0026,
    0.0093, -0.0452, -0.0146,
    0.009, -0.0467, -0.0086,
    0.0095, -0.0486, -0.0078,
    0.0092, -0.048, -0.0111,
    0.0089, -0.048, -0.0201,
    0.0089, -0.0471, -0.0087,
    0.0094, -0.0477, -0.0125,
    0.0095, -0.0471, -0.0096,
    0.0093, -0.0488, -0.0134,
    0.0083, -0.0477, -0.0113,
    0.0088, -0.0472, -0.0169,
    0.0097, -0.0471, -0.0081,
    0.0083, -0.0461, -0.0159,
    0.0098, -0.0479, -0.0084,
    0.009, -0.0493, -0.0058,
    0.0089, -0.0473, -0.0168,
    0.0093, -0.0465, -0.0132,
    0.0093, -0.0487, -0.0107,
    0.0093, -0.0471, -0.0168,
    0.0098, -0.0482, -0.0116,
    0.0095, -0.0474, -0.019,
    0.0097, -0.0466, -0.0145,
    0.0089, -0.0455, -0.0148,
    0.0092, -0.0467, -0.0085,
    0.0094, -0.0486, -0.0129,
    0.0099, -0.0473, -0.0075,
    0.01, -0.0465, -0.0147,
    0.0093, -0.049, -0.0107,
    0.0097, -0.0464, -0.0119,
    0.0091, -0.0466, -0.0115,
    0.0093, -0.0471, -0.0064,
    0.0096, -0.0479, -0.0062,
    0.0089, -0.0478, -0.0082,
    0.0102, -0.0452, -0.0155,
    0.0098, -0.0465, -0.0134,
    0.0086, -0.0492, -0.0158,
    0.0095, -0.0476, -0.0087,
    0.009, -0.0483, -0.0113,
    0.0099, -0.0469, -0.0152,
    0.0103, -0.045, -0.0024,
    0.0098, -0.0458, -0.0186,
    0.01, -0.0449, -0.0139,
    0.0098, -0.0464, -0.0091,
    0.0092, -0.0454, -0.0116,
    0.009, -0.0478, -0.0076,
    0.0088, -0.0507, -0.0197,
    0.0088, -0.0461, -0.0157,
    0.009, -0.048, -0.0138,
    0.0094, -0.0464, -0.0095,
    0.0095, -0.0489, -0.0122,
    0.009, -0.0465, -0.0137,
    0.0093, -0.0493, -0.0126,
    0.0092, -0.0484, -0.0091
   ]);
   this.values[286] = v;
   this.buf[286] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[286]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[286], gl.STATIC_DRAW);
   this.mvMatLoc[286] = gl.getUniformLocation(this.prog[286],"mvMatrix");
   this.prMatLoc[286] = gl.getUniformLocation(this.prog[286],"prMatrix");


   // ****** points object 287 ******
   this.flags[287] = 0;
   this.prog[287]  = gl.createProgram();
   gl.attachShader(this.prog[287], this.getShader( gl, "vshader287" ));
   gl.attachShader(this.prog[287], this.getShader( gl, "fshader287" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[287], 0, "aPos");
   gl.bindAttribLocation(this.prog[287], 1, "aCol");
   gl.linkProgram(this.prog[287]);
   this.offsets[287]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:-1, tofs:-1, stride:3};
   var v=new Float32Array([
    0.0052, 0.0123, 0.0309,
    0.0141, 0.0183, 0.0051,
    0.0084, 0.0159, 0.0186,
    0.0068, 0.0129, 0.0211,
    0.0146, 0.0191, 0.0114,
    0.013, 0.016, 0.028,
    0.0189, 0.0211, 0.0023,
    0.0156, 0.0166, 0.0066,
    0.0103, 0.0123, 0.0367,
    0.0159, 0.0218, 0.0025,
    0.0144, 0.0198, 0.0111,
    0.0106, 0.0146, 0.0129,
    0.0133, 0.0186, -0.0055,
    0.0122, 0.0185, 0.0109,
    0.0031, 0.0112, 0.0302,
    0.0022, 0.0112, 0.0257,
    0.0094, 0.0165, 0.0048,
    0.0141, 0.0182, 0.008,
    0.0147, 0.0171, 0.0201,
    0.0144, 0.017, 0.022,
    0.013, 0.0175, 0.0193,
    0.0122, 0.0162, 0.021,
    0.0156, 0.0184, 0.0245,
    0.0136, 0.0192, 0.0166,
    0.0126, 0.0155, 0.0157,
    0.0144, 0.0259, -0.0067,
    0.0067, 0.0174, 0.0129,
    0.0121, 0.0117, 0.0337,
    0.0035, 0.014, 0.0124,
    0.0121, 0.0171, 0.0253,
    0.0106, 0.0176, 0.0069,
    0.0121, 0.018, 0.0119,
    0.0138, 0.0187, 0.0189,
    0.0127, 0.0168, 0.0129,
    0.0079, 0.0146, 0.0222,
    0.0073, 0.0157, 0.012,
    0.0139, 0.0168, 0.0162,
    0.0138, 0.022, 0.0008,
    0.0018, 0.0174, 0.0163,
    -0.0294, 0.0108, 0.009,
    0.0199, 0.0247, -0.0018,
    0.0181, 0.0088, 0.0395,
    0.0079, 0.0061, 0.0496,
    0.0113, 0.0084, 0.036,
    0.0185, 0.0164, 0.0166,
    0.0097, 0.0112, 0.0347,
    0.0121, 0.0093, 0.0442,
    0.0173, 0.0034, 0.0549,
    0.0155, 0.0098, 0.0447,
    0.015, 0.0118, 0.0425,
    0.009, -0.0072, 0.0901,
    0.0031, 0.0132, 0.0222,
    0.0187, 0.0256, 0,
    0.0105, 0.0158, 0.0263,
    0.0054, 0.0145, 0.0239,
    0.0152, 0.0228, -0.0031,
    0.0152, 0.0196, 0.016,
    0.0126, 0.0163, 0.0254,
    0.0103, 0.013, 0.032,
    0.0062, 0.0076, 0.0428,
    0.0012, 0.008, 0.0283,
    0.006, 0.0091, 0.0393,
    0.012, 0.0127, 0.0274,
    0.0147, 0.0158, 0.0183,
    0.0054, 0.0134, 0.0159,
    0.0121, 0.016, 0.0152,
    0.0118, 0.0042, 0.0538,
    0.0171, 0.0079, 0.0483,
    0.0177, 0.0086, 0.0464,
    0.0173, 0.0199, 0.0079,
    0.0118, 0.0097, 0.0409,
    0.0033, 0.0024, 0.0499,
    0.0147, 0.008, 0.0507,
    0.021, 0.0284, -0.0049,
    0.0173, 0.0043, 0.0614,
    0.0168, 0.0024, 0.0589,
    -0.0092, 0.0052, 0.0356,
    0.0151, -0.0006, 0.076,
    0.0149, 0.0141, 0.0274,
    0.0126, 0.0015, 0.0683,
    0.018, 0.0071, 0.0387,
    0.0174, 0.016, 0.0245,
    0.0183, 0.0187, 0.0204,
    0.0144, 0.0049, 0.0554,
    0.0183, 0.0083, 0.045,
    0.0156, 0.0085, 0.0353,
    0.0136, 0.0101, 0.0297,
    0.0077, 0.0067, 0.0485,
    0.0109, 0.007, 0.0459,
    0.0181, 0.0118, 0.0371,
    0.0081, 0.0038, 0.0504,
    0.0104, 0.0039, 0.0477,
    0.0142, -0.0011, 0.0565,
    0.0171, 0.0114, 0.0421,
    0.0146, 0.0125, 0.0278,
    0.0157, 0.0191, 0.0087,
    -0.0032, 0.0018, 0.0445,
    0.0197, 0.0203, 0.0041,
    0.0055, 0.0094, 0.0394,
    0.0162, -0.0011, 0.0626,
    0.0156, -0.001, 0.0718,
    0.0133, -0.0011, 0.0674,
    0.0032, -0.0016, 0.0617,
    -0.0039, -0.001, 0.0502,
    0.0179, 0.0163, 0.0317,
    0.0084, 0.0165, 0.0168,
    0.0187, 0.0189, 0.008,
    0.0183, 0.0177, 0.0167,
    0.0174, 0.013, 0.0296,
    0.0088, -0.0034, 0.0659,
    0.0088, -0.0009, 0.0742,
    0.0153, 0.0037, 0.0641,
    0.0144, 0.0048, 0.0523,
    0.0155, 0.0118, 0.0373,
    -0.0124, 0.0047, 0.0447,
    0.0195, 0.0266, 0.0013,
    0.0147, 0.009, 0.0351,
    0.016, 0.0086, 0.0472,
    0.0131, -0.012, 0.0991,
    0.0144, 0.0045, 0.0549,
    0.0122, -0.0156, 0.0987,
    0.0149, -0.0072, 0.0923,
    0.0136, -0.0069, 0.0865,
    0.0109, -0.016, 0.1124,
    0.0118, -0.0131, 0.0899,
    0.0135, -0.0068, 0.0915,
    0.0166, 0.0177, 0.0162,
    0.0158, 0.0048, 0.048,
    0.0134, 0.0126, 0.0309,
    0.0186, 0.0237, -0.0053,
    0.0123, -0.0129, 0.1078,
    0.0162, -0.0035, 0.0838,
    0.0179, 0.007, 0.0517,
    0.0142, -0.0051, 0.085,
    0.0127, -0.0125, 0.0961,
    0.0126, -0.0144, 0.1058,
    0.0142, -0.0013, 0.0715,
    0.0121, -0.0181, 0.1167,
    0.013, -0.0071, 0.087,
    0.0095, -0.0093, 0.0831,
    0.0155, 0.0029, 0.063,
    0.0147, -0.016, 0.1123,
    0.0125, -0.0399, 0.1746,
    0.0132, -0.036, 0.1667,
    0.0135, -0.0394, 0.1792,
    0.0138, -0.042, 0.1825,
    0.0154, -0.0179, 0.1212,
    0.0121, -0.0362, 0.1629,
    0.014, 0.0013, 0.0503,
    0.0153, -0.0014, 0.0758,
    0.0133, -0.0281, 0.1437,
    0.0133, -0.0322, 0.1597,
    0.0132, -0.022, 0.1337,
    0.015, -0.0108, 0.0903,
    0.0147, -0.0027, 0.0486,
    0.0159, 0.0063, 0.0433,
    0.0151, -0.0086, 0.0918,
    0.0131, -0.0142, 0.1045,
    0.0117, -0.023, 0.1241,
    0.0117, -0.0097, 0.0842,
    0.0135, -0.0288, 0.1408,
    0.0125, -0.025, 0.1417,
    0.0122, -0.0135, 0.1016,
    0.0112, -0.0165, 0.1175,
    0.0136, -0.0008, 0.0665,
    0.0139, -0.0024, 0.0732,
    0.0135, -0.0075, 0.1001,
    0.0159, -0.0009, 0.0541,
    0.013, -0.0096, 0.0917,
    0.0095, -0.0054, 0.0835,
    0.0105, -0.0054, 0.0857,
    0.015, 0.0065, 0.0519,
    0.015, 0.0005, 0.0642,
    0.0125, -0.0049, 0.0782,
    0.0139, -0.0254, 0.1436,
    0.0108, -0.0205, 0.1374,
    0.0132, -0.016, 0.1086,
    0.0118, -0.0183, 0.1208,
    0.0117, -0.0035, 0.0822,
    0.016, 0.0055, 0.0582,
    0.012, -0.0061, 0.0895
   ]);
   this.values[287] = v;
   this.buf[287] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[287]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[287], gl.STATIC_DRAW);
   this.mvMatLoc[287] = gl.getUniformLocation(this.prog[287],"mvMatrix");
   this.prMatLoc[287] = gl.getUniformLocation(this.prog[287],"prMatrix");


   // ****** points object 288 ******
   this.flags[288] = 0;
   this.prog[288]  = gl.createProgram();
   gl.attachShader(this.prog[288], this.getShader( gl, "vshader288" ));
   gl.attachShader(this.prog[288], this.getShader( gl, "fshader288" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[288], 0, "aPos");
   gl.bindAttribLocation(this.prog[288], 1, "aCol");
   gl.linkProgram(this.prog[288]);
   this.offsets[288]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:-1, tofs:-1, stride:3};
   var v=new Float32Array([
    -0.0611, 0.0064, 0.0037,
    -0.0618, 0.0082, -0.0012,
    -0.0613, 0.0086, 0.003,
    -0.0616, 0.0081, -0.0011,
    -0.0604, 0.0076, -0.0034,
    -0.061, 0.0088, 0.0017,
    -0.0611, 0.0083, 0.0024,
    -0.0612, 0.0091, -0.0004,
    -0.0612, 0.0095, -0.0022,
    -0.0619, 0.0105, -0.0023,
    -0.0608, 0.0099, 0.0024,
    -0.0608, 0.0091, 0.0011,
    -0.0617, 0.0096, -0.0072,
    -0.0617, 0.0088, -0.002,
    -0.0609, 0.008, 0.0011,
    -0.0613, 0.0094, -0.0006,
    -0.0613, 0.0091, -0.0033,
    -0.0623, 0.0104, -0.0004,
    -0.0602, 0.0085, -0.0024,
    -0.0609, 0.0088, 0.0011,
    -0.0607, 0.0095, 0.0073,
    -0.06, 0.0085, -0.0036,
    -0.0614, 0.0085, 0.0033,
    -0.0608, 0.0068, -0.0086,
    -0.0618, 0.0085, -0.003,
    -0.0608, 0.0087, -0.0075,
    -0.062, 0.0087, 0.0003,
    -0.0603, 0.0089, -0.0021,
    -0.0609, 0.0073, 0.0035,
    -0.0609, 0.0086, 0.0016,
    -0.061, 0.0083, 0.0014,
    -0.0612, 0.0099, -0.0006,
    -0.0596, 0.0084, -0.0024,
    -0.061, 0.0084, 0,
    -0.061, 0.0101, -0.0034,
    -0.0613, 0.0089, -0.0049,
    -0.0613, 0.0102, -0.0059,
    -0.0616, 0.0093, -0.0021,
    -0.0609, 0.0084, 0.0047,
    -0.0606, 0.0083, -0.0044,
    -0.0563, 0.0069, -0.006,
    -0.0553, 0.0101, -0.0032,
    -0.056, 0.0077, -0.0012,
    -0.0574, 0.008, -0.0068,
    -0.0573, 0.0081, -0.0075,
    -0.0565, 0.0081, 0.0051,
    -0.0569, 0.0092, 0.0022,
    -0.058, 0.0091, -0.0062,
    -0.0613, 0.0072, -0.0013,
    -0.0613, 0.0076, 0.0065,
    -0.0611, 0.009, 0.0007,
    -0.0607, 0.0076, -0.0011,
    -0.0619, 0.0085, -0.0059,
    -0.0604, 0.0095, -0.0027,
    -0.0609, 0.0097, 0.0005,
    -0.0607, 0.0081, -0.0032,
    -0.0606, 0.0063, -0.0028,
    -0.0607, 0.0087, -0.0014,
    -0.0606, 0.0088, -0.0054,
    -0.0604, 0.0094, -0.0047,
    -0.0585, 0.0094, 0.0055,
    -0.0612, 0.0066, -0.0014,
    -0.0602, 0.0097, -0.0024,
    -0.0604, 0.0083, 0.0013,
    -0.0609, 0.0084, 0.001,
    -0.0616, 0.0102, -0.0001,
    -0.0603, 0.0091, -0.0009,
    -0.0608, 0.0077, 0.0018,
    -0.0608, 0.0089, 0.002,
    -0.061, 0.0094, -0.0004,
    -0.0611, 0.0095, -0.0013,
    -0.0608, 0.009, -0.0026,
    -0.061, 0.0075, -0.0025,
    -0.0607, 0.0083, -0.0006,
    -0.0598, 0.0079, 0.0009,
    -0.0604, 0.0067, -0.007,
    -0.0619, 0.0093, -0.0019,
    -0.0597, 0.009, -0.0077,
    -0.0616, 0.0101, -0.0027,
    -0.0607, 0.009, -0.009,
    -0.06, 0.0083, 0.0045,
    -0.0617, 0.0094, 0.0007,
    -0.0612, 0.0096, -0.0015,
    -0.06, 0.0102, -0.0057,
    -0.0601, 0.0086, 0.0011,
    -0.061, 0.008, -0.0049,
    -0.0604, 0.0077, 0.0009,
    -0.0616, 0.0085, -0.0048,
    -0.0605, 0.0078, -0.0028,
    -0.0612, 0.0056, -0.006,
    -0.0606, 0.009, 0.0016,
    -0.0618, 0.0085, -0.0026,
    -0.0613, 0.0077, -0.0056,
    -0.0609, 0.0075, -0.0057,
    -0.0611, 0.0089, -0.0042,
    -0.0609, 0.0082, -0.0056,
    -0.0574, 0.0088, -0.0016,
    -0.0573, 0.0093, -0.0013,
    -0.0572, 0.0096, -0.0039,
    -0.0593, 0.0084, 0.0015,
    -0.0546, 0.0097, 0.0004,
    -0.0569, 0.0082, -0.0023,
    -0.0575, 0.0098, -0.0026,
    -0.0556, 0.0086, -0.0077,
    -0.0568, 0.0097, -0.0048,
    -0.0576, 0.0085, -0.0025,
    -0.0581, 0.0087, -0.007,
    -0.0567, 0.0085, -0.0087,
    -0.0576, 0.0072, -0.006,
    -0.0563, 0.0064, -0.0036,
    -0.0554, 0.0099, 0.0043,
    -0.0561, 0.0078, 0.0021,
    -0.0576, 0.009, -0.0055,
    -0.0572, 0.0059, -0.0075,
    -0.0575, 0.0088, -0.0064,
    -0.0567, 0.009, -0.0045,
    -0.0584, 0.0093, -0.0091,
    -0.0572, 0.0088, -0.0051,
    -0.0577, 0.0094, 0.0032,
    -0.0583, 0.0084, -0.0028,
    -0.0573, 0.008, -0.005,
    -0.0569, 0.0092, -0.0017,
    -0.0589, 0.0096, -0.0009,
    -0.0585, 0.0092, -0.0078,
    -0.0573, 0.0079, -0.0028,
    -0.057, 0.0076, -0.0066,
    -0.0587, 0.0094, -0.0045,
    -0.0577, 0.0087, -0.0031,
    -0.057, 0.0098, 0.0012,
    -0.0592, 0.0096, -0.0068,
    -0.0583, 0.0083, 0.0005,
    -0.0576, 0.0091, -0.0043,
    -0.0564, 0.0099, -0.0102,
    -0.0556, 0.0084, -0.0104,
    -0.0563, 0.0087, -0.0043,
    -0.0572, 0.0095, -0.0003,
    -0.0593, 0.0101, -0.0062,
    -0.0568, 0.0101, -0.0018,
    -0.0566, 0.0073, -0.0029,
    -0.059, 0.0079, 0.0023,
    -0.0571, 0.007, -0.0033,
    -0.0566, 0.0083, -0.0072,
    -0.0559, 0.0073, 0.0031,
    -0.0587, 0.0091, -0.0055,
    -0.0585, 0.0087, -0.0014,
    -0.0577, 0.0088, -0.0028,
    -0.0579, 0.0093, -0.005,
    -0.0571, 0.0079, -0.007,
    -0.0558, 0.0101, -0.0081,
    -0.0566, 0.0086, -0.0046,
    -0.0573, 0.0071, -0.001,
    -0.0586, 0.0092, -0.0035,
    -0.0579, 0.0076, -0.0009,
    -0.058, 0.0083, -0.0049,
    -0.0565, 0.0082, 0.0013,
    -0.0574, 0.0095, -0.0019,
    -0.0568, 0.0084, -0.0035,
    -0.0563, 0.008, -0.007,
    -0.0572, 0.0082, -0.004,
    -0.057, 0.0083, -0.0043,
    -0.0564, 0.0082, -0.0064,
    -0.058, 0.0088, 0.0026,
    -0.0574, 0.0087, 0.0023,
    -0.0585, 0.0103, -0.0015,
    -0.0585, 0.008, -0.0006,
    -0.0567, 0.0072, -0.0123,
    -0.058, 0.0071, -0.0083,
    -0.0578, 0.0068, -0.0014,
    -0.0568, 0.0102, -0.0025,
    -0.0574, 0.0095, -0.0013,
    -0.0559, 0.0081, -0.0015,
    -0.058, 0.0097, -0.0055,
    -0.0583, 0.0103, -0.0011,
    -0.0575, 0.0095, 0.0008,
    -0.0586, 0.0071, -0.0059,
    -0.0561, 0.0084, -0.0109,
    -0.0564, 0.0098, -0.0021,
    -0.0566, 0.0072, -0.0009,
    -0.0573, 0.0078, -0.0043,
    -0.0582, 0.0056, 0.0023,
    -0.057, 0.0057, 0,
    -0.0556, 0.007, 0.0018,
    -0.0555, 0.0074, -0.0016,
    -0.0578, 0.0089, -0.0086,
    -0.0557, 0.0087, 0.0005,
    -0.0327, -0.0014, 0.04,
    -0.0445, 0.0108, 0.0004,
    -0.0467, 0.0089, -0.0004,
    -0.0479, 0.0117, -0.0188,
    -0.047, 0.0112, -0.0045,
    -0.0373, 0.0102, -0.0016,
    -0.0507, 0.0102, 0.0008,
    -0.0493, 0.0105, 0.0006,
    -0.0374, 0.013, -0.0092,
    -0.0378, 0.0157, -0.0026,
    -0.0365, 0.0148, 0.008,
    -0.0396, 0.0127, -0.0099,
    -0.0468, 0.0087, -0.0091,
    -0.0441, 0.011, -0.0011,
    -0.0523, 0.0093, 0.0018,
    -0.0464, 0.0118, 0.0006,
    -0.0494, 0.011, -0.0051,
    -0.0488, 0.0094, 0.0069,
    -0.0347, 0.0144, -0.0017,
    -0.0506, 0.0095, -0.0037,
    -0.0522, 0.0109, 0.0035,
    -0.0518, 0.0101, -0.0027,
    -0.0263, 0.0082, 0.0163,
    -0.0346, 0.0129, -0.0038,
    -0.0275, 0.0171, -0.0123,
    -0.0483, 0.0091, -0.0027,
    -0.048, 0.0102, -0.002,
    -0.0367, 0.0124, -0.0092,
    -0.0347, 0.0115, -0.0051,
    -0.0531, 0.0115, -0.0008,
    -0.044, 0.013, -0.0006,
    -0.0172, 0.0202, -0.0095,
    -0.0455, 0.0097, -0.0006,
    -0.0366, 0.0114, 0.0007,
    -0.0456, 0.0111, -0.0008,
    -0.0419, 0.0137, -0.0075,
    -0.0563, 0.0086, -0.003,
    -0.0475, 0.0129, -0.0029,
    -0.0414, 0.0135, -0.0038,
    -0.0532, 0.0092, 0.003,
    -0.0159, -0.0138, 0.0755,
    0.0156, -0.0193, 0.0998,
    -0.0359, 0.0143, -0.0135,
    -0.0395, 0.0145, -0.0014,
    -0.0416, 0.0125, 0.0042,
    -0.0308, 0.0169, -0.0134,
    -0.0287, 0.016, -0.0088,
    -0.0492, 0.009, 0.003,
    -0.047, 0.0094, 0.0017,
    -0.0432, 0.0123, -0.0001,
    -0.0263, 0.0112, 0.001,
    -0.0408, 0.0132, 0.001,
    -0.0451, 0.0098, -0.0014,
    -0.0461, 0.0123, 0.0027,
    -0.0321, 0.0153, -0.0033,
    -0.048, 0.0117, -0.0036,
    -0.0505, 0.01, 0.0017,
    -0.0389, 0.0122, -0.0055,
    -0.0342, 0.0108, 0,
    -0.0399, 0.011, 0.0136,
    -0.0059, -0.0092, 0.0731
   ]);
   this.values[288] = v;
   this.buf[288] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[288]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[288], gl.STATIC_DRAW);
   this.mvMatLoc[288] = gl.getUniformLocation(this.prog[288],"mvMatrix");
   this.prMatLoc[288] = gl.getUniformLocation(this.prog[288],"prMatrix");


   // ****** lines object 289 ******
   this.flags[289] = 128;
   this.prog[289]  = gl.createProgram();
   gl.attachShader(this.prog[289], this.getShader( gl, "vshader289" ));
   gl.attachShader(this.prog[289], this.getShader( gl, "fshader289" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[289], 0, "aPos");
   gl.bindAttribLocation(this.prog[289], 1, "aCol");
   gl.linkProgram(this.prog[289]);
   this.offsets[289]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:-1, tofs:-1, stride:3};
   var v=new Float32Array([
    -0.06, -0.0519435, -0.0335935,
    0.02, -0.0519435, -0.0335935,
    -0.06, -0.0519435, -0.0335935,
    -0.06, -0.05407818, -0.03907568,
    -0.04, -0.0519435, -0.0335935,
    -0.04, -0.05407818, -0.03907568,
    -0.02, -0.0519435, -0.0335935,
    -0.02, -0.05407818, -0.03907568,
    0, -0.0519435, -0.0335935,
    0, -0.05407818, -0.03907568,
    0.02, -0.0519435, -0.0335935,
    0.02, -0.05407818, -0.03907568
   ]);
   this.values[289] = v;
   this.buf[289] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[289]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[289], gl.STATIC_DRAW);
   this.mvMatLoc[289] = gl.getUniformLocation(this.prog[289],"mvMatrix");
   this.prMatLoc[289] = gl.getUniformLocation(this.prog[289],"prMatrix");


   // ****** text object 290 ******
   this.flags[290] = 40;
   this.prog[290]  = gl.createProgram();
   gl.attachShader(this.prog[290], this.getShader( gl, "vshader290" ));
   gl.attachShader(this.prog[290], this.getShader( gl, "fshader290" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[290], 0, "aPos");
   gl.bindAttribLocation(this.prog[290], 1, "aCol");
   gl.linkProgram(this.prog[290]);
   var texts = [
    "-0.06",
    "-0.04",
    "-0.02",
    "0",
    "0.02"
   ];
   var texinfo = drawTextToCanvas(texts, 1);
   this.ofsLoc[290] = gl.getAttribLocation(this.prog[290], "aOfs");
   this.texture[290] = gl.createTexture();
   this.texLoc[290] = gl.getAttribLocation(this.prog[290], "aTexcoord");
   this.sampler[290] = gl.getUniformLocation(this.prog[290],"uSampler");
   handleLoadedTexture(this.texture[290], document.getElementById("textureCanvas"));
   this.offsets[290]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:5, tofs:3, stride:7};
   var v=new Float32Array([
    -0.06, -0.05834753, -0.05004003, 0, -0.5, 0.5, 0.5,
    -0.06, -0.05834753, -0.05004003, 1, -0.5, 0.5, 0.5,
    -0.06, -0.05834753, -0.05004003, 1, 1.5, 0.5, 0.5,
    -0.06, -0.05834753, -0.05004003, 0, 1.5, 0.5, 0.5,
    -0.04, -0.05834753, -0.05004003, 0, -0.5, 0.5, 0.5,
    -0.04, -0.05834753, -0.05004003, 1, -0.5, 0.5, 0.5,
    -0.04, -0.05834753, -0.05004003, 1, 1.5, 0.5, 0.5,
    -0.04, -0.05834753, -0.05004003, 0, 1.5, 0.5, 0.5,
    -0.02, -0.05834753, -0.05004003, 0, -0.5, 0.5, 0.5,
    -0.02, -0.05834753, -0.05004003, 1, -0.5, 0.5, 0.5,
    -0.02, -0.05834753, -0.05004003, 1, 1.5, 0.5, 0.5,
    -0.02, -0.05834753, -0.05004003, 0, 1.5, 0.5, 0.5,
    0, -0.05834753, -0.05004003, 0, -0.5, 0.5, 0.5,
    0, -0.05834753, -0.05004003, 1, -0.5, 0.5, 0.5,
    0, -0.05834753, -0.05004003, 1, 1.5, 0.5, 0.5,
    0, -0.05834753, -0.05004003, 0, 1.5, 0.5, 0.5,
    0.02, -0.05834753, -0.05004003, 0, -0.5, 0.5, 0.5,
    0.02, -0.05834753, -0.05004003, 1, -0.5, 0.5, 0.5,
    0.02, -0.05834753, -0.05004003, 1, 1.5, 0.5, 0.5,
    0.02, -0.05834753, -0.05004003, 0, 1.5, 0.5, 0.5
   ]);
   for (var i=0; i<5; i++)
     for (var j=0; j<4; j++) {
         var ind = this.offsets[290]["stride"]*(4*i + j) + this.offsets[290]["tofs"];
         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i];
         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight;
         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip
           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
     }
   this.values[290] = v;
   var f=new Uint16Array([
    0, 1, 2, 0, 2, 3,
    4, 5, 6, 4, 6, 7,
    8, 9, 10, 8, 10, 11,
    12, 13, 14, 12, 14, 15,
    16, 17, 18, 16, 18, 19
   ]);
   this.buf[290] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[290]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[290], gl.STATIC_DRAW);
   this.ibuf[290] = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[290]);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
   this.mvMatLoc[290] = gl.getUniformLocation(this.prog[290],"mvMatrix");
   this.prMatLoc[290] = gl.getUniformLocation(this.prog[290],"prMatrix");
   this.textScaleLoc[290] = gl.getUniformLocation(this.prog[290],"textScale");


   // ****** lines object 291 ******
   this.flags[291] = 128;
   this.prog[291]  = gl.createProgram();
   gl.attachShader(this.prog[291], this.getShader( gl, "vshader291" ));
   gl.attachShader(this.prog[291], this.getShader( gl, "fshader291" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[291], 0, "aPos");
   gl.bindAttribLocation(this.prog[291], 1, "aCol");
   gl.linkProgram(this.prog[291]);
   this.offsets[291]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:-1, tofs:-1, stride:3};
   var v=new Float32Array([
    -0.063596, -0.04, -0.0335935,
    -0.063596, 0.02, -0.0335935,
    -0.063596, -0.04, -0.0335935,
    -0.0658208, -0.04, -0.03907568,
    -0.063596, -0.02, -0.0335935,
    -0.0658208, -0.02, -0.03907568,
    -0.063596, 0, -0.0335935,
    -0.0658208, 0, -0.03907568,
    -0.063596, 0.02, -0.0335935,
    -0.0658208, 0.02, -0.03907568
   ]);
   this.values[291] = v;
   this.buf[291] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[291]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[291], gl.STATIC_DRAW);
   this.mvMatLoc[291] = gl.getUniformLocation(this.prog[291],"mvMatrix");
   this.prMatLoc[291] = gl.getUniformLocation(this.prog[291],"prMatrix");


   // ****** text object 292 ******
   this.flags[292] = 40;
   this.prog[292]  = gl.createProgram();
   gl.attachShader(this.prog[292], this.getShader( gl, "vshader292" ));
   gl.attachShader(this.prog[292], this.getShader( gl, "fshader292" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[292], 0, "aPos");
   gl.bindAttribLocation(this.prog[292], 1, "aCol");
   gl.linkProgram(this.prog[292]);
   var texts = [
    "-0.04",
    "-0.02",
    "0",
    "0.02"
   ];
   var texinfo = drawTextToCanvas(texts, 1);
   this.ofsLoc[292] = gl.getAttribLocation(this.prog[292], "aOfs");
   this.texture[292] = gl.createTexture();
   this.texLoc[292] = gl.getAttribLocation(this.prog[292], "aTexcoord");
   this.sampler[292] = gl.getUniformLocation(this.prog[292],"uSampler");
   handleLoadedTexture(this.texture[292], document.getElementById("textureCanvas"));
   this.offsets[292]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:5, tofs:3, stride:7};
   var v=new Float32Array([
    -0.0702704, -0.04, -0.05004003, 0, -0.5, 0.5, 0.5,
    -0.0702704, -0.04, -0.05004003, 1, -0.5, 0.5, 0.5,
    -0.0702704, -0.04, -0.05004003, 1, 1.5, 0.5, 0.5,
    -0.0702704, -0.04, -0.05004003, 0, 1.5, 0.5, 0.5,
    -0.0702704, -0.02, -0.05004003, 0, -0.5, 0.5, 0.5,
    -0.0702704, -0.02, -0.05004003, 1, -0.5, 0.5, 0.5,
    -0.0702704, -0.02, -0.05004003, 1, 1.5, 0.5, 0.5,
    -0.0702704, -0.02, -0.05004003, 0, 1.5, 0.5, 0.5,
    -0.0702704, 0, -0.05004003, 0, -0.5, 0.5, 0.5,
    -0.0702704, 0, -0.05004003, 1, -0.5, 0.5, 0.5,
    -0.0702704, 0, -0.05004003, 1, 1.5, 0.5, 0.5,
    -0.0702704, 0, -0.05004003, 0, 1.5, 0.5, 0.5,
    -0.0702704, 0.02, -0.05004003, 0, -0.5, 0.5, 0.5,
    -0.0702704, 0.02, -0.05004003, 1, -0.5, 0.5, 0.5,
    -0.0702704, 0.02, -0.05004003, 1, 1.5, 0.5, 0.5,
    -0.0702704, 0.02, -0.05004003, 0, 1.5, 0.5, 0.5
   ]);
   for (var i=0; i<4; i++)
     for (var j=0; j<4; j++) {
         var ind = this.offsets[292]["stride"]*(4*i + j) + this.offsets[292]["tofs"];
         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i];
         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight;
         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip
           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
     }
   this.values[292] = v;
   var f=new Uint16Array([
    0, 1, 2, 0, 2, 3,
    4, 5, 6, 4, 6, 7,
    8, 9, 10, 8, 10, 11,
    12, 13, 14, 12, 14, 15
   ]);
   this.buf[292] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[292]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[292], gl.STATIC_DRAW);
   this.ibuf[292] = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[292]);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
   this.mvMatLoc[292] = gl.getUniformLocation(this.prog[292],"mvMatrix");
   this.prMatLoc[292] = gl.getUniformLocation(this.prog[292],"prMatrix");
   this.textScaleLoc[292] = gl.getUniformLocation(this.prog[292],"textScale");


   // ****** lines object 293 ******
   this.flags[293] = 128;
   this.prog[293]  = gl.createProgram();
   gl.attachShader(this.prog[293], this.getShader( gl, "vshader293" ));
   gl.attachShader(this.prog[293], this.getShader( gl, "fshader293" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[293], 0, "aPos");
   gl.bindAttribLocation(this.prog[293], 1, "aCol");
   gl.linkProgram(this.prog[293]);
   this.offsets[293]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:-1, tofs:-1, stride:3};
   var v=new Float32Array([
    -0.063596, -0.0519435, 0,
    -0.063596, -0.0519435, 0.15,
    -0.063596, -0.0519435, 0,
    -0.0658208, -0.05407818, 0,
    -0.063596, -0.0519435, 0.05,
    -0.0658208, -0.05407818, 0.05,
    -0.063596, -0.0519435, 0.1,
    -0.0658208, -0.05407818, 0.1,
    -0.063596, -0.0519435, 0.15,
    -0.0658208, -0.05407818, 0.15
   ]);
   this.values[293] = v;
   this.buf[293] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[293]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[293], gl.STATIC_DRAW);
   this.mvMatLoc[293] = gl.getUniformLocation(this.prog[293],"mvMatrix");
   this.prMatLoc[293] = gl.getUniformLocation(this.prog[293],"prMatrix");


   // ****** text object 294 ******
   this.flags[294] = 40;
   this.prog[294]  = gl.createProgram();
   gl.attachShader(this.prog[294], this.getShader( gl, "vshader294" ));
   gl.attachShader(this.prog[294], this.getShader( gl, "fshader294" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[294], 0, "aPos");
   gl.bindAttribLocation(this.prog[294], 1, "aCol");
   gl.linkProgram(this.prog[294]);
   var texts = [
    "0",
    "0.05",
    "0.1",
    "0.15"
   ];
   var texinfo = drawTextToCanvas(texts, 1);
   this.ofsLoc[294] = gl.getAttribLocation(this.prog[294], "aOfs");
   this.texture[294] = gl.createTexture();
   this.texLoc[294] = gl.getAttribLocation(this.prog[294], "aTexcoord");
   this.sampler[294] = gl.getUniformLocation(this.prog[294],"uSampler");
   handleLoadedTexture(this.texture[294], document.getElementById("textureCanvas"));
   this.offsets[294]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:5, tofs:3, stride:7};
   var v=new Float32Array([
    -0.0702704, -0.05834753, 0, 0, -0.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0, 1, -0.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0, 1, 1.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0, 0, 1.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.05, 0, -0.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.05, 1, -0.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.05, 1, 1.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.05, 0, 1.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.1, 0, -0.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.1, 1, -0.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.1, 1, 1.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.1, 0, 1.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.15, 0, -0.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.15, 1, -0.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.15, 1, 1.5, 0.5, 0.5,
    -0.0702704, -0.05834753, 0.15, 0, 1.5, 0.5, 0.5
   ]);
   for (var i=0; i<4; i++)
     for (var j=0; j<4; j++) {
         var ind = this.offsets[294]["stride"]*(4*i + j) + this.offsets[294]["tofs"];
         v[ind+2] = 2*(v[ind]-v[ind+2])*texinfo.widths[i];
         v[ind+3] = 2*(v[ind+1]-v[ind+3])*texinfo.textHeight;
         v[ind] *= texinfo.widths[i]/texinfo.canvasX;
         v[ind+1] = 1.0-(texinfo.offset + i*texinfo.skip
           - v[ind+1]*texinfo.textHeight)/texinfo.canvasY;
     }
   this.values[294] = v;
   var f=new Uint16Array([
    0, 1, 2, 0, 2, 3,
    4, 5, 6, 4, 6, 7,
    8, 9, 10, 8, 10, 11,
    12, 13, 14, 12, 14, 15
   ]);
   this.buf[294] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[294]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[294], gl.STATIC_DRAW);
   this.ibuf[294] = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[294]);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, f, gl.STATIC_DRAW);
   this.mvMatLoc[294] = gl.getUniformLocation(this.prog[294],"mvMatrix");
   this.prMatLoc[294] = gl.getUniformLocation(this.prog[294],"prMatrix");
   this.textScaleLoc[294] = gl.getUniformLocation(this.prog[294],"textScale");


   // ****** lines object 295 ******
   this.flags[295] = 128;
   this.prog[295]  = gl.createProgram();
   gl.attachShader(this.prog[295], this.getShader( gl, "vshader295" ));
   gl.attachShader(this.prog[295], this.getShader( gl, "fshader295" ));
   //  Force aPos to location 0, aCol to location 1
   gl.bindAttribLocation(this.prog[295], 0, "aPos");
   gl.bindAttribLocation(this.prog[295], 1, "aCol");
   gl.linkProgram(this.prog[295]);
   this.offsets[295]={vofs:0, cofs:-1, nofs:-1, radofs:-1, oofs:-1, tofs:-1, stride:3};
   var v=new Float32Array([
    -0.063596, -0.0519435, -0.0335935,
    -0.063596, 0.0334435, -0.0335935,
    -0.063596, -0.0519435, 0.1856935,
    -0.063596, 0.0334435, 0.1856935,
    -0.063596, -0.0519435, -0.0335935,
    -0.063596, -0.0519435, 0.1856935,
    -0.063596, 0.0334435, -0.0335935,
    -0.063596, 0.0334435, 0.1856935,
    -0.063596, -0.0519435, -0.0335935,
    0.025396, -0.0519435, -0.0335935,
    -0.063596, -0.0519435, 0.1856935,
    0.025396, -0.0519435, 0.1856935,
    -0.063596, 0.0334435, -0.0335935,
    0.025396, 0.0334435, -0.0335935,
    -0.063596, 0.0334435, 0.1856935,
    0.025396, 0.0334435, 0.1856935,
    0.025396, -0.0519435, -0.0335935,
    0.025396, 0.0334435, -0.0335935,
    0.025396, -0.0519435, 0.1856935,
    0.025396, 0.0334435, 0.1856935,
    0.025396, -0.0519435, -0.0335935,
    0.025396, -0.0519435, 0.1856935,
    0.025396, 0.0334435, -0.0335935,
    0.025396, 0.0334435, 0.1856935
   ]);
   this.values[295] = v;
   this.buf[295] = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[295]);
   gl.bufferData(gl.ARRAY_BUFFER, this.values[295], gl.STATIC_DRAW);
   this.mvMatLoc[295] = gl.getUniformLocation(this.prog[295],"mvMatrix");
   this.prMatLoc[295] = gl.getUniformLocation(this.prog[295],"prMatrix");

   gl.enable(gl.DEPTH_TEST);
   gl.depthFunc(gl.LEQUAL);
   gl.clearDepth(1.0);
   gl.clearColor(1,1,1,1);
   var drag  = 0;

   this.drawScene = function() {
     gl.depthMask(true);
     gl.disable(gl.BLEND);
     gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
     this.drawFns[275].call(this, 275)
     gl.flush ();
   }


   // ****** points object 281 *******
   this.drawFns[281] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 1, 1 );
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawArrays(gl.POINTS, 0, 379);
   }

   // ****** text object 283 *******
   this.drawFns[283] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.uniform2f( this.textScaleLoc[id], 0.75/this.vp[2], 0.75/this.vp[3]);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.enableVertexAttribArray( this.texLoc[id] );
     gl.vertexAttribPointer(this.texLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["tofs"]);
     gl.activeTexture(gl.TEXTURE0);
     gl.bindTexture(gl.TEXTURE_2D, this.texture[id]);
     gl.uniform1i( this.sampler[id], 0);
     gl.enableVertexAttribArray( this.ofsLoc[id] );
     gl.vertexAttribPointer(this.ofsLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["oofs"]);
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
   }

   // ****** text object 284 *******
   this.drawFns[284] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.uniform2f( this.textScaleLoc[id], 0.75/this.vp[2], 0.75/this.vp[3]);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.enableVertexAttribArray( this.texLoc[id] );
     gl.vertexAttribPointer(this.texLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["tofs"]);
     gl.activeTexture(gl.TEXTURE0);
     gl.bindTexture(gl.TEXTURE_2D, this.texture[id]);
     gl.uniform1i( this.sampler[id], 0);
     gl.enableVertexAttribArray( this.ofsLoc[id] );
     gl.vertexAttribPointer(this.ofsLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["oofs"]);
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
   }

   // ****** text object 285 *******
   this.drawFns[285] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.uniform2f( this.textScaleLoc[id], 0.75/this.vp[2], 0.75/this.vp[3]);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.enableVertexAttribArray( this.texLoc[id] );
     gl.vertexAttribPointer(this.texLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["tofs"]);
     gl.activeTexture(gl.TEXTURE0);
     gl.bindTexture(gl.TEXTURE_2D, this.texture[id]);
     gl.uniform1i( this.sampler[id], 0);
     gl.enableVertexAttribArray( this.ofsLoc[id] );
     gl.vertexAttribPointer(this.ofsLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["oofs"]);
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
   }

   // ****** points object 286 *******
   this.drawFns[286] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 1, 0, 0, 1 );
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawArrays(gl.POINTS, 0, 286);
   }

   // ****** points object 287 *******
   this.drawFns[287] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0.8039216, 0, 1 );
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawArrays(gl.POINTS, 0, 181);
   }

   // ****** points object 288 *******
   this.drawFns[288] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawArrays(gl.POINTS, 0, 246);
   }

   // ****** lines object 289 *******
   this.drawFns[289] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.lineWidth( 1 );
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawArrays(gl.LINES, 0, 12);
   }

   // ****** text object 290 *******
   this.drawFns[290] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.uniform2f( this.textScaleLoc[id], 0.75/this.vp[2], 0.75/this.vp[3]);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.enableVertexAttribArray( this.texLoc[id] );
     gl.vertexAttribPointer(this.texLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["tofs"]);
     gl.activeTexture(gl.TEXTURE0);
     gl.bindTexture(gl.TEXTURE_2D, this.texture[id]);
     gl.uniform1i( this.sampler[id], 0);
     gl.enableVertexAttribArray( this.ofsLoc[id] );
     gl.vertexAttribPointer(this.ofsLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["oofs"]);
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawElements(gl.TRIANGLES, 30, gl.UNSIGNED_SHORT, 0);
   }

   // ****** lines object 291 *******
   this.drawFns[291] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.lineWidth( 1 );
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawArrays(gl.LINES, 0, 10);
   }

   // ****** text object 292 *******
   this.drawFns[292] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.uniform2f( this.textScaleLoc[id], 0.75/this.vp[2], 0.75/this.vp[3]);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.enableVertexAttribArray( this.texLoc[id] );
     gl.vertexAttribPointer(this.texLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["tofs"]);
     gl.activeTexture(gl.TEXTURE0);
     gl.bindTexture(gl.TEXTURE_2D, this.texture[id]);
     gl.uniform1i( this.sampler[id], 0);
     gl.enableVertexAttribArray( this.ofsLoc[id] );
     gl.vertexAttribPointer(this.ofsLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["oofs"]);
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawElements(gl.TRIANGLES, 24, gl.UNSIGNED_SHORT, 0);
   }

   // ****** lines object 293 *******
   this.drawFns[293] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.lineWidth( 1 );
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawArrays(gl.LINES, 0, 10);
   }

   // ****** text object 294 *******
   this.drawFns[294] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.ibuf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.uniform2f( this.textScaleLoc[id], 0.75/this.vp[2], 0.75/this.vp[3]);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.enableVertexAttribArray( this.texLoc[id] );
     gl.vertexAttribPointer(this.texLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["tofs"]);
     gl.activeTexture(gl.TEXTURE0);
     gl.bindTexture(gl.TEXTURE_2D, this.texture[id]);
     gl.uniform1i( this.sampler[id], 0);
     gl.enableVertexAttribArray( this.ofsLoc[id] );
     gl.vertexAttribPointer(this.ofsLoc[id], 2, gl.FLOAT, false, 4*this.offsets[id]["stride"], 4*this.offsets[id]["oofs"]);
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawElements(gl.TRIANGLES, 24, gl.UNSIGNED_SHORT, 0);
   }

   // ****** lines object 295 *******
   this.drawFns[295] = function(id, clipplanes) {
     gl.useProgram(this.prog[id]);
     gl.bindBuffer(gl.ARRAY_BUFFER, this.buf[id]);
     gl.uniformMatrix4fv( this.prMatLoc[id], false, new Float32Array(this.prMatrix.getAsArray()) );
     gl.uniformMatrix4fv( this.mvMatLoc[id], false, new Float32Array(this.mvMatrix.getAsArray()) );
     var clipcheck = 0;
     for (var i=0; i < clipplanes.length; i++)
       clipcheck = this.clipFns[clipplanes[i]].call(this, clipplanes[i], id, clipcheck);
     gl.enableVertexAttribArray( posLoc );
     gl.disableVertexAttribArray( colLoc );
     gl.vertexAttrib4f( colLoc, 0, 0, 0, 1 );
     gl.lineWidth( 1 );
     gl.vertexAttribPointer(posLoc,  3, gl.FLOAT, false, 4*this.offsets[id]["stride"],  4*this.offsets[id]["vofs"]);
     gl.drawArrays(gl.LINES, 0, 24);
   }

   // ***** subscene 275 ****
   this.drawFns[275] = function(id) {
     this.vp = this.viewport[id];
     gl.viewport(this.vp[0], this.vp[1], this.vp[2], this.vp[3]);
     gl.scissor(this.vp[0], this.vp[1], this.vp[2], this.vp[3]);
     gl.clearColor(1, 1, 1, 1);
     gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
     this.prMatrix.makeIdentity();
     var radius = 0.2208022;
     var distance = 0.9823738;
     var t = tan(this.FOV[275]*PI/360);
     var near = distance - radius;
     var far = distance + radius;
     var hlen = t*near;
     var aspect = this.vp[2]/this.vp[3];
     var z = this.zoom[275];
     if (aspect > 1)
       this.prMatrix.frustum(-hlen*aspect*z, hlen*aspect*z,
                        -hlen*z, hlen*z, near, far);
     else  
       this.prMatrix.frustum(-hlen*z, hlen*z,
                        -hlen*z/aspect, hlen*z/aspect,
                        near, far);

     this.mvMatrix.makeIdentity();
     this.mvMatrix.translate( 0.0191, 0.00925, -0.07605 );
     this.mvMatrix.scale( 4.151819, 1.427188, 0.6387414 );   
     this.mvMatrix.multRight( rgl.userMatrix[275] );
     this.mvMatrix.translate(-0, -0, -0.9823738);
     var clipids = this.clipplanes[id];
     if (clipids.length > 0) {
       this.invMatrix = new CanvasMatrix4(this.mvMatrix);
       this.invMatrix.invert();
       for (var i = 0; i < this.clipplanes[id].length; i++)
         this.drawFns[clipids[i]].call(this, clipids[i]);
     }
     var subids = this.opaque[id];
     for (var i = 0; i < subids.length; i++)
       this.drawFns[subids[i]].call(this, subids[i], clipids);
     subids = this.transparent[id];
     if (subids.length > 0) {
       gl.depthMask(false);
       gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA,
                          gl.ONE, gl.ONE);
       gl.enable(gl.BLEND);
       for (var i = 0; i < subids.length; i++)
         this.drawFns[subids[i]].call(this, subids[i], clipids);
     }
     subids = this.subscenes[id];
     for (var i = 0; i < subids.length; i++)
       this.drawFns[subids[i]].call(this, subids[i]);
  }

   this.drawScene();

   var vpx0 = {
       275: 0
     };
   var vpy0 = {
       275: 0
     };
   var vpWidths = {
      275: 1312
     };
   var vpHeights = {
       275: 940
     };
   var activeModel = {
      275: 275
     };
   var activeProjection = {
      275: 275
     };
   rgl.listeners = {
      275: [ 275 ]
     };

   var whichSubscene = function(coords){
     if (0 <= coords.x && coords.x <= 1312 && 0 <= coords.y && coords.y <= 940) return(275);
     return(275);
   }

   var translateCoords = function(subsceneid, coords){
     return {x:coords.x - vpx0[subsceneid], y:coords.y - vpy0[subsceneid]};
   }

   var vlen = function(v) {
     return sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2])
   }

   var xprod = function(a, b) {
     return [a[1]*b[2] - a[2]*b[1],
             a[2]*b[0] - a[0]*b[2],
             a[0]*b[1] - a[1]*b[0]];
   }

   var screenToVector = function(x, y) {
     var width = vpWidths[activeSubscene];
     var height = vpHeights[activeSubscene];
     var radius = max(width, height)/2.0;
     var cx = width/2.0;
     var cy = height/2.0;
     var px = (x-cx)/radius;
     var py = (y-cy)/radius;
     var plen = sqrt(px*px+py*py);
     if (plen > 1.e-6) {
       px = px/plen;
       py = py/plen;
     }

     var angle = (SQRT2 - plen)/SQRT2*PI/2;
     var z = sin(angle);
     var zlen = sqrt(1.0 - z*z);
     px = px * zlen;
     py = py * zlen;
     return [px, py, z];
   }

   var rotBase;

   var trackballdown = function(x,y) {
     rotBase = screenToVector(x, y);
     var l = rgl.listeners[activeModel[activeSubscene]];
     saveMat = new Object();
     for (var i = 0; i < l.length; i++)
       saveMat[l[i]] = new CanvasMatrix4(rgl.userMatrix[l[i]]);
   }

   var trackballmove = function(x,y) {
     var rotCurrent = screenToVector(x,y);
     var dot = rotBase[0]*rotCurrent[0] +
           rotBase[1]*rotCurrent[1] +
           rotBase[2]*rotCurrent[2];
     var angle = acos( dot/vlen(rotBase)/vlen(rotCurrent) )*180./PI;
     var axis = xprod(rotBase, rotCurrent);
     var l = rgl.listeners[activeModel[activeSubscene]];
     for (i = 0; i < l.length; i++) {
       rgl.userMatrix[l[i]].load(saveMat[l[i]]);
       rgl.userMatrix[l[i]].rotate(angle, axis[0], axis[1], axis[2]);
     }
     rgl.drawScene();
   }
   var trackballend = 0;

   var y0zoom = 0;
   var zoom0 = 0;
   var zoomdown = function(x, y) {
     y0zoom = y;
     zoom0 = new Object();
     l = rgl.listeners[activeProjection[activeSubscene]];
     for (i = 0; i < l.length; i++)
     zoom0[l[i]] = log(rgl.zoom[l[i]]);
   }

   var zoommove = function(x, y) {
     l = rgl.listeners[activeProjection[activeSubscene]];
     for (i = 0; i < l.length; i++)
       rgl.zoom[l[i]] = exp(zoom0[l[i]] + (y-y0zoom)/height);
     rgl.drawScene();
   }

   var zoomend = 0;

   var y0fov = 0;
   var fov0 = 0;
   var fovdown = function(x, y) {
     y0fov = y;
     fov0 = new Object();
     l = rgl.listeners[activeProjection[activeSubscene]];
     for (i = 0; i < l.length; i++)
       fov0[l[i]] = rgl.FOV[l[i]];
   }

   var fovmove = function(x, y) {
     l = rgl.listeners[activeProjection[activeSubscene]];
     for (i = 0; i < l.length; i++)
       rgl.FOV[l[i]] = max(1, min(179, fov0[l[i]] + 180*(y-y0fov)/height));
     rgl.drawScene();
   }

   var fovend = 0;

   var mousedown = [trackballdown, zoomdown, fovdown];
   var mousemove = [trackballmove, zoommove, fovmove];
   var mouseend = [trackballend, zoomend, fovend];

   function relMouseCoords(event){
     var totalOffsetX = 0;
     var totalOffsetY = 0;
     var currentElement = canvas;

     do{
       totalOffsetX += currentElement.offsetLeft;
       totalOffsetY += currentElement.offsetTop;
       currentElement = currentElement.offsetParent;
     }
     while(currentElement)

     var canvasX = event.pageX - totalOffsetX;
     var canvasY = event.pageY - totalOffsetY;

     return {x:canvasX, y:canvasY}
   }

   canvas.onmousedown = function ( ev ){
     if (!ev.which) // Use w3c defns in preference to MS
       switch (ev.button) {
       case 0: ev.which = 1; break;
       case 1:
       case 4: ev.which = 2; break;
       case 2: ev.which = 3;
     }
     drag = ev.which;
     var f = mousedown[drag-1];
     if (f) {
       var coords = relMouseCoords(ev);
       coords.y = height-coords.y;
       activeSubscene = whichSubscene(coords);
       coords = translateCoords(activeSubscene, coords);
       f(coords.x, coords.y);
       ev.preventDefault();
     }
   }    

   canvas.onmouseup = function ( ev ){
     if ( drag == 0 ) return;
     var f = mouseend[drag-1];
     if (f)
       f();
     drag = 0;
   }

   canvas.onmouseout = canvas.onmouseup;

   canvas.onmousemove = function ( ev ){
     if ( drag == 0 ) return;
     var f = mousemove[drag-1];
     if (f) {
       var coords = relMouseCoords(ev);
       coords.y = height - coords.y;
       coords = translateCoords(activeSubscene, coords);
       f(coords.x, coords.y);
     }
   }

   var wheelHandler = function(ev) {
     var del = 1.1;
     if (ev.shiftKey) del = 1.01;
     var ds = ((ev.detail || ev.wheelDelta) > 0) ? del : (1 / del);
     l = rgl.listeners[activeProjection[activeSubscene]];
     for (i = 0; i < l.length; i++)
       rgl.zoom[l[i]] *= ds;
     rgl.drawScene();
     ev.preventDefault();
   };
   canvas.addEventListener("DOMMouseScroll", wheelHandler, false);
   canvas.addEventListener("mousewheel", wheelHandler, false);

}
</script>

<canvas id="canvas" class="rglWebGL" width="1" height="1"></canvas>
<p id="debug">
<img src="snapshot.png" alt="snapshot" width=1313/><br>
You must enable Javascript to view this page properly.</p>
</div>

# Backbone.Utils

Helpful utilities for Backbone Collections

## Finders

``` javascript
var a   = new Backbone.Model({id: 3, label: 'a'});
var b   = new Backbone.Model({id: 2, label: 'b'});
var c   = new Backbone.Model({id: 1, label: 'c'});
var d   = new Backbone.Model({id: 0, label: 'd'});
var d1  = new Backbone.Model({id: 1, label: 'd'});
var col = new Backbone.Collection([a,b,c,d,d1]);


col.findBy('label','b') // => returns b
col.findAllBy('label', 'd') // => returns [d,d1]
```

# Legal (MIT License)

Copyright (c) 2012 Greg Osuri.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

# Backbone.Utils

Helpful utilities for Backbone

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

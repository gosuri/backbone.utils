$(document).ready(function(){
  module("Utils.Adders");

  var a   = new Backbone.Model({id: 0, label: 'a'});
  var b   = new Backbone.Model({id: 1, label: 'b'});
  var c   = new Backbone.Model({id: 2, label: 'c'});
  var d   = new Backbone.Model({id: 3, label: 'd'});
  var d1  = new Backbone.Model({id: 4, label: 'd'});
  var col = new Backbone.Collection([a,b,c,d,d1]);

  test("Adders: addOrUpdate", function() {
    d1.label = "changed";
    col.addOrUpdate([d1]);
    equals(col.get(4).label, "changed", "label should be changed");
  });
});

$(document).ready(function(){
  module("Utils.Finders");

  var a   = new Backbone.Model({id: 3, label: 'a'});
  var b   = new Backbone.Model({id: 2, label: 'b'});
  var c   = new Backbone.Model({id: 1, label: 'c'});
  var d   = new Backbone.Model({id: 0, label: 'd'});
  var d1  = new Backbone.Model({id: 1, label: 'd'});
  var col = new Backbone.Collection([a,b,c,d,d1]);

  test("Finders: findBy", function() {
    truth   = col.findBy("label", 'b');
    expects = b;
    equals(truth, expects, "should return b");
  });

  test("Finders: findAllBy", function() {
    truth   = col.findAllBy("label", 'd');
    expects = [d,d1];
    ok(_.isEqual(truth,expects), "should return d,d1");
  });

});

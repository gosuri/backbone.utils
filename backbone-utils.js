/**
 * Helpful utilities for Backbone Collections
 * @class Backbone.Utils
 */
(function() {

  Backbone.Utils = {};

  Backbone.Utils.Finders = {
    /**
     * Loops through each model in the collection and
     * returns the first model that contants the attribute
     * matching the value
     * @argument attribute The attribute of the model to match
     * @argument value The value to match against the attribute
     * @type Backbone.Model
     */
    findBy: function(attribute, value) {
      return _.find(this.models, function(model) {
        if (model.get(attribute) === value) { return model; }
      });
    },

    /**
     * Loops throught each model in the collection and
     * returns an array of all the models that contains the
     * attribute matching the value
     * @argument attribute The attribute of the model to match
     * @argument value The value to match against the attribute
     * @type Array
     */
    findAllBy: function(attribute, value) {
      return _.filter(this.models, function(model) {
        return model.get(attribute) === value;
      });
    }
  }

  _.extend(Backbone.Collection.prototype, Backbone.Utils.Finders);
}).call(this);




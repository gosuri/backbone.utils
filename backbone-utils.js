/**
 * Backbone.Utils.js 0.0.1
 * (c) 2012 Greg Osuri
 * Licensed under MIT license.
 */

(function() {

  Utils = {};

  Utils.Finders = {
    /**
     * Loops through each model in the collection and
     * returns the first model that contants the attribute
     * matching the value
     * @argument attribute The attribute of the model to match
     * @argument value The value to match against the attribute
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
  };

  Utils.Adders = {
    /**
     * Adds the model to the collection if it doesn't exist
     * in the collection or updates the model with the attributes
     * of the provided model if the model already exists the collection
     * @argument models
     * @argument options
     */
    addOrUpdate: function(models, options) {
      if (!_.isArray(models)) models = [models];
      for (i = 0; i < models.length; i++) {
        toUpdate = this.get(models[i].id);
        if (!!toUpdate) {
          toUpdate.set(models[i].attributes);
          models[i] = null;
        }
      }
      this.add(_.compact(models), options);
    }
  };

  modules = [Utils.Finders, Utils.Adders];
  _.each(modules, function(module){
    _.extend(Backbone.Collection.prototype, module);
  });

}).call(this);

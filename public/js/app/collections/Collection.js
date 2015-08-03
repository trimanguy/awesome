define(["models/Model"],
  function(Model) {

    var Collection = Backbone.Collection.extend({
      model: Model
    });

    return Collection;
  });
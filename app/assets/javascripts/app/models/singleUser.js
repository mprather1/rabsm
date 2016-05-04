var singleUser = Backbone.Model.extend({
  urlRoot: "http://localhost:3000/user",
  defaults: {
    name: null,
    email: null
  }
});

singleUserView = Backbone.View.extend({

  tagName: 'li',

  template: _.template("<a href=#user/<%= id %>><%= name %></a>"),

  render: function() {
    var userTemplate = this.template(this.model.toJSON());
    this.$el.html(userTemplate);
    return this;
  }
});

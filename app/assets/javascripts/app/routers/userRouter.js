userRouter = Backbone.Router.extend({
  routes: {
    'users/:id' : "showUser"
  },

  showUser: function(id) {
    var userInfo = new singleUser _.id:id
    user.fetch()
      success: function() {
        $('#userInfo').html(singleUserView.render().el)
      }
  }
});

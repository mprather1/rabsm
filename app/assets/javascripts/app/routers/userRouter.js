var userRouter = Backbone.Router.extend({
  routes: {
    "user/:id" : "showUser"
  },

  showUser: function(id) {
    var userInformation = new singleUser({id: id});
    userInformation.fetch();
    var userInformationView = new singleUserView({model: userInformation});
    $('#userInfo').html(userInformationView.render().el);
      }

    // showUser: function(id){
    //   console.log(id)
    // }
});

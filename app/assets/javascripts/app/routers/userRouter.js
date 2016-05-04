var userRouter = Backbone.Router.extend({
  routes: {
    "user/:id" : "showUser"
  },

  // showUser: function(id) {
  //   var userInformation = new singleUser({id: id});
  //   userInformation.fetch();
  //   var userInformationView = new singleUserView({model: userInformation});
  //   $('#userInfo').html(userInformationView.render().el);
  //     }

  // showUser: function(id) {
  //   var userInformation = new singleUser({id: id});
  //   userInformation.fetch();
  //   success: function() {
  //   var informationView = new userInformationView({model: userInformation});
  //   $('#userInfo').html(informationView.render().el);
  // }
  //     }

  // showUser: function(id) {
  //   var userInformation = new singleUser({id: id});
  //   userInformation.fetch();
  //   success: function() {
  //   $('#userInfo').html(userInformationView.render().el);
  // }  }
    // showUser: function(id){
    //   console.log(id)
    // }
  showUser: function(id) {
    var user = new userCollection;
    user.fetch({
      success: function() {
        info = user.get(id);
        new singleUserView({
          el: '#userInfo',
          model: user
        }).render();
      }
    });
  }
});

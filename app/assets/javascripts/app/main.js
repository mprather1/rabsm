$(function() {
  var userGroupView = new userCollectionView();
  $('#allUsers').html(userGroupView.el)
});

var Router = new userRouter();

Backbone.history.start();

;(function() {
  "use strict";
  window.LibbySite = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function(){
      new LibbySite.Views.Home({el: "#main-section"});

      var LibbySite.router = new LibbySite.Routers.Router({$el: $("#main-section")});
      Backbone.history.start();
    }
  };
}());

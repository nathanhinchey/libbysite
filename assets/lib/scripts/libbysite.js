;(function() {
  "use strict";
  window.LibbySite = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function(){
      new LibbySite.Views.Home({el: "#main-section"});

      window.LibbySite.router = new LibbySite.Routers.Router({$el: $("#main-section")});
      Backbone.history.start();
    }
  };
}());

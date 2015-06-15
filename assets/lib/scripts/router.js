;(function() {
  "use strict";
  LibbySite.Routers.Router = Backbone.Router.extend({
    initialize: function (options) {
      this.$el = options.$el;

    },

    swapView: function(newView){
      this._currentView && this._currentView.remove();
      if (newView){
        this._currentView = newView;
        this.$el.html(newView.render().$el)
      }
    },

    routes: {
      "": "home",
      "about": "about",
      "testimonials": "testimonials",
      "contact": "contact",
    },

    home: function(){
      var homeView = new LibbySite.Views.Home({$el: this.$el});
      this.swapView(homeView);
    },

    about: function(){
      var homeView = new LibbySite.Views.About({$el: this.$el});
      this.swapView(homeView);
    },

    testimonials: function(){
      var homeView = new LibbySite.Views.Testimonials({$el: this.$el});
      this.swapView(homeView);
    },

    contact: function(){
      var homeView = new LibbySite.Views.Contact({$el: this.$el});
      this.swapView(homeView);
    },
  })
}());

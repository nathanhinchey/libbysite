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
      "faq": "faq"
    },

    home: function(){
      var view = new LibbySite.Views.Home({$el: this.$el});
      this.swapView(view);
    },

    about: function(){
      var view = new LibbySite.Views.About({$el: this.$el});
      this.swapView(view);
    },

    testimonials: function(){
      var view = new LibbySite.Views.Testimonials({$el: this.$el});
      this.swapView(view);
    },

    contact: function(){
      var view = new LibbySite.Views.Contact({$el: this.$el});
      this.swapView(view);
    },

    faq: function() {
      var view = new LibbySite.Views.Faq({$el: this.$el});
      this.swapView(view);
    }
  })
}());

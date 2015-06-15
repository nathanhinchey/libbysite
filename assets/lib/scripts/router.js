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

    removeActive: function(){
      $($(".active")[0]).removeClass("active");
    },

    home: function(){
      this.removeActive();
      $("#home-nav-link").addClass("active");
      var view = new LibbySite.Views.Home({$el: this.$el});
      this.swapView(view);
    },

    about: function(){
      this.removeActive();
      $("#about-nav-link").addClass("active");
      var view = new LibbySite.Views.About({$el: this.$el});
      this.swapView(view);
    },

    testimonials: function(){
      this.removeActive();
      $("#testimonials-nav-link").addClass("active");
      var view = new LibbySite.Views.Testimonials({$el: this.$el});
      this.swapView(view);
    },

    contact: function(){
      this.removeActive();
      $("#contact-nav-link").addClass("active");
      var view = new LibbySite.Views.Contact({$el: this.$el});
      this.swapView(view);
    },

    faq: function() {
      this.removeActive();
      $("#faq-nav-link").addClass("active");
      var view = new LibbySite.Views.Faq({$el: this.$el});
      this.swapView(view);
    }
  })
}());

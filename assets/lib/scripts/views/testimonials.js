(function() {
  "use strict";
  LibbySite.Views.Home = Backbone.View.extend({
    template: function(data){
      return new EJS({url: "assets/lib/templates/testimonials.ejs"}).render(data);
    },

    tagName: "article",

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  })
}());

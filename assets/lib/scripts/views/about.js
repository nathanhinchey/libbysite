(function() {
  "use strict";
  LibbySite.Views.About = Backbone.View.extend({
    template: function(data){
      return new EJS({url: "assets/lib/templates/about.ejs"}).render(data);
    },

    tagName: "article",

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  })
}());

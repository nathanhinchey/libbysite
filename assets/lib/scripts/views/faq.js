(function() {
  "use strict";
  LibbySite.Views.Faq = Backbone.View.extend({
    template: function(data){
      return new EJS({url: "assets/lib/templates/faq.ejs"}).render(data);
    },

    tagName: "article",

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  })
}());

(function() {
  "use strict";
  LibbySite.Views.Contact = Backbone.View.extend({
    template: function(data){
      return new EJS({url: "assets/lib/templates/contact.ejs"}).render(data);
    },

    tagName: "article",

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  })
}());

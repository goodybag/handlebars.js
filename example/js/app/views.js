define(function(require) {
  var
    // Module dependencies
    $         = require('jquery')
  , Backbone  = require('backbone')
  , templates = require('app/templates')

    // Module vars
  , Views = {}
  ;

  // Reset templates to the compiled version
  // This will always be after domready so we're safe
  templates.ready(function(compiledTemplates){
    templates = compiledTemplates;
  });

  // Main app view just loads other views
  Views.Main = Backbone.View.extend({
    className: 'app-container'

  , initialize: function(){
      // Subviews make up our entire app
      this.subViews = {
        header: new Views.AppHeader({ name: "Turd Ferguson" })
      , content: new Views.AppContent({
          something: "Ideally, you would have a better view setup"
        , somethingelse: "But this is about how to use handlebars with require"
        })
      , footer: new Views.AppFooter()
      };
      return this;
    }
  , render: function(){
      // Clear old content
      this.$el.html("");
      // Render each
      this.$el.append(
        this.subViews.header.render().el
      , this.subViews.content.render().el
      , this.subViews.footer.render().el
      );
      return this;
    }
  });

  Views.AppHeader = Backbone.View.extend({
    initialize: function(options){
      this.name     = options.name;
      this.template = templates.main.header;
      return this;
    }
  , render: function(){
      this.$el.html(this.template({ name: this.name }));
      return this;
    }
  });

  Views.AppContent = Backbone.View.extend({
    initialize: function(options){
      this.something      = options.something;
      this.somethingelse  = options.somethingelse;
      this.template       = templates.main.content;
      return this;
    }
  , render: function(){
      // ya, you'd probably use a model or initialize some other Page View
      // But we'll just use this dummy data
      this.$el.html(this.template({
        something: this.something
      , somethingelse: this.somethingelse
      }));
      return this;
    }
  });

  Views.AppFooter = Backbone.View.extend({
    initialize: function(){
      this.template = templates.main.footer;
      return this;
    }
  , render: function(){
      this.$el.html(this.template());
      return this;
    }
  });

  return Views;
});
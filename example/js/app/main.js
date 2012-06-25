/*
  Our main application entry-point shouldn't do much except
  Initialize our main view. The View logic should do everything else
*/

define(function(require) {
  console.log("test");
  var
    // Module Dependencies
    $           = require('jquery')
  , domready    = require('domReady')
  , templates   = require('app/templates')
  , Views       = require('app/views')

    // Module vars
  , app = {}
  ;

  // When the template elements are ready, lets Handlebars.compile them
  domready(function(){
    templates.compile();
  });

  // When the templates are compiled
  templates.ready(function(compiledTemplates){
    console.log("templates ready");
    // Make the compiled templates available to everyone
    app.templates = compiledTemplates;
    // Init our main application view and let it handle the rest
    app.AppView = new Views.Main().render();
    // Replace all of our templates as we have them in memory now
    $(document.body).html(app.AppView.$el);
  });
});

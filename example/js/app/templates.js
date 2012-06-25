/*
  Using handlebars without Alex Sexton's wonderful plugin
  https://github.com/SlexAxton/require-handlebars-plugin

  If you don't necessarily want to put all of your templates in different files,
  You can use this method.

  Ideally, you'll be pre-compiling your templates, but if not, this method is nifty.

  I only put a template namespace, but you might have others like fragments or something
*/

define(function(require){
  var
    // Module dependencies
    $           = require('jquery')
  , handlebars  = require('handlebars')

    // Module vars
    templates               = {}
  , templatesReady          = false
  , templatesCompiling      = false
  , templatesReadyCallbacks = []

    // Private compile function for turning an
    // Object of template id's into handlebars templates
  , _compile = function(obj){
      var compiled = {};
      for (var key in obj){
        if (typeof obj[key] !== "string"){
          compiled[key] = _compile(obj[key]);
        }else {
          compiled[key] = handlebars.compile($("#" + obj[key]).html());
        }
      }
      return compiled;
    }
  ;

  /********************************\
    Specify Id's of your templates
  \********************************/

  // Main templates
  templates.main          = {};
  templates.main.header   = "main-header-tmpl";
  templates.main.content  = "main-content-tmpl";
  templates.main.footer   = "main-footer-tmpl";

  // Something else
  templates.other        = {};
  templates.other.thingy = "thingy-tmpl";
  templates.other.doodad = "doodad-tmpl";

  // Module Interface
  return {
    // Prepares the templates to be passed data
    // Should only call this when you can access your templates in the dom
    compile: function(){
      // We don't want try and compile more than once
      if (templatesReady || templatesCompiling) return;
      templatesCompiling = true;
      templates = _compile(templates);
      templatesReady = true;
      // Call all of our callbacks pass in compile templates
      for (var i = 0; i < templatesReadyCallbacks.length; i++){
        templatesReadyCallbacks[i](templates);
      }
    }

    // Pass any logic that uses templates through here to ensure they're ready
    // The callback will receive the compiled templates as the first argument
  , ready: function(fn){
      if (templatesReady) fn(templates);
      else templatesReadyCallbacks.push(fn);
    }
  };
});
/* YUI 3.9.1 (build 5852) Copyright 2013 Yahoo! Inc. http://yuilibrary.com/license/ */
if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/handlebars-base/handlebars-base.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/handlebars-base/handlebars-base.js",
    code: []
};
_yuitest_coverage["build/handlebars-base/handlebars-base.js"].code=["YUI.add('handlebars-base', function (Y, NAME) {","","/*!","Handlebars.js - Copyright (C) 2011 Yehuda Katz","https://raw.github.com/wycats/handlebars.js/master/LICENSE","*/","/* THIS FILE IS GENERATED BY A BUILD SCRIPT - DO NOT EDIT! */","","// BEGIN(BROWSER)","","/*jshint eqnull:true*/","var Handlebars = {};","","(function(Handlebars) {","","Handlebars.VERSION = \"1.0.rc.2\";","","Handlebars.helpers  = {};","Handlebars.partials = {};","","Handlebars.registerHelper = function(name, fn, inverse) {","  if(inverse) { fn.not = inverse; }","  this.helpers[name] = fn;","};","","Handlebars.registerPartial = function(name, str) {","  this.partials[name] = str;","};","","Handlebars.registerHelper('helperMissing', function(arg) {","  if(arguments.length === 2) {","    return undefined;","  } else {","    throw new Error(\"Could not find property '\" + arg + \"'\");","  }","});","","var toString = Object.prototype.toString, functionType = \"[object Function]\";","","Handlebars.registerHelper('blockHelperMissing', function(context, options) {","  var inverse = options.inverse || function() {}, fn = options.fn;","","","  var ret = \"\";","  var type = toString.call(context);","","  if(type === functionType) { context = context.call(this); }","","  if(context === true) {","    return fn(this);","  } else if(context === false || context == null) {","    return inverse(this);","  } else if(type === \"[object Array]\") {","    if(context.length > 0) {","      return Handlebars.helpers.each(context, options);","    } else {","      return inverse(this);","    }","  } else {","    return fn(context);","  }","});","","Handlebars.K = function() {};","","Handlebars.createFrame = Object.create || function(object) {","  Handlebars.K.prototype = object;","  var obj = new Handlebars.K();","  Handlebars.K.prototype = null;","  return obj;","};","","Handlebars.logger = {","  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,","","  methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},","","  // can be overridden in the host environment","  log: function(level, obj) {","    if (Handlebars.logger.level <= level) {","      var method = Handlebars.logger.methodMap[level];","      if (typeof console !== 'undefined' && console[method]) {","        console[method].call(console, obj);","      }","    }","  }","};","","Handlebars.log = function(level, obj) { Handlebars.logger.log(level, obj); };","","Handlebars.registerHelper('each', function(context, options) {","  var fn = options.fn, inverse = options.inverse;","  var i = 0, ret = \"\", data;","","  if (options.data) {","    data = Handlebars.createFrame(options.data);","  }","","  if(context && typeof context === 'object') {","    if(context instanceof Array){","      for(var j = context.length; i<j; i++) {","        if (data) { data.index = i; }","        ret = ret + fn(context[i], { data: data });","      }","    } else {","      for(var key in context) {","        if(context.hasOwnProperty(key)) {","          if(data) { data.key = key; }","          ret = ret + fn(context[key], {data: data});","          i++;","        }","      }","    }","  }","","  if(i === 0){","    ret = inverse(this);","  }","","  return ret;","});","","Handlebars.registerHelper('if', function(context, options) {","  var type = toString.call(context);","  if(type === functionType) { context = context.call(this); }","","  if(!context || Handlebars.Utils.isEmpty(context)) {","    return options.inverse(this);","  } else {","    return options.fn(this);","  }","});","","Handlebars.registerHelper('unless', function(context, options) {","  var fn = options.fn, inverse = options.inverse;","  options.fn = inverse;","  options.inverse = fn;","","  return Handlebars.helpers['if'].call(this, context, options);","});","","Handlebars.registerHelper('with', function(context, options) {","  return options.fn(context);","});","","Handlebars.registerHelper('log', function(context, options) {","  var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;","  Handlebars.log(level, context);","});","","}(Handlebars));","","// END(BROWSER)","/* THIS FILE IS GENERATED BY A BUILD SCRIPT - DO NOT EDIT! */","","// BEGIN(BROWSER)","","var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];","","Handlebars.Exception = function(message) {","  var tmp = Error.prototype.constructor.apply(this, arguments);","","  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.","  for (var idx = 0; idx < errorProps.length; idx++) {","    this[errorProps[idx]] = tmp[errorProps[idx]];","  }","};","Handlebars.Exception.prototype = new Error();","","// Build out our basic SafeString type","Handlebars.SafeString = function(string) {","  this.string = string;","};","Handlebars.SafeString.prototype.toString = function() {","  return this.string.toString();","};","","(function() {","  var escape = {","    \"&\": \"&amp;\",","    \"<\": \"&lt;\",","    \">\": \"&gt;\",","    '\"': \"&quot;\",","    \"'\": \"&#x27;\",","    \"`\": \"&#x60;\"","  };","","  var badChars = /[&<>\"'`]/g;","  var possible = /[&<>\"'`]/;","","  var escapeChar = function(chr) {","    return escape[chr] || \"&amp;\";","  };","","  Handlebars.Utils = {","    escapeExpression: function(string) {","      // don't escape SafeStrings, since they're already safe","      if (string instanceof Handlebars.SafeString) {","        return string.toString();","      } else if (string == null || string === false) {","        return \"\";","      }","","      if(!possible.test(string)) { return string; }","      return string.replace(badChars, escapeChar);","    },","","    isEmpty: function(value) {","      if (!value && value !== 0) {","        return true;","      } else if(Object.prototype.toString.call(value) === \"[object Array]\" && value.length === 0) {","        return true;","      } else {","        return false;","      }","    }","  };","})();","// END(BROWSER)","/* THIS FILE IS GENERATED BY A BUILD SCRIPT - DO NOT EDIT! */","","// BEGIN(BROWSER)","Handlebars.VM = {","  template: function(templateSpec) {","    // Just add water","    var container = {","      escapeExpression: Handlebars.Utils.escapeExpression,","      invokePartial: Handlebars.VM.invokePartial,","      programs: [],","      program: function(i, fn, data) {","        var programWrapper = this.programs[i];","        if(data) {","          return Handlebars.VM.program(fn, data);","        } else if(programWrapper) {","          return programWrapper;","        } else {","          programWrapper = this.programs[i] = Handlebars.VM.program(fn);","          return programWrapper;","        }","      },","      programWithDepth: Handlebars.VM.programWithDepth,","      noop: Handlebars.VM.noop","    };","","    return function(context, options) {","      options = options || {};","      return templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);","    };","  },","","  programWithDepth: function(fn, data, $depth) {","    var args = Array.prototype.slice.call(arguments, 2);","","    return function(context, options) {","      options = options || {};","","      return fn.apply(this, [context, options.data || data].concat(args));","    };","  },","  program: function(fn, data) {","    return function(context, options) {","      options = options || {};","","      return fn(context, options.data || data);","    };","  },","  noop: function() { return \"\"; },","  invokePartial: function(partial, name, context, helpers, partials, data) {","    var options = { helpers: helpers, partials: partials, data: data };","","    if(partial === undefined) {","      throw new Handlebars.Exception(\"The partial \" + name + \" could not be found\");","    } else if(partial instanceof Function) {","      return partial(context, options);","    } else if (!Handlebars.compile) {","      throw new Handlebars.Exception(\"The partial \" + name + \" could not be compiled when running in runtime-only mode\");","    } else {","      partials[name] = Handlebars.compile(partial, {data: data !== undefined});","      return partials[name](context, options);","    }","  }","};","","Handlebars.template = Handlebars.VM.template;","","// END(BROWSER)","// This file contains YUI-specific wrapper code and overrides for the","// handlebars-base module.","","/**","Handlebars is a simple template language inspired by Mustache.","","This is a YUI port of the original Handlebars project, which can be found at","<https://github.com/wycats/handlebars.js>.","","@module handlebars","@main handlebars","@since 3.5.0","*/","","/**","Provides basic Handlebars template rendering functionality. Use this module when","you only need to render pre-compiled templates.","","@module handlebars","@submodule handlebars-base","*/","","/**","Handlebars is a simple template language inspired by Mustache.","","This is a YUI port of the original Handlebars project, which can be found at","<https://github.com/wycats/handlebars.js>.","","@class Handlebars","@since 3.5.0","*/","Y.Handlebars = Handlebars;","","Handlebars.VERSION += '-yui';","","/**","Registers a helper function that will be made available to all templates.","","Helper functions receive the current template context as the `this` object, and","can also receive arguments passed by the template.","","@example","","    Y.Handlebars.registerHelper('linkify', function () {","        return '<a href=\"' + Y.Escape.html(this.url) + '\">' +","            Y.Escape.html(this.text) + '</a>';","    });","","    var source = '<ul>{{#links}}<li>{{{linkify}}}</li>{{/links}}</ul>';","","    Y.Handlebars.render(source, {","        links: [","            {url: '/foo', text: 'Foo'},","            {url: '/bar', text: 'Bar'},","            {url: '/baz', text: 'Baz'}","        ]","    });","","@method registerHelper","@param {String} name Name of this helper.","@param {Function} fn Helper function.","@param {Boolean} [inverse=false] If `true`, this helper will be considered an","    \"inverse\" helper, like \"unless\". This means it will only be called if the","    expression given in the template evaluates to a false or empty value.","*/","","/**","Registers a partial that will be made available to all templates.","","A partial is another template that can be used to render part of a larger","template. For example, a website with a common header and footer across all its","pages might use a template for each page, which would call shared partials to","render the headers and footers.","","Partials may be specified as uncompiled template strings or as compiled template","functions.","","@example","","    Y.Handlebars.registerPartial('header', '<h1>{{title}}</h1>');","    Y.Handlebars.registerPartial('footer', 'Copyright (c) 2011 by Me.');","","    var source = '{{> header}} <p>Mustaches are awesome!</p> {{> footer}}';","","    Y.Handlebars.render(source, {title: 'My Page About Mustaches'});","","@method registerPartial","@param {String} name Name of this partial.","@param {Function|String} partial Template string or compiled template function.","*/","","/**","Converts a precompiled template into a renderable template function.","","@example","","    <script src=\"precompiled-template.js\"></script>","    <script>","    YUI().use('handlebars-base', function (Y) {","        // Convert the precompiled template function into a renderable template","        // function.","        var template = Y.Handlebars.template(precompiledTemplate);","","        // Render it.","        template({pie: 'Pumpkin'});","    });","    </script>","","@method template","@param {Function} template Precompiled Handlebars template function.","@return {Function} Compiled template function.","*/","","// Alias for Y.Handlebars.template(), used by Y.Template.","Handlebars.revive = Handlebars.template;","","// Make Y.Template.Handlebars an alias for Y.Handlebars.","Y.namespace('Template').Handlebars = Handlebars;","","","}, '3.9.1', {\"requires\": []});"];
_yuitest_coverage["build/handlebars-base/handlebars-base.js"].lines = {"1":0,"12":0,"14":0,"16":0,"18":0,"19":0,"21":0,"22":0,"23":0,"26":0,"27":0,"30":0,"31":0,"32":0,"34":0,"38":0,"40":0,"41":0,"44":0,"45":0,"47":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"57":0,"60":0,"64":0,"66":0,"67":0,"68":0,"69":0,"70":0,"73":0,"80":0,"81":0,"82":0,"83":0,"89":0,"91":0,"92":0,"93":0,"95":0,"96":0,"99":0,"100":0,"101":0,"102":0,"103":0,"106":0,"107":0,"108":0,"109":0,"110":0,"116":0,"117":0,"120":0,"123":0,"124":0,"125":0,"127":0,"128":0,"130":0,"134":0,"135":0,"136":0,"137":0,"139":0,"142":0,"143":0,"146":0,"147":0,"148":0,"158":0,"160":0,"161":0,"164":0,"165":0,"168":0,"171":0,"172":0,"174":0,"175":0,"178":0,"179":0,"188":0,"189":0,"191":0,"192":0,"195":0,"198":0,"199":0,"200":0,"201":0,"204":0,"205":0,"209":0,"210":0,"211":0,"212":0,"214":0,"223":0,"226":0,"231":0,"232":0,"233":0,"234":0,"235":0,"237":0,"238":0,"245":0,"246":0,"247":0,"252":0,"254":0,"255":0,"257":0,"261":0,"262":0,"264":0,"267":0,"269":0,"271":0,"272":0,"273":0,"274":0,"275":0,"276":0,"278":0,"279":0,"284":0,"318":0,"320":0,"401":0,"404":0};
_yuitest_coverage["build/handlebars-base/handlebars-base.js"].functions = {"registerHelper:21":0,"registerPartial:26":0,"(anonymous 3):30":0,"(anonymous 4):40":0,"(anonymous 6):66":0,"log:79":0,"log:89":0,"(anonymous 7):91":0,"(anonymous 8):123":0,"(anonymous 9):134":0,"(anonymous 10):142":0,"(anonymous 11):146":0,"(anonymous 2):14":0,"Exception:160":0,"SafeString:171":0,"toString:174":0,"escapeChar:191":0,"escapeExpression:196":0,"isEmpty:208":0,"(anonymous 12):178":0,"program:230":0,"(anonymous 13):245":0,"template:224":0,"(anonymous 14):254":0,"programWithDepth:251":0,"(anonymous 15):261":0,"program:260":0,"noop:267":0,"invokePartial:268":0,"(anonymous 1):1":0};
_yuitest_coverage["build/handlebars-base/handlebars-base.js"].coveredLines = 138;
_yuitest_coverage["build/handlebars-base/handlebars-base.js"].coveredFunctions = 30;
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 1);
YUI.add('handlebars-base', function (Y, NAME) {

/*!
Handlebars.js - Copyright (C) 2011 Yehuda Katz
https://raw.github.com/wycats/handlebars.js/master/LICENSE
*/
/* THIS FILE IS GENERATED BY A BUILD SCRIPT - DO NOT EDIT! */

// BEGIN(BROWSER)

/*jshint eqnull:true*/
_yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 1)", 1);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 12);
var Handlebars = {};

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 14);
(function(Handlebars) {

_yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 2)", 14);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 16);
Handlebars.VERSION = "1.0.rc.2";

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 18);
Handlebars.helpers  = {};
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 19);
Handlebars.partials = {};

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 21);
Handlebars.registerHelper = function(name, fn, inverse) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "registerHelper", 21);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 22);
if(inverse) { fn.not = inverse; }
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 23);
this.helpers[name] = fn;
};

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 26);
Handlebars.registerPartial = function(name, str) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "registerPartial", 26);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 27);
this.partials[name] = str;
};

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 30);
Handlebars.registerHelper('helperMissing', function(arg) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 3)", 30);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 31);
if(arguments.length === 2) {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 32);
return undefined;
  } else {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 34);
throw new Error("Could not find property '" + arg + "'");
  }
});

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 38);
var toString = Object.prototype.toString, functionType = "[object Function]";

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 40);
Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 4)", 40);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 41);
var inverse = options.inverse || function() {}, fn = options.fn;


  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 44);
var ret = "";
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 45);
var type = toString.call(context);

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 47);
if(type === functionType) { context = context.call(this); }

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 49);
if(context === true) {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 50);
return fn(this);
  } else {_yuitest_coverline("build/handlebars-base/handlebars-base.js", 51);
if(context === false || context == null) {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 52);
return inverse(this);
  } else {_yuitest_coverline("build/handlebars-base/handlebars-base.js", 53);
if(type === "[object Array]") {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 54);
if(context.length > 0) {
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 55);
return Handlebars.helpers.each(context, options);
    } else {
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 57);
return inverse(this);
    }
  } else {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 60);
return fn(context);
  }}}
});

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 64);
Handlebars.K = function() {};

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 66);
Handlebars.createFrame = Object.create || function(object) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 6)", 66);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 67);
Handlebars.K.prototype = object;
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 68);
var obj = new Handlebars.K();
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 69);
Handlebars.K.prototype = null;
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 70);
return obj;
};

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 73);
Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},

  // can be overridden in the host environment
  log: function(level, obj) {
    _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "log", 79);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 80);
if (Handlebars.logger.level <= level) {
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 81);
var method = Handlebars.logger.methodMap[level];
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 82);
if (typeof console !== 'undefined' && console[method]) {
        _yuitest_coverline("build/handlebars-base/handlebars-base.js", 83);
console[method].call(console, obj);
      }
    }
  }
};

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 89);
Handlebars.log = function(level, obj) { _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "log", 89);
Handlebars.logger.log(level, obj); };

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 91);
Handlebars.registerHelper('each', function(context, options) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 7)", 91);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 92);
var fn = options.fn, inverse = options.inverse;
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 93);
var i = 0, ret = "", data;

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 95);
if (options.data) {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 96);
data = Handlebars.createFrame(options.data);
  }

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 99);
if(context && typeof context === 'object') {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 100);
if(context instanceof Array){
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 101);
for(var j = context.length; i<j; i++) {
        _yuitest_coverline("build/handlebars-base/handlebars-base.js", 102);
if (data) { data.index = i; }
        _yuitest_coverline("build/handlebars-base/handlebars-base.js", 103);
ret = ret + fn(context[i], { data: data });
      }
    } else {
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 106);
for(var key in context) {
        _yuitest_coverline("build/handlebars-base/handlebars-base.js", 107);
if(context.hasOwnProperty(key)) {
          _yuitest_coverline("build/handlebars-base/handlebars-base.js", 108);
if(data) { data.key = key; }
          _yuitest_coverline("build/handlebars-base/handlebars-base.js", 109);
ret = ret + fn(context[key], {data: data});
          _yuitest_coverline("build/handlebars-base/handlebars-base.js", 110);
i++;
        }
      }
    }
  }

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 116);
if(i === 0){
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 117);
ret = inverse(this);
  }

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 120);
return ret;
});

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 123);
Handlebars.registerHelper('if', function(context, options) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 8)", 123);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 124);
var type = toString.call(context);
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 125);
if(type === functionType) { context = context.call(this); }

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 127);
if(!context || Handlebars.Utils.isEmpty(context)) {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 128);
return options.inverse(this);
  } else {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 130);
return options.fn(this);
  }
});

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 134);
Handlebars.registerHelper('unless', function(context, options) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 9)", 134);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 135);
var fn = options.fn, inverse = options.inverse;
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 136);
options.fn = inverse;
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 137);
options.inverse = fn;

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 139);
return Handlebars.helpers['if'].call(this, context, options);
});

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 142);
Handlebars.registerHelper('with', function(context, options) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 10)", 142);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 143);
return options.fn(context);
});

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 146);
Handlebars.registerHelper('log', function(context, options) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 11)", 146);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 147);
var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 148);
Handlebars.log(level, context);
});

}(Handlebars));

// END(BROWSER)
/* THIS FILE IS GENERATED BY A BUILD SCRIPT - DO NOT EDIT! */

// BEGIN(BROWSER)

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 158);
var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 160);
Handlebars.Exception = function(message) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "Exception", 160);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 161);
var tmp = Error.prototype.constructor.apply(this, arguments);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 164);
for (var idx = 0; idx < errorProps.length; idx++) {
    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 165);
this[errorProps[idx]] = tmp[errorProps[idx]];
  }
};
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 168);
Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 171);
Handlebars.SafeString = function(string) {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "SafeString", 171);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 172);
this.string = string;
};
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 174);
Handlebars.SafeString.prototype.toString = function() {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "toString", 174);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 175);
return this.string.toString();
};

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 178);
(function() {
  _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 12)", 178);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 179);
var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 188);
var badChars = /[&<>"'`]/g;
  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 189);
var possible = /[&<>"'`]/;

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 191);
var escapeChar = function(chr) {
    _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "escapeChar", 191);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 192);
return escape[chr] || "&amp;";
  };

  _yuitest_coverline("build/handlebars-base/handlebars-base.js", 195);
Handlebars.Utils = {
    escapeExpression: function(string) {
      // don't escape SafeStrings, since they're already safe
      _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "escapeExpression", 196);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 198);
if (string instanceof Handlebars.SafeString) {
        _yuitest_coverline("build/handlebars-base/handlebars-base.js", 199);
return string.toString();
      } else {_yuitest_coverline("build/handlebars-base/handlebars-base.js", 200);
if (string == null || string === false) {
        _yuitest_coverline("build/handlebars-base/handlebars-base.js", 201);
return "";
      }}

      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 204);
if(!possible.test(string)) { return string; }
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 205);
return string.replace(badChars, escapeChar);
    },

    isEmpty: function(value) {
      _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "isEmpty", 208);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 209);
if (!value && value !== 0) {
        _yuitest_coverline("build/handlebars-base/handlebars-base.js", 210);
return true;
      } else {_yuitest_coverline("build/handlebars-base/handlebars-base.js", 211);
if(Object.prototype.toString.call(value) === "[object Array]" && value.length === 0) {
        _yuitest_coverline("build/handlebars-base/handlebars-base.js", 212);
return true;
      } else {
        _yuitest_coverline("build/handlebars-base/handlebars-base.js", 214);
return false;
      }}
    }
  };
})();
// END(BROWSER)
/* THIS FILE IS GENERATED BY A BUILD SCRIPT - DO NOT EDIT! */

// BEGIN(BROWSER)
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 223);
Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "template", 224);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 226);
var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "program", 230);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 231);
var programWrapper = this.programs[i];
        _yuitest_coverline("build/handlebars-base/handlebars-base.js", 232);
if(data) {
          _yuitest_coverline("build/handlebars-base/handlebars-base.js", 233);
return Handlebars.VM.program(fn, data);
        } else {_yuitest_coverline("build/handlebars-base/handlebars-base.js", 234);
if(programWrapper) {
          _yuitest_coverline("build/handlebars-base/handlebars-base.js", 235);
return programWrapper;
        } else {
          _yuitest_coverline("build/handlebars-base/handlebars-base.js", 237);
programWrapper = this.programs[i] = Handlebars.VM.program(fn);
          _yuitest_coverline("build/handlebars-base/handlebars-base.js", 238);
return programWrapper;
        }}
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop
    };

    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 245);
return function(context, options) {
      _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 13)", 245);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 246);
options = options || {};
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 247);
return templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);
    };
  },

  programWithDepth: function(fn, data, $depth) {
    _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "programWithDepth", 251);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 252);
var args = Array.prototype.slice.call(arguments, 2);

    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 254);
return function(context, options) {
      _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 14)", 254);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 255);
options = options || {};

      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 257);
return fn.apply(this, [context, options.data || data].concat(args));
    };
  },
  program: function(fn, data) {
    _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "program", 260);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 261);
return function(context, options) {
      _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "(anonymous 15)", 261);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 262);
options = options || {};

      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 264);
return fn(context, options.data || data);
    };
  },
  noop: function() { _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "noop", 267);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 267);
return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    _yuitest_coverfunc("build/handlebars-base/handlebars-base.js", "invokePartial", 268);
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 269);
var options = { helpers: helpers, partials: partials, data: data };

    _yuitest_coverline("build/handlebars-base/handlebars-base.js", 271);
if(partial === undefined) {
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 272);
throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else {_yuitest_coverline("build/handlebars-base/handlebars-base.js", 273);
if(partial instanceof Function) {
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 274);
return partial(context, options);
    } else {_yuitest_coverline("build/handlebars-base/handlebars-base.js", 275);
if (!Handlebars.compile) {
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 276);
throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 278);
partials[name] = Handlebars.compile(partial, {data: data !== undefined});
      _yuitest_coverline("build/handlebars-base/handlebars-base.js", 279);
return partials[name](context, options);
    }}}
  }
};

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 284);
Handlebars.template = Handlebars.VM.template;

// END(BROWSER)
// This file contains YUI-specific wrapper code and overrides for the
// handlebars-base module.

/**
Handlebars is a simple template language inspired by Mustache.

This is a YUI port of the original Handlebars project, which can be found at
<https://github.com/wycats/handlebars.js>.

@module handlebars
@main handlebars
@since 3.5.0
*/

/**
Provides basic Handlebars template rendering functionality. Use this module when
you only need to render pre-compiled templates.

@module handlebars
@submodule handlebars-base
*/

/**
Handlebars is a simple template language inspired by Mustache.

This is a YUI port of the original Handlebars project, which can be found at
<https://github.com/wycats/handlebars.js>.

@class Handlebars
@since 3.5.0
*/
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 318);
Y.Handlebars = Handlebars;

_yuitest_coverline("build/handlebars-base/handlebars-base.js", 320);
Handlebars.VERSION += '-yui';

/**
Registers a helper function that will be made available to all templates.

Helper functions receive the current template context as the `this` object, and
can also receive arguments passed by the template.

@example

    Y.Handlebars.registerHelper('linkify', function () {
        return '<a href="' + Y.Escape.html(this.url) + '">' +
            Y.Escape.html(this.text) + '</a>';
    });

    var source = '<ul>{{#links}}<li>{{{linkify}}}</li>{{/links}}</ul>';

    Y.Handlebars.render(source, {
        links: [
            {url: '/foo', text: 'Foo'},
            {url: '/bar', text: 'Bar'},
            {url: '/baz', text: 'Baz'}
        ]
    });

@method registerHelper
@param {String} name Name of this helper.
@param {Function} fn Helper function.
@param {Boolean} [inverse=false] If `true`, this helper will be considered an
    "inverse" helper, like "unless". This means it will only be called if the
    expression given in the template evaluates to a false or empty value.
*/

/**
Registers a partial that will be made available to all templates.

A partial is another template that can be used to render part of a larger
template. For example, a website with a common header and footer across all its
pages might use a template for each page, which would call shared partials to
render the headers and footers.

Partials may be specified as uncompiled template strings or as compiled template
functions.

@example

    Y.Handlebars.registerPartial('header', '<h1>{{title}}</h1>');
    Y.Handlebars.registerPartial('footer', 'Copyright (c) 2011 by Me.');

    var source = '{{> header}} <p>Mustaches are awesome!</p> {{> footer}}';

    Y.Handlebars.render(source, {title: 'My Page About Mustaches'});

@method registerPartial
@param {String} name Name of this partial.
@param {Function|String} partial Template string or compiled template function.
*/

/**
Converts a precompiled template into a renderable template function.

@example

    <script src="precompiled-template.js"></script>
    <script>
    YUI().use('handlebars-base', function (Y) {
        // Convert the precompiled template function into a renderable template
        // function.
        var template = Y.Handlebars.template(precompiledTemplate);

        // Render it.
        template({pie: 'Pumpkin'});
    });
    </script>

@method template
@param {Function} template Precompiled Handlebars template function.
@return {Function} Compiled template function.
*/

// Alias for Y.Handlebars.template(), used by Y.Template.
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 401);
Handlebars.revive = Handlebars.template;

// Make Y.Template.Handlebars an alias for Y.Handlebars.
_yuitest_coverline("build/handlebars-base/handlebars-base.js", 404);
Y.namespace('Template').Handlebars = Handlebars;


}, '3.9.1', {"requires": []});

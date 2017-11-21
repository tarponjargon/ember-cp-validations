"use strict"
define("dummy/adapters/application",["exports","ember-data/adapters/rest"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({})}),define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,a,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var l=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:a.default});(0,n.default)(l,r.default.modulePrefix),e.default=l}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=self.require("highlight.js")
e.default=t.default.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e
for(var t,a,n=e.split("\n").filter(function(e){return""!==e}),r=0;r<n.length;r++)(t=/^[ \t]*/.exec(n[r]))&&(void 0===a||a>t[0].length)&&(a=t[0].length)
return void 0!==a&&a>0&&(e=e.replace(new RegExp("^[ \t]{"+a+"}","gm"),"")),e},source:t.default.computed("name",function(){return this._unindent((a.default[this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){n.highlightBlock(this.get("element"))},language:t.default.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"))
if(e)switch(e[1].toLowerCase()){case"js":return"javascript"
case"coffee":return"coffeescript"
case"hbs":return"htmlbars"
case"css":return"css"
case"scss":return"scss"
case"less":return"less"
case"emblem":return"emblem"
case"ts":return"typescript"}})})}),define("dummy/components/fa-icon",["exports","ember-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/fa-list",["exports","ember-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/fa-stack",["exports","ember-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/validated-input",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var a=t.default.computed,n=t.default.defineProperty
e.default=t.default.Component.extend({classNames:["validated-input"],classNameBindings:["showErrorClass:has-error","isValid:has-success"],model:null,value:null,type:"text",valuePath:"",placeholder:"",validation:null,showValidations:!1,didValidate:!1,notValidating:a.not("validation.isValidating").readOnly(),hasContent:a.notEmpty("value").readOnly(),hasWarnings:a.notEmpty("validation.warnings").readOnly(),isValid:a.and("hasContent","validation.isTruelyValid").readOnly(),shouldDisplayValidations:a.or("showValidations","didValidate","hasContent").readOnly(),showErrorClass:a.and("notValidating","showErrorMessage","hasContent","validation").readOnly(),showErrorMessage:a.and("shouldDisplayValidations","validation.isInvalid").readOnly(),showWarningMessage:a.and("shouldDisplayValidations","hasWarnings","isValid").readOnly(),init:function(){this._super.apply(this,arguments)
var e=this.get("valuePath")
n(this,"validation",a.readOnly("model.validations.attrs."+e)),n(this,"value",a.alias("model."+e))},focusOut:function(){this._super.apply(this,arguments),this.set("showValidations",!0)}})}),define("dummy/controllers/index",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Controller.extend({showAlert:!1,isRegistered:!1,showCode:!1,didValidate:!1,actions:{validate:function(){var e=this
this.get("model").validate().then(function(t){var a=t.validations
e.set("didValidate",!0),a.get("isValid")?e.setProperties({showAlert:!1,isRegistered:!0,showCode:!1}):e.set("showAlert",!0)})},toggleProperty:function(e){this.toggleProperty(e)}}})}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.andHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.andHelper)),e.default=n}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a,n){function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?l.match(n.versionRegExp)[0]:t.hideVersion?l.match(n.shaRegExp)[0]:l}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r
var l=a.default.APP.version
e.default=t.default.Helper.helper(r)}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.equalHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.equalHelper)),e.default=n}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.gtHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.gtHelper)),e.default=n}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.gteHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.gteHelper)),e.default=n}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.isArrayHelper)),e.default=n}),define("dummy/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.ltHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.ltHelper)),e.default=n}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.lteHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.lteHelper)),e.default=n}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.notEqualHelper)),e.default=n}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.notHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.notHelper)),e.default=n}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.orHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.orHelper)),e.default=n}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=null
t.default.Helper?n=t.default.Helper.helper(a.xorHelper):t.default.HTMLBars.makeBoundHelper&&(n=t.default.HTMLBars.makeBoundHelper(a.xorHelper)),e.default=n}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=a.default.APP,r=n.name,l=n.version
e.default={name:"App Version",initialize:(0,t.default)(r,l)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0]
if(!1!==a.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,l=a.default.exportApplicationGlobal
r="string"==typeof l?l:t.default.String.classify(a.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}})
define("dummy/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,a,n,r,l,i,d,o,s,u,p,f){function m(){t.default.Helper||((0,a.registerHelper)("and",n.andHelper),(0,a.registerHelper)("or",r.orHelper),(0,a.registerHelper)("eq",l.equalHelper),(0,a.registerHelper)("not",i.notHelper),(0,a.registerHelper)("is-array",d.isArrayHelper),(0,a.registerHelper)("not-eq",o.notEqualHelper),(0,a.registerHelper)("gt",s.gtHelper),(0,a.registerHelper)("gte",u.gteHelper),(0,a.registerHelper)("lt",p.ltHelper),(0,a.registerHelper)("lte",f.lteHelper))}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=m,e.default={name:"truth-helpers",initialize:m}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("dummy/models/order-line",["exports","ember-data","ember-cp-validations"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=(0,a.buildValidations)({type:{description:"Order Line Type",validators:[(0,a.validator)("ds-error"),(0,a.validator)("presence",!0)]},order:{description:"Order",validators:[(0,a.validator)("ds-error"),(0,a.validator)("presence",!0)]},selections:{description:"Order Selections",validators:[(0,a.validator)("ds-error"),(0,a.validator)("has-many"),(0,a.validator)("presence",!0)]}})
e.default=t.default.Model.extend(n,{order:t.default.belongsTo("order",{async:!0}),selections:t.default.hasMany("order-selection",{async:!0}),type:t.default.attr("string")})}),define("dummy/models/order-selection-question",["exports","ember-data","ember-cp-validations"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=(0,a.buildValidations)({order:{description:"Order",validators:[(0,a.validator)("ds-error"),(0,a.validator)("presence",!0)]},selection:{description:"Order Selection",validators:[(0,a.validator)("ds-error"),(0,a.validator)("presence",!0)]},text:{description:"Question Text",validators:[(0,a.validator)("ds-error"),(0,a.validator)("presence",!0)]}},{debounce:10})
e.default=t.default.Model.extend(n,{order:t.default.belongsTo("order",{async:!0}),selection:t.default.belongsTo("order-selection",{async:!0}),text:t.default.attr("string")})}),define("dummy/models/order-selection",["exports","ember-data","ember-cp-validations"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=(0,a.buildValidations)({quantity:{description:"Quantity",validators:[(0,a.validator)("ds-error"),(0,a.validator)("number",{gte:1})]},order:{description:"Order",validators:[(0,a.validator)("ds-error"),(0,a.validator)("belongs-to"),(0,a.validator)("presence",!0)]},line:{description:"Order Line",validators:[(0,a.validator)("ds-error"),(0,a.validator)("presence",!0)]},questions:{description:"Order Selection Questions",validators:[(0,a.validator)("ds-error"),(0,a.validator)("has-many"),(0,a.validator)("length",{min:1})]}})
e.default=t.default.Model.extend(n,{order:t.default.belongsTo("order",{async:!0}),line:t.default.belongsTo("order-line",{async:!0}),questions:t.default.hasMany("order-selection-question",{async:!0}),quantity:t.default.attr("number")})}),define("dummy/models/order",["exports","ember-data","ember-cp-validations"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=(0,a.buildValidations)({source:{description:"Order Source",validators:[(0,a.validator)("ds-error"),(0,a.validator)("presence",!0)]},lines:{description:"Order Lines",validators:[(0,a.validator)("ds-error"),(0,a.validator)("has-many"),(0,a.validator)("presence",!0)]}})
e.default=t.default.Model.extend(n,{source:t.default.attr("string"),lines:t.default.hasMany("order-line",{async:!0})})}),define("dummy/models/signup",["exports","ember-data","ember-cp-validations"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=(0,a.buildValidations)({name:(0,a.validator)("presence",!0),acceptTerms:(0,a.validator)(function(e){return e||"You must accept the terms."})})
e.default=t.default.Model.extend(n,{name:t.default.attr("string",{defaultValue:""}),acceptTerms:t.default.attr("boolean",{defaultValue:!1})})}),define("dummy/models/user-detail",["exports","ember","ember-data","moment","ember-cp-validations"],function(e,t,a,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var l=t.default.computed,i=a.default.attr,d=(0,r.buildValidations)({firstName:(0,r.validator)("presence",!0),lastName:(0,r.validator)("presence",!0),dob:{description:"Date of  birth",validators:[(0,r.validator)("presence",!0),(0,r.validator)("date",{before:"now",after:l(function(){return(0,n.default)().subtract(120,"years").format("M/D/YYYY")}).volatile(),format:"M/D/YYYY",message:function(e,t){return"before"===e?"Are you from the future?":"after"===e?"There is no way you are "+(0,n.default)().diff(t,"years")+" years old":void 0}})]},phone:[(0,r.validator)("format",{allowBlank:!0,type:"phone"})],url:[(0,r.validator)("format",{allowBlank:!0,type:"url"})]},{debounce:500})
e.default=a.default.Model.extend(d,{firstName:i("string"),lastName:i("string"),dob:i("date"),phone:i("string"),url:i("string")})}),define("dummy/models/user",["exports","ember-data","ember-cp-validations"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=t.default.attr,r=(0,a.buildValidations)({username:{description:"Username",validators:[(0,a.validator)("presence",!0),(0,a.validator)("length",{min:5,max:15})]},password:{description:"Password",validators:[(0,a.validator)("presence",!0),(0,a.validator)("length",{min:4,max:10}),(0,a.validator)("format",{regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/,message:"{description} must include at least one upper case letter, one lower case letter, and a number"}),(0,a.validator)("length",{isWarning:!0,min:6,message:"What kind of weak password is that?"})]},email:{validators:[(0,a.validator)("presence",!0),(0,a.validator)("format",{type:"email"})]},emailConfirmation:(0,a.validator)("confirmation",{on:"email",message:"Email addresses do not match"}),details:(0,a.validator)("belongs-to")},{debounce:500})
e.default=t.default.Model.extend(r,{username:n("string"),password:n("string"),email:n("string"),details:t.default.belongsTo("user-detail")})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=t.default.Router.extend({location:a.default.locationType,rootURL:a.default.rootURL})
n.map(function(){}),e.default=n}),define("dummy/routes/index",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Route.extend({model:function(){return this.store.createRecord("user",{details:this.store.createRecord("user-detail")})},setupController:function(e){e.setProperties({showAlert:!1,isRegistered:!1,showCode:!1,didValidate:!1}),this._super.apply(this,arguments)},actions:{reset:function(){this.refresh()}}})}),define("dummy/snippets",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={"user-detail-model.js":"import Ember from 'ember';\nimport DS from 'ember-data';\nimport moment from 'moment';\nimport { validator, buildValidations } from 'ember-cp-validations';\n\nconst { computed } = Ember;\nconst { attr } = DS;\n\nconst Validations = buildValidations({\n  firstName: validator('presence', true),\n  lastName: validator('presence', true),\n  dob: {\n    description: 'Date of  birth',\n    validators: [\n      validator('presence', true),\n      validator('date', {\n        before: 'now',\n        after: computed(function() {\n          return moment().subtract(120, 'years').format('M/D/YYYY');\n        }).volatile(),\n        format: 'M/D/YYYY',\n        message(type, value /*, context */) {\n          if (type === 'before') {\n            return 'Are you from the future?';\n          }\n          if (type === 'after') {\n            return `There is no way you are ${moment().diff(value, 'years')} years old`;\n          }\n        }\n      })\n    ]\n  },\n  phone: [\n    validator('format', {\n      allowBlank: true,\n      type: 'phone'\n    })\n  ],\n  url: [\n    validator('format', {\n      allowBlank: true,\n      type: 'url'\n    })\n  ]\n}, {\n  debounce: 500\n});\n\nexport default DS.Model.extend(Validations, {\n  firstName: attr('string'),\n  lastName: attr('string'),\n  dob: attr('date'),\n  phone: attr('string'),\n  url: attr('string')\n});","user-model.js":"import DS from 'ember-data';\nimport { validator, buildValidations } from 'ember-cp-validations';\n\nconst { attr } = DS;\n\nconst Validations = buildValidations({\n  username: {\n    description: 'Username',\n    validators: [\n      validator('presence', true),\n      validator('length', {\n        min: 5,\n        max: 15\n      })\n    ]\n  },\n  password: {\n    description: 'Password',\n    validators: [\n      validator('presence', true),\n      validator('length', {\n        min: 4,\n        max: 10\n      }),\n      validator('format', {\n        regex: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/,\n        message: '{description} must include at least one upper case letter, one lower case letter, and a number'\n      }),\n      validator('length', {\n        isWarning: true,\n        min: 6,\n        message: 'What kind of weak password is that?'\n      })\n    ]\n  },\n  email: {\n    validators: [\n      validator('presence', true),\n      validator('format', {\n        type: 'email'\n      })\n    ]\n  },\n  emailConfirmation: validator('confirmation', {\n    on: 'email',\n    message: 'Email addresses do not match'\n  }),\n  details: validator('belongs-to')\n}, {\n  debounce: 500\n});\n\nexport default DS.Model.extend(Validations, {\n  username: attr('string'),\n  password: attr('string'),\n  email: attr('string'),\n  details: DS.belongsTo('user-detail')\n});","validated-input.hbs":"<div class='form-group'>\n  {{input type=type value=value placeholder=placeholder class='form-control' name=valuePath}}\n  {{#if isValid}}\n    <span class='valid-input fa fa-check'></span>\n  {{/if}}\n\n  <div class='input-error'>\n    {{#if showErrorMessage}}\n      <div class='error'>\n        {{v-get model valuePath 'message'}}\n      </div>\n    {{/if}}\n\n    {{#if showWarningMessage}}\n      <div class='warning'>\n        {{v-get model valuePath 'warningMessage'}}\n      </div>\n    {{/if}}\n  </div>\n</div>","validated-input.js":"import Ember from 'ember';\n\nconst {\n  computed,\n  defineProperty\n} = Ember;\n\nexport default Ember.Component.extend({\n  classNames: ['validated-input'],\n  classNameBindings: ['showErrorClass:has-error', 'isValid:has-success'],\n  model: null,\n  value: null,\n  type: 'text',\n  valuePath: '',\n  placeholder: '',\n  validation: null,\n  showValidations: false,\n  didValidate: false,\n\n  notValidating: computed.not('validation.isValidating').readOnly(),\n  hasContent: computed.notEmpty('value').readOnly(),\n  hasWarnings: computed.notEmpty('validation.warnings').readOnly(),\n  isValid: computed.and('hasContent', 'validation.isTruelyValid').readOnly(),\n  shouldDisplayValidations: computed.or('showValidations', 'didValidate', 'hasContent').readOnly(),\n\n  showErrorClass: computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation').readOnly(),\n  showErrorMessage: computed.and('shouldDisplayValidations', 'validation.isInvalid').readOnly(),\n  showWarningMessage: computed.and('shouldDisplayValidations', 'hasWarnings', 'isValid').readOnly(),\n\n  init() {\n    this._super(...arguments);\n    let valuePath = this.get('valuePath');\n\n    defineProperty(this, 'validation', computed.readOnly(`model.validations.attrs.${valuePath}`));\n    defineProperty(this, 'value', computed.alias(`model.${valuePath}`));\n  },\n\n  focusOut() {\n    this._super(...arguments);\n    this.set('showValidations', true);\n  }\n});"}}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"u5J1VoTx",block:'{"statements":[[11,"nav",[]],[15,"class","navbar navbar-default"],[13],[0,"\\n  "],[11,"div",[]],[15,"class","container-fluid"],[13],[0,"\\n    "],[11,"div",[]],[15,"class","navbar-header"],[13],[0,"\\n      "],[11,"button",[]],[15,"type","button"],[15,"class","navbar-toggle collapsed"],[15,"data-toggle","collapse"],[15,"data-target","#nav"],[15,"aria-expanded","false"],[13],[0,"\\n        "],[11,"span",[]],[15,"class","sr-only"],[13],[0,"Toggle navigation"],[14],[0,"\\n        "],[11,"span",[]],[15,"class","icon-bar"],[13],[14],[0,"\\n        "],[11,"span",[]],[15,"class","icon-bar"],[13],[14],[0,"\\n        "],[11,"span",[]],[15,"class","icon-bar"],[13],[14],[0,"\\n      "],[14],[0,"\\n"],[6,["link-to"],["index"],[["class"],["navbar-brand"]],{"statements":[[0,"        "],[11,"img",[]],[15,"src","images/ember-logo-99c60a70bf501182696e660669420aa3.png"],[15,"alt",""],[13],[14],[0,"\\n        "],[11,"span",[]],[13],[0,"CP Validations"],[14],[0,"\\n"]],"locals":[]},null],[0,"    "],[14],[0,"\\n\\n    "],[11,"div",[]],[15,"class","collapse navbar-collapse"],[15,"id","nav"],[13],[0,"\\n      "],[11,"ul",[]],[15,"class","nav navbar-nav"],[13],[0,"\\n"],[0,"      "],[14],[0,"\\n      "],[11,"ul",[]],[15,"class","nav navbar-nav navbar-right"],[13],[0,"\\n        "],[11,"li",[]],[15,"class","dropdown"],[13],[0,"\\n          "],[11,"a",[]],[15,"class","dropdown-toggle"],[15,"data-toggle","dropdown"],[15,"role","button"],[15,"aria-haspopup","true"],[15,"aria-expanded","false"],[13],[0,"Documentation "],[11,"span",[]],[15,"class","fa fa-caret-down"],[13],[14],[14],[0,"\\n          "],[11,"ul",[]],[15,"class","dropdown-menu"],[13],[0,"\\n            "],[11,"li",[]],[13],[11,"a",[]],[15,"href","docs"],[13],[0,"v3.x"],[14],[14],[0,"\\n            "],[11,"li",[]],[13],[11,"a",[]],[15,"href","https://rawgit.com/offirgolan/ember-cp-validations/c08fedbf3dcfff1e8904a6469c8defd1fc2bfdf5/docs/index.html"],[13],[0,"v2.x"],[14],[14],[0,"\\n          "],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"li",[]],[13],[11,"a",[]],[15,"href","https://github.com/offirgolan/ember-cp-validations"],[15,"class","fa fa-github github"],[13],[14],[14],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n"],[14],[0,"\\n\\n"],[11,"div",[]],[15,"class","content"],[13],[0,"\\n  "],[1,[26,["outlet"]],false],[0,"\\n"],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/code-snippet",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"3vKDCMgv",block:'{"statements":[[1,[26,["source"]],false],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/templates/components/validated-input",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"DnQ4Pfbk",block:'{"statements":[[11,"div",[]],[15,"class","form-group"],[13],[0,"\\n  "],[1,[33,["input"],[[33,["-input-type"],[[28,["type"]]],null]],[["type","value","placeholder","class","name"],[[28,["type"]],[28,["value"]],[28,["placeholder"]],"form-control",[28,["valuePath"]]]]],false],[0,"\\n"],[6,["if"],[[28,["isValid"]]],null,{"statements":[[0,"    "],[11,"span",[]],[15,"class","valid-input fa fa-check"],[13],[14],[0,"\\n"]],"locals":[]},null],[0,"\\n  "],[11,"div",[]],[15,"class","input-error"],[13],[0,"\\n"],[6,["if"],[[28,["showErrorMessage"]]],null,{"statements":[[0,"      "],[11,"div",[]],[15,"class","error"],[13],[0,"\\n        "],[1,[33,["get"],[[33,["get"],[[28,["model","validations","attrs"]],[28,["valuePath"]]],null],"message"],null],false],[0,"\\n      "],[14],[0,"\\n"]],"locals":[]},null],[0,"\\n"],[6,["if"],[[28,["showWarningMessage"]]],null,{"statements":[[0,"      "],[11,"div",[]],[15,"class","warning"],[13],[0,"\\n        "],[1,[33,["get"],[[33,["get"],[[28,["model","validations","attrs"]],[28,["valuePath"]]],null],"warningMessage"],null],false],[0,"\\n      "],[14],[0,"\\n"]],"locals":[]},null],[0,"  "],[14],[0,"\\n"],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/validated-input.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"4xWpUqYb",block:'{"statements":[[11,"div",[]],[15,"class","form"],[13],[0,"\\n"],[6,["unless"],[[28,["isRegistered"]]],null,{"statements":[[0,"    "],[11,"div",[]],[15,"class","register"],[13],[0,"\\n      "],[11,"h2",[]],[13],[0,"Create an Account"],[14],[0,"\\n\\n"],[6,["if"],[[28,["showAlert"]]],null,{"statements":[[0,"        "],[11,"div",[]],[15,"class","alert"],[13],[0,"\\n          "],[11,"div",[]],[15,"class","fa fa-times icon-remove"],[5,["action"],[[28,[null]],"toggleProperty","showAlert"]],[13],[14],[0,"\\n          Please fix all the errors below before continuing.\\n        "],[14],[0,"\\n"]],"locals":[]},null],[0,"      "],[11,"form",[]],[13],[0,"\\n        "],[11,"div",[]],[15,"class","section"],[13],[0,"\\n"],[6,["unless"],[[28,["showCode"]]],null,{"statements":[[0,"            "],[11,"div",[]],[15,"class","section-info left"],[13],[0,"\\n              These form inputs are bound to the "],[11,"strong",[]],[13],[0,"User"],[14],[0," model which is created in the route\'s model hook. Each one of these fields has validations to make sure we we receive the data we want.\\n            "],[14],[0,"\\n"]],"locals":[]},null],[0,"\\n          "],[1,[33,["validated-input"],null,[["model","valuePath","placeholder","didValidate"],[[28,["model"]],"username","Username",[28,["didValidate"]]]]],false],[0,"\\n          "],[1,[33,["validated-input"],null,[["type","model","valuePath","placeholder","didValidate"],["password",[28,["model"]],"password","Password",[28,["didValidate"]]]]],false],[0,"\\n          "],[1,[33,["validated-input"],null,[["model","valuePath","placeholder","didValidate"],[[28,["model"]],"email","Email",[28,["didValidate"]]]]],false],[0,"\\n          "],[1,[33,["validated-input"],null,[["model","valuePath","placeholder","didValidate"],[[28,["model"]],"emailConfirmation","Verify Email",[28,["didValidate"]]]]],false],[0,"\\n        "],[14],[0,"\\n\\n        "],[11,"h4",[]],[13],[0," About Me"],[14],[0,"\\n\\n        "],[11,"div",[]],[15,"class","section"],[13],[0,"\\n"],[6,["unless"],[[28,["showCode"]]],null,{"statements":[[0,"            "],[11,"div",[]],[15,"class","section-info right"],[13],[0,"\\n              We have a secondary model, "],[11,"strong",[]],[13],[0,"User Details"],[14],[0,", which holds extra information about our user. This model is part of the "],[11,"strong",[]],[13],[0,"User"],[14],[0," model via a belongsTo relationship.\\n            "],[14],[0,"\\n"]],"locals":[]},null],[0,"\\n          "],[1,[33,["validated-input"],null,[["model","valuePath","placeholder","didValidate"],[[28,["model","details"]],"firstName","First Name",[28,["didValidate"]]]]],false],[0,"\\n          "],[1,[33,["validated-input"],null,[["model","valuePath","placeholder","didValidate"],[[28,["model","details"]],"lastName","Last Name",[28,["didValidate"]]]]],false],[0,"\\n          "],[1,[33,["validated-input"],null,[["model","valuePath","placeholder","didValidate"],[[28,["model","details"]],"dob","Date of Birth",[28,["didValidate"]]]]],false],[0,"\\n          "],[1,[33,["validated-input"],null,[["model","valuePath","placeholder","didValidate"],[[28,["model","details"]],"phone","Phone #",[28,["didValidate"]]]]],false],[0,"\\n          "],[1,[33,["validated-input"],null,[["model","valuePath","placeholder","didValidate"],[[28,["model","details"]],"url","URL",[28,["didValidate"]]]]],false],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","section"],[13],[0,"\\n"],[6,["unless"],[[28,["showCode"]]],null,{"statements":[[0,"            "],[11,"div",[]],[15,"class","section-info left last"],[13],[0,"\\n              On submit, a manual validation is run which will validate both the "],[11,"strong",[]],[13],[0,"User"],[14],[0," and "],[11,"strong",[]],[13],[0,"User Details"],[14],[0," models. If both are valid, then the user can continue to the next screen.\\n            "],[14],[0,"\\n"]],"locals":[]},null],[0,"          "],[11,"button",[]],[15,"id","signup"],[5,["action"],[[28,[null]],"validate"]],[13],[0,"Sign Up"],[14],[0,"\\n        "],[14],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n"]],"locals":[]},{"statements":[[0,"      "],[11,"div",[]],[15,"class","registered"],[13],[0,"\\n"],[0,"        "],[11,"div",[]],[15,"class","fa fa-check-circle icon-success"],[13],[14],[0,"\\n        "],[11,"h2",[]],[15,"class","success"],[13],[0,"Success"],[14],[0,"\\n      "],[14],[0,"\\n"]],"locals":[]}],[0,"  "],[11,"footer",[]],[13],[0,"\\n"],[6,["unless"],[[28,["isRegistered"]]],null,{"statements":[[0,"      "],[11,"a",[]],[15,"class","show-code bottom"],[5,["action"],[[28,[null]],"toggleProperty","showCode"]],[13],[11,"i",[]],[15,"class","fa fa-code"],[13],[14],[0," "],[1,[33,["if"],[[28,["showCode"]],"Hide Code","Show Code"],null],false],[0," "],[11,"i",[]],[15,"class","fa fa-code"],[13],[14],[14],[0,"\\n"]],"locals":[]},{"statements":[[0,"      "],[11,"a",[]],[15,"class","show-code bottom"],[5,["action"],[[28,[null]],"reset"]],[13],[0,"Reset Form"],[14],[0,"\\n"]],"locals":[]}],[0,"  "],[14],[0,"\\n"],[14],[0,"\\n\\n"],[6,["unless"],[[28,["isRegistered"]]],null,{"statements":[[0,"  "],[11,"div",[]],[16,"class",[34,["snippet-container ",[33,["if"],[[28,["showCode"]],"show"],null]]]],[13],[0,"\\n   "],[11,"ul",[]],[15,"class","nav nav-tabs"],[15,"role","tablist"],[13],[0,"\\n     "],[11,"li",[]],[15,"role","presentation"],[15,"class","active"],[13],[11,"a",[]],[15,"href","#user-model"],[15,"aria-controls","user-model"],[15,"role","tab"],[15,"data-toggle","tab"],[13],[0,"models/user.js"],[14],[14],[0,"\\n     "],[11,"li",[]],[15,"role","presentation"],[13],[11,"a",[]],[15,"href","#user-detail-model"],[15,"aria-controls","user-detail-model"],[15,"role","tab"],[15,"data-toggle","tab"],[13],[0,"models/user-detail.js"],[14],[14],[0,"\\n     "],[11,"li",[]],[15,"role","presentation"],[13],[11,"a",[]],[15,"href","#validated-input-js"],[15,"aria-controls","validated-input-js"],[15,"role","tab"],[15,"data-toggle","tab"],[13],[0,"validated-input.js"],[14],[14],[0,"\\n     "],[11,"li",[]],[15,"role","presentation"],[13],[11,"a",[]],[15,"href","#validated-input-hbs"],[15,"aria-controls","validated-input-hbs"],[15,"role","tab"],[15,"data-toggle","tab"],[13],[0,"validated-input.hbs"],[14],[14],[0,"\\n   "],[14],[0,"\\n   "],[11,"div",[]],[15,"class","tab-content"],[13],[0,"\\n     "],[11,"div",[]],[15,"role","tabpanel"],[15,"class","tab-pane fade in active"],[15,"id","user-model"],[13],[1,[33,["code-snippet"],null,[["name"],["user-model.js"]]],false],[14],[0,"\\n     "],[11,"div",[]],[15,"role","tabpanel"],[15,"class","tab-pane fade"],[15,"id","user-detail-model"],[13],[1,[33,["code-snippet"],null,[["name"],["user-detail-model.js"]]],false],[14],[0,"\\n     "],[11,"div",[]],[15,"role","tabpanel"],[15,"class","tab-pane fade"],[15,"id","validated-input-js"],[13],[1,[33,["code-snippet"],null,[["name"],["validated-input.js"]]],false],[14],[0,"\\n     "],[11,"div",[]],[15,"role","tabpanel"],[15,"class","tab-pane fade"],[15,"id","validated-input-hbs"],[13],[1,[33,["code-snippet"],null,[["name"],["validated-input.hbs"]]],false],[14],[0,"\\n   "],[14],[0,"\\n"],[14],[0,"\\n"]],"locals":[]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/validators/alias",["exports","ember-cp-validations/validators/alias"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/belongs-to",["exports","ember-cp-validations/validators/belongs-to"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/collection",["exports","ember-cp-validations/validators/collection"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/confirmation",["exports","ember-cp-validations/validators/confirmation"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/date",["exports","ember-cp-validations/validators/date"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/dependent",["exports","ember-cp-validations/validators/dependent"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/ds-error",["exports","ember-cp-validations/validators/ds-error"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/exclusion",["exports","ember-cp-validations/validators/exclusion"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/format",["exports","ember-cp-validations/validators/format"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/has-many",["exports","ember-cp-validations/validators/has-many"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/inclusion",["exports","ember-cp-validations/validators/inclusion"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/length",["exports","ember-cp-validations/validators/length"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})
define("dummy/validators/messages",["exports","ember-cp-validations/validators/messages"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({test:"Test error message"})}),define("dummy/validators/number",["exports","ember-cp-validations/validators/number"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/validators/presence",["exports","ember-cp-validations/validators/presence"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/config/environment",["ember"],function(e){try{var t="dummy/config/environment",a=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),n=JSON.parse(unescape(a)),r={default:n}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-cp-validations",version:"3.5.1"})

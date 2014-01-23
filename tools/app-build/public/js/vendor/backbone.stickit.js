//
// backbone.stickit - v0.6.3
// The MIT License
// Copyright (c) 2012 The New York Times, CMS Group, Matthew DeLambo <delambo@gmail.com> 
//

(function(e){Backbone.Stickit={_handlers:[],addHandler:function(e){e=_.map(_.flatten([e]),function(e){return _.extend({updateModel:!0,updateView:!0,updateMethod:"text"},e)}),this._handlers=this._handlers.concat(e)}},_.extend(Backbone.View.prototype,{_modelBindings:null,unstickit:function(e){_.each(this._modelBindings,_.bind(function(t,n){if(e&&t.model!==e)return!1;t.model.off(t.event,t.fn),delete this._modelBindings[n]},this)),this._modelBindings=_.compact(this._modelBindings),this.$el.off(".stickit"+(e?"."+e.cid:""))},stickit:function(e,t){var r=this,h=e||this.model,p=".stickit."+h.cid,d=t||this.bindings||{};this._modelBindings||(this._modelBindings=[]),this.unstickit(h),_.each(_.keys(d),function(e){var t,v,m,g,y=d[e]||{},b=_.uniqueId();e!=":el"?t=r.$(e):(t=r.$el,e="");if(!t.length)return;_.isString(y)&&(y={observe:y}),g=a(t,y),m=g.observe,v=_.extend({bindKey:b},g.setOptions||{}),f(r,t,g,h,m),l(r,t,g,h,m),m&&(_.each(g.events||[],function(n){var s=n+p,u=function(e){var n=g.getVal.call(r,t,e,g);i(r,g.updateModel,n,g)&&o(h,m,n,v,r,g)};e===""?r.$el.on(s,u):r.$el.on(s,e,u)}),_.each(_.flatten([m]),function(e){s(h,r,"change:"+e,function(e,n,i){(i==null||i.bindKey!=b)&&c(r,t,g,u(e,m,g,r),e)})}),c(r,t,g,u(h,m,g,r),h,!0)),n(r,g.initialize,t,h,g)}),this.remove=_.wrap(this.remove,function(e){r.unstickit(),e&&e.call(r)})}});var t=function(e,t){var n=(t||"").split("."),r=_.reduce(n,function(e,t){return e[t]},e);return r==null?e:r},n=function(e,t){if(t)return(_.isString(t)?e[t]:t).apply(e,_.toArray(arguments).slice(2))},r=function(e){return e.find("option").not(function(){return!this.selected})},i=function(e,t){return _.isBoolean(t)?t:_.isFunction(t)||_.isString(t)?n.apply(this,_.toArray(arguments)):!1},s=function(e,t,n,r){e.on(n,r,t),t._modelBindings.push({model:e,event:n,fn:r})},o=function(e,t,r,i,s,o){o.onSet&&(r=n(s,o.onSet,r,o)),e.set(t,r,i)},u=function(e,t,r,i){var s,o=function(t){var n=r.escape?e.escape(t):e.get(t);return _.isUndefined(n)?"":n};return s=_.isArray(t)?_.map(t,o):o(t),r.onGet?n(i,r.onGet,s,r):s},a=function(e,t){var n=[{updateModel:!1,updateView:!0,updateMethod:"text",update:function(e,t,n,r){e[r.updateMethod](t)},getVal:function(e,t,n){return e[n.updateMethod]()}}];_.each(Backbone.Stickit._handlers,function(t){e.is(t.selector)&&n.push(t)}),n.push(t);var r=_.extend.apply(_,n);return delete r.selector,r},f=function(e,t,n,r,i){var o=["autofocus","autoplay","async","checked","controls","defer","disabled","hidden","loop","multiple","open","readonly","required","scoped","selected"];_.each(n.attributes||[],function(n){var a="",f=n.observe||(n.observe=i),l=function(){var i=_.indexOf(o,n.name,!0)>-1?"prop":"attr",s=u(r,f,n,e);n.name=="class"?(t.removeClass(a).addClass(s),a=s):t[i](n.name,s)};_.each(_.flatten([f]),function(t){s(r,e,"change:"+t,l)}),l()})},l=function(e,t,r,i,o){if(r.visible==null)return;var a=function(){var s=r.visible,a=r.visibleFn,f=u(i,o,r,e),l=!!f;if(_.isFunction(s)||_.isString(s))l=n(e,s,f,r);a?n(e,a,t,l,r):l?t.show():t.hide()};_.each(_.flatten([o]),function(t){s(i,e,"change:"+t,a)}),a()},c=function(e,t,r,s,o,u){if(!i(e,r.updateView,s,r))return;r.update.call(e,t,s,o,r),u||n(e,r.afterUpdate,t,s,r)};Backbone.Stickit.addHandler([{selector:'[contenteditable="true"]',updateMethod:"html",events:["keyup","change","paste","cut"]},{selector:"input",events:["keyup","change","paste","cut"],update:function(e,t){e.val(t)},getVal:function(e){var t=e.val();return e.is('[type="number"]')?t==null?t:Number(t):t}},{selector:"textarea",events:["keyup","change","paste","cut"],update:function(e,t){e.val(t)},getVal:function(e){return e.val()}},{selector:'input[type="radio"]',events:["change"],update:function(e,t){e.filter('[value="'+t+'"]').prop("checked",!0)},getVal:function(e){return e.filter(":checked").val()}},{selector:'input[type="checkbox"]',events:["change"],update:function(t,n,r,i){t.length>1?(n||(n=[]),_.each(t,function(t){_.indexOf(n,e(t).val())>-1?e(t).prop("checked",!0):e(t).prop("checked",!1)})):_.isBoolean(n)?t.prop("checked",n):t.prop("checked",n==t.val())},getVal:function(t){var n;if(t.length>1)n=_.reduce(t,function(t,n){return e(n).prop("checked")&&t.push(e(n).val()),t},[]);else{n=t.prop("checked");var r=t.val();r!="on"&&r!=null&&(n?n=t.val():n=null)}return n}},{selector:"select",events:["change"],update:function(r,i,s,o){var u,a=o.selectOptions,f=a&&a.collection||undefined,l=r.prop("multiple");if(!a){a={};var c=function(e){return e.find("option").map(function(){return{value:this.value,label:this.text}}).get()};r.find("optgroup").length?(f={opt_labels:[]},_.each(r.find("optgroup"),function(t){var n=e(t).attr("label");f.opt_labels.push(n),f[n]=c(e(t))})):f=c(r)}a.valuePath=a.valuePath||"value",a.labelPath=a.labelPath||"label";var h=function(n,r,i){a.defaultOption&&(n=_.clone(n),n.unshift("__default__")),_.each(n,function(n){var s=e("<option/>"),o=n,u=function(e,t){s.text(e),o=t,s.data("stickit_bind_val",o),!_.isArray(o)&&!_.isObject(o)&&s.val(o)};n==="__default__"?u(a.defaultOption.label,a.defaultOption.value):u(t(n,a.labelPath),t(n,a.valuePath)),!l&&o!=null&&i!=null&&o==i||_.isObject(i)&&_.isEqual(o,i)?s.prop("selected",!0):l&&_.isArray(i)&&_.each(i,function(e){_.isObject(e)&&(e=t(e,a.valuePath)),(e==o||_.isObject(e)&&_.isEqual(o,e))&&s.prop("selected",!0)}),r.append(s)})};r.html("");var p=function(e,n){var r=window;return n.indexOf("this.")===0&&(r=e),n=n.replace(/^[a-z]*\.(.+)$/,"$1"),t(r,n)};_.isString(f)?u=p(this,f):_.isFunction(f)?u=n(this,f,r,o):u=f,u instanceof Backbone.Collection&&(u=u.toJSON()),_.isArray(u)?h(u,r,i):_.each(u.opt_labels,function(t){var n=e("<optgroup/>").attr("label",t);h(u[t],n,i),r.append(n)})},getVal:function(t){var n;return t.prop("multiple")?n=e(r(t).map(function(){return e(this).data("stickit_bind_val")})).get():n=r(t).data("stickit_bind_val"),n}}])})(window.jQuery||window.Zepto);
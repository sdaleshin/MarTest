/*
 * jQuery File Upload Processing Plugin 1.3.0
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function(e){typeof define=="function"&&define.amd?define(["jquery","./jquery.fileupload"],e):e(window.jQuery)})(function(e){var t=e.blueimp.fileupload.prototype.options.add;e.widget("blueimp.fileupload",e.blueimp.fileupload,{options:{processQueue:[],add:function(n,r){var i=e(this);r.process(function(){return i.fileupload("process",r)}),t.call(this,n,r)}},processActions:{},_processFile:function(t,n){var r=this,i=e.Deferred().resolveWith(r,[t]),s=i.promise();return this._trigger("process",null,t),e.each(t.processQueue,function(t,i){var o=function(t){return n.errorThrown?e.Deferred().rejectWith(r,[n]).promise():r.processActions[i.action].call(r,t,i)};s=s.pipe(o,i.always&&o)}),s.done(function(){r._trigger("processdone",null,t),r._trigger("processalways",null,t)}).fail(function(){r._trigger("processfail",null,t),r._trigger("processalways",null,t)}),s},_transformProcessQueue:function(t){var n=[];e.each(t.processQueue,function(){var r={},i=this.action,s=this.prefix===!0?i:this.prefix;e.each(this,function(n,i){e.type(i)==="string"&&i.charAt(0)==="@"?r[n]=t[i.slice(1)||(s?s+n.charAt(0).toUpperCase()+n.slice(1):n)]:r[n]=i}),n.push(r)}),t.processQueue=n},processing:function(){return this._processing},process:function(t){var n=this,r=e.extend({},this.options,t);return r.processQueue&&r.processQueue.length&&(this._transformProcessQueue(r),this._processing===0&&this._trigger("processstart"),e.each(t.files,function(i){var s=i?e.extend({},r):r,o=function(){return t.errorThrown?e.Deferred().rejectWith(n,[t]).promise():n._processFile(s,t)};s.index=i,n._processing+=1,n._processingQueue=n._processingQueue.pipe(o,o).always(function(){n._processing-=1,n._processing===0&&n._trigger("processstop")})})),this._processingQueue},_create:function(){this._super(),this._processing=0,this._processingQueue=e.Deferred().resolveWith(this).promise()}})});
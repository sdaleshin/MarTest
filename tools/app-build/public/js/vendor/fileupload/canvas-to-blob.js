/*
 * JavaScript Canvas to Blob 2.0.5
 * https://github.com/blueimp/JavaScript-Canvas-to-Blob
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on stackoverflow user Stoive's code snippet:
 * http://stackoverflow.com/q/4998908
 */

(function(e){var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,n=e.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),r=n&&e.Uint8Array&&function(){try{return(new Blob([new Uint8Array(100)])).size===100}catch(e){return!1}}(),i=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,s=(n||i)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(e){var t,s,o,u,a,f;e.split(",")[0].indexOf("base64")>=0?t=atob(e.split(",")[1]):t=decodeURIComponent(e.split(",")[1]),s=new ArrayBuffer(t.length),o=new Uint8Array(s);for(u=0;u<t.length;u+=1)o[u]=t.charCodeAt(u);return a=e.split(",")[0].split(":")[1].split(";")[0],n?new Blob([r?o:s],{type:a}):(f=new i,f.append(s),f.getBlob(a))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(e,n,r){r&&t.toDataURL&&s?e(s(this.toDataURL(n,r))):e(this.mozGetAsFile("blob",n))}:t.toDataURL&&s&&(t.toBlob=function(e,t,n){e(s(this.toDataURL(t,n)))})),typeof define=="function"&&define.amd?define([],function(){return s}):e.dataURLtoBlob=s})(this);
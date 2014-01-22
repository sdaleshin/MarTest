/*
 * JavaScript Load Image Meta 1.0.1
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Image meta data handling implementation
 * based on the help and contribution of
 * Achim Stöhr.
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function(e){typeof define=="function"&&define.amd?define(["load_image"],e):e(window.loadImage)})(function(e){var t=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);e.blobSlice=t&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},e.metaDataParsers={jpeg:{65505:[]}},e.parseMetaData=function(t,n,r){r=r||{};var i=this,s=r.maxMetaDataSize||262144,o={},u=!(window.DataView&&t&&t.size>=12&&t.type==="image/jpeg"&&e.blobSlice);(u||!e.readFile(e.blobSlice.call(t,0,s),function(t){var s=t.target.result,u=new DataView(s),a=2,f=u.byteLength-4,l=a,c,h,p,d;if(u.getUint16(0)===65496){while(a<f){c=u.getUint16(a);if(!(c>=65504&&c<=65519||c===65534))break;h=u.getUint16(a+2)+2;if(a+h>u.byteLength){console.log("Invalid meta data: Invalid segment size.");break}p=e.metaDataParsers.jpeg[c];if(p)for(d=0;d<p.length;d+=1)p[d].call(i,u,a,h,o,r);a+=h,l=a}!r.disableImageHead&&l>6&&(s.slice?o.imageHead=s.slice(0,l):o.imageHead=(new Uint8Array(s)).subarray(0,l))}else console.log("Invalid JPEG file: Missing JPEG marker.");n(o)},"readAsArrayBuffer"))&&n(o)}});
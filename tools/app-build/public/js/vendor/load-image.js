/*
 * JavaScript Load Image 1.9.0
 * https://github.com/blueimp/JavaScript-Load-Image
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function(e){var t=function(e,n,r){var i=document.createElement("img"),s,o;i.onerror=n,i.onload=function(){o&&(!r||!r.noRevoke)&&t.revokeObjectURL(o),n&&n(t.scale(i,r))};if(t.isInstanceOf("Blob",e)||t.isInstanceOf("File",e))s=o=t.createObjectURL(e),i._type=e.type;else{if(typeof e!="string")return!1;s=e,r&&r.crossOrigin&&(i.crossOrigin=r.crossOrigin)}return s?(i.src=s,i):t.readFile(e,function(e){var t=e.target;t&&t.result?i.src=t.result:n&&n(e)})},n=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;t.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},t.transformCoordinates=function(){return},t.getTransformedOptions=function(e){return e},t.renderImageToCanvas=function(e,t,n,r,i,s,o,u,a,f){return e.getContext("2d").drawImage(t,n,r,i,s,o,u,a,f),e},t.hasCanvasOption=function(e){return e.canvas||e.crop},t.scale=function(e,n){n=n||{};var r=document.createElement("canvas"),i=e.getContext||t.hasCanvasOption(n)&&r.getContext,s=e.naturalWidth||e.width,o=e.naturalHeight||e.height,u=s,a=o,f,l,c,h,p,d,v,m,g,y=function(){var e=Math.max((c||u)/u,(h||a)/a);e>1&&(u=Math.ceil(u*e),a=Math.ceil(a*e))},b=function(){var e=Math.min((f||u)/u,(l||a)/a);e<1&&(u=Math.ceil(u*e),a=Math.ceil(a*e))};i&&(n=t.getTransformedOptions(n),v=n.left||0,m=n.top||0,n.sourceWidth?(p=n.sourceWidth,n.right!==undefined&&n.left===undefined&&(v=s-p-n.right)):p=s-v-(n.right||0),n.sourceHeight?(d=n.sourceHeight,n.bottom!==undefined&&n.top===undefined&&(m=o-d-n.bottom)):d=o-m-(n.bottom||0),u=p,a=d),f=n.maxWidth,l=n.maxHeight,c=n.minWidth,h=n.minHeight;if(i&&f&&l&&n.crop)u=f,a=l,g=p/d-f/l,g<0?(d=l*p/f,n.top===undefined&&n.bottom===undefined&&(m=(o-d)/2)):g>0&&(p=f*d/l,n.left===undefined&&n.right===undefined&&(v=(s-p)/2));else{if(n.contain||n.cover)c=f=f||c,h=l=l||h;n.cover?(b(),y()):(y(),b())}return i?(r.width=u,r.height=a,t.transformCoordinates(r,n),t.renderImageToCanvas(r,e,v,m,p,d,0,0,u,a)):(e.width=u,e.height=a,e)},t.createObjectURL=function(e){return n?n.createObjectURL(e):!1},t.revokeObjectURL=function(e){return n?n.revokeObjectURL(e):!1},t.readFile=function(e,t,n){if(window.FileReader){var r=new FileReader;r.onload=r.onerror=t,n=n||"readAsDataURL";if(r[n])return r[n](e),r}return!1},e.loadImage=t})(this);
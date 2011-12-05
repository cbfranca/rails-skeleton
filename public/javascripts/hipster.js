/**
* hipster.js - Bringing cool stuff to vintage browsers.
* (c) 2011 Nando Vieira
*
* Released under MIT license.
* Generated on 2011-11-01.
*/

if(!Array.prototype.every){Array.prototype.every=function(f,d){var c=Object(this),e=c.length>>>0,b=0;while(b<e){if(b in c){var a=f.call(d,c[b],b,c);if(!a){return false}}b+=1}return true}}if(!Array.prototype.filter){Array.prototype.filter=function(g,c){var b=Object(this),d=b.length>>>0,a=0,f=new Array();while(a<d){if(a in b){var e=b[a];if(g.call(c,e,a,b)){f.push(e)}}a+=1}return f}}if(!Array.prototype.forEach){Array.prototype.forEach=function(e,c){var b=Object(this),d=b.length>>>0,a=0;while(a<d){if(a in b){e.call(c,b[a],a,b)}a+=1}}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(c,e){var b=Object(this),d=b.length>>>0,a=0;if(arguments.length>1){a=Number(e)}if(isNaN(a)){a=0}if(d===0||a>=d){return -1}for(;a<d;a++){if(a in b&&b[a]===c){return a}}return -1}}if(!Array.isArray){Array.isArray=function(a){return Object.prototype.toString.call(a)=="[object Array]"}}if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(c,e){var b=Object(this),d=b.length>>>0,a=d-1;if(arguments.length>1){a=Number(e)}if(isNaN(a)){a=d-1}if(a<0){a=d-Math.abs(a)}if(a<0||d===0||a>=d){return -1}for(;a>=0;a--){if(a in b&&b[a]===c){return a}}return -1}}if(!Array.prototype.map){Array.prototype.map=function(f,c){var b=Object(this),d=b.length>>>0,a=0,e=new Array(d);while(a<d){if(a in b){e[a]=f.call(c,b[a],a,b)}a+=1}return e}}if(!Array.prototype.reduce){Array.prototype.reduce=function(e){var b=Object(this),c=b.length>>>0,a=1,d=b[0];if(arguments.length===2){a=0;d=arguments[1]}while(a<c){if(a in b){d=e.call(null,d,b[a],a,b)}a+=1}return d}}if(!Array.prototype.some){Array.prototype.some=function(f,d){var c=Object(this),e=c.length>>>0,b=0;while(b<e){if(b in c){var a=f.call(d,c[b],b,c);if(a){return true}}b+=1}return false}}if(!Date.now){Date.now=function now(){return +new Date()}}if(!Object.keys){Object.keys=function(b){if(b!==Object(b)){throw new TypeError("Object.keys called on non-object")}var c=[],a;for(a in b){if(Object.prototype.hasOwnProperty.call(b,a)){c.push(a)}}return c}}if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!String.prototype.trimLeft){String.prototype.trimLeft=function(){return this.replace(/^\s+/g,"")}}if(!String.prototype.trimRight){String.prototype.trimRight=function(){return this.replace(/\s+$/g,"")}};
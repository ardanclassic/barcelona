!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n,e){(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,a=Object.create(o.prototype),i=new x(r||[]);return a._invoke=function(t,n,e){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return S()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=b(i,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=s(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function d(){}function f(){}function h(){}var p={};p[a]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(E([])));m&&m!==e&&r.call(m,a)&&(p=m);var g=h.prototype=d.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function w(t,e){var o;this._invoke=function(a,i){function c(){return new e((function(o,c){!function o(a,i,c,u){var l=s(t[a],t,i);if("throw"!==l.type){var d=l.arg,f=d.value;return f&&"object"===n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){d.value=t,c(d)}),(function(t){return o("throw",t,c,u)}))}u(l.arg)}(a,i,o,c)}))}return o=o?o.then(c,c):c()}}function b(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,b(t,n),"throw"===n.method))return l;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,l;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,l):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=g.constructor=h,h.constructor=f,h[c]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===f||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(n,e,r,o,a){void 0===a&&(a=Promise);var i=new w(u(n,e,r,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(g),g[c]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),l},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),l}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}("object"===n(t)?t.exports:{});try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}).call(this,e(1)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n){function e(t){for(var n=(t+"=".repeat((4-t.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),e=window.atob(n),r=new Uint8Array(e.length),o=0;o<e.length;++o)r[o]=e.charCodeAt(o);return r}"serviceWorker"in navigator&&(navigator.serviceWorker.register("sw.js").then((function(t){return console.log("Service worker has been registered!"),t})).catch((function(t){console.error("Failed registering service worker!",t)})),"Notification"in window&&Notification.requestPermission().then((function(t){"denied"!==t?"default"!==t?"PushManager"in window&&navigator.serviceWorker.getRegistration().then((function(t){t&&t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e("BN06HVpP9YXq_LDaIP2Pzrehn0ZnOHH_WjutkHDSYW90OZK12A1XENyicGTQJhityrjkTsh22WRnS5V2LqLUtOQ")}).then((function(t){var n=btoa(String.fromCharCode.apply(null,new Uint8Array(t.getKey("p256dh")))),e=btoa(String.fromCharCode.apply(null,new Uint8Array(t.getKey("auth"))));console.log("endpoint: ",t.endpoint),console.log("p256dh key: ",n),console.log("auth key: ",e),localStorage.setItem("endpoint",t.endpoint),localStorage.setItem("p256dh",n),localStorage.setItem("authKey",e)})).catch((function(t){console.error("Gagal melakukan subscribe ",t.message)}))})):console.error("User closed the confirmation!"):console.log("Notification has been disapproved!")})))},function(t,n,e){"use strict";e.r(n);e(0),e(2);function r(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,a){var i=t.apply(n,e);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.base_url="https://api.football-data.org/v2/",this.config={method:"get",headers:{"X-Auth-Token":"4b32c1b165c54cbd968a2e485af78b0b"}}}var n,e,r,i,c;return n=t,(e=[{key:"api",value:(c=o(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(this.base_url+n,this.config).then(function(){var t=o(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()).catch((function(){return!1})));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"teamInfo",value:(i=o(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.api("teams/81");case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"playerInfo",value:function(){var t=o(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.api("players/".concat(n));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"leagueInfo",value:function(){var t=o(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.api("competitions/".concat(n,"/standings"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()}])&&a(n.prototype,e),r&&a(n,r),t}();function c(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){c(a,r,o,i,u,"next",t)}function u(t){c(a,r,o,i,u,"throw",t)}i(void 0)}))}}var s=idb.open("Barcelona-DB",5,(function(t){switch(t.oldVersion){case 0:t.createObjectStore("players",{keyPath:"id"}).createIndex("name","name");case 1:t.createObjectStore("league",{keyPath:"id"}).createIndex("name","name");case 2:t.createObjectStore("Barcelona",{keyPath:"id"});case 3:t.createObjectStore("OffLeague",{keyPath:"id"});case 4:t.createObjectStore("OffPlayer",{keyPath:"id"})}}));function l(t){s.then((function(n){var e=n.transaction("Barcelona","readwrite");return e.objectStore("Barcelona").put(t),e.complete}))}function d(t){return new Promise((function(n,e){s.then((function(n){return n.transaction("Barcelona","readonly").objectStore("Barcelona").get(t)})).then((function(t){return n(t)}))}))}function f(t){s.then((function(n){var e=n.transaction("OffLeague","readwrite");return e.objectStore("OffLeague").put(t),e.complete}))}function h(t){return new Promise((function(n,e){s.then((function(n){return n.transaction("OffLeague","readonly").objectStore("OffLeague").get(t)})).then((function(t){return n(t)}))}))}function p(t){s.then((function(n){var e=n.transaction("OffPlayer","readwrite");return e.objectStore("OffPlayer").put(t),e.complete}))}function v(t){return new Promise((function(n,e){s.then((function(n){return n.transaction("OffPlayer","readonly").objectStore("OffPlayer").get(t)})).then((function(t){return n(t)}))}))}function m(t){s.then((function(n){var e=n.transaction("players","readwrite");return e.objectStore("players").put(t),e.complete})).then((function(){return console.log("Add ".concat(t.name," to Favorite List"))}))}function g(t){return new Promise((function(n,e){s.then((function(n){return n.transaction("players","readonly").objectStore("players").get(t)})).then((function(t){return n(t)}))}))}function y(t){s.then((function(n){var e=n.transaction("players","readwrite");return e.objectStore("players").delete(t.id),e.complete})).then((function(){return console.log("Remove ".concat(t.name," from Favorite List"))}))}function w(t){s.then((function(n){var e=n.transaction("league","readwrite");return e.objectStore("league").put(t),e.complete})).then((function(){return console.log("Add ".concat(t.competition.name," to Favorite List"))}))}function b(t){return new Promise(function(){var n=u(regeneratorRuntime.mark((function n(e,r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s.then((function(n){return n.transaction("league","readonly").objectStore("league").get(t)})).then((function(t){return e(t)}));case 1:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}())}function L(t){s.then((function(n){var e=n.transaction("league","readwrite");return e.objectStore("league").delete(t.id),e.complete})).then((function(){return console.log("Remove ".concat(t.name," from Favorite List"))}))}function k(t){var n='\n\t\t<div class="img-parallax"></div>\n\t\t<div class="parallax-shadow"></div>\n\t\t<div class="container">\n\t\t\t<div class="banner-text center">\n\t\t\t\t<h1>'.concat(t.name,'</h1>\n\t\t\t\t<p class="flow-text">').concat(t.address,", ").concat(t.area.name,'</p>\n\t\t\t\t<a href="').concat(t.website,'" target="_blank" rel="noopener noreferrer">\n\t\t\t\t\t<i class="material-icons">explore</i>\n\t\t\t\t</a>\n\t\t\t\t<a href="mailto:').concat(t.email,'">\n\t\t\t\t\t<i class="material-icons">email</i>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class="club-info">\n\t\t\t\t<h1>Detail Information</h1>\n\t\t\t\t<table>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Club Name</td>\n\t\t\t\t\t\t\t<td>').concat(t.name,"</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Address</td>\n\t\t\t\t\t\t\t<td>").concat(t.address,", ").concat(t.area.name,"</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Venue</td>\n\t\t\t\t\t\t\t<td>").concat(t.venue,"</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Founded</td>\n\t\t\t\t\t\t\t<td>").concat(t.founded,'</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Website</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a href="').concat(t.website,'" target="_blank" rel="noopener noreferrer">\n\t\t\t\t\t\t\t\t\t').concat(t.website,'\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Phone</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a href="tel:').concat(t.phone,'">\n\t\t\t\t\t\t\t\t\t').concat(t.phone,'\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Email</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<a href="mailto:').concat(t.email,'">\n\t\t\t\t\t\t\t\t\t').concat(t.email,"\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Last Updated</td>\n\t\t\t\t\t\t\t<td>").concat(_(t.lastUpdated),"</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n    ");document.getElementById("homepage").innerHTML=n}function x(t,n){return t+'\n\t\t<div class="col s12 m4 l3">\n\t\t\t<a href="#player?id='.concat(n.id,'">\n\t\t\t\t<div class="card">\n\t\t\t\t\t<div class="info-content">\n\t\t\t\t\t\t<p class="card-title">').concat(n.name,"</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</div>\n\t")}function E(t){var n='\n\t\t<div class="col s12 m6 l5">\n\t\t\t'.concat(38===t.id?'<img id="coach-img" src="./assets/icon/coach.png" alt="img-player">':'<img src="./assets/icon/football-player.png" alt="img-player">','\n\t\t</div>\n\t\t<div class="col s12 m6 l7">\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td>').concat(t.name,"</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Nickname</td>\n\t\t\t\t\t\t<td>").concat(t.firstName,"</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Birthdate</td>\n\t\t\t\t\t\t<td>").concat(_(t.dateOfBirth),"</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Country of Birth</td>\n\t\t\t\t\t\t<td>").concat(t.countryOfBirth,"</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Position</td>\n\t\t\t\t\t\t<td>").concat(t.position?t.position:"-","</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Shirt Number</td>\n\t\t\t\t\t\t<td>").concat(t.shirtNumber?t.shirtNumber:"-","</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Nationality</td>\n\t\t\t\t\t\t<td>").concat(t.nationality,"</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Last Updated</td>\n\t\t\t\t\t\t<td>").concat(_(t.lastUpdated),'</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<div class="waves-effect waves-light btn" id="btn-player">\n\t\t\tSave as Your Favorite!\n\t\t</div>\n\t');t?t.name?document.getElementById("player-info").innerHTML=n:document.getElementById("bodyContent").innerHTML='\n    <div class="error-api container align-center">\n        <h1>Sorry, data not found!</h1>\n        <h2 class="red-text">Try other data resource</h2>\n    </div>':O()}function S(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="";t.forEach((function(t){e+='\n\t\t\t<ul class="collection">\n\t\t\t\t<li class="collection-item row">\n\t\t\t\t\t<div class="col s3">\n\t\t\t\t\t\t<a href="#league?id='.concat(t.id,'">\n\t\t\t\t\t\t\t<img src="./assets/image/').concat(t.name,'.png" alt="').concat(t.name,'">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col s9">\n\t\t\t\t\t\t<a href="#league?id=').concat(t.id,'">\n\t\t\t\t\t\t\t<span>').concat(t.name,"</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t")})),n?document.getElementById("bookmarkLeague").innerHTML=e:document.getElementById("competition-info").innerHTML=e}function T(t){var n,e;t.id=t.competition.id,t.name=t.competition.name,e='\n\t\t<div class="card">\n\t\t\t<div class="card-content white-text">\n\t\t\t\t<span class="card-title">'.concat((n=t).competition.name,"</span>\n\t\t\t\t<p>Last Updated: <span>").concat(_(n.competition.lastUpdated),'</span></p>\n\t\t\t\t<div class="waves-effect waves-light btn" id="btn-league">\n\t\t\t\t\tSave as Your Favorite!\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="divider"></div>\n\t\t<h1>Standings</h1>\n\t\t<div id="league-standing"></div>\n\t'),document.getElementById("league-info").innerHTML=e;var r={standings:t.standings.filter((function(t){return"TOTAL"===t.type})),leagueType:t.standings[0].stage,table:"",eachData:""};"REGULAR_SEASON"===r.leagueType?function(t){t.table='\n\t\t<table class="responsive-table centered">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Position</th>\n\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t<th>Points</th>\n\t\t\t\t\t<th>Won</th>\n\t\t\t\t\t<th>Draw</th>\n\t\t\t\t\t<th>Lost</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody id="standingTable"></tbody>\n\t\t</table>\n\t',t.standings.forEach((function(n){return t.eachData=(e=t.eachData,n.table.forEach((function(t){e+="\n\t\t\t<tr>\n\t\t\t\t<td>".concat(t.position,"</td>\n\t\t\t\t<td>").concat(t.team.name,"</td>\n\t\t\t\t<td>").concat(t.points,"</td>\n\t\t\t\t<td>").concat(t.won,"</td>\n\t\t\t\t<td>").concat(t.lost,"</td>\n\t\t\t\t<td>").concat(t.draw,"</td>\n\t\t\t</tr>\n\t\t")})),e);var e})),document.getElementById("league-standing").innerHTML=t.table,document.getElementById("standingTable").innerHTML=t.eachData}(r):function(t){t.standings.forEach((function(n){return t.table=function(t,n){return t+='\n\t\t<div class="group-standing">\n\t\t\t<h1>'.concat(n.group.replace("_"," "),'</h1>\n\t\t\t<table class="responsive-table centered">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Position</th>\n\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t<th>Points</th>\n\t\t\t\t\t\t<th>Won</th>\n\t\t\t\t\t\t<th>Draw</th>\n\t\t\t\t\t\t<th>Lost</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody id="').concat(n.group,'"></tbody>\n\t\t\t</table>\n\t\t</div>\n\t')}(t.table,n)})),document.getElementById("league-standing").innerHTML=t.table,t.standings.forEach((function(n){t.eachData="",n.table.forEach((function(n){t.eachData+="\n\t\t\t\t<tr>\n\t\t\t\t\t<td>".concat(n.position,"</td>\n\t\t\t\t\t<td>").concat(n.team.name,"</td>\n\t\t\t\t\t<td>").concat(n.points,"</td>\n\t\t\t\t\t<td>").concat(n.won,"</td>\n\t\t\t\t\t<td>").concat(n.lost,"</td>\n\t\t\t\t\t<td>").concat(n.draw,"</td>\n\t\t\t\t</tr>\n\t\t\t")})),document.getElementById(n.group).innerHTML=t.eachData}))}(r)}function I(t){return document.getElementById(t).innerHTML='<div class="preloader-wrapper big active">\n        <div class="spinner-layer">\n            <div class="circle-clipper left">\n                <div class="circle"></div>\n            </div>\n            <div class="gap-patch">\n                <div class="circle"></div>\n            </div>\n            <div class="circle-clipper right">\n                <div class="circle"></div>\n            </div>\n        </div>\n    </div>'}function O(){return document.getElementById("bodyContent").innerHTML='\n    <div class="error-api container align-center">\n        <h1>Sorry, there\'s an api limitation!</h1>\n        <h2 class="red-text">Wait a sec and refresh this page again</h2>\n    </div>'}function P(){return document.getElementById("bodyContent").innerHTML='\n    <div class="error-api container align-center">\n        <h1>Sorry, we don\'t have this data information yet!</h1>\n        <h2 class="red-text">You can grab the data while online!</h2>\n    </div>'}function j(t,n){M.Toast.dismissAll(),t.style.backgroundColor="#B71C1C",t.innerText="Delete from Favorite?",M.toast({inDuration:100,html:'<span>Save <strong class="yellow-text">'.concat(n,"</strong> as your favorite!</span>")})}function B(t,n){M.Toast.dismissAll(),t.style.backgroundColor="#114875",t.innerText="Save as Your Favorite!",M.toast({inDuration:100,html:'<span>Remove <strong class="yellow-text">'.concat(n,"</strong> from your favorite!</span>")})}function R(t,n){n||(n=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var e=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(n);return e?e[2]?decodeURIComponent(e[2].replace(/\+/g," ")):"":null}function _(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}function H(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function C(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){H(a,r,o,i,c,"next",t)}function c(t){H(a,r,o,i,c,"throw",t)}i(void 0)}))}}var D=window.navigator.onLine;function A(){D?(I("team-squad"),(new i).teamInfo().then((function(n){t(n),l(n)})).catch((function(){return O()}))):d(81).then((function(n){t(n)})).catch((function(){return P()}));function t(t){var n;n='\n\t\t<h1><i class="material-icons">chevron_right</i>COACH</h1>\n\t\t<div class="row">\n\t\t\t<div class="col s12">\n\t\t\t\t<a href="#player?id=38">\n\t\t\t\t\t<div class="card">\n\t\t\t\t\t\t<div class="info-content">\n\t\t\t\t\t\t\t<p class="card-title">Quique Setién</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t',[{id:"Goalkeeper",division:"GOALKEEPER"},{id:"Defender",division:"DEFENDER"},{id:"Midfielder",division:"MIDFIELDER"},{id:"Attacker",division:"FORWARD"}].forEach((function(t){n+='\n\t\t\t<h1><i class="material-icons">chevron_right</i>'.concat(t.division,'</h1>\n\t\t\t<div class="row group" id="').concat(t.id,'"></div>\n\t\t')})),document.getElementById("team-squad").innerHTML=n,document.querySelectorAll("#team-squad .group").forEach((function(n){var e="";t.squad.filter((function(t){return t.position===n.id})).forEach((function(t){return e=x(e,t)})),n.innerHTML=e}))}}function N(){return(N=C(regeneratorRuntime.mark((function t(){var n,e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I("player-info"),n=R("id"),t.next=4,g(parseInt(n));case 4:(e=t.sent)?(E(e),(r=document.getElementById("btn-player")).style.backgroundColor="#B71C1C",r.innerText="Delete from Favorite List?",r.onclick=function(){y(e),B(r,e.name),setTimeout((function(){window.location.reload()}),2e3)}):D?(new i).playerInfo(n).then((function(t){E(t),p(t);var n=document.getElementById("btn-player");n.onclick=function(){m(t),j(n,t.name),setTimeout((function(){window.location.reload()}),2e3)}})).catch((function(){return O()})):v(parseInt(n)).then((function(t){E(t);var n=document.getElementById("btn-player");n.onclick=function(){m(t),j(n,t.name),setTimeout((function(){window.location.reload()}),2e3)}})).catch((function(){return P()}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(){return(F=C(regeneratorRuntime.mark((function t(){var n,e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I("league-info"),n=R("id"),t.next=4,b(parseInt(n));case 4:(e=t.sent)?(T(e),(r=document.getElementById("btn-league")).style.backgroundColor="#B71C1C",r.innerText="Delete from Favorite List?",r.onclick=function(){L(e),B(r,e.competition.name),window.location.reload()}):D?(new i).leagueInfo(parseInt(n)).then((function(t){T(t),f(t);var n=document.getElementById("btn-league");n.onclick=function(){w(t),j(n,t.competition.name),window.location.reload()}})).catch((function(){return O()})):h(parseInt(n)).then((function(t){T(t);var n=document.getElementById("btn-league");n.onclick=function(){w(t),j(n,t.competition.name),window.location.reload()}})).catch((function(){return P()}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(){new Promise(function(){var t=u(regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.then((function(t){return t.transaction("players","readonly").objectStore("players").getAll()})).then((function(t){return n(t)}));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()).then((function(t){var n="";t.length>0?t.forEach((function(t){return n=x(n,t)})):n='\n\t\t\t\t<h3>You haven\'t favorited any player yet?</h3>\n\t\t\t\t<a href="#team"><p class="yellow-text center">Search Player</p></a>\n\t\t\t',document.getElementById("bookmarkSquad").innerHTML='<div class="row" id="bookmark-player"></div>',document.getElementById("bookmark-player").innerHTML=n})),new Promise(function(){var t=u(regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.then((function(t){return t.transaction("league","readonly").objectStore("league").getAll()})).then((function(t){return n(t)}));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()).then((function(t){var n="";t.length>0?n=S(t,!0):(n='\n\t\t\t\t<h3>You haven\'t favorited any league yet?</h3>\n\t\t\t\t<a href="#competition"><p class="yellow-text center">Search League</p></a>\n\t\t\t',document.getElementById("bookmarkLeague").innerHTML=n)}))}document.addEventListener("DOMContentLoaded",(function(){window.onhashchange=function(){return r()},r();var t,n=document.querySelectorAll(".sidenav");function e(t){var n=new XMLHttpRequest;n.open("GET","pages/".concat(t,".html"),!0),n.send(),n.onreadystatechange=function(){if(4===this.readyState){var t=document.querySelector(".body-content");if(200===this.status)t.innerHTML=n.responseText,function(){var t=window.location.hash;switch(t.indexOf("?")>-1?t.substring(1,t.indexOf("?")):window.location.hash.substr(1)){case"":D?(I("homepage"),(new i).teamInfo().then((function(t){k(t),l(t)})).catch((function(){return O()}))):d(81).then((function(t){k(t)})).catch((function(){return P()}));break;case"team":A();break;case"competition":D?(I("competition-info"),(new i).teamInfo().then((function(t){S(t.activeCompetitions),l(t)})).catch((function(){return O()}))):d(81).then((function(t){S(t.activeCompetitions)})).catch((function(){return P()}));break;case"player":!function(){N.apply(this,arguments)}();break;case"league":!function(){F.apply(this,arguments)}();break;case"bookmark":q()}}(),c=document.querySelector(".scrollTop"),window.addEventListener("scroll",(function(){window.pageYOffset>200?c.classList.add("active"):c.classList.remove("active")})),c.addEventListener("click",(function(){window.scroll({top:0,left:0,behavior:"smooth"})}));else if(404===this.status){var e=localStorage.getItem("endpoint"),r=localStorage.getItem("p256dh"),o=localStorage.getItem("authKey"),a="";e&&(a='\n\t\t\t\t\t\t\t<div class="pushkey" style="color: grey; margin: 4em auto; overflow-wrap: anywhere;">\n\t\t\t\t\t\t\t\t<p>'.concat(e,"</p>\n\t\t\t\t\t\t\t\t<p>").concat(r,"</p>\n\t\t\t\t\t\t\t\t<p>").concat(o,"</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t")),t.innerHTML='\n\t\t\t\t\t\t<div class="container center not-found">\n\t\t\t\t\t\t\t<img width="256" src="assets/image/404.png" />\n\t\t\t\t\t\t\t<h1>Page Not Found!</h1>\n\t\t\t\t\t\t\t'.concat(a,"\n\t\t\t\t\t\t</div>\n\t\t\t\t\t")}else t.innerHTML='\n\t\t\t\t\t\t<div class="container center">\n\t\t\t\t\t\t\t<p>Upss.. Halaman tidak dapat diakses!</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'}var c}}function r(){var t=window.location.hash,n=t.indexOf("?")>-1?t.substring(1,t.indexOf("?")):window.location.hash.substr(1);""===n&&(n="home"),e(n)}M.Sidenav.init(n,{edge:"right"}),(t=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState){if(200!=this.status)return;document.querySelectorAll(".sidenav, .topnav").forEach((function(n){n.innerHTML=t.responseText})),document.querySelectorAll(".sidenav a, .topnav a, .brand-logo").forEach((function(t){t.addEventListener("click",(function(t){var n=document.querySelector(".sidenav");M.Sidenav.getInstance(n).close()}))}))}},t.open("GET","pages/navbar.html",!0),t.send()}))}]);
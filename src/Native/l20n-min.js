!function(a,b){for(var c in b)a[c]=b[c]}(this,function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(a){return h[document.readyState]>=h.interactive?a():void document.addEventListener("readystatechange",function b(){h[document.readyState]>=h.interactive&&(document.removeEventListener("readystatechange",b),a())})}function e(){var a=new g.Service(f.fetch);window.addEventListener("languagechange",a),document.addEventListener("additionallanguageschange",a),document.l10n.languages=navigator.languages}var f=c(1),g=c(3),h={loading:0,interactive:1,complete:2};d(e)},function(a,b,c){"use strict";function d(a,b){return new Promise(function(c,d){var e=new XMLHttpRequest;e.overrideMimeType&&e.overrideMimeType(a),e.open("GET",b,!0),"application/json"===a&&(e.responseType="json"),e.addEventListener("load",function(a){200===a.target.status||0===a.target.status?c(a.target.response||a.target.responseText):d(new f.L10nError("Not found: "+b))}),e.addEventListener("error",d),e.addEventListener("timeout",d);try{e.send(null)}catch(g){if("NS_ERROR_FILE_NOT_FOUND"!==g.name)throw g;d(new f.L10nError("Not found: "+b))}})}function e(a,b,c){var d=b.replace("{locale}",c.code),e=b.endsWith(".json")?"json":"text";return g[c.src](c.code,a,d,e)}Object.defineProperty(b,"__esModule",{value:!0}),b.fetch=e;var f=c(2),g={extra:function(a,b,c,d){return navigator.mozApps.getLocalizationResource(a,b,c,d)},app:function(a,b,c,e){switch(e){case"text":return d("text/plain",c);case"json":return d("application/json",c);default:throw new f.L10nError("Unknown file type: "+e)}}}},function(a,b){"use strict";function c(a,b,c){this.name="L10nError",this.message=a,this.id=b,this.lang=c}Object.defineProperty(b,"__esModule",{value:!0}),b.L10nError=c,c.prototype=Object.create(Error.prototype),c.prototype.constructor=c},function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){return navigator.mozApps&&navigator.mozApps.getAdditionalLanguages?navigator.mozApps.getAdditionalLanguages().catch(function(){return[]}):Promise.resolve([])}function f(a){return Promise.all(this.views.map(function(b){return k.translate.call(b,a)}))}function g(a,b){var c=this,d=this.languages||[];return this.languages=Promise.all([a,d]).then(function(a){var d=h(a,2),e=d[0],g=d[1];return m.negotiateLanguages(f.bind(c),c.appVersion,c.defaultLanguage,c.availableLanguages,e,g,b)})}Object.defineProperty(b,"__esModule",{value:!0});var h=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h.return&&h.return()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();b.getAdditionalLanguages=e;var j=c(4),k=c(12),l=c(13),m=c(15),n=function(){function a(b){d(this,a);var c=l.getMeta(document.head);this.defaultLanguage=c.defaultLang,this.availableLanguages=c.availableLangs,this.appVersion=c.appVersion,this.env=new j.Env(this.defaultLanguage,b.bind(null,this.appVersion)),this.views=[document.l10n=new k.View(this,document)],this.env.addEventListener("deprecatewarning",function(a){return console.warn(a)})}return i(a,[{key:"requestLanguages",value:function(){var a=arguments.length<=0||void 0===arguments[0]?navigator.languages:arguments[0];return g.call(this,e(),a)}},{key:"handleEvent",value:function(a){return g.call(this,a.detail||e(),navigator.languages)}}]),a}();b.Service=n},function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){return b.lang=a,b}Object.defineProperty(b,"__esModule",{value:!0});var g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();b.amendError=f;var h=c(5),i=c(8),j=d(i),k=c(9),l=d(k),m=c(10),n=c(11),o={properties:j.default,l20n:l.default},p=function(){function a(b,c){e(this,a),this.defaultLang=b,this.fetch=c,this._resCache=Object.create(null);var d={};this.emit=n.emit.bind(this,d),this.addEventListener=n.addEventListener.bind(this,d),this.removeEventListener=n.removeEventListener.bind(this,d)}return g(a,[{key:"createContext",value:function(a){return new h.Context(this,a)}},{key:"_parse",value:function(a,b,c){var d=this,e=o[a];if(!e)return c;var g=function(a,c){return d.emit(a,f(b,c))};return e.parse.call(e,g,c)}},{key:"_create",value:function(a,b){if("qps"!==a.src)return b;var c=Object.create(null);for(var d in b)c[d]=m.walkEntry(b[d],m.qps[a.code].translate);return c}},{key:"_getResource",value:function(a,b){var c=this,d=this._resCache,e=b+a.code+a.src;if(d[e])return d[e];var f=b.substr(b.lastIndexOf(".")+1),g=function(b){var g=c._parse(f,a,b);d[e]=c._create(a,g)},h=function(b){b.lang=a,c.emit("fetcherror",b),d[e]=b},i="qps"===a.src?{code:this.defaultLang,src:"app"}:a;return d[e]=this.fetch(b,i).then(g,h)}}]),a}();b.Env=p},function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(b,"__esModule",{value:!0});var e=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h.return&&h.return()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=c(2),h=c(6),i=c(7),j=function(){function a(b,c){d(this,a),this._env=b,this._resIds=c}return f(a,[{key:"_formatTuple",value:function(a,b,c,d,e){try{return h.format(this,a,b,c)}catch(f){return f.id=e?d+"::"+e:d,f.lang=a,this._env.emit("resolveerror",f,this),[{error:f},f.id]}}},{key:"_formatEntity",value:function(a,b,c,d){var f=this._formatTuple.call(this,a,b,c,d),g=e(f,2),h=g[1],i={value:h,attrs:null};if(c.attrs){i.attrs=Object.create(null);for(var j in c.attrs){var k=this._formatTuple.call(this,a,b,c.attrs[j],d,j),l=e(k,2),m=l[1];i.attrs[j]=m}}return i}},{key:"fetch",value:function(a){return 0===a.length?Promise.resolve(a):Promise.all(this._resIds.map(this._env._getResource.bind(this._env,a[0]))).then(function(){return a})}},{key:"resolve",value:function(a,b,c){var d=this,e=a[0];if(!e)return this._env.emit("notfounderror",new g.L10nError('"'+b+'" not found in any language',b),this),{value:b,attrs:null};var f=this._getEntity(e,b);return f?Promise.resolve(this._formatEntity(e,c,f,b)):(this._env.emit("notfounderror",new g.L10nError('"'+b+'" not found in '+e.code,b,e),this),this.fetch(a.slice(1)).then(function(a){return d.resolve(a,b,c)}))}},{key:"_getEntity",value:function(a,b){for(var c=this._env._resCache,d=0,e=void 0;e=this._resIds[d];d++){var f=c[e+a.code+a.src];if(!(f instanceof g.L10nError)&&b in f)return f[b]}return void 0}},{key:"_getMacro",value:function(a,b){switch(b){case"plural":return i.getPluralRule(a.code);default:return void 0}}}]),a}();b.Context=j},function(a,b,c){"use strict";function d(a,b,c,d){if("string"==typeof d)return[{},d];if(q.has(d))throw new k.L10nError("Cyclic reference detected");q.add(d);var e=void 0;try{e=i({},a,b,c,d.value,d.index)}finally{q.delete(d)}return e}function e(a,b,c,e){if(l.indexOf(e)>-1)return[{},a._getMacro(b,e)];if(c&&c.hasOwnProperty(e)){if("string"==typeof c[e]||"number"==typeof c[e]&&!isNaN(c[e]))return[{},c[e]];throw new k.L10nError("Arg must be a string or a number: "+e)}if("__proto__"===e)throw new k.L10nError("Illegal id: "+e);var f=a._getEntity(b,e);if(f)return d(a,b,c,f);throw new k.L10nError("Unknown reference: "+e)}function f(a,b,c,d,f){var g=void 0;try{g=e(b,c,d,f)}catch(h){return[{error:h},"{{ "+f+" }}"]}var i=g[1];if("number"==typeof i)return g;if("string"==typeof i){if(i.length>=m)throw new k.L10nError("Too many characters in placeable ("+i.length+", max allowed is "+m+")");return(a.contextIsNonLatin1||i.match(n))&&(g[1]=o+i+p),g}return[{},"{{ "+f+" }}"]}function g(a,b,c,d,e){return e.reduce(function(e,g){var h=j(e,2),i=h[0],k=h[1];if("string"==typeof g)return[i,k+g];var l=f(a,b,c,d,g.name),m=j(l,2),n=m[1];return[i,k+n]},[a,""])}function h(a,b,c,d,f){var g=void 0;g="call"===f[0].type&&"prop"===f[0].expr.type&&"cldr"===f[0].expr.expr.name?"plural":f[0].name;var h=e(a,b,c,g)[1];if("function"!=typeof h)return h;var i=f[0].args?e(a,b,c,f[0].args[0].name)[1]:void 0;if("plural"===g){if(0===i&&"zero"in d)return"zero";if(1===i&&"one"in d)return"one";if(2===i&&"two"in d)return"two"}return h(i)}function i(a,b,c,d,e,f){if(!e)return[a,e];if("string"==typeof e||"boolean"==typeof e||"number"==typeof e)return[a,e];if(Array.isArray(e))return a.contextIsNonLatin1=e.some(function(a){return"string"==typeof a&&a.match(n)}),g(a,b,c,d,e);if(f){var j=h(b,c,d,e,f);if(j in e)return i(a,b,c,d,e[j])}if("other"in e)return i(a,b,c,d,e.other);throw new k.L10nError("Unresolvable value")}Object.defineProperty(b,"__esModule",{value:!0});var j=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h.return&&h.return()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();b.format=d;var k=c(2),l=["plural"],m=2500,n=/[^\x01-\xFF]/,o="⁨",p="⁩",q=new WeakSet},function(a,b){"use strict";function c(a,b){return-1!==b.indexOf(a)}function d(a,b,c){return typeof a==typeof b&&a>=b&&c>=a}function e(a){var b=f[a.replace(/-.*$/,"")];return b in g?g[b]:function(){return"other"}}Object.defineProperty(b,"__esModule",{value:!0}),b.getPluralRule=e;var f={af:3,ak:4,am:4,ar:1,asa:3,az:0,be:11,bem:3,bez:3,bg:3,bh:4,bm:0,bn:3,bo:0,br:20,brx:3,bs:11,ca:3,cgg:3,chr:3,cs:12,cy:17,da:3,de:3,dv:3,dz:0,ee:3,el:3,en:3,eo:3,es:3,et:3,eu:3,fa:0,ff:5,fi:3,fil:4,fo:3,fr:5,fur:3,fy:3,ga:8,gd:24,gl:3,gsw:3,gu:3,guw:4,gv:23,ha:3,haw:3,he:2,hi:4,hr:11,hu:0,id:0,ig:0,ii:0,is:3,it:3,iu:7,ja:0,jmc:3,jv:0,ka:0,kab:5,kaj:3,kcg:3,kde:0,kea:0,kk:3,kl:3,km:0,kn:0,ko:0,ksb:3,ksh:21,ku:3,kw:7,lag:18,lb:3,lg:3,ln:4,lo:0,lt:10,lv:6,mas:3,mg:4,mk:16,ml:3,mn:3,mo:9,mr:3,ms:0,mt:15,my:0,nah:3,naq:7,nb:3,nd:3,ne:3,nl:3,nn:3,no:3,nr:3,nso:4,ny:3,nyn:3,om:3,or:3,pa:3,pap:3,pl:13,ps:3,pt:3,rm:3,ro:9,rof:3,ru:11,rwk:3,sah:0,saq:3,se:7,seh:3,ses:0,sg:0,sh:11,shi:19,sk:12,sl:14,sma:7,smi:7,smj:7,smn:7,sms:7,sn:3,so:3,sq:3,sr:11,ss:3,ssy:3,st:3,sv:3,sw:3,syr:3,ta:3,te:3,teo:3,th:0,ti:4,tig:3,tk:3,tl:4,tn:3,to:0,tr:0,ts:3,tzm:22,uk:11,ur:3,ve:3,vi:0,vun:3,wa:4,wae:3,wo:0,xh:3,xog:3,yo:0,zh:0,zu:3},g={0:function(){return"other"},1:function(a){return d(a%100,3,10)?"few":0===a?"zero":d(a%100,11,99)?"many":2===a?"two":1===a?"one":"other"},2:function(a){return 0!==a&&a%10===0?"many":2===a?"two":1===a?"one":"other"},3:function(a){return 1===a?"one":"other"},4:function(a){return d(a,0,1)?"one":"other"},5:function(a){return d(a,0,2)&&2!==a?"one":"other"},6:function(a){return 0===a?"zero":a%10===1&&a%100!==11?"one":"other"},7:function(a){return 2===a?"two":1===a?"one":"other"},8:function(a){return d(a,3,6)?"few":d(a,7,10)?"many":2===a?"two":1===a?"one":"other"},9:function(a){return 0===a||1!==a&&d(a%100,1,19)?"few":1===a?"one":"other"},10:function(a){return d(a%10,2,9)&&!d(a%100,11,19)?"few":a%10!==1||d(a%100,11,19)?"other":"one"},11:function(a){return d(a%10,2,4)&&!d(a%100,12,14)?"few":a%10===0||d(a%10,5,9)||d(a%100,11,14)?"many":a%10===1&&a%100!==11?"one":"other"},12:function(a){return d(a,2,4)?"few":1===a?"one":"other"},13:function(a){return d(a%10,2,4)&&!d(a%100,12,14)?"few":1!==a&&d(a%10,0,1)||d(a%10,5,9)||d(a%100,12,14)?"many":1===a?"one":"other"},14:function(a){return d(a%100,3,4)?"few":a%100===2?"two":a%100===1?"one":"other"},15:function(a){return 0===a||d(a%100,2,10)?"few":d(a%100,11,19)?"many":1===a?"one":"other"},16:function(a){return a%10===1&&11!==a?"one":"other"},17:function(a){return 3===a?"few":0===a?"zero":6===a?"many":2===a?"two":1===a?"one":"other"},18:function(a){return 0===a?"zero":d(a,0,2)&&0!==a&&2!==a?"one":"other"},19:function(a){return d(a,2,10)?"few":d(a,0,1)?"one":"other"},20:function(a){return!d(a%10,3,4)&&a%10!==9||d(a%100,10,19)||d(a%100,70,79)||d(a%100,90,99)?a%1e6===0&&0!==a?"many":a%10!==2||c(a%100,[12,72,92])?a%10!==1||c(a%100,[11,71,91])?"other":"one":"two":"few"},21:function(a){return 0===a?"zero":1===a?"one":"other"},22:function(a){return d(a,0,1)||d(a,11,99)?"one":"other"},23:function(a){return d(a%10,1,2)||a%20===0?"one":"other"},24:function(a){return d(a,3,10)||d(a,13,19)?"few":c(a,[2,12])?"two":c(a,[1,11])?"one":"other"}}},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(2),e=100;b.default={patterns:null,entryIds:null,emit:null,init:function(){this.patterns={comment:/^\s*#|^\s*$/,entity:/^([^=\s]+)\s*=\s*(.*)$/,multiline:/[^\\]\\$/,index:/\{\[\s*(\w+)(?:\(([^\)]*)\))?\s*\]\}/i,unicode:/\\u([0-9a-fA-F]{1,4})/g,entries:/[^\r\n]+/g,controlChars:/\\([\\\n\r\t\b\f\{\}\"\'])/g,placeables:/\{\{\s*([^\s]*?)\s*\}\}/}},parse:function(a,b){this.patterns||this.init(),this.emit=a;var c={},d=b.match(this.patterns.entries);if(!d)return c;for(var e=0;e<d.length;e++){var f=d[e];if(!this.patterns.comment.test(f)){for(;this.patterns.multiline.test(f)&&e<d.length;)f=f.slice(0,-1)+d[++e].trim();var g=f.match(this.patterns.entity);if(g)try{this.parseEntity(g[1],g[2],c)}catch(h){if(!this.emit)throw h}}}return c},parseEntity:function(a,b,c){var d,e,f=a.indexOf("[");-1!==f?(d=a.substr(0,f),e=a.substring(f+1,a.length-1)):(d=a,e=null);var g=d.split(".");if(g.length>2)throw this.error('Error in ID: "'+d+'". Nested attributes are not supported.');var h;if(g.length>1){if(d=g[0],h=g[1],"$"===h[0])throw this.error('Attribute can\'t start with "$"')}else h=null;this.setEntityValue(d,h,e,this.unescapeString(b),c)},setEntityValue:function(a,b,c,d,e){var f=d.indexOf("{{")>-1?this.parseString(d):d,g="string"==typeof f,h=e,i="string"==typeof e[a];if(e[a]||!b&&!c&&g||(e[a]=Object.create(null),i=!1),b){if(i){var j=e[a];e[a]=Object.create(null),e[a].value=j}e[a].attrs||(e[a].attrs=Object.create(null)),e[a].attrs||g||(e[a].attrs[b]=Object.create(null)),h=e[a].attrs,a=b}if(c){if(i=!1,"string"==typeof h[a]){var j=h[a];h[a]=Object.create(null),h[a].index=this.parseIndex(j),h[a].value=Object.create(null)}h=h[a].value,a=c,g=!0}if(!g||e[a]&&!i)h[a]||(h[a]=Object.create(null)),h[a].value=f;else{if(a in h)throw this.error();h[a]=f}},parseString:function(a){var b=a.split(this.patterns.placeables),c=[],d=b.length,f=(d-1)/2;if(f>=e)throw this.error("Too many placeables ("+f+", max allowed is "+e+")");for(var g=0;g<b.length;g++)0!==b[g].length&&(g%2===1?c.push({type:"idOrVar",name:b[g]}):c.push(b[g]));return c},unescapeString:function(a){return-1!==a.lastIndexOf("\\")&&(a=a.replace(this.patterns.controlChars,"$1")),a.replace(this.patterns.unicode,function(a,b){return String.fromCodePoint(parseInt(b,16))})},parseIndex:function(a){var b=a.match(this.patterns.index);if(!b)throw new d.L10nError("Malformed index");return b[2]?[{type:"call",expr:{type:"prop",expr:{type:"glob",name:"cldr"},prop:"plural",cmpt:!1},args:[{type:"idOrVar",name:b[2]}]}]:[{type:"idOrVar",name:b[1]}]},error:function(a){var b=arguments.length<=1||void 0===arguments[1]?"parsererror":arguments[1],c=new d.L10nError(a);return this.emit&&this.emit(b,c),c}},a.exports=b.default},function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h.return&&h.return()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=c(2),f=100;b.default={parse:function(a,b){return this._source=b,this._index=0,this._length=b.length,this.entries=Object.create(null),this.emit=a,this.getResource()},getResource:function(){for(this.getWS();this._index<this._length;){try{this.getEntry()}catch(a){if(!(a instanceof e.L10nError))throw a;if(this.getJunkEntry(),!this.emit)throw a}this._index<this._length&&this.getWS()}return this.entries},getEntry:function(){if("<"===this._source[this._index]){++this._index;var a=this.getIdentifier();return"["===this._source[this._index]?(++this._index,this.getEntity(a,this.getItemList(this.getExpression,"]"))):this.getEntity(a)}if(this._source.startsWith("/*",this._index))return this.getComment();throw this.error("Invalid entry")},getEntity:function(a,b){if(!this.getRequiredWS())throw this.error("Expected white space");var c=this._source[this._index],d=this.getValue(c,void 0===b),e=void 0;if(void 0===d){if(">"===c)throw this.error('Expected ">"');e=this.getAttributes()}else{var f=this.getRequiredWS();if(">"!==this._source[this._index]){if(!f)throw this.error('Expected ">"');e=this.getAttributes()}}if(++this._index,a in this.entries)throw this.error('Duplicate entry ID "'+a,"duplicateerror");e||b||"string"!=typeof d?this.entries[a]={value:d,attrs:e,index:b}:this.entries[a]=d},getValue:function(){var a=arguments.length<=0||void 0===arguments[0]?this._source[this._index]:arguments[0],b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];switch(a){case"'":case'"':return this.getString(a,1);case"{":return this.getHash()}if(!b)throw this.error("Unknown value type")},getWS:function(){for(var a=this._source.charCodeAt(this._index);32===a||10===a||9===a||13===a;)a=this._source.charCodeAt(++this._index)},getRequiredWS:function(){for(var a=this._index,b=this._source.charCodeAt(a);32===b||10===b||9===b||13===b;)b=this._source.charCodeAt(++this._index);return this._index!==a},getIdentifier:function(){var a=this._index,b=this._source.charCodeAt(this._index);if(!(b>=97&&122>=b||b>=65&&90>=b||95===b))throw this.error("Identifier has to start with [a-zA-Z_]");for(b=this._source.charCodeAt(++this._index);b>=97&&122>=b||b>=65&&90>=b||b>=48&&57>=b||95===b;)b=this._source.charCodeAt(++this._index);return this._source.slice(a,this._index)},getUnicodeChar:function(){for(var a=0;4>a;a++){var b=this._source.charCodeAt(++this._index);if(!(b>96&&103>b||b>64&&71>b||b>47&&58>b))throw this.error("Illegal unicode escape sequence")}return this._index++,String.fromCharCode(parseInt(this._source.slice(this._index-4,this._index),16))},stringRe:/"|'|{{|\\/g,getString:function(a,b){var c=[],d=0;this._index+=b;for(var e=this._index,g=e,h="";;){this.stringRe.lastIndex=this._index;var i=this.stringRe.exec(this._source);if(!i)throw this.error("Unclosed string literal");if('"'===i[0]||"'"===i[0]){if(i[0]!==a){this._index+=b;continue}this._index=i.index+b;break}if("{{"!==i[0]){if("\\"===i[0]){this._index=i.index+1;var j=this._source[this._index];if("u"===j)h+=this._source.slice(g,i.index)+this.getUnicodeChar();else if(j===a||"\\"===j)h+=this._source.slice(g,i.index)+j,this._index++;else{if(!this._source.startsWith("{{",this._index))throw this.error("Illegal escape sequence");h+=this._source.slice(g,i.index)+"{{",this._index+=2}g=this._index}}else{if(d>f-1)throw this.error("Too many placeables, maximum allowed is "+f);d++,(i.index>g||h.length>0)&&(c.push(h+this._source.slice(g,i.index)),h=""),this._index=i.index+2,this.getWS(),c.push(this.getExpression()),this.getWS(),this._index+=2,g=this._index}}return 0===c.length?h+this._source.slice(g,this._index-b):((this._index-b>g||h.length>0)&&c.push(h+this._source.slice(g,this._index-b)),c)},getAttributes:function(){for(var a=Object.create(null);;){this.getAttribute(a);var b=this.getRequiredWS(),c=this._source.charAt(this._index);if(">"===c)break;if(!b)throw this.error('Expected ">"')}return a},getAttribute:function(a){var b=this.getIdentifier(),c=void 0;if("["===this._source[this._index]&&(++this._index,this.getWS(),c=this.getItemList(this.getExpression,"]")),this.getWS(),":"!==this._source[this._index])throw this.error('Expected ":"');++this._index,this.getWS();var d=this.getValue();if(b in a)throw this.error('Duplicate attribute "'+b,"duplicateerror");c||"string"!=typeof d?a[b]={value:d,index:c}:a[b]=d},getHash:function(){var a=Object.create(null);++this._index,this.getWS();for(var b=void 0;;){var c=this.getHashItem(),e=d(c,3),f=e[0],g=e[1],h=e[2];if(a[f]=g,h){if(b)throw this.error("Default item redefinition forbidden");b=f}this.getWS();var i=","===this._source[this._index];if(i&&(++this._index,this.getWS()),"}"===this._source[this._index]){++this._index;break}if(!i)throw this.error('Expected "}"')}return b&&(a.__default=b),a},getHashItem:function(){var a=!1;"*"===this._source[this._index]&&(++this._index,a=!0);var b=this.getIdentifier();if(this.getWS(),":"!==this._source[this._index])throw this.error('Expected ":"');return++this._index,this.getWS(),[b,this.getValue(),a]},getComment:function(){this._index+=2;var a=this._index,b=this._source.indexOf("*/",a);if(-1===b)throw this.error("Comment without a closing tag");this._index=b+2},getExpression:function(){for(var a=this.getPrimaryExpression();;){var b=this._source[this._index];if("."===b||"["===b)++this._index,a=this.getPropertyExpression(a,"["===b);else{if("("!==b)break;++this._index,a=this.getCallExpression(a)}}return a},getPropertyExpression:function(a,b){var c=void 0;if(b){if(this.getWS(),c=this.getExpression(),this.getWS(),"]"!==this._source[this._index])throw this.error('Expected "]"');++this._index}else c=this.getIdentifier();return{type:"prop",expr:a,prop:c,cmpt:b}},getCallExpression:function(a){return this.getWS(),{type:"call",expr:a,args:this.getItemList(this.getExpression,")")}},getPrimaryExpression:function(){var a=this._source[this._index];switch(a){case"$":return++this._index,{type:"var",name:this.getIdentifier()};case"@":return++this._index,{type:"glob",name:this.getIdentifier()};default:return{type:"id",name:this.getIdentifier()}}},getItemList:function(a,b){var c=[],d=!1;for(this.getWS(),this._source[this._index]===b&&(++this._index,d=!0);!d;){c.push(a.call(this)),this.getWS();var e=this._source.charAt(this._index);switch(e){case",":++this._index,this.getWS();break;case b:++this._index,d=!0;break;default:throw this.error('Expected "," or "'+b+'"')}}return c},getJunkEntry:function(){var a=this._index,b=this._source.indexOf("<",a),c=this._source.indexOf("/*",a);-1===b&&(b=this._length),-1===c&&(c=this._length);var d=Math.min(b,c);this._index=d},error:function(a){var b=arguments.length<=1||void 0===arguments[1]?"parsererror":arguments[1],c=this._index,d=this._source.lastIndexOf("<",c-1),f=this._source.lastIndexOf(">",c-1);d=f>d?f+1:d;var g=this._source.slice(d,c+10),h=a+" at pos "+c+": `"+g+"`",i=new e.L10nError(h);return this.emit&&this.emit(b,i),i}},a.exports=b.default},function(a,b){"use strict";function c(a,b){if("string"==typeof a)return b(a);var e=Object.create(null);if(a.value&&(e.value=d(a.value,b)),a.index&&(e.index=a.index),a.attrs){e.attrs=Object.create(null);for(var f in a.attrs)e.attrs[f]=c(a.attrs[f],b)}return e}function d(a,b){if("string"==typeof a)return b(a);if(a.type)return a;for(var c=Array.isArray(a)?[]:Object.create(null),e=Object.keys(a),f=0,g=void 0;g=e[f];f++)c[g]=d(a[g],b);return c}function e(a){return a.replace(k,function(a){return a+a.toLowerCase()})}function f(a,b){return b.replace(j,function(b){return a.charAt(b.charCodeAt(0)-65)})}function g(a){return a.replace(n,function(a){return"‮"+a+"‬"})}function h(a,b){if(!b)return b;var c=b.split(o),d=c.map(function(b){return o.test(b)?b:a(b)});return d.join("")}function i(a,b,c,d){this.id=a,this.translate=h.bind(null,function(a){return f(c,d(a))}),this.name=this.translate(b)}Object.defineProperty(b,"__esModule",{value:!0}),b.walkEntry=c,b.walkValue=d;var j=/[a-zA-Z]/g,k=/[aeiouAEIOU]/g,l="ȦƁƇḒḖƑƓĦĪĴĶĿḾȠǾƤɊŘŞŦŬṼẆẊẎẐ[\\]^_`ȧƀƈḓḗƒɠħīĵķŀḿƞǿƥɋřşŧŭṽẇẋẏẑ",m="∀ԐↃpƎɟפHIſӼ˥WNOԀÒᴚS⊥∩ɅＭXʎZ[\\]ᵥ_,ɐqɔpǝɟƃɥıɾʞʅɯuodbɹsʇnʌʍxʎz",n=/[^\W0-9_]+/g,o=/(%[EO]?\w|\{\s*.+?\s*\}|&[#\w]+;|<\s*.+?\s*>)/,p={"qps-ploc":new i("qps-ploc","Runtime Accented",l,e),"qps-plocm":new i("qps-plocm","Runtime Mirrored",m,g)};b.qps=p},function(a,b){"use strict";function c(a){for(var b=this,c=arguments.length,d=Array(c>1?c-1:0),e=1;c>e;e++)d[e-1]=arguments[e];var f=d.shift();a["*"]&&a["*"].slice().forEach(function(a){return a.apply(b,d)}),a[f]&&a[f].slice().forEach(function(a){return a.apply(b,d)})}function d(a,b,c){b in a||(a[b]=[]),a[b].push(c)}function e(a,b,c){var d=a[b],e=d.indexOf(c);-1!==e&&d.splice(e,1)}Object.defineProperty(b,"__esModule",{value:!0}),b.emit=c,b.addEventListener=d,b.removeEventListener=e},function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a){var b=this;return this.service.languages.then(function(c){return k.translateMutations(b,c,a)})}function f(a){return h(this.doc,"supportedlanguageschange",a),this.ctx.fetch(a).then(g.bind(this,a))}function g(a){var b=this,c=this.doc,d=function(){c.localized=!0,h(c,"DOMLocalized",a)};return a[0].code===c.documentElement.getAttribute("lang")?Promise.resolve(d()):k.translateFragment(b,a,c.documentElement).then(function(){c.documentElement.lang=a[0].code,c.documentElement.dir=a[0].dir,d()})}function h(a,b,c){var d=new CustomEvent(b,{bubbles:!1,cancelable:!1,detail:{languages:c}});a.dispatchEvent(d)}Object.defineProperty(b,"__esModule",{value:!0});var i=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();b.translate=f;var j=c(13),k=c(14),l={attributes:!0,characterData:!1,childList:!0,subtree:!0,attributeFilter:["data-l10n-id","data-l10n-args"]},m=function(){function a(b,c){var f=this;d(this,a),this.service=b,this.doc=c,this.ctx=this.service.env.createContext(j.getResourceLinks(c.head)),this.ready=new Promise(function(a){var b=function(d){c.removeEventListener("DOMLocalized",b),a(d.detail.languages)};c.addEventListener("DOMLocalized",b)});var g=new MutationObserver(e.bind(this));this.observe=function(){return g.observe(f.doc,l)},this.disconnect=function(){return g.disconnect()},this.observe()}return i(a,[{key:"emit",value:function(){var a;return(a=this.service.env).emit.apply(a,arguments)}},{key:"format",value:function(a,b){var c=this;return this.service.languages.then(function(a){return c.ctx.fetch(a)}).then(function(d){return c.ctx.resolve(d,a,b)})}},{key:"translateFragment",value:function(a){var b=this;return this.service.languages.then(function(a){return b.ctx.fetch(a)}).then(function(c){return k.translateFragment(b,c,a)})}},{key:"languages",get:function(){return this.service.languages},set:function(a){return this.service.requestLanguages(a)}}]),a}();b.View=m,m.prototype.setAttributes=k.setAttributes,m.prototype.getAttributes=k.getAttributes},function(a,b){"use strict";function c(a){return Array.prototype.map.call(a.querySelectorAll('link[rel="localization"]'),function(a){return decodeURI(a.getAttribute("href"))})}function d(a){var b=Object.create(null),c=null,d=null,h=a.querySelectorAll('meta[name="availableLanguages"],meta[name="defaultLanguage"],meta[name="appVersion"]'),i=!0,j=!1,k=void 0;try{for(var l,m=h[Symbol.iterator]();!(i=(l=m.next()).done);i=!0){var n=l.value,o=n.getAttribute("name"),p=n.getAttribute("content").trim();switch(o){case"availableLanguages":b=e(b,p);break;case"defaultLanguage":var q=f(p),r=g(q,2),s=r[0],t=r[1];c=s,s in b||(b[s]=t);break;case"appVersion":d=p}}}catch(u){j=!0,k=u}finally{try{!i&&m.return&&m.return()}finally{if(j)throw k}}return{defaultLang:c,availableLangs:b,appVersion:d}}function e(a,b){return b.split(",").reduce(function(a,b){var c=f(b),d=g(c,2),e=d[0],h=d[1];return a[e]=h,a},a)}function f(a){var b=a.trim().split(":"),c=g(b,2),d=c[0],e=c[1];return[d,parseInt(e)]}Object.defineProperty(b,"__esModule",{value:!0});var g=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h.return&&h.return()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();b.getResourceLinks=c,b.getMeta=d},function(a,b,c){"use strict";function d(a,b,c){a.setAttribute("data-l10n-id",b),c&&a.setAttribute("data-l10n-args",JSON.stringify(c))}function e(a){return{id:a.getAttribute("data-l10n-id"),args:JSON.parse(a.getAttribute("data-l10n-args"))}}function f(a){var b=[];return"function"==typeof a.hasAttribute&&a.hasAttribute("data-l10n-id")&&b.push(a),b.concat.apply(b,a.querySelectorAll("*[data-l10n-id]"))}function g(a,b,c){var d=new Set,e=!0,g=!1,h=void 0;try{for(var i,k=c[Symbol.iterator]();!(e=(i=k.next()).done);e=!0){var m=i.value;switch(m.type){case"attributes":d.add(m.target);break;case"childList":var n=!0,o=!1,p=void 0;try{for(var q,r=m.addedNodes[Symbol.iterator]();!(n=(q=r.next()).done);n=!0){var s=q.value;s.nodeType===s.ELEMENT_NODE&&d.add(s)}}catch(t){o=!0,p=t}finally{try{!n&&r.return&&r.return()}finally{if(o)throw p}}}}}catch(t){g=!0,h=t}finally{try{!e&&k.return&&k.return()}finally{if(g)throw h}}if(0!==d.size){var u=[];d.forEach(function(a){return a.childElementCount?u.concat(f(a)):u.push(a)}),Promise.all(u.map(function(c){return j(a,b,c)})).then(function(b){return l(a,u,b)})}}function h(a,b,c){var d=f(c);return Promise.all(d.map(function(c){return j(a,b,c)})).then(function(b){return l(a,d,b)})}function i(a){return"ariaValueText"===a?"aria-valuetext":a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}).replace(/^-/,"")}function j(a,b,c){var d=e(c);return d.id?a.ctx.resolve(b,d.id,d.args):!1}function k(a,b,c){return j(a,b,c).then(function(b){return b?(a.disconnect(),m(a,c,b),void a.observe()):!1})}function l(a,b,c){a.disconnect();for(var d=0;d<b.length;d++)c[d]!==!1&&m(a,b[d],c[d]);a.observe()}function m(a,b,c){var d=void 0;if(c.attrs&&c.attrs.innerHTML?(d=c.attrs.innerHTML,a.emit("deprecatewarning",new s.L10nError("L10n Deprecation Warning: using innerHTML in translations is unsafe and will not be supported in future versions of l10n.js. See https://bugzil.la/1027117"))):d=c.value,"string"==typeof d)if(t.test(d)){var e=b.ownerDocument.createElement("template");e.innerHTML=d,n(b,e.content)}else b.textContent=d;for(var f in c.attrs){var g=i(f);p({name:g},b)&&b.setAttribute(g,c.attrs[f])}}function n(a,b){for(var c=b.ownerDocument.createDocumentFragment(),d=void 0,e=void 0,f=void 0;f=b.childNodes[0];)if(b.removeChild(f),f.nodeType!==f.TEXT_NODE){var g=r(f),h=q(a,f,g);if(h)n(h,f),c.appendChild(h);else if(o(f)){for(d=0,e;e=f.attributes[d];d++)p(e,f)||f.removeAttribute(e.name);c.appendChild(f)}else c.appendChild(b.ownerDocument.createTextNode(f.textContent))}else c.appendChild(f);if(a.textContent="",a.appendChild(c),b.attributes)for(d=0,e;e=b.attributes[d];d++)p(e,a)&&a.setAttribute(e.name,e.value);
}function o(a){return-1!==u.elements.indexOf(a.tagName.toLowerCase())}function p(a,b){var c=a.name.toLowerCase(),d=b.tagName.toLowerCase();if(-1!==u.attributes.global.indexOf(c))return!0;if(!u.attributes[d])return!1;if(-1!==u.attributes[d].indexOf(c))return!0;if("input"===d&&"value"===c){var e=b.type.toLowerCase();if("submit"===e||"button"===e||"reset"===e)return!0}return!1}function q(a,b,c){for(var d=0,e=0,f=void 0;f=a.children[e];e++)if(f.nodeType===f.ELEMENT_NODE&&f.tagName===b.tagName){if(d===c)return f;d++}return null}function r(a){for(var b=0,c=void 0;c=a.previousElementSibling;)c.tagName===a.tagName&&b++;return b}Object.defineProperty(b,"__esModule",{value:!0}),b.setAttributes=d,b.getAttributes=e,b.translateMutations=g,b.translateFragment=h,b.translateElement=k;var s=c(2),t=/<|&#?\w+;/,u={elements:["a","em","strong","small","s","cite","q","dfn","abbr","data","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","span","br","wbr"],attributes:{global:["title","aria-label","aria-valuetext","aria-moz-hint"],a:["download"],area:["download","alt"],input:["alt","placeholder"],menuitem:["label"],menu:["label"],optgroup:["label"],option:["label"],track:["label"],img:["alt"],textarea:["placeholder"],th:["abbr"]}}},function(a,b,c){"use strict";function d(a,b,c,d,g,k,l){var m=Object.keys(d).concat(g||[]).concat(Object.keys(j.qps)),n=i.prioritizeLocales(c,m,l),o=n.map(function(a){return{code:a,src:h(b,d,g,a),dir:e(a)}});return f(k,n)||a(o),o}function e(a){return k.indexOf(a)>=0?"rtl":"ltr"}function f(a,b){return a.length===b.length&&a.every(function(a,c){return a===b[c]})}function g(a,b){for(var c=0,d=void 0;d=b[c];c++)if(d.target===a)return d;return null}function h(a,b,c,d){if(c&&c[d]){var e=g(a,c[d]);if(e&&(!(d in b)||parseInt(e.revision)>b[d]))return"extra"}return d in j.qps&&!(d in b)?"qps":"app"}Object.defineProperty(b,"__esModule",{value:!0}),b.negotiateLanguages=d,b.getDirection=e;var i=c(16),j=c(10),k=["ar","he","fa","ps","qps-plocm","ur"]},function(a,b){"use strict";function c(a,b,c){for(var d=void 0,e=0;e<c.length;e++){var f=c[e];if(-1!==b.indexOf(f)){d=f;break}}return d&&d!==a?[d,a]:[a]}Object.defineProperty(b,"__esModule",{value:!0}),b.prioritizeLocales=c}]));
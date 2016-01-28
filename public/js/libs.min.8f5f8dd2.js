/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/* perfect-scrollbar v0.6.10 */
!function t(e,n,r){function o(l,s){if(!n[l]){if(!e[l]){var a="function"==typeof require&&require;if(!s&&a)return a(l,!0);if(i)return i(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){var n=e[l][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,e,n){"use strict";function r(t){t.fn.perfectScrollbar=function(e){return this.each(function(){if("object"==typeof e||"undefined"==typeof e){var n=e;i.get(this)||o.initialize(this,n)}else{var r=e;"update"===r?o.update(this):"destroy"===r&&o.destroy(this)}return t(this)})}}var o=t("../main"),i=t("../plugin/instances");if("function"==typeof define&&define.amd)define(["jquery"],r);else{var l=window.jQuery?window.jQuery:window.$;"undefined"!=typeof l&&r(l)}e.exports=r},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function i(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}var l={};l.e=function(t,e){var n=document.createElement(t);return n.className=e,n},l.appendTo=function(t,e){return e.appendChild(t),t},l.css=function(t,e,n){return"object"==typeof e?i(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},l.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},l.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},l.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return l.matches(t,e)})},e.exports=l},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return n&&r!==e?!0:(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom");n.toInt=function(t){return parseInt(t,10)||0},n.clone=function(t){if(null===t)return null;if("object"==typeof t){var e={};for(var n in t)e[n]=this.clone(t[n]);return e}return t},n.extend=function(t,e){var n=this.clone(t);for(var r in e)n[r]=this.clone(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return this.toInt(o.css(t,"width"))+this.toInt(o.css(t,"paddingLeft"))+this.toInt(o.css(t,"paddingRight"))+this.toInt(o.css(t,"borderLeftWidth"))+this.toInt(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),i=t("./plugin/update");e.exports={initialize:o,update:i,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,stopPropagationOnClick:!0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,useKeyboard:!0,useSelectionScroll:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/dom"),o=t("../lib/helper"),i=t("./instances");e.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),r.remove(e.scrollbarX),r.remove(e.scrollbarY),r.remove(e.scrollbarXRail),r.remove(e.scrollbarYRail),o.removePsClasses(t),i.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";function r(t,e){function n(t){return t.getBoundingClientRect()}var r=window.Event.prototype.stopPropagation.bind;e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var i=o.toInt(e.scrollbarYHeight/2),a=e.railYRatio*(r.pageY-window.pageYOffset-n(e.scrollbarYRail).top-i),c=e.railYRatio*(e.railYHeight-e.scrollbarYHeight),u=a/c;0>u?u=0:u>1&&(u=1),s(t,"top",(e.contentHeight-e.containerHeight)*u),l(t),r.stopPropagation()}),e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var i=o.toInt(e.scrollbarXWidth/2),a=e.railXRatio*(r.pageX-window.pageXOffset-n(e.scrollbarXRail).left-i),c=e.railXRatio*(e.railXWidth-e.scrollbarXWidth),u=a/c;0>u?u=0:u>1&&(u=1),s(t,"left",(e.contentWidth-e.containerWidth)*u-e.negativeScrollAdjustment),l(t),r.stopPropagation()})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";function r(t,e){function n(n){var o=r+n*e.railXRatio,i=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);0>o?e.scrollbarXLeft=0:o>i?e.scrollbarXLeft=i:e.scrollbarXLeft=o;var s=l.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var r=null,o=null,s=function(e){n(e.pageX-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=l.toInt(i.css(e.scrollbarX,"left"))*e.railXRatio,l.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}function o(t,e){function n(n){var o=r+n*e.railYRatio,i=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);0>o?e.scrollbarYTop=0:o>i?e.scrollbarYTop=i:e.scrollbarYTop=o;var s=l.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var r=null,o=null,s=function(e){n(e.pageY-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=l.toInt(i.css(e.scrollbarY,"top"))*e.railYRatio,l.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}var i=t("../../lib/dom"),l=t("../../lib/helper"),s=t("../instances"),a=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=s.get(t);r(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&0>r)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&0>n||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0}),e.event.bind(t,"mouseleave",function(){r=!1});var l=!1;e.event.bind(e.ownerDocument,"keydown",function(c){if(!c.isDefaultPrevented||!c.isDefaultPrevented()){var u=i.matches(e.scrollbarX,":focus")||i.matches(e.scrollbarY,":focus");if(r||u){var d=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(d){for(;d.shadowRoot;)d=d.shadowRoot.activeElement;if(o.isEditable(d))return}var p=0,f=0;switch(c.which){case 37:p=-30;break;case 38:f=30;break;case 39:p=30;break;case 40:f=-30;break;case 33:f=90;break;case 32:f=c.shiftKey?90:-90;break;case 34:f=-90;break;case 35:f=c.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:f=c.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}a(t,"top",t.scrollTop-f),a(t,"left",t.scrollLeft+p),s(t),l=n(p,f),l&&c.preventDefault()}}})}var o=t("../../lib/helper"),i=t("../../lib/dom"),l=t("../instances"),s=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){var e=l.get(t);r(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&0>r)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&0>n||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function r(t){var e=t.deltaX,n=-1*t.deltaY;return("undefined"==typeof e||"undefined"==typeof n)&&(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),[e,n]}function o(e,n){var r=t.querySelector("textarea:hover");if(r){var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&0>n))return!0;var i=r.scrollLeft-r.clientWidth;if(i>0&&!(0===r.scrollLeft&&0>e||r.scrollLeft===i&&e>0))return!0}return!1}function s(s){var c=r(s),u=c[0],d=c[1];o(u,d)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(d?l(t,"top",t.scrollTop-d*e.settings.wheelSpeed):l(t,"top",t.scrollTop+u*e.settings.wheelSpeed),a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(u?l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed):l(t,"left",t.scrollLeft-d*e.settings.wheelSpeed),a=!0):(l(t,"top",t.scrollTop-d*e.settings.wheelSpeed),l(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),i(t),a=a||n(u,d),a&&(s.stopPropagation(),s.preventDefault()))}var a=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",s):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var o=t("../instances"),i=t("../update-geometry"),l=t("../update-scroll");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";function r(t,e){e.event.bind(t,"scroll",function(){i(t)})}var o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function r(){c||(c=setInterval(function(){return i.get(t)?(s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),void l(t)):void clearInterval(c)},50))}function a(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,a())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,a())}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},i={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<i.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>i.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<i.top+3?(i.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>i.bottom-3?(n.y-i.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():r()}})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";function r(t,e,n,r){function s(n,r){var o=t.scrollTop,i=t.scrollLeft,l=Math.abs(n),s=Math.abs(r);if(s>l){if(0>r&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(l>s&&(0>n&&i===e.contentWidth-e.containerWidth||n>0&&0===i))return!e.settings.swipePropagation;return!0}function a(e,n){l(t,"top",t.scrollTop-n),l(t,"left",t.scrollLeft-e),i(t)}function c(){Y=!0}function u(){Y=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function p(t){return t.targetTouches&&1===t.targetTouches.length?!0:t.pointerType&&"mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE?!0:!1}function f(t){if(p(t)){w=!0;var e=d(t);v.pageX=e.pageX,v.pageY=e.pageY,g=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!Y&&w&&p(t)){var e=d(t),n={pageX:e.pageX,pageY:e.pageY},r=n.pageX-v.pageX,o=n.pageY-v.pageY;a(r,o),v=n;var i=(new Date).getTime(),l=i-g;l>0&&(m.x=r/l,m.y=o/l,g=i),s(r,o)&&(t.stopPropagation(),t.preventDefault())}}function b(){!Y&&w&&(w=!1,clearInterval(y),y=setInterval(function(){return o.get(t)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10))}var v={},g=0,m={},y=null,Y=!1,w=!1;n&&(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",b)),r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",b)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",b)))}var o=t("../instances"),i=t("../update-geometry"),l=t("../update-scroll");e.exports=function(t,e,n){var i=o.get(t);r(t,i,e,n)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/class"),o=t("../lib/helper"),i=t("./instances"),l=t("./update-geometry"),s=t("./handler/click-rail"),a=t("./handler/drag-scrollbar"),c=t("./handler/keyboard"),u=t("./handler/mouse-wheel"),d=t("./handler/native-scroll"),p=t("./handler/selection"),f=t("./handler/touch");e.exports=function(t,e){e="object"==typeof e?e:{},r.add(t,"ps-container");var n=i.add(t);n.settings=o.extend(n.settings,e),r.add(t,"ps-theme-"+n.settings.theme),s(t),a(t),u(t),d(t),n.settings.useSelectionScroll&&p(t),(o.env.supportsTouch||o.env.supportsIePointer)&&f(t,o.env.supportsTouch,o.env.supportsIePointer),n.settings.useKeyboard&&c(t),l(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){function e(){s.add(t,"ps-focus")}function n(){s.remove(t,"ps-focus")}var r=this;r.settings=p.clone(c),r.containerWidth=null,r.containerHeight=null,r.contentWidth=null,r.contentHeight=null,r.isRtl="rtl"===a.css(t,"direction"),r.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),r.negativeScrollAdjustment=r.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.event=new u,r.ownerDocument=t.ownerDocument||document,r.scrollbarXRail=a.appendTo(a.e("div","ps-scrollbar-x-rail"),t),r.scrollbarX=a.appendTo(a.e("div","ps-scrollbar-x"),r.scrollbarXRail),r.scrollbarX.setAttribute("tabindex",0),r.event.bind(r.scrollbarX,"focus",e),r.event.bind(r.scrollbarX,"blur",n),r.scrollbarXActive=null,r.scrollbarXWidth=null,r.scrollbarXLeft=null,r.scrollbarXBottom=p.toInt(a.css(r.scrollbarXRail,"bottom")),r.isScrollbarXUsingBottom=r.scrollbarXBottom===r.scrollbarXBottom,r.scrollbarXTop=r.isScrollbarXUsingBottom?null:p.toInt(a.css(r.scrollbarXRail,"top")),r.railBorderXWidth=p.toInt(a.css(r.scrollbarXRail,"borderLeftWidth"))+p.toInt(a.css(r.scrollbarXRail,"borderRightWidth")),a.css(r.scrollbarXRail,"display","block"),r.railXMarginWidth=p.toInt(a.css(r.scrollbarXRail,"marginLeft"))+p.toInt(a.css(r.scrollbarXRail,"marginRight")),a.css(r.scrollbarXRail,"display",""),r.railXWidth=null,r.railXRatio=null,r.scrollbarYRail=a.appendTo(a.e("div","ps-scrollbar-y-rail"),t),r.scrollbarY=a.appendTo(a.e("div","ps-scrollbar-y"),r.scrollbarYRail),r.scrollbarY.setAttribute("tabindex",0),r.event.bind(r.scrollbarY,"focus",e),r.event.bind(r.scrollbarY,"blur",n),r.scrollbarYActive=null,r.scrollbarYHeight=null,r.scrollbarYTop=null,r.scrollbarYRight=p.toInt(a.css(r.scrollbarYRail,"right")),r.isScrollbarYUsingRight=r.scrollbarYRight===r.scrollbarYRight,r.scrollbarYLeft=r.isScrollbarYUsingRight?null:p.toInt(a.css(r.scrollbarYRail,"left")),r.scrollbarYOuterWidth=r.isRtl?p.outerWidth(r.scrollbarY):null,r.railBorderYWidth=p.toInt(a.css(r.scrollbarYRail,"borderTopWidth"))+p.toInt(a.css(r.scrollbarYRail,"borderBottomWidth")),a.css(r.scrollbarYRail,"display","block"),r.railYMarginHeight=p.toInt(a.css(r.scrollbarYRail,"marginTop"))+p.toInt(a.css(r.scrollbarYRail,"marginBottom")),a.css(r.scrollbarYRail,"display",""),r.railYHeight=null,r.railYRatio=null}function o(t){return"undefined"==typeof t.dataset?t.getAttribute("data-ps-id"):t.dataset.psId}function i(t,e){"undefined"==typeof t.dataset?t.setAttribute("data-ps-id",e):t.dataset.psId=e}function l(t){"undefined"==typeof t.dataset?t.removeAttribute("data-ps-id"):delete t.dataset.psId}var s=t("../lib/class"),a=t("../lib/dom"),c=t("./default-setting"),u=t("../lib/event-manager"),d=t("../lib/guid"),p=t("../lib/helper"),f={};n.add=function(t){var e=d();return i(t,e),f[e]=new r(t),f[e]},n.remove=function(t){delete f[o(t)],l(t)},n.get=function(t){return f[o(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,l.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,l.css(e.scrollbarYRail,r),l.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),l.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var i=t("../lib/class"),l=t("../lib/dom"),s=t("../lib/helper"),a=t("./instances"),c=t("./update-scroll");e.exports=function(t){var e=a.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=l.queryChildren(t,".ps-scrollbar-x-rail"),n.length>0&&n.forEach(function(t){l.remove(t)}),l.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=l.queryChildren(t,".ps-scrollbar-y-rail"),n.length>0&&n.forEach(function(t){l.remove(t)}),l.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,s.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=s.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,s.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=s.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),e.scrollbarXActive?i.add(t,"ps-active-x"):(i.remove(t,"ps-active-x"),e.scrollbarXWidth=0,e.scrollbarXLeft=0,c(t,"left",0)),e.scrollbarYActive?i.add(t,"ps-active-y"):(i.remove(t,"ps-active-y"),e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var r,o,i=t("./instances"),l=document.createEvent("Event"),s=document.createEvent("Event"),a=document.createEvent("Event"),c=document.createEvent("Event"),u=document.createEvent("Event"),d=document.createEvent("Event"),p=document.createEvent("Event"),f=document.createEvent("Event"),h=document.createEvent("Event"),b=document.createEvent("Event");l.initEvent("ps-scroll-up",!0,!0),s.initEvent("ps-scroll-down",!0,!0),a.initEvent("ps-scroll-left",!0,!0),c.initEvent("ps-scroll-right",!0,!0),u.initEvent("ps-scroll-y",!0,!0),d.initEvent("ps-scroll-x",!0,!0),p.initEvent("ps-x-reach-start",!0,!0),f.initEvent("ps-x-reach-end",!0,!0),h.initEvent("ps-y-reach-start",!0,!0),b.initEvent("ps-y-reach-end",!0,!0),e.exports=function(t,e,n){if("undefined"==typeof t)throw"You must provide an element to the update-scroll function";if("undefined"==typeof e)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof n)throw"You must provide a value to the update-scroll function";"top"===e&&0>=n&&(t.scrollTop=n=0,t.dispatchEvent(h)),"left"===e&&0>=n&&(t.scrollLeft=n=0,t.dispatchEvent(p));var v=i.get(t);"top"===e&&n>=v.contentHeight-v.containerHeight&&(t.scrollTop=n=v.contentHeight-v.containerHeight,t.dispatchEvent(b)),"left"===e&&n>=v.contentWidth-v.containerWidth&&(t.scrollLeft=n=v.contentWidth-v.containerWidth,t.dispatchEvent(f)),r||(r=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&r>n&&t.dispatchEvent(l),"top"===e&&n>r&&t.dispatchEvent(s),"left"===e&&o>n&&t.dispatchEvent(a),"left"===e&&n>o&&t.dispatchEvent(c),"top"===e&&(t.scrollTop=r=n,t.dispatchEvent(u)),"left"===e&&(t.scrollLeft=o=n,t.dispatchEvent(d))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/dom"),o=t("../lib/helper"),i=t("./instances"),l=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.css(e.scrollbarXRail,"display","block"),r.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=o.toInt(r.css(e.scrollbarXRail,"marginLeft"))+o.toInt(r.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=o.toInt(r.css(e.scrollbarYRail,"marginTop"))+o.toInt(r.css(e.scrollbarYRail,"marginBottom")),r.css(e.scrollbarXRail,"display","none"),r.css(e.scrollbarYRail,"display","none"),l(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),r.css(e.scrollbarXRail,"display",""),r.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]);
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.4 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return void(k._events=j={n:{}});var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(window||this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve||"function"==typeof require&&require("eve"))}(this,function(a,b){function c(a){if(c.is(a,"function"))return u?a():b.on("raphael.DOMload",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=O(~~(g/5),1),k=O(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?"y":"x",y=Q(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:P(A,1),t2:P(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+" × "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case"colour":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case"path":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case"transform":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case"csv":var M=I(i[y])[J](w),N=I(r[y])[J](w);if("clip-rect"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version="2.1.2",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\{(\d+)\}/g,z="hasOwnProperty",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,"Raphael"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D="apply",E="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G="",H=" ",I=String,J="split",K="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T="number",U="string",V="array",W=Object.prototype.toString,X=(c._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Y={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},eb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ib=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,jb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},pb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},qb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var sb,tb=A.doc.createElement("div");if(tb.innerHTML='<v:shape adj="1"/>',sb=tb.firstChild,sb.style.behavior="url(#default#VML)",!sb||"object"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml="VML"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),"finite"==b?!Y[z](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return Math.round(180*a/S%360*1e3)/1e3},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b};c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=16*N.random()|0,c="x"==a?b:3&b|8;return c.toString(16)});c.setWindow=function(a){b("raphael.setWindow",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=A.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue("color")})}return ub(a)},vb=function(){return"hsb("+[this.h,this.s,this.b]+")"},wb=function(){return"hsl("+[this.h,this.s,this.l]+")"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,d=a.o,a=a.h),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(",").replace(gb,"$1")};c._preload=function(a,b){var c=A.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a};c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){{var e=[];M.call(c)}d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&n(a,[["M",b,d],["H",e.x2+10]],1)%2==1},c._removedFactory=function(a){return function(){b("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=["R"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in f)&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][E](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][E](Fb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][E](Fb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][E](Fb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)k[b]="A",e&&(l[b]="A"),a.splice(b++,0,["C"][E](c.splice(0,6)));a.splice(b,1),p=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],p=O(d.length,e&&e.length||0))},k=[],l=[],m="",n="",o=0,p=O(d.length,e&&e.length||0);p>o;o++){d[o]&&(m=d[o][0]),"C"!=m&&(k[o]=m,o&&(n=k[o-1])),d[o]=h(d[o],f,n),"A"!=k[o]&&"C"==m&&(k[o]="C"),i(d,o),e&&(e[o]&&(m=e[o][0]),"C"!=m&&(l[o]=m,o&&(n=l[o-1])),e[o]=h(e[o],g,n),"A"!=l[o]&&"C"==m&&(l[o]="C"),i(e,o)),j(d,e,f,g,o),j(e,d,g,f,o);var q=d[o],r=e&&e[o],s=q.length,t=e&&r.length;f.x=q[s-2],f.y=q[s-1],f.bx=_(q[s-4])||f.x,f.by=_(q[s-3])||f.y,g.bx=e&&(_(r[t-4])||g.x),g.by=e&&(_(r[t-3])||g.y),g.x=e&&r[t-2],g.y=e&&r[t-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\.{3}|\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];
for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?"r"+[b.rotate,0,0]:G)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);v.safari="Apple Computer, Inc."==navigator.vendor&&(Qb&&Qb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],f,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c["un"+a]=$b["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e),b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind("raphael.drag.*."+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.getSize=function(){var a=this.canvas.parentNode;return{width:a.offsetWidth,height:a.offsetHeight}},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&"svg"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},"<":function(a){return R(a,1.7)},">":function(a){return R(a,.48)},"<>":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin(2*(a-.075)*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc["ease-in"]=hc["<"],hc.easeOut=hc["ease-out"]=hc[">"],hc.easeInOut=hc["ease-in-out"]=hc["<>"],hc["back-in"]=hc.backIn,hc["back-out"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+"%"!=g&&(f=!0,h[g]=a[g]);if(f)return d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b);if(e){var i=0;for(var j in a){var k=ab(j);a[z](j)&&k>i&&(i=k)}i+="%",!a[i].callback&&(a[i].callback=e)}return new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.pause."+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.stop."+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),$b.toString=function(){return"Raphaël’s object"};var mc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return"Raphaël‘s set"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=ab(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,G)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},v.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,b.on("raphael.DOMload",function(){u=!0}),function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url('"+document.location+"#"+k+"')",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y+"-obj"+d.id;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"title":var u=i.getElementsByTagName("title");if(u.length&&(u=u[0]))u.firstChild.nodeValue=p;else{u=q("title");var w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u)}break;case"href":case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var z=q("a");x.insertBefore(z,i),z.appendChild(i),x=z}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var A=b(p).split(j);if(4==A.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var B=q("clipPath"),C=q("rect");B.id=c.createUUID(),q(C,{x:A[0],y:A[1],width:A[2],height:A[3]}),B.appendChild(C),d.paper.defs.appendChild(B),q(i,{"clip-path":"url(#"+B.id+")"}),d.clip=C}if(!p){var D=i.getAttribute("clip-path");if(D){var E=c._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g,l));E&&E.parentNode.removeChild(E),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var F=b(p).match(c._ISURL);if(F){B=q("pattern");var G=q("image");B.id=c.createUUID(),q(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(G,{x:0,y:0,"xlink:href":F[1]}),B.appendChild(G),function(a){c._preload(F[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(G,{width:b,height:c}),d.paper.safari()})}(B),d.paper.defs.appendChild(B),q(i,{fill:"url(#"+B.id+")"}),d.pattern=B,d.pattern&&s(d);break}var H=c.getRGB(p);if(H.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var I=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(I){var J=I.getElementsByTagName("stop");q(J[J.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});H[a]("opacity")&&q(i,{"fill-opacity":H.opacity>1?H.opacity/100:H.opacity});case"stroke":H=c.getRGB(p),i.setAttribute(o,H.hex),"stroke"==o&&H[a]("opacity")&&q(i,{"stroke-opacity":H.opacity>1?H.opacity/100:H.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;
case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){I=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),I&&(J=I.getElementsByTagName("stop"),q(J[J.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var K=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[K]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a){return a.parentNode&&"a"===a.parentNode.tagName.toLowerCase()?a.parentNode:a},A=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},B=c.el;A.prototype=B,B.constructor=A,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new A(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},B.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},B.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},B.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},B.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},B.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},B.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},B.remove=function(){var a=z(this.node);if(!this.removed&&a.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),c._tear(this,b),a.parentNode.removeChild(a),this.removeData();for(var d in this)this[d]="function"==typeof this[d]?c._removedFactory(d):null;this.removed=!0}},B._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b,c=!1;this.paper.canvas.parentElement?b=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(b=this.paper.canvas.parentNode.style),b&&"none"==b.display&&(c=!0,b.display="");var d={};try{d=this.node.getBBox()}catch(e){d={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{d=d||{},c&&(b.display="none")}return a&&this.hide(),d},B.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},B.toFront=function(){if(this.removed)return this;var a=z(this.node);a.parentNode.appendChild(a);var b=this.paper;return b.top!=this&&c._tofront(this,b),this},B.toBack=function(){if(this.removed)return this;var a=z(this.node),b=a.parentNode;b.insertBefore(a,b.firstChild),c._toback(this,this.paper);this.paper;return this},B.insertAfter=function(a){if(this.removed||!a)return this;var b=z(this.node),d=z(a.node||a[a.length-1].node);return d.nextSibling?d.parentNode.insertBefore(b,d.nextSibling):d.parentNode.appendChild(b),c._insertafter(this,a,this.paper),this},B.insertBefore=function(a){if(this.removed||!a)return this;var b=z(this.node),d=z(a.node||a[0].node);return d.parentNode.insertBefore(b,d),c._insertbefore(this,a,this.paper),this},B.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new A(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:b,y:c,width:d,height:e,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,"font-family":c._availableAttrs["font-family"],"font-size":c._availableAttrs["font-size"],stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=this.getSize(),j=g(c/i.width,d/i.height),l=this.top,n=e?"xMidYMid meet":"xMinYMin";for(null==a?(this._vbSize&&(j=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=j,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:n});j&&l;)h="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":h}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var C=c.st;for(var D in B)B[a](D)&&!C[a](D)&&(C[D]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(D))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),e._.dirty=1,"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),"stroke-dasharray"in i){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return null!==d&&(this._.transform=d,c._extractTransform(this,d)),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E.auxGetBBox=c.el.getBBox,E.getBBox=function(){var a=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var b={},c=1/this.paper._viewBoxShift.scale;return b.x=a.x-this.paper._viewBoxShift.dx,b.x*=c,b.y=a.y-this.paper._viewBoxShift.dy,b.y*=c,b.width=a.width*c,b.height=a.height*c,b.x2=b.x+b.width,b.y2=b.y+b.height,b}return a},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){{var f=a.path();f.attrs}return f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){{var e=a.path();e.attrs}return e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var g,h,i=this.getSize(),j=i.width,k=i.height;return f&&(g=k/e,h=j/d,j>d*g&&(a-=(j-d*g)/2/g),k>e*h&&(b-=(k-e*h)/2/h)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:i},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.styleSheets.length<31?b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):b.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,"object"==typeof exports&&(module.exports=c),c});
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

// Include a performance.now polyfill
(function () {

	if ('performance' in window === false) {
		window.performance = {};
	}

	// IE 8
	Date.now = (Date.now || function () {
		return new Date().getTime();
	});

	if ('now' in window.performance === false) {
		var offset = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart
		                                                                                    : Date.now();

		window.performance.now = function () {
			return Date.now() - offset;
		};
	}

})();

var TWEEN = TWEEN || (function () {

	var _tweens = [];

	return {

		getAll: function () {

			return _tweens;

		},

		removeAll: function () {

			_tweens = [];

		},

		add: function (tween) {

			_tweens.push(tween);

		},

		remove: function (tween) {

			var i = _tweens.indexOf(tween);

			if (i !== -1) {
				_tweens.splice(i, 1);
			}

		},

		update: function (time) {

			if (_tweens.length === 0) {
				return false;
			}

			var i = 0;

			time = time !== undefined ? time : window.performance.now();

			while (i < _tweens.length) {

				if (_tweens[i].update(time)) {
					i++;
				} else {
					_tweens.splice(i, 1);
				}

			}

			return true;

		}
	};

})();

TWEEN.Tween = function (object) {

	var _object = object;
	var _valuesStart = {};
	var _valuesEnd = {};
	var _valuesStartRepeat = {};
	var _duration = 1000;
	var _repeat = 0;
	var _yoyo = false;
	var _isPlaying = false;
	var _reversed = false;
	var _delayTime = 0;
	var _startTime = null;
	var _easingFunction = TWEEN.Easing.Linear.None;
	var _interpolationFunction = TWEEN.Interpolation.Linear;
	var _chainedTweens = [];
	var _onStartCallback = null;
	var _onStartCallbackFired = false;
	var _onUpdateCallback = null;
	var _onCompleteCallback = null;
	var _onStopCallback = null;

	// Set all starting values present on the target object
	for (var field in object) {
		_valuesStart[field] = parseFloat(object[field], 10);
	}

	this.to = function (properties, duration) {

		if (duration !== undefined) {
			_duration = duration;
		}

		_valuesEnd = properties;

		return this;

	};

	this.start = function (time) {

		TWEEN.add(this);

		_isPlaying = true;

		_onStartCallbackFired = false;

		_startTime = time !== undefined ? time : window.performance.now();
		_startTime += _delayTime;

		for (var property in _valuesEnd) {

			// Check if an Array was provided as property value
			if (_valuesEnd[property] instanceof Array) {

				if (_valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);

			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (_valuesStart[property] === undefined) {
				continue;
			}

			_valuesStart[property] = _object[property];

			if ((_valuesStart[property] instanceof Array) === false) {
				_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			_valuesStartRepeat[property] = _valuesStart[property] || 0;

		}

		return this;

	};

	this.stop = function () {

		if (!_isPlaying) {
			return this;
		}

		TWEEN.remove(this);
		_isPlaying = false;

		if (_onStopCallback !== null) {
			_onStopCallback.call(_object);
		}

		this.stopChainedTweens();
		return this;

	};

	this.stopChainedTweens = function () {

		for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
			_chainedTweens[i].stop();
		}

	};

	this.delay = function (amount) {

		_delayTime = amount;
		return this;

	};

	this.repeat = function (times) {

		_repeat = times;
		return this;

	};

	this.yoyo = function (yoyo) {

		_yoyo = yoyo;
		return this;

	};


	this.easing = function (easing) {

		_easingFunction = easing;
		return this;

	};

	this.interpolation = function (interpolation) {

		_interpolationFunction = interpolation;
		return this;

	};

	this.chain = function () {

		_chainedTweens = arguments;
		return this;

	};

	this.onStart = function (callback) {

		_onStartCallback = callback;
		return this;

	};

	this.onUpdate = function (callback) {

		_onUpdateCallback = callback;
		return this;

	};

	this.onComplete = function (callback) {

		_onCompleteCallback = callback;
		return this;

	};

	this.onStop = function (callback) {

		_onStopCallback = callback;
		return this;

	};

	this.update = function (time) {

		var property;
		var elapsed;
		var value;

		if (time < _startTime) {
			return true;
		}

		if (_onStartCallbackFired === false) {

			if (_onStartCallback !== null) {
				_onStartCallback.call(_object);
			}

			_onStartCallbackFired = true;

		}

		elapsed = (time - _startTime) / _duration;
		elapsed = elapsed > 1 ? 1 : elapsed;

		value = _easingFunction(elapsed);

		for (property in _valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (_valuesStart[property] === undefined) {
				continue;
			}

			var start = _valuesStart[property] || 0;
			var end = _valuesEnd[property];

			if (end instanceof Array) {

				_object[property] = _interpolationFunction(end, value);

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof (end) === 'string') {

					if (end.startsWith('+') || end.startsWith('-')) {
						end = start + parseFloat(end, 10);
					} else {
						end = parseFloat(end, 10);
					}
				}

				// Protect against non numeric properties.
				if (typeof (end) === 'number') {
					_object[property] = start + (end - start) * value;
				}

			}

		}

		if (_onUpdateCallback !== null) {
			_onUpdateCallback.call(_object, value);
		}

		if (elapsed === 1) {

			if (_repeat > 0) {

				if (isFinite(_repeat)) {
					_repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in _valuesStartRepeat) {

					if (typeof (_valuesEnd[property]) === 'string') {
						_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property], 10);
					}

					if (_yoyo) {
						var tmp = _valuesStartRepeat[property];

						_valuesStartRepeat[property] = _valuesEnd[property];
						_valuesEnd[property] = tmp;
					}

					_valuesStart[property] = _valuesStartRepeat[property];

				}

				if (_yoyo) {
					_reversed = !_reversed;
				}

				_startTime = time + _delayTime;

				return true;

			} else {

				if (_onCompleteCallback !== null) {
					_onCompleteCallback.call(_object);
				}

				for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					_chainedTweens[i].start(_startTime + _duration);
				}

				return false;

			}

		}

		return true;

	};

};


TWEEN.Easing = {

	Linear: {

		None: function (k) {

			return k;

		}

	},

	Quadratic: {

		In: function (k) {

			return k * k;

		},

		Out: function (k) {

			return k * (2 - k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return - 0.5 * (--k * (k - 2) - 1);

		}

	},

	Cubic: {

		In: function (k) {

			return k * k * k;

		},

		Out: function (k) {

			return --k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);

		}

	},

	Quartic: {

		In: function (k) {

			return k * k * k * k;

		},

		Out: function (k) {

			return 1 - (--k * k * k * k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return - 0.5 * ((k -= 2) * k * k * k - 2);

		}

	},

	Quintic: {

		In: function (k) {

			return k * k * k * k * k;

		},

		Out: function (k) {

			return --k * k * k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);

		}

	},

	Sinusoidal: {

		In: function (k) {

			return 1 - Math.cos(k * Math.PI / 2);

		},

		Out: function (k) {

			return Math.sin(k * Math.PI / 2);

		},

		InOut: function (k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));

		}

	},

	Exponential: {

		In: function (k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);

		},

		Out: function (k) {

			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

		}

	},

	Circular: {

		In: function (k) {

			return 1 - Math.sqrt(1 - k * k);

		},

		Out: function (k) {

			return Math.sqrt(1 - (--k * k));

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function (k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			return - (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));

		},

		Out: function (k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			return (a * Math.pow(2, - 10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);

		},

		InOut: function (k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			if ((k *= 2) < 1) {
				return - 0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
			}

			return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

		}

	},

	Back: {

		In: function (k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);

		},

		Out: function (k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;

		},

		InOut: function (k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

		}

	},

	Bounce: {

		In: function (k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

		},

		Out: function (k) {

			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}

		},

		InOut: function (k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

	},

	Bezier: function (v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;

	},

	CatmullRom: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

		}

	},

	Utils: {

		Linear: function (p0, p1, t) {

			return (p1 - p0) * t + p0;

		},

		Bernstein: function (n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);

		},

		Factorial: (function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;

			};

		})(),

		CatmullRom: function (p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

		}

	}

};

// UMD (Universal Module Definition)
(function (root) {

	if (typeof define === 'function' && define.amd) {

		// AMD
		define([], function () {
			return TWEEN;
		});

	} else if (typeof module !== 'undefined' && typeof exports === 'object') {

		// Node.js
		module.exports = TWEEN;

	} else if (root !== undefined) {

		// Global variable
		root.TWEEN = TWEEN;

	}

})(this);

if ((typeof module == 'object') && (typeof module.exports == 'object')) {
  var $ = require('jquery');
  var Raphael = require('webpack-raphael');
  var TWEEN = require('tween.js');
}

var vis4 = function() {};

vis4.log = function() {
	try {
		if (window.console !== null) console.log.apply(this, arguments);
	} catch (e) {};
};

vis4.str2time = function(s) {
	var p = s.split(".");
	return Math.round(Date.UTC(2000+p[0], p[1]-1, p[2])*0.001);
};

vis4.round = function(val, prec) {
	var d = Math.pow(10, prec);
	return Math.round(val*d)/d;
};
vis4.formatNumber_ksep = '.';
vis4.formatNumber_dsep = ',';
vis4.formatNumber = function(nr, round) {
	//if (nr > 999999 && round) return (''+vis4.round(nr/1000000,1)).replace(".",vis4.formatNumber_dsep)+"&nbsp;Mio";
	nr = ''+nr;
	var out = '', c=0;
	for (var i=nr.length-1;i>=0;i--) {
		if (c > 0 && c < nr.length && c%3==0) out = vis4.formatNumber_ksep + out;
		out = nr[i] + out;
		c++;
	}
	return out;
};
vis4.parseTSV = function(raw, asObject) {
	var lines = raw.split("\n");
	var data = [];
	var props;
	var l;
	for (l=0; l<lines.length; l++) {
		var line = lines[l];
		if (line !== '') {
			//if (line != lines[lines.length-1]) line = StringUtil.trim(line);
			if (asObject) {
				if (l === 0) props = line.split("\t");
				else {
					var obj = { };
					var values = line.split("\t");
					if (values.length != props.length) {
						return "wrong tsv format";
					}
					for (var p = 0; p < props.length; p++) {
						obj[$.trim(props[p])] = $.trim(values[p]);
					}
					data.push(obj);
				}
			} else {
				data.push(line.split("\t"));
			}
		}
	}
	return data;
};

vis4.map = function(arr, idCol) {
	var map = {};
	for (var i=0; i<arr.length; i++) {
		map[arr[i][idCol]] = arr[i];
	}
	return map;
};

vis4.DelayedTask = function(/* delay, scope, func, args */) {

	var me = this;

	me.init = function(args) {
		var me = this, taskArgs = [];
		for (var i in args) {
			if (i > 2) taskArgs.push(args[i]);
		}
		me.func = args[2];
		me.scope = args[1];
		me.args = taskArgs;
		me.running = true;
		me.timer = window.setTimeout(this.run.bind(me), args[0]);
	};

	me.run = function() {
		var me = this;
		me.func.apply(me.scope, me.args);
		me.running = false;
	};

	me.cancel = function() {
		vis4.log('canceling timer', this);
		window.clearTimeout(this.timer);
		this.running = false;
	};

	me.init(arguments);
};

var vis4loadingItem = function(url, id, type, ldr) {
	this.url = url; this.id = id; this.type = type; this.loader = ldr;

	this.load = function() {
		$.get(this.url, this.processContent.bind(this));
	};

	this.processContent = function(content) {
		if (this.type == 'tsv') this.data = vis4.parseTSV(content, true);
		else if (this.type == 'json') this.data = (typeof(content) == "string") ? $.parseJSON(content) : content;
		else this.data = content;
		this.loader.itemLoaded();
	};

};

/*
 * usage:
 *
 * var ldr = new vis4loader();
 * ldr.add('data.txt', 'id1');
 * ldr.add('data/employes.tsv', 'employes', 'tsv');
 * ldr.add('data/list.json', 'list', 'json');
 * ldr.load(function(ldr)
 *
 */
var vis4loader = function() {
	this.items = []; this.byID = {};

	this.add = function(url, id, type) {
		if (type === null) type = 'text';
		var item = new vis4loadingItem(url, id, type, this);
		this.items.push(item);
		this.byID[id] = item;
	};

	this.load = function(callback) {
		this.callback = callback;
		this.loaded = 0;
		for (var i=0;i<this.items.length;i++) {
			this.items[i].load();
		}
	};

	this.itemLoaded = function() {
		this.loaded++;
		if (this.loaded == this.items.length) this.callback(this);
	};

	this.get = function(id) {
		return this.byID[id].data;
	};
};

/*
 * vis4color.fromHex("#FF0000").saturation("*.5").lightness(.8).hue("+10").hex;
 *
 *
 */

var vis4color = function(mode) {

	this.h = 0; this.s = 0.5; this.l = 0.8; this.v = 1; this.i = 1; this.r = 255; this.g = 0; this.b = 0;
	this.x = "#FF0000"; this.u = 0; this.br = 1; this.K = 1/180*Math.PI;
	if (mode == 'hsi' || mode == 'hsl' || mode == 'hsb' || mode == 'hsv') this.mode = mode;

	this.log = function(s) {
		if (window.console !== null) console.log(s);
	};

	this.cos = function(d) {
		return Math.cos(d*this.K);
	};

	this.trim = function(value) {
		return Math.max(0, Math.min(1, value));
	};

	this.setMode = function(mode) {
		if (mode != 'hsv' && mode != 'hsi' && mode != 'hsl' && mode != 'hsb') {
			this.log("unknown color mode "+mode);
		}
		this.mode = mode;
		// recalc hsx-color
		this.rgb2hsx();
	};

	this.setHexColor = function(hex) {
		if (hex.charAt(0) != "#") hex = "#"+hex;
		if (hex.length == 4) hex = "#"+hex.charAt(1)+hex.charAt(1)+hex.charAt(2)+hex.charAt(2)+hex.charAt(3)+hex.charAt(3);
		if (hex.length != 7) this.log("invalid hex color");
		this.x = hex;
		this.hex2int();
		this.int2rgb();
		this.rgb2hsx();
	};

	this.setRGBColor = function(r,g,b) {
		this.r = r; this.b = b; this.g = g;
		this.rgb2int();
		this.int2hex();
		this.rgb2hsx();
	};

	this.setHSVColor = function(h,s,v) {
		if (this.mode != 'hsv') this.mode = 'hsv';
		this.h = h; this.s = this.trim(s); this.v = this.trim(v);
		this.hsv2rgb();
		this.rgb2int();
		this.int2hex();
	};

	this.setHSLColor = function(h,s,l) {
		if (this.mode != 'hsl') this.mode = 'hsl';
		this.h = h; this.s = this.trim(s); this.l = this.trim(l);
		this.hsl2rgb();
		this.rgb2int();
		this.int2hex();
	};

	this.setHSBColor = function(h,s,b) {
		if (this.mode != 'hsb') this.mode = 'hsb';
		this.h = h; this.s = this.trim(s); this.b = this.trim(b);
		this.hsb2rgb();
		this.rgb2int();
		this.int2hex();
	};

	this.setHSIColor = function(h,s,i) {
		if (this.mode != 'hsi') this.mode = 'hsi';
		this.h = h; this.s = this.trim(s); this.i = this.trim(i);
		this.hsi2rgb();
		this.rgb2int();
		this.int2hex();
	};

	// private methods

	this.onChange = function() { };

	this.rgb2int = function() {
		this.u = this.r << 16 | this.g << 8 | this.b;
		this.onChange();
	};

	this.int2rgb = function() {
		this.r = this.u >> 16;
		this.g = this.u >> 8 & 0xFF;
		this.b = this.u & 0xFF;
	};

	this.hex2int = function() {
		this.u = parseInt(this.x.substr(1), 16);
		this.onChange();
	};

	this.int2hex = function() {
		var str = "000000" + this.u.toString(16).toUpperCase();
		this.x = "#" + str.substr(str.length - 6);
		this.onChange();
	};

	this.int2rgb = function() {
		this.r = this.u >> 16;
		this.g = this.u >> 8 & 0xFF;
		this.b = this.u & 0xFF;
	};

	this.hsx2rgb = function() {
		switch (this.mode) {
			case 'hsv': this.hsv2rgb(); break;
			case 'hsi': this.hsi2rgb(); break;
			case 'hsl': this.hsl2rgb(); break;
			case 'hsb': this.hsb2rgb(); break;
		}
	};

	this.rgb2hsx = function() {
		switch (this.mode) {
			case 'hsv': this.rgb2hsv(); break;
			case 'hsi': this.rgb2hsi(); break;
			case 'hsl': this.rgb2hsl(); break;
			case 'hsb': this.rgb2hsb(); break;
		}
	};

	this.hue = function(h) {
		this._evaluate(h, "h");
		this.hsx2rgb();
		this.rgb2int();
		this.int2hex();
		return this;
	};

	this.saturation = function(s) {
		this._evaluate(s, "s");
		this.hsx2rgb();
		this.rgb2int();
		this.int2hex();
		return this;
	};

	this.lightness = function(l) {
		if (this.mode != "hsl") { this.log("WARNING: lightness property not available in "+this.mode+" mode"); return; }
		this._evaluate(l, "l");
		this.hsx2rgb();
		this.rgb2int();
		this.int2hex();
		return this;
	};

	this.brightness = function(br) {
		if (this.mode != "hsb") { this.log("WARNING: brightness property not available in "+this.mode+" mode"); return; }
		this._evaluate(br, "br");
		this.hsx2rgb();
		this.rgb2int();
		this.int2hex();
		return this;
	};

	this.value = function(v) {
		if (this.mode != "hsv") { this.log("WARNING: value property not available in "+this.mode+" mode"); return; }
		this._evaluate(v, "v");
		this.hsx2rgb();
		this.rgb2int();
		this.int2hex();
		return this;
	};

	this.intensity = function(i) {
		if (this.mode != "hsi") { this.log("WARNING: intensity property not available in "+this.mode+" mode"); return; }
		this._evaluate(i, "i");
		this.hsx2rgb();
		this.rgb2int();
		this.int2hex();
		return this;
	};

	this._evaluate = function(val, propName) {
		if (typeof(val) == "string") {
			if (val.charAt(0) == "+" && !isNaN(val.substr(1))) {
				this[propName] = Number(this[propName]) + Number(val.substr(1));
			} else if (val.charAt(0) == "-" && !isNaN(val.substr(1))) {
				this[propName] = this[propName] - Number(val.substr(1));
			} if (val.charAt(0) == "*" && !isNaN(val.substr(1))) {
				this[propName] = this[propName] * Number(val.substr(1));
			} else if (val.charAt(0) == "/" && !isNaN(val.substr(1))) {
				this[propName] = this[propName] / Number(val.substr(1));
			}
		} else if (!isNaN(val)) {
			this[propName] = Number(val);
		}
	};

	this.rgb = function() { return [this.r,this.g,this.b]; };
	this.hsl = function() { return [this.h,this.s,this.l]; };

	// hsv magic

	this.rgb2hsv = function() {
		var min = Math.min(Math.min(this.r, this.g), this.b),
			max = Math.max(Math.max(this.r, this.g), this.b),
			delta = max - min;

		this.v = max/255;
		this.s = delta / max;
		if (this.s === 0) {
			this.h = undefined;
		} else {
			if (this.r == max) this.h = (this.g - this.b) / delta;
			if (this.g == max) this.h = 2+(this.b - this.r) / delta;
			if (this.b == max) this.h = 4+(this.r - this.g) / delta;
			this.h *= 60;
			if (this.h < 0) this.h += 360;
		}
	};

	this.hsv2rgb = function() {
		var h = this.h, s = this.s, _rgb = this._rgb, v = this.v*255, i, f, p, q, t;

		if (this.s === 0 && isNaN(h)) {
			this.r = this.g = this.b = v;
		} else {
			if (h == 360) h = 0;
			h /= 60;
			i = Math.floor(h);
			f = h - i;
			p = v * (1 - s);
			q = v * (1 - s * f);
			t = v * (1 - s * (1 - f));

			switch (i) {
				case 0: _rgb(v, t, p); break;
				case 1: _rgb(q, v, p); break;
				case 2: _rgb(p, v, t); break;
				case 3: _rgb(p, q, v); break;
				case 4: _rgb(t, p, v); break;
				case 5: _rgb(v, p, q);
			}
		}
	};

	this._rgb = function(r,g,b) {
		this.r = r; this.g = g; this.b = b;
	};
	// hsl magic

	this.rgb2hsl = function() {
		var r = this.r / 255,
			g = this.g / 255,
			b = this.b / 255,
			min = Math.min(Math.min(r, g), b),
			max = Math.max(Math.max(r, g), b);

		this.l = (max + min) / 2;
		if (max == min) {
			this.s = 0;
			this.h = undefined;
		} else {
			if (this.l < 0.5) {
				this.s = (max - min) / (max + min);
			} else {
				this.s = (max - min) / (2 - max - min);
			}
		}
		if (r == max) this.h = (g - b) / (max - min);
		else if (g == max) this.h = 2 + (b - r) / (max - min);
		else if (b == max) this.h = 4 + (r - g) / (max - min);

		this.h *= 60;
		if (this.h < 0) this.h += 360;
	};

	this.hsl2rgb = function() {
		if (this.s === 0) {
			this.r = this.g = this.b = this.l*255;
		} else {
			var t1, t2, t3 = [0,0,0], c = [0,0,0];
			if (this.l < 0.5) {
				t2 = this.l * (1 + this.s);
			} else {
				t2 = this.l + this.s - this.l * this.s;
			}
			t1 = 2 * this.l - t2;
			var h = this.h / 360;
			t3[0] = h + 1 / 3;
			t3[1] = h;
			t3[2] = h - 1 / 3;
			for (var i = 0; i < 3; i++) {
				if (t3[i] < 0) t3[i] += 1;
				if (t3[i] > 1) t3[i] -= 1;

				if (6 * t3[i] < 1) c[i] = t1 + (t2 - t1) * 6 * t3[i];
				else if (2 * t3[i] < 1) c[i] = t2;
				else if (3 * t3[i] < 2) c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
				else c[i] = t1;
			}
			this.r = c[0] * 255;
			this.g = c[1] * 255;
			this.b = c[2] * 255;
		}
	};

	// hsb magic

	this.rgb2hsb = function() {
		this.rgb2hsl();
		this.br = this._rgbLuminance();
	};

	this._rgbLuminance = function() {
		return (0.2126 * this.r + 0.7152 * this.g + 0.0722 * this.b) / 255;
	};

	this.hsb2rgb = function() {
		var treshold = 0.001;
		var l_min = 0, l_max = 1, l_est = 0.5;
		var current_brightness;

		// first try
		this.l = l_est;
		this.hsl2rgb();
		current_brightness = this._rgbLuminance();
		var trys = 0;

		while (Math.abs(current_brightness - this.br) > treshold && trys < 100) {

			if (current_brightness > this.br) {
				// too bright, next try darker
				l_max = l_est;
			} else {
				// too dark, next try brighter
				l_min = l_est;
			}
			l_est = (l_min + l_max) / 2;
			this.l = l_est;
			this.hsl2rgb();
			current_brightness = this._rgbLuminance();
			trys++;
		}
		this.br = current_brightness;
	};

	// hsi magic

	this.rgb2hsi = function() { // http://fourier.eng.hmc.edu/e161/lectures/colorprocessing/node3.html
		var min, r = this.r, g = this.g, b = this.b,
			max = Math.max(Math.max(r, g), b),
			sum = r + g + b,
			delta = max - min;

		r = r / sum;
		g = g / sum;
		b = b / sum;

		min = Math.min(Math.min(r, g), b);
		//trace('rgb = ',r,g,b,' min = ' + min);

		this.i = (r + g + b) / 765;
		this.h = this.acos((r - 0.5*g - 0.5*b) / Math.sqrt( (r - g) * (r - g) + (r - b) * (g - b)) );
		this.s = 1 - 3 * min;

		if (b > g) this.h = 360 - this.h;
	};

	this.hsi2rgb = function() { // http://fourier.eng.hmc.edu/e161/lectures/colorprocessing/node4.html
		var h = this.h,i=this.i,s=this.s, r, b, g, cos = this.cos;

		if (h <= 120) {
			b = (1 - s) / 3;
			r = (1 + (s * cos(h)) / cos(60 - h)) / 3;
			g = 1 - (b + r);
		} else if (h <= 240) {
			h -= 120;
			r = (1 - s) / 3;
			g = (1 + (s * cos(h)) / cos(60 - h)) / 3;
			b = 1 - (r + g);
		} else {
			h -= 240;
			g = (1 - s) / 3;
			b = (1 + (s * cos(h)) / cos(60 - h)) / 3;
			r = 1 - (g + b);
		}
		r = Math.min(255, r*i*3*255);
		g = Math.min(255, g*i*3*255);
		b = Math.min(255, b*i*3*255);
	};
};

// static constructors

vis4color.fromHex = function(color, mode) {
	if (mode == null) mode = 'hsl';
	var c = new vis4color(mode);
	c.setHexColor(color);
	return c;
};

vis4color.fromRGB = function(r, g, b, mode) {
	if (mode === null) mode = 'hsl';
	var c = new vis4color(mode);
	c.setRGBolor(r,g,b);
	return c;
};

vis4color.fromHSV = function(h,s,v, mode) {
	if (mode === null) mode = 'hsl';
	var c = new vis4color(mode);
	c.setHSVColor(h,s,v);
	return c;
};

vis4color.fromHSL = function(h,s,l, mode) {
	if (mode === null) mode = 'hsl';
	var c = new vis4color(mode);
	c.setHSLColor(h,s,l);
	return c;
};

vis4color.fromHSB = function(h,s,b, mode) {
	if (mode === null) mode = 'hsl';
	var c = new vis4color(mode);
	c.setHSBColor(h,s,b);
	return c;
};

vis4color.fromHSI = function(h,s,i, mode) {
	if (mode === null) mode = 'hsl';
	var c = new vis4color(mode);
	c.setHSIColor(h,s,i);
	return c;
};

/*!
 * BubbleTree 2.0.2
 *
 * Copyright (c) 2011 Gregor Aisch (http://driven-by-data.net)
 * Licensed under the MIT license
 *
 */
/*jshint undef: true, browser:true, jquery: true, devel: true, smarttabs: true */
/*global Raphael, TWEEN, vis4, vis4color, vis4loader */

var BubbleTree = function(config, onHover, onUnHover) {

	var history = $.history || {
    callback: null,
    options: null,
    init: function(callback, options) {
      this.callback = callback;
      this.options = options;
      this.load('/');
    },
    load: function(url) {
      if (typeof this.callback == 'function') {
        this.callback(url);
      }
    }
  };

	var me = this;

	me.version = "2.0.2";

	me.$container = $(config.container).empty();

	me.config = $.extend({
        // Clear colors for all nodes (is doing before autoColors!)
        clearColors: false,
        // If node has no color - automatically assign it
        autoColors: false,
		// this is where we look for the icons
		rootPath: '',
		// show full labels inside bubbles with min radius of 40px
		minRadiusLabels: 40,
		// just show the amounts inside bubbles with min radius of 20px
		minRadiusAmounts: 20,
		// hide labels at all for bubbles with min radius of 0 (deactivated by def)
		minRadiusHideLabels: 0,
		// trim labels after 50 characters
		cutLabelsAt: 50,

	    strokeOpt: {
	    	stroke: '#888',
	    	'stroke-dasharray': "-"
	    }
	}, config);

	/*
	 * this function is called when the user hovers a bubble
	 */
	//me.onHover = onHover;

	//me.onUnHover = onUnHover;
	me.tooltip = config.tooltipCallback ? config.tooltipCallback : function() {};
	if (config.tooltip) me.tooltip = config.tooltip;

	/*
	 * stylesheet JSON that contains colors and icons for the bubbles
	 */
	me.style = config.bubbleStyles;

	me.ns = BubbleTree;

	/*
	 * hashmap of all nodes by url token
	 */
	me.nodesByUrlToken = {};

	/*
	 * flat array of all nodes
	 */
	me.nodeList = [];

	me.iconsByUrlToken = {};

	me.globalNodeCounter = 0;

	me.displayObjects = [];

	me.bubbleScale = 1;

	me.globRotation = 0;

	me.currentYear = config.initYear;

	me.currentCenter = undefined;

	me.currentTransition = undefined;

	me.baseUrl = '';

	/*
	 * @public loadData
	 */
	me.loadData = function(url) {
		$.ajax({
			url: url,
			dataType: 'json',
			success: this.setData.bind(this)
		});
	};

	/*
	 * is either called directly or by $.ajax when data json file is loaded
	 */
	me.setData = function(data) {
		var me = this;
		if (!data) data = me.config.data; // IE fix
		me.initData(data);
		me.initPaper();
		me.initBubbles();
		me.initTween();
		me.initHistory();
	};

	/*
	 * initializes the data tree, adds links to parent node for easier traversal etc
	 */
	me.initData = function(root) {
		var me = this;
		root.level = 0;
		me.preprocessData(root);
		me.traverse(root, 0);
		me.treeRoot = root;
	};

	me.preprocessData = function(root) {
		var me = this, maxNodes = me.config.maxNodesPerLevel;
		if (maxNodes) {
			if (maxNodes < root.children.length) {
				// take the smallest nodes
				// sort children
				var tmp = me.sortChildren(root.children);
				tmp.reverse();
				var keep = [], move = [], moveAmount = 0, breakdown;
				for (var i in root.children) {
					if (i < maxNodes) {
						keep.push(root.children[i]);
					} else {
						move.push(root.children[i]);
						moveAmount += Math.max(0, root.children[i].amount);
					}
				}
				root.children = keep;
				root.children.push({
					'label': 'More',
					'name': 'more',
					'amount': moveAmount,
					'children': move,
					'breakdown': breakdown
				});
			}
		}
	};

	/*
	 * used for recursive tree traversal
	 */
	me.traverse = function(node, index) {
		var c, child, pc, me = this, urlTokenSource, styles = me.config.bubbleStyles;

		//if (node.amount <= 0) return;

		if (!node.children) node.children = [];

		// store node in flat node list
		me.nodeList.push(node);

		node.famount = me.ns.Utils.formatNumber(node.amount);
		if (node.parent) node.level = node.parent.level + 1;

		if (me.config.clearColors === true) node.color = false;

		if (styles) {

			var props = ['color', 'shortLabel', 'icon'];

			$.each(props, function (p, prop) {
				if (styles.hasOwnProperty('id') && styles.id.hasOwnProperty(node.id) && styles.id[node.id].hasOwnProperty(prop)) {
					// use color by id
					node[prop] = styles.id[node.id][prop];
				} else if (node.hasOwnProperty('name') && styles.hasOwnProperty('name') && styles.name.hasOwnProperty(node.name) && styles.name[node.name].hasOwnProperty(prop)) {
					// use color by id
					node[prop] = styles.name[node.name][prop];
				} else if (node.hasOwnProperty('taxonomy') && styles.hasOwnProperty(node.taxonomy) && styles[node.taxonomy].hasOwnProperty(node.name) && styles[node.taxonomy][node.name].hasOwnProperty(prop)) {
					node[prop] = styles[node.taxonomy][node.name][prop];
				}
			});
		}

		if (!node.color) {
      if (me.config.autoColors) {
        if (node.level == 0) {
          node.color = vis4color.fromHSL(45, 0.9, 0.5).x;
        } else
        if (node.level == 1) {
          var count = node.parent.children.length;
          node.color = vis4color.fromHSL(index / count * 360, 0.7, 0.5).x;
        } else {
          node.color = vis4color.fromHex(node.parent.color).lightness('*' + (0.5+Math.random() * 0.5)).x;
        }
      } else {
        // use color from parent node if no other match available
        if (node.level > 0) node.color = node.parent.color;
        else node.color = '#999999';
      }
		}
		// lighten up the color if there are no children
		if (node.children.length < 2 && node.color) {
			node.color = vis4color.fromHex(node.color).saturation('*.86').x;
		}

		if (node.level > 0) {
			pc = node.parent.children;
			if (pc.length > 1) {
				node.left = pc[(index-1+pc.length) % pc.length];
				node.right = pc[(Number(index)+1) % pc.length];
				if (node.right == node.left) node.right = undefined;
			}
		}
		if (node.label !== undefined && node.label !== "") {
			urlTokenSource = node.label;
		} else if (node.token !== undefined && node.token !== "") {
			urlTokenSource = node.token;
		} else {
			urlTokenSource = ''+me.globalNodeCounter;
		}

		me.globalNodeCounter++;

		node.urlToken = urlTokenSource.toLowerCase().replace(/\W/g, "-");
		while (me.nodesByUrlToken.hasOwnProperty(node.urlToken)) {
			node.urlToken += '-';
		}
		me.nodesByUrlToken[node.urlToken] = node;
		node.maxChildAmount = 0;

		// sort children
		node.children = me.sortChildren(node.children, true, me.config.sortBy);

		$.each(node.children, function(c, child) {
			child.parent = node;
			node.maxChildAmount = Math.max(node.maxChildAmount, child.amount);
			me.traverse(child, c);
		});

		if (node.breakdowns) {
			node.breakdownsByName = {};
			$.each(node.breakdowns, function (c,bd) {
				bd.famount = me.ns.Utils.formatNumber(bd.amount);
				if (bd.name) node.breakdownsByName[bd.name] = bd;
			});
		}
	};

	me.sortChildren = function(children, alternate, sortBy) {
		var tmp = [], odd = true;
		if (sortBy == 'label') {
			sortBy = me.compareLabels;
			alternate = false;
		} else sortBy = me.compareAmounts;

		children.sort(sortBy);
		if (alternate) {
			while (children.length > 0) {
				tmp.push(odd ? children.pop() : children.shift());
				odd = !odd;
			}
			return tmp;
		} else {
			return children;
		}
	};

	/*
	 * compares two items by amount
	 */
	me.compareAmounts = function(a, b) {
		if (a.amount > b.amount) return 1;
		if (a.amount == b.amount) return 0;
		return -1;
	};

	/*
	 * compares to item by label
	 */
	me.compareLabels = function(a, b) {
		if (a.label > b.label) return 1;
		if (a.label == b.label) return 0;
		return -1;
	};

	/*
	 * initializes all that RaphaelJS stuff
	 */
	me.initPaper = function() {
		var me = this, $c = me.$container, rt = me.treeRoot,
			w = $c.width(), h = $c.height(),
			paper = Raphael($c[0], w, h),
			maxRad = Math.min(w, h) * 0.5 - 40,
			base, Vector = me.ns.Vector,
			origin = new Vector(w * 0.5, h * 0.5); // center

		me.width = w;
		me.height = h;
		me.paper = paper;
		base = Math.pow((Math.pow(rt.amount, 0.6) + Math.pow(rt.maxChildAmount, 0.6)*2) / maxRad, 1.6666666667);
		me.a2radBase = me.ns.a2radBase = base;

		me.origin = origin;

		$(window).resize(me.onResize.bind(me));
	};

	me.onResize = function() {
		var me = this, $c = me.$container, w = $c.width(), h = $c.height(),
			maxRad = Math.min(w, h) * 0.5 - 40, base, rt = me.treeRoot, b, obj;
		me.paper.setSize(w, h);
		me.origin.x = w * 0.5;
		me.origin.y = h * 0.5;
		me.width = w;
		me.height = h;
		base = Math.pow((Math.pow(rt.amount, 0.6) + Math.pow(rt.maxChildAmount, 0.6)*2) / maxRad, 1.6666666667);
		me.a2radBase = me.ns.a2radBase = base;

		$.each(me.displayObjects, function(b, obj) {
			if (obj.className == "bubble") {
				obj.bubbleRad = me.ns.Utils.amount2rad(obj.node.amount);
			}
		});
		// vis4.log(me);
		if (me.currentCenter) {
			me.changeView(me.currentCenter.urlToken);
		}
	};

	/*
	 * initializes the Tweening engine
	 */
	me.initTween = function() {
		this.tweenTimer = setInterval(this.loop, 1000/120);
	};

	/*
	 * creates instances for all bubbles in the dataset. the bubbles will
	 * remain invisble until they enter the stage via changeView()
	 */
	me.initBubbles = function() {
		//vis4.log('initBubbles');
		var me = this, rt = me.treeRoot, i, icons = false, Bubbles = me.ns.Bubbles, bubbleClass;

		me.bubbleClasses = [];

		// defaults to plain bubble
		if (!me.config.hasOwnProperty('bubbleType')) me.config.bubbleType = ['plain'];
		// convert to array if neccessairy
		if (!$.isArray(me.config.bubbleType)) me.config.bubbleType = [me.config.bubbleType];

		if ($.isArray(me.config.bubbleType)) {
			$.each(me.config.bubbleType, function(i) {
				if (me.config.bubbleType[i] == 'icon') icons = true;
				me.bubbleClasses.push(me.getBubbleType(me.config.bubbleType[i]));
			});
		}

		var rootBubble = me.createBubble(rt, me.origin, 0, 0, rt.color);
		me.traverseBubbles(rootBubble);
	};

	/*
	 * returns the bubble class for a given bubble class id
	 * e.g. 'icon' > BubbleTree.Bubbles.Icon
	 */
	me.getBubbleType = function(id) {
		var me = this, Bubbles = me.ns.Bubbles;
		// chosse one of them for the vis
		switch (id) {
			case 'pie': return Bubbles.Pies;
			case 'donut': return Bubbles.Donut;
			case 'multi': return Bubbles.Multi;
			case 'icon': return Bubbles.Icon;
			default: return Bubbles.Plain;
		}
	};

	/*
	 * iterates over the complete tree and creates a bubble for
	 * each node
	 */
	me.traverseBubbles = function(parentBubble) {
		var me = this, ring,
			a2rad = me.ns.Utils.amount2rad,
			i, c, children, childBubble, childRadSum = 0, oa = 0, da, ca, twopi = Math.PI * 2;
		children = parentBubble.node.children;

		// sum radii of all children
		$.each(children, function(i,c) {
			childRadSum += a2rad(c.amount);
		});

		if (children.length > 0) {
			// create ring
			ring = me.createRing(parentBubble.node, parentBubble.pos, 0, me.config.strokeOpt);
		}

		$.each(children, function(i,c) {

			da = a2rad(c.amount) / childRadSum * twopi;
			ca = oa + da*0.5;

			if (isNaN(ca)) vis4.log(oa, da, c.amount, childRadSum, twopi);

			c.centerAngle = ca;

			childBubble = me.createBubble(c, parentBubble.pos, 0, ca, c.color);
			// für jedes kind einen bubble anlegen und mit dem parent verbinden
			oa += da;

			me.traverseBubbles(childBubble);
		});

	};


	/*
	 * creates a new bubble for a given node. the bubble type will be chosen
	 * by the level of the node
	 */
	me.createBubble = function(node, origin, rad, angle, color) {
		var me = this, ns = me.ns, i, b, bubble, classIndex = node.level;
		if (isNaN(classIndex)) classIndex = 0;
		classIndex = Math.min(classIndex, me.bubbleClasses.length-1);

		bubble = new me.bubbleClasses[classIndex](node, me, origin, rad, angle, color);
		me.displayObjects.push(bubble);
		return bubble;
	};

	me.createRing = function(node, origin, rad, attr) {
		var me = this, ns = me.ns, ring;
		ring = new ns.Ring(node, me, origin, rad, attr);
		me.displayObjects.push(ring);
		return ring;
	};

	/*
	 * is called every time the user changes the view
	 * each view is defined by the selected node (which is displayed
	 */
	me.changeView = function(token) {
		var me = this,
			paper = me.paper,
			maxRad = Math.min(me.width, me.height) * 0.35,
			ns = me.ns,
			utils = ns.Utils,
			o = me.origin,
			l1attr = { stroke: '#ccc', 'stroke-dasharray': "- " },
			l2attr = { stroke: '#ccc', 'stroke-dasharray': ". " },
			a2rad = utils.amount2rad,
			root = me.treeRoot,
			nodesByUrlToken = me.nodesByUrlToken,
			node = nodesByUrlToken.hasOwnProperty(token) ? nodesByUrlToken[token] : null,
			t = new ns.Layout(),
			bubble, tr, i, twopi = Math.PI * 2,
			getBubble = me.getBubble.bind(me), getRing = me.getRing.bind(me),
			unify = me.unifyAngle;

		if (node !== null) {

			// what do you we have to do here?
			// - find out the origin position
			// -

			var parent, grandpa, sibling, c, cn, rad1, rad2, rad, srad, sang, ring, tgtScale,
				radSum, leftTurn = false, rightTurn = false;



			// initially we will mark all bubbles and rings for hiding
			// get....() will set this flag to false
			for (i in me.displayObjects) me.displayObjects[i].hideFlag = true;


			if (node == root || node.parent == root && node.children.length < 2) {

				t.$(me).bubbleScale = 1.0;

				// move origin to center
				t.$(o).x = me.width * 0.5;
				t.$(o).y = me.height * 0.5;

				// make the root bubble visible
				parent = getBubble(root);

				//parent.childRotation = 0;

				if (node != root) {
					parent.childRotation = -node.centerAngle;
				}

				rad1 = a2rad(root.amount) + a2rad(root.maxChildAmount) + 20;

				ring = getRing(root);
				t.$(ring).rad = rad1;

				for (i in root.children) {
					cn = root.children[i];
					// adjust rad and angle for children
					bubble = getBubble(cn);
					t.$(bubble).angle = unify(cn.centerAngle + parent.childRotation);
					t.$(bubble).rad = rad1;
				}

			} else {

				// node is not the root node

				var origNode = node; // save the reference of the node..

				if (node.children.length < 2) { // ..because if it has no children..
					node = node.parent;         // ..we center on its parent
				}

				tgtScale = maxRad / (a2rad(node.amount) + a2rad(node.maxChildAmount)*2);
				t.$(me).bubbleScale = tgtScale;

				parent = getBubble(node);

				if (me.currentCenter && me.currentCenter == node.left) rightTurn = true;
				else if (me.currentCenter && me.currentCenter == node.right) leftTurn = true;

				var sa = me.shortestAngleTo;
				//if (leftTurn) sa = me.shortestLeftTurn;
				//if (rightTurn) sa = me.shortestRightTurn;

				t.$(parent).angle = sa(parent.angle, 0);

				// find the sum of all radii from node to root
				rad1 = (a2rad(node.amount) + a2rad(node.maxChildAmount)) * tgtScale + 20;

				ring = getRing(node);
				t.$(ring).rad = rad1;

				grandpa = getBubble(node.parent);
				grandpa.childRotation = -node.centerAngle;

				var maybeRoot = grandpa;

				while (maybeRoot && maybeRoot.node.parent) {
					maybeRoot = getBubble(maybeRoot.node.parent, true);
					t.$(maybeRoot).rad = 0;
				}

				t.$(grandpa).rad = 0;
				//
				var hw = me.width * 0.5;

				rad2 = 0 - Math.max(
					//hw *0.8 - tgtScale * (a2rad(node.parent.amount)+a2rad(node.amount)), // maximum visible part
					hw * 0.8 - tgtScale * (a2rad(node.parent.amount) + a2rad(Math.max(node.amount*1.15 + node.maxChildAmount*1.15, node.left.amount * 0.85, node.right.amount * 0.85))),
					tgtScale*a2rad(node.parent.amount)*-1 + hw*0.15 // minimum visible part
				) + hw;

				//vis4.log('rad (parent) = '+rad2,'   rad (center) = ',rad1);

				if (node.left && node.right) {
					var maxSiblSize = tgtScale * a2rad(Math.max(node.left.amount, node.right.amount));
				}

				//rad2 = hw - (tgtScale*a2rad(node.parent.amount)*-1+ hw*0.15);

				radSum = rad1 + rad2;

				t.$(o).x = me.width * 0.5 - rad2 - (node != origNode ? rad1 * 0.35: 0);
				t.$(o).y = me.height * 0.5;

				//vis4.log('o.x = '+o.x,'    t.$(o).x = '+t.$(o).x);

				new vis4.DelayedTask(1500, vis4, vis4.log, o, grandpa.pos);

				rad2 += me.width * 0.1;

				ring = getRing(node.parent);
				t.$(ring).rad = rad2;

				t.$(parent).rad = rad2;

				var ao = 0-(node != origNode ? origNode.centerAngle + parent.childRotation: 0);
				// children
				for (i in node.children) {
					cn = node.children[i];
					// adjust rad and angle for children
					bubble = getBubble(cn);
					t.$(bubble).angle = me.shortestAngleTo(bubble.angle, cn.centerAngle + parent.childRotation + ao);
					t.$(bubble).rad = rad1;
				}

				// left and right sibling

				var siblCut = me.height * 0.07;

				if (node.left) {
					sibling = node.left;
					srad = a2rad(sibling.amount)*tgtScale;
					sang = twopi - Math.asin((me.paper.height*0.5 + srad - siblCut) / rad2);

					bubble = getBubble(sibling);
					t.$(bubble).rad = rad2;
					t.$(bubble).angle = sa(bubble.angle, sang);
				}
				if (node.right) {
					sibling = node.right;
					srad = a2rad(sibling.amount)*tgtScale;
					sang = Math.asin((me.paper.height*0.5 + srad - siblCut) / rad2);

					bubble = getBubble(sibling);
					t.$(bubble).rad = rad2;
					t.$(bubble).angle = sa(bubble.angle, sang);
				}

				node = origNode;
			}

			// now we're going to check all hides and shows
			for (i in me.displayObjects) {
				var obj = me.displayObjects[i];
				if (obj.hideFlag && obj.visible) {
					// bubble is on stage but shouldn't
					t.$(obj).alpha = 0; // let it disappear
					if (obj.className == "bubble" && obj.node.level > 1) t.$(obj).rad = 0; // move to center
					//else t.$(obj).rad =
					t.hide(obj); // remove from stage afterwards
				} else if (!obj.hideFlag) {
					// bubble is not on stage but should
					t.$(obj).alpha = 1;
					if (!obj.visible) {
						obj.alpha = 0;
						t.show(obj);
					}
				}
			}

			tr = new ns.Transitioner(me.currentCenter == node ? 0 : 1000);
			tr.changeLayout(t);
			me.currentTransition = tr;
			if (!me.currentCenter && $.isFunction(me.config.firstNodeCallback)) {
				me.config.firstNodeCallback(node);
			}
			me.currentCenter = node;
			// vis4.log('currentNode = '+me.currentCenter);

		} else {
			utils.log('node '+token+' not found');
		}
		// step1:

		// step2:
	};

	me.unifyAngle = function(a) {
		var pi = Math.PI, twopi = pi * 2;
		while (a >= twopi) a -= twopi;
		while (a < 0) a += twopi;
		return a;
	};

	me.shortestAngle = function(f, t) {
		var deg = function(a) { return Math.round(a/Math.PI*180)+''; };
		var pi = Math.PI, twopi = pi * 2, unify= me.unifyAngle;
		f = unify(f);
		t = unify(t);
		var sa = t - f;
		if (sa > pi) sa -= twopi;
		if (sa < -pi) sa += twopi;

		return sa;
	};

	me.shortestAngleTo = function(f, t) {
		return f+me.shortestAngle(f, t);
	};

	me.shortestLeftTurn = function(f, t) {
		var sa = me.shortestAngle(f, t);
		if (sa > 0) sa = sa - Math.PI*2;
		return f+sa;
	};

	me.shortestRightTurn = function(f, t) {
		var sa = me.shortestAngle(f, t);
		if (sa < 0) sa = Math.PI*2 + sa;
		return f+sa;
	};


	/*
	 * returns the instance of a bubble for a given node
	 */
	me.getBubble = function(node, keepHidden) {
		return this.getDisplayObject('bubble', node, keepHidden);
	};

	/*
	 *
	 */
	me.getRing = function(node) {
		return this.getDisplayObject('ring', node);
	};

	me.getDisplayObject = function(className, node, keepHidden) {
		var me = this, i, o;
		for (i in me.displayObjects) {
			o = me.displayObjects[i];
			if (o.className != className) continue;
			if (o.node == node) {
				if (!keepHidden) o.hideFlag = false;
				return o;
			}
		}
		vis4.log(className+' not found for node', node);
	};

	/*
	me.createRing = function(t, origin, rad, attr) {
		var me = this, ns = me.ns,
			ring = new ns.Ring(me, origin, attr, rad);
		ring.toBack();
		me.rings.push(ring);
		t.$(ring).rad = rad;
		return ring;
	};
	*/

	me.initHistory = function() {
		history.init(me.urlChanged.bind(me), { unescape: ",/" });
	};

	me.freshUrl = '';

	/*
	 * callback for every url change, either initiated by user or
	 * by this class itself
	 */
	me.urlChanged = function(hash) {
		var me = this, tr = me.currentTransition;

		if (!me.freshUrl) {
			// setting an url for the very first time
			if (hash.indexOf('/~/')) {
				me.baseUrl = hash.substr(0, hash.indexOf('/~/'));
			}
		}
		me.freshUrl = hash;

		if (tr && tr.running) {
			vis4.log('transition is running at the moment, adding listener');
			tr.onComplete(me.changeUrl.bind(me));
		} else {
			me.changeUrl();
		}
	};

	/*
	 * this function initiate the action which follows the url change
	 */
	me.changeUrl = function() {
		var me = this, parts = me.freshUrl.split('/'), token = parts[parts.length-1], url;

		// var urlParts = me.freshUrl.split('/~/');
		if (me.freshUrl === "") me.navigateTo(me.treeRoot);

		if (me.nodesByUrlToken.hasOwnProperty(token)) {
			url = me.getUrlForNode(me.nodesByUrlToken[token]);
			if (me.freshUrl != url) {
				// node found but url not perfect
				history.load(url);
			} else {
				me.navigateTo(me.nodesByUrlToken[token], true);
			}
		} else {
			me.navigateTo(me.treeRoot);
		}
	};

	me.navigateTo = function(node, fromUrlChange) {
		// vis4.log('bc.navigateTo(',node,',',fromUrlChange,')');
		var me = this;
		if (fromUrlChange) me.changeView(node.urlToken);
		else history.load(me.getUrlForNode(node));
		//
		$('.bubbletree-label, .bubbletree-label2', me.$container).removeClass('current');
		$('.bubbletree-label2.'+node.id, me.$container).addClass('current');
		$('.bubbletree-label.'+node.id, me.$container).addClass('current');
	};

	/*
	 * creates a valid url for a given node, e.g. /2010/health/medical-supplies
	 */
	me.getUrlForNode = function(node) {
		var parts = [];
		parts.push(node.urlToken);
		while (node.parent) {
			parts.push(node.parent.urlToken);
			node = node.parent;
		}
		parts.reverse();
		return me.baseUrl+'/~/'+parts.join('/');
	};

	me.onNodeClick = function(node) {
		if ($.isFunction(me.config.nodeClickCallback)) {
			me.config.nodeClickCallback(node);
		}
	};

	// removes all nodes
	me.clean = function() {
		var me = this, i;
		$('.bubbletree-label').remove();
		/*for (i in me.displayObjects) {
			try {
				if ($.isFunction(me.displayObjects[i].hide)) me.displayObjects[i].hide();
			} catch (e) {

			}
		}*/
	};

	this.loop = function() {
		TWEEN.update();
	};

	if (!me.config.hasOwnProperty('data')) {
		throw new Error('no data');
	}

	if (typeof me.config.data == "string") {
		// use the given js object
		me.loadData();
	} else {
		// load local tree json file
		new vis4.DelayedTask(1000, me, me.setData, me.config.data);
	}
};

BubbleTree.Styles = {};

/*jshint undef: true, browser:true, jquery: true, devel: true, smarttabs: true */
/*global Raphael, TWEEN, BubbleTree */

/*
 * stores visual attributes of all elements in the visualization
 * 
 */
BubbleTree.Layout = function() {

	var me = this;
	me.objects = [];
	me.props = [];
	me.toHide = [];
	me.toShow = [];
	
	/*
	 * flare-style transitioner syntax
	 *
	 * if you have an object bubble, you can easily change its properties with
	 * 
	 * var l = new OpenSpendings.BubbleTree.Layout();
	 * l.$(bubble).radius = 30;
	 * l.$(bubble).angle = 3.14;
	 */
	me.$ = function(obj) {
		var me = this, i, o, p;
		for (i in me.objects) {
			o = me.objects[i];
			if (o == obj) return me.props[i];
		}
		me.objects.push(obj);
		p = {};
		me.props.push(p);
		return p;
	};
	
	/*
	 * use me function to mark objects that should be shown before
	 * the transition
	 */
	me.show = function(obj) {
		var me = this;
		me.toShow.push(obj);
	};
	
	
	/*
	 * use me function to mark objects that should be hidden after
	 * the transition
	 */
	me.hide = function(obj) {
		var me = this;
		me.toHide.push(obj);
	};
	
};
/*jshint undef: true, browser:true, jquery: true, devel: true */
/*global Raphael, TWEEN, BubbleTree */
/*
 * represents a radial line
 */
BubbleTree.Line = function(bc, attr, origin, angle, fromRad, toRad) {
	this.bc = bc;
	this.o = origin;
	this.angle = angle;
	this.fromRad = fromRad;
	this.attr = attr;
	this.toRad = toRad;
	
	this.getXY = function() {
		this.x1 = this.o.x + Math.cos(this.angle) * this.fromRad; 
		this.y1 = this.o.y -Math.sin(this.angle) * this.fromRad;
		this.x2 = this.o.x + Math.cos(this.angle) * this.toRad; 
		this.y2 = this.o.y  -Math.sin(this.angle) * this.toRad;
	};
	
	this.init = function() {
		this.getXY();
		console.log("foo", "M"+this.x1+" "+this.y1+"L"+this.x2+" "+this.y2, attr);
		this.path = this.bc.paper.path(
			"M"+this.x1+" "+this.y1+"L"+this.x2+" "+this.y2
		).attr(this.attr);
	};
	
	this.draw = function() {
		//console.log('line.draw()', this.angle, this.fromRad, this.toRad);
		//console.log(this.x1, this);
		this.getXY();
		//console.log(this.x1);
		this.path.attr({ path: "M"+this.x1+" "+this.y1+"L"+this.x2+" "+this.y2 });
	};
	
	
	this.init();
	
};
/*jshint undef: true, browser:true, jquery: true, devel: true, smarttabs: true */
/*global vis4, BubbleTree */

/*
 * loads the data and initializes the bubblechart
 * you need to include the bubblechart.min.js first
 */
BubbleTree.Loader = function(config) {

	var me = this;

	me.config = config;

	me.ns = BubbleTree;

	/*
	 * loads data from a local JSON file
	 */
	me.loadData = function() {
		var me = this, url = me.config.data;
		console.log('loading url ',url);
		$.ajax({
			url: url,
			context: me,
			dataType: 'json',
			success: function(data) {
				this.run(data);
			}
		});
	};

	/*
	 * run will be called by dataLoaded once, well, the data is loaded
	 */
	me.run = function(data) {
		var me = this;
		// initialize bubble chart
		var bubbleChart = new BubbleTree(
			me.config
		);
		bubbleChart.setData(data);
		me.config.instance = bubbleChart;
	};

	if (!me.config.hasOwnProperty('data')) {
		//console.error('BubbleTree Error: no data set', me.config);
	}
	if (typeof me.config.data == "string") {
		// use the given js object
		me.loadData();
	} else {
		// load local tree json file
		me.run(me.config.data);
	}
};


/*jshint undef: true, browser:true, jquery: true, devel: true, smarttabs: true */
/*global vis4, BubbleTree */
/*
 * in JS there's no thing like mouse event capsulation, this
 * class will work around this. It makes it possible to set
 * events like click and hover for a group of objects that
 * belong together
 */
BubbleTree.MouseEventGroup = function(target, members) {
	
	var me = this;
	me.target = target; // e.g. instance of a bubble
	me.members = members; // e.g. raphael nodes or html elements
	
	/*
	 * public interface for setting click handlers
	 */
	me.click = function(callback) {
		var me = this, members = me.members, i, mem;
		me.clickCallback = callback;
		for (i in members) {
			mem = members[i];
			$(mem).click(me.handleClick.bind(me));
		}
	};
	
	me.handleClick = function(evt) {
		var me = this;
		me.clickCallback({ target: me.target, origEvent: evt, mouseEventGroup: me });
	};
	
	/*
	 *
	 */
	me.hover = function(callback) {
		var me = this, members = me.members, i, mem;
		me.hoverCallback = callback;
		for (i in members) {
			mem = members[i];
			$(mem).hover(me.handleMemberHover.bind(me), me.handleMemberUnHover.bind(me));
		}
	};
	
	/*
	 * public interface for setting unhover callback
	 */
	me.unhover = function(callback) {
		var me = this;
		me.unhoverCallback = callback;
	};
	
	/*
	 * stores wether the mouse currently hover over any
	 * object in our members list. this is used to check
	 * wether a occuring hover event is an actual hover
	 * event.
	 */
	me.wasHovering = false;
	me.mouseIsOver = false;
	
	me.handleMemberHover = function(evt) {
		var me = this;
		// since we don't know which event will receive first, the unhover of the member
		// the mouse is leaving or the hover of the member the mouse is entering, we will
		// delay the final check a bit
		new vis4.DelayedTask(25, me, me.handleMemberHoverDelayed, evt);	
		
	};

	/*
	 * will be called after all unhover events are processed
	 */
	me.handleMemberHoverDelayed = function(evt) {
		var me = this;
		// this will eventually override the false set by handleMemberUnHover a few
		// milliseconds ok. Exactly what we want!
		me.mouseIsOver = true;
				
		if (!me.wasHovering) {
			// the target is newly hovered
			
			me.wasHovering = true;
			if ($.isFunction(me.hoverCallback)) {
				me.hoverCallback({ target: me.target, origEvent: evt, mouseEventGroup: me });
			}
		} // else can be ignored, no news
	};
	

	me.handleMemberUnHover = function(evt) {
		var me = this;
		me.mouseIsOver = false;
		// we need to wait a bit to find out if this is a real unhover event
		// or just the change to another element in the member list
		// so we need to delay the final check a bit (let's say 30ms)
		new vis4.DelayedTask(40, me, me.handleMemberUnHoverDelayed, evt);	
	};
	
	me.handleMemberUnHoverDelayed = function(evt) {
		var me = this;
		if (!me.mouseIsOver) {
			// well, finally no nasty hover event has disturbed our good unhover
			// process, so we can assume that this is a real unhover event
			
			me.wasHovering = false;
			if ($.isFunction(me.unhoverCallback)) {
				me.unhoverCallback({ target: me.target, origEvent: evt, mouseEventGroup: me });
			}
		}
	};
		
	/*
	 * this function is used for later addition of member objects like dynamic tooltips
	 */
	me.addMember = function(mem) {
		var me = this;
		// if (me.clickCallback && noClick) $(mem).click(me.handleClick.bind(me));
		if (me.hoverCallback) $(mem).hover(me.handleMemberHover.bind(me), me.handleMemberUnHover.bind(me));
		me.members.push(mem);
	};
	
	/*
	 * this function is used for later removal of member objects like dynamic tooltips
	 */
	me.removeMember = function(mem) {
		var me = this, members = me.members, i, tmp = [];
		if (me.clickCallback) $(mem).unbind('click');
		if (me.hoverCallback) $(mem).unbind('mouseenter mouseleave');
		for (i in members) {
			if (members[i] != mem) tmp.push(members[i]);
		}
		me.members = tmp;
		
	};
};

/*jshint undef: true, browser:true, jquery: true, devel: true, smarttabs: true */
/*global Raphael, TWEEN, BubbleTree */

/*
 * represents a ring
 */
BubbleTree.Ring = function(node, bc, o, rad, attr) {
	
	var me = this;
	me.className = "ring";
	me.rad = rad;
	me.bc = bc;
	me.attr = attr;
	me.origin = o;
	me.alpha = 1;
	me.visible = false;
	me.node = node;
	
	me.init = function() {
		//var o = me.origin;
	};
	
	me.draw = function() {
		var me = this, o = me.origin;
		if (!me.visible) return;
		me.circle.attr({ cx: o.x, cy: o.y, r: me.rad, 'stroke-opacity': me.alpha });
	};
	
	/*
	 * removes all raphael nodes from stage
	 */
	me.hide = function() {
		var me = this;
		me.circle.remove();
		me.visible = false;
	};
	
	me.show = function() {
		var me = this;
		me.circle = me.bc.paper.circle(o.x, o.y, me.rad).attr(me.attr);
		me.visible = true;
		me.circle.toBack();
	};
	
	
	me.init();
};
/*jshint undef: true, browser:true, jquery: true, devel: true */
/*global Raphael, TWEEN, vis4, BubbleTree */

/*
 * transforms the current display to a new layout
 * while transitioning, there are several possible cases:
 * - a node exists both before and after the transition
 * - a node appears at the beginning of the transition
 * - a node disappears at the end of the transtion
 */
 
BubbleTree.Transitioner = function(duration) {
	
	var me = this;
	
	me.duration = duration;
	me.running = false;
	me.completeCallbacks = [];
	
	me.changeLayout = function(layout) {
		var i, o, props, p, me = this;
		me.running = true;
		me.layout = layout;
		
		// at first show all objects that are marked for showing
		for (i in layout.toShow) {
			o = layout.toShow[i];
			if ($.isFunction(o.show)) o.show();
		}
		
		for (i in layout.objects) {
			o = layout.objects[i];
			if (o === undefined || o === null) continue;
			props = layout.props[i];
			
			if (me.duration > 0) {
				var tween = new TWEEN.Tween(o), toProps = {};
				
				for (p in props) {
					//o[p] = props[p];
					toProps[p] = props[p];
				}
				tween.to(toProps, me.duration);
				tween.easing(TWEEN.Easing.Exponential.Out);
				if ($.isFunction(o.draw)) tween.onUpdate(o.draw.bind(o));
				if (i == layout.objects.length-1) tween.onComplete(me._completed.bind(me));
				tween.start();
			} else {
				for (p in props) {
					o[p] = props[p];
				}
				if (o && $.isFunction(o.draw)) o.draw();
			}
		}
		if (me.duration === 0) {
			// redraw all
			for (i in layout.objects) {
				o = layout.objects[i];
				if (o && $.isFunction(o.draw)) o.draw();
			}
			me._completed();
		}
	};
	
	me.onComplete = function(callback) {
		var me = this;
		try {
			if ($.isFunction(callback)) me.completeCallbacks.push(callback);
		} catch (e) {
			//vis4.log(e);
		}
	};
	
	me._completed = function() {
		var me = this, callbacks = me.completeCallbacks, i, obj;
		me.running = false;
		
		for (i in me.layout.objects) {
			obj = me.layout.objects[i];
			if (obj && $.isFunction(obj.draw)) obj.draw(); // the final draw	
		}
		// now hide all objects marked for hiding
		for (i in me.layout.toHide) {
			obj = me.layout.toHide[i];
			if (obj && $.isFunction(obj.hide)) obj.hide();
		}
		
		for (i in callbacks) {
			callbacks[i]();
		}
	};
	
};
/*jshint undef: true, browser:true, jquery: true, devel: true */
/*global Raphael, TWEEN, BubbleTree */

BubbleTree.Utils = {};

BubbleTree.Utils.log = function() {
	try {
		if (window.hasOwnProperty('console')) console.log.apply(this, arguments);
	} catch (e) {}	
};

BubbleTree.Utils.amount2rad = function(a) {
	return Math.pow(Math.max(0, a) /BubbleTree.a2radBase, 0.6);
};

BubbleTree.Utils.formatNumber = function(n) {
	var prefix = '';
	if (n < 0) {
		n = n*-1;
		prefix = '-';
	}
	if (n >= 1000000000000) return prefix+Math.round(n / 100000000000)/10 + 't';
	if (n >= 1000000000) return prefix+Math.round(n / 100000000)/10 + 'b';
	if (n >= 1000000) return prefix+Math.round(n / 100000)/10 + 'm';
	if (n >= 1000) return prefix+Math.round(n / 100)/10 + 'k';
	else return prefix+n;
	
};

/*jshint undef: true, browser:true, jquery: true, devel: true, smarttabs: true */
/*global BubbleTree */


BubbleTree.Vector = function(x,y) {
	var me = this;
	me.x = x; 
	me.y = y;
	
	/*
	 * calculates the length of the vector
	 */
	me.length = function() {
		var me = this;
		return Math.sqrt(me.x*me.x + me.y * me.y);
	};
	
	/*
	 * changes the length of the vector
	 */
	me.normalize = function(len) {
		var me = this, l = me.length();
		if (!len) len = 1.0;
		me.x *= len/l;
		me.y *= len/l;
	};
	
	/*
	 * creates an exact copy of this vector
	 */
	me.clone = function() {
		var me = this;
		return new BubbleTree.Vector(me.x, me.y);
	};
};
/*jshint undef: true, browser:true, jquery: true, devel: true, smarttabs: true */
/*global Raphael, TWEEN, BubbleTree, vis4 */

BubbleTree.Bubbles = BubbleTree.Bubbles || {};

/*
 * represents a bubble
 */
BubbleTree.Bubbles.Plain = function(node, bubblechart, origin, radius, angle, color) {

	var ns = BubbleTree, utils = ns.Utils, me = this;
	me.className = "bubble";
	me.node = node;
	me.paper = bubblechart.paper;
	me.origin = origin;
	me.bc = bubblechart;
	me.rad = radius;
	me.angle = angle;
	me.color = color;
	me.alpha = 1;
	me.visible = false;
	me.ns = ns;
	me.pos = ns.Vector(0,0);
	me.bubbleRad = utils.amount2rad(this.node.amount);
	me.container = me.bc.$container;

	/*
	 * child rotation is just used from outside to layout possible child bubbles
	 */
	me.childRotation = 0;


	/*
	 * convertes polar coordinates to x,y
	 */
	me.getXY = function() {
		var me = this, o = me.origin, a = me.angle, r = me.rad;
		if (me.pos === undefined) me.pos = new me.ns.Vector(0,0);
		me.pos.x = o.x + Math.cos(a) * r;
		me.pos.y = o.y - Math.sin(a) * r;
	};

	/*
	 * inistalizes the bubble
	 */
	me.init = function() {
		var me = this;
		me.getXY();

		var showIcon = false; //this.bubbleRad * this.bc.bubbleScale > 30;

		if (!me.node.shortLabel) me.node.shortLabel = me.node.label.length > me.bc.config.cutLabelsAt+3 ? me.node.label.substr(0, me.bc.config.cutLabelsAt)+'...' : me.node.label;

		me.initialized = true;

		//me.show();
	};

	/*
	 *
	 */
	me.onclick = function(e) {
		var me = this;
		me.bc.onNodeClick(me.node);

		//if (me.node.children.length > 1) {
			me.bc.navigateTo(me.node);
		//}
	};

	me.onhover = function(e) {
		var me = this, c = me.bc.$container[0];
		e.node = me.node;
		e.target = me;
		e.bubblePos = { x:me.pos.x, y: me.pos.y };
		e.mousePos = { x:e.origEvent.pageX - c.offsetLeft, y: e.origEvent.pageY - c.offsetTop };
		e.type = 'SHOW';
		me.bc.tooltip(e);
	};

	me.onunhover = function(e) {
		var me = this, c = me.bc.$container[0];
		e.node = me.node;
		e.type = 'HIDE';
		e.target = me;
		e.bubblePos = { x:me.pos.x, y: me.pos.y };
		e.mousePos = { x:e.origEvent.pageX - c.offsetLeft, y: e.origEvent.pageY - c.offsetTop };
		me.bc.tooltip(e);
	};

	me.draw = function() {
		var me = this,
			r = Math.max(5, me.bubbleRad * me.bc.bubbleScale),
			ox = me.pos.x,
			oy = me.pos.y,
			devnull = me.getXY(),
		x = me.pos.x, y = me.pos.y;
		if (!me.visible) return;

		me.circle.attr({ cx: me.pos.x, cy: me.pos.y, r: r, 'fill-opacity': me.alpha });
		if (me.node.children.length > 1) me.dashedBorder.attr({ cx: me.pos.x, cy: me.pos.y, r: r-4, 'stroke-opacity': me.alpha * 0.9 });
		else me.dashedBorder.attr({ 'stroke-opacity': 0 });


		//me.label.attr({ x: me.pos.x, y: me.pos.y, 'font-size': Math.max(4, me.bubbleRad * me.bc.bubbleScale * 0.25) });

		me.label.show();
		me.label.find('*').show();
		me.label2.show();
		if (r >= me.bc.config.minRadiusLabels) {
			// full label
			me.label2.hide();
		} else if (r >= me.bc.config.minRadiusAmounts) {
			// full label
			me.label.find('.bubbletree-desc').hide();
		} else if (r >= me.bc.config.minRadiusHideLabels) {
			me.label.hide();
		} else {
			me.label.hide();
			me.label2.hide();
		}

		me.label.css({ width: 2*r+'px', opacity: me.alpha });
		me.label.css({ left: (me.pos.x-r)+'px', top: (me.pos.y-me.label.height()*0.5)+'px' });

		var w = Math.max(70, 3*r);
		me.label2.css({ width: w+'px', opacity: me.alpha });
		me.label2.css({ left: (x - w*0.5)+'px', top: (y + r)+'px' });

		//if (me.icon) me.icon.translate(me.pos.x - ox, me.pos.y - oy);

	};

	/*
	 * removes all visible elements from the page
	 */
	me.hide = function() {
		var me = this, i;
		me.circle.remove();
		me.dashedBorder.remove();
		me.label.remove();
		me.label2.remove();

		//$('#bubble-chart')
		me.visible = false;


		//if (me.icon) me.icon.remove();
	};

	/*
	 * adds all visible elements to the page
	 */
	me.show = function() {
		var me = this, i, cx = me.pos.x, cy = me.pos.y, r = Math.max(5, me.bubbleRad * me.bc.bubbleScale);

		me.circle = me.paper.circle(cx, cy, r)
			.attr({ stroke: false, fill: me.color });

		me.dashedBorder = me.paper.circle(cx, cy, r-3)
			.attr({ stroke: '#ffffff', 'stroke-dasharray': "- " });


		me.label = $('<div class="bubbletree-label '+me.node.id+'"><div class="bubbletree-amount">'+utils.formatNumber(me.node.amount)+'</div><div class="bubbletree-desc">'+me.node.shortLabel+'</div></div>');
		me.container.append(me.label);

		if (me.node.children.length > 0) {
			$(me.circle.node).css({ cursor: 'pointer'});
			$(me.label).css({ cursor: 'pointer'});
		}

		// additional label
		me.label2 = $('<div class="bubbletree-label2 '+me.node.id+'"><span>'+me.node.shortLabel+'</span></div>');
		me.container.append(me.label2);

		var list = [me.circle.node, me.label, me.dashedBorder.node];

		var mgroup = new me.ns.MouseEventGroup(me, list);
		mgroup.click(me.onclick.bind(me));
		mgroup.hover(me.onhover.bind(me));
		mgroup.unhover(me.onunhover.bind(me));

		me.visible = true;

	};

	/*
	 * adds an invisible bubble on top for seamless
	 * event handling
	 */
	me.addOverlay = function() {
		// add invisible overlay circle
		var me = this;

		me.overlay = me.paper.circle(me.circle.attrs.cx, me.circle.attrs.cy, me.circle.attrs.r)
			.attr({ stroke: false, fill: '#fff', 'opacity': 0});

		if (Raphael.svg) {
			me.overlay.node.setAttribute('class', me.node.id);
		}
		$(me.overlay.node).css({ cursor: 'pointer'});
		$(me.overlay.node).click(me.onclick.bind(me));

		$(me.label).click(me.onclick.bind(me));
	};

	me.init();
};

/*jshint undef: true, browser:true, jquery: true, devel: true, smarttabs: true */
/*global Raphael, TWEEN, BubbleTree, vis4 */

BubbleTree.Bubbles = BubbleTree.Bubbles || {};
/*
 * represents a bubble
 */
BubbleTree.Bubbles.Donut = function(node, bubblechart, origin, radius, angle, color) {

	var ns = BubbleTree, utils = ns.Utils, me = this;
	me.className = "bubble";
	me.node = node;
	me.paper = bubblechart.paper;
	me.origin = origin;
	me.bc = bubblechart;
	me.rad = radius;
	me.angle = angle;
	me.color = color;
	me.alpha = 1;
	me.visible = false;
	me.ns = ns;
	me.bubbleRad = utils.amount2rad(this.node.amount);

	/*
	 * child rotation is just used from outside to layout possible child bubbles
	 */
	me.childRotation = 0;


	/*
	 * convertes polar coordinates to x,y
	 */
	me.getXY = function() {
		var me = this, o = me.origin, a = me.angle, r = me.rad;
		me.pos.x = o.x + Math.cos(a) * r;
		me.pos.y = o.y - Math.sin(a) * r;
	};

	/*
	 * inistalizes the bubble
	 */
	me.init = function() {
		var me = this;
		me.pos = new me.ns.Vector(0,0);
		me.getXY();

		var breakdown = [], b, i, val, bd = [], styles = me.bc.config.bubbleStyles;

		if (!me.node.shortLabel) me.node.shortLabel = me.node.label.length > 50 ? me.node.label.substr(0, 30)+'...' : me.node.label;

		me.breakdownOpacities = [0.2, 0.7, 0.45, 0.6, 0.35];
		me.breakdownColors = [false, false, false, false, false, false, false, false, false, false];

		for (i in me.node.breakdowns) {
			b = me.node.breakdowns[i];
			b.famount = utils.formatNumber(b.amount);
			val = b.amount / me.node.amount;
			breakdown.push(val);
			bd.push(b);

			if (styles && styles.hasOwnProperty('name') && styles.name.hasOwnProperty(b.name) && styles.name[b.name].hasOwnProperty('opacity')) {
				me.breakdownOpacities[bd.length-1] = styles.name[b.name].opacity;
			}

			if (styles && styles.hasOwnProperty('name') && styles.name.hasOwnProperty(b.name) && styles.name[b.name].hasOwnProperty('color')) {
				me.breakdownColors[bd.length-1] = styles.name[b.name].color;
				me.breakdownOpacities[bd.length-1] = 1;
			}
		}
		me.node.breakdowns = bd;
		me.breakdown = breakdown;

		var showIcon = false; //this.bubbleRad * this.bc.bubbleScale > 30;
		// create label

		me.initialized = true;

		//me.show();
	};

	/*
	 *
	 */
	me.onclick = function(e) {
		var me = this;

		me.bc.navigateTo(me.node);

	};

	me.onhover = function(e) {
		var me = this, c = me.bc.$container[0];
		e.node = me.node;
		e.target = me;
		e.bubblePos = { x:me.pos.x, y: me.pos.y };
		e.mousePos = { x:e.origEvent.pageX - c.offsetLeft, y: e.origEvent.pageY - c.offsetTop };
		e.type = 'SHOW';
		me.bc.tooltip(e);
	};

	me.onunhover = function(e) {
		var me = this, c = me.bc.$container[0];
		e.node = me.node;
		e.target = me;
		e.type = 'HIDE';
		e.bubblePos = { x:me.pos.x, y: me.pos.y };
		e.mousePos = { x:e.origEvent.pageX - c.offsetLeft, y: e.origEvent.pageY - c.offsetTop };
		me.bc.tooltip(e);
	};

	this.draw = function() {
		var me = this, r = Math.max(5, me.bubbleRad * me.bc.bubbleScale), ox = me.pos.x, oy = me.pos.y, devnull = me.getXY(), showLabel = r > 20, x = me.pos.x, y = me.pos.y;
		if (!me.visible) return;

		me.circle.attr({ cx: x, cy: y, r: r, 'fill-opacity': me.alpha });
		if (me.node.children.length > 1) me.dashedBorder.attr({ cx: x, cy: y, r: r*0.85, 'stroke-opacity': me.alpha * 0.8 });
		else me.dashedBorder.attr({ 'stroke-opacity': 0 });

		if (me.breakdown.length > 1) {
			// draw breakdown chart
			var i,x0,x1,x2,x3,y0,y1,y2,y3,ir = r*0.85, oa = -Math.PI * 0.5, da;
			for (i in me.breakdown) {
				da = me.breakdown[i] * Math.PI * 2;
				x0 = x+Math.cos((oa))*ir;
				y0 = y+Math.sin((oa))*ir;
				x1 = x+Math.cos((oa+da))*ir;
				y1 = y+Math.sin((oa+da))*ir;
				x2 = x+Math.cos((oa+da))*r;
				y2 = y+Math.sin((oa+da))*r;
				x3 = x+Math.cos((oa))*r;
				y3 = y+Math.sin((oa))*r;
				oa += da;

				var path = "M"+x0+" "+y0+" A"+ir+","+ir+" 0 "+(da > Math.PI ? "1,1" : "0,1")+" "+x1+","+y1+" L"+x2+" "+y2+" A"+r+","+r+" 0 "+(da > Math.PI ? "1,0" : "0,0")+" "+x3+" "+y3+" Z";

				me.breakdownArcs[i].attr({ path: path, 'stroke-opacity': me.alpha*0.2, 'fill-opacity': me.breakdownOpacities[i]*me.alpha });
			}
		}

		//me.label.attr({ x: me.pos.x, y: me.pos.y, 'font-size': Math.max(4, me.bubbleRad * me.bc.bubbleScale * 0.25) });
		if (!showLabel) {
			me.label.hide();
			me.label2.show();
		} else {
			me.label.show();
			if (r < 40) {
				me.label.find('.bubbletree-desc').hide();
				me.label2.show();
			} else {
				// full label
				me.label.find('.bubbletree-desc').show();
				me.label2.hide();
			}
		}

		me.label.css({ width: 2*r*0.9+'px', opacity: me.alpha });
		me.label.css({ left: (me.pos.x-r*0.9)+'px', top: (me.pos.y-me.label.height()*0.53)+'px' });

		var w = Math.max(80, 3*r);
		me.label2.css({ width: w+'px', opacity: me.alpha });
		me.label2.css({ left: (x - w*0.5)+'px', top: (y + r)+'px' });

	};

	/*
	 * removes all visible elements from the page
	 */
	this.hide = function() {
		var me = this, i;
		me.circle.remove();
		me.dashedBorder.remove();
		me.label.remove();
		me.label2.remove();

		//me.bc.$container
		me.visible = false;
		for (i in me.breakdownArcs) {
			me.breakdownArcs[i].remove();
		}

		//if (me.icon) me.icon.remove();
	};

	/*
	 * adds all visible elements to the page
	 */
	me.show = function() {
		var me = this, i, r = Math.max(5, me.bubbleRad * me.bc.bubbleScale);

		me.circle = me.paper.circle(me.pos.x, me.pos.y, r)
			.attr({ stroke: false, fill: me.color });

		if ($.isFunction(me.bc.config.initTooltip)) {
			me.bc.config.initTooltip(me.node, me.circle.node);
		}

		me.dashedBorder = me.paper.circle(me.pos.x, me.pos.y,  r*0.85)
			.attr({ stroke: '#fff', 'stroke-opacity': me.alpha * 0.4,  'stroke-dasharray': ". ", fill: false });

		me.label = $('<div class="bubbletree-label '+me.node.id+'"><div class="bubbletree-amount">'+utils.formatNumber(me.node.amount)+'</div><div class="bubbletree-desc">'+me.node.shortLabel+'</div></div>');
		me.bc.$container.append(me.label);

		if (me.node.children.length > 1) {
			$(me.circle.node).css({ cursor: 'pointer'});
			$(me.label).css({ cursor: 'pointer'});
		}

		// additional label
		me.label2 = $('<div class="bubbletree-label2 '+me.node.id+'"><span>'+me.node.shortLabel+'</span></div>');
		me.bc.$container.append(me.label2);

		var list = [me.circle.node, me.label];

		if (me.breakdown.length > 1) {
			me.breakdownArcs = {};

			for (i in me.breakdown) {
				var col = me.breakdownColors[i] ? me.breakdownColors[i] : '#fff',
					arc = me.paper.path("M 0 0 L 2 2")
					.attr({ fill: col, 'fill-opacity': Math.random()*0.4 + 0.3, stroke: '#fff'});
				me.breakdownArcs[i] = arc;
				// $(arc.node).hover(me.arcHover.bind(me), me.arcUnhover.bind(me));

				if ($.isFunction(me.bc.config.initTooltip)) {
					me.bc.config.initTooltip(me.node.breakdowns[i], arc.node);
				}
			}

			for (i in me.breakdownArcs) {
				// we dont add the breakdown arcs to the list 'cause
				// we want them to fire different mouse over events
				// list.push(me.breakdownArcs[i].node);
				$(me.breakdownArcs[i].node).click(me.onclick.bind(me));
			}
		}

		var mgroup = new me.ns.MouseEventGroup(me, list);
		mgroup.click(me.onclick.bind(me));
		mgroup.hover(me.onhover.bind(me));
		mgroup.unhover(me.onunhover.bind(me));

		me.visible = true;

	};


	me.arcHover = function(e) {
		var me = this, c = me.bc.$container[0], i,
			arcs = me.breakdownArcs, node,
			bd = me.node.breakdowns;

		for (i in arcs) {
			if (arcs[i].node == e.target) {
				e.node = bd[i];
				e.bubblePos = { x:me.pos.x, y: me.pos.y };
				e.mousePos = { x:e.pageX - c.offsetLeft, y: e.pageY - c.offsetTop };
				e.target = me;
				e.type = 'SHOW';
				me.bc.tooltip(e);
				return;
			}
		}

		vis4.log('cant find the breakdown node');
	};

	me.arcUnhover = function(e) {
		var me = this, c = me.bc.$container[0], i,
			arcs = me.breakdownArcs, node,
			bd = me.node.breakdowns;

		for (i in arcs) {
			if (arcs[i].node == e.target) {
				e.node = bd[i];
				e.bubblePos = { x:me.pos.x, y: me.pos.y };
				e.mousePos = { x:e.pageX - c.offsetLeft, y: e.pageY - c.offsetTop };
				e.type = 'HIDE';
				e.target = me;
				me.bc.tooltip(e);
				return;
			}
		}

		vis4.log('cant find the breakdown node');
	};

	me.init();
};
/*jshint undef: true, browser:true, jquery: true, devel: true, smarttabs: true */
/*global Raphael, TWEEN, BubbleTree, vis4, vis4loader */

BubbleTree.Bubbles = BubbleTree.Bubbles || {};

/*
 * represents a bubble
 */
BubbleTree.Bubbles.Icon = function(node, bubblechart, origin, radius, angle, color) {

	var ns = BubbleTree, utils = ns.Utils, me = this;
	me.className = "bubble";
	me.node = node;
	me.paper = bubblechart.paper;
	me.origin = origin;
	me.bc = bubblechart;
	me.rad = radius;
	me.angle = angle;
	me.color = color;
	me.alpha = 1;
	me.visible = false;
	me.ns = ns;
	me.pos = ns.Vector(0,0);
	me.bubbleRad = utils.amount2rad(this.node.amount);

	me.iconLoaded = false;

	/*
	 * child rotation is just used from outside to layout possible child bubbles
	 */
	me.childRotation = 0;


	/*
	 * convertes polar coordinates to x,y
	 */
	me.getXY = function() {
		var me = this, o = me.origin, a = me.angle, r = me.rad;
		if (me.pos === undefined) me.pos = new me.ns.Vector(0,0);
		me.pos.x = o.x + Math.cos(a) * r;
		me.pos.y = o.y - Math.sin(a) * r;
	};

	/*
	 * inistalizes the bubble
	 */
	me.init = function() {
		var me = this;
		me.getXY();

		me.hasIcon = me.node.hasOwnProperty('icon');

		if (!me.node.shortLabel) me.node.shortLabel = me.node.label.length > 50 ? me.node.label.substr(0, 30)+'...' : me.node.label;

		/*if (showIcon) {
			me.icon = me.paper.path("M17.081,4.065V3.137c0,0,0.104-0.872-0.881-0.872c-0.928,0-0.891,0.9-0.891,0.9v0.9C4.572,3.925,2.672,15.783,2.672,15.783c1.237-2.98,4.462-2.755,4.462-2.755c4.05,0,4.481,2.681,4.481,2.681c0.984-2.953,4.547-2.662,4.547-2.662c3.769,0,4.509,2.719,4.509,2.719s0.787-2.812,4.557-2.756c3.262,0,4.443,2.7,4.443,2.7v-0.058C29.672,4.348,17.081,4.065,17.081,4.065zM15.328,24.793c0,1.744-1.8,1.801-1.8,1.801c-1.885,0-1.8-1.801-1.8-1.801s0.028-0.928-0.872-0.928c-0.9,0-0.957,0.9-0.957,0.9c0,3.628,3.6,3.572,3.6,3.572c3.6,0,3.572-3.545,3.572-3.545V13.966h-1.744V24.793z")
				.translate(me.pos.x, me.pos.y).attr({fill: "#fff", stroke: "none"});
		}*/


		me.initialized = true;

		//me.show();
	};


	/*
	 * adds all visible elements to the page
	 */
	me.show = function() {
		var me = this, i, cx = me.pos.x, icon, cy = me.pos.y, r = Math.max(5, me.bubbleRad * me.bc.bubbleScale);

		me.circle = me.paper.circle(cx, cy, r)
			.attr({ stroke: false, fill: me.color });

		me.dashedBorder = me.paper.circle(cx, cy, Math.min(r-3, r*0.95))
			.attr({ stroke: '#ffffff', 'stroke-dasharray': "- " });

		if ($.isFunction(me.bc.config.initTooltip)) {
			me.bc.config.initTooltip(me.node, me.circle.node);
		}

		me.label = $('<div class="bubbletree-label '+me.node.id+'"><div class="bubbletree-amount">'+utils.formatNumber(me.node.amount)+'</div><div class="bubbletree-desc">'+me.node.shortLabel+'</div></div>');
		me.bc.$container.append(me.label);

		if ($.isFunction(me.bc.config.initTooltip)) {
			me.bc.config.initTooltip(me.node, me.label[0]);
		}

		// additional label
		me.label2 = $('<div class="bubbletree-label2 '+me.node.id+'"><span>'+me.node.shortLabel+'</span></div>');
		me.bc.$container.append(me.label2);

		if (me.node.children.length > 0) {
			$(me.circle.node).css({ cursor: 'pointer'});
			$(me.label).css({ cursor: 'pointer'});
		}

		/*var
		list=[me.circle.node, me.label, me.dashedBorder.node],
		mgroup = new me.ns.MouseEventGroup(me, list);
		mgroup.click(me.onclick.bind(me));
		mgroup.hover(me.onhover.bind(me));
		mgroup.unhover(me.onunhover.bind(me));
		me.mgroup = mgroup;
		*/

		me.visible = true;

		if (me.hasIcon) {
			if (!me.iconLoaded) me.loadIcon();
			else me.displayIcon();
		} else {
			me.addOverlay();
		}
	};

	/*
	 * will load the icon as soon as needed
	 */
	me.loadIcon = function() {
		var me = this, ldr = new vis4loader();
		ldr.add(me.bc.config.rootPath + me.node.icon);
		ldr.load(me.iconLoadComplete.bind(me));
	};

	/*
	 * on complete handler for icon loading process
	 */
	me.iconLoadComplete = function(ldr) {
		var me = this, svg, j, paths;
		svg = ldr.items[0].data;
		me.iconPathData = '';
		//if (typeof(svg) == "string") svg = $(svg)[0];
		svg = $(svg);
		paths = $('path', svg); //svg.getElementsByTagName('path');
		for (j in paths) {
			if (paths[j] && $.isFunction(paths[j].getAttribute)) {
				me.iconPathData += String(paths[j].getAttribute('d'))+' ';
			}
		}
		me.iconLoaded = true;
		me.displayIcon();
	};

	/*
	 * will display the icon, create the svg path element, etc
	 */
	me.displayIcon = function() {
		var me = this, i, path;
		me.iconPaths = [];

		path = me.paper.path(me.iconPathData);
		path.attr({fill: "#fff", stroke: "none"}).translate(-50, -50);
		me.iconPaths.push(path);
		//me.mgroup.addMember(path.node);

		me.addOverlay();
	};

	/*
	 * adds an invisible bubble on top for seamless
	 * event handling
	 */
	me.addOverlay = function() {
		// add invisible overlay circle
		var me = this;

		me.overlay = me.paper.circle(me.circle.attrs.cx, me.circle.attrs.cy, me.circle.attrs.r)
			.attr({ stroke: false, fill: '#fff', 'fill-opacity': 0});

		if (Raphael.svg) {
			me.overlay.node.setAttribute('class', me.node.id);
		}
		$(me.overlay.node).css({ cursor: 'pointer'});

		$(me.overlay.node).click(me.onclick.bind(me));
		$(me.label).click(me.onclick.bind(me));
		$(me.label2).click(me.onclick.bind(me));

		if ($.isPlainObject(me.bc.tooltip)) {
			// use q-tip tooltips
			var tt = me.bc.tooltip.content(me.node);
			$(me.overlay.node).qtip({
				position: {
					target: 'mouse',
					viewport: $(window),
					adjust: { x:7, y:7 }
				},
				show: {
					delay: me.bc.tooltip.delay || 100
				},
				content: {
					title: tt[0],
					text: tt[1]
				}
			});
		}
	};

	/*
	 * will remove the icon from stage
	 */
	me.removeIcon = function() {
		var me = this, i, path;
		for (i in me.iconPaths) {
			me.iconPaths[i].remove();
		}
		me.iconPaths = [];
	};


	me.draw = function() {
		var me = this,
			r = Math.max(5, me.bubbleRad * me.bc.bubbleScale),
			ox = me.pos.x,
			oy = me.pos.y,
			devnull = me.getXY(),
			x = me.pos.x, y = me.pos.y,
			showIcon = me.hasIcon && r > 15,
			showLabel = me.hasIcon ? r > 40 : r > 20,
			i, path, scale, transform, ly;

		if (!me.visible) return;

		me.circle.attr({ cx: x, cy: y, r: r, 'fill-opacity': me.alpha });
		if(me.overlay)
			me.overlay.attr({ cx: x, cy: y, r: Math.max(10,r)});

		if (me.node.children.length > 1) me.dashedBorder.attr({ cx: me.pos.x, cy: me.pos.y, r: Math.min(r-3, r-4), 'stroke-opacity': me.alpha * 0.9 });
		else me.dashedBorder.attr({ 'stroke-opacity': 0 });


		//me.label.attr({ x: me.pos.x, y: me.pos.y, 'font-size': Math.max(4, me.bubbleRad * me.bc.bubbleScale * 0.25) });
		if (!showLabel) {
			me.label.hide();
			me.label2.show();
		} else {
			me.label.show();
			if ((showIcon && r < 70) || (!showIcon && r < 40)) {
				me.label.find('.bubbletree-desc').hide();
				me.label2.show();
			} else {
				// full label
				me.label.find('.bubbletree-desc').show();
				me.label2.hide();
			}
		}

		ly = showIcon ? y+r*0.77-me.label.height() : y-me.label.height()*0.5;
		me.label.css({ width: (showIcon ? r*1.2 : 2*r)+'px', opacity: me.alpha });
		me.label.css({ left: (showIcon ? x - r*0.6 : x-r)+'px', top: ly+'px' });

		var w = Math.max(80, 3*r);
		me.label2.css({ width: w+'px', opacity: me.alpha });
		me.label2.css({ left: (x - w*0.5)+'px', top: (y + r)+'px' });


		//if (me.icon) me.icon.translate(me.pos.x - ox, me.pos.y - oy);
		if (me.hasIcon) {
			if (showIcon) {
				scale = (r - (showLabel ? me.label.height()*0.5 : 0)) / 60;
				for (i in me.iconPaths) {
					path = me.iconPaths[i];
					//path.translate(me.pos.x - ox, me.pos.y - oy);
					if (Raphael.version[0] == "1") {
						transform = "scale("+scale+") translate("+(x/scale)+", "+((y+(showLabel ? me.label.height()*-0.5 : 0))/scale)+")";

					} else {
						// version > 1
						transform = "scale("+scale+") translate("+(x/scale-50)+", "+((y+(showLabel ? me.label.height()*-0.5 : 0))/scale-50)+")";

					}
					path.node.setAttribute("transform", transform);
					path.attr({ 'fill-opacity': me.alpha });

				}
			} else {
				for (i in me.iconPaths) {
					path = me.iconPaths[i];
					path.attr({ 'fill-opacity': 0 });
				}
			}
		}
	};

	/*
	 * removes all visible elements from the page
	 */
	me.hide = function() {
		var me = this, i;
		me.circle.remove();
		me.dashedBorder.remove();
		me.label.remove();
		me.label2.remove();

		//me.bc.$container
		me.visible = false;
		if (me.hasIcon) me.removeIcon();
		if (me.overlay) me.overlay.remove();
	};

	/*
	 *
	 */
	me.onclick = function(e) {
		var me = this;
		me.bc.onNodeClick(me.node);
		//if (me.node.children.length > 1) {
			me.bc.navigateTo(me.node);
		//}
	};

	me.onhover = function(e) {
		var me = this, c = me.bc.$container[0];
		e.node = me.node;
		e.bubblePos = { x:me.pos.x, y: me.pos.y };
		e.mousePos = { x:e.origEvent.pageX - c.offsetLeft, y: e.origEvent.pageY - c.offsetTop };
		e.type = 'SHOW';
		e.target = me;
		me.bc.tooltip(e);
	};

	me.onunhover = function(e) {
		var me = this, c = me.bc.$container[0];
		e.node = me.node;
		e.type = 'HIDE';
		e.target = me;
		e.bubblePos = { x:me.pos.x, y: me.pos.y };
		e.mousePos = { x:e.origEvent.pageX - c.offsetLeft, y: e.origEvent.pageY - c.offsetTop };
		me.bc.tooltip(e);
	};


	me.init();
};

if ((typeof module == 'object') && (typeof module.exports == 'object')) {
  module.exports = BubbleTree;
}
/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2013 Tim Chien
 * Released under the MIT license
 */

'use strict';

// setImmediate
if (!window.setImmediate) {
  window.setImmediate = (function setupSetImmediate() {
    return window.msSetImmediate ||
    window.webkitSetImmediate ||
    window.mozSetImmediate ||
    window.oSetImmediate ||
    (function setupSetZeroTimeout() {
      if (!window.postMessage || !window.addEventListener) {
        return null;
      }

      var callbacks = [undefined];
      var message = 'zero-timeout-message';

      // Like setTimeout, but only takes a function argument.  There's
      // no time argument (always zero) and no arguments (you have to
      // use a closure).
      var setZeroTimeout = function setZeroTimeout(callback) {
        var id = callbacks.length;
        callbacks.push(callback);
        window.postMessage(message + id.toString(36), '*');

        return id;
      };

      window.addEventListener('message', function setZeroTimeoutMessage(evt) {
        // Skipping checking event source, retarded IE confused this window
        // object with another in the presence of iframe
        if (typeof evt.data !== 'string' ||
            evt.data.substr(0, message.length) !== message/* ||
            evt.source !== window */) {
          return;
        }

        evt.stopImmediatePropagation();

        var id = parseInt(evt.data.substr(message.length), 36);
        if (!callbacks[id]) {
          return;
        }

        callbacks[id]();
        callbacks[id] = undefined;
      }, true);

      /* specify clearImmediate() here since we need the scope */
      window.clearImmediate = function clearZeroTimeout(id) {
        if (!callbacks[id]) {
          return;
        }

        callbacks[id] = undefined;
      };

      return setZeroTimeout;
    })() ||
    // fallback
    function setImmediateFallback(fn) {
      window.setTimeout(fn, 0);
    };
  })();
}

if (!window.clearImmediate) {
  window.clearImmediate = (function setupClearImmediate() {
    return window.msClearImmediate ||
    window.webkitClearImmediate ||
    window.mozClearImmediate ||
    window.oClearImmediate ||
    // "clearZeroTimeout" is implement on the previous block ||
    // fallback
    function clearImmediateFallback(timer) {
      window.clearTimeout(timer);
    };
  })();
}

(function(global) {

  // Check if WordCloud can run on this browser
  var isSupported = (function isSupported() {
    var canvas = document.createElement('canvas');
    if (!canvas || !canvas.getContext) {
      return false;
    }

    var ctx = canvas.getContext('2d');
    if (!ctx.getImageData) {
      return false;
    }
    if (!ctx.fillText) {
      return false;
    }

    if (!Array.prototype.some) {
      return false;
    }
    if (!Array.prototype.push) {
      return false;
    }

    return true;
  }());

  // Find out if the browser impose minium font size by
  // drawing small texts on a canvas and measure it's width.
  var miniumFontSize = (function getMiniumFontSize() {
    if (!isSupported) {
      return;
    }

    var ctx = document.createElement('canvas').getContext('2d');

    // start from 20
    var size = 20;

    // two sizes to measure
    var hanWidth, mWidth;

    while (size) {
      ctx.font = size.toString(10) + 'px sans-serif';
      if ((ctx.measureText('\uFF37').width === hanWidth) &&
          (ctx.measureText('m').width) === mWidth) {
        return (size + 1);
      }

      hanWidth = ctx.measureText('\uFF37').width;
      mWidth = ctx.measureText('m').width;

      size--;
    }

    return 0;
  })();

  // Based on http://jsfromhell.com/array/shuffle
  var shuffleArray = function shuffleArray(arr) {
    for (var j, x, i = arr.length; i;
      j = Math.floor(Math.random() * i),
      x = arr[--i], arr[i] = arr[j],
      arr[j] = x) {}
    return arr;
  };

  var WordCloud = function WordCloud(elements, options) {
    if (!isSupported) {
      return;
    }

    if (!Array.isArray(elements)) {
      elements = [elements];
    }

    elements.forEach(function(el, i) {
      if (typeof el === 'string') {
        elements[i] = document.getElementById(el);
        if (!elements[i]) {
          throw 'The element id specified is not found.';
        }
      } else if (!el.tagName && !el.appendChild) {
        throw 'You must pass valid HTML elements, or ID of the element.';
      }
    });

    /* Default values to be overwritten by options object */
    var settings = {
      list: [],
      fontFamily: '"Trebuchet MS", "Heiti TC", "微軟正黑體", ' +
                  '"Arial Unicode MS", "Droid Fallback Sans", sans-serif',
      fontWeight: 'normal',
      color: 'random-dark',
      minSize: 0, // 0 to disable
      weightFactor: 1,
      clearCanvas: true,
      backgroundColor: '#fff',  // opaque white = rgba(255, 255, 255, 1)

      gridSize: 8,
      origin: null,

      drawMask: false,
      maskColor: 'rgba(255,0,0,0.3)',
      maskGapWidth: 0.3,

      wait: 0,
      abortThreshold: 0, // disabled
      abort: function noop() {},

      minRotation: - Math.PI / 2,
      maxRotation: Math.PI / 2,

      shuffle: true,
      rotateRatio: 0.1,

      shape: 'circle',
      ellipticity: 0.65,

      hover: null,
      click: null
    };

    if (options) {
      for (var key in options) {
        if (key in settings) {
          settings[key] = options[key];
        }
      }
    }

    /* Convert weightFactor into a function */
    if (typeof settings.weightFactor !== 'function') {
      var factor = settings.weightFactor;
      settings.weightFactor = function weightFactor(pt) {
        return pt * factor; //in px
      };
    }

    /* Convert shape into a function */
    if (typeof settings.shape !== 'function') {
      switch (settings.shape) {
        case 'circle':
        /* falls through */
        default:
          // 'circle' is the default and a shortcut in the code loop.
          settings.shape = 'circle';
          break;

        case 'cardioid':
          settings.shape = function shapeCardioid(theta) {
            return 1 - Math.sin(theta);
          };
          break;

        /*

        To work out an X-gon, one has to calculate "m",
        where 1/(cos(2*PI/X)+m*sin(2*PI/X)) = 1/(cos(0)+m*sin(0))
        http://www.wolframalpha.com/input/?i=1%2F%28cos%282*PI%2FX%29%2Bm*sin%28
        2*PI%2FX%29%29+%3D+1%2F%28cos%280%29%2Bm*sin%280%29%29

        Copy the solution into polar equation r = 1/(cos(t') + m*sin(t'))
        where t' equals to mod(t, 2PI/X);

        */

        case 'diamond':
        case 'square':
          // http://www.wolframalpha.com/input/?i=plot+r+%3D+1%2F%28cos%28mod+
          // %28t%2C+PI%2F2%29%29%2Bsin%28mod+%28t%2C+PI%2F2%29%29%29%2C+t+%3D
          // +0+..+2*PI
          settings.shape = function shapeSquare(theta) {
            var thetaPrime = theta % (2 * Math.PI / 4);
            return 1 / (Math.cos(thetaPrime) + Math.sin(thetaPrime));
          };
          break;

        case 'triangle-forward':
          // http://www.wolframalpha.com/input/?i=plot+r+%3D+1%2F%28cos%28mod+
          // %28t%2C+2*PI%2F3%29%29%2Bsqrt%283%29sin%28mod+%28t%2C+2*PI%2F3%29
          // %29%29%2C+t+%3D+0+..+2*PI
          settings.shape = function shapeTriangle(theta) {
            var thetaPrime = theta % (2 * Math.PI / 3);
            return 1 / (Math.cos(thetaPrime) +
                        Math.sqrt(3) * Math.sin(thetaPrime));
          };
          break;

        case 'triangle':
        case 'triangle-upright':
          settings.shape = function shapeTriangle(theta) {
            var thetaPrime = (theta + Math.PI * 3 / 2) % (2 * Math.PI / 3);
            return 1 / (Math.cos(thetaPrime) +
                        Math.sqrt(3) * Math.sin(thetaPrime));
          };
          break;

        case 'pentagon':
          settings.shape = function shapePentagon(theta) {
            var thetaPrime = (theta + 0.955) % (2 * Math.PI / 5);
            return 1 / (Math.cos(thetaPrime) +
                        0.726543 * Math.sin(thetaPrime));
          };
          break;

        case 'star':
          settings.shape = function shapeStar(theta) {
            var thetaPrime = (theta + 0.955) % (2 * Math.PI / 10);
            if ((theta + 0.955) % (2 * Math.PI / 5) - (2 * Math.PI / 10) >= 0) {
              return 1 / (Math.cos((2 * Math.PI / 10) - thetaPrime) +
                          3.07768 * Math.sin((2 * Math.PI / 10) - thetaPrime));
            } else {
              return 1 / (Math.cos(thetaPrime) +
                          3.07768 * Math.sin(thetaPrime));
            }
          };
          break;
      }
    }

    /* Make sure gridSize is a whole number and is not smaller than 4px */
    settings.gridSize = Math.max(Math.floor(settings.gridSize), 4);

    /* shorthand */
    var g = settings.gridSize;
    var maskRectWidth = g - settings.maskGapWidth;

    /* normalize rotation settings */
    var rotationRange = Math.abs(settings.maxRotation - settings.minRotation);
    var minRotation = Math.min(settings.maxRotation, settings.minRotation);

    /* information/object available to all functions, set when start() */
    var grid, // 2d array containing filling information
      ngx, ngy, // width and height of the grid
      center, // position of the center of the cloud
      maxRadius;

    /* timestamp for measuring each putWord() action */
    var escapeTime;

    /* function for getting the color of the text */
    var getTextColor;
    switch (settings.color) {
      case 'random-dark':
        getTextColor = function getRandomDarkColor() {
          return 'rgb(' +
            Math.floor(Math.random() * 128).toString(10) + ',' +
            Math.floor(Math.random() * 128).toString(10) + ',' +
            Math.floor(Math.random() * 128).toString(10) + ')';
        };
        break;

      case 'random-light':
        getTextColor = function getRandomLightColor() {
          return 'rgb(' +
            Math.floor(Math.random() * 128 + 128).toString(10) + ',' +
            Math.floor(Math.random() * 128 + 128).toString(10) + ',' +
            Math.floor(Math.random() * 128 + 128).toString(10) + ')';
        };
        break;

      default:
        if (typeof settings.color === 'function') {
          getTextColor = settings.color;
        }
        break;
    }

    /* Interactive */
    var interactive = false;
    var infoGrid = [];
    var hovered;

    var getInfoGridFromMouseEvent = function getInfoGridFromMouseEvent(evt) {
      var canvas = evt.currentTarget;
      var rect = canvas.getBoundingClientRect();
      var eventX = evt.clientX - rect.left;
      var eventY = evt.clientY - rect.top;

      var x = Math.floor(eventX * ((canvas.width / rect.width) || 1) / g);
      var y = Math.floor(eventY * ((canvas.height / rect.height) || 1) / g);

      return infoGrid[x][y];
    };

    var wordcloudhover = function wordcloudhover(evt) {
      var info = getInfoGridFromMouseEvent(evt);

      if (hovered === info) {
        return;
      }

      hovered = info;
      if (!info) {
        settings.hover(undefined, undefined, evt);

        return;
      }

      settings.hover(info.item, info.dimension, evt);

    };

    var wordcloudclick = function wordcloudclick(evt) {
      var info = getInfoGridFromMouseEvent(evt);
      if (!info) {
        return;
      }

      settings.click(info.item, info.dimension, evt);
    };

    /* Get points on the grid for a given radius away from the center */
    var pointsAtRadius = [];
    var getPointsAtRadius = function getPointsAtRadius(radius) {
      if (pointsAtRadius[radius]) {
        return pointsAtRadius[radius];
      }

      // Look for these number of points on each radius
      var T = radius * 8;

      // Getting all the points at this radius
      var t = T;
      var points = [];

      if (radius === 0) {
        points.push([center[0], center[1], 0]);
      }

      while (t--) {
        // distort the radius to put the cloud in shape
        var rx = 1;
        if (settings.shape !== 'circle') {
          rx = settings.shape(t / T * 2 * Math.PI); // 0 to 1
        }

        // Push [x, y, t]; t is used solely for getTextColor()
        points.push([
          center[0] + radius * rx * Math.cos(-t / T * 2 * Math.PI),
          center[1] + radius * rx * Math.sin(-t / T * 2 * Math.PI) *
            settings.ellipticity,
          t / T * 2 * Math.PI]);
      }

      pointsAtRadius[radius] = points;
      return points;
    };

    /* Return true if we had spent too much time */
    var exceedTime = function exceedTime() {
      return ((settings.abortThreshold > 0) &&
        ((new Date()).getTime() - escapeTime > settings.abortThreshold));
    };

    /* Get the deg of rotation according to settings, and luck. */
    var getRotateDeg = function getRotateDeg() {
      if (settings.rotateRatio === 0) {
        return 0;
      }

      if (Math.random() > settings.rotateRatio) {
        return 0;
      }

      if (rotationRange === 0) {
        return minRotation;
      }

      return minRotation + Math.random() * rotationRange;
    };

    var getTextInfo = function getTextInfo(word, weight, rotateDeg) {
      // calculate the acutal font size
      // fontSize === 0 means weightFactor function wants the text skipped,
      // and size < minSize means we cannot draw the text.
      var debug = false;
      var fontSize = settings.weightFactor(weight);
      if (fontSize <= settings.minSize) {
        return false;
      }

      // Scale factor here is to make sure fillText is not limited by
      // the minium font size set by browser.
      // It will always be 1 or 2n.
      var mu = 1;
      if (fontSize < miniumFontSize) {
        mu = (function calculateScaleFactor() {
          var mu = 2;
          while (mu * fontSize < miniumFontSize) {
            mu += 2;
          }
          return mu;
        })();
      }

      var fcanvas = document.createElement('canvas');
      var fctx = fcanvas.getContext('2d', { willReadFrequently: true });

      fctx.font = settings.fontWeight + ' ' +
        (fontSize * mu).toString(10) + 'px ' + settings.fontFamily;

      // Estimate the dimension of the text with measureText().
      var fw = fctx.measureText(word).width / mu;
      var fh = Math.max(fontSize * mu,
                        fctx.measureText('m').width,
                        fctx.measureText('\uFF37').width) / mu;

      // Create a boundary box that is larger than our estimates,
      // so text don't get cut of (it sill might)
      var boxWidth = fw + fh * 2;
      var boxHeight = fh * 3;
      var fgw = Math.ceil(boxWidth / g);
      var fgh = Math.ceil(boxHeight / g);
      boxWidth = fgw * g;
      boxHeight = fgh * g;

      // Calculate the proper offsets to make the text centered at
      // the preferred position.

      // This is simply half of the width.
      var fillTextOffsetX = - fw / 2;
      // Instead of moving the box to the exact middle of the preferred
      // position, for Y-offset we move 0.4 instead, so Latin alphabets look
      // vertical centered.
      var fillTextOffsetY = - fh * 0.4;

      // Calculate the actual dimension of the canvas, considering the rotation.
      var cgh = Math.ceil((boxWidth * Math.abs(Math.sin(rotateDeg)) +
                           boxHeight * Math.abs(Math.cos(rotateDeg))) / g);
      var cgw = Math.ceil((boxWidth * Math.abs(Math.cos(rotateDeg)) +
                           boxHeight * Math.abs(Math.sin(rotateDeg))) / g);
      var width = cgw * g;
      var height = cgh * g;

      fcanvas.setAttribute('width', width);
      fcanvas.setAttribute('height', height);

      if (debug) {
        // Attach fcanvas to the DOM
        document.body.appendChild(fcanvas);
        // Save it's state so that we could restore and draw the grid correctly.
        fctx.save();
      }

      // Scale the canvas with |mu|.
      fctx.scale(1 / mu, 1 / mu);
      fctx.translate(width * mu / 2, height * mu / 2);
      fctx.rotate(- rotateDeg);

      // Once the width/height is set, ctx info will be reset.
      // Set it again here.
      fctx.font = settings.fontWeight + ' ' +
        (fontSize * mu).toString(10) + 'px ' + settings.fontFamily;

      // Fill the text into the fcanvas.
      // XXX: We cannot because textBaseline = 'top' here because
      // Firefox and Chrome uses different default line-height for canvas.
      // Please read https://bugzil.la/737852#c6.
      // Here, we use textBaseline = 'middle' and draw the text at exactly
      // 0.5 * fontSize lower.
      fctx.fillStyle = '#000';
      fctx.textBaseline = 'middle';
      fctx.fillText(word, fillTextOffsetX * mu,
                    (fillTextOffsetY + fontSize * 0.5) * mu);

      // Get the pixels of the text
      var imageData = fctx.getImageData(0, 0, width, height).data;

      if (exceedTime()) {
        return false;
      }

      if (debug) {
        // Draw the box of the original estimation
        fctx.strokeRect(fillTextOffsetX * mu,
                        fillTextOffsetY, fw * mu, fh * mu);
        fctx.restore();
      }

      // Read the pixels and save the information to the occupied array
      var occupied = [];
      var gx = cgw, gy, x, y;
      var bounds = [cgh / 2, cgw / 2, cgh / 2, cgw / 2];
      while (gx--) {
        gy = cgh;
        while (gy--) {
          y = g;
          singleGridLoop: {
            while (y--) {
              x = g;
              while (x--) {
                if (imageData[((gy * g + y) * width +
                               (gx * g + x)) * 4 + 3]) {
                  occupied.push([gx, gy]);

                  if (gx < bounds[3]) {
                    bounds[3] = gx;
                  }
                  if (gx > bounds[1]) {
                    bounds[1] = gx;
                  }
                  if (gy < bounds[0]) {
                    bounds[0] = gy;
                  }
                  if (gy > bounds[2]) {
                    bounds[2] = gy;
                  }

                  if (debug) {
                    fctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
                    fctx.fillRect(gx * g, gy * g, g - 0.5, g - 0.5);
                  }
                  break singleGridLoop;
                }
              }
            }
            if (debug) {
              fctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
              fctx.fillRect(gx * g, gy * g, g - 0.5, g - 0.5);
            }
          }
        }
      }

      if (debug) {
        fctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
        fctx.fillRect(bounds[3] * g,
                      bounds[0] * g,
                      (bounds[1] - bounds[3] + 1) * g,
                      (bounds[2] - bounds[0] + 1) * g);
      }

      // Return information needed to create the text on the real canvas
      return {
        mu: mu,
        occupied: occupied,
        bounds: bounds,
        gw: cgw,
        gh: cgh,
        fillTextOffsetX: fillTextOffsetX,
        fillTextOffsetY: fillTextOffsetY,
        fillTextWidth: fw,
        fillTextHeight: fh,
        fontSize: fontSize
      };
    };

    /* Determine if there is room available in the given dimension */
    var canFitText = function canFitText(gx, gy, gw, gh, occupied) {
      // Go through the occupied points,
      // return false if the space is not available.
      var i = occupied.length;
      while (i--) {
        var px = gx + occupied[i][0];
        var py = gy + occupied[i][1];

        if (px >= ngx || py >= ngy || px < 0 || py < 0 || !grid[px][py]) {
          return false;
        }
      }
      return true;
    };

    /* Actually draw the text on the grid */
    var drawText = function drawText(gx, gy, info, word, weight,
                                     distance, theta, rotateDeg, attributes) {

      var fontSize = info.fontSize;
      var color;
      if (getTextColor) {
        color = getTextColor(word, weight, fontSize, distance, theta);
      } else {
        color = settings.color;
      }

      var dimension;
      var bounds = info.bounds;
      dimension = {
        x: (gx + bounds[3]) * g,
        y: (gy + bounds[0]) * g,
        w: (bounds[1] - bounds[3] + 1) * g,
        h: (bounds[2] - bounds[0] + 1) * g
      };

      elements.forEach(function(el) {
        if (el.getContext) {
          var ctx = el.getContext('2d');
          var mu = info.mu;

          // Save the current state before messing it
          ctx.save();
          ctx.scale(1 / mu, 1 / mu);

          ctx.font = settings.fontWeight + ' ' +
                     (fontSize * mu).toString(10) + 'px ' + settings.fontFamily;
          ctx.fillStyle = color;

          // Translate the canvas position to the origin coordinate of where
          // the text should be put.
          ctx.translate((gx + info.gw / 2) * g * mu,
                        (gy + info.gh / 2) * g * mu);

          if (rotateDeg !== 0) {
            ctx.rotate(- rotateDeg);
          }

          // Finally, fill the text.

          // XXX: We cannot because textBaseline = 'top' here because
          // Firefox and Chrome uses different default line-height for canvas.
          // Please read https://bugzil.la/737852#c6.
          // Here, we use textBaseline = 'middle' and draw the text at exactly
          // 0.5 * fontSize lower.
          ctx.textBaseline = 'middle';
          ctx.fillText(word, info.fillTextOffsetX * mu,
                             (info.fillTextOffsetY + fontSize * 0.5) * mu);

          // The below box is always matches how <span>s are positioned
          /* ctx.strokeRect(info.fillTextOffsetX, info.fillTextOffsetY,
            info.fillTextWidth, info.fillTextHeight); */

          // Restore the state.
          ctx.restore();
        } else {
          // drawText on DIV element
          var span = document.createElement('span');
          var transformRule = '';
          transformRule = 'rotate(' + (- rotateDeg / Math.PI * 180) + 'deg) ';
          if (info.mu !== 1) {
            transformRule +=
              'translateX(-' + (info.fillTextWidth / 4) + 'px) ' +
              'scale(' + (1 / info.mu) + ')';
          }
          var styleRules = {
            'position': 'absolute',
            'display': 'block',
            'font': settings.fontWeight + ' ' +
                    (fontSize * info.mu) + 'px ' + settings.fontFamily,
            'left': ((gx + info.gw / 2) * g + info.fillTextOffsetX) + 'px',
            'top': ((gy + info.gh / 2) * g + info.fillTextOffsetY) + 'px',
            'width': info.fillTextWidth + 'px',
            'height': info.fillTextHeight + 'px',
            'color': color,
            'lineHeight': fontSize + 'px',
            'whiteSpace': 'nowrap',
            'transform': transformRule,
            'webkitTransform': transformRule,
            'msTransform': transformRule,
            'transformOrigin': '50% 40%',
            'webkitTransformOrigin': '50% 40%',
            'msTransformOrigin': '50% 40%'
          };
          span.textContent = word;
          for (var cssProp in styleRules) {
            span.style[cssProp] = styleRules[cssProp];
          }
          if (attributes) {
            for (var attribute in attributes) {
              span.setAttribute(attribute, attributes[attribute]);
            }
          }
          el.appendChild(span);
        }
      });
    };

    /* Help function to updateGrid */
    var fillGridAt = function fillGridAt(x, y, drawMask, dimension, item) {
      if (x >= ngx || y >= ngy || x < 0 || y < 0) {
        return;
      }

      grid[x][y] = false;

      if (drawMask) {
        var ctx = elements[0].getContext('2d');
        ctx.fillRect(x * g, y * g, maskRectWidth, maskRectWidth);
      }

      if (interactive) {
        infoGrid[x][y] = { item: item, dimension: dimension };
      }
    };

    /* Update the filling information of the given space with occupied points.
       Draw the mask on the canvas if necessary. */
    var updateGrid = function updateGrid(gx, gy, gw, gh, info, item) {
      var occupied = info.occupied;
      var drawMask = settings.drawMask;
      var ctx;
      if (drawMask) {
        ctx = elements[0].getContext('2d');
        ctx.save();
        ctx.fillStyle = settings.maskColor;
      }

      var dimension;
      if (interactive) {
        var bounds = info.bounds;
        dimension = {
          x: (gx + bounds[3]) * g,
          y: (gy + bounds[0]) * g,
          w: (bounds[1] - bounds[3] + 1) * g,
          h: (bounds[2] - bounds[0] + 1) * g
        };
      }

      var i = occupied.length;
      while (i--) {
        fillGridAt(gx + occupied[i][0], gy + occupied[i][1],
                   drawMask, dimension, item);
      }

      if (drawMask) {
        ctx.restore();
      }
    };

    /* putWord() processes each item on the list,
       calculate it's size and determine it's position, and actually
       put it on the canvas. */
    var putWord = function putWord(item) {
      var word, weight, attributes;
      if (Array.isArray(item)) {
        word = item[0];
        weight = item[1];
      } else {
        word = item.word;
        weight = item.weight;
        attributes = item.attributes;
      }
      var rotateDeg = getRotateDeg();

      // get info needed to put the text onto the canvas
      var info = getTextInfo(word, weight, rotateDeg);

      // not getting the info means we shouldn't be drawing this one.
      if (!info) {
        return false;
      }

      if (exceedTime()) {
        return false;
      }

      // Skip the loop if we have already know the bounding box of
      // word is larger than the canvas.
      var bounds = info.bounds;
      if ((bounds[1] - bounds[3] + 1) > ngx ||
        (bounds[2] - bounds[0] + 1) > ngy) {
        return false;
      }

      // Determine the position to put the text by
      // start looking for the nearest points
      var r = maxRadius + 1;

      var tryToPutWordAtPoint = function(gxy) {
        var gx = Math.floor(gxy[0] - info.gw / 2);
        var gy = Math.floor(gxy[1] - info.gh / 2);
        var gw = info.gw;
        var gh = info.gh;

        // If we cannot fit the text at this position, return false
        // and go to the next position.
        if (!canFitText(gx, gy, gw, gh, info.occupied)) {
          return false;
        }

        // Actually put the text on the canvas
        drawText(gx, gy, info, word, weight,
                 (maxRadius - r), gxy[2], rotateDeg, attributes);

        // Mark the spaces on the grid as filled
        updateGrid(gx, gy, gw, gh, info, item);

        // Return true so some() will stop and also return true.
        return true;
      };

      while (r--) {
        var points = getPointsAtRadius(maxRadius - r);

        if (settings.shuffle) {
          points = [].concat(points);
          shuffleArray(points);
        }

        // Try to fit the words by looking at each point.
        // array.some() will stop and return true
        // when putWordAtPoint() returns true.
        // If all the points returns false, array.some() returns false.
        var drawn = points.some(tryToPutWordAtPoint);

        if (drawn) {
          // leave putWord() and return true
          return true;
        }
      }
      // we tried all distances but text won't fit, return false
      return false;
    };

    /* Send DOM event to all elements. Will stop sending event and return
       if the previous one is canceled (for cancelable events). */
    var sendEvent = function sendEvent(type, cancelable, detail) {
      if (cancelable) {
        return !elements.some(function(el) {
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(type, true, cancelable, detail || {});
          return !el.dispatchEvent(evt);
        }, this);
      } else {
        elements.forEach(function(el) {
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(type, true, cancelable, detail || {});
          el.dispatchEvent(evt);
        }, this);
      }
    };

    /* Start drawing on a canvas */
    var start = function start() {
      // For dimensions, clearCanvas etc.,
      // we only care about the first element.
      var canvas = elements[0];

      if (canvas.getContext) {
        ngx = Math.floor(canvas.width / g);
        ngy = Math.floor(canvas.height / g);
      } else {
        var rect = canvas.getBoundingClientRect();
        ngx = Math.floor(rect.width / g);
        ngy = Math.floor(rect.height / g);
      }

      // Sending a wordcloudstart event which cause the previous loop to stop.
      // Do nothing if the event is canceled.
      if (!sendEvent('wordcloudstart', true)) {
        return;
      }

      // Determine the center of the word cloud
      center = (settings.origin) ?
        [settings.origin[0]/g, settings.origin[1]/g] :
        [ngx / 2, ngy / 2];

      // Maxium radius to look for space
      maxRadius = Math.floor(Math.sqrt(ngx * ngx + ngy * ngy));

      /* Clear the canvas only if the clearCanvas is set,
         if not, update the grid to the current canvas state */
      grid = [];

      var gx, gy, i;
      if (!canvas.getContext || settings.clearCanvas) {
        elements.forEach(function(el) {
          if (el.getContext) {
            var ctx = el.getContext('2d');
            ctx.fillStyle = settings.backgroundColor;
            ctx.clearRect(0, 0, ngx * (g + 1), ngy * (g + 1));
            ctx.fillRect(0, 0, ngx * (g + 1), ngy * (g + 1));
          } else {
            el.textContent = '';
            el.style.backgroundColor = settings.backgroundColor;
          }
        });

        /* fill the grid with empty state */
        gx = ngx;
        while (gx--) {
          grid[gx] = [];
          gy = ngy;
          while (gy--) {
            grid[gx][gy] = true;
          }
        }
      } else {
        /* Determine bgPixel by creating
           another canvas and fill the specified background color. */
        var bctx = document.createElement('canvas').getContext('2d');

        bctx.fillStyle = settings.backgroundColor;
        bctx.fillRect(0, 0, 1, 1);
        var bgPixel = bctx.getImageData(0, 0, 1, 1).data;

        /* Read back the pixels of the canvas we got to tell which part of the
           canvas is empty.
           (no clearCanvas only works with a canvas, not divs) */
        var imageData =
          canvas.getContext('2d').getImageData(0, 0, ngx * g, ngy * g).data;

        gx = ngx;
        var x, y;
        while (gx--) {
          grid[gx] = [];
          gy = ngy;
          while (gy--) {
            y = g;
            singleGridLoop: while (y--) {
              x = g;
              while (x--) {
                i = 4;
                while (i--) {
                  if (imageData[((gy * g + y) * ngx * g +
                                 (gx * g + x)) * 4 + i] !== bgPixel[i]) {
                    grid[gx][gy] = false;
                    break singleGridLoop;
                  }
                }
              }
            }
            if (grid[gx][gy] !== false) {
              grid[gx][gy] = true;
            }
          }
        }

        imageData = bctx = bgPixel = undefined;
      }

      // fill the infoGrid with empty state if we need it
      if (settings.hover || settings.click) {

        interactive = true;

        /* fill the grid with empty state */
        gx = ngx + 1;
        while (gx--) {
          infoGrid[gx] = [];
        }

        if (settings.hover) {
          canvas.addEventListener('mousemove', wordcloudhover);
        }

        if (settings.click) {
          canvas.addEventListener('click', wordcloudclick);
        }

        canvas.addEventListener('wordcloudstart', function stopInteraction() {
          canvas.removeEventListener('wordcloudstart', stopInteraction);

          canvas.removeEventListener('mousemove', wordcloudhover);
          canvas.removeEventListener('click', wordcloudclick);
          hovered = undefined;
        });
      }

      i = 0;
      var loopingFunction, stoppingFunction;
      if (settings.wait !== 0) {
        loopingFunction = window.setTimeout;
        stoppingFunction = window.clearTimeout;
      } else {
        loopingFunction = window.setImmediate;
        stoppingFunction = window.clearImmediate;
      }

      var addEventListener = function addEventListener(type, listener) {
        elements.forEach(function(el) {
          el.addEventListener(type, listener);
        }, this);
      };

      var removeEventListener = function removeEventListener(type, listener) {
        elements.forEach(function(el) {
          el.removeEventListener(type, listener);
        }, this);
      };

      var anotherWordCloudStart = function anotherWordCloudStart() {
        removeEventListener('wordcloudstart', anotherWordCloudStart);
        stoppingFunction(timer);
      };

      addEventListener('wordcloudstart', anotherWordCloudStart);

      var timer = loopingFunction(function loop() {
        if (i >= settings.list.length) {
          stoppingFunction(timer);
          sendEvent('wordcloudstop', false);
          removeEventListener('wordcloudstart', anotherWordCloudStart);

          return;
        }
        escapeTime = (new Date()).getTime();
        var drawn = putWord(settings.list[i]);
        var canceled = !sendEvent('wordclouddrawn', true, {
          item: settings.list[i], drawn: drawn });
        if (exceedTime() || canceled) {
          stoppingFunction(timer);
          settings.abort();
          sendEvent('wordcloudabort', false);
          sendEvent('wordcloudstop', false);
          removeEventListener('wordcloudstart', anotherWordCloudStart);
          return;
        }
        i++;
        timer = loopingFunction(loop, settings.wait);
      }, settings.wait);
    };

    // All set, start the drawing
    start();
  };

  WordCloud.isSupported = isSupported;
  WordCloud.miniumFontSize = miniumFontSize;

  // Expose the library as an AMD module
  if (typeof global.define === 'function' && global.define.amd) {
    global.define('wordcloud', [], function() { return WordCloud; });
  } else if (typeof global.module !== 'undefined' && global.module.exports) {
    global.module.exports = WordCloud;
  } else {
    global.WordCloud = WordCloud;
  }

})(window);

/**
 * @license
 * lodash 4.0.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash -o ./dist/lodash.js`
 */
;(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r?r.length:0){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););return n}function u(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function o(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i);
}return o}function i(n,t){return!!n.length&&-1<v(n,t,0)}function f(n,t,r){for(var e=-1,u=n.length;++e<u;)if(r(t,n[e]))return true;return false}function c(n,t){for(var r=-1,e=n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function s(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function p(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(f===Z?i===i:r(i,f)))var f=i,c=o}return c}function _(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function g(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function v(n,t,r){if(t!==t)return W(n,r);--r;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function d(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function y(n,t){
var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function b(n,t){for(var r,e=-1,u=n.length;++e<u;){var o=t(n[e]);o!==Z&&(r=r===Z?o:r+o)}return r}function x(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function m(n,t){return c(t,function(t){return[t,n[t]]})}function j(n){return function(t){return n(t)}}function w(n,t){return c(t,function(t){return n[t]})}function A(n,t){for(var r=-1,e=n.length;++r<e&&-1<v(t,n[r],0););return r}function O(n,t){for(var r=n.length;r--&&-1<v(t,n[r],0););
return r}function E(n){return n&&n.Object===Object?n:null}function k(n,t){if(n!==t){var r=null===n,e=n===Z,u=n===n,o=null===t,i=t===Z,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(t>n&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function I(n){return Un[n]}function R(n){return Bn[n]}function S(n){return"\\"+$n[n]}function W(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function C(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}
return t}function U(n,t){return n=typeof n=="number"||dn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function B(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function z(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function L(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]="__lodash_placeholder__",o[++u]=r);return o}function $(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function F(n){if(!n||!En.test(n))return n.length;
for(var t=On.lastIndex=0;On.test(n);)t++;return t}function M(n){return zn[n]}function N(E){function dn(n){if(_e(n)&&!Wo(n)&&!(n instanceof wn)){if(n instanceof jn)return n;if(tu.call(n,"__wrapped__"))return zr(n)}return new jn(n)}function mn(){}function jn(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=Z}function wn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[];
}function Un(){}function Bn(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function zn(n){var t=-1,r=n?n.length:0;for(this.__data__=new Bn;++t<r;)this.push(n[t])}function Ln(n,t){var r=n.__data__;return kr(t)?(r=r.__data__,"__lodash_hash_undefined__"===(typeof t=="string"?r.string:r.hash)[t]):r.has(t)}function $n(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n,t){var r=Dn(n,t);return 0>r?false:(r==n.length-1?n.pop():du.call(n,r,1),
!0)}function Zn(n,t){var r=Dn(n,t);return 0>r?Z:n[r][1]}function Dn(n,t){for(var r=n.length;r--;)if(ue(n[r][0],t))return r;return-1}function qn(n,t,r){var e=Dn(n,t);0>e?n.push([t,r]):n[e][1]=r}function Pn(n,t,r,e){return n===Z||ue(n,Xe[r])&&!tu.call(e,r)?t:n}function Tn(n,t,r){(r!==Z&&!ue(n[t],r)||typeof t=="number"&&r===Z&&!(t in n))&&(n[t]=r)}function Vn(n,t,r){var e=n[t];(!ue(e,r)||ue(e,Xe[t])&&!tu.call(n,t)||r===Z&&!(t in n))&&(n[t]=r)}function Jn(n,t){return n&&Tt(t,Ce(t),n)}function Yn(n,t){
for(var r=-1,e=null==n,u=t.length,o=Array(u);++r<u;)o[r]=e?Z:Re(n,t[r]);return o}function Hn(n,t,r){return n===n&&(r!==Z&&(n=n>r?r:n),t!==Z&&(n=t>n?t:n)),n}function Qn(n,t,r,u,o,i){var f;if(r&&(f=o?r(n,u,o,i):r(n)),f!==Z)return f;if(!pe(n))return n;if(u=Wo(n)){if(f=mr(n),!t)return Pt(n,f)}else{var c=br(n),a="[object Function]"==c||"[object GeneratorFunction]"==c;if("[object Object]"!=c&&"[object Arguments]"!=c&&(!a||o))return Cn[c]?wr(n,c,t):o?n:{};if(C(n))return o?n:{};if(f=jr(a?{}:n),!t)return Gt(n,Jn(f,n));
}return i||(i=new $n),(o=i.get(n))?o:(i.set(n,f),(u?e:it)(n,function(e,u){Vn(f,u,Qn(e,t,r,u,n,i))}),u?f:Gt(n,f))}function Xn(n){var t=Ce(n),r=t.length;return function(e){if(null==e)return!r;for(var u=r;u--;){var o=t[u],i=n[o],f=e[o];if(f===Z&&!(o in Object(e))||!i(f))return false}return true}}function nt(n,t,r){if(typeof n!="function")throw new He("Expected a function");return vu(function(){n.apply(Z,r)},t)}function tt(n,t,r,e){var u=-1,o=i,a=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=c(t,j(r))),
e?(o=f,a=false):t.length>=200&&(o=Ln,a=false,t=new zn(t));n:for(;++u<l;){var p=n[u],_=r?r(p):p;if(a&&_===_){for(var g=h;g--;)if(t[g]===_)continue n;s.push(p)}else o(t,_,e)||s.push(p)}return s}function rt(n,t){var r=true;return Nu(n,function(n,e,u){return r=!!t(n,e,u)}),r}function et(n,t){var r=[];return Nu(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function ut(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];ce(i)&&(r||Wo(i)||ie(i))?t?ut(i,t,r,e):a(e,i):r||(e[e.length]=i)}return e}function ot(n,t){
null==n||Du(n,t,Ue)}function it(n,t){return n&&Du(n,t,Ce)}function ft(n,t){return n&&qu(n,t,Ce)}function ct(n,t){return o(t,function(t){return le(n[t])})}function at(n,t){t=Er(t,n)?[t+""]:Lt(t);for(var r=0,e=t.length;null!=n&&e>r;)n=n[t[r++]];return r&&r==e?n:Z}function lt(n,t){return tu.call(n,t)||typeof n=="object"&&t in n&&null===hu(n)}function st(n,t){return t in Object(n)}function ht(n,t,r){for(var e=r?f:i,u=n.length,o=u,a=Array(u),l=[];o--;){var s=n[o];o&&t&&(s=c(s,j(t))),a[o]=r||!t&&120>s.length?Z:new zn(o&&s);
}var s=n[0],h=-1,p=s.length,_=a[0];n:for(;++h<p;){var g=s[h],v=t?t(g):g;if(_?!Ln(_,v):!e(l,v,r)){for(o=u;--o;){var d=a[o];if(d?!Ln(d,v):!e(n[o],v,r))continue n}_&&_.push(v),l.push(g)}}return l}function pt(n,t,e){return Er(t,n)||(t=Lt(t),n=Wr(n,t),t=Mr(t)),t=null==n?n:n[t],null==t?Z:r(t,n,e)}function _t(n,t,r,e,u){if(n===t)n=true;else if(null==n||null==t||!pe(n)&&!_e(t))n=n!==n&&t!==t;else n:{var o=Wo(n),i=Wo(t),f="[object Array]",c="[object Array]";o||(f=br(n),"[object Arguments]"==f?f="[object Object]":"[object Object]"!=f&&(o=me(n))),
i||(c=br(t),"[object Arguments]"==c?c="[object Object]":"[object Object]"!=c&&me(t));var a="[object Object]"==f&&!C(n),i="[object Object]"==c&&!C(t),c=f==c;if(!c||o||a){if(!(2&e)&&(f=a&&tu.call(n,"__wrapped__"),i=i&&tu.call(t,"__wrapped__"),f||i)){n=_t(f?n.value():n,i?t.value():t,r,e,u);break n}c?(u||(u=new $n),n=(o?hr:_r)(n,t,_t,r,e,u)):n=false}else n=pr(n,t,f,_t,r,e)}return n}function gt(n,t,r,e){var u=r.length,o=u,i=!e;if(null==n)return!o;for(n=Object(n);u--;){var f=r[u];if(i&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false;
}for(;++u<o;){var f=r[u],c=f[0],a=n[c],l=f[1];if(i&&f[2]){if(a===Z&&!(c in n))return false}else if(f=new $n,c=e?e(a,l,c,n,t,f):Z,c===Z?!_t(l,a,e,3,f):!c)return false}return true}function vt(n){var t=typeof n;return"function"==t?n:null==n?Ne:"object"==t?Wo(n)?xt(n[0],n[1]):bt(n):Te(n)}function dt(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function yt(n,t){var r=-1,e=fe(n)?Array(n.length):[];return Nu(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=dr(n);if(1==t.length&&t[0][2]){
var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==Z||r in Object(n))}}return function(r){return r===n||gt(r,n,t)}}function xt(n,t){return function(r){var e=Re(r,n);return e===Z&&e===t?We(r,n):_t(t,e,Z,3)}}function mt(n,t,r,u,o){if(n!==t){var i=Wo(t)||me(t)?Z:Ue(t);e(i||t,function(e,f){if(i&&(f=e,e=t[f]),pe(e)){o||(o=new $n);var c=f,a=o,l=n[c],s=t[c],h=a.get(s)||a.get(l);if(h)Tn(n,c,h);else{var h=u?u(l,s,c+"",n,t,a):Z,p=h===Z;p&&(h=s,Wo(s)||me(s)?h=Wo(l)?r?Pt(l):l:ce(l)?Pt(l):Qn(s):de(s)||ie(s)?h=ie(l)?ke(l):!pe(l)||r&&le(l)?Qn(s):r?Qn(l):l:p=false),
a.set(s,h),p&&mt(h,s,r,u,a),Tn(n,c,h)}}else c=u?u(n[f],e,f+"",n,t,o):Z,c===Z&&(c=e),Tn(n,f,c)})}}function jt(n,t,r){var e=-1,u=vr();return t=c(t.length?t:Array(1),function(n){return u(n)}),n=yt(n,function(n){return{a:c(t,function(t){return t(n)}),b:++e,c:n}}),y(n,function(n,t){var e;n:{e=-1;for(var u=n.a,o=t.a,i=u.length,f=r.length;++e<i;){var c=k(u[e],o[e]);if(c){e=f>e?c*("desc"==r[e]?-1:1):c;break n}}e=n.b-t.b}return e})}function wt(n,t){return n=Object(n),l(t,function(t,r){return r in n&&(t[r]=n[r]),
t},{})}function At(n,t){var r={};return ot(n,function(n,e){t(n,e)&&(r[e]=n)}),r}function Ot(n){return function(t){return null==t?Z:t[n]}}function Et(n){return function(t){return at(t,n)}}function kt(n,t,r){var e=-1,u=t.length,o=n;for(r&&(o=c(n,function(n){return r(n)}));++e<u;)for(var i=0,f=t[e],f=r?r(f):f;-1<(i=v(o,f,i));)o!==n&&du.call(o,i,1),du.call(n,i,1);return n}function It(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(e==r||u!=o){var o=u;if(U(u))du.call(n,u,1);else if(Er(u,n))delete n[u];else{
var u=Lt(u),i=Wr(n,u);null!=i&&delete i[Mr(u)]}}}}function Rt(n,t){return n+bu(Eu()*(t-n+1))}function St(n,t,r,e){t=Er(t,n)?[t+""]:Lt(t);for(var u=-1,o=t.length,i=o-1,f=n;null!=f&&++u<o;){var c=t[u];if(pe(f)){var a=r;if(u!=i){var l=f[c],a=e?e(l,c,f):Z;a===Z&&(a=null==l?U(t[u+1])?[]:{}:l)}Vn(f,c,a)}f=f[c]}return n}function Wt(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function Ct(n,t){var r;return Nu(n,function(n,e,u){
return r=t(n,e,u),!r}),!!r}function Ut(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&2147483647>=u){for(;u>e;){var o=e+u>>>1,i=n[o];(r?t>=i:t>i)&&null!==i?e=o+1:u=o}return u}return Bt(n,t,Ne,r)}function Bt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,c=t===Z;o>u;){var a=bu((u+o)/2),l=r(n[a]),s=l!==Z,h=l===l;(i?h||e:f?h&&s&&(e||null!=l):c?h&&(e||s):null==l?0:e?t>=l:t>l)?u=a+1:o=a}return Au(o,4294967294)}function zt(n,t){for(var r=0,e=n.length,u=n[0],o=t?t(u):u,i=o,f=0,c=[u];++r<e;)u=n[r],
o=t?t(u):u,ue(o,i)||(i=o,c[++f]=u);return c}function Lt(n){return Wo(n)?n:Cr(n)}function $t(n,t,r){var e=-1,u=i,o=n.length,c=true,a=[],l=a;if(r)c=false,u=f;else if(o<200)l=t?[]:a;else{if(u=t?null:Tu(n))return $(u);c=false,u=Ln,l=new zn}n:for(;++e<o;){var s=n[e],h=t?t(s):s;if(c&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function Ft(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););return r?Wt(n,e?0:o,e?o+1:u):Wt(n,e?o+1:0,e?u:o);
}function Mt(n,t){var r=n;return r instanceof wn&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function Nt(n,t,r){for(var e=-1,u=n.length;++e<u;)var o=o?a(tt(o,n[e],t,r),tt(n[e],o,t,r)):n[e];return o&&o.length?$t(o,t,r):[]}function Zt(n){var t=new n.constructor(n.byteLength);return new au(t).set(new au(n)),t}function Dt(n,t,r){for(var e=r.length,u=-1,o=wu(n.length-e,0),i=-1,f=t.length,c=Array(f+o);++i<f;)c[i]=t[i];for(;++u<e;)c[r[u]]=n[u];for(;o--;)c[i++]=n[u++];
return c}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=wu(n.length-u,0),f=-1,c=t.length,a=Array(i+c);++o<i;)a[o]=n[o];for(i=o;++f<c;)a[i+f]=t[f];for(;++e<u;)a[i+r[e]]=n[o++];return a}function Pt(n,t){var r=-1,e=n.length;for(t||(t=Array(e));++r<e;)t[r]=n[r];return t}function Tt(n,t,r){return Kt(n,t,r)}function Kt(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],f=e?e(r[i],n[i],i,r,n):n[i];Vn(r,i,f)}return r}function Gt(n,t){return Tt(n,Vu(n),t)}function Vt(n,t){return function(r,e){
var u=t?t():{};if(e=vr(e),Wo(r))for(var o=-1,i=r.length;++o<i;){var f=r[o];n(u,f,e(f),r)}else Nu(r,function(t,r,o){n(u,t,e(t),o)});return u}}function Jt(n){return ee(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:Z,i=u>2?r[2]:Z,o=typeof o=="function"?(u--,o):Z;for(i&&Or(r[0],r[1],i)&&(o=3>u?Z:o,u=1),t=Object(t);++e<u;)(i=r[e])&&n(t,i,e,o);return t})}function Yt(n,t){return function(r,e){if(null==r)return r;if(!fe(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););
return r}}function Ht(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var f=e[n?i:++u];if(false===r(o[f],f,o))break}return t}}function Qt(n,t,r){function e(){return(this&&this!==Kn&&this instanceof e?o:n).apply(u?r:this,arguments)}var u=1&t,o=tr(n);return e}function Xt(n){return function(t){t=Ie(t);var r=En.test(t)?t.match(On):Z,e=r?r[0]:t.charAt(0);return t=r?r.slice(1).join(""):t.slice(1),e[n]()+t}}function nr(n){return function(t){return l(Me($e(t)),n,"")}}function tr(n){
return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Mu(n.prototype),t=n.apply(r,t);return pe(t)?t:r}}function rr(n,t,e){function u(){for(var i=arguments.length,f=i,c=Array(i),a=this&&this!==Kn&&this instanceof u?o:n,l=u.placeholder;f--;)c[f]=arguments[f];
return f=3>i&&c[0]!==l&&c[i-1]!==l?[]:L(c,l),i-=f.length,e>i?ar(n,t,ur,l,Z,c,f,Z,Z,e-i):r(a,this,c)}var o=tr(n);return u}function er(n){return ee(function(t){t=ut(t);var r=t.length,e=r,u=jn.prototype.thru;for(n&&t.reverse();e--;){var o=t[e];if(typeof o!="function")throw new He("Expected a function");if(u&&!i&&"wrapper"==gr(o))var i=new jn([],true)}for(e=i?e:r;++e<r;)var o=t[e],u=gr(o),f="wrapper"==u?Ku(o):Z,i=f&&Ir(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?i[gr(f[0])].apply(i,f[3]):1==o.length&&Ir(o)?i[u]():i.thru(o);
return function(){var n=arguments,e=n[0];if(i&&1==n.length&&Wo(e)&&e.length>=200)return i.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function ur(n,t,r,e,u,o,i,f,c,a){function l(){for(var y=arguments.length,b=y,x=Array(y);b--;)x[b]=arguments[b];if(e&&(x=Dt(x,e,u)),o&&(x=qt(x,o,i)),_||g){var b=l.placeholder,m=L(x,b),y=y-m.length;if(a>y)return ar(n,t,ur,b,r,x,m,f,c,a-y)}if(y=h?r:this,b=p?y[n]:n,f)for(var m=x.length,j=Au(f.length,m),w=Pt(x);j--;){var A=f[j];
x[j]=U(A,m)?w[A]:Z}else v&&x.length>1&&x.reverse();return s&&x.length>c&&(x.length=c),this&&this!==Kn&&this instanceof l&&(b=d||tr(b)),b.apply(y,x)}var s=128&t,h=1&t,p=2&t,_=8&t,g=16&t,v=512&t,d=p?Z:tr(n);return l}function or(n){return ee(function(t){return t=c(ut(t),vr()),ee(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function ir(n,t,r){return t=Ae(t),n=F(n),t&&t>n?(t-=n,r=r===Z?" ":r+"",n=Fe(r,yu(t/F(r))),En.test(r)?n.match(On).slice(0,t).join(""):n.slice(0,t)):""}function fr(n,t,e,u){
function o(){for(var t=-1,c=arguments.length,a=-1,l=u.length,s=Array(l+c),h=this&&this!==Kn&&this instanceof o?f:n;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++t];return r(h,i?e:this,s)}var i=1&t,f=tr(n);return o}function cr(n){return function(t,r,e){e&&typeof e!="number"&&Or(t,r,e)&&(r=e=Z),t=Ee(t),t=t===t?t:0,r===Z?(r=t,t=0):r=Ee(r)||0,e=e===Z?r>t?1:-1:Ee(e)||0;var u=-1;r=wu(yu((r-t)/(e||1)),0);for(var o=Array(r);r--;)o[n?r:++u]=t,t+=e;return o}}function ar(n,t,r,e,u,o,i,f,c,a){var l=8&t;f=f?Pt(f):Z;
var s=l?i:Z;i=l?Z:i;var h=l?o:Z;return o=l?Z:o,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),t=[n,t,u,h,s,o,i,f,c,a],r=r.apply(Z,t),Ir(n)&&Ju(r,t),r.placeholder=e,r}function lr(n){var t=Je[n];return function(n,r){if(n=Ee(n),r=Ae(r)){var e=(Ie(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Ie(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function sr(n,t,r,e,u,o,i,f){var c=2&t;if(!c&&typeof n!="function")throw new He("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=Z),i=i===Z?i:wu(Ae(i),0),
f=f===Z?f:Ae(f),a-=u?u.length:0,64&t){var l=e,s=u;e=u=Z}var h=c?Z:Ku(n);return o=[n,t,r,e,u,l,s,o,i,f],h&&(r=o[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&h[8]>=o[7].length||384==n&&h[8]>=h[7].length&&8==r,131>t||e)&&(1&n&&(o[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=o[3],o[3]=e?Dt(e,r,h[4]):Pt(r),o[4]=e?L(o[3],"__lodash_placeholder__"):Pt(h[4])),(r=h[5])&&(e=o[5],o[5]=e?qt(e,r,h[6]):Pt(r),o[6]=e?L(o[5],"__lodash_placeholder__"):Pt(h[6])),(r=h[7])&&(o[7]=Pt(r)),128&n&&(o[8]=null==o[8]?h[8]:Au(o[8],h[8])),
null==o[9]&&(o[9]=h[9]),o[0]=h[0],o[1]=t),n=o[0],t=o[1],r=o[2],e=o[3],u=o[4],f=o[9]=null==o[9]?c?0:n.length:wu(o[9]-a,0),!f&&24&t&&(t&=-25),(h?Pu:Ju)(t&&1!=t?8==t||16==t?rr(n,t,f):32!=t&&33!=t||u.length?ur.apply(Z,o):fr(n,t,r,e):Qt(n,t,r),o)}function hr(n,t,r,e,u,o){var i=-1,f=2&u,c=1&u,a=n.length,l=t.length;if(!(a==l||f&&l>a))return false;if(l=o.get(n))return l==t;for(l=true,o.set(n,t);++i<a;){var s=n[i],p=t[i];if(e)var _=f?e(p,s,i,t,n,o):e(s,p,i,n,t,o);if(_!==Z){if(_)continue;l=false;break}if(c){if(!h(t,function(n){
return s===n||r(s,n,e,u,o)})){l=false;break}}else if(s!==p&&!r(s,p,e,u,o)){l=false;break}}return o["delete"](n),l}function pr(n,t,r,e,u,o){switch(r){case"[object ArrayBuffer]":if(n.byteLength!=t.byteLength||!e(new au(n),new au(t)))break;return true;case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var i=z;case"[object Set]":
return i||(i=$),(2&o||n.size==t.size)&&e(i(n),i(t),u,1|o);case"[object Symbol]":return!!cu&&Lu.call(n)==Lu.call(t)}return false}function _r(n,t,r,e,u,o){var i=2&u,f=Ce(n),c=f.length,a=Ce(t).length;if(c!=a&&!i)return false;for(var l=c;l--;){var s=f[l];if(!(i?s in t:lt(t,s)))return false}if(a=o.get(n))return a==t;a=true,o.set(n,t);for(var h=i;++l<c;){var s=f[l],p=n[s],_=t[s];if(e)var g=i?e(_,p,s,t,n,o):e(p,_,s,n,t,o);if(g===Z?p!==_&&!r(p,_,e,u,o):!g){a=false;break}h||(h="constructor"==s)}return a&&!h&&(r=n.constructor,
e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),o["delete"](n),a}function gr(n){for(var t=n.name+"",r=Fu[t],e=tu.call(Fu,t)?r.length:0;e--;){var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function vr(){var n=dn.iteratee||Ze,n=n===Ze?vt:n;return arguments.length?n(arguments[0],arguments[1]):n}function dr(n){n=Be(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!pe(r)}return n}function yr(n,t){
var r=null==n?Z:n[t];return ge(r)?r:Z}function br(n){return uu.call(n)}function xr(n,t,r){if(null==n)return false;var e=r(n,t);return e||Er(t)||(t=Lt(t),n=Wr(n,t),null!=n&&(t=Mr(t),e=r(n,t))),e||he(n&&n.length)&&U(t,n.length)&&(Wo(n)||be(n)||ie(n))}function mr(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&tu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function jr(n){return n=n.constructor,Mu(le(n)?n.prototype:Z)}function wr(r,e,u){var o=r.constructor;switch(e){case"[object ArrayBuffer]":
return Zt(r);case"[object Boolean]":case"[object Date]":return new o(+r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return e=r.buffer,new r.constructor(u?Zt(e):e,r.byteOffset,r.length);case"[object Map]":return u=r.constructor,l(z(r),n,new u);case"[object Number]":case"[object String]":return new o(r);
case"[object RegExp]":return u=new r.constructor(r.source,sn.exec(r)),u.lastIndex=r.lastIndex,u;case"[object Set]":return u=r.constructor,l($(r),t,new u);case"[object Symbol]":return cu?Object(Lu.call(r)):{}}}function Ar(n){var t=n?n.length:Z;return he(t)&&(Wo(n)||be(n)||ie(n))?x(t,String):null}function Or(n,t,r){if(!pe(r))return false;var e=typeof t;return("number"==e?fe(r)&&U(t,r.length):"string"==e&&t in r)?ue(r[t],n):false}function Er(n,t){return typeof n=="number"?true:!Wo(n)&&(tn.test(n)||!nn.test(n)||null!=t&&n in Object(t));
}function kr(n){var t=typeof n;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!==n||null==n}function Ir(n){var t=gr(n),r=dn[t];return typeof r=="function"&&t in wn.prototype?n===r?true:(t=Ku(r),!!t&&n===t[0]):false}function Rr(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||Xe)}function Sr(n,t,r,e,u,o){return pe(n)&&pe(t)&&(o.set(t,n),mt(n,t,Z,Sr,o)),n}function Wr(n,t){return 1==t.length?n:Re(n,Wt(t,0,-1))}function Cr(n){var t=[];return Ie(n).replace(rn,function(n,r,e,u){
t.push(e?u.replace(an,"$1"):r||n)}),t}function Ur(n){return ce(n)?n:[]}function Br(n){return typeof n=="function"?n:Ne}function zr(n){if(n instanceof wn)return n.clone();var t=new jn(n.__wrapped__,n.__chain__);return t.__actions__=Pt(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Lr(n,t,r){var e=n?n.length:0;return e?(t=r||t===Z?1:Ae(t),Wt(n,0>t?0:t,e)):[]}function $r(n,t,r){var e=n?n.length:0;return e?(t=r||t===Z?1:Ae(t),t=e-t,Wt(n,0,0>t?0:t)):[]}function Fr(n){return n?n[0]:Z;
}function Mr(n){var t=n?n.length:0;return t?n[t-1]:Z}function Nr(n,t){return n&&n.length&&t&&t.length?kt(n,t):n}function Zr(n){return n?ku.call(n):n}function Dr(n){if(!n||!n.length)return[];var t=0;return n=o(n,function(n){return ce(n)?(t=wu(n.length,t),true):void 0}),x(t,function(t){return c(n,Ot(t))})}function qr(n,t){if(!n||!n.length)return[];var e=Dr(n);return null==t?e:c(e,function(n){return r(t,Z,n)})}function Pr(n){return n=dn(n),n.__chain__=true,n}function Tr(n,t){return t(n)}function Kr(){return this;
}function Gr(n,t){return typeof t=="function"&&Wo(n)?e(n,t):Nu(n,Br(t))}function Vr(n,t){var r;if(typeof t=="function"&&Wo(n)){for(r=n.length;r--&&false!==t(n[r],r,n););r=n}else r=Zu(n,Br(t));return r}function Jr(n,t){var r=-1,e=we(n),u=e.length,o=u-1;for(t=Hn(Ae(t),0,u);++r<t;){var u=Rt(r,o),i=e[u];e[u]=e[r],e[r]=i}return e.length=t,e}function Yr(n){if(null==n)return 0;if(fe(n)){var t=n.length;return t&&be(n)?F(n):t}return Ce(n).length}function Hr(n,t,r){return t=r?Z:t,t=n&&null==t?n.length:t,sr(n,128,Z,Z,Z,Z,t);
}function Qr(n,t){var r;if(typeof t!="function")throw new He("Expected a function");return n=Ae(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=Z),r}}function Xr(n,t,r){return t=r?Z:t,n=sr(n,8,Z,Z,Z,Z,Z,t),n.placeholder=Xr.placeholder,n}function ne(n,t,r){return t=r?Z:t,n=sr(n,16,Z,Z,Z,Z,Z,t),n.placeholder=ne.placeholder,n}function te(n,t,r){function e(){p&&lu(p),a&&lu(a),g=0,c=a=h=p=_=Z}function u(t,r){r&&lu(r),a=p=_=Z,t&&(g=jo(),l=n.apply(h,c),p||a||(c=h=Z))}function o(){var n=t-(jo()-s);
0>=n||n>t?u(_,a):p=vu(o,n)}function i(){u(y,p)}function f(){if(c=arguments,s=jo(),h=this,_=y&&(p||!v),false===d)var r=v&&!p;else{a||v||(g=s);var e=d-(s-g),u=0>=e||e>d;u?(a&&(a=lu(a)),g=s,l=n.apply(h,c)):a||(a=vu(i,e))}return u&&p?p=lu(p):p||t===d||(p=vu(o,t)),r&&(u=true,l=n.apply(h,c)),!u||p||a||(c=h=Z),l}var c,a,l,s,h,p,_,g=0,v=false,d=false,y=true;if(typeof n!="function")throw new He("Expected a function");return t=Ee(t)||0,pe(r)&&(v=!!r.leading,d="maxWait"in r&&wu(Ee(r.maxWait)||0,t),y="trailing"in r?!!r.trailing:y),
f.cancel=e,f.flush=function(){return(p&&_||a&&y)&&(l=n.apply(h,c)),e(),l},f}function re(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new He("Expected a function");return r.cache=new re.Cache,r}function ee(n,t){if(typeof n!="function")throw new He("Expected a function");return t=wu(t===Z?n.length-1:Ae(t),0),function(){for(var e=arguments,u=-1,o=wu(e.length-t,0),i=Array(o);++u<o;)i[u]=e[t+u];
switch(t){case 0:return n.call(this,i);case 1:return n.call(this,e[0],i);case 2:return n.call(this,e[0],e[1],i)}for(o=Array(t+1),u=-1;++u<t;)o[u]=e[u];return o[t]=i,r(n,this,o)}}function ue(n,t){return n===t||n!==n&&t!==t}function oe(n,t){return n>t}function ie(n){return ce(n)&&tu.call(n,"callee")&&(!gu.call(n,"callee")||"[object Arguments]"==uu.call(n))}function fe(n){return null!=n&&!(typeof n=="function"&&le(n))&&he(Gu(n))}function ce(n){return _e(n)&&fe(n)}function ae(n){return _e(n)&&typeof n.message=="string"&&"[object Error]"==uu.call(n);
}function le(n){return n=pe(n)?uu.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function se(n){return typeof n=="number"&&n==Ae(n)}function he(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function pe(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function _e(n){return!!n&&typeof n=="object"}function ge(n){return null==n?false:le(n)?iu.test(nu.call(n)):_e(n)&&(C(n)?iu:gn).test(n)}function ve(n){return typeof n=="number"||_e(n)&&"[object Number]"==uu.call(n);
}function de(n){if(!_e(n)||"[object Object]"!=uu.call(n)||C(n))return false;var t=Xe;return typeof n.constructor=="function"&&(t=hu(n)),null===t?true:(n=t.constructor,typeof n=="function"&&n instanceof n&&nu.call(n)==eu)}function ye(n){return pe(n)&&"[object RegExp]"==uu.call(n)}function be(n){return typeof n=="string"||!Wo(n)&&_e(n)&&"[object String]"==uu.call(n)}function xe(n){return typeof n=="symbol"||_e(n)&&"[object Symbol]"==uu.call(n)}function me(n){return _e(n)&&he(n.length)&&!!Wn[uu.call(n)]}function je(n,t){
return t>n}function we(n){if(!n)return[];if(fe(n))return be(n)?n.match(On):Pt(n);if(_u&&n[_u])return B(n[_u]());var t=br(n);return("[object Map]"==t?z:"[object Set]"==t?$:ze)(n)}function Ae(n){if(!n)return 0===n?n:0;if(n=Ee(n),n===D||n===-D)return 1.7976931348623157e308*(0>n?-1:1);var t=n%1;return n===n?t?n-t:n:0}function Oe(n){return n?Hn(Ae(n),0,4294967295):0}function Ee(n){if(pe(n)&&(n=le(n.valueOf)?n.valueOf():n,n=pe(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(on,"");var t=_n.test(n);
return t||vn.test(n)?Mn(n.slice(2),t?2:8):pn.test(n)?q:+n}function ke(n){return Tt(n,Ue(n))}function Ie(n){if(typeof n=="string")return n;if(null==n)return"";if(xe(n))return cu?$u.call(n):"";var t=n+"";return"0"==t&&1/n==-D?"-0":t}function Re(n,t,r){return n=null==n?Z:at(n,t),n===Z?r:n}function Se(n,t){return xr(n,t,lt)}function We(n,t){return xr(n,t,st)}function Ce(n){var t=Rr(n);if(!t&&!fe(n))return ju(Object(n));var r,e=Ar(n),u=!!e,e=e||[],o=e.length;for(r in n)!lt(n,r)||u&&("length"==r||U(r,o))||t&&"constructor"==r||e.push(r);
return e}function Ue(n){for(var t=-1,r=Rr(n),e=dt(n),u=e.length,o=Ar(n),i=!!o,o=o||[],f=o.length;++t<u;){var c=e[t];i&&("length"==c||U(c,f))||"constructor"==c&&(r||!tu.call(n,c))||o.push(c)}return o}function Be(n){return m(n,Ce(n))}function ze(n){return n?w(n,Ce(n)):[]}function Le(n){return Vo(Ie(n).toLowerCase())}function $e(n){return(n=Ie(n))&&n.replace(yn,I).replace(An,"")}function Fe(n,t){n=Ie(n),t=Ae(t);var r="";if(!n||1>t||t>9007199254740991)return r;do t%2&&(r+=n),t=bu(t/2),n+=n;while(t);return r;
}function Me(n,t,r){return n=Ie(n),t=r?Z:t,t===Z&&(t=Rn.test(n)?In:kn),n.match(t)||[]}function Ne(n){return n}function Ze(n){return _e(n)&&!Wo(n)?De(n):vt(n)}function De(n){return bt(Qn(n,true))}function qe(n,t,r){var u=Ce(t),o=ct(t,u);null!=r||pe(t)&&(o.length||!u.length)||(r=t,t=n,n=this,o=ct(t,Ce(t)));var i=pe(r)&&"chain"in r?r.chain:true,f=le(n);return e(o,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=n(this.__wrapped__);return(r.__actions__=Pt(this.__actions__)).push({
func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Pe(){}function Te(n){return Er(n)?Ot(n):Et(n)}function Ke(n){return n&&n.length?b(n,Ne):Z}E=E?Gn.defaults({},E,Gn.pick(Kn,Sn)):Kn;var Ge=E.Date,Ve=E.Error,Je=E.Math,Ye=E.RegExp,He=E.TypeError,Qe=E.Array.prototype,Xe=E.Object.prototype,nu=E.Function.prototype.toString,tu=Xe.hasOwnProperty,ru=0,eu=nu.call(Object),uu=Xe.toString,ou=Kn._,iu=Ye("^"+nu.call(tu).replace(en,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fu=E.f,cu=E.Symbol,au=E.Uint8Array,lu=E.clearTimeout,su=fu?fu.g:Z,hu=Object.getPrototypeOf,pu=Object.getOwnPropertySymbols,_u=typeof(_u=cu&&cu.iterator)=="symbol"?_u:Z,gu=Xe.propertyIsEnumerable,vu=E.setTimeout,du=Qe.splice,yu=Je.ceil,bu=Je.floor,xu=E.isFinite,mu=Qe.join,ju=Object.keys,wu=Je.max,Au=Je.min,Ou=E.parseInt,Eu=Je.random,ku=Qe.reverse,Iu=yr(E,"Map"),Ru=yr(E,"Set"),Su=yr(E,"WeakMap"),Wu=yr(Object,"create"),Cu=Su&&new Su,Uu=Iu?nu.call(Iu):"",Bu=Ru?nu.call(Ru):"",zu=cu?cu.prototype:Z,Lu=cu?zu.valueOf:Z,$u=cu?zu.toString:Z,Fu={};
dn.templateSettings={escape:H,evaluate:Q,interpolate:X,variable:"",imports:{_:dn}};var Mu=function(){function n(){}return function(t){if(pe(t)){n.prototype=t;var r=new n;n.prototype=Z}return r||{}}}(),Nu=Yt(it),Zu=Yt(ft,true),Du=Ht(),qu=Ht(true);su&&!gu.call({valueOf:1},"valueOf")&&(dt=function(n){return B(su(n))});var Pu=Cu?function(n,t){return Cu.set(n,t),n}:Ne,Tu=Ru&&2===new Ru([1,2]).size?function(n){return new Ru(n)}:Pe,Ku=Cu?function(n){return Cu.get(n)}:Pe,Gu=Ot("length"),Vu=pu||function(){return[];
};(Iu&&"[object Map]"!=br(new Iu)||Ru&&"[object Set]"!=br(new Ru))&&(br=function(n){var t=uu.call(n);if(n="[object Object]"==t?n.constructor:null,n=typeof n=="function"?nu.call(n):""){if(n==Uu)return"[object Map]";if(n==Bu)return"[object Set]"}return t});var Ju=function(){var n=0,t=0;return function(r,e){var u=jo(),o=16-(u-t);if(t=u,o>0){if(150<=++n)return r}else n=0;return Pu(r,e)}}(),Yu=ee(function(n,t){Wo(n)||(n=null==n?[]:[Object(n)]),t=ut(t);for(var r=n,e=t,u=-1,o=r.length,i=-1,f=e.length,c=Array(o+f);++u<o;)c[u]=r[u];
for(;++i<f;)c[u++]=e[i];return c}),Hu=ee(function(n,t){return ce(n)?tt(n,ut(t,false,true)):[]}),Qu=ee(function(n,t){var r=Mr(t);return ce(r)&&(r=Z),ce(n)?tt(n,ut(t,false,true),vr(r)):[]}),Xu=ee(function(n,t){var r=Mr(t);return ce(r)&&(r=Z),ce(n)?tt(n,ut(t,false,true),Z,r):[]}),no=ee(function(n){var t=c(n,Ur);return t.length&&t[0]===n[0]?ht(t):[]}),to=ee(function(n){var t=Mr(n),r=c(n,Ur);return t===Mr(r)?t=Z:r.pop(),r.length&&r[0]===n[0]?ht(r,vr(t)):[]}),ro=ee(function(n){var t=Mr(n),r=c(n,Ur);return t===Mr(r)?t=Z:r.pop(),
r.length&&r[0]===n[0]?ht(r,Z,t):[]}),eo=ee(Nr),uo=ee(function(n,t){t=c(ut(t),String);var r=Yn(n,t);return It(n,t.sort(k)),r}),oo=ee(function(n){return $t(ut(n,false,true))}),io=ee(function(n){var t=Mr(n);return ce(t)&&(t=Z),$t(ut(n,false,true),vr(t))}),fo=ee(function(n){var t=Mr(n);return ce(t)&&(t=Z),$t(ut(n,false,true),Z,t)}),co=ee(function(n,t){return ce(n)?tt(n,t):[]}),ao=ee(function(n){return Nt(o(n,ce))}),lo=ee(function(n){var t=Mr(n);return ce(t)&&(t=Z),Nt(o(n,ce),vr(t))}),so=ee(function(n){var t=Mr(n);return ce(t)&&(t=Z),
Nt(o(n,ce),Z,t)}),ho=ee(Dr),po=ee(function(n){var t=n.length,t=t>1?n[t-1]:Z,t=typeof t=="function"?(n.pop(),t):Z;return qr(n,t)}),_o=ee(function(n){function t(t){return Yn(t,n)}n=ut(n);var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return 1>=r&&!this.__actions__.length&&u instanceof wn&&U(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:Tr,args:[t],thisArg:Z}),new jn(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(Z),n})):this.thru(t)}),go=Vt(function(n,t,r){tu.call(n,r)?++n[r]:n[r]=1;
}),vo=Vt(function(n,t,r){tu.call(n,r)?n[r].push(t):n[r]=[t]}),yo=ee(function(n,t,e){var u=-1,o=typeof t=="function",i=Er(t),f=fe(n)?Array(n.length):[];return Nu(n,function(n){var c=o?t:i&&null!=n?n[t]:Z;f[++u]=c?r(c,n,e):pt(n,t,e)}),f}),bo=Vt(function(n,t,r){n[r]=t}),xo=Vt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),mo=ee(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Or(n,t[0],t[1])?t=[]:r>2&&Or(t[0],t[1],t[2])&&(t.length=1),jt(n,ut(t),[])}),jo=Ge.now,wo=ee(function(n,t,r){
var e=1;if(r.length)var u=L(r,wo.placeholder),e=32|e;return sr(n,e,t,r,u)}),Ao=ee(function(n,t,r){var e=3;if(r.length)var u=L(r,Ao.placeholder),e=32|e;return sr(t,e,n,r,u)}),Oo=ee(function(n,t){return nt(n,1,t)}),Eo=ee(function(n,t,r){return nt(n,Ee(t)||0,r)}),ko=ee(function(n,t){t=c(ut(t),vr());var e=t.length;return ee(function(u){for(var o=-1,i=Au(u.length,e);++o<i;)u[o]=t[o].call(this,u[o]);return r(n,this,u)})}),Io=ee(function(n,t){var r=L(t,Io.placeholder);return sr(n,32,Z,t,r)}),Ro=ee(function(n,t){
var r=L(t,Ro.placeholder);return sr(n,64,Z,t,r)}),So=ee(function(n,t){return sr(n,256,Z,Z,Z,ut(t))}),Wo=Array.isArray,Co=Jt(function(n,t){Tt(t,Ce(t),n)}),Uo=Jt(function(n,t){Tt(t,Ue(t),n)}),Bo=Jt(function(n,t,r,e){Kt(t,Ue(t),n,e)}),zo=Jt(function(n,t,r,e){Kt(t,Ce(t),n,e)}),Lo=ee(function(n,t){return Yn(n,ut(t))}),$o=ee(function(n){return n.push(Z,Pn),r(Bo,Z,n)}),Fo=ee(function(n){return n.push(Z,Sr),r(Zo,Z,n)}),Mo=ee(pt),No=Jt(function(n,t,r){mt(n,t,r)}),Zo=Jt(function(n,t,r,e){mt(n,t,r,e)}),Do=ee(function(n,t){
return null==n?{}:(t=c(ut(t),String),wt(n,tt(Ue(n),t)))}),qo=ee(function(n,t){return null==n?{}:wt(n,ut(t))}),Po=nr(function(n,t,r){return t=t.toLowerCase(),n+(r?Le(t):t)}),To=nr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Ko=nr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Go=Xt("toLowerCase"),Vo=Xt("toUpperCase"),Jo=nr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Yo=nr(function(n,t,r){return n+(r?" ":"")+Le(t)}),Ho=nr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase();
}),Qo=ee(function(n,t){try{return r(n,Z,t)}catch(e){return ae(e)?e:new Ve(e)}}),Xo=ee(function(n,t){return e(ut(t),function(t){n[t]=wo(n[t],n)}),n}),ni=er(),ti=er(true),ri=ee(function(n,t){return function(r){return pt(r,n,t)}}),ei=ee(function(n,t){return function(r){return pt(n,r,t)}}),ui=or(c),oi=or(u),ii=or(h),fi=cr(),ci=cr(true),ai=lr("ceil"),li=lr("floor"),si=lr("round");return dn.prototype=mn.prototype,jn.prototype=Mu(mn.prototype),jn.prototype.constructor=jn,wn.prototype=Mu(mn.prototype),wn.prototype.constructor=wn,
Un.prototype=Wu?Wu(null):Xe,Bn.prototype.clear=function(){this.__data__={hash:new Un,map:Iu?new Iu:[],string:new Un}},Bn.prototype["delete"]=function(n){var t=this.__data__;return kr(n)?(t=typeof n=="string"?t.string:t.hash,n=(Wu?t[n]!==Z:tu.call(t,n))&&delete t[n]):n=Iu?t.map["delete"](n):Nn(t.map,n),n},Bn.prototype.get=function(n){var t=this.__data__;return kr(n)?(t=typeof n=="string"?t.string:t.hash,Wu?(n=t[n],n="__lodash_hash_undefined__"===n?Z:n):n=tu.call(t,n)?t[n]:Z):n=Iu?t.map.get(n):Zn(t.map,n),
n},Bn.prototype.has=function(n){var t=this.__data__;return kr(n)?(t=typeof n=="string"?t.string:t.hash,n=Wu?t[n]!==Z:tu.call(t,n)):n=Iu?t.map.has(n):-1<Dn(t.map,n),n},Bn.prototype.set=function(n,t){var r=this.__data__;return kr(n)?(typeof n=="string"?r.string:r.hash)[n]=Wu&&t===Z?"__lodash_hash_undefined__":t:Iu?r.map.set(n,t):qn(r.map,n,t),this},zn.prototype.push=function(n){var t=this.__data__;kr(n)?(t=t.__data__,(typeof n=="string"?t.string:t.hash)[n]="__lodash_hash_undefined__"):t.set(n,"__lodash_hash_undefined__");
},$n.prototype.clear=function(){this.__data__={array:[],map:null}},$n.prototype["delete"]=function(n){var t=this.__data__,r=t.array;return r?Nn(r,n):t.map["delete"](n)},$n.prototype.get=function(n){var t=this.__data__,r=t.array;return r?Zn(r,n):t.map.get(n)},$n.prototype.has=function(n){var t=this.__data__,r=t.array;return r?-1<Dn(r,n):t.map.has(n)},$n.prototype.set=function(n,t){var r=this.__data__,e=r.array;return e&&(199>e.length?qn(e,n,t):(r.array=null,r.map=new Bn(e))),(r=r.map)&&r.set(n,t),
this},re.Cache=Bn,dn.after=function(n,t){if(typeof t!="function")throw new He("Expected a function");return n=Ae(n),function(){return 1>--n?t.apply(this,arguments):void 0}},dn.ary=Hr,dn.assign=Co,dn.assignIn=Uo,dn.assignInWith=Bo,dn.assignWith=zo,dn.at=Lo,dn.before=Qr,dn.bind=wo,dn.bindAll=Xo,dn.bindKey=Ao,dn.chain=Pr,dn.chunk=function(n,t){t=wu(Ae(t),0);var r=n?n.length:0;if(!r||1>t)return[];for(var e=0,u=-1,o=Array(yu(r/t));r>e;)o[++u]=Wt(n,e,e+=t);return o},dn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){
var o=n[t];o&&(u[++e]=o)}return u},dn.concat=Yu,dn.cond=function(n){var t=n?n.length:0,e=vr();return n=t?c(n,function(n){if("function"!=typeof n[1])throw new He("Expected a function");return[e(n[0]),n[1]]}):[],ee(function(e){for(var u=-1;++u<t;){var o=n[u];if(r(o[0],this,e))return r(o[1],this,e)}})},dn.conforms=function(n){return Xn(Qn(n,true))},dn.constant=function(n){return function(){return n}},dn.countBy=go,dn.create=function(n,t){var r=Mu(n);return t?Jn(r,t):r},dn.curry=Xr,dn.curryRight=ne,dn.debounce=te,
dn.defaults=$o,dn.defaultsDeep=Fo,dn.defer=Oo,dn.delay=Eo,dn.difference=Hu,dn.differenceBy=Qu,dn.differenceWith=Xu,dn.drop=Lr,dn.dropRight=$r,dn.dropRightWhile=function(n,t){return n&&n.length?Ft(n,vr(t,3),true,true):[]},dn.dropWhile=function(n,t){return n&&n.length?Ft(n,vr(t,3),true):[]},dn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Or(n,t,r)&&(r=0,e=u),u=n.length,r=Ae(r),0>r&&(r=-r>u?0:u+r),e=e===Z||e>u?u:Ae(e),0>e&&(e+=u),e=r>e?0:Oe(e);e>r;)n[r++]=t;return n},
dn.filter=function(n,t){return(Wo(n)?o:et)(n,vr(t,3))},dn.flatMap=function(n,t){return n&&n.length?ut(c(n,vr(t,3))):[]},dn.flatten=function(n){return n&&n.length?ut(n):[]},dn.flattenDeep=function(n){return n&&n.length?ut(n,true):[]},dn.flip=function(n){return sr(n,512)},dn.flow=ni,dn.flowRight=ti,dn.fromPairs=function(n){for(var t=-1,r=n?n.length:0,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},dn.functions=function(n){return null==n?[]:ct(n,Ce(n))},dn.functionsIn=function(n){return null==n?[]:ct(n,Ue(n));
},dn.groupBy=vo,dn.initial=function(n){return $r(n,1)},dn.intersection=no,dn.intersectionBy=to,dn.intersectionWith=ro,dn.invert=function(n,t,r){return l(Ce(n),function(e,u){var o=n[u];return t&&!r?tu.call(e,o)?e[o].push(u):e[o]=[u]:e[o]=u,e},{})},dn.invokeMap=yo,dn.iteratee=Ze,dn.keyBy=bo,dn.keys=Ce,dn.keysIn=Ue,dn.map=function(n,t){return(Wo(n)?c:yt)(n,vr(t,3))},dn.mapKeys=function(n,t){var r={};return t=vr(t,3),it(n,function(n,e,u){r[t(n,e,u)]=n}),r},dn.mapValues=function(n,t){var r={};return t=vr(t,3),
it(n,function(n,e,u){r[e]=t(n,e,u)}),r},dn.matches=De,dn.matchesProperty=function(n,t){return xt(n,Qn(t,true))},dn.memoize=re,dn.merge=No,dn.mergeWith=Zo,dn.method=ri,dn.methodOf=ei,dn.mixin=qe,dn.negate=function(n){if(typeof n!="function")throw new He("Expected a function");return function(){return!n.apply(this,arguments)}},dn.nthArg=function(n){return n=Ae(n),function(){return arguments[n]}},dn.omit=Do,dn.omitBy=function(n,t){return t=vr(t,2),At(n,function(n,r){return!t(n,r)})},dn.once=function(n){
return Qr(2,n)},dn.orderBy=function(n,t,r,e){return null==n?[]:(Wo(t)||(t=null==t?[]:[t]),r=e?Z:r,Wo(r)||(r=null==r?[]:[r]),jt(n,t,r))},dn.over=ui,dn.overArgs=ko,dn.overEvery=oi,dn.overSome=ii,dn.partial=Io,dn.partialRight=Ro,dn.partition=xo,dn.pick=qo,dn.pickBy=function(n,t){return null==n?{}:At(n,vr(t,2))},dn.property=Te,dn.propertyOf=function(n){return function(t){return null==n?Z:at(n,t)}},dn.pull=eo,dn.pullAll=Nr,dn.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?kt(n,t,vr(r)):n},dn.pullAt=uo,
dn.range=fi,dn.rangeRight=ci,dn.rearg=So,dn.reject=function(n,t){var r=Wo(n)?o:et;return t=vr(t,3),r(n,function(n,r,e){return!t(n,r,e)})},dn.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],o=n.length;for(t=vr(t,3);++e<o;){var i=n[e];t(i,e,n)&&(r.push(i),u.push(e))}return It(n,u),r},dn.rest=ee,dn.reverse=Zr,dn.sampleSize=Jr,dn.set=function(n,t,r){return null==n?n:St(n,t,r)},dn.setWith=function(n,t,r,e){return e=typeof e=="function"?e:Z,null==n?n:St(n,t,r,e)},dn.shuffle=function(n){
return Jr(n,4294967295)},dn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Or(n,t,r)?(t=0,r=e):(t=null==t?0:Ae(t),r=r===Z?e:Ae(r)),Wt(n,t,r)):[]},dn.sortBy=mo,dn.sortedUniq=function(n){return n&&n.length?zt(n):[]},dn.sortedUniqBy=function(n,t){return n&&n.length?zt(n,vr(t)):[]},dn.split=function(n,t,r){return Ie(n).split(t,r)},dn.spread=function(n){if(typeof n!="function")throw new He("Expected a function");return function(t){return r(n,this,t)}},dn.tail=function(n){return Lr(n,1);
},dn.take=function(n,t,r){return n&&n.length?(t=r||t===Z?1:Ae(t),Wt(n,0,0>t?0:t)):[]},dn.takeRight=function(n,t,r){var e=n?n.length:0;return e?(t=r||t===Z?1:Ae(t),t=e-t,Wt(n,0>t?0:t,e)):[]},dn.takeRightWhile=function(n,t){return n&&n.length?Ft(n,vr(t,3),false,true):[]},dn.takeWhile=function(n,t){return n&&n.length?Ft(n,vr(t,3)):[]},dn.tap=function(n,t){return t(n),n},dn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new He("Expected a function");return pe(r)&&(e="leading"in r?!!r.leading:e,
u="trailing"in r?!!r.trailing:u),te(n,t,{leading:e,maxWait:t,trailing:u})},dn.thru=Tr,dn.toArray=we,dn.toPairs=Be,dn.toPairsIn=function(n){return m(n,Ue(n))},dn.toPath=function(n){return Wo(n)?c(n,String):Cr(n)},dn.toPlainObject=ke,dn.transform=function(n,t,r){var u=Wo(n)||me(n);if(t=vr(t,4),null==r)if(u||pe(n)){var o=n.constructor;r=u?Wo(n)?new o:[]:Mu(le(o)?o.prototype:Z)}else r={};return(u?e:it)(n,function(n,e,u){return t(r,n,e,u)}),r},dn.unary=function(n){return Hr(n,1)},dn.union=oo,dn.unionBy=io,
dn.unionWith=fo,dn.uniq=function(n){return n&&n.length?$t(n):[]},dn.uniqBy=function(n,t){return n&&n.length?$t(n,vr(t)):[]},dn.uniqWith=function(n,t){return n&&n.length?$t(n,Z,t):[]},dn.unset=function(n,t){var r;if(null==n)r=true;else{r=n;var e=t,e=Er(e,r)?[e+""]:Lt(e);r=Wr(r,e),e=Mr(e),r=null!=r&&Se(r,e)?delete r[e]:true}return r},dn.unzip=Dr,dn.unzipWith=qr,dn.values=ze,dn.valuesIn=function(n){return null==n?w(n,Ue(n)):[]},dn.without=co,dn.words=Me,dn.wrap=function(n,t){return t=null==t?Ne:t,Io(t,n);
},dn.xor=ao,dn.xorBy=lo,dn.xorWith=so,dn.zip=ho,dn.zipObject=function(n,t){for(var r=-1,e=n?n.length:0,u=t?t.length:0,o={};++r<e;)St(o,n[r],u>r?t[r]:Z);return o},dn.zipWith=po,dn.extend=Uo,dn.extendWith=Bo,qe(dn,dn),dn.add=function(n,t){var r;return n!==Z&&(r=n),t!==Z&&(r=r===Z?t:r+t),r},dn.attempt=Qo,dn.camelCase=Po,dn.capitalize=Le,dn.ceil=ai,dn.clamp=function(n,t,r){return r===Z&&(r=t,t=Z),r!==Z&&(r=Ee(r),r=r===r?r:0),t!==Z&&(t=Ee(t),t=t===t?t:0),Hn(Ee(n),t,r)},dn.clone=function(n){return Qn(n);
},dn.cloneDeep=function(n){return Qn(n,true)},dn.cloneDeepWith=function(n,t){return Qn(n,true,t)},dn.cloneWith=function(n,t){return Qn(n,false,t)},dn.deburr=$e,dn.endsWith=function(n,t,r){n=Ie(n),t=typeof t=="string"?t:t+"";var e=n.length;return r=r===Z?e:Hn(Ae(r),0,e),r-=t.length,r>=0&&n.indexOf(t,r)==r},dn.eq=ue,dn.escape=function(n){return(n=Ie(n))&&Y.test(n)?n.replace(V,R):n},dn.escapeRegExp=function(n){return(n=Ie(n))&&un.test(n)?n.replace(en,"\\$&"):n},dn.every=function(n,t,r){var e=Wo(n)?u:rt;return r&&Or(n,t,r)&&(t=Z),
e(n,vr(t,3))},dn.find=function(n,t){if(t=vr(t,3),Wo(n)){var r=g(n,t);return r>-1?n[r]:Z}return _(n,t,Nu)},dn.findIndex=function(n,t){return n&&n.length?g(n,vr(t,3)):-1},dn.findKey=function(n,t){return _(n,vr(t,3),it,true)},dn.findLast=function(n,t){if(t=vr(t,3),Wo(n)){var r=g(n,t,true);return r>-1?n[r]:Z}return _(n,t,Zu)},dn.findLastIndex=function(n,t){return n&&n.length?g(n,vr(t,3),true):-1},dn.findLastKey=function(n,t){return _(n,vr(t,3),ft,true)},dn.floor=li,dn.forEach=Gr,dn.forEachRight=Vr,dn.forIn=function(n,t){
return null==n?n:Du(n,Br(t),Ue)},dn.forInRight=function(n,t){return null==n?n:qu(n,Br(t),Ue)},dn.forOwn=function(n,t){return n&&it(n,Br(t))},dn.forOwnRight=function(n,t){return n&&ft(n,Br(t))},dn.get=Re,dn.gt=oe,dn.gte=function(n,t){return n>=t},dn.has=Se,dn.hasIn=We,dn.head=Fr,dn.identity=Ne,dn.includes=function(n,t,r,e){return n=fe(n)?n:ze(n),r=r&&!e?Ae(r):0,e=n.length,0>r&&(r=wu(e+r,0)),be(n)?e>=r&&-1<n.indexOf(t,r):!!e&&-1<v(n,t,r)},dn.indexOf=function(n,t,r){var e=n?n.length:0;return e?(r=Ae(r),
0>r&&(r=wu(e+r,0)),v(n,t,r)):-1},dn.inRange=function(n,t,r){return t=Ee(t)||0,r===Z?(r=t,t=0):r=Ee(r)||0,n=Ee(n),n>=Au(t,r)&&n<wu(t,r)},dn.invoke=Mo,dn.isArguments=ie,dn.isArray=Wo,dn.isArrayLike=fe,dn.isArrayLikeObject=ce,dn.isBoolean=function(n){return true===n||false===n||_e(n)&&"[object Boolean]"==uu.call(n)},dn.isDate=function(n){return _e(n)&&"[object Date]"==uu.call(n)},dn.isElement=function(n){return!!n&&1===n.nodeType&&_e(n)&&!de(n)},dn.isEmpty=function(n){return!_e(n)||le(n.splice)?!Yr(n):!Ce(n).length;
},dn.isEqual=function(n,t){return _t(n,t)},dn.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:Z)?r(n,t):Z;return e===Z?_t(n,t,r):!!e},dn.isError=ae,dn.isFinite=function(n){return typeof n=="number"&&xu(n)},dn.isFunction=le,dn.isInteger=se,dn.isLength=he,dn.isMatch=function(n,t){return n===t||gt(n,t,dr(t))},dn.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:Z,gt(n,t,dr(t),r)},dn.isNaN=function(n){return ve(n)&&n!=+n},dn.isNative=ge,dn.isNil=function(n){return null==n},dn.isNull=function(n){
return null===n},dn.isNumber=ve,dn.isObject=pe,dn.isObjectLike=_e,dn.isPlainObject=de,dn.isRegExp=ye,dn.isSafeInteger=function(n){return se(n)&&n>=-9007199254740991&&9007199254740991>=n},dn.isString=be,dn.isSymbol=xe,dn.isTypedArray=me,dn.isUndefined=function(n){return n===Z},dn.join=function(n,t){return n?mu.call(n,t):""},dn.kebabCase=To,dn.last=Mr,dn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(r!==Z&&(u=Ae(r),u=(0>u?wu(e+u,0):Au(u,e-1))+1),t!==t)return W(n,u,true);for(;u--;)if(n[u]===t)return u;
return-1},dn.lowerCase=Ko,dn.lowerFirst=Go,dn.lt=je,dn.lte=function(n,t){return t>=n},dn.max=function(n){return n&&n.length?p(n,Ne,oe):Z},dn.maxBy=function(n,t){return n&&n.length?p(n,vr(t),oe):Z},dn.mean=function(n){return Ke(n)/(n?n.length:0)},dn.min=function(n){return n&&n.length?p(n,Ne,je):Z},dn.minBy=function(n,t){return n&&n.length?p(n,vr(t),je):Z},dn.noConflict=function(){return Kn._===this&&(Kn._=ou),this},dn.noop=Pe,dn.now=jo,dn.pad=function(n,t,r){n=Ie(n),t=Ae(t);var e=F(n);return t&&t>e?(e=(t-e)/2,
t=bu(e),e=yu(e),ir("",t,r)+n+ir("",e,r)):n},dn.padEnd=function(n,t,r){return n=Ie(n),n+ir(n,t,r)},dn.padStart=function(n,t,r){return n=Ie(n),ir(n,t,r)+n},dn.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),n=Ie(n).replace(on,""),Ou(n,t||(hn.test(n)?16:10))},dn.random=function(n,t,r){if(r&&typeof r!="boolean"&&Or(n,t,r)&&(t=r=Z),r===Z&&(typeof t=="boolean"?(r=t,t=Z):typeof n=="boolean"&&(r=n,n=Z)),n===Z&&t===Z?(n=0,t=1):(n=Ee(n)||0,t===Z?(t=n,n=0):t=Ee(t)||0),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Eu(),
Au(n+r*(t-n+Fn("1e-"+((r+"").length-1))),t)):Rt(n,t)},dn.reduce=function(n,t,r){var e=Wo(n)?l:d,u=3>arguments.length;return e(n,vr(t,4),r,u,Nu)},dn.reduceRight=function(n,t,r){var e=Wo(n)?s:d,u=3>arguments.length;return e(n,vr(t,4),r,u,Zu)},dn.repeat=Fe,dn.replace=function(){var n=arguments,t=Ie(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},dn.result=function(n,t,r){if(Er(t,n))e=null==n?Z:n[t];else{t=Lt(t);var e=Re(n,t);n=Wr(n,t)}return e===Z&&(e=r),le(e)?e.call(n):e},dn.round=si,dn.runInContext=N,
dn.sample=function(n){n=fe(n)?n:ze(n);var t=n.length;return t>0?n[Rt(0,t-1)]:Z},dn.size=Yr,dn.snakeCase=Jo,dn.some=function(n,t,r){var e=Wo(n)?h:Ct;return r&&Or(n,t,r)&&(t=Z),e(n,vr(t,3))},dn.sortedIndex=function(n,t){return Ut(n,t)},dn.sortedIndexBy=function(n,t,r){return Bt(n,t,vr(r))},dn.sortedIndexOf=function(n,t){var r=n?n.length:0;if(r){var e=Ut(n,t);if(r>e&&ue(n[e],t))return e}return-1},dn.sortedLastIndex=function(n,t){return Ut(n,t,true)},dn.sortedLastIndexBy=function(n,t,r){return Bt(n,t,vr(r),true);
},dn.sortedLastIndexOf=function(n,t){if(n&&n.length){var r=Ut(n,t,true)-1;if(ue(n[r],t))return r}return-1},dn.startCase=Yo,dn.startsWith=function(n,t,r){return n=Ie(n),r=Hn(Ae(r),0,n.length),n.lastIndexOf(t,r)==r},dn.subtract=function(n,t){var r;return n!==Z&&(r=n),t!==Z&&(r=r===Z?t:r-t),r},dn.sum=Ke,dn.sumBy=function(n,t){return n&&n.length?b(n,vr(t)):Z},dn.template=function(n,t,r){var e=dn.templateSettings;r&&Or(n,t,r)&&(t=Z),n=Ie(n),t=Bo({},t,e,Pn),r=Bo({},t.imports,e.imports,Pn);var u,o,i=Ce(r),f=w(r,i),c=0;
r=t.interpolate||bn;var a="__p+='";r=Ye((t.escape||bn).source+"|"+r.source+"|"+(r===X?ln:bn).source+"|"+(t.evaluate||bn).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,i,f,l){return e||(e=i),a+=n.slice(c,l).replace(xn,S),r&&(u=true,a+="'+__e("+r+")+'"),f&&(o=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(o?a.replace(P,""):a).replace(T,"$1").replace(K,"$1;"),
a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Qo(function(){return Function(i,l+"return "+a).apply(Z,f)}),t.source=a,ae(t))throw t;return t},dn.times=function(n,t){if(n=Ae(n),1>n||n>9007199254740991)return[];var r=4294967295,e=Au(n,4294967295);for(t=Br(t),n-=4294967295,e=x(e,t);++r<n;)t(r);return e},dn.toInteger=Ae,dn.toLength=Oe,dn.toLower=function(n){
return Ie(n).toLowerCase()},dn.toNumber=Ee,dn.toSafeInteger=function(n){return Hn(Ae(n),-9007199254740991,9007199254740991)},dn.toString=Ie,dn.toUpper=function(n){return Ie(n).toUpperCase()},dn.trim=function(n,t,r){return(n=Ie(n))?r||t===Z?n.replace(on,""):(t+="")?(n=n.match(On),t=t.match(On),n.slice(A(n,t),O(n,t)+1).join("")):n:n},dn.trimEnd=function(n,t,r){return(n=Ie(n))?r||t===Z?n.replace(cn,""):(t+="")?(n=n.match(On),n.slice(0,O(n,t.match(On))+1).join("")):n:n},dn.trimStart=function(n,t,r){return(n=Ie(n))?r||t===Z?n.replace(fn,""):(t+="")?(n=n.match(On),
n.slice(A(n,t.match(On))).join("")):n:n},dn.truncate=function(n,t){var r=30,e="...";if(pe(t))var u="separator"in t?t.separator:u,r="length"in t?Ae(t.length):r,e="omission"in t?Ie(t.omission):e;n=Ie(n);var o=n.length;if(En.test(n))var i=n.match(On),o=i.length;if(r>=o)return n;if(o=r-F(e),1>o)return e;if(r=i?i.slice(0,o).join(""):n.slice(0,o),u===Z)return r+e;if(i&&(o+=r.length-o),ye(u)){if(n.slice(o).search(u)){var f=r;for(u.global||(u=Ye(u.source,Ie(sn.exec(u))+"g")),u.lastIndex=0;i=u.exec(f);)var c=i.index;
r=r.slice(0,c===Z?o:c)}}else n.indexOf(u,o)!=o&&(u=r.lastIndexOf(u),u>-1&&(r=r.slice(0,u)));return r+e},dn.unescape=function(n){return(n=Ie(n))&&J.test(n)?n.replace(G,M):n},dn.uniqueId=function(n){var t=++ru;return Ie(n)+t},dn.upperCase=Ho,dn.upperFirst=Vo,dn.each=Gr,dn.eachRight=Vr,dn.first=Fr,qe(dn,function(){var n={};return it(dn,function(t,r){tu.call(dn.prototype,r)||(n[r]=t)}),n}(),{chain:false}),dn.VERSION="4.0.1",e("bind bindKey curry curryRight partial partialRight".split(" "),function(n){dn[n].placeholder=dn;
}),e(["drop","take"],function(n,t){wn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new wn(this);r=r===Z?1:wu(Ae(r),0);var u=this.clone();return e?u.__takeCount__=Au(r,u.__takeCount__):u.__views__.push({size:Au(r,4294967295),type:n+(0>u.__dir__?"Right":"")}),u},wn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),e(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;wn.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({
iteratee:vr(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),e(["head","last"],function(n,t){var r="take"+(t?"Right":"");wn.prototype[n]=function(){return this[r](1).value()[0]}}),e(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");wn.prototype[n]=function(){return this.__filtered__?new wn(this):this[r](1)}}),wn.prototype.compact=function(){return this.filter(Ne)},wn.prototype.find=function(n){return this.filter(n).head()},wn.prototype.findLast=function(n){return this.reverse().find(n);
},wn.prototype.invokeMap=ee(function(n,t){return typeof n=="function"?new wn(this):this.map(function(r){return pt(r,n,t)})}),wn.prototype.reject=function(n){return n=vr(n,3),this.filter(function(t){return!n(t)})},wn.prototype.slice=function(n,t){n=Ae(n);var r=this;return r.__filtered__&&(n>0||0>t)?new wn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==Z&&(t=Ae(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},wn.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},wn.prototype.toArray=function(){
return this.take(4294967295)},it(wn.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=dn[e?"take"+("last"==t?"Right":""):t],o=e||/^find/.test(t);u&&(dn.prototype[t]=function(){function t(n){return n=u.apply(dn,a([n],f)),e&&h?n[0]:n}var i=this.__wrapped__,f=e?[1]:arguments,c=i instanceof wn,l=f[0],s=c||Wo(i);s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false);var h=this.__chain__,p=!!this.__actions__.length,l=o&&!h,c=c&&!p;return!o&&s?(i=c?i:new wn(this),
i=n.apply(i,f),i.__actions__.push({func:Tr,args:[t],thisArg:Z}),new jn(i,h)):l&&c?n.apply(this,f):(i=this.thru(t),l?e?i.value()[0]:i.value():i)})}),e("pop push shift sort splice unshift".split(" "),function(n){var t=Qe[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);dn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),it(wn.prototype,function(n,t){var r=dn[t];if(r){var e=r.name+"";(Fu[e]||(Fu[e]=[])).push({
name:t,func:r})}}),Fu[ur(Z,2).name]=[{name:"wrapper",func:Z}],wn.prototype.clone=function(){var n=new wn(this.__wrapped__);return n.__actions__=Pt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Pt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Pt(this.__views__),n},wn.prototype.reverse=function(){if(this.__filtered__){var n=new wn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},wn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Wo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,c=-1,a=i.length;++c<a;){var l=i[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=Au(n,f+s);break;case"takeRight":f=wu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,c=0,a=Au(n,this.__takeCount__),!e||200>o||o==n&&a==n)return Mt(t,this.__actions__);e=[];n:for(;n--&&a>c;){for(u+=r,o=-1,l=t[u];++o<f;){var h=i[o],s=h.type,h=(0,
h.iteratee)(l);if(2==s)l=h;else if(!h){if(1==s)continue n;break n}}e[c++]=l}return e},dn.prototype.at=_o,dn.prototype.chain=function(){return Pr(this)},dn.prototype.commit=function(){return new jn(this.value(),this.__chain__)},dn.prototype.flatMap=function(n){return this.map(n).flatten()},dn.prototype.next=function(){this.__values__===Z&&(this.__values__=we(this.value()));var n=this.__index__>=this.__values__.length,t=n?Z:this.__values__[this.__index__++];return{done:n,value:t}},dn.prototype.plant=function(n){
for(var t,r=this;r instanceof mn;){var e=zr(r);e.__index__=0,e.__values__=Z,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},dn.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof wn?(this.__actions__.length&&(n=new wn(this)),n=n.reverse(),n.__actions__.push({func:Tr,args:[Zr],thisArg:Z}),new jn(n,this.__chain__)):this.thru(Zr)},dn.prototype.toJSON=dn.prototype.valueOf=dn.prototype.value=function(){return Mt(this.__wrapped__,this.__actions__)},_u&&(dn.prototype[_u]=Kr),
dn}var Z,D=1/0,q=NaN,P=/\b__p\+='';/g,T=/\b(__p\+=)''\+/g,K=/(__e\(.*?\)|\b__t\))\+'';/g,G=/&(?:amp|lt|gt|quot|#39|#96);/g,V=/[&<>"'`]/g,J=RegExp(G.source),Y=RegExp(V.source),H=/<%-([\s\S]+?)%>/g,Q=/<%([\s\S]+?)%>/g,X=/<%=([\s\S]+?)%>/g,nn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tn=/^\w*$/,rn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,en=/[\\^$.*+?()[\]{}|]/g,un=RegExp(en.source),on=/^\s+|\s+$/g,fn=/^\s+/,cn=/\s+$/,an=/\\(\\)?/g,ln=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,sn=/\w*$/,hn=/^0x/i,pn=/^[-+]0x[0-9a-f]+$/i,_n=/^0b[01]+$/i,gn=/^\[object .+?Constructor\]$/,vn=/^0o[0-7]+$/i,dn=/^(?:0|[1-9]\d*)$/,yn=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,bn=/($^)/,xn=/['\n\r\u2028\u2029\\]/g,mn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",jn="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+mn,wn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",An=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]","g"),On=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+wn+mn,"g"),En=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),kn=/[a-zA-Z0-9]+/g,In=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|\\d+",jn].join("|"),"g"),Rn=/[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Sn="Array Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Reflect RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Wn={};
Wn["[object Float32Array]"]=Wn["[object Float64Array]"]=Wn["[object Int8Array]"]=Wn["[object Int16Array]"]=Wn["[object Int32Array]"]=Wn["[object Uint8Array]"]=Wn["[object Uint8ClampedArray]"]=Wn["[object Uint16Array]"]=Wn["[object Uint32Array]"]=true,Wn["[object Arguments]"]=Wn["[object Array]"]=Wn["[object ArrayBuffer]"]=Wn["[object Boolean]"]=Wn["[object Date]"]=Wn["[object Error]"]=Wn["[object Function]"]=Wn["[object Map]"]=Wn["[object Number]"]=Wn["[object Object]"]=Wn["[object RegExp]"]=Wn["[object Set]"]=Wn["[object String]"]=Wn["[object WeakMap]"]=false;
var Cn={};Cn["[object Arguments]"]=Cn["[object Array]"]=Cn["[object ArrayBuffer]"]=Cn["[object Boolean]"]=Cn["[object Date]"]=Cn["[object Float32Array]"]=Cn["[object Float64Array]"]=Cn["[object Int8Array]"]=Cn["[object Int16Array]"]=Cn["[object Int32Array]"]=Cn["[object Map]"]=Cn["[object Number]"]=Cn["[object Object]"]=Cn["[object RegExp]"]=Cn["[object Set]"]=Cn["[object String]"]=Cn["[object Symbol]"]=Cn["[object Uint8Array]"]=Cn["[object Uint8ClampedArray]"]=Cn["[object Uint16Array]"]=Cn["[object Uint32Array]"]=true,
Cn["[object Error]"]=Cn["[object Function]"]=Cn["[object WeakMap]"]=false;var Un={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O",
"\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Bn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},zn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Ln={"function":true,object:true},$n={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"
},Fn=parseFloat,Mn=parseInt,Nn=Ln[typeof exports]&&exports&&!exports.nodeType?exports:null,Zn=Ln[typeof module]&&module&&!module.nodeType?module:null,Dn=E(Ln[typeof self]&&self),qn=E(Ln[typeof window]&&window),Pn=Zn&&Zn.exports===Nn?Nn:null,Tn=E(Ln[typeof this]&&this),Kn=E(Nn&&Zn&&typeof global=="object"&&global)||qn!==(Tn&&Tn.window)&&qn||Dn||Tn||Function("return this")(),Gn=N();(qn||Dn||{})._=Gn,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return Gn}):Nn&&Zn?(Pn&&((Zn.exports=Gn)._=Gn),
Nn._=Gn):Kn._=Gn}).call(this);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJqcXVlcnktbWlncmF0ZS5taW4uanMiLCJwZXJmZWN0LXNjcm9sbGJhci5qcXVlcnkubWluLmpzIiwicmFwaGFlbC1taW4uanMiLCJUd2Vlbi5qcyIsImJ1YmJsZXRyZWUuanMiLCJ3b3JkY2xvdWQyLmpzIiwibG9kYXNoLm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQ0RBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMTNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOXRGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGlicy5taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgalF1ZXJ5IHYyLjIuMCB8IChjKSBqUXVlcnkgRm91bmRhdGlvbiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1hLmRvY3VtZW50LGU9Yy5zbGljZSxmPWMuY29uY2F0LGc9Yy5wdXNoLGg9Yy5pbmRleE9mLGk9e30saj1pLnRvU3RyaW5nLGs9aS5oYXNPd25Qcm9wZXJ0eSxsPXt9LG09XCIyLjIuMFwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZS5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gbi5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmcsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxuLmV4dGVuZD1uLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG4uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihuLmlzUGxhaW5PYmplY3QoZCl8fChlPW4uaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmbi5pc0FycmF5KGMpP2M6W10pOmY9YyYmbi5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1uLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sbi5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1uLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9YSYmYS50b1N0cmluZygpO3JldHVybiFuLmlzQXJyYXkoYSkmJmItcGFyc2VGbG9hdChiKSsxPj0wfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCIhPT1uLnR5cGUoYSl8fGEubm9kZVR5cGV8fG4uaXNXaW5kb3coYSk/ITE6YS5jb25zdHJ1Y3RvciYmIWsuY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIik/ITE6ITB9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/aVtqLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGM9ZXZhbDthPW4udHJpbShhKSxhJiYoMT09PWEuaW5kZXhPZihcInVzZSBzdHJpY3RcIik/KGI9ZC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGIudGV4dD1hLGQuaGVhZC5hcHBlbmRDaGlsZChiKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpKTpjKGEpKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UocCxcIm1zLVwiKS5yZXBsYWNlKHEscil9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MDtpZihzKGEpKXtmb3IoYz1hLmxlbmd0aDtjPmQ7ZCsrKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVha31lbHNlIGZvcihkIGluIGEpaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShvLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHMoT2JqZWN0KGEpKT9uLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmcuY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTpoLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7Yz5kO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2c+ZjtmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxnPTAsaD1bXTtpZihzKGEpKWZvcihkPWEubGVuZ3RoO2Q+ZztnKyspZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7ZWxzZSBmb3IoZyBpbiBhKWU9YihhW2ddLGcsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO3JldHVybiBmLmFwcGx5KFtdLGgpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGY7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksbi5pc0Z1bmN0aW9uKGEpPyhkPWUuY2FsbChhcmd1bWVudHMsMiksZj1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZC5jb25jYXQoZS5jYWxsKGFyZ3VtZW50cykpKX0sZi5ndWlkPWEuZ3VpZD1hLmd1aWR8fG4uZ3VpZCsrLGYpOnZvaWQgMH0sbm93OkRhdGUubm93LHN1cHBvcnQ6bH0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKG4uZm5bU3ltYm9sLml0ZXJhdG9yXT1jW1N5bWJvbC5pdGVyYXRvcl0pLG4uZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aVtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj0hIWEmJlwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPW4udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxuLmlzV2luZG93KGEpPyExOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWdhKCksej1nYSgpLEE9Z2EoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz0xPDwzMSxEPXt9Lmhhc093blByb3BlcnR5LEU9W10sRj1FLnBvcCxHPUUucHVzaCxIPUUucHVzaCxJPUUuc2xpY2UsSj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSz1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTD1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTT1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLE49XCJcXFxcW1wiK0wrXCIqKFwiK00rXCIpKD86XCIrTCtcIiooWypeJHwhfl0/PSlcIitMK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTStcIikpfClcIitMK1wiKlxcXFxdXCIsTz1cIjooXCIrTStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTitcIikqKXwuKilcXFxcKXwpXCIsUD1uZXcgUmVnRXhwKEwrXCIrXCIsXCJnXCIpLFE9bmV3IFJlZ0V4cChcIl5cIitMK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitMK1wiKyRcIixcImdcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqLFwiK0wrXCIqXCIpLFM9bmV3IFJlZ0V4cChcIl5cIitMK1wiKihbPit+XXxcIitMK1wiKVwiK0wrXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIj1cIitMK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTCtcIipcXFxcXVwiLFwiZ1wiKSxVPW5ldyBSZWdFeHAoTyksVj1uZXcgUmVnRXhwKFwiXlwiK00rXCIkXCIpLFc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitNK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK00rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitNK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK04pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK08pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0wrXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitMK1wiKig/OihbKy1dfClcIitMK1wiKihcXFxcZCspfCkpXCIrTCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitLK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFk9L15oXFxkJC9pLFo9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LywkPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLF89L1srfl0vLGFhPS8nfFxcXFwvZyxiYT1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTCtcIj98KFwiK0wrXCIpfC4pXCIsXCJpZ1wiKSxjYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6MD5kP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxkYT1mdW5jdGlvbigpe20oKX07dHJ5e0guYXBwbHkoRT1JLmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLEVbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZWEpe0g9e2FwcGx5OkUubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ry5hcHBseShhLEkuY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGZhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHMsdz1iJiZiLm93bmVyRG9jdW1lbnQseD1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXgmJjkhPT14JiYxMSE9PXgpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT14JiYobz0kLmV4ZWMoYSkpKWlmKGY9b1sxXSl7aWYoOT09PXgpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZih3JiYoaj13LmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihvWzJdKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1vWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09eCl3PWIscz1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYWEsXCJcXFxcJCZcIik6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGs9dSkscj1nKGEpLGg9ci5sZW5ndGgsbD1WLnRlc3Qoayk/XCIjXCIrazpcIltpZD0nXCIraytcIiddXCI7d2hpbGUoaC0tKXJbaF09bCtcIiBcIitxYShyW2hdKTtzPXIuam9pbihcIixcIiksdz1fLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGJ9aWYocyl0cnl7cmV0dXJuIEguYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwocykpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7az09PXUmJmIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUSxcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBnYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGhhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gaWEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiYofmIuc291cmNlSW5kZXh8fEMpLSh+YS5zb3VyY2VJbmRleHx8Qyk7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIGxhKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gaGEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaGEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1mYS5zdXBwb3J0PXt9LGY9ZmEuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBiP1wiSFRNTFwiIT09Yi5ub2RlTmFtZTohMX0sbT1mYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89bi5kb2N1bWVudEVsZW1lbnQscD0hZihuKSwoZT1uLmRlZmF1bHRWaWV3KSYmZS50b3AhPT1lJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGRhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixkYSkpLGMuYXR0cmlidXRlcz1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Wi50ZXN0KG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIW4uZ2V0RWxlbWVudHNCeU5hbWV8fCFuLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGM/W2NdOltdfX0sZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0pOihkZWxldGUgZC5maW5kLklELGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwP2IuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKTp2b2lkIDB9LHI9W10scT1bXSwoYy5xc2E9Wi50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoaWEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0wrXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0wrXCIqKD86dmFsdWV8XCIrSytcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxpYShmdW5jdGlvbihhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrTCtcIipbKl4kfCF+XT89XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPVoudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmaWEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcImRpdlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE8pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9Wi50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8Wi50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0ooayxhKS1KKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SihrLGEpLUooayxiKTowO2lmKGU9PT1mKXJldHVybiBrYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/a2EoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGZhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZmEoYSxudWxsLG51bGwsYil9LGZhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShULFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZmEoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZmEuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxmYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmRC5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZmEuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGZhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1mYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWZhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmhhLG1hdGNoOlcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoYmEsY2EpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoYmEsY2EpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGZhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmZhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBXLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVS50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitMK1wiKVwiK2ErXCIoXCIrTCtcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWZhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOmI/KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoUCxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09Yj9lPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaCx0PSExO2lmKHEpe2lmKGYpe3doaWxlKHApe209Yjt3aGlsZShtPW1bcF0paWYoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe209cSxsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uJiZqWzJdLG09biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKDE9PT1tLm5vZGVUeXBlJiYrK3QmJm09PT1iKXtrW2FdPVt3LG4sdF07YnJlYWt9fWVsc2UgaWYocyYmKG09YixsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uKSx0PT09ITEpd2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSkmJisrdCYmKHMmJihsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxrW2FdPVt3LHRdKSxtPT09YikpYnJlYWs7cmV0dXJuIHQtPWUsdD09PWR8fHQlZD09PTAmJnQvZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGZhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2hhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1KKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmhhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShRLFwiJDFcIikpO3JldHVybiBkW3VdP2hhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBmYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShiYSxjYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIFYudGVzdChhfHxcIlwiKXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShiYSxjYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBZLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBYLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6bmEoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0Om5hKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpuYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuWzA+Yz9jK2I6Y119KSxldmVuOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6bmEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bGEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bWEoYik7ZnVuY3Rpb24gcGEoKXt9cGEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyBwYSxnPWZhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7KCFjfHwoZT1SLmV4ZWMoaCkpKSYmKGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9Uy5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShRLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1XW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/ZmEuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBxYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtjPmI7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gcmEoYSxiLGMpe3ZhciBkPWIuZGlyLGU9YyYmXCJwYXJlbnROb2RlXCI9PT1kLGY9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxmKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpcmV0dXJuIGEoYixjLGYpfTpmdW5jdGlvbihiLGMsZyl7dmFyIGgsaSxqLGs9W3csZl07aWYoZyl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZSkmJmEoYixjLGcpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXtpZihqPWJbdV18fChiW3VdPXt9KSxpPWpbYi51bmlxdWVJRF18fChqW2IudW5pcXVlSURdPXt9KSwoaD1pW2RdKSYmaFswXT09PXcmJmhbMV09PT1mKXJldHVybiBrWzJdPWhbMl07aWYoaVtkXT1rLGtbMl09YShiLGMsZykpcmV0dXJuITB9fX1mdW5jdGlvbiBzYShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB0YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKWZhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB1YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtpPmg7aCsrKShmPWFbaF0pJiYoIWN8fGMoZixkLGUpKSYmKGcucHVzaChmKSxqJiZiLnB1c2goaCkpO3JldHVybiBnfWZ1bmN0aW9uIHZhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXZhKGQpKSxlJiYhZVt1XSYmKGU9dmEoZSxmKSksaGEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dGEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp1YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9dWEocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0ooZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXVhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpILmFwcGx5KGcscil9KX1mdW5jdGlvbiB3YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9cmEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBKKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtmPmk7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3JhKHNhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2Y+ZTtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB2YShpPjEmJnNhKG0pLGk+MSYmcWEoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShRLFwiJDFcIiksYyxlPmkmJndhKGEuc2xpY2UoaSxlKSksZj5lJiZ3YShhPWEuc2xpY2UoZSkpLGY+ZSYmcWEoYSkpfW0ucHVzaChjKX1yZXR1cm4gc2EobSl9ZnVuY3Rpb24geGEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbyxxLHI9MCxzPVwiMFwiLHQ9ZiYmW10sdT1bXSx2PWoseD1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHk9dys9bnVsbD09dj8xOk1hdGgucmFuZG9tKCl8fC4xLHo9eC5sZW5ndGg7Zm9yKGsmJihqPWc9PT1ufHxnfHxrKTtzIT09eiYmbnVsbCE9KGw9eFtzXSk7cysrKXtpZihlJiZsKXtvPTAsZ3x8bC5vd25lckRvY3VtZW50PT09bnx8KG0obCksaD0hcCk7d2hpbGUocT1hW28rK10paWYocShsLGd8fG4saCkpe2kucHVzaChsKTticmVha31rJiYodz15KX1jJiYoKGw9IXEmJmwpJiZyLS0sZiYmdC5wdXNoKGwpKX1pZihyKz1zLGMmJnMhPT1yKXtvPTA7d2hpbGUocT1iW28rK10pcSh0LHUsZyxoKTtpZihmKXtpZihyPjApd2hpbGUocy0tKXRbc118fHVbc118fCh1W3NdPUYuY2FsbChpKSk7dT11YSh1KX1ILmFwcGx5KGksdSksayYmIWYmJnUubGVuZ3RoPjAmJnIrYi5sZW5ndGg+MSYmZmEudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9eSxqPXYpLHR9O3JldHVybiBjP2hhKGYpOmZ9cmV0dXJuIGg9ZmEuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9d2EoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHhhKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1mYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGUsZil7dmFyIGksaixrLGwsbSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbz0hZiYmZyhhPW4uc2VsZWN0b3J8fGEpO2lmKGU9ZXx8W10sMT09PW8ubGVuZ3RoKXtpZihqPW9bMF09b1swXS5zbGljZSgwKSxqLmxlbmd0aD4yJiZcIklEXCI9PT0oaz1qWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2pbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVcubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKGJhLGNhKSxfLnRlc3QoalswXS50eXBlKSYmb2EoYi5wYXJlbnROb2RlKXx8YikpKXtpZihqLnNwbGljZShpLDEpLGE9Zi5sZW5ndGgmJnFhKGopLCFhKXJldHVybiBILmFwcGx5KGUsZiksZTticmVha319fXJldHVybihufHxoKGEsbykpKGYsYiwhcCxlLCFifHxfLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpLGV9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8amEoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjP3ZvaWQgMDphLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxqYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjfHxcImlucHV0XCIhPT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/dm9pZCAwOmEuZGVmYXVsdFZhbHVlfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8amEoSyxmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGM/dm9pZCAwOmFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZmF9KGEpO24uZmluZD10LG4uZXhwcj10LnNlbGVjdG9ycyxuLmV4cHJbXCI6XCJdPW4uZXhwci5wc2V1ZG9zLG4udW5pcXVlU29ydD1uLnVuaXF1ZT10LnVuaXF1ZVNvcnQsbi50ZXh0PXQuZ2V0VGV4dCxuLmlzWE1MRG9jPXQuaXNYTUwsbi5jb250YWlucz10LmNvbnRhaW5zO3ZhciB1PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZuKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sdj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sdz1uLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHg9L148KFtcXHctXSspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHk9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIHooYSxiLGMpe2lmKG4uaXNGdW5jdGlvbihiKSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih5LnRlc3QoYikpcmV0dXJuIG4uZmlsdGVyKGIsYSxjKTtiPW4uZmlsdGVyKGIsYSl9cmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBoLmNhbGwoYixhKT4tMSE9PWN9KX1uLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/bi5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpuLmZpbmQubWF0Y2hlcyhhLG4uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sbi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmxlbmd0aCxkPVtdLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2M+YjtiKyspaWYobi5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7Yz5iO2IrKyluLmZpbmQoYSxlW2JdLGQpO3JldHVybiBkPXRoaXMucHVzaFN0YWNrKGM+MT9uLnVuaXF1ZShkKTpkKSxkLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsZH0sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISF6KHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJncudGVzdChhKT9uKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEEsQj0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxDPW4uZm4uaW5pdD1mdW5jdGlvbihhLGIsYyl7dmFyIGUsZjtpZighYSlyZXR1cm4gdGhpcztpZihjPWN8fEEsXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGU9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Qi5leGVjKGEpLCFlfHwhZVsxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fGMpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGVbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChlWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmQsITApKSx4LnRlc3QoZVsxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoZSBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2VdKT90aGlzW2VdKGJbZV0pOnRoaXMuYXR0cihlLGJbZV0pO3JldHVybiB0aGlzfXJldHVybiBmPWQuZ2V0RWxlbWVudEJ5SWQoZVsyXSksZiYmZi5wYXJlbnROb2RlJiYodGhpcy5sZW5ndGg9MSx0aGlzWzBdPWYpLHRoaXMuY29udGV4dD1kLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtDLnByb3RvdHlwZT1uLmZuLEE9bihkKTt2YXIgRD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxFPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9bihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7Yz5hO2ErKylpZihuLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9dy50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWVTb3J0KGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9oLmNhbGwobihhKSx0aGlzWzBdKTpoLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4udW5pcXVlU29ydChuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBGKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiB2KChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gdihhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fG4ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW4ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW4uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihFW2FdfHxuLnVuaXF1ZVNvcnQoZSksRC50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEc9L1xcUysvZztmdW5jdGlvbiBIKGEpe3ZhciBiPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChHKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0goYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXtuLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1uLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksaD49YyYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxjfHwoZj1jPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhZX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxnLnB1c2goYyksYnx8aSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGouZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGp9LG4uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG4uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG4uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bi5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1uLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLnByb2dyZXNzKGMubm90aWZ5KS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9uLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG4uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWUuY2FsbChhcmd1bWVudHMpLGQ9Yy5sZW5ndGgsZj0xIT09ZHx8YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZDowLGc9MT09PWY/YTpuLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9lLmNhbGwoYXJndW1lbnRzKTpkLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZD4xKWZvcihpPW5ldyBBcnJheShkKSxqPW5ldyBBcnJheShkKSxrPW5ldyBBcnJheShkKTtkPmI7YisrKWNbYl0mJm4uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLnByb2dyZXNzKGgoYixqLGkpKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSTtuLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBuLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG4uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP24ucmVhZHlXYWl0Kys6bi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1uLnJlYWR5V2FpdDpuLmlzUmVhZHkpfHwobi5pc1JlYWR5PSEwLGEhPT0hMCYmLS1uLnJlYWR5V2FpdD4wfHwoSS5yZXNvbHZlV2l0aChkLFtuXSksbi5mbi50cmlnZ2VySGFuZGxlciYmKG4oZCkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxuKGQpLm9mZihcInJlYWR5XCIpKSkpfX0pO2Z1bmN0aW9uIEooKXtkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEopLG4ucmVhZHkoKX1uLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7cmV0dXJuIEl8fChJPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/YS5zZXRUaW1lb3V0KG4ucmVhZHkpOihkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEopKSksSS5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgSz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylLKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LEw9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBNKCl7dGhpcy5leHBhbmRvPW4uZXhwYW5kbytNLnVpZCsrfU0udWlkPTEsTS5wcm90b3R5cGU9e3JlZ2lzdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8e307cmV0dXJuIGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWM6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpjLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGFbdGhpcy5leHBhbmRvXX0sY2FjaGU6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpcmV0dXJue307dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiBifHwoYj17fSxMKGEpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YjpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSkpKSxifSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5jYWNoZShhKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYillW2JdPWM7ZWxzZSBmb3IoZCBpbiBiKWVbZF09YltkXTtyZXR1cm4gZX0sZ2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHZvaWQgMD09PWI/dGhpcy5jYWNoZShhKTphW3RoaXMuZXhwYW5kb10mJmFbdGhpcy5leHBhbmRvXVtiXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/KGQ9dGhpcy5nZXQoYSxiKSx2b2lkIDAhPT1kP2Q6dGhpcy5nZXQoYSxuLmNhbWVsQ2FzZShiKSkpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1hW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09Zil7aWYodm9pZCAwPT09Yil0aGlzLnJlZ2lzdGVyKGEpO2Vsc2V7bi5pc0FycmF5KGIpP2Q9Yi5jb25jYXQoYi5tYXAobi5jYW1lbENhc2UpKTooZT1uLmNhbWVsQ2FzZShiKSxiIGluIGY/ZD1bYixlXTooZD1lLGQ9ZCBpbiBmP1tkXTpkLm1hdGNoKEcpfHxbXSkpLGM9ZC5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBmW2RbY11dfSh2b2lkIDA9PT1ifHxuLmlzRW1wdHlPYmplY3QoZikpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFuLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgTj1uZXcgTSxPPW5ldyBNLFA9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFE9L1tBLVpdL2c7ZnVuY3Rpb24gUihhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKFEsXCItJCZcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpQLnRlc3QoYyk/bi5wYXJzZUpTT04oYyk6Y31jYXRjaChlKXt9Ty5zZXQoYSxiLGMpO1xufWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9bi5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIE8uaGFzRGF0YShhKXx8Ti5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTy5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ty5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBOLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ti5yZW1vdmUoYSxiKX19KSxuLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPU8uZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhTi5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPW4uY2FtZWxDYXNlKGQuc2xpY2UoNSkpLFIoZixkLGVbZF0pKSk7Ti5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtPLnNldCh0aGlzLGEpfSk6Syh0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1PLmdldChmLGEpfHxPLmdldChmLGEucmVwbGFjZShRLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCkpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoZD1uLmNhbWVsQ2FzZShhKSxjPU8uZ2V0KGYsZCksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVIoZixkLHZvaWQgMCksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIGQ9bi5jYW1lbENhc2UoYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9Ty5nZXQodGhpcyxkKTtPLnNldCh0aGlzLGQsYiksYS5pbmRleE9mKFwiLVwiKT4tMSYmdm9pZCAwIT09YyYmTy5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe08ucmVtb3ZlKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPU4uZ2V0KGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1OLmFjY2VzcyhhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBOLmdldChhLGMpfHxOLmFjY2VzcyhhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Ti5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Ti5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgUz0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsVD1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitTK1wiKShbYS16JV0qKSRcIixcImlcIiksVT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sVj1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1uLmNzcyhhLFwiZGlzcGxheVwiKXx8IW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfTtmdW5jdGlvbiBXKGEsYixjLGQpe3ZhciBlLGY9MSxnPTIwLGg9ZD9mdW5jdGlvbigpe3JldHVybiBkLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBuLmNzcyhhLGIsXCJcIil9LGk9aCgpLGo9YyYmY1szXXx8KG4uY3NzTnVtYmVyW2JdP1wiXCI6XCJweFwiKSxrPShuLmNzc051bWJlcltiXXx8XCJweFwiIT09aiYmK2kpJiZULmV4ZWMobi5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixuLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBYPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLFk9LzwoW1xcdzotXSspLyxaPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksJD17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19OyQub3B0Z3JvdXA9JC5vcHRpb24sJC50Ym9keT0kLnRmb290PSQuY29sZ3JvdXA9JC5jYXB0aW9uPSQudGhlYWQsJC50aD0kLnRkO2Z1bmN0aW9uIF8oYSxiKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W107cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIGFhKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKU4uc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fE4uZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX12YXIgYmE9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIGNhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGcsaCxpLGosayxsPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG09W10sbz0wLHA9YS5sZW5ndGg7cD5vO28rKylpZihmPWFbb10sZnx8MD09PWYpaWYoXCJvYmplY3RcIj09PW4udHlwZShmKSluLm1lcmdlKG0sZi5ub2RlVHlwZT9bZl06Zik7ZWxzZSBpZihiYS50ZXN0KGYpKXtnPWd8fGwuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxoPShZLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9JFtoXXx8JC5fZGVmYXVsdCxnLmlubmVySFRNTD1pWzFdK24uaHRtbFByZWZpbHRlcihmKStpWzJdLGs9aVswXTt3aGlsZShrLS0pZz1nLmxhc3RDaGlsZDtuLm1lcmdlKG0sZy5jaGlsZE5vZGVzKSxnPWwuZmlyc3RDaGlsZCxnLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBtLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShmKSk7bC50ZXh0Q29udGVudD1cIlwiLG89MDt3aGlsZShmPW1bbysrXSlpZihkJiZuLmluQXJyYXkoZixkKT4tMSllJiZlLnB1c2goZik7ZWxzZSBpZihqPW4uY29udGFpbnMoZi5vd25lckRvY3VtZW50LGYpLGc9XyhsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJmFhKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlaLnRlc3QoZi50eXBlfHxcIlwiKSYmYy5wdXNoKGYpfXJldHVybiBsfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksbC5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGwubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgZGE9L15rZXkvLGVhPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxmYT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIGdhKCl7cmV0dXJuITB9ZnVuY3Rpb24gaGEoKXtyZXR1cm4hMX1mdW5jdGlvbiBpYSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24gamEoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKWphKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9aGE7ZWxzZSBpZighZSlyZXR1cm4gdGhpcztyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gbigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1uLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe24uZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU4uZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgbiYmbi5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/bi5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goRyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPWZhLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxrPW4uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0sZiksKG09aVtvXSl8fChtPWlbb109W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxwLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG8sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxuLmV2ZW50Lmdsb2JhbFtvXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9Ti5oYXNEYXRhKGEpJiZOLmdldChhKTtpZihyJiYoaT1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1mYS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJk4ucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1uLmV2ZW50LmZpeChhKTt2YXIgYixjLGQsZixnLGg9W10saT1lLmNhbGwoYXJndW1lbnRzKSxqPShOLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSghYS5ybmFtZXNwYWNlfHxhLnJuYW1lc3BhY2UudGVzdChnLm5hbWVzcGFjZSkpJiYoYS5oYW5kbGVPYmo9ZyxhLmRhdGE9Zy5kYXRhLGQ9KChuLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWQmJihhLnJlc3VsdD1kKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJihcImNsaWNrXCIhPT1hLnR5cGV8fGlzTmFOKGEuYnV0dG9uKXx8YS5idXR0b248MSkpZm9yKDtpIT09dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZigxPT09aS5ub2RlVHlwZSYmKGkuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09YS50eXBlKSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+LTE6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZGV0YWlsIGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1hLndoaWNoJiYoYS53aGljaD1udWxsIT1iLmNoYXJDb2RlP2IuY2hhckNvZGU6Yi5rZXlDb2RlKSxhfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGc9Yi5idXR0b247cmV0dXJuIG51bGw9PWEucGFnZVgmJm51bGwhPWIuY2xpZW50WCYmKGM9YS50YXJnZXQub3duZXJEb2N1bWVudHx8ZCxlPWMuZG9jdW1lbnRFbGVtZW50LGY9Yy5ib2R5LGEucGFnZVg9Yi5jbGllbnRYKyhlJiZlLnNjcm9sbExlZnR8fGYmJmYuc2Nyb2xsTGVmdHx8MCktKGUmJmUuY2xpZW50TGVmdHx8ZiYmZi5jbGllbnRMZWZ0fHwwKSxhLnBhZ2VZPWIuY2xpZW50WSsoZSYmZS5zY3JvbGxUb3B8fGYmJmYuc2Nyb2xsVG9wfHwwKS0oZSYmZS5jbGllbnRUb3B8fGYmJmYuY2xpZW50VG9wfHwwKSksYS53aGljaHx8dm9pZCAwPT09Z3x8KGEud2hpY2g9MSZnPzE6MiZnPzM6NCZnPzI6MCksYX19LGZpeDpmdW5jdGlvbihhKXtpZihhW24uZXhwYW5kb10pcmV0dXJuIGE7dmFyIGIsYyxlLGY9YS50eXBlLGc9YSxoPXRoaXMuZml4SG9va3NbZl07aHx8KHRoaXMuZml4SG9va3NbZl09aD1lYS50ZXN0KGYpP3RoaXMubW91c2VIb29rczpkYS50ZXN0KGYpP3RoaXMua2V5SG9va3M6e30pLGU9aC5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChoLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZyksYj1lLmxlbmd0aDt3aGlsZShiLS0pYz1lW2JdLGFbY109Z1tjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1kKSwzPT09YS50YXJnZXQubm9kZVR5cGUmJihhLnRhcmdldD1hLnRhcmdldC5wYXJlbnROb2RlKSxoLmZpbHRlcj9oLmZpbHRlcihhLGcpOmF9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzIT09aWEoKSYmdGhpcy5mb2N1cz8odGhpcy5mb2N1cygpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09aWEoKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVyblwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIik/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fX0sbi5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX0sbi5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbi5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/Z2E6aGEpOnRoaXMudHlwZT1hLGImJm4uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG4ubm93KCksdm9pZCh0aGlzW24uZXhwYW5kb109ITApKTpuZXcgbi5FdmVudChhLGIpfSxuLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6bi5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6aGEsaXNQcm9wYWdhdGlvblN0b3BwZWQ6aGEsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6aGEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9Z2EsYSYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1nYSxhJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1nYSxhJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxuLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtuLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybighZXx8ZSE9PWQmJiFuLmNvbnRhaW5zKGQsZSkpJiYoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxuLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGphKHRoaXMsYSxiLGMsZCl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gamEodGhpcyxhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4oYj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiKSYmKGM9YixiPXZvaWQgMCksYz09PSExJiYoYz1oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX19KTt2YXIga2E9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzotXSspW14+XSopXFwvPi9naSxsYT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxtYT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLG5hPS9edHJ1ZVxcLyguKikvLG9hPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBwYShhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGE6YX1mdW5jdGlvbiBxYShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiByYShhKXt2YXIgYj1uYS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gc2EoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihOLmhhc0RhdGEoYSkmJihmPU4uYWNjZXNzKGEpLGc9Ti5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2Q+YztjKyspbi5ldmVudC5hZGQoYixlLGpbZV1bY10pfU8uaGFzRGF0YShhKSYmKGg9Ty5hY2Nlc3MoYSksaT1uLmV4dGVuZCh7fSxoKSxPLnNldChiLGkpKX19ZnVuY3Rpb24gdGEoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmWC50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDooXCJpbnB1dFwiPT09Y3x8XCJ0ZXh0YXJlYVwiPT09YykmJihiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gdWEoYSxiLGMsZCl7Yj1mLmFwcGx5KFtdLGIpO3ZhciBlLGcsaCxpLGosayxtPTAsbz1hLmxlbmd0aCxwPW8tMSxxPWJbMF0scj1uLmlzRnVuY3Rpb24ocSk7aWYocnx8bz4xJiZcInN0cmluZ1wiPT10eXBlb2YgcSYmIWwuY2hlY2tDbG9uZSYmbWEudGVzdChxKSlyZXR1cm4gYS5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBmPWEuZXEoZSk7ciYmKGJbMF09cS5jYWxsKHRoaXMsZSxmLmh0bWwoKSkpLHVhKGYsYixjLGQpfSk7aWYobyYmKGU9Y2EoYixhWzBdLm93bmVyRG9jdW1lbnQsITEsYSxkKSxnPWUuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9ZyksZ3x8ZCkpe2ZvcihoPW4ubWFwKF8oZSxcInNjcmlwdFwiKSxxYSksaT1oLmxlbmd0aDtvPm07bSsrKWo9ZSxtIT09cCYmKGo9bi5jbG9uZShqLCEwLCEwKSxpJiZuLm1lcmdlKGgsXyhqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbV0saixtKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChoLHJhKSxtPTA7aT5tO20rKylqPWhbbV0sWi50ZXN0KGoudHlwZXx8XCJcIikmJiFOLmFjY2VzcyhqLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhrLGopJiYoai5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChqLnNyYyk6bi5nbG9iYWxFdmFsKGoudGV4dENvbnRlbnQucmVwbGFjZShvYSxcIlwiKSkpfXJldHVybiBhfWZ1bmN0aW9uIHZhKGEsYixjKXtmb3IodmFyIGQsZT1iP24uZmlsdGVyKGIsYSk6YSxmPTA7bnVsbCE9KGQ9ZVtmXSk7ZisrKWN8fDEhPT1kLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShfKGQpKSxkLnBhcmVudE5vZGUmJihjJiZuLmNvbnRhaW5zKGQub3duZXJEb2N1bWVudCxkKSYmYWEoXyhkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfW4uZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2Uoa2EsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEobC5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9XyhoKSxmPV8oYSksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKyl0YShmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxfKGEpLGc9Z3x8XyhoKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXNhKGZbZF0sZ1tkXSk7ZWxzZSBzYShhLGgpO3JldHVybiBnPV8oaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZhYShnLCFpJiZfKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9bi5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoTChjKSl7aWYoYj1jW04uZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tOLmV4cGFuZG9dPXZvaWQgMH1jW08uZXhwYW5kb10mJihjW08uZXhwYW5kb109dm9pZCAwKX19fSksbi5mbi5leHRlbmQoe2RvbU1hbmlwOnVhLGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdmEodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiB2YSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmKHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPXBhKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9cGEodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKTE9PT1hLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEoXyhhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsPT1hPyExOmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBuLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhbGEudGVzdChhKSYmISRbKFkuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXthPW4uaHRtbFByZWZpbHRlcihhKTt0cnl7Zm9yKDtkPmM7YysrKWI9dGhpc1tjXXx8e30sMT09PWIubm9kZVR5cGUmJihuLmNsZWFuRGF0YShfKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtuLmluQXJyYXkodGhpcyxhKTwwJiYobi5jbGVhbkRhdGEoXyh0aGlzKSksYyYmYy5yZXBsYWNlQ2hpbGQoYix0aGlzKSl9LGEpfX0pLG4uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1uKGEpLGY9ZS5sZW5ndGgtMSxoPTA7Zj49aDtoKyspYz1oPT09Zj90aGlzOnRoaXMuY2xvbmUoITApLG4oZVtoXSlbYl0oYyksZy5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KTt2YXIgd2EseGE9e0hUTUw6XCJibG9ja1wiLEJPRFk6XCJibG9ja1wifTtmdW5jdGlvbiB5YShhLGIpe3ZhciBjPW4oYi5jcmVhdGVFbGVtZW50KGEpKS5hcHBlbmRUbyhiLmJvZHkpLGQ9bi5jc3MoY1swXSxcImRpc3BsYXlcIik7cmV0dXJuIGMuZGV0YWNoKCksZH1mdW5jdGlvbiB6YShhKXt2YXIgYj1kLGM9eGFbYV07cmV0dXJuIGN8fChjPXlhKGEsYiksXCJub25lXCIhPT1jJiZjfHwod2E9KHdhfHxuKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKSkuYXBwZW5kVG8oYi5kb2N1bWVudEVsZW1lbnQpLGI9d2FbMF0uY29udGVudERvY3VtZW50LGIud3JpdGUoKSxiLmNsb3NlKCksYz15YShhLGIpLHdhLmRldGFjaCgpKSx4YVthXT1jKSxjfXZhciBBYT0vXm1hcmdpbi8sQmE9bmV3IFJlZ0V4cChcIl4oXCIrUytcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxDYT1mdW5jdGlvbihiKXt2YXIgYz1iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIGMub3BlbmVyfHwoYz1hKSxjLmdldENvbXB1dGVkU3R5bGUoYil9LERhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfSxFYT1kLmRvY3VtZW50RWxlbWVudDshZnVuY3Rpb24oKXt2YXIgYixjLGUsZixnPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxoPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihoLnN0eWxlKXtoLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixoLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixsLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1oLnN0eWxlLmJhY2tncm91bmRDbGlwLGcuc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjhweDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7cGFkZGluZzowO21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCIsZy5hcHBlbmRDaGlsZChoKTtmdW5jdGlvbiBpKCl7aC5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt0b3A6MSU7d2lkdGg6NTAlXCIsaC5pbm5lckhUTUw9XCJcIixFYS5hcHBlbmRDaGlsZChnKTt2YXIgZD1hLmdldENvbXB1dGVkU3R5bGUoaCk7Yj1cIjElXCIhPT1kLnRvcCxmPVwiMnB4XCI9PT1kLm1hcmdpbkxlZnQsYz1cIjRweFwiPT09ZC53aWR0aCxoLnN0eWxlLm1hcmdpblJpZ2h0PVwiNTAlXCIsZT1cIjRweFwiPT09ZC5tYXJnaW5SaWdodCxFYS5yZW1vdmVDaGlsZChnKX1uLmV4dGVuZChsLHtwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGkoKSxifSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZpKCksY30scGl4ZWxNYXJnaW5SaWdodDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZpKCksZX0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxmfSxyZWxpYWJsZU1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7dmFyIGIsYz1oLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7cmV0dXJuIGMuc3R5bGUuY3NzVGV4dD1oLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MFwiLGMuc3R5bGUubWFyZ2luUmlnaHQ9Yy5zdHlsZS53aWR0aD1cIjBcIixoLnN0eWxlLndpZHRoPVwiMXB4XCIsRWEuYXBwZW5kQ2hpbGQoZyksYj0hcGFyc2VGbG9hdChhLmdldENvbXB1dGVkU3R5bGUoYykubWFyZ2luUmlnaHQpLEVhLnJlbW92ZUNoaWxkKGcpLGgucmVtb3ZlQ2hpbGQoYyksYn19KX19KCk7ZnVuY3Rpb24gRmEoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxDYShhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0sXCJcIiE9PWd8fG4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1uLnN0eWxlKGEsYikpLCFsLnBpeGVsTWFyZ2luUmlnaHQoKSYmQmEudGVzdChnKSYmQWEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiBHYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgSGE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLElhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxKYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LEthPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXSxMYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gTWEoYSl7aWYoYSBpbiBMYSlyZXR1cm4gYTt2YXIgYj1hWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPUthLmxlbmd0aDt3aGlsZShjLS0paWYoYT1LYVtjXStiLGEgaW4gTGEpcmV0dXJuIGF9ZnVuY3Rpb24gTmEoYSxiLGMpe3ZhciBkPVQuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMl0tKGN8fDApKSsoZFszXXx8XCJweFwiKTpifWZ1bmN0aW9uIE9hKGEsYixjLGQsZSl7Zm9yKHZhciBmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowLGc9MDs0PmY7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPW4uY3NzKGEsYytVW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1uLmNzcyhhLFwicGFkZGluZ1wiK1VbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09bi5jc3MoYSxcImJvcmRlclwiK1VbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPW4uY3NzKGEsXCJwYWRkaW5nXCIrVVtmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1uLmNzcyhhLFwiYm9yZGVyXCIrVVtmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiBQYShiLGMsZSl7dmFyIGY9ITAsZz1cIndpZHRoXCI9PT1jP2Iub2Zmc2V0V2lkdGg6Yi5vZmZzZXRIZWlnaHQsaD1DYShiKSxpPVwiYm9yZGVyLWJveFwiPT09bi5jc3MoYixcImJveFNpemluZ1wiLCExLGgpO2lmKGQubXNGdWxsc2NyZWVuRWxlbWVudCYmYS50b3AhPT1hJiZiLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoZz1NYXRoLnJvdW5kKDEwMCpiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2NdKSksMD49Z3x8bnVsbD09Zyl7aWYoZz1GYShiLGMsaCksKDA+Z3x8bnVsbD09ZykmJihnPWIuc3R5bGVbY10pLEJhLnRlc3QoZykpcmV0dXJuIGc7Zj1pJiYobC5ib3hTaXppbmdSZWxpYWJsZSgpfHxnPT09Yi5zdHlsZVtjXSksZz1wYXJzZUZsb2F0KGcpfHwwfXJldHVybiBnK09hKGIsYyxlfHwoaT9cImJvcmRlclwiOlwiY29udGVudFwiKSxmLGgpK1wicHhcIn1mdW5jdGlvbiBRYShhLGIpe2Zvcih2YXIgYyxkLGUsZj1bXSxnPTAsaD1hLmxlbmd0aDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoZltnXT1OLmdldChkLFwib2xkZGlzcGxheVwiKSxjPWQuc3R5bGUuZGlzcGxheSxiPyhmW2ddfHxcIm5vbmVcIiE9PWN8fChkLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmVihkKSYmKGZbZ109Ti5hY2Nlc3MoZCxcIm9sZGRpc3BsYXlcIix6YShkLm5vZGVOYW1lKSkpKTooZT1WKGQpLFwibm9uZVwiPT09YyYmZXx8Ti5zZXQoZCxcIm9sZGRpc3BsYXlcIixlP2M6bi5jc3MoZCxcImRpc3BsYXlcIikpKSk7Zm9yKGc9MDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoYiYmXCJub25lXCIhPT1kLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1kLnN0eWxlLmRpc3BsYXl8fChkLnN0eWxlLmRpc3BsYXk9Yj9mW2ddfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGF9bi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz1GYShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6XCJjc3NGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpLGk9YS5zdHlsZTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1NYShoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLHZvaWQgMD09PWM/ZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6aVtiXTooZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9VC5leGVjKGMpKSYmZVsxXSYmKGM9VyhhLGIsZSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCI9PT1mJiYoYys9ZSYmZVszXXx8KG4uY3NzTnVtYmVyW2hdP1wiXCI6XCJweFwiKSksbC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaVtiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1NYShoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT1GYShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIEphJiYoZT1KYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fGlzRmluaXRlKGYpP2Z8fDA6ZSk6ZX19KSxuLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGM/SGEudGVzdChuLmNzcyhhLFwiZGlzcGxheVwiKSkmJjA9PT1hLm9mZnNldFdpZHRoP0RhKGEsSWEsZnVuY3Rpb24oKXtyZXR1cm4gUGEoYSxiLGQpfSk6UGEoYSxiLGQpOnZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmPWQmJkNhKGEpLGc9ZCYmT2EoYSxiLGQsXCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZiksZik7cmV0dXJuIGcmJihlPVQuZXhlYyhjKSkmJlwicHhcIiE9PShlWzNdfHxcInB4XCIpJiYoYS5zdHlsZVtiXT1jLGM9bi5jc3MoYSxiKSksTmEoYSxjLGcpfX19KSxuLmNzc0hvb2tzLm1hcmdpbkxlZnQ9R2EobC5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj8ocGFyc2VGbG9hdChGYShhLFwibWFyZ2luTGVmdFwiKSl8fGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1EYShhLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCI6dm9pZCAwfSksbi5jc3NIb29rcy5tYXJnaW5SaWdodD1HYShsLnJlbGlhYmxlTWFyZ2luUmlnaHQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9EYShhLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LEZhLFthLFwibWFyZ2luUmlnaHRcIl0pOnZvaWQgMH0pLG4uZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTs0PmQ7ZCsrKWVbYStVW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LEFhLnRlc3QoYSl8fChuLmNzc0hvb2tzW2ErYl0uc2V0PU5hKX0pLG4uZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKG4uaXNBcnJheShiKSl7Zm9yKGQ9Q2EoYSksZT1iLmxlbmd0aDtlPmc7ZysrKWZbYltnXV09bi5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP24uc3R5bGUoYSxiLGMpOm4uY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIFFhKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFFhKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vih0aGlzKT9uKHRoaXMpLnNob3coKTpuKHRoaXMpLmhpZGUoKX0pfX0pO2Z1bmN0aW9uIFJhKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBSYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfW4uVHdlZW49UmEsUmEucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpSYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxuLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KG4uY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9UmEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOlJhLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPVJhLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1uLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6UmEucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sUmEucHJvdG90eXBlLmluaXQucHJvdG90eXBlPVJhLnByb3RvdHlwZSxSYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIDEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGwhPWEuZWxlbVthLnByb3BdJiZudWxsPT1hLmVsZW0uc3R5bGVbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXTooYj1uLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApfSxzZXQ6ZnVuY3Rpb24oYSl7bi5meC5zdGVwW2EucHJvcF0/bi5meC5zdGVwW2EucHJvcF0oYSk6MSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbD09YS5lbGVtLnN0eWxlW24uY3NzUHJvcHNbYS5wcm9wXV0mJiFuLmNzc0hvb2tzW2EucHJvcF0/YS5lbGVtW2EucHJvcF09YS5ub3c6bi5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCl9fX0sUmEucHJvcEhvb2tzLnNjcm9sbFRvcD1SYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxuLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sbi5meD1SYS5wcm90b3R5cGUuaW5pdCxuLmZ4LnN0ZXA9e307dmFyIFNhLFRhLFVhPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxWYT0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIFdhKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe1NhPXZvaWQgMH0pLFNhPW4ubm93KCl9ZnVuY3Rpb24gWGEoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowOzQ+ZDtkKz0yLWIpYz1VW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIFlhKGEsYixjKXtmb3IodmFyIGQsZT0oX2EudHdlZW5lcnNbYl18fFtdKS5jb25jYXQoX2EudHdlZW5lcnNbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtnPmY7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBaYShhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxsPXRoaXMsbT17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZWKGEpLHE9Ti5nZXQoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoaD1uLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1oLnVucXVldWVkJiYoaC51bnF1ZXVlZD0wLGk9aC5lbXB0eS5maXJlLGguZW1wdHkuZmlyZT1mdW5jdGlvbigpe2gudW5xdWV1ZWR8fGkoKX0pLGgudW5xdWV1ZWQrKyxsLmFsd2F5cyhmdW5jdGlvbigpe2wuYWx3YXlzKGZ1bmN0aW9uKCl7aC51bnF1ZXVlZC0tLG4ucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8aC5lbXB0eS5maXJlKCl9KX0pKSwxPT09YS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiBifHxcIndpZHRoXCJpbiBiKSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9bi5jc3MoYSxcImRpc3BsYXlcIiksaz1cIm5vbmVcIj09PWo/Ti5nZXQoYSxcIm9sZGRpc3BsYXlcIil8fHphKGEubm9kZU5hbWUpOmosXCJpbmxpbmVcIj09PWsmJlwibm9uZVwiPT09bi5jc3MoYSxcImZsb2F0XCIpJiYoby5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYoby5vdmVyZmxvdz1cImhpZGRlblwiLGwuYWx3YXlzKGZ1bmN0aW9uKCl7by5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLG8ub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0sby5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxVYS5leGVjKGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocD9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXF8fHZvaWQgMD09PXFbZF0pY29udGludWU7cD0hMH1tW2RdPXEmJnFbZF18fG4uc3R5bGUoYSxkKX1lbHNlIGo9dm9pZCAwO2lmKG4uaXNFbXB0eU9iamVjdChtKSlcImlubGluZVwiPT09KFwibm9uZVwiPT09aj96YShhLm5vZGVOYW1lKTpqKSYmKG8uZGlzcGxheT1qKTtlbHNle3E/XCJoaWRkZW5cImluIHEmJihwPXEuaGlkZGVuKTpxPU4uYWNjZXNzKGEsXCJmeHNob3dcIix7fSksZiYmKHEuaGlkZGVuPSFwKSxwP24oYSkuc2hvdygpOmwuZG9uZShmdW5jdGlvbigpe24oYSkuaGlkZSgpfSksbC5kb25lKGZ1bmN0aW9uKCl7dmFyIGI7Ti5yZW1vdmUoYSxcImZ4c2hvd1wiKTtmb3IoYiBpbiBtKW4uc3R5bGUoYSxiLG1bYl0pfSk7Zm9yKGQgaW4gbSlnPVlhKHA/cVtkXTowLGQsbCksZCBpbiBxfHwocVtkXT1nLnN0YXJ0LHAmJihnLmVuZD1nLnN0YXJ0LGcuc3RhcnQ9XCJ3aWR0aFwiPT09ZHx8XCJoZWlnaHRcIj09PWQ/MTowKSl9fWZ1bmN0aW9uICRhKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9bi5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxuLmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPW4uY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBfYShhLGIsYyl7dmFyIGQsZSxmPTAsZz1fYS5wcmVmaWx0ZXJzLmxlbmd0aCxoPW4uRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPVNhfHxXYSgpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtpPmc7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksMT5mJiZpP2M6KGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpuLmV4dGVuZCh7fSxiKSxvcHRzOm4uZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpuLmVhc2luZy5fZGVmYXVsdH0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOlNhfHxXYSgpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtkPmM7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj8oaC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqLGJdKSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcigkYShrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtnPmY7ZisrKWlmKGQ9X2EucHJlZmlsdGVyc1tmXS5jYWxsKGosYSxrLGoub3B0cykpcmV0dXJuIG4uaXNGdW5jdGlvbihkLnN0b3ApJiYobi5fcXVldWVIb29rcyhqLmVsZW0sai5vcHRzLnF1ZXVlKS5zdG9wPW4ucHJveHkoZC5zdG9wLGQpKSxkO3JldHVybiBuLm1hcChrLFlhLGopLG4uaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLG4uZngudGltZXIobi5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyl9bi5BbmltYXRpb249bi5leHRlbmQoX2Ese3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYik7cmV0dXJuIFcoYy5lbGVtLGEsVC5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe24uaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEcpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtlPmQ7ZCsrKWM9YVtkXSxfYS50d2VlbmVyc1tjXT1fYS50d2VlbmVyc1tjXXx8W10sX2EudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbWmFdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/X2EucHJlZmlsdGVycy51bnNoaWZ0KGEpOl9hLnByZWZpbHRlcnMucHVzaChhKX19KSxuLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9uLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fG4uaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhbi5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gZC5kdXJhdGlvbj1uLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiBkLmR1cmF0aW9uP2QuZHVyYXRpb246ZC5kdXJhdGlvbiBpbiBuLmZ4LnNwZWVkcz9uLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpuLmZ4LnNwZWVkcy5fZGVmYXVsdCwobnVsbD09ZC5xdWV1ZXx8ZC5xdWV1ZT09PSEwKSYmKGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtuLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm4uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxuLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihWKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uaXNFbXB0eU9iamVjdChhKSxmPW4uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1fYSh0aGlzLG4uZXh0ZW5kKHt9LGEpLGYpOyhlfHxOLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9bi50aW1lcnMsZz1OLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZWYS50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyhifHwhYykmJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9Ti5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1uLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsbi5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7Zz5iO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxuLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9bi5mbltiXTtuLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShYYShiLCEwKSxhLGQsZSl9fSksbi5lYWNoKHtzbGlkZURvd246WGEoXCJzaG93XCIpLHNsaWRlVXA6WGEoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOlhhKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLG4udGltZXJzPVtdLG4uZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPW4udGltZXJzO2ZvcihTYT1uLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fG4uZnguc3RvcCgpLFNhPXZvaWQgMH0sbi5meC50aW1lcj1mdW5jdGlvbihhKXtuLnRpbWVycy5wdXNoKGEpLGEoKT9uLmZ4LnN0YXJ0KCk6bi50aW1lcnMucG9wKCl9LG4uZnguaW50ZXJ2YWw9MTMsbi5meC5zdGFydD1mdW5jdGlvbigpe1RhfHwoVGE9YS5zZXRJbnRlcnZhbChuLmZ4LnRpY2ssbi5meC5pbnRlcnZhbCkpfSxuLmZ4LnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFySW50ZXJ2YWwoVGEpLFRhPW51bGx9LG4uZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LG4uZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1uLmZ4P24uZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixsLmNoZWNrT249XCJcIiE9PWEudmFsdWUsbC5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGIuZGlzYWJsZWQ9ITAsbC5vcHREaXNhYmxlZD0hYy5kaXNhYmxlZCxhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixsLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBhYixiYj1uLmV4cHIuYXR0ckhhbmRsZTtuLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsbi5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmdldEF0dHJpYnV0ZT9uLnByb3AoYSxiLGMpOigxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGU9bi5hdHRySG9va3NbYl18fChuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP2FiOnZvaWQgMCkpLHZvaWQgMCE9PWM/bnVsbD09PWM/dm9pZCBuLnJlbW92ZUF0dHIoYSxiKTplJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOihkPW4uZmluZC5hdHRyKGEsYiksbnVsbD09ZD92b2lkIDA6ZCkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFsLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJm4ubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPTAsZj1iJiZiLm1hdGNoKEcpO2lmKGYmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZltlKytdKWQ9bi5wcm9wRml4W2NdfHxjLG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYykmJihhW2RdPSExKSxhLnJlbW92ZUF0dHJpYnV0ZShjKX19KSxhYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP24ucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LG4uZWFjaChuLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1iYltiXXx8bi5maW5kLmF0dHI7YmJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGY7cmV0dXJuIGR8fChmPWJiW2JdLGJiW2JdPWUsZT1udWxsIT1jKGEsYixkKT9iLnRvTG93ZXJDYXNlKCk6bnVsbCxiYltiXT1mKSxlfX0pO3ZhciBjYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGRiPS9eKD86YXxhcmVhKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1uLnByb3BGaXhbYl18fGIsZT1uLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXTtcbn0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ0YWJpbmRleFwiKTtyZXR1cm4gYj9wYXJzZUludChiLDEwKTpjYi50ZXN0KGEubm9kZU5hbWUpfHxkYi50ZXN0KGEubm9kZU5hbWUpJiZhLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLGwub3B0U2VsZWN0ZWR8fChuLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfX0pLG4uZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtuLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7dmFyIGViPS9bXFx0XFxyXFxuXFxmXS9nO2Z1bmN0aW9uIGZiKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1uLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYixmYih0aGlzKSkpfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChHKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1mYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShlYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSlkLmluZGV4T2YoXCIgXCIrZitcIiBcIik8MCYmKGQrPWYrXCIgXCIpO2g9bi50cmltKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLGZiKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEcpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPWZiKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitmK1wiIFwiKT4tMSlkPWQucmVwbGFjZShcIiBcIitmK1wiIFwiLFwiIFwiKTtoPW4udHJpbShkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOm4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLGZiKHRoaXMpLGIpLGIpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsZCxlLGY7aWYoXCJzdHJpbmdcIj09PWMpe2Q9MCxlPW4odGhpcyksZj1hLm1hdGNoKEcpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlKHZvaWQgMD09PWF8fFwiYm9vbGVhblwiPT09YykmJihiPWZiKHRoaXMpLGImJk4uc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsYiksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixifHxhPT09ITE/XCJcIjpOLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2ZiKGMpK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKS5pbmRleE9mKGIpPi0xKXJldHVybiEwO3JldHVybiExfX0pO3ZhciBnYj0vXFxyL2c7bi5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPW4uaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxuKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6bi5pc0FycmF5KGUpJiYoZT1uLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9bi52YWxIb29rc1t0aGlzLnR5cGVdfHxuLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPW4udmFsSG9va3NbZS50eXBlXXx8bi52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UoZ2IsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxuLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiBuLnRyaW0oYS52YWx1ZSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLChjLnNlbGVjdGVkfHxpPT09ZSkmJihsLm9wdERpc2FibGVkPyFjLmRpc2FibGVkOm51bGw9PT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKSYmKCFjLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFuLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1uKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bi5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPW4uaW5BcnJheShuLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+LTEpJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+LTE6dm9pZCAwfX0sbC5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KTt2YXIgaGI9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvO24uZXh0ZW5kKG4uZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oYixjLGUsZil7dmFyIGcsaCxpLGosbCxtLG8scD1bZXx8ZF0scT1rLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscj1rLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoaD1pPWU9ZXx8ZCwzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJiFoYi50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT4tMSYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGw9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWY/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5ybmFtZXNwYWNlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIityLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWUpLGM9bnVsbD09Yz9bYl06bi5tYWtlQXJyYXkoYyxbYl0pLG89bi5ldmVudC5zcGVjaWFsW3FdfHx7fSxmfHwhby50cmlnZ2VyfHxvLnRyaWdnZXIuYXBwbHkoZSxjKSE9PSExKSl7aWYoIWYmJiFvLm5vQnViYmxlJiYhbi5pc1dpbmRvdyhlKSl7Zm9yKGo9by5kZWxlZ2F0ZVR5cGV8fHEsaGIudGVzdChqK3EpfHwoaD1oLnBhcmVudE5vZGUpO2g7aD1oLnBhcmVudE5vZGUpcC5wdXNoKGgpLGk9aDtpPT09KGUub3duZXJEb2N1bWVudHx8ZCkmJnAucHVzaChpLmRlZmF1bHRWaWV3fHxpLnBhcmVudFdpbmRvd3x8YSl9Zz0wO3doaWxlKChoPXBbZysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPWc+MT9qOm8uYmluZFR5cGV8fHEsbT0oTi5nZXQoaCxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJk4uZ2V0KGgsXCJoYW5kbGVcIiksbSYmbS5hcHBseShoLGMpLG09bCYmaFtsXSxtJiZtLmFwcGx5JiZMKGgpJiYoYi5yZXN1bHQ9bS5hcHBseShoLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1xLGZ8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG8uX2RlZmF1bHQmJm8uX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKSE9PSExfHwhTChlKXx8bCYmbi5pc0Z1bmN0aW9uKGVbcV0pJiYhbi5pc1dpbmRvdyhlKSYmKGk9ZVtsXSxpJiYoZVtsXT1udWxsKSxuLmV2ZW50LnRyaWdnZXJlZD1xLGVbcV0oKSxuLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaSYmKGVbbF09aSkpLGIucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPW4uZXh0ZW5kKG5ldyBuLkV2ZW50LGMse3R5cGU6YSxpc1NpbXVsYXRlZDohMH0pO24uZXZlbnQudHJpZ2dlcihkLG51bGwsYiksZC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmYy5wcmV2ZW50RGVmYXVsdCgpfX0pLG4uZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pLG4uZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxuLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSksbC5mb2N1c2luPVwib25mb2N1c2luXCJpbiBhLGwuZm9jdXNpbnx8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSkpfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ti5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxOLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPU4uYWNjZXNzKGQsYiktMTtlP04uYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksTi5yZW1vdmUoZCxiKSl9fX0pO3ZhciBpYj1hLmxvY2F0aW9uLGpiPW4ubm93KCksa2I9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYztpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2M9KG5ldyBhLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtjPXZvaWQgMH1yZXR1cm4oIWN8fGMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGgpJiZuLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2IpLGN9O3ZhciBsYj0vIy4qJC8sbWI9LyhbPyZdKV89W14mXSovLG5iPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sb2I9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8scGI9L14oPzpHRVR8SEVBRCkkLyxxYj0vXlxcL1xcLy8scmI9e30sc2I9e30sdGI9XCIqL1wiLmNvbmNhdChcIipcIiksdWI9ZC5jcmVhdGVFbGVtZW50KFwiYVwiKTt1Yi5ocmVmPWliLmhyZWY7ZnVuY3Rpb24gdmIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEcpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gd2IoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09c2I7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxuLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiB4YihhLGIpe3ZhciBjLGQsZT1uLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZuLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24geWIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gemIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1uLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6aWIuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDpvYi50ZXN0KGliLnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjp0Yix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm4ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP3hiKHhiKGEsbi5hamF4U2V0dGluZ3MpLGIpOnhiKG4uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOnZiKHJiKSxhamF4VHJhbnNwb3J0OnZiKHNiKSxhamF4OmZ1bmN0aW9uKGIsYyl7XCJvYmplY3RcIj09dHlwZW9mIGImJihjPWIsYj12b2lkIDApLGM9Y3x8e307dmFyIGUsZixnLGgsaSxqLGssbCxtPW4uYWpheFNldHVwKHt9LGMpLG89bS5jb250ZXh0fHxtLHA9bS5jb250ZXh0JiYoby5ub2RlVHlwZXx8by5qcXVlcnkpP24obyk6bi5ldmVudCxxPW4uRGVmZXJyZWQoKSxyPW4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscz1tLnN0YXR1c0NvZGV8fHt9LHQ9e30sdT17fSx2PTAsdz1cImNhbmNlbGVkXCIseD17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT12KXtpZighaCl7aD17fTt3aGlsZShiPW5iLmV4ZWMoZykpaFtiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1oW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXY/ZzpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB2fHwoYT11W2NdPXVbY118fGEsdFthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB2fHwobS5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj52KWZvcihiIGluIGEpc1tiXT1bc1tiXSxhW2JdXTtlbHNlIHguYWx3YXlzKGFbeC5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dztyZXR1cm4gZSYmZS5hYm9ydChiKSx6KDAsYiksdGhpc319O2lmKHEucHJvbWlzZSh4KS5jb21wbGV0ZT1yLmFkZCx4LnN1Y2Nlc3M9eC5kb25lLHguZXJyb3I9eC5mYWlsLG0udXJsPSgoYnx8bS51cmx8fGliLmhyZWYpK1wiXCIpLnJlcGxhY2UobGIsXCJcIikucmVwbGFjZShxYixpYi5wcm90b2NvbCtcIi8vXCIpLG0udHlwZT1jLm1ldGhvZHx8Yy50eXBlfHxtLm1ldGhvZHx8bS50eXBlLG0uZGF0YVR5cGVzPW4udHJpbShtLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChHKXx8W1wiXCJdLG51bGw9PW0uY3Jvc3NEb21haW4pe2o9ZC5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7ai5ocmVmPW0udXJsLGouaHJlZj1qLmhyZWYsbS5jcm9zc0RvbWFpbj11Yi5wcm90b2NvbCtcIi8vXCIrdWIuaG9zdCE9ai5wcm90b2NvbCtcIi8vXCIrai5ob3N0fWNhdGNoKHkpe20uY3Jvc3NEb21haW49ITB9fWlmKG0uZGF0YSYmbS5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIG0uZGF0YSYmKG0uZGF0YT1uLnBhcmFtKG0uZGF0YSxtLnRyYWRpdGlvbmFsKSksd2IocmIsbSxjLHgpLDI9PT12KXJldHVybiB4O2s9bi5ldmVudCYmbS5nbG9iYWwsayYmMD09PW4uYWN0aXZlKysmJm4uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxtLnR5cGU9bS50eXBlLnRvVXBwZXJDYXNlKCksbS5oYXNDb250ZW50PSFwYi50ZXN0KG0udHlwZSksZj1tLnVybCxtLmhhc0NvbnRlbnR8fChtLmRhdGEmJihmPW0udXJsKz0oa2IudGVzdChmKT9cIiZcIjpcIj9cIikrbS5kYXRhLGRlbGV0ZSBtLmRhdGEpLG0uY2FjaGU9PT0hMSYmKG0udXJsPW1iLnRlc3QoZik/Zi5yZXBsYWNlKG1iLFwiJDFfPVwiK2piKyspOmYrKGtiLnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIitqYisrKSksbS5pZk1vZGlmaWVkJiYobi5sYXN0TW9kaWZpZWRbZl0mJnguc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbi5sYXN0TW9kaWZpZWRbZl0pLG4uZXRhZ1tmXSYmeC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG4uZXRhZ1tmXSkpLChtLmRhdGEmJm0uaGFzQ29udGVudCYmbS5jb250ZW50VHlwZSE9PSExfHxjLmNvbnRlbnRUeXBlKSYmeC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsbS5jb250ZW50VHlwZSkseC5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsbS5kYXRhVHlwZXNbMF0mJm0uYWNjZXB0c1ttLmRhdGFUeXBlc1swXV0/bS5hY2NlcHRzW20uZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1tLmRhdGFUeXBlc1swXT9cIiwgXCIrdGIrXCI7IHE9MC4wMVwiOlwiXCIpOm0uYWNjZXB0c1tcIipcIl0pO2ZvcihsIGluIG0uaGVhZGVycyl4LnNldFJlcXVlc3RIZWFkZXIobCxtLmhlYWRlcnNbbF0pO2lmKG0uYmVmb3JlU2VuZCYmKG0uYmVmb3JlU2VuZC5jYWxsKG8seCxtKT09PSExfHwyPT09dikpcmV0dXJuIHguYWJvcnQoKTt3PVwiYWJvcnRcIjtmb3IobCBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl4W2xdKG1bbF0pO2lmKGU9d2Ioc2IsbSxjLHgpKXtpZih4LnJlYWR5U3RhdGU9MSxrJiZwLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt4LG1dKSwyPT09dilyZXR1cm4geDttLmFzeW5jJiZtLnRpbWVvdXQ+MCYmKGk9YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eC5hYm9ydChcInRpbWVvdXRcIil9LG0udGltZW91dCkpO3RyeXt2PTEsZS5zZW5kKHQseil9Y2F0Y2goeSl7aWYoISgyPnYpKXRocm93IHk7eigtMSx5KX19ZWxzZSB6KC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIHooYixjLGQsaCl7dmFyIGosbCx0LHUsdyx5PWM7MiE9PXYmJih2PTIsaSYmYS5jbGVhclRpbWVvdXQoaSksZT12b2lkIDAsZz1ofHxcIlwiLHgucmVhZHlTdGF0ZT1iPjA/NDowLGo9Yj49MjAwJiYzMDA+Ynx8MzA0PT09YixkJiYodT15YihtLHgsZCkpLHU9emIobSx1LHgsaiksaj8obS5pZk1vZGlmaWVkJiYodz14LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYobi5sYXN0TW9kaWZpZWRbZl09dyksdz14LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYobi5ldGFnW2ZdPXcpKSwyMDQ9PT1ifHxcIkhFQURcIj09PW0udHlwZT95PVwibm9jb250ZW50XCI6MzA0PT09Yj95PVwibm90bW9kaWZpZWRcIjooeT11LnN0YXRlLGw9dS5kYXRhLHQ9dS5lcnJvcixqPSF0KSk6KHQ9eSwoYnx8IXkpJiYoeT1cImVycm9yXCIsMD5iJiYoYj0wKSkpLHguc3RhdHVzPWIseC5zdGF0dXNUZXh0PShjfHx5KStcIlwiLGo/cS5yZXNvbHZlV2l0aChvLFtsLHkseF0pOnEucmVqZWN0V2l0aChvLFt4LHksdF0pLHguc3RhdHVzQ29kZShzKSxzPXZvaWQgMCxrJiZwLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbeCxtLGo/bDp0XSksci5maXJlV2l0aChvLFt4LHldKSxrJiYocC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3gsbV0pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHh9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgobi5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LG4uaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sbi5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwQWxsKGEuY2FsbCh0aGlzLGIpKX0pOih0aGlzWzBdJiYoYj1uKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXMpfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9bih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1uLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7bi5ub2RlTmFtZSh0aGlzLFwiYm9keVwiKXx8bih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSkuZW5kKCl9fSksbi5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiFuLmV4cHIuZmlsdGVycy52aXNpYmxlKGEpfSxuLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiBhLm9mZnNldFdpZHRoPjB8fGEub2Zmc2V0SGVpZ2h0PjB8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg+MH07dmFyIEFiPS8lMjAvZyxCYj0vXFxbXFxdJC8sQ2I9L1xccj9cXG4vZyxEYj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksRWI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIEZiKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fEJiLnRlc3QoYSk/ZChhLGUpOkZiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT1lP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpRmIoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUZiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2UoQWIsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJkViLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFEYi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhWC50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKENiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoQ2IsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fTt2YXIgR2I9ezA6MjAwLDEyMjM6MjA0fSxIYj1uLmFqYXhTZXR0aW5ncy54aHIoKTtsLmNvcnM9ISFIYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIEhiLGwuYWpheD1IYj0hIUhiLG4uYWpheFRyYW5zcG9ydChmdW5jdGlvbihiKXt2YXIgYyxkO3JldHVybiBsLmNvcnN8fEhiJiYhYi5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihlLGYpe3ZhciBnLGg9Yi54aHIoKTtpZihoLm9wZW4oYi50eXBlLGIudXJsLGIuYXN5bmMsYi51c2VybmFtZSxiLnBhc3N3b3JkKSxiLnhockZpZWxkcylmb3IoZyBpbiBiLnhockZpZWxkcyloW2ddPWIueGhyRmllbGRzW2ddO2IubWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlKGIubWltZVR5cGUpLGIuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZyBpbiBlKWguc2V0UmVxdWVzdEhlYWRlcihnLGVbZ10pO2M9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YyYmKGM9ZD1oLm9ubG9hZD1oLm9uZXJyb3I9aC5vbmFib3J0PWgub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09YT9oLmFib3J0KCk6XCJlcnJvclwiPT09YT9cIm51bWJlclwiIT10eXBlb2YgaC5zdGF0dXM/ZigwLFwiZXJyb3JcIik6ZihoLnN0YXR1cyxoLnN0YXR1c1RleHQpOmYoR2JbaC5zdGF0dXNdfHxoLnN0YXR1cyxoLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oaC5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGgucmVzcG9uc2VUZXh0P3tiaW5hcnk6aC5yZXNwb25zZX06e3RleHQ6aC5yZXNwb25zZVRleHR9LGguZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGgub25sb2FkPWMoKSxkPWgub25lcnJvcj1jKFwiZXJyb3JcIiksdm9pZCAwIT09aC5vbmFib3J0P2gub25hYm9ydD1kOmgub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PWgucmVhZHlTdGF0ZSYmYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyYmZCgpfSl9LGM9YyhcImFib3J0XCIpO3RyeXtoLnNlbmQoYi5oYXNDb250ZW50JiZiLmRhdGF8fG51bGwpfWNhdGNoKGkpe2lmKGMpdGhyb3cgaX19LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX06dm9pZCAwfSksbi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPW4oXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmYoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGQuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgSWI9W10sSmI9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1JYi5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK2piKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKEpiLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmMD09PShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZKYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKEpiLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KGtiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWY/bihhKS5yZW1vdmVQcm9wKGUpOmFbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxJYi5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLGwuY3JlYXRlSFRNTERvY3VtZW50PWZ1bmN0aW9uKCl7dmFyIGE9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gYS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1hLmNoaWxkTm9kZXMubGVuZ3RofSgpLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8KGwuY3JlYXRlSFRNTERvY3VtZW50P2QuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpOmQpO3ZhciBlPXguZXhlYyhhKSxmPSFjJiZbXTtyZXR1cm4gZT9bYi5jcmVhdGVFbGVtZW50KGVbMV0pXTooZT1jYShbYV0sYixmKSxmJiZmLmxlbmd0aCYmbihmKS5yZW1vdmUoKSxuLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfTt2YXIgS2I9bi5mbi5sb2FkO24uZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJktiKXJldHVybiBLYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+LTEmJihkPW4udHJpbShhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksbi5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmbi5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9uKFwiPGRpdj5cIikuYXBwZW5kKG4ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseShnLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sbi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksbi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ3JlcChuLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07ZnVuY3Rpb24gTGIoYSl7cmV0dXJuIG4uaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31uLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPW4uY3NzKGEsXCJwb3NpdGlvblwiKSxsPW4oYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1uLmNzcyhhLFwidG9wXCIpLGk9bi5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxuLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsbi5leHRlbmQoe30saCkpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxuLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7bi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZD10aGlzWzBdLGU9e3RvcDowLGxlZnQ6MH0sZj1kJiZkLm93bmVyRG9jdW1lbnQ7aWYoZilyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxuLmNvbnRhaW5zKGIsZCk/KGU9ZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxjPUxiKGYpLHt0b3A6ZS50b3ArYy5wYWdlWU9mZnNldC1iLmNsaWVudFRvcCxsZWZ0OmUubGVmdCtjLnBhZ2VYT2Zmc2V0LWIuY2xpZW50TGVmdH0pOmV9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1uLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLG4ubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQudG9wKz1uLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCktYS5zY3JvbGxUb3AoKSxkLmxlZnQrPW4uY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCktYS5zY3JvbGxMZWZ0KCkpLHt0b3A6Yi50b3AtZC50b3Atbi5jc3MoYyxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1kLmxlZnQtbi5jc3MoYyxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoYSYmXCJzdGF0aWNcIj09PW4uY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxFYX0pfX0pLG4uZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1cInBhZ2VZT2Zmc2V0XCI9PT1iO24uZm5bYV09ZnVuY3Rpb24oZCl7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhLGQsZSl7dmFyIGY9TGIoYSk7cmV0dXJuIHZvaWQgMD09PWU/Zj9mW2JdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9mLnBhZ2VYT2Zmc2V0OmUsYz9lOmYucGFnZVlPZmZzZXQpOmFbZF09ZSl9LGEsZCxhcmd1bWVudHMubGVuZ3RoKX19KSxuLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT1HYShsLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtyZXR1cm4gYz8oYz1GYShhLGIpLEJhLnRlc3QoYyk/bihhKS5wb3NpdGlvbigpW2JdK1wicHhcIjpjKTp2b2lkIDB9KX0pLG4uZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe24uZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtuLmZuW2RdPWZ1bmN0aW9uKGQsZSl7dmFyIGY9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZCksZz1jfHwoZD09PSEwfHxlPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZTtyZXR1cm4gbi5pc1dpbmRvdyhiKT9iLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhlPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGVbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxlW1wib2Zmc2V0XCIrYV0sZVtcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZD9uLmNzcyhiLGMsZyk6bi5zdHlsZShiLGMsZCxnKX0sYixmP2Q6dm9pZCAwLGYsbnVsbCl9fSl9KSxuLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfSxzaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofX0pLG4uZm4uYW5kU2VsZj1uLmZuLmFkZEJhY2ssXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBufSk7dmFyIE1iPWEualF1ZXJ5LE5iPWEuJDtyZXR1cm4gbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1uJiYoYS4kPU5iKSxiJiZhLmpRdWVyeT09PW4mJihhLmpRdWVyeT1NYiksbn0sYnx8KGEualF1ZXJ5PWEuJD1uKSxufSk7XG4iLCIvKiEgalF1ZXJ5IE1pZ3JhdGUgdjEuMi4xIHwgKGMpIDIwMDUsIDIwMTMgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xyXG5qUXVlcnkubWlncmF0ZU11dGU9PT12b2lkIDAmJihqUXVlcnkubWlncmF0ZU11dGU9ITApLGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiByKG4pe3ZhciByPXQuY29uc29sZTtpW25dfHwoaVtuXT0hMCxlLm1pZ3JhdGVXYXJuaW5ncy5wdXNoKG4pLHImJnIud2FybiYmIWUubWlncmF0ZU11dGUmJihyLndhcm4oXCJKUU1JR1JBVEU6IFwiK24pLGUubWlncmF0ZVRyYWNlJiZyLnRyYWNlJiZyLnRyYWNlKCkpKX1mdW5jdGlvbiBhKHQsYSxpLG8pe2lmKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSl0cnl7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGEse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiByKG8pLGl9LHNldDpmdW5jdGlvbihlKXtyKG8pLGk9ZX19KSxufWNhdGNoKHMpe31lLl9kZWZpbmVQcm9wZXJ0eUJyb2tlbj0hMCx0W2FdPWl9dmFyIGk9e307ZS5taWdyYXRlV2FybmluZ3M9W10sIWUubWlncmF0ZU11dGUmJnQuY29uc29sZSYmdC5jb25zb2xlLmxvZyYmdC5jb25zb2xlLmxvZyhcIkpRTUlHUkFURTogTG9nZ2luZyBpcyBhY3RpdmVcIiksZS5taWdyYXRlVHJhY2U9PT1uJiYoZS5taWdyYXRlVHJhY2U9ITApLGUubWlncmF0ZVJlc2V0PWZ1bmN0aW9uKCl7aT17fSxlLm1pZ3JhdGVXYXJuaW5ncy5sZW5ndGg9MH0sXCJCYWNrQ29tcGF0XCI9PT1kb2N1bWVudC5jb21wYXRNb2RlJiZyKFwialF1ZXJ5IGlzIG5vdCBjb21wYXRpYmxlIHdpdGggUXVpcmtzIE1vZGVcIik7dmFyIG89ZShcIjxpbnB1dC8+XCIse3NpemU6MX0pLmF0dHIoXCJzaXplXCIpJiZlLmF0dHJGbixzPWUuYXR0cix1PWUuYXR0ckhvb2tzLnZhbHVlJiZlLmF0dHJIb29rcy52YWx1ZS5nZXR8fGZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LGM9ZS5hdHRySG9va3MudmFsdWUmJmUuYXR0ckhvb2tzLnZhbHVlLnNldHx8ZnVuY3Rpb24oKXtyZXR1cm4gbn0sbD0vXig/OmlucHV0fGJ1dHRvbikkL2ksZD0vXlsyMzhdJC8scD0vXig/OmF1dG9mb2N1c3xhdXRvcGxheXxhc3luY3xjaGVja2VkfGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkfHNlbGVjdGVkKSQvaSxmPS9eKD86Y2hlY2tlZHxzZWxlY3RlZCkkL2k7YShlLFwiYXR0ckZuXCIsb3x8e30sXCJqUXVlcnkuYXR0ckZuIGlzIGRlcHJlY2F0ZWRcIiksZS5hdHRyPWZ1bmN0aW9uKHQsYSxpLHUpe3ZhciBjPWEudG9Mb3dlckNhc2UoKSxnPXQmJnQubm9kZVR5cGU7cmV0dXJuIHUmJig0PnMubGVuZ3RoJiZyKFwialF1ZXJ5LmZuLmF0dHIoIHByb3BzLCBwYXNzICkgaXMgZGVwcmVjYXRlZFwiKSx0JiYhZC50ZXN0KGcpJiYobz9hIGluIG86ZS5pc0Z1bmN0aW9uKGUuZm5bYV0pKSk/ZSh0KVthXShpKTooXCJ0eXBlXCI9PT1hJiZpIT09biYmbC50ZXN0KHQubm9kZU5hbWUpJiZ0LnBhcmVudE5vZGUmJnIoXCJDYW4ndCBjaGFuZ2UgdGhlICd0eXBlJyBvZiBhbiBpbnB1dCBvciBidXR0b24gaW4gSUUgNi83LzhcIiksIWUuYXR0ckhvb2tzW2NdJiZwLnRlc3QoYykmJihlLmF0dHJIb29rc1tjXT17Z2V0OmZ1bmN0aW9uKHQscil7dmFyIGEsaT1lLnByb3AodCxyKTtyZXR1cm4gaT09PSEwfHxcImJvb2xlYW5cIiE9dHlwZW9mIGkmJihhPXQuZ2V0QXR0cmlidXRlTm9kZShyKSkmJmEubm9kZVZhbHVlIT09ITE/ci50b0xvd2VyQ2FzZSgpOm59LHNldDpmdW5jdGlvbih0LG4scil7dmFyIGE7cmV0dXJuIG49PT0hMT9lLnJlbW92ZUF0dHIodCxyKTooYT1lLnByb3BGaXhbcl18fHIsYSBpbiB0JiYodFthXT0hMCksdC5zZXRBdHRyaWJ1dGUocixyLnRvTG93ZXJDYXNlKCkpKSxyfX0sZi50ZXN0KGMpJiZyKFwialF1ZXJ5LmZuLmF0dHIoJ1wiK2MrXCInKSBtYXkgdXNlIHByb3BlcnR5IGluc3RlYWQgb2YgYXR0cmlidXRlXCIpKSxzLmNhbGwoZSx0LGEsaSkpfSxlLmF0dHJIb29rcy52YWx1ZT17Z2V0OmZ1bmN0aW9uKGUsdCl7dmFyIG49KGUubm9kZU5hbWV8fFwiXCIpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJidXR0b25cIj09PW4/dS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6KFwiaW5wdXRcIiE9PW4mJlwib3B0aW9uXCIhPT1uJiZyKFwialF1ZXJ5LmZuLmF0dHIoJ3ZhbHVlJykgbm8gbG9uZ2VyIGdldHMgcHJvcGVydGllc1wiKSx0IGluIGU/ZS52YWx1ZTpudWxsKX0sc2V0OmZ1bmN0aW9uKGUsdCl7dmFyIGE9KGUubm9kZU5hbWV8fFwiXCIpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJidXR0b25cIj09PWE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6KFwiaW5wdXRcIiE9PWEmJlwib3B0aW9uXCIhPT1hJiZyKFwialF1ZXJ5LmZuLmF0dHIoJ3ZhbHVlJywgdmFsKSBubyBsb25nZXIgc2V0cyBwcm9wZXJ0aWVzXCIpLGUudmFsdWU9dCxuKX19O3ZhciBnLGgsdj1lLmZuLmluaXQsbT1lLnBhcnNlSlNPTix5PS9eKFtePF0qKSg8W1xcd1xcV10rPikoW14+XSopJC87ZS5mbi5pbml0PWZ1bmN0aW9uKHQsbixhKXt2YXIgaTtyZXR1cm4gdCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJiFlLmlzUGxhaW5PYmplY3QobikmJihpPXkuZXhlYyhlLnRyaW0odCkpKSYmaVswXSYmKFwiPFwiIT09dC5jaGFyQXQoMCkmJnIoXCIkKGh0bWwpIEhUTUwgc3RyaW5ncyBtdXN0IHN0YXJ0IHdpdGggJzwnIGNoYXJhY3RlclwiKSxpWzNdJiZyKFwiJChodG1sKSBIVE1MIHRleHQgYWZ0ZXIgbGFzdCB0YWcgaXMgaWdub3JlZFwiKSxcIiNcIj09PWlbMF0uY2hhckF0KDApJiYocihcIkhUTUwgc3RyaW5nIGNhbm5vdCBzdGFydCB3aXRoIGEgJyMnIGNoYXJhY3RlclwiKSxlLmVycm9yKFwiSlFNSUdSQVRFOiBJbnZhbGlkIHNlbGVjdG9yIHN0cmluZyAoWFNTKVwiKSksbiYmbi5jb250ZXh0JiYobj1uLmNvbnRleHQpLGUucGFyc2VIVE1MKT92LmNhbGwodGhpcyxlLnBhcnNlSFRNTChpWzJdLG4sITApLG4sYSk6di5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZm4uaW5pdC5wcm90b3R5cGU9ZS5mbixlLnBhcnNlSlNPTj1mdW5jdGlvbihlKXtyZXR1cm4gZXx8bnVsbD09PWU/bS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6KHIoXCJqUXVlcnkucGFyc2VKU09OIHJlcXVpcmVzIGEgdmFsaWQgSlNPTiBzdHJpbmdcIiksbnVsbCl9LGUudWFNYXRjaD1mdW5jdGlvbihlKXtlPWUudG9Mb3dlckNhc2UoKTt2YXIgdD0vKGNocm9tZSlbIFxcL10oW1xcdy5dKykvLmV4ZWMoZSl8fC8od2Via2l0KVsgXFwvXShbXFx3Ll0rKS8uZXhlYyhlKXx8LyhvcGVyYSkoPzouKnZlcnNpb258KVsgXFwvXShbXFx3Ll0rKS8uZXhlYyhlKXx8Lyhtc2llKSAoW1xcdy5dKykvLmV4ZWMoZSl8fDA+ZS5pbmRleE9mKFwiY29tcGF0aWJsZVwiKSYmLyhtb3ppbGxhKSg/Oi4qPyBydjooW1xcdy5dKyl8KS8uZXhlYyhlKXx8W107cmV0dXJue2Jyb3dzZXI6dFsxXXx8XCJcIix2ZXJzaW9uOnRbMl18fFwiMFwifX0sZS5icm93c2VyfHwoZz1lLnVhTWF0Y2gobmF2aWdhdG9yLnVzZXJBZ2VudCksaD17fSxnLmJyb3dzZXImJihoW2cuYnJvd3Nlcl09ITAsaC52ZXJzaW9uPWcudmVyc2lvbiksaC5jaHJvbWU/aC53ZWJraXQ9ITA6aC53ZWJraXQmJihoLnNhZmFyaT0hMCksZS5icm93c2VyPWgpLGEoZSxcImJyb3dzZXJcIixlLmJyb3dzZXIsXCJqUXVlcnkuYnJvd3NlciBpcyBkZXByZWNhdGVkXCIpLGUuc3ViPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLG4pe3JldHVybiBuZXcgdC5mbi5pbml0KGUsbil9ZS5leHRlbmQoITAsdCx0aGlzKSx0LnN1cGVyY2xhc3M9dGhpcyx0LmZuPXQucHJvdG90eXBlPXRoaXMoKSx0LmZuLmNvbnN0cnVjdG9yPXQsdC5zdWI9dGhpcy5zdWIsdC5mbi5pbml0PWZ1bmN0aW9uKHIsYSl7cmV0dXJuIGEmJmEgaW5zdGFuY2VvZiBlJiYhKGEgaW5zdGFuY2VvZiB0KSYmKGE9dChhKSksZS5mbi5pbml0LmNhbGwodGhpcyxyLGEsbil9LHQuZm4uaW5pdC5wcm90b3R5cGU9dC5mbjt2YXIgbj10KGRvY3VtZW50KTtyZXR1cm4gcihcImpRdWVyeS5zdWIoKSBpcyBkZXByZWNhdGVkXCIpLHR9LGUuYWpheFNldHVwKHtjb252ZXJ0ZXJzOntcInRleHQganNvblwiOmUucGFyc2VKU09OfX0pO3ZhciBiPWUuZm4uZGF0YTtlLmZuLmRhdGE9ZnVuY3Rpb24odCl7dmFyIGEsaSxvPXRoaXNbMF07cmV0dXJuIW98fFwiZXZlbnRzXCIhPT10fHwxIT09YXJndW1lbnRzLmxlbmd0aHx8KGE9ZS5kYXRhKG8sdCksaT1lLl9kYXRhKG8sdCksYSE9PW4mJmEhPT1pfHxpPT09bik/Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyk6KHIoXCJVc2Ugb2YgalF1ZXJ5LmZuLmRhdGEoJ2V2ZW50cycpIGlzIGRlcHJlY2F0ZWRcIiksaSl9O3ZhciBqPS9cXC8oamF2YXxlY21hKXNjcmlwdC9pLHc9ZS5mbi5hbmRTZWxmfHxlLmZuLmFkZEJhY2s7ZS5mbi5hbmRTZWxmPWZ1bmN0aW9uKCl7cmV0dXJuIHIoXCJqUXVlcnkuZm4uYW5kU2VsZigpIHJlcGxhY2VkIGJ5IGpRdWVyeS5mbi5hZGRCYWNrKClcIiksdy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuY2xlYW58fChlLmNsZWFuPWZ1bmN0aW9uKHQsYSxpLG8pe2E9YXx8ZG9jdW1lbnQsYT0hYS5ub2RlVHlwZSYmYVswXXx8YSxhPWEub3duZXJEb2N1bWVudHx8YSxyKFwialF1ZXJ5LmNsZWFuKCkgaXMgZGVwcmVjYXRlZFwiKTt2YXIgcyx1LGMsbCxkPVtdO2lmKGUubWVyZ2UoZCxlLmJ1aWxkRnJhZ21lbnQodCxhKS5jaGlsZE5vZGVzKSxpKWZvcihjPWZ1bmN0aW9uKGUpe3JldHVybiFlLnR5cGV8fGoudGVzdChlLnR5cGUpP28/by5wdXNoKGUucGFyZW50Tm9kZT9lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSk6ZSk6aS5hcHBlbmRDaGlsZChlKTpufSxzPTA7bnVsbCE9KHU9ZFtzXSk7cysrKWUubm9kZU5hbWUodSxcInNjcmlwdFwiKSYmYyh1KXx8KGkuYXBwZW5kQ2hpbGQodSksdS5nZXRFbGVtZW50c0J5VGFnTmFtZSE9PW4mJihsPWUuZ3JlcChlLm1lcmdlKFtdLHUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIikpLGMpLGQuc3BsaWNlLmFwcGx5KGQsW3MrMSwwXS5jb25jYXQobCkpLHMrPWwubGVuZ3RoKSk7cmV0dXJuIGR9KTt2YXIgUT1lLmV2ZW50LmFkZCx4PWUuZXZlbnQucmVtb3ZlLGs9ZS5ldmVudC50cmlnZ2VyLE49ZS5mbi50b2dnbGUsVD1lLmZuLmxpdmUsTT1lLmZuLmRpZSxTPVwiYWpheFN0YXJ0fGFqYXhTdG9wfGFqYXhTZW5kfGFqYXhDb21wbGV0ZXxhamF4RXJyb3J8YWpheFN1Y2Nlc3NcIixDPVJlZ0V4cChcIlxcXFxiKD86XCIrUytcIilcXFxcYlwiKSxIPS8oPzpefFxccylob3ZlcihcXC5cXFMrfClcXGIvLEE9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIHR8fGUuZXZlbnQuc3BlY2lhbC5ob3Zlcj90OihILnRlc3QodCkmJnIoXCInaG92ZXInIHBzZXVkby1ldmVudCBpcyBkZXByZWNhdGVkLCB1c2UgJ21vdXNlZW50ZXIgbW91c2VsZWF2ZSdcIiksdCYmdC5yZXBsYWNlKEgsXCJtb3VzZWVudGVyJDEgbW91c2VsZWF2ZSQxXCIpKX07ZS5ldmVudC5wcm9wcyYmXCJhdHRyQ2hhbmdlXCIhPT1lLmV2ZW50LnByb3BzWzBdJiZlLmV2ZW50LnByb3BzLnVuc2hpZnQoXCJhdHRyQ2hhbmdlXCIsXCJhdHRyTmFtZVwiLFwicmVsYXRlZE5vZGVcIixcInNyY0VsZW1lbnRcIiksZS5ldmVudC5kaXNwYXRjaCYmYShlLmV2ZW50LFwiaGFuZGxlXCIsZS5ldmVudC5kaXNwYXRjaCxcImpRdWVyeS5ldmVudC5oYW5kbGUgaXMgdW5kb2N1bWVudGVkIGFuZCBkZXByZWNhdGVkXCIpLGUuZXZlbnQuYWRkPWZ1bmN0aW9uKGUsdCxuLGEsaSl7ZSE9PWRvY3VtZW50JiZDLnRlc3QodCkmJnIoXCJBSkFYIGV2ZW50cyBzaG91bGQgYmUgYXR0YWNoZWQgdG8gZG9jdW1lbnQ6IFwiK3QpLFEuY2FsbCh0aGlzLGUsQSh0fHxcIlwiKSxuLGEsaSl9LGUuZXZlbnQucmVtb3ZlPWZ1bmN0aW9uKGUsdCxuLHIsYSl7eC5jYWxsKHRoaXMsZSxBKHQpfHxcIlwiLG4scixhKX0sZS5mbi5lcnJvcj1mdW5jdGlvbigpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKTtyZXR1cm4gcihcImpRdWVyeS5mbi5lcnJvcigpIGlzIGRlcHJlY2F0ZWRcIiksZS5zcGxpY2UoMCwwLFwiZXJyb3JcIiksYXJndW1lbnRzLmxlbmd0aD90aGlzLmJpbmQuYXBwbHkodGhpcyxlKToodGhpcy50cmlnZ2VySGFuZGxlci5hcHBseSh0aGlzLGUpLHRoaXMpfSxlLmZuLnRvZ2dsZT1mdW5jdGlvbih0LG4pe2lmKCFlLmlzRnVuY3Rpb24odCl8fCFlLmlzRnVuY3Rpb24obikpcmV0dXJuIE4uYXBwbHkodGhpcyxhcmd1bWVudHMpO3IoXCJqUXVlcnkuZm4udG9nZ2xlKGhhbmRsZXIsIGhhbmRsZXIuLi4pIGlzIGRlcHJlY2F0ZWRcIik7dmFyIGE9YXJndW1lbnRzLGk9dC5ndWlkfHxlLmd1aWQrKyxvPTAscz1mdW5jdGlvbihuKXt2YXIgcj0oZS5fZGF0YSh0aGlzLFwibGFzdFRvZ2dsZVwiK3QuZ3VpZCl8fDApJW87cmV0dXJuIGUuX2RhdGEodGhpcyxcImxhc3RUb2dnbGVcIit0Lmd1aWQscisxKSxuLnByZXZlbnREZWZhdWx0KCksYVtyXS5hcHBseSh0aGlzLGFyZ3VtZW50cyl8fCExfTtmb3Iocy5ndWlkPWk7YS5sZW5ndGg+bzspYVtvKytdLmd1aWQ9aTtyZXR1cm4gdGhpcy5jbGljayhzKX0sZS5mbi5saXZlPWZ1bmN0aW9uKHQsbixhKXtyZXR1cm4gcihcImpRdWVyeS5mbi5saXZlKCkgaXMgZGVwcmVjYXRlZFwiKSxUP1QuYXBwbHkodGhpcyxhcmd1bWVudHMpOihlKHRoaXMuY29udGV4dCkub24odCx0aGlzLnNlbGVjdG9yLG4sYSksdGhpcyl9LGUuZm4uZGllPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHIoXCJqUXVlcnkuZm4uZGllKCkgaXMgZGVwcmVjYXRlZFwiKSxNP00uYXBwbHkodGhpcyxhcmd1bWVudHMpOihlKHRoaXMuY29udGV4dCkub2ZmKHQsdGhpcy5zZWxlY3Rvcnx8XCIqKlwiLG4pLHRoaXMpfSxlLmV2ZW50LnRyaWdnZXI9ZnVuY3Rpb24oZSx0LG4sYSl7cmV0dXJuIG58fEMudGVzdChlKXx8cihcIkdsb2JhbCBldmVudHMgYXJlIHVuZG9jdW1lbnRlZCBhbmQgZGVwcmVjYXRlZFwiKSxrLmNhbGwodGhpcyxlLHQsbnx8ZG9jdW1lbnQsYSl9LGUuZWFjaChTLnNwbGl0KFwifFwiKSxmdW5jdGlvbih0LG4pe2UuZXZlbnQuc3BlY2lhbFtuXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiB0IT09ZG9jdW1lbnQmJihlLmV2ZW50LmFkZChkb2N1bWVudCxuK1wiLlwiK2UuZ3VpZCxmdW5jdGlvbigpe2UuZXZlbnQudHJpZ2dlcihuLG51bGwsdCwhMCl9KSxlLl9kYXRhKHRoaXMsbixlLmd1aWQrKykpLCExfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiB0aGlzIT09ZG9jdW1lbnQmJmUuZXZlbnQucmVtb3ZlKGRvY3VtZW50LG4rXCIuXCIrZS5fZGF0YSh0aGlzLG4pKSwhMX19fSl9KGpRdWVyeSx3aW5kb3cpOyIsIi8qIHBlcmZlY3Qtc2Nyb2xsYmFyIHYwLjYuMTAgKi9cbiFmdW5jdGlvbiB0KGUsbixyKXtmdW5jdGlvbiBvKGwscyl7aWYoIW5bbF0pe2lmKCFlW2xdKXt2YXIgYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFzJiZhKXJldHVybiBhKGwsITApO2lmKGkpcmV0dXJuIGkobCwhMCk7dmFyIGM9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitsK1wiJ1wiKTt0aHJvdyBjLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsY312YXIgdT1uW2xdPXtleHBvcnRzOnt9fTtlW2xdWzBdLmNhbGwodS5leHBvcnRzLGZ1bmN0aW9uKHQpe3ZhciBuPWVbbF1bMV1bdF07cmV0dXJuIG8obj9uOnQpfSx1LHUuZXhwb3J0cyx0LGUsbixyKX1yZXR1cm4gbltsXS5leHBvcnRzfWZvcih2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGw9MDtsPHIubGVuZ3RoO2wrKylvKHJbbF0pO3JldHVybiBvfSh7MTpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7dC5mbi5wZXJmZWN0U2Nyb2xsYmFyPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGUpe3ZhciBuPWU7aS5nZXQodGhpcyl8fG8uaW5pdGlhbGl6ZSh0aGlzLG4pfWVsc2V7dmFyIHI9ZTtcInVwZGF0ZVwiPT09cj9vLnVwZGF0ZSh0aGlzKTpcImRlc3Ryb3lcIj09PXImJm8uZGVzdHJveSh0aGlzKX1yZXR1cm4gdCh0aGlzKX0pfX12YXIgbz10KFwiLi4vbWFpblwiKSxpPXQoXCIuLi9wbHVnaW4vaW5zdGFuY2VzXCIpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW1wianF1ZXJ5XCJdLHIpO2Vsc2V7dmFyIGw9d2luZG93LmpRdWVyeT93aW5kb3cualF1ZXJ5OndpbmRvdy4kO1widW5kZWZpbmVkXCIhPXR5cGVvZiBsJiZyKGwpfWUuZXhwb3J0cz1yfSx7XCIuLi9tYWluXCI6NyxcIi4uL3BsdWdpbi9pbnN0YW5jZXNcIjoxOH1dLDI6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7dmFyIG49dC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO24uaW5kZXhPZihlKTwwJiZuLnB1c2goZSksdC5jbGFzc05hbWU9bi5qb2luKFwiIFwiKX1mdW5jdGlvbiBvKHQsZSl7dmFyIG49dC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpLHI9bi5pbmRleE9mKGUpO3I+PTAmJm4uc3BsaWNlKHIsMSksdC5jbGFzc05hbWU9bi5qb2luKFwiIFwiKX1uLmFkZD1mdW5jdGlvbih0LGUpe3QuY2xhc3NMaXN0P3QuY2xhc3NMaXN0LmFkZChlKTpyKHQsZSl9LG4ucmVtb3ZlPWZ1bmN0aW9uKHQsZSl7dC5jbGFzc0xpc3Q/dC5jbGFzc0xpc3QucmVtb3ZlKGUpOm8odCxlKX0sbi5saXN0PWZ1bmN0aW9uKHQpe3JldHVybiB0LmNsYXNzTGlzdD9BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkodC5jbGFzc0xpc3QpOnQuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKX19LHt9XSwzOltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LGUpe3JldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0KVtlXX1mdW5jdGlvbiBvKHQsZSxuKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgbiYmKG49bi50b1N0cmluZygpK1wicHhcIiksdC5zdHlsZVtlXT1uLHR9ZnVuY3Rpb24gaSh0LGUpe2Zvcih2YXIgbiBpbiBlKXt2YXIgcj1lW25dO1wibnVtYmVyXCI9PXR5cGVvZiByJiYocj1yLnRvU3RyaW5nKCkrXCJweFwiKSx0LnN0eWxlW25dPXJ9cmV0dXJuIHR9dmFyIGw9e307bC5lPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtyZXR1cm4gbi5jbGFzc05hbWU9ZSxufSxsLmFwcGVuZFRvPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQodCksdH0sbC5jc3M9ZnVuY3Rpb24odCxlLG4pe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP2kodCxlKTpcInVuZGVmaW5lZFwiPT10eXBlb2Ygbj9yKHQsZSk6byh0LGUsbil9LGwubWF0Y2hlcz1mdW5jdGlvbih0LGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB0Lm1hdGNoZXM/dC5tYXRjaGVzKGUpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0Lm1hdGNoZXNTZWxlY3Rvcj90Lm1hdGNoZXNTZWxlY3RvcihlKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgdC53ZWJraXRNYXRjaGVzU2VsZWN0b3I/dC53ZWJraXRNYXRjaGVzU2VsZWN0b3IoZSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQubW96TWF0Y2hlc1NlbGVjdG9yP3QubW96TWF0Y2hlc1NlbGVjdG9yKGUpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0Lm1zTWF0Y2hlc1NlbGVjdG9yP3QubXNNYXRjaGVzU2VsZWN0b3IoZSk6dm9pZCAwfSxsLnJlbW92ZT1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5yZW1vdmU/dC5yZW1vdmUoKTp0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KX0sbC5xdWVyeUNoaWxkcmVuPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0LmNoaWxkTm9kZXMsZnVuY3Rpb24odCl7cmV0dXJuIGwubWF0Y2hlcyh0LGUpfSl9LGUuZXhwb3J0cz1sfSx7fV0sNDpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPWZ1bmN0aW9uKHQpe3RoaXMuZWxlbWVudD10LHRoaXMuZXZlbnRzPXt9fTtyLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKHQsZSl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHRoaXMuZXZlbnRzW3RdJiYodGhpcy5ldmVudHNbdF09W10pLHRoaXMuZXZlbnRzW3RdLnB1c2goZSksdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodCxlLCExKX0sci5wcm90b3R5cGUudW5iaW5kPWZ1bmN0aW9uKHQsZSl7dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGU7dGhpcy5ldmVudHNbdF09dGhpcy5ldmVudHNbdF0uZmlsdGVyKGZ1bmN0aW9uKHIpe3JldHVybiBuJiZyIT09ZT8hMDoodGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodCxyLCExKSwhMSl9LHRoaXMpfSxyLnByb3RvdHlwZS51bmJpbmRBbGw9ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5ldmVudHMpdGhpcy51bmJpbmQodCl9O3ZhciBvPWZ1bmN0aW9uKCl7dGhpcy5ldmVudEVsZW1lbnRzPVtdfTtvLnByb3RvdHlwZS5ldmVudEVsZW1lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5ldmVudEVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5lbGVtZW50PT09dH0pWzBdO3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYoZT1uZXcgcih0KSx0aGlzLmV2ZW50RWxlbWVudHMucHVzaChlKSksZX0sby5wcm90b3R5cGUuYmluZD1mdW5jdGlvbih0LGUsbil7dGhpcy5ldmVudEVsZW1lbnQodCkuYmluZChlLG4pfSxvLnByb3RvdHlwZS51bmJpbmQ9ZnVuY3Rpb24odCxlLG4pe3RoaXMuZXZlbnRFbGVtZW50KHQpLnVuYmluZChlLG4pfSxvLnByb3RvdHlwZS51bmJpbmRBbGw9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PHRoaXMuZXZlbnRFbGVtZW50cy5sZW5ndGg7dCsrKXRoaXMuZXZlbnRFbGVtZW50c1t0XS51bmJpbmRBbGwoKX0sby5wcm90b3R5cGUub25jZT1mdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpcy5ldmVudEVsZW1lbnQodCksbz1mdW5jdGlvbih0KXtyLnVuYmluZChlLG8pLG4odCl9O3IuYmluZChlLG8pfSxlLmV4cG9ydHM9b30se31dLDU6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7cmV0dXJuIE1hdGguZmxvb3IoNjU1MzYqKDErTWF0aC5yYW5kb20oKSkpLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSl9cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQoKSt0KCkrXCItXCIrdCgpK1wiLVwiK3QoKStcIi1cIit0KCkrXCItXCIrdCgpK3QoKSt0KCl9fSgpfSx7fV0sNjpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPXQoXCIuL2NsYXNzXCIpLG89dChcIi4vZG9tXCIpO24udG9JbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHBhcnNlSW50KHQsMTApfHwwfSxuLmNsb25lPWZ1bmN0aW9uKHQpe2lmKG51bGw9PT10KXJldHVybiBudWxsO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXt2YXIgZT17fTtmb3IodmFyIG4gaW4gdCllW25dPXRoaXMuY2xvbmUodFtuXSk7cmV0dXJuIGV9cmV0dXJuIHR9LG4uZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcy5jbG9uZSh0KTtmb3IodmFyIHIgaW4gZSluW3JdPXRoaXMuY2xvbmUoZVtyXSk7cmV0dXJuIG59LG4uaXNFZGl0YWJsZT1mdW5jdGlvbih0KXtyZXR1cm4gby5tYXRjaGVzKHQsXCJpbnB1dCxbY29udGVudGVkaXRhYmxlXVwiKXx8by5tYXRjaGVzKHQsXCJzZWxlY3QsW2NvbnRlbnRlZGl0YWJsZV1cIil8fG8ubWF0Y2hlcyh0LFwidGV4dGFyZWEsW2NvbnRlbnRlZGl0YWJsZV1cIil8fG8ubWF0Y2hlcyh0LFwiYnV0dG9uLFtjb250ZW50ZWRpdGFibGVdXCIpfSxuLnJlbW92ZVBzQ2xhc3Nlcz1mdW5jdGlvbih0KXtmb3IodmFyIGU9ci5saXN0KHQpLG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIG89ZVtuXTswPT09by5pbmRleE9mKFwicHMtXCIpJiZyLnJlbW92ZSh0LG8pfX0sbi5vdXRlcldpZHRoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRvSW50KG8uY3NzKHQsXCJ3aWR0aFwiKSkrdGhpcy50b0ludChvLmNzcyh0LFwicGFkZGluZ0xlZnRcIikpK3RoaXMudG9JbnQoby5jc3ModCxcInBhZGRpbmdSaWdodFwiKSkrdGhpcy50b0ludChvLmNzcyh0LFwiYm9yZGVyTGVmdFdpZHRoXCIpKSt0aGlzLnRvSW50KG8uY3NzKHQsXCJib3JkZXJSaWdodFdpZHRoXCIpKX0sbi5zdGFydFNjcm9sbGluZz1mdW5jdGlvbih0LGUpe3IuYWRkKHQsXCJwcy1pbi1zY3JvbGxpbmdcIiksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGU/ci5hZGQodCxcInBzLVwiK2UpOihyLmFkZCh0LFwicHMteFwiKSxyLmFkZCh0LFwicHMteVwiKSl9LG4uc3RvcFNjcm9sbGluZz1mdW5jdGlvbih0LGUpe3IucmVtb3ZlKHQsXCJwcy1pbi1zY3JvbGxpbmdcIiksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGU/ci5yZW1vdmUodCxcInBzLVwiK2UpOihyLnJlbW92ZSh0LFwicHMteFwiKSxyLnJlbW92ZSh0LFwicHMteVwiKSl9LG4uZW52PXtpc1dlYktpdDpcIldlYmtpdEFwcGVhcmFuY2VcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxzdXBwb3J0c1RvdWNoOlwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoLHN1cHBvcnRzSWVQb2ludGVyOm51bGwhPT13aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHN9fSx7XCIuL2NsYXNzXCI6MixcIi4vZG9tXCI6M31dLDc6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj10KFwiLi9wbHVnaW4vZGVzdHJveVwiKSxvPXQoXCIuL3BsdWdpbi9pbml0aWFsaXplXCIpLGk9dChcIi4vcGx1Z2luL3VwZGF0ZVwiKTtlLmV4cG9ydHM9e2luaXRpYWxpemU6byx1cGRhdGU6aSxkZXN0cm95OnJ9fSx7XCIuL3BsdWdpbi9kZXN0cm95XCI6OSxcIi4vcGx1Z2luL2luaXRpYWxpemVcIjoxNyxcIi4vcGx1Z2luL3VwZGF0ZVwiOjIxfV0sODpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz17bWF4U2Nyb2xsYmFyTGVuZ3RoOm51bGwsbWluU2Nyb2xsYmFyTGVuZ3RoOm51bGwsc2Nyb2xsWE1hcmdpbk9mZnNldDowLHNjcm9sbFlNYXJnaW5PZmZzZXQ6MCxzdG9wUHJvcGFnYXRpb25PbkNsaWNrOiEwLHN1cHByZXNzU2Nyb2xsWDohMSxzdXBwcmVzc1Njcm9sbFk6ITEsc3dpcGVQcm9wYWdhdGlvbjohMCx1c2VCb3RoV2hlZWxBeGVzOiExLHVzZUtleWJvYXJkOiEwLHVzZVNlbGVjdGlvblNjcm9sbDohMSx3aGVlbFByb3BhZ2F0aW9uOiExLHdoZWVsU3BlZWQ6MSx0aGVtZTpcImRlZmF1bHRcIn19LHt9XSw5OltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9dChcIi4uL2xpYi9kb21cIiksbz10KFwiLi4vbGliL2hlbHBlclwiKSxpPXQoXCIuL2luc3RhbmNlc1wiKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9aS5nZXQodCk7ZSYmKGUuZXZlbnQudW5iaW5kQWxsKCksci5yZW1vdmUoZS5zY3JvbGxiYXJYKSxyLnJlbW92ZShlLnNjcm9sbGJhclkpLHIucmVtb3ZlKGUuc2Nyb2xsYmFyWFJhaWwpLHIucmVtb3ZlKGUuc2Nyb2xsYmFyWVJhaWwpLG8ucmVtb3ZlUHNDbGFzc2VzKHQpLGkucmVtb3ZlKHQpKX19LHtcIi4uL2xpYi9kb21cIjozLFwiLi4vbGliL2hlbHBlclwiOjYsXCIuL2luc3RhbmNlc1wiOjE4fV0sMTA6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7ZnVuY3Rpb24gbih0KXtyZXR1cm4gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKX12YXIgcj13aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbi5iaW5kO2Uuc2V0dGluZ3Muc3RvcFByb3BhZ2F0aW9uT25DbGljayYmZS5ldmVudC5iaW5kKGUuc2Nyb2xsYmFyWSxcImNsaWNrXCIsciksZS5ldmVudC5iaW5kKGUuc2Nyb2xsYmFyWVJhaWwsXCJjbGlja1wiLGZ1bmN0aW9uKHIpe3ZhciBpPW8udG9JbnQoZS5zY3JvbGxiYXJZSGVpZ2h0LzIpLGE9ZS5yYWlsWVJhdGlvKihyLnBhZ2VZLXdpbmRvdy5wYWdlWU9mZnNldC1uKGUuc2Nyb2xsYmFyWVJhaWwpLnRvcC1pKSxjPWUucmFpbFlSYXRpbyooZS5yYWlsWUhlaWdodC1lLnNjcm9sbGJhcllIZWlnaHQpLHU9YS9jOzA+dT91PTA6dT4xJiYodT0xKSxzKHQsXCJ0b3BcIiwoZS5jb250ZW50SGVpZ2h0LWUuY29udGFpbmVySGVpZ2h0KSp1KSxsKHQpLHIuc3RvcFByb3BhZ2F0aW9uKCl9KSxlLnNldHRpbmdzLnN0b3BQcm9wYWdhdGlvbk9uQ2xpY2smJmUuZXZlbnQuYmluZChlLnNjcm9sbGJhclgsXCJjbGlja1wiLHIpLGUuZXZlbnQuYmluZChlLnNjcm9sbGJhclhSYWlsLFwiY2xpY2tcIixmdW5jdGlvbihyKXt2YXIgaT1vLnRvSW50KGUuc2Nyb2xsYmFyWFdpZHRoLzIpLGE9ZS5yYWlsWFJhdGlvKihyLnBhZ2VYLXdpbmRvdy5wYWdlWE9mZnNldC1uKGUuc2Nyb2xsYmFyWFJhaWwpLmxlZnQtaSksYz1lLnJhaWxYUmF0aW8qKGUucmFpbFhXaWR0aC1lLnNjcm9sbGJhclhXaWR0aCksdT1hL2M7MD51P3U9MDp1PjEmJih1PTEpLHModCxcImxlZnRcIiwoZS5jb250ZW50V2lkdGgtZS5jb250YWluZXJXaWR0aCkqdS1lLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCksbCh0KSxyLnN0b3BQcm9wYWdhdGlvbigpfSl9dmFyIG89dChcIi4uLy4uL2xpYi9oZWxwZXJcIiksaT10KFwiLi4vaW5zdGFuY2VzXCIpLGw9dChcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiKSxzPXQoXCIuLi91cGRhdGUtc2Nyb2xsXCIpO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1pLmdldCh0KTtyKHQsZSl9fSx7XCIuLi8uLi9saWIvaGVscGVyXCI6NixcIi4uL2luc3RhbmNlc1wiOjE4LFwiLi4vdXBkYXRlLWdlb21ldHJ5XCI6MTksXCIuLi91cGRhdGUtc2Nyb2xsXCI6MjB9XSwxMTpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlKXtmdW5jdGlvbiBuKG4pe3ZhciBvPXIrbiplLnJhaWxYUmF0aW8saT1NYXRoLm1heCgwLGUuc2Nyb2xsYmFyWFJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkrZS5yYWlsWFJhdGlvKihlLnJhaWxYV2lkdGgtZS5zY3JvbGxiYXJYV2lkdGgpOzA+bz9lLnNjcm9sbGJhclhMZWZ0PTA6bz5pP2Uuc2Nyb2xsYmFyWExlZnQ9aTplLnNjcm9sbGJhclhMZWZ0PW87dmFyIHM9bC50b0ludChlLnNjcm9sbGJhclhMZWZ0KihlLmNvbnRlbnRXaWR0aC1lLmNvbnRhaW5lcldpZHRoKS8oZS5jb250YWluZXJXaWR0aC1lLnJhaWxYUmF0aW8qZS5zY3JvbGxiYXJYV2lkdGgpKS1lLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudDtjKHQsXCJsZWZ0XCIscyl9dmFyIHI9bnVsbCxvPW51bGwscz1mdW5jdGlvbihlKXtuKGUucGFnZVgtbyksYSh0KSxlLnN0b3BQcm9wYWdhdGlvbigpLGUucHJldmVudERlZmF1bHQoKX0sdT1mdW5jdGlvbigpe2wuc3RvcFNjcm9sbGluZyh0LFwieFwiKSxlLmV2ZW50LnVuYmluZChlLm93bmVyRG9jdW1lbnQsXCJtb3VzZW1vdmVcIixzKX07ZS5ldmVudC5iaW5kKGUuc2Nyb2xsYmFyWCxcIm1vdXNlZG93blwiLGZ1bmN0aW9uKG4pe289bi5wYWdlWCxyPWwudG9JbnQoaS5jc3MoZS5zY3JvbGxiYXJYLFwibGVmdFwiKSkqZS5yYWlsWFJhdGlvLGwuc3RhcnRTY3JvbGxpbmcodCxcInhcIiksZS5ldmVudC5iaW5kKGUub3duZXJEb2N1bWVudCxcIm1vdXNlbW92ZVwiLHMpLGUuZXZlbnQub25jZShlLm93bmVyRG9jdW1lbnQsXCJtb3VzZXVwXCIsdSksbi5zdG9wUHJvcGFnYXRpb24oKSxuLnByZXZlbnREZWZhdWx0KCl9KX1mdW5jdGlvbiBvKHQsZSl7ZnVuY3Rpb24gbihuKXt2YXIgbz1yK24qZS5yYWlsWVJhdGlvLGk9TWF0aC5tYXgoMCxlLnNjcm9sbGJhcllSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkrZS5yYWlsWVJhdGlvKihlLnJhaWxZSGVpZ2h0LWUuc2Nyb2xsYmFyWUhlaWdodCk7MD5vP2Uuc2Nyb2xsYmFyWVRvcD0wOm8+aT9lLnNjcm9sbGJhcllUb3A9aTplLnNjcm9sbGJhcllUb3A9bzt2YXIgcz1sLnRvSW50KGUuc2Nyb2xsYmFyWVRvcCooZS5jb250ZW50SGVpZ2h0LWUuY29udGFpbmVySGVpZ2h0KS8oZS5jb250YWluZXJIZWlnaHQtZS5yYWlsWVJhdGlvKmUuc2Nyb2xsYmFyWUhlaWdodCkpO2ModCxcInRvcFwiLHMpfXZhciByPW51bGwsbz1udWxsLHM9ZnVuY3Rpb24oZSl7bihlLnBhZ2VZLW8pLGEodCksZS5zdG9wUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCl9LHU9ZnVuY3Rpb24oKXtsLnN0b3BTY3JvbGxpbmcodCxcInlcIiksZS5ldmVudC51bmJpbmQoZS5vd25lckRvY3VtZW50LFwibW91c2Vtb3ZlXCIscyl9O2UuZXZlbnQuYmluZChlLnNjcm9sbGJhclksXCJtb3VzZWRvd25cIixmdW5jdGlvbihuKXtvPW4ucGFnZVkscj1sLnRvSW50KGkuY3NzKGUuc2Nyb2xsYmFyWSxcInRvcFwiKSkqZS5yYWlsWVJhdGlvLGwuc3RhcnRTY3JvbGxpbmcodCxcInlcIiksZS5ldmVudC5iaW5kKGUub3duZXJEb2N1bWVudCxcIm1vdXNlbW92ZVwiLHMpLGUuZXZlbnQub25jZShlLm93bmVyRG9jdW1lbnQsXCJtb3VzZXVwXCIsdSksbi5zdG9wUHJvcGFnYXRpb24oKSxuLnByZXZlbnREZWZhdWx0KCl9KX12YXIgaT10KFwiLi4vLi4vbGliL2RvbVwiKSxsPXQoXCIuLi8uLi9saWIvaGVscGVyXCIpLHM9dChcIi4uL2luc3RhbmNlc1wiKSxhPXQoXCIuLi91cGRhdGUtZ2VvbWV0cnlcIiksYz10KFwiLi4vdXBkYXRlLXNjcm9sbFwiKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9cy5nZXQodCk7cih0LGUpLG8odCxlKX19LHtcIi4uLy4uL2xpYi9kb21cIjozLFwiLi4vLi4vbGliL2hlbHBlclwiOjYsXCIuLi9pbnN0YW5jZXNcIjoxOCxcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiOjE5LFwiLi4vdXBkYXRlLXNjcm9sbFwiOjIwfV0sMTI6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7ZnVuY3Rpb24gbihuLHIpe3ZhciBvPXQuc2Nyb2xsVG9wO2lmKDA9PT1uKXtpZighZS5zY3JvbGxiYXJZQWN0aXZlKXJldHVybiExO2lmKDA9PT1vJiZyPjB8fG8+PWUuY29udGVudEhlaWdodC1lLmNvbnRhaW5lckhlaWdodCYmMD5yKXJldHVybiFlLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb259dmFyIGk9dC5zY3JvbGxMZWZ0O2lmKDA9PT1yKXtpZighZS5zY3JvbGxiYXJYQWN0aXZlKXJldHVybiExO2lmKDA9PT1pJiYwPm58fGk+PWUuY29udGVudFdpZHRoLWUuY29udGFpbmVyV2lkdGgmJm4+MClyZXR1cm4hZS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9ufXJldHVybiEwfXZhciByPSExO2UuZXZlbnQuYmluZCh0LFwibW91c2VlbnRlclwiLGZ1bmN0aW9uKCl7cj0hMH0pLGUuZXZlbnQuYmluZCh0LFwibW91c2VsZWF2ZVwiLGZ1bmN0aW9uKCl7cj0hMX0pO3ZhciBsPSExO2UuZXZlbnQuYmluZChlLm93bmVyRG9jdW1lbnQsXCJrZXlkb3duXCIsZnVuY3Rpb24oYyl7aWYoIWMuaXNEZWZhdWx0UHJldmVudGVkfHwhYy5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7dmFyIHU9aS5tYXRjaGVzKGUuc2Nyb2xsYmFyWCxcIjpmb2N1c1wiKXx8aS5tYXRjaGVzKGUuc2Nyb2xsYmFyWSxcIjpmb2N1c1wiKTtpZihyfHx1KXt2YXIgZD1kb2N1bWVudC5hY3RpdmVFbGVtZW50P2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ6ZS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7aWYoZCl7Zm9yKDtkLnNoYWRvd1Jvb3Q7KWQ9ZC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7aWYoby5pc0VkaXRhYmxlKGQpKXJldHVybn12YXIgcD0wLGY9MDtzd2l0Y2goYy53aGljaCl7Y2FzZSAzNzpwPS0zMDticmVhaztjYXNlIDM4OmY9MzA7YnJlYWs7Y2FzZSAzOTpwPTMwO2JyZWFrO2Nhc2UgNDA6Zj0tMzA7YnJlYWs7Y2FzZSAzMzpmPTkwO2JyZWFrO2Nhc2UgMzI6Zj1jLnNoaWZ0S2V5PzkwOi05MDticmVhaztjYXNlIDM0OmY9LTkwO2JyZWFrO2Nhc2UgMzU6Zj1jLmN0cmxLZXk/LWUuY29udGVudEhlaWdodDotZS5jb250YWluZXJIZWlnaHQ7YnJlYWs7Y2FzZSAzNjpmPWMuY3RybEtleT90LnNjcm9sbFRvcDplLmNvbnRhaW5lckhlaWdodDticmVhaztkZWZhdWx0OnJldHVybn1hKHQsXCJ0b3BcIix0LnNjcm9sbFRvcC1mKSxhKHQsXCJsZWZ0XCIsdC5zY3JvbGxMZWZ0K3ApLHModCksbD1uKHAsZiksbCYmYy5wcmV2ZW50RGVmYXVsdCgpfX19KX12YXIgbz10KFwiLi4vLi4vbGliL2hlbHBlclwiKSxpPXQoXCIuLi8uLi9saWIvZG9tXCIpLGw9dChcIi4uL2luc3RhbmNlc1wiKSxzPXQoXCIuLi91cGRhdGUtZ2VvbWV0cnlcIiksYT10KFwiLi4vdXBkYXRlLXNjcm9sbFwiKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9bC5nZXQodCk7cih0LGUpfX0se1wiLi4vLi4vbGliL2RvbVwiOjMsXCIuLi8uLi9saWIvaGVscGVyXCI6NixcIi4uL2luc3RhbmNlc1wiOjE4LFwiLi4vdXBkYXRlLWdlb21ldHJ5XCI6MTksXCIuLi91cGRhdGUtc2Nyb2xsXCI6MjB9XSwxMzpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlKXtmdW5jdGlvbiBuKG4scil7dmFyIG89dC5zY3JvbGxUb3A7aWYoMD09PW4pe2lmKCFlLnNjcm9sbGJhcllBY3RpdmUpcmV0dXJuITE7aWYoMD09PW8mJnI+MHx8bz49ZS5jb250ZW50SGVpZ2h0LWUuY29udGFpbmVySGVpZ2h0JiYwPnIpcmV0dXJuIWUuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbn12YXIgaT10LnNjcm9sbExlZnQ7aWYoMD09PXIpe2lmKCFlLnNjcm9sbGJhclhBY3RpdmUpcmV0dXJuITE7aWYoMD09PWkmJjA+bnx8aT49ZS5jb250ZW50V2lkdGgtZS5jb250YWluZXJXaWR0aCYmbj4wKXJldHVybiFlLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb259cmV0dXJuITB9ZnVuY3Rpb24gcih0KXt2YXIgZT10LmRlbHRhWCxuPS0xKnQuZGVsdGFZO3JldHVybihcInVuZGVmaW5lZFwiPT10eXBlb2YgZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIG4pJiYoZT0tMSp0LndoZWVsRGVsdGFYLzYsbj10LndoZWVsRGVsdGFZLzYpLHQuZGVsdGFNb2RlJiYxPT09dC5kZWx0YU1vZGUmJihlKj0xMCxuKj0xMCksZSE9PWUmJm4hPT1uJiYoZT0wLG49dC53aGVlbERlbHRhKSxbZSxuXX1mdW5jdGlvbiBvKGUsbil7dmFyIHI9dC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWE6aG92ZXJcIik7aWYocil7dmFyIG89ci5zY3JvbGxIZWlnaHQtci5jbGllbnRIZWlnaHQ7aWYobz4wJiYhKDA9PT1yLnNjcm9sbFRvcCYmbj4wfHxyLnNjcm9sbFRvcD09PW8mJjA+bikpcmV0dXJuITA7dmFyIGk9ci5zY3JvbGxMZWZ0LXIuY2xpZW50V2lkdGg7aWYoaT4wJiYhKDA9PT1yLnNjcm9sbExlZnQmJjA+ZXx8ci5zY3JvbGxMZWZ0PT09aSYmZT4wKSlyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBzKHMpe3ZhciBjPXIocyksdT1jWzBdLGQ9Y1sxXTtvKHUsZCl8fChhPSExLGUuc2V0dGluZ3MudXNlQm90aFdoZWVsQXhlcz9lLnNjcm9sbGJhcllBY3RpdmUmJiFlLnNjcm9sbGJhclhBY3RpdmU/KGQ/bCh0LFwidG9wXCIsdC5zY3JvbGxUb3AtZCplLnNldHRpbmdzLndoZWVsU3BlZWQpOmwodCxcInRvcFwiLHQuc2Nyb2xsVG9wK3UqZS5zZXR0aW5ncy53aGVlbFNwZWVkKSxhPSEwKTplLnNjcm9sbGJhclhBY3RpdmUmJiFlLnNjcm9sbGJhcllBY3RpdmUmJih1P2wodCxcImxlZnRcIix0LnNjcm9sbExlZnQrdSplLnNldHRpbmdzLndoZWVsU3BlZWQpOmwodCxcImxlZnRcIix0LnNjcm9sbExlZnQtZCplLnNldHRpbmdzLndoZWVsU3BlZWQpLGE9ITApOihsKHQsXCJ0b3BcIix0LnNjcm9sbFRvcC1kKmUuc2V0dGluZ3Mud2hlZWxTcGVlZCksbCh0LFwibGVmdFwiLHQuc2Nyb2xsTGVmdCt1KmUuc2V0dGluZ3Mud2hlZWxTcGVlZCkpLGkodCksYT1hfHxuKHUsZCksYSYmKHMuc3RvcFByb3BhZ2F0aW9uKCkscy5wcmV2ZW50RGVmYXVsdCgpKSl9dmFyIGE9ITE7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdy5vbndoZWVsP2UuZXZlbnQuYmluZCh0LFwid2hlZWxcIixzKTpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93Lm9ubW91c2V3aGVlbCYmZS5ldmVudC5iaW5kKHQsXCJtb3VzZXdoZWVsXCIscyl9dmFyIG89dChcIi4uL2luc3RhbmNlc1wiKSxpPXQoXCIuLi91cGRhdGUtZ2VvbWV0cnlcIiksbD10KFwiLi4vdXBkYXRlLXNjcm9sbFwiKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9by5nZXQodCk7cih0LGUpfX0se1wiLi4vaW5zdGFuY2VzXCI6MTgsXCIuLi91cGRhdGUtZ2VvbWV0cnlcIjoxOSxcIi4uL3VwZGF0ZS1zY3JvbGxcIjoyMH1dLDE0OltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LGUpe2UuZXZlbnQuYmluZCh0LFwic2Nyb2xsXCIsZnVuY3Rpb24oKXtpKHQpfSl9dmFyIG89dChcIi4uL2luc3RhbmNlc1wiKSxpPXQoXCIuLi91cGRhdGUtZ2VvbWV0cnlcIik7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPW8uZ2V0KHQpO3IodCxlKX19LHtcIi4uL2luc3RhbmNlc1wiOjE4LFwiLi4vdXBkYXRlLWdlb21ldHJ5XCI6MTl9XSwxNTpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlKXtmdW5jdGlvbiBuKCl7dmFyIHQ9d2luZG93LmdldFNlbGVjdGlvbj93aW5kb3cuZ2V0U2VsZWN0aW9uKCk6ZG9jdW1lbnQuZ2V0U2VsZWN0aW9uP2RvY3VtZW50LmdldFNlbGVjdGlvbigpOlwiXCI7cmV0dXJuIDA9PT10LnRvU3RyaW5nKCkubGVuZ3RoP251bGw6dC5nZXRSYW5nZUF0KDApLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyfWZ1bmN0aW9uIHIoKXtjfHwoYz1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3JldHVybiBpLmdldCh0KT8ocyh0LFwidG9wXCIsdC5zY3JvbGxUb3ArdS50b3ApLHModCxcImxlZnRcIix0LnNjcm9sbExlZnQrdS5sZWZ0KSx2b2lkIGwodCkpOnZvaWQgY2xlYXJJbnRlcnZhbChjKX0sNTApKX1mdW5jdGlvbiBhKCl7YyYmKGNsZWFySW50ZXJ2YWwoYyksYz1udWxsKSxvLnN0b3BTY3JvbGxpbmcodCl9dmFyIGM9bnVsbCx1PXt0b3A6MCxsZWZ0OjB9LGQ9ITE7ZS5ldmVudC5iaW5kKGUub3duZXJEb2N1bWVudCxcInNlbGVjdGlvbmNoYW5nZVwiLGZ1bmN0aW9uKCl7dC5jb250YWlucyhuKCkpP2Q9ITA6KGQ9ITEsYSgpKX0pLGUuZXZlbnQuYmluZCh3aW5kb3csXCJtb3VzZXVwXCIsZnVuY3Rpb24oKXtkJiYoZD0hMSxhKCkpfSksZS5ldmVudC5iaW5kKHdpbmRvdyxcIm1vdXNlbW92ZVwiLGZ1bmN0aW9uKGUpe2lmKGQpe3ZhciBuPXt4OmUucGFnZVgseTplLnBhZ2VZfSxpPXtsZWZ0OnQub2Zmc2V0TGVmdCxyaWdodDp0Lm9mZnNldExlZnQrdC5vZmZzZXRXaWR0aCx0b3A6dC5vZmZzZXRUb3AsYm90dG9tOnQub2Zmc2V0VG9wK3Qub2Zmc2V0SGVpZ2h0fTtuLng8aS5sZWZ0KzM/KHUubGVmdD0tNSxvLnN0YXJ0U2Nyb2xsaW5nKHQsXCJ4XCIpKTpuLng+aS5yaWdodC0zPyh1LmxlZnQ9NSxvLnN0YXJ0U2Nyb2xsaW5nKHQsXCJ4XCIpKTp1LmxlZnQ9MCxuLnk8aS50b3ArMz8oaS50b3ArMy1uLnk8NT91LnRvcD0tNTp1LnRvcD0tMjAsby5zdGFydFNjcm9sbGluZyh0LFwieVwiKSk6bi55PmkuYm90dG9tLTM/KG4ueS1pLmJvdHRvbSszPDU/dS50b3A9NTp1LnRvcD0yMCxvLnN0YXJ0U2Nyb2xsaW5nKHQsXCJ5XCIpKTp1LnRvcD0wLDA9PT11LnRvcCYmMD09PXUubGVmdD9hKCk6cigpfX0pfXZhciBvPXQoXCIuLi8uLi9saWIvaGVscGVyXCIpLGk9dChcIi4uL2luc3RhbmNlc1wiKSxsPXQoXCIuLi91cGRhdGUtZ2VvbWV0cnlcIikscz10KFwiLi4vdXBkYXRlLXNjcm9sbFwiKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9aS5nZXQodCk7cih0LGUpfX0se1wiLi4vLi4vbGliL2hlbHBlclwiOjYsXCIuLi9pbnN0YW5jZXNcIjoxOCxcIi4uL3VwZGF0ZS1nZW9tZXRyeVwiOjE5LFwiLi4vdXBkYXRlLXNjcm9sbFwiOjIwfV0sMTY6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSxuLHIpe2Z1bmN0aW9uIHMobixyKXt2YXIgbz10LnNjcm9sbFRvcCxpPXQuc2Nyb2xsTGVmdCxsPU1hdGguYWJzKG4pLHM9TWF0aC5hYnMocik7aWYocz5sKXtpZigwPnImJm89PT1lLmNvbnRlbnRIZWlnaHQtZS5jb250YWluZXJIZWlnaHR8fHI+MCYmMD09PW8pcmV0dXJuIWUuc2V0dGluZ3Muc3dpcGVQcm9wYWdhdGlvbn1lbHNlIGlmKGw+cyYmKDA+biYmaT09PWUuY29udGVudFdpZHRoLWUuY29udGFpbmVyV2lkdGh8fG4+MCYmMD09PWkpKXJldHVybiFlLnNldHRpbmdzLnN3aXBlUHJvcGFnYXRpb247cmV0dXJuITB9ZnVuY3Rpb24gYShlLG4pe2wodCxcInRvcFwiLHQuc2Nyb2xsVG9wLW4pLGwodCxcImxlZnRcIix0LnNjcm9sbExlZnQtZSksaSh0KX1mdW5jdGlvbiBjKCl7WT0hMH1mdW5jdGlvbiB1KCl7WT0hMX1mdW5jdGlvbiBkKHQpe3JldHVybiB0LnRhcmdldFRvdWNoZXM/dC50YXJnZXRUb3VjaGVzWzBdOnR9ZnVuY3Rpb24gcCh0KXtyZXR1cm4gdC50YXJnZXRUb3VjaGVzJiYxPT09dC50YXJnZXRUb3VjaGVzLmxlbmd0aD8hMDp0LnBvaW50ZXJUeXBlJiZcIm1vdXNlXCIhPT10LnBvaW50ZXJUeXBlJiZ0LnBvaW50ZXJUeXBlIT09dC5NU1BPSU5URVJfVFlQRV9NT1VTRT8hMDohMX1mdW5jdGlvbiBmKHQpe2lmKHAodCkpe3c9ITA7dmFyIGU9ZCh0KTt2LnBhZ2VYPWUucGFnZVgsdi5wYWdlWT1lLnBhZ2VZLGc9KG5ldyBEYXRlKS5nZXRUaW1lKCksbnVsbCE9PXkmJmNsZWFySW50ZXJ2YWwoeSksdC5zdG9wUHJvcGFnYXRpb24oKX19ZnVuY3Rpb24gaCh0KXtpZighWSYmdyYmcCh0KSl7dmFyIGU9ZCh0KSxuPXtwYWdlWDplLnBhZ2VYLHBhZ2VZOmUucGFnZVl9LHI9bi5wYWdlWC12LnBhZ2VYLG89bi5wYWdlWS12LnBhZ2VZO2EocixvKSx2PW47dmFyIGk9KG5ldyBEYXRlKS5nZXRUaW1lKCksbD1pLWc7bD4wJiYobS54PXIvbCxtLnk9by9sLGc9aSkscyhyLG8pJiYodC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCkpfX1mdW5jdGlvbiBiKCl7IVkmJncmJih3PSExLGNsZWFySW50ZXJ2YWwoeSkseT1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3JldHVybiBvLmdldCh0KT9NYXRoLmFicyhtLngpPC4wMSYmTWF0aC5hYnMobS55KTwuMDE/dm9pZCBjbGVhckludGVydmFsKHkpOihhKDMwKm0ueCwzMCptLnkpLG0ueCo9Ljgsdm9pZChtLnkqPS44KSk6dm9pZCBjbGVhckludGVydmFsKHkpfSwxMCkpfXZhciB2PXt9LGc9MCxtPXt9LHk9bnVsbCxZPSExLHc9ITE7biYmKGUuZXZlbnQuYmluZCh3aW5kb3csXCJ0b3VjaHN0YXJ0XCIsYyksZS5ldmVudC5iaW5kKHdpbmRvdyxcInRvdWNoZW5kXCIsdSksZS5ldmVudC5iaW5kKHQsXCJ0b3VjaHN0YXJ0XCIsZiksZS5ldmVudC5iaW5kKHQsXCJ0b3VjaG1vdmVcIixoKSxlLmV2ZW50LmJpbmQodCxcInRvdWNoZW5kXCIsYikpLHImJih3aW5kb3cuUG9pbnRlckV2ZW50PyhlLmV2ZW50LmJpbmQod2luZG93LFwicG9pbnRlcmRvd25cIixjKSxlLmV2ZW50LmJpbmQod2luZG93LFwicG9pbnRlcnVwXCIsdSksZS5ldmVudC5iaW5kKHQsXCJwb2ludGVyZG93blwiLGYpLGUuZXZlbnQuYmluZCh0LFwicG9pbnRlcm1vdmVcIixoKSxlLmV2ZW50LmJpbmQodCxcInBvaW50ZXJ1cFwiLGIpKTp3aW5kb3cuTVNQb2ludGVyRXZlbnQmJihlLmV2ZW50LmJpbmQod2luZG93LFwiTVNQb2ludGVyRG93blwiLGMpLGUuZXZlbnQuYmluZCh3aW5kb3csXCJNU1BvaW50ZXJVcFwiLHUpLGUuZXZlbnQuYmluZCh0LFwiTVNQb2ludGVyRG93blwiLGYpLGUuZXZlbnQuYmluZCh0LFwiTVNQb2ludGVyTW92ZVwiLGgpLGUuZXZlbnQuYmluZCh0LFwiTVNQb2ludGVyVXBcIixiKSkpfXZhciBvPXQoXCIuLi9pbnN0YW5jZXNcIiksaT10KFwiLi4vdXBkYXRlLWdlb21ldHJ5XCIpLGw9dChcIi4uL3VwZGF0ZS1zY3JvbGxcIik7ZS5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1vLmdldCh0KTtyKHQsaSxlLG4pfX0se1wiLi4vaW5zdGFuY2VzXCI6MTgsXCIuLi91cGRhdGUtZ2VvbWV0cnlcIjoxOSxcIi4uL3VwZGF0ZS1zY3JvbGxcIjoyMH1dLDE3OltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9dChcIi4uL2xpYi9jbGFzc1wiKSxvPXQoXCIuLi9saWIvaGVscGVyXCIpLGk9dChcIi4vaW5zdGFuY2VzXCIpLGw9dChcIi4vdXBkYXRlLWdlb21ldHJ5XCIpLHM9dChcIi4vaGFuZGxlci9jbGljay1yYWlsXCIpLGE9dChcIi4vaGFuZGxlci9kcmFnLXNjcm9sbGJhclwiKSxjPXQoXCIuL2hhbmRsZXIva2V5Ym9hcmRcIiksdT10KFwiLi9oYW5kbGVyL21vdXNlLXdoZWVsXCIpLGQ9dChcIi4vaGFuZGxlci9uYXRpdmUtc2Nyb2xsXCIpLHA9dChcIi4vaGFuZGxlci9zZWxlY3Rpb25cIiksZj10KFwiLi9oYW5kbGVyL3RvdWNoXCIpO2UuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2U9XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fSxyLmFkZCh0LFwicHMtY29udGFpbmVyXCIpO3ZhciBuPWkuYWRkKHQpO24uc2V0dGluZ3M9by5leHRlbmQobi5zZXR0aW5ncyxlKSxyLmFkZCh0LFwicHMtdGhlbWUtXCIrbi5zZXR0aW5ncy50aGVtZSkscyh0KSxhKHQpLHUodCksZCh0KSxuLnNldHRpbmdzLnVzZVNlbGVjdGlvblNjcm9sbCYmcCh0KSwoby5lbnYuc3VwcG9ydHNUb3VjaHx8by5lbnYuc3VwcG9ydHNJZVBvaW50ZXIpJiZmKHQsby5lbnYuc3VwcG9ydHNUb3VjaCxvLmVudi5zdXBwb3J0c0llUG9pbnRlciksbi5zZXR0aW5ncy51c2VLZXlib2FyZCYmYyh0KSxsKHQpfX0se1wiLi4vbGliL2NsYXNzXCI6MixcIi4uL2xpYi9oZWxwZXJcIjo2LFwiLi9oYW5kbGVyL2NsaWNrLXJhaWxcIjoxMCxcIi4vaGFuZGxlci9kcmFnLXNjcm9sbGJhclwiOjExLFwiLi9oYW5kbGVyL2tleWJvYXJkXCI6MTIsXCIuL2hhbmRsZXIvbW91c2Utd2hlZWxcIjoxMyxcIi4vaGFuZGxlci9uYXRpdmUtc2Nyb2xsXCI6MTQsXCIuL2hhbmRsZXIvc2VsZWN0aW9uXCI6MTUsXCIuL2hhbmRsZXIvdG91Y2hcIjoxNixcIi4vaW5zdGFuY2VzXCI6MTgsXCIuL3VwZGF0ZS1nZW9tZXRyeVwiOjE5fV0sMTg6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe2Z1bmN0aW9uIGUoKXtzLmFkZCh0LFwicHMtZm9jdXNcIil9ZnVuY3Rpb24gbigpe3MucmVtb3ZlKHQsXCJwcy1mb2N1c1wiKX12YXIgcj10aGlzO3Iuc2V0dGluZ3M9cC5jbG9uZShjKSxyLmNvbnRhaW5lcldpZHRoPW51bGwsci5jb250YWluZXJIZWlnaHQ9bnVsbCxyLmNvbnRlbnRXaWR0aD1udWxsLHIuY29udGVudEhlaWdodD1udWxsLHIuaXNSdGw9XCJydGxcIj09PWEuY3NzKHQsXCJkaXJlY3Rpb25cIiksci5pc05lZ2F0aXZlU2Nyb2xsPWZ1bmN0aW9uKCl7dmFyIGU9dC5zY3JvbGxMZWZ0LG49bnVsbDtyZXR1cm4gdC5zY3JvbGxMZWZ0PS0xLG49dC5zY3JvbGxMZWZ0PDAsdC5zY3JvbGxMZWZ0PWUsbn0oKSxyLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudD1yLmlzTmVnYXRpdmVTY3JvbGw/dC5zY3JvbGxXaWR0aC10LmNsaWVudFdpZHRoOjAsci5ldmVudD1uZXcgdSxyLm93bmVyRG9jdW1lbnQ9dC5vd25lckRvY3VtZW50fHxkb2N1bWVudCxyLnNjcm9sbGJhclhSYWlsPWEuYXBwZW5kVG8oYS5lKFwiZGl2XCIsXCJwcy1zY3JvbGxiYXIteC1yYWlsXCIpLHQpLHIuc2Nyb2xsYmFyWD1hLmFwcGVuZFRvKGEuZShcImRpdlwiLFwicHMtc2Nyb2xsYmFyLXhcIiksci5zY3JvbGxiYXJYUmFpbCksci5zY3JvbGxiYXJYLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsMCksci5ldmVudC5iaW5kKHIuc2Nyb2xsYmFyWCxcImZvY3VzXCIsZSksci5ldmVudC5iaW5kKHIuc2Nyb2xsYmFyWCxcImJsdXJcIixuKSxyLnNjcm9sbGJhclhBY3RpdmU9bnVsbCxyLnNjcm9sbGJhclhXaWR0aD1udWxsLHIuc2Nyb2xsYmFyWExlZnQ9bnVsbCxyLnNjcm9sbGJhclhCb3R0b209cC50b0ludChhLmNzcyhyLnNjcm9sbGJhclhSYWlsLFwiYm90dG9tXCIpKSxyLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tPXIuc2Nyb2xsYmFyWEJvdHRvbT09PXIuc2Nyb2xsYmFyWEJvdHRvbSxyLnNjcm9sbGJhclhUb3A9ci5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbT9udWxsOnAudG9JbnQoYS5jc3Moci5zY3JvbGxiYXJYUmFpbCxcInRvcFwiKSksci5yYWlsQm9yZGVyWFdpZHRoPXAudG9JbnQoYS5jc3Moci5zY3JvbGxiYXJYUmFpbCxcImJvcmRlckxlZnRXaWR0aFwiKSkrcC50b0ludChhLmNzcyhyLnNjcm9sbGJhclhSYWlsLFwiYm9yZGVyUmlnaHRXaWR0aFwiKSksYS5jc3Moci5zY3JvbGxiYXJYUmFpbCxcImRpc3BsYXlcIixcImJsb2NrXCIpLHIucmFpbFhNYXJnaW5XaWR0aD1wLnRvSW50KGEuY3NzKHIuc2Nyb2xsYmFyWFJhaWwsXCJtYXJnaW5MZWZ0XCIpKStwLnRvSW50KGEuY3NzKHIuc2Nyb2xsYmFyWFJhaWwsXCJtYXJnaW5SaWdodFwiKSksYS5jc3Moci5zY3JvbGxiYXJYUmFpbCxcImRpc3BsYXlcIixcIlwiKSxyLnJhaWxYV2lkdGg9bnVsbCxyLnJhaWxYUmF0aW89bnVsbCxyLnNjcm9sbGJhcllSYWlsPWEuYXBwZW5kVG8oYS5lKFwiZGl2XCIsXCJwcy1zY3JvbGxiYXIteS1yYWlsXCIpLHQpLHIuc2Nyb2xsYmFyWT1hLmFwcGVuZFRvKGEuZShcImRpdlwiLFwicHMtc2Nyb2xsYmFyLXlcIiksci5zY3JvbGxiYXJZUmFpbCksci5zY3JvbGxiYXJZLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsMCksci5ldmVudC5iaW5kKHIuc2Nyb2xsYmFyWSxcImZvY3VzXCIsZSksci5ldmVudC5iaW5kKHIuc2Nyb2xsYmFyWSxcImJsdXJcIixuKSxyLnNjcm9sbGJhcllBY3RpdmU9bnVsbCxyLnNjcm9sbGJhcllIZWlnaHQ9bnVsbCxyLnNjcm9sbGJhcllUb3A9bnVsbCxyLnNjcm9sbGJhcllSaWdodD1wLnRvSW50KGEuY3NzKHIuc2Nyb2xsYmFyWVJhaWwsXCJyaWdodFwiKSksci5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0PXIuc2Nyb2xsYmFyWVJpZ2h0PT09ci5zY3JvbGxiYXJZUmlnaHQsci5zY3JvbGxiYXJZTGVmdD1yLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQ/bnVsbDpwLnRvSW50KGEuY3NzKHIuc2Nyb2xsYmFyWVJhaWwsXCJsZWZ0XCIpKSxyLnNjcm9sbGJhcllPdXRlcldpZHRoPXIuaXNSdGw/cC5vdXRlcldpZHRoKHIuc2Nyb2xsYmFyWSk6bnVsbCxyLnJhaWxCb3JkZXJZV2lkdGg9cC50b0ludChhLmNzcyhyLnNjcm9sbGJhcllSYWlsLFwiYm9yZGVyVG9wV2lkdGhcIikpK3AudG9JbnQoYS5jc3Moci5zY3JvbGxiYXJZUmFpbCxcImJvcmRlckJvdHRvbVdpZHRoXCIpKSxhLmNzcyhyLnNjcm9sbGJhcllSYWlsLFwiZGlzcGxheVwiLFwiYmxvY2tcIiksci5yYWlsWU1hcmdpbkhlaWdodD1wLnRvSW50KGEuY3NzKHIuc2Nyb2xsYmFyWVJhaWwsXCJtYXJnaW5Ub3BcIikpK3AudG9JbnQoYS5jc3Moci5zY3JvbGxiYXJZUmFpbCxcIm1hcmdpbkJvdHRvbVwiKSksYS5jc3Moci5zY3JvbGxiYXJZUmFpbCxcImRpc3BsYXlcIixcIlwiKSxyLnJhaWxZSGVpZ2h0PW51bGwsci5yYWlsWVJhdGlvPW51bGx9ZnVuY3Rpb24gbyh0KXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgdC5kYXRhc2V0P3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcy1pZFwiKTp0LmRhdGFzZXQucHNJZH1mdW5jdGlvbiBpKHQsZSl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQuZGF0YXNldD90LnNldEF0dHJpYnV0ZShcImRhdGEtcHMtaWRcIixlKTp0LmRhdGFzZXQucHNJZD1lfWZ1bmN0aW9uIGwodCl7XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQuZGF0YXNldD90LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcHMtaWRcIik6ZGVsZXRlIHQuZGF0YXNldC5wc0lkfXZhciBzPXQoXCIuLi9saWIvY2xhc3NcIiksYT10KFwiLi4vbGliL2RvbVwiKSxjPXQoXCIuL2RlZmF1bHQtc2V0dGluZ1wiKSx1PXQoXCIuLi9saWIvZXZlbnQtbWFuYWdlclwiKSxkPXQoXCIuLi9saWIvZ3VpZFwiKSxwPXQoXCIuLi9saWIvaGVscGVyXCIpLGY9e307bi5hZGQ9ZnVuY3Rpb24odCl7dmFyIGU9ZCgpO3JldHVybiBpKHQsZSksZltlXT1uZXcgcih0KSxmW2VdfSxuLnJlbW92ZT1mdW5jdGlvbih0KXtkZWxldGUgZltvKHQpXSxsKHQpfSxuLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gZltvKHQpXX19LHtcIi4uL2xpYi9jbGFzc1wiOjIsXCIuLi9saWIvZG9tXCI6MyxcIi4uL2xpYi9ldmVudC1tYW5hZ2VyXCI6NCxcIi4uL2xpYi9ndWlkXCI6NSxcIi4uL2xpYi9oZWxwZXJcIjo2LFwiLi9kZWZhdWx0LXNldHRpbmdcIjo4fV0sMTk6W2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7cmV0dXJuIHQuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoJiYoZT1NYXRoLm1heChlLHQuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKSksdC5zZXR0aW5ncy5tYXhTY3JvbGxiYXJMZW5ndGgmJihlPU1hdGgubWluKGUsdC5zZXR0aW5ncy5tYXhTY3JvbGxiYXJMZW5ndGgpKSxlfWZ1bmN0aW9uIG8odCxlKXt2YXIgbj17d2lkdGg6ZS5yYWlsWFdpZHRofTtlLmlzUnRsP24ubGVmdD1lLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCt0LnNjcm9sbExlZnQrZS5jb250YWluZXJXaWR0aC1lLmNvbnRlbnRXaWR0aDpuLmxlZnQ9dC5zY3JvbGxMZWZ0LGUuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20/bi5ib3R0b209ZS5zY3JvbGxiYXJYQm90dG9tLXQuc2Nyb2xsVG9wOm4udG9wPWUuc2Nyb2xsYmFyWFRvcCt0LnNjcm9sbFRvcCxsLmNzcyhlLnNjcm9sbGJhclhSYWlsLG4pO3ZhciByPXt0b3A6dC5zY3JvbGxUb3AsaGVpZ2h0OmUucmFpbFlIZWlnaHR9O2UuaXNTY3JvbGxiYXJZVXNpbmdSaWdodD9lLmlzUnRsP3IucmlnaHQ9ZS5jb250ZW50V2lkdGgtKGUubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50K3Quc2Nyb2xsTGVmdCktZS5zY3JvbGxiYXJZUmlnaHQtZS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDpyLnJpZ2h0PWUuc2Nyb2xsYmFyWVJpZ2h0LXQuc2Nyb2xsTGVmdDplLmlzUnRsP3IubGVmdD1lLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCt0LnNjcm9sbExlZnQrMiplLmNvbnRhaW5lcldpZHRoLWUuY29udGVudFdpZHRoLWUuc2Nyb2xsYmFyWUxlZnQtZS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDpyLmxlZnQ9ZS5zY3JvbGxiYXJZTGVmdCt0LnNjcm9sbExlZnQsbC5jc3MoZS5zY3JvbGxiYXJZUmFpbCxyKSxsLmNzcyhlLnNjcm9sbGJhclgse2xlZnQ6ZS5zY3JvbGxiYXJYTGVmdCx3aWR0aDplLnNjcm9sbGJhclhXaWR0aC1lLnJhaWxCb3JkZXJYV2lkdGh9KSxsLmNzcyhlLnNjcm9sbGJhclkse3RvcDplLnNjcm9sbGJhcllUb3AsaGVpZ2h0OmUuc2Nyb2xsYmFyWUhlaWdodC1lLnJhaWxCb3JkZXJZV2lkdGh9KX12YXIgaT10KFwiLi4vbGliL2NsYXNzXCIpLGw9dChcIi4uL2xpYi9kb21cIikscz10KFwiLi4vbGliL2hlbHBlclwiKSxhPXQoXCIuL2luc3RhbmNlc1wiKSxjPXQoXCIuL3VwZGF0ZS1zY3JvbGxcIik7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPWEuZ2V0KHQpO2UuY29udGFpbmVyV2lkdGg9dC5jbGllbnRXaWR0aCxlLmNvbnRhaW5lckhlaWdodD10LmNsaWVudEhlaWdodCxlLmNvbnRlbnRXaWR0aD10LnNjcm9sbFdpZHRoLGUuY29udGVudEhlaWdodD10LnNjcm9sbEhlaWdodDt2YXIgbjt0LmNvbnRhaW5zKGUuc2Nyb2xsYmFyWFJhaWwpfHwobj1sLnF1ZXJ5Q2hpbGRyZW4odCxcIi5wcy1zY3JvbGxiYXIteC1yYWlsXCIpLG4ubGVuZ3RoPjAmJm4uZm9yRWFjaChmdW5jdGlvbih0KXtsLnJlbW92ZSh0KX0pLGwuYXBwZW5kVG8oZS5zY3JvbGxiYXJYUmFpbCx0KSksdC5jb250YWlucyhlLnNjcm9sbGJhcllSYWlsKXx8KG49bC5xdWVyeUNoaWxkcmVuKHQsXCIucHMtc2Nyb2xsYmFyLXktcmFpbFwiKSxuLmxlbmd0aD4wJiZuLmZvckVhY2goZnVuY3Rpb24odCl7bC5yZW1vdmUodCl9KSxsLmFwcGVuZFRvKGUuc2Nyb2xsYmFyWVJhaWwsdCkpLCFlLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWCYmZS5jb250YWluZXJXaWR0aCtlLnNldHRpbmdzLnNjcm9sbFhNYXJnaW5PZmZzZXQ8ZS5jb250ZW50V2lkdGg/KGUuc2Nyb2xsYmFyWEFjdGl2ZT0hMCxlLnJhaWxYV2lkdGg9ZS5jb250YWluZXJXaWR0aC1lLnJhaWxYTWFyZ2luV2lkdGgsZS5yYWlsWFJhdGlvPWUuY29udGFpbmVyV2lkdGgvZS5yYWlsWFdpZHRoLGUuc2Nyb2xsYmFyWFdpZHRoPXIoZSxzLnRvSW50KGUucmFpbFhXaWR0aCplLmNvbnRhaW5lcldpZHRoL2UuY29udGVudFdpZHRoKSksZS5zY3JvbGxiYXJYTGVmdD1zLnRvSW50KChlLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCt0LnNjcm9sbExlZnQpKihlLnJhaWxYV2lkdGgtZS5zY3JvbGxiYXJYV2lkdGgpLyhlLmNvbnRlbnRXaWR0aC1lLmNvbnRhaW5lcldpZHRoKSkpOmUuc2Nyb2xsYmFyWEFjdGl2ZT0hMSwhZS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFkmJmUuY29udGFpbmVySGVpZ2h0K2Uuc2V0dGluZ3Muc2Nyb2xsWU1hcmdpbk9mZnNldDxlLmNvbnRlbnRIZWlnaHQ/KGUuc2Nyb2xsYmFyWUFjdGl2ZT0hMCxlLnJhaWxZSGVpZ2h0PWUuY29udGFpbmVySGVpZ2h0LWUucmFpbFlNYXJnaW5IZWlnaHQsZS5yYWlsWVJhdGlvPWUuY29udGFpbmVySGVpZ2h0L2UucmFpbFlIZWlnaHQsZS5zY3JvbGxiYXJZSGVpZ2h0PXIoZSxzLnRvSW50KGUucmFpbFlIZWlnaHQqZS5jb250YWluZXJIZWlnaHQvZS5jb250ZW50SGVpZ2h0KSksZS5zY3JvbGxiYXJZVG9wPXMudG9JbnQodC5zY3JvbGxUb3AqKGUucmFpbFlIZWlnaHQtZS5zY3JvbGxiYXJZSGVpZ2h0KS8oZS5jb250ZW50SGVpZ2h0LWUuY29udGFpbmVySGVpZ2h0KSkpOmUuc2Nyb2xsYmFyWUFjdGl2ZT0hMSxlLnNjcm9sbGJhclhMZWZ0Pj1lLnJhaWxYV2lkdGgtZS5zY3JvbGxiYXJYV2lkdGgmJihlLnNjcm9sbGJhclhMZWZ0PWUucmFpbFhXaWR0aC1lLnNjcm9sbGJhclhXaWR0aCksZS5zY3JvbGxiYXJZVG9wPj1lLnJhaWxZSGVpZ2h0LWUuc2Nyb2xsYmFyWUhlaWdodCYmKGUuc2Nyb2xsYmFyWVRvcD1lLnJhaWxZSGVpZ2h0LWUuc2Nyb2xsYmFyWUhlaWdodCksbyh0LGUpLGUuc2Nyb2xsYmFyWEFjdGl2ZT9pLmFkZCh0LFwicHMtYWN0aXZlLXhcIik6KGkucmVtb3ZlKHQsXCJwcy1hY3RpdmUteFwiKSxlLnNjcm9sbGJhclhXaWR0aD0wLGUuc2Nyb2xsYmFyWExlZnQ9MCxjKHQsXCJsZWZ0XCIsMCkpLGUuc2Nyb2xsYmFyWUFjdGl2ZT9pLmFkZCh0LFwicHMtYWN0aXZlLXlcIik6KGkucmVtb3ZlKHQsXCJwcy1hY3RpdmUteVwiKSxlLnNjcm9sbGJhcllIZWlnaHQ9MCxlLnNjcm9sbGJhcllUb3A9MCxjKHQsXCJ0b3BcIiwwKSl9fSx7XCIuLi9saWIvY2xhc3NcIjoyLFwiLi4vbGliL2RvbVwiOjMsXCIuLi9saWIvaGVscGVyXCI6NixcIi4vaW5zdGFuY2VzXCI6MTgsXCIuL3VwZGF0ZS1zY3JvbGxcIjoyMH1dLDIwOltmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsbyxpPXQoXCIuL2luc3RhbmNlc1wiKSxsPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIikscz1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpLGE9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKSxjPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIiksdT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpLGQ9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKSxwPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIiksZj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpLGg9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKSxiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7bC5pbml0RXZlbnQoXCJwcy1zY3JvbGwtdXBcIiwhMCwhMCkscy5pbml0RXZlbnQoXCJwcy1zY3JvbGwtZG93blwiLCEwLCEwKSxhLmluaXRFdmVudChcInBzLXNjcm9sbC1sZWZ0XCIsITAsITApLGMuaW5pdEV2ZW50KFwicHMtc2Nyb2xsLXJpZ2h0XCIsITAsITApLHUuaW5pdEV2ZW50KFwicHMtc2Nyb2xsLXlcIiwhMCwhMCksZC5pbml0RXZlbnQoXCJwcy1zY3JvbGwteFwiLCEwLCEwKSxwLmluaXRFdmVudChcInBzLXgtcmVhY2gtc3RhcnRcIiwhMCwhMCksZi5pbml0RXZlbnQoXCJwcy14LXJlYWNoLWVuZFwiLCEwLCEwKSxoLmluaXRFdmVudChcInBzLXktcmVhY2gtc3RhcnRcIiwhMCwhMCksYi5pbml0RXZlbnQoXCJwcy15LXJlYWNoLWVuZFwiLCEwLCEwKSxlLmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0KXRocm93XCJZb3UgbXVzdCBwcm92aWRlIGFuIGVsZW1lbnQgdG8gdGhlIHVwZGF0ZS1zY3JvbGwgZnVuY3Rpb25cIjtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZSl0aHJvd1wiWW91IG11c3QgcHJvdmlkZSBhbiBheGlzIHRvIHRoZSB1cGRhdGUtc2Nyb2xsIGZ1bmN0aW9uXCI7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIG4pdGhyb3dcIllvdSBtdXN0IHByb3ZpZGUgYSB2YWx1ZSB0byB0aGUgdXBkYXRlLXNjcm9sbCBmdW5jdGlvblwiO1widG9wXCI9PT1lJiYwPj1uJiYodC5zY3JvbGxUb3A9bj0wLHQuZGlzcGF0Y2hFdmVudChoKSksXCJsZWZ0XCI9PT1lJiYwPj1uJiYodC5zY3JvbGxMZWZ0PW49MCx0LmRpc3BhdGNoRXZlbnQocCkpO3ZhciB2PWkuZ2V0KHQpO1widG9wXCI9PT1lJiZuPj12LmNvbnRlbnRIZWlnaHQtdi5jb250YWluZXJIZWlnaHQmJih0LnNjcm9sbFRvcD1uPXYuY29udGVudEhlaWdodC12LmNvbnRhaW5lckhlaWdodCx0LmRpc3BhdGNoRXZlbnQoYikpLFwibGVmdFwiPT09ZSYmbj49di5jb250ZW50V2lkdGgtdi5jb250YWluZXJXaWR0aCYmKHQuc2Nyb2xsTGVmdD1uPXYuY29udGVudFdpZHRoLXYuY29udGFpbmVyV2lkdGgsdC5kaXNwYXRjaEV2ZW50KGYpKSxyfHwocj10LnNjcm9sbFRvcCksb3x8KG89dC5zY3JvbGxMZWZ0KSxcInRvcFwiPT09ZSYmcj5uJiZ0LmRpc3BhdGNoRXZlbnQobCksXCJ0b3BcIj09PWUmJm4+ciYmdC5kaXNwYXRjaEV2ZW50KHMpLFwibGVmdFwiPT09ZSYmbz5uJiZ0LmRpc3BhdGNoRXZlbnQoYSksXCJsZWZ0XCI9PT1lJiZuPm8mJnQuZGlzcGF0Y2hFdmVudChjKSxcInRvcFwiPT09ZSYmKHQuc2Nyb2xsVG9wPXI9bix0LmRpc3BhdGNoRXZlbnQodSkpLFwibGVmdFwiPT09ZSYmKHQuc2Nyb2xsTGVmdD1vPW4sdC5kaXNwYXRjaEV2ZW50KGQpKX19LHtcIi4vaW5zdGFuY2VzXCI6MTh9XSwyMTpbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPXQoXCIuLi9saWIvZG9tXCIpLG89dChcIi4uL2xpYi9oZWxwZXJcIiksaT10KFwiLi9pbnN0YW5jZXNcIiksbD10KFwiLi91cGRhdGUtZ2VvbWV0cnlcIikscz10KFwiLi91cGRhdGUtc2Nyb2xsXCIpO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1pLmdldCh0KTtlJiYoZS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQ9ZS5pc05lZ2F0aXZlU2Nyb2xsP3Quc2Nyb2xsV2lkdGgtdC5jbGllbnRXaWR0aDowLHIuY3NzKGUuc2Nyb2xsYmFyWFJhaWwsXCJkaXNwbGF5XCIsXCJibG9ja1wiKSxyLmNzcyhlLnNjcm9sbGJhcllSYWlsLFwiZGlzcGxheVwiLFwiYmxvY2tcIiksZS5yYWlsWE1hcmdpbldpZHRoPW8udG9JbnQoci5jc3MoZS5zY3JvbGxiYXJYUmFpbCxcIm1hcmdpbkxlZnRcIikpK28udG9JbnQoci5jc3MoZS5zY3JvbGxiYXJYUmFpbCxcIm1hcmdpblJpZ2h0XCIpKSxlLnJhaWxZTWFyZ2luSGVpZ2h0PW8udG9JbnQoci5jc3MoZS5zY3JvbGxiYXJZUmFpbCxcIm1hcmdpblRvcFwiKSkrby50b0ludChyLmNzcyhlLnNjcm9sbGJhcllSYWlsLFwibWFyZ2luQm90dG9tXCIpKSxyLmNzcyhlLnNjcm9sbGJhclhSYWlsLFwiZGlzcGxheVwiLFwibm9uZVwiKSxyLmNzcyhlLnNjcm9sbGJhcllSYWlsLFwiZGlzcGxheVwiLFwibm9uZVwiKSxsKHQpLHModCxcInRvcFwiLHQuc2Nyb2xsVG9wKSxzKHQsXCJsZWZ0XCIsdC5zY3JvbGxMZWZ0KSxyLmNzcyhlLnNjcm9sbGJhclhSYWlsLFwiZGlzcGxheVwiLFwiXCIpLHIuY3NzKGUuc2Nyb2xsYmFyWVJhaWwsXCJkaXNwbGF5XCIsXCJcIikpfX0se1wiLi4vbGliL2RvbVwiOjMsXCIuLi9saWIvaGVscGVyXCI6NixcIi4vaW5zdGFuY2VzXCI6MTgsXCIuL3VwZGF0ZS1nZW9tZXRyeVwiOjE5LFwiLi91cGRhdGUtc2Nyb2xsXCI6MjB9XX0se30sWzFdKTsiLCIvLyDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJAgXFxcXFxuLy8g4pSCIFJhcGhhw6tsIDIuMS40IC0gSmF2YVNjcmlwdCBWZWN0b3IgTGlicmFyeSAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCIFxcXFxcbi8vIOKUnOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUpCBcXFxcXG4vLyDilIIgQ29weXJpZ2h0IMKpIDIwMDgtMjAxMiBEbWl0cnkgQmFyYW5vdnNraXkgKGh0dHA6Ly9yYXBoYWVsanMuY29tKSAgICDilIIgXFxcXFxuLy8g4pSCIENvcHlyaWdodCDCqSAyMDA4LTIwMTIgU2VuY2hhIExhYnMgKGh0dHA6Ly9zZW5jaGEuY29tKSAgICAgICAgICAgICAg4pSCIFxcXFxcbi8vIOKUnOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUpCBcXFxcXG4vLyDilIIgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCAoaHR0cDovL3JhcGhhZWxqcy5jb20vbGljZW5zZS5odG1sKSBsaWNlbnNlLuKUgiBcXFxcXG4vLyDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJggXFxcXFxuIWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD1cIjAuNC4yXCIsZT1cImhhc093blByb3BlcnR5XCIsZj0vW1xcLlxcL10vLGc9XCIqXCIsaD1mdW5jdGlvbigpe30saT1mdW5jdGlvbihhLGIpe3JldHVybiBhLWJ9LGo9e246e319LGs9ZnVuY3Rpb24oYSxkKXthPVN0cmluZyhhKTt2YXIgZSxmPWMsZz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMiksaD1rLmxpc3RlbmVycyhhKSxqPTAsbD1bXSxtPXt9LG49W10sbz1iO2I9YSxjPTA7Zm9yKHZhciBwPTAscT1oLmxlbmd0aDtxPnA7cCsrKVwiekluZGV4XCJpbiBoW3BdJiYobC5wdXNoKGhbcF0uekluZGV4KSxoW3BdLnpJbmRleDwwJiYobVtoW3BdLnpJbmRleF09aFtwXSkpO2ZvcihsLnNvcnQoaSk7bFtqXTwwOylpZihlPW1bbFtqKytdXSxuLnB1c2goZS5hcHBseShkLGcpKSxjKXJldHVybiBjPWYsbjtmb3IocD0wO3E+cDtwKyspaWYoZT1oW3BdLFwiekluZGV4XCJpbiBlKWlmKGUuekluZGV4PT1sW2pdKXtpZihuLnB1c2goZS5hcHBseShkLGcpKSxjKWJyZWFrO2RvIGlmKGorKyxlPW1bbFtqXV0sZSYmbi5wdXNoKGUuYXBwbHkoZCxnKSksYylicmVhazt3aGlsZShlKX1lbHNlIG1bZS56SW5kZXhdPWU7ZWxzZSBpZihuLnB1c2goZS5hcHBseShkLGcpKSxjKWJyZWFrO3JldHVybiBjPWYsYj1vLG4ubGVuZ3RoP246bnVsbH07ay5fZXZlbnRzPWosay5saXN0ZW5lcnM9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsaCxpLGssbCxtPWEuc3BsaXQoZiksbj1qLG89W25dLHA9W107Zm9yKGU9MCxoPW0ubGVuZ3RoO2g+ZTtlKyspe2ZvcihsPVtdLGk9MCxrPW8ubGVuZ3RoO2s+aTtpKyspZm9yKG49b1tpXS5uLGM9W25bbVtlXV0sbltnXV0sZD0yO2QtLTspYj1jW2RdLGImJihsLnB1c2goYikscD1wLmNvbmNhdChiLmZ8fFtdKSk7bz1sfXJldHVybiBwfSxrLm9uPWZ1bmN0aW9uKGEsYil7aWYoYT1TdHJpbmcoYSksXCJmdW5jdGlvblwiIT10eXBlb2YgYilyZXR1cm4gZnVuY3Rpb24oKXt9O2Zvcih2YXIgYz1hLnNwbGl0KGYpLGQ9aixlPTAsZz1jLmxlbmd0aDtnPmU7ZSsrKWQ9ZC5uLGQ9ZC5oYXNPd25Qcm9wZXJ0eShjW2VdKSYmZFtjW2VdXXx8KGRbY1tlXV09e246e319KTtmb3IoZC5mPWQuZnx8W10sZT0wLGc9ZC5mLmxlbmd0aDtnPmU7ZSsrKWlmKGQuZltlXT09YilyZXR1cm4gaDtyZXR1cm4gZC5mLnB1c2goYiksZnVuY3Rpb24oYSl7K2E9PSthJiYoYi56SW5kZXg9K2EpfX0say5mPWZ1bmN0aW9uKGEpe3ZhciBiPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3JldHVybiBmdW5jdGlvbigpe2suYXBwbHkobnVsbCxbYSxudWxsXS5jb25jYXQoYikuY29uY2F0KFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDApKSl9fSxrLnN0b3A9ZnVuY3Rpb24oKXtjPTF9LGsubnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGE/bmV3IFJlZ0V4cChcIig/OlxcXFwufFxcXFwvfF4pXCIrYStcIig/OlxcXFwufFxcXFwvfCQpXCIpLnRlc3QoYik6Yn0say5udHM9ZnVuY3Rpb24oKXtyZXR1cm4gYi5zcGxpdChmKX0say5vZmY9ay51bmJpbmQ9ZnVuY3Rpb24oYSxiKXtpZighYSlyZXR1cm4gdm9pZChrLl9ldmVudHM9aj17bjp7fX0pO3ZhciBjLGQsaCxpLGwsbSxuLG89YS5zcGxpdChmKSxwPVtqXTtmb3IoaT0wLGw9by5sZW5ndGg7bD5pO2krKylmb3IobT0wO208cC5sZW5ndGg7bSs9aC5sZW5ndGgtMil7aWYoaD1bbSwxXSxjPXBbbV0ubixvW2ldIT1nKWNbb1tpXV0mJmgucHVzaChjW29baV1dKTtlbHNlIGZvcihkIGluIGMpY1tlXShkKSYmaC5wdXNoKGNbZF0pO3Auc3BsaWNlLmFwcGx5KHAsaCl9Zm9yKGk9MCxsPXAubGVuZ3RoO2w+aTtpKyspZm9yKGM9cFtpXTtjLm47KXtpZihiKXtpZihjLmYpe2ZvcihtPTAsbj1jLmYubGVuZ3RoO24+bTttKyspaWYoYy5mW21dPT1iKXtjLmYuc3BsaWNlKG0sMSk7YnJlYWt9IWMuZi5sZW5ndGgmJmRlbGV0ZSBjLmZ9Zm9yKGQgaW4gYy5uKWlmKGMubltlXShkKSYmYy5uW2RdLmYpe3ZhciBxPWMubltkXS5mO2ZvcihtPTAsbj1xLmxlbmd0aDtuPm07bSsrKWlmKHFbbV09PWIpe3Euc3BsaWNlKG0sMSk7YnJlYWt9IXEubGVuZ3RoJiZkZWxldGUgYy5uW2RdLmZ9fWVsc2V7ZGVsZXRlIGMuZjtmb3IoZCBpbiBjLm4pYy5uW2VdKGQpJiZjLm5bZF0uZiYmZGVsZXRlIGMubltkXS5mfWM9Yy5ufX0say5vbmNlPWZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oKXtyZXR1cm4gay51bmJpbmQoYSxjKSxiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cmV0dXJuIGsub24oYSxjKX0say52ZXJzaW9uPWQsay50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiWW91IGFyZSBydW5uaW5nIEV2ZSBcIitkfSxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1rOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBkZWZpbmU/ZGVmaW5lKFwiZXZlXCIsW10sZnVuY3Rpb24oKXtyZXR1cm4ga30pOmEuZXZlPWt9KHdpbmRvd3x8dGhpcyksZnVuY3Rpb24oYSxiKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV2ZVwiXSxmdW5jdGlvbihjKXtyZXR1cm4gYihhLGMpfSk6YihhLGEuZXZlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlKFwiZXZlXCIpKX0odGhpcyxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7aWYoYy5pcyhhLFwiZnVuY3Rpb25cIikpcmV0dXJuIHU/YSgpOmIub24oXCJyYXBoYWVsLkRPTWxvYWRcIixhKTtpZihjLmlzKGEsVikpcmV0dXJuIGMuX2VuZ2luZS5jcmVhdGVbRF0oYyxhLnNwbGljZSgwLDMrYy5pcyhhWzBdLFQpKSkuYWRkKGEpO3ZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywwKTtpZihjLmlzKGRbZC5sZW5ndGgtMV0sXCJmdW5jdGlvblwiKSl7dmFyIGU9ZC5wb3AoKTtyZXR1cm4gdT9lLmNhbGwoYy5fZW5naW5lLmNyZWF0ZVtEXShjLGQpKTpiLm9uKFwicmFwaGFlbC5ET01sb2FkXCIsZnVuY3Rpb24oKXtlLmNhbGwoYy5fZW5naW5lLmNyZWF0ZVtEXShjLGQpKX0pfXJldHVybiBjLl9lbmdpbmUuY3JlYXRlW0RdKGMsYXJndW1lbnRzKX1mdW5jdGlvbiBkKGEpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGF8fE9iamVjdChhKSE9PWEpcmV0dXJuIGE7dmFyIGI9bmV3IGEuY29uc3RydWN0b3I7Zm9yKHZhciBjIGluIGEpYVt6XShjKSYmKGJbY109ZChhW2NdKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylpZihhW2NdPT09YilyZXR1cm4gYS5wdXNoKGEuc3BsaWNlKGMsMSlbMF0pfWZ1bmN0aW9uIGYoYSxiLGMpe2Z1bmN0aW9uIGQoKXt2YXIgZj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMCksZz1mLmpvaW4oXCLikIBcIiksaD1kLmNhY2hlPWQuY2FjaGV8fHt9LGk9ZC5jb3VudD1kLmNvdW50fHxbXTtyZXR1cm4gaFt6XShnKT8oZShpLGcpLGM/YyhoW2ddKTpoW2ddKTooaS5sZW5ndGg+PTFlMyYmZGVsZXRlIGhbaS5zaGlmdCgpXSxpLnB1c2goZyksaFtnXT1hW0RdKGIsZiksYz9jKGhbZ10pOmhbZ10pfXJldHVybiBkfWZ1bmN0aW9uIGcoKXtyZXR1cm4gdGhpcy5oZXh9ZnVuY3Rpb24gaChhLGIpe2Zvcih2YXIgYz1bXSxkPTAsZT1hLmxlbmd0aDtlLTIqIWI+ZDtkKz0yKXt2YXIgZj1be3g6K2FbZC0yXSx5OithW2QtMV19LHt4OithW2RdLHk6K2FbZCsxXX0se3g6K2FbZCsyXSx5OithW2QrM119LHt4OithW2QrNF0seTorYVtkKzVdfV07Yj9kP2UtND09ZD9mWzNdPXt4OithWzBdLHk6K2FbMV19OmUtMj09ZCYmKGZbMl09e3g6K2FbMF0seTorYVsxXX0sZlszXT17eDorYVsyXSx5OithWzNdfSk6ZlswXT17eDorYVtlLTJdLHk6K2FbZS0xXX06ZS00PT1kP2ZbM109ZlsyXTpkfHwoZlswXT17eDorYVtkXSx5OithW2QrMV19KSxjLnB1c2goW1wiQ1wiLCgtZlswXS54KzYqZlsxXS54K2ZbMl0ueCkvNiwoLWZbMF0ueSs2KmZbMV0ueStmWzJdLnkpLzYsKGZbMV0ueCs2KmZbMl0ueC1mWzNdLngpLzYsKGZbMV0ueSs2KmZbMl0ueS1mWzNdLnkpLzYsZlsyXS54LGZbMl0ueV0pfXJldHVybiBjfWZ1bmN0aW9uIGkoYSxiLGMsZCxlKXt2YXIgZj0tMypiKzkqYy05KmQrMyplLGc9YSpmKzYqYi0xMipjKzYqZDtyZXR1cm4gYSpnLTMqYiszKmN9ZnVuY3Rpb24gaihhLGIsYyxkLGUsZixnLGgsail7bnVsbD09aiYmKGo9MSksaj1qPjE/MTowPmo/MDpqO2Zvcih2YXIgaz1qLzIsbD0xMixtPVstLjEyNTIsLjEyNTIsLS4zNjc4LC4zNjc4LC0uNTg3MywuNTg3MywtLjc2OTksLjc2OTksLS45MDQxLC45MDQxLC0uOTgxNiwuOTgxNl0sbj1bLjI0OTEsLjI0OTEsLjIzMzUsLjIzMzUsLjIwMzIsLjIwMzIsLjE2MDEsLjE2MDEsLjEwNjksLjEwNjksLjA0NzIsLjA0NzJdLG89MCxwPTA7bD5wO3ArKyl7dmFyIHE9ayptW3BdK2sscj1pKHEsYSxjLGUsZykscz1pKHEsYixkLGYsaCksdD1yKnIrcypzO28rPW5bcF0qTi5zcXJ0KHQpfXJldHVybiBrKm99ZnVuY3Rpb24gayhhLGIsYyxkLGUsZixnLGgsaSl7aWYoISgwPml8fGooYSxiLGMsZCxlLGYsZyxoKTxpKSl7dmFyIGssbD0xLG09bC8yLG49bC1tLG89LjAxO2ZvcihrPWooYSxiLGMsZCxlLGYsZyxoLG4pO1Eoay1pKT5vOyltLz0yLG4rPShpPms/MTotMSkqbSxrPWooYSxiLGMsZCxlLGYsZyxoLG4pO3JldHVybiBufX1mdW5jdGlvbiBsKGEsYixjLGQsZSxmLGcsaCl7aWYoIShPKGEsYyk8UChlLGcpfHxQKGEsYyk+TyhlLGcpfHxPKGIsZCk8UChmLGgpfHxQKGIsZCk+TyhmLGgpKSl7dmFyIGk9KGEqZC1iKmMpKihlLWcpLShhLWMpKihlKmgtZipnKSxqPShhKmQtYipjKSooZi1oKS0oYi1kKSooZSpoLWYqZyksaz0oYS1jKSooZi1oKS0oYi1kKSooZS1nKTtpZihrKXt2YXIgbD1pL2ssbT1qL2ssbj0rbC50b0ZpeGVkKDIpLG89K20udG9GaXhlZCgyKTtpZighKG48K1AoYSxjKS50b0ZpeGVkKDIpfHxuPitPKGEsYykudG9GaXhlZCgyKXx8bjwrUChlLGcpLnRvRml4ZWQoMil8fG4+K08oZSxnKS50b0ZpeGVkKDIpfHxvPCtQKGIsZCkudG9GaXhlZCgyKXx8bz4rTyhiLGQpLnRvRml4ZWQoMil8fG88K1AoZixoKS50b0ZpeGVkKDIpfHxvPitPKGYsaCkudG9GaXhlZCgyKSkpcmV0dXJue3g6bCx5Om19fX19ZnVuY3Rpb24gbShhLGIsZCl7dmFyIGU9Yy5iZXppZXJCQm94KGEpLGY9Yy5iZXppZXJCQm94KGIpO2lmKCFjLmlzQkJveEludGVyc2VjdChlLGYpKXJldHVybiBkPzA6W107Zm9yKHZhciBnPWouYXBwbHkoMCxhKSxoPWouYXBwbHkoMCxiKSxpPU8ofn4oZy81KSwxKSxrPU8ofn4oaC81KSwxKSxtPVtdLG49W10sbz17fSxwPWQ/MDpbXSxxPTA7aSsxPnE7cSsrKXt2YXIgcj1jLmZpbmREb3RzQXRTZWdtZW50LmFwcGx5KGMsYS5jb25jYXQocS9pKSk7bS5wdXNoKHt4OnIueCx5OnIueSx0OnEvaX0pfWZvcihxPTA7aysxPnE7cSsrKXI9Yy5maW5kRG90c0F0U2VnbWVudC5hcHBseShjLGIuY29uY2F0KHEvaykpLG4ucHVzaCh7eDpyLngseTpyLnksdDpxL2t9KTtmb3IocT0wO2k+cTtxKyspZm9yKHZhciBzPTA7az5zO3MrKyl7dmFyIHQ9bVtxXSx1PW1bcSsxXSx2PW5bc10sdz1uW3MrMV0seD1RKHUueC10LngpPC4wMDE/XCJ5XCI6XCJ4XCIseT1RKHcueC12LngpPC4wMDE/XCJ5XCI6XCJ4XCIsej1sKHQueCx0LnksdS54LHUueSx2Lngsdi55LHcueCx3LnkpO2lmKHope2lmKG9bei54LnRvRml4ZWQoNCldPT16LnkudG9GaXhlZCg0KSljb250aW51ZTtvW3oueC50b0ZpeGVkKDQpXT16LnkudG9GaXhlZCg0KTt2YXIgQT10LnQrUSgoelt4XS10W3hdKS8odVt4XS10W3hdKSkqKHUudC10LnQpLEI9di50K1EoKHpbeV0tdlt5XSkvKHdbeV0tdlt5XSkpKih3LnQtdi50KTtBPj0wJiYxLjAwMT49QSYmQj49MCYmMS4wMDE+PUImJihkP3ArKzpwLnB1c2goe3g6ei54LHk6ei55LHQxOlAoQSwxKSx0MjpQKEIsMSl9KSl9fXJldHVybiBwfWZ1bmN0aW9uIG4oYSxiLGQpe2E9Yy5fcGF0aDJjdXJ2ZShhKSxiPWMuX3BhdGgyY3VydmUoYik7Zm9yKHZhciBlLGYsZyxoLGksaixrLGwsbixvLHA9ZD8wOltdLHE9MCxyPWEubGVuZ3RoO3I+cTtxKyspe3ZhciBzPWFbcV07aWYoXCJNXCI9PXNbMF0pZT1pPXNbMV0sZj1qPXNbMl07ZWxzZXtcIkNcIj09c1swXT8obj1bZSxmXS5jb25jYXQocy5zbGljZSgxKSksZT1uWzZdLGY9bls3XSk6KG49W2UsZixlLGYsaSxqLGksal0sZT1pLGY9aik7Zm9yKHZhciB0PTAsdT1iLmxlbmd0aDt1PnQ7dCsrKXt2YXIgdj1iW3RdO2lmKFwiTVwiPT12WzBdKWc9az12WzFdLGg9bD12WzJdO2Vsc2V7XCJDXCI9PXZbMF0/KG89W2csaF0uY29uY2F0KHYuc2xpY2UoMSkpLGc9b1s2XSxoPW9bN10pOihvPVtnLGgsZyxoLGssbCxrLGxdLGc9ayxoPWwpO3ZhciB3PW0obixvLGQpO2lmKGQpcCs9dztlbHNle2Zvcih2YXIgeD0wLHk9dy5sZW5ndGg7eT54O3grKyl3W3hdLnNlZ21lbnQxPXEsd1t4XS5zZWdtZW50Mj10LHdbeF0uYmV6MT1uLHdbeF0uYmV6Mj1vO3A9cC5jb25jYXQodyl9fX19fXJldHVybiBwfWZ1bmN0aW9uIG8oYSxiLGMsZCxlLGYpe251bGwhPWE/KHRoaXMuYT0rYSx0aGlzLmI9K2IsdGhpcy5jPStjLHRoaXMuZD0rZCx0aGlzLmU9K2UsdGhpcy5mPStmKToodGhpcy5hPTEsdGhpcy5iPTAsdGhpcy5jPTAsdGhpcy5kPTEsdGhpcy5lPTAsdGhpcy5mPTApfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdGhpcy54K0grdGhpcy55K0grdGhpcy53aWR0aCtcIiDDlyBcIit0aGlzLmhlaWdodH1mdW5jdGlvbiBxKGEsYixjLGQsZSxmKXtmdW5jdGlvbiBnKGEpe3JldHVybigobCphK2spKmEraikqYX1mdW5jdGlvbiBoKGEsYil7dmFyIGM9aShhLGIpO3JldHVybigobypjK24pKmMrbSkqY31mdW5jdGlvbiBpKGEsYil7dmFyIGMsZCxlLGYsaCxpO2ZvcihlPWEsaT0wOzg+aTtpKyspe2lmKGY9ZyhlKS1hLFEoZik8YilyZXR1cm4gZTtpZihoPSgzKmwqZSsyKmspKmUraixRKGgpPDFlLTYpYnJlYWs7ZS09Zi9ofWlmKGM9MCxkPTEsZT1hLGM+ZSlyZXR1cm4gYztpZihlPmQpcmV0dXJuIGQ7Zm9yKDtkPmM7KXtpZihmPWcoZSksUShmLWEpPGIpcmV0dXJuIGU7YT5mP2M9ZTpkPWUsZT0oZC1jKS8yK2N9cmV0dXJuIGV9dmFyIGo9MypiLGs9MyooZC1iKS1qLGw9MS1qLWssbT0zKmMsbj0zKihlLWMpLW0sbz0xLW0tbjtyZXR1cm4gaChhLDEvKDIwMCpmKSl9ZnVuY3Rpb24gcihhLGIpe3ZhciBjPVtdLGQ9e307aWYodGhpcy5tcz1iLHRoaXMudGltZXM9MSxhKXtmb3IodmFyIGUgaW4gYSlhW3pdKGUpJiYoZFtfKGUpXT1hW2VdLGMucHVzaChfKGUpKSk7Yy5zb3J0KGxiKX10aGlzLmFuaW09ZCx0aGlzLnRvcD1jW2MubGVuZ3RoLTFdLHRoaXMucGVyY2VudHM9Y31mdW5jdGlvbiBzKGEsZCxlLGYsZyxoKXtlPV8oZSk7dmFyIGksaixrLGwsbSxuLHA9YS5tcyxyPXt9LHM9e30sdD17fTtpZihmKWZvcih2PTAseD1pYy5sZW5ndGg7eD52O3YrKyl7dmFyIHU9aWNbdl07aWYodS5lbC5pZD09ZC5pZCYmdS5hbmltPT1hKXt1LnBlcmNlbnQhPWU/KGljLnNwbGljZSh2LDEpLGs9MSk6aj11LGQuYXR0cih1LnRvdGFsT3JpZ2luKTticmVha319ZWxzZSBmPStzO2Zvcih2YXIgdj0wLHg9YS5wZXJjZW50cy5sZW5ndGg7eD52O3YrKyl7aWYoYS5wZXJjZW50c1t2XT09ZXx8YS5wZXJjZW50c1t2XT5mKmEudG9wKXtlPWEucGVyY2VudHNbdl0sbT1hLnBlcmNlbnRzW3YtMV18fDAscD1wL2EudG9wKihlLW0pLGw9YS5wZXJjZW50c1t2KzFdLGk9YS5hbmltW2VdO2JyZWFrfWYmJmQuYXR0cihhLmFuaW1bYS5wZXJjZW50c1t2XV0pfWlmKGkpe2lmKGopai5pbml0c3RhdHVzPWYsai5zdGFydD1uZXcgRGF0ZS1qLm1zKmY7ZWxzZXtmb3IodmFyIHkgaW4gaSlpZihpW3pdKHkpJiYoZGJbel0oeSl8fGQucGFwZXIuY3VzdG9tQXR0cmlidXRlc1t6XSh5KSkpc3dpdGNoKHJbeV09ZC5hdHRyKHkpLG51bGw9PXJbeV0mJihyW3ldPWNiW3ldKSxzW3ldPWlbeV0sZGJbeV0pe2Nhc2UgVDp0W3ldPShzW3ldLXJbeV0pL3A7YnJlYWs7Y2FzZVwiY29sb3VyXCI6clt5XT1jLmdldFJHQihyW3ldKTt2YXIgQT1jLmdldFJHQihzW3ldKTt0W3ldPXtyOihBLnItclt5XS5yKS9wLGc6KEEuZy1yW3ldLmcpL3AsYjooQS5iLXJbeV0uYikvcH07YnJlYWs7Y2FzZVwicGF0aFwiOnZhciBCPUtiKHJbeV0sc1t5XSksQz1CWzFdO2ZvcihyW3ldPUJbMF0sdFt5XT1bXSx2PTAseD1yW3ldLmxlbmd0aDt4PnY7disrKXt0W3ldW3ZdPVswXTtmb3IodmFyIEQ9MSxGPXJbeV1bdl0ubGVuZ3RoO0Y+RDtEKyspdFt5XVt2XVtEXT0oQ1t2XVtEXS1yW3ldW3ZdW0RdKS9wfWJyZWFrO2Nhc2VcInRyYW5zZm9ybVwiOnZhciBHPWQuXyxIPVBiKEdbeV0sc1t5XSk7aWYoSClmb3Ioclt5XT1ILmZyb20sc1t5XT1ILnRvLHRbeV09W10sdFt5XS5yZWFsPSEwLHY9MCx4PXJbeV0ubGVuZ3RoO3g+djt2KyspZm9yKHRbeV1bdl09W3JbeV1bdl1bMF1dLEQ9MSxGPXJbeV1bdl0ubGVuZ3RoO0Y+RDtEKyspdFt5XVt2XVtEXT0oc1t5XVt2XVtEXS1yW3ldW3ZdW0RdKS9wO2Vsc2V7dmFyIEs9ZC5tYXRyaXh8fG5ldyBvLEw9e186e3RyYW5zZm9ybTpHLnRyYW5zZm9ybX0sZ2V0QkJveDpmdW5jdGlvbigpe3JldHVybiBkLmdldEJCb3goMSl9fTtyW3ldPVtLLmEsSy5iLEsuYyxLLmQsSy5lLEsuZl0sTmIoTCxzW3ldKSxzW3ldPUwuXy50cmFuc2Zvcm0sdFt5XT1bKEwubWF0cml4LmEtSy5hKS9wLChMLm1hdHJpeC5iLUsuYikvcCwoTC5tYXRyaXguYy1LLmMpL3AsKEwubWF0cml4LmQtSy5kKS9wLChMLm1hdHJpeC5lLUsuZSkvcCwoTC5tYXRyaXguZi1LLmYpL3BdfWJyZWFrO2Nhc2VcImNzdlwiOnZhciBNPUkoaVt5XSlbSl0odyksTj1JKHJbeV0pW0pdKHcpO2lmKFwiY2xpcC1yZWN0XCI9PXkpZm9yKHJbeV09Tix0W3ldPVtdLHY9Ti5sZW5ndGg7di0tOyl0W3ldW3ZdPShNW3ZdLXJbeV1bdl0pL3A7c1t5XT1NO2JyZWFrO2RlZmF1bHQ6Zm9yKE09W11bRV0oaVt5XSksTj1bXVtFXShyW3ldKSx0W3ldPVtdLHY9ZC5wYXBlci5jdXN0b21BdHRyaWJ1dGVzW3ldLmxlbmd0aDt2LS07KXRbeV1bdl09KChNW3ZdfHwwKS0oTlt2XXx8MCkpL3B9dmFyIE89aS5lYXNpbmcsUD1jLmVhc2luZ19mb3JtdWxhc1tPXTtpZighUClpZihQPUkoTykubWF0Y2goWiksUCYmNT09UC5sZW5ndGgpe3ZhciBRPVA7UD1mdW5jdGlvbihhKXtyZXR1cm4gcShhLCtRWzFdLCtRWzJdLCtRWzNdLCtRWzRdLHApfX1lbHNlIFA9bmI7aWYobj1pLnN0YXJ0fHxhLnN0YXJ0fHwrbmV3IERhdGUsdT17YW5pbTphLHBlcmNlbnQ6ZSx0aW1lc3RhbXA6bixzdGFydDpuKyhhLmRlbHx8MCksc3RhdHVzOjAsaW5pdHN0YXR1czpmfHwwLHN0b3A6ITEsbXM6cCxlYXNpbmc6UCxmcm9tOnIsZGlmZjp0LHRvOnMsZWw6ZCxjYWxsYmFjazppLmNhbGxiYWNrLHByZXY6bSxuZXh0OmwscmVwZWF0Omh8fGEudGltZXMsb3JpZ2luOmQuYXR0cigpLHRvdGFsT3JpZ2luOmd9LGljLnB1c2godSksZiYmIWomJiFrJiYodS5zdG9wPSEwLHUuc3RhcnQ9bmV3IERhdGUtcCpmLDE9PWljLmxlbmd0aCkpcmV0dXJuIGtjKCk7ayYmKHUuc3RhcnQ9bmV3IERhdGUtdS5tcypmKSwxPT1pYy5sZW5ndGgmJmpjKGtjKX1iKFwicmFwaGFlbC5hbmltLnN0YXJ0LlwiK2QuaWQsZCxhKX19ZnVuY3Rpb24gdChhKXtmb3IodmFyIGI9MDtiPGljLmxlbmd0aDtiKyspaWNbYl0uZWwucGFwZXI9PWEmJmljLnNwbGljZShiLS0sMSl9Yy52ZXJzaW9uPVwiMi4xLjJcIixjLmV2ZT1iO3ZhciB1LHYsdz0vWywgXSsvLHg9e2NpcmNsZToxLHJlY3Q6MSxwYXRoOjEsZWxsaXBzZToxLHRleHQ6MSxpbWFnZToxfSx5PS9cXHsoXFxkKylcXH0vZyx6PVwiaGFzT3duUHJvcGVydHlcIixBPXtkb2M6ZG9jdW1lbnQsd2luOmF9LEI9e3dhczpPYmplY3QucHJvdG90eXBlW3pdLmNhbGwoQS53aW4sXCJSYXBoYWVsXCIpLGlzOkEud2luLlJhcGhhZWx9LEM9ZnVuY3Rpb24oKXt0aGlzLmNhPXRoaXMuY3VzdG9tQXR0cmlidXRlcz17fX0sRD1cImFwcGx5XCIsRT1cImNvbmNhdFwiLEY9XCJvbnRvdWNoc3RhcnRcImluIEEud2lufHxBLndpbi5Eb2N1bWVudFRvdWNoJiZBLmRvYyBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gsRz1cIlwiLEg9XCIgXCIsST1TdHJpbmcsSj1cInNwbGl0XCIsSz1cImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAgdG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWxcIltKXShIKSxMPXttb3VzZWRvd246XCJ0b3VjaHN0YXJ0XCIsbW91c2Vtb3ZlOlwidG91Y2htb3ZlXCIsbW91c2V1cDpcInRvdWNoZW5kXCJ9LE09SS5wcm90b3R5cGUudG9Mb3dlckNhc2UsTj1NYXRoLE89Ti5tYXgsUD1OLm1pbixRPU4uYWJzLFI9Ti5wb3csUz1OLlBJLFQ9XCJudW1iZXJcIixVPVwic3RyaW5nXCIsVj1cImFycmF5XCIsVz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFg9KGMuX0lTVVJMPS9edXJsXFwoWydcIl0/KC4rPylbJ1wiXT9cXCkkL2ksL15cXHMqKCgjW2EtZlxcZF17Nn0pfCgjW2EtZlxcZF17M30pfHJnYmE/XFwoXFxzKihbXFxkXFwuXSslP1xccyosXFxzKltcXGRcXC5dKyU/XFxzKixcXHMqW1xcZFxcLl0rJT8oPzpcXHMqLFxccypbXFxkXFwuXSslPyk/KVxccypcXCl8aHNiYT9cXChcXHMqKFtcXGRcXC5dKyg/OmRlZ3xcXHhiMHwlKT9cXHMqLFxccypbXFxkXFwuXSslP1xccyosXFxzKltcXGRcXC5dKyg/OiU/XFxzKixcXHMqW1xcZFxcLl0rKT8pJT9cXHMqXFwpfGhzbGE/XFwoXFxzKihbXFxkXFwuXSsoPzpkZWd8XFx4YjB8JSk/XFxzKixcXHMqW1xcZFxcLl0rJT9cXHMqLFxccypbXFxkXFwuXSsoPzolP1xccyosXFxzKltcXGRcXC5dKyk/KSU/XFxzKlxcKSlcXHMqJC9pKSxZPXtOYU46MSxJbmZpbml0eToxLFwiLUluZmluaXR5XCI6MX0sWj0vXig/OmN1YmljLSk/YmV6aWVyXFwoKFteLF0rKSwoW14sXSspLChbXixdKyksKFteXFwpXSspXFwpLywkPU4ucm91bmQsXz1wYXJzZUZsb2F0LGFiPXBhcnNlSW50LGJiPUkucHJvdG90eXBlLnRvVXBwZXJDYXNlLGNiPWMuX2F2YWlsYWJsZUF0dHJzPXtcImFycm93LWVuZFwiOlwibm9uZVwiLFwiYXJyb3ctc3RhcnRcIjpcIm5vbmVcIixibHVyOjAsXCJjbGlwLXJlY3RcIjpcIjAgMCAxZTkgMWU5XCIsY3Vyc29yOlwiZGVmYXVsdFwiLGN4OjAsY3k6MCxmaWxsOlwiI2ZmZlwiLFwiZmlsbC1vcGFjaXR5XCI6MSxmb250OicxMHB4IFwiQXJpYWxcIicsXCJmb250LWZhbWlseVwiOidcIkFyaWFsXCInLFwiZm9udC1zaXplXCI6XCIxMFwiLFwiZm9udC1zdHlsZVwiOlwibm9ybWFsXCIsXCJmb250LXdlaWdodFwiOjQwMCxncmFkaWVudDowLGhlaWdodDowLGhyZWY6XCJodHRwOi8vcmFwaGFlbGpzLmNvbS9cIixcImxldHRlci1zcGFjaW5nXCI6MCxvcGFjaXR5OjEscGF0aDpcIk0wLDBcIixyOjAscng6MCxyeTowLHNyYzpcIlwiLHN0cm9rZTpcIiMwMDBcIixcInN0cm9rZS1kYXNoYXJyYXlcIjpcIlwiLFwic3Ryb2tlLWxpbmVjYXBcIjpcImJ1dHRcIixcInN0cm9rZS1saW5lam9pblwiOlwiYnV0dFwiLFwic3Ryb2tlLW1pdGVybGltaXRcIjowLFwic3Ryb2tlLW9wYWNpdHlcIjoxLFwic3Ryb2tlLXdpZHRoXCI6MSx0YXJnZXQ6XCJfYmxhbmtcIixcInRleHQtYW5jaG9yXCI6XCJtaWRkbGVcIix0aXRsZTpcIlJhcGhhZWxcIix0cmFuc2Zvcm06XCJcIix3aWR0aDowLHg6MCx5OjB9LGRiPWMuX2F2YWlsYWJsZUFuaW1BdHRycz17Ymx1cjpULFwiY2xpcC1yZWN0XCI6XCJjc3ZcIixjeDpULGN5OlQsZmlsbDpcImNvbG91clwiLFwiZmlsbC1vcGFjaXR5XCI6VCxcImZvbnQtc2l6ZVwiOlQsaGVpZ2h0OlQsb3BhY2l0eTpULHBhdGg6XCJwYXRoXCIscjpULHJ4OlQscnk6VCxzdHJva2U6XCJjb2xvdXJcIixcInN0cm9rZS1vcGFjaXR5XCI6VCxcInN0cm9rZS13aWR0aFwiOlQsdHJhbnNmb3JtOlwidHJhbnNmb3JtXCIsd2lkdGg6VCx4OlQseTpUfSxlYj0vW1xceDA5XFx4MGFcXHgwYlxceDBjXFx4MGRcXHgyMFxceGEwXFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdTIwMjhcXHUyMDI5XSosW1xceDA5XFx4MGFcXHgwYlxceDBjXFx4MGRcXHgyMFxceGEwXFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdTIwMjhcXHUyMDI5XSovLGZiPXtoczoxLHJnOjF9LGdiPS8sPyhbYWNobG1xcnN0dnh6XSksPy9naSxoYj0vKFthY2hsbXJxc3R2el0pW1xceDA5XFx4MGFcXHgwYlxceDBjXFx4MGRcXHgyMFxceGEwXFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdTIwMjhcXHUyMDI5LF0qKCgtP1xcZCpcXC4/XFxkKig/OmVbXFwtK10/XFxkKyk/W1xceDA5XFx4MGFcXHgwYlxceDBjXFx4MGRcXHgyMFxceGEwXFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdTIwMjhcXHUyMDI5XSosP1tcXHgwOVxceDBhXFx4MGJcXHgwY1xceDBkXFx4MjBcXHhhMFxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXHUyMDI4XFx1MjAyOV0qKSspL2dpLGliPS8oW3JzdG1dKVtcXHgwOVxceDBhXFx4MGJcXHgwY1xceDBkXFx4MjBcXHhhMFxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXHUyMDI4XFx1MjAyOSxdKigoLT9cXGQqXFwuP1xcZCooPzplW1xcLStdP1xcZCspP1tcXHgwOVxceDBhXFx4MGJcXHgwY1xceDBkXFx4MjBcXHhhMFxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXHUyMDI4XFx1MjAyOV0qLD9bXFx4MDlcXHgwYVxceDBiXFx4MGNcXHgwZFxceDIwXFx4YTBcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1MjAyOFxcdTIwMjldKikrKS9naSxqYj0vKC0/XFxkKlxcLj9cXGQqKD86ZVtcXC0rXT9cXGQrKT8pW1xceDA5XFx4MGFcXHgwYlxceDBjXFx4MGRcXHgyMFxceGEwXFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdTIwMjhcXHUyMDI5XSosP1tcXHgwOVxceDBhXFx4MGJcXHgwY1xceDBkXFx4MjBcXHhhMFxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXHUyMDI4XFx1MjAyOV0qL2dpLGtiPShjLl9yYWRpYWxfZ3JhZGllbnQ9L15yKD86XFwoKFteLF0rPylbXFx4MDlcXHgwYVxceDBiXFx4MGNcXHgwZFxceDIwXFx4YTBcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1MjAyOFxcdTIwMjldKixbXFx4MDlcXHgwYVxceDBiXFx4MGNcXHgwZFxceDIwXFx4YTBcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1MjAyOFxcdTIwMjldKihbXlxcKV0rPylcXCkpPy8se30pLGxiPWZ1bmN0aW9uKGEsYil7cmV0dXJuIF8oYSktXyhiKX0sbWI9ZnVuY3Rpb24oKXt9LG5iPWZ1bmN0aW9uKGEpe3JldHVybiBhfSxvYj1jLl9yZWN0UGF0aD1mdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBlP1tbXCJNXCIsYStlLGJdLFtcImxcIixjLTIqZSwwXSxbXCJhXCIsZSxlLDAsMCwxLGUsZV0sW1wibFwiLDAsZC0yKmVdLFtcImFcIixlLGUsMCwwLDEsLWUsZV0sW1wibFwiLDIqZS1jLDBdLFtcImFcIixlLGUsMCwwLDEsLWUsLWVdLFtcImxcIiwwLDIqZS1kXSxbXCJhXCIsZSxlLDAsMCwxLGUsLWVdLFtcInpcIl1dOltbXCJNXCIsYSxiXSxbXCJsXCIsYywwXSxbXCJsXCIsMCxkXSxbXCJsXCIsLWMsMF0sW1wielwiXV19LHBiPWZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBudWxsPT1kJiYoZD1jKSxbW1wiTVwiLGEsYl0sW1wibVwiLDAsLWRdLFtcImFcIixjLGQsMCwxLDEsMCwyKmRdLFtcImFcIixjLGQsMCwxLDEsMCwtMipkXSxbXCJ6XCJdXX0scWI9Yy5fZ2V0UGF0aD17cGF0aDpmdW5jdGlvbihhKXtyZXR1cm4gYS5hdHRyKFwicGF0aFwiKX0sY2lyY2xlOmZ1bmN0aW9uKGEpe3ZhciBiPWEuYXR0cnM7cmV0dXJuIHBiKGIuY3gsYi5jeSxiLnIpfSxlbGxpcHNlOmZ1bmN0aW9uKGEpe3ZhciBiPWEuYXR0cnM7cmV0dXJuIHBiKGIuY3gsYi5jeSxiLnJ4LGIucnkpfSxyZWN0OmZ1bmN0aW9uKGEpe3ZhciBiPWEuYXR0cnM7cmV0dXJuIG9iKGIueCxiLnksYi53aWR0aCxiLmhlaWdodCxiLnIpfSxpbWFnZTpmdW5jdGlvbihhKXt2YXIgYj1hLmF0dHJzO3JldHVybiBvYihiLngsYi55LGIud2lkdGgsYi5oZWlnaHQpfSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiPWEuX2dldEJCb3goKTtyZXR1cm4gb2IoYi54LGIueSxiLndpZHRoLGIuaGVpZ2h0KX0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEuX2dldEJCb3goKTtyZXR1cm4gb2IoYi54LGIueSxiLndpZHRoLGIuaGVpZ2h0KX19LHJiPWMubWFwUGF0aD1mdW5jdGlvbihhLGIpe2lmKCFiKXJldHVybiBhO3ZhciBjLGQsZSxmLGcsaCxpO2ZvcihhPUtiKGEpLGU9MCxnPWEubGVuZ3RoO2c+ZTtlKyspZm9yKGk9YVtlXSxmPTEsaD1pLmxlbmd0aDtoPmY7Zis9MiljPWIueChpW2ZdLGlbZisxXSksZD1iLnkoaVtmXSxpW2YrMV0pLGlbZl09YyxpW2YrMV09ZDtyZXR1cm4gYX07aWYoYy5fZz1BLGMudHlwZT1BLndpbi5TVkdBbmdsZXx8QS5kb2MuaW1wbGVtZW50YXRpb24uaGFzRmVhdHVyZShcImh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjQmFzaWNTdHJ1Y3R1cmVcIixcIjEuMVwiKT9cIlNWR1wiOlwiVk1MXCIsXCJWTUxcIj09Yy50eXBlKXt2YXIgc2IsdGI9QS5kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZih0Yi5pbm5lckhUTUw9Jzx2OnNoYXBlIGFkaj1cIjFcIi8+JyxzYj10Yi5maXJzdENoaWxkLHNiLnN0eWxlLmJlaGF2aW9yPVwidXJsKCNkZWZhdWx0I1ZNTClcIiwhc2J8fFwib2JqZWN0XCIhPXR5cGVvZiBzYi5hZGopcmV0dXJuIGMudHlwZT1HO3RiPW51bGx9Yy5zdmc9IShjLnZtbD1cIlZNTFwiPT1jLnR5cGUpLGMuX1BhcGVyPUMsYy5mbj12PUMucHJvdG90eXBlPWMucHJvdG90eXBlLGMuX2lkPTAsYy5fb2lkPTAsYy5pcz1mdW5jdGlvbihhLGIpe3JldHVybiBiPU0uY2FsbChiKSxcImZpbml0ZVwiPT1iPyFZW3pdKCthKTpcImFycmF5XCI9PWI/YSBpbnN0YW5jZW9mIEFycmF5OlwibnVsbFwiPT1iJiZudWxsPT09YXx8Yj09dHlwZW9mIGEmJm51bGwhPT1hfHxcIm9iamVjdFwiPT1iJiZhPT09T2JqZWN0KGEpfHxcImFycmF5XCI9PWImJkFycmF5LmlzQXJyYXkmJkFycmF5LmlzQXJyYXkoYSl8fFcuY2FsbChhKS5zbGljZSg4LC0xKS50b0xvd2VyQ2FzZSgpPT1ifSxjLmFuZ2xlPWZ1bmN0aW9uKGEsYixkLGUsZixnKXtpZihudWxsPT1mKXt2YXIgaD1hLWQsaT1iLWU7cmV0dXJuIGh8fGk/KDE4MCsxODAqTi5hdGFuMigtaSwtaCkvUyszNjApJTM2MDowfXJldHVybiBjLmFuZ2xlKGEsYixmLGcpLWMuYW5nbGUoZCxlLGYsZyl9LGMucmFkPWZ1bmN0aW9uKGEpe3JldHVybiBhJTM2MCpTLzE4MH0sYy5kZWc9ZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGgucm91bmQoMTgwKmEvUyUzNjAqMWUzKS8xZTN9LGMuc25hcFRvPWZ1bmN0aW9uKGEsYixkKXtpZihkPWMuaXMoZCxcImZpbml0ZVwiKT9kOjEwLGMuaXMoYSxWKSl7Zm9yKHZhciBlPWEubGVuZ3RoO2UtLTspaWYoUShhW2VdLWIpPD1kKXJldHVybiBhW2VdfWVsc2V7YT0rYTt2YXIgZj1iJWE7aWYoZD5mKXJldHVybiBiLWY7aWYoZj5hLWQpcmV0dXJuIGItZithfXJldHVybiBifTtjLmNyZWF0ZVVVSUQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm5cInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoYSxiKS50b1VwcGVyQ2FzZSgpfX0oL1t4eV0vZyxmdW5jdGlvbihhKXt2YXIgYj0xNipOLnJhbmRvbSgpfDAsYz1cInhcIj09YT9iOjMmYnw4O3JldHVybiBjLnRvU3RyaW5nKDE2KX0pO2Muc2V0V2luZG93PWZ1bmN0aW9uKGEpe2IoXCJyYXBoYWVsLnNldFdpbmRvd1wiLGMsQS53aW4sYSksQS53aW49YSxBLmRvYz1BLndpbi5kb2N1bWVudCxjLl9lbmdpbmUuaW5pdFdpbiYmYy5fZW5naW5lLmluaXRXaW4oQS53aW4pfTt2YXIgdWI9ZnVuY3Rpb24oYSl7aWYoYy52bWwpe3ZhciBiLGQ9L15cXHMrfFxccyskL2c7dHJ5e3ZhciBlPW5ldyBBY3RpdmVYT2JqZWN0KFwiaHRtbGZpbGVcIik7ZS53cml0ZShcIjxib2R5PlwiKSxlLmNsb3NlKCksYj1lLmJvZHl9Y2F0Y2goZyl7Yj1jcmVhdGVQb3B1cCgpLmRvY3VtZW50LmJvZHl9dmFyIGg9Yi5jcmVhdGVUZXh0UmFuZ2UoKTt1Yj1mKGZ1bmN0aW9uKGEpe3RyeXtiLnN0eWxlLmNvbG9yPUkoYSkucmVwbGFjZShkLEcpO3ZhciBjPWgucXVlcnlDb21tYW5kVmFsdWUoXCJGb3JlQ29sb3JcIik7cmV0dXJuIGM9KDI1NSZjKTw8MTZ8NjUyODAmY3woMTY3MTE2ODAmYyk+Pj4xNixcIiNcIisoXCIwMDAwMDBcIitjLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTYpfWNhdGNoKGUpe3JldHVyblwibm9uZVwifX0pfWVsc2V7dmFyIGk9QS5kb2MuY3JlYXRlRWxlbWVudChcImlcIik7aS50aXRsZT1cIlJhcGhhw6tsIENvbG91ciBQaWNrZXJcIixpLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsQS5kb2MuYm9keS5hcHBlbmRDaGlsZChpKSx1Yj1mKGZ1bmN0aW9uKGEpe3JldHVybiBpLnN0eWxlLmNvbG9yPWEsQS5kb2MuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShpLEcpLmdldFByb3BlcnR5VmFsdWUoXCJjb2xvclwiKX0pfXJldHVybiB1YihhKX0sdmI9ZnVuY3Rpb24oKXtyZXR1cm5cImhzYihcIitbdGhpcy5oLHRoaXMucyx0aGlzLmJdK1wiKVwifSx3Yj1mdW5jdGlvbigpe3JldHVyblwiaHNsKFwiK1t0aGlzLmgsdGhpcy5zLHRoaXMubF0rXCIpXCJ9LHhiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGV4fSx5Yj1mdW5jdGlvbihhLGIsZCl7aWYobnVsbD09YiYmYy5pcyhhLFwib2JqZWN0XCIpJiZcInJcImluIGEmJlwiZ1wiaW4gYSYmXCJiXCJpbiBhJiYoZD1hLmIsYj1hLmcsYT1hLnIpLG51bGw9PWImJmMuaXMoYSxVKSl7dmFyIGU9Yy5nZXRSR0IoYSk7YT1lLnIsYj1lLmcsZD1lLmJ9cmV0dXJuKGE+MXx8Yj4xfHxkPjEpJiYoYS89MjU1LGIvPTI1NSxkLz0yNTUpLFthLGIsZF19LHpiPWZ1bmN0aW9uKGEsYixkLGUpe2EqPTI1NSxiKj0yNTUsZCo9MjU1O3ZhciBmPXtyOmEsZzpiLGI6ZCxoZXg6Yy5yZ2IoYSxiLGQpLHRvU3RyaW5nOnhifTtyZXR1cm4gYy5pcyhlLFwiZmluaXRlXCIpJiYoZi5vcGFjaXR5PWUpLGZ9O2MuY29sb3I9ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIGMuaXMoYSxcIm9iamVjdFwiKSYmXCJoXCJpbiBhJiZcInNcImluIGEmJlwiYlwiaW4gYT8oYj1jLmhzYjJyZ2IoYSksYS5yPWIucixhLmc9Yi5nLGEuYj1iLmIsYS5oZXg9Yi5oZXgpOmMuaXMoYSxcIm9iamVjdFwiKSYmXCJoXCJpbiBhJiZcInNcImluIGEmJlwibFwiaW4gYT8oYj1jLmhzbDJyZ2IoYSksYS5yPWIucixhLmc9Yi5nLGEuYj1iLmIsYS5oZXg9Yi5oZXgpOihjLmlzKGEsXCJzdHJpbmdcIikmJihhPWMuZ2V0UkdCKGEpKSxjLmlzKGEsXCJvYmplY3RcIikmJlwiclwiaW4gYSYmXCJnXCJpbiBhJiZcImJcImluIGE/KGI9Yy5yZ2IyaHNsKGEpLGEuaD1iLmgsYS5zPWIucyxhLmw9Yi5sLGI9Yy5yZ2IyaHNiKGEpLGEudj1iLmIpOihhPXtoZXg6XCJub25lXCJ9LGEucj1hLmc9YS5iPWEuaD1hLnM9YS52PWEubD0tMSkpLGEudG9TdHJpbmc9eGIsYX0sYy5oc2IycmdiPWZ1bmN0aW9uKGEsYixjLGQpe3RoaXMuaXMoYSxcIm9iamVjdFwiKSYmXCJoXCJpbiBhJiZcInNcImluIGEmJlwiYlwiaW4gYSYmKGM9YS5iLGI9YS5zLGQ9YS5vLGE9YS5oKSxhKj0zNjA7dmFyIGUsZixnLGgsaTtyZXR1cm4gYT1hJTM2MC82MCxpPWMqYixoPWkqKDEtUShhJTItMSkpLGU9Zj1nPWMtaSxhPX5+YSxlKz1baSxoLDAsMCxoLGldW2FdLGYrPVtoLGksaSxoLDAsMF1bYV0sZys9WzAsMCxoLGksaSxoXVthXSx6YihlLGYsZyxkKX0sYy5oc2wycmdiPWZ1bmN0aW9uKGEsYixjLGQpe3RoaXMuaXMoYSxcIm9iamVjdFwiKSYmXCJoXCJpbiBhJiZcInNcImluIGEmJlwibFwiaW4gYSYmKGM9YS5sLGI9YS5zLGE9YS5oKSwoYT4xfHxiPjF8fGM+MSkmJihhLz0zNjAsYi89MTAwLGMvPTEwMCksYSo9MzYwO3ZhciBlLGYsZyxoLGk7cmV0dXJuIGE9YSUzNjAvNjAsaT0yKmIqKC41PmM/YzoxLWMpLGg9aSooMS1RKGElMi0xKSksZT1mPWc9Yy1pLzIsYT1+fmEsZSs9W2ksaCwwLDAsaCxpXVthXSxmKz1baCxpLGksaCwwLDBdW2FdLGcrPVswLDAsaCxpLGksaF1bYV0semIoZSxmLGcsZCl9LGMucmdiMmhzYj1mdW5jdGlvbihhLGIsYyl7Yz15YihhLGIsYyksYT1jWzBdLGI9Y1sxXSxjPWNbMl07dmFyIGQsZSxmLGc7cmV0dXJuIGY9TyhhLGIsYyksZz1mLVAoYSxiLGMpLGQ9MD09Zz9udWxsOmY9PWE/KGItYykvZzpmPT1iPyhjLWEpL2crMjooYS1iKS9nKzQsZD0oZCszNjApJTYqNjAvMzYwLGU9MD09Zz8wOmcvZix7aDpkLHM6ZSxiOmYsdG9TdHJpbmc6dmJ9fSxjLnJnYjJoc2w9ZnVuY3Rpb24oYSxiLGMpe2M9eWIoYSxiLGMpLGE9Y1swXSxiPWNbMV0sYz1jWzJdO3ZhciBkLGUsZixnLGgsaTtyZXR1cm4gZz1PKGEsYixjKSxoPVAoYSxiLGMpLGk9Zy1oLGQ9MD09aT9udWxsOmc9PWE/KGItYykvaTpnPT1iPyhjLWEpL2krMjooYS1iKS9pKzQsZD0oZCszNjApJTYqNjAvMzYwLGY9KGcraCkvMixlPTA9PWk/MDouNT5mP2kvKDIqZik6aS8oMi0yKmYpLHtoOmQsczplLGw6Zix0b1N0cmluZzp3Yn19LGMuX3BhdGgyc3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuam9pbihcIixcIikucmVwbGFjZShnYixcIiQxXCIpfTtjLl9wcmVsb2FkPWZ1bmN0aW9uKGEsYil7dmFyIGM9QS5kb2MuY3JlYXRlRWxlbWVudChcImltZ1wiKTtjLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTk5ZW07dG9wOi05OTk5ZW1cIixjLm9ubG9hZD1mdW5jdGlvbigpe2IuY2FsbCh0aGlzKSx0aGlzLm9ubG9hZD1udWxsLEEuZG9jLmJvZHkucmVtb3ZlQ2hpbGQodGhpcyl9LGMub25lcnJvcj1mdW5jdGlvbigpe0EuZG9jLmJvZHkucmVtb3ZlQ2hpbGQodGhpcyl9LEEuZG9jLmJvZHkuYXBwZW5kQ2hpbGQoYyksYy5zcmM9YX07Yy5nZXRSR0I9ZihmdW5jdGlvbihhKXtpZighYXx8KGE9SShhKSkuaW5kZXhPZihcIi1cIikrMSlyZXR1cm57cjotMSxnOi0xLGI6LTEsaGV4Olwibm9uZVwiLGVycm9yOjEsdG9TdHJpbmc6Z307aWYoXCJub25lXCI9PWEpcmV0dXJue3I6LTEsZzotMSxiOi0xLGhleDpcIm5vbmVcIix0b1N0cmluZzpnfTshKGZiW3pdKGEudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMCwyKSl8fFwiI1wiPT1hLmNoYXJBdCgpKSYmKGE9dWIoYSkpO3ZhciBiLGQsZSxmLGgsaSxqPWEubWF0Y2goWCk7cmV0dXJuIGo/KGpbMl0mJihlPWFiKGpbMl0uc3Vic3RyaW5nKDUpLDE2KSxkPWFiKGpbMl0uc3Vic3RyaW5nKDMsNSksMTYpLGI9YWIoalsyXS5zdWJzdHJpbmcoMSwzKSwxNikpLGpbM10mJihlPWFiKChoPWpbM10uY2hhckF0KDMpKStoLDE2KSxkPWFiKChoPWpbM10uY2hhckF0KDIpKStoLDE2KSxiPWFiKChoPWpbM10uY2hhckF0KDEpKStoLDE2KSksals0XSYmKGk9als0XVtKXShlYiksYj1fKGlbMF0pLFwiJVwiPT1pWzBdLnNsaWNlKC0xKSYmKGIqPTIuNTUpLGQ9XyhpWzFdKSxcIiVcIj09aVsxXS5zbGljZSgtMSkmJihkKj0yLjU1KSxlPV8oaVsyXSksXCIlXCI9PWlbMl0uc2xpY2UoLTEpJiYoZSo9Mi41NSksXCJyZ2JhXCI9PWpbMV0udG9Mb3dlckNhc2UoKS5zbGljZSgwLDQpJiYoZj1fKGlbM10pKSxpWzNdJiZcIiVcIj09aVszXS5zbGljZSgtMSkmJihmLz0xMDApKSxqWzVdPyhpPWpbNV1bSl0oZWIpLGI9XyhpWzBdKSxcIiVcIj09aVswXS5zbGljZSgtMSkmJihiKj0yLjU1KSxkPV8oaVsxXSksXCIlXCI9PWlbMV0uc2xpY2UoLTEpJiYoZCo9Mi41NSksZT1fKGlbMl0pLFwiJVwiPT1pWzJdLnNsaWNlKC0xKSYmKGUqPTIuNTUpLChcImRlZ1wiPT1pWzBdLnNsaWNlKC0zKXx8XCLCsFwiPT1pWzBdLnNsaWNlKC0xKSkmJihiLz0zNjApLFwiaHNiYVwiPT1qWzFdLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw0KSYmKGY9XyhpWzNdKSksaVszXSYmXCIlXCI9PWlbM10uc2xpY2UoLTEpJiYoZi89MTAwKSxjLmhzYjJyZ2IoYixkLGUsZikpOmpbNl0/KGk9als2XVtKXShlYiksYj1fKGlbMF0pLFwiJVwiPT1pWzBdLnNsaWNlKC0xKSYmKGIqPTIuNTUpLGQ9XyhpWzFdKSxcIiVcIj09aVsxXS5zbGljZSgtMSkmJihkKj0yLjU1KSxlPV8oaVsyXSksXCIlXCI9PWlbMl0uc2xpY2UoLTEpJiYoZSo9Mi41NSksKFwiZGVnXCI9PWlbMF0uc2xpY2UoLTMpfHxcIsKwXCI9PWlbMF0uc2xpY2UoLTEpKSYmKGIvPTM2MCksXCJoc2xhXCI9PWpbMV0udG9Mb3dlckNhc2UoKS5zbGljZSgwLDQpJiYoZj1fKGlbM10pKSxpWzNdJiZcIiVcIj09aVszXS5zbGljZSgtMSkmJihmLz0xMDApLGMuaHNsMnJnYihiLGQsZSxmKSk6KGo9e3I6YixnOmQsYjplLHRvU3RyaW5nOmd9LGouaGV4PVwiI1wiKygxNjc3NzIxNnxlfGQ8PDh8Yjw8MTYpLnRvU3RyaW5nKDE2KS5zbGljZSgxKSxjLmlzKGYsXCJmaW5pdGVcIikmJihqLm9wYWNpdHk9ZiksaikpOntyOi0xLGc6LTEsYjotMSxoZXg6XCJub25lXCIsZXJyb3I6MSx0b1N0cmluZzpnfX0sYyksYy5oc2I9ZihmdW5jdGlvbihhLGIsZCl7cmV0dXJuIGMuaHNiMnJnYihhLGIsZCkuaGV4fSksYy5oc2w9ZihmdW5jdGlvbihhLGIsZCl7cmV0dXJuIGMuaHNsMnJnYihhLGIsZCkuaGV4fSksYy5yZ2I9ZihmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCIjXCIrKDE2Nzc3MjE2fGN8Yjw8OHxhPDwxNikudG9TdHJpbmcoMTYpLnNsaWNlKDEpfSksYy5nZXRDb2xvcj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmdldENvbG9yLnN0YXJ0PXRoaXMuZ2V0Q29sb3Iuc3RhcnR8fHtoOjAsczoxLGI6YXx8Ljc1fSxjPXRoaXMuaHNiMnJnYihiLmgsYi5zLGIuYik7cmV0dXJuIGIuaCs9LjA3NSxiLmg+MSYmKGIuaD0wLGIucy09LjIsYi5zPD0wJiYodGhpcy5nZXRDb2xvci5zdGFydD17aDowLHM6MSxiOmIuYn0pKSxjLmhleH0sYy5nZXRDb2xvci5yZXNldD1mdW5jdGlvbigpe2RlbGV0ZSB0aGlzLnN0YXJ0fSxjLnBhcnNlUGF0aFN0cmluZz1mdW5jdGlvbihhKXtpZighYSlyZXR1cm4gbnVsbDt2YXIgYj1BYihhKTtpZihiLmFycilyZXR1cm4gQ2IoYi5hcnIpO3ZhciBkPXthOjcsYzo2LGg6MSxsOjIsbToyLHI6NCxxOjQsczo0LHQ6Mix2OjEsejowfSxlPVtdO3JldHVybiBjLmlzKGEsVikmJmMuaXMoYVswXSxWKSYmKGU9Q2IoYSkpLGUubGVuZ3RofHxJKGEpLnJlcGxhY2UoaGIsZnVuY3Rpb24oYSxiLGMpe3ZhciBmPVtdLGc9Yi50b0xvd2VyQ2FzZSgpO2lmKGMucmVwbGFjZShqYixmdW5jdGlvbihhLGIpe2ImJmYucHVzaCgrYil9KSxcIm1cIj09ZyYmZi5sZW5ndGg+MiYmKGUucHVzaChbYl1bRV0oZi5zcGxpY2UoMCwyKSkpLGc9XCJsXCIsYj1cIm1cIj09Yj9cImxcIjpcIkxcIiksXCJyXCI9PWcpZS5wdXNoKFtiXVtFXShmKSk7ZWxzZSBmb3IoO2YubGVuZ3RoPj1kW2ddJiYoZS5wdXNoKFtiXVtFXShmLnNwbGljZSgwLGRbZ10pKSksZFtnXSk7KTt9KSxlLnRvU3RyaW5nPWMuX3BhdGgyc3RyaW5nLGIuYXJyPUNiKGUpLGV9LGMucGFyc2VUcmFuc2Zvcm1TdHJpbmc9ZihmdW5jdGlvbihhKXtpZighYSlyZXR1cm4gbnVsbDt2YXIgYj1bXTtyZXR1cm4gYy5pcyhhLFYpJiZjLmlzKGFbMF0sVikmJihiPUNiKGEpKSxiLmxlbmd0aHx8SShhKS5yZXBsYWNlKGliLGZ1bmN0aW9uKGEsYyxkKXt7dmFyIGU9W107TS5jYWxsKGMpfWQucmVwbGFjZShqYixmdW5jdGlvbihhLGIpe2ImJmUucHVzaCgrYil9KSxiLnB1c2goW2NdW0VdKGUpKX0pLGIudG9TdHJpbmc9Yy5fcGF0aDJzdHJpbmcsYn0pO3ZhciBBYj1mdW5jdGlvbihhKXt2YXIgYj1BYi5wcz1BYi5wc3x8e307cmV0dXJuIGJbYV0/YlthXS5zbGVlcD0xMDA6YlthXT17c2xlZXA6MTAwfSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zm9yKHZhciBjIGluIGIpYlt6XShjKSYmYyE9YSYmKGJbY10uc2xlZXAtLSwhYltjXS5zbGVlcCYmZGVsZXRlIGJbY10pfSksYlthXX07Yy5maW5kRG90c0F0U2VnbWVudD1mdW5jdGlvbihhLGIsYyxkLGUsZixnLGgsaSl7dmFyIGo9MS1pLGs9UihqLDMpLGw9UihqLDIpLG09aSppLG49bSppLG89ayphKzMqbCppKmMrMypqKmkqaSplK24qZyxwPWsqYiszKmwqaSpkKzMqaippKmkqZituKmgscT1hKzIqaSooYy1hKSttKihlLTIqYythKSxyPWIrMippKihkLWIpK20qKGYtMipkK2IpLHM9YysyKmkqKGUtYykrbSooZy0yKmUrYyksdD1kKzIqaSooZi1kKSttKihoLTIqZitkKSx1PWoqYStpKmMsdj1qKmIraSpkLHc9aiplK2kqZyx4PWoqZitpKmgseT05MC0xODAqTi5hdGFuMihxLXMsci10KS9TO3JldHVybihxPnN8fHQ+cikmJih5Kz0xODApLHt4Om8seTpwLG06e3g6cSx5OnJ9LG46e3g6cyx5OnR9LHN0YXJ0Ont4OnUseTp2fSxlbmQ6e3g6dyx5Onh9LGFscGhhOnl9fSxjLmJlemllckJCb3g9ZnVuY3Rpb24oYSxiLGQsZSxmLGcsaCxpKXtjLmlzKGEsXCJhcnJheVwiKXx8KGE9W2EsYixkLGUsZixnLGgsaV0pO3ZhciBqPUpiLmFwcGx5KG51bGwsYSk7cmV0dXJue3g6ai5taW4ueCx5OmoubWluLnkseDI6ai5tYXgueCx5MjpqLm1heC55LHdpZHRoOmoubWF4Lngtai5taW4ueCxoZWlnaHQ6ai5tYXgueS1qLm1pbi55fX0sYy5pc1BvaW50SW5zaWRlQkJveD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI+PWEueCYmYjw9YS54MiYmYz49YS55JiZjPD1hLnkyfSxjLmlzQkJveEludGVyc2VjdD1mdW5jdGlvbihhLGIpe3ZhciBkPWMuaXNQb2ludEluc2lkZUJCb3g7cmV0dXJuIGQoYixhLngsYS55KXx8ZChiLGEueDIsYS55KXx8ZChiLGEueCxhLnkyKXx8ZChiLGEueDIsYS55Mil8fGQoYSxiLngsYi55KXx8ZChhLGIueDIsYi55KXx8ZChhLGIueCxiLnkyKXx8ZChhLGIueDIsYi55Mil8fChhLng8Yi54MiYmYS54PmIueHx8Yi54PGEueDImJmIueD5hLngpJiYoYS55PGIueTImJmEueT5iLnl8fGIueTxhLnkyJiZiLnk+YS55KX0sYy5wYXRoSW50ZXJzZWN0aW9uPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG4oYSxiKX0sYy5wYXRoSW50ZXJzZWN0aW9uTnVtYmVyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG4oYSxiLDEpfSxjLmlzUG9pbnRJbnNpZGVQYXRoPWZ1bmN0aW9uKGEsYixkKXt2YXIgZT1jLnBhdGhCQm94KGEpO3JldHVybiBjLmlzUG9pbnRJbnNpZGVCQm94KGUsYixkKSYmbihhLFtbXCJNXCIsYixkXSxbXCJIXCIsZS54MisxMF1dLDEpJTI9PTF9LGMuX3JlbW92ZWRGYWN0b3J5PWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2IoXCJyYXBoYWVsLmxvZ1wiLG51bGwsXCJSYXBoYcOrbDogeW91IGFyZSBjYWxsaW5nIHRvIG1ldGhvZCDigJxcIithK1wi4oCdIG9mIHJlbW92ZWQgb2JqZWN0XCIsYSl9fTt2YXIgQmI9Yy5wYXRoQkJveD1mdW5jdGlvbihhKXt2YXIgYj1BYihhKTtpZihiLmJib3gpcmV0dXJuIGQoYi5iYm94KTtpZighYSlyZXR1cm57eDowLHk6MCx3aWR0aDowLGhlaWdodDowLHgyOjAseTI6MH07YT1LYihhKTtmb3IodmFyIGMsZT0wLGY9MCxnPVtdLGg9W10saT0wLGo9YS5sZW5ndGg7aj5pO2krKylpZihjPWFbaV0sXCJNXCI9PWNbMF0pZT1jWzFdLGY9Y1syXSxnLnB1c2goZSksaC5wdXNoKGYpO2Vsc2V7dmFyIGs9SmIoZSxmLGNbMV0sY1syXSxjWzNdLGNbNF0sY1s1XSxjWzZdKTtnPWdbRV0oay5taW4ueCxrLm1heC54KSxoPWhbRV0oay5taW4ueSxrLm1heC55KSxlPWNbNV0sZj1jWzZdfXZhciBsPVBbRF0oMCxnKSxtPVBbRF0oMCxoKSxuPU9bRF0oMCxnKSxvPU9bRF0oMCxoKSxwPW4tbCxxPW8tbSxyPXt4OmwseTptLHgyOm4seTI6byx3aWR0aDpwLGhlaWdodDpxLGN4OmwrcC8yLGN5Om0rcS8yfTtyZXR1cm4gYi5iYm94PWQocikscn0sQ2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZChhKTtyZXR1cm4gYi50b1N0cmluZz1jLl9wYXRoMnN0cmluZyxifSxEYj1jLl9wYXRoVG9SZWxhdGl2ZT1mdW5jdGlvbihhKXt2YXIgYj1BYihhKTtpZihiLnJlbClyZXR1cm4gQ2IoYi5yZWwpO2MuaXMoYSxWKSYmYy5pcyhhJiZhWzBdLFYpfHwoYT1jLnBhcnNlUGF0aFN0cmluZyhhKSk7dmFyIGQ9W10sZT0wLGY9MCxnPTAsaD0wLGk9MDtcIk1cIj09YVswXVswXSYmKGU9YVswXVsxXSxmPWFbMF1bMl0sZz1lLGg9ZixpKyssZC5wdXNoKFtcIk1cIixlLGZdKSk7Zm9yKHZhciBqPWksaz1hLmxlbmd0aDtrPmo7aisrKXt2YXIgbD1kW2pdPVtdLG09YVtqXTtpZihtWzBdIT1NLmNhbGwobVswXSkpc3dpdGNoKGxbMF09TS5jYWxsKG1bMF0pLGxbMF0pe2Nhc2VcImFcIjpsWzFdPW1bMV0sbFsyXT1tWzJdLGxbM109bVszXSxsWzRdPW1bNF0sbFs1XT1tWzVdLGxbNl09KyhtWzZdLWUpLnRvRml4ZWQoMyksbFs3XT0rKG1bN10tZikudG9GaXhlZCgzKTticmVhaztjYXNlXCJ2XCI6bFsxXT0rKG1bMV0tZikudG9GaXhlZCgzKTticmVhaztjYXNlXCJtXCI6Zz1tWzFdLGg9bVsyXTtkZWZhdWx0OmZvcih2YXIgbj0xLG89bS5sZW5ndGg7bz5uO24rKylsW25dPSsobVtuXS0obiUyP2U6ZikpLnRvRml4ZWQoMyl9ZWxzZXtsPWRbal09W10sXCJtXCI9PW1bMF0mJihnPW1bMV0rZSxoPW1bMl0rZik7Zm9yKHZhciBwPTAscT1tLmxlbmd0aDtxPnA7cCsrKWRbal1bcF09bVtwXX12YXIgcj1kW2pdLmxlbmd0aDtzd2l0Y2goZFtqXVswXSl7Y2FzZVwielwiOmU9ZyxmPWg7YnJlYWs7Y2FzZVwiaFwiOmUrPStkW2pdW3ItMV07YnJlYWs7Y2FzZVwidlwiOmYrPStkW2pdW3ItMV07YnJlYWs7ZGVmYXVsdDplKz0rZFtqXVtyLTJdLGYrPStkW2pdW3ItMV19fXJldHVybiBkLnRvU3RyaW5nPWMuX3BhdGgyc3RyaW5nLGIucmVsPUNiKGQpLGR9LEViPWMuX3BhdGhUb0Fic29sdXRlPWZ1bmN0aW9uKGEpe3ZhciBiPUFiKGEpO2lmKGIuYWJzKXJldHVybiBDYihiLmFicyk7aWYoYy5pcyhhLFYpJiZjLmlzKGEmJmFbMF0sVil8fChhPWMucGFyc2VQYXRoU3RyaW5nKGEpKSwhYXx8IWEubGVuZ3RoKXJldHVybltbXCJNXCIsMCwwXV07dmFyIGQ9W10sZT0wLGY9MCxnPTAsaT0wLGo9MDtcIk1cIj09YVswXVswXSYmKGU9K2FbMF1bMV0sZj0rYVswXVsyXSxnPWUsaT1mLGorKyxkWzBdPVtcIk1cIixlLGZdKTtmb3IodmFyIGssbCxtPTM9PWEubGVuZ3RoJiZcIk1cIj09YVswXVswXSYmXCJSXCI9PWFbMV1bMF0udG9VcHBlckNhc2UoKSYmXCJaXCI9PWFbMl1bMF0udG9VcHBlckNhc2UoKSxuPWosbz1hLmxlbmd0aDtvPm47bisrKXtpZihkLnB1c2goaz1bXSksbD1hW25dLGxbMF0hPWJiLmNhbGwobFswXSkpc3dpdGNoKGtbMF09YmIuY2FsbChsWzBdKSxrWzBdKXtjYXNlXCJBXCI6a1sxXT1sWzFdLGtbMl09bFsyXSxrWzNdPWxbM10sa1s0XT1sWzRdLGtbNV09bFs1XSxrWzZdPSsobFs2XStlKSxrWzddPSsobFs3XStmKTticmVhaztjYXNlXCJWXCI6a1sxXT0rbFsxXStmO2JyZWFrO2Nhc2VcIkhcIjprWzFdPStsWzFdK2U7YnJlYWs7Y2FzZVwiUlwiOmZvcih2YXIgcD1bZSxmXVtFXShsLnNsaWNlKDEpKSxxPTIscj1wLmxlbmd0aDtyPnE7cSsrKXBbcV09K3BbcV0rZSxwWysrcV09K3BbcV0rZjtkLnBvcCgpLGQ9ZFtFXShoKHAsbSkpO2JyZWFrO2Nhc2VcIk1cIjpnPStsWzFdK2UsaT0rbFsyXStmO2RlZmF1bHQ6Zm9yKHE9MSxyPWwubGVuZ3RoO3I+cTtxKyspa1txXT0rbFtxXSsocSUyP2U6Zil9ZWxzZSBpZihcIlJcIj09bFswXSlwPVtlLGZdW0VdKGwuc2xpY2UoMSkpLGQucG9wKCksZD1kW0VdKGgocCxtKSksaz1bXCJSXCJdW0VdKGwuc2xpY2UoLTIpKTtlbHNlIGZvcih2YXIgcz0wLHQ9bC5sZW5ndGg7dD5zO3MrKylrW3NdPWxbc107c3dpdGNoKGtbMF0pe2Nhc2VcIlpcIjplPWcsZj1pO2JyZWFrO2Nhc2VcIkhcIjplPWtbMV07YnJlYWs7Y2FzZVwiVlwiOmY9a1sxXTticmVhaztjYXNlXCJNXCI6Zz1rW2subGVuZ3RoLTJdLGk9a1trLmxlbmd0aC0xXTtkZWZhdWx0OmU9a1trLmxlbmd0aC0yXSxmPWtbay5sZW5ndGgtMV19fXJldHVybiBkLnRvU3RyaW5nPWMuX3BhdGgyc3RyaW5nLGIuYWJzPUNiKGQpLGR9LEZiPWZ1bmN0aW9uKGEsYixjLGQpe3JldHVyblthLGIsYyxkLGMsZF19LEdiPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXt2YXIgZz0xLzMsaD0yLzM7cmV0dXJuW2cqYStoKmMsZypiK2gqZCxnKmUraCpjLGcqZitoKmQsZSxmXX0sSGI9ZnVuY3Rpb24oYSxiLGMsZCxlLGcsaCxpLGosayl7dmFyIGwsbT0xMjAqUy8xODAsbj1TLzE4MCooK2V8fDApLG89W10scD1mKGZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hKk4uY29zKGMpLWIqTi5zaW4oYyksZT1hKk4uc2luKGMpK2IqTi5jb3MoYyk7cmV0dXJue3g6ZCx5OmV9fSk7aWYoayl5PWtbMF0sej1rWzFdLHc9a1syXSx4PWtbM107ZWxzZXtsPXAoYSxiLC1uKSxhPWwueCxiPWwueSxsPXAoaSxqLC1uKSxpPWwueCxqPWwueTt2YXIgcT0oTi5jb3MoUy8xODAqZSksTi5zaW4oUy8xODAqZSksKGEtaSkvMikscj0oYi1qKS8yLHM9cSpxLyhjKmMpK3Iqci8oZCpkKTtzPjEmJihzPU4uc3FydChzKSxjPXMqYyxkPXMqZCk7dmFyIHQ9YypjLHU9ZCpkLHY9KGc9PWg/LTE6MSkqTi5zcXJ0KFEoKHQqdS10KnIqci11KnEqcSkvKHQqcipyK3UqcSpxKSkpLHc9dipjKnIvZCsoYStpKS8yLHg9diotZCpxL2MrKGIraikvMix5PU4uYXNpbigoKGIteCkvZCkudG9GaXhlZCg5KSksej1OLmFzaW4oKChqLXgpL2QpLnRvRml4ZWQoOSkpO3k9dz5hP1MteTp5LHo9dz5pP1Mtejp6LDA+eSYmKHk9MipTK3kpLDA+eiYmKHo9MipTK3opLGgmJnk+eiYmKHktPTIqUyksIWgmJno+eSYmKHotPTIqUyl9dmFyIEE9ei15O2lmKFEoQSk+bSl7dmFyIEI9eixDPWksRD1qO3o9eSttKihoJiZ6Pnk/MTotMSksaT13K2MqTi5jb3Moeiksaj14K2QqTi5zaW4oeiksbz1IYihpLGosYyxkLGUsMCxoLEMsRCxbeixCLHcseF0pfUE9ei15O3ZhciBGPU4uY29zKHkpLEc9Ti5zaW4oeSksSD1OLmNvcyh6KSxJPU4uc2luKHopLEs9Ti50YW4oQS80KSxMPTQvMypjKkssTT00LzMqZCpLLE89W2EsYl0sUD1bYStMKkcsYi1NKkZdLFI9W2krTCpJLGotTSpIXSxUPVtpLGpdO2lmKFBbMF09MipPWzBdLVBbMF0sUFsxXT0yKk9bMV0tUFsxXSxrKXJldHVybltQLFIsVF1bRV0obyk7bz1bUCxSLFRdW0VdKG8pLmpvaW4oKVtKXShcIixcIik7Zm9yKHZhciBVPVtdLFY9MCxXPW8ubGVuZ3RoO1c+VjtWKyspVVtWXT1WJTI/cChvW1YtMV0sb1tWXSxuKS55OnAob1tWXSxvW1YrMV0sbikueDtyZXR1cm4gVX0sSWI9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyxoLGkpe3ZhciBqPTEtaTtyZXR1cm57eDpSKGosMykqYSszKlIoaiwyKSppKmMrMypqKmkqaSplK1IoaSwzKSpnLHk6UihqLDMpKmIrMypSKGosMikqaSpkKzMqaippKmkqZitSKGksMykqaH19LEpiPWYoZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyxoKXt2YXIgaSxqPWUtMipjK2EtKGctMiplK2MpLGs9MiooYy1hKS0yKihlLWMpLGw9YS1jLG09KC1rK04uc3FydChrKmstNCpqKmwpKS8yL2osbj0oLWstTi5zcXJ0KGsqay00KmoqbCkpLzIvaixvPVtiLGhdLHA9W2EsZ107cmV0dXJuIFEobSk+XCIxZTEyXCImJihtPS41KSxRKG4pPlwiMWUxMlwiJiYobj0uNSksbT4wJiYxPm0mJihpPUliKGEsYixjLGQsZSxmLGcsaCxtKSxwLnB1c2goaS54KSxvLnB1c2goaS55KSksbj4wJiYxPm4mJihpPUliKGEsYixjLGQsZSxmLGcsaCxuKSxwLnB1c2goaS54KSxvLnB1c2goaS55KSksaj1mLTIqZCtiLShoLTIqZitkKSxrPTIqKGQtYiktMiooZi1kKSxsPWItZCxtPSgtaytOLnNxcnQoayprLTQqaipsKSkvMi9qLG49KC1rLU4uc3FydChrKmstNCpqKmwpKS8yL2osUShtKT5cIjFlMTJcIiYmKG09LjUpLFEobik+XCIxZTEyXCImJihuPS41KSxtPjAmJjE+bSYmKGk9SWIoYSxiLGMsZCxlLGYsZyxoLG0pLHAucHVzaChpLngpLG8ucHVzaChpLnkpKSxuPjAmJjE+biYmKGk9SWIoYSxiLGMsZCxlLGYsZyxoLG4pLHAucHVzaChpLngpLG8ucHVzaChpLnkpKSx7bWluOnt4OlBbRF0oMCxwKSx5OlBbRF0oMCxvKX0sbWF4Ont4Ok9bRF0oMCxwKSx5Ok9bRF0oMCxvKX19fSksS2I9Yy5fcGF0aDJjdXJ2ZT1mKGZ1bmN0aW9uKGEsYil7dmFyIGM9IWImJkFiKGEpO2lmKCFiJiZjLmN1cnZlKXJldHVybiBDYihjLmN1cnZlKTtmb3IodmFyIGQ9RWIoYSksZT1iJiZFYihiKSxmPXt4OjAseTowLGJ4OjAsYnk6MCxYOjAsWTowLHF4Om51bGwscXk6bnVsbH0sZz17eDowLHk6MCxieDowLGJ5OjAsWDowLFk6MCxxeDpudWxsLHF5Om51bGx9LGg9KGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e1Q6MSxROjF9O2lmKCFhKXJldHVybltcIkNcIixiLngsYi55LGIueCxiLnksYi54LGIueV07c3dpdGNoKCEoYVswXWluIGYpJiYoYi5xeD1iLnF5PW51bGwpLGFbMF0pe2Nhc2VcIk1cIjpiLlg9YVsxXSxiLlk9YVsyXTticmVhaztjYXNlXCJBXCI6YT1bXCJDXCJdW0VdKEhiW0RdKDAsW2IueCxiLnldW0VdKGEuc2xpY2UoMSkpKSk7YnJlYWs7Y2FzZVwiU1wiOlwiQ1wiPT1jfHxcIlNcIj09Yz8oZD0yKmIueC1iLmJ4LGU9MipiLnktYi5ieSk6KGQ9Yi54LGU9Yi55KSxhPVtcIkNcIixkLGVdW0VdKGEuc2xpY2UoMSkpO2JyZWFrO2Nhc2VcIlRcIjpcIlFcIj09Y3x8XCJUXCI9PWM/KGIucXg9MipiLngtYi5xeCxiLnF5PTIqYi55LWIucXkpOihiLnF4PWIueCxiLnF5PWIueSksYT1bXCJDXCJdW0VdKEdiKGIueCxiLnksYi5xeCxiLnF5LGFbMV0sYVsyXSkpO2JyZWFrO2Nhc2VcIlFcIjpiLnF4PWFbMV0sYi5xeT1hWzJdLGE9W1wiQ1wiXVtFXShHYihiLngsYi55LGFbMV0sYVsyXSxhWzNdLGFbNF0pKTticmVhaztjYXNlXCJMXCI6YT1bXCJDXCJdW0VdKEZiKGIueCxiLnksYVsxXSxhWzJdKSk7YnJlYWs7Y2FzZVwiSFwiOmE9W1wiQ1wiXVtFXShGYihiLngsYi55LGFbMV0sYi55KSk7YnJlYWs7Y2FzZVwiVlwiOmE9W1wiQ1wiXVtFXShGYihiLngsYi55LGIueCxhWzFdKSk7YnJlYWs7Y2FzZVwiWlwiOmE9W1wiQ1wiXVtFXShGYihiLngsYi55LGIuWCxiLlkpKX1yZXR1cm4gYX0pLGk9ZnVuY3Rpb24oYSxiKXtpZihhW2JdLmxlbmd0aD43KXthW2JdLnNoaWZ0KCk7Zm9yKHZhciBjPWFbYl07Yy5sZW5ndGg7KWtbYl09XCJBXCIsZSYmKGxbYl09XCJBXCIpLGEuc3BsaWNlKGIrKywwLFtcIkNcIl1bRV0oYy5zcGxpY2UoMCw2KSkpO2Euc3BsaWNlKGIsMSkscD1PKGQubGVuZ3RoLGUmJmUubGVuZ3RofHwwKX19LGo9ZnVuY3Rpb24oYSxiLGMsZixnKXthJiZiJiZcIk1cIj09YVtnXVswXSYmXCJNXCIhPWJbZ11bMF0mJihiLnNwbGljZShnLDAsW1wiTVwiLGYueCxmLnldKSxjLmJ4PTAsYy5ieT0wLGMueD1hW2ddWzFdLGMueT1hW2ddWzJdLHA9TyhkLmxlbmd0aCxlJiZlLmxlbmd0aHx8MCkpfSxrPVtdLGw9W10sbT1cIlwiLG49XCJcIixvPTAscD1PKGQubGVuZ3RoLGUmJmUubGVuZ3RofHwwKTtwPm87bysrKXtkW29dJiYobT1kW29dWzBdKSxcIkNcIiE9bSYmKGtbb109bSxvJiYobj1rW28tMV0pKSxkW29dPWgoZFtvXSxmLG4pLFwiQVwiIT1rW29dJiZcIkNcIj09bSYmKGtbb109XCJDXCIpLGkoZCxvKSxlJiYoZVtvXSYmKG09ZVtvXVswXSksXCJDXCIhPW0mJihsW29dPW0sbyYmKG49bFtvLTFdKSksZVtvXT1oKGVbb10sZyxuKSxcIkFcIiE9bFtvXSYmXCJDXCI9PW0mJihsW29dPVwiQ1wiKSxpKGUsbykpLGooZCxlLGYsZyxvKSxqKGUsZCxnLGYsbyk7dmFyIHE9ZFtvXSxyPWUmJmVbb10scz1xLmxlbmd0aCx0PWUmJnIubGVuZ3RoO2YueD1xW3MtMl0sZi55PXFbcy0xXSxmLmJ4PV8ocVtzLTRdKXx8Zi54LGYuYnk9XyhxW3MtM10pfHxmLnksZy5ieD1lJiYoXyhyW3QtNF0pfHxnLngpLGcuYnk9ZSYmKF8oclt0LTNdKXx8Zy55KSxnLng9ZSYmclt0LTJdLGcueT1lJiZyW3QtMV19cmV0dXJuIGV8fChjLmN1cnZlPUNiKGQpKSxlP1tkLGVdOmR9LG51bGwsQ2IpLExiPShjLl9wYXJzZURvdHM9ZihmdW5jdGlvbihhKXtmb3IodmFyIGI9W10sZD0wLGU9YS5sZW5ndGg7ZT5kO2QrKyl7dmFyIGY9e30sZz1hW2RdLm1hdGNoKC9eKFteOl0qKTo/KFtcXGRcXC5dKikvKTtpZihmLmNvbG9yPWMuZ2V0UkdCKGdbMV0pLGYuY29sb3IuZXJyb3IpcmV0dXJuIG51bGw7Zi5jb2xvcj1mLmNvbG9yLmhleCxnWzJdJiYoZi5vZmZzZXQ9Z1syXStcIiVcIiksYi5wdXNoKGYpfWZvcihkPTEsZT1iLmxlbmd0aC0xO2U+ZDtkKyspaWYoIWJbZF0ub2Zmc2V0KXtmb3IodmFyIGg9XyhiW2QtMV0ub2Zmc2V0fHwwKSxpPTAsaj1kKzE7ZT5qO2orKylpZihiW2pdLm9mZnNldCl7aT1iW2pdLm9mZnNldDticmVha31pfHwoaT0xMDAsaj1lKSxpPV8oaSk7Zm9yKHZhciBrPShpLWgpLyhqLWQrMSk7aj5kO2QrKyloKz1rLGJbZF0ub2Zmc2V0PWgrXCIlXCJ9cmV0dXJuIGJ9KSxjLl90ZWFyPWZ1bmN0aW9uKGEsYil7YT09Yi50b3AmJihiLnRvcD1hLnByZXYpLGE9PWIuYm90dG9tJiYoYi5ib3R0b209YS5uZXh0KSxhLm5leHQmJihhLm5leHQucHJldj1hLnByZXYpLGEucHJldiYmKGEucHJldi5uZXh0PWEubmV4dCl9KSxNYj0oYy5fdG9mcm9udD1mdW5jdGlvbihhLGIpe2IudG9wIT09YSYmKExiKGEsYiksYS5uZXh0PW51bGwsYS5wcmV2PWIudG9wLGIudG9wLm5leHQ9YSxiLnRvcD1hKX0sYy5fdG9iYWNrPWZ1bmN0aW9uKGEsYil7Yi5ib3R0b20hPT1hJiYoTGIoYSxiKSxhLm5leHQ9Yi5ib3R0b20sYS5wcmV2PW51bGwsYi5ib3R0b20ucHJldj1hLGIuYm90dG9tPWEpfSxjLl9pbnNlcnRhZnRlcj1mdW5jdGlvbihhLGIsYyl7TGIoYSxjKSxiPT1jLnRvcCYmKGMudG9wPWEpLGIubmV4dCYmKGIubmV4dC5wcmV2PWEpLGEubmV4dD1iLm5leHQsYS5wcmV2PWIsYi5uZXh0PWF9LGMuX2luc2VydGJlZm9yZT1mdW5jdGlvbihhLGIsYyl7TGIoYSxjKSxiPT1jLmJvdHRvbSYmKGMuYm90dG9tPWEpLGIucHJldiYmKGIucHJldi5uZXh0PWEpLGEucHJldj1iLnByZXYsYi5wcmV2PWEsYS5uZXh0PWJ9LGMudG9NYXRyaXg9ZnVuY3Rpb24oYSxiKXt2YXIgYz1CYihhKSxkPXtfOnt0cmFuc2Zvcm06R30sZ2V0QkJveDpmdW5jdGlvbigpe3JldHVybiBjfX07cmV0dXJuIE5iKGQsYiksZC5tYXRyaXh9KSxOYj0oYy50cmFuc2Zvcm1QYXRoPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHJiKGEsTWIoYSxiKSl9LGMuX2V4dHJhY3RUcmFuc2Zvcm09ZnVuY3Rpb24oYSxiKXtpZihudWxsPT1iKXJldHVybiBhLl8udHJhbnNmb3JtO2I9SShiKS5yZXBsYWNlKC9cXC57M318XFx1MjAyNi9nLGEuXy50cmFuc2Zvcm18fEcpO3ZhciBkPWMucGFyc2VUcmFuc2Zvcm1TdHJpbmcoYiksZT0wLGY9MCxnPTAsaD0xLGk9MSxqPWEuXyxrPW5ldyBvO2lmKGoudHJhbnNmb3JtPWR8fFtdLGQpZm9yKHZhciBsPTAsbT1kLmxlbmd0aDttPmw7bCsrKXt2YXIgbixwLHEscixzLHQ9ZFtsXSx1PXQubGVuZ3RoLHY9SSh0WzBdKS50b0xvd2VyQ2FzZSgpLHc9dFswXSE9dix4PXc/ay5pbnZlcnQoKTowO1widFwiPT12JiYzPT11P3c/KG49eC54KDAsMCkscD14LnkoMCwwKSxxPXgueCh0WzFdLHRbMl0pLHI9eC55KHRbMV0sdFsyXSksay50cmFuc2xhdGUocS1uLHItcCkpOmsudHJhbnNsYXRlKHRbMV0sdFsyXSk6XCJyXCI9PXY/Mj09dT8ocz1zfHxhLmdldEJCb3goMSksay5yb3RhdGUodFsxXSxzLngrcy53aWR0aC8yLHMueStzLmhlaWdodC8yKSxlKz10WzFdKTo0PT11JiYodz8ocT14LngodFsyXSx0WzNdKSxyPXgueSh0WzJdLHRbM10pLGsucm90YXRlKHRbMV0scSxyKSk6ay5yb3RhdGUodFsxXSx0WzJdLHRbM10pLGUrPXRbMV0pOlwic1wiPT12PzI9PXV8fDM9PXU/KHM9c3x8YS5nZXRCQm94KDEpLGsuc2NhbGUodFsxXSx0W3UtMV0scy54K3Mud2lkdGgvMixzLnkrcy5oZWlnaHQvMiksaCo9dFsxXSxpKj10W3UtMV0pOjU9PXUmJih3PyhxPXgueCh0WzNdLHRbNF0pLHI9eC55KHRbM10sdFs0XSksay5zY2FsZSh0WzFdLHRbMl0scSxyKSk6ay5zY2FsZSh0WzFdLHRbMl0sdFszXSx0WzRdKSxoKj10WzFdLGkqPXRbMl0pOlwibVwiPT12JiY3PT11JiZrLmFkZCh0WzFdLHRbMl0sdFszXSx0WzRdLHRbNV0sdFs2XSksai5kaXJ0eVQ9MSxhLm1hdHJpeD1rfWEubWF0cml4PWssai5zeD1oLGouc3k9aSxqLmRlZz1lLGouZHg9Zj1rLmUsai5keT1nPWsuZiwxPT1oJiYxPT1pJiYhZSYmai5iYm94PyhqLmJib3gueCs9K2Ysai5iYm94LnkrPStnKTpqLmRpcnR5VD0xfSksT2I9ZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtzd2l0Y2goYi50b0xvd2VyQ2FzZSgpKXtjYXNlXCJ0XCI6cmV0dXJuW2IsMCwwXTtjYXNlXCJtXCI6cmV0dXJuW2IsMSwwLDAsMSwwLDBdO2Nhc2VcInJcIjpyZXR1cm4gND09YS5sZW5ndGg/W2IsMCxhWzJdLGFbM11dOltiLDBdO2Nhc2VcInNcIjpyZXR1cm4gNT09YS5sZW5ndGg/W2IsMSwxLGFbM10sYVs0XV06Mz09YS5sZW5ndGg/W2IsMSwxXTpbYiwxXX19LFBiPWMuX2VxdWFsaXNlVHJhbnNmb3JtPWZ1bmN0aW9uKGEsYil7Yj1JKGIpLnJlcGxhY2UoL1xcLnszfXxcXHUyMDI2L2csYSksYT1jLnBhcnNlVHJhbnNmb3JtU3RyaW5nKGEpfHxbXSxiPWMucGFyc2VUcmFuc2Zvcm1TdHJpbmcoYil8fFtdO1xuZm9yKHZhciBkLGUsZixnLGg9TyhhLmxlbmd0aCxiLmxlbmd0aCksaT1bXSxqPVtdLGs9MDtoPms7aysrKXtpZihmPWFba118fE9iKGJba10pLGc9YltrXXx8T2IoZiksZlswXSE9Z1swXXx8XCJyXCI9PWZbMF0udG9Mb3dlckNhc2UoKSYmKGZbMl0hPWdbMl18fGZbM10hPWdbM10pfHxcInNcIj09ZlswXS50b0xvd2VyQ2FzZSgpJiYoZlszXSE9Z1szXXx8Zls0XSE9Z1s0XSkpcmV0dXJuO2ZvcihpW2tdPVtdLGpba109W10sZD0wLGU9TyhmLmxlbmd0aCxnLmxlbmd0aCk7ZT5kO2QrKylkIGluIGYmJihpW2tdW2RdPWZbZF0pLGQgaW4gZyYmKGpba11bZF09Z1tkXSl9cmV0dXJue2Zyb206aSx0bzpqfX07Yy5fZ2V0Q29udGFpbmVyPWZ1bmN0aW9uKGEsYixkLGUpe3ZhciBmO3JldHVybiBmPW51bGwhPWV8fGMuaXMoYSxcIm9iamVjdFwiKT9hOkEuZG9jLmdldEVsZW1lbnRCeUlkKGEpLG51bGwhPWY/Zi50YWdOYW1lP251bGw9PWI/e2NvbnRhaW5lcjpmLHdpZHRoOmYuc3R5bGUucGl4ZWxXaWR0aHx8Zi5vZmZzZXRXaWR0aCxoZWlnaHQ6Zi5zdHlsZS5waXhlbEhlaWdodHx8Zi5vZmZzZXRIZWlnaHR9Ontjb250YWluZXI6Zix3aWR0aDpiLGhlaWdodDpkfTp7Y29udGFpbmVyOjEseDphLHk6Yix3aWR0aDpkLGhlaWdodDplfTp2b2lkIDB9LGMucGF0aFRvUmVsYXRpdmU9RGIsYy5fZW5naW5lPXt9LGMucGF0aDJjdXJ2ZT1LYixjLm1hdHJpeD1mdW5jdGlvbihhLGIsYyxkLGUsZil7cmV0dXJuIG5ldyBvKGEsYixjLGQsZSxmKX0sZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gYVswXSphWzBdK2FbMV0qYVsxXX1mdW5jdGlvbiBkKGEpe3ZhciBjPU4uc3FydChiKGEpKTthWzBdJiYoYVswXS89YyksYVsxXSYmKGFbMV0vPWMpfWEuYWRkPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXt2YXIgZyxoLGksaixrPVtbXSxbXSxbXV0sbD1bW3RoaXMuYSx0aGlzLmMsdGhpcy5lXSxbdGhpcy5iLHRoaXMuZCx0aGlzLmZdLFswLDAsMV1dLG09W1thLGMsZV0sW2IsZCxmXSxbMCwwLDFdXTtmb3IoYSYmYSBpbnN0YW5jZW9mIG8mJihtPVtbYS5hLGEuYyxhLmVdLFthLmIsYS5kLGEuZl0sWzAsMCwxXV0pLGc9MDszPmc7ZysrKWZvcihoPTA7Mz5oO2grKyl7Zm9yKGo9MCxpPTA7Mz5pO2krKylqKz1sW2ddW2ldKm1baV1baF07a1tnXVtoXT1qfXRoaXMuYT1rWzBdWzBdLHRoaXMuYj1rWzFdWzBdLHRoaXMuYz1rWzBdWzFdLHRoaXMuZD1rWzFdWzFdLHRoaXMuZT1rWzBdWzJdLHRoaXMuZj1rWzFdWzJdfSxhLmludmVydD1mdW5jdGlvbigpe3ZhciBhPXRoaXMsYj1hLmEqYS5kLWEuYiphLmM7cmV0dXJuIG5ldyBvKGEuZC9iLC1hLmIvYiwtYS5jL2IsYS5hL2IsKGEuYyphLmYtYS5kKmEuZSkvYiwoYS5iKmEuZS1hLmEqYS5mKS9iKX0sYS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgbyh0aGlzLmEsdGhpcy5iLHRoaXMuYyx0aGlzLmQsdGhpcy5lLHRoaXMuZil9LGEudHJhbnNsYXRlPWZ1bmN0aW9uKGEsYil7dGhpcy5hZGQoMSwwLDAsMSxhLGIpfSxhLnNjYWxlPWZ1bmN0aW9uKGEsYixjLGQpe251bGw9PWImJihiPWEpLChjfHxkKSYmdGhpcy5hZGQoMSwwLDAsMSxjLGQpLHRoaXMuYWRkKGEsMCwwLGIsMCwwKSwoY3x8ZCkmJnRoaXMuYWRkKDEsMCwwLDEsLWMsLWQpfSxhLnJvdGF0ZT1mdW5jdGlvbihhLGIsZCl7YT1jLnJhZChhKSxiPWJ8fDAsZD1kfHwwO3ZhciBlPStOLmNvcyhhKS50b0ZpeGVkKDkpLGY9K04uc2luKGEpLnRvRml4ZWQoOSk7dGhpcy5hZGQoZSxmLC1mLGUsYixkKSx0aGlzLmFkZCgxLDAsMCwxLC1iLC1kKX0sYS54PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGEqdGhpcy5hK2IqdGhpcy5jK3RoaXMuZX0sYS55PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGEqdGhpcy5iK2IqdGhpcy5kK3RoaXMuZn0sYS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuK3RoaXNbSS5mcm9tQ2hhckNvZGUoOTcrYSldLnRvRml4ZWQoNCl9LGEudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gYy5zdmc/XCJtYXRyaXgoXCIrW3RoaXMuZ2V0KDApLHRoaXMuZ2V0KDEpLHRoaXMuZ2V0KDIpLHRoaXMuZ2V0KDMpLHRoaXMuZ2V0KDQpLHRoaXMuZ2V0KDUpXS5qb2luKCkrXCIpXCI6W3RoaXMuZ2V0KDApLHRoaXMuZ2V0KDIpLHRoaXMuZ2V0KDEpLHRoaXMuZ2V0KDMpLDAsMF0uam9pbigpfSxhLnRvRmlsdGVyPWZ1bmN0aW9uKCl7cmV0dXJuXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KE0xMT1cIit0aGlzLmdldCgwKStcIiwgTTEyPVwiK3RoaXMuZ2V0KDIpK1wiLCBNMjE9XCIrdGhpcy5nZXQoMSkrXCIsIE0yMj1cIit0aGlzLmdldCgzKStcIiwgRHg9XCIrdGhpcy5nZXQoNCkrXCIsIER5PVwiK3RoaXMuZ2V0KDUpK1wiLCBzaXppbmdtZXRob2Q9J2F1dG8gZXhwYW5kJylcIn0sYS5vZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm5bdGhpcy5lLnRvRml4ZWQoNCksdGhpcy5mLnRvRml4ZWQoNCldfSxhLnNwbGl0PWZ1bmN0aW9uKCl7dmFyIGE9e307YS5keD10aGlzLmUsYS5keT10aGlzLmY7dmFyIGU9W1t0aGlzLmEsdGhpcy5jXSxbdGhpcy5iLHRoaXMuZF1dO2Euc2NhbGV4PU4uc3FydChiKGVbMF0pKSxkKGVbMF0pLGEuc2hlYXI9ZVswXVswXSplWzFdWzBdK2VbMF1bMV0qZVsxXVsxXSxlWzFdPVtlWzFdWzBdLWVbMF1bMF0qYS5zaGVhcixlWzFdWzFdLWVbMF1bMV0qYS5zaGVhcl0sYS5zY2FsZXk9Ti5zcXJ0KGIoZVsxXSkpLGQoZVsxXSksYS5zaGVhci89YS5zY2FsZXk7dmFyIGY9LWVbMF1bMV0sZz1lWzFdWzFdO3JldHVybiAwPmc/KGEucm90YXRlPWMuZGVnKE4uYWNvcyhnKSksMD5mJiYoYS5yb3RhdGU9MzYwLWEucm90YXRlKSk6YS5yb3RhdGU9Yy5kZWcoTi5hc2luKGYpKSxhLmlzU2ltcGxlPSEoK2Euc2hlYXIudG9GaXhlZCg5KXx8YS5zY2FsZXgudG9GaXhlZCg5KSE9YS5zY2FsZXkudG9GaXhlZCg5KSYmYS5yb3RhdGUpLGEuaXNTdXBlclNpbXBsZT0hK2Euc2hlYXIudG9GaXhlZCg5KSYmYS5zY2FsZXgudG9GaXhlZCg5KT09YS5zY2FsZXkudG9GaXhlZCg5KSYmIWEucm90YXRlLGEubm9Sb3RhdGlvbj0hK2Euc2hlYXIudG9GaXhlZCg5KSYmIWEucm90YXRlLGF9LGEudG9UcmFuc2Zvcm1TdHJpbmc9ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dGhpc1tKXSgpO3JldHVybiBiLmlzU2ltcGxlPyhiLnNjYWxleD0rYi5zY2FsZXgudG9GaXhlZCg0KSxiLnNjYWxleT0rYi5zY2FsZXkudG9GaXhlZCg0KSxiLnJvdGF0ZT0rYi5yb3RhdGUudG9GaXhlZCg0KSwoYi5keHx8Yi5keT9cInRcIitbYi5keCxiLmR5XTpHKSsoMSE9Yi5zY2FsZXh8fDEhPWIuc2NhbGV5P1wic1wiK1tiLnNjYWxleCxiLnNjYWxleSwwLDBdOkcpKyhiLnJvdGF0ZT9cInJcIitbYi5yb3RhdGUsMCwwXTpHKSk6XCJtXCIrW3RoaXMuZ2V0KDApLHRoaXMuZ2V0KDEpLHRoaXMuZ2V0KDIpLHRoaXMuZ2V0KDMpLHRoaXMuZ2V0KDQpLHRoaXMuZ2V0KDUpXX19KG8ucHJvdG90eXBlKTt2YXIgUWI9bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVmVyc2lvblxcLyguKj8pXFxzLyl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO3Yuc2FmYXJpPVwiQXBwbGUgQ29tcHV0ZXIsIEluYy5cIj09bmF2aWdhdG9yLnZlbmRvciYmKFFiJiZRYlsxXTw0fHxcImlQXCI9PW5hdmlnYXRvci5wbGF0Zm9ybS5zbGljZSgwLDIpKXx8XCJHb29nbGUgSW5jLlwiPT1uYXZpZ2F0b3IudmVuZG9yJiZRYiYmUWJbMV08OD9mdW5jdGlvbigpe3ZhciBhPXRoaXMucmVjdCgtOTksLTk5LHRoaXMud2lkdGgrOTksdGhpcy5oZWlnaHQrOTkpLmF0dHIoe3N0cm9rZTpcIm5vbmVcIn0pO3NldFRpbWVvdXQoZnVuY3Rpb24oKXthLnJlbW92ZSgpfSl9Om1iO2Zvcih2YXIgUmI9ZnVuY3Rpb24oKXt0aGlzLnJldHVyblZhbHVlPSExfSxTYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKX0sVGI9ZnVuY3Rpb24oKXt0aGlzLmNhbmNlbEJ1YmJsZT0hMH0sVWI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfSxWYj1mdW5jdGlvbihhKXt2YXIgYj1BLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxBLmRvYy5ib2R5LnNjcm9sbFRvcCxjPUEuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0fHxBLmRvYy5ib2R5LnNjcm9sbExlZnQ7cmV0dXJue3g6YS5jbGllbnRYK2MseTphLmNsaWVudFkrYn19LFdiPWZ1bmN0aW9uKCl7cmV0dXJuIEEuZG9jLmFkZEV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ZnVuY3Rpb24oYSl7dmFyIGI9VmIoYSk7cmV0dXJuIGMuY2FsbChkLGEsYi54LGIueSl9O2lmKGEuYWRkRXZlbnRMaXN0ZW5lcihiLGUsITEpLEYmJkxbYl0pe3ZhciBmPWZ1bmN0aW9uKGIpe2Zvcih2YXIgZT1WYihiKSxmPWIsZz0wLGg9Yi50YXJnZXRUb3VjaGVzJiZiLnRhcmdldFRvdWNoZXMubGVuZ3RoO2g+ZztnKyspaWYoYi50YXJnZXRUb3VjaGVzW2ddLnRhcmdldD09YSl7Yj1iLnRhcmdldFRvdWNoZXNbZ10sYi5vcmlnaW5hbEV2ZW50PWYsYi5wcmV2ZW50RGVmYXVsdD1TYixiLnN0b3BQcm9wYWdhdGlvbj1VYjticmVha31yZXR1cm4gYy5jYWxsKGQsYixlLngsZS55KX07YS5hZGRFdmVudExpc3RlbmVyKExbYl0sZiwhMSl9cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGUsITEpLEYmJkxbYl0mJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihMW2JdLGYsITEpLCEwfX06QS5kb2MuYXR0YWNoRXZlbnQ/ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ZnVuY3Rpb24oYSl7YT1hfHxBLndpbi5ldmVudDt2YXIgYj1BLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxBLmRvYy5ib2R5LnNjcm9sbFRvcCxlPUEuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0fHxBLmRvYy5ib2R5LnNjcm9sbExlZnQsZj1hLmNsaWVudFgrZSxnPWEuY2xpZW50WStiO3JldHVybiBhLnByZXZlbnREZWZhdWx0PWEucHJldmVudERlZmF1bHR8fFJiLGEuc3RvcFByb3BhZ2F0aW9uPWEuc3RvcFByb3BhZ2F0aW9ufHxUYixjLmNhbGwoZCxhLGYsZyl9O2EuYXR0YWNoRXZlbnQoXCJvblwiK2IsZSk7dmFyIGY9ZnVuY3Rpb24oKXtyZXR1cm4gYS5kZXRhY2hFdmVudChcIm9uXCIrYixlKSwhMH07cmV0dXJuIGZ9OnZvaWQgMH0oKSxYYj1bXSxZYj1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1hLmNsaWVudFgsZT1hLmNsaWVudFksZj1BLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxBLmRvYy5ib2R5LnNjcm9sbFRvcCxnPUEuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0fHxBLmRvYy5ib2R5LnNjcm9sbExlZnQsaD1YYi5sZW5ndGg7aC0tOyl7aWYoYz1YYltoXSxGJiZhLnRvdWNoZXMpe2Zvcih2YXIgaSxqPWEudG91Y2hlcy5sZW5ndGg7ai0tOylpZihpPWEudG91Y2hlc1tqXSxpLmlkZW50aWZpZXI9PWMuZWwuX2RyYWcuaWQpe2Q9aS5jbGllbnRYLGU9aS5jbGllbnRZLChhLm9yaWdpbmFsRXZlbnQ/YS5vcmlnaW5hbEV2ZW50OmEpLnByZXZlbnREZWZhdWx0KCk7YnJlYWt9fWVsc2UgYS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBrLGw9Yy5lbC5ub2RlLG09bC5uZXh0U2libGluZyxuPWwucGFyZW50Tm9kZSxvPWwuc3R5bGUuZGlzcGxheTtBLndpbi5vcGVyYSYmbi5yZW1vdmVDaGlsZChsKSxsLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsaz1jLmVsLnBhcGVyLmdldEVsZW1lbnRCeVBvaW50KGQsZSksbC5zdHlsZS5kaXNwbGF5PW8sQS53aW4ub3BlcmEmJihtP24uaW5zZXJ0QmVmb3JlKGwsbSk6bi5hcHBlbmRDaGlsZChsKSksayYmYihcInJhcGhhZWwuZHJhZy5vdmVyLlwiK2MuZWwuaWQsYy5lbCxrKSxkKz1nLGUrPWYsYihcInJhcGhhZWwuZHJhZy5tb3ZlLlwiK2MuZWwuaWQsYy5tb3ZlX3Njb3BlfHxjLmVsLGQtYy5lbC5fZHJhZy54LGUtYy5lbC5fZHJhZy55LGQsZSxhKX19LFpiPWZ1bmN0aW9uKGEpe2MudW5tb3VzZW1vdmUoWWIpLnVubW91c2V1cChaYik7Zm9yKHZhciBkLGU9WGIubGVuZ3RoO2UtLTspZD1YYltlXSxkLmVsLl9kcmFnPXt9LGIoXCJyYXBoYWVsLmRyYWcuZW5kLlwiK2QuZWwuaWQsZC5lbmRfc2NvcGV8fGQuc3RhcnRfc2NvcGV8fGQubW92ZV9zY29wZXx8ZC5lbCxhKTtYYj1bXX0sJGI9Yy5lbD17fSxfYj1LLmxlbmd0aDtfYi0tOykhZnVuY3Rpb24oYSl7Y1thXT0kYlthXT1mdW5jdGlvbihiLGQpe3JldHVybiBjLmlzKGIsXCJmdW5jdGlvblwiKSYmKHRoaXMuZXZlbnRzPXRoaXMuZXZlbnRzfHxbXSx0aGlzLmV2ZW50cy5wdXNoKHtuYW1lOmEsZjpiLHVuYmluZDpXYih0aGlzLnNoYXBlfHx0aGlzLm5vZGV8fEEuZG9jLGEsYixkfHx0aGlzKX0pKSx0aGlzfSxjW1widW5cIithXT0kYltcInVuXCIrYV09ZnVuY3Rpb24oYil7Zm9yKHZhciBkPXRoaXMuZXZlbnRzfHxbXSxlPWQubGVuZ3RoO2UtLTspZFtlXS5uYW1lIT1hfHwhYy5pcyhiLFwidW5kZWZpbmVkXCIpJiZkW2VdLmYhPWJ8fChkW2VdLnVuYmluZCgpLGQuc3BsaWNlKGUsMSksIWQubGVuZ3RoJiZkZWxldGUgdGhpcy5ldmVudHMpO3JldHVybiB0aGlzfX0oS1tfYl0pOyRiLmRhdGE9ZnVuY3Rpb24oYSxkKXt2YXIgZT1rYlt0aGlzLmlkXT1rYlt0aGlzLmlkXXx8e307aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZTtpZigxPT1hcmd1bWVudHMubGVuZ3RoKXtpZihjLmlzKGEsXCJvYmplY3RcIikpe2Zvcih2YXIgZiBpbiBhKWFbel0oZikmJnRoaXMuZGF0YShmLGFbZl0pO3JldHVybiB0aGlzfXJldHVybiBiKFwicmFwaGFlbC5kYXRhLmdldC5cIit0aGlzLmlkLHRoaXMsZVthXSxhKSxlW2FdfXJldHVybiBlW2FdPWQsYihcInJhcGhhZWwuZGF0YS5zZXQuXCIrdGhpcy5pZCx0aGlzLGQsYSksdGhpc30sJGIucmVtb3ZlRGF0YT1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9rYlt0aGlzLmlkXT17fTprYlt0aGlzLmlkXSYmZGVsZXRlIGtiW3RoaXMuaWRdW2FdLHRoaXN9LCRiLmdldERhdGE9ZnVuY3Rpb24oKXtyZXR1cm4gZChrYlt0aGlzLmlkXXx8e30pfSwkYi5ob3Zlcj1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5tb3VzZW92ZXIoYSxjKS5tb3VzZW91dChiLGR8fGMpfSwkYi51bmhvdmVyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMudW5tb3VzZW92ZXIoYSkudW5tb3VzZW91dChiKX07dmFyIGFjPVtdOyRiLmRyYWc9ZnVuY3Rpb24oYSxkLGUsZixnLGgpe2Z1bmN0aW9uIGkoaSl7KGkub3JpZ2luYWxFdmVudHx8aSkucHJldmVudERlZmF1bHQoKTt2YXIgaj1pLmNsaWVudFgsaz1pLmNsaWVudFksbD1BLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxBLmRvYy5ib2R5LnNjcm9sbFRvcCxtPUEuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0fHxBLmRvYy5ib2R5LnNjcm9sbExlZnQ7aWYodGhpcy5fZHJhZy5pZD1pLmlkZW50aWZpZXIsRiYmaS50b3VjaGVzKWZvcih2YXIgbixvPWkudG91Y2hlcy5sZW5ndGg7by0tOylpZihuPWkudG91Y2hlc1tvXSx0aGlzLl9kcmFnLmlkPW4uaWRlbnRpZmllcixuLmlkZW50aWZpZXI9PXRoaXMuX2RyYWcuaWQpe2o9bi5jbGllbnRYLGs9bi5jbGllbnRZO2JyZWFrfXRoaXMuX2RyYWcueD1qK20sdGhpcy5fZHJhZy55PWsrbCwhWGIubGVuZ3RoJiZjLm1vdXNlbW92ZShZYikubW91c2V1cChaYiksWGIucHVzaCh7ZWw6dGhpcyxtb3ZlX3Njb3BlOmYsc3RhcnRfc2NvcGU6ZyxlbmRfc2NvcGU6aH0pLGQmJmIub24oXCJyYXBoYWVsLmRyYWcuc3RhcnQuXCIrdGhpcy5pZCxkKSxhJiZiLm9uKFwicmFwaGFlbC5kcmFnLm1vdmUuXCIrdGhpcy5pZCxhKSxlJiZiLm9uKFwicmFwaGFlbC5kcmFnLmVuZC5cIit0aGlzLmlkLGUpLGIoXCJyYXBoYWVsLmRyYWcuc3RhcnQuXCIrdGhpcy5pZCxnfHxmfHx0aGlzLGkuY2xpZW50WCttLGkuY2xpZW50WStsLGkpfXJldHVybiB0aGlzLl9kcmFnPXt9LGFjLnB1c2goe2VsOnRoaXMsc3RhcnQ6aX0pLHRoaXMubW91c2Vkb3duKGkpLHRoaXN9LCRiLm9uRHJhZ092ZXI9ZnVuY3Rpb24oYSl7YT9iLm9uKFwicmFwaGFlbC5kcmFnLm92ZXIuXCIrdGhpcy5pZCxhKTpiLnVuYmluZChcInJhcGhhZWwuZHJhZy5vdmVyLlwiK3RoaXMuaWQpfSwkYi51bmRyYWc9ZnVuY3Rpb24oKXtmb3IodmFyIGE9YWMubGVuZ3RoO2EtLTspYWNbYV0uZWw9PXRoaXMmJih0aGlzLnVubW91c2Vkb3duKGFjW2FdLnN0YXJ0KSxhYy5zcGxpY2UoYSwxKSxiLnVuYmluZChcInJhcGhhZWwuZHJhZy4qLlwiK3RoaXMuaWQpKTshYWMubGVuZ3RoJiZjLnVubW91c2Vtb3ZlKFliKS51bm1vdXNldXAoWmIpLFhiPVtdfSx2LmNpcmNsZT1mdW5jdGlvbihhLGIsZCl7dmFyIGU9Yy5fZW5naW5lLmNpcmNsZSh0aGlzLGF8fDAsYnx8MCxkfHwwKTtyZXR1cm4gdGhpcy5fX3NldF9fJiZ0aGlzLl9fc2V0X18ucHVzaChlKSxlfSx2LnJlY3Q9ZnVuY3Rpb24oYSxiLGQsZSxmKXt2YXIgZz1jLl9lbmdpbmUucmVjdCh0aGlzLGF8fDAsYnx8MCxkfHwwLGV8fDAsZnx8MCk7cmV0dXJuIHRoaXMuX19zZXRfXyYmdGhpcy5fX3NldF9fLnB1c2goZyksZ30sdi5lbGxpcHNlPWZ1bmN0aW9uKGEsYixkLGUpe3ZhciBmPWMuX2VuZ2luZS5lbGxpcHNlKHRoaXMsYXx8MCxifHwwLGR8fDAsZXx8MCk7cmV0dXJuIHRoaXMuX19zZXRfXyYmdGhpcy5fX3NldF9fLnB1c2goZiksZn0sdi5wYXRoPWZ1bmN0aW9uKGEpe2EmJiFjLmlzKGEsVSkmJiFjLmlzKGFbMF0sVikmJihhKz1HKTt2YXIgYj1jLl9lbmdpbmUucGF0aChjLmZvcm1hdFtEXShjLGFyZ3VtZW50cyksdGhpcyk7cmV0dXJuIHRoaXMuX19zZXRfXyYmdGhpcy5fX3NldF9fLnB1c2goYiksYn0sdi5pbWFnZT1mdW5jdGlvbihhLGIsZCxlLGYpe3ZhciBnPWMuX2VuZ2luZS5pbWFnZSh0aGlzLGF8fFwiYWJvdXQ6YmxhbmtcIixifHwwLGR8fDAsZXx8MCxmfHwwKTtyZXR1cm4gdGhpcy5fX3NldF9fJiZ0aGlzLl9fc2V0X18ucHVzaChnKSxnfSx2LnRleHQ9ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPWMuX2VuZ2luZS50ZXh0KHRoaXMsYXx8MCxifHwwLEkoZCkpO3JldHVybiB0aGlzLl9fc2V0X18mJnRoaXMuX19zZXRfXy5wdXNoKGUpLGV9LHYuc2V0PWZ1bmN0aW9uKGEpeyFjLmlzKGEsXCJhcnJheVwiKSYmKGE9QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywwLGFyZ3VtZW50cy5sZW5ndGgpKTt2YXIgYj1uZXcgbWMoYSk7cmV0dXJuIHRoaXMuX19zZXRfXyYmdGhpcy5fX3NldF9fLnB1c2goYiksYi5wYXBlcj10aGlzLGIudHlwZT1cInNldFwiLGJ9LHYuc2V0U3RhcnQ9ZnVuY3Rpb24oYSl7dGhpcy5fX3NldF9fPWF8fHRoaXMuc2V0KCl9LHYuc2V0RmluaXNoPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fX3NldF9fO3JldHVybiBkZWxldGUgdGhpcy5fX3NldF9fLGF9LHYuZ2V0U2l6ZT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuY2FudmFzLnBhcmVudE5vZGU7cmV0dXJue3dpZHRoOmEub2Zmc2V0V2lkdGgsaGVpZ2h0OmEub2Zmc2V0SGVpZ2h0fX0sdi5zZXRTaXplPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGMuX2VuZ2luZS5zZXRTaXplLmNhbGwodGhpcyxhLGIpfSx2LnNldFZpZXdCb3g9ZnVuY3Rpb24oYSxiLGQsZSxmKXtyZXR1cm4gYy5fZW5naW5lLnNldFZpZXdCb3guY2FsbCh0aGlzLGEsYixkLGUsZil9LHYudG9wPXYuYm90dG9tPW51bGwsdi5yYXBoYWVsPWM7dmFyIGJjPWZ1bmN0aW9uKGEpe3ZhciBiPWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYz1hLm93bmVyRG9jdW1lbnQsZD1jLmJvZHksZT1jLmRvY3VtZW50RWxlbWVudCxmPWUuY2xpZW50VG9wfHxkLmNsaWVudFRvcHx8MCxnPWUuY2xpZW50TGVmdHx8ZC5jbGllbnRMZWZ0fHwwLGg9Yi50b3ArKEEud2luLnBhZ2VZT2Zmc2V0fHxlLnNjcm9sbFRvcHx8ZC5zY3JvbGxUb3ApLWYsaT1iLmxlZnQrKEEud2luLnBhZ2VYT2Zmc2V0fHxlLnNjcm9sbExlZnR8fGQuc2Nyb2xsTGVmdCktZztyZXR1cm57eTpoLHg6aX19O3YuZ2V0RWxlbWVudEJ5UG9pbnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy5jYW52YXMsZT1BLmRvYy5lbGVtZW50RnJvbVBvaW50KGEsYik7aWYoQS53aW4ub3BlcmEmJlwic3ZnXCI9PWUudGFnTmFtZSl7dmFyIGY9YmMoZCksZz1kLmNyZWF0ZVNWR1JlY3QoKTtnLng9YS1mLngsZy55PWItZi55LGcud2lkdGg9Zy5oZWlnaHQ9MTt2YXIgaD1kLmdldEludGVyc2VjdGlvbkxpc3QoZyxudWxsKTtoLmxlbmd0aCYmKGU9aFtoLmxlbmd0aC0xXSl9aWYoIWUpcmV0dXJuIG51bGw7Zm9yKDtlLnBhcmVudE5vZGUmJmUhPWQucGFyZW50Tm9kZSYmIWUucmFwaGFlbDspZT1lLnBhcmVudE5vZGU7cmV0dXJuIGU9PWMuY2FudmFzLnBhcmVudE5vZGUmJihlPWQpLGU9ZSYmZS5yYXBoYWVsP2MuZ2V0QnlJZChlLnJhcGhhZWxpZCk6bnVsbH0sdi5nZXRFbGVtZW50c0J5QkJveD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLnNldCgpO3JldHVybiB0aGlzLmZvckVhY2goZnVuY3Rpb24oZCl7Yy5pc0JCb3hJbnRlcnNlY3QoZC5nZXRCQm94KCksYSkmJmIucHVzaChkKX0pLGJ9LHYuZ2V0QnlJZD1mdW5jdGlvbihhKXtmb3IodmFyIGI9dGhpcy5ib3R0b207Yjspe2lmKGIuaWQ9PWEpcmV0dXJuIGI7Yj1iLm5leHR9cmV0dXJuIG51bGx9LHYuZm9yRWFjaD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz10aGlzLmJvdHRvbTtjOyl7aWYoYS5jYWxsKGIsYyk9PT0hMSlyZXR1cm4gdGhpcztjPWMubmV4dH1yZXR1cm4gdGhpc30sdi5nZXRFbGVtZW50c0J5UG9pbnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLnNldCgpO3JldHVybiB0aGlzLmZvckVhY2goZnVuY3Rpb24oZCl7ZC5pc1BvaW50SW5zaWRlKGEsYikmJmMucHVzaChkKX0pLGN9LCRiLmlzUG9pbnRJbnNpZGU9ZnVuY3Rpb24oYSxiKXt2YXIgZD10aGlzLnJlYWxQYXRoPXFiW3RoaXMudHlwZV0odGhpcyk7cmV0dXJuIHRoaXMuYXR0cihcInRyYW5zZm9ybVwiKSYmdGhpcy5hdHRyKFwidHJhbnNmb3JtXCIpLmxlbmd0aCYmKGQ9Yy50cmFuc2Zvcm1QYXRoKGQsdGhpcy5hdHRyKFwidHJhbnNmb3JtXCIpKSksYy5pc1BvaW50SW5zaWRlUGF0aChkLGEsYil9LCRiLmdldEJCb3g9ZnVuY3Rpb24oYSl7aWYodGhpcy5yZW1vdmVkKXJldHVybnt9O3ZhciBiPXRoaXMuXztyZXR1cm4gYT8oKGIuZGlydHl8fCFiLmJib3h3dCkmJih0aGlzLnJlYWxQYXRoPXFiW3RoaXMudHlwZV0odGhpcyksYi5iYm94d3Q9QmIodGhpcy5yZWFsUGF0aCksYi5iYm94d3QudG9TdHJpbmc9cCxiLmRpcnR5PTApLGIuYmJveHd0KTooKGIuZGlydHl8fGIuZGlydHlUfHwhYi5iYm94KSYmKChiLmRpcnR5fHwhdGhpcy5yZWFsUGF0aCkmJihiLmJib3h3dD0wLHRoaXMucmVhbFBhdGg9cWJbdGhpcy50eXBlXSh0aGlzKSksYi5iYm94PUJiKHJiKHRoaXMucmVhbFBhdGgsdGhpcy5tYXRyaXgpKSxiLmJib3gudG9TdHJpbmc9cCxiLmRpcnR5PWIuZGlydHlUPTApLGIuYmJveCl9LCRiLmNsb25lPWZ1bmN0aW9uKCl7aWYodGhpcy5yZW1vdmVkKXJldHVybiBudWxsO3ZhciBhPXRoaXMucGFwZXJbdGhpcy50eXBlXSgpLmF0dHIodGhpcy5hdHRyKCkpO3JldHVybiB0aGlzLl9fc2V0X18mJnRoaXMuX19zZXRfXy5wdXNoKGEpLGF9LCRiLmdsb3c9ZnVuY3Rpb24oYSl7aWYoXCJ0ZXh0XCI9PXRoaXMudHlwZSlyZXR1cm4gbnVsbDthPWF8fHt9O3ZhciBiPXt3aWR0aDooYS53aWR0aHx8MTApKygrdGhpcy5hdHRyKFwic3Ryb2tlLXdpZHRoXCIpfHwxKSxmaWxsOmEuZmlsbHx8ITEsb3BhY2l0eTphLm9wYWNpdHl8fC41LG9mZnNldHg6YS5vZmZzZXR4fHwwLG9mZnNldHk6YS5vZmZzZXR5fHwwLGNvbG9yOmEuY29sb3J8fFwiIzAwMFwifSxjPWIud2lkdGgvMixkPXRoaXMucGFwZXIsZT1kLnNldCgpLGY9dGhpcy5yZWFsUGF0aHx8cWJbdGhpcy50eXBlXSh0aGlzKTtmPXRoaXMubWF0cml4P3JiKGYsdGhpcy5tYXRyaXgpOmY7Zm9yKHZhciBnPTE7YysxPmc7ZysrKWUucHVzaChkLnBhdGgoZikuYXR0cih7c3Ryb2tlOmIuY29sb3IsZmlsbDpiLmZpbGw/Yi5jb2xvcjpcIm5vbmVcIixcInN0cm9rZS1saW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZS1saW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlLXdpZHRoXCI6KyhiLndpZHRoL2MqZykudG9GaXhlZCgzKSxvcGFjaXR5OisoYi5vcGFjaXR5L2MpLnRvRml4ZWQoMyl9KSk7cmV0dXJuIGUuaW5zZXJ0QmVmb3JlKHRoaXMpLnRyYW5zbGF0ZShiLm9mZnNldHgsYi5vZmZzZXR5KX07dmFyIGNjPWZ1bmN0aW9uKGEsYixkLGUsZixnLGgsaSxsKXtyZXR1cm4gbnVsbD09bD9qKGEsYixkLGUsZixnLGgsaSk6Yy5maW5kRG90c0F0U2VnbWVudChhLGIsZCxlLGYsZyxoLGksayhhLGIsZCxlLGYsZyxoLGksbCkpfSxkYz1mdW5jdGlvbihhLGIpe3JldHVybiBmdW5jdGlvbihkLGUsZil7ZD1LYihkKTtmb3IodmFyIGcsaCxpLGosayxsPVwiXCIsbT17fSxuPTAsbz0wLHA9ZC5sZW5ndGg7cD5vO28rKyl7aWYoaT1kW29dLFwiTVwiPT1pWzBdKWc9K2lbMV0saD0raVsyXTtlbHNle2lmKGo9Y2MoZyxoLGlbMV0saVsyXSxpWzNdLGlbNF0saVs1XSxpWzZdKSxuK2o+ZSl7aWYoYiYmIW0uc3RhcnQpe2lmKGs9Y2MoZyxoLGlbMV0saVsyXSxpWzNdLGlbNF0saVs1XSxpWzZdLGUtbiksbCs9W1wiQ1wiK2suc3RhcnQueCxrLnN0YXJ0Lnksay5tLngsay5tLnksay54LGsueV0sZilyZXR1cm4gbDttLnN0YXJ0PWwsbD1bXCJNXCIray54LGsueStcIkNcIitrLm4ueCxrLm4ueSxrLmVuZC54LGsuZW5kLnksaVs1XSxpWzZdXS5qb2luKCksbis9aixnPStpWzVdLGg9K2lbNl07Y29udGludWV9aWYoIWEmJiFiKXJldHVybiBrPWNjKGcsaCxpWzFdLGlbMl0saVszXSxpWzRdLGlbNV0saVs2XSxlLW4pLHt4OmsueCx5OmsueSxhbHBoYTprLmFscGhhfX1uKz1qLGc9K2lbNV0saD0raVs2XX1sKz1pLnNoaWZ0KCkraX1yZXR1cm4gbS5lbmQ9bCxrPWE/bjpiP206Yy5maW5kRG90c0F0U2VnbWVudChnLGgsaVswXSxpWzFdLGlbMl0saVszXSxpWzRdLGlbNV0sMSksay5hbHBoYSYmKGs9e3g6ay54LHk6ay55LGFscGhhOmsuYWxwaGF9KSxrfX0sZWM9ZGMoMSksZmM9ZGMoKSxnYz1kYygwLDEpO2MuZ2V0VG90YWxMZW5ndGg9ZWMsYy5nZXRQb2ludEF0TGVuZ3RoPWZjLGMuZ2V0U3VicGF0aD1mdW5jdGlvbihhLGIsYyl7aWYodGhpcy5nZXRUb3RhbExlbmd0aChhKS1jPDFlLTYpcmV0dXJuIGdjKGEsYikuZW5kO3ZhciBkPWdjKGEsYywxKTtyZXR1cm4gYj9nYyhkLGIpLmVuZDpkfSwkYi5nZXRUb3RhbExlbmd0aD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuZ2V0UGF0aCgpO2lmKGEpcmV0dXJuIHRoaXMubm9kZS5nZXRUb3RhbExlbmd0aD90aGlzLm5vZGUuZ2V0VG90YWxMZW5ndGgoKTplYyhhKX0sJGIuZ2V0UG9pbnRBdExlbmd0aD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmdldFBhdGgoKTtpZihiKXJldHVybiBmYyhiLGEpfSwkYi5nZXRQYXRoPWZ1bmN0aW9uKCl7dmFyIGEsYj1jLl9nZXRQYXRoW3RoaXMudHlwZV07aWYoXCJ0ZXh0XCIhPXRoaXMudHlwZSYmXCJzZXRcIiE9dGhpcy50eXBlKXJldHVybiBiJiYoYT1iKHRoaXMpKSxhfSwkYi5nZXRTdWJwYXRoPWZ1bmN0aW9uKGEsYil7dmFyIGQ9dGhpcy5nZXRQYXRoKCk7aWYoZClyZXR1cm4gYy5nZXRTdWJwYXRoKGQsYSxiKX07dmFyIGhjPWMuZWFzaW5nX2Zvcm11bGFzPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LFwiPFwiOmZ1bmN0aW9uKGEpe3JldHVybiBSKGEsMS43KX0sXCI+XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIFIoYSwuNDgpfSxcIjw+XCI6ZnVuY3Rpb24oYSl7dmFyIGI9LjQ4LWEvMS4wNCxjPU4uc3FydCguMTczNCtiKmIpLGQ9Yy1iLGU9UihRKGQpLDEvMykqKDA+ZD8tMToxKSxmPS1jLWIsZz1SKFEoZiksMS8zKSooMD5mPy0xOjEpLGg9ZStnKy41O3JldHVybiAzKigxLWgpKmgqaCtoKmgqaH0sYmFja0luOmZ1bmN0aW9uKGEpe3ZhciBiPTEuNzAxNTg7cmV0dXJuIGEqYSooKGIrMSkqYS1iKX0sYmFja091dDpmdW5jdGlvbihhKXthLT0xO3ZhciBiPTEuNzAxNTg7cmV0dXJuIGEqYSooKGIrMSkqYStiKSsxfSxlbGFzdGljOmZ1bmN0aW9uKGEpe3JldHVybiBhPT0hIWE/YTpSKDIsLTEwKmEpKk4uc2luKDIqKGEtLjA3NSkqUy8uMykrMX0sYm91bmNlOmZ1bmN0aW9uKGEpe3ZhciBiLGM9Ny41NjI1LGQ9Mi43NTtyZXR1cm4gMS9kPmE/Yj1jKmEqYToyL2Q+YT8oYS09MS41L2QsYj1jKmEqYSsuNzUpOjIuNS9kPmE/KGEtPTIuMjUvZCxiPWMqYSphKy45Mzc1KTooYS09Mi42MjUvZCxiPWMqYSphKy45ODQzNzUpLGJ9fTtoYy5lYXNlSW49aGNbXCJlYXNlLWluXCJdPWhjW1wiPFwiXSxoYy5lYXNlT3V0PWhjW1wiZWFzZS1vdXRcIl09aGNbXCI+XCJdLGhjLmVhc2VJbk91dD1oY1tcImVhc2UtaW4tb3V0XCJdPWhjW1wiPD5cIl0saGNbXCJiYWNrLWluXCJdPWhjLmJhY2tJbixoY1tcImJhY2stb3V0XCJdPWhjLmJhY2tPdXQ7dmFyIGljPVtdLGpjPWEucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxhLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8YS5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGEub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8YS5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oYSl7c2V0VGltZW91dChhLDE2KX0sa2M9ZnVuY3Rpb24oKXtmb3IodmFyIGE9K25ldyBEYXRlLGQ9MDtkPGljLmxlbmd0aDtkKyspe3ZhciBlPWljW2RdO2lmKCFlLmVsLnJlbW92ZWQmJiFlLnBhdXNlZCl7dmFyIGYsZyxoPWEtZS5zdGFydCxpPWUubXMsaj1lLmVhc2luZyxrPWUuZnJvbSxsPWUuZGlmZixtPWUudG8sbj0oZS50LGUuZWwpLG89e30scD17fTtpZihlLmluaXRzdGF0dXM/KGg9KGUuaW5pdHN0YXR1cyplLmFuaW0udG9wLWUucHJldikvKGUucGVyY2VudC1lLnByZXYpKmksZS5zdGF0dXM9ZS5pbml0c3RhdHVzLGRlbGV0ZSBlLmluaXRzdGF0dXMsZS5zdG9wJiZpYy5zcGxpY2UoZC0tLDEpKTplLnN0YXR1cz0oZS5wcmV2KyhlLnBlcmNlbnQtZS5wcmV2KSooaC9pKSkvZS5hbmltLnRvcCwhKDA+aCkpaWYoaT5oKXt2YXIgcT1qKGgvaSk7Zm9yKHZhciByIGluIGspaWYoa1t6XShyKSl7c3dpdGNoKGRiW3JdKXtjYXNlIFQ6Zj0ra1tyXStxKmkqbFtyXTticmVhaztjYXNlXCJjb2xvdXJcIjpmPVwicmdiKFwiK1tsYygkKGtbcl0ucitxKmkqbFtyXS5yKSksbGMoJChrW3JdLmcrcSppKmxbcl0uZykpLGxjKCQoa1tyXS5iK3EqaSpsW3JdLmIpKV0uam9pbihcIixcIikrXCIpXCI7YnJlYWs7Y2FzZVwicGF0aFwiOmY9W107Zm9yKHZhciB0PTAsdT1rW3JdLmxlbmd0aDt1PnQ7dCsrKXtmW3RdPVtrW3JdW3RdWzBdXTtmb3IodmFyIHY9MSx3PWtbcl1bdF0ubGVuZ3RoO3c+djt2KyspZlt0XVt2XT0ra1tyXVt0XVt2XStxKmkqbFtyXVt0XVt2XTtmW3RdPWZbdF0uam9pbihIKX1mPWYuam9pbihIKTticmVhaztjYXNlXCJ0cmFuc2Zvcm1cIjppZihsW3JdLnJlYWwpZm9yKGY9W10sdD0wLHU9a1tyXS5sZW5ndGg7dT50O3QrKylmb3IoZlt0XT1ba1tyXVt0XVswXV0sdj0xLHc9a1tyXVt0XS5sZW5ndGg7dz52O3YrKylmW3RdW3ZdPWtbcl1bdF1bdl0rcSppKmxbcl1bdF1bdl07ZWxzZXt2YXIgeD1mdW5jdGlvbihhKXtyZXR1cm4ra1tyXVthXStxKmkqbFtyXVthXX07Zj1bW1wibVwiLHgoMCkseCgxKSx4KDIpLHgoMykseCg0KSx4KDUpXV19YnJlYWs7Y2FzZVwiY3N2XCI6aWYoXCJjbGlwLXJlY3RcIj09cilmb3IoZj1bXSx0PTQ7dC0tOylmW3RdPStrW3JdW3RdK3EqaSpsW3JdW3RdO2JyZWFrO2RlZmF1bHQ6dmFyIHk9W11bRV0oa1tyXSk7Zm9yKGY9W10sdD1uLnBhcGVyLmN1c3RvbUF0dHJpYnV0ZXNbcl0ubGVuZ3RoO3QtLTspZlt0XT0reVt0XStxKmkqbFtyXVt0XX1vW3JdPWZ9bi5hdHRyKG8pLGZ1bmN0aW9uKGEsYyxkKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihcInJhcGhhZWwuYW5pbS5mcmFtZS5cIithLGMsZCl9KX0obi5pZCxuLGUuYW5pbSl9ZWxzZXtpZihmdW5jdGlvbihhLGQsZSl7c2V0VGltZW91dChmdW5jdGlvbigpe2IoXCJyYXBoYWVsLmFuaW0uZnJhbWUuXCIrZC5pZCxkLGUpLGIoXCJyYXBoYWVsLmFuaW0uZmluaXNoLlwiK2QuaWQsZCxlKSxjLmlzKGEsXCJmdW5jdGlvblwiKSYmYS5jYWxsKGQpfSl9KGUuY2FsbGJhY2ssbixlLmFuaW0pLG4uYXR0cihtKSxpYy5zcGxpY2UoZC0tLDEpLGUucmVwZWF0PjEmJiFlLm5leHQpe2ZvcihnIGluIG0pbVt6XShnKSYmKHBbZ109ZS50b3RhbE9yaWdpbltnXSk7ZS5lbC5hdHRyKHApLHMoZS5hbmltLGUuZWwsZS5hbmltLnBlcmNlbnRzWzBdLG51bGwsZS50b3RhbE9yaWdpbixlLnJlcGVhdC0xKX1lLm5leHQmJiFlLnN0b3AmJnMoZS5hbmltLGUuZWwsZS5uZXh0LG51bGwsZS50b3RhbE9yaWdpbixlLnJlcGVhdCl9fX1jLnN2ZyYmbiYmbi5wYXBlciYmbi5wYXBlci5zYWZhcmkoKSxpYy5sZW5ndGgmJmpjKGtjKX0sbGM9ZnVuY3Rpb24oYSl7cmV0dXJuIGE+MjU1PzI1NTowPmE/MDphfTskYi5hbmltYXRlV2l0aD1mdW5jdGlvbihhLGIsZCxlLGYsZyl7dmFyIGg9dGhpcztpZihoLnJlbW92ZWQpcmV0dXJuIGcmJmcuY2FsbChoKSxoO3ZhciBpPWQgaW5zdGFuY2VvZiByP2Q6Yy5hbmltYXRpb24oZCxlLGYsZyk7cyhpLGgsaS5wZXJjZW50c1swXSxudWxsLGguYXR0cigpKTtmb3IodmFyIGo9MCxrPWljLmxlbmd0aDtrPmo7aisrKWlmKGljW2pdLmFuaW09PWImJmljW2pdLmVsPT1hKXtpY1trLTFdLnN0YXJ0PWljW2pdLnN0YXJ0O2JyZWFrfXJldHVybiBofSwkYi5vbkFuaW1hdGlvbj1mdW5jdGlvbihhKXtyZXR1cm4gYT9iLm9uKFwicmFwaGFlbC5hbmltLmZyYW1lLlwiK3RoaXMuaWQsYSk6Yi51bmJpbmQoXCJyYXBoYWVsLmFuaW0uZnJhbWUuXCIrdGhpcy5pZCksdGhpc30sci5wcm90b3R5cGUuZGVsYXk9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IHIodGhpcy5hbmltLHRoaXMubXMpO3JldHVybiBiLnRpbWVzPXRoaXMudGltZXMsYi5kZWw9K2F8fDAsYn0sci5wcm90b3R5cGUucmVwZWF0PWZ1bmN0aW9uKGEpe3ZhciBiPW5ldyByKHRoaXMuYW5pbSx0aGlzLm1zKTtyZXR1cm4gYi5kZWw9dGhpcy5kZWwsYi50aW1lcz1OLmZsb29yKE8oYSwwKSl8fDEsYn0sYy5hbmltYXRpb249ZnVuY3Rpb24oYSxiLGQsZSl7aWYoYSBpbnN0YW5jZW9mIHIpcmV0dXJuIGE7KGMuaXMoZCxcImZ1bmN0aW9uXCIpfHwhZCkmJihlPWV8fGR8fG51bGwsZD1udWxsKSxhPU9iamVjdChhKSxiPStifHwwO3ZhciBmLGcsaD17fTtmb3IoZyBpbiBhKWFbel0oZykmJl8oZykhPWcmJl8oZykrXCIlXCIhPWcmJihmPSEwLGhbZ109YVtnXSk7aWYoZilyZXR1cm4gZCYmKGguZWFzaW5nPWQpLGUmJihoLmNhbGxiYWNrPWUpLG5ldyByKHsxMDA6aH0sYik7aWYoZSl7dmFyIGk9MDtmb3IodmFyIGogaW4gYSl7dmFyIGs9YWIoaik7YVt6XShqKSYmaz5pJiYoaT1rKX1pKz1cIiVcIiwhYVtpXS5jYWxsYmFjayYmKGFbaV0uY2FsbGJhY2s9ZSl9cmV0dXJuIG5ldyByKGEsYil9LCRiLmFuaW1hdGU9ZnVuY3Rpb24oYSxiLGQsZSl7dmFyIGY9dGhpcztpZihmLnJlbW92ZWQpcmV0dXJuIGUmJmUuY2FsbChmKSxmO3ZhciBnPWEgaW5zdGFuY2VvZiByP2E6Yy5hbmltYXRpb24oYSxiLGQsZSk7cmV0dXJuIHMoZyxmLGcucGVyY2VudHNbMF0sbnVsbCxmLmF0dHIoKSksZn0sJGIuc2V0VGltZT1mdW5jdGlvbihhLGIpe3JldHVybiBhJiZudWxsIT1iJiZ0aGlzLnN0YXR1cyhhLFAoYixhLm1zKS9hLm1zKSx0aGlzfSwkYi5zdGF0dXM9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9W10sZj0wO2lmKG51bGwhPWIpcmV0dXJuIHMoYSx0aGlzLC0xLFAoYiwxKSksdGhpcztmb3IoYz1pYy5sZW5ndGg7Yz5mO2YrKylpZihkPWljW2ZdLGQuZWwuaWQ9PXRoaXMuaWQmJighYXx8ZC5hbmltPT1hKSl7aWYoYSlyZXR1cm4gZC5zdGF0dXM7ZS5wdXNoKHthbmltOmQuYW5pbSxzdGF0dXM6ZC5zdGF0dXN9KX1yZXR1cm4gYT8wOmV9LCRiLnBhdXNlPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYz0wO2M8aWMubGVuZ3RoO2MrKylpY1tjXS5lbC5pZCE9dGhpcy5pZHx8YSYmaWNbY10uYW5pbSE9YXx8YihcInJhcGhhZWwuYW5pbS5wYXVzZS5cIit0aGlzLmlkLHRoaXMsaWNbY10uYW5pbSkhPT0hMSYmKGljW2NdLnBhdXNlZD0hMCk7cmV0dXJuIHRoaXN9LCRiLnJlc3VtZT1mdW5jdGlvbihhKXtmb3IodmFyIGM9MDtjPGljLmxlbmd0aDtjKyspaWYoaWNbY10uZWwuaWQ9PXRoaXMuaWQmJighYXx8aWNbY10uYW5pbT09YSkpe3ZhciBkPWljW2NdO2IoXCJyYXBoYWVsLmFuaW0ucmVzdW1lLlwiK3RoaXMuaWQsdGhpcyxkLmFuaW0pIT09ITEmJihkZWxldGUgZC5wYXVzZWQsdGhpcy5zdGF0dXMoZC5hbmltLGQuc3RhdHVzKSl9cmV0dXJuIHRoaXN9LCRiLnN0b3A9ZnVuY3Rpb24oYSl7Zm9yKHZhciBjPTA7YzxpYy5sZW5ndGg7YysrKWljW2NdLmVsLmlkIT10aGlzLmlkfHxhJiZpY1tjXS5hbmltIT1hfHxiKFwicmFwaGFlbC5hbmltLnN0b3AuXCIrdGhpcy5pZCx0aGlzLGljW2NdLmFuaW0pIT09ITEmJmljLnNwbGljZShjLS0sMSk7cmV0dXJuIHRoaXN9LGIub24oXCJyYXBoYWVsLnJlbW92ZVwiLHQpLGIub24oXCJyYXBoYWVsLmNsZWFyXCIsdCksJGIudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIlJhcGhhw6ts4oCZcyBvYmplY3RcIn07dmFyIG1jPWZ1bmN0aW9uKGEpe2lmKHRoaXMuaXRlbXM9W10sdGhpcy5sZW5ndGg9MCx0aGlzLnR5cGU9XCJzZXRcIixhKWZvcih2YXIgYj0wLGM9YS5sZW5ndGg7Yz5iO2IrKykhYVtiXXx8YVtiXS5jb25zdHJ1Y3RvciE9JGIuY29uc3RydWN0b3ImJmFbYl0uY29uc3RydWN0b3IhPW1jfHwodGhpc1t0aGlzLml0ZW1zLmxlbmd0aF09dGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aF09YVtiXSx0aGlzLmxlbmd0aCsrKX0sbmM9bWMucHJvdG90eXBlO25jLnB1c2g9ZnVuY3Rpb24oKXtmb3IodmFyIGEsYixjPTAsZD1hcmd1bWVudHMubGVuZ3RoO2Q+YztjKyspYT1hcmd1bWVudHNbY10sIWF8fGEuY29uc3RydWN0b3IhPSRiLmNvbnN0cnVjdG9yJiZhLmNvbnN0cnVjdG9yIT1tY3x8KGI9dGhpcy5pdGVtcy5sZW5ndGgsdGhpc1tiXT10aGlzLml0ZW1zW2JdPWEsdGhpcy5sZW5ndGgrKyk7cmV0dXJuIHRoaXN9LG5jLnBvcD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aCYmZGVsZXRlIHRoaXNbdGhpcy5sZW5ndGgtLV0sdGhpcy5pdGVtcy5wb3AoKX0sbmMuZm9yRWFjaD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9dGhpcy5pdGVtcy5sZW5ndGg7ZD5jO2MrKylpZihhLmNhbGwoYix0aGlzLml0ZW1zW2NdLGMpPT09ITEpcmV0dXJuIHRoaXM7cmV0dXJuIHRoaXN9O2Zvcih2YXIgb2MgaW4gJGIpJGJbel0ob2MpJiYobmNbb2NdPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBiPWFyZ3VtZW50cztyZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGMpe2NbYV1bRF0oYyxiKX0pfX0ob2MpKTtyZXR1cm4gbmMuYXR0cj1mdW5jdGlvbihhLGIpe2lmKGEmJmMuaXMoYSxWKSYmYy5pcyhhWzBdLFwib2JqZWN0XCIpKWZvcih2YXIgZD0wLGU9YS5sZW5ndGg7ZT5kO2QrKyl0aGlzLml0ZW1zW2RdLmF0dHIoYVtkXSk7ZWxzZSBmb3IodmFyIGY9MCxnPXRoaXMuaXRlbXMubGVuZ3RoO2c+ZjtmKyspdGhpcy5pdGVtc1tmXS5hdHRyKGEsYik7cmV0dXJuIHRoaXN9LG5jLmNsZWFyPWZ1bmN0aW9uKCl7Zm9yKDt0aGlzLmxlbmd0aDspdGhpcy5wb3AoKX0sbmMuc3BsaWNlPWZ1bmN0aW9uKGEsYil7YT0wPmE/Tyh0aGlzLmxlbmd0aCthLDApOmEsYj1PKDAsUCh0aGlzLmxlbmd0aC1hLGIpKTt2YXIgYyxkPVtdLGU9W10sZj1bXTtmb3IoYz0yO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspZi5wdXNoKGFyZ3VtZW50c1tjXSk7Zm9yKGM9MDtiPmM7YysrKWUucHVzaCh0aGlzW2ErY10pO2Zvcig7Yzx0aGlzLmxlbmd0aC1hO2MrKylkLnB1c2godGhpc1thK2NdKTt2YXIgZz1mLmxlbmd0aDtmb3IoYz0wO2M8ZytkLmxlbmd0aDtjKyspdGhpcy5pdGVtc1thK2NdPXRoaXNbYStjXT1nPmM/ZltjXTpkW2MtZ107Zm9yKGM9dGhpcy5pdGVtcy5sZW5ndGg9dGhpcy5sZW5ndGgtPWItZzt0aGlzW2NdOylkZWxldGUgdGhpc1tjKytdO3JldHVybiBuZXcgbWMoZSl9LG5jLmV4Y2x1ZGU9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz10aGlzLmxlbmd0aDtjPmI7YisrKWlmKHRoaXNbYl09PWEpcmV0dXJuIHRoaXMuc3BsaWNlKGIsMSksITB9LG5jLmFuaW1hdGU9ZnVuY3Rpb24oYSxiLGQsZSl7KGMuaXMoZCxcImZ1bmN0aW9uXCIpfHwhZCkmJihlPWR8fG51bGwpO3ZhciBmLGcsaD10aGlzLml0ZW1zLmxlbmd0aCxpPWgsaj10aGlzO2lmKCFoKXJldHVybiB0aGlzO2UmJihnPWZ1bmN0aW9uKCl7IS0taCYmZS5jYWxsKGopfSksZD1jLmlzKGQsVSk/ZDpnO3ZhciBrPWMuYW5pbWF0aW9uKGEsYixkLGcpO2ZvcihmPXRoaXMuaXRlbXNbLS1pXS5hbmltYXRlKGspO2ktLTspdGhpcy5pdGVtc1tpXSYmIXRoaXMuaXRlbXNbaV0ucmVtb3ZlZCYmdGhpcy5pdGVtc1tpXS5hbmltYXRlV2l0aChmLGssayksdGhpcy5pdGVtc1tpXSYmIXRoaXMuaXRlbXNbaV0ucmVtb3ZlZHx8aC0tO3JldHVybiB0aGlzfSxuYy5pbnNlcnRBZnRlcj1mdW5jdGlvbihhKXtmb3IodmFyIGI9dGhpcy5pdGVtcy5sZW5ndGg7Yi0tOyl0aGlzLml0ZW1zW2JdLmluc2VydEFmdGVyKGEpO3JldHVybiB0aGlzfSxuYy5nZXRCQm94PWZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdLGI9W10sYz1bXSxkPVtdLGU9dGhpcy5pdGVtcy5sZW5ndGg7ZS0tOylpZighdGhpcy5pdGVtc1tlXS5yZW1vdmVkKXt2YXIgZj10aGlzLml0ZW1zW2VdLmdldEJCb3goKTthLnB1c2goZi54KSxiLnB1c2goZi55KSxjLnB1c2goZi54K2Yud2lkdGgpLGQucHVzaChmLnkrZi5oZWlnaHQpfXJldHVybiBhPVBbRF0oMCxhKSxiPVBbRF0oMCxiKSxjPU9bRF0oMCxjKSxkPU9bRF0oMCxkKSx7eDphLHk6Yix4MjpjLHkyOmQsd2lkdGg6Yy1hLGhlaWdodDpkLWJ9fSxuYy5jbG9uZT1mdW5jdGlvbihhKXthPXRoaXMucGFwZXIuc2V0KCk7Zm9yKHZhciBiPTAsYz10aGlzLml0ZW1zLmxlbmd0aDtjPmI7YisrKWEucHVzaCh0aGlzLml0ZW1zW2JdLmNsb25lKCkpO3JldHVybiBhfSxuYy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiUmFwaGHDq2zigJhzIHNldFwifSxuYy5nbG93PWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMucGFwZXIuc2V0KCk7cmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbihjKXt2YXIgZD1jLmdsb3coYSk7bnVsbCE9ZCYmZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IucHVzaChhKX0pfSksYn0sbmMuaXNQb2ludEluc2lkZT1mdW5jdGlvbihhLGIpe3ZhciBjPSExO3JldHVybiB0aGlzLmZvckVhY2goZnVuY3Rpb24oZCl7cmV0dXJuIGQuaXNQb2ludEluc2lkZShhLGIpPyhjPSEwLCExKTp2b2lkIDB9KSxjfSxjLnJlZ2lzdGVyRm9udD1mdW5jdGlvbihhKXtpZighYS5mYWNlKXJldHVybiBhO3RoaXMuZm9udHM9dGhpcy5mb250c3x8e307dmFyIGI9e3c6YS53LGZhY2U6e30sZ2x5cGhzOnt9fSxjPWEuZmFjZVtcImZvbnQtZmFtaWx5XCJdO2Zvcih2YXIgZCBpbiBhLmZhY2UpYS5mYWNlW3pdKGQpJiYoYi5mYWNlW2RdPWEuZmFjZVtkXSk7aWYodGhpcy5mb250c1tjXT90aGlzLmZvbnRzW2NdLnB1c2goYik6dGhpcy5mb250c1tjXT1bYl0sIWEuc3ZnKXtiLmZhY2VbXCJ1bml0cy1wZXItZW1cIl09YWIoYS5mYWNlW1widW5pdHMtcGVyLWVtXCJdLDEwKTtmb3IodmFyIGUgaW4gYS5nbHlwaHMpaWYoYS5nbHlwaHNbel0oZSkpe3ZhciBmPWEuZ2x5cGhzW2VdO2lmKGIuZ2x5cGhzW2VdPXt3OmYudyxrOnt9LGQ6Zi5kJiZcIk1cIitmLmQucmVwbGFjZSgvW21sY3h0cnZdL2csZnVuY3Rpb24oYSl7cmV0dXJue2w6XCJMXCIsYzpcIkNcIix4OlwielwiLHQ6XCJtXCIscjpcImxcIix2OlwiY1wifVthXXx8XCJNXCJ9KStcInpcIn0sZi5rKWZvcih2YXIgZyBpbiBmLmspZlt6XShnKSYmKGIuZ2x5cGhzW2VdLmtbZ109Zi5rW2ddKX19cmV0dXJuIGF9LHYuZ2V0Rm9udD1mdW5jdGlvbihhLGIsZCxlKXtpZihlPWV8fFwibm9ybWFsXCIsZD1kfHxcIm5vcm1hbFwiLGI9K2J8fHtub3JtYWw6NDAwLGJvbGQ6NzAwLGxpZ2h0ZXI6MzAwLGJvbGRlcjo4MDB9W2JdfHw0MDAsYy5mb250cyl7dmFyIGY9Yy5mb250c1thXTtpZighZil7dmFyIGc9bmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK2EucmVwbGFjZSgvW15cXHdcXGRcXHMrIX4uOl8tXS9nLEcpK1wiKFxcXFxzfCQpXCIsXCJpXCIpO2Zvcih2YXIgaCBpbiBjLmZvbnRzKWlmKGMuZm9udHNbel0oaCkmJmcudGVzdChoKSl7Zj1jLmZvbnRzW2hdO2JyZWFrfX12YXIgaTtpZihmKWZvcih2YXIgaj0wLGs9Zi5sZW5ndGg7az5qJiYoaT1mW2pdLGkuZmFjZVtcImZvbnQtd2VpZ2h0XCJdIT1ifHxpLmZhY2VbXCJmb250LXN0eWxlXCJdIT1kJiZpLmZhY2VbXCJmb250LXN0eWxlXCJdfHxpLmZhY2VbXCJmb250LXN0cmV0Y2hcIl0hPWUpO2orKyk7cmV0dXJuIGl9fSx2LnByaW50PWZ1bmN0aW9uKGEsYixkLGUsZixnLGgsaSl7Zz1nfHxcIm1pZGRsZVwiLGg9TyhQKGh8fDAsMSksLTEpLGk9TyhQKGl8fDEsMyksMSk7dmFyIGosaz1JKGQpW0pdKEcpLGw9MCxtPTAsbj1HO2lmKGMuaXMoZSxcInN0cmluZ1wiKSYmKGU9dGhpcy5nZXRGb250KGUpKSxlKXtqPShmfHwxNikvZS5mYWNlW1widW5pdHMtcGVyLWVtXCJdO2Zvcih2YXIgbz1lLmZhY2UuYmJveFtKXSh3KSxwPStvWzBdLHE9b1szXS1vWzFdLHI9MCxzPStvWzFdKyhcImJhc2VsaW5lXCI9PWc/cSsgK2UuZmFjZS5kZXNjZW50OnEvMiksdD0wLHU9ay5sZW5ndGg7dT50O3QrKyl7aWYoXCJcXG5cIj09a1t0XSlsPTAseD0wLG09MCxyKz1xKmk7ZWxzZXt2YXIgdj1tJiZlLmdseXBoc1trW3QtMV1dfHx7fSx4PWUuZ2x5cGhzW2tbdF1dO2wrPW0/KHYud3x8ZS53KSsodi5rJiZ2Lmtba1t0XV18fDApK2UudypoOjAsbT0xfXgmJnguZCYmKG4rPWMudHJhbnNmb3JtUGF0aCh4LmQsW1widFwiLGwqaixyKmosXCJzXCIsaixqLHAscyxcInRcIiwoYS1wKS9qLChiLXMpL2pdKSl9fXJldHVybiB0aGlzLnBhdGgobikuYXR0cih7ZmlsbDpcIiMwMDBcIixzdHJva2U6XCJub25lXCJ9KX0sdi5hZGQ9ZnVuY3Rpb24oYSl7aWYoYy5pcyhhLFwiYXJyYXlcIikpZm9yKHZhciBiLGQ9dGhpcy5zZXQoKSxlPTAsZj1hLmxlbmd0aDtmPmU7ZSsrKWI9YVtlXXx8e30seFt6XShiLnR5cGUpJiZkLnB1c2godGhpc1tiLnR5cGVdKCkuYXR0cihiKSk7cmV0dXJuIGR9LGMuZm9ybWF0PWZ1bmN0aW9uKGEsYil7dmFyIGQ9Yy5pcyhiLFYpP1swXVtFXShiKTphcmd1bWVudHM7cmV0dXJuIGEmJmMuaXMoYSxVKSYmZC5sZW5ndGgtMSYmKGE9YS5yZXBsYWNlKHksZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09ZFsrK2JdP0c6ZFtiXX0pKSxhfHxHfSxjLmZ1bGxmaWxsPWZ1bmN0aW9uKCl7dmFyIGE9L1xceyhbXlxcfV0rKVxcfS9nLGI9Lyg/Oig/Ol58XFwuKSguKz8pKD89XFxbfFxcLnwkfFxcKCl8XFxbKCd8XCIpKC4rPylcXDJcXF0pKFxcKFxcKSk/L2csYz1mdW5jdGlvbihhLGMsZCl7dmFyIGU9ZDtyZXR1cm4gYy5yZXBsYWNlKGIsZnVuY3Rpb24oYSxiLGMsZCxmKXtiPWJ8fGQsZSYmKGIgaW4gZSYmKGU9ZVtiXSksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZiYmKGU9ZSgpKSl9KSxlPShudWxsPT1lfHxlPT1kP2E6ZSkrXCJcIn07cmV0dXJuIGZ1bmN0aW9uKGIsZCl7cmV0dXJuIFN0cmluZyhiKS5yZXBsYWNlKGEsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYyhhLGIsZCl9KX19KCksYy5uaW5qYT1mdW5jdGlvbigpe3JldHVybiBCLndhcz9BLndpbi5SYXBoYWVsPUIuaXM6ZGVsZXRlIFJhcGhhZWwsY30sYy5zdD1uYyxiLm9uKFwicmFwaGFlbC5ET01sb2FkXCIsZnVuY3Rpb24oKXt1PSEwfSksZnVuY3Rpb24oYSxiLGQpe2Z1bmN0aW9uIGUoKXsvaW4vLnRlc3QoYS5yZWFkeVN0YXRlKT9zZXRUaW1lb3V0KGUsOSk6Yy5ldmUoXCJyYXBoYWVsLkRPTWxvYWRcIil9bnVsbD09YS5yZWFkeVN0YXRlJiZhLmFkZEV2ZW50TGlzdGVuZXImJihhLmFkZEV2ZW50TGlzdGVuZXIoYixkPWZ1bmN0aW9uKCl7YS5yZW1vdmVFdmVudExpc3RlbmVyKGIsZCwhMSksYS5yZWFkeVN0YXRlPVwiY29tcGxldGVcIn0sITEpLGEucmVhZHlTdGF0ZT1cImxvYWRpbmdcIiksZSgpfShkb2N1bWVudCxcIkRPTUNvbnRlbnRMb2FkZWRcIiksZnVuY3Rpb24oKXtpZihjLnN2Zyl7dmFyIGE9XCJoYXNPd25Qcm9wZXJ0eVwiLGI9U3RyaW5nLGQ9cGFyc2VGbG9hdCxlPXBhcnNlSW50LGY9TWF0aCxnPWYubWF4LGg9Zi5hYnMsaT1mLnBvdyxqPS9bLCBdKy8saz1jLmV2ZSxsPVwiXCIsbT1cIiBcIixuPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLG89e2Jsb2NrOlwiTTUsMCAwLDIuNSA1LDV6XCIsY2xhc3NpYzpcIk01LDAgMCwyLjUgNSw1IDMuNSwzIDMuNSwyelwiLGRpYW1vbmQ6XCJNMi41LDAgNSwyLjUgMi41LDUgMCwyLjV6XCIsb3BlbjpcIk02LDEgMSwzLjUgNiw2XCIsb3ZhbDpcIk0yLjUsMEEyLjUsMi41LDAsMCwxLDIuNSw1IDIuNSwyLjUsMCwwLDEsMi41LDB6XCJ9LHA9e307Yy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiWW91ciBicm93c2VyIHN1cHBvcnRzIFNWRy5cXG5Zb3UgYXJlIHJ1bm5pbmcgUmFwaGHDq2wgXCIrdGhpcy52ZXJzaW9ufTt2YXIgcT1mdW5jdGlvbihkLGUpe2lmKGUpe1wic3RyaW5nXCI9PXR5cGVvZiBkJiYoZD1xKGQpKTtmb3IodmFyIGYgaW4gZSllW2FdKGYpJiYoXCJ4bGluazpcIj09Zi5zdWJzdHJpbmcoMCw2KT9kLnNldEF0dHJpYnV0ZU5TKG4sZi5zdWJzdHJpbmcoNiksYihlW2ZdKSk6ZC5zZXRBdHRyaWJ1dGUoZixiKGVbZl0pKSl9ZWxzZSBkPWMuX2cuZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZCksZC5zdHlsZSYmKGQuc3R5bGUud2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I9XCJyZ2JhKDAsMCwwLDApXCIpO3JldHVybiBkfSxyPWZ1bmN0aW9uKGEsZSl7dmFyIGo9XCJsaW5lYXJcIixrPWEuaWQrZSxtPS41LG49LjUsbz1hLm5vZGUscD1hLnBhcGVyLHI9by5zdHlsZSxzPWMuX2cuZG9jLmdldEVsZW1lbnRCeUlkKGspO2lmKCFzKXtpZihlPWIoZSkucmVwbGFjZShjLl9yYWRpYWxfZ3JhZGllbnQsZnVuY3Rpb24oYSxiLGMpe2lmKGo9XCJyYWRpYWxcIixiJiZjKXttPWQoYiksbj1kKGMpO3ZhciBlPTIqKG4+LjUpLTE7aShtLS41LDIpK2kobi0uNSwyKT4uMjUmJihuPWYuc3FydCguMjUtaShtLS41LDIpKSplKy41KSYmLjUhPW4mJihuPW4udG9GaXhlZCg1KS0xZS01KmUpfXJldHVybiBsfSksZT1lLnNwbGl0KC9cXHMqXFwtXFxzKi8pLFwibGluZWFyXCI9PWope3ZhciB0PWUuc2hpZnQoKTtpZih0PS1kKHQpLGlzTmFOKHQpKXJldHVybiBudWxsO3ZhciB1PVswLDAsZi5jb3MoYy5yYWQodCkpLGYuc2luKGMucmFkKHQpKV0sdj0xLyhnKGgodVsyXSksaCh1WzNdKSl8fDEpO3VbMl0qPXYsdVszXSo9dix1WzJdPDAmJih1WzBdPS11WzJdLHVbMl09MCksdVszXTwwJiYodVsxXT0tdVszXSx1WzNdPTApfXZhciB3PWMuX3BhcnNlRG90cyhlKTtpZighdylyZXR1cm4gbnVsbDtpZihrPWsucmVwbGFjZSgvW1xcKFxcKVxccyxcXHhiMCNdL2csXCJfXCIpLGEuZ3JhZGllbnQmJmshPWEuZ3JhZGllbnQuaWQmJihwLmRlZnMucmVtb3ZlQ2hpbGQoYS5ncmFkaWVudCksZGVsZXRlIGEuZ3JhZGllbnQpLCFhLmdyYWRpZW50KXtzPXEoaitcIkdyYWRpZW50XCIse2lkOmt9KSxhLmdyYWRpZW50PXMscShzLFwicmFkaWFsXCI9PWo/e2Z4Om0sZnk6bn06e3gxOnVbMF0seTE6dVsxXSx4Mjp1WzJdLHkyOnVbM10sZ3JhZGllbnRUcmFuc2Zvcm06YS5tYXRyaXguaW52ZXJ0KCl9KSxwLmRlZnMuYXBwZW5kQ2hpbGQocyk7Zm9yKHZhciB4PTAseT13Lmxlbmd0aDt5Png7eCsrKXMuYXBwZW5kQ2hpbGQocShcInN0b3BcIix7b2Zmc2V0OndbeF0ub2Zmc2V0P3dbeF0ub2Zmc2V0Ong/XCIxMDAlXCI6XCIwJVwiLFwic3RvcC1jb2xvclwiOndbeF0uY29sb3J8fFwiI2ZmZlwifSkpfX1yZXR1cm4gcShvLHtmaWxsOlwidXJsKCdcIitkb2N1bWVudC5sb2NhdGlvbitcIiNcIitrK1wiJylcIixvcGFjaXR5OjEsXCJmaWxsLW9wYWNpdHlcIjoxfSksci5maWxsPWwsci5vcGFjaXR5PTEsci5maWxsT3BhY2l0eT0xLDF9LHM9ZnVuY3Rpb24oYSl7dmFyIGI9YS5nZXRCQm94KDEpO3EoYS5wYXR0ZXJuLHtwYXR0ZXJuVHJhbnNmb3JtOmEubWF0cml4LmludmVydCgpK1wiIHRyYW5zbGF0ZShcIitiLngrXCIsXCIrYi55K1wiKVwifSl9LHQ9ZnVuY3Rpb24oZCxlLGYpe2lmKFwicGF0aFwiPT1kLnR5cGUpe2Zvcih2YXIgZyxoLGksaixrLG09YihlKS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiLVwiKSxuPWQucGFwZXIscj1mP1wiZW5kXCI6XCJzdGFydFwiLHM9ZC5ub2RlLHQ9ZC5hdHRycyx1PXRbXCJzdHJva2Utd2lkdGhcIl0sdj1tLmxlbmd0aCx3PVwiY2xhc3NpY1wiLHg9Myx5PTMsej01O3YtLTspc3dpdGNoKG1bdl0pe2Nhc2VcImJsb2NrXCI6Y2FzZVwiY2xhc3NpY1wiOmNhc2VcIm92YWxcIjpjYXNlXCJkaWFtb25kXCI6Y2FzZVwib3BlblwiOmNhc2VcIm5vbmVcIjp3PW1bdl07YnJlYWs7Y2FzZVwid2lkZVwiOnk9NTticmVhaztjYXNlXCJuYXJyb3dcIjp5PTI7YnJlYWs7Y2FzZVwibG9uZ1wiOng9NTticmVhaztjYXNlXCJzaG9ydFwiOng9Mn1pZihcIm9wZW5cIj09dz8oeCs9Mix5Kz0yLHorPTIsaT0xLGo9Zj80OjEsaz17ZmlsbDpcIm5vbmVcIixzdHJva2U6dC5zdHJva2V9KTooaj1pPXgvMixrPXtmaWxsOnQuc3Ryb2tlLHN0cm9rZTpcIm5vbmVcIn0pLGQuXy5hcnJvd3M/Zj8oZC5fLmFycm93cy5lbmRQYXRoJiZwW2QuXy5hcnJvd3MuZW5kUGF0aF0tLSxkLl8uYXJyb3dzLmVuZE1hcmtlciYmcFtkLl8uYXJyb3dzLmVuZE1hcmtlcl0tLSk6KGQuXy5hcnJvd3Muc3RhcnRQYXRoJiZwW2QuXy5hcnJvd3Muc3RhcnRQYXRoXS0tLGQuXy5hcnJvd3Muc3RhcnRNYXJrZXImJnBbZC5fLmFycm93cy5zdGFydE1hcmtlcl0tLSk6ZC5fLmFycm93cz17fSxcIm5vbmVcIiE9dyl7dmFyIEE9XCJyYXBoYWVsLW1hcmtlci1cIit3LEI9XCJyYXBoYWVsLW1hcmtlci1cIityK3creCt5K1wiLW9ialwiK2QuaWQ7Yy5fZy5kb2MuZ2V0RWxlbWVudEJ5SWQoQSk/cFtBXSsrOihuLmRlZnMuYXBwZW5kQ2hpbGQocShxKFwicGF0aFwiKSx7XCJzdHJva2UtbGluZWNhcFwiOlwicm91bmRcIixkOm9bd10saWQ6QX0pKSxwW0FdPTEpO3ZhciBDLEQ9Yy5fZy5kb2MuZ2V0RWxlbWVudEJ5SWQoQik7RD8ocFtCXSsrLEM9RC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKVswXSk6KEQ9cShxKFwibWFya2VyXCIpLHtpZDpCLG1hcmtlckhlaWdodDp5LG1hcmtlcldpZHRoOngsb3JpZW50OlwiYXV0b1wiLHJlZlg6aixyZWZZOnkvMn0pLEM9cShxKFwidXNlXCIpLHtcInhsaW5rOmhyZWZcIjpcIiNcIitBLHRyYW5zZm9ybTooZj9cInJvdGF0ZSgxODAgXCIreC8yK1wiIFwiK3kvMitcIikgXCI6bCkrXCJzY2FsZShcIit4L3orXCIsXCIreS96K1wiKVwiLFwic3Ryb2tlLXdpZHRoXCI6KDEvKCh4L3oreS96KS8yKSkudG9GaXhlZCg0KX0pLEQuYXBwZW5kQ2hpbGQoQyksbi5kZWZzLmFwcGVuZENoaWxkKEQpLHBbQl09MSkscShDLGspO3ZhciBFPWkqKFwiZGlhbW9uZFwiIT13JiZcIm92YWxcIiE9dyk7Zj8oZz1kLl8uYXJyb3dzLnN0YXJ0ZHgqdXx8MCxoPWMuZ2V0VG90YWxMZW5ndGgodC5wYXRoKS1FKnUpOihnPUUqdSxoPWMuZ2V0VG90YWxMZW5ndGgodC5wYXRoKS0oZC5fLmFycm93cy5lbmRkeCp1fHwwKSksaz17fSxrW1wibWFya2VyLVwiK3JdPVwidXJsKCNcIitCK1wiKVwiLChofHxnKSYmKGsuZD1jLmdldFN1YnBhdGgodC5wYXRoLGcsaCkpLHEocyxrKSxkLl8uYXJyb3dzW3IrXCJQYXRoXCJdPUEsZC5fLmFycm93c1tyK1wiTWFya2VyXCJdPUIsZC5fLmFycm93c1tyK1wiZHhcIl09RSxkLl8uYXJyb3dzW3IrXCJUeXBlXCJdPXcsZC5fLmFycm93c1tyK1wiU3RyaW5nXCJdPWV9ZWxzZSBmPyhnPWQuXy5hcnJvd3Muc3RhcnRkeCp1fHwwLGg9Yy5nZXRUb3RhbExlbmd0aCh0LnBhdGgpLWcpOihnPTAsaD1jLmdldFRvdGFsTGVuZ3RoKHQucGF0aCktKGQuXy5hcnJvd3MuZW5kZHgqdXx8MCkpLGQuXy5hcnJvd3NbcitcIlBhdGhcIl0mJnEocyx7ZDpjLmdldFN1YnBhdGgodC5wYXRoLGcsaCl9KSxkZWxldGUgZC5fLmFycm93c1tyK1wiUGF0aFwiXSxkZWxldGUgZC5fLmFycm93c1tyK1wiTWFya2VyXCJdLGRlbGV0ZSBkLl8uYXJyb3dzW3IrXCJkeFwiXSxkZWxldGUgZC5fLmFycm93c1tyK1wiVHlwZVwiXSxkZWxldGUgZC5fLmFycm93c1tyK1wiU3RyaW5nXCJdO2ZvcihrIGluIHApaWYocFthXShrKSYmIXBba10pe3ZhciBGPWMuX2cuZG9jLmdldEVsZW1lbnRCeUlkKGspO0YmJkYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChGKX19fSx1PXtcIlwiOlswXSxub25lOlswXSxcIi1cIjpbMywxXSxcIi5cIjpbMSwxXSxcIi0uXCI6WzMsMSwxLDFdLFwiLS4uXCI6WzMsMSwxLDEsMSwxXSxcIi4gXCI6WzEsM10sXCItIFwiOls0LDNdLFwiLS1cIjpbOCwzXSxcIi0gLlwiOls0LDMsMSwzXSxcIi0tLlwiOls4LDMsMSwzXSxcIi0tLi5cIjpbOCwzLDEsMywxLDNdfSx2PWZ1bmN0aW9uKGEsYyxkKXtpZihjPXVbYihjKS50b0xvd2VyQ2FzZSgpXSl7Zm9yKHZhciBlPWEuYXR0cnNbXCJzdHJva2Utd2lkdGhcIl18fFwiMVwiLGY9e3JvdW5kOmUsc3F1YXJlOmUsYnV0dDowfVthLmF0dHJzW1wic3Ryb2tlLWxpbmVjYXBcIl18fGRbXCJzdHJva2UtbGluZWNhcFwiXV18fDAsZz1bXSxoPWMubGVuZ3RoO2gtLTspZ1toXT1jW2hdKmUrKGglMj8xOi0xKSpmO3EoYS5ub2RlLHtcInN0cm9rZS1kYXNoYXJyYXlcIjpnLmpvaW4oXCIsXCIpfSl9fSx3PWZ1bmN0aW9uKGQsZil7dmFyIGk9ZC5ub2RlLGs9ZC5hdHRycyxtPWkuc3R5bGUudmlzaWJpbGl0eTtpLnN0eWxlLnZpc2liaWxpdHk9XCJoaWRkZW5cIjtmb3IodmFyIG8gaW4gZilpZihmW2FdKG8pKXtpZighYy5fYXZhaWxhYmxlQXR0cnNbYV0obykpY29udGludWU7dmFyIHA9ZltvXTtzd2l0Y2goa1tvXT1wLG8pe2Nhc2VcImJsdXJcIjpkLmJsdXIocCk7YnJlYWs7Y2FzZVwidGl0bGVcIjp2YXIgdT1pLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGl0bGVcIik7aWYodS5sZW5ndGgmJih1PXVbMF0pKXUuZmlyc3RDaGlsZC5ub2RlVmFsdWU9cDtlbHNle3U9cShcInRpdGxlXCIpO3ZhciB3PWMuX2cuZG9jLmNyZWF0ZVRleHROb2RlKHApO3UuYXBwZW5kQ2hpbGQodyksaS5hcHBlbmRDaGlsZCh1KX1icmVhaztjYXNlXCJocmVmXCI6Y2FzZVwidGFyZ2V0XCI6dmFyIHg9aS5wYXJlbnROb2RlO2lmKFwiYVwiIT14LnRhZ05hbWUudG9Mb3dlckNhc2UoKSl7dmFyIHo9cShcImFcIik7eC5pbnNlcnRCZWZvcmUoeixpKSx6LmFwcGVuZENoaWxkKGkpLHg9en1cInRhcmdldFwiPT1vP3guc2V0QXR0cmlidXRlTlMobixcInNob3dcIixcImJsYW5rXCI9PXA/XCJuZXdcIjpwKTp4LnNldEF0dHJpYnV0ZU5TKG4sbyxwKTticmVhaztjYXNlXCJjdXJzb3JcIjppLnN0eWxlLmN1cnNvcj1wO2JyZWFrO2Nhc2VcInRyYW5zZm9ybVwiOmQudHJhbnNmb3JtKHApO2JyZWFrO2Nhc2VcImFycm93LXN0YXJ0XCI6dChkLHApO2JyZWFrO2Nhc2VcImFycm93LWVuZFwiOnQoZCxwLDEpO2JyZWFrO2Nhc2VcImNsaXAtcmVjdFwiOnZhciBBPWIocCkuc3BsaXQoaik7aWYoND09QS5sZW5ndGgpe2QuY2xpcCYmZC5jbGlwLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkLmNsaXAucGFyZW50Tm9kZSk7dmFyIEI9cShcImNsaXBQYXRoXCIpLEM9cShcInJlY3RcIik7Qi5pZD1jLmNyZWF0ZVVVSUQoKSxxKEMse3g6QVswXSx5OkFbMV0sd2lkdGg6QVsyXSxoZWlnaHQ6QVszXX0pLEIuYXBwZW5kQ2hpbGQoQyksZC5wYXBlci5kZWZzLmFwcGVuZENoaWxkKEIpLHEoaSx7XCJjbGlwLXBhdGhcIjpcInVybCgjXCIrQi5pZCtcIilcIn0pLGQuY2xpcD1DfWlmKCFwKXt2YXIgRD1pLmdldEF0dHJpYnV0ZShcImNsaXAtcGF0aFwiKTtpZihEKXt2YXIgRT1jLl9nLmRvYy5nZXRFbGVtZW50QnlJZChELnJlcGxhY2UoLyhedXJsXFwoI3xcXCkkKS9nLGwpKTtFJiZFLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoRSkscShpLHtcImNsaXAtcGF0aFwiOmx9KSxkZWxldGUgZC5jbGlwfX1icmVhaztjYXNlXCJwYXRoXCI6XCJwYXRoXCI9PWQudHlwZSYmKHEoaSx7ZDpwP2sucGF0aD1jLl9wYXRoVG9BYnNvbHV0ZShwKTpcIk0wLDBcIn0pLGQuXy5kaXJ0eT0xLGQuXy5hcnJvd3MmJihcInN0YXJ0U3RyaW5nXCJpbiBkLl8uYXJyb3dzJiZ0KGQsZC5fLmFycm93cy5zdGFydFN0cmluZyksXCJlbmRTdHJpbmdcImluIGQuXy5hcnJvd3MmJnQoZCxkLl8uYXJyb3dzLmVuZFN0cmluZywxKSkpO2JyZWFrO2Nhc2VcIndpZHRoXCI6aWYoaS5zZXRBdHRyaWJ1dGUobyxwKSxkLl8uZGlydHk9MSwhay5meClicmVhaztvPVwieFwiLHA9ay54O2Nhc2VcInhcIjprLmZ4JiYocD0tay54LShrLndpZHRofHwwKSk7Y2FzZVwicnhcIjppZihcInJ4XCI9PW8mJlwicmVjdFwiPT1kLnR5cGUpYnJlYWs7Y2FzZVwiY3hcIjppLnNldEF0dHJpYnV0ZShvLHApLGQucGF0dGVybiYmcyhkKSxkLl8uZGlydHk9MTticmVhaztjYXNlXCJoZWlnaHRcIjppZihpLnNldEF0dHJpYnV0ZShvLHApLGQuXy5kaXJ0eT0xLCFrLmZ5KWJyZWFrO289XCJ5XCIscD1rLnk7Y2FzZVwieVwiOmsuZnkmJihwPS1rLnktKGsuaGVpZ2h0fHwwKSk7Y2FzZVwicnlcIjppZihcInJ5XCI9PW8mJlwicmVjdFwiPT1kLnR5cGUpYnJlYWs7Y2FzZVwiY3lcIjppLnNldEF0dHJpYnV0ZShvLHApLGQucGF0dGVybiYmcyhkKSxkLl8uZGlydHk9MTticmVhaztjYXNlXCJyXCI6XCJyZWN0XCI9PWQudHlwZT9xKGkse3J4OnAscnk6cH0pOmkuc2V0QXR0cmlidXRlKG8scCksZC5fLmRpcnR5PTE7YnJlYWs7Y2FzZVwic3JjXCI6XCJpbWFnZVwiPT1kLnR5cGUmJmkuc2V0QXR0cmlidXRlTlMobixcImhyZWZcIixwKTticmVhaztjYXNlXCJzdHJva2Utd2lkdGhcIjooMSE9ZC5fLnN4fHwxIT1kLl8uc3kpJiYocC89ZyhoKGQuXy5zeCksaChkLl8uc3kpKXx8MSksaS5zZXRBdHRyaWJ1dGUobyxwKSxrW1wic3Ryb2tlLWRhc2hhcnJheVwiXSYmdihkLGtbXCJzdHJva2UtZGFzaGFycmF5XCJdLGYpLGQuXy5hcnJvd3MmJihcInN0YXJ0U3RyaW5nXCJpbiBkLl8uYXJyb3dzJiZ0KGQsZC5fLmFycm93cy5zdGFydFN0cmluZyksXCJlbmRTdHJpbmdcImluIGQuXy5hcnJvd3MmJnQoZCxkLl8uYXJyb3dzLmVuZFN0cmluZywxKSk7YnJlYWs7Y2FzZVwic3Ryb2tlLWRhc2hhcnJheVwiOnYoZCxwLGYpO2JyZWFrO2Nhc2VcImZpbGxcIjp2YXIgRj1iKHApLm1hdGNoKGMuX0lTVVJMKTtpZihGKXtCPXEoXCJwYXR0ZXJuXCIpO3ZhciBHPXEoXCJpbWFnZVwiKTtCLmlkPWMuY3JlYXRlVVVJRCgpLHEoQix7eDowLHk6MCxwYXR0ZXJuVW5pdHM6XCJ1c2VyU3BhY2VPblVzZVwiLGhlaWdodDoxLHdpZHRoOjF9KSxxKEcse3g6MCx5OjAsXCJ4bGluazpocmVmXCI6RlsxXX0pLEIuYXBwZW5kQ2hpbGQoRyksZnVuY3Rpb24oYSl7Yy5fcHJlbG9hZChGWzFdLGZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5vZmZzZXRXaWR0aCxjPXRoaXMub2Zmc2V0SGVpZ2h0O3EoYSx7d2lkdGg6YixoZWlnaHQ6Y30pLHEoRyx7d2lkdGg6YixoZWlnaHQ6Y30pLGQucGFwZXIuc2FmYXJpKCl9KX0oQiksZC5wYXBlci5kZWZzLmFwcGVuZENoaWxkKEIpLHEoaSx7ZmlsbDpcInVybCgjXCIrQi5pZCtcIilcIn0pLGQucGF0dGVybj1CLGQucGF0dGVybiYmcyhkKTticmVha312YXIgSD1jLmdldFJHQihwKTtpZihILmVycm9yKXtpZigoXCJjaXJjbGVcIj09ZC50eXBlfHxcImVsbGlwc2VcIj09ZC50eXBlfHxcInJcIiE9YihwKS5jaGFyQXQoKSkmJnIoZCxwKSl7aWYoXCJvcGFjaXR5XCJpbiBrfHxcImZpbGwtb3BhY2l0eVwiaW4gayl7dmFyIEk9Yy5fZy5kb2MuZ2V0RWxlbWVudEJ5SWQoaS5nZXRBdHRyaWJ1dGUoXCJmaWxsXCIpLnJlcGxhY2UoL151cmxcXCgjfFxcKSQvZyxsKSk7aWYoSSl7dmFyIEo9SS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0b3BcIik7cShKW0oubGVuZ3RoLTFdLHtcInN0b3Atb3BhY2l0eVwiOihcIm9wYWNpdHlcImluIGs/ay5vcGFjaXR5OjEpKihcImZpbGwtb3BhY2l0eVwiaW4gaz9rW1wiZmlsbC1vcGFjaXR5XCJdOjEpfSl9fWsuZ3JhZGllbnQ9cCxrLmZpbGw9XCJub25lXCI7YnJlYWt9fWVsc2UgZGVsZXRlIGYuZ3JhZGllbnQsZGVsZXRlIGsuZ3JhZGllbnQsIWMuaXMoay5vcGFjaXR5LFwidW5kZWZpbmVkXCIpJiZjLmlzKGYub3BhY2l0eSxcInVuZGVmaW5lZFwiKSYmcShpLHtvcGFjaXR5Omsub3BhY2l0eX0pLCFjLmlzKGtbXCJmaWxsLW9wYWNpdHlcIl0sXCJ1bmRlZmluZWRcIikmJmMuaXMoZltcImZpbGwtb3BhY2l0eVwiXSxcInVuZGVmaW5lZFwiKSYmcShpLHtcImZpbGwtb3BhY2l0eVwiOmtbXCJmaWxsLW9wYWNpdHlcIl19KTtIW2FdKFwib3BhY2l0eVwiKSYmcShpLHtcImZpbGwtb3BhY2l0eVwiOkgub3BhY2l0eT4xP0gub3BhY2l0eS8xMDA6SC5vcGFjaXR5fSk7Y2FzZVwic3Ryb2tlXCI6SD1jLmdldFJHQihwKSxpLnNldEF0dHJpYnV0ZShvLEguaGV4KSxcInN0cm9rZVwiPT1vJiZIW2FdKFwib3BhY2l0eVwiKSYmcShpLHtcInN0cm9rZS1vcGFjaXR5XCI6SC5vcGFjaXR5PjE/SC5vcGFjaXR5LzEwMDpILm9wYWNpdHl9KSxcInN0cm9rZVwiPT1vJiZkLl8uYXJyb3dzJiYoXCJzdGFydFN0cmluZ1wiaW4gZC5fLmFycm93cyYmdChkLGQuXy5hcnJvd3Muc3RhcnRTdHJpbmcpLFwiZW5kU3RyaW5nXCJpbiBkLl8uYXJyb3dzJiZ0KGQsZC5fLmFycm93cy5lbmRTdHJpbmcsMSkpO2JyZWFrO2Nhc2VcImdyYWRpZW50XCI6KFwiY2lyY2xlXCI9PWQudHlwZXx8XCJlbGxpcHNlXCI9PWQudHlwZXx8XCJyXCIhPWIocCkuY2hhckF0KCkpJiZyKGQscCk7YnJlYWs7XG5jYXNlXCJvcGFjaXR5XCI6ay5ncmFkaWVudCYmIWtbYV0oXCJzdHJva2Utb3BhY2l0eVwiKSYmcShpLHtcInN0cm9rZS1vcGFjaXR5XCI6cD4xP3AvMTAwOnB9KTtjYXNlXCJmaWxsLW9wYWNpdHlcIjppZihrLmdyYWRpZW50KXtJPWMuX2cuZG9jLmdldEVsZW1lbnRCeUlkKGkuZ2V0QXR0cmlidXRlKFwiZmlsbFwiKS5yZXBsYWNlKC9edXJsXFwoI3xcXCkkL2csbCkpLEkmJihKPUkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdG9wXCIpLHEoSltKLmxlbmd0aC0xXSx7XCJzdG9wLW9wYWNpdHlcIjpwfSkpO2JyZWFrfWRlZmF1bHQ6XCJmb250LXNpemVcIj09byYmKHA9ZShwLDEwKStcInB4XCIpO3ZhciBLPW8ucmVwbGFjZSgvKFxcLS4pL2csZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3Vic3RyaW5nKDEpLnRvVXBwZXJDYXNlKCl9KTtpLnN0eWxlW0tdPXAsZC5fLmRpcnR5PTEsaS5zZXRBdHRyaWJ1dGUobyxwKX19eShkLGYpLGkuc3R5bGUudmlzaWJpbGl0eT1tfSx4PTEuMix5PWZ1bmN0aW9uKGQsZil7aWYoXCJ0ZXh0XCI9PWQudHlwZSYmKGZbYV0oXCJ0ZXh0XCIpfHxmW2FdKFwiZm9udFwiKXx8ZlthXShcImZvbnQtc2l6ZVwiKXx8ZlthXShcInhcIil8fGZbYV0oXCJ5XCIpKSl7dmFyIGc9ZC5hdHRycyxoPWQubm9kZSxpPWguZmlyc3RDaGlsZD9lKGMuX2cuZG9jLmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoaC5maXJzdENoaWxkLGwpLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIiksMTApOjEwO2lmKGZbYV0oXCJ0ZXh0XCIpKXtmb3IoZy50ZXh0PWYudGV4dDtoLmZpcnN0Q2hpbGQ7KWgucmVtb3ZlQ2hpbGQoaC5maXJzdENoaWxkKTtmb3IodmFyIGosaz1iKGYudGV4dCkuc3BsaXQoXCJcXG5cIiksbT1bXSxuPTAsbz1rLmxlbmd0aDtvPm47bisrKWo9cShcInRzcGFuXCIpLG4mJnEoaix7ZHk6aSp4LHg6Zy54fSksai5hcHBlbmRDaGlsZChjLl9nLmRvYy5jcmVhdGVUZXh0Tm9kZShrW25dKSksaC5hcHBlbmRDaGlsZChqKSxtW25dPWp9ZWxzZSBmb3IobT1oLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidHNwYW5cIiksbj0wLG89bS5sZW5ndGg7bz5uO24rKyluP3EobVtuXSx7ZHk6aSp4LHg6Zy54fSk6cShtWzBdLHtkeTowfSk7cShoLHt4OmcueCx5OmcueX0pLGQuXy5kaXJ0eT0xO3ZhciBwPWQuX2dldEJCb3goKSxyPWcueS0ocC55K3AuaGVpZ2h0LzIpO3ImJmMuaXMocixcImZpbml0ZVwiKSYmcShtWzBdLHtkeTpyfSl9fSx6PWZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJlwiYVwiPT09YS5wYXJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKT9hLnBhcmVudE5vZGU6YX0sQT1mdW5jdGlvbihhLGIpe3RoaXNbMF09dGhpcy5ub2RlPWEsYS5yYXBoYWVsPSEwLHRoaXMuaWQ9Yy5fb2lkKyssYS5yYXBoYWVsaWQ9dGhpcy5pZCx0aGlzLm1hdHJpeD1jLm1hdHJpeCgpLHRoaXMucmVhbFBhdGg9bnVsbCx0aGlzLnBhcGVyPWIsdGhpcy5hdHRycz10aGlzLmF0dHJzfHx7fSx0aGlzLl89e3RyYW5zZm9ybTpbXSxzeDoxLHN5OjEsZGVnOjAsZHg6MCxkeTowLGRpcnR5OjF9LCFiLmJvdHRvbSYmKGIuYm90dG9tPXRoaXMpLHRoaXMucHJldj1iLnRvcCxiLnRvcCYmKGIudG9wLm5leHQ9dGhpcyksYi50b3A9dGhpcyx0aGlzLm5leHQ9bnVsbH0sQj1jLmVsO0EucHJvdG90eXBlPUIsQi5jb25zdHJ1Y3Rvcj1BLGMuX2VuZ2luZS5wYXRoPWZ1bmN0aW9uKGEsYil7dmFyIGM9cShcInBhdGhcIik7Yi5jYW52YXMmJmIuY2FudmFzLmFwcGVuZENoaWxkKGMpO3ZhciBkPW5ldyBBKGMsYik7cmV0dXJuIGQudHlwZT1cInBhdGhcIix3KGQse2ZpbGw6XCJub25lXCIsc3Ryb2tlOlwiIzAwMFwiLHBhdGg6YX0pLGR9LEIucm90YXRlPWZ1bmN0aW9uKGEsYyxlKXtpZih0aGlzLnJlbW92ZWQpcmV0dXJuIHRoaXM7aWYoYT1iKGEpLnNwbGl0KGopLGEubGVuZ3RoLTEmJihjPWQoYVsxXSksZT1kKGFbMl0pKSxhPWQoYVswXSksbnVsbD09ZSYmKGM9ZSksbnVsbD09Y3x8bnVsbD09ZSl7dmFyIGY9dGhpcy5nZXRCQm94KDEpO2M9Zi54K2Yud2lkdGgvMixlPWYueStmLmhlaWdodC8yfXJldHVybiB0aGlzLnRyYW5zZm9ybSh0aGlzLl8udHJhbnNmb3JtLmNvbmNhdChbW1wiclwiLGEsYyxlXV0pKSx0aGlzfSxCLnNjYWxlPWZ1bmN0aW9uKGEsYyxlLGYpe2lmKHRoaXMucmVtb3ZlZClyZXR1cm4gdGhpcztpZihhPWIoYSkuc3BsaXQoaiksYS5sZW5ndGgtMSYmKGM9ZChhWzFdKSxlPWQoYVsyXSksZj1kKGFbM10pKSxhPWQoYVswXSksbnVsbD09YyYmKGM9YSksbnVsbD09ZiYmKGU9ZiksbnVsbD09ZXx8bnVsbD09Zil2YXIgZz10aGlzLmdldEJCb3goMSk7cmV0dXJuIGU9bnVsbD09ZT9nLngrZy53aWR0aC8yOmUsZj1udWxsPT1mP2cueStnLmhlaWdodC8yOmYsdGhpcy50cmFuc2Zvcm0odGhpcy5fLnRyYW5zZm9ybS5jb25jYXQoW1tcInNcIixhLGMsZSxmXV0pKSx0aGlzfSxCLnRyYW5zbGF0ZT1mdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLnJlbW92ZWQ/dGhpczooYT1iKGEpLnNwbGl0KGopLGEubGVuZ3RoLTEmJihjPWQoYVsxXSkpLGE9ZChhWzBdKXx8MCxjPStjfHwwLHRoaXMudHJhbnNmb3JtKHRoaXMuXy50cmFuc2Zvcm0uY29uY2F0KFtbXCJ0XCIsYSxjXV0pKSx0aGlzKX0sQi50cmFuc2Zvcm09ZnVuY3Rpb24oYil7dmFyIGQ9dGhpcy5fO2lmKG51bGw9PWIpcmV0dXJuIGQudHJhbnNmb3JtO2lmKGMuX2V4dHJhY3RUcmFuc2Zvcm0odGhpcyxiKSx0aGlzLmNsaXAmJnEodGhpcy5jbGlwLHt0cmFuc2Zvcm06dGhpcy5tYXRyaXguaW52ZXJ0KCl9KSx0aGlzLnBhdHRlcm4mJnModGhpcyksdGhpcy5ub2RlJiZxKHRoaXMubm9kZSx7dHJhbnNmb3JtOnRoaXMubWF0cml4fSksMSE9ZC5zeHx8MSE9ZC5zeSl7dmFyIGU9dGhpcy5hdHRyc1thXShcInN0cm9rZS13aWR0aFwiKT90aGlzLmF0dHJzW1wic3Ryb2tlLXdpZHRoXCJdOjE7dGhpcy5hdHRyKHtcInN0cm9rZS13aWR0aFwiOmV9KX1yZXR1cm4gdGhpc30sQi5oaWRlPWZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMucmVtb3ZlZCYmdGhpcy5wYXBlci5zYWZhcmkodGhpcy5ub2RlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpLHRoaXN9LEIuc2hvdz1mdW5jdGlvbigpe3JldHVybiF0aGlzLnJlbW92ZWQmJnRoaXMucGFwZXIuc2FmYXJpKHRoaXMubm9kZS5zdHlsZS5kaXNwbGF5PVwiXCIpLHRoaXN9LEIucmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIGE9eih0aGlzLm5vZGUpO2lmKCF0aGlzLnJlbW92ZWQmJmEucGFyZW50Tm9kZSl7dmFyIGI9dGhpcy5wYXBlcjtiLl9fc2V0X18mJmIuX19zZXRfXy5leGNsdWRlKHRoaXMpLGsudW5iaW5kKFwicmFwaGFlbC4qLiouXCIrdGhpcy5pZCksdGhpcy5ncmFkaWVudCYmYi5kZWZzLnJlbW92ZUNoaWxkKHRoaXMuZ3JhZGllbnQpLGMuX3RlYXIodGhpcyxiKSxhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSksdGhpcy5yZW1vdmVEYXRhKCk7Zm9yKHZhciBkIGluIHRoaXMpdGhpc1tkXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzW2RdP2MuX3JlbW92ZWRGYWN0b3J5KGQpOm51bGw7dGhpcy5yZW1vdmVkPSEwfX0sQi5fZ2V0QkJveD1mdW5jdGlvbigpe2lmKFwibm9uZVwiPT10aGlzLm5vZGUuc3R5bGUuZGlzcGxheSl7dGhpcy5zaG93KCk7dmFyIGE9ITB9dmFyIGIsYz0hMTt0aGlzLnBhcGVyLmNhbnZhcy5wYXJlbnRFbGVtZW50P2I9dGhpcy5wYXBlci5jYW52YXMucGFyZW50RWxlbWVudC5zdHlsZTp0aGlzLnBhcGVyLmNhbnZhcy5wYXJlbnROb2RlJiYoYj10aGlzLnBhcGVyLmNhbnZhcy5wYXJlbnROb2RlLnN0eWxlKSxiJiZcIm5vbmVcIj09Yi5kaXNwbGF5JiYoYz0hMCxiLmRpc3BsYXk9XCJcIik7dmFyIGQ9e307dHJ5e2Q9dGhpcy5ub2RlLmdldEJCb3goKX1jYXRjaChlKXtkPXt4OnRoaXMubm9kZS5jbGllbnRMZWZ0LHk6dGhpcy5ub2RlLmNsaWVudFRvcCx3aWR0aDp0aGlzLm5vZGUuY2xpZW50V2lkdGgsaGVpZ2h0OnRoaXMubm9kZS5jbGllbnRIZWlnaHR9fWZpbmFsbHl7ZD1kfHx7fSxjJiYoYi5kaXNwbGF5PVwibm9uZVwiKX1yZXR1cm4gYSYmdGhpcy5oaWRlKCksZH0sQi5hdHRyPWZ1bmN0aW9uKGIsZCl7aWYodGhpcy5yZW1vdmVkKXJldHVybiB0aGlzO2lmKG51bGw9PWIpe3ZhciBlPXt9O2Zvcih2YXIgZiBpbiB0aGlzLmF0dHJzKXRoaXMuYXR0cnNbYV0oZikmJihlW2ZdPXRoaXMuYXR0cnNbZl0pO3JldHVybiBlLmdyYWRpZW50JiZcIm5vbmVcIj09ZS5maWxsJiYoZS5maWxsPWUuZ3JhZGllbnQpJiZkZWxldGUgZS5ncmFkaWVudCxlLnRyYW5zZm9ybT10aGlzLl8udHJhbnNmb3JtLGV9aWYobnVsbD09ZCYmYy5pcyhiLFwic3RyaW5nXCIpKXtpZihcImZpbGxcIj09YiYmXCJub25lXCI9PXRoaXMuYXR0cnMuZmlsbCYmdGhpcy5hdHRycy5ncmFkaWVudClyZXR1cm4gdGhpcy5hdHRycy5ncmFkaWVudDtpZihcInRyYW5zZm9ybVwiPT1iKXJldHVybiB0aGlzLl8udHJhbnNmb3JtO2Zvcih2YXIgZz1iLnNwbGl0KGopLGg9e30saT0wLGw9Zy5sZW5ndGg7bD5pO2krKyliPWdbaV0saFtiXT1iIGluIHRoaXMuYXR0cnM/dGhpcy5hdHRyc1tiXTpjLmlzKHRoaXMucGFwZXIuY3VzdG9tQXR0cmlidXRlc1tiXSxcImZ1bmN0aW9uXCIpP3RoaXMucGFwZXIuY3VzdG9tQXR0cmlidXRlc1tiXS5kZWY6Yy5fYXZhaWxhYmxlQXR0cnNbYl07cmV0dXJuIGwtMT9oOmhbZ1swXV19aWYobnVsbD09ZCYmYy5pcyhiLFwiYXJyYXlcIikpe2ZvcihoPXt9LGk9MCxsPWIubGVuZ3RoO2w+aTtpKyspaFtiW2ldXT10aGlzLmF0dHIoYltpXSk7cmV0dXJuIGh9aWYobnVsbCE9ZCl7dmFyIG09e307bVtiXT1kfWVsc2UgbnVsbCE9YiYmYy5pcyhiLFwib2JqZWN0XCIpJiYobT1iKTtmb3IodmFyIG4gaW4gbSlrKFwicmFwaGFlbC5hdHRyLlwiK24rXCIuXCIrdGhpcy5pZCx0aGlzLG1bbl0pO2ZvcihuIGluIHRoaXMucGFwZXIuY3VzdG9tQXR0cmlidXRlcylpZih0aGlzLnBhcGVyLmN1c3RvbUF0dHJpYnV0ZXNbYV0obikmJm1bYV0obikmJmMuaXModGhpcy5wYXBlci5jdXN0b21BdHRyaWJ1dGVzW25dLFwiZnVuY3Rpb25cIikpe3ZhciBvPXRoaXMucGFwZXIuY3VzdG9tQXR0cmlidXRlc1tuXS5hcHBseSh0aGlzLFtdLmNvbmNhdChtW25dKSk7dGhpcy5hdHRyc1tuXT1tW25dO2Zvcih2YXIgcCBpbiBvKW9bYV0ocCkmJihtW3BdPW9bcF0pfXJldHVybiB3KHRoaXMsbSksdGhpc30sQi50b0Zyb250PWZ1bmN0aW9uKCl7aWYodGhpcy5yZW1vdmVkKXJldHVybiB0aGlzO3ZhciBhPXoodGhpcy5ub2RlKTthLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoYSk7dmFyIGI9dGhpcy5wYXBlcjtyZXR1cm4gYi50b3AhPXRoaXMmJmMuX3RvZnJvbnQodGhpcyxiKSx0aGlzfSxCLnRvQmFjaz1mdW5jdGlvbigpe2lmKHRoaXMucmVtb3ZlZClyZXR1cm4gdGhpczt2YXIgYT16KHRoaXMubm9kZSksYj1hLnBhcmVudE5vZGU7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpLGMuX3RvYmFjayh0aGlzLHRoaXMucGFwZXIpO3RoaXMucGFwZXI7cmV0dXJuIHRoaXN9LEIuaW5zZXJ0QWZ0ZXI9ZnVuY3Rpb24oYSl7aWYodGhpcy5yZW1vdmVkfHwhYSlyZXR1cm4gdGhpczt2YXIgYj16KHRoaXMubm9kZSksZD16KGEubm9kZXx8YVthLmxlbmd0aC0xXS5ub2RlKTtyZXR1cm4gZC5uZXh0U2libGluZz9kLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGIsZC5uZXh0U2libGluZyk6ZC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGIpLGMuX2luc2VydGFmdGVyKHRoaXMsYSx0aGlzLnBhcGVyKSx0aGlzfSxCLmluc2VydEJlZm9yZT1mdW5jdGlvbihhKXtpZih0aGlzLnJlbW92ZWR8fCFhKXJldHVybiB0aGlzO3ZhciBiPXoodGhpcy5ub2RlKSxkPXooYS5ub2RlfHxhWzBdLm5vZGUpO3JldHVybiBkLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGIsZCksYy5faW5zZXJ0YmVmb3JlKHRoaXMsYSx0aGlzLnBhcGVyKSx0aGlzfSxCLmJsdXI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcztpZigwIT09K2Epe3ZhciBkPXEoXCJmaWx0ZXJcIiksZT1xKFwiZmVHYXVzc2lhbkJsdXJcIik7Yi5hdHRycy5ibHVyPWEsZC5pZD1jLmNyZWF0ZVVVSUQoKSxxKGUse3N0ZERldmlhdGlvbjorYXx8MS41fSksZC5hcHBlbmRDaGlsZChlKSxiLnBhcGVyLmRlZnMuYXBwZW5kQ2hpbGQoZCksYi5fYmx1cj1kLHEoYi5ub2RlLHtmaWx0ZXI6XCJ1cmwoI1wiK2QuaWQrXCIpXCJ9KX1lbHNlIGIuX2JsdXImJihiLl9ibHVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYi5fYmx1ciksZGVsZXRlIGIuX2JsdXIsZGVsZXRlIGIuYXR0cnMuYmx1ciksYi5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImZpbHRlclwiKTtyZXR1cm4gYn0sYy5fZW5naW5lLmNpcmNsZT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1xKFwiY2lyY2xlXCIpO2EuY2FudmFzJiZhLmNhbnZhcy5hcHBlbmRDaGlsZChlKTt2YXIgZj1uZXcgQShlLGEpO3JldHVybiBmLmF0dHJzPXtjeDpiLGN5OmMscjpkLGZpbGw6XCJub25lXCIsc3Ryb2tlOlwiIzAwMFwifSxmLnR5cGU9XCJjaXJjbGVcIixxKGUsZi5hdHRycyksZn0sYy5fZW5naW5lLnJlY3Q9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3ZhciBnPXEoXCJyZWN0XCIpO2EuY2FudmFzJiZhLmNhbnZhcy5hcHBlbmRDaGlsZChnKTt2YXIgaD1uZXcgQShnLGEpO3JldHVybiBoLmF0dHJzPXt4OmIseTpjLHdpZHRoOmQsaGVpZ2h0OmUscng6Znx8MCxyeTpmfHwwLGZpbGw6XCJub25lXCIsc3Ryb2tlOlwiIzAwMFwifSxoLnR5cGU9XCJyZWN0XCIscShnLGguYXR0cnMpLGh9LGMuX2VuZ2luZS5lbGxpcHNlPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9cShcImVsbGlwc2VcIik7YS5jYW52YXMmJmEuY2FudmFzLmFwcGVuZENoaWxkKGYpO3ZhciBnPW5ldyBBKGYsYSk7cmV0dXJuIGcuYXR0cnM9e2N4OmIsY3k6YyxyeDpkLHJ5OmUsZmlsbDpcIm5vbmVcIixzdHJva2U6XCIjMDAwXCJ9LGcudHlwZT1cImVsbGlwc2VcIixxKGYsZy5hdHRycyksZ30sYy5fZW5naW5lLmltYWdlPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXt2YXIgZz1xKFwiaW1hZ2VcIik7cShnLHt4OmMseTpkLHdpZHRoOmUsaGVpZ2h0OmYscHJlc2VydmVBc3BlY3RSYXRpbzpcIm5vbmVcIn0pLGcuc2V0QXR0cmlidXRlTlMobixcImhyZWZcIixiKSxhLmNhbnZhcyYmYS5jYW52YXMuYXBwZW5kQ2hpbGQoZyk7dmFyIGg9bmV3IEEoZyxhKTtyZXR1cm4gaC5hdHRycz17eDpjLHk6ZCx3aWR0aDplLGhlaWdodDpmLHNyYzpifSxoLnR5cGU9XCJpbWFnZVwiLGh9LGMuX2VuZ2luZS50ZXh0PWZ1bmN0aW9uKGEsYixkLGUpe3ZhciBmPXEoXCJ0ZXh0XCIpO2EuY2FudmFzJiZhLmNhbnZhcy5hcHBlbmRDaGlsZChmKTt2YXIgZz1uZXcgQShmLGEpO3JldHVybiBnLmF0dHJzPXt4OmIseTpkLFwidGV4dC1hbmNob3JcIjpcIm1pZGRsZVwiLHRleHQ6ZSxcImZvbnQtZmFtaWx5XCI6Yy5fYXZhaWxhYmxlQXR0cnNbXCJmb250LWZhbWlseVwiXSxcImZvbnQtc2l6ZVwiOmMuX2F2YWlsYWJsZUF0dHJzW1wiZm9udC1zaXplXCJdLHN0cm9rZTpcIm5vbmVcIixmaWxsOlwiIzAwMFwifSxnLnR5cGU9XCJ0ZXh0XCIsdyhnLGcuYXR0cnMpLGd9LGMuX2VuZ2luZS5zZXRTaXplPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMud2lkdGg9YXx8dGhpcy53aWR0aCx0aGlzLmhlaWdodD1ifHx0aGlzLmhlaWdodCx0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLHRoaXMud2lkdGgpLHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLHRoaXMuaGVpZ2h0KSx0aGlzLl92aWV3Qm94JiZ0aGlzLnNldFZpZXdCb3guYXBwbHkodGhpcyx0aGlzLl92aWV3Qm94KSx0aGlzfSxjLl9lbmdpbmUuY3JlYXRlPWZ1bmN0aW9uKCl7dmFyIGE9Yy5fZ2V0Q29udGFpbmVyLmFwcGx5KDAsYXJndW1lbnRzKSxiPWEmJmEuY29udGFpbmVyLGQ9YS54LGU9YS55LGY9YS53aWR0aCxnPWEuaGVpZ2h0O2lmKCFiKXRocm93IG5ldyBFcnJvcihcIlNWRyBjb250YWluZXIgbm90IGZvdW5kLlwiKTt2YXIgaCxpPXEoXCJzdmdcIiksaj1cIm92ZXJmbG93OmhpZGRlbjtcIjtyZXR1cm4gZD1kfHwwLGU9ZXx8MCxmPWZ8fDUxMixnPWd8fDM0MixxKGkse2hlaWdodDpnLHZlcnNpb246MS4xLHdpZHRoOmYseG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwieG1sbnM6eGxpbmtcIjpcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIn0pLDE9PWI/KGkuc3R5bGUuY3NzVGV4dD1qK1wicG9zaXRpb246YWJzb2x1dGU7bGVmdDpcIitkK1wicHg7dG9wOlwiK2UrXCJweFwiLGMuX2cuZG9jLmJvZHkuYXBwZW5kQ2hpbGQoaSksaD0xKTooaS5zdHlsZS5jc3NUZXh0PWorXCJwb3NpdGlvbjpyZWxhdGl2ZVwiLGIuZmlyc3RDaGlsZD9iLmluc2VydEJlZm9yZShpLGIuZmlyc3RDaGlsZCk6Yi5hcHBlbmRDaGlsZChpKSksYj1uZXcgYy5fUGFwZXIsYi53aWR0aD1mLGIuaGVpZ2h0PWcsYi5jYW52YXM9aSxiLmNsZWFyKCksYi5fbGVmdD1iLl90b3A9MCxoJiYoYi5yZW5kZXJmaXg9ZnVuY3Rpb24oKXt9KSxiLnJlbmRlcmZpeCgpLGJ9LGMuX2VuZ2luZS5zZXRWaWV3Qm94PWZ1bmN0aW9uKGEsYixjLGQsZSl7ayhcInJhcGhhZWwuc2V0Vmlld0JveFwiLHRoaXMsdGhpcy5fdmlld0JveCxbYSxiLGMsZCxlXSk7dmFyIGYsaCxpPXRoaXMuZ2V0U2l6ZSgpLGo9ZyhjL2kud2lkdGgsZC9pLmhlaWdodCksbD10aGlzLnRvcCxuPWU/XCJ4TWlkWU1pZCBtZWV0XCI6XCJ4TWluWU1pblwiO2ZvcihudWxsPT1hPyh0aGlzLl92YlNpemUmJihqPTEpLGRlbGV0ZSB0aGlzLl92YlNpemUsZj1cIjAgMCBcIit0aGlzLndpZHRoK20rdGhpcy5oZWlnaHQpOih0aGlzLl92YlNpemU9aixmPWErbStiK20rYyttK2QpLHEodGhpcy5jYW52YXMse3ZpZXdCb3g6ZixwcmVzZXJ2ZUFzcGVjdFJhdGlvOm59KTtqJiZsOyloPVwic3Ryb2tlLXdpZHRoXCJpbiBsLmF0dHJzP2wuYXR0cnNbXCJzdHJva2Utd2lkdGhcIl06MSxsLmF0dHIoe1wic3Ryb2tlLXdpZHRoXCI6aH0pLGwuXy5kaXJ0eT0xLGwuXy5kaXJ0eVQ9MSxsPWwucHJldjtyZXR1cm4gdGhpcy5fdmlld0JveD1bYSxiLGMsZCwhIWVdLHRoaXN9LGMucHJvdG90eXBlLnJlbmRlcmZpeD1mdW5jdGlvbigpe3ZhciBhLGI9dGhpcy5jYW52YXMsYz1iLnN0eWxlO3RyeXthPWIuZ2V0U2NyZWVuQ1RNKCl8fGIuY3JlYXRlU1ZHTWF0cml4KCl9Y2F0Y2goZCl7YT1iLmNyZWF0ZVNWR01hdHJpeCgpfXZhciBlPS1hLmUlMSxmPS1hLmYlMTsoZXx8ZikmJihlJiYodGhpcy5fbGVmdD0odGhpcy5fbGVmdCtlKSUxLGMubGVmdD10aGlzLl9sZWZ0K1wicHhcIiksZiYmKHRoaXMuX3RvcD0odGhpcy5fdG9wK2YpJTEsYy50b3A9dGhpcy5fdG9wK1wicHhcIikpfSxjLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe2MuZXZlKFwicmFwaGFlbC5jbGVhclwiLHRoaXMpO2Zvcih2YXIgYT10aGlzLmNhbnZhczthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTt0aGlzLmJvdHRvbT10aGlzLnRvcD1udWxsLCh0aGlzLmRlc2M9cShcImRlc2NcIikpLmFwcGVuZENoaWxkKGMuX2cuZG9jLmNyZWF0ZVRleHROb2RlKFwiQ3JlYXRlZCB3aXRoIFJhcGhhw6tsIFwiK2MudmVyc2lvbikpLGEuYXBwZW5kQ2hpbGQodGhpcy5kZXNjKSxhLmFwcGVuZENoaWxkKHRoaXMuZGVmcz1xKFwiZGVmc1wiKSl9LGMucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe2soXCJyYXBoYWVsLnJlbW92ZVwiLHRoaXMpLHRoaXMuY2FudmFzLnBhcmVudE5vZGUmJnRoaXMuY2FudmFzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jYW52YXMpO2Zvcih2YXIgYSBpbiB0aGlzKXRoaXNbYV09XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpc1thXT9jLl9yZW1vdmVkRmFjdG9yeShhKTpudWxsfTt2YXIgQz1jLnN0O2Zvcih2YXIgRCBpbiBCKUJbYV0oRCkmJiFDW2FdKEQpJiYoQ1tEXT1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYj1hcmd1bWVudHM7cmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbihjKXtjW2FdLmFwcGx5KGMsYil9KX19KEQpKX19KCksZnVuY3Rpb24oKXtpZihjLnZtbCl7dmFyIGE9XCJoYXNPd25Qcm9wZXJ0eVwiLGI9U3RyaW5nLGQ9cGFyc2VGbG9hdCxlPU1hdGgsZj1lLnJvdW5kLGc9ZS5tYXgsaD1lLm1pbixpPWUuYWJzLGo9XCJmaWxsXCIsaz0vWywgXSsvLGw9Yy5ldmUsbT1cIiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnRcIixuPVwiIFwiLG89XCJcIixwPXtNOlwibVwiLEw6XCJsXCIsQzpcImNcIixaOlwieFwiLG06XCJ0XCIsbDpcInJcIixjOlwidlwiLHo6XCJ4XCJ9LHE9LyhbY2xtel0pLD8oW15jbG16XSopL2dpLHI9LyBwcm9naWQ6XFxTK0JsdXJcXChbXlxcKV0rXFwpL2cscz0vLT9bXixcXHMtXSsvZyx0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3dpZHRoOjFweDtoZWlnaHQ6MXB4O2JlaGF2aW9yOnVybCgjZGVmYXVsdCNWTUwpXCIsdT0yMTYwMCx2PXtwYXRoOjEscmVjdDoxLGltYWdlOjF9LHc9e2NpcmNsZToxLGVsbGlwc2U6MX0seD1mdW5jdGlvbihhKXt2YXIgZD0vW2FocXN0dl0vZ2ksZT1jLl9wYXRoVG9BYnNvbHV0ZTtpZihiKGEpLm1hdGNoKGQpJiYoZT1jLl9wYXRoMmN1cnZlKSxkPS9bY2xtel0vZyxlPT1jLl9wYXRoVG9BYnNvbHV0ZSYmIWIoYSkubWF0Y2goZCkpe3ZhciBnPWIoYSkucmVwbGFjZShxLGZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPVwibVwiPT1iLnRvTG93ZXJDYXNlKCksZz1wW2JdO3JldHVybiBjLnJlcGxhY2UocyxmdW5jdGlvbihhKXtlJiYyPT1kLmxlbmd0aCYmKGcrPWQrcFtcIm1cIj09Yj9cImxcIjpcIkxcIl0sZD1bXSksZC5wdXNoKGYoYSp1KSl9KSxnK2R9KTtyZXR1cm4gZ312YXIgaCxpLGo9ZShhKTtnPVtdO2Zvcih2YXIgaz0wLGw9ai5sZW5ndGg7bD5rO2srKyl7aD1qW2tdLGk9altrXVswXS50b0xvd2VyQ2FzZSgpLFwielwiPT1pJiYoaT1cInhcIik7Zm9yKHZhciBtPTEscj1oLmxlbmd0aDtyPm07bSsrKWkrPWYoaFttXSp1KSsobSE9ci0xP1wiLFwiOm8pO2cucHVzaChpKX1yZXR1cm4gZy5qb2luKG4pfSx5PWZ1bmN0aW9uKGEsYixkKXt2YXIgZT1jLm1hdHJpeCgpO3JldHVybiBlLnJvdGF0ZSgtYSwuNSwuNSkse2R4OmUueChiLGQpLGR5OmUueShiLGQpfX0sej1mdW5jdGlvbihhLGIsYyxkLGUsZil7dmFyIGc9YS5fLGg9YS5tYXRyaXgsaz1nLmZpbGxwb3MsbD1hLm5vZGUsbT1sLnN0eWxlLG89MSxwPVwiXCIscT11L2Iscj11L2M7aWYobS52aXNpYmlsaXR5PVwiaGlkZGVuXCIsYiYmYyl7aWYobC5jb29yZHNpemU9aShxKStuK2kociksbS5yb3RhdGlvbj1mKigwPmIqYz8tMToxKSxmKXt2YXIgcz15KGYsZCxlKTtkPXMuZHgsZT1zLmR5fWlmKDA+YiYmKHArPVwieFwiKSwwPmMmJihwKz1cIiB5XCIpJiYobz0tMSksbS5mbGlwPXAsbC5jb29yZG9yaWdpbj1kKi1xK24rZSotcixrfHxnLmZpbGxzaXplKXt2YXIgdD1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKGopO3Q9dCYmdFswXSxsLnJlbW92ZUNoaWxkKHQpLGsmJihzPXkoZixoLngoa1swXSxrWzFdKSxoLnkoa1swXSxrWzFdKSksdC5wb3NpdGlvbj1zLmR4Km8rbitzLmR5Km8pLGcuZmlsbHNpemUmJih0LnNpemU9Zy5maWxsc2l6ZVswXSppKGIpK24rZy5maWxsc2l6ZVsxXSppKGMpKSxsLmFwcGVuZENoaWxkKHQpfW0udmlzaWJpbGl0eT1cInZpc2libGVcIn19O2MudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIllvdXIgYnJvd3NlciBkb2VzbuKAmXQgc3VwcG9ydCBTVkcuIEZhbGxpbmcgZG93biB0byBWTUwuXFxuWW91IGFyZSBydW5uaW5nIFJhcGhhw6tsIFwiK3RoaXMudmVyc2lvbn07dmFyIEE9ZnVuY3Rpb24oYSxjLGQpe2Zvcih2YXIgZT1iKGMpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCItXCIpLGY9ZD9cImVuZFwiOlwic3RhcnRcIixnPWUubGVuZ3RoLGg9XCJjbGFzc2ljXCIsaT1cIm1lZGl1bVwiLGo9XCJtZWRpdW1cIjtnLS07KXN3aXRjaChlW2ddKXtjYXNlXCJibG9ja1wiOmNhc2VcImNsYXNzaWNcIjpjYXNlXCJvdmFsXCI6Y2FzZVwiZGlhbW9uZFwiOmNhc2VcIm9wZW5cIjpjYXNlXCJub25lXCI6aD1lW2ddO2JyZWFrO2Nhc2VcIndpZGVcIjpjYXNlXCJuYXJyb3dcIjpqPWVbZ107YnJlYWs7Y2FzZVwibG9uZ1wiOmNhc2VcInNob3J0XCI6aT1lW2ddfXZhciBrPWEubm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0cm9rZVwiKVswXTtrW2YrXCJhcnJvd1wiXT1oLGtbZitcImFycm93bGVuZ3RoXCJdPWksa1tmK1wiYXJyb3d3aWR0aFwiXT1qfSxCPWZ1bmN0aW9uKGUsaSl7ZS5hdHRycz1lLmF0dHJzfHx7fTt2YXIgbD1lLm5vZGUsbT1lLmF0dHJzLHA9bC5zdHlsZSxxPXZbZS50eXBlXSYmKGkueCE9bS54fHxpLnkhPW0ueXx8aS53aWR0aCE9bS53aWR0aHx8aS5oZWlnaHQhPW0uaGVpZ2h0fHxpLmN4IT1tLmN4fHxpLmN5IT1tLmN5fHxpLnJ4IT1tLnJ4fHxpLnJ5IT1tLnJ5fHxpLnIhPW0ucikscj13W2UudHlwZV0mJihtLmN4IT1pLmN4fHxtLmN5IT1pLmN5fHxtLnIhPWkucnx8bS5yeCE9aS5yeHx8bS5yeSE9aS5yeSkscz1lO2Zvcih2YXIgdCBpbiBpKWlbYV0odCkmJihtW3RdPWlbdF0pO2lmKHEmJihtLnBhdGg9Yy5fZ2V0UGF0aFtlLnR5cGVdKGUpLGUuXy5kaXJ0eT0xKSxpLmhyZWYmJihsLmhyZWY9aS5ocmVmKSxpLnRpdGxlJiYobC50aXRsZT1pLnRpdGxlKSxpLnRhcmdldCYmKGwudGFyZ2V0PWkudGFyZ2V0KSxpLmN1cnNvciYmKHAuY3Vyc29yPWkuY3Vyc29yKSxcImJsdXJcImluIGkmJmUuYmx1cihpLmJsdXIpLChpLnBhdGgmJlwicGF0aFwiPT1lLnR5cGV8fHEpJiYobC5wYXRoPXgofmIobS5wYXRoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJyXCIpP2MuX3BhdGhUb0Fic29sdXRlKG0ucGF0aCk6bS5wYXRoKSxlLl8uZGlydHk9MSxcImltYWdlXCI9PWUudHlwZSYmKGUuXy5maWxscG9zPVttLngsbS55XSxlLl8uZmlsbHNpemU9W20ud2lkdGgsbS5oZWlnaHRdLHooZSwxLDEsMCwwLDApKSksXCJ0cmFuc2Zvcm1cImluIGkmJmUudHJhbnNmb3JtKGkudHJhbnNmb3JtKSxyKXt2YXIgeT0rbS5jeCxCPSttLmN5LEQ9K20ucnh8fCttLnJ8fDAsRT0rbS5yeXx8K20ucnx8MDtsLnBhdGg9Yy5mb3JtYXQoXCJhcnswfSx7MX0sezJ9LHszfSx7NH0sezF9LHs0fSx7MX14XCIsZigoeS1EKSp1KSxmKChCLUUpKnUpLGYoKHkrRCkqdSksZigoQitFKSp1KSxmKHkqdSkpLGUuXy5kaXJ0eT0xfWlmKFwiY2xpcC1yZWN0XCJpbiBpKXt2YXIgRz1iKGlbXCJjbGlwLXJlY3RcIl0pLnNwbGl0KGspO2lmKDQ9PUcubGVuZ3RoKXtHWzJdPStHWzJdKyArR1swXSxHWzNdPStHWzNdKyArR1sxXTt2YXIgSD1sLmNsaXBSZWN0fHxjLl9nLmRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLEk9SC5zdHlsZTtJLmNsaXA9Yy5mb3JtYXQoXCJyZWN0KHsxfXB4IHsyfXB4IHszfXB4IHswfXB4KVwiLEcpLGwuY2xpcFJlY3R8fChJLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixJLnRvcD0wLEkubGVmdD0wLEkud2lkdGg9ZS5wYXBlci53aWR0aCtcInB4XCIsSS5oZWlnaHQ9ZS5wYXBlci5oZWlnaHQrXCJweFwiLGwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoSCxsKSxILmFwcGVuZENoaWxkKGwpLGwuY2xpcFJlY3Q9SCl9aVtcImNsaXAtcmVjdFwiXXx8bC5jbGlwUmVjdCYmKGwuY2xpcFJlY3Quc3R5bGUuY2xpcD1cImF1dG9cIil9aWYoZS50ZXh0cGF0aCl7dmFyIEo9ZS50ZXh0cGF0aC5zdHlsZTtpLmZvbnQmJihKLmZvbnQ9aS5mb250KSxpW1wiZm9udC1mYW1pbHlcIl0mJihKLmZvbnRGYW1pbHk9J1wiJytpW1wiZm9udC1mYW1pbHlcIl0uc3BsaXQoXCIsXCIpWzBdLnJlcGxhY2UoL15bJ1wiXSt8WydcIl0rJC9nLG8pKydcIicpLGlbXCJmb250LXNpemVcIl0mJihKLmZvbnRTaXplPWlbXCJmb250LXNpemVcIl0pLGlbXCJmb250LXdlaWdodFwiXSYmKEouZm9udFdlaWdodD1pW1wiZm9udC13ZWlnaHRcIl0pLGlbXCJmb250LXN0eWxlXCJdJiYoSi5mb250U3R5bGU9aVtcImZvbnQtc3R5bGVcIl0pfWlmKFwiYXJyb3ctc3RhcnRcImluIGkmJkEocyxpW1wiYXJyb3ctc3RhcnRcIl0pLFwiYXJyb3ctZW5kXCJpbiBpJiZBKHMsaVtcImFycm93LWVuZFwiXSwxKSxudWxsIT1pLm9wYWNpdHl8fG51bGwhPWlbXCJzdHJva2Utd2lkdGhcIl18fG51bGwhPWkuZmlsbHx8bnVsbCE9aS5zcmN8fG51bGwhPWkuc3Ryb2tlfHxudWxsIT1pW1wic3Ryb2tlLXdpZHRoXCJdfHxudWxsIT1pW1wic3Ryb2tlLW9wYWNpdHlcIl18fG51bGwhPWlbXCJmaWxsLW9wYWNpdHlcIl18fG51bGwhPWlbXCJzdHJva2UtZGFzaGFycmF5XCJdfHxudWxsIT1pW1wic3Ryb2tlLW1pdGVybGltaXRcIl18fG51bGwhPWlbXCJzdHJva2UtbGluZWpvaW5cIl18fG51bGwhPWlbXCJzdHJva2UtbGluZWNhcFwiXSl7dmFyIEs9bC5nZXRFbGVtZW50c0J5VGFnTmFtZShqKSxMPSExO2lmKEs9SyYmS1swXSwhSyYmKEw9Sz1GKGopKSxcImltYWdlXCI9PWUudHlwZSYmaS5zcmMmJihLLnNyYz1pLnNyYyksaS5maWxsJiYoSy5vbj0hMCksKG51bGw9PUsub258fFwibm9uZVwiPT1pLmZpbGx8fG51bGw9PT1pLmZpbGwpJiYoSy5vbj0hMSksSy5vbiYmaS5maWxsKXt2YXIgTT1iKGkuZmlsbCkubWF0Y2goYy5fSVNVUkwpO2lmKE0pe0sucGFyZW50Tm9kZT09bCYmbC5yZW1vdmVDaGlsZChLKSxLLnJvdGF0ZT0hMCxLLnNyYz1NWzFdLEsudHlwZT1cInRpbGVcIjt2YXIgTj1lLmdldEJCb3goMSk7Sy5wb3NpdGlvbj1OLngrbitOLnksZS5fLmZpbGxwb3M9W04ueCxOLnldLGMuX3ByZWxvYWQoTVsxXSxmdW5jdGlvbigpe2UuXy5maWxsc2l6ZT1bdGhpcy5vZmZzZXRXaWR0aCx0aGlzLm9mZnNldEhlaWdodF19KX1lbHNlIEsuY29sb3I9Yy5nZXRSR0IoaS5maWxsKS5oZXgsSy5zcmM9byxLLnR5cGU9XCJzb2xpZFwiLGMuZ2V0UkdCKGkuZmlsbCkuZXJyb3ImJihzLnR5cGUgaW57Y2lyY2xlOjEsZWxsaXBzZToxfXx8XCJyXCIhPWIoaS5maWxsKS5jaGFyQXQoKSkmJkMocyxpLmZpbGwsSykmJihtLmZpbGw9XCJub25lXCIsbS5ncmFkaWVudD1pLmZpbGwsSy5yb3RhdGU9ITEpfWlmKFwiZmlsbC1vcGFjaXR5XCJpbiBpfHxcIm9wYWNpdHlcImluIGkpe3ZhciBPPSgoK21bXCJmaWxsLW9wYWNpdHlcIl0rMXx8MiktMSkqKCgrbS5vcGFjaXR5KzF8fDIpLTEpKigoK2MuZ2V0UkdCKGkuZmlsbCkubysxfHwyKS0xKTtPPWgoZyhPLDApLDEpLEsub3BhY2l0eT1PLEsuc3JjJiYoSy5jb2xvcj1cIm5vbmVcIil9bC5hcHBlbmRDaGlsZChLKTt2YXIgUD1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3Ryb2tlXCIpJiZsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3Ryb2tlXCIpWzBdLFE9ITE7IVAmJihRPVA9RihcInN0cm9rZVwiKSksKGkuc3Ryb2tlJiZcIm5vbmVcIiE9aS5zdHJva2V8fGlbXCJzdHJva2Utd2lkdGhcIl18fG51bGwhPWlbXCJzdHJva2Utb3BhY2l0eVwiXXx8aVtcInN0cm9rZS1kYXNoYXJyYXlcIl18fGlbXCJzdHJva2UtbWl0ZXJsaW1pdFwiXXx8aVtcInN0cm9rZS1saW5lam9pblwiXXx8aVtcInN0cm9rZS1saW5lY2FwXCJdKSYmKFAub249ITApLChcIm5vbmVcIj09aS5zdHJva2V8fG51bGw9PT1pLnN0cm9rZXx8bnVsbD09UC5vbnx8MD09aS5zdHJva2V8fDA9PWlbXCJzdHJva2Utd2lkdGhcIl0pJiYoUC5vbj0hMSk7dmFyIFI9Yy5nZXRSR0IoaS5zdHJva2UpO1Aub24mJmkuc3Ryb2tlJiYoUC5jb2xvcj1SLmhleCksTz0oKCttW1wic3Ryb2tlLW9wYWNpdHlcIl0rMXx8MiktMSkqKCgrbS5vcGFjaXR5KzF8fDIpLTEpKigoK1IubysxfHwyKS0xKTt2YXIgUz0uNzUqKGQoaVtcInN0cm9rZS13aWR0aFwiXSl8fDEpO2lmKE89aChnKE8sMCksMSksbnVsbD09aVtcInN0cm9rZS13aWR0aFwiXSYmKFM9bVtcInN0cm9rZS13aWR0aFwiXSksaVtcInN0cm9rZS13aWR0aFwiXSYmKFAud2VpZ2h0PVMpLFMmJjE+UyYmKE8qPVMpJiYoUC53ZWlnaHQ9MSksUC5vcGFjaXR5PU8saVtcInN0cm9rZS1saW5lam9pblwiXSYmKFAuam9pbnN0eWxlPWlbXCJzdHJva2UtbGluZWpvaW5cIl18fFwibWl0ZXJcIiksUC5taXRlcmxpbWl0PWlbXCJzdHJva2UtbWl0ZXJsaW1pdFwiXXx8OCxpW1wic3Ryb2tlLWxpbmVjYXBcIl0mJihQLmVuZGNhcD1cImJ1dHRcIj09aVtcInN0cm9rZS1saW5lY2FwXCJdP1wiZmxhdFwiOlwic3F1YXJlXCI9PWlbXCJzdHJva2UtbGluZWNhcFwiXT9cInNxdWFyZVwiOlwicm91bmRcIiksXCJzdHJva2UtZGFzaGFycmF5XCJpbiBpKXt2YXIgVD17XCItXCI6XCJzaG9ydGRhc2hcIixcIi5cIjpcInNob3J0ZG90XCIsXCItLlwiOlwic2hvcnRkYXNoZG90XCIsXCItLi5cIjpcInNob3J0ZGFzaGRvdGRvdFwiLFwiLiBcIjpcImRvdFwiLFwiLSBcIjpcImRhc2hcIixcIi0tXCI6XCJsb25nZGFzaFwiLFwiLSAuXCI6XCJkYXNoZG90XCIsXCItLS5cIjpcImxvbmdkYXNoZG90XCIsXCItLS4uXCI6XCJsb25nZGFzaGRvdGRvdFwifTtQLmRhc2hzdHlsZT1UW2FdKGlbXCJzdHJva2UtZGFzaGFycmF5XCJdKT9UW2lbXCJzdHJva2UtZGFzaGFycmF5XCJdXTpvfVEmJmwuYXBwZW5kQ2hpbGQoUCl9aWYoXCJ0ZXh0XCI9PXMudHlwZSl7cy5wYXBlci5jYW52YXMuc3R5bGUuZGlzcGxheT1vO3ZhciBVPXMucGFwZXIuc3BhbixWPTEwMCxXPW0uZm9udCYmbS5mb250Lm1hdGNoKC9cXGQrKD86XFwuXFxkKik/KD89cHgpLyk7cD1VLnN0eWxlLG0uZm9udCYmKHAuZm9udD1tLmZvbnQpLG1bXCJmb250LWZhbWlseVwiXSYmKHAuZm9udEZhbWlseT1tW1wiZm9udC1mYW1pbHlcIl0pLG1bXCJmb250LXdlaWdodFwiXSYmKHAuZm9udFdlaWdodD1tW1wiZm9udC13ZWlnaHRcIl0pLG1bXCJmb250LXN0eWxlXCJdJiYocC5mb250U3R5bGU9bVtcImZvbnQtc3R5bGVcIl0pLFc9ZChtW1wiZm9udC1zaXplXCJdfHxXJiZXWzBdKXx8MTAscC5mb250U2l6ZT1XKlYrXCJweFwiLHMudGV4dHBhdGguc3RyaW5nJiYoVS5pbm5lckhUTUw9YihzLnRleHRwYXRoLnN0cmluZykucmVwbGFjZSgvPC9nLFwiJiM2MDtcIikucmVwbGFjZSgvJi9nLFwiJiMzODtcIikucmVwbGFjZSgvXFxuL2csXCI8YnI+XCIpKTt2YXIgWD1VLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3MuVz1tLnc9KFgucmlnaHQtWC5sZWZ0KS9WLHMuSD1tLmg9KFguYm90dG9tLVgudG9wKS9WLHMuWD1tLngscy5ZPW0ueStzLkgvMiwoXCJ4XCJpbiBpfHxcInlcImluIGkpJiYocy5wYXRoLnY9Yy5mb3JtYXQoXCJtezB9LHsxfWx7Mn0sezF9XCIsZihtLngqdSksZihtLnkqdSksZihtLngqdSkrMSkpO2Zvcih2YXIgWT1bXCJ4XCIsXCJ5XCIsXCJ0ZXh0XCIsXCJmb250XCIsXCJmb250LWZhbWlseVwiLFwiZm9udC13ZWlnaHRcIixcImZvbnQtc3R5bGVcIixcImZvbnQtc2l6ZVwiXSxaPTAsJD1ZLmxlbmd0aDskPlo7WisrKWlmKFlbWl1pbiBpKXtzLl8uZGlydHk9MTticmVha31zd2l0Y2gobVtcInRleHQtYW5jaG9yXCJdKXtjYXNlXCJzdGFydFwiOnMudGV4dHBhdGguc3R5bGVbXCJ2LXRleHQtYWxpZ25cIl09XCJsZWZ0XCIscy5iYng9cy5XLzI7YnJlYWs7Y2FzZVwiZW5kXCI6cy50ZXh0cGF0aC5zdHlsZVtcInYtdGV4dC1hbGlnblwiXT1cInJpZ2h0XCIscy5iYng9LXMuVy8yO2JyZWFrO2RlZmF1bHQ6cy50ZXh0cGF0aC5zdHlsZVtcInYtdGV4dC1hbGlnblwiXT1cImNlbnRlclwiLHMuYmJ4PTB9cy50ZXh0cGF0aC5zdHlsZVtcInYtdGV4dC1rZXJuXCJdPSEwfX0sQz1mdW5jdGlvbihhLGYsZyl7YS5hdHRycz1hLmF0dHJzfHx7fTt2YXIgaD0oYS5hdHRycyxNYXRoLnBvdyksaT1cImxpbmVhclwiLGo9XCIuNSAuNVwiO2lmKGEuYXR0cnMuZ3JhZGllbnQ9ZixmPWIoZikucmVwbGFjZShjLl9yYWRpYWxfZ3JhZGllbnQsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBpPVwicmFkaWFsXCIsYiYmYyYmKGI9ZChiKSxjPWQoYyksaChiLS41LDIpK2goYy0uNSwyKT4uMjUmJihjPWUuc3FydCguMjUtaChiLS41LDIpKSooMiooYz4uNSktMSkrLjUpLGo9YituK2MpLG99KSxmPWYuc3BsaXQoL1xccypcXC1cXHMqLyksXCJsaW5lYXJcIj09aSl7dmFyIGs9Zi5zaGlmdCgpO2lmKGs9LWQoayksaXNOYU4oaykpcmV0dXJuIG51bGx9dmFyIGw9Yy5fcGFyc2VEb3RzKGYpO2lmKCFsKXJldHVybiBudWxsO2lmKGE9YS5zaGFwZXx8YS5ub2RlLGwubGVuZ3RoKXthLnJlbW92ZUNoaWxkKGcpLGcub249ITAsZy5tZXRob2Q9XCJub25lXCIsZy5jb2xvcj1sWzBdLmNvbG9yLGcuY29sb3IyPWxbbC5sZW5ndGgtMV0uY29sb3I7Zm9yKHZhciBtPVtdLHA9MCxxPWwubGVuZ3RoO3E+cDtwKyspbFtwXS5vZmZzZXQmJm0ucHVzaChsW3BdLm9mZnNldCtuK2xbcF0uY29sb3IpO2cuY29sb3JzPW0ubGVuZ3RoP20uam9pbigpOlwiMCUgXCIrZy5jb2xvcixcInJhZGlhbFwiPT1pPyhnLnR5cGU9XCJncmFkaWVudFRpdGxlXCIsZy5mb2N1cz1cIjEwMCVcIixnLmZvY3Vzc2l6ZT1cIjAgMFwiLGcuZm9jdXNwb3NpdGlvbj1qLGcuYW5nbGU9MCk6KGcudHlwZT1cImdyYWRpZW50XCIsZy5hbmdsZT0oMjcwLWspJTM2MCksYS5hcHBlbmRDaGlsZChnKX1yZXR1cm4gMX0sRD1mdW5jdGlvbihhLGIpe3RoaXNbMF09dGhpcy5ub2RlPWEsYS5yYXBoYWVsPSEwLHRoaXMuaWQ9Yy5fb2lkKyssYS5yYXBoYWVsaWQ9dGhpcy5pZCx0aGlzLlg9MCx0aGlzLlk9MCx0aGlzLmF0dHJzPXt9LHRoaXMucGFwZXI9Yix0aGlzLm1hdHJpeD1jLm1hdHJpeCgpLHRoaXMuXz17dHJhbnNmb3JtOltdLHN4OjEsc3k6MSxkeDowLGR5OjAsZGVnOjAsZGlydHk6MSxkaXJ0eVQ6MX0sIWIuYm90dG9tJiYoYi5ib3R0b209dGhpcyksdGhpcy5wcmV2PWIudG9wLGIudG9wJiYoYi50b3AubmV4dD10aGlzKSxiLnRvcD10aGlzLHRoaXMubmV4dD1udWxsfSxFPWMuZWw7RC5wcm90b3R5cGU9RSxFLmNvbnN0cnVjdG9yPUQsRS50cmFuc2Zvcm09ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlyZXR1cm4gdGhpcy5fLnRyYW5zZm9ybTt2YXIgZCxlPXRoaXMucGFwZXIuX3ZpZXdCb3hTaGlmdCxmPWU/XCJzXCIrW2Uuc2NhbGUsZS5zY2FsZV0rXCItMS0xdFwiK1tlLmR4LGUuZHldOm87ZSYmKGQ9YT1iKGEpLnJlcGxhY2UoL1xcLnszfXxcXHUyMDI2L2csdGhpcy5fLnRyYW5zZm9ybXx8bykpLGMuX2V4dHJhY3RUcmFuc2Zvcm0odGhpcyxmK2EpO3ZhciBnLGg9dGhpcy5tYXRyaXguY2xvbmUoKSxpPXRoaXMuc2tldyxqPXRoaXMubm9kZSxrPX5iKHRoaXMuYXR0cnMuZmlsbCkuaW5kZXhPZihcIi1cIiksbD0hYih0aGlzLmF0dHJzLmZpbGwpLmluZGV4T2YoXCJ1cmwoXCIpO2lmKGgudHJhbnNsYXRlKDEsMSksbHx8a3x8XCJpbWFnZVwiPT10aGlzLnR5cGUpaWYoaS5tYXRyaXg9XCIxIDAgMCAxXCIsaS5vZmZzZXQ9XCIwIDBcIixnPWguc3BsaXQoKSxrJiZnLm5vUm90YXRpb258fCFnLmlzU2ltcGxlKXtqLnN0eWxlLmZpbHRlcj1oLnRvRmlsdGVyKCk7dmFyIG09dGhpcy5nZXRCQm94KCkscD10aGlzLmdldEJCb3goMSkscT1tLngtcC54LHI9bS55LXAueTtqLmNvb3Jkb3JpZ2luPXEqLXUrbityKi11LHoodGhpcywxLDEscSxyLDApfWVsc2Ugai5zdHlsZS5maWx0ZXI9byx6KHRoaXMsZy5zY2FsZXgsZy5zY2FsZXksZy5keCxnLmR5LGcucm90YXRlKTtlbHNlIGouc3R5bGUuZmlsdGVyPW8saS5tYXRyaXg9YihoKSxpLm9mZnNldD1oLm9mZnNldCgpO3JldHVybiBudWxsIT09ZCYmKHRoaXMuXy50cmFuc2Zvcm09ZCxjLl9leHRyYWN0VHJhbnNmb3JtKHRoaXMsZCkpLHRoaXN9LEUucm90YXRlPWZ1bmN0aW9uKGEsYyxlKXtpZih0aGlzLnJlbW92ZWQpcmV0dXJuIHRoaXM7aWYobnVsbCE9YSl7aWYoYT1iKGEpLnNwbGl0KGspLGEubGVuZ3RoLTEmJihjPWQoYVsxXSksZT1kKGFbMl0pKSxhPWQoYVswXSksbnVsbD09ZSYmKGM9ZSksbnVsbD09Y3x8bnVsbD09ZSl7dmFyIGY9dGhpcy5nZXRCQm94KDEpO2M9Zi54K2Yud2lkdGgvMixlPWYueStmLmhlaWdodC8yfXJldHVybiB0aGlzLl8uZGlydHlUPTEsdGhpcy50cmFuc2Zvcm0odGhpcy5fLnRyYW5zZm9ybS5jb25jYXQoW1tcInJcIixhLGMsZV1dKSksdGhpc319LEUudHJhbnNsYXRlPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIHRoaXMucmVtb3ZlZD90aGlzOihhPWIoYSkuc3BsaXQoayksYS5sZW5ndGgtMSYmKGM9ZChhWzFdKSksYT1kKGFbMF0pfHwwLGM9K2N8fDAsdGhpcy5fLmJib3gmJih0aGlzLl8uYmJveC54Kz1hLHRoaXMuXy5iYm94LnkrPWMpLHRoaXMudHJhbnNmb3JtKHRoaXMuXy50cmFuc2Zvcm0uY29uY2F0KFtbXCJ0XCIsYSxjXV0pKSx0aGlzKX0sRS5zY2FsZT1mdW5jdGlvbihhLGMsZSxmKXtpZih0aGlzLnJlbW92ZWQpcmV0dXJuIHRoaXM7aWYoYT1iKGEpLnNwbGl0KGspLGEubGVuZ3RoLTEmJihjPWQoYVsxXSksZT1kKGFbMl0pLGY9ZChhWzNdKSxpc05hTihlKSYmKGU9bnVsbCksaXNOYU4oZikmJihmPW51bGwpKSxhPWQoYVswXSksbnVsbD09YyYmKGM9YSksbnVsbD09ZiYmKGU9ZiksbnVsbD09ZXx8bnVsbD09Zil2YXIgZz10aGlzLmdldEJCb3goMSk7cmV0dXJuIGU9bnVsbD09ZT9nLngrZy53aWR0aC8yOmUsZj1udWxsPT1mP2cueStnLmhlaWdodC8yOmYsdGhpcy50cmFuc2Zvcm0odGhpcy5fLnRyYW5zZm9ybS5jb25jYXQoW1tcInNcIixhLGMsZSxmXV0pKSx0aGlzLl8uZGlydHlUPTEsdGhpc30sRS5oaWRlPWZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMucmVtb3ZlZCYmKHRoaXMubm9kZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKSx0aGlzfSxFLnNob3c9ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5yZW1vdmVkJiYodGhpcy5ub2RlLnN0eWxlLmRpc3BsYXk9byksdGhpc30sRS5hdXhHZXRCQm94PWMuZWwuZ2V0QkJveCxFLmdldEJCb3g9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmF1eEdldEJCb3goKTtpZih0aGlzLnBhcGVyJiZ0aGlzLnBhcGVyLl92aWV3Qm94U2hpZnQpe3ZhciBiPXt9LGM9MS90aGlzLnBhcGVyLl92aWV3Qm94U2hpZnQuc2NhbGU7cmV0dXJuIGIueD1hLngtdGhpcy5wYXBlci5fdmlld0JveFNoaWZ0LmR4LGIueCo9YyxiLnk9YS55LXRoaXMucGFwZXIuX3ZpZXdCb3hTaGlmdC5keSxiLnkqPWMsYi53aWR0aD1hLndpZHRoKmMsYi5oZWlnaHQ9YS5oZWlnaHQqYyxiLngyPWIueCtiLndpZHRoLGIueTI9Yi55K2IuaGVpZ2h0LGJ9cmV0dXJuIGF9LEUuX2dldEJCb3g9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZW1vdmVkP3t9Ont4OnRoaXMuWCsodGhpcy5iYnh8fDApLXRoaXMuVy8yLHk6dGhpcy5ZLXRoaXMuSCx3aWR0aDp0aGlzLlcsaGVpZ2h0OnRoaXMuSH19LEUucmVtb3ZlPWZ1bmN0aW9uKCl7aWYoIXRoaXMucmVtb3ZlZCYmdGhpcy5ub2RlLnBhcmVudE5vZGUpe3RoaXMucGFwZXIuX19zZXRfXyYmdGhpcy5wYXBlci5fX3NldF9fLmV4Y2x1ZGUodGhpcyksYy5ldmUudW5iaW5kKFwicmFwaGFlbC4qLiouXCIrdGhpcy5pZCksYy5fdGVhcih0aGlzLHRoaXMucGFwZXIpLHRoaXMubm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubm9kZSksdGhpcy5zaGFwZSYmdGhpcy5zaGFwZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2hhcGUpO2Zvcih2YXIgYSBpbiB0aGlzKXRoaXNbYV09XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpc1thXT9jLl9yZW1vdmVkRmFjdG9yeShhKTpudWxsO3RoaXMucmVtb3ZlZD0hMH19LEUuYXR0cj1mdW5jdGlvbihiLGQpe2lmKHRoaXMucmVtb3ZlZClyZXR1cm4gdGhpcztpZihudWxsPT1iKXt2YXIgZT17fTtmb3IodmFyIGYgaW4gdGhpcy5hdHRycyl0aGlzLmF0dHJzW2FdKGYpJiYoZVtmXT10aGlzLmF0dHJzW2ZdKTtyZXR1cm4gZS5ncmFkaWVudCYmXCJub25lXCI9PWUuZmlsbCYmKGUuZmlsbD1lLmdyYWRpZW50KSYmZGVsZXRlIGUuZ3JhZGllbnQsZS50cmFuc2Zvcm09dGhpcy5fLnRyYW5zZm9ybSxlfWlmKG51bGw9PWQmJmMuaXMoYixcInN0cmluZ1wiKSl7aWYoYj09aiYmXCJub25lXCI9PXRoaXMuYXR0cnMuZmlsbCYmdGhpcy5hdHRycy5ncmFkaWVudClyZXR1cm4gdGhpcy5hdHRycy5ncmFkaWVudDtmb3IodmFyIGc9Yi5zcGxpdChrKSxoPXt9LGk9MCxtPWcubGVuZ3RoO20+aTtpKyspYj1nW2ldLGhbYl09YiBpbiB0aGlzLmF0dHJzP3RoaXMuYXR0cnNbYl06Yy5pcyh0aGlzLnBhcGVyLmN1c3RvbUF0dHJpYnV0ZXNbYl0sXCJmdW5jdGlvblwiKT90aGlzLnBhcGVyLmN1c3RvbUF0dHJpYnV0ZXNbYl0uZGVmOmMuX2F2YWlsYWJsZUF0dHJzW2JdO3JldHVybiBtLTE/aDpoW2dbMF1dfWlmKHRoaXMuYXR0cnMmJm51bGw9PWQmJmMuaXMoYixcImFycmF5XCIpKXtmb3IoaD17fSxpPTAsbT1iLmxlbmd0aDttPmk7aSsrKWhbYltpXV09dGhpcy5hdHRyKGJbaV0pO3JldHVybiBofXZhciBuO251bGwhPWQmJihuPXt9LG5bYl09ZCksbnVsbD09ZCYmYy5pcyhiLFwib2JqZWN0XCIpJiYobj1iKTtmb3IodmFyIG8gaW4gbilsKFwicmFwaGFlbC5hdHRyLlwiK28rXCIuXCIrdGhpcy5pZCx0aGlzLG5bb10pO2lmKG4pe2ZvcihvIGluIHRoaXMucGFwZXIuY3VzdG9tQXR0cmlidXRlcylpZih0aGlzLnBhcGVyLmN1c3RvbUF0dHJpYnV0ZXNbYV0obykmJm5bYV0obykmJmMuaXModGhpcy5wYXBlci5jdXN0b21BdHRyaWJ1dGVzW29dLFwiZnVuY3Rpb25cIikpe3ZhciBwPXRoaXMucGFwZXIuY3VzdG9tQXR0cmlidXRlc1tvXS5hcHBseSh0aGlzLFtdLmNvbmNhdChuW29dKSk7dGhpcy5hdHRyc1tvXT1uW29dO2Zvcih2YXIgcSBpbiBwKXBbYV0ocSkmJihuW3FdPXBbcV0pfW4udGV4dCYmXCJ0ZXh0XCI9PXRoaXMudHlwZSYmKHRoaXMudGV4dHBhdGguc3RyaW5nPW4udGV4dCksQih0aGlzLG4pfXJldHVybiB0aGlzfSxFLnRvRnJvbnQ9ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5yZW1vdmVkJiZ0aGlzLm5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpLHRoaXMucGFwZXImJnRoaXMucGFwZXIudG9wIT10aGlzJiZjLl90b2Zyb250KHRoaXMsdGhpcy5wYXBlciksdGhpc30sRS50b0JhY2s9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZW1vdmVkP3RoaXM6KHRoaXMubm9kZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQhPXRoaXMubm9kZSYmKHRoaXMubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLm5vZGUsdGhpcy5ub2RlLnBhcmVudE5vZGUuZmlyc3RDaGlsZCksYy5fdG9iYWNrKHRoaXMsdGhpcy5wYXBlcikpLHRoaXMpfSxFLmluc2VydEFmdGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnJlbW92ZWQ/dGhpczooYS5jb25zdHJ1Y3Rvcj09Yy5zdC5jb25zdHJ1Y3RvciYmKGE9YVthLmxlbmd0aC0xXSksYS5ub2RlLm5leHRTaWJsaW5nP2Eubm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLm5vZGUsYS5ub2RlLm5leHRTaWJsaW5nKTphLm5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpLGMuX2luc2VydGFmdGVyKHRoaXMsYSx0aGlzLnBhcGVyKSx0aGlzKX0sRS5pbnNlcnRCZWZvcmU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucmVtb3ZlZD90aGlzOihhLmNvbnN0cnVjdG9yPT1jLnN0LmNvbnN0cnVjdG9yJiYoYT1hWzBdKSxhLm5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5ub2RlLGEubm9kZSksYy5faW5zZXJ0YmVmb3JlKHRoaXMsYSx0aGlzLnBhcGVyKSx0aGlzKX0sRS5ibHVyPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubm9kZS5ydW50aW1lU3R5bGUsZD1iLmZpbHRlcjtyZXR1cm4gZD1kLnJlcGxhY2UocixvKSwwIT09K2E/KHRoaXMuYXR0cnMuYmx1cj1hLGIuZmlsdGVyPWQrbittK1wiLkJsdXIocGl4ZWxyYWRpdXM9XCIrKCthfHwxLjUpK1wiKVwiLGIubWFyZ2luPWMuZm9ybWF0KFwiLXswfXB4IDAgMCAtezB9cHhcIixmKCthfHwxLjUpKSk6KGIuZmlsdGVyPWQsYi5tYXJnaW49MCxkZWxldGUgdGhpcy5hdHRycy5ibHVyKSx0aGlzfSxjLl9lbmdpbmUucGF0aD1mdW5jdGlvbihhLGIpe3ZhciBjPUYoXCJzaGFwZVwiKTtjLnN0eWxlLmNzc1RleHQ9dCxjLmNvb3Jkc2l6ZT11K24rdSxjLmNvb3Jkb3JpZ2luPWIuY29vcmRvcmlnaW47dmFyIGQ9bmV3IEQoYyxiKSxlPXtmaWxsOlwibm9uZVwiLHN0cm9rZTpcIiMwMDBcIn07YSYmKGUucGF0aD1hKSxkLnR5cGU9XCJwYXRoXCIsZC5wYXRoPVtdLGQuUGF0aD1vLEIoZCxlKSxiLmNhbnZhcy5hcHBlbmRDaGlsZChjKTt2YXIgZj1GKFwic2tld1wiKTtyZXR1cm4gZi5vbj0hMCxjLmFwcGVuZENoaWxkKGYpLGQuc2tldz1mLGQudHJhbnNmb3JtKG8pLGR9LGMuX2VuZ2luZS5yZWN0PWZ1bmN0aW9uKGEsYixkLGUsZixnKXt2YXIgaD1jLl9yZWN0UGF0aChiLGQsZSxmLGcpLGk9YS5wYXRoKGgpLGo9aS5hdHRycztyZXR1cm4gaS5YPWoueD1iLGkuWT1qLnk9ZCxpLlc9ai53aWR0aD1lLGkuSD1qLmhlaWdodD1mLGoucj1nLGoucGF0aD1oLGkudHlwZT1cInJlY3RcIixpfSxjLl9lbmdpbmUuZWxsaXBzZT1mdW5jdGlvbihhLGIsYyxkLGUpe3t2YXIgZj1hLnBhdGgoKTtmLmF0dHJzfXJldHVybiBmLlg9Yi1kLGYuWT1jLWUsZi5XPTIqZCxmLkg9MiplLGYudHlwZT1cImVsbGlwc2VcIixCKGYse2N4OmIsY3k6YyxyeDpkLHJ5OmV9KSxmfSxjLl9lbmdpbmUuY2lyY2xlPWZ1bmN0aW9uKGEsYixjLGQpe3t2YXIgZT1hLnBhdGgoKTtlLmF0dHJzfXJldHVybiBlLlg9Yi1kLGUuWT1jLWQsZS5XPWUuSD0yKmQsZS50eXBlPVwiY2lyY2xlXCIsQihlLHtjeDpiLGN5OmMscjpkfSksZX0sYy5fZW5naW5lLmltYWdlPWZ1bmN0aW9uKGEsYixkLGUsZixnKXt2YXIgaD1jLl9yZWN0UGF0aChkLGUsZixnKSxpPWEucGF0aChoKS5hdHRyKHtzdHJva2U6XCJub25lXCJ9KSxrPWkuYXR0cnMsbD1pLm5vZGUsbT1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKGopWzBdO3JldHVybiBrLnNyYz1iLGkuWD1rLng9ZCxpLlk9ay55PWUsaS5XPWsud2lkdGg9ZixpLkg9ay5oZWlnaHQ9ZyxrLnBhdGg9aCxpLnR5cGU9XCJpbWFnZVwiLG0ucGFyZW50Tm9kZT09bCYmbC5yZW1vdmVDaGlsZChtKSxtLnJvdGF0ZT0hMCxtLnNyYz1iLG0udHlwZT1cInRpbGVcIixpLl8uZmlsbHBvcz1bZCxlXSxpLl8uZmlsbHNpemU9W2YsZ10sbC5hcHBlbmRDaGlsZChtKSx6KGksMSwxLDAsMCwwKSxpfSxjLl9lbmdpbmUudGV4dD1mdW5jdGlvbihhLGQsZSxnKXt2YXIgaD1GKFwic2hhcGVcIiksaT1GKFwicGF0aFwiKSxqPUYoXCJ0ZXh0cGF0aFwiKTtkPWR8fDAsZT1lfHwwLGc9Z3x8XCJcIixpLnY9Yy5mb3JtYXQoXCJtezB9LHsxfWx7Mn0sezF9XCIsZihkKnUpLGYoZSp1KSxmKGQqdSkrMSksaS50ZXh0cGF0aG9rPSEwLGouc3RyaW5nPWIoZyksai5vbj0hMCxoLnN0eWxlLmNzc1RleHQ9dCxoLmNvb3Jkc2l6ZT11K24rdSxoLmNvb3Jkb3JpZ2luPVwiMCAwXCI7dmFyIGs9bmV3IEQoaCxhKSxsPXtmaWxsOlwiIzAwMFwiLHN0cm9rZTpcIm5vbmVcIixmb250OmMuX2F2YWlsYWJsZUF0dHJzLmZvbnQsdGV4dDpnfTtrLnNoYXBlPWgsay5wYXRoPWksay50ZXh0cGF0aD1qLGsudHlwZT1cInRleHRcIixrLmF0dHJzLnRleHQ9YihnKSxrLmF0dHJzLng9ZCxrLmF0dHJzLnk9ZSxrLmF0dHJzLnc9MSxrLmF0dHJzLmg9MSxCKGssbCksaC5hcHBlbmRDaGlsZChqKSxoLmFwcGVuZENoaWxkKGkpLGEuY2FudmFzLmFwcGVuZENoaWxkKGgpO3ZhciBtPUYoXCJza2V3XCIpO3JldHVybiBtLm9uPSEwLGguYXBwZW5kQ2hpbGQobSksay5za2V3PW0say50cmFuc2Zvcm0obyksa30sYy5fZW5naW5lLnNldFNpemU9ZnVuY3Rpb24oYSxiKXt2YXIgZD10aGlzLmNhbnZhcy5zdHlsZTtyZXR1cm4gdGhpcy53aWR0aD1hLHRoaXMuaGVpZ2h0PWIsYT09K2EmJihhKz1cInB4XCIpLGI9PStiJiYoYis9XCJweFwiKSxkLndpZHRoPWEsZC5oZWlnaHQ9YixkLmNsaXA9XCJyZWN0KDAgXCIrYStcIiBcIitiK1wiIDApXCIsdGhpcy5fdmlld0JveCYmYy5fZW5naW5lLnNldFZpZXdCb3guYXBwbHkodGhpcyx0aGlzLl92aWV3Qm94KSx0aGlzfSxjLl9lbmdpbmUuc2V0Vmlld0JveD1mdW5jdGlvbihhLGIsZCxlLGYpe2MuZXZlKFwicmFwaGFlbC5zZXRWaWV3Qm94XCIsdGhpcyx0aGlzLl92aWV3Qm94LFthLGIsZCxlLGZdKTt2YXIgZyxoLGk9dGhpcy5nZXRTaXplKCksaj1pLndpZHRoLGs9aS5oZWlnaHQ7cmV0dXJuIGYmJihnPWsvZSxoPWovZCxqPmQqZyYmKGEtPShqLWQqZykvMi9nKSxrPmUqaCYmKGItPShrLWUqaCkvMi9oKSksdGhpcy5fdmlld0JveD1bYSxiLGQsZSwhIWZdLHRoaXMuX3ZpZXdCb3hTaGlmdD17ZHg6LWEsZHk6LWIsc2NhbGU6aX0sdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EudHJhbnNmb3JtKFwiLi4uXCIpfSksdGhpc307dmFyIEY7Yy5fZW5naW5lLmluaXRXaW49ZnVuY3Rpb24oYSl7dmFyIGI9YS5kb2N1bWVudDtiLnN0eWxlU2hlZXRzLmxlbmd0aDwzMT9iLmNyZWF0ZVN0eWxlU2hlZXQoKS5hZGRSdWxlKFwiLnJ2bWxcIixcImJlaGF2aW9yOnVybCgjZGVmYXVsdCNWTUwpXCIpOmIuc3R5bGVTaGVldHNbMF0uYWRkUnVsZShcIi5ydm1sXCIsXCJiZWhhdmlvcjp1cmwoI2RlZmF1bHQjVk1MKVwiKTt0cnl7IWIubmFtZXNwYWNlcy5ydm1sJiZiLm5hbWVzcGFjZXMuYWRkKFwicnZtbFwiLFwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTp2bWxcIiksRj1mdW5jdGlvbihhKXtyZXR1cm4gYi5jcmVhdGVFbGVtZW50KFwiPHJ2bWw6XCIrYSsnIGNsYXNzPVwicnZtbFwiPicpfX1jYXRjaChjKXtGPWZ1bmN0aW9uKGEpe3JldHVybiBiLmNyZWF0ZUVsZW1lbnQoXCI8XCIrYSsnIHhtbG5zPVwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LmNvbTp2bWxcIiBjbGFzcz1cInJ2bWxcIj4nKX19fSxjLl9lbmdpbmUuaW5pdFdpbihjLl9nLndpbiksYy5fZW5naW5lLmNyZWF0ZT1mdW5jdGlvbigpe3ZhciBhPWMuX2dldENvbnRhaW5lci5hcHBseSgwLGFyZ3VtZW50cyksYj1hLmNvbnRhaW5lcixkPWEuaGVpZ2h0LGU9YS53aWR0aCxmPWEueCxnPWEueTtpZighYil0aHJvdyBuZXcgRXJyb3IoXCJWTUwgY29udGFpbmVyIG5vdCBmb3VuZC5cIik7dmFyIGg9bmV3IGMuX1BhcGVyLGk9aC5jYW52YXM9Yy5fZy5kb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKSxqPWkuc3R5bGU7cmV0dXJuIGY9Znx8MCxnPWd8fDAsZT1lfHw1MTIsZD1kfHwzNDIsaC53aWR0aD1lLGguaGVpZ2h0PWQsZT09K2UmJihlKz1cInB4XCIpLGQ9PStkJiYoZCs9XCJweFwiKSxoLmNvb3Jkc2l6ZT0xZTMqdStuKzFlMyp1LGguY29vcmRvcmlnaW49XCIwIDBcIixoLnNwYW49Yy5fZy5kb2MuY3JlYXRlRWxlbWVudChcInNwYW5cIiksaC5zcGFuLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTk5ZW07dG9wOi05OTk5ZW07cGFkZGluZzowO21hcmdpbjowO2xpbmUtaGVpZ2h0OjE7XCIsaS5hcHBlbmRDaGlsZChoLnNwYW4pLGouY3NzVGV4dD1jLmZvcm1hdChcInRvcDowO2xlZnQ6MDt3aWR0aDp7MH07aGVpZ2h0OnsxfTtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtjbGlwOnJlY3QoMCB7MH0gezF9IDApO292ZXJmbG93OmhpZGRlblwiLGUsZCksMT09Yj8oYy5fZy5kb2MuYm9keS5hcHBlbmRDaGlsZChpKSxqLmxlZnQ9ZitcInB4XCIsai50b3A9ZytcInB4XCIsai5wb3NpdGlvbj1cImFic29sdXRlXCIpOmIuZmlyc3RDaGlsZD9iLmluc2VydEJlZm9yZShpLGIuZmlyc3RDaGlsZCk6Yi5hcHBlbmRDaGlsZChpKSxoLnJlbmRlcmZpeD1mdW5jdGlvbigpe30saH0sYy5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXtjLmV2ZShcInJhcGhhZWwuY2xlYXJcIix0aGlzKSx0aGlzLmNhbnZhcy5pbm5lckhUTUw9byx0aGlzLnNwYW49Yy5fZy5kb2MuY3JlYXRlRWxlbWVudChcInNwYW5cIiksdGhpcy5zcGFuLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTk5ZW07dG9wOi05OTk5ZW07cGFkZGluZzowO21hcmdpbjowO2xpbmUtaGVpZ2h0OjE7ZGlzcGxheTppbmxpbmU7XCIsdGhpcy5jYW52YXMuYXBwZW5kQ2hpbGQodGhpcy5zcGFuKSx0aGlzLmJvdHRvbT10aGlzLnRvcD1udWxsfSxjLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oKXtjLmV2ZShcInJhcGhhZWwucmVtb3ZlXCIsdGhpcyksdGhpcy5jYW52YXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNhbnZhcyk7Zm9yKHZhciBhIGluIHRoaXMpdGhpc1thXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzW2FdP2MuX3JlbW92ZWRGYWN0b3J5KGEpOm51bGw7cmV0dXJuITB9O3ZhciBHPWMuc3Q7Zm9yKHZhciBIIGluIEUpRVthXShIKSYmIUdbYV0oSCkmJihHW0hdPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3ZhciBiPWFyZ3VtZW50cztyZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGMpe2NbYV0uYXBwbHkoYyxiKX0pfX0oSCkpfX0oKSxCLndhcz9BLndpbi5SYXBoYWVsPWM6UmFwaGFlbD1jLFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiYobW9kdWxlLmV4cG9ydHM9YyksY30pOyIsIi8qKlxuICogVHdlZW4uanMgLSBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90d2VlbmpzL3R3ZWVuLmpzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2VlbmpzL3R3ZWVuLmpzL2dyYXBocy9jb250cmlidXRvcnMgZm9yIHRoZSBmdWxsIGxpc3Qgb2YgY29udHJpYnV0b3JzLlxuICogVGhhbmsgeW91IGFsbCwgeW91J3JlIGF3ZXNvbWUhXG4gKi9cblxuLy8gSW5jbHVkZSBhIHBlcmZvcm1hbmNlLm5vdyBwb2x5ZmlsbFxuKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAoJ3BlcmZvcm1hbmNlJyBpbiB3aW5kb3cgPT09IGZhbHNlKSB7XG5cdFx0d2luZG93LnBlcmZvcm1hbmNlID0ge307XG5cdH1cblxuXHQvLyBJRSA4XG5cdERhdGUubm93ID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdH0pO1xuXG5cdGlmICgnbm93JyBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPT09IGZhbHNlKSB7XG5cdFx0dmFyIG9mZnNldCA9IHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcgJiYgd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQgPyB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogRGF0ZS5ub3coKTtcblxuXHRcdHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRGF0ZS5ub3coKSAtIG9mZnNldDtcblx0XHR9O1xuXHR9XG5cbn0pKCk7XG5cbnZhciBUV0VFTiA9IFRXRUVOIHx8IChmdW5jdGlvbiAoKSB7XG5cblx0dmFyIF90d2VlbnMgPSBbXTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0Z2V0QWxsOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBfdHdlZW5zO1xuXG5cdFx0fSxcblxuXHRcdHJlbW92ZUFsbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRfdHdlZW5zID0gW107XG5cblx0XHR9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiAodHdlZW4pIHtcblxuXHRcdFx0X3R3ZWVucy5wdXNoKHR3ZWVuKTtcblxuXHRcdH0sXG5cblx0XHRyZW1vdmU6IGZ1bmN0aW9uICh0d2Vlbikge1xuXG5cdFx0XHR2YXIgaSA9IF90d2VlbnMuaW5kZXhPZih0d2Vlbik7XG5cblx0XHRcdGlmIChpICE9PSAtMSkge1xuXHRcdFx0XHRfdHdlZW5zLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHRcdGlmIChfdHdlZW5zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0dGltZSA9IHRpbWUgIT09IHVuZGVmaW5lZCA/IHRpbWUgOiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG5cblx0XHRcdHdoaWxlIChpIDwgX3R3ZWVucy5sZW5ndGgpIHtcblxuXHRcdFx0XHRpZiAoX3R3ZWVuc1tpXS51cGRhdGUodGltZSkpIHtcblx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3R3ZWVucy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdH1cblx0fTtcblxufSkoKTtcblxuVFdFRU4uVHdlZW4gPSBmdW5jdGlvbiAob2JqZWN0KSB7XG5cblx0dmFyIF9vYmplY3QgPSBvYmplY3Q7XG5cdHZhciBfdmFsdWVzU3RhcnQgPSB7fTtcblx0dmFyIF92YWx1ZXNFbmQgPSB7fTtcblx0dmFyIF92YWx1ZXNTdGFydFJlcGVhdCA9IHt9O1xuXHR2YXIgX2R1cmF0aW9uID0gMTAwMDtcblx0dmFyIF9yZXBlYXQgPSAwO1xuXHR2YXIgX3lveW8gPSBmYWxzZTtcblx0dmFyIF9pc1BsYXlpbmcgPSBmYWxzZTtcblx0dmFyIF9yZXZlcnNlZCA9IGZhbHNlO1xuXHR2YXIgX2RlbGF5VGltZSA9IDA7XG5cdHZhciBfc3RhcnRUaW1lID0gbnVsbDtcblx0dmFyIF9lYXNpbmdGdW5jdGlvbiA9IFRXRUVOLkVhc2luZy5MaW5lYXIuTm9uZTtcblx0dmFyIF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLkxpbmVhcjtcblx0dmFyIF9jaGFpbmVkVHdlZW5zID0gW107XG5cdHZhciBfb25TdGFydENhbGxiYWNrID0gbnVsbDtcblx0dmFyIF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IGZhbHNlO1xuXHR2YXIgX29uVXBkYXRlQ2FsbGJhY2sgPSBudWxsO1xuXHR2YXIgX29uQ29tcGxldGVDYWxsYmFjayA9IG51bGw7XG5cdHZhciBfb25TdG9wQ2FsbGJhY2sgPSBudWxsO1xuXG5cdC8vIFNldCBhbGwgc3RhcnRpbmcgdmFsdWVzIHByZXNlbnQgb24gdGhlIHRhcmdldCBvYmplY3Rcblx0Zm9yICh2YXIgZmllbGQgaW4gb2JqZWN0KSB7XG5cdFx0X3ZhbHVlc1N0YXJ0W2ZpZWxkXSA9IHBhcnNlRmxvYXQob2JqZWN0W2ZpZWxkXSwgMTApO1xuXHR9XG5cblx0dGhpcy50byA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzLCBkdXJhdGlvbikge1xuXG5cdFx0aWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdF9kdXJhdGlvbiA9IGR1cmF0aW9uO1xuXHRcdH1cblxuXHRcdF92YWx1ZXNFbmQgPSBwcm9wZXJ0aWVzO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnN0YXJ0ID0gZnVuY3Rpb24gKHRpbWUpIHtcblxuXHRcdFRXRUVOLmFkZCh0aGlzKTtcblxuXHRcdF9pc1BsYXlpbmcgPSB0cnVlO1xuXG5cdFx0X29uU3RhcnRDYWxsYmFja0ZpcmVkID0gZmFsc2U7XG5cblx0XHRfc3RhcnRUaW1lID0gdGltZSAhPT0gdW5kZWZpbmVkID8gdGltZSA6IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcblx0XHRfc3RhcnRUaW1lICs9IF9kZWxheVRpbWU7XG5cblx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiBfdmFsdWVzRW5kKSB7XG5cblx0XHRcdC8vIENoZWNrIGlmIGFuIEFycmF5IHdhcyBwcm92aWRlZCBhcyBwcm9wZXJ0eSB2YWx1ZVxuXHRcdFx0aWYgKF92YWx1ZXNFbmRbcHJvcGVydHldIGluc3RhbmNlb2YgQXJyYXkpIHtcblxuXHRcdFx0XHRpZiAoX3ZhbHVlc0VuZFtwcm9wZXJ0eV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgYSBsb2NhbCBjb3B5IG9mIHRoZSBBcnJheSB3aXRoIHRoZSBzdGFydCB2YWx1ZSBhdCB0aGUgZnJvbnRcblx0XHRcdFx0X3ZhbHVlc0VuZFtwcm9wZXJ0eV0gPSBbX29iamVjdFtwcm9wZXJ0eV1dLmNvbmNhdChfdmFsdWVzRW5kW3Byb3BlcnR5XSk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYHRvKClgIHNwZWNpZmllcyBhIHByb3BlcnR5IHRoYXQgZG9lc24ndCBleGlzdCBpbiB0aGUgc291cmNlIG9iamVjdCxcblx0XHRcdC8vIHdlIHNob3VsZCBub3Qgc2V0IHRoYXQgcHJvcGVydHkgaW4gdGhlIG9iamVjdFxuXHRcdFx0aWYgKF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0X3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9IF9vYmplY3RbcHJvcGVydHldO1xuXG5cdFx0XHRpZiAoKF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBBcnJheSkgPT09IGZhbHNlKSB7XG5cdFx0XHRcdF92YWx1ZXNTdGFydFtwcm9wZXJ0eV0gKj0gMS4wOyAvLyBFbnN1cmVzIHdlJ3JlIHVzaW5nIG51bWJlcnMsIG5vdCBzdHJpbmdzXG5cdFx0XHR9XG5cblx0XHRcdF92YWx1ZXNTdGFydFJlcGVhdFtwcm9wZXJ0eV0gPSBfdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmICghX2lzUGxheWluZykge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0VFdFRU4ucmVtb3ZlKHRoaXMpO1xuXHRcdF9pc1BsYXlpbmcgPSBmYWxzZTtcblxuXHRcdGlmIChfb25TdG9wQ2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdF9vblN0b3BDYWxsYmFjay5jYWxsKF9vYmplY3QpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcENoYWluZWRUd2VlbnMoKTtcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMuc3RvcENoYWluZWRUd2VlbnMgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgbnVtQ2hhaW5lZFR3ZWVucyA9IF9jaGFpbmVkVHdlZW5zLmxlbmd0aDsgaSA8IG51bUNoYWluZWRUd2VlbnM7IGkrKykge1xuXHRcdFx0X2NoYWluZWRUd2VlbnNbaV0uc3RvcCgpO1xuXHRcdH1cblxuXHR9O1xuXG5cdHRoaXMuZGVsYXkgPSBmdW5jdGlvbiAoYW1vdW50KSB7XG5cblx0XHRfZGVsYXlUaW1lID0gYW1vdW50O1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5yZXBlYXQgPSBmdW5jdGlvbiAodGltZXMpIHtcblxuXHRcdF9yZXBlYXQgPSB0aW1lcztcblx0XHRyZXR1cm4gdGhpcztcblxuXHR9O1xuXG5cdHRoaXMueW95byA9IGZ1bmN0aW9uICh5b3lvKSB7XG5cblx0XHRfeW95byA9IHlveW87XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXG5cdHRoaXMuZWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuXG5cdFx0X2Vhc2luZ0Z1bmN0aW9uID0gZWFzaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5pbnRlcnBvbGF0aW9uID0gZnVuY3Rpb24gKGludGVycG9sYXRpb24pIHtcblxuXHRcdF9pbnRlcnBvbGF0aW9uRnVuY3Rpb24gPSBpbnRlcnBvbGF0aW9uO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5jaGFpbiA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdF9jaGFpbmVkVHdlZW5zID0gYXJndW1lbnRzO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vblN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHRfb25TdGFydENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHRfb25VcGRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHRcdHJldHVybiB0aGlzO1xuXG5cdH07XG5cblx0dGhpcy5vbkNvbXBsZXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cblx0XHRfb25Db21wbGV0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLm9uU3RvcCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG5cdFx0X29uU3RvcENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fTtcblxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICh0aW1lKSB7XG5cblx0XHR2YXIgcHJvcGVydHk7XG5cdFx0dmFyIGVsYXBzZWQ7XG5cdFx0dmFyIHZhbHVlO1xuXG5cdFx0aWYgKHRpbWUgPCBfc3RhcnRUaW1lKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoX29uU3RhcnRDYWxsYmFja0ZpcmVkID09PSBmYWxzZSkge1xuXG5cdFx0XHRpZiAoX29uU3RhcnRDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHRfb25TdGFydENhbGxiYWNrLmNhbGwoX29iamVjdCk7XG5cdFx0XHR9XG5cblx0XHRcdF9vblN0YXJ0Q2FsbGJhY2tGaXJlZCA9IHRydWU7XG5cblx0XHR9XG5cblx0XHRlbGFwc2VkID0gKHRpbWUgLSBfc3RhcnRUaW1lKSAvIF9kdXJhdGlvbjtcblx0XHRlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuXHRcdHZhbHVlID0gX2Vhc2luZ0Z1bmN0aW9uKGVsYXBzZWQpO1xuXG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBfdmFsdWVzRW5kKSB7XG5cblx0XHRcdC8vIERvbid0IHVwZGF0ZSBwcm9wZXJ0aWVzIHRoYXQgZG8gbm90IGV4aXN0IGluIHRoZSBzb3VyY2Ugb2JqZWN0XG5cdFx0XHRpZiAoX3ZhbHVlc1N0YXJ0W3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgc3RhcnQgPSBfdmFsdWVzU3RhcnRbcHJvcGVydHldIHx8IDA7XG5cdFx0XHR2YXIgZW5kID0gX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG5cblx0XHRcdGlmIChlbmQgaW5zdGFuY2VvZiBBcnJheSkge1xuXG5cdFx0XHRcdF9vYmplY3RbcHJvcGVydHldID0gX2ludGVycG9sYXRpb25GdW5jdGlvbihlbmQsIHZhbHVlKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBQYXJzZXMgcmVsYXRpdmUgZW5kIHZhbHVlcyB3aXRoIHN0YXJ0IGFzIGJhc2UgKGUuZy46ICsxMCwgLTMpXG5cdFx0XHRcdGlmICh0eXBlb2YgKGVuZCkgPT09ICdzdHJpbmcnKSB7XG5cblx0XHRcdFx0XHRpZiAoZW5kLnN0YXJ0c1dpdGgoJysnKSB8fCBlbmQuc3RhcnRzV2l0aCgnLScpKSB7XG5cdFx0XHRcdFx0XHRlbmQgPSBzdGFydCArIHBhcnNlRmxvYXQoZW5kLCAxMCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVuZCA9IHBhcnNlRmxvYXQoZW5kLCAxMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvdGVjdCBhZ2FpbnN0IG5vbiBudW1lcmljIHByb3BlcnRpZXMuXG5cdFx0XHRcdGlmICh0eXBlb2YgKGVuZCkgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdFx0X29iamVjdFtwcm9wZXJ0eV0gPSBzdGFydCArIChlbmQgLSBzdGFydCkgKiB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRpZiAoX29uVXBkYXRlQ2FsbGJhY2sgIT09IG51bGwpIHtcblx0XHRcdF9vblVwZGF0ZUNhbGxiYWNrLmNhbGwoX29iamVjdCwgdmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChlbGFwc2VkID09PSAxKSB7XG5cblx0XHRcdGlmIChfcmVwZWF0ID4gMCkge1xuXG5cdFx0XHRcdGlmIChpc0Zpbml0ZShfcmVwZWF0KSkge1xuXHRcdFx0XHRcdF9yZXBlYXQtLTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlYXNzaWduIHN0YXJ0aW5nIHZhbHVlcywgcmVzdGFydCBieSBtYWtpbmcgc3RhcnRUaW1lID0gbm93XG5cdFx0XHRcdGZvciAocHJvcGVydHkgaW4gX3ZhbHVlc1N0YXJ0UmVwZWF0KSB7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIChfdmFsdWVzRW5kW3Byb3BlcnR5XSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRfdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XSArIHBhcnNlRmxvYXQoX3ZhbHVlc0VuZFtwcm9wZXJ0eV0sIDEwKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoX3lveW8pIHtcblx0XHRcdFx0XHRcdHZhciB0bXAgPSBfdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldO1xuXG5cdFx0XHRcdFx0XHRfdmFsdWVzU3RhcnRSZXBlYXRbcHJvcGVydHldID0gX3ZhbHVlc0VuZFtwcm9wZXJ0eV07XG5cdFx0XHRcdFx0XHRfdmFsdWVzRW5kW3Byb3BlcnR5XSA9IHRtcDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRfdmFsdWVzU3RhcnRbcHJvcGVydHldID0gX3ZhbHVlc1N0YXJ0UmVwZWF0W3Byb3BlcnR5XTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKF95b3lvKSB7XG5cdFx0XHRcdFx0X3JldmVyc2VkID0gIV9yZXZlcnNlZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdF9zdGFydFRpbWUgPSB0aW1lICsgX2RlbGF5VGltZTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRpZiAoX29uQ29tcGxldGVDYWxsYmFjayAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdF9vbkNvbXBsZXRlQ2FsbGJhY2suY2FsbChfb2JqZWN0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBudW1DaGFpbmVkVHdlZW5zID0gX2NoYWluZWRUd2VlbnMubGVuZ3RoOyBpIDwgbnVtQ2hhaW5lZFR3ZWVuczsgaSsrKSB7XG5cdFx0XHRcdFx0Ly8gTWFrZSB0aGUgY2hhaW5lZCB0d2VlbnMgc3RhcnQgZXhhY3RseSBhdCB0aGUgdGltZSB0aGV5IHNob3VsZCxcblx0XHRcdFx0XHQvLyBldmVuIGlmIHRoZSBgdXBkYXRlKClgIG1ldGhvZCB3YXMgY2FsbGVkIHdheSBwYXN0IHRoZSBkdXJhdGlvbiBvZiB0aGUgdHdlZW5cblx0XHRcdFx0XHRfY2hhaW5lZFR3ZWVuc1tpXS5zdGFydChfc3RhcnRUaW1lICsgX2R1cmF0aW9uKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fTtcblxufTtcblxuXG5UV0VFTi5FYXNpbmcgPSB7XG5cblx0TGluZWFyOiB7XG5cblx0XHROb25lOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gaztcblxuXHRcdH1cblxuXHR9LFxuXG5cdFF1YWRyYXRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogaztcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogKDIgLSBrKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAtIDAuNSAqICgtLWsgKiAoayAtIDIpIC0gMSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRDdWJpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGs7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGs7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoKGsgLT0gMikgKiBrICogayArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0UXVhcnRpYzoge1xuXG5cdFx0SW46IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBrICogayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSAoLS1rICogayAqIGsgKiBrKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKChrICo9IDIpIDwgMSkge1xuXHRcdFx0XHRyZXR1cm4gMC41ICogayAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC0gMC41ICogKChrIC09IDIpICogayAqIGsgKiBrIC0gMik7XG5cblx0XHR9XG5cblx0fSxcblxuXHRRdWludGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgKiBrICogayAqIGsgKiBrO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIC0tayAqIGsgKiBrICogayAqIGsgKyAxO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBrICogayAqIGsgKiBrICogaztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiBrICogayAqIGsgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFNpbnVzb2lkYWw6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gMSAtIE1hdGguY29zKGsgKiBNYXRoLlBJIC8gMik7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5zaW4oayAqIE1hdGguUEkgLyAyKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEV4cG9uZW50aWFsOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgPT09IDAgPyAwIDogTWF0aC5wb3coMTAyNCwgayAtIDEpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIGsgPT09IDEgPyAxIDogMSAtIE1hdGgucG93KDIsIC0gMTAgKiBrKTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0aWYgKGsgPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdygxMDI0LCBrIC0gMSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoLSBNYXRoLnBvdygyLCAtIDEwICogKGsgLSAxKSkgKyAyKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdENpcmN1bGFyOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIGsgKiBrKTtcblxuXHRcdH0sXG5cblx0XHRPdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnNxcnQoMSAtICgtLWsgKiBrKSk7XG5cblx0XHR9LFxuXG5cdFx0SW5PdXQ6IGZ1bmN0aW9uIChrKSB7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIC0gMC41ICogKE1hdGguc3FydCgxIC0gayAqIGspIC0gMSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAoayAtPSAyKSAqIGspICsgMSk7XG5cblx0XHR9XG5cblx0fSxcblxuXHRFbGFzdGljOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHM7XG5cdFx0XHR2YXIgYSA9IDAuMTtcblx0XHRcdHZhciBwID0gMC40O1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghYSB8fCBhIDwgMSkge1xuXHRcdFx0XHRhID0gMTtcblx0XHRcdFx0cyA9IHAgLyA0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cyA9IHAgKiBNYXRoLmFzaW4oMSAvIGEpIC8gKDIgKiBNYXRoLlBJKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIC0gKGEgKiBNYXRoLnBvdygyLCAxMCAqIChrIC09IDEpKSAqIE1hdGguc2luKChrIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHM7XG5cdFx0XHR2YXIgYSA9IDAuMTtcblx0XHRcdHZhciBwID0gMC40O1xuXG5cdFx0XHRpZiAoayA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGsgPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghYSB8fCBhIDwgMSkge1xuXHRcdFx0XHRhID0gMTtcblx0XHRcdFx0cyA9IHAgLyA0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cyA9IHAgKiBNYXRoLmFzaW4oMSAvIGEpIC8gKDIgKiBNYXRoLlBJKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChhICogTWF0aC5wb3coMiwgLSAxMCAqIGspICogTWF0aC5zaW4oKGsgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSArIDEpO1xuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcztcblx0XHRcdHZhciBhID0gMC4xO1xuXHRcdFx0dmFyIHAgPSAwLjQ7XG5cblx0XHRcdGlmIChrID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoayA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFhIHx8IGEgPCAxKSB7XG5cdFx0XHRcdGEgPSAxO1xuXHRcdFx0XHRzID0gcCAvIDQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzID0gcCAqIE1hdGguYXNpbigxIC8gYSkgLyAoMiAqIE1hdGguUEkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoKGsgKj0gMikgPCAxKSB7XG5cdFx0XHRcdHJldHVybiAtIDAuNSAqIChhICogTWF0aC5wb3coMiwgMTAgKiAoayAtPSAxKSkgKiBNYXRoLnNpbigoayAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiAoayAtPSAxKSkgKiBNYXRoLnNpbigoayAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICogMC41ICsgMTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdEJhY2s6IHtcblxuXHRcdEluOiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHR2YXIgcyA9IDEuNzAxNTg7XG5cblx0XHRcdHJldHVybiBrICogayAqICgocyArIDEpICogayAtIHMpO1xuXG5cdFx0fSxcblxuXHRcdE91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4O1xuXG5cdFx0XHRyZXR1cm4gLS1rICogayAqICgocyArIDEpICogayArIHMpICsgMTtcblxuXHRcdH0sXG5cblx0XHRJbk91dDogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0dmFyIHMgPSAxLjcwMTU4ICogMS41MjU7XG5cblx0XHRcdGlmICgoayAqPSAyKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIDAuNSAqIChrICogayAqICgocyArIDEpICogayAtIHMpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDAuNSAqICgoayAtPSAyKSAqIGsgKiAoKHMgKyAxKSAqIGsgKyBzKSArIDIpO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Qm91bmNlOiB7XG5cblx0XHRJbjogZnVuY3Rpb24gKGspIHtcblxuXHRcdFx0cmV0dXJuIDEgLSBUV0VFTi5FYXNpbmcuQm91bmNlLk91dCgxIC0gayk7XG5cblx0XHR9LFxuXG5cdFx0T3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA8ICgxIC8gMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuIDcuNTYyNSAqIGsgKiBrO1xuXHRcdFx0fSBlbHNlIGlmIChrIDwgKDIgLyAyLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDEuNSAvIDIuNzUpKSAqIGsgKyAwLjc1O1xuXHRcdFx0fSBlbHNlIGlmIChrIDwgKDIuNSAvIDIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiA3LjU2MjUgKiAoayAtPSAoMi4yNSAvIDIuNzUpKSAqIGsgKyAwLjkzNzU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gNy41NjI1ICogKGsgLT0gKDIuNjI1IC8gMi43NSkpICogayArIDAuOTg0Mzc1O1xuXHRcdFx0fVxuXG5cdFx0fSxcblxuXHRcdEluT3V0OiBmdW5jdGlvbiAoaykge1xuXG5cdFx0XHRpZiAoayA8IDAuNSkge1xuXHRcdFx0XHRyZXR1cm4gVFdFRU4uRWFzaW5nLkJvdW5jZS5JbihrICogMikgKiAwLjU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBUV0VFTi5FYXNpbmcuQm91bmNlLk91dChrICogMiAtIDEpICogMC41ICsgMC41O1xuXG5cdFx0fVxuXG5cdH1cblxufTtcblxuVFdFRU4uSW50ZXJwb2xhdGlvbiA9IHtcblxuXHRMaW5lYXI6IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgZiA9IG0gKiBrO1xuXHRcdHZhciBpID0gTWF0aC5mbG9vcihmKTtcblx0XHR2YXIgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkxpbmVhcjtcblxuXHRcdGlmIChrIDwgMCkge1xuXHRcdFx0cmV0dXJuIGZuKHZbMF0sIHZbMV0sIGYpO1xuXHRcdH1cblxuXHRcdGlmIChrID4gMSkge1xuXHRcdFx0cmV0dXJuIGZuKHZbbV0sIHZbbSAtIDFdLCBtIC0gZik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKHZbaV0sIHZbaSArIDEgPiBtID8gbSA6IGkgKyAxXSwgZiAtIGkpO1xuXG5cdH0sXG5cblx0QmV6aWVyOiBmdW5jdGlvbiAodiwgaykge1xuXG5cdFx0dmFyIGIgPSAwO1xuXHRcdHZhciBuID0gdi5sZW5ndGggLSAxO1xuXHRcdHZhciBwdyA9IE1hdGgucG93O1xuXHRcdHZhciBibiA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuQmVybnN0ZWluO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG5cdFx0XHRiICs9IHB3KDEgLSBrLCBuIC0gaSkgKiBwdyhrLCBpKSAqIHZbaV0gKiBibihuLCBpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYjtcblxuXHR9LFxuXG5cdENhdG11bGxSb206IGZ1bmN0aW9uICh2LCBrKSB7XG5cblx0XHR2YXIgbSA9IHYubGVuZ3RoIC0gMTtcblx0XHR2YXIgZiA9IG0gKiBrO1xuXHRcdHZhciBpID0gTWF0aC5mbG9vcihmKTtcblx0XHR2YXIgZm4gPSBUV0VFTi5JbnRlcnBvbGF0aW9uLlV0aWxzLkNhdG11bGxSb207XG5cblx0XHRpZiAodlswXSA9PT0gdlttXSkge1xuXG5cdFx0XHRpZiAoayA8IDApIHtcblx0XHRcdFx0aSA9IE1hdGguZmxvb3IoZiA9IG0gKiAoMSArIGspKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuKHZbKGkgLSAxICsgbSkgJSBtXSwgdltpXSwgdlsoaSArIDEpICUgbV0sIHZbKGkgKyAyKSAlIG1dLCBmIC0gaSk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRpZiAoayA8IDApIHtcblx0XHRcdFx0cmV0dXJuIHZbMF0gLSAoZm4odlswXSwgdlswXSwgdlsxXSwgdlsxXSwgLWYpIC0gdlswXSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChrID4gMSkge1xuXHRcdFx0XHRyZXR1cm4gdlttXSAtIChmbih2W21dLCB2W21dLCB2W20gLSAxXSwgdlttIC0gMV0sIGYgLSBtKSAtIHZbbV0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm4odltpID8gaSAtIDEgOiAwXSwgdltpXSwgdlttIDwgaSArIDEgPyBtIDogaSArIDFdLCB2W20gPCBpICsgMiA/IG0gOiBpICsgMl0sIGYgLSBpKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdFV0aWxzOiB7XG5cblx0XHRMaW5lYXI6IGZ1bmN0aW9uIChwMCwgcDEsIHQpIHtcblxuXHRcdFx0cmV0dXJuIChwMSAtIHAwKSAqIHQgKyBwMDtcblxuXHRcdH0sXG5cblx0XHRCZXJuc3RlaW46IGZ1bmN0aW9uIChuLCBpKSB7XG5cblx0XHRcdHZhciBmYyA9IFRXRUVOLkludGVycG9sYXRpb24uVXRpbHMuRmFjdG9yaWFsO1xuXG5cdFx0XHRyZXR1cm4gZmMobikgLyBmYyhpKSAvIGZjKG4gLSBpKTtcblxuXHRcdH0sXG5cblx0XHRGYWN0b3JpYWw6IChmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHZhciBhID0gWzFdO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKG4pIHtcblxuXHRcdFx0XHR2YXIgcyA9IDE7XG5cblx0XHRcdFx0aWYgKGFbbl0pIHtcblx0XHRcdFx0XHRyZXR1cm4gYVtuXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSBuOyBpID4gMTsgaS0tKSB7XG5cdFx0XHRcdFx0cyAqPSBpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YVtuXSA9IHM7XG5cdFx0XHRcdHJldHVybiBzO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSkoKSxcblxuXHRcdENhdG11bGxSb206IGZ1bmN0aW9uIChwMCwgcDEsIHAyLCBwMywgdCkge1xuXG5cdFx0XHR2YXIgdjAgPSAocDIgLSBwMCkgKiAwLjU7XG5cdFx0XHR2YXIgdjEgPSAocDMgLSBwMSkgKiAwLjU7XG5cdFx0XHR2YXIgdDIgPSB0ICogdDtcblx0XHRcdHZhciB0MyA9IHQgKiB0MjtcblxuXHRcdFx0cmV0dXJuICgyICogcDEgLSAyICogcDIgKyB2MCArIHYxKSAqIHQzICsgKC0gMyAqIHAxICsgMyAqIHAyIC0gMiAqIHYwIC0gdjEpICogdDIgKyB2MCAqIHQgKyBwMTtcblxuXHRcdH1cblxuXHR9XG5cbn07XG5cbi8vIFVNRCAoVW5pdmVyc2FsIE1vZHVsZSBEZWZpbml0aW9uKVxuKGZ1bmN0aW9uIChyb290KSB7XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gVFdFRU47XG5cdFx0fSk7XG5cblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblxuXHRcdC8vIE5vZGUuanNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IFRXRUVOO1xuXG5cdH0gZWxzZSBpZiAocm9vdCAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHQvLyBHbG9iYWwgdmFyaWFibGVcblx0XHRyb290LlRXRUVOID0gVFdFRU47XG5cblx0fVxuXG59KSh0aGlzKTtcbiIsImlmICgodHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JykgJiYgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSAnb2JqZWN0JykpIHtcbiAgdmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbiAgdmFyIFJhcGhhZWwgPSByZXF1aXJlKCd3ZWJwYWNrLXJhcGhhZWwnKTtcbiAgdmFyIFRXRUVOID0gcmVxdWlyZSgndHdlZW4uanMnKTtcbn1cblxudmFyIHZpczQgPSBmdW5jdGlvbigpIHt9O1xuXG52aXM0LmxvZyA9IGZ1bmN0aW9uKCkge1xuXHR0cnkge1xuXHRcdGlmICh3aW5kb3cuY29uc29sZSAhPT0gbnVsbCkgY29uc29sZS5sb2cuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0fSBjYXRjaCAoZSkge307XG59O1xuXG52aXM0LnN0cjJ0aW1lID0gZnVuY3Rpb24ocykge1xuXHR2YXIgcCA9IHMuc3BsaXQoXCIuXCIpO1xuXHRyZXR1cm4gTWF0aC5yb3VuZChEYXRlLlVUQygyMDAwK3BbMF0sIHBbMV0tMSwgcFsyXSkqMC4wMDEpO1xufTtcblxudmlzNC5yb3VuZCA9IGZ1bmN0aW9uKHZhbCwgcHJlYykge1xuXHR2YXIgZCA9IE1hdGgucG93KDEwLCBwcmVjKTtcblx0cmV0dXJuIE1hdGgucm91bmQodmFsKmQpL2Q7XG59O1xudmlzNC5mb3JtYXROdW1iZXJfa3NlcCA9ICcuJztcbnZpczQuZm9ybWF0TnVtYmVyX2RzZXAgPSAnLCc7XG52aXM0LmZvcm1hdE51bWJlciA9IGZ1bmN0aW9uKG5yLCByb3VuZCkge1xuXHQvL2lmIChuciA+IDk5OTk5OSAmJiByb3VuZCkgcmV0dXJuICgnJyt2aXM0LnJvdW5kKG5yLzEwMDAwMDAsMSkpLnJlcGxhY2UoXCIuXCIsdmlzNC5mb3JtYXROdW1iZXJfZHNlcCkrXCImbmJzcDtNaW9cIjtcblx0bnIgPSAnJytucjtcblx0dmFyIG91dCA9ICcnLCBjPTA7XG5cdGZvciAodmFyIGk9bnIubGVuZ3RoLTE7aT49MDtpLS0pIHtcblx0XHRpZiAoYyA+IDAgJiYgYyA8IG5yLmxlbmd0aCAmJiBjJTM9PTApIG91dCA9IHZpczQuZm9ybWF0TnVtYmVyX2tzZXAgKyBvdXQ7XG5cdFx0b3V0ID0gbnJbaV0gKyBvdXQ7XG5cdFx0YysrO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59O1xudmlzNC5wYXJzZVRTViA9IGZ1bmN0aW9uKHJhdywgYXNPYmplY3QpIHtcblx0dmFyIGxpbmVzID0gcmF3LnNwbGl0KFwiXFxuXCIpO1xuXHR2YXIgZGF0YSA9IFtdO1xuXHR2YXIgcHJvcHM7XG5cdHZhciBsO1xuXHRmb3IgKGw9MDsgbDxsaW5lcy5sZW5ndGg7IGwrKykge1xuXHRcdHZhciBsaW5lID0gbGluZXNbbF07XG5cdFx0aWYgKGxpbmUgIT09ICcnKSB7XG5cdFx0XHQvL2lmIChsaW5lICE9IGxpbmVzW2xpbmVzLmxlbmd0aC0xXSkgbGluZSA9IFN0cmluZ1V0aWwudHJpbShsaW5lKTtcblx0XHRcdGlmIChhc09iamVjdCkge1xuXHRcdFx0XHRpZiAobCA9PT0gMCkgcHJvcHMgPSBsaW5lLnNwbGl0KFwiXFx0XCIpO1xuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR2YXIgb2JqID0geyB9O1xuXHRcdFx0XHRcdHZhciB2YWx1ZXMgPSBsaW5lLnNwbGl0KFwiXFx0XCIpO1xuXHRcdFx0XHRcdGlmICh2YWx1ZXMubGVuZ3RoICE9IHByb3BzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwid3JvbmcgdHN2IGZvcm1hdFwiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKHZhciBwID0gMDsgcCA8IHByb3BzLmxlbmd0aDsgcCsrKSB7XG5cdFx0XHRcdFx0XHRvYmpbJC50cmltKHByb3BzW3BdKV0gPSAkLnRyaW0odmFsdWVzW3BdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGF0YS5wdXNoKG9iaik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRhdGEucHVzaChsaW5lLnNwbGl0KFwiXFx0XCIpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGE7XG59O1xuXG52aXM0Lm1hcCA9IGZ1bmN0aW9uKGFyciwgaWRDb2wpIHtcblx0dmFyIG1hcCA9IHt9O1xuXHRmb3IgKHZhciBpPTA7IGk8YXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0bWFwW2FycltpXVtpZENvbF1dID0gYXJyW2ldO1xuXHR9XG5cdHJldHVybiBtYXA7XG59O1xuXG52aXM0LkRlbGF5ZWRUYXNrID0gZnVuY3Rpb24oLyogZGVsYXksIHNjb3BlLCBmdW5jLCBhcmdzICovKSB7XG5cblx0dmFyIG1lID0gdGhpcztcblxuXHRtZS5pbml0ID0gZnVuY3Rpb24oYXJncykge1xuXHRcdHZhciBtZSA9IHRoaXMsIHRhc2tBcmdzID0gW107XG5cdFx0Zm9yICh2YXIgaSBpbiBhcmdzKSB7XG5cdFx0XHRpZiAoaSA+IDIpIHRhc2tBcmdzLnB1c2goYXJnc1tpXSk7XG5cdFx0fVxuXHRcdG1lLmZ1bmMgPSBhcmdzWzJdO1xuXHRcdG1lLnNjb3BlID0gYXJnc1sxXTtcblx0XHRtZS5hcmdzID0gdGFza0FyZ3M7XG5cdFx0bWUucnVubmluZyA9IHRydWU7XG5cdFx0bWUudGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLnJ1bi5iaW5kKG1lKSwgYXJnc1swXSk7XG5cdH07XG5cblx0bWUucnVuID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHRtZS5mdW5jLmFwcGx5KG1lLnNjb3BlLCBtZS5hcmdzKTtcblx0XHRtZS5ydW5uaW5nID0gZmFsc2U7XG5cdH07XG5cblx0bWUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG5cdFx0dmlzNC5sb2coJ2NhbmNlbGluZyB0aW1lcicsIHRoaXMpO1xuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG5cdFx0dGhpcy5ydW5uaW5nID0gZmFsc2U7XG5cdH07XG5cblx0bWUuaW5pdChhcmd1bWVudHMpO1xufTtcblxudmFyIHZpczRsb2FkaW5nSXRlbSA9IGZ1bmN0aW9uKHVybCwgaWQsIHR5cGUsIGxkcikge1xuXHR0aGlzLnVybCA9IHVybDsgdGhpcy5pZCA9IGlkOyB0aGlzLnR5cGUgPSB0eXBlOyB0aGlzLmxvYWRlciA9IGxkcjtcblxuXHR0aGlzLmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHQkLmdldCh0aGlzLnVybCwgdGhpcy5wcm9jZXNzQ29udGVudC5iaW5kKHRoaXMpKTtcblx0fTtcblxuXHR0aGlzLnByb2Nlc3NDb250ZW50ID0gZnVuY3Rpb24oY29udGVudCkge1xuXHRcdGlmICh0aGlzLnR5cGUgPT0gJ3RzdicpIHRoaXMuZGF0YSA9IHZpczQucGFyc2VUU1YoY29udGVudCwgdHJ1ZSk7XG5cdFx0ZWxzZSBpZiAodGhpcy50eXBlID09ICdqc29uJykgdGhpcy5kYXRhID0gKHR5cGVvZihjb250ZW50KSA9PSBcInN0cmluZ1wiKSA/ICQucGFyc2VKU09OKGNvbnRlbnQpIDogY29udGVudDtcblx0XHRlbHNlIHRoaXMuZGF0YSA9IGNvbnRlbnQ7XG5cdFx0dGhpcy5sb2FkZXIuaXRlbUxvYWRlZCgpO1xuXHR9O1xuXG59O1xuXG4vKlxuICogdXNhZ2U6XG4gKlxuICogdmFyIGxkciA9IG5ldyB2aXM0bG9hZGVyKCk7XG4gKiBsZHIuYWRkKCdkYXRhLnR4dCcsICdpZDEnKTtcbiAqIGxkci5hZGQoJ2RhdGEvZW1wbG95ZXMudHN2JywgJ2VtcGxveWVzJywgJ3RzdicpO1xuICogbGRyLmFkZCgnZGF0YS9saXN0Lmpzb24nLCAnbGlzdCcsICdqc29uJyk7XG4gKiBsZHIubG9hZChmdW5jdGlvbihsZHIpXG4gKlxuICovXG52YXIgdmlzNGxvYWRlciA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLml0ZW1zID0gW107IHRoaXMuYnlJRCA9IHt9O1xuXG5cdHRoaXMuYWRkID0gZnVuY3Rpb24odXJsLCBpZCwgdHlwZSkge1xuXHRcdGlmICh0eXBlID09PSBudWxsKSB0eXBlID0gJ3RleHQnO1xuXHRcdHZhciBpdGVtID0gbmV3IHZpczRsb2FkaW5nSXRlbSh1cmwsIGlkLCB0eXBlLCB0aGlzKTtcblx0XHR0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG5cdFx0dGhpcy5ieUlEW2lkXSA9IGl0ZW07XG5cdH07XG5cblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0dGhpcy5sb2FkZWQgPSAwO1xuXHRcdGZvciAodmFyIGk9MDtpPHRoaXMuaXRlbXMubGVuZ3RoO2krKykge1xuXHRcdFx0dGhpcy5pdGVtc1tpXS5sb2FkKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuaXRlbUxvYWRlZCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMubG9hZGVkKys7XG5cdFx0aWYgKHRoaXMubG9hZGVkID09IHRoaXMuaXRlbXMubGVuZ3RoKSB0aGlzLmNhbGxiYWNrKHRoaXMpO1xuXHR9O1xuXG5cdHRoaXMuZ2V0ID0gZnVuY3Rpb24oaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5ieUlEW2lkXS5kYXRhO1xuXHR9O1xufTtcblxuLypcbiAqIHZpczRjb2xvci5mcm9tSGV4KFwiI0ZGMDAwMFwiKS5zYXR1cmF0aW9uKFwiKi41XCIpLmxpZ2h0bmVzcyguOCkuaHVlKFwiKzEwXCIpLmhleDtcbiAqXG4gKlxuICovXG5cbnZhciB2aXM0Y29sb3IgPSBmdW5jdGlvbihtb2RlKSB7XG5cblx0dGhpcy5oID0gMDsgdGhpcy5zID0gMC41OyB0aGlzLmwgPSAwLjg7IHRoaXMudiA9IDE7IHRoaXMuaSA9IDE7IHRoaXMuciA9IDI1NTsgdGhpcy5nID0gMDsgdGhpcy5iID0gMDtcblx0dGhpcy54ID0gXCIjRkYwMDAwXCI7IHRoaXMudSA9IDA7IHRoaXMuYnIgPSAxOyB0aGlzLksgPSAxLzE4MCpNYXRoLlBJO1xuXHRpZiAobW9kZSA9PSAnaHNpJyB8fCBtb2RlID09ICdoc2wnIHx8IG1vZGUgPT0gJ2hzYicgfHwgbW9kZSA9PSAnaHN2JykgdGhpcy5tb2RlID0gbW9kZTtcblxuXHR0aGlzLmxvZyA9IGZ1bmN0aW9uKHMpIHtcblx0XHRpZiAod2luZG93LmNvbnNvbGUgIT09IG51bGwpIGNvbnNvbGUubG9nKHMpO1xuXHR9O1xuXG5cdHRoaXMuY29zID0gZnVuY3Rpb24oZCkge1xuXHRcdHJldHVybiBNYXRoLmNvcyhkKnRoaXMuSyk7XG5cdH07XG5cblx0dGhpcy50cmltID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcblx0fTtcblxuXHR0aGlzLnNldE1vZGUgPSBmdW5jdGlvbihtb2RlKSB7XG5cdFx0aWYgKG1vZGUgIT0gJ2hzdicgJiYgbW9kZSAhPSAnaHNpJyAmJiBtb2RlICE9ICdoc2wnICYmIG1vZGUgIT0gJ2hzYicpIHtcblx0XHRcdHRoaXMubG9nKFwidW5rbm93biBjb2xvciBtb2RlIFwiK21vZGUpO1xuXHRcdH1cblx0XHR0aGlzLm1vZGUgPSBtb2RlO1xuXHRcdC8vIHJlY2FsYyBoc3gtY29sb3Jcblx0XHR0aGlzLnJnYjJoc3goKTtcblx0fTtcblxuXHR0aGlzLnNldEhleENvbG9yID0gZnVuY3Rpb24oaGV4KSB7XG5cdFx0aWYgKGhleC5jaGFyQXQoMCkgIT0gXCIjXCIpIGhleCA9IFwiI1wiK2hleDtcblx0XHRpZiAoaGV4Lmxlbmd0aCA9PSA0KSBoZXggPSBcIiNcIitoZXguY2hhckF0KDEpK2hleC5jaGFyQXQoMSkraGV4LmNoYXJBdCgyKStoZXguY2hhckF0KDIpK2hleC5jaGFyQXQoMykraGV4LmNoYXJBdCgzKTtcblx0XHRpZiAoaGV4Lmxlbmd0aCAhPSA3KSB0aGlzLmxvZyhcImludmFsaWQgaGV4IGNvbG9yXCIpO1xuXHRcdHRoaXMueCA9IGhleDtcblx0XHR0aGlzLmhleDJpbnQoKTtcblx0XHR0aGlzLmludDJyZ2IoKTtcblx0XHR0aGlzLnJnYjJoc3goKTtcblx0fTtcblxuXHR0aGlzLnNldFJHQkNvbG9yID0gZnVuY3Rpb24ocixnLGIpIHtcblx0XHR0aGlzLnIgPSByOyB0aGlzLmIgPSBiOyB0aGlzLmcgPSBnO1xuXHRcdHRoaXMucmdiMmludCgpO1xuXHRcdHRoaXMuaW50MmhleCgpO1xuXHRcdHRoaXMucmdiMmhzeCgpO1xuXHR9O1xuXG5cdHRoaXMuc2V0SFNWQ29sb3IgPSBmdW5jdGlvbihoLHMsdikge1xuXHRcdGlmICh0aGlzLm1vZGUgIT0gJ2hzdicpIHRoaXMubW9kZSA9ICdoc3YnO1xuXHRcdHRoaXMuaCA9IGg7IHRoaXMucyA9IHRoaXMudHJpbShzKTsgdGhpcy52ID0gdGhpcy50cmltKHYpO1xuXHRcdHRoaXMuaHN2MnJnYigpO1xuXHRcdHRoaXMucmdiMmludCgpO1xuXHRcdHRoaXMuaW50MmhleCgpO1xuXHR9O1xuXG5cdHRoaXMuc2V0SFNMQ29sb3IgPSBmdW5jdGlvbihoLHMsbCkge1xuXHRcdGlmICh0aGlzLm1vZGUgIT0gJ2hzbCcpIHRoaXMubW9kZSA9ICdoc2wnO1xuXHRcdHRoaXMuaCA9IGg7IHRoaXMucyA9IHRoaXMudHJpbShzKTsgdGhpcy5sID0gdGhpcy50cmltKGwpO1xuXHRcdHRoaXMuaHNsMnJnYigpO1xuXHRcdHRoaXMucmdiMmludCgpO1xuXHRcdHRoaXMuaW50MmhleCgpO1xuXHR9O1xuXG5cdHRoaXMuc2V0SFNCQ29sb3IgPSBmdW5jdGlvbihoLHMsYikge1xuXHRcdGlmICh0aGlzLm1vZGUgIT0gJ2hzYicpIHRoaXMubW9kZSA9ICdoc2InO1xuXHRcdHRoaXMuaCA9IGg7IHRoaXMucyA9IHRoaXMudHJpbShzKTsgdGhpcy5iID0gdGhpcy50cmltKGIpO1xuXHRcdHRoaXMuaHNiMnJnYigpO1xuXHRcdHRoaXMucmdiMmludCgpO1xuXHRcdHRoaXMuaW50MmhleCgpO1xuXHR9O1xuXG5cdHRoaXMuc2V0SFNJQ29sb3IgPSBmdW5jdGlvbihoLHMsaSkge1xuXHRcdGlmICh0aGlzLm1vZGUgIT0gJ2hzaScpIHRoaXMubW9kZSA9ICdoc2knO1xuXHRcdHRoaXMuaCA9IGg7IHRoaXMucyA9IHRoaXMudHJpbShzKTsgdGhpcy5pID0gdGhpcy50cmltKGkpO1xuXHRcdHRoaXMuaHNpMnJnYigpO1xuXHRcdHRoaXMucmdiMmludCgpO1xuXHRcdHRoaXMuaW50MmhleCgpO1xuXHR9O1xuXG5cdC8vIHByaXZhdGUgbWV0aG9kc1xuXG5cdHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbigpIHsgfTtcblxuXHR0aGlzLnJnYjJpbnQgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnUgPSB0aGlzLnIgPDwgMTYgfCB0aGlzLmcgPDwgOCB8IHRoaXMuYjtcblx0XHR0aGlzLm9uQ2hhbmdlKCk7XG5cdH07XG5cblx0dGhpcy5pbnQycmdiID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5yID0gdGhpcy51ID4+IDE2O1xuXHRcdHRoaXMuZyA9IHRoaXMudSA+PiA4ICYgMHhGRjtcblx0XHR0aGlzLmIgPSB0aGlzLnUgJiAweEZGO1xuXHR9O1xuXG5cdHRoaXMuaGV4MmludCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudSA9IHBhcnNlSW50KHRoaXMueC5zdWJzdHIoMSksIDE2KTtcblx0XHR0aGlzLm9uQ2hhbmdlKCk7XG5cdH07XG5cblx0dGhpcy5pbnQyaGV4ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHN0ciA9IFwiMDAwMDAwXCIgKyB0aGlzLnUudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdFx0dGhpcy54ID0gXCIjXCIgKyBzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSA2KTtcblx0XHR0aGlzLm9uQ2hhbmdlKCk7XG5cdH07XG5cblx0dGhpcy5pbnQycmdiID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5yID0gdGhpcy51ID4+IDE2O1xuXHRcdHRoaXMuZyA9IHRoaXMudSA+PiA4ICYgMHhGRjtcblx0XHR0aGlzLmIgPSB0aGlzLnUgJiAweEZGO1xuXHR9O1xuXG5cdHRoaXMuaHN4MnJnYiA9IGZ1bmN0aW9uKCkge1xuXHRcdHN3aXRjaCAodGhpcy5tb2RlKSB7XG5cdFx0XHRjYXNlICdoc3YnOiB0aGlzLmhzdjJyZ2IoKTsgYnJlYWs7XG5cdFx0XHRjYXNlICdoc2knOiB0aGlzLmhzaTJyZ2IoKTsgYnJlYWs7XG5cdFx0XHRjYXNlICdoc2wnOiB0aGlzLmhzbDJyZ2IoKTsgYnJlYWs7XG5cdFx0XHRjYXNlICdoc2InOiB0aGlzLmhzYjJyZ2IoKTsgYnJlYWs7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMucmdiMmhzeCA9IGZ1bmN0aW9uKCkge1xuXHRcdHN3aXRjaCAodGhpcy5tb2RlKSB7XG5cdFx0XHRjYXNlICdoc3YnOiB0aGlzLnJnYjJoc3YoKTsgYnJlYWs7XG5cdFx0XHRjYXNlICdoc2knOiB0aGlzLnJnYjJoc2koKTsgYnJlYWs7XG5cdFx0XHRjYXNlICdoc2wnOiB0aGlzLnJnYjJoc2woKTsgYnJlYWs7XG5cdFx0XHRjYXNlICdoc2InOiB0aGlzLnJnYjJoc2IoKTsgYnJlYWs7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuaHVlID0gZnVuY3Rpb24oaCkge1xuXHRcdHRoaXMuX2V2YWx1YXRlKGgsIFwiaFwiKTtcblx0XHR0aGlzLmhzeDJyZ2IoKTtcblx0XHR0aGlzLnJnYjJpbnQoKTtcblx0XHR0aGlzLmludDJoZXgoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHR0aGlzLnNhdHVyYXRpb24gPSBmdW5jdGlvbihzKSB7XG5cdFx0dGhpcy5fZXZhbHVhdGUocywgXCJzXCIpO1xuXHRcdHRoaXMuaHN4MnJnYigpO1xuXHRcdHRoaXMucmdiMmludCgpO1xuXHRcdHRoaXMuaW50MmhleCgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdHRoaXMubGlnaHRuZXNzID0gZnVuY3Rpb24obCkge1xuXHRcdGlmICh0aGlzLm1vZGUgIT0gXCJoc2xcIikgeyB0aGlzLmxvZyhcIldBUk5JTkc6IGxpZ2h0bmVzcyBwcm9wZXJ0eSBub3QgYXZhaWxhYmxlIGluIFwiK3RoaXMubW9kZStcIiBtb2RlXCIpOyByZXR1cm47IH1cblx0XHR0aGlzLl9ldmFsdWF0ZShsLCBcImxcIik7XG5cdFx0dGhpcy5oc3gycmdiKCk7XG5cdFx0dGhpcy5yZ2IyaW50KCk7XG5cdFx0dGhpcy5pbnQyaGV4KCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0dGhpcy5icmlnaHRuZXNzID0gZnVuY3Rpb24oYnIpIHtcblx0XHRpZiAodGhpcy5tb2RlICE9IFwiaHNiXCIpIHsgdGhpcy5sb2coXCJXQVJOSU5HOiBicmlnaHRuZXNzIHByb3BlcnR5IG5vdCBhdmFpbGFibGUgaW4gXCIrdGhpcy5tb2RlK1wiIG1vZGVcIik7IHJldHVybjsgfVxuXHRcdHRoaXMuX2V2YWx1YXRlKGJyLCBcImJyXCIpO1xuXHRcdHRoaXMuaHN4MnJnYigpO1xuXHRcdHRoaXMucmdiMmludCgpO1xuXHRcdHRoaXMuaW50MmhleCgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdHRoaXMudmFsdWUgPSBmdW5jdGlvbih2KSB7XG5cdFx0aWYgKHRoaXMubW9kZSAhPSBcImhzdlwiKSB7IHRoaXMubG9nKFwiV0FSTklORzogdmFsdWUgcHJvcGVydHkgbm90IGF2YWlsYWJsZSBpbiBcIit0aGlzLm1vZGUrXCIgbW9kZVwiKTsgcmV0dXJuOyB9XG5cdFx0dGhpcy5fZXZhbHVhdGUodiwgXCJ2XCIpO1xuXHRcdHRoaXMuaHN4MnJnYigpO1xuXHRcdHRoaXMucmdiMmludCgpO1xuXHRcdHRoaXMuaW50MmhleCgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdHRoaXMuaW50ZW5zaXR5ID0gZnVuY3Rpb24oaSkge1xuXHRcdGlmICh0aGlzLm1vZGUgIT0gXCJoc2lcIikgeyB0aGlzLmxvZyhcIldBUk5JTkc6IGludGVuc2l0eSBwcm9wZXJ0eSBub3QgYXZhaWxhYmxlIGluIFwiK3RoaXMubW9kZStcIiBtb2RlXCIpOyByZXR1cm47IH1cblx0XHR0aGlzLl9ldmFsdWF0ZShpLCBcImlcIik7XG5cdFx0dGhpcy5oc3gycmdiKCk7XG5cdFx0dGhpcy5yZ2IyaW50KCk7XG5cdFx0dGhpcy5pbnQyaGV4KCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0dGhpcy5fZXZhbHVhdGUgPSBmdW5jdGlvbih2YWwsIHByb3BOYW1lKSB7XG5cdFx0aWYgKHR5cGVvZih2YWwpID09IFwic3RyaW5nXCIpIHtcblx0XHRcdGlmICh2YWwuY2hhckF0KDApID09IFwiK1wiICYmICFpc05hTih2YWwuc3Vic3RyKDEpKSkge1xuXHRcdFx0XHR0aGlzW3Byb3BOYW1lXSA9IE51bWJlcih0aGlzW3Byb3BOYW1lXSkgKyBOdW1iZXIodmFsLnN1YnN0cigxKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHZhbC5jaGFyQXQoMCkgPT0gXCItXCIgJiYgIWlzTmFOKHZhbC5zdWJzdHIoMSkpKSB7XG5cdFx0XHRcdHRoaXNbcHJvcE5hbWVdID0gdGhpc1twcm9wTmFtZV0gLSBOdW1iZXIodmFsLnN1YnN0cigxKSk7XG5cdFx0XHR9IGlmICh2YWwuY2hhckF0KDApID09IFwiKlwiICYmICFpc05hTih2YWwuc3Vic3RyKDEpKSkge1xuXHRcdFx0XHR0aGlzW3Byb3BOYW1lXSA9IHRoaXNbcHJvcE5hbWVdICogTnVtYmVyKHZhbC5zdWJzdHIoMSkpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWwuY2hhckF0KDApID09IFwiL1wiICYmICFpc05hTih2YWwuc3Vic3RyKDEpKSkge1xuXHRcdFx0XHR0aGlzW3Byb3BOYW1lXSA9IHRoaXNbcHJvcE5hbWVdIC8gTnVtYmVyKHZhbC5zdWJzdHIoMSkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIWlzTmFOKHZhbCkpIHtcblx0XHRcdHRoaXNbcHJvcE5hbWVdID0gTnVtYmVyKHZhbCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMucmdiID0gZnVuY3Rpb24oKSB7IHJldHVybiBbdGhpcy5yLHRoaXMuZyx0aGlzLmJdOyB9O1xuXHR0aGlzLmhzbCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW3RoaXMuaCx0aGlzLnMsdGhpcy5sXTsgfTtcblxuXHQvLyBoc3YgbWFnaWNcblxuXHR0aGlzLnJnYjJoc3YgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbWluID0gTWF0aC5taW4oTWF0aC5taW4odGhpcy5yLCB0aGlzLmcpLCB0aGlzLmIpLFxuXHRcdFx0bWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgodGhpcy5yLCB0aGlzLmcpLCB0aGlzLmIpLFxuXHRcdFx0ZGVsdGEgPSBtYXggLSBtaW47XG5cblx0XHR0aGlzLnYgPSBtYXgvMjU1O1xuXHRcdHRoaXMucyA9IGRlbHRhIC8gbWF4O1xuXHRcdGlmICh0aGlzLnMgPT09IDApIHtcblx0XHRcdHRoaXMuaCA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuciA9PSBtYXgpIHRoaXMuaCA9ICh0aGlzLmcgLSB0aGlzLmIpIC8gZGVsdGE7XG5cdFx0XHRpZiAodGhpcy5nID09IG1heCkgdGhpcy5oID0gMisodGhpcy5iIC0gdGhpcy5yKSAvIGRlbHRhO1xuXHRcdFx0aWYgKHRoaXMuYiA9PSBtYXgpIHRoaXMuaCA9IDQrKHRoaXMuciAtIHRoaXMuZykgLyBkZWx0YTtcblx0XHRcdHRoaXMuaCAqPSA2MDtcblx0XHRcdGlmICh0aGlzLmggPCAwKSB0aGlzLmggKz0gMzYwO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLmhzdjJyZ2IgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaCA9IHRoaXMuaCwgcyA9IHRoaXMucywgX3JnYiA9IHRoaXMuX3JnYiwgdiA9IHRoaXMudioyNTUsIGksIGYsIHAsIHEsIHQ7XG5cblx0XHRpZiAodGhpcy5zID09PSAwICYmIGlzTmFOKGgpKSB7XG5cdFx0XHR0aGlzLnIgPSB0aGlzLmcgPSB0aGlzLmIgPSB2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoaCA9PSAzNjApIGggPSAwO1xuXHRcdFx0aCAvPSA2MDtcblx0XHRcdGkgPSBNYXRoLmZsb29yKGgpO1xuXHRcdFx0ZiA9IGggLSBpO1xuXHRcdFx0cCA9IHYgKiAoMSAtIHMpO1xuXHRcdFx0cSA9IHYgKiAoMSAtIHMgKiBmKTtcblx0XHRcdHQgPSB2ICogKDEgLSBzICogKDEgLSBmKSk7XG5cblx0XHRcdHN3aXRjaCAoaSkge1xuXHRcdFx0XHRjYXNlIDA6IF9yZ2IodiwgdCwgcCk7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDE6IF9yZ2IocSwgdiwgcCk7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI6IF9yZ2IocCwgdiwgdCk7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDM6IF9yZ2IocCwgcSwgdik7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQ6IF9yZ2IodCwgcCwgdik7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDU6IF9yZ2IodiwgcCwgcSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuX3JnYiA9IGZ1bmN0aW9uKHIsZyxiKSB7XG5cdFx0dGhpcy5yID0gcjsgdGhpcy5nID0gZzsgdGhpcy5iID0gYjtcblx0fTtcblx0Ly8gaHNsIG1hZ2ljXG5cblx0dGhpcy5yZ2IyaHNsID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHIgPSB0aGlzLnIgLyAyNTUsXG5cdFx0XHRnID0gdGhpcy5nIC8gMjU1LFxuXHRcdFx0YiA9IHRoaXMuYiAvIDI1NSxcblx0XHRcdG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKSxcblx0XHRcdG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblxuXHRcdHRoaXMubCA9IChtYXggKyBtaW4pIC8gMjtcblx0XHRpZiAobWF4ID09IG1pbikge1xuXHRcdFx0dGhpcy5zID0gMDtcblx0XHRcdHRoaXMuaCA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMubCA8IDAuNSkge1xuXHRcdFx0XHR0aGlzLnMgPSAobWF4IC0gbWluKSAvIChtYXggKyBtaW4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zID0gKG1heCAtIG1pbikgLyAoMiAtIG1heCAtIG1pbik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChyID09IG1heCkgdGhpcy5oID0gKGcgLSBiKSAvIChtYXggLSBtaW4pO1xuXHRcdGVsc2UgaWYgKGcgPT0gbWF4KSB0aGlzLmggPSAyICsgKGIgLSByKSAvIChtYXggLSBtaW4pO1xuXHRcdGVsc2UgaWYgKGIgPT0gbWF4KSB0aGlzLmggPSA0ICsgKHIgLSBnKSAvIChtYXggLSBtaW4pO1xuXG5cdFx0dGhpcy5oICo9IDYwO1xuXHRcdGlmICh0aGlzLmggPCAwKSB0aGlzLmggKz0gMzYwO1xuXHR9O1xuXG5cdHRoaXMuaHNsMnJnYiA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLnMgPT09IDApIHtcblx0XHRcdHRoaXMuciA9IHRoaXMuZyA9IHRoaXMuYiA9IHRoaXMubCoyNTU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB0MSwgdDIsIHQzID0gWzAsMCwwXSwgYyA9IFswLDAsMF07XG5cdFx0XHRpZiAodGhpcy5sIDwgMC41KSB7XG5cdFx0XHRcdHQyID0gdGhpcy5sICogKDEgKyB0aGlzLnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dDIgPSB0aGlzLmwgKyB0aGlzLnMgLSB0aGlzLmwgKiB0aGlzLnM7XG5cdFx0XHR9XG5cdFx0XHR0MSA9IDIgKiB0aGlzLmwgLSB0Mjtcblx0XHRcdHZhciBoID0gdGhpcy5oIC8gMzYwO1xuXHRcdFx0dDNbMF0gPSBoICsgMSAvIDM7XG5cdFx0XHR0M1sxXSA9IGg7XG5cdFx0XHR0M1syXSA9IGggLSAxIC8gMztcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRcdGlmICh0M1tpXSA8IDApIHQzW2ldICs9IDE7XG5cdFx0XHRcdGlmICh0M1tpXSA+IDEpIHQzW2ldIC09IDE7XG5cblx0XHRcdFx0aWYgKDYgKiB0M1tpXSA8IDEpIGNbaV0gPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0M1tpXTtcblx0XHRcdFx0ZWxzZSBpZiAoMiAqIHQzW2ldIDwgMSkgY1tpXSA9IHQyO1xuXHRcdFx0XHRlbHNlIGlmICgzICogdDNbaV0gPCAyKSBjW2ldID0gdDEgKyAodDIgLSB0MSkgKiAoKDIgLyAzKSAtIHQzW2ldKSAqIDY7XG5cdFx0XHRcdGVsc2UgY1tpXSA9IHQxO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5yID0gY1swXSAqIDI1NTtcblx0XHRcdHRoaXMuZyA9IGNbMV0gKiAyNTU7XG5cdFx0XHR0aGlzLmIgPSBjWzJdICogMjU1O1xuXHRcdH1cblx0fTtcblxuXHQvLyBoc2IgbWFnaWNcblxuXHR0aGlzLnJnYjJoc2IgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnJnYjJoc2woKTtcblx0XHR0aGlzLmJyID0gdGhpcy5fcmdiTHVtaW5hbmNlKCk7XG5cdH07XG5cblx0dGhpcy5fcmdiTHVtaW5hbmNlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICgwLjIxMjYgKiB0aGlzLnIgKyAwLjcxNTIgKiB0aGlzLmcgKyAwLjA3MjIgKiB0aGlzLmIpIC8gMjU1O1xuXHR9O1xuXG5cdHRoaXMuaHNiMnJnYiA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0cmVzaG9sZCA9IDAuMDAxO1xuXHRcdHZhciBsX21pbiA9IDAsIGxfbWF4ID0gMSwgbF9lc3QgPSAwLjU7XG5cdFx0dmFyIGN1cnJlbnRfYnJpZ2h0bmVzcztcblxuXHRcdC8vIGZpcnN0IHRyeVxuXHRcdHRoaXMubCA9IGxfZXN0O1xuXHRcdHRoaXMuaHNsMnJnYigpO1xuXHRcdGN1cnJlbnRfYnJpZ2h0bmVzcyA9IHRoaXMuX3JnYkx1bWluYW5jZSgpO1xuXHRcdHZhciB0cnlzID0gMDtcblxuXHRcdHdoaWxlIChNYXRoLmFicyhjdXJyZW50X2JyaWdodG5lc3MgLSB0aGlzLmJyKSA+IHRyZXNob2xkICYmIHRyeXMgPCAxMDApIHtcblxuXHRcdFx0aWYgKGN1cnJlbnRfYnJpZ2h0bmVzcyA+IHRoaXMuYnIpIHtcblx0XHRcdFx0Ly8gdG9vIGJyaWdodCwgbmV4dCB0cnkgZGFya2VyXG5cdFx0XHRcdGxfbWF4ID0gbF9lc3Q7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB0b28gZGFyaywgbmV4dCB0cnkgYnJpZ2h0ZXJcblx0XHRcdFx0bF9taW4gPSBsX2VzdDtcblx0XHRcdH1cblx0XHRcdGxfZXN0ID0gKGxfbWluICsgbF9tYXgpIC8gMjtcblx0XHRcdHRoaXMubCA9IGxfZXN0O1xuXHRcdFx0dGhpcy5oc2wycmdiKCk7XG5cdFx0XHRjdXJyZW50X2JyaWdodG5lc3MgPSB0aGlzLl9yZ2JMdW1pbmFuY2UoKTtcblx0XHRcdHRyeXMrKztcblx0XHR9XG5cdFx0dGhpcy5iciA9IGN1cnJlbnRfYnJpZ2h0bmVzcztcblx0fTtcblxuXHQvLyBoc2kgbWFnaWNcblxuXHR0aGlzLnJnYjJoc2kgPSBmdW5jdGlvbigpIHsgLy8gaHR0cDovL2ZvdXJpZXIuZW5nLmhtYy5lZHUvZTE2MS9sZWN0dXJlcy9jb2xvcnByb2Nlc3Npbmcvbm9kZTMuaHRtbFxuXHRcdHZhciBtaW4sIHIgPSB0aGlzLnIsIGcgPSB0aGlzLmcsIGIgPSB0aGlzLmIsXG5cdFx0XHRtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYiksXG5cdFx0XHRzdW0gPSByICsgZyArIGIsXG5cdFx0XHRkZWx0YSA9IG1heCAtIG1pbjtcblxuXHRcdHIgPSByIC8gc3VtO1xuXHRcdGcgPSBnIC8gc3VtO1xuXHRcdGIgPSBiIC8gc3VtO1xuXG5cdFx0bWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHRcdC8vdHJhY2UoJ3JnYiA9ICcscixnLGIsJyBtaW4gPSAnICsgbWluKTtcblxuXHRcdHRoaXMuaSA9IChyICsgZyArIGIpIC8gNzY1O1xuXHRcdHRoaXMuaCA9IHRoaXMuYWNvcygociAtIDAuNSpnIC0gMC41KmIpIC8gTWF0aC5zcXJ0KCAociAtIGcpICogKHIgLSBnKSArIChyIC0gYikgKiAoZyAtIGIpKSApO1xuXHRcdHRoaXMucyA9IDEgLSAzICogbWluO1xuXG5cdFx0aWYgKGIgPiBnKSB0aGlzLmggPSAzNjAgLSB0aGlzLmg7XG5cdH07XG5cblx0dGhpcy5oc2kycmdiID0gZnVuY3Rpb24oKSB7IC8vIGh0dHA6Ly9mb3VyaWVyLmVuZy5obWMuZWR1L2UxNjEvbGVjdHVyZXMvY29sb3Jwcm9jZXNzaW5nL25vZGU0Lmh0bWxcblx0XHR2YXIgaCA9IHRoaXMuaCxpPXRoaXMuaSxzPXRoaXMucywgciwgYiwgZywgY29zID0gdGhpcy5jb3M7XG5cblx0XHRpZiAoaCA8PSAxMjApIHtcblx0XHRcdGIgPSAoMSAtIHMpIC8gMztcblx0XHRcdHIgPSAoMSArIChzICogY29zKGgpKSAvIGNvcyg2MCAtIGgpKSAvIDM7XG5cdFx0XHRnID0gMSAtIChiICsgcik7XG5cdFx0fSBlbHNlIGlmIChoIDw9IDI0MCkge1xuXHRcdFx0aCAtPSAxMjA7XG5cdFx0XHRyID0gKDEgLSBzKSAvIDM7XG5cdFx0XHRnID0gKDEgKyAocyAqIGNvcyhoKSkgLyBjb3MoNjAgLSBoKSkgLyAzO1xuXHRcdFx0YiA9IDEgLSAociArIGcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoIC09IDI0MDtcblx0XHRcdGcgPSAoMSAtIHMpIC8gMztcblx0XHRcdGIgPSAoMSArIChzICogY29zKGgpKSAvIGNvcyg2MCAtIGgpKSAvIDM7XG5cdFx0XHRyID0gMSAtIChnICsgYik7XG5cdFx0fVxuXHRcdHIgPSBNYXRoLm1pbigyNTUsIHIqaSozKjI1NSk7XG5cdFx0ZyA9IE1hdGgubWluKDI1NSwgZyppKjMqMjU1KTtcblx0XHRiID0gTWF0aC5taW4oMjU1LCBiKmkqMyoyNTUpO1xuXHR9O1xufTtcblxuLy8gc3RhdGljIGNvbnN0cnVjdG9yc1xuXG52aXM0Y29sb3IuZnJvbUhleCA9IGZ1bmN0aW9uKGNvbG9yLCBtb2RlKSB7XG5cdGlmIChtb2RlID09IG51bGwpIG1vZGUgPSAnaHNsJztcblx0dmFyIGMgPSBuZXcgdmlzNGNvbG9yKG1vZGUpO1xuXHRjLnNldEhleENvbG9yKGNvbG9yKTtcblx0cmV0dXJuIGM7XG59O1xuXG52aXM0Y29sb3IuZnJvbVJHQiA9IGZ1bmN0aW9uKHIsIGcsIGIsIG1vZGUpIHtcblx0aWYgKG1vZGUgPT09IG51bGwpIG1vZGUgPSAnaHNsJztcblx0dmFyIGMgPSBuZXcgdmlzNGNvbG9yKG1vZGUpO1xuXHRjLnNldFJHQm9sb3IocixnLGIpO1xuXHRyZXR1cm4gYztcbn07XG5cbnZpczRjb2xvci5mcm9tSFNWID0gZnVuY3Rpb24oaCxzLHYsIG1vZGUpIHtcblx0aWYgKG1vZGUgPT09IG51bGwpIG1vZGUgPSAnaHNsJztcblx0dmFyIGMgPSBuZXcgdmlzNGNvbG9yKG1vZGUpO1xuXHRjLnNldEhTVkNvbG9yKGgscyx2KTtcblx0cmV0dXJuIGM7XG59O1xuXG52aXM0Y29sb3IuZnJvbUhTTCA9IGZ1bmN0aW9uKGgscyxsLCBtb2RlKSB7XG5cdGlmIChtb2RlID09PSBudWxsKSBtb2RlID0gJ2hzbCc7XG5cdHZhciBjID0gbmV3IHZpczRjb2xvcihtb2RlKTtcblx0Yy5zZXRIU0xDb2xvcihoLHMsbCk7XG5cdHJldHVybiBjO1xufTtcblxudmlzNGNvbG9yLmZyb21IU0IgPSBmdW5jdGlvbihoLHMsYiwgbW9kZSkge1xuXHRpZiAobW9kZSA9PT0gbnVsbCkgbW9kZSA9ICdoc2wnO1xuXHR2YXIgYyA9IG5ldyB2aXM0Y29sb3IobW9kZSk7XG5cdGMuc2V0SFNCQ29sb3IoaCxzLGIpO1xuXHRyZXR1cm4gYztcbn07XG5cbnZpczRjb2xvci5mcm9tSFNJID0gZnVuY3Rpb24oaCxzLGksIG1vZGUpIHtcblx0aWYgKG1vZGUgPT09IG51bGwpIG1vZGUgPSAnaHNsJztcblx0dmFyIGMgPSBuZXcgdmlzNGNvbG9yKG1vZGUpO1xuXHRjLnNldEhTSUNvbG9yKGgscyxpKTtcblx0cmV0dXJuIGM7XG59O1xuXG4vKiFcbiAqIEJ1YmJsZVRyZWUgMi4wLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEgR3JlZ29yIEFpc2NoIChodHRwOi8vZHJpdmVuLWJ5LWRhdGEubmV0KVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICovXG4vKmpzaGludCB1bmRlZjogdHJ1ZSwgYnJvd3Nlcjp0cnVlLCBqcXVlcnk6IHRydWUsIGRldmVsOiB0cnVlLCBzbWFydHRhYnM6IHRydWUgKi9cbi8qZ2xvYmFsIFJhcGhhZWwsIFRXRUVOLCB2aXM0LCB2aXM0Y29sb3IsIHZpczRsb2FkZXIgKi9cblxudmFyIEJ1YmJsZVRyZWUgPSBmdW5jdGlvbihjb25maWcsIG9uSG92ZXIsIG9uVW5Ib3Zlcikge1xuXG5cdHZhciBoaXN0b3J5ID0gJC5oaXN0b3J5IHx8IHtcbiAgICBjYWxsYmFjazogbnVsbCxcbiAgICBvcHRpb25zOiBudWxsLFxuICAgIGluaXQ6IGZ1bmN0aW9uKGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgdGhpcy5sb2FkKCcvJyk7XG4gICAgfSxcbiAgICBsb2FkOiBmdW5jdGlvbih1cmwpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sodXJsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cblx0dmFyIG1lID0gdGhpcztcblxuXHRtZS52ZXJzaW9uID0gXCIyLjAuMlwiO1xuXG5cdG1lLiRjb250YWluZXIgPSAkKGNvbmZpZy5jb250YWluZXIpLmVtcHR5KCk7XG5cblx0bWUuY29uZmlnID0gJC5leHRlbmQoe1xuICAgICAgICAvLyBDbGVhciBjb2xvcnMgZm9yIGFsbCBub2RlcyAoaXMgZG9pbmcgYmVmb3JlIGF1dG9Db2xvcnMhKVxuICAgICAgICBjbGVhckNvbG9yczogZmFsc2UsXG4gICAgICAgIC8vIElmIG5vZGUgaGFzIG5vIGNvbG9yIC0gYXV0b21hdGljYWxseSBhc3NpZ24gaXRcbiAgICAgICAgYXV0b0NvbG9yczogZmFsc2UsXG5cdFx0Ly8gdGhpcyBpcyB3aGVyZSB3ZSBsb29rIGZvciB0aGUgaWNvbnNcblx0XHRyb290UGF0aDogJycsXG5cdFx0Ly8gc2hvdyBmdWxsIGxhYmVscyBpbnNpZGUgYnViYmxlcyB3aXRoIG1pbiByYWRpdXMgb2YgNDBweFxuXHRcdG1pblJhZGl1c0xhYmVsczogNDAsXG5cdFx0Ly8ganVzdCBzaG93IHRoZSBhbW91bnRzIGluc2lkZSBidWJibGVzIHdpdGggbWluIHJhZGl1cyBvZiAyMHB4XG5cdFx0bWluUmFkaXVzQW1vdW50czogMjAsXG5cdFx0Ly8gaGlkZSBsYWJlbHMgYXQgYWxsIGZvciBidWJibGVzIHdpdGggbWluIHJhZGl1cyBvZiAwIChkZWFjdGl2YXRlZCBieSBkZWYpXG5cdFx0bWluUmFkaXVzSGlkZUxhYmVsczogMCxcblx0XHQvLyB0cmltIGxhYmVscyBhZnRlciA1MCBjaGFyYWN0ZXJzXG5cdFx0Y3V0TGFiZWxzQXQ6IDUwLFxuXG5cdCAgICBzdHJva2VPcHQ6IHtcblx0ICAgIFx0c3Ryb2tlOiAnIzg4OCcsXG5cdCAgICBcdCdzdHJva2UtZGFzaGFycmF5JzogXCItXCJcblx0ICAgIH1cblx0fSwgY29uZmlnKTtcblxuXHQvKlxuXHQgKiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGhvdmVycyBhIGJ1YmJsZVxuXHQgKi9cblx0Ly9tZS5vbkhvdmVyID0gb25Ib3ZlcjtcblxuXHQvL21lLm9uVW5Ib3ZlciA9IG9uVW5Ib3Zlcjtcblx0bWUudG9vbHRpcCA9IGNvbmZpZy50b29sdGlwQ2FsbGJhY2sgPyBjb25maWcudG9vbHRpcENhbGxiYWNrIDogZnVuY3Rpb24oKSB7fTtcblx0aWYgKGNvbmZpZy50b29sdGlwKSBtZS50b29sdGlwID0gY29uZmlnLnRvb2x0aXA7XG5cblx0Lypcblx0ICogc3R5bGVzaGVldCBKU09OIHRoYXQgY29udGFpbnMgY29sb3JzIGFuZCBpY29ucyBmb3IgdGhlIGJ1YmJsZXNcblx0ICovXG5cdG1lLnN0eWxlID0gY29uZmlnLmJ1YmJsZVN0eWxlcztcblxuXHRtZS5ucyA9IEJ1YmJsZVRyZWU7XG5cblx0Lypcblx0ICogaGFzaG1hcCBvZiBhbGwgbm9kZXMgYnkgdXJsIHRva2VuXG5cdCAqL1xuXHRtZS5ub2Rlc0J5VXJsVG9rZW4gPSB7fTtcblxuXHQvKlxuXHQgKiBmbGF0IGFycmF5IG9mIGFsbCBub2Rlc1xuXHQgKi9cblx0bWUubm9kZUxpc3QgPSBbXTtcblxuXHRtZS5pY29uc0J5VXJsVG9rZW4gPSB7fTtcblxuXHRtZS5nbG9iYWxOb2RlQ291bnRlciA9IDA7XG5cblx0bWUuZGlzcGxheU9iamVjdHMgPSBbXTtcblxuXHRtZS5idWJibGVTY2FsZSA9IDE7XG5cblx0bWUuZ2xvYlJvdGF0aW9uID0gMDtcblxuXHRtZS5jdXJyZW50WWVhciA9IGNvbmZpZy5pbml0WWVhcjtcblxuXHRtZS5jdXJyZW50Q2VudGVyID0gdW5kZWZpbmVkO1xuXG5cdG1lLmN1cnJlbnRUcmFuc2l0aW9uID0gdW5kZWZpbmVkO1xuXG5cdG1lLmJhc2VVcmwgPSAnJztcblxuXHQvKlxuXHQgKiBAcHVibGljIGxvYWREYXRhXG5cdCAqL1xuXHRtZS5sb2FkRGF0YSA9IGZ1bmN0aW9uKHVybCkge1xuXHRcdCQuYWpheCh7XG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdGRhdGFUeXBlOiAnanNvbicsXG5cdFx0XHRzdWNjZXNzOiB0aGlzLnNldERhdGEuYmluZCh0aGlzKVxuXHRcdH0pO1xuXHR9O1xuXG5cdC8qXG5cdCAqIGlzIGVpdGhlciBjYWxsZWQgZGlyZWN0bHkgb3IgYnkgJC5hamF4IHdoZW4gZGF0YSBqc29uIGZpbGUgaXMgbG9hZGVkXG5cdCAqL1xuXHRtZS5zZXREYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0aWYgKCFkYXRhKSBkYXRhID0gbWUuY29uZmlnLmRhdGE7IC8vIElFIGZpeFxuXHRcdG1lLmluaXREYXRhKGRhdGEpO1xuXHRcdG1lLmluaXRQYXBlcigpO1xuXHRcdG1lLmluaXRCdWJibGVzKCk7XG5cdFx0bWUuaW5pdFR3ZWVuKCk7XG5cdFx0bWUuaW5pdEhpc3RvcnkoKTtcblx0fTtcblxuXHQvKlxuXHQgKiBpbml0aWFsaXplcyB0aGUgZGF0YSB0cmVlLCBhZGRzIGxpbmtzIHRvIHBhcmVudCBub2RlIGZvciBlYXNpZXIgdHJhdmVyc2FsIGV0Y1xuXHQgKi9cblx0bWUuaW5pdERhdGEgPSBmdW5jdGlvbihyb290KSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHRyb290LmxldmVsID0gMDtcblx0XHRtZS5wcmVwcm9jZXNzRGF0YShyb290KTtcblx0XHRtZS50cmF2ZXJzZShyb290LCAwKTtcblx0XHRtZS50cmVlUm9vdCA9IHJvb3Q7XG5cdH07XG5cblx0bWUucHJlcHJvY2Vzc0RhdGEgPSBmdW5jdGlvbihyb290KSB7XG5cdFx0dmFyIG1lID0gdGhpcywgbWF4Tm9kZXMgPSBtZS5jb25maWcubWF4Tm9kZXNQZXJMZXZlbDtcblx0XHRpZiAobWF4Tm9kZXMpIHtcblx0XHRcdGlmIChtYXhOb2RlcyA8IHJvb3QuY2hpbGRyZW4ubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHRha2UgdGhlIHNtYWxsZXN0IG5vZGVzXG5cdFx0XHRcdC8vIHNvcnQgY2hpbGRyZW5cblx0XHRcdFx0dmFyIHRtcCA9IG1lLnNvcnRDaGlsZHJlbihyb290LmNoaWxkcmVuKTtcblx0XHRcdFx0dG1wLnJldmVyc2UoKTtcblx0XHRcdFx0dmFyIGtlZXAgPSBbXSwgbW92ZSA9IFtdLCBtb3ZlQW1vdW50ID0gMCwgYnJlYWtkb3duO1xuXHRcdFx0XHRmb3IgKHZhciBpIGluIHJvb3QuY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRpZiAoaSA8IG1heE5vZGVzKSB7XG5cdFx0XHRcdFx0XHRrZWVwLnB1c2gocm9vdC5jaGlsZHJlbltpXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG1vdmUucHVzaChyb290LmNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHRcdG1vdmVBbW91bnQgKz0gTWF0aC5tYXgoMCwgcm9vdC5jaGlsZHJlbltpXS5hbW91bnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyb290LmNoaWxkcmVuID0ga2VlcDtcblx0XHRcdFx0cm9vdC5jaGlsZHJlbi5wdXNoKHtcblx0XHRcdFx0XHQnbGFiZWwnOiAnTW9yZScsXG5cdFx0XHRcdFx0J25hbWUnOiAnbW9yZScsXG5cdFx0XHRcdFx0J2Ftb3VudCc6IG1vdmVBbW91bnQsXG5cdFx0XHRcdFx0J2NoaWxkcmVuJzogbW92ZSxcblx0XHRcdFx0XHQnYnJlYWtkb3duJzogYnJlYWtkb3duXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvKlxuXHQgKiB1c2VkIGZvciByZWN1cnNpdmUgdHJlZSB0cmF2ZXJzYWxcblx0ICovXG5cdG1lLnRyYXZlcnNlID0gZnVuY3Rpb24obm9kZSwgaW5kZXgpIHtcblx0XHR2YXIgYywgY2hpbGQsIHBjLCBtZSA9IHRoaXMsIHVybFRva2VuU291cmNlLCBzdHlsZXMgPSBtZS5jb25maWcuYnViYmxlU3R5bGVzO1xuXG5cdFx0Ly9pZiAobm9kZS5hbW91bnQgPD0gMCkgcmV0dXJuO1xuXG5cdFx0aWYgKCFub2RlLmNoaWxkcmVuKSBub2RlLmNoaWxkcmVuID0gW107XG5cblx0XHQvLyBzdG9yZSBub2RlIGluIGZsYXQgbm9kZSBsaXN0XG5cdFx0bWUubm9kZUxpc3QucHVzaChub2RlKTtcblxuXHRcdG5vZGUuZmFtb3VudCA9IG1lLm5zLlV0aWxzLmZvcm1hdE51bWJlcihub2RlLmFtb3VudCk7XG5cdFx0aWYgKG5vZGUucGFyZW50KSBub2RlLmxldmVsID0gbm9kZS5wYXJlbnQubGV2ZWwgKyAxO1xuXG5cdFx0aWYgKG1lLmNvbmZpZy5jbGVhckNvbG9ycyA9PT0gdHJ1ZSkgbm9kZS5jb2xvciA9IGZhbHNlO1xuXG5cdFx0aWYgKHN0eWxlcykge1xuXG5cdFx0XHR2YXIgcHJvcHMgPSBbJ2NvbG9yJywgJ3Nob3J0TGFiZWwnLCAnaWNvbiddO1xuXG5cdFx0XHQkLmVhY2gocHJvcHMsIGZ1bmN0aW9uIChwLCBwcm9wKSB7XG5cdFx0XHRcdGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkoJ2lkJykgJiYgc3R5bGVzLmlkLmhhc093blByb3BlcnR5KG5vZGUuaWQpICYmIHN0eWxlcy5pZFtub2RlLmlkXS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXHRcdFx0XHRcdC8vIHVzZSBjb2xvciBieSBpZFxuXHRcdFx0XHRcdG5vZGVbcHJvcF0gPSBzdHlsZXMuaWRbbm9kZS5pZF1bcHJvcF07XG5cdFx0XHRcdH0gZWxzZSBpZiAobm9kZS5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIHN0eWxlcy5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIHN0eWxlcy5uYW1lLmhhc093blByb3BlcnR5KG5vZGUubmFtZSkgJiYgc3R5bGVzLm5hbWVbbm9kZS5uYW1lXS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXHRcdFx0XHRcdC8vIHVzZSBjb2xvciBieSBpZFxuXHRcdFx0XHRcdG5vZGVbcHJvcF0gPSBzdHlsZXMubmFtZVtub2RlLm5hbWVdW3Byb3BdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5vZGUuaGFzT3duUHJvcGVydHkoJ3RheG9ub215JykgJiYgc3R5bGVzLmhhc093blByb3BlcnR5KG5vZGUudGF4b25vbXkpICYmIHN0eWxlc1tub2RlLnRheG9ub215XS5oYXNPd25Qcm9wZXJ0eShub2RlLm5hbWUpICYmIHN0eWxlc1tub2RlLnRheG9ub215XVtub2RlLm5hbWVdLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cdFx0XHRcdFx0bm9kZVtwcm9wXSA9IHN0eWxlc1tub2RlLnRheG9ub215XVtub2RlLm5hbWVdW3Byb3BdO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoIW5vZGUuY29sb3IpIHtcbiAgICAgIGlmIChtZS5jb25maWcuYXV0b0NvbG9ycykge1xuICAgICAgICBpZiAobm9kZS5sZXZlbCA9PSAwKSB7XG4gICAgICAgICAgbm9kZS5jb2xvciA9IHZpczRjb2xvci5mcm9tSFNMKDQ1LCAwLjksIDAuNSkueDtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmIChub2RlLmxldmVsID09IDEpIHtcbiAgICAgICAgICB2YXIgY291bnQgPSBub2RlLnBhcmVudC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgbm9kZS5jb2xvciA9IHZpczRjb2xvci5mcm9tSFNMKGluZGV4IC8gY291bnQgKiAzNjAsIDAuNywgMC41KS54O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUuY29sb3IgPSB2aXM0Y29sb3IuZnJvbUhleChub2RlLnBhcmVudC5jb2xvcikubGlnaHRuZXNzKCcqJyArICgwLjUrTWF0aC5yYW5kb20oKSAqIDAuNSkpLng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZSBjb2xvciBmcm9tIHBhcmVudCBub2RlIGlmIG5vIG90aGVyIG1hdGNoIGF2YWlsYWJsZVxuICAgICAgICBpZiAobm9kZS5sZXZlbCA+IDApIG5vZGUuY29sb3IgPSBub2RlLnBhcmVudC5jb2xvcjtcbiAgICAgICAgZWxzZSBub2RlLmNvbG9yID0gJyM5OTk5OTknO1xuICAgICAgfVxuXHRcdH1cblx0XHQvLyBsaWdodGVuIHVwIHRoZSBjb2xvciBpZiB0aGVyZSBhcmUgbm8gY2hpbGRyZW5cblx0XHRpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPCAyICYmIG5vZGUuY29sb3IpIHtcblx0XHRcdG5vZGUuY29sb3IgPSB2aXM0Y29sb3IuZnJvbUhleChub2RlLmNvbG9yKS5zYXR1cmF0aW9uKCcqLjg2JykueDtcblx0XHR9XG5cblx0XHRpZiAobm9kZS5sZXZlbCA+IDApIHtcblx0XHRcdHBjID0gbm9kZS5wYXJlbnQuY2hpbGRyZW47XG5cdFx0XHRpZiAocGMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRub2RlLmxlZnQgPSBwY1soaW5kZXgtMStwYy5sZW5ndGgpICUgcGMubGVuZ3RoXTtcblx0XHRcdFx0bm9kZS5yaWdodCA9IHBjWyhOdW1iZXIoaW5kZXgpKzEpICUgcGMubGVuZ3RoXTtcblx0XHRcdFx0aWYgKG5vZGUucmlnaHQgPT0gbm9kZS5sZWZ0KSBub2RlLnJpZ2h0ID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobm9kZS5sYWJlbCAhPT0gdW5kZWZpbmVkICYmIG5vZGUubGFiZWwgIT09IFwiXCIpIHtcblx0XHRcdHVybFRva2VuU291cmNlID0gbm9kZS5sYWJlbDtcblx0XHR9IGVsc2UgaWYgKG5vZGUudG9rZW4gIT09IHVuZGVmaW5lZCAmJiBub2RlLnRva2VuICE9PSBcIlwiKSB7XG5cdFx0XHR1cmxUb2tlblNvdXJjZSA9IG5vZGUudG9rZW47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHVybFRva2VuU291cmNlID0gJycrbWUuZ2xvYmFsTm9kZUNvdW50ZXI7XG5cdFx0fVxuXG5cdFx0bWUuZ2xvYmFsTm9kZUNvdW50ZXIrKztcblxuXHRcdG5vZGUudXJsVG9rZW4gPSB1cmxUb2tlblNvdXJjZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcVy9nLCBcIi1cIik7XG5cdFx0d2hpbGUgKG1lLm5vZGVzQnlVcmxUb2tlbi5oYXNPd25Qcm9wZXJ0eShub2RlLnVybFRva2VuKSkge1xuXHRcdFx0bm9kZS51cmxUb2tlbiArPSAnLSc7XG5cdFx0fVxuXHRcdG1lLm5vZGVzQnlVcmxUb2tlbltub2RlLnVybFRva2VuXSA9IG5vZGU7XG5cdFx0bm9kZS5tYXhDaGlsZEFtb3VudCA9IDA7XG5cblx0XHQvLyBzb3J0IGNoaWxkcmVuXG5cdFx0bm9kZS5jaGlsZHJlbiA9IG1lLnNvcnRDaGlsZHJlbihub2RlLmNoaWxkcmVuLCB0cnVlLCBtZS5jb25maWcuc29ydEJ5KTtcblxuXHRcdCQuZWFjaChub2RlLmNoaWxkcmVuLCBmdW5jdGlvbihjLCBjaGlsZCkge1xuXHRcdFx0Y2hpbGQucGFyZW50ID0gbm9kZTtcblx0XHRcdG5vZGUubWF4Q2hpbGRBbW91bnQgPSBNYXRoLm1heChub2RlLm1heENoaWxkQW1vdW50LCBjaGlsZC5hbW91bnQpO1xuXHRcdFx0bWUudHJhdmVyc2UoY2hpbGQsIGMpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKG5vZGUuYnJlYWtkb3ducykge1xuXHRcdFx0bm9kZS5icmVha2Rvd25zQnlOYW1lID0ge307XG5cdFx0XHQkLmVhY2gobm9kZS5icmVha2Rvd25zLCBmdW5jdGlvbiAoYyxiZCkge1xuXHRcdFx0XHRiZC5mYW1vdW50ID0gbWUubnMuVXRpbHMuZm9ybWF0TnVtYmVyKGJkLmFtb3VudCk7XG5cdFx0XHRcdGlmIChiZC5uYW1lKSBub2RlLmJyZWFrZG93bnNCeU5hbWVbYmQubmFtZV0gPSBiZDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRtZS5zb3J0Q2hpbGRyZW4gPSBmdW5jdGlvbihjaGlsZHJlbiwgYWx0ZXJuYXRlLCBzb3J0QnkpIHtcblx0XHR2YXIgdG1wID0gW10sIG9kZCA9IHRydWU7XG5cdFx0aWYgKHNvcnRCeSA9PSAnbGFiZWwnKSB7XG5cdFx0XHRzb3J0QnkgPSBtZS5jb21wYXJlTGFiZWxzO1xuXHRcdFx0YWx0ZXJuYXRlID0gZmFsc2U7XG5cdFx0fSBlbHNlIHNvcnRCeSA9IG1lLmNvbXBhcmVBbW91bnRzO1xuXG5cdFx0Y2hpbGRyZW4uc29ydChzb3J0QnkpO1xuXHRcdGlmIChhbHRlcm5hdGUpIHtcblx0XHRcdHdoaWxlIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRtcC5wdXNoKG9kZCA/IGNoaWxkcmVuLnBvcCgpIDogY2hpbGRyZW4uc2hpZnQoKSk7XG5cdFx0XHRcdG9kZCA9ICFvZGQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdG1wO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gY2hpbGRyZW47XG5cdFx0fVxuXHR9O1xuXG5cdC8qXG5cdCAqIGNvbXBhcmVzIHR3byBpdGVtcyBieSBhbW91bnRcblx0ICovXG5cdG1lLmNvbXBhcmVBbW91bnRzID0gZnVuY3Rpb24oYSwgYikge1xuXHRcdGlmIChhLmFtb3VudCA+IGIuYW1vdW50KSByZXR1cm4gMTtcblx0XHRpZiAoYS5hbW91bnQgPT0gYi5hbW91bnQpIHJldHVybiAwO1xuXHRcdHJldHVybiAtMTtcblx0fTtcblxuXHQvKlxuXHQgKiBjb21wYXJlcyB0byBpdGVtIGJ5IGxhYmVsXG5cdCAqL1xuXHRtZS5jb21wYXJlTGFiZWxzID0gZnVuY3Rpb24oYSwgYikge1xuXHRcdGlmIChhLmxhYmVsID4gYi5sYWJlbCkgcmV0dXJuIDE7XG5cdFx0aWYgKGEubGFiZWwgPT0gYi5sYWJlbCkgcmV0dXJuIDA7XG5cdFx0cmV0dXJuIC0xO1xuXHR9O1xuXG5cdC8qXG5cdCAqIGluaXRpYWxpemVzIGFsbCB0aGF0IFJhcGhhZWxKUyBzdHVmZlxuXHQgKi9cblx0bWUuaW5pdFBhcGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgJGMgPSBtZS4kY29udGFpbmVyLCBydCA9IG1lLnRyZWVSb290LFxuXHRcdFx0dyA9ICRjLndpZHRoKCksIGggPSAkYy5oZWlnaHQoKSxcblx0XHRcdHBhcGVyID0gUmFwaGFlbCgkY1swXSwgdywgaCksXG5cdFx0XHRtYXhSYWQgPSBNYXRoLm1pbih3LCBoKSAqIDAuNSAtIDQwLFxuXHRcdFx0YmFzZSwgVmVjdG9yID0gbWUubnMuVmVjdG9yLFxuXHRcdFx0b3JpZ2luID0gbmV3IFZlY3Rvcih3ICogMC41LCBoICogMC41KTsgLy8gY2VudGVyXG5cblx0XHRtZS53aWR0aCA9IHc7XG5cdFx0bWUuaGVpZ2h0ID0gaDtcblx0XHRtZS5wYXBlciA9IHBhcGVyO1xuXHRcdGJhc2UgPSBNYXRoLnBvdygoTWF0aC5wb3cocnQuYW1vdW50LCAwLjYpICsgTWF0aC5wb3cocnQubWF4Q2hpbGRBbW91bnQsIDAuNikqMikgLyBtYXhSYWQsIDEuNjY2NjY2NjY2Nyk7XG5cdFx0bWUuYTJyYWRCYXNlID0gbWUubnMuYTJyYWRCYXNlID0gYmFzZTtcblxuXHRcdG1lLm9yaWdpbiA9IG9yaWdpbjtcblxuXHRcdCQod2luZG93KS5yZXNpemUobWUub25SZXNpemUuYmluZChtZSkpO1xuXHR9O1xuXG5cdG1lLm9uUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgJGMgPSBtZS4kY29udGFpbmVyLCB3ID0gJGMud2lkdGgoKSwgaCA9ICRjLmhlaWdodCgpLFxuXHRcdFx0bWF4UmFkID0gTWF0aC5taW4odywgaCkgKiAwLjUgLSA0MCwgYmFzZSwgcnQgPSBtZS50cmVlUm9vdCwgYiwgb2JqO1xuXHRcdG1lLnBhcGVyLnNldFNpemUodywgaCk7XG5cdFx0bWUub3JpZ2luLnggPSB3ICogMC41O1xuXHRcdG1lLm9yaWdpbi55ID0gaCAqIDAuNTtcblx0XHRtZS53aWR0aCA9IHc7XG5cdFx0bWUuaGVpZ2h0ID0gaDtcblx0XHRiYXNlID0gTWF0aC5wb3coKE1hdGgucG93KHJ0LmFtb3VudCwgMC42KSArIE1hdGgucG93KHJ0Lm1heENoaWxkQW1vdW50LCAwLjYpKjIpIC8gbWF4UmFkLCAxLjY2NjY2NjY2NjcpO1xuXHRcdG1lLmEycmFkQmFzZSA9IG1lLm5zLmEycmFkQmFzZSA9IGJhc2U7XG5cblx0XHQkLmVhY2gobWUuZGlzcGxheU9iamVjdHMsIGZ1bmN0aW9uKGIsIG9iaikge1xuXHRcdFx0aWYgKG9iai5jbGFzc05hbWUgPT0gXCJidWJibGVcIikge1xuXHRcdFx0XHRvYmouYnViYmxlUmFkID0gbWUubnMuVXRpbHMuYW1vdW50MnJhZChvYmoubm9kZS5hbW91bnQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIHZpczQubG9nKG1lKTtcblx0XHRpZiAobWUuY3VycmVudENlbnRlcikge1xuXHRcdFx0bWUuY2hhbmdlVmlldyhtZS5jdXJyZW50Q2VudGVyLnVybFRva2VuKTtcblx0XHR9XG5cdH07XG5cblx0Lypcblx0ICogaW5pdGlhbGl6ZXMgdGhlIFR3ZWVuaW5nIGVuZ2luZVxuXHQgKi9cblx0bWUuaW5pdFR3ZWVuID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy50d2VlblRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy5sb29wLCAxMDAwLzEyMCk7XG5cdH07XG5cblx0Lypcblx0ICogY3JlYXRlcyBpbnN0YW5jZXMgZm9yIGFsbCBidWJibGVzIGluIHRoZSBkYXRhc2V0LiB0aGUgYnViYmxlcyB3aWxsXG5cdCAqIHJlbWFpbiBpbnZpc2JsZSB1bnRpbCB0aGV5IGVudGVyIHRoZSBzdGFnZSB2aWEgY2hhbmdlVmlldygpXG5cdCAqL1xuXHRtZS5pbml0QnViYmxlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vdmlzNC5sb2coJ2luaXRCdWJibGVzJyk7XG5cdFx0dmFyIG1lID0gdGhpcywgcnQgPSBtZS50cmVlUm9vdCwgaSwgaWNvbnMgPSBmYWxzZSwgQnViYmxlcyA9IG1lLm5zLkJ1YmJsZXMsIGJ1YmJsZUNsYXNzO1xuXG5cdFx0bWUuYnViYmxlQ2xhc3NlcyA9IFtdO1xuXG5cdFx0Ly8gZGVmYXVsdHMgdG8gcGxhaW4gYnViYmxlXG5cdFx0aWYgKCFtZS5jb25maWcuaGFzT3duUHJvcGVydHkoJ2J1YmJsZVR5cGUnKSkgbWUuY29uZmlnLmJ1YmJsZVR5cGUgPSBbJ3BsYWluJ107XG5cdFx0Ly8gY29udmVydCB0byBhcnJheSBpZiBuZWNjZXNzYWlyeVxuXHRcdGlmICghJC5pc0FycmF5KG1lLmNvbmZpZy5idWJibGVUeXBlKSkgbWUuY29uZmlnLmJ1YmJsZVR5cGUgPSBbbWUuY29uZmlnLmJ1YmJsZVR5cGVdO1xuXG5cdFx0aWYgKCQuaXNBcnJheShtZS5jb25maWcuYnViYmxlVHlwZSkpIHtcblx0XHRcdCQuZWFjaChtZS5jb25maWcuYnViYmxlVHlwZSwgZnVuY3Rpb24oaSkge1xuXHRcdFx0XHRpZiAobWUuY29uZmlnLmJ1YmJsZVR5cGVbaV0gPT0gJ2ljb24nKSBpY29ucyA9IHRydWU7XG5cdFx0XHRcdG1lLmJ1YmJsZUNsYXNzZXMucHVzaChtZS5nZXRCdWJibGVUeXBlKG1lLmNvbmZpZy5idWJibGVUeXBlW2ldKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR2YXIgcm9vdEJ1YmJsZSA9IG1lLmNyZWF0ZUJ1YmJsZShydCwgbWUub3JpZ2luLCAwLCAwLCBydC5jb2xvcik7XG5cdFx0bWUudHJhdmVyc2VCdWJibGVzKHJvb3RCdWJibGUpO1xuXHR9O1xuXG5cdC8qXG5cdCAqIHJldHVybnMgdGhlIGJ1YmJsZSBjbGFzcyBmb3IgYSBnaXZlbiBidWJibGUgY2xhc3MgaWRcblx0ICogZS5nLiAnaWNvbicgPiBCdWJibGVUcmVlLkJ1YmJsZXMuSWNvblxuXHQgKi9cblx0bWUuZ2V0QnViYmxlVHlwZSA9IGZ1bmN0aW9uKGlkKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgQnViYmxlcyA9IG1lLm5zLkJ1YmJsZXM7XG5cdFx0Ly8gY2hvc3NlIG9uZSBvZiB0aGVtIGZvciB0aGUgdmlzXG5cdFx0c3dpdGNoIChpZCkge1xuXHRcdFx0Y2FzZSAncGllJzogcmV0dXJuIEJ1YmJsZXMuUGllcztcblx0XHRcdGNhc2UgJ2RvbnV0JzogcmV0dXJuIEJ1YmJsZXMuRG9udXQ7XG5cdFx0XHRjYXNlICdtdWx0aSc6IHJldHVybiBCdWJibGVzLk11bHRpO1xuXHRcdFx0Y2FzZSAnaWNvbic6IHJldHVybiBCdWJibGVzLkljb247XG5cdFx0XHRkZWZhdWx0OiByZXR1cm4gQnViYmxlcy5QbGFpbjtcblx0XHR9XG5cdH07XG5cblx0Lypcblx0ICogaXRlcmF0ZXMgb3ZlciB0aGUgY29tcGxldGUgdHJlZSBhbmQgY3JlYXRlcyBhIGJ1YmJsZSBmb3Jcblx0ICogZWFjaCBub2RlXG5cdCAqL1xuXHRtZS50cmF2ZXJzZUJ1YmJsZXMgPSBmdW5jdGlvbihwYXJlbnRCdWJibGUpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCByaW5nLFxuXHRcdFx0YTJyYWQgPSBtZS5ucy5VdGlscy5hbW91bnQycmFkLFxuXHRcdFx0aSwgYywgY2hpbGRyZW4sIGNoaWxkQnViYmxlLCBjaGlsZFJhZFN1bSA9IDAsIG9hID0gMCwgZGEsIGNhLCB0d29waSA9IE1hdGguUEkgKiAyO1xuXHRcdGNoaWxkcmVuID0gcGFyZW50QnViYmxlLm5vZGUuY2hpbGRyZW47XG5cblx0XHQvLyBzdW0gcmFkaWkgb2YgYWxsIGNoaWxkcmVuXG5cdFx0JC5lYWNoKGNoaWxkcmVuLCBmdW5jdGlvbihpLGMpIHtcblx0XHRcdGNoaWxkUmFkU3VtICs9IGEycmFkKGMuYW1vdW50KTtcblx0XHR9KTtcblxuXHRcdGlmIChjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHQvLyBjcmVhdGUgcmluZ1xuXHRcdFx0cmluZyA9IG1lLmNyZWF0ZVJpbmcocGFyZW50QnViYmxlLm5vZGUsIHBhcmVudEJ1YmJsZS5wb3MsIDAsIG1lLmNvbmZpZy5zdHJva2VPcHQpO1xuXHRcdH1cblxuXHRcdCQuZWFjaChjaGlsZHJlbiwgZnVuY3Rpb24oaSxjKSB7XG5cblx0XHRcdGRhID0gYTJyYWQoYy5hbW91bnQpIC8gY2hpbGRSYWRTdW0gKiB0d29waTtcblx0XHRcdGNhID0gb2EgKyBkYSowLjU7XG5cblx0XHRcdGlmIChpc05hTihjYSkpIHZpczQubG9nKG9hLCBkYSwgYy5hbW91bnQsIGNoaWxkUmFkU3VtLCB0d29waSk7XG5cblx0XHRcdGMuY2VudGVyQW5nbGUgPSBjYTtcblxuXHRcdFx0Y2hpbGRCdWJibGUgPSBtZS5jcmVhdGVCdWJibGUoYywgcGFyZW50QnViYmxlLnBvcywgMCwgY2EsIGMuY29sb3IpO1xuXHRcdFx0Ly8gZsO8ciBqZWRlcyBraW5kIGVpbmVuIGJ1YmJsZSBhbmxlZ2VuIHVuZCBtaXQgZGVtIHBhcmVudCB2ZXJiaW5kZW5cblx0XHRcdG9hICs9IGRhO1xuXG5cdFx0XHRtZS50cmF2ZXJzZUJ1YmJsZXMoY2hpbGRCdWJibGUpO1xuXHRcdH0pO1xuXG5cdH07XG5cblxuXHQvKlxuXHQgKiBjcmVhdGVzIGEgbmV3IGJ1YmJsZSBmb3IgYSBnaXZlbiBub2RlLiB0aGUgYnViYmxlIHR5cGUgd2lsbCBiZSBjaG9zZW5cblx0ICogYnkgdGhlIGxldmVsIG9mIHRoZSBub2RlXG5cdCAqL1xuXHRtZS5jcmVhdGVCdWJibGUgPSBmdW5jdGlvbihub2RlLCBvcmlnaW4sIHJhZCwgYW5nbGUsIGNvbG9yKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgbnMgPSBtZS5ucywgaSwgYiwgYnViYmxlLCBjbGFzc0luZGV4ID0gbm9kZS5sZXZlbDtcblx0XHRpZiAoaXNOYU4oY2xhc3NJbmRleCkpIGNsYXNzSW5kZXggPSAwO1xuXHRcdGNsYXNzSW5kZXggPSBNYXRoLm1pbihjbGFzc0luZGV4LCBtZS5idWJibGVDbGFzc2VzLmxlbmd0aC0xKTtcblxuXHRcdGJ1YmJsZSA9IG5ldyBtZS5idWJibGVDbGFzc2VzW2NsYXNzSW5kZXhdKG5vZGUsIG1lLCBvcmlnaW4sIHJhZCwgYW5nbGUsIGNvbG9yKTtcblx0XHRtZS5kaXNwbGF5T2JqZWN0cy5wdXNoKGJ1YmJsZSk7XG5cdFx0cmV0dXJuIGJ1YmJsZTtcblx0fTtcblxuXHRtZS5jcmVhdGVSaW5nID0gZnVuY3Rpb24obm9kZSwgb3JpZ2luLCByYWQsIGF0dHIpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCBucyA9IG1lLm5zLCByaW5nO1xuXHRcdHJpbmcgPSBuZXcgbnMuUmluZyhub2RlLCBtZSwgb3JpZ2luLCByYWQsIGF0dHIpO1xuXHRcdG1lLmRpc3BsYXlPYmplY3RzLnB1c2gocmluZyk7XG5cdFx0cmV0dXJuIHJpbmc7XG5cdH07XG5cblx0Lypcblx0ICogaXMgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHVzZXIgY2hhbmdlcyB0aGUgdmlld1xuXHQgKiBlYWNoIHZpZXcgaXMgZGVmaW5lZCBieSB0aGUgc2VsZWN0ZWQgbm9kZSAod2hpY2ggaXMgZGlzcGxheWVkXG5cdCAqL1xuXHRtZS5jaGFuZ2VWaWV3ID0gZnVuY3Rpb24odG9rZW4pIHtcblx0XHR2YXIgbWUgPSB0aGlzLFxuXHRcdFx0cGFwZXIgPSBtZS5wYXBlcixcblx0XHRcdG1heFJhZCA9IE1hdGgubWluKG1lLndpZHRoLCBtZS5oZWlnaHQpICogMC4zNSxcblx0XHRcdG5zID0gbWUubnMsXG5cdFx0XHR1dGlscyA9IG5zLlV0aWxzLFxuXHRcdFx0byA9IG1lLm9yaWdpbixcblx0XHRcdGwxYXR0ciA9IHsgc3Ryb2tlOiAnI2NjYycsICdzdHJva2UtZGFzaGFycmF5JzogXCItIFwiIH0sXG5cdFx0XHRsMmF0dHIgPSB7IHN0cm9rZTogJyNjY2MnLCAnc3Ryb2tlLWRhc2hhcnJheSc6IFwiLiBcIiB9LFxuXHRcdFx0YTJyYWQgPSB1dGlscy5hbW91bnQycmFkLFxuXHRcdFx0cm9vdCA9IG1lLnRyZWVSb290LFxuXHRcdFx0bm9kZXNCeVVybFRva2VuID0gbWUubm9kZXNCeVVybFRva2VuLFxuXHRcdFx0bm9kZSA9IG5vZGVzQnlVcmxUb2tlbi5oYXNPd25Qcm9wZXJ0eSh0b2tlbikgPyBub2Rlc0J5VXJsVG9rZW5bdG9rZW5dIDogbnVsbCxcblx0XHRcdHQgPSBuZXcgbnMuTGF5b3V0KCksXG5cdFx0XHRidWJibGUsIHRyLCBpLCB0d29waSA9IE1hdGguUEkgKiAyLFxuXHRcdFx0Z2V0QnViYmxlID0gbWUuZ2V0QnViYmxlLmJpbmQobWUpLCBnZXRSaW5nID0gbWUuZ2V0UmluZy5iaW5kKG1lKSxcblx0XHRcdHVuaWZ5ID0gbWUudW5pZnlBbmdsZTtcblxuXHRcdGlmIChub2RlICE9PSBudWxsKSB7XG5cblx0XHRcdC8vIHdoYXQgZG8geW91IHdlIGhhdmUgdG8gZG8gaGVyZT9cblx0XHRcdC8vIC0gZmluZCBvdXQgdGhlIG9yaWdpbiBwb3NpdGlvblxuXHRcdFx0Ly8gLVxuXG5cdFx0XHR2YXIgcGFyZW50LCBncmFuZHBhLCBzaWJsaW5nLCBjLCBjbiwgcmFkMSwgcmFkMiwgcmFkLCBzcmFkLCBzYW5nLCByaW5nLCB0Z3RTY2FsZSxcblx0XHRcdFx0cmFkU3VtLCBsZWZ0VHVybiA9IGZhbHNlLCByaWdodFR1cm4gPSBmYWxzZTtcblxuXG5cblx0XHRcdC8vIGluaXRpYWxseSB3ZSB3aWxsIG1hcmsgYWxsIGJ1YmJsZXMgYW5kIHJpbmdzIGZvciBoaWRpbmdcblx0XHRcdC8vIGdldC4uLi4oKSB3aWxsIHNldCB0aGlzIGZsYWcgdG8gZmFsc2Vcblx0XHRcdGZvciAoaSBpbiBtZS5kaXNwbGF5T2JqZWN0cykgbWUuZGlzcGxheU9iamVjdHNbaV0uaGlkZUZsYWcgPSB0cnVlO1xuXG5cblx0XHRcdGlmIChub2RlID09IHJvb3QgfHwgbm9kZS5wYXJlbnQgPT0gcm9vdCAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA8IDIpIHtcblxuXHRcdFx0XHR0LiQobWUpLmJ1YmJsZVNjYWxlID0gMS4wO1xuXG5cdFx0XHRcdC8vIG1vdmUgb3JpZ2luIHRvIGNlbnRlclxuXHRcdFx0XHR0LiQobykueCA9IG1lLndpZHRoICogMC41O1xuXHRcdFx0XHR0LiQobykueSA9IG1lLmhlaWdodCAqIDAuNTtcblxuXHRcdFx0XHQvLyBtYWtlIHRoZSByb290IGJ1YmJsZSB2aXNpYmxlXG5cdFx0XHRcdHBhcmVudCA9IGdldEJ1YmJsZShyb290KTtcblxuXHRcdFx0XHQvL3BhcmVudC5jaGlsZFJvdGF0aW9uID0gMDtcblxuXHRcdFx0XHRpZiAobm9kZSAhPSByb290KSB7XG5cdFx0XHRcdFx0cGFyZW50LmNoaWxkUm90YXRpb24gPSAtbm9kZS5jZW50ZXJBbmdsZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJhZDEgPSBhMnJhZChyb290LmFtb3VudCkgKyBhMnJhZChyb290Lm1heENoaWxkQW1vdW50KSArIDIwO1xuXG5cdFx0XHRcdHJpbmcgPSBnZXRSaW5nKHJvb3QpO1xuXHRcdFx0XHR0LiQocmluZykucmFkID0gcmFkMTtcblxuXHRcdFx0XHRmb3IgKGkgaW4gcm9vdC5jaGlsZHJlbikge1xuXHRcdFx0XHRcdGNuID0gcm9vdC5jaGlsZHJlbltpXTtcblx0XHRcdFx0XHQvLyBhZGp1c3QgcmFkIGFuZCBhbmdsZSBmb3IgY2hpbGRyZW5cblx0XHRcdFx0XHRidWJibGUgPSBnZXRCdWJibGUoY24pO1xuXHRcdFx0XHRcdHQuJChidWJibGUpLmFuZ2xlID0gdW5pZnkoY24uY2VudGVyQW5nbGUgKyBwYXJlbnQuY2hpbGRSb3RhdGlvbik7XG5cdFx0XHRcdFx0dC4kKGJ1YmJsZSkucmFkID0gcmFkMTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIG5vZGUgaXMgbm90IHRoZSByb290IG5vZGVcblxuXHRcdFx0XHR2YXIgb3JpZ05vZGUgPSBub2RlOyAvLyBzYXZlIHRoZSByZWZlcmVuY2Ugb2YgdGhlIG5vZGUuLlxuXG5cdFx0XHRcdGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA8IDIpIHsgLy8gLi5iZWNhdXNlIGlmIGl0IGhhcyBubyBjaGlsZHJlbi4uXG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUucGFyZW50OyAgICAgICAgIC8vIC4ud2UgY2VudGVyIG9uIGl0cyBwYXJlbnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRndFNjYWxlID0gbWF4UmFkIC8gKGEycmFkKG5vZGUuYW1vdW50KSArIGEycmFkKG5vZGUubWF4Q2hpbGRBbW91bnQpKjIpO1xuXHRcdFx0XHR0LiQobWUpLmJ1YmJsZVNjYWxlID0gdGd0U2NhbGU7XG5cblx0XHRcdFx0cGFyZW50ID0gZ2V0QnViYmxlKG5vZGUpO1xuXG5cdFx0XHRcdGlmIChtZS5jdXJyZW50Q2VudGVyICYmIG1lLmN1cnJlbnRDZW50ZXIgPT0gbm9kZS5sZWZ0KSByaWdodFR1cm4gPSB0cnVlO1xuXHRcdFx0XHRlbHNlIGlmIChtZS5jdXJyZW50Q2VudGVyICYmIG1lLmN1cnJlbnRDZW50ZXIgPT0gbm9kZS5yaWdodCkgbGVmdFR1cm4gPSB0cnVlO1xuXG5cdFx0XHRcdHZhciBzYSA9IG1lLnNob3J0ZXN0QW5nbGVUbztcblx0XHRcdFx0Ly9pZiAobGVmdFR1cm4pIHNhID0gbWUuc2hvcnRlc3RMZWZ0VHVybjtcblx0XHRcdFx0Ly9pZiAocmlnaHRUdXJuKSBzYSA9IG1lLnNob3J0ZXN0UmlnaHRUdXJuO1xuXG5cdFx0XHRcdHQuJChwYXJlbnQpLmFuZ2xlID0gc2EocGFyZW50LmFuZ2xlLCAwKTtcblxuXHRcdFx0XHQvLyBmaW5kIHRoZSBzdW0gb2YgYWxsIHJhZGlpIGZyb20gbm9kZSB0byByb290XG5cdFx0XHRcdHJhZDEgPSAoYTJyYWQobm9kZS5hbW91bnQpICsgYTJyYWQobm9kZS5tYXhDaGlsZEFtb3VudCkpICogdGd0U2NhbGUgKyAyMDtcblxuXHRcdFx0XHRyaW5nID0gZ2V0UmluZyhub2RlKTtcblx0XHRcdFx0dC4kKHJpbmcpLnJhZCA9IHJhZDE7XG5cblx0XHRcdFx0Z3JhbmRwYSA9IGdldEJ1YmJsZShub2RlLnBhcmVudCk7XG5cdFx0XHRcdGdyYW5kcGEuY2hpbGRSb3RhdGlvbiA9IC1ub2RlLmNlbnRlckFuZ2xlO1xuXG5cdFx0XHRcdHZhciBtYXliZVJvb3QgPSBncmFuZHBhO1xuXG5cdFx0XHRcdHdoaWxlIChtYXliZVJvb3QgJiYgbWF5YmVSb290Lm5vZGUucGFyZW50KSB7XG5cdFx0XHRcdFx0bWF5YmVSb290ID0gZ2V0QnViYmxlKG1heWJlUm9vdC5ub2RlLnBhcmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0dC4kKG1heWJlUm9vdCkucmFkID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHQuJChncmFuZHBhKS5yYWQgPSAwO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHR2YXIgaHcgPSBtZS53aWR0aCAqIDAuNTtcblxuXHRcdFx0XHRyYWQyID0gMCAtIE1hdGgubWF4KFxuXHRcdFx0XHRcdC8vaHcgKjAuOCAtIHRndFNjYWxlICogKGEycmFkKG5vZGUucGFyZW50LmFtb3VudCkrYTJyYWQobm9kZS5hbW91bnQpKSwgLy8gbWF4aW11bSB2aXNpYmxlIHBhcnRcblx0XHRcdFx0XHRodyAqIDAuOCAtIHRndFNjYWxlICogKGEycmFkKG5vZGUucGFyZW50LmFtb3VudCkgKyBhMnJhZChNYXRoLm1heChub2RlLmFtb3VudCoxLjE1ICsgbm9kZS5tYXhDaGlsZEFtb3VudCoxLjE1LCBub2RlLmxlZnQuYW1vdW50ICogMC44NSwgbm9kZS5yaWdodC5hbW91bnQgKiAwLjg1KSkpLFxuXHRcdFx0XHRcdHRndFNjYWxlKmEycmFkKG5vZGUucGFyZW50LmFtb3VudCkqLTEgKyBodyowLjE1IC8vIG1pbmltdW0gdmlzaWJsZSBwYXJ0XG5cdFx0XHRcdCkgKyBodztcblxuXHRcdFx0XHQvL3ZpczQubG9nKCdyYWQgKHBhcmVudCkgPSAnK3JhZDIsJyAgIHJhZCAoY2VudGVyKSA9ICcscmFkMSk7XG5cblx0XHRcdFx0aWYgKG5vZGUubGVmdCAmJiBub2RlLnJpZ2h0KSB7XG5cdFx0XHRcdFx0dmFyIG1heFNpYmxTaXplID0gdGd0U2NhbGUgKiBhMnJhZChNYXRoLm1heChub2RlLmxlZnQuYW1vdW50LCBub2RlLnJpZ2h0LmFtb3VudCkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9yYWQyID0gaHcgLSAodGd0U2NhbGUqYTJyYWQobm9kZS5wYXJlbnQuYW1vdW50KSotMSsgaHcqMC4xNSk7XG5cblx0XHRcdFx0cmFkU3VtID0gcmFkMSArIHJhZDI7XG5cblx0XHRcdFx0dC4kKG8pLnggPSBtZS53aWR0aCAqIDAuNSAtIHJhZDIgLSAobm9kZSAhPSBvcmlnTm9kZSA/IHJhZDEgKiAwLjM1OiAwKTtcblx0XHRcdFx0dC4kKG8pLnkgPSBtZS5oZWlnaHQgKiAwLjU7XG5cblx0XHRcdFx0Ly92aXM0LmxvZygnby54ID0gJytvLngsJyAgICB0LiQobykueCA9ICcrdC4kKG8pLngpO1xuXG5cdFx0XHRcdG5ldyB2aXM0LkRlbGF5ZWRUYXNrKDE1MDAsIHZpczQsIHZpczQubG9nLCBvLCBncmFuZHBhLnBvcyk7XG5cblx0XHRcdFx0cmFkMiArPSBtZS53aWR0aCAqIDAuMTtcblxuXHRcdFx0XHRyaW5nID0gZ2V0UmluZyhub2RlLnBhcmVudCk7XG5cdFx0XHRcdHQuJChyaW5nKS5yYWQgPSByYWQyO1xuXG5cdFx0XHRcdHQuJChwYXJlbnQpLnJhZCA9IHJhZDI7XG5cblx0XHRcdFx0dmFyIGFvID0gMC0obm9kZSAhPSBvcmlnTm9kZSA/IG9yaWdOb2RlLmNlbnRlckFuZ2xlICsgcGFyZW50LmNoaWxkUm90YXRpb246IDApO1xuXHRcdFx0XHQvLyBjaGlsZHJlblxuXHRcdFx0XHRmb3IgKGkgaW4gbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRcdGNuID0gbm9kZS5jaGlsZHJlbltpXTtcblx0XHRcdFx0XHQvLyBhZGp1c3QgcmFkIGFuZCBhbmdsZSBmb3IgY2hpbGRyZW5cblx0XHRcdFx0XHRidWJibGUgPSBnZXRCdWJibGUoY24pO1xuXHRcdFx0XHRcdHQuJChidWJibGUpLmFuZ2xlID0gbWUuc2hvcnRlc3RBbmdsZVRvKGJ1YmJsZS5hbmdsZSwgY24uY2VudGVyQW5nbGUgKyBwYXJlbnQuY2hpbGRSb3RhdGlvbiArIGFvKTtcblx0XHRcdFx0XHR0LiQoYnViYmxlKS5yYWQgPSByYWQxO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gbGVmdCBhbmQgcmlnaHQgc2libGluZ1xuXG5cdFx0XHRcdHZhciBzaWJsQ3V0ID0gbWUuaGVpZ2h0ICogMC4wNztcblxuXHRcdFx0XHRpZiAobm9kZS5sZWZ0KSB7XG5cdFx0XHRcdFx0c2libGluZyA9IG5vZGUubGVmdDtcblx0XHRcdFx0XHRzcmFkID0gYTJyYWQoc2libGluZy5hbW91bnQpKnRndFNjYWxlO1xuXHRcdFx0XHRcdHNhbmcgPSB0d29waSAtIE1hdGguYXNpbigobWUucGFwZXIuaGVpZ2h0KjAuNSArIHNyYWQgLSBzaWJsQ3V0KSAvIHJhZDIpO1xuXG5cdFx0XHRcdFx0YnViYmxlID0gZ2V0QnViYmxlKHNpYmxpbmcpO1xuXHRcdFx0XHRcdHQuJChidWJibGUpLnJhZCA9IHJhZDI7XG5cdFx0XHRcdFx0dC4kKGJ1YmJsZSkuYW5nbGUgPSBzYShidWJibGUuYW5nbGUsIHNhbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChub2RlLnJpZ2h0KSB7XG5cdFx0XHRcdFx0c2libGluZyA9IG5vZGUucmlnaHQ7XG5cdFx0XHRcdFx0c3JhZCA9IGEycmFkKHNpYmxpbmcuYW1vdW50KSp0Z3RTY2FsZTtcblx0XHRcdFx0XHRzYW5nID0gTWF0aC5hc2luKChtZS5wYXBlci5oZWlnaHQqMC41ICsgc3JhZCAtIHNpYmxDdXQpIC8gcmFkMik7XG5cblx0XHRcdFx0XHRidWJibGUgPSBnZXRCdWJibGUoc2libGluZyk7XG5cdFx0XHRcdFx0dC4kKGJ1YmJsZSkucmFkID0gcmFkMjtcblx0XHRcdFx0XHR0LiQoYnViYmxlKS5hbmdsZSA9IHNhKGJ1YmJsZS5hbmdsZSwgc2FuZyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRub2RlID0gb3JpZ05vZGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIG5vdyB3ZSdyZSBnb2luZyB0byBjaGVjayBhbGwgaGlkZXMgYW5kIHNob3dzXG5cdFx0XHRmb3IgKGkgaW4gbWUuZGlzcGxheU9iamVjdHMpIHtcblx0XHRcdFx0dmFyIG9iaiA9IG1lLmRpc3BsYXlPYmplY3RzW2ldO1xuXHRcdFx0XHRpZiAob2JqLmhpZGVGbGFnICYmIG9iai52aXNpYmxlKSB7XG5cdFx0XHRcdFx0Ly8gYnViYmxlIGlzIG9uIHN0YWdlIGJ1dCBzaG91bGRuJ3Rcblx0XHRcdFx0XHR0LiQob2JqKS5hbHBoYSA9IDA7IC8vIGxldCBpdCBkaXNhcHBlYXJcblx0XHRcdFx0XHRpZiAob2JqLmNsYXNzTmFtZSA9PSBcImJ1YmJsZVwiICYmIG9iai5ub2RlLmxldmVsID4gMSkgdC4kKG9iaikucmFkID0gMDsgLy8gbW92ZSB0byBjZW50ZXJcblx0XHRcdFx0XHQvL2Vsc2UgdC4kKG9iaikucmFkID1cblx0XHRcdFx0XHR0LmhpZGUob2JqKTsgLy8gcmVtb3ZlIGZyb20gc3RhZ2UgYWZ0ZXJ3YXJkc1xuXHRcdFx0XHR9IGVsc2UgaWYgKCFvYmouaGlkZUZsYWcpIHtcblx0XHRcdFx0XHQvLyBidWJibGUgaXMgbm90IG9uIHN0YWdlIGJ1dCBzaG91bGRcblx0XHRcdFx0XHR0LiQob2JqKS5hbHBoYSA9IDE7XG5cdFx0XHRcdFx0aWYgKCFvYmoudmlzaWJsZSkge1xuXHRcdFx0XHRcdFx0b2JqLmFscGhhID0gMDtcblx0XHRcdFx0XHRcdHQuc2hvdyhvYmopO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0ciA9IG5ldyBucy5UcmFuc2l0aW9uZXIobWUuY3VycmVudENlbnRlciA9PSBub2RlID8gMCA6IDEwMDApO1xuXHRcdFx0dHIuY2hhbmdlTGF5b3V0KHQpO1xuXHRcdFx0bWUuY3VycmVudFRyYW5zaXRpb24gPSB0cjtcblx0XHRcdGlmICghbWUuY3VycmVudENlbnRlciAmJiAkLmlzRnVuY3Rpb24obWUuY29uZmlnLmZpcnN0Tm9kZUNhbGxiYWNrKSkge1xuXHRcdFx0XHRtZS5jb25maWcuZmlyc3ROb2RlQ2FsbGJhY2sobm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRtZS5jdXJyZW50Q2VudGVyID0gbm9kZTtcblx0XHRcdC8vIHZpczQubG9nKCdjdXJyZW50Tm9kZSA9ICcrbWUuY3VycmVudENlbnRlcik7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0dXRpbHMubG9nKCdub2RlICcrdG9rZW4rJyBub3QgZm91bmQnKTtcblx0XHR9XG5cdFx0Ly8gc3RlcDE6XG5cblx0XHQvLyBzdGVwMjpcblx0fTtcblxuXHRtZS51bmlmeUFuZ2xlID0gZnVuY3Rpb24oYSkge1xuXHRcdHZhciBwaSA9IE1hdGguUEksIHR3b3BpID0gcGkgKiAyO1xuXHRcdHdoaWxlIChhID49IHR3b3BpKSBhIC09IHR3b3BpO1xuXHRcdHdoaWxlIChhIDwgMCkgYSArPSB0d29waTtcblx0XHRyZXR1cm4gYTtcblx0fTtcblxuXHRtZS5zaG9ydGVzdEFuZ2xlID0gZnVuY3Rpb24oZiwgdCkge1xuXHRcdHZhciBkZWcgPSBmdW5jdGlvbihhKSB7IHJldHVybiBNYXRoLnJvdW5kKGEvTWF0aC5QSSoxODApKycnOyB9O1xuXHRcdHZhciBwaSA9IE1hdGguUEksIHR3b3BpID0gcGkgKiAyLCB1bmlmeT0gbWUudW5pZnlBbmdsZTtcblx0XHRmID0gdW5pZnkoZik7XG5cdFx0dCA9IHVuaWZ5KHQpO1xuXHRcdHZhciBzYSA9IHQgLSBmO1xuXHRcdGlmIChzYSA+IHBpKSBzYSAtPSB0d29waTtcblx0XHRpZiAoc2EgPCAtcGkpIHNhICs9IHR3b3BpO1xuXG5cdFx0cmV0dXJuIHNhO1xuXHR9O1xuXG5cdG1lLnNob3J0ZXN0QW5nbGVUbyA9IGZ1bmN0aW9uKGYsIHQpIHtcblx0XHRyZXR1cm4gZittZS5zaG9ydGVzdEFuZ2xlKGYsIHQpO1xuXHR9O1xuXG5cdG1lLnNob3J0ZXN0TGVmdFR1cm4gPSBmdW5jdGlvbihmLCB0KSB7XG5cdFx0dmFyIHNhID0gbWUuc2hvcnRlc3RBbmdsZShmLCB0KTtcblx0XHRpZiAoc2EgPiAwKSBzYSA9IHNhIC0gTWF0aC5QSSoyO1xuXHRcdHJldHVybiBmK3NhO1xuXHR9O1xuXG5cdG1lLnNob3J0ZXN0UmlnaHRUdXJuID0gZnVuY3Rpb24oZiwgdCkge1xuXHRcdHZhciBzYSA9IG1lLnNob3J0ZXN0QW5nbGUoZiwgdCk7XG5cdFx0aWYgKHNhIDwgMCkgc2EgPSBNYXRoLlBJKjIgKyBzYTtcblx0XHRyZXR1cm4gZitzYTtcblx0fTtcblxuXG5cdC8qXG5cdCAqIHJldHVybnMgdGhlIGluc3RhbmNlIG9mIGEgYnViYmxlIGZvciBhIGdpdmVuIG5vZGVcblx0ICovXG5cdG1lLmdldEJ1YmJsZSA9IGZ1bmN0aW9uKG5vZGUsIGtlZXBIaWRkZW4pIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREaXNwbGF5T2JqZWN0KCdidWJibGUnLCBub2RlLCBrZWVwSGlkZGVuKTtcblx0fTtcblxuXHQvKlxuXHQgKlxuXHQgKi9cblx0bWUuZ2V0UmluZyA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXREaXNwbGF5T2JqZWN0KCdyaW5nJywgbm9kZSk7XG5cdH07XG5cblx0bWUuZ2V0RGlzcGxheU9iamVjdCA9IGZ1bmN0aW9uKGNsYXNzTmFtZSwgbm9kZSwga2VlcEhpZGRlbikge1xuXHRcdHZhciBtZSA9IHRoaXMsIGksIG87XG5cdFx0Zm9yIChpIGluIG1lLmRpc3BsYXlPYmplY3RzKSB7XG5cdFx0XHRvID0gbWUuZGlzcGxheU9iamVjdHNbaV07XG5cdFx0XHRpZiAoby5jbGFzc05hbWUgIT0gY2xhc3NOYW1lKSBjb250aW51ZTtcblx0XHRcdGlmIChvLm5vZGUgPT0gbm9kZSkge1xuXHRcdFx0XHRpZiAoIWtlZXBIaWRkZW4pIG8uaGlkZUZsYWcgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZpczQubG9nKGNsYXNzTmFtZSsnIG5vdCBmb3VuZCBmb3Igbm9kZScsIG5vZGUpO1xuXHR9O1xuXG5cdC8qXG5cdG1lLmNyZWF0ZVJpbmcgPSBmdW5jdGlvbih0LCBvcmlnaW4sIHJhZCwgYXR0cikge1xuXHRcdHZhciBtZSA9IHRoaXMsIG5zID0gbWUubnMsXG5cdFx0XHRyaW5nID0gbmV3IG5zLlJpbmcobWUsIG9yaWdpbiwgYXR0ciwgcmFkKTtcblx0XHRyaW5nLnRvQmFjaygpO1xuXHRcdG1lLnJpbmdzLnB1c2gocmluZyk7XG5cdFx0dC4kKHJpbmcpLnJhZCA9IHJhZDtcblx0XHRyZXR1cm4gcmluZztcblx0fTtcblx0Ki9cblxuXHRtZS5pbml0SGlzdG9yeSA9IGZ1bmN0aW9uKCkge1xuXHRcdGhpc3RvcnkuaW5pdChtZS51cmxDaGFuZ2VkLmJpbmQobWUpLCB7IHVuZXNjYXBlOiBcIiwvXCIgfSk7XG5cdH07XG5cblx0bWUuZnJlc2hVcmwgPSAnJztcblxuXHQvKlxuXHQgKiBjYWxsYmFjayBmb3IgZXZlcnkgdXJsIGNoYW5nZSwgZWl0aGVyIGluaXRpYXRlZCBieSB1c2VyIG9yXG5cdCAqIGJ5IHRoaXMgY2xhc3MgaXRzZWxmXG5cdCAqL1xuXHRtZS51cmxDaGFuZ2VkID0gZnVuY3Rpb24oaGFzaCkge1xuXHRcdHZhciBtZSA9IHRoaXMsIHRyID0gbWUuY3VycmVudFRyYW5zaXRpb247XG5cblx0XHRpZiAoIW1lLmZyZXNoVXJsKSB7XG5cdFx0XHQvLyBzZXR0aW5nIGFuIHVybCBmb3IgdGhlIHZlcnkgZmlyc3QgdGltZVxuXHRcdFx0aWYgKGhhc2guaW5kZXhPZignL34vJykpIHtcblx0XHRcdFx0bWUuYmFzZVVybCA9IGhhc2guc3Vic3RyKDAsIGhhc2guaW5kZXhPZignL34vJykpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtZS5mcmVzaFVybCA9IGhhc2g7XG5cblx0XHRpZiAodHIgJiYgdHIucnVubmluZykge1xuXHRcdFx0dmlzNC5sb2coJ3RyYW5zaXRpb24gaXMgcnVubmluZyBhdCB0aGUgbW9tZW50LCBhZGRpbmcgbGlzdGVuZXInKTtcblx0XHRcdHRyLm9uQ29tcGxldGUobWUuY2hhbmdlVXJsLmJpbmQobWUpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWUuY2hhbmdlVXJsKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qXG5cdCAqIHRoaXMgZnVuY3Rpb24gaW5pdGlhdGUgdGhlIGFjdGlvbiB3aGljaCBmb2xsb3dzIHRoZSB1cmwgY2hhbmdlXG5cdCAqL1xuXHRtZS5jaGFuZ2VVcmwgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCBwYXJ0cyA9IG1lLmZyZXNoVXJsLnNwbGl0KCcvJyksIHRva2VuID0gcGFydHNbcGFydHMubGVuZ3RoLTFdLCB1cmw7XG5cblx0XHQvLyB2YXIgdXJsUGFydHMgPSBtZS5mcmVzaFVybC5zcGxpdCgnL34vJyk7XG5cdFx0aWYgKG1lLmZyZXNoVXJsID09PSBcIlwiKSBtZS5uYXZpZ2F0ZVRvKG1lLnRyZWVSb290KTtcblxuXHRcdGlmIChtZS5ub2Rlc0J5VXJsVG9rZW4uaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cdFx0XHR1cmwgPSBtZS5nZXRVcmxGb3JOb2RlKG1lLm5vZGVzQnlVcmxUb2tlblt0b2tlbl0pO1xuXHRcdFx0aWYgKG1lLmZyZXNoVXJsICE9IHVybCkge1xuXHRcdFx0XHQvLyBub2RlIGZvdW5kIGJ1dCB1cmwgbm90IHBlcmZlY3Rcblx0XHRcdFx0aGlzdG9yeS5sb2FkKHVybCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZS5uYXZpZ2F0ZVRvKG1lLm5vZGVzQnlVcmxUb2tlblt0b2tlbl0sIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZS5uYXZpZ2F0ZVRvKG1lLnRyZWVSb290KTtcblx0XHR9XG5cdH07XG5cblx0bWUubmF2aWdhdGVUbyA9IGZ1bmN0aW9uKG5vZGUsIGZyb21VcmxDaGFuZ2UpIHtcblx0XHQvLyB2aXM0LmxvZygnYmMubmF2aWdhdGVUbygnLG5vZGUsJywnLGZyb21VcmxDaGFuZ2UsJyknKTtcblx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdGlmIChmcm9tVXJsQ2hhbmdlKSBtZS5jaGFuZ2VWaWV3KG5vZGUudXJsVG9rZW4pO1xuXHRcdGVsc2UgaGlzdG9yeS5sb2FkKG1lLmdldFVybEZvck5vZGUobm9kZSkpO1xuXHRcdC8vXG5cdFx0JCgnLmJ1YmJsZXRyZWUtbGFiZWwsIC5idWJibGV0cmVlLWxhYmVsMicsIG1lLiRjb250YWluZXIpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG5cdFx0JCgnLmJ1YmJsZXRyZWUtbGFiZWwyLicrbm9kZS5pZCwgbWUuJGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcblx0XHQkKCcuYnViYmxldHJlZS1sYWJlbC4nK25vZGUuaWQsIG1lLiRjb250YWluZXIpLmFkZENsYXNzKCdjdXJyZW50Jyk7XG5cdH07XG5cblx0Lypcblx0ICogY3JlYXRlcyBhIHZhbGlkIHVybCBmb3IgYSBnaXZlbiBub2RlLCBlLmcuIC8yMDEwL2hlYWx0aC9tZWRpY2FsLXN1cHBsaWVzXG5cdCAqL1xuXHRtZS5nZXRVcmxGb3JOb2RlID0gZnVuY3Rpb24obm9kZSkge1xuXHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdHBhcnRzLnB1c2gobm9kZS51cmxUb2tlbik7XG5cdFx0d2hpbGUgKG5vZGUucGFyZW50KSB7XG5cdFx0XHRwYXJ0cy5wdXNoKG5vZGUucGFyZW50LnVybFRva2VuKTtcblx0XHRcdG5vZGUgPSBub2RlLnBhcmVudDtcblx0XHR9XG5cdFx0cGFydHMucmV2ZXJzZSgpO1xuXHRcdHJldHVybiBtZS5iYXNlVXJsKycvfi8nK3BhcnRzLmpvaW4oJy8nKTtcblx0fTtcblxuXHRtZS5vbk5vZGVDbGljayA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRpZiAoJC5pc0Z1bmN0aW9uKG1lLmNvbmZpZy5ub2RlQ2xpY2tDYWxsYmFjaykpIHtcblx0XHRcdG1lLmNvbmZpZy5ub2RlQ2xpY2tDYWxsYmFjayhub2RlKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gcmVtb3ZlcyBhbGwgbm9kZXNcblx0bWUuY2xlYW4gPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCBpO1xuXHRcdCQoJy5idWJibGV0cmVlLWxhYmVsJykucmVtb3ZlKCk7XG5cdFx0Lypmb3IgKGkgaW4gbWUuZGlzcGxheU9iamVjdHMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICgkLmlzRnVuY3Rpb24obWUuZGlzcGxheU9iamVjdHNbaV0uaGlkZSkpIG1lLmRpc3BsYXlPYmplY3RzW2ldLmhpZGUoKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblxuXHRcdFx0fVxuXHRcdH0qL1xuXHR9O1xuXG5cdHRoaXMubG9vcCA9IGZ1bmN0aW9uKCkge1xuXHRcdFRXRUVOLnVwZGF0ZSgpO1xuXHR9O1xuXG5cdGlmICghbWUuY29uZmlnLmhhc093blByb3BlcnR5KCdkYXRhJykpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ25vIGRhdGEnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbWUuY29uZmlnLmRhdGEgPT0gXCJzdHJpbmdcIikge1xuXHRcdC8vIHVzZSB0aGUgZ2l2ZW4ganMgb2JqZWN0XG5cdFx0bWUubG9hZERhdGEoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBsb2FkIGxvY2FsIHRyZWUganNvbiBmaWxlXG5cdFx0bmV3IHZpczQuRGVsYXllZFRhc2soMTAwMCwgbWUsIG1lLnNldERhdGEsIG1lLmNvbmZpZy5kYXRhKTtcblx0fVxufTtcblxuQnViYmxlVHJlZS5TdHlsZXMgPSB7fTtcblxuLypqc2hpbnQgdW5kZWY6IHRydWUsIGJyb3dzZXI6dHJ1ZSwganF1ZXJ5OiB0cnVlLCBkZXZlbDogdHJ1ZSwgc21hcnR0YWJzOiB0cnVlICovXG4vKmdsb2JhbCBSYXBoYWVsLCBUV0VFTiwgQnViYmxlVHJlZSAqL1xuXG4vKlxuICogc3RvcmVzIHZpc3VhbCBhdHRyaWJ1dGVzIG9mIGFsbCBlbGVtZW50cyBpbiB0aGUgdmlzdWFsaXphdGlvblxuICogXG4gKi9cbkJ1YmJsZVRyZWUuTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG5cblx0dmFyIG1lID0gdGhpcztcblx0bWUub2JqZWN0cyA9IFtdO1xuXHRtZS5wcm9wcyA9IFtdO1xuXHRtZS50b0hpZGUgPSBbXTtcblx0bWUudG9TaG93ID0gW107XG5cdFxuXHQvKlxuXHQgKiBmbGFyZS1zdHlsZSB0cmFuc2l0aW9uZXIgc3ludGF4XG5cdCAqXG5cdCAqIGlmIHlvdSBoYXZlIGFuIG9iamVjdCBidWJibGUsIHlvdSBjYW4gZWFzaWx5IGNoYW5nZSBpdHMgcHJvcGVydGllcyB3aXRoXG5cdCAqIFxuXHQgKiB2YXIgbCA9IG5ldyBPcGVuU3BlbmRpbmdzLkJ1YmJsZVRyZWUuTGF5b3V0KCk7XG5cdCAqIGwuJChidWJibGUpLnJhZGl1cyA9IDMwO1xuXHQgKiBsLiQoYnViYmxlKS5hbmdsZSA9IDMuMTQ7XG5cdCAqL1xuXHRtZS4kID0gZnVuY3Rpb24ob2JqKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgaSwgbywgcDtcblx0XHRmb3IgKGkgaW4gbWUub2JqZWN0cykge1xuXHRcdFx0byA9IG1lLm9iamVjdHNbaV07XG5cdFx0XHRpZiAobyA9PSBvYmopIHJldHVybiBtZS5wcm9wc1tpXTtcblx0XHR9XG5cdFx0bWUub2JqZWN0cy5wdXNoKG9iaik7XG5cdFx0cCA9IHt9O1xuXHRcdG1lLnByb3BzLnB1c2gocCk7XG5cdFx0cmV0dXJuIHA7XG5cdH07XG5cdFxuXHQvKlxuXHQgKiB1c2UgbWUgZnVuY3Rpb24gdG8gbWFyayBvYmplY3RzIHRoYXQgc2hvdWxkIGJlIHNob3duIGJlZm9yZVxuXHQgKiB0aGUgdHJhbnNpdGlvblxuXHQgKi9cblx0bWUuc2hvdyA9IGZ1bmN0aW9uKG9iaikge1xuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0bWUudG9TaG93LnB1c2gob2JqKTtcblx0fTtcblx0XG5cdFxuXHQvKlxuXHQgKiB1c2UgbWUgZnVuY3Rpb24gdG8gbWFyayBvYmplY3RzIHRoYXQgc2hvdWxkIGJlIGhpZGRlbiBhZnRlclxuXHQgKiB0aGUgdHJhbnNpdGlvblxuXHQgKi9cblx0bWUuaGlkZSA9IGZ1bmN0aW9uKG9iaikge1xuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0bWUudG9IaWRlLnB1c2gob2JqKTtcblx0fTtcblx0XG59O1xuLypqc2hpbnQgdW5kZWY6IHRydWUsIGJyb3dzZXI6dHJ1ZSwganF1ZXJ5OiB0cnVlLCBkZXZlbDogdHJ1ZSAqL1xuLypnbG9iYWwgUmFwaGFlbCwgVFdFRU4sIEJ1YmJsZVRyZWUgKi9cbi8qXG4gKiByZXByZXNlbnRzIGEgcmFkaWFsIGxpbmVcbiAqL1xuQnViYmxlVHJlZS5MaW5lID0gZnVuY3Rpb24oYmMsIGF0dHIsIG9yaWdpbiwgYW5nbGUsIGZyb21SYWQsIHRvUmFkKSB7XG5cdHRoaXMuYmMgPSBiYztcblx0dGhpcy5vID0gb3JpZ2luO1xuXHR0aGlzLmFuZ2xlID0gYW5nbGU7XG5cdHRoaXMuZnJvbVJhZCA9IGZyb21SYWQ7XG5cdHRoaXMuYXR0ciA9IGF0dHI7XG5cdHRoaXMudG9SYWQgPSB0b1JhZDtcblx0XG5cdHRoaXMuZ2V0WFkgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLngxID0gdGhpcy5vLnggKyBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIHRoaXMuZnJvbVJhZDsgXG5cdFx0dGhpcy55MSA9IHRoaXMuby55IC1NYXRoLnNpbih0aGlzLmFuZ2xlKSAqIHRoaXMuZnJvbVJhZDtcblx0XHR0aGlzLngyID0gdGhpcy5vLnggKyBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIHRoaXMudG9SYWQ7IFxuXHRcdHRoaXMueTIgPSB0aGlzLm8ueSAgLU1hdGguc2luKHRoaXMuYW5nbGUpICogdGhpcy50b1JhZDtcblx0fTtcblx0XG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZ2V0WFkoKTtcblx0XHRjb25zb2xlLmxvZyhcImZvb1wiLCBcIk1cIit0aGlzLngxK1wiIFwiK3RoaXMueTErXCJMXCIrdGhpcy54MitcIiBcIit0aGlzLnkyLCBhdHRyKTtcblx0XHR0aGlzLnBhdGggPSB0aGlzLmJjLnBhcGVyLnBhdGgoXG5cdFx0XHRcIk1cIit0aGlzLngxK1wiIFwiK3RoaXMueTErXCJMXCIrdGhpcy54MitcIiBcIit0aGlzLnkyXG5cdFx0KS5hdHRyKHRoaXMuYXR0cik7XG5cdH07XG5cdFxuXHR0aGlzLmRyYXcgPSBmdW5jdGlvbigpIHtcblx0XHQvL2NvbnNvbGUubG9nKCdsaW5lLmRyYXcoKScsIHRoaXMuYW5nbGUsIHRoaXMuZnJvbVJhZCwgdGhpcy50b1JhZCk7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLngxLCB0aGlzKTtcblx0XHR0aGlzLmdldFhZKCk7XG5cdFx0Ly9jb25zb2xlLmxvZyh0aGlzLngxKTtcblx0XHR0aGlzLnBhdGguYXR0cih7IHBhdGg6IFwiTVwiK3RoaXMueDErXCIgXCIrdGhpcy55MStcIkxcIit0aGlzLngyK1wiIFwiK3RoaXMueTIgfSk7XG5cdH07XG5cdFxuXHRcblx0dGhpcy5pbml0KCk7XG5cdFxufTtcbi8qanNoaW50IHVuZGVmOiB0cnVlLCBicm93c2VyOnRydWUsIGpxdWVyeTogdHJ1ZSwgZGV2ZWw6IHRydWUsIHNtYXJ0dGFiczogdHJ1ZSAqL1xuLypnbG9iYWwgdmlzNCwgQnViYmxlVHJlZSAqL1xuXG4vKlxuICogbG9hZHMgdGhlIGRhdGEgYW5kIGluaXRpYWxpemVzIHRoZSBidWJibGVjaGFydFxuICogeW91IG5lZWQgdG8gaW5jbHVkZSB0aGUgYnViYmxlY2hhcnQubWluLmpzIGZpcnN0XG4gKi9cbkJ1YmJsZVRyZWUuTG9hZGVyID0gZnVuY3Rpb24oY29uZmlnKSB7XG5cblx0dmFyIG1lID0gdGhpcztcblxuXHRtZS5jb25maWcgPSBjb25maWc7XG5cblx0bWUubnMgPSBCdWJibGVUcmVlO1xuXG5cdC8qXG5cdCAqIGxvYWRzIGRhdGEgZnJvbSBhIGxvY2FsIEpTT04gZmlsZVxuXHQgKi9cblx0bWUubG9hZERhdGEgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCB1cmwgPSBtZS5jb25maWcuZGF0YTtcblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyB1cmwgJyx1cmwpO1xuXHRcdCQuYWpheCh7XG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdGNvbnRleHQ6IG1lLFxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0dGhpcy5ydW4oZGF0YSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Lypcblx0ICogcnVuIHdpbGwgYmUgY2FsbGVkIGJ5IGRhdGFMb2FkZWQgb25jZSwgd2VsbCwgdGhlIGRhdGEgaXMgbG9hZGVkXG5cdCAqL1xuXHRtZS5ydW4gPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHQvLyBpbml0aWFsaXplIGJ1YmJsZSBjaGFydFxuXHRcdHZhciBidWJibGVDaGFydCA9IG5ldyBCdWJibGVUcmVlKFxuXHRcdFx0bWUuY29uZmlnXG5cdFx0KTtcblx0XHRidWJibGVDaGFydC5zZXREYXRhKGRhdGEpO1xuXHRcdG1lLmNvbmZpZy5pbnN0YW5jZSA9IGJ1YmJsZUNoYXJ0O1xuXHR9O1xuXG5cdGlmICghbWUuY29uZmlnLmhhc093blByb3BlcnR5KCdkYXRhJykpIHtcblx0XHQvL2NvbnNvbGUuZXJyb3IoJ0J1YmJsZVRyZWUgRXJyb3I6IG5vIGRhdGEgc2V0JywgbWUuY29uZmlnKTtcblx0fVxuXHRpZiAodHlwZW9mIG1lLmNvbmZpZy5kYXRhID09IFwic3RyaW5nXCIpIHtcblx0XHQvLyB1c2UgdGhlIGdpdmVuIGpzIG9iamVjdFxuXHRcdG1lLmxvYWREYXRhKCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gbG9hZCBsb2NhbCB0cmVlIGpzb24gZmlsZVxuXHRcdG1lLnJ1bihtZS5jb25maWcuZGF0YSk7XG5cdH1cbn07XG5cblxuLypqc2hpbnQgdW5kZWY6IHRydWUsIGJyb3dzZXI6dHJ1ZSwganF1ZXJ5OiB0cnVlLCBkZXZlbDogdHJ1ZSwgc21hcnR0YWJzOiB0cnVlICovXG4vKmdsb2JhbCB2aXM0LCBCdWJibGVUcmVlICovXG4vKlxuICogaW4gSlMgdGhlcmUncyBubyB0aGluZyBsaWtlIG1vdXNlIGV2ZW50IGNhcHN1bGF0aW9uLCB0aGlzXG4gKiBjbGFzcyB3aWxsIHdvcmsgYXJvdW5kIHRoaXMuIEl0IG1ha2VzIGl0IHBvc3NpYmxlIHRvIHNldFxuICogZXZlbnRzIGxpa2UgY2xpY2sgYW5kIGhvdmVyIGZvciBhIGdyb3VwIG9mIG9iamVjdHMgdGhhdFxuICogYmVsb25nIHRvZ2V0aGVyXG4gKi9cbkJ1YmJsZVRyZWUuTW91c2VFdmVudEdyb3VwID0gZnVuY3Rpb24odGFyZ2V0LCBtZW1iZXJzKSB7XG5cdFxuXHR2YXIgbWUgPSB0aGlzO1xuXHRtZS50YXJnZXQgPSB0YXJnZXQ7IC8vIGUuZy4gaW5zdGFuY2Ugb2YgYSBidWJibGVcblx0bWUubWVtYmVycyA9IG1lbWJlcnM7IC8vIGUuZy4gcmFwaGFlbCBub2RlcyBvciBodG1sIGVsZW1lbnRzXG5cdFxuXHQvKlxuXHQgKiBwdWJsaWMgaW50ZXJmYWNlIGZvciBzZXR0aW5nIGNsaWNrIGhhbmRsZXJzXG5cdCAqL1xuXHRtZS5jbGljayA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgbWVtYmVycyA9IG1lLm1lbWJlcnMsIGksIG1lbTtcblx0XHRtZS5jbGlja0NhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0Zm9yIChpIGluIG1lbWJlcnMpIHtcblx0XHRcdG1lbSA9IG1lbWJlcnNbaV07XG5cdFx0XHQkKG1lbSkuY2xpY2sobWUuaGFuZGxlQ2xpY2suYmluZChtZSkpO1xuXHRcdH1cblx0fTtcblx0XG5cdG1lLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHRtZS5jbGlja0NhbGxiYWNrKHsgdGFyZ2V0OiBtZS50YXJnZXQsIG9yaWdFdmVudDogZXZ0LCBtb3VzZUV2ZW50R3JvdXA6IG1lIH0pO1xuXHR9O1xuXHRcblx0Lypcblx0ICpcblx0ICovXG5cdG1lLmhvdmVyID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgbWUgPSB0aGlzLCBtZW1iZXJzID0gbWUubWVtYmVycywgaSwgbWVtO1xuXHRcdG1lLmhvdmVyQ2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHRmb3IgKGkgaW4gbWVtYmVycykge1xuXHRcdFx0bWVtID0gbWVtYmVyc1tpXTtcblx0XHRcdCQobWVtKS5ob3ZlcihtZS5oYW5kbGVNZW1iZXJIb3Zlci5iaW5kKG1lKSwgbWUuaGFuZGxlTWVtYmVyVW5Ib3Zlci5iaW5kKG1lKSk7XG5cdFx0fVxuXHR9O1xuXHRcblx0Lypcblx0ICogcHVibGljIGludGVyZmFjZSBmb3Igc2V0dGluZyB1bmhvdmVyIGNhbGxiYWNrXG5cdCAqL1xuXHRtZS51bmhvdmVyID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdG1lLnVuaG92ZXJDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR9O1xuXHRcblx0Lypcblx0ICogc3RvcmVzIHdldGhlciB0aGUgbW91c2UgY3VycmVudGx5IGhvdmVyIG92ZXIgYW55XG5cdCAqIG9iamVjdCBpbiBvdXIgbWVtYmVycyBsaXN0LiB0aGlzIGlzIHVzZWQgdG8gY2hlY2tcblx0ICogd2V0aGVyIGEgb2NjdXJpbmcgaG92ZXIgZXZlbnQgaXMgYW4gYWN0dWFsIGhvdmVyXG5cdCAqIGV2ZW50LlxuXHQgKi9cblx0bWUud2FzSG92ZXJpbmcgPSBmYWxzZTtcblx0bWUubW91c2VJc092ZXIgPSBmYWxzZTtcblx0XG5cdG1lLmhhbmRsZU1lbWJlckhvdmVyID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHQvLyBzaW5jZSB3ZSBkb24ndCBrbm93IHdoaWNoIGV2ZW50IHdpbGwgcmVjZWl2ZSBmaXJzdCwgdGhlIHVuaG92ZXIgb2YgdGhlIG1lbWJlclxuXHRcdC8vIHRoZSBtb3VzZSBpcyBsZWF2aW5nIG9yIHRoZSBob3ZlciBvZiB0aGUgbWVtYmVyIHRoZSBtb3VzZSBpcyBlbnRlcmluZywgd2Ugd2lsbFxuXHRcdC8vIGRlbGF5IHRoZSBmaW5hbCBjaGVjayBhIGJpdFxuXHRcdG5ldyB2aXM0LkRlbGF5ZWRUYXNrKDI1LCBtZSwgbWUuaGFuZGxlTWVtYmVySG92ZXJEZWxheWVkLCBldnQpO1x0XG5cdFx0XG5cdH07XG5cblx0Lypcblx0ICogd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgYWxsIHVuaG92ZXIgZXZlbnRzIGFyZSBwcm9jZXNzZWRcblx0ICovXG5cdG1lLmhhbmRsZU1lbWJlckhvdmVyRGVsYXllZCA9IGZ1bmN0aW9uKGV2dCkge1xuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0Ly8gdGhpcyB3aWxsIGV2ZW50dWFsbHkgb3ZlcnJpZGUgdGhlIGZhbHNlIHNldCBieSBoYW5kbGVNZW1iZXJVbkhvdmVyIGEgZmV3XG5cdFx0Ly8gbWlsbGlzZWNvbmRzIG9rLiBFeGFjdGx5IHdoYXQgd2Ugd2FudCFcblx0XHRtZS5tb3VzZUlzT3ZlciA9IHRydWU7XG5cdFx0XHRcdFxuXHRcdGlmICghbWUud2FzSG92ZXJpbmcpIHtcblx0XHRcdC8vIHRoZSB0YXJnZXQgaXMgbmV3bHkgaG92ZXJlZFxuXHRcdFx0XG5cdFx0XHRtZS53YXNIb3ZlcmluZyA9IHRydWU7XG5cdFx0XHRpZiAoJC5pc0Z1bmN0aW9uKG1lLmhvdmVyQ2FsbGJhY2spKSB7XG5cdFx0XHRcdG1lLmhvdmVyQ2FsbGJhY2soeyB0YXJnZXQ6IG1lLnRhcmdldCwgb3JpZ0V2ZW50OiBldnQsIG1vdXNlRXZlbnRHcm91cDogbWUgfSk7XG5cdFx0XHR9XG5cdFx0fSAvLyBlbHNlIGNhbiBiZSBpZ25vcmVkLCBubyBuZXdzXG5cdH07XG5cdFxuXG5cdG1lLmhhbmRsZU1lbWJlclVuSG92ZXIgPSBmdW5jdGlvbihldnQpIHtcblx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdG1lLm1vdXNlSXNPdmVyID0gZmFsc2U7XG5cdFx0Ly8gd2UgbmVlZCB0byB3YWl0IGEgYml0IHRvIGZpbmQgb3V0IGlmIHRoaXMgaXMgYSByZWFsIHVuaG92ZXIgZXZlbnRcblx0XHQvLyBvciBqdXN0IHRoZSBjaGFuZ2UgdG8gYW5vdGhlciBlbGVtZW50IGluIHRoZSBtZW1iZXIgbGlzdFxuXHRcdC8vIHNvIHdlIG5lZWQgdG8gZGVsYXkgdGhlIGZpbmFsIGNoZWNrIGEgYml0IChsZXQncyBzYXkgMzBtcylcblx0XHRuZXcgdmlzNC5EZWxheWVkVGFzayg0MCwgbWUsIG1lLmhhbmRsZU1lbWJlclVuSG92ZXJEZWxheWVkLCBldnQpO1x0XG5cdH07XG5cdFxuXHRtZS5oYW5kbGVNZW1iZXJVbkhvdmVyRGVsYXllZCA9IGZ1bmN0aW9uKGV2dCkge1xuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0aWYgKCFtZS5tb3VzZUlzT3Zlcikge1xuXHRcdFx0Ly8gd2VsbCwgZmluYWxseSBubyBuYXN0eSBob3ZlciBldmVudCBoYXMgZGlzdHVyYmVkIG91ciBnb29kIHVuaG92ZXJcblx0XHRcdC8vIHByb2Nlc3MsIHNvIHdlIGNhbiBhc3N1bWUgdGhhdCB0aGlzIGlzIGEgcmVhbCB1bmhvdmVyIGV2ZW50XG5cdFx0XHRcblx0XHRcdG1lLndhc0hvdmVyaW5nID0gZmFsc2U7XG5cdFx0XHRpZiAoJC5pc0Z1bmN0aW9uKG1lLnVuaG92ZXJDYWxsYmFjaykpIHtcblx0XHRcdFx0bWUudW5ob3ZlckNhbGxiYWNrKHsgdGFyZ2V0OiBtZS50YXJnZXQsIG9yaWdFdmVudDogZXZ0LCBtb3VzZUV2ZW50R3JvdXA6IG1lIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0XHRcblx0Lypcblx0ICogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIGZvciBsYXRlciBhZGRpdGlvbiBvZiBtZW1iZXIgb2JqZWN0cyBsaWtlIGR5bmFtaWMgdG9vbHRpcHNcblx0ICovXG5cdG1lLmFkZE1lbWJlciA9IGZ1bmN0aW9uKG1lbSkge1xuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0Ly8gaWYgKG1lLmNsaWNrQ2FsbGJhY2sgJiYgbm9DbGljaykgJChtZW0pLmNsaWNrKG1lLmhhbmRsZUNsaWNrLmJpbmQobWUpKTtcblx0XHRpZiAobWUuaG92ZXJDYWxsYmFjaykgJChtZW0pLmhvdmVyKG1lLmhhbmRsZU1lbWJlckhvdmVyLmJpbmQobWUpLCBtZS5oYW5kbGVNZW1iZXJVbkhvdmVyLmJpbmQobWUpKTtcblx0XHRtZS5tZW1iZXJzLnB1c2gobWVtKTtcblx0fTtcblx0XG5cdC8qXG5cdCAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCBmb3IgbGF0ZXIgcmVtb3ZhbCBvZiBtZW1iZXIgb2JqZWN0cyBsaWtlIGR5bmFtaWMgdG9vbHRpcHNcblx0ICovXG5cdG1lLnJlbW92ZU1lbWJlciA9IGZ1bmN0aW9uKG1lbSkge1xuXHRcdHZhciBtZSA9IHRoaXMsIG1lbWJlcnMgPSBtZS5tZW1iZXJzLCBpLCB0bXAgPSBbXTtcblx0XHRpZiAobWUuY2xpY2tDYWxsYmFjaykgJChtZW0pLnVuYmluZCgnY2xpY2snKTtcblx0XHRpZiAobWUuaG92ZXJDYWxsYmFjaykgJChtZW0pLnVuYmluZCgnbW91c2VlbnRlciBtb3VzZWxlYXZlJyk7XG5cdFx0Zm9yIChpIGluIG1lbWJlcnMpIHtcblx0XHRcdGlmIChtZW1iZXJzW2ldICE9IG1lbSkgdG1wLnB1c2gobWVtYmVyc1tpXSk7XG5cdFx0fVxuXHRcdG1lLm1lbWJlcnMgPSB0bXA7XG5cdFx0XG5cdH07XG59O1xuXG4vKmpzaGludCB1bmRlZjogdHJ1ZSwgYnJvd3Nlcjp0cnVlLCBqcXVlcnk6IHRydWUsIGRldmVsOiB0cnVlLCBzbWFydHRhYnM6IHRydWUgKi9cbi8qZ2xvYmFsIFJhcGhhZWwsIFRXRUVOLCBCdWJibGVUcmVlICovXG5cbi8qXG4gKiByZXByZXNlbnRzIGEgcmluZ1xuICovXG5CdWJibGVUcmVlLlJpbmcgPSBmdW5jdGlvbihub2RlLCBiYywgbywgcmFkLCBhdHRyKSB7XG5cdFxuXHR2YXIgbWUgPSB0aGlzO1xuXHRtZS5jbGFzc05hbWUgPSBcInJpbmdcIjtcblx0bWUucmFkID0gcmFkO1xuXHRtZS5iYyA9IGJjO1xuXHRtZS5hdHRyID0gYXR0cjtcblx0bWUub3JpZ2luID0gbztcblx0bWUuYWxwaGEgPSAxO1xuXHRtZS52aXNpYmxlID0gZmFsc2U7XG5cdG1lLm5vZGUgPSBub2RlO1xuXHRcblx0bWUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vdmFyIG8gPSBtZS5vcmlnaW47XG5cdH07XG5cdFxuXHRtZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgbyA9IG1lLm9yaWdpbjtcblx0XHRpZiAoIW1lLnZpc2libGUpIHJldHVybjtcblx0XHRtZS5jaXJjbGUuYXR0cih7IGN4OiBvLngsIGN5OiBvLnksIHI6IG1lLnJhZCwgJ3N0cm9rZS1vcGFjaXR5JzogbWUuYWxwaGEgfSk7XG5cdH07XG5cdFxuXHQvKlxuXHQgKiByZW1vdmVzIGFsbCByYXBoYWVsIG5vZGVzIGZyb20gc3RhZ2Vcblx0ICovXG5cdG1lLmhpZGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdG1lLmNpcmNsZS5yZW1vdmUoKTtcblx0XHRtZS52aXNpYmxlID0gZmFsc2U7XG5cdH07XG5cdFxuXHRtZS5zaG93ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHRtZS5jaXJjbGUgPSBtZS5iYy5wYXBlci5jaXJjbGUoby54LCBvLnksIG1lLnJhZCkuYXR0cihtZS5hdHRyKTtcblx0XHRtZS52aXNpYmxlID0gdHJ1ZTtcblx0XHRtZS5jaXJjbGUudG9CYWNrKCk7XG5cdH07XG5cdFxuXHRcblx0bWUuaW5pdCgpO1xufTtcbi8qanNoaW50IHVuZGVmOiB0cnVlLCBicm93c2VyOnRydWUsIGpxdWVyeTogdHJ1ZSwgZGV2ZWw6IHRydWUgKi9cbi8qZ2xvYmFsIFJhcGhhZWwsIFRXRUVOLCB2aXM0LCBCdWJibGVUcmVlICovXG5cbi8qXG4gKiB0cmFuc2Zvcm1zIHRoZSBjdXJyZW50IGRpc3BsYXkgdG8gYSBuZXcgbGF5b3V0XG4gKiB3aGlsZSB0cmFuc2l0aW9uaW5nLCB0aGVyZSBhcmUgc2V2ZXJhbCBwb3NzaWJsZSBjYXNlczpcbiAqIC0gYSBub2RlIGV4aXN0cyBib3RoIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIHRyYW5zaXRpb25cbiAqIC0gYSBub2RlIGFwcGVhcnMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgdHJhbnNpdGlvblxuICogLSBhIG5vZGUgZGlzYXBwZWFycyBhdCB0aGUgZW5kIG9mIHRoZSB0cmFuc3Rpb25cbiAqL1xuIFxuQnViYmxlVHJlZS5UcmFuc2l0aW9uZXIgPSBmdW5jdGlvbihkdXJhdGlvbikge1xuXHRcblx0dmFyIG1lID0gdGhpcztcblx0XG5cdG1lLmR1cmF0aW9uID0gZHVyYXRpb247XG5cdG1lLnJ1bm5pbmcgPSBmYWxzZTtcblx0bWUuY29tcGxldGVDYWxsYmFja3MgPSBbXTtcblx0XG5cdG1lLmNoYW5nZUxheW91dCA9IGZ1bmN0aW9uKGxheW91dCkge1xuXHRcdHZhciBpLCBvLCBwcm9wcywgcCwgbWUgPSB0aGlzO1xuXHRcdG1lLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdG1lLmxheW91dCA9IGxheW91dDtcblx0XHRcblx0XHQvLyBhdCBmaXJzdCBzaG93IGFsbCBvYmplY3RzIHRoYXQgYXJlIG1hcmtlZCBmb3Igc2hvd2luZ1xuXHRcdGZvciAoaSBpbiBsYXlvdXQudG9TaG93KSB7XG5cdFx0XHRvID0gbGF5b3V0LnRvU2hvd1tpXTtcblx0XHRcdGlmICgkLmlzRnVuY3Rpb24oby5zaG93KSkgby5zaG93KCk7XG5cdFx0fVxuXHRcdFxuXHRcdGZvciAoaSBpbiBsYXlvdXQub2JqZWN0cykge1xuXHRcdFx0byA9IGxheW91dC5vYmplY3RzW2ldO1xuXHRcdFx0aWYgKG8gPT09IHVuZGVmaW5lZCB8fCBvID09PSBudWxsKSBjb250aW51ZTtcblx0XHRcdHByb3BzID0gbGF5b3V0LnByb3BzW2ldO1xuXHRcdFx0XG5cdFx0XHRpZiAobWUuZHVyYXRpb24gPiAwKSB7XG5cdFx0XHRcdHZhciB0d2VlbiA9IG5ldyBUV0VFTi5Ud2VlbihvKSwgdG9Qcm9wcyA9IHt9O1xuXHRcdFx0XHRcblx0XHRcdFx0Zm9yIChwIGluIHByb3BzKSB7XG5cdFx0XHRcdFx0Ly9vW3BdID0gcHJvcHNbcF07XG5cdFx0XHRcdFx0dG9Qcm9wc1twXSA9IHByb3BzW3BdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHR3ZWVuLnRvKHRvUHJvcHMsIG1lLmR1cmF0aW9uKTtcblx0XHRcdFx0dHdlZW4uZWFzaW5nKFRXRUVOLkVhc2luZy5FeHBvbmVudGlhbC5PdXQpO1xuXHRcdFx0XHRpZiAoJC5pc0Z1bmN0aW9uKG8uZHJhdykpIHR3ZWVuLm9uVXBkYXRlKG8uZHJhdy5iaW5kKG8pKTtcblx0XHRcdFx0aWYgKGkgPT0gbGF5b3V0Lm9iamVjdHMubGVuZ3RoLTEpIHR3ZWVuLm9uQ29tcGxldGUobWUuX2NvbXBsZXRlZC5iaW5kKG1lKSk7XG5cdFx0XHRcdHR3ZWVuLnN0YXJ0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKHAgaW4gcHJvcHMpIHtcblx0XHRcdFx0XHRvW3BdID0gcHJvcHNbcF07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG8gJiYgJC5pc0Z1bmN0aW9uKG8uZHJhdykpIG8uZHJhdygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobWUuZHVyYXRpb24gPT09IDApIHtcblx0XHRcdC8vIHJlZHJhdyBhbGxcblx0XHRcdGZvciAoaSBpbiBsYXlvdXQub2JqZWN0cykge1xuXHRcdFx0XHRvID0gbGF5b3V0Lm9iamVjdHNbaV07XG5cdFx0XHRcdGlmIChvICYmICQuaXNGdW5jdGlvbihvLmRyYXcpKSBvLmRyYXcoKTtcblx0XHRcdH1cblx0XHRcdG1lLl9jb21wbGV0ZWQoKTtcblx0XHR9XG5cdH07XG5cdFxuXHRtZS5vbkNvbXBsZXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoJC5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkgbWUuY29tcGxldGVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly92aXM0LmxvZyhlKTtcblx0XHR9XG5cdH07XG5cdFxuXHRtZS5fY29tcGxldGVkID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgY2FsbGJhY2tzID0gbWUuY29tcGxldGVDYWxsYmFja3MsIGksIG9iajtcblx0XHRtZS5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XG5cdFx0Zm9yIChpIGluIG1lLmxheW91dC5vYmplY3RzKSB7XG5cdFx0XHRvYmogPSBtZS5sYXlvdXQub2JqZWN0c1tpXTtcblx0XHRcdGlmIChvYmogJiYgJC5pc0Z1bmN0aW9uKG9iai5kcmF3KSkgb2JqLmRyYXcoKTsgLy8gdGhlIGZpbmFsIGRyYXdcdFxuXHRcdH1cblx0XHQvLyBub3cgaGlkZSBhbGwgb2JqZWN0cyBtYXJrZWQgZm9yIGhpZGluZ1xuXHRcdGZvciAoaSBpbiBtZS5sYXlvdXQudG9IaWRlKSB7XG5cdFx0XHRvYmogPSBtZS5sYXlvdXQudG9IaWRlW2ldO1xuXHRcdFx0aWYgKG9iaiAmJiAkLmlzRnVuY3Rpb24ob2JqLmhpZGUpKSBvYmouaGlkZSgpO1xuXHRcdH1cblx0XHRcblx0XHRmb3IgKGkgaW4gY2FsbGJhY2tzKSB7XG5cdFx0XHRjYWxsYmFja3NbaV0oKTtcblx0XHR9XG5cdH07XG5cdFxufTtcbi8qanNoaW50IHVuZGVmOiB0cnVlLCBicm93c2VyOnRydWUsIGpxdWVyeTogdHJ1ZSwgZGV2ZWw6IHRydWUgKi9cbi8qZ2xvYmFsIFJhcGhhZWwsIFRXRUVOLCBCdWJibGVUcmVlICovXG5cbkJ1YmJsZVRyZWUuVXRpbHMgPSB7fTtcblxuQnViYmxlVHJlZS5VdGlscy5sb2cgPSBmdW5jdGlvbigpIHtcblx0dHJ5IHtcblx0XHRpZiAod2luZG93Lmhhc093blByb3BlcnR5KCdjb25zb2xlJykpIGNvbnNvbGUubG9nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdH0gY2F0Y2ggKGUpIHt9XHRcbn07XG5cbkJ1YmJsZVRyZWUuVXRpbHMuYW1vdW50MnJhZCA9IGZ1bmN0aW9uKGEpIHtcblx0cmV0dXJuIE1hdGgucG93KE1hdGgubWF4KDAsIGEpIC9CdWJibGVUcmVlLmEycmFkQmFzZSwgMC42KTtcbn07XG5cbkJ1YmJsZVRyZWUuVXRpbHMuZm9ybWF0TnVtYmVyID0gZnVuY3Rpb24obikge1xuXHR2YXIgcHJlZml4ID0gJyc7XG5cdGlmIChuIDwgMCkge1xuXHRcdG4gPSBuKi0xO1xuXHRcdHByZWZpeCA9ICctJztcblx0fVxuXHRpZiAobiA+PSAxMDAwMDAwMDAwMDAwKSByZXR1cm4gcHJlZml4K01hdGgucm91bmQobiAvIDEwMDAwMDAwMDAwMCkvMTAgKyAndCc7XG5cdGlmIChuID49IDEwMDAwMDAwMDApIHJldHVybiBwcmVmaXgrTWF0aC5yb3VuZChuIC8gMTAwMDAwMDAwKS8xMCArICdiJztcblx0aWYgKG4gPj0gMTAwMDAwMCkgcmV0dXJuIHByZWZpeCtNYXRoLnJvdW5kKG4gLyAxMDAwMDApLzEwICsgJ20nO1xuXHRpZiAobiA+PSAxMDAwKSByZXR1cm4gcHJlZml4K01hdGgucm91bmQobiAvIDEwMCkvMTAgKyAnayc7XG5cdGVsc2UgcmV0dXJuIHByZWZpeCtuO1xuXHRcbn07XG5cbi8qanNoaW50IHVuZGVmOiB0cnVlLCBicm93c2VyOnRydWUsIGpxdWVyeTogdHJ1ZSwgZGV2ZWw6IHRydWUsIHNtYXJ0dGFiczogdHJ1ZSAqL1xuLypnbG9iYWwgQnViYmxlVHJlZSAqL1xuXG5cbkJ1YmJsZVRyZWUuVmVjdG9yID0gZnVuY3Rpb24oeCx5KSB7XG5cdHZhciBtZSA9IHRoaXM7XG5cdG1lLnggPSB4OyBcblx0bWUueSA9IHk7XG5cdFxuXHQvKlxuXHQgKiBjYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgdGhlIHZlY3RvclxuXHQgKi9cblx0bWUubGVuZ3RoID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KG1lLngqbWUueCArIG1lLnkgKiBtZS55KTtcblx0fTtcblx0XG5cdC8qXG5cdCAqIGNoYW5nZXMgdGhlIGxlbmd0aCBvZiB0aGUgdmVjdG9yXG5cdCAqL1xuXHRtZS5ub3JtYWxpemUgPSBmdW5jdGlvbihsZW4pIHtcblx0XHR2YXIgbWUgPSB0aGlzLCBsID0gbWUubGVuZ3RoKCk7XG5cdFx0aWYgKCFsZW4pIGxlbiA9IDEuMDtcblx0XHRtZS54ICo9IGxlbi9sO1xuXHRcdG1lLnkgKj0gbGVuL2w7XG5cdH07XG5cdFxuXHQvKlxuXHQgKiBjcmVhdGVzIGFuIGV4YWN0IGNvcHkgb2YgdGhpcyB2ZWN0b3Jcblx0ICovXG5cdG1lLmNsb25lID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHRyZXR1cm4gbmV3IEJ1YmJsZVRyZWUuVmVjdG9yKG1lLngsIG1lLnkpO1xuXHR9O1xufTtcbi8qanNoaW50IHVuZGVmOiB0cnVlLCBicm93c2VyOnRydWUsIGpxdWVyeTogdHJ1ZSwgZGV2ZWw6IHRydWUsIHNtYXJ0dGFiczogdHJ1ZSAqL1xuLypnbG9iYWwgUmFwaGFlbCwgVFdFRU4sIEJ1YmJsZVRyZWUsIHZpczQgKi9cblxuQnViYmxlVHJlZS5CdWJibGVzID0gQnViYmxlVHJlZS5CdWJibGVzIHx8IHt9O1xuXG4vKlxuICogcmVwcmVzZW50cyBhIGJ1YmJsZVxuICovXG5CdWJibGVUcmVlLkJ1YmJsZXMuUGxhaW4gPSBmdW5jdGlvbihub2RlLCBidWJibGVjaGFydCwgb3JpZ2luLCByYWRpdXMsIGFuZ2xlLCBjb2xvcikge1xuXG5cdHZhciBucyA9IEJ1YmJsZVRyZWUsIHV0aWxzID0gbnMuVXRpbHMsIG1lID0gdGhpcztcblx0bWUuY2xhc3NOYW1lID0gXCJidWJibGVcIjtcblx0bWUubm9kZSA9IG5vZGU7XG5cdG1lLnBhcGVyID0gYnViYmxlY2hhcnQucGFwZXI7XG5cdG1lLm9yaWdpbiA9IG9yaWdpbjtcblx0bWUuYmMgPSBidWJibGVjaGFydDtcblx0bWUucmFkID0gcmFkaXVzO1xuXHRtZS5hbmdsZSA9IGFuZ2xlO1xuXHRtZS5jb2xvciA9IGNvbG9yO1xuXHRtZS5hbHBoYSA9IDE7XG5cdG1lLnZpc2libGUgPSBmYWxzZTtcblx0bWUubnMgPSBucztcblx0bWUucG9zID0gbnMuVmVjdG9yKDAsMCk7XG5cdG1lLmJ1YmJsZVJhZCA9IHV0aWxzLmFtb3VudDJyYWQodGhpcy5ub2RlLmFtb3VudCk7XG5cdG1lLmNvbnRhaW5lciA9IG1lLmJjLiRjb250YWluZXI7XG5cblx0Lypcblx0ICogY2hpbGQgcm90YXRpb24gaXMganVzdCB1c2VkIGZyb20gb3V0c2lkZSB0byBsYXlvdXQgcG9zc2libGUgY2hpbGQgYnViYmxlc1xuXHQgKi9cblx0bWUuY2hpbGRSb3RhdGlvbiA9IDA7XG5cblxuXHQvKlxuXHQgKiBjb252ZXJ0ZXMgcG9sYXIgY29vcmRpbmF0ZXMgdG8geCx5XG5cdCAqL1xuXHRtZS5nZXRYWSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtZSA9IHRoaXMsIG8gPSBtZS5vcmlnaW4sIGEgPSBtZS5hbmdsZSwgciA9IG1lLnJhZDtcblx0XHRpZiAobWUucG9zID09PSB1bmRlZmluZWQpIG1lLnBvcyA9IG5ldyBtZS5ucy5WZWN0b3IoMCwwKTtcblx0XHRtZS5wb3MueCA9IG8ueCArIE1hdGguY29zKGEpICogcjtcblx0XHRtZS5wb3MueSA9IG8ueSAtIE1hdGguc2luKGEpICogcjtcblx0fTtcblxuXHQvKlxuXHQgKiBpbmlzdGFsaXplcyB0aGUgYnViYmxlXG5cdCAqL1xuXHRtZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHRtZS5nZXRYWSgpO1xuXG5cdFx0dmFyIHNob3dJY29uID0gZmFsc2U7IC8vdGhpcy5idWJibGVSYWQgKiB0aGlzLmJjLmJ1YmJsZVNjYWxlID4gMzA7XG5cblx0XHRpZiAoIW1lLm5vZGUuc2hvcnRMYWJlbCkgbWUubm9kZS5zaG9ydExhYmVsID0gbWUubm9kZS5sYWJlbC5sZW5ndGggPiBtZS5iYy5jb25maWcuY3V0TGFiZWxzQXQrMyA/IG1lLm5vZGUubGFiZWwuc3Vic3RyKDAsIG1lLmJjLmNvbmZpZy5jdXRMYWJlbHNBdCkrJy4uLicgOiBtZS5ub2RlLmxhYmVsO1xuXG5cdFx0bWUuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG5cdFx0Ly9tZS5zaG93KCk7XG5cdH07XG5cblx0Lypcblx0ICpcblx0ICovXG5cdG1lLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHRtZS5iYy5vbk5vZGVDbGljayhtZS5ub2RlKTtcblxuXHRcdC8vaWYgKG1lLm5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuXHRcdFx0bWUuYmMubmF2aWdhdGVUbyhtZS5ub2RlKTtcblx0XHQvL31cblx0fTtcblxuXHRtZS5vbmhvdmVyID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBtZSA9IHRoaXMsIGMgPSBtZS5iYy4kY29udGFpbmVyWzBdO1xuXHRcdGUubm9kZSA9IG1lLm5vZGU7XG5cdFx0ZS50YXJnZXQgPSBtZTtcblx0XHRlLmJ1YmJsZVBvcyA9IHsgeDptZS5wb3MueCwgeTogbWUucG9zLnkgfTtcblx0XHRlLm1vdXNlUG9zID0geyB4OmUub3JpZ0V2ZW50LnBhZ2VYIC0gYy5vZmZzZXRMZWZ0LCB5OiBlLm9yaWdFdmVudC5wYWdlWSAtIGMub2Zmc2V0VG9wIH07XG5cdFx0ZS50eXBlID0gJ1NIT1cnO1xuXHRcdG1lLmJjLnRvb2x0aXAoZSk7XG5cdH07XG5cblx0bWUub251bmhvdmVyID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBtZSA9IHRoaXMsIGMgPSBtZS5iYy4kY29udGFpbmVyWzBdO1xuXHRcdGUubm9kZSA9IG1lLm5vZGU7XG5cdFx0ZS50eXBlID0gJ0hJREUnO1xuXHRcdGUudGFyZ2V0ID0gbWU7XG5cdFx0ZS5idWJibGVQb3MgPSB7IHg6bWUucG9zLngsIHk6IG1lLnBvcy55IH07XG5cdFx0ZS5tb3VzZVBvcyA9IHsgeDplLm9yaWdFdmVudC5wYWdlWCAtIGMub2Zmc2V0TGVmdCwgeTogZS5vcmlnRXZlbnQucGFnZVkgLSBjLm9mZnNldFRvcCB9O1xuXHRcdG1lLmJjLnRvb2x0aXAoZSk7XG5cdH07XG5cblx0bWUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtZSA9IHRoaXMsXG5cdFx0XHRyID0gTWF0aC5tYXgoNSwgbWUuYnViYmxlUmFkICogbWUuYmMuYnViYmxlU2NhbGUpLFxuXHRcdFx0b3ggPSBtZS5wb3MueCxcblx0XHRcdG95ID0gbWUucG9zLnksXG5cdFx0XHRkZXZudWxsID0gbWUuZ2V0WFkoKSxcblx0XHR4ID0gbWUucG9zLngsIHkgPSBtZS5wb3MueTtcblx0XHRpZiAoIW1lLnZpc2libGUpIHJldHVybjtcblxuXHRcdG1lLmNpcmNsZS5hdHRyKHsgY3g6IG1lLnBvcy54LCBjeTogbWUucG9zLnksIHI6IHIsICdmaWxsLW9wYWNpdHknOiBtZS5hbHBoYSB9KTtcblx0XHRpZiAobWUubm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxKSBtZS5kYXNoZWRCb3JkZXIuYXR0cih7IGN4OiBtZS5wb3MueCwgY3k6IG1lLnBvcy55LCByOiByLTQsICdzdHJva2Utb3BhY2l0eSc6IG1lLmFscGhhICogMC45IH0pO1xuXHRcdGVsc2UgbWUuZGFzaGVkQm9yZGVyLmF0dHIoeyAnc3Ryb2tlLW9wYWNpdHknOiAwIH0pO1xuXG5cblx0XHQvL21lLmxhYmVsLmF0dHIoeyB4OiBtZS5wb3MueCwgeTogbWUucG9zLnksICdmb250LXNpemUnOiBNYXRoLm1heCg0LCBtZS5idWJibGVSYWQgKiBtZS5iYy5idWJibGVTY2FsZSAqIDAuMjUpIH0pO1xuXG5cdFx0bWUubGFiZWwuc2hvdygpO1xuXHRcdG1lLmxhYmVsLmZpbmQoJyonKS5zaG93KCk7XG5cdFx0bWUubGFiZWwyLnNob3coKTtcblx0XHRpZiAociA+PSBtZS5iYy5jb25maWcubWluUmFkaXVzTGFiZWxzKSB7XG5cdFx0XHQvLyBmdWxsIGxhYmVsXG5cdFx0XHRtZS5sYWJlbDIuaGlkZSgpO1xuXHRcdH0gZWxzZSBpZiAociA+PSBtZS5iYy5jb25maWcubWluUmFkaXVzQW1vdW50cykge1xuXHRcdFx0Ly8gZnVsbCBsYWJlbFxuXHRcdFx0bWUubGFiZWwuZmluZCgnLmJ1YmJsZXRyZWUtZGVzYycpLmhpZGUoKTtcblx0XHR9IGVsc2UgaWYgKHIgPj0gbWUuYmMuY29uZmlnLm1pblJhZGl1c0hpZGVMYWJlbHMpIHtcblx0XHRcdG1lLmxhYmVsLmhpZGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWUubGFiZWwuaGlkZSgpO1xuXHRcdFx0bWUubGFiZWwyLmhpZGUoKTtcblx0XHR9XG5cblx0XHRtZS5sYWJlbC5jc3MoeyB3aWR0aDogMipyKydweCcsIG9wYWNpdHk6IG1lLmFscGhhIH0pO1xuXHRcdG1lLmxhYmVsLmNzcyh7IGxlZnQ6IChtZS5wb3MueC1yKSsncHgnLCB0b3A6IChtZS5wb3MueS1tZS5sYWJlbC5oZWlnaHQoKSowLjUpKydweCcgfSk7XG5cblx0XHR2YXIgdyA9IE1hdGgubWF4KDcwLCAzKnIpO1xuXHRcdG1lLmxhYmVsMi5jc3MoeyB3aWR0aDogdysncHgnLCBvcGFjaXR5OiBtZS5hbHBoYSB9KTtcblx0XHRtZS5sYWJlbDIuY3NzKHsgbGVmdDogKHggLSB3KjAuNSkrJ3B4JywgdG9wOiAoeSArIHIpKydweCcgfSk7XG5cblx0XHQvL2lmIChtZS5pY29uKSBtZS5pY29uLnRyYW5zbGF0ZShtZS5wb3MueCAtIG94LCBtZS5wb3MueSAtIG95KTtcblxuXHR9O1xuXG5cdC8qXG5cdCAqIHJlbW92ZXMgYWxsIHZpc2libGUgZWxlbWVudHMgZnJvbSB0aGUgcGFnZVxuXHQgKi9cblx0bWUuaGlkZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtZSA9IHRoaXMsIGk7XG5cdFx0bWUuY2lyY2xlLnJlbW92ZSgpO1xuXHRcdG1lLmRhc2hlZEJvcmRlci5yZW1vdmUoKTtcblx0XHRtZS5sYWJlbC5yZW1vdmUoKTtcblx0XHRtZS5sYWJlbDIucmVtb3ZlKCk7XG5cblx0XHQvLyQoJyNidWJibGUtY2hhcnQnKVxuXHRcdG1lLnZpc2libGUgPSBmYWxzZTtcblxuXG5cdFx0Ly9pZiAobWUuaWNvbikgbWUuaWNvbi5yZW1vdmUoKTtcblx0fTtcblxuXHQvKlxuXHQgKiBhZGRzIGFsbCB2aXNpYmxlIGVsZW1lbnRzIHRvIHRoZSBwYWdlXG5cdCAqL1xuXHRtZS5zaG93ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgaSwgY3ggPSBtZS5wb3MueCwgY3kgPSBtZS5wb3MueSwgciA9IE1hdGgubWF4KDUsIG1lLmJ1YmJsZVJhZCAqIG1lLmJjLmJ1YmJsZVNjYWxlKTtcblxuXHRcdG1lLmNpcmNsZSA9IG1lLnBhcGVyLmNpcmNsZShjeCwgY3ksIHIpXG5cdFx0XHQuYXR0cih7IHN0cm9rZTogZmFsc2UsIGZpbGw6IG1lLmNvbG9yIH0pO1xuXG5cdFx0bWUuZGFzaGVkQm9yZGVyID0gbWUucGFwZXIuY2lyY2xlKGN4LCBjeSwgci0zKVxuXHRcdFx0LmF0dHIoeyBzdHJva2U6ICcjZmZmZmZmJywgJ3N0cm9rZS1kYXNoYXJyYXknOiBcIi0gXCIgfSk7XG5cblxuXHRcdG1lLmxhYmVsID0gJCgnPGRpdiBjbGFzcz1cImJ1YmJsZXRyZWUtbGFiZWwgJyttZS5ub2RlLmlkKydcIj48ZGl2IGNsYXNzPVwiYnViYmxldHJlZS1hbW91bnRcIj4nK3V0aWxzLmZvcm1hdE51bWJlcihtZS5ub2RlLmFtb3VudCkrJzwvZGl2PjxkaXYgY2xhc3M9XCJidWJibGV0cmVlLWRlc2NcIj4nK21lLm5vZGUuc2hvcnRMYWJlbCsnPC9kaXY+PC9kaXY+Jyk7XG5cdFx0bWUuY29udGFpbmVyLmFwcGVuZChtZS5sYWJlbCk7XG5cblx0XHRpZiAobWUubm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKG1lLmNpcmNsZS5ub2RlKS5jc3MoeyBjdXJzb3I6ICdwb2ludGVyJ30pO1xuXHRcdFx0JChtZS5sYWJlbCkuY3NzKHsgY3Vyc29yOiAncG9pbnRlcid9KTtcblx0XHR9XG5cblx0XHQvLyBhZGRpdGlvbmFsIGxhYmVsXG5cdFx0bWUubGFiZWwyID0gJCgnPGRpdiBjbGFzcz1cImJ1YmJsZXRyZWUtbGFiZWwyICcrbWUubm9kZS5pZCsnXCI+PHNwYW4+JyttZS5ub2RlLnNob3J0TGFiZWwrJzwvc3Bhbj48L2Rpdj4nKTtcblx0XHRtZS5jb250YWluZXIuYXBwZW5kKG1lLmxhYmVsMik7XG5cblx0XHR2YXIgbGlzdCA9IFttZS5jaXJjbGUubm9kZSwgbWUubGFiZWwsIG1lLmRhc2hlZEJvcmRlci5ub2RlXTtcblxuXHRcdHZhciBtZ3JvdXAgPSBuZXcgbWUubnMuTW91c2VFdmVudEdyb3VwKG1lLCBsaXN0KTtcblx0XHRtZ3JvdXAuY2xpY2sobWUub25jbGljay5iaW5kKG1lKSk7XG5cdFx0bWdyb3VwLmhvdmVyKG1lLm9uaG92ZXIuYmluZChtZSkpO1xuXHRcdG1ncm91cC51bmhvdmVyKG1lLm9udW5ob3Zlci5iaW5kKG1lKSk7XG5cblx0XHRtZS52aXNpYmxlID0gdHJ1ZTtcblxuXHR9O1xuXG5cdC8qXG5cdCAqIGFkZHMgYW4gaW52aXNpYmxlIGJ1YmJsZSBvbiB0b3AgZm9yIHNlYW1sZXNzXG5cdCAqIGV2ZW50IGhhbmRsaW5nXG5cdCAqL1xuXHRtZS5hZGRPdmVybGF5ID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly8gYWRkIGludmlzaWJsZSBvdmVybGF5IGNpcmNsZVxuXHRcdHZhciBtZSA9IHRoaXM7XG5cblx0XHRtZS5vdmVybGF5ID0gbWUucGFwZXIuY2lyY2xlKG1lLmNpcmNsZS5hdHRycy5jeCwgbWUuY2lyY2xlLmF0dHJzLmN5LCBtZS5jaXJjbGUuYXR0cnMucilcblx0XHRcdC5hdHRyKHsgc3Ryb2tlOiBmYWxzZSwgZmlsbDogJyNmZmYnLCAnb3BhY2l0eSc6IDB9KTtcblxuXHRcdGlmIChSYXBoYWVsLnN2Zykge1xuXHRcdFx0bWUub3ZlcmxheS5ub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBtZS5ub2RlLmlkKTtcblx0XHR9XG5cdFx0JChtZS5vdmVybGF5Lm5vZGUpLmNzcyh7IGN1cnNvcjogJ3BvaW50ZXInfSk7XG5cdFx0JChtZS5vdmVybGF5Lm5vZGUpLmNsaWNrKG1lLm9uY2xpY2suYmluZChtZSkpO1xuXG5cdFx0JChtZS5sYWJlbCkuY2xpY2sobWUub25jbGljay5iaW5kKG1lKSk7XG5cdH07XG5cblx0bWUuaW5pdCgpO1xufTtcblxuLypqc2hpbnQgdW5kZWY6IHRydWUsIGJyb3dzZXI6dHJ1ZSwganF1ZXJ5OiB0cnVlLCBkZXZlbDogdHJ1ZSwgc21hcnR0YWJzOiB0cnVlICovXG4vKmdsb2JhbCBSYXBoYWVsLCBUV0VFTiwgQnViYmxlVHJlZSwgdmlzNCAqL1xuXG5CdWJibGVUcmVlLkJ1YmJsZXMgPSBCdWJibGVUcmVlLkJ1YmJsZXMgfHwge307XG4vKlxuICogcmVwcmVzZW50cyBhIGJ1YmJsZVxuICovXG5CdWJibGVUcmVlLkJ1YmJsZXMuRG9udXQgPSBmdW5jdGlvbihub2RlLCBidWJibGVjaGFydCwgb3JpZ2luLCByYWRpdXMsIGFuZ2xlLCBjb2xvcikge1xuXG5cdHZhciBucyA9IEJ1YmJsZVRyZWUsIHV0aWxzID0gbnMuVXRpbHMsIG1lID0gdGhpcztcblx0bWUuY2xhc3NOYW1lID0gXCJidWJibGVcIjtcblx0bWUubm9kZSA9IG5vZGU7XG5cdG1lLnBhcGVyID0gYnViYmxlY2hhcnQucGFwZXI7XG5cdG1lLm9yaWdpbiA9IG9yaWdpbjtcblx0bWUuYmMgPSBidWJibGVjaGFydDtcblx0bWUucmFkID0gcmFkaXVzO1xuXHRtZS5hbmdsZSA9IGFuZ2xlO1xuXHRtZS5jb2xvciA9IGNvbG9yO1xuXHRtZS5hbHBoYSA9IDE7XG5cdG1lLnZpc2libGUgPSBmYWxzZTtcblx0bWUubnMgPSBucztcblx0bWUuYnViYmxlUmFkID0gdXRpbHMuYW1vdW50MnJhZCh0aGlzLm5vZGUuYW1vdW50KTtcblxuXHQvKlxuXHQgKiBjaGlsZCByb3RhdGlvbiBpcyBqdXN0IHVzZWQgZnJvbSBvdXRzaWRlIHRvIGxheW91dCBwb3NzaWJsZSBjaGlsZCBidWJibGVzXG5cdCAqL1xuXHRtZS5jaGlsZFJvdGF0aW9uID0gMDtcblxuXG5cdC8qXG5cdCAqIGNvbnZlcnRlcyBwb2xhciBjb29yZGluYXRlcyB0byB4LHlcblx0ICovXG5cdG1lLmdldFhZID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgbyA9IG1lLm9yaWdpbiwgYSA9IG1lLmFuZ2xlLCByID0gbWUucmFkO1xuXHRcdG1lLnBvcy54ID0gby54ICsgTWF0aC5jb3MoYSkgKiByO1xuXHRcdG1lLnBvcy55ID0gby55IC0gTWF0aC5zaW4oYSkgKiByO1xuXHR9O1xuXG5cdC8qXG5cdCAqIGluaXN0YWxpemVzIHRoZSBidWJibGVcblx0ICovXG5cdG1lLmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdG1lLnBvcyA9IG5ldyBtZS5ucy5WZWN0b3IoMCwwKTtcblx0XHRtZS5nZXRYWSgpO1xuXG5cdFx0dmFyIGJyZWFrZG93biA9IFtdLCBiLCBpLCB2YWwsIGJkID0gW10sIHN0eWxlcyA9IG1lLmJjLmNvbmZpZy5idWJibGVTdHlsZXM7XG5cblx0XHRpZiAoIW1lLm5vZGUuc2hvcnRMYWJlbCkgbWUubm9kZS5zaG9ydExhYmVsID0gbWUubm9kZS5sYWJlbC5sZW5ndGggPiA1MCA/IG1lLm5vZGUubGFiZWwuc3Vic3RyKDAsIDMwKSsnLi4uJyA6IG1lLm5vZGUubGFiZWw7XG5cblx0XHRtZS5icmVha2Rvd25PcGFjaXRpZXMgPSBbMC4yLCAwLjcsIDAuNDUsIDAuNiwgMC4zNV07XG5cdFx0bWUuYnJlYWtkb3duQ29sb3JzID0gW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXTtcblxuXHRcdGZvciAoaSBpbiBtZS5ub2RlLmJyZWFrZG93bnMpIHtcblx0XHRcdGIgPSBtZS5ub2RlLmJyZWFrZG93bnNbaV07XG5cdFx0XHRiLmZhbW91bnQgPSB1dGlscy5mb3JtYXROdW1iZXIoYi5hbW91bnQpO1xuXHRcdFx0dmFsID0gYi5hbW91bnQgLyBtZS5ub2RlLmFtb3VudDtcblx0XHRcdGJyZWFrZG93bi5wdXNoKHZhbCk7XG5cdFx0XHRiZC5wdXNoKGIpO1xuXG5cdFx0XHRpZiAoc3R5bGVzICYmIHN0eWxlcy5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIHN0eWxlcy5uYW1lLmhhc093blByb3BlcnR5KGIubmFtZSkgJiYgc3R5bGVzLm5hbWVbYi5uYW1lXS5oYXNPd25Qcm9wZXJ0eSgnb3BhY2l0eScpKSB7XG5cdFx0XHRcdG1lLmJyZWFrZG93bk9wYWNpdGllc1tiZC5sZW5ndGgtMV0gPSBzdHlsZXMubmFtZVtiLm5hbWVdLm9wYWNpdHk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzdHlsZXMgJiYgc3R5bGVzLmhhc093blByb3BlcnR5KCduYW1lJykgJiYgc3R5bGVzLm5hbWUuaGFzT3duUHJvcGVydHkoYi5uYW1lKSAmJiBzdHlsZXMubmFtZVtiLm5hbWVdLmhhc093blByb3BlcnR5KCdjb2xvcicpKSB7XG5cdFx0XHRcdG1lLmJyZWFrZG93bkNvbG9yc1tiZC5sZW5ndGgtMV0gPSBzdHlsZXMubmFtZVtiLm5hbWVdLmNvbG9yO1xuXHRcdFx0XHRtZS5icmVha2Rvd25PcGFjaXRpZXNbYmQubGVuZ3RoLTFdID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bWUubm9kZS5icmVha2Rvd25zID0gYmQ7XG5cdFx0bWUuYnJlYWtkb3duID0gYnJlYWtkb3duO1xuXG5cdFx0dmFyIHNob3dJY29uID0gZmFsc2U7IC8vdGhpcy5idWJibGVSYWQgKiB0aGlzLmJjLmJ1YmJsZVNjYWxlID4gMzA7XG5cdFx0Ly8gY3JlYXRlIGxhYmVsXG5cblx0XHRtZS5pbml0aWFsaXplZCA9IHRydWU7XG5cblx0XHQvL21lLnNob3coKTtcblx0fTtcblxuXHQvKlxuXHQgKlxuXHQgKi9cblx0bWUub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgbWUgPSB0aGlzO1xuXG5cdFx0bWUuYmMubmF2aWdhdGVUbyhtZS5ub2RlKTtcblxuXHR9O1xuXG5cdG1lLm9uaG92ZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgYyA9IG1lLmJjLiRjb250YWluZXJbMF07XG5cdFx0ZS5ub2RlID0gbWUubm9kZTtcblx0XHRlLnRhcmdldCA9IG1lO1xuXHRcdGUuYnViYmxlUG9zID0geyB4Om1lLnBvcy54LCB5OiBtZS5wb3MueSB9O1xuXHRcdGUubW91c2VQb3MgPSB7IHg6ZS5vcmlnRXZlbnQucGFnZVggLSBjLm9mZnNldExlZnQsIHk6IGUub3JpZ0V2ZW50LnBhZ2VZIC0gYy5vZmZzZXRUb3AgfTtcblx0XHRlLnR5cGUgPSAnU0hPVyc7XG5cdFx0bWUuYmMudG9vbHRpcChlKTtcblx0fTtcblxuXHRtZS5vbnVuaG92ZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgYyA9IG1lLmJjLiRjb250YWluZXJbMF07XG5cdFx0ZS5ub2RlID0gbWUubm9kZTtcblx0XHRlLnRhcmdldCA9IG1lO1xuXHRcdGUudHlwZSA9ICdISURFJztcblx0XHRlLmJ1YmJsZVBvcyA9IHsgeDptZS5wb3MueCwgeTogbWUucG9zLnkgfTtcblx0XHRlLm1vdXNlUG9zID0geyB4OmUub3JpZ0V2ZW50LnBhZ2VYIC0gYy5vZmZzZXRMZWZ0LCB5OiBlLm9yaWdFdmVudC5wYWdlWSAtIGMub2Zmc2V0VG9wIH07XG5cdFx0bWUuYmMudG9vbHRpcChlKTtcblx0fTtcblxuXHR0aGlzLmRyYXcgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCByID0gTWF0aC5tYXgoNSwgbWUuYnViYmxlUmFkICogbWUuYmMuYnViYmxlU2NhbGUpLCBveCA9IG1lLnBvcy54LCBveSA9IG1lLnBvcy55LCBkZXZudWxsID0gbWUuZ2V0WFkoKSwgc2hvd0xhYmVsID0gciA+IDIwLCB4ID0gbWUucG9zLngsIHkgPSBtZS5wb3MueTtcblx0XHRpZiAoIW1lLnZpc2libGUpIHJldHVybjtcblxuXHRcdG1lLmNpcmNsZS5hdHRyKHsgY3g6IHgsIGN5OiB5LCByOiByLCAnZmlsbC1vcGFjaXR5JzogbWUuYWxwaGEgfSk7XG5cdFx0aWYgKG1lLm5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMSkgbWUuZGFzaGVkQm9yZGVyLmF0dHIoeyBjeDogeCwgY3k6IHksIHI6IHIqMC44NSwgJ3N0cm9rZS1vcGFjaXR5JzogbWUuYWxwaGEgKiAwLjggfSk7XG5cdFx0ZWxzZSBtZS5kYXNoZWRCb3JkZXIuYXR0cih7ICdzdHJva2Utb3BhY2l0eSc6IDAgfSk7XG5cblx0XHRpZiAobWUuYnJlYWtkb3duLmxlbmd0aCA+IDEpIHtcblx0XHRcdC8vIGRyYXcgYnJlYWtkb3duIGNoYXJ0XG5cdFx0XHR2YXIgaSx4MCx4MSx4Mix4Myx5MCx5MSx5Mix5MyxpciA9IHIqMC44NSwgb2EgPSAtTWF0aC5QSSAqIDAuNSwgZGE7XG5cdFx0XHRmb3IgKGkgaW4gbWUuYnJlYWtkb3duKSB7XG5cdFx0XHRcdGRhID0gbWUuYnJlYWtkb3duW2ldICogTWF0aC5QSSAqIDI7XG5cdFx0XHRcdHgwID0geCtNYXRoLmNvcygob2EpKSppcjtcblx0XHRcdFx0eTAgPSB5K01hdGguc2luKChvYSkpKmlyO1xuXHRcdFx0XHR4MSA9IHgrTWF0aC5jb3MoKG9hK2RhKSkqaXI7XG5cdFx0XHRcdHkxID0geStNYXRoLnNpbigob2ErZGEpKSppcjtcblx0XHRcdFx0eDIgPSB4K01hdGguY29zKChvYStkYSkpKnI7XG5cdFx0XHRcdHkyID0geStNYXRoLnNpbigob2ErZGEpKSpyO1xuXHRcdFx0XHR4MyA9IHgrTWF0aC5jb3MoKG9hKSkqcjtcblx0XHRcdFx0eTMgPSB5K01hdGguc2luKChvYSkpKnI7XG5cdFx0XHRcdG9hICs9IGRhO1xuXG5cdFx0XHRcdHZhciBwYXRoID0gXCJNXCIreDArXCIgXCIreTArXCIgQVwiK2lyK1wiLFwiK2lyK1wiIDAgXCIrKGRhID4gTWF0aC5QSSA/IFwiMSwxXCIgOiBcIjAsMVwiKStcIiBcIit4MStcIixcIit5MStcIiBMXCIreDIrXCIgXCIreTIrXCIgQVwiK3IrXCIsXCIrcitcIiAwIFwiKyhkYSA+IE1hdGguUEkgPyBcIjEsMFwiIDogXCIwLDBcIikrXCIgXCIreDMrXCIgXCIreTMrXCIgWlwiO1xuXG5cdFx0XHRcdG1lLmJyZWFrZG93bkFyY3NbaV0uYXR0cih7IHBhdGg6IHBhdGgsICdzdHJva2Utb3BhY2l0eSc6IG1lLmFscGhhKjAuMiwgJ2ZpbGwtb3BhY2l0eSc6IG1lLmJyZWFrZG93bk9wYWNpdGllc1tpXSptZS5hbHBoYSB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvL21lLmxhYmVsLmF0dHIoeyB4OiBtZS5wb3MueCwgeTogbWUucG9zLnksICdmb250LXNpemUnOiBNYXRoLm1heCg0LCBtZS5idWJibGVSYWQgKiBtZS5iYy5idWJibGVTY2FsZSAqIDAuMjUpIH0pO1xuXHRcdGlmICghc2hvd0xhYmVsKSB7XG5cdFx0XHRtZS5sYWJlbC5oaWRlKCk7XG5cdFx0XHRtZS5sYWJlbDIuc2hvdygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZS5sYWJlbC5zaG93KCk7XG5cdFx0XHRpZiAociA8IDQwKSB7XG5cdFx0XHRcdG1lLmxhYmVsLmZpbmQoJy5idWJibGV0cmVlLWRlc2MnKS5oaWRlKCk7XG5cdFx0XHRcdG1lLmxhYmVsMi5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBmdWxsIGxhYmVsXG5cdFx0XHRcdG1lLmxhYmVsLmZpbmQoJy5idWJibGV0cmVlLWRlc2MnKS5zaG93KCk7XG5cdFx0XHRcdG1lLmxhYmVsMi5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bWUubGFiZWwuY3NzKHsgd2lkdGg6IDIqciowLjkrJ3B4Jywgb3BhY2l0eTogbWUuYWxwaGEgfSk7XG5cdFx0bWUubGFiZWwuY3NzKHsgbGVmdDogKG1lLnBvcy54LXIqMC45KSsncHgnLCB0b3A6IChtZS5wb3MueS1tZS5sYWJlbC5oZWlnaHQoKSowLjUzKSsncHgnIH0pO1xuXG5cdFx0dmFyIHcgPSBNYXRoLm1heCg4MCwgMypyKTtcblx0XHRtZS5sYWJlbDIuY3NzKHsgd2lkdGg6IHcrJ3B4Jywgb3BhY2l0eTogbWUuYWxwaGEgfSk7XG5cdFx0bWUubGFiZWwyLmNzcyh7IGxlZnQ6ICh4IC0gdyowLjUpKydweCcsIHRvcDogKHkgKyByKSsncHgnIH0pO1xuXG5cdH07XG5cblx0Lypcblx0ICogcmVtb3ZlcyBhbGwgdmlzaWJsZSBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG5cdCAqL1xuXHR0aGlzLmhpZGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCBpO1xuXHRcdG1lLmNpcmNsZS5yZW1vdmUoKTtcblx0XHRtZS5kYXNoZWRCb3JkZXIucmVtb3ZlKCk7XG5cdFx0bWUubGFiZWwucmVtb3ZlKCk7XG5cdFx0bWUubGFiZWwyLnJlbW92ZSgpO1xuXG5cdFx0Ly9tZS5iYy4kY29udGFpbmVyXG5cdFx0bWUudmlzaWJsZSA9IGZhbHNlO1xuXHRcdGZvciAoaSBpbiBtZS5icmVha2Rvd25BcmNzKSB7XG5cdFx0XHRtZS5icmVha2Rvd25BcmNzW2ldLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdC8vaWYgKG1lLmljb24pIG1lLmljb24ucmVtb3ZlKCk7XG5cdH07XG5cblx0Lypcblx0ICogYWRkcyBhbGwgdmlzaWJsZSBlbGVtZW50cyB0byB0aGUgcGFnZVxuXHQgKi9cblx0bWUuc2hvdyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtZSA9IHRoaXMsIGksIHIgPSBNYXRoLm1heCg1LCBtZS5idWJibGVSYWQgKiBtZS5iYy5idWJibGVTY2FsZSk7XG5cblx0XHRtZS5jaXJjbGUgPSBtZS5wYXBlci5jaXJjbGUobWUucG9zLngsIG1lLnBvcy55LCByKVxuXHRcdFx0LmF0dHIoeyBzdHJva2U6IGZhbHNlLCBmaWxsOiBtZS5jb2xvciB9KTtcblxuXHRcdGlmICgkLmlzRnVuY3Rpb24obWUuYmMuY29uZmlnLmluaXRUb29sdGlwKSkge1xuXHRcdFx0bWUuYmMuY29uZmlnLmluaXRUb29sdGlwKG1lLm5vZGUsIG1lLmNpcmNsZS5ub2RlKTtcblx0XHR9XG5cblx0XHRtZS5kYXNoZWRCb3JkZXIgPSBtZS5wYXBlci5jaXJjbGUobWUucG9zLngsIG1lLnBvcy55LCAgciowLjg1KVxuXHRcdFx0LmF0dHIoeyBzdHJva2U6ICcjZmZmJywgJ3N0cm9rZS1vcGFjaXR5JzogbWUuYWxwaGEgKiAwLjQsICAnc3Ryb2tlLWRhc2hhcnJheSc6IFwiLiBcIiwgZmlsbDogZmFsc2UgfSk7XG5cblx0XHRtZS5sYWJlbCA9ICQoJzxkaXYgY2xhc3M9XCJidWJibGV0cmVlLWxhYmVsICcrbWUubm9kZS5pZCsnXCI+PGRpdiBjbGFzcz1cImJ1YmJsZXRyZWUtYW1vdW50XCI+Jyt1dGlscy5mb3JtYXROdW1iZXIobWUubm9kZS5hbW91bnQpKyc8L2Rpdj48ZGl2IGNsYXNzPVwiYnViYmxldHJlZS1kZXNjXCI+JyttZS5ub2RlLnNob3J0TGFiZWwrJzwvZGl2PjwvZGl2PicpO1xuXHRcdG1lLmJjLiRjb250YWluZXIuYXBwZW5kKG1lLmxhYmVsKTtcblxuXHRcdGlmIChtZS5ub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcblx0XHRcdCQobWUuY2lyY2xlLm5vZGUpLmNzcyh7IGN1cnNvcjogJ3BvaW50ZXInfSk7XG5cdFx0XHQkKG1lLmxhYmVsKS5jc3MoeyBjdXJzb3I6ICdwb2ludGVyJ30pO1xuXHRcdH1cblxuXHRcdC8vIGFkZGl0aW9uYWwgbGFiZWxcblx0XHRtZS5sYWJlbDIgPSAkKCc8ZGl2IGNsYXNzPVwiYnViYmxldHJlZS1sYWJlbDIgJyttZS5ub2RlLmlkKydcIj48c3Bhbj4nK21lLm5vZGUuc2hvcnRMYWJlbCsnPC9zcGFuPjwvZGl2PicpO1xuXHRcdG1lLmJjLiRjb250YWluZXIuYXBwZW5kKG1lLmxhYmVsMik7XG5cblx0XHR2YXIgbGlzdCA9IFttZS5jaXJjbGUubm9kZSwgbWUubGFiZWxdO1xuXG5cdFx0aWYgKG1lLmJyZWFrZG93bi5sZW5ndGggPiAxKSB7XG5cdFx0XHRtZS5icmVha2Rvd25BcmNzID0ge307XG5cblx0XHRcdGZvciAoaSBpbiBtZS5icmVha2Rvd24pIHtcblx0XHRcdFx0dmFyIGNvbCA9IG1lLmJyZWFrZG93bkNvbG9yc1tpXSA/IG1lLmJyZWFrZG93bkNvbG9yc1tpXSA6ICcjZmZmJyxcblx0XHRcdFx0XHRhcmMgPSBtZS5wYXBlci5wYXRoKFwiTSAwIDAgTCAyIDJcIilcblx0XHRcdFx0XHQuYXR0cih7IGZpbGw6IGNvbCwgJ2ZpbGwtb3BhY2l0eSc6IE1hdGgucmFuZG9tKCkqMC40ICsgMC4zLCBzdHJva2U6ICcjZmZmJ30pO1xuXHRcdFx0XHRtZS5icmVha2Rvd25BcmNzW2ldID0gYXJjO1xuXHRcdFx0XHQvLyAkKGFyYy5ub2RlKS5ob3ZlcihtZS5hcmNIb3Zlci5iaW5kKG1lKSwgbWUuYXJjVW5ob3Zlci5iaW5kKG1lKSk7XG5cblx0XHRcdFx0aWYgKCQuaXNGdW5jdGlvbihtZS5iYy5jb25maWcuaW5pdFRvb2x0aXApKSB7XG5cdFx0XHRcdFx0bWUuYmMuY29uZmlnLmluaXRUb29sdGlwKG1lLm5vZGUuYnJlYWtkb3duc1tpXSwgYXJjLm5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoaSBpbiBtZS5icmVha2Rvd25BcmNzKSB7XG5cdFx0XHRcdC8vIHdlIGRvbnQgYWRkIHRoZSBicmVha2Rvd24gYXJjcyB0byB0aGUgbGlzdCAnY2F1c2Vcblx0XHRcdFx0Ly8gd2Ugd2FudCB0aGVtIHRvIGZpcmUgZGlmZmVyZW50IG1vdXNlIG92ZXIgZXZlbnRzXG5cdFx0XHRcdC8vIGxpc3QucHVzaChtZS5icmVha2Rvd25BcmNzW2ldLm5vZGUpO1xuXHRcdFx0XHQkKG1lLmJyZWFrZG93bkFyY3NbaV0ubm9kZSkuY2xpY2sobWUub25jbGljay5iaW5kKG1lKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIG1ncm91cCA9IG5ldyBtZS5ucy5Nb3VzZUV2ZW50R3JvdXAobWUsIGxpc3QpO1xuXHRcdG1ncm91cC5jbGljayhtZS5vbmNsaWNrLmJpbmQobWUpKTtcblx0XHRtZ3JvdXAuaG92ZXIobWUub25ob3Zlci5iaW5kKG1lKSk7XG5cdFx0bWdyb3VwLnVuaG92ZXIobWUub251bmhvdmVyLmJpbmQobWUpKTtcblxuXHRcdG1lLnZpc2libGUgPSB0cnVlO1xuXG5cdH07XG5cblxuXHRtZS5hcmNIb3ZlciA9IGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCBjID0gbWUuYmMuJGNvbnRhaW5lclswXSwgaSxcblx0XHRcdGFyY3MgPSBtZS5icmVha2Rvd25BcmNzLCBub2RlLFxuXHRcdFx0YmQgPSBtZS5ub2RlLmJyZWFrZG93bnM7XG5cblx0XHRmb3IgKGkgaW4gYXJjcykge1xuXHRcdFx0aWYgKGFyY3NbaV0ubm9kZSA9PSBlLnRhcmdldCkge1xuXHRcdFx0XHRlLm5vZGUgPSBiZFtpXTtcblx0XHRcdFx0ZS5idWJibGVQb3MgPSB7IHg6bWUucG9zLngsIHk6IG1lLnBvcy55IH07XG5cdFx0XHRcdGUubW91c2VQb3MgPSB7IHg6ZS5wYWdlWCAtIGMub2Zmc2V0TGVmdCwgeTogZS5wYWdlWSAtIGMub2Zmc2V0VG9wIH07XG5cdFx0XHRcdGUudGFyZ2V0ID0gbWU7XG5cdFx0XHRcdGUudHlwZSA9ICdTSE9XJztcblx0XHRcdFx0bWUuYmMudG9vbHRpcChlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZpczQubG9nKCdjYW50IGZpbmQgdGhlIGJyZWFrZG93biBub2RlJyk7XG5cdH07XG5cblx0bWUuYXJjVW5ob3ZlciA9IGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCBjID0gbWUuYmMuJGNvbnRhaW5lclswXSwgaSxcblx0XHRcdGFyY3MgPSBtZS5icmVha2Rvd25BcmNzLCBub2RlLFxuXHRcdFx0YmQgPSBtZS5ub2RlLmJyZWFrZG93bnM7XG5cblx0XHRmb3IgKGkgaW4gYXJjcykge1xuXHRcdFx0aWYgKGFyY3NbaV0ubm9kZSA9PSBlLnRhcmdldCkge1xuXHRcdFx0XHRlLm5vZGUgPSBiZFtpXTtcblx0XHRcdFx0ZS5idWJibGVQb3MgPSB7IHg6bWUucG9zLngsIHk6IG1lLnBvcy55IH07XG5cdFx0XHRcdGUubW91c2VQb3MgPSB7IHg6ZS5wYWdlWCAtIGMub2Zmc2V0TGVmdCwgeTogZS5wYWdlWSAtIGMub2Zmc2V0VG9wIH07XG5cdFx0XHRcdGUudHlwZSA9ICdISURFJztcblx0XHRcdFx0ZS50YXJnZXQgPSBtZTtcblx0XHRcdFx0bWUuYmMudG9vbHRpcChlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZpczQubG9nKCdjYW50IGZpbmQgdGhlIGJyZWFrZG93biBub2RlJyk7XG5cdH07XG5cblx0bWUuaW5pdCgpO1xufTtcbi8qanNoaW50IHVuZGVmOiB0cnVlLCBicm93c2VyOnRydWUsIGpxdWVyeTogdHJ1ZSwgZGV2ZWw6IHRydWUsIHNtYXJ0dGFiczogdHJ1ZSAqL1xuLypnbG9iYWwgUmFwaGFlbCwgVFdFRU4sIEJ1YmJsZVRyZWUsIHZpczQsIHZpczRsb2FkZXIgKi9cblxuQnViYmxlVHJlZS5CdWJibGVzID0gQnViYmxlVHJlZS5CdWJibGVzIHx8IHt9O1xuXG4vKlxuICogcmVwcmVzZW50cyBhIGJ1YmJsZVxuICovXG5CdWJibGVUcmVlLkJ1YmJsZXMuSWNvbiA9IGZ1bmN0aW9uKG5vZGUsIGJ1YmJsZWNoYXJ0LCBvcmlnaW4sIHJhZGl1cywgYW5nbGUsIGNvbG9yKSB7XG5cblx0dmFyIG5zID0gQnViYmxlVHJlZSwgdXRpbHMgPSBucy5VdGlscywgbWUgPSB0aGlzO1xuXHRtZS5jbGFzc05hbWUgPSBcImJ1YmJsZVwiO1xuXHRtZS5ub2RlID0gbm9kZTtcblx0bWUucGFwZXIgPSBidWJibGVjaGFydC5wYXBlcjtcblx0bWUub3JpZ2luID0gb3JpZ2luO1xuXHRtZS5iYyA9IGJ1YmJsZWNoYXJ0O1xuXHRtZS5yYWQgPSByYWRpdXM7XG5cdG1lLmFuZ2xlID0gYW5nbGU7XG5cdG1lLmNvbG9yID0gY29sb3I7XG5cdG1lLmFscGhhID0gMTtcblx0bWUudmlzaWJsZSA9IGZhbHNlO1xuXHRtZS5ucyA9IG5zO1xuXHRtZS5wb3MgPSBucy5WZWN0b3IoMCwwKTtcblx0bWUuYnViYmxlUmFkID0gdXRpbHMuYW1vdW50MnJhZCh0aGlzLm5vZGUuYW1vdW50KTtcblxuXHRtZS5pY29uTG9hZGVkID0gZmFsc2U7XG5cblx0Lypcblx0ICogY2hpbGQgcm90YXRpb24gaXMganVzdCB1c2VkIGZyb20gb3V0c2lkZSB0byBsYXlvdXQgcG9zc2libGUgY2hpbGQgYnViYmxlc1xuXHQgKi9cblx0bWUuY2hpbGRSb3RhdGlvbiA9IDA7XG5cblxuXHQvKlxuXHQgKiBjb252ZXJ0ZXMgcG9sYXIgY29vcmRpbmF0ZXMgdG8geCx5XG5cdCAqL1xuXHRtZS5nZXRYWSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtZSA9IHRoaXMsIG8gPSBtZS5vcmlnaW4sIGEgPSBtZS5hbmdsZSwgciA9IG1lLnJhZDtcblx0XHRpZiAobWUucG9zID09PSB1bmRlZmluZWQpIG1lLnBvcyA9IG5ldyBtZS5ucy5WZWN0b3IoMCwwKTtcblx0XHRtZS5wb3MueCA9IG8ueCArIE1hdGguY29zKGEpICogcjtcblx0XHRtZS5wb3MueSA9IG8ueSAtIE1hdGguc2luKGEpICogcjtcblx0fTtcblxuXHQvKlxuXHQgKiBpbmlzdGFsaXplcyB0aGUgYnViYmxlXG5cdCAqL1xuXHRtZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcztcblx0XHRtZS5nZXRYWSgpO1xuXG5cdFx0bWUuaGFzSWNvbiA9IG1lLm5vZGUuaGFzT3duUHJvcGVydHkoJ2ljb24nKTtcblxuXHRcdGlmICghbWUubm9kZS5zaG9ydExhYmVsKSBtZS5ub2RlLnNob3J0TGFiZWwgPSBtZS5ub2RlLmxhYmVsLmxlbmd0aCA+IDUwID8gbWUubm9kZS5sYWJlbC5zdWJzdHIoMCwgMzApKycuLi4nIDogbWUubm9kZS5sYWJlbDtcblxuXHRcdC8qaWYgKHNob3dJY29uKSB7XG5cdFx0XHRtZS5pY29uID0gbWUucGFwZXIucGF0aChcIk0xNy4wODEsNC4wNjVWMy4xMzdjMCwwLDAuMTA0LTAuODcyLTAuODgxLTAuODcyYy0wLjkyOCwwLTAuODkxLDAuOS0wLjg5MSwwLjl2MC45QzQuNTcyLDMuOTI1LDIuNjcyLDE1Ljc4MywyLjY3MiwxNS43ODNjMS4yMzctMi45OCw0LjQ2Mi0yLjc1NSw0LjQ2Mi0yLjc1NWM0LjA1LDAsNC40ODEsMi42ODEsNC40ODEsMi42ODFjMC45ODQtMi45NTMsNC41NDctMi42NjIsNC41NDctMi42NjJjMy43NjksMCw0LjUwOSwyLjcxOSw0LjUwOSwyLjcxOXMwLjc4Ny0yLjgxMiw0LjU1Ny0yLjc1NmMzLjI2MiwwLDQuNDQzLDIuNyw0LjQ0MywyLjd2LTAuMDU4QzI5LjY3Miw0LjM0OCwxNy4wODEsNC4wNjUsMTcuMDgxLDQuMDY1ek0xNS4zMjgsMjQuNzkzYzAsMS43NDQtMS44LDEuODAxLTEuOCwxLjgwMWMtMS44ODUsMC0xLjgtMS44MDEtMS44LTEuODAxczAuMDI4LTAuOTI4LTAuODcyLTAuOTI4Yy0wLjksMC0wLjk1NywwLjktMC45NTcsMC45YzAsMy42MjgsMy42LDMuNTcyLDMuNiwzLjU3MmMzLjYsMCwzLjU3Mi0zLjU0NSwzLjU3Mi0zLjU0NVYxMy45NjZoLTEuNzQ0VjI0Ljc5M3pcIilcblx0XHRcdFx0LnRyYW5zbGF0ZShtZS5wb3MueCwgbWUucG9zLnkpLmF0dHIoe2ZpbGw6IFwiI2ZmZlwiLCBzdHJva2U6IFwibm9uZVwifSk7XG5cdFx0fSovXG5cblxuXHRcdG1lLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuXHRcdC8vbWUuc2hvdygpO1xuXHR9O1xuXG5cblx0Lypcblx0ICogYWRkcyBhbGwgdmlzaWJsZSBlbGVtZW50cyB0byB0aGUgcGFnZVxuXHQgKi9cblx0bWUuc2hvdyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtZSA9IHRoaXMsIGksIGN4ID0gbWUucG9zLngsIGljb24sIGN5ID0gbWUucG9zLnksIHIgPSBNYXRoLm1heCg1LCBtZS5idWJibGVSYWQgKiBtZS5iYy5idWJibGVTY2FsZSk7XG5cblx0XHRtZS5jaXJjbGUgPSBtZS5wYXBlci5jaXJjbGUoY3gsIGN5LCByKVxuXHRcdFx0LmF0dHIoeyBzdHJva2U6IGZhbHNlLCBmaWxsOiBtZS5jb2xvciB9KTtcblxuXHRcdG1lLmRhc2hlZEJvcmRlciA9IG1lLnBhcGVyLmNpcmNsZShjeCwgY3ksIE1hdGgubWluKHItMywgciowLjk1KSlcblx0XHRcdC5hdHRyKHsgc3Ryb2tlOiAnI2ZmZmZmZicsICdzdHJva2UtZGFzaGFycmF5JzogXCItIFwiIH0pO1xuXG5cdFx0aWYgKCQuaXNGdW5jdGlvbihtZS5iYy5jb25maWcuaW5pdFRvb2x0aXApKSB7XG5cdFx0XHRtZS5iYy5jb25maWcuaW5pdFRvb2x0aXAobWUubm9kZSwgbWUuY2lyY2xlLm5vZGUpO1xuXHRcdH1cblxuXHRcdG1lLmxhYmVsID0gJCgnPGRpdiBjbGFzcz1cImJ1YmJsZXRyZWUtbGFiZWwgJyttZS5ub2RlLmlkKydcIj48ZGl2IGNsYXNzPVwiYnViYmxldHJlZS1hbW91bnRcIj4nK3V0aWxzLmZvcm1hdE51bWJlcihtZS5ub2RlLmFtb3VudCkrJzwvZGl2PjxkaXYgY2xhc3M9XCJidWJibGV0cmVlLWRlc2NcIj4nK21lLm5vZGUuc2hvcnRMYWJlbCsnPC9kaXY+PC9kaXY+Jyk7XG5cdFx0bWUuYmMuJGNvbnRhaW5lci5hcHBlbmQobWUubGFiZWwpO1xuXG5cdFx0aWYgKCQuaXNGdW5jdGlvbihtZS5iYy5jb25maWcuaW5pdFRvb2x0aXApKSB7XG5cdFx0XHRtZS5iYy5jb25maWcuaW5pdFRvb2x0aXAobWUubm9kZSwgbWUubGFiZWxbMF0pO1xuXHRcdH1cblxuXHRcdC8vIGFkZGl0aW9uYWwgbGFiZWxcblx0XHRtZS5sYWJlbDIgPSAkKCc8ZGl2IGNsYXNzPVwiYnViYmxldHJlZS1sYWJlbDIgJyttZS5ub2RlLmlkKydcIj48c3Bhbj4nK21lLm5vZGUuc2hvcnRMYWJlbCsnPC9zcGFuPjwvZGl2PicpO1xuXHRcdG1lLmJjLiRjb250YWluZXIuYXBwZW5kKG1lLmxhYmVsMik7XG5cblx0XHRpZiAobWUubm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKG1lLmNpcmNsZS5ub2RlKS5jc3MoeyBjdXJzb3I6ICdwb2ludGVyJ30pO1xuXHRcdFx0JChtZS5sYWJlbCkuY3NzKHsgY3Vyc29yOiAncG9pbnRlcid9KTtcblx0XHR9XG5cblx0XHQvKnZhclxuXHRcdGxpc3Q9W21lLmNpcmNsZS5ub2RlLCBtZS5sYWJlbCwgbWUuZGFzaGVkQm9yZGVyLm5vZGVdLFxuXHRcdG1ncm91cCA9IG5ldyBtZS5ucy5Nb3VzZUV2ZW50R3JvdXAobWUsIGxpc3QpO1xuXHRcdG1ncm91cC5jbGljayhtZS5vbmNsaWNrLmJpbmQobWUpKTtcblx0XHRtZ3JvdXAuaG92ZXIobWUub25ob3Zlci5iaW5kKG1lKSk7XG5cdFx0bWdyb3VwLnVuaG92ZXIobWUub251bmhvdmVyLmJpbmQobWUpKTtcblx0XHRtZS5tZ3JvdXAgPSBtZ3JvdXA7XG5cdFx0Ki9cblxuXHRcdG1lLnZpc2libGUgPSB0cnVlO1xuXG5cdFx0aWYgKG1lLmhhc0ljb24pIHtcblx0XHRcdGlmICghbWUuaWNvbkxvYWRlZCkgbWUubG9hZEljb24oKTtcblx0XHRcdGVsc2UgbWUuZGlzcGxheUljb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWUuYWRkT3ZlcmxheSgpO1xuXHRcdH1cblx0fTtcblxuXHQvKlxuXHQgKiB3aWxsIGxvYWQgdGhlIGljb24gYXMgc29vbiBhcyBuZWVkZWRcblx0ICovXG5cdG1lLmxvYWRJY29uID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgbGRyID0gbmV3IHZpczRsb2FkZXIoKTtcblx0XHRsZHIuYWRkKG1lLmJjLmNvbmZpZy5yb290UGF0aCArIG1lLm5vZGUuaWNvbik7XG5cdFx0bGRyLmxvYWQobWUuaWNvbkxvYWRDb21wbGV0ZS5iaW5kKG1lKSk7XG5cdH07XG5cblx0Lypcblx0ICogb24gY29tcGxldGUgaGFuZGxlciBmb3IgaWNvbiBsb2FkaW5nIHByb2Nlc3Ncblx0ICovXG5cdG1lLmljb25Mb2FkQ29tcGxldGUgPSBmdW5jdGlvbihsZHIpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCBzdmcsIGosIHBhdGhzO1xuXHRcdHN2ZyA9IGxkci5pdGVtc1swXS5kYXRhO1xuXHRcdG1lLmljb25QYXRoRGF0YSA9ICcnO1xuXHRcdC8vaWYgKHR5cGVvZihzdmcpID09IFwic3RyaW5nXCIpIHN2ZyA9ICQoc3ZnKVswXTtcblx0XHRzdmcgPSAkKHN2Zyk7XG5cdFx0cGF0aHMgPSAkKCdwYXRoJywgc3ZnKTsgLy9zdmcuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3BhdGgnKTtcblx0XHRmb3IgKGogaW4gcGF0aHMpIHtcblx0XHRcdGlmIChwYXRoc1tqXSAmJiAkLmlzRnVuY3Rpb24ocGF0aHNbal0uZ2V0QXR0cmlidXRlKSkge1xuXHRcdFx0XHRtZS5pY29uUGF0aERhdGEgKz0gU3RyaW5nKHBhdGhzW2pdLmdldEF0dHJpYnV0ZSgnZCcpKSsnICc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1lLmljb25Mb2FkZWQgPSB0cnVlO1xuXHRcdG1lLmRpc3BsYXlJY29uKCk7XG5cdH07XG5cblx0Lypcblx0ICogd2lsbCBkaXNwbGF5IHRoZSBpY29uLCBjcmVhdGUgdGhlIHN2ZyBwYXRoIGVsZW1lbnQsIGV0Y1xuXHQgKi9cblx0bWUuZGlzcGxheUljb24gPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgbWUgPSB0aGlzLCBpLCBwYXRoO1xuXHRcdG1lLmljb25QYXRocyA9IFtdO1xuXG5cdFx0cGF0aCA9IG1lLnBhcGVyLnBhdGgobWUuaWNvblBhdGhEYXRhKTtcblx0XHRwYXRoLmF0dHIoe2ZpbGw6IFwiI2ZmZlwiLCBzdHJva2U6IFwibm9uZVwifSkudHJhbnNsYXRlKC01MCwgLTUwKTtcblx0XHRtZS5pY29uUGF0aHMucHVzaChwYXRoKTtcblx0XHQvL21lLm1ncm91cC5hZGRNZW1iZXIocGF0aC5ub2RlKTtcblxuXHRcdG1lLmFkZE92ZXJsYXkoKTtcblx0fTtcblxuXHQvKlxuXHQgKiBhZGRzIGFuIGludmlzaWJsZSBidWJibGUgb24gdG9wIGZvciBzZWFtbGVzc1xuXHQgKiBldmVudCBoYW5kbGluZ1xuXHQgKi9cblx0bWUuYWRkT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vIGFkZCBpbnZpc2libGUgb3ZlcmxheSBjaXJjbGVcblx0XHR2YXIgbWUgPSB0aGlzO1xuXG5cdFx0bWUub3ZlcmxheSA9IG1lLnBhcGVyLmNpcmNsZShtZS5jaXJjbGUuYXR0cnMuY3gsIG1lLmNpcmNsZS5hdHRycy5jeSwgbWUuY2lyY2xlLmF0dHJzLnIpXG5cdFx0XHQuYXR0cih7IHN0cm9rZTogZmFsc2UsIGZpbGw6ICcjZmZmJywgJ2ZpbGwtb3BhY2l0eSc6IDB9KTtcblxuXHRcdGlmIChSYXBoYWVsLnN2Zykge1xuXHRcdFx0bWUub3ZlcmxheS5ub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBtZS5ub2RlLmlkKTtcblx0XHR9XG5cdFx0JChtZS5vdmVybGF5Lm5vZGUpLmNzcyh7IGN1cnNvcjogJ3BvaW50ZXInfSk7XG5cblx0XHQkKG1lLm92ZXJsYXkubm9kZSkuY2xpY2sobWUub25jbGljay5iaW5kKG1lKSk7XG5cdFx0JChtZS5sYWJlbCkuY2xpY2sobWUub25jbGljay5iaW5kKG1lKSk7XG5cdFx0JChtZS5sYWJlbDIpLmNsaWNrKG1lLm9uY2xpY2suYmluZChtZSkpO1xuXG5cdFx0aWYgKCQuaXNQbGFpbk9iamVjdChtZS5iYy50b29sdGlwKSkge1xuXHRcdFx0Ly8gdXNlIHEtdGlwIHRvb2x0aXBzXG5cdFx0XHR2YXIgdHQgPSBtZS5iYy50b29sdGlwLmNvbnRlbnQobWUubm9kZSk7XG5cdFx0XHQkKG1lLm92ZXJsYXkubm9kZSkucXRpcCh7XG5cdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0dGFyZ2V0OiAnbW91c2UnLFxuXHRcdFx0XHRcdHZpZXdwb3J0OiAkKHdpbmRvdyksXG5cdFx0XHRcdFx0YWRqdXN0OiB7IHg6NywgeTo3IH1cblx0XHRcdFx0fSxcblx0XHRcdFx0c2hvdzoge1xuXHRcdFx0XHRcdGRlbGF5OiBtZS5iYy50b29sdGlwLmRlbGF5IHx8IDEwMFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjb250ZW50OiB7XG5cdFx0XHRcdFx0dGl0bGU6IHR0WzBdLFxuXHRcdFx0XHRcdHRleHQ6IHR0WzFdXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHQvKlxuXHQgKiB3aWxsIHJlbW92ZSB0aGUgaWNvbiBmcm9tIHN0YWdlXG5cdCAqL1xuXHRtZS5yZW1vdmVJY29uID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgaSwgcGF0aDtcblx0XHRmb3IgKGkgaW4gbWUuaWNvblBhdGhzKSB7XG5cdFx0XHRtZS5pY29uUGF0aHNbaV0ucmVtb3ZlKCk7XG5cdFx0fVxuXHRcdG1lLmljb25QYXRocyA9IFtdO1xuXHR9O1xuXG5cblx0bWUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtZSA9IHRoaXMsXG5cdFx0XHRyID0gTWF0aC5tYXgoNSwgbWUuYnViYmxlUmFkICogbWUuYmMuYnViYmxlU2NhbGUpLFxuXHRcdFx0b3ggPSBtZS5wb3MueCxcblx0XHRcdG95ID0gbWUucG9zLnksXG5cdFx0XHRkZXZudWxsID0gbWUuZ2V0WFkoKSxcblx0XHRcdHggPSBtZS5wb3MueCwgeSA9IG1lLnBvcy55LFxuXHRcdFx0c2hvd0ljb24gPSBtZS5oYXNJY29uICYmIHIgPiAxNSxcblx0XHRcdHNob3dMYWJlbCA9IG1lLmhhc0ljb24gPyByID4gNDAgOiByID4gMjAsXG5cdFx0XHRpLCBwYXRoLCBzY2FsZSwgdHJhbnNmb3JtLCBseTtcblxuXHRcdGlmICghbWUudmlzaWJsZSkgcmV0dXJuO1xuXG5cdFx0bWUuY2lyY2xlLmF0dHIoeyBjeDogeCwgY3k6IHksIHI6IHIsICdmaWxsLW9wYWNpdHknOiBtZS5hbHBoYSB9KTtcblx0XHRpZihtZS5vdmVybGF5KVxuXHRcdFx0bWUub3ZlcmxheS5hdHRyKHsgY3g6IHgsIGN5OiB5LCByOiBNYXRoLm1heCgxMCxyKX0pO1xuXG5cdFx0aWYgKG1lLm5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMSkgbWUuZGFzaGVkQm9yZGVyLmF0dHIoeyBjeDogbWUucG9zLngsIGN5OiBtZS5wb3MueSwgcjogTWF0aC5taW4oci0zLCByLTQpLCAnc3Ryb2tlLW9wYWNpdHknOiBtZS5hbHBoYSAqIDAuOSB9KTtcblx0XHRlbHNlIG1lLmRhc2hlZEJvcmRlci5hdHRyKHsgJ3N0cm9rZS1vcGFjaXR5JzogMCB9KTtcblxuXG5cdFx0Ly9tZS5sYWJlbC5hdHRyKHsgeDogbWUucG9zLngsIHk6IG1lLnBvcy55LCAnZm9udC1zaXplJzogTWF0aC5tYXgoNCwgbWUuYnViYmxlUmFkICogbWUuYmMuYnViYmxlU2NhbGUgKiAwLjI1KSB9KTtcblx0XHRpZiAoIXNob3dMYWJlbCkge1xuXHRcdFx0bWUubGFiZWwuaGlkZSgpO1xuXHRcdFx0bWUubGFiZWwyLnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWUubGFiZWwuc2hvdygpO1xuXHRcdFx0aWYgKChzaG93SWNvbiAmJiByIDwgNzApIHx8ICghc2hvd0ljb24gJiYgciA8IDQwKSkge1xuXHRcdFx0XHRtZS5sYWJlbC5maW5kKCcuYnViYmxldHJlZS1kZXNjJykuaGlkZSgpO1xuXHRcdFx0XHRtZS5sYWJlbDIuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gZnVsbCBsYWJlbFxuXHRcdFx0XHRtZS5sYWJlbC5maW5kKCcuYnViYmxldHJlZS1kZXNjJykuc2hvdygpO1xuXHRcdFx0XHRtZS5sYWJlbDIuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGx5ID0gc2hvd0ljb24gPyB5K3IqMC43Ny1tZS5sYWJlbC5oZWlnaHQoKSA6IHktbWUubGFiZWwuaGVpZ2h0KCkqMC41O1xuXHRcdG1lLmxhYmVsLmNzcyh7IHdpZHRoOiAoc2hvd0ljb24gPyByKjEuMiA6IDIqcikrJ3B4Jywgb3BhY2l0eTogbWUuYWxwaGEgfSk7XG5cdFx0bWUubGFiZWwuY3NzKHsgbGVmdDogKHNob3dJY29uID8geCAtIHIqMC42IDogeC1yKSsncHgnLCB0b3A6IGx5KydweCcgfSk7XG5cblx0XHR2YXIgdyA9IE1hdGgubWF4KDgwLCAzKnIpO1xuXHRcdG1lLmxhYmVsMi5jc3MoeyB3aWR0aDogdysncHgnLCBvcGFjaXR5OiBtZS5hbHBoYSB9KTtcblx0XHRtZS5sYWJlbDIuY3NzKHsgbGVmdDogKHggLSB3KjAuNSkrJ3B4JywgdG9wOiAoeSArIHIpKydweCcgfSk7XG5cblxuXHRcdC8vaWYgKG1lLmljb24pIG1lLmljb24udHJhbnNsYXRlKG1lLnBvcy54IC0gb3gsIG1lLnBvcy55IC0gb3kpO1xuXHRcdGlmIChtZS5oYXNJY29uKSB7XG5cdFx0XHRpZiAoc2hvd0ljb24pIHtcblx0XHRcdFx0c2NhbGUgPSAociAtIChzaG93TGFiZWwgPyBtZS5sYWJlbC5oZWlnaHQoKSowLjUgOiAwKSkgLyA2MDtcblx0XHRcdFx0Zm9yIChpIGluIG1lLmljb25QYXRocykge1xuXHRcdFx0XHRcdHBhdGggPSBtZS5pY29uUGF0aHNbaV07XG5cdFx0XHRcdFx0Ly9wYXRoLnRyYW5zbGF0ZShtZS5wb3MueCAtIG94LCBtZS5wb3MueSAtIG95KTtcblx0XHRcdFx0XHRpZiAoUmFwaGFlbC52ZXJzaW9uWzBdID09IFwiMVwiKSB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSBcInNjYWxlKFwiK3NjYWxlK1wiKSB0cmFuc2xhdGUoXCIrKHgvc2NhbGUpK1wiLCBcIisoKHkrKHNob3dMYWJlbCA/IG1lLmxhYmVsLmhlaWdodCgpKi0wLjUgOiAwKSkvc2NhbGUpK1wiKVwiO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIHZlcnNpb24gPiAxXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm0gPSBcInNjYWxlKFwiK3NjYWxlK1wiKSB0cmFuc2xhdGUoXCIrKHgvc2NhbGUtNTApK1wiLCBcIisoKHkrKHNob3dMYWJlbCA/IG1lLmxhYmVsLmhlaWdodCgpKi0wLjUgOiAwKSkvc2NhbGUtNTApK1wiKVwiO1xuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhdGgubm9kZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNmb3JtKTtcblx0XHRcdFx0XHRwYXRoLmF0dHIoeyAnZmlsbC1vcGFjaXR5JzogbWUuYWxwaGEgfSk7XG5cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChpIGluIG1lLmljb25QYXRocykge1xuXHRcdFx0XHRcdHBhdGggPSBtZS5pY29uUGF0aHNbaV07XG5cdFx0XHRcdFx0cGF0aC5hdHRyKHsgJ2ZpbGwtb3BhY2l0eSc6IDAgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Lypcblx0ICogcmVtb3ZlcyBhbGwgdmlzaWJsZSBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG5cdCAqL1xuXHRtZS5oaWRlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgaTtcblx0XHRtZS5jaXJjbGUucmVtb3ZlKCk7XG5cdFx0bWUuZGFzaGVkQm9yZGVyLnJlbW92ZSgpO1xuXHRcdG1lLmxhYmVsLnJlbW92ZSgpO1xuXHRcdG1lLmxhYmVsMi5yZW1vdmUoKTtcblxuXHRcdC8vbWUuYmMuJGNvbnRhaW5lclxuXHRcdG1lLnZpc2libGUgPSBmYWxzZTtcblx0XHRpZiAobWUuaGFzSWNvbikgbWUucmVtb3ZlSWNvbigpO1xuXHRcdGlmIChtZS5vdmVybGF5KSBtZS5vdmVybGF5LnJlbW92ZSgpO1xuXHR9O1xuXG5cdC8qXG5cdCAqXG5cdCAqL1xuXHRtZS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0bWUuYmMub25Ob2RlQ2xpY2sobWUubm9kZSk7XG5cdFx0Ly9pZiAobWUubm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG5cdFx0XHRtZS5iYy5uYXZpZ2F0ZVRvKG1lLm5vZGUpO1xuXHRcdC8vfVxuXHR9O1xuXG5cdG1lLm9uaG92ZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgYyA9IG1lLmJjLiRjb250YWluZXJbMF07XG5cdFx0ZS5ub2RlID0gbWUubm9kZTtcblx0XHRlLmJ1YmJsZVBvcyA9IHsgeDptZS5wb3MueCwgeTogbWUucG9zLnkgfTtcblx0XHRlLm1vdXNlUG9zID0geyB4OmUub3JpZ0V2ZW50LnBhZ2VYIC0gYy5vZmZzZXRMZWZ0LCB5OiBlLm9yaWdFdmVudC5wYWdlWSAtIGMub2Zmc2V0VG9wIH07XG5cdFx0ZS50eXBlID0gJ1NIT1cnO1xuXHRcdGUudGFyZ2V0ID0gbWU7XG5cdFx0bWUuYmMudG9vbHRpcChlKTtcblx0fTtcblxuXHRtZS5vbnVuaG92ZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIG1lID0gdGhpcywgYyA9IG1lLmJjLiRjb250YWluZXJbMF07XG5cdFx0ZS5ub2RlID0gbWUubm9kZTtcblx0XHRlLnR5cGUgPSAnSElERSc7XG5cdFx0ZS50YXJnZXQgPSBtZTtcblx0XHRlLmJ1YmJsZVBvcyA9IHsgeDptZS5wb3MueCwgeTogbWUucG9zLnkgfTtcblx0XHRlLm1vdXNlUG9zID0geyB4OmUub3JpZ0V2ZW50LnBhZ2VYIC0gYy5vZmZzZXRMZWZ0LCB5OiBlLm9yaWdFdmVudC5wYWdlWSAtIGMub2Zmc2V0VG9wIH07XG5cdFx0bWUuYmMudG9vbHRpcChlKTtcblx0fTtcblxuXG5cdG1lLmluaXQoKTtcbn07XG5cbmlmICgodHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JykgJiYgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSAnb2JqZWN0JykpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBCdWJibGVUcmVlO1xufSIsIi8qIVxuICogd29yZGNsb3VkMi5qc1xuICogaHR0cDovL3RpbWRyZWFtLm9yZy93b3JkY2xvdWQyLmpzL1xuICpcbiAqIENvcHlyaWdodCAyMDExIC0gMjAxMyBUaW0gQ2hpZW5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gc2V0SW1tZWRpYXRlXG5pZiAoIXdpbmRvdy5zZXRJbW1lZGlhdGUpIHtcbiAgd2luZG93LnNldEltbWVkaWF0ZSA9IChmdW5jdGlvbiBzZXR1cFNldEltbWVkaWF0ZSgpIHtcbiAgICByZXR1cm4gd2luZG93Lm1zU2V0SW1tZWRpYXRlIHx8XG4gICAgd2luZG93LndlYmtpdFNldEltbWVkaWF0ZSB8fFxuICAgIHdpbmRvdy5tb3pTZXRJbW1lZGlhdGUgfHxcbiAgICB3aW5kb3cub1NldEltbWVkaWF0ZSB8fFxuICAgIChmdW5jdGlvbiBzZXR1cFNldFplcm9UaW1lb3V0KCkge1xuICAgICAgaWYgKCF3aW5kb3cucG9zdE1lc3NhZ2UgfHwgIXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FsbGJhY2tzID0gW3VuZGVmaW5lZF07XG4gICAgICB2YXIgbWVzc2FnZSA9ICd6ZXJvLXRpbWVvdXQtbWVzc2FnZSc7XG5cbiAgICAgIC8vIExpa2Ugc2V0VGltZW91dCwgYnV0IG9ubHkgdGFrZXMgYSBmdW5jdGlvbiBhcmd1bWVudC4gIFRoZXJlJ3NcbiAgICAgIC8vIG5vIHRpbWUgYXJndW1lbnQgKGFsd2F5cyB6ZXJvKSBhbmQgbm8gYXJndW1lbnRzICh5b3UgaGF2ZSB0b1xuICAgICAgLy8gdXNlIGEgY2xvc3VyZSkuXG4gICAgICB2YXIgc2V0WmVyb1RpbWVvdXQgPSBmdW5jdGlvbiBzZXRaZXJvVGltZW91dChjYWxsYmFjaykge1xuICAgICAgICB2YXIgaWQgPSBjYWxsYmFja3MubGVuZ3RoO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlICsgaWQudG9TdHJpbmcoMzYpLCAnKicpO1xuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gc2V0WmVyb1RpbWVvdXRNZXNzYWdlKGV2dCkge1xuICAgICAgICAvLyBTa2lwcGluZyBjaGVja2luZyBldmVudCBzb3VyY2UsIHJldGFyZGVkIElFIGNvbmZ1c2VkIHRoaXMgd2luZG93XG4gICAgICAgIC8vIG9iamVjdCB3aXRoIGFub3RoZXIgaW4gdGhlIHByZXNlbmNlIG9mIGlmcmFtZVxuICAgICAgICBpZiAodHlwZW9mIGV2dC5kYXRhICE9PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgZXZ0LmRhdGEuc3Vic3RyKDAsIG1lc3NhZ2UubGVuZ3RoKSAhPT0gbWVzc2FnZS8qIHx8XG4gICAgICAgICAgICBldnQuc291cmNlICE9PSB3aW5kb3cgKi8pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdmFyIGlkID0gcGFyc2VJbnQoZXZ0LmRhdGEuc3Vic3RyKG1lc3NhZ2UubGVuZ3RoKSwgMzYpO1xuICAgICAgICBpZiAoIWNhbGxiYWNrc1tpZF0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFja3NbaWRdKCk7XG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSB1bmRlZmluZWQ7XG4gICAgICB9LCB0cnVlKTtcblxuICAgICAgLyogc3BlY2lmeSBjbGVhckltbWVkaWF0ZSgpIGhlcmUgc2luY2Ugd2UgbmVlZCB0aGUgc2NvcGUgKi9cbiAgICAgIHdpbmRvdy5jbGVhckltbWVkaWF0ZSA9IGZ1bmN0aW9uIGNsZWFyWmVyb1RpbWVvdXQoaWQpIHtcbiAgICAgICAgaWYgKCFjYWxsYmFja3NbaWRdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IHVuZGVmaW5lZDtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBzZXRaZXJvVGltZW91dDtcbiAgICB9KSgpIHx8XG4gICAgLy8gZmFsbGJhY2tcbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGVGYWxsYmFjayhmbikge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmlmICghd2luZG93LmNsZWFySW1tZWRpYXRlKSB7XG4gIHdpbmRvdy5jbGVhckltbWVkaWF0ZSA9IChmdW5jdGlvbiBzZXR1cENsZWFySW1tZWRpYXRlKCkge1xuICAgIHJldHVybiB3aW5kb3cubXNDbGVhckltbWVkaWF0ZSB8fFxuICAgIHdpbmRvdy53ZWJraXRDbGVhckltbWVkaWF0ZSB8fFxuICAgIHdpbmRvdy5tb3pDbGVhckltbWVkaWF0ZSB8fFxuICAgIHdpbmRvdy5vQ2xlYXJJbW1lZGlhdGUgfHxcbiAgICAvLyBcImNsZWFyWmVyb1RpbWVvdXRcIiBpcyBpbXBsZW1lbnQgb24gdGhlIHByZXZpb3VzIGJsb2NrIHx8XG4gICAgLy8gZmFsbGJhY2tcbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZUZhbGxiYWNrKHRpbWVyKSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9O1xuICB9KSgpO1xufVxuXG4oZnVuY3Rpb24oZ2xvYmFsKSB7XG5cbiAgLy8gQ2hlY2sgaWYgV29yZENsb3VkIGNhbiBydW4gb24gdGhpcyBicm93c2VyXG4gIHZhciBpc1N1cHBvcnRlZCA9IChmdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgaWYgKCFjYW52YXMgfHwgIWNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmICghY3R4LmdldEltYWdlRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWN0eC5maWxsVGV4dCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5wcm90b3R5cGUucHVzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9KCkpO1xuXG4gIC8vIEZpbmQgb3V0IGlmIHRoZSBicm93c2VyIGltcG9zZSBtaW5pdW0gZm9udCBzaXplIGJ5XG4gIC8vIGRyYXdpbmcgc21hbGwgdGV4dHMgb24gYSBjYW52YXMgYW5kIG1lYXN1cmUgaXQncyB3aWR0aC5cbiAgdmFyIG1pbml1bUZvbnRTaXplID0gKGZ1bmN0aW9uIGdldE1pbml1bUZvbnRTaXplKCkge1xuICAgIGlmICghaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIC8vIHN0YXJ0IGZyb20gMjBcbiAgICB2YXIgc2l6ZSA9IDIwO1xuXG4gICAgLy8gdHdvIHNpemVzIHRvIG1lYXN1cmVcbiAgICB2YXIgaGFuV2lkdGgsIG1XaWR0aDtcblxuICAgIHdoaWxlIChzaXplKSB7XG4gICAgICBjdHguZm9udCA9IHNpemUudG9TdHJpbmcoMTApICsgJ3B4IHNhbnMtc2VyaWYnO1xuICAgICAgaWYgKChjdHgubWVhc3VyZVRleHQoJ1xcdUZGMzcnKS53aWR0aCA9PT0gaGFuV2lkdGgpICYmXG4gICAgICAgICAgKGN0eC5tZWFzdXJlVGV4dCgnbScpLndpZHRoKSA9PT0gbVdpZHRoKSB7XG4gICAgICAgIHJldHVybiAoc2l6ZSArIDEpO1xuICAgICAgfVxuXG4gICAgICBoYW5XaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCgnXFx1RkYzNycpLndpZHRoO1xuICAgICAgbVdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KCdtJykud2lkdGg7XG5cbiAgICAgIHNpemUtLTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfSkoKTtcblxuICAvLyBCYXNlZCBvbiBodHRwOi8vanNmcm9taGVsbC5jb20vYXJyYXkvc2h1ZmZsZVxuICB2YXIgc2h1ZmZsZUFycmF5ID0gZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycikge1xuICAgIGZvciAodmFyIGosIHgsIGkgPSBhcnIubGVuZ3RoOyBpO1xuICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpLFxuICAgICAgeCA9IGFyclstLWldLCBhcnJbaV0gPSBhcnJbal0sXG4gICAgICBhcnJbal0gPSB4KSB7fVxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgdmFyIFdvcmRDbG91ZCA9IGZ1bmN0aW9uIFdvcmRDbG91ZChlbGVtZW50cywgb3B0aW9ucykge1xuICAgIGlmICghaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSB7XG4gICAgICBlbGVtZW50cyA9IFtlbGVtZW50c107XG4gICAgfVxuXG4gICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbCwgaSkge1xuICAgICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHNbaV0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbCk7XG4gICAgICAgIGlmICghZWxlbWVudHNbaV0pIHtcbiAgICAgICAgICB0aHJvdyAnVGhlIGVsZW1lbnQgaWQgc3BlY2lmaWVkIGlzIG5vdCBmb3VuZC4nO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFlbC50YWdOYW1lICYmICFlbC5hcHBlbmRDaGlsZCkge1xuICAgICAgICB0aHJvdyAnWW91IG11c3QgcGFzcyB2YWxpZCBIVE1MIGVsZW1lbnRzLCBvciBJRCBvZiB0aGUgZWxlbWVudC4nO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyogRGVmYXVsdCB2YWx1ZXMgdG8gYmUgb3ZlcndyaXR0ZW4gYnkgb3B0aW9ucyBvYmplY3QgKi9cbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGZvbnRGYW1pbHk6ICdcIlRyZWJ1Y2hldCBNU1wiLCBcIkhlaXRpIFRDXCIsIFwi5b6u6Luf5q2j6buR6auUXCIsICcgK1xuICAgICAgICAgICAgICAgICAgJ1wiQXJpYWwgVW5pY29kZSBNU1wiLCBcIkRyb2lkIEZhbGxiYWNrIFNhbnNcIiwgc2Fucy1zZXJpZicsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIGNvbG9yOiAncmFuZG9tLWRhcmsnLFxuICAgICAgbWluU2l6ZTogMCwgLy8gMCB0byBkaXNhYmxlXG4gICAgICB3ZWlnaHRGYWN0b3I6IDEsXG4gICAgICBjbGVhckNhbnZhczogdHJ1ZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCAgLy8gb3BhcXVlIHdoaXRlID0gcmdiYSgyNTUsIDI1NSwgMjU1LCAxKVxuXG4gICAgICBncmlkU2l6ZTogOCxcbiAgICAgIG9yaWdpbjogbnVsbCxcblxuICAgICAgZHJhd01hc2s6IGZhbHNlLFxuICAgICAgbWFza0NvbG9yOiAncmdiYSgyNTUsMCwwLDAuMyknLFxuICAgICAgbWFza0dhcFdpZHRoOiAwLjMsXG5cbiAgICAgIHdhaXQ6IDAsXG4gICAgICBhYm9ydFRocmVzaG9sZDogMCwgLy8gZGlzYWJsZWRcbiAgICAgIGFib3J0OiBmdW5jdGlvbiBub29wKCkge30sXG5cbiAgICAgIG1pblJvdGF0aW9uOiAtIE1hdGguUEkgLyAyLFxuICAgICAgbWF4Um90YXRpb246IE1hdGguUEkgLyAyLFxuXG4gICAgICBzaHVmZmxlOiB0cnVlLFxuICAgICAgcm90YXRlUmF0aW86IDAuMSxcblxuICAgICAgc2hhcGU6ICdjaXJjbGUnLFxuICAgICAgZWxsaXB0aWNpdHk6IDAuNjUsXG5cbiAgICAgIGhvdmVyOiBudWxsLFxuICAgICAgY2xpY2s6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgIGlmIChrZXkgaW4gc2V0dGluZ3MpIHtcbiAgICAgICAgICBzZXR0aW5nc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogQ29udmVydCB3ZWlnaHRGYWN0b3IgaW50byBhIGZ1bmN0aW9uICovXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy53ZWlnaHRGYWN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBmYWN0b3IgPSBzZXR0aW5ncy53ZWlnaHRGYWN0b3I7XG4gICAgICBzZXR0aW5ncy53ZWlnaHRGYWN0b3IgPSBmdW5jdGlvbiB3ZWlnaHRGYWN0b3IocHQpIHtcbiAgICAgICAgcmV0dXJuIHB0ICogZmFjdG9yOyAvL2luIHB4XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qIENvbnZlcnQgc2hhcGUgaW50byBhIGZ1bmN0aW9uICovXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5zaGFwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc3dpdGNoIChzZXR0aW5ncy5zaGFwZSkge1xuICAgICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gJ2NpcmNsZScgaXMgdGhlIGRlZmF1bHQgYW5kIGEgc2hvcnRjdXQgaW4gdGhlIGNvZGUgbG9vcC5cbiAgICAgICAgICBzZXR0aW5ncy5zaGFwZSA9ICdjaXJjbGUnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2NhcmRpb2lkJzpcbiAgICAgICAgICBzZXR0aW5ncy5zaGFwZSA9IGZ1bmN0aW9uIHNoYXBlQ2FyZGlvaWQodGhldGEpIHtcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4odGhldGEpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLypcblxuICAgICAgICBUbyB3b3JrIG91dCBhbiBYLWdvbiwgb25lIGhhcyB0byBjYWxjdWxhdGUgXCJtXCIsXG4gICAgICAgIHdoZXJlIDEvKGNvcygyKlBJL1gpK20qc2luKDIqUEkvWCkpID0gMS8oY29zKDApK20qc2luKDApKVxuICAgICAgICBodHRwOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9MSUyRiUyOGNvcyUyODIqUEklMkZYJTI5JTJCbSpzaW4lMjhcbiAgICAgICAgMipQSSUyRlglMjklMjkrJTNEKzElMkYlMjhjb3MlMjgwJTI5JTJCbSpzaW4lMjgwJTI5JTI5XG5cbiAgICAgICAgQ29weSB0aGUgc29sdXRpb24gaW50byBwb2xhciBlcXVhdGlvbiByID0gMS8oY29zKHQnKSArIG0qc2luKHQnKSlcbiAgICAgICAgd2hlcmUgdCcgZXF1YWxzIHRvIG1vZCh0LCAyUEkvWCk7XG5cbiAgICAgICAgKi9cblxuICAgICAgICBjYXNlICdkaWFtb25kJzpcbiAgICAgICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgICAgICAvLyBodHRwOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9cGxvdCtyKyUzRCsxJTJGJTI4Y29zJTI4bW9kK1xuICAgICAgICAgIC8vICUyOHQlMkMrUEklMkYyJTI5JTI5JTJCc2luJTI4bW9kKyUyOHQlMkMrUEklMkYyJTI5JTI5JTI5JTJDK3QrJTNEXG4gICAgICAgICAgLy8gKzArLi4rMipQSVxuICAgICAgICAgIHNldHRpbmdzLnNoYXBlID0gZnVuY3Rpb24gc2hhcGVTcXVhcmUodGhldGEpIHtcbiAgICAgICAgICAgIHZhciB0aGV0YVByaW1lID0gdGhldGEgJSAoMiAqIE1hdGguUEkgLyA0KTtcbiAgICAgICAgICAgIHJldHVybiAxIC8gKE1hdGguY29zKHRoZXRhUHJpbWUpICsgTWF0aC5zaW4odGhldGFQcmltZSkpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAndHJpYW5nbGUtZm9yd2FyZCc6XG4gICAgICAgICAgLy8gaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXBsb3QrcislM0QrMSUyRiUyOGNvcyUyOG1vZCtcbiAgICAgICAgICAvLyAlMjh0JTJDKzIqUEklMkYzJTI5JTI5JTJCc3FydCUyODMlMjlzaW4lMjhtb2QrJTI4dCUyQysyKlBJJTJGMyUyOVxuICAgICAgICAgIC8vICUyOSUyOSUyQyt0KyUzRCswKy4uKzIqUElcbiAgICAgICAgICBzZXR0aW5ncy5zaGFwZSA9IGZ1bmN0aW9uIHNoYXBlVHJpYW5nbGUodGhldGEpIHtcbiAgICAgICAgICAgIHZhciB0aGV0YVByaW1lID0gdGhldGEgJSAoMiAqIE1hdGguUEkgLyAzKTtcbiAgICAgICAgICAgIHJldHVybiAxIC8gKE1hdGguY29zKHRoZXRhUHJpbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguc3FydCgzKSAqIE1hdGguc2luKHRoZXRhUHJpbWUpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgICAgY2FzZSAndHJpYW5nbGUtdXByaWdodCc6XG4gICAgICAgICAgc2V0dGluZ3Muc2hhcGUgPSBmdW5jdGlvbiBzaGFwZVRyaWFuZ2xlKHRoZXRhKSB7XG4gICAgICAgICAgICB2YXIgdGhldGFQcmltZSA9ICh0aGV0YSArIE1hdGguUEkgKiAzIC8gMikgJSAoMiAqIE1hdGguUEkgLyAzKTtcbiAgICAgICAgICAgIHJldHVybiAxIC8gKE1hdGguY29zKHRoZXRhUHJpbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguc3FydCgzKSAqIE1hdGguc2luKHRoZXRhUHJpbWUpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3BlbnRhZ29uJzpcbiAgICAgICAgICBzZXR0aW5ncy5zaGFwZSA9IGZ1bmN0aW9uIHNoYXBlUGVudGFnb24odGhldGEpIHtcbiAgICAgICAgICAgIHZhciB0aGV0YVByaW1lID0gKHRoZXRhICsgMC45NTUpICUgKDIgKiBNYXRoLlBJIC8gNSk7XG4gICAgICAgICAgICByZXR1cm4gMSAvIChNYXRoLmNvcyh0aGV0YVByaW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcyNjU0MyAqIE1hdGguc2luKHRoZXRhUHJpbWUpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3N0YXInOlxuICAgICAgICAgIHNldHRpbmdzLnNoYXBlID0gZnVuY3Rpb24gc2hhcGVTdGFyKHRoZXRhKSB7XG4gICAgICAgICAgICB2YXIgdGhldGFQcmltZSA9ICh0aGV0YSArIDAuOTU1KSAlICgyICogTWF0aC5QSSAvIDEwKTtcbiAgICAgICAgICAgIGlmICgodGhldGEgKyAwLjk1NSkgJSAoMiAqIE1hdGguUEkgLyA1KSAtICgyICogTWF0aC5QSSAvIDEwKSA+PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxIC8gKE1hdGguY29zKCgyICogTWF0aC5QSSAvIDEwKSAtIHRoZXRhUHJpbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMy4wNzc2OCAqIE1hdGguc2luKCgyICogTWF0aC5QSSAvIDEwKSAtIHRoZXRhUHJpbWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAxIC8gKE1hdGguY29zKHRoZXRhUHJpbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMy4wNzc2OCAqIE1hdGguc2luKHRoZXRhUHJpbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE1ha2Ugc3VyZSBncmlkU2l6ZSBpcyBhIHdob2xlIG51bWJlciBhbmQgaXMgbm90IHNtYWxsZXIgdGhhbiA0cHggKi9cbiAgICBzZXR0aW5ncy5ncmlkU2l6ZSA9IE1hdGgubWF4KE1hdGguZmxvb3Ioc2V0dGluZ3MuZ3JpZFNpemUpLCA0KTtcblxuICAgIC8qIHNob3J0aGFuZCAqL1xuICAgIHZhciBnID0gc2V0dGluZ3MuZ3JpZFNpemU7XG4gICAgdmFyIG1hc2tSZWN0V2lkdGggPSBnIC0gc2V0dGluZ3MubWFza0dhcFdpZHRoO1xuXG4gICAgLyogbm9ybWFsaXplIHJvdGF0aW9uIHNldHRpbmdzICovXG4gICAgdmFyIHJvdGF0aW9uUmFuZ2UgPSBNYXRoLmFicyhzZXR0aW5ncy5tYXhSb3RhdGlvbiAtIHNldHRpbmdzLm1pblJvdGF0aW9uKTtcbiAgICB2YXIgbWluUm90YXRpb24gPSBNYXRoLm1pbihzZXR0aW5ncy5tYXhSb3RhdGlvbiwgc2V0dGluZ3MubWluUm90YXRpb24pO1xuXG4gICAgLyogaW5mb3JtYXRpb24vb2JqZWN0IGF2YWlsYWJsZSB0byBhbGwgZnVuY3Rpb25zLCBzZXQgd2hlbiBzdGFydCgpICovXG4gICAgdmFyIGdyaWQsIC8vIDJkIGFycmF5IGNvbnRhaW5pbmcgZmlsbGluZyBpbmZvcm1hdGlvblxuICAgICAgbmd4LCBuZ3ksIC8vIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGdyaWRcbiAgICAgIGNlbnRlciwgLy8gcG9zaXRpb24gb2YgdGhlIGNlbnRlciBvZiB0aGUgY2xvdWRcbiAgICAgIG1heFJhZGl1cztcblxuICAgIC8qIHRpbWVzdGFtcCBmb3IgbWVhc3VyaW5nIGVhY2ggcHV0V29yZCgpIGFjdGlvbiAqL1xuICAgIHZhciBlc2NhcGVUaW1lO1xuXG4gICAgLyogZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGNvbG9yIG9mIHRoZSB0ZXh0ICovXG4gICAgdmFyIGdldFRleHRDb2xvcjtcbiAgICBzd2l0Y2ggKHNldHRpbmdzLmNvbG9yKSB7XG4gICAgICBjYXNlICdyYW5kb20tZGFyayc6XG4gICAgICAgIGdldFRleHRDb2xvciA9IGZ1bmN0aW9uIGdldFJhbmRvbURhcmtDb2xvcigpIHtcbiAgICAgICAgICByZXR1cm4gJ3JnYignICtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyOCkudG9TdHJpbmcoMTApICsgJywnICtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyOCkudG9TdHJpbmcoMTApICsgJywnICtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyOCkudG9TdHJpbmcoMTApICsgJyknO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmFuZG9tLWxpZ2h0JzpcbiAgICAgICAgZ2V0VGV4dENvbG9yID0gZnVuY3Rpb24gZ2V0UmFuZG9tTGlnaHRDb2xvcigpIHtcbiAgICAgICAgICByZXR1cm4gJ3JnYignICtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyOCArIDEyOCkudG9TdHJpbmcoMTApICsgJywnICtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyOCArIDEyOCkudG9TdHJpbmcoMTApICsgJywnICtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyOCArIDEyOCkudG9TdHJpbmcoMTApICsgJyknO1xuICAgICAgICB9O1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5jb2xvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGdldFRleHRDb2xvciA9IHNldHRpbmdzLmNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8qIEludGVyYWN0aXZlICovXG4gICAgdmFyIGludGVyYWN0aXZlID0gZmFsc2U7XG4gICAgdmFyIGluZm9HcmlkID0gW107XG4gICAgdmFyIGhvdmVyZWQ7XG5cbiAgICB2YXIgZ2V0SW5mb0dyaWRGcm9tTW91c2VFdmVudCA9IGZ1bmN0aW9uIGdldEluZm9HcmlkRnJvbU1vdXNlRXZlbnQoZXZ0KSB7XG4gICAgICB2YXIgY2FudmFzID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XG4gICAgICB2YXIgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBldmVudFggPSBldnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgIHZhciBldmVudFkgPSBldnQuY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgICB2YXIgeCA9IE1hdGguZmxvb3IoZXZlbnRYICogKChjYW52YXMud2lkdGggLyByZWN0LndpZHRoKSB8fCAxKSAvIGcpO1xuICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKGV2ZW50WSAqICgoY2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0KSB8fCAxKSAvIGcpO1xuXG4gICAgICByZXR1cm4gaW5mb0dyaWRbeF1beV07XG4gICAgfTtcblxuICAgIHZhciB3b3JkY2xvdWRob3ZlciA9IGZ1bmN0aW9uIHdvcmRjbG91ZGhvdmVyKGV2dCkge1xuICAgICAgdmFyIGluZm8gPSBnZXRJbmZvR3JpZEZyb21Nb3VzZUV2ZW50KGV2dCk7XG5cbiAgICAgIGlmIChob3ZlcmVkID09PSBpbmZvKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaG92ZXJlZCA9IGluZm87XG4gICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgc2V0dGluZ3MuaG92ZXIodW5kZWZpbmVkLCB1bmRlZmluZWQsIGV2dCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXR0aW5ncy5ob3ZlcihpbmZvLml0ZW0sIGluZm8uZGltZW5zaW9uLCBldnQpO1xuXG4gICAgfTtcblxuICAgIHZhciB3b3JkY2xvdWRjbGljayA9IGZ1bmN0aW9uIHdvcmRjbG91ZGNsaWNrKGV2dCkge1xuICAgICAgdmFyIGluZm8gPSBnZXRJbmZvR3JpZEZyb21Nb3VzZUV2ZW50KGV2dCk7XG4gICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXR0aW5ncy5jbGljayhpbmZvLml0ZW0sIGluZm8uZGltZW5zaW9uLCBldnQpO1xuICAgIH07XG5cbiAgICAvKiBHZXQgcG9pbnRzIG9uIHRoZSBncmlkIGZvciBhIGdpdmVuIHJhZGl1cyBhd2F5IGZyb20gdGhlIGNlbnRlciAqL1xuICAgIHZhciBwb2ludHNBdFJhZGl1cyA9IFtdO1xuICAgIHZhciBnZXRQb2ludHNBdFJhZGl1cyA9IGZ1bmN0aW9uIGdldFBvaW50c0F0UmFkaXVzKHJhZGl1cykge1xuICAgICAgaWYgKHBvaW50c0F0UmFkaXVzW3JhZGl1c10pIHtcbiAgICAgICAgcmV0dXJuIHBvaW50c0F0UmFkaXVzW3JhZGl1c107XG4gICAgICB9XG5cbiAgICAgIC8vIExvb2sgZm9yIHRoZXNlIG51bWJlciBvZiBwb2ludHMgb24gZWFjaCByYWRpdXNcbiAgICAgIHZhciBUID0gcmFkaXVzICogODtcblxuICAgICAgLy8gR2V0dGluZyBhbGwgdGhlIHBvaW50cyBhdCB0aGlzIHJhZGl1c1xuICAgICAgdmFyIHQgPSBUO1xuICAgICAgdmFyIHBvaW50cyA9IFtdO1xuXG4gICAgICBpZiAocmFkaXVzID09PSAwKSB7XG4gICAgICAgIHBvaW50cy5wdXNoKFtjZW50ZXJbMF0sIGNlbnRlclsxXSwgMF0pO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodC0tKSB7XG4gICAgICAgIC8vIGRpc3RvcnQgdGhlIHJhZGl1cyB0byBwdXQgdGhlIGNsb3VkIGluIHNoYXBlXG4gICAgICAgIHZhciByeCA9IDE7XG4gICAgICAgIGlmIChzZXR0aW5ncy5zaGFwZSAhPT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICByeCA9IHNldHRpbmdzLnNoYXBlKHQgLyBUICogMiAqIE1hdGguUEkpOyAvLyAwIHRvIDFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1c2ggW3gsIHksIHRdOyB0IGlzIHVzZWQgc29sZWx5IGZvciBnZXRUZXh0Q29sb3IoKVxuICAgICAgICBwb2ludHMucHVzaChbXG4gICAgICAgICAgY2VudGVyWzBdICsgcmFkaXVzICogcnggKiBNYXRoLmNvcygtdCAvIFQgKiAyICogTWF0aC5QSSksXG4gICAgICAgICAgY2VudGVyWzFdICsgcmFkaXVzICogcnggKiBNYXRoLnNpbigtdCAvIFQgKiAyICogTWF0aC5QSSkgKlxuICAgICAgICAgICAgc2V0dGluZ3MuZWxsaXB0aWNpdHksXG4gICAgICAgICAgdCAvIFQgKiAyICogTWF0aC5QSV0pO1xuICAgICAgfVxuXG4gICAgICBwb2ludHNBdFJhZGl1c1tyYWRpdXNdID0gcG9pbnRzO1xuICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9O1xuXG4gICAgLyogUmV0dXJuIHRydWUgaWYgd2UgaGFkIHNwZW50IHRvbyBtdWNoIHRpbWUgKi9cbiAgICB2YXIgZXhjZWVkVGltZSA9IGZ1bmN0aW9uIGV4Y2VlZFRpbWUoKSB7XG4gICAgICByZXR1cm4gKChzZXR0aW5ncy5hYm9ydFRocmVzaG9sZCA+IDApICYmXG4gICAgICAgICgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC0gZXNjYXBlVGltZSA+IHNldHRpbmdzLmFib3J0VGhyZXNob2xkKSk7XG4gICAgfTtcblxuICAgIC8qIEdldCB0aGUgZGVnIG9mIHJvdGF0aW9uIGFjY29yZGluZyB0byBzZXR0aW5ncywgYW5kIGx1Y2suICovXG4gICAgdmFyIGdldFJvdGF0ZURlZyA9IGZ1bmN0aW9uIGdldFJvdGF0ZURlZygpIHtcbiAgICAgIGlmIChzZXR0aW5ncy5yb3RhdGVSYXRpbyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiBzZXR0aW5ncy5yb3RhdGVSYXRpbykge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvdGF0aW9uUmFuZ2UgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG1pblJvdGF0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWluUm90YXRpb24gKyBNYXRoLnJhbmRvbSgpICogcm90YXRpb25SYW5nZTtcbiAgICB9O1xuXG4gICAgdmFyIGdldFRleHRJbmZvID0gZnVuY3Rpb24gZ2V0VGV4dEluZm8od29yZCwgd2VpZ2h0LCByb3RhdGVEZWcpIHtcbiAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgYWN1dGFsIGZvbnQgc2l6ZVxuICAgICAgLy8gZm9udFNpemUgPT09IDAgbWVhbnMgd2VpZ2h0RmFjdG9yIGZ1bmN0aW9uIHdhbnRzIHRoZSB0ZXh0IHNraXBwZWQsXG4gICAgICAvLyBhbmQgc2l6ZSA8IG1pblNpemUgbWVhbnMgd2UgY2Fubm90IGRyYXcgdGhlIHRleHQuXG4gICAgICB2YXIgZGVidWcgPSBmYWxzZTtcbiAgICAgIHZhciBmb250U2l6ZSA9IHNldHRpbmdzLndlaWdodEZhY3Rvcih3ZWlnaHQpO1xuICAgICAgaWYgKGZvbnRTaXplIDw9IHNldHRpbmdzLm1pblNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBTY2FsZSBmYWN0b3IgaGVyZSBpcyB0byBtYWtlIHN1cmUgZmlsbFRleHQgaXMgbm90IGxpbWl0ZWQgYnlcbiAgICAgIC8vIHRoZSBtaW5pdW0gZm9udCBzaXplIHNldCBieSBicm93c2VyLlxuICAgICAgLy8gSXQgd2lsbCBhbHdheXMgYmUgMSBvciAybi5cbiAgICAgIHZhciBtdSA9IDE7XG4gICAgICBpZiAoZm9udFNpemUgPCBtaW5pdW1Gb250U2l6ZSkge1xuICAgICAgICBtdSA9IChmdW5jdGlvbiBjYWxjdWxhdGVTY2FsZUZhY3RvcigpIHtcbiAgICAgICAgICB2YXIgbXUgPSAyO1xuICAgICAgICAgIHdoaWxlIChtdSAqIGZvbnRTaXplIDwgbWluaXVtRm9udFNpemUpIHtcbiAgICAgICAgICAgIG11ICs9IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtdTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIHZhciBmY3R4ID0gZmNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlIH0pO1xuXG4gICAgICBmY3R4LmZvbnQgPSBzZXR0aW5ncy5mb250V2VpZ2h0ICsgJyAnICtcbiAgICAgICAgKGZvbnRTaXplICogbXUpLnRvU3RyaW5nKDEwKSArICdweCAnICsgc2V0dGluZ3MuZm9udEZhbWlseTtcblxuICAgICAgLy8gRXN0aW1hdGUgdGhlIGRpbWVuc2lvbiBvZiB0aGUgdGV4dCB3aXRoIG1lYXN1cmVUZXh0KCkuXG4gICAgICB2YXIgZncgPSBmY3R4Lm1lYXN1cmVUZXh0KHdvcmQpLndpZHRoIC8gbXU7XG4gICAgICB2YXIgZmggPSBNYXRoLm1heChmb250U2l6ZSAqIG11LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmN0eC5tZWFzdXJlVGV4dCgnbScpLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmN0eC5tZWFzdXJlVGV4dCgnXFx1RkYzNycpLndpZHRoKSAvIG11O1xuXG4gICAgICAvLyBDcmVhdGUgYSBib3VuZGFyeSBib3ggdGhhdCBpcyBsYXJnZXIgdGhhbiBvdXIgZXN0aW1hdGVzLFxuICAgICAgLy8gc28gdGV4dCBkb24ndCBnZXQgY3V0IG9mIChpdCBzaWxsIG1pZ2h0KVxuICAgICAgdmFyIGJveFdpZHRoID0gZncgKyBmaCAqIDI7XG4gICAgICB2YXIgYm94SGVpZ2h0ID0gZmggKiAzO1xuICAgICAgdmFyIGZndyA9IE1hdGguY2VpbChib3hXaWR0aCAvIGcpO1xuICAgICAgdmFyIGZnaCA9IE1hdGguY2VpbChib3hIZWlnaHQgLyBnKTtcbiAgICAgIGJveFdpZHRoID0gZmd3ICogZztcbiAgICAgIGJveEhlaWdodCA9IGZnaCAqIGc7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcHJvcGVyIG9mZnNldHMgdG8gbWFrZSB0aGUgdGV4dCBjZW50ZXJlZCBhdFxuICAgICAgLy8gdGhlIHByZWZlcnJlZCBwb3NpdGlvbi5cblxuICAgICAgLy8gVGhpcyBpcyBzaW1wbHkgaGFsZiBvZiB0aGUgd2lkdGguXG4gICAgICB2YXIgZmlsbFRleHRPZmZzZXRYID0gLSBmdyAvIDI7XG4gICAgICAvLyBJbnN0ZWFkIG9mIG1vdmluZyB0aGUgYm94IHRvIHRoZSBleGFjdCBtaWRkbGUgb2YgdGhlIHByZWZlcnJlZFxuICAgICAgLy8gcG9zaXRpb24sIGZvciBZLW9mZnNldCB3ZSBtb3ZlIDAuNCBpbnN0ZWFkLCBzbyBMYXRpbiBhbHBoYWJldHMgbG9va1xuICAgICAgLy8gdmVydGljYWwgY2VudGVyZWQuXG4gICAgICB2YXIgZmlsbFRleHRPZmZzZXRZID0gLSBmaCAqIDAuNDtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBhY3R1YWwgZGltZW5zaW9uIG9mIHRoZSBjYW52YXMsIGNvbnNpZGVyaW5nIHRoZSByb3RhdGlvbi5cbiAgICAgIHZhciBjZ2ggPSBNYXRoLmNlaWwoKGJveFdpZHRoICogTWF0aC5hYnMoTWF0aC5zaW4ocm90YXRlRGVnKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94SGVpZ2h0ICogTWF0aC5hYnMoTWF0aC5jb3Mocm90YXRlRGVnKSkpIC8gZyk7XG4gICAgICB2YXIgY2d3ID0gTWF0aC5jZWlsKChib3hXaWR0aCAqIE1hdGguYWJzKE1hdGguY29zKHJvdGF0ZURlZykpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveEhlaWdodCAqIE1hdGguYWJzKE1hdGguc2luKHJvdGF0ZURlZykpKSAvIGcpO1xuICAgICAgdmFyIHdpZHRoID0gY2d3ICogZztcbiAgICAgIHZhciBoZWlnaHQgPSBjZ2ggKiBnO1xuXG4gICAgICBmY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7XG4gICAgICBmY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTtcblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIC8vIEF0dGFjaCBmY2FudmFzIHRvIHRoZSBET01cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmY2FudmFzKTtcbiAgICAgICAgLy8gU2F2ZSBpdCdzIHN0YXRlIHNvIHRoYXQgd2UgY291bGQgcmVzdG9yZSBhbmQgZHJhdyB0aGUgZ3JpZCBjb3JyZWN0bHkuXG4gICAgICAgIGZjdHguc2F2ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBTY2FsZSB0aGUgY2FudmFzIHdpdGggfG11fC5cbiAgICAgIGZjdHguc2NhbGUoMSAvIG11LCAxIC8gbXUpO1xuICAgICAgZmN0eC50cmFuc2xhdGUod2lkdGggKiBtdSAvIDIsIGhlaWdodCAqIG11IC8gMik7XG4gICAgICBmY3R4LnJvdGF0ZSgtIHJvdGF0ZURlZyk7XG5cbiAgICAgIC8vIE9uY2UgdGhlIHdpZHRoL2hlaWdodCBpcyBzZXQsIGN0eCBpbmZvIHdpbGwgYmUgcmVzZXQuXG4gICAgICAvLyBTZXQgaXQgYWdhaW4gaGVyZS5cbiAgICAgIGZjdHguZm9udCA9IHNldHRpbmdzLmZvbnRXZWlnaHQgKyAnICcgK1xuICAgICAgICAoZm9udFNpemUgKiBtdSkudG9TdHJpbmcoMTApICsgJ3B4ICcgKyBzZXR0aW5ncy5mb250RmFtaWx5O1xuXG4gICAgICAvLyBGaWxsIHRoZSB0ZXh0IGludG8gdGhlIGZjYW52YXMuXG4gICAgICAvLyBYWFg6IFdlIGNhbm5vdCBiZWNhdXNlIHRleHRCYXNlbGluZSA9ICd0b3AnIGhlcmUgYmVjYXVzZVxuICAgICAgLy8gRmlyZWZveCBhbmQgQ2hyb21lIHVzZXMgZGlmZmVyZW50IGRlZmF1bHQgbGluZS1oZWlnaHQgZm9yIGNhbnZhcy5cbiAgICAgIC8vIFBsZWFzZSByZWFkIGh0dHBzOi8vYnVnemlsLmxhLzczNzg1MiNjNi5cbiAgICAgIC8vIEhlcmUsIHdlIHVzZSB0ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJyBhbmQgZHJhdyB0aGUgdGV4dCBhdCBleGFjdGx5XG4gICAgICAvLyAwLjUgKiBmb250U2l6ZSBsb3dlci5cbiAgICAgIGZjdHguZmlsbFN0eWxlID0gJyMwMDAnO1xuICAgICAgZmN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgIGZjdHguZmlsbFRleHQod29yZCwgZmlsbFRleHRPZmZzZXRYICogbXUsXG4gICAgICAgICAgICAgICAgICAgIChmaWxsVGV4dE9mZnNldFkgKyBmb250U2l6ZSAqIDAuNSkgKiBtdSk7XG5cbiAgICAgIC8vIEdldCB0aGUgcGl4ZWxzIG9mIHRoZSB0ZXh0XG4gICAgICB2YXIgaW1hZ2VEYXRhID0gZmN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCkuZGF0YTtcblxuICAgICAgaWYgKGV4Y2VlZFRpbWUoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAvLyBEcmF3IHRoZSBib3ggb2YgdGhlIG9yaWdpbmFsIGVzdGltYXRpb25cbiAgICAgICAgZmN0eC5zdHJva2VSZWN0KGZpbGxUZXh0T2Zmc2V0WCAqIG11LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFRleHRPZmZzZXRZLCBmdyAqIG11LCBmaCAqIG11KTtcbiAgICAgICAgZmN0eC5yZXN0b3JlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlYWQgdGhlIHBpeGVscyBhbmQgc2F2ZSB0aGUgaW5mb3JtYXRpb24gdG8gdGhlIG9jY3VwaWVkIGFycmF5XG4gICAgICB2YXIgb2NjdXBpZWQgPSBbXTtcbiAgICAgIHZhciBneCA9IGNndywgZ3ksIHgsIHk7XG4gICAgICB2YXIgYm91bmRzID0gW2NnaCAvIDIsIGNndyAvIDIsIGNnaCAvIDIsIGNndyAvIDJdO1xuICAgICAgd2hpbGUgKGd4LS0pIHtcbiAgICAgICAgZ3kgPSBjZ2g7XG4gICAgICAgIHdoaWxlIChneS0tKSB7XG4gICAgICAgICAgeSA9IGc7XG4gICAgICAgICAgc2luZ2xlR3JpZExvb3A6IHtcbiAgICAgICAgICAgIHdoaWxlICh5LS0pIHtcbiAgICAgICAgICAgICAgeCA9IGc7XG4gICAgICAgICAgICAgIHdoaWxlICh4LS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VEYXRhWygoZ3kgKiBnICsgeSkgKiB3aWR0aCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGd4ICogZyArIHgpKSAqIDQgKyAzXSkge1xuICAgICAgICAgICAgICAgICAgb2NjdXBpZWQucHVzaChbZ3gsIGd5XSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChneCA8IGJvdW5kc1szXSkge1xuICAgICAgICAgICAgICAgICAgICBib3VuZHNbM10gPSBneDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChneCA+IGJvdW5kc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICBib3VuZHNbMV0gPSBneDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChneSA8IGJvdW5kc1swXSkge1xuICAgICAgICAgICAgICAgICAgICBib3VuZHNbMF0gPSBneTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChneSA+IGJvdW5kc1syXSkge1xuICAgICAgICAgICAgICAgICAgICBib3VuZHNbMl0gPSBneTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjUpJztcbiAgICAgICAgICAgICAgICAgICAgZmN0eC5maWxsUmVjdChneCAqIGcsIGd5ICogZywgZyAtIDAuNSwgZyAtIDAuNSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhayBzaW5nbGVHcmlkTG9vcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICBmY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDI1NSwgMC41KSc7XG4gICAgICAgICAgICAgIGZjdHguZmlsbFJlY3QoZ3ggKiBnLCBneSAqIGcsIGcgLSAwLjUsIGcgLSAwLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgZmN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAyNTUsIDAsIDAuNSknO1xuICAgICAgICBmY3R4LmZpbGxSZWN0KGJvdW5kc1szXSAqIGcsXG4gICAgICAgICAgICAgICAgICAgICAgYm91bmRzWzBdICogZyxcbiAgICAgICAgICAgICAgICAgICAgICAoYm91bmRzWzFdIC0gYm91bmRzWzNdICsgMSkgKiBnLFxuICAgICAgICAgICAgICAgICAgICAgIChib3VuZHNbMl0gLSBib3VuZHNbMF0gKyAxKSAqIGcpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gaW5mb3JtYXRpb24gbmVlZGVkIHRvIGNyZWF0ZSB0aGUgdGV4dCBvbiB0aGUgcmVhbCBjYW52YXNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG11OiBtdSxcbiAgICAgICAgb2NjdXBpZWQ6IG9jY3VwaWVkLFxuICAgICAgICBib3VuZHM6IGJvdW5kcyxcbiAgICAgICAgZ3c6IGNndyxcbiAgICAgICAgZ2g6IGNnaCxcbiAgICAgICAgZmlsbFRleHRPZmZzZXRYOiBmaWxsVGV4dE9mZnNldFgsXG4gICAgICAgIGZpbGxUZXh0T2Zmc2V0WTogZmlsbFRleHRPZmZzZXRZLFxuICAgICAgICBmaWxsVGV4dFdpZHRoOiBmdyxcbiAgICAgICAgZmlsbFRleHRIZWlnaHQ6IGZoLFxuICAgICAgICBmb250U2l6ZTogZm9udFNpemVcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qIERldGVybWluZSBpZiB0aGVyZSBpcyByb29tIGF2YWlsYWJsZSBpbiB0aGUgZ2l2ZW4gZGltZW5zaW9uICovXG4gICAgdmFyIGNhbkZpdFRleHQgPSBmdW5jdGlvbiBjYW5GaXRUZXh0KGd4LCBneSwgZ3csIGdoLCBvY2N1cGllZCkge1xuICAgICAgLy8gR28gdGhyb3VnaCB0aGUgb2NjdXBpZWQgcG9pbnRzLFxuICAgICAgLy8gcmV0dXJuIGZhbHNlIGlmIHRoZSBzcGFjZSBpcyBub3QgYXZhaWxhYmxlLlxuICAgICAgdmFyIGkgPSBvY2N1cGllZC5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBweCA9IGd4ICsgb2NjdXBpZWRbaV1bMF07XG4gICAgICAgIHZhciBweSA9IGd5ICsgb2NjdXBpZWRbaV1bMV07XG5cbiAgICAgICAgaWYgKHB4ID49IG5neCB8fCBweSA+PSBuZ3kgfHwgcHggPCAwIHx8IHB5IDwgMCB8fCAhZ3JpZFtweF1bcHldKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyogQWN0dWFsbHkgZHJhdyB0aGUgdGV4dCBvbiB0aGUgZ3JpZCAqL1xuICAgIHZhciBkcmF3VGV4dCA9IGZ1bmN0aW9uIGRyYXdUZXh0KGd4LCBneSwgaW5mbywgd29yZCwgd2VpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlLCB0aGV0YSwgcm90YXRlRGVnLCBhdHRyaWJ1dGVzKSB7XG5cbiAgICAgIHZhciBmb250U2l6ZSA9IGluZm8uZm9udFNpemU7XG4gICAgICB2YXIgY29sb3I7XG4gICAgICBpZiAoZ2V0VGV4dENvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gZ2V0VGV4dENvbG9yKHdvcmQsIHdlaWdodCwgZm9udFNpemUsIGRpc3RhbmNlLCB0aGV0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xvciA9IHNldHRpbmdzLmNvbG9yO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGltZW5zaW9uO1xuICAgICAgdmFyIGJvdW5kcyA9IGluZm8uYm91bmRzO1xuICAgICAgZGltZW5zaW9uID0ge1xuICAgICAgICB4OiAoZ3ggKyBib3VuZHNbM10pICogZyxcbiAgICAgICAgeTogKGd5ICsgYm91bmRzWzBdKSAqIGcsXG4gICAgICAgIHc6IChib3VuZHNbMV0gLSBib3VuZHNbM10gKyAxKSAqIGcsXG4gICAgICAgIGg6IChib3VuZHNbMl0gLSBib3VuZHNbMF0gKyAxKSAqIGdcbiAgICAgIH07XG5cbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgaWYgKGVsLmdldENvbnRleHQpIHtcbiAgICAgICAgICB2YXIgY3R4ID0gZWwuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICB2YXIgbXUgPSBpbmZvLm11O1xuXG4gICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCBzdGF0ZSBiZWZvcmUgbWVzc2luZyBpdFxuICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgY3R4LnNjYWxlKDEgLyBtdSwgMSAvIG11KTtcblxuICAgICAgICAgIGN0eC5mb250ID0gc2V0dGluZ3MuZm9udFdlaWdodCArICcgJyArXG4gICAgICAgICAgICAgICAgICAgICAoZm9udFNpemUgKiBtdSkudG9TdHJpbmcoMTApICsgJ3B4ICcgKyBzZXR0aW5ncy5mb250RmFtaWx5O1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcblxuICAgICAgICAgIC8vIFRyYW5zbGF0ZSB0aGUgY2FudmFzIHBvc2l0aW9uIHRvIHRoZSBvcmlnaW4gY29vcmRpbmF0ZSBvZiB3aGVyZVxuICAgICAgICAgIC8vIHRoZSB0ZXh0IHNob3VsZCBiZSBwdXQuXG4gICAgICAgICAgY3R4LnRyYW5zbGF0ZSgoZ3ggKyBpbmZvLmd3IC8gMikgKiBnICogbXUsXG4gICAgICAgICAgICAgICAgICAgICAgICAoZ3kgKyBpbmZvLmdoIC8gMikgKiBnICogbXUpO1xuXG4gICAgICAgICAgaWYgKHJvdGF0ZURlZyAhPT0gMCkge1xuICAgICAgICAgICAgY3R4LnJvdGF0ZSgtIHJvdGF0ZURlZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRmluYWxseSwgZmlsbCB0aGUgdGV4dC5cblxuICAgICAgICAgIC8vIFhYWDogV2UgY2Fubm90IGJlY2F1c2UgdGV4dEJhc2VsaW5lID0gJ3RvcCcgaGVyZSBiZWNhdXNlXG4gICAgICAgICAgLy8gRmlyZWZveCBhbmQgQ2hyb21lIHVzZXMgZGlmZmVyZW50IGRlZmF1bHQgbGluZS1oZWlnaHQgZm9yIGNhbnZhcy5cbiAgICAgICAgICAvLyBQbGVhc2UgcmVhZCBodHRwczovL2J1Z3ppbC5sYS83Mzc4NTIjYzYuXG4gICAgICAgICAgLy8gSGVyZSwgd2UgdXNlIHRleHRCYXNlbGluZSA9ICdtaWRkbGUnIGFuZCBkcmF3IHRoZSB0ZXh0IGF0IGV4YWN0bHlcbiAgICAgICAgICAvLyAwLjUgKiBmb250U2l6ZSBsb3dlci5cbiAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgICAgY3R4LmZpbGxUZXh0KHdvcmQsIGluZm8uZmlsbFRleHRPZmZzZXRYICogbXUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmZvLmZpbGxUZXh0T2Zmc2V0WSArIGZvbnRTaXplICogMC41KSAqIG11KTtcblxuICAgICAgICAgIC8vIFRoZSBiZWxvdyBib3ggaXMgYWx3YXlzIG1hdGNoZXMgaG93IDxzcGFuPnMgYXJlIHBvc2l0aW9uZWRcbiAgICAgICAgICAvKiBjdHguc3Ryb2tlUmVjdChpbmZvLmZpbGxUZXh0T2Zmc2V0WCwgaW5mby5maWxsVGV4dE9mZnNldFksXG4gICAgICAgICAgICBpbmZvLmZpbGxUZXh0V2lkdGgsIGluZm8uZmlsbFRleHRIZWlnaHQpOyAqL1xuXG4gICAgICAgICAgLy8gUmVzdG9yZSB0aGUgc3RhdGUuXG4gICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBkcmF3VGV4dCBvbiBESVYgZWxlbWVudFxuICAgICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIHZhciB0cmFuc2Zvcm1SdWxlID0gJyc7XG4gICAgICAgICAgdHJhbnNmb3JtUnVsZSA9ICdyb3RhdGUoJyArICgtIHJvdGF0ZURlZyAvIE1hdGguUEkgKiAxODApICsgJ2RlZykgJztcbiAgICAgICAgICBpZiAoaW5mby5tdSAhPT0gMSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtUnVsZSArPVxuICAgICAgICAgICAgICAndHJhbnNsYXRlWCgtJyArIChpbmZvLmZpbGxUZXh0V2lkdGggLyA0KSArICdweCkgJyArXG4gICAgICAgICAgICAgICdzY2FsZSgnICsgKDEgLyBpbmZvLm11KSArICcpJztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHN0eWxlUnVsZXMgPSB7XG4gICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2Rpc3BsYXknOiAnYmxvY2snLFxuICAgICAgICAgICAgJ2ZvbnQnOiBzZXR0aW5ncy5mb250V2VpZ2h0ICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgKGZvbnRTaXplICogaW5mby5tdSkgKyAncHggJyArIHNldHRpbmdzLmZvbnRGYW1pbHksXG4gICAgICAgICAgICAnbGVmdCc6ICgoZ3ggKyBpbmZvLmd3IC8gMikgKiBnICsgaW5mby5maWxsVGV4dE9mZnNldFgpICsgJ3B4JyxcbiAgICAgICAgICAgICd0b3AnOiAoKGd5ICsgaW5mby5naCAvIDIpICogZyArIGluZm8uZmlsbFRleHRPZmZzZXRZKSArICdweCcsXG4gICAgICAgICAgICAnd2lkdGgnOiBpbmZvLmZpbGxUZXh0V2lkdGggKyAncHgnLFxuICAgICAgICAgICAgJ2hlaWdodCc6IGluZm8uZmlsbFRleHRIZWlnaHQgKyAncHgnLFxuICAgICAgICAgICAgJ2NvbG9yJzogY29sb3IsXG4gICAgICAgICAgICAnbGluZUhlaWdodCc6IGZvbnRTaXplICsgJ3B4JyxcbiAgICAgICAgICAgICd3aGl0ZVNwYWNlJzogJ25vd3JhcCcsXG4gICAgICAgICAgICAndHJhbnNmb3JtJzogdHJhbnNmb3JtUnVsZSxcbiAgICAgICAgICAgICd3ZWJraXRUcmFuc2Zvcm0nOiB0cmFuc2Zvcm1SdWxlLFxuICAgICAgICAgICAgJ21zVHJhbnNmb3JtJzogdHJhbnNmb3JtUnVsZSxcbiAgICAgICAgICAgICd0cmFuc2Zvcm1PcmlnaW4nOiAnNTAlIDQwJScsXG4gICAgICAgICAgICAnd2Via2l0VHJhbnNmb3JtT3JpZ2luJzogJzUwJSA0MCUnLFxuICAgICAgICAgICAgJ21zVHJhbnNmb3JtT3JpZ2luJzogJzUwJSA0MCUnXG4gICAgICAgICAgfTtcbiAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gd29yZDtcbiAgICAgICAgICBmb3IgKHZhciBjc3NQcm9wIGluIHN0eWxlUnVsZXMpIHtcbiAgICAgICAgICAgIHNwYW4uc3R5bGVbY3NzUHJvcF0gPSBzdHlsZVJ1bGVzW2Nzc1Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qIEhlbHAgZnVuY3Rpb24gdG8gdXBkYXRlR3JpZCAqL1xuICAgIHZhciBmaWxsR3JpZEF0ID0gZnVuY3Rpb24gZmlsbEdyaWRBdCh4LCB5LCBkcmF3TWFzaywgZGltZW5zaW9uLCBpdGVtKSB7XG4gICAgICBpZiAoeCA+PSBuZ3ggfHwgeSA+PSBuZ3kgfHwgeCA8IDAgfHwgeSA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBncmlkW3hdW3ldID0gZmFsc2U7XG5cbiAgICAgIGlmIChkcmF3TWFzaykge1xuICAgICAgICB2YXIgY3R4ID0gZWxlbWVudHNbMF0uZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHggKiBnLCB5ICogZywgbWFza1JlY3RXaWR0aCwgbWFza1JlY3RXaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnRlcmFjdGl2ZSkge1xuICAgICAgICBpbmZvR3JpZFt4XVt5XSA9IHsgaXRlbTogaXRlbSwgZGltZW5zaW9uOiBkaW1lbnNpb24gfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogVXBkYXRlIHRoZSBmaWxsaW5nIGluZm9ybWF0aW9uIG9mIHRoZSBnaXZlbiBzcGFjZSB3aXRoIG9jY3VwaWVkIHBvaW50cy5cbiAgICAgICBEcmF3IHRoZSBtYXNrIG9uIHRoZSBjYW52YXMgaWYgbmVjZXNzYXJ5LiAqL1xuICAgIHZhciB1cGRhdGVHcmlkID0gZnVuY3Rpb24gdXBkYXRlR3JpZChneCwgZ3ksIGd3LCBnaCwgaW5mbywgaXRlbSkge1xuICAgICAgdmFyIG9jY3VwaWVkID0gaW5mby5vY2N1cGllZDtcbiAgICAgIHZhciBkcmF3TWFzayA9IHNldHRpbmdzLmRyYXdNYXNrO1xuICAgICAgdmFyIGN0eDtcbiAgICAgIGlmIChkcmF3TWFzaykge1xuICAgICAgICBjdHggPSBlbGVtZW50c1swXS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gc2V0dGluZ3MubWFza0NvbG9yO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGltZW5zaW9uO1xuICAgICAgaWYgKGludGVyYWN0aXZlKSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBpbmZvLmJvdW5kcztcbiAgICAgICAgZGltZW5zaW9uID0ge1xuICAgICAgICAgIHg6IChneCArIGJvdW5kc1szXSkgKiBnLFxuICAgICAgICAgIHk6IChneSArIGJvdW5kc1swXSkgKiBnLFxuICAgICAgICAgIHc6IChib3VuZHNbMV0gLSBib3VuZHNbM10gKyAxKSAqIGcsXG4gICAgICAgICAgaDogKGJvdW5kc1syXSAtIGJvdW5kc1swXSArIDEpICogZ1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaSA9IG9jY3VwaWVkLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgZmlsbEdyaWRBdChneCArIG9jY3VwaWVkW2ldWzBdLCBneSArIG9jY3VwaWVkW2ldWzFdLFxuICAgICAgICAgICAgICAgICAgIGRyYXdNYXNrLCBkaW1lbnNpb24sIGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZHJhd01hc2spIHtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogcHV0V29yZCgpIHByb2Nlc3NlcyBlYWNoIGl0ZW0gb24gdGhlIGxpc3QsXG4gICAgICAgY2FsY3VsYXRlIGl0J3Mgc2l6ZSBhbmQgZGV0ZXJtaW5lIGl0J3MgcG9zaXRpb24sIGFuZCBhY3R1YWxseVxuICAgICAgIHB1dCBpdCBvbiB0aGUgY2FudmFzLiAqL1xuICAgIHZhciBwdXRXb3JkID0gZnVuY3Rpb24gcHV0V29yZChpdGVtKSB7XG4gICAgICB2YXIgd29yZCwgd2VpZ2h0LCBhdHRyaWJ1dGVzO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgd29yZCA9IGl0ZW1bMF07XG4gICAgICAgIHdlaWdodCA9IGl0ZW1bMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3b3JkID0gaXRlbS53b3JkO1xuICAgICAgICB3ZWlnaHQgPSBpdGVtLndlaWdodDtcbiAgICAgICAgYXR0cmlidXRlcyA9IGl0ZW0uYXR0cmlidXRlcztcbiAgICAgIH1cbiAgICAgIHZhciByb3RhdGVEZWcgPSBnZXRSb3RhdGVEZWcoKTtcblxuICAgICAgLy8gZ2V0IGluZm8gbmVlZGVkIHRvIHB1dCB0aGUgdGV4dCBvbnRvIHRoZSBjYW52YXNcbiAgICAgIHZhciBpbmZvID0gZ2V0VGV4dEluZm8od29yZCwgd2VpZ2h0LCByb3RhdGVEZWcpO1xuXG4gICAgICAvLyBub3QgZ2V0dGluZyB0aGUgaW5mbyBtZWFucyB3ZSBzaG91bGRuJ3QgYmUgZHJhd2luZyB0aGlzIG9uZS5cbiAgICAgIGlmICghaW5mbykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChleGNlZWRUaW1lKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBTa2lwIHRoZSBsb29wIGlmIHdlIGhhdmUgYWxyZWFkeSBrbm93IHRoZSBib3VuZGluZyBib3ggb2ZcbiAgICAgIC8vIHdvcmQgaXMgbGFyZ2VyIHRoYW4gdGhlIGNhbnZhcy5cbiAgICAgIHZhciBib3VuZHMgPSBpbmZvLmJvdW5kcztcbiAgICAgIGlmICgoYm91bmRzWzFdIC0gYm91bmRzWzNdICsgMSkgPiBuZ3ggfHxcbiAgICAgICAgKGJvdW5kc1syXSAtIGJvdW5kc1swXSArIDEpID4gbmd5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiB0byBwdXQgdGhlIHRleHQgYnlcbiAgICAgIC8vIHN0YXJ0IGxvb2tpbmcgZm9yIHRoZSBuZWFyZXN0IHBvaW50c1xuICAgICAgdmFyIHIgPSBtYXhSYWRpdXMgKyAxO1xuXG4gICAgICB2YXIgdHJ5VG9QdXRXb3JkQXRQb2ludCA9IGZ1bmN0aW9uKGd4eSkge1xuICAgICAgICB2YXIgZ3ggPSBNYXRoLmZsb29yKGd4eVswXSAtIGluZm8uZ3cgLyAyKTtcbiAgICAgICAgdmFyIGd5ID0gTWF0aC5mbG9vcihneHlbMV0gLSBpbmZvLmdoIC8gMik7XG4gICAgICAgIHZhciBndyA9IGluZm8uZ3c7XG4gICAgICAgIHZhciBnaCA9IGluZm8uZ2g7XG5cbiAgICAgICAgLy8gSWYgd2UgY2Fubm90IGZpdCB0aGUgdGV4dCBhdCB0aGlzIHBvc2l0aW9uLCByZXR1cm4gZmFsc2VcbiAgICAgICAgLy8gYW5kIGdvIHRvIHRoZSBuZXh0IHBvc2l0aW9uLlxuICAgICAgICBpZiAoIWNhbkZpdFRleHQoZ3gsIGd5LCBndywgZ2gsIGluZm8ub2NjdXBpZWQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWN0dWFsbHkgcHV0IHRoZSB0ZXh0IG9uIHRoZSBjYW52YXNcbiAgICAgICAgZHJhd1RleHQoZ3gsIGd5LCBpbmZvLCB3b3JkLCB3ZWlnaHQsXG4gICAgICAgICAgICAgICAgIChtYXhSYWRpdXMgLSByKSwgZ3h5WzJdLCByb3RhdGVEZWcsIGF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIC8vIE1hcmsgdGhlIHNwYWNlcyBvbiB0aGUgZ3JpZCBhcyBmaWxsZWRcbiAgICAgICAgdXBkYXRlR3JpZChneCwgZ3ksIGd3LCBnaCwgaW5mbywgaXRlbSk7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRydWUgc28gc29tZSgpIHdpbGwgc3RvcCBhbmQgYWxzbyByZXR1cm4gdHJ1ZS5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG4gICAgICB3aGlsZSAoci0tKSB7XG4gICAgICAgIHZhciBwb2ludHMgPSBnZXRQb2ludHNBdFJhZGl1cyhtYXhSYWRpdXMgLSByKTtcblxuICAgICAgICBpZiAoc2V0dGluZ3Muc2h1ZmZsZSkge1xuICAgICAgICAgIHBvaW50cyA9IFtdLmNvbmNhdChwb2ludHMpO1xuICAgICAgICAgIHNodWZmbGVBcnJheShwb2ludHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJ5IHRvIGZpdCB0aGUgd29yZHMgYnkgbG9va2luZyBhdCBlYWNoIHBvaW50LlxuICAgICAgICAvLyBhcnJheS5zb21lKCkgd2lsbCBzdG9wIGFuZCByZXR1cm4gdHJ1ZVxuICAgICAgICAvLyB3aGVuIHB1dFdvcmRBdFBvaW50KCkgcmV0dXJucyB0cnVlLlxuICAgICAgICAvLyBJZiBhbGwgdGhlIHBvaW50cyByZXR1cm5zIGZhbHNlLCBhcnJheS5zb21lKCkgcmV0dXJucyBmYWxzZS5cbiAgICAgICAgdmFyIGRyYXduID0gcG9pbnRzLnNvbWUodHJ5VG9QdXRXb3JkQXRQb2ludCk7XG5cbiAgICAgICAgaWYgKGRyYXduKSB7XG4gICAgICAgICAgLy8gbGVhdmUgcHV0V29yZCgpIGFuZCByZXR1cm4gdHJ1ZVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB3ZSB0cmllZCBhbGwgZGlzdGFuY2VzIGJ1dCB0ZXh0IHdvbid0IGZpdCwgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qIFNlbmQgRE9NIGV2ZW50IHRvIGFsbCBlbGVtZW50cy4gV2lsbCBzdG9wIHNlbmRpbmcgZXZlbnQgYW5kIHJldHVyblxuICAgICAgIGlmIHRoZSBwcmV2aW91cyBvbmUgaXMgY2FuY2VsZWQgKGZvciBjYW5jZWxhYmxlIGV2ZW50cykuICovXG4gICAgdmFyIHNlbmRFdmVudCA9IGZ1bmN0aW9uIHNlbmRFdmVudCh0eXBlLCBjYW5jZWxhYmxlLCBkZXRhaWwpIHtcbiAgICAgIGlmIChjYW5jZWxhYmxlKSB7XG4gICAgICAgIHJldHVybiAhZWxlbWVudHMuc29tZShmdW5jdGlvbihlbCkge1xuICAgICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIHRydWUsIGNhbmNlbGFibGUsIGRldGFpbCB8fCB7fSk7XG4gICAgICAgICAgcmV0dXJuICFlbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIHRydWUsIGNhbmNlbGFibGUsIGRldGFpbCB8fCB7fSk7XG4gICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogU3RhcnQgZHJhd2luZyBvbiBhIGNhbnZhcyAqL1xuICAgIHZhciBzdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgLy8gRm9yIGRpbWVuc2lvbnMsIGNsZWFyQ2FudmFzIGV0Yy4sXG4gICAgICAvLyB3ZSBvbmx5IGNhcmUgYWJvdXQgdGhlIGZpcnN0IGVsZW1lbnQuXG4gICAgICB2YXIgY2FudmFzID0gZWxlbWVudHNbMF07XG5cbiAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICBuZ3ggPSBNYXRoLmZsb29yKGNhbnZhcy53aWR0aCAvIGcpO1xuICAgICAgICBuZ3kgPSBNYXRoLmZsb29yKGNhbnZhcy5oZWlnaHQgLyBnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBuZ3ggPSBNYXRoLmZsb29yKHJlY3Qud2lkdGggLyBnKTtcbiAgICAgICAgbmd5ID0gTWF0aC5mbG9vcihyZWN0LmhlaWdodCAvIGcpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZW5kaW5nIGEgd29yZGNsb3Vkc3RhcnQgZXZlbnQgd2hpY2ggY2F1c2UgdGhlIHByZXZpb3VzIGxvb3AgdG8gc3RvcC5cbiAgICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlIGV2ZW50IGlzIGNhbmNlbGVkLlxuICAgICAgaWYgKCFzZW5kRXZlbnQoJ3dvcmRjbG91ZHN0YXJ0JywgdHJ1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIGNlbnRlciBvZiB0aGUgd29yZCBjbG91ZFxuICAgICAgY2VudGVyID0gKHNldHRpbmdzLm9yaWdpbikgP1xuICAgICAgICBbc2V0dGluZ3Mub3JpZ2luWzBdL2csIHNldHRpbmdzLm9yaWdpblsxXS9nXSA6XG4gICAgICAgIFtuZ3ggLyAyLCBuZ3kgLyAyXTtcblxuICAgICAgLy8gTWF4aXVtIHJhZGl1cyB0byBsb29rIGZvciBzcGFjZVxuICAgICAgbWF4UmFkaXVzID0gTWF0aC5mbG9vcihNYXRoLnNxcnQobmd4ICogbmd4ICsgbmd5ICogbmd5KSk7XG5cbiAgICAgIC8qIENsZWFyIHRoZSBjYW52YXMgb25seSBpZiB0aGUgY2xlYXJDYW52YXMgaXMgc2V0LFxuICAgICAgICAgaWYgbm90LCB1cGRhdGUgdGhlIGdyaWQgdG8gdGhlIGN1cnJlbnQgY2FudmFzIHN0YXRlICovXG4gICAgICBncmlkID0gW107XG5cbiAgICAgIHZhciBneCwgZ3ksIGk7XG4gICAgICBpZiAoIWNhbnZhcy5nZXRDb250ZXh0IHx8IHNldHRpbmdzLmNsZWFyQ2FudmFzKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBpZiAoZWwuZ2V0Q29udGV4dCkge1xuICAgICAgICAgICAgdmFyIGN0eCA9IGVsLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gc2V0dGluZ3MuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBuZ3ggKiAoZyArIDEpLCBuZ3kgKiAoZyArIDEpKTtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBuZ3ggKiAoZyArIDEpLCBuZ3kgKiAoZyArIDEpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNldHRpbmdzLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qIGZpbGwgdGhlIGdyaWQgd2l0aCBlbXB0eSBzdGF0ZSAqL1xuICAgICAgICBneCA9IG5neDtcbiAgICAgICAgd2hpbGUgKGd4LS0pIHtcbiAgICAgICAgICBncmlkW2d4XSA9IFtdO1xuICAgICAgICAgIGd5ID0gbmd5O1xuICAgICAgICAgIHdoaWxlIChneS0tKSB7XG4gICAgICAgICAgICBncmlkW2d4XVtneV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogRGV0ZXJtaW5lIGJnUGl4ZWwgYnkgY3JlYXRpbmdcbiAgICAgICAgICAgYW5vdGhlciBjYW52YXMgYW5kIGZpbGwgdGhlIHNwZWNpZmllZCBiYWNrZ3JvdW5kIGNvbG9yLiAqL1xuICAgICAgICB2YXIgYmN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgYmN0eC5maWxsU3R5bGUgPSBzZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGJjdHguZmlsbFJlY3QoMCwgMCwgMSwgMSk7XG4gICAgICAgIHZhciBiZ1BpeGVsID0gYmN0eC5nZXRJbWFnZURhdGEoMCwgMCwgMSwgMSkuZGF0YTtcblxuICAgICAgICAvKiBSZWFkIGJhY2sgdGhlIHBpeGVscyBvZiB0aGUgY2FudmFzIHdlIGdvdCB0byB0ZWxsIHdoaWNoIHBhcnQgb2YgdGhlXG4gICAgICAgICAgIGNhbnZhcyBpcyBlbXB0eS5cbiAgICAgICAgICAgKG5vIGNsZWFyQ2FudmFzIG9ubHkgd29ya3Mgd2l0aCBhIGNhbnZhcywgbm90IGRpdnMpICovXG4gICAgICAgIHZhciBpbWFnZURhdGEgPVxuICAgICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YSgwLCAwLCBuZ3ggKiBnLCBuZ3kgKiBnKS5kYXRhO1xuXG4gICAgICAgIGd4ID0gbmd4O1xuICAgICAgICB2YXIgeCwgeTtcbiAgICAgICAgd2hpbGUgKGd4LS0pIHtcbiAgICAgICAgICBncmlkW2d4XSA9IFtdO1xuICAgICAgICAgIGd5ID0gbmd5O1xuICAgICAgICAgIHdoaWxlIChneS0tKSB7XG4gICAgICAgICAgICB5ID0gZztcbiAgICAgICAgICAgIHNpbmdsZUdyaWRMb29wOiB3aGlsZSAoeS0tKSB7XG4gICAgICAgICAgICAgIHggPSBnO1xuICAgICAgICAgICAgICB3aGlsZSAoeC0tKSB7XG4gICAgICAgICAgICAgICAgaSA9IDQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGltYWdlRGF0YVsoKGd5ICogZyArIHkpICogbmd4ICogZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ3ggKiBnICsgeCkpICogNCArIGldICE9PSBiZ1BpeGVsW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRbZ3hdW2d5XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhayBzaW5nbGVHcmlkTG9vcDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChncmlkW2d4XVtneV0gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGdyaWRbZ3hdW2d5XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VEYXRhID0gYmN0eCA9IGJnUGl4ZWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIGZpbGwgdGhlIGluZm9HcmlkIHdpdGggZW1wdHkgc3RhdGUgaWYgd2UgbmVlZCBpdFxuICAgICAgaWYgKHNldHRpbmdzLmhvdmVyIHx8IHNldHRpbmdzLmNsaWNrKSB7XG5cbiAgICAgICAgaW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIC8qIGZpbGwgdGhlIGdyaWQgd2l0aCBlbXB0eSBzdGF0ZSAqL1xuICAgICAgICBneCA9IG5neCArIDE7XG4gICAgICAgIHdoaWxlIChneC0tKSB7XG4gICAgICAgICAgaW5mb0dyaWRbZ3hdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZ3MuaG92ZXIpIHtcbiAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgd29yZGNsb3VkaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmNsaWNrKSB7XG4gICAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd29yZGNsb3VkY2xpY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3dvcmRjbG91ZHN0YXJ0JywgZnVuY3Rpb24gc3RvcEludGVyYWN0aW9uKCkge1xuICAgICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCd3b3JkY2xvdWRzdGFydCcsIHN0b3BJbnRlcmFjdGlvbik7XG5cbiAgICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgd29yZGNsb3VkaG92ZXIpO1xuICAgICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHdvcmRjbG91ZGNsaWNrKTtcbiAgICAgICAgICBob3ZlcmVkID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaSA9IDA7XG4gICAgICB2YXIgbG9vcGluZ0Z1bmN0aW9uLCBzdG9wcGluZ0Z1bmN0aW9uO1xuICAgICAgaWYgKHNldHRpbmdzLndhaXQgIT09IDApIHtcbiAgICAgICAgbG9vcGluZ0Z1bmN0aW9uID0gd2luZG93LnNldFRpbWVvdXQ7XG4gICAgICAgIHN0b3BwaW5nRnVuY3Rpb24gPSB3aW5kb3cuY2xlYXJUaW1lb3V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9vcGluZ0Z1bmN0aW9uID0gd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICAgICAgc3RvcHBpbmdGdW5jdGlvbiA9IHdpbmRvdy5jbGVhckltbWVkaWF0ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBhbm90aGVyV29yZENsb3VkU3RhcnQgPSBmdW5jdGlvbiBhbm90aGVyV29yZENsb3VkU3RhcnQoKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dvcmRjbG91ZHN0YXJ0JywgYW5vdGhlcldvcmRDbG91ZFN0YXJ0KTtcbiAgICAgICAgc3RvcHBpbmdGdW5jdGlvbih0aW1lcik7XG4gICAgICB9O1xuXG4gICAgICBhZGRFdmVudExpc3RlbmVyKCd3b3JkY2xvdWRzdGFydCcsIGFub3RoZXJXb3JkQ2xvdWRTdGFydCk7XG5cbiAgICAgIHZhciB0aW1lciA9IGxvb3BpbmdGdW5jdGlvbihmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICBpZiAoaSA+PSBzZXR0aW5ncy5saXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHN0b3BwaW5nRnVuY3Rpb24odGltZXIpO1xuICAgICAgICAgIHNlbmRFdmVudCgnd29yZGNsb3Vkc3RvcCcsIGZhbHNlKTtcbiAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCd3b3JkY2xvdWRzdGFydCcsIGFub3RoZXJXb3JkQ2xvdWRTdGFydCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXNjYXBlVGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBkcmF3biA9IHB1dFdvcmQoc2V0dGluZ3MubGlzdFtpXSk7XG4gICAgICAgIHZhciBjYW5jZWxlZCA9ICFzZW5kRXZlbnQoJ3dvcmRjbG91ZGRyYXduJywgdHJ1ZSwge1xuICAgICAgICAgIGl0ZW06IHNldHRpbmdzLmxpc3RbaV0sIGRyYXduOiBkcmF3biB9KTtcbiAgICAgICAgaWYgKGV4Y2VlZFRpbWUoKSB8fCBjYW5jZWxlZCkge1xuICAgICAgICAgIHN0b3BwaW5nRnVuY3Rpb24odGltZXIpO1xuICAgICAgICAgIHNldHRpbmdzLmFib3J0KCk7XG4gICAgICAgICAgc2VuZEV2ZW50KCd3b3JkY2xvdWRhYm9ydCcsIGZhbHNlKTtcbiAgICAgICAgICBzZW5kRXZlbnQoJ3dvcmRjbG91ZHN0b3AnLCBmYWxzZSk7XG4gICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignd29yZGNsb3Vkc3RhcnQnLCBhbm90aGVyV29yZENsb3VkU3RhcnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgICAgIHRpbWVyID0gbG9vcGluZ0Z1bmN0aW9uKGxvb3AsIHNldHRpbmdzLndhaXQpO1xuICAgICAgfSwgc2V0dGluZ3Mud2FpdCk7XG4gICAgfTtcblxuICAgIC8vIEFsbCBzZXQsIHN0YXJ0IHRoZSBkcmF3aW5nXG4gICAgc3RhcnQoKTtcbiAgfTtcblxuICBXb3JkQ2xvdWQuaXNTdXBwb3J0ZWQgPSBpc1N1cHBvcnRlZDtcbiAgV29yZENsb3VkLm1pbml1bUZvbnRTaXplID0gbWluaXVtRm9udFNpemU7XG5cbiAgLy8gRXhwb3NlIHRoZSBsaWJyYXJ5IGFzIGFuIEFNRCBtb2R1bGVcbiAgaWYgKHR5cGVvZiBnbG9iYWwuZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGdsb2JhbC5kZWZpbmUuYW1kKSB7XG4gICAgZ2xvYmFsLmRlZmluZSgnd29yZGNsb3VkJywgW10sIGZ1bmN0aW9uKCkgeyByZXR1cm4gV29yZENsb3VkOyB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsLm1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLm1vZHVsZS5leHBvcnRzKSB7XG4gICAgZ2xvYmFsLm1vZHVsZS5leHBvcnRzID0gV29yZENsb3VkO1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5Xb3JkQ2xvdWQgPSBXb3JkQ2xvdWQ7XG4gIH1cblxufSkod2luZG93KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIGxvZGFzaCA0LjAuMSAoQ3VzdG9tIEJ1aWxkKSBsb2Rhc2guY29tL2xpY2Vuc2UgfCBVbmRlcnNjb3JlLmpzIDEuOC4zIHVuZGVyc2NvcmVqcy5vcmcvTElDRU5TRVxuICogQnVpbGQ6IGBsb2Rhc2ggLW8gLi9kaXN0L2xvZGFzaC5qc2BcbiAqL1xuOyhmdW5jdGlvbigpe2Z1bmN0aW9uIG4obix0KXtyZXR1cm4gbi5zZXQodFswXSx0WzFdKSxufWZ1bmN0aW9uIHQobix0KXtyZXR1cm4gbi5hZGQodCksbn1mdW5jdGlvbiByKG4sdCxyKXtzd2l0Y2gocj9yLmxlbmd0aDowKXtjYXNlIDA6cmV0dXJuIG4uY2FsbCh0KTtjYXNlIDE6cmV0dXJuIG4uY2FsbCh0LHJbMF0pO2Nhc2UgMjpyZXR1cm4gbi5jYWxsKHQsclswXSxyWzFdKTtjYXNlIDM6cmV0dXJuIG4uY2FsbCh0LHJbMF0sclsxXSxyWzJdKX1yZXR1cm4gbi5hcHBseSh0LHIpfWZ1bmN0aW9uIGUobix0KXtmb3IodmFyIHI9LTEsZT1uLmxlbmd0aDsrK3I8ZSYmZmFsc2UhPT10KG5bcl0scixuKTspO3JldHVybiBufWZ1bmN0aW9uIHUobix0KXtmb3IodmFyIHI9LTEsZT1uLmxlbmd0aDsrK3I8ZTspaWYoIXQobltyXSxyLG4pKXJldHVybiBmYWxzZTtyZXR1cm4gdHJ1ZX1mdW5jdGlvbiBvKG4sdCl7Zm9yKHZhciByPS0xLGU9bi5sZW5ndGgsdT0tMSxvPVtdOysrcjxlOyl7dmFyIGk9bltyXTt0KGkscixuKSYmKG9bKyt1XT1pKTtcbn1yZXR1cm4gb31mdW5jdGlvbiBpKG4sdCl7cmV0dXJuISFuLmxlbmd0aCYmLTE8dihuLHQsMCl9ZnVuY3Rpb24gZihuLHQscil7Zm9yKHZhciBlPS0xLHU9bi5sZW5ndGg7KytlPHU7KWlmKHIodCxuW2VdKSlyZXR1cm4gdHJ1ZTtyZXR1cm4gZmFsc2V9ZnVuY3Rpb24gYyhuLHQpe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoLHU9QXJyYXkoZSk7KytyPGU7KXVbcl09dChuW3JdLHIsbik7cmV0dXJuIHV9ZnVuY3Rpb24gYShuLHQpe2Zvcih2YXIgcj0tMSxlPXQubGVuZ3RoLHU9bi5sZW5ndGg7KytyPGU7KW5bdStyXT10W3JdO3JldHVybiBufWZ1bmN0aW9uIGwobix0LHIsZSl7dmFyIHU9LTEsbz1uLmxlbmd0aDtmb3IoZSYmbyYmKHI9blsrK3VdKTsrK3U8bzspcj10KHIsblt1XSx1LG4pO3JldHVybiByfWZ1bmN0aW9uIHMobix0LHIsZSl7dmFyIHU9bi5sZW5ndGg7Zm9yKGUmJnUmJihyPW5bLS11XSk7dS0tOylyPXQocixuW3VdLHUsbik7cmV0dXJuIHJ9ZnVuY3Rpb24gaChuLHQpe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoOysrcjxlOylpZih0KG5bcl0scixuKSlyZXR1cm4gdHJ1ZTtcbnJldHVybiBmYWxzZX1mdW5jdGlvbiBwKG4sdCxyKXtmb3IodmFyIGU9LTEsdT1uLmxlbmd0aDsrK2U8dTspe3ZhciBvPW5bZV0saT10KG8pO2lmKG51bGwhPWkmJihmPT09Wj9pPT09aTpyKGksZikpKXZhciBmPWksYz1vfXJldHVybiBjfWZ1bmN0aW9uIF8obix0LHIsZSl7dmFyIHU7cmV0dXJuIHIobixmdW5jdGlvbihuLHIsbyl7cmV0dXJuIHQobixyLG8pPyh1PWU/cjpuLGZhbHNlKTp2b2lkIDB9KSx1fWZ1bmN0aW9uIGcobix0LHIpe2Zvcih2YXIgZT1uLmxlbmd0aCx1PXI/ZTotMTtyP3UtLTorK3U8ZTspaWYodChuW3VdLHUsbikpcmV0dXJuIHU7cmV0dXJuLTF9ZnVuY3Rpb24gdihuLHQscil7aWYodCE9PXQpcmV0dXJuIFcobixyKTstLXI7Zm9yKHZhciBlPW4ubGVuZ3RoOysrcjxlOylpZihuW3JdPT09dClyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiBkKG4sdCxyLGUsdSl7cmV0dXJuIHUobixmdW5jdGlvbihuLHUsbyl7cj1lPyhlPWZhbHNlLG4pOnQocixuLHUsbyl9KSxyfWZ1bmN0aW9uIHkobix0KXtcbnZhciByPW4ubGVuZ3RoO2ZvcihuLnNvcnQodCk7ci0tOyluW3JdPW5bcl0uYztyZXR1cm4gbn1mdW5jdGlvbiBiKG4sdCl7Zm9yKHZhciByLGU9LTEsdT1uLmxlbmd0aDsrK2U8dTspe3ZhciBvPXQobltlXSk7byE9PVomJihyPXI9PT1aP286citvKX1yZXR1cm4gcn1mdW5jdGlvbiB4KG4sdCl7Zm9yKHZhciByPS0xLGU9QXJyYXkobik7KytyPG47KWVbcl09dChyKTtyZXR1cm4gZX1mdW5jdGlvbiBtKG4sdCl7cmV0dXJuIGModCxmdW5jdGlvbih0KXtyZXR1cm5bdCxuW3RdXX0pfWZ1bmN0aW9uIGoobil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBuKHQpfX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuIGModCxmdW5jdGlvbih0KXtyZXR1cm4gblt0XX0pfWZ1bmN0aW9uIEEobix0KXtmb3IodmFyIHI9LTEsZT1uLmxlbmd0aDsrK3I8ZSYmLTE8dih0LG5bcl0sMCk7KTtyZXR1cm4gcn1mdW5jdGlvbiBPKG4sdCl7Zm9yKHZhciByPW4ubGVuZ3RoO3ItLSYmLTE8dih0LG5bcl0sMCk7KTtcbnJldHVybiByfWZ1bmN0aW9uIEUobil7cmV0dXJuIG4mJm4uT2JqZWN0PT09T2JqZWN0P246bnVsbH1mdW5jdGlvbiBrKG4sdCl7aWYobiE9PXQpe3ZhciByPW51bGw9PT1uLGU9bj09PVosdT1uPT09bixvPW51bGw9PT10LGk9dD09PVosZj10PT09dDtpZihuPnQmJiFvfHwhdXx8ciYmIWkmJmZ8fGUmJmYpcmV0dXJuIDE7aWYodD5uJiYhcnx8IWZ8fG8mJiFlJiZ1fHxpJiZ1KXJldHVybi0xfXJldHVybiAwfWZ1bmN0aW9uIEkobil7cmV0dXJuIFVuW25dfWZ1bmN0aW9uIFIobil7cmV0dXJuIEJuW25dfWZ1bmN0aW9uIFMobil7cmV0dXJuXCJcXFxcXCIrJG5bbl19ZnVuY3Rpb24gVyhuLHQscil7dmFyIGU9bi5sZW5ndGg7Zm9yKHQrPXI/MDotMTtyP3QtLTorK3Q8ZTspe3ZhciB1PW5bdF07aWYodSE9PXUpcmV0dXJuIHR9cmV0dXJuLTF9ZnVuY3Rpb24gQyhuKXt2YXIgdD1mYWxzZTtpZihudWxsIT1uJiZ0eXBlb2Ygbi50b1N0cmluZyE9XCJmdW5jdGlvblwiKXRyeXt0PSEhKG4rXCJcIil9Y2F0Y2gocil7fVxucmV0dXJuIHR9ZnVuY3Rpb24gVShuLHQpe3JldHVybiBuPXR5cGVvZiBuPT1cIm51bWJlclwifHxkbi50ZXN0KG4pPytuOi0xLG4+LTEmJjA9PW4lMSYmKG51bGw9PXQ/OTAwNzE5OTI1NDc0MDk5MTp0KT5ufWZ1bmN0aW9uIEIobil7Zm9yKHZhciB0LHI9W107ISh0PW4ubmV4dCgpKS5kb25lOylyLnB1c2godC52YWx1ZSk7cmV0dXJuIHJ9ZnVuY3Rpb24geihuKXt2YXIgdD0tMSxyPUFycmF5KG4uc2l6ZSk7cmV0dXJuIG4uZm9yRWFjaChmdW5jdGlvbihuLGUpe3JbKyt0XT1bZSxuXX0pLHJ9ZnVuY3Rpb24gTChuLHQpe2Zvcih2YXIgcj0tMSxlPW4ubGVuZ3RoLHU9LTEsbz1bXTsrK3I8ZTspbltyXT09PXQmJihuW3JdPVwiX19sb2Rhc2hfcGxhY2Vob2xkZXJfX1wiLG9bKyt1XT1yKTtyZXR1cm4gb31mdW5jdGlvbiAkKG4pe3ZhciB0PS0xLHI9QXJyYXkobi5zaXplKTtyZXR1cm4gbi5mb3JFYWNoKGZ1bmN0aW9uKG4pe3JbKyt0XT1ufSkscn1mdW5jdGlvbiBGKG4pe2lmKCFufHwhRW4udGVzdChuKSlyZXR1cm4gbi5sZW5ndGg7XG5mb3IodmFyIHQ9T24ubGFzdEluZGV4PTA7T24udGVzdChuKTspdCsrO3JldHVybiB0fWZ1bmN0aW9uIE0obil7cmV0dXJuIHpuW25dfWZ1bmN0aW9uIE4oRSl7ZnVuY3Rpb24gZG4obil7aWYoX2UobikmJiFXbyhuKSYmIShuIGluc3RhbmNlb2Ygd24pKXtpZihuIGluc3RhbmNlb2Ygam4pcmV0dXJuIG47aWYodHUuY2FsbChuLFwiX193cmFwcGVkX19cIikpcmV0dXJuIHpyKG4pfXJldHVybiBuZXcgam4obil9ZnVuY3Rpb24gbW4oKXt9ZnVuY3Rpb24gam4obix0KXt0aGlzLl9fd3JhcHBlZF9fPW4sdGhpcy5fX2FjdGlvbnNfXz1bXSx0aGlzLl9fY2hhaW5fXz0hIXQsdGhpcy5fX2luZGV4X189MCx0aGlzLl9fdmFsdWVzX189Wn1mdW5jdGlvbiB3bihuKXt0aGlzLl9fd3JhcHBlZF9fPW4sdGhpcy5fX2FjdGlvbnNfXz1bXSx0aGlzLl9fZGlyX189MSx0aGlzLl9fZmlsdGVyZWRfXz1mYWxzZSx0aGlzLl9faXRlcmF0ZWVzX189W10sdGhpcy5fX3Rha2VDb3VudF9fPTQyOTQ5NjcyOTUsdGhpcy5fX3ZpZXdzX189W107XG59ZnVuY3Rpb24gVW4oKXt9ZnVuY3Rpb24gQm4obil7dmFyIHQ9LTEscj1uP24ubGVuZ3RoOjA7Zm9yKHRoaXMuY2xlYXIoKTsrK3Q8cjspe3ZhciBlPW5bdF07dGhpcy5zZXQoZVswXSxlWzFdKX19ZnVuY3Rpb24gem4obil7dmFyIHQ9LTEscj1uP24ubGVuZ3RoOjA7Zm9yKHRoaXMuX19kYXRhX189bmV3IEJuOysrdDxyOyl0aGlzLnB1c2goblt0XSl9ZnVuY3Rpb24gTG4obix0KXt2YXIgcj1uLl9fZGF0YV9fO3JldHVybiBrcih0KT8ocj1yLl9fZGF0YV9fLFwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiPT09KHR5cGVvZiB0PT1cInN0cmluZ1wiP3Iuc3RyaW5nOnIuaGFzaClbdF0pOnIuaGFzKHQpfWZ1bmN0aW9uICRuKG4pe3ZhciB0PS0xLHI9bj9uLmxlbmd0aDowO2Zvcih0aGlzLmNsZWFyKCk7Kyt0PHI7KXt2YXIgZT1uW3RdO3RoaXMuc2V0KGVbMF0sZVsxXSl9fWZ1bmN0aW9uIE5uKG4sdCl7dmFyIHI9RG4obix0KTtyZXR1cm4gMD5yP2ZhbHNlOihyPT1uLmxlbmd0aC0xP24ucG9wKCk6ZHUuY2FsbChuLHIsMSksXG4hMCl9ZnVuY3Rpb24gWm4obix0KXt2YXIgcj1EbihuLHQpO3JldHVybiAwPnI/WjpuW3JdWzFdfWZ1bmN0aW9uIERuKG4sdCl7Zm9yKHZhciByPW4ubGVuZ3RoO3ItLTspaWYodWUobltyXVswXSx0KSlyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiBxbihuLHQscil7dmFyIGU9RG4obix0KTswPmU/bi5wdXNoKFt0LHJdKTpuW2VdWzFdPXJ9ZnVuY3Rpb24gUG4obix0LHIsZSl7cmV0dXJuIG49PT1afHx1ZShuLFhlW3JdKSYmIXR1LmNhbGwoZSxyKT90Om59ZnVuY3Rpb24gVG4obix0LHIpeyhyIT09WiYmIXVlKG5bdF0scil8fHR5cGVvZiB0PT1cIm51bWJlclwiJiZyPT09WiYmISh0IGluIG4pKSYmKG5bdF09cil9ZnVuY3Rpb24gVm4obix0LHIpe3ZhciBlPW5bdF07KCF1ZShlLHIpfHx1ZShlLFhlW3RdKSYmIXR1LmNhbGwobix0KXx8cj09PVomJiEodCBpbiBuKSkmJihuW3RdPXIpfWZ1bmN0aW9uIEpuKG4sdCl7cmV0dXJuIG4mJlR0KHQsQ2UodCksbil9ZnVuY3Rpb24gWW4obix0KXtcbmZvcih2YXIgcj0tMSxlPW51bGw9PW4sdT10Lmxlbmd0aCxvPUFycmF5KHUpOysrcjx1OylvW3JdPWU/WjpSZShuLHRbcl0pO3JldHVybiBvfWZ1bmN0aW9uIEhuKG4sdCxyKXtyZXR1cm4gbj09PW4mJihyIT09WiYmKG49bj5yP3I6biksdCE9PVomJihuPXQ+bj90Om4pKSxufWZ1bmN0aW9uIFFuKG4sdCxyLHUsbyxpKXt2YXIgZjtpZihyJiYoZj1vP3Iobix1LG8saSk6cihuKSksZiE9PVopcmV0dXJuIGY7aWYoIXBlKG4pKXJldHVybiBuO2lmKHU9V28obikpe2lmKGY9bXIobiksIXQpcmV0dXJuIFB0KG4sZil9ZWxzZXt2YXIgYz1icihuKSxhPVwiW29iamVjdCBGdW5jdGlvbl1cIj09Y3x8XCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiPT1jO2lmKFwiW29iamVjdCBPYmplY3RdXCIhPWMmJlwiW29iamVjdCBBcmd1bWVudHNdXCIhPWMmJighYXx8bykpcmV0dXJuIENuW2NdP3dyKG4sYyx0KTpvP246e307aWYoQyhuKSlyZXR1cm4gbz9uOnt9O2lmKGY9anIoYT97fTpuKSwhdClyZXR1cm4gR3QobixKbihmLG4pKTtcbn1yZXR1cm4gaXx8KGk9bmV3ICRuKSwobz1pLmdldChuKSk/bzooaS5zZXQobixmKSwodT9lOml0KShuLGZ1bmN0aW9uKGUsdSl7Vm4oZix1LFFuKGUsdCxyLHUsbixpKSl9KSx1P2Y6R3QobixmKSl9ZnVuY3Rpb24gWG4obil7dmFyIHQ9Q2Uobikscj10Lmxlbmd0aDtyZXR1cm4gZnVuY3Rpb24oZSl7aWYobnVsbD09ZSlyZXR1cm4hcjtmb3IodmFyIHU9cjt1LS07KXt2YXIgbz10W3VdLGk9bltvXSxmPWVbb107aWYoZj09PVomJiEobyBpbiBPYmplY3QoZSkpfHwhaShmKSlyZXR1cm4gZmFsc2V9cmV0dXJuIHRydWV9fWZ1bmN0aW9uIG50KG4sdCxyKXtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBIZShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIHZ1KGZ1bmN0aW9uKCl7bi5hcHBseShaLHIpfSx0KX1mdW5jdGlvbiB0dChuLHQscixlKXt2YXIgdT0tMSxvPWksYT10cnVlLGw9bi5sZW5ndGgscz1bXSxoPXQubGVuZ3RoO2lmKCFsKXJldHVybiBzO3ImJih0PWModCxqKHIpKSksXG5lPyhvPWYsYT1mYWxzZSk6dC5sZW5ndGg+PTIwMCYmKG89TG4sYT1mYWxzZSx0PW5ldyB6bih0KSk7bjpmb3IoOysrdTxsOyl7dmFyIHA9blt1XSxfPXI/cihwKTpwO2lmKGEmJl89PT1fKXtmb3IodmFyIGc9aDtnLS07KWlmKHRbZ109PT1fKWNvbnRpbnVlIG47cy5wdXNoKHApfWVsc2Ugbyh0LF8sZSl8fHMucHVzaChwKX1yZXR1cm4gc31mdW5jdGlvbiBydChuLHQpe3ZhciByPXRydWU7cmV0dXJuIE51KG4sZnVuY3Rpb24obixlLHUpe3JldHVybiByPSEhdChuLGUsdSl9KSxyfWZ1bmN0aW9uIGV0KG4sdCl7dmFyIHI9W107cmV0dXJuIE51KG4sZnVuY3Rpb24obixlLHUpe3QobixlLHUpJiZyLnB1c2gobil9KSxyfWZ1bmN0aW9uIHV0KG4sdCxyLGUpe2V8fChlPVtdKTtmb3IodmFyIHU9LTEsbz1uLmxlbmd0aDsrK3U8bzspe3ZhciBpPW5bdV07Y2UoaSkmJihyfHxXbyhpKXx8aWUoaSkpP3Q/dXQoaSx0LHIsZSk6YShlLGkpOnJ8fChlW2UubGVuZ3RoXT1pKX1yZXR1cm4gZX1mdW5jdGlvbiBvdChuLHQpe1xubnVsbD09bnx8RHUobix0LFVlKX1mdW5jdGlvbiBpdChuLHQpe3JldHVybiBuJiZEdShuLHQsQ2UpfWZ1bmN0aW9uIGZ0KG4sdCl7cmV0dXJuIG4mJnF1KG4sdCxDZSl9ZnVuY3Rpb24gY3Qobix0KXtyZXR1cm4gbyh0LGZ1bmN0aW9uKHQpe3JldHVybiBsZShuW3RdKX0pfWZ1bmN0aW9uIGF0KG4sdCl7dD1Fcih0LG4pP1t0K1wiXCJdOkx0KHQpO2Zvcih2YXIgcj0wLGU9dC5sZW5ndGg7bnVsbCE9biYmZT5yOyluPW5bdFtyKytdXTtyZXR1cm4gciYmcj09ZT9uOlp9ZnVuY3Rpb24gbHQobix0KXtyZXR1cm4gdHUuY2FsbChuLHQpfHx0eXBlb2Ygbj09XCJvYmplY3RcIiYmdCBpbiBuJiZudWxsPT09aHUobil9ZnVuY3Rpb24gc3Qobix0KXtyZXR1cm4gdCBpbiBPYmplY3Qobil9ZnVuY3Rpb24gaHQobix0LHIpe2Zvcih2YXIgZT1yP2Y6aSx1PW4ubGVuZ3RoLG89dSxhPUFycmF5KHUpLGw9W107by0tOyl7dmFyIHM9bltvXTtvJiZ0JiYocz1jKHMsaih0KSkpLGFbb109cnx8IXQmJjEyMD5zLmxlbmd0aD9aOm5ldyB6bihvJiZzKTtcbn12YXIgcz1uWzBdLGg9LTEscD1zLmxlbmd0aCxfPWFbMF07bjpmb3IoOysraDxwOyl7dmFyIGc9c1toXSx2PXQ/dChnKTpnO2lmKF8/IUxuKF8sdik6IWUobCx2LHIpKXtmb3Iobz11Oy0tbzspe3ZhciBkPWFbb107aWYoZD8hTG4oZCx2KTohZShuW29dLHYscikpY29udGludWUgbn1fJiZfLnB1c2godiksbC5wdXNoKGcpfX1yZXR1cm4gbH1mdW5jdGlvbiBwdChuLHQsZSl7cmV0dXJuIEVyKHQsbil8fCh0PUx0KHQpLG49V3Iobix0KSx0PU1yKHQpKSx0PW51bGw9PW4/bjpuW3RdLG51bGw9PXQ/WjpyKHQsbixlKX1mdW5jdGlvbiBfdChuLHQscixlLHUpe2lmKG49PT10KW49dHJ1ZTtlbHNlIGlmKG51bGw9PW58fG51bGw9PXR8fCFwZShuKSYmIV9lKHQpKW49biE9PW4mJnQhPT10O2Vsc2Ugbjp7dmFyIG89V28obiksaT1Xbyh0KSxmPVwiW29iamVjdCBBcnJheV1cIixjPVwiW29iamVjdCBBcnJheV1cIjtvfHwoZj1icihuKSxcIltvYmplY3QgQXJndW1lbnRzXVwiPT1mP2Y9XCJbb2JqZWN0IE9iamVjdF1cIjpcIltvYmplY3QgT2JqZWN0XVwiIT1mJiYobz1tZShuKSkpLFxuaXx8KGM9YnIodCksXCJbb2JqZWN0IEFyZ3VtZW50c11cIj09Yz9jPVwiW29iamVjdCBPYmplY3RdXCI6XCJbb2JqZWN0IE9iamVjdF1cIiE9YyYmbWUodCkpO3ZhciBhPVwiW29iamVjdCBPYmplY3RdXCI9PWYmJiFDKG4pLGk9XCJbb2JqZWN0IE9iamVjdF1cIj09YyYmIUModCksYz1mPT1jO2lmKCFjfHxvfHxhKXtpZighKDImZSkmJihmPWEmJnR1LmNhbGwobixcIl9fd3JhcHBlZF9fXCIpLGk9aSYmdHUuY2FsbCh0LFwiX193cmFwcGVkX19cIiksZnx8aSkpe249X3QoZj9uLnZhbHVlKCk6bixpP3QudmFsdWUoKTp0LHIsZSx1KTticmVhayBufWM/KHV8fCh1PW5ldyAkbiksbj0obz9ocjpfcikobix0LF90LHIsZSx1KSk6bj1mYWxzZX1lbHNlIG49cHIobix0LGYsX3QscixlKX1yZXR1cm4gbn1mdW5jdGlvbiBndChuLHQscixlKXt2YXIgdT1yLmxlbmd0aCxvPXUsaT0hZTtpZihudWxsPT1uKXJldHVybiFvO2ZvcihuPU9iamVjdChuKTt1LS07KXt2YXIgZj1yW3VdO2lmKGkmJmZbMl0/ZlsxXSE9PW5bZlswXV06IShmWzBdaW4gbikpcmV0dXJuIGZhbHNlO1xufWZvcig7Kyt1PG87KXt2YXIgZj1yW3VdLGM9ZlswXSxhPW5bY10sbD1mWzFdO2lmKGkmJmZbMl0pe2lmKGE9PT1aJiYhKGMgaW4gbikpcmV0dXJuIGZhbHNlfWVsc2UgaWYoZj1uZXcgJG4sYz1lP2UoYSxsLGMsbix0LGYpOlosYz09PVo/IV90KGwsYSxlLDMsZik6IWMpcmV0dXJuIGZhbHNlfXJldHVybiB0cnVlfWZ1bmN0aW9uIHZ0KG4pe3ZhciB0PXR5cGVvZiBuO3JldHVyblwiZnVuY3Rpb25cIj09dD9uOm51bGw9PW4/TmU6XCJvYmplY3RcIj09dD9XbyhuKT94dChuWzBdLG5bMV0pOmJ0KG4pOlRlKG4pfWZ1bmN0aW9uIGR0KG4pe249bnVsbD09bj9uOk9iamVjdChuKTt2YXIgdCxyPVtdO2Zvcih0IGluIG4pci5wdXNoKHQpO3JldHVybiByfWZ1bmN0aW9uIHl0KG4sdCl7dmFyIHI9LTEsZT1mZShuKT9BcnJheShuLmxlbmd0aCk6W107cmV0dXJuIE51KG4sZnVuY3Rpb24obix1LG8pe2VbKytyXT10KG4sdSxvKX0pLGV9ZnVuY3Rpb24gYnQobil7dmFyIHQ9ZHIobik7aWYoMT09dC5sZW5ndGgmJnRbMF1bMl0pe1xudmFyIHI9dFswXVswXSxlPXRbMF1bMV07cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT1uP2ZhbHNlOm5bcl09PT1lJiYoZSE9PVp8fHIgaW4gT2JqZWN0KG4pKX19cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiByPT09bnx8Z3QocixuLHQpfX1mdW5jdGlvbiB4dChuLHQpe3JldHVybiBmdW5jdGlvbihyKXt2YXIgZT1SZShyLG4pO3JldHVybiBlPT09WiYmZT09PXQ/V2UocixuKTpfdCh0LGUsWiwzKX19ZnVuY3Rpb24gbXQobix0LHIsdSxvKXtpZihuIT09dCl7dmFyIGk9V28odCl8fG1lKHQpP1o6VWUodCk7ZShpfHx0LGZ1bmN0aW9uKGUsZil7aWYoaSYmKGY9ZSxlPXRbZl0pLHBlKGUpKXtvfHwobz1uZXcgJG4pO3ZhciBjPWYsYT1vLGw9bltjXSxzPXRbY10saD1hLmdldChzKXx8YS5nZXQobCk7aWYoaClUbihuLGMsaCk7ZWxzZXt2YXIgaD11P3UobCxzLGMrXCJcIixuLHQsYSk6WixwPWg9PT1aO3AmJihoPXMsV28ocyl8fG1lKHMpP2g9V28obCk/cj9QdChsKTpsOmNlKGwpP1B0KGwpOlFuKHMpOmRlKHMpfHxpZShzKT9oPWllKGwpP2tlKGwpOiFwZShsKXx8ciYmbGUobCk/UW4ocyk6cj9RbihsKTpsOnA9ZmFsc2UpLFxuYS5zZXQocyxoKSxwJiZtdChoLHMscix1LGEpLFRuKG4sYyxoKX19ZWxzZSBjPXU/dShuW2ZdLGUsZitcIlwiLG4sdCxvKTpaLGM9PT1aJiYoYz1lKSxUbihuLGYsYyl9KX19ZnVuY3Rpb24ganQobix0LHIpe3ZhciBlPS0xLHU9dnIoKTtyZXR1cm4gdD1jKHQubGVuZ3RoP3Q6QXJyYXkoMSksZnVuY3Rpb24obil7cmV0dXJuIHUobil9KSxuPXl0KG4sZnVuY3Rpb24obil7cmV0dXJue2E6Yyh0LGZ1bmN0aW9uKHQpe3JldHVybiB0KG4pfSksYjorK2UsYzpufX0pLHkobixmdW5jdGlvbihuLHQpe3ZhciBlO246e2U9LTE7Zm9yKHZhciB1PW4uYSxvPXQuYSxpPXUubGVuZ3RoLGY9ci5sZW5ndGg7KytlPGk7KXt2YXIgYz1rKHVbZV0sb1tlXSk7aWYoYyl7ZT1mPmU/YyooXCJkZXNjXCI9PXJbZV0/LTE6MSk6YzticmVhayBufX1lPW4uYi10LmJ9cmV0dXJuIGV9KX1mdW5jdGlvbiB3dChuLHQpe3JldHVybiBuPU9iamVjdChuKSxsKHQsZnVuY3Rpb24odCxyKXtyZXR1cm4gciBpbiBuJiYodFtyXT1uW3JdKSxcbnR9LHt9KX1mdW5jdGlvbiBBdChuLHQpe3ZhciByPXt9O3JldHVybiBvdChuLGZ1bmN0aW9uKG4sZSl7dChuLGUpJiYocltlXT1uKX0pLHJ9ZnVuY3Rpb24gT3Qobil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT10P1o6dFtuXX19ZnVuY3Rpb24gRXQobil7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBhdCh0LG4pfX1mdW5jdGlvbiBrdChuLHQscil7dmFyIGU9LTEsdT10Lmxlbmd0aCxvPW47Zm9yKHImJihvPWMobixmdW5jdGlvbihuKXtyZXR1cm4gcihuKX0pKTsrK2U8dTspZm9yKHZhciBpPTAsZj10W2VdLGY9cj9yKGYpOmY7LTE8KGk9dihvLGYsaSkpOylvIT09biYmZHUuY2FsbChvLGksMSksZHUuY2FsbChuLGksMSk7cmV0dXJuIG59ZnVuY3Rpb24gSXQobix0KXtmb3IodmFyIHI9bj90Lmxlbmd0aDowLGU9ci0xO3ItLTspe3ZhciB1PXRbcl07aWYoZT09cnx8dSE9byl7dmFyIG89dTtpZihVKHUpKWR1LmNhbGwobix1LDEpO2Vsc2UgaWYoRXIodSxuKSlkZWxldGUgblt1XTtlbHNle1xudmFyIHU9THQodSksaT1XcihuLHUpO251bGwhPWkmJmRlbGV0ZSBpW01yKHUpXX19fX1mdW5jdGlvbiBSdChuLHQpe3JldHVybiBuK2J1KEV1KCkqKHQtbisxKSl9ZnVuY3Rpb24gU3Qobix0LHIsZSl7dD1Fcih0LG4pP1t0K1wiXCJdOkx0KHQpO2Zvcih2YXIgdT0tMSxvPXQubGVuZ3RoLGk9by0xLGY9bjtudWxsIT1mJiYrK3U8bzspe3ZhciBjPXRbdV07aWYocGUoZikpe3ZhciBhPXI7aWYodSE9aSl7dmFyIGw9ZltjXSxhPWU/ZShsLGMsZik6WjthPT09WiYmKGE9bnVsbD09bD9VKHRbdSsxXSk/W106e306bCl9Vm4oZixjLGEpfWY9ZltjXX1yZXR1cm4gbn1mdW5jdGlvbiBXdChuLHQscil7dmFyIGU9LTEsdT1uLmxlbmd0aDtmb3IoMD50JiYodD0tdD51PzA6dSt0KSxyPXI+dT91OnIsMD5yJiYocis9dSksdT10PnI/MDpyLXQ+Pj4wLHQ+Pj49MCxyPUFycmF5KHUpOysrZTx1OylyW2VdPW5bZSt0XTtyZXR1cm4gcn1mdW5jdGlvbiBDdChuLHQpe3ZhciByO3JldHVybiBOdShuLGZ1bmN0aW9uKG4sZSx1KXtcbnJldHVybiByPXQobixlLHUpLCFyfSksISFyfWZ1bmN0aW9uIFV0KG4sdCxyKXt2YXIgZT0wLHU9bj9uLmxlbmd0aDplO2lmKHR5cGVvZiB0PT1cIm51bWJlclwiJiZ0PT09dCYmMjE0NzQ4MzY0Nz49dSl7Zm9yKDt1PmU7KXt2YXIgbz1lK3U+Pj4xLGk9bltvXTsocj90Pj1pOnQ+aSkmJm51bGwhPT1pP2U9bysxOnU9b31yZXR1cm4gdX1yZXR1cm4gQnQobix0LE5lLHIpfWZ1bmN0aW9uIEJ0KG4sdCxyLGUpe3Q9cih0KTtmb3IodmFyIHU9MCxvPW4/bi5sZW5ndGg6MCxpPXQhPT10LGY9bnVsbD09PXQsYz10PT09WjtvPnU7KXt2YXIgYT1idSgodStvKS8yKSxsPXIoblthXSkscz1sIT09WixoPWw9PT1sOyhpP2h8fGU6Zj9oJiZzJiYoZXx8bnVsbCE9bCk6Yz9oJiYoZXx8cyk6bnVsbD09bD8wOmU/dD49bDp0PmwpP3U9YSsxOm89YX1yZXR1cm4gQXUobyw0Mjk0OTY3Mjk0KX1mdW5jdGlvbiB6dChuLHQpe2Zvcih2YXIgcj0wLGU9bi5sZW5ndGgsdT1uWzBdLG89dD90KHUpOnUsaT1vLGY9MCxjPVt1XTsrK3I8ZTspdT1uW3JdLFxubz10P3QodSk6dSx1ZShvLGkpfHwoaT1vLGNbKytmXT11KTtyZXR1cm4gY31mdW5jdGlvbiBMdChuKXtyZXR1cm4gV28obik/bjpDcihuKX1mdW5jdGlvbiAkdChuLHQscil7dmFyIGU9LTEsdT1pLG89bi5sZW5ndGgsYz10cnVlLGE9W10sbD1hO2lmKHIpYz1mYWxzZSx1PWY7ZWxzZSBpZihvPDIwMClsPXQ/W106YTtlbHNle2lmKHU9dD9udWxsOlR1KG4pKXJldHVybiAkKHUpO2M9ZmFsc2UsdT1MbixsPW5ldyB6bn1uOmZvcig7KytlPG87KXt2YXIgcz1uW2VdLGg9dD90KHMpOnM7aWYoYyYmaD09PWgpe2Zvcih2YXIgcD1sLmxlbmd0aDtwLS07KWlmKGxbcF09PT1oKWNvbnRpbnVlIG47dCYmbC5wdXNoKGgpLGEucHVzaChzKX1lbHNlIHUobCxoLHIpfHwobCE9PWEmJmwucHVzaChoKSxhLnB1c2gocykpfXJldHVybiBhfWZ1bmN0aW9uIEZ0KG4sdCxyLGUpe2Zvcih2YXIgdT1uLmxlbmd0aCxvPWU/dTotMTsoZT9vLS06KytvPHUpJiZ0KG5bb10sbyxuKTspO3JldHVybiByP1d0KG4sZT8wOm8sZT9vKzE6dSk6V3QobixlP28rMTowLGU/dTpvKTtcbn1mdW5jdGlvbiBNdChuLHQpe3ZhciByPW47cmV0dXJuIHIgaW5zdGFuY2VvZiB3biYmKHI9ci52YWx1ZSgpKSxsKHQsZnVuY3Rpb24obix0KXtyZXR1cm4gdC5mdW5jLmFwcGx5KHQudGhpc0FyZyxhKFtuXSx0LmFyZ3MpKX0scil9ZnVuY3Rpb24gTnQobix0LHIpe2Zvcih2YXIgZT0tMSx1PW4ubGVuZ3RoOysrZTx1Oyl2YXIgbz1vP2EodHQobyxuW2VdLHQsciksdHQobltlXSxvLHQscikpOm5bZV07cmV0dXJuIG8mJm8ubGVuZ3RoPyR0KG8sdCxyKTpbXX1mdW5jdGlvbiBadChuKXt2YXIgdD1uZXcgbi5jb25zdHJ1Y3RvcihuLmJ5dGVMZW5ndGgpO3JldHVybiBuZXcgYXUodCkuc2V0KG5ldyBhdShuKSksdH1mdW5jdGlvbiBEdChuLHQscil7Zm9yKHZhciBlPXIubGVuZ3RoLHU9LTEsbz13dShuLmxlbmd0aC1lLDApLGk9LTEsZj10Lmxlbmd0aCxjPUFycmF5KGYrbyk7KytpPGY7KWNbaV09dFtpXTtmb3IoOysrdTxlOyljW3JbdV1dPW5bdV07Zm9yKDtvLS07KWNbaSsrXT1uW3UrK107XG5yZXR1cm4gY31mdW5jdGlvbiBxdChuLHQscil7Zm9yKHZhciBlPS0xLHU9ci5sZW5ndGgsbz0tMSxpPXd1KG4ubGVuZ3RoLXUsMCksZj0tMSxjPXQubGVuZ3RoLGE9QXJyYXkoaStjKTsrK288aTspYVtvXT1uW29dO2ZvcihpPW87KytmPGM7KWFbaStmXT10W2ZdO2Zvcig7KytlPHU7KWFbaStyW2VdXT1uW28rK107cmV0dXJuIGF9ZnVuY3Rpb24gUHQobix0KXt2YXIgcj0tMSxlPW4ubGVuZ3RoO2Zvcih0fHwodD1BcnJheShlKSk7KytyPGU7KXRbcl09bltyXTtyZXR1cm4gdH1mdW5jdGlvbiBUdChuLHQscil7cmV0dXJuIEt0KG4sdCxyKX1mdW5jdGlvbiBLdChuLHQscixlKXtyfHwocj17fSk7Zm9yKHZhciB1PS0xLG89dC5sZW5ndGg7Kyt1PG87KXt2YXIgaT10W3VdLGY9ZT9lKHJbaV0sbltpXSxpLHIsbik6bltpXTtWbihyLGksZil9cmV0dXJuIHJ9ZnVuY3Rpb24gR3Qobix0KXtyZXR1cm4gVHQobixWdShuKSx0KX1mdW5jdGlvbiBWdChuLHQpe3JldHVybiBmdW5jdGlvbihyLGUpe1xudmFyIHU9dD90KCk6e307aWYoZT12cihlKSxXbyhyKSlmb3IodmFyIG89LTEsaT1yLmxlbmd0aDsrK288aTspe3ZhciBmPXJbb107bih1LGYsZShmKSxyKX1lbHNlIE51KHIsZnVuY3Rpb24odCxyLG8pe24odSx0LGUodCksbyl9KTtyZXR1cm4gdX19ZnVuY3Rpb24gSnQobil7cmV0dXJuIGVlKGZ1bmN0aW9uKHQscil7dmFyIGU9LTEsdT1yLmxlbmd0aCxvPXU+MT9yW3UtMV06WixpPXU+Mj9yWzJdOlosbz10eXBlb2Ygbz09XCJmdW5jdGlvblwiPyh1LS0sbyk6Wjtmb3IoaSYmT3IoclswXSxyWzFdLGkpJiYobz0zPnU/WjpvLHU9MSksdD1PYmplY3QodCk7KytlPHU7KShpPXJbZV0pJiZuKHQsaSxlLG8pO3JldHVybiB0fSl9ZnVuY3Rpb24gWXQobix0KXtyZXR1cm4gZnVuY3Rpb24ocixlKXtpZihudWxsPT1yKXJldHVybiByO2lmKCFmZShyKSlyZXR1cm4gbihyLGUpO2Zvcih2YXIgdT1yLmxlbmd0aCxvPXQ/dTotMSxpPU9iamVjdChyKTsodD9vLS06KytvPHUpJiZmYWxzZSE9PWUoaVtvXSxvLGkpOyk7XG5yZXR1cm4gcn19ZnVuY3Rpb24gSHQobil7cmV0dXJuIGZ1bmN0aW9uKHQscixlKXt2YXIgdT0tMSxvPU9iamVjdCh0KTtlPWUodCk7Zm9yKHZhciBpPWUubGVuZ3RoO2ktLTspe3ZhciBmPWVbbj9pOisrdV07aWYoZmFsc2U9PT1yKG9bZl0sZixvKSlicmVha31yZXR1cm4gdH19ZnVuY3Rpb24gUXQobix0LHIpe2Z1bmN0aW9uIGUoKXtyZXR1cm4odGhpcyYmdGhpcyE9PUtuJiZ0aGlzIGluc3RhbmNlb2YgZT9vOm4pLmFwcGx5KHU/cjp0aGlzLGFyZ3VtZW50cyl9dmFyIHU9MSZ0LG89dHIobik7cmV0dXJuIGV9ZnVuY3Rpb24gWHQobil7cmV0dXJuIGZ1bmN0aW9uKHQpe3Q9SWUodCk7dmFyIHI9RW4udGVzdCh0KT90Lm1hdGNoKE9uKTpaLGU9cj9yWzBdOnQuY2hhckF0KDApO3JldHVybiB0PXI/ci5zbGljZSgxKS5qb2luKFwiXCIpOnQuc2xpY2UoMSksZVtuXSgpK3R9fWZ1bmN0aW9uIG5yKG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbChNZSgkZSh0KSksbixcIlwiKX19ZnVuY3Rpb24gdHIobil7XG5yZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHM7c3dpdGNoKHQubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIG5ldyBuO2Nhc2UgMTpyZXR1cm4gbmV3IG4odFswXSk7Y2FzZSAyOnJldHVybiBuZXcgbih0WzBdLHRbMV0pO2Nhc2UgMzpyZXR1cm4gbmV3IG4odFswXSx0WzFdLHRbMl0pO2Nhc2UgNDpyZXR1cm4gbmV3IG4odFswXSx0WzFdLHRbMl0sdFszXSk7Y2FzZSA1OnJldHVybiBuZXcgbih0WzBdLHRbMV0sdFsyXSx0WzNdLHRbNF0pO2Nhc2UgNjpyZXR1cm4gbmV3IG4odFswXSx0WzFdLHRbMl0sdFszXSx0WzRdLHRbNV0pO2Nhc2UgNzpyZXR1cm4gbmV3IG4odFswXSx0WzFdLHRbMl0sdFszXSx0WzRdLHRbNV0sdFs2XSl9dmFyIHI9TXUobi5wcm90b3R5cGUpLHQ9bi5hcHBseShyLHQpO3JldHVybiBwZSh0KT90OnJ9fWZ1bmN0aW9uIHJyKG4sdCxlKXtmdW5jdGlvbiB1KCl7Zm9yKHZhciBpPWFyZ3VtZW50cy5sZW5ndGgsZj1pLGM9QXJyYXkoaSksYT10aGlzJiZ0aGlzIT09S24mJnRoaXMgaW5zdGFuY2VvZiB1P286bixsPXUucGxhY2Vob2xkZXI7Zi0tOyljW2ZdPWFyZ3VtZW50c1tmXTtcbnJldHVybiBmPTM+aSYmY1swXSE9PWwmJmNbaS0xXSE9PWw/W106TChjLGwpLGktPWYubGVuZ3RoLGU+aT9hcihuLHQsdXIsbCxaLGMsZixaLFosZS1pKTpyKGEsdGhpcyxjKX12YXIgbz10cihuKTtyZXR1cm4gdX1mdW5jdGlvbiBlcihuKXtyZXR1cm4gZWUoZnVuY3Rpb24odCl7dD11dCh0KTt2YXIgcj10Lmxlbmd0aCxlPXIsdT1qbi5wcm90b3R5cGUudGhydTtmb3IobiYmdC5yZXZlcnNlKCk7ZS0tOyl7dmFyIG89dFtlXTtpZih0eXBlb2YgbyE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBIZShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7aWYodSYmIWkmJlwid3JhcHBlclwiPT1ncihvKSl2YXIgaT1uZXcgam4oW10sdHJ1ZSl9Zm9yKGU9aT9lOnI7KytlPHI7KXZhciBvPXRbZV0sdT1ncihvKSxmPVwid3JhcHBlclwiPT11P0t1KG8pOlosaT1mJiZJcihmWzBdKSYmNDI0PT1mWzFdJiYhZls0XS5sZW5ndGgmJjE9PWZbOV0/aVtncihmWzBdKV0uYXBwbHkoaSxmWzNdKToxPT1vLmxlbmd0aCYmSXIobyk/aVt1XSgpOmkudGhydShvKTtcbnJldHVybiBmdW5jdGlvbigpe3ZhciBuPWFyZ3VtZW50cyxlPW5bMF07aWYoaSYmMT09bi5sZW5ndGgmJldvKGUpJiZlLmxlbmd0aD49MjAwKXJldHVybiBpLnBsYW50KGUpLnZhbHVlKCk7Zm9yKHZhciB1PTAsbj1yP3RbdV0uYXBwbHkodGhpcyxuKTplOysrdTxyOyluPXRbdV0uY2FsbCh0aGlzLG4pO3JldHVybiBufX0pfWZ1bmN0aW9uIHVyKG4sdCxyLGUsdSxvLGksZixjLGEpe2Z1bmN0aW9uIGwoKXtmb3IodmFyIHk9YXJndW1lbnRzLmxlbmd0aCxiPXkseD1BcnJheSh5KTtiLS07KXhbYl09YXJndW1lbnRzW2JdO2lmKGUmJih4PUR0KHgsZSx1KSksbyYmKHg9cXQoeCxvLGkpKSxffHxnKXt2YXIgYj1sLnBsYWNlaG9sZGVyLG09TCh4LGIpLHk9eS1tLmxlbmd0aDtpZihhPnkpcmV0dXJuIGFyKG4sdCx1cixiLHIseCxtLGYsYyxhLXkpfWlmKHk9aD9yOnRoaXMsYj1wP3lbbl06bixmKWZvcih2YXIgbT14Lmxlbmd0aCxqPUF1KGYubGVuZ3RoLG0pLHc9UHQoeCk7ai0tOyl7dmFyIEE9ZltqXTtcbnhbal09VShBLG0pP3dbQV06Wn1lbHNlIHYmJngubGVuZ3RoPjEmJngucmV2ZXJzZSgpO3JldHVybiBzJiZ4Lmxlbmd0aD5jJiYoeC5sZW5ndGg9YyksdGhpcyYmdGhpcyE9PUtuJiZ0aGlzIGluc3RhbmNlb2YgbCYmKGI9ZHx8dHIoYikpLGIuYXBwbHkoeSx4KX12YXIgcz0xMjgmdCxoPTEmdCxwPTImdCxfPTgmdCxnPTE2JnQsdj01MTImdCxkPXA/Wjp0cihuKTtyZXR1cm4gbH1mdW5jdGlvbiBvcihuKXtyZXR1cm4gZWUoZnVuY3Rpb24odCl7cmV0dXJuIHQ9Yyh1dCh0KSx2cigpKSxlZShmdW5jdGlvbihlKXt2YXIgdT10aGlzO3JldHVybiBuKHQsZnVuY3Rpb24obil7cmV0dXJuIHIobix1LGUpfSl9KX0pfWZ1bmN0aW9uIGlyKG4sdCxyKXtyZXR1cm4gdD1BZSh0KSxuPUYobiksdCYmdD5uPyh0LT1uLHI9cj09PVo/XCIgXCI6citcIlwiLG49RmUocix5dSh0L0YocikpKSxFbi50ZXN0KHIpP24ubWF0Y2goT24pLnNsaWNlKDAsdCkuam9pbihcIlwiKTpuLnNsaWNlKDAsdCkpOlwiXCJ9ZnVuY3Rpb24gZnIobix0LGUsdSl7XG5mdW5jdGlvbiBvKCl7Zm9yKHZhciB0PS0xLGM9YXJndW1lbnRzLmxlbmd0aCxhPS0xLGw9dS5sZW5ndGgscz1BcnJheShsK2MpLGg9dGhpcyYmdGhpcyE9PUtuJiZ0aGlzIGluc3RhbmNlb2Ygbz9mOm47KythPGw7KXNbYV09dVthXTtmb3IoO2MtLTspc1thKytdPWFyZ3VtZW50c1srK3RdO3JldHVybiByKGgsaT9lOnRoaXMscyl9dmFyIGk9MSZ0LGY9dHIobik7cmV0dXJuIG99ZnVuY3Rpb24gY3Iobil7cmV0dXJuIGZ1bmN0aW9uKHQscixlKXtlJiZ0eXBlb2YgZSE9XCJudW1iZXJcIiYmT3IodCxyLGUpJiYocj1lPVopLHQ9RWUodCksdD10PT09dD90OjAscj09PVo/KHI9dCx0PTApOnI9RWUocil8fDAsZT1lPT09Wj9yPnQ/MTotMTpFZShlKXx8MDt2YXIgdT0tMTtyPXd1KHl1KChyLXQpLyhlfHwxKSksMCk7Zm9yKHZhciBvPUFycmF5KHIpO3ItLTspb1tuP3I6Kyt1XT10LHQrPWU7cmV0dXJuIG99fWZ1bmN0aW9uIGFyKG4sdCxyLGUsdSxvLGksZixjLGEpe3ZhciBsPTgmdDtmPWY/UHQoZik6WjtcbnZhciBzPWw/aTpaO2k9bD9aOmk7dmFyIGg9bD9vOlo7cmV0dXJuIG89bD9aOm8sdD0odHwobD8zMjo2NCkpJn4obD82NDozMiksNCZ0fHwodCY9LTQpLHQ9W24sdCx1LGgscyxvLGksZixjLGFdLHI9ci5hcHBseShaLHQpLElyKG4pJiZKdShyLHQpLHIucGxhY2Vob2xkZXI9ZSxyfWZ1bmN0aW9uIGxyKG4pe3ZhciB0PUplW25dO3JldHVybiBmdW5jdGlvbihuLHIpe2lmKG49RWUobikscj1BZShyKSl7dmFyIGU9KEllKG4pK1wiZVwiKS5zcGxpdChcImVcIiksZT10KGVbMF0rXCJlXCIrKCtlWzFdK3IpKSxlPShJZShlKStcImVcIikuc3BsaXQoXCJlXCIpO3JldHVybisoZVswXStcImVcIisoK2VbMV0tcikpfXJldHVybiB0KG4pfX1mdW5jdGlvbiBzcihuLHQscixlLHUsbyxpLGYpe3ZhciBjPTImdDtpZighYyYmdHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgSGUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3ZhciBhPWU/ZS5sZW5ndGg6MDtpZihhfHwodCY9LTk3LGU9dT1aKSxpPWk9PT1aP2k6d3UoQWUoaSksMCksXG5mPWY9PT1aP2Y6QWUoZiksYS09dT91Lmxlbmd0aDowLDY0JnQpe3ZhciBsPWUscz11O2U9dT1afXZhciBoPWM/WjpLdShuKTtyZXR1cm4gbz1bbix0LHIsZSx1LGwscyxvLGksZl0saCYmKHI9b1sxXSxuPWhbMV0sdD1yfG4sZT0xMjg9PW4mJjg9PXJ8fDEyOD09biYmMjU2PT1yJiZoWzhdPj1vWzddLmxlbmd0aHx8Mzg0PT1uJiZoWzhdPj1oWzddLmxlbmd0aCYmOD09ciwxMzE+dHx8ZSkmJigxJm4mJihvWzJdPWhbMl0sdHw9MSZyPzA6NCksKHI9aFszXSkmJihlPW9bM10sb1szXT1lP0R0KGUscixoWzRdKTpQdChyKSxvWzRdPWU/TChvWzNdLFwiX19sb2Rhc2hfcGxhY2Vob2xkZXJfX1wiKTpQdChoWzRdKSksKHI9aFs1XSkmJihlPW9bNV0sb1s1XT1lP3F0KGUscixoWzZdKTpQdChyKSxvWzZdPWU/TChvWzVdLFwiX19sb2Rhc2hfcGxhY2Vob2xkZXJfX1wiKTpQdChoWzZdKSksKHI9aFs3XSkmJihvWzddPVB0KHIpKSwxMjgmbiYmKG9bOF09bnVsbD09b1s4XT9oWzhdOkF1KG9bOF0saFs4XSkpLFxubnVsbD09b1s5XSYmKG9bOV09aFs5XSksb1swXT1oWzBdLG9bMV09dCksbj1vWzBdLHQ9b1sxXSxyPW9bMl0sZT1vWzNdLHU9b1s0XSxmPW9bOV09bnVsbD09b1s5XT9jPzA6bi5sZW5ndGg6d3Uob1s5XS1hLDApLCFmJiYyNCZ0JiYodCY9LTI1KSwoaD9QdTpKdSkodCYmMSE9dD84PT10fHwxNj09dD9ycihuLHQsZik6MzIhPXQmJjMzIT10fHx1Lmxlbmd0aD91ci5hcHBseShaLG8pOmZyKG4sdCxyLGUpOlF0KG4sdCxyKSxvKX1mdW5jdGlvbiBocihuLHQscixlLHUsbyl7dmFyIGk9LTEsZj0yJnUsYz0xJnUsYT1uLmxlbmd0aCxsPXQubGVuZ3RoO2lmKCEoYT09bHx8ZiYmbD5hKSlyZXR1cm4gZmFsc2U7aWYobD1vLmdldChuKSlyZXR1cm4gbD09dDtmb3IobD10cnVlLG8uc2V0KG4sdCk7KytpPGE7KXt2YXIgcz1uW2ldLHA9dFtpXTtpZihlKXZhciBfPWY/ZShwLHMsaSx0LG4sbyk6ZShzLHAsaSxuLHQsbyk7aWYoXyE9PVope2lmKF8pY29udGludWU7bD1mYWxzZTticmVha31pZihjKXtpZighaCh0LGZ1bmN0aW9uKG4pe1xucmV0dXJuIHM9PT1ufHxyKHMsbixlLHUsbyl9KSl7bD1mYWxzZTticmVha319ZWxzZSBpZihzIT09cCYmIXIocyxwLGUsdSxvKSl7bD1mYWxzZTticmVha319cmV0dXJuIG9bXCJkZWxldGVcIl0obiksbH1mdW5jdGlvbiBwcihuLHQscixlLHUsbyl7c3dpdGNoKHIpe2Nhc2VcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI6aWYobi5ieXRlTGVuZ3RoIT10LmJ5dGVMZW5ndGh8fCFlKG5ldyBhdShuKSxuZXcgYXUodCkpKWJyZWFrO3JldHVybiB0cnVlO2Nhc2VcIltvYmplY3QgQm9vbGVhbl1cIjpjYXNlXCJbb2JqZWN0IERhdGVdXCI6cmV0dXJuK249PSt0O2Nhc2VcIltvYmplY3QgRXJyb3JdXCI6cmV0dXJuIG4ubmFtZT09dC5uYW1lJiZuLm1lc3NhZ2U9PXQubWVzc2FnZTtjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpyZXR1cm4gbiE9K24/dCE9K3Q6bj09K3Q7Y2FzZVwiW29iamVjdCBSZWdFeHBdXCI6Y2FzZVwiW29iamVjdCBTdHJpbmddXCI6cmV0dXJuIG49PXQrXCJcIjtjYXNlXCJbb2JqZWN0IE1hcF1cIjp2YXIgaT16O2Nhc2VcIltvYmplY3QgU2V0XVwiOlxucmV0dXJuIGl8fChpPSQpLCgyJm98fG4uc2l6ZT09dC5zaXplKSYmZShpKG4pLGkodCksdSwxfG8pO2Nhc2VcIltvYmplY3QgU3ltYm9sXVwiOnJldHVybiEhY3UmJkx1LmNhbGwobik9PUx1LmNhbGwodCl9cmV0dXJuIGZhbHNlfWZ1bmN0aW9uIF9yKG4sdCxyLGUsdSxvKXt2YXIgaT0yJnUsZj1DZShuKSxjPWYubGVuZ3RoLGE9Q2UodCkubGVuZ3RoO2lmKGMhPWEmJiFpKXJldHVybiBmYWxzZTtmb3IodmFyIGw9YztsLS07KXt2YXIgcz1mW2xdO2lmKCEoaT9zIGluIHQ6bHQodCxzKSkpcmV0dXJuIGZhbHNlfWlmKGE9by5nZXQobikpcmV0dXJuIGE9PXQ7YT10cnVlLG8uc2V0KG4sdCk7Zm9yKHZhciBoPWk7KytsPGM7KXt2YXIgcz1mW2xdLHA9bltzXSxfPXRbc107aWYoZSl2YXIgZz1pP2UoXyxwLHMsdCxuLG8pOmUocCxfLHMsbix0LG8pO2lmKGc9PT1aP3AhPT1fJiYhcihwLF8sZSx1LG8pOiFnKXthPWZhbHNlO2JyZWFrfWh8fChoPVwiY29uc3RydWN0b3JcIj09cyl9cmV0dXJuIGEmJiFoJiYocj1uLmNvbnN0cnVjdG9yLFxuZT10LmNvbnN0cnVjdG9yLHIhPWUmJlwiY29uc3RydWN0b3JcImluIG4mJlwiY29uc3RydWN0b3JcImluIHQmJiEodHlwZW9mIHI9PVwiZnVuY3Rpb25cIiYmciBpbnN0YW5jZW9mIHImJnR5cGVvZiBlPT1cImZ1bmN0aW9uXCImJmUgaW5zdGFuY2VvZiBlKSYmKGE9ZmFsc2UpKSxvW1wiZGVsZXRlXCJdKG4pLGF9ZnVuY3Rpb24gZ3Iobil7Zm9yKHZhciB0PW4ubmFtZStcIlwiLHI9RnVbdF0sZT10dS5jYWxsKEZ1LHQpP3IubGVuZ3RoOjA7ZS0tOyl7dmFyIHU9cltlXSxvPXUuZnVuYztpZihudWxsPT1vfHxvPT1uKXJldHVybiB1Lm5hbWV9cmV0dXJuIHR9ZnVuY3Rpb24gdnIoKXt2YXIgbj1kbi5pdGVyYXRlZXx8WmUsbj1uPT09WmU/dnQ6bjtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD9uKGFyZ3VtZW50c1swXSxhcmd1bWVudHNbMV0pOm59ZnVuY3Rpb24gZHIobil7bj1CZShuKTtmb3IodmFyIHQ9bi5sZW5ndGg7dC0tOyl7dmFyIHI9blt0XVsxXTtuW3RdWzJdPXI9PT1yJiYhcGUocil9cmV0dXJuIG59ZnVuY3Rpb24geXIobix0KXtcbnZhciByPW51bGw9PW4/WjpuW3RdO3JldHVybiBnZShyKT9yOlp9ZnVuY3Rpb24gYnIobil7cmV0dXJuIHV1LmNhbGwobil9ZnVuY3Rpb24geHIobix0LHIpe2lmKG51bGw9PW4pcmV0dXJuIGZhbHNlO3ZhciBlPXIobix0KTtyZXR1cm4gZXx8RXIodCl8fCh0PUx0KHQpLG49V3Iobix0KSxudWxsIT1uJiYodD1Ncih0KSxlPXIobix0KSkpLGV8fGhlKG4mJm4ubGVuZ3RoKSYmVSh0LG4ubGVuZ3RoKSYmKFdvKG4pfHxiZShuKXx8aWUobikpfWZ1bmN0aW9uIG1yKG4pe3ZhciB0PW4ubGVuZ3RoLHI9bi5jb25zdHJ1Y3Rvcih0KTtyZXR1cm4gdCYmXCJzdHJpbmdcIj09dHlwZW9mIG5bMF0mJnR1LmNhbGwobixcImluZGV4XCIpJiYoci5pbmRleD1uLmluZGV4LHIuaW5wdXQ9bi5pbnB1dCkscn1mdW5jdGlvbiBqcihuKXtyZXR1cm4gbj1uLmNvbnN0cnVjdG9yLE11KGxlKG4pP24ucHJvdG90eXBlOlopfWZ1bmN0aW9uIHdyKHIsZSx1KXt2YXIgbz1yLmNvbnN0cnVjdG9yO3N3aXRjaChlKXtjYXNlXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiOlxucmV0dXJuIFp0KHIpO2Nhc2VcIltvYmplY3QgQm9vbGVhbl1cIjpjYXNlXCJbb2JqZWN0IERhdGVdXCI6cmV0dXJuIG5ldyBvKCtyKTtjYXNlXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IEludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBJbnQzMkFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDhBcnJheV1cIjpjYXNlXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiOmNhc2VcIltvYmplY3QgVWludDE2QXJyYXldXCI6Y2FzZVwiW29iamVjdCBVaW50MzJBcnJheV1cIjpyZXR1cm4gZT1yLmJ1ZmZlcixuZXcgci5jb25zdHJ1Y3Rvcih1P1p0KGUpOmUsci5ieXRlT2Zmc2V0LHIubGVuZ3RoKTtjYXNlXCJbb2JqZWN0IE1hcF1cIjpyZXR1cm4gdT1yLmNvbnN0cnVjdG9yLGwoeihyKSxuLG5ldyB1KTtjYXNlXCJbb2JqZWN0IE51bWJlcl1cIjpjYXNlXCJbb2JqZWN0IFN0cmluZ11cIjpyZXR1cm4gbmV3IG8ocik7XG5jYXNlXCJbb2JqZWN0IFJlZ0V4cF1cIjpyZXR1cm4gdT1uZXcgci5jb25zdHJ1Y3RvcihyLnNvdXJjZSxzbi5leGVjKHIpKSx1Lmxhc3RJbmRleD1yLmxhc3RJbmRleCx1O2Nhc2VcIltvYmplY3QgU2V0XVwiOnJldHVybiB1PXIuY29uc3RydWN0b3IsbCgkKHIpLHQsbmV3IHUpO2Nhc2VcIltvYmplY3QgU3ltYm9sXVwiOnJldHVybiBjdT9PYmplY3QoTHUuY2FsbChyKSk6e319fWZ1bmN0aW9uIEFyKG4pe3ZhciB0PW4/bi5sZW5ndGg6WjtyZXR1cm4gaGUodCkmJihXbyhuKXx8YmUobil8fGllKG4pKT94KHQsU3RyaW5nKTpudWxsfWZ1bmN0aW9uIE9yKG4sdCxyKXtpZighcGUocikpcmV0dXJuIGZhbHNlO3ZhciBlPXR5cGVvZiB0O3JldHVybihcIm51bWJlclwiPT1lP2ZlKHIpJiZVKHQsci5sZW5ndGgpOlwic3RyaW5nXCI9PWUmJnQgaW4gcik/dWUoclt0XSxuKTpmYWxzZX1mdW5jdGlvbiBFcihuLHQpe3JldHVybiB0eXBlb2Ygbj09XCJudW1iZXJcIj90cnVlOiFXbyhuKSYmKHRuLnRlc3Qobil8fCFubi50ZXN0KG4pfHxudWxsIT10JiZuIGluIE9iamVjdCh0KSk7XG59ZnVuY3Rpb24ga3Iobil7dmFyIHQ9dHlwZW9mIG47cmV0dXJuXCJudW1iZXJcIj09dHx8XCJib29sZWFuXCI9PXR8fFwic3RyaW5nXCI9PXQmJlwiX19wcm90b19fXCIhPT1ufHxudWxsPT1ufWZ1bmN0aW9uIElyKG4pe3ZhciB0PWdyKG4pLHI9ZG5bdF07cmV0dXJuIHR5cGVvZiByPT1cImZ1bmN0aW9uXCImJnQgaW4gd24ucHJvdG90eXBlP249PT1yP3RydWU6KHQ9S3UociksISF0JiZuPT09dFswXSk6ZmFsc2V9ZnVuY3Rpb24gUnIobil7dmFyIHQ9biYmbi5jb25zdHJ1Y3RvcjtyZXR1cm4gbj09PSh0eXBlb2YgdD09XCJmdW5jdGlvblwiJiZ0LnByb3RvdHlwZXx8WGUpfWZ1bmN0aW9uIFNyKG4sdCxyLGUsdSxvKXtyZXR1cm4gcGUobikmJnBlKHQpJiYoby5zZXQodCxuKSxtdChuLHQsWixTcixvKSksbn1mdW5jdGlvbiBXcihuLHQpe3JldHVybiAxPT10Lmxlbmd0aD9uOlJlKG4sV3QodCwwLC0xKSl9ZnVuY3Rpb24gQ3Iobil7dmFyIHQ9W107cmV0dXJuIEllKG4pLnJlcGxhY2Uocm4sZnVuY3Rpb24obixyLGUsdSl7XG50LnB1c2goZT91LnJlcGxhY2UoYW4sXCIkMVwiKTpyfHxuKX0pLHR9ZnVuY3Rpb24gVXIobil7cmV0dXJuIGNlKG4pP246W119ZnVuY3Rpb24gQnIobil7cmV0dXJuIHR5cGVvZiBuPT1cImZ1bmN0aW9uXCI/bjpOZX1mdW5jdGlvbiB6cihuKXtpZihuIGluc3RhbmNlb2Ygd24pcmV0dXJuIG4uY2xvbmUoKTt2YXIgdD1uZXcgam4obi5fX3dyYXBwZWRfXyxuLl9fY2hhaW5fXyk7cmV0dXJuIHQuX19hY3Rpb25zX189UHQobi5fX2FjdGlvbnNfXyksdC5fX2luZGV4X189bi5fX2luZGV4X18sdC5fX3ZhbHVlc19fPW4uX192YWx1ZXNfXyx0fWZ1bmN0aW9uIExyKG4sdCxyKXt2YXIgZT1uP24ubGVuZ3RoOjA7cmV0dXJuIGU/KHQ9cnx8dD09PVo/MTpBZSh0KSxXdChuLDA+dD8wOnQsZSkpOltdfWZ1bmN0aW9uICRyKG4sdCxyKXt2YXIgZT1uP24ubGVuZ3RoOjA7cmV0dXJuIGU/KHQ9cnx8dD09PVo/MTpBZSh0KSx0PWUtdCxXdChuLDAsMD50PzA6dCkpOltdfWZ1bmN0aW9uIEZyKG4pe3JldHVybiBuP25bMF06Wjtcbn1mdW5jdGlvbiBNcihuKXt2YXIgdD1uP24ubGVuZ3RoOjA7cmV0dXJuIHQ/blt0LTFdOlp9ZnVuY3Rpb24gTnIobix0KXtyZXR1cm4gbiYmbi5sZW5ndGgmJnQmJnQubGVuZ3RoP2t0KG4sdCk6bn1mdW5jdGlvbiBacihuKXtyZXR1cm4gbj9rdS5jYWxsKG4pOm59ZnVuY3Rpb24gRHIobil7aWYoIW58fCFuLmxlbmd0aClyZXR1cm5bXTt2YXIgdD0wO3JldHVybiBuPW8obixmdW5jdGlvbihuKXtyZXR1cm4gY2Uobik/KHQ9d3Uobi5sZW5ndGgsdCksdHJ1ZSk6dm9pZCAwfSkseCh0LGZ1bmN0aW9uKHQpe3JldHVybiBjKG4sT3QodCkpfSl9ZnVuY3Rpb24gcXIobix0KXtpZighbnx8IW4ubGVuZ3RoKXJldHVybltdO3ZhciBlPURyKG4pO3JldHVybiBudWxsPT10P2U6YyhlLGZ1bmN0aW9uKG4pe3JldHVybiByKHQsWixuKX0pfWZ1bmN0aW9uIFByKG4pe3JldHVybiBuPWRuKG4pLG4uX19jaGFpbl9fPXRydWUsbn1mdW5jdGlvbiBUcihuLHQpe3JldHVybiB0KG4pfWZ1bmN0aW9uIEtyKCl7cmV0dXJuIHRoaXM7XG59ZnVuY3Rpb24gR3Iobix0KXtyZXR1cm4gdHlwZW9mIHQ9PVwiZnVuY3Rpb25cIiYmV28obik/ZShuLHQpOk51KG4sQnIodCkpfWZ1bmN0aW9uIFZyKG4sdCl7dmFyIHI7aWYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cIiYmV28obikpe2ZvcihyPW4ubGVuZ3RoO3ItLSYmZmFsc2UhPT10KG5bcl0scixuKTspO3I9bn1lbHNlIHI9WnUobixCcih0KSk7cmV0dXJuIHJ9ZnVuY3Rpb24gSnIobix0KXt2YXIgcj0tMSxlPXdlKG4pLHU9ZS5sZW5ndGgsbz11LTE7Zm9yKHQ9SG4oQWUodCksMCx1KTsrK3I8dDspe3ZhciB1PVJ0KHIsbyksaT1lW3VdO2VbdV09ZVtyXSxlW3JdPWl9cmV0dXJuIGUubGVuZ3RoPXQsZX1mdW5jdGlvbiBZcihuKXtpZihudWxsPT1uKXJldHVybiAwO2lmKGZlKG4pKXt2YXIgdD1uLmxlbmd0aDtyZXR1cm4gdCYmYmUobik/RihuKTp0fXJldHVybiBDZShuKS5sZW5ndGh9ZnVuY3Rpb24gSHIobix0LHIpe3JldHVybiB0PXI/Wjp0LHQ9biYmbnVsbD09dD9uLmxlbmd0aDp0LHNyKG4sMTI4LFosWixaLFosdCk7XG59ZnVuY3Rpb24gUXIobix0KXt2YXIgcjtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBIZShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIG49QWUobiksZnVuY3Rpb24oKXtyZXR1cm4gMDwtLW4mJihyPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpKSwxPj1uJiYodD1aKSxyfX1mdW5jdGlvbiBYcihuLHQscil7cmV0dXJuIHQ9cj9aOnQsbj1zcihuLDgsWixaLFosWixaLHQpLG4ucGxhY2Vob2xkZXI9WHIucGxhY2Vob2xkZXIsbn1mdW5jdGlvbiBuZShuLHQscil7cmV0dXJuIHQ9cj9aOnQsbj1zcihuLDE2LFosWixaLFosWix0KSxuLnBsYWNlaG9sZGVyPW5lLnBsYWNlaG9sZGVyLG59ZnVuY3Rpb24gdGUobix0LHIpe2Z1bmN0aW9uIGUoKXtwJiZsdShwKSxhJiZsdShhKSxnPTAsYz1hPWg9cD1fPVp9ZnVuY3Rpb24gdSh0LHIpe3ImJmx1KHIpLGE9cD1fPVosdCYmKGc9am8oKSxsPW4uYXBwbHkoaCxjKSxwfHxhfHwoYz1oPVopKX1mdW5jdGlvbiBvKCl7dmFyIG49dC0oam8oKS1zKTtcbjA+PW58fG4+dD91KF8sYSk6cD12dShvLG4pfWZ1bmN0aW9uIGkoKXt1KHkscCl9ZnVuY3Rpb24gZigpe2lmKGM9YXJndW1lbnRzLHM9am8oKSxoPXRoaXMsXz15JiYocHx8IXYpLGZhbHNlPT09ZCl2YXIgcj12JiYhcDtlbHNle2F8fHZ8fChnPXMpO3ZhciBlPWQtKHMtZyksdT0wPj1lfHxlPmQ7dT8oYSYmKGE9bHUoYSkpLGc9cyxsPW4uYXBwbHkoaCxjKSk6YXx8KGE9dnUoaSxlKSl9cmV0dXJuIHUmJnA/cD1sdShwKTpwfHx0PT09ZHx8KHA9dnUobyx0KSksciYmKHU9dHJ1ZSxsPW4uYXBwbHkoaCxjKSksIXV8fHB8fGF8fChjPWg9WiksbH12YXIgYyxhLGwscyxoLHAsXyxnPTAsdj1mYWxzZSxkPWZhbHNlLHk9dHJ1ZTtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBIZShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIHQ9RWUodCl8fDAscGUocikmJih2PSEhci5sZWFkaW5nLGQ9XCJtYXhXYWl0XCJpbiByJiZ3dShFZShyLm1heFdhaXQpfHwwLHQpLHk9XCJ0cmFpbGluZ1wiaW4gcj8hIXIudHJhaWxpbmc6eSksXG5mLmNhbmNlbD1lLGYuZmx1c2g9ZnVuY3Rpb24oKXtyZXR1cm4ocCYmX3x8YSYmeSkmJihsPW4uYXBwbHkoaCxjKSksZSgpLGx9LGZ9ZnVuY3Rpb24gcmUobix0KXtmdW5jdGlvbiByKCl7dmFyIGU9YXJndW1lbnRzLHU9dD90LmFwcGx5KHRoaXMsZSk6ZVswXSxvPXIuY2FjaGU7cmV0dXJuIG8uaGFzKHUpP28uZ2V0KHUpOihlPW4uYXBwbHkodGhpcyxlKSxyLmNhY2hlPW8uc2V0KHUsZSksZSl9aWYodHlwZW9mIG4hPVwiZnVuY3Rpb25cInx8dCYmdHlwZW9mIHQhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgSGUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiByLmNhY2hlPW5ldyByZS5DYWNoZSxyfWZ1bmN0aW9uIGVlKG4sdCl7aWYodHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgSGUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiB0PXd1KHQ9PT1aP24ubGVuZ3RoLTE6QWUodCksMCksZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLHU9LTEsbz13dShlLmxlbmd0aC10LDApLGk9QXJyYXkobyk7Kyt1PG87KWlbdV09ZVt0K3VdO1xuc3dpdGNoKHQpe2Nhc2UgMDpyZXR1cm4gbi5jYWxsKHRoaXMsaSk7Y2FzZSAxOnJldHVybiBuLmNhbGwodGhpcyxlWzBdLGkpO2Nhc2UgMjpyZXR1cm4gbi5jYWxsKHRoaXMsZVswXSxlWzFdLGkpfWZvcihvPUFycmF5KHQrMSksdT0tMTsrK3U8dDspb1t1XT1lW3VdO3JldHVybiBvW3RdPWkscihuLHRoaXMsbyl9fWZ1bmN0aW9uIHVlKG4sdCl7cmV0dXJuIG49PT10fHxuIT09biYmdCE9PXR9ZnVuY3Rpb24gb2Uobix0KXtyZXR1cm4gbj50fWZ1bmN0aW9uIGllKG4pe3JldHVybiBjZShuKSYmdHUuY2FsbChuLFwiY2FsbGVlXCIpJiYoIWd1LmNhbGwobixcImNhbGxlZVwiKXx8XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09dXUuY2FsbChuKSl9ZnVuY3Rpb24gZmUobil7cmV0dXJuIG51bGwhPW4mJiEodHlwZW9mIG49PVwiZnVuY3Rpb25cIiYmbGUobikpJiZoZShHdShuKSl9ZnVuY3Rpb24gY2Uobil7cmV0dXJuIF9lKG4pJiZmZShuKX1mdW5jdGlvbiBhZShuKXtyZXR1cm4gX2UobikmJnR5cGVvZiBuLm1lc3NhZ2U9PVwic3RyaW5nXCImJlwiW29iamVjdCBFcnJvcl1cIj09dXUuY2FsbChuKTtcbn1mdW5jdGlvbiBsZShuKXtyZXR1cm4gbj1wZShuKT91dS5jYWxsKG4pOlwiXCIsXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1ufHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PW59ZnVuY3Rpb24gc2Uobil7cmV0dXJuIHR5cGVvZiBuPT1cIm51bWJlclwiJiZuPT1BZShuKX1mdW5jdGlvbiBoZShuKXtyZXR1cm4gdHlwZW9mIG49PVwibnVtYmVyXCImJm4+LTEmJjA9PW4lMSYmOTAwNzE5OTI1NDc0MDk5MT49bn1mdW5jdGlvbiBwZShuKXt2YXIgdD10eXBlb2YgbjtyZXR1cm4hIW4mJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIF9lKG4pe3JldHVybiEhbiYmdHlwZW9mIG49PVwib2JqZWN0XCJ9ZnVuY3Rpb24gZ2Uobil7cmV0dXJuIG51bGw9PW4/ZmFsc2U6bGUobik/aXUudGVzdChudS5jYWxsKG4pKTpfZShuKSYmKEMobik/aXU6Z24pLnRlc3Qobil9ZnVuY3Rpb24gdmUobil7cmV0dXJuIHR5cGVvZiBuPT1cIm51bWJlclwifHxfZShuKSYmXCJbb2JqZWN0IE51bWJlcl1cIj09dXUuY2FsbChuKTtcbn1mdW5jdGlvbiBkZShuKXtpZighX2Uobil8fFwiW29iamVjdCBPYmplY3RdXCIhPXV1LmNhbGwobil8fEMobikpcmV0dXJuIGZhbHNlO3ZhciB0PVhlO3JldHVybiB0eXBlb2Ygbi5jb25zdHJ1Y3Rvcj09XCJmdW5jdGlvblwiJiYodD1odShuKSksbnVsbD09PXQ/dHJ1ZToobj10LmNvbnN0cnVjdG9yLHR5cGVvZiBuPT1cImZ1bmN0aW9uXCImJm4gaW5zdGFuY2VvZiBuJiZudS5jYWxsKG4pPT1ldSl9ZnVuY3Rpb24geWUobil7cmV0dXJuIHBlKG4pJiZcIltvYmplY3QgUmVnRXhwXVwiPT11dS5jYWxsKG4pfWZ1bmN0aW9uIGJlKG4pe3JldHVybiB0eXBlb2Ygbj09XCJzdHJpbmdcInx8IVdvKG4pJiZfZShuKSYmXCJbb2JqZWN0IFN0cmluZ11cIj09dXUuY2FsbChuKX1mdW5jdGlvbiB4ZShuKXtyZXR1cm4gdHlwZW9mIG49PVwic3ltYm9sXCJ8fF9lKG4pJiZcIltvYmplY3QgU3ltYm9sXVwiPT11dS5jYWxsKG4pfWZ1bmN0aW9uIG1lKG4pe3JldHVybiBfZShuKSYmaGUobi5sZW5ndGgpJiYhIVduW3V1LmNhbGwobildfWZ1bmN0aW9uIGplKG4sdCl7XG5yZXR1cm4gdD5ufWZ1bmN0aW9uIHdlKG4pe2lmKCFuKXJldHVybltdO2lmKGZlKG4pKXJldHVybiBiZShuKT9uLm1hdGNoKE9uKTpQdChuKTtpZihfdSYmbltfdV0pcmV0dXJuIEIobltfdV0oKSk7dmFyIHQ9YnIobik7cmV0dXJuKFwiW29iamVjdCBNYXBdXCI9PXQ/ejpcIltvYmplY3QgU2V0XVwiPT10PyQ6emUpKG4pfWZ1bmN0aW9uIEFlKG4pe2lmKCFuKXJldHVybiAwPT09bj9uOjA7aWYobj1FZShuKSxuPT09RHx8bj09PS1EKXJldHVybiAxLjc5NzY5MzEzNDg2MjMxNTdlMzA4KigwPm4/LTE6MSk7dmFyIHQ9biUxO3JldHVybiBuPT09bj90P24tdDpuOjB9ZnVuY3Rpb24gT2Uobil7cmV0dXJuIG4/SG4oQWUobiksMCw0Mjk0OTY3Mjk1KTowfWZ1bmN0aW9uIEVlKG4pe2lmKHBlKG4pJiYobj1sZShuLnZhbHVlT2YpP24udmFsdWVPZigpOm4sbj1wZShuKT9uK1wiXCI6biksdHlwZW9mIG4hPVwic3RyaW5nXCIpcmV0dXJuIDA9PT1uP246K247bj1uLnJlcGxhY2Uob24sXCJcIik7dmFyIHQ9X24udGVzdChuKTtcbnJldHVybiB0fHx2bi50ZXN0KG4pP01uKG4uc2xpY2UoMiksdD8yOjgpOnBuLnRlc3Qobik/cTorbn1mdW5jdGlvbiBrZShuKXtyZXR1cm4gVHQobixVZShuKSl9ZnVuY3Rpb24gSWUobil7aWYodHlwZW9mIG49PVwic3RyaW5nXCIpcmV0dXJuIG47aWYobnVsbD09bilyZXR1cm5cIlwiO2lmKHhlKG4pKXJldHVybiBjdT8kdS5jYWxsKG4pOlwiXCI7dmFyIHQ9bitcIlwiO3JldHVyblwiMFwiPT10JiYxL249PS1EP1wiLTBcIjp0fWZ1bmN0aW9uIFJlKG4sdCxyKXtyZXR1cm4gbj1udWxsPT1uP1o6YXQobix0KSxuPT09Wj9yOm59ZnVuY3Rpb24gU2Uobix0KXtyZXR1cm4geHIobix0LGx0KX1mdW5jdGlvbiBXZShuLHQpe3JldHVybiB4cihuLHQsc3QpfWZ1bmN0aW9uIENlKG4pe3ZhciB0PVJyKG4pO2lmKCF0JiYhZmUobikpcmV0dXJuIGp1KE9iamVjdChuKSk7dmFyIHIsZT1BcihuKSx1PSEhZSxlPWV8fFtdLG89ZS5sZW5ndGg7Zm9yKHIgaW4gbikhbHQobixyKXx8dSYmKFwibGVuZ3RoXCI9PXJ8fFUocixvKSl8fHQmJlwiY29uc3RydWN0b3JcIj09cnx8ZS5wdXNoKHIpO1xucmV0dXJuIGV9ZnVuY3Rpb24gVWUobil7Zm9yKHZhciB0PS0xLHI9UnIobiksZT1kdChuKSx1PWUubGVuZ3RoLG89QXIobiksaT0hIW8sbz1vfHxbXSxmPW8ubGVuZ3RoOysrdDx1Oyl7dmFyIGM9ZVt0XTtpJiYoXCJsZW5ndGhcIj09Y3x8VShjLGYpKXx8XCJjb25zdHJ1Y3RvclwiPT1jJiYocnx8IXR1LmNhbGwobixjKSl8fG8ucHVzaChjKX1yZXR1cm4gb31mdW5jdGlvbiBCZShuKXtyZXR1cm4gbShuLENlKG4pKX1mdW5jdGlvbiB6ZShuKXtyZXR1cm4gbj93KG4sQ2UobikpOltdfWZ1bmN0aW9uIExlKG4pe3JldHVybiBWbyhJZShuKS50b0xvd2VyQ2FzZSgpKX1mdW5jdGlvbiAkZShuKXtyZXR1cm4obj1JZShuKSkmJm4ucmVwbGFjZSh5bixJKS5yZXBsYWNlKEFuLFwiXCIpfWZ1bmN0aW9uIEZlKG4sdCl7bj1JZShuKSx0PUFlKHQpO3ZhciByPVwiXCI7aWYoIW58fDE+dHx8dD45MDA3MTk5MjU0NzQwOTkxKXJldHVybiByO2RvIHQlMiYmKHIrPW4pLHQ9YnUodC8yKSxuKz1uO3doaWxlKHQpO3JldHVybiByO1xufWZ1bmN0aW9uIE1lKG4sdCxyKXtyZXR1cm4gbj1JZShuKSx0PXI/Wjp0LHQ9PT1aJiYodD1Sbi50ZXN0KG4pP0luOmtuKSxuLm1hdGNoKHQpfHxbXX1mdW5jdGlvbiBOZShuKXtyZXR1cm4gbn1mdW5jdGlvbiBaZShuKXtyZXR1cm4gX2UobikmJiFXbyhuKT9EZShuKTp2dChuKX1mdW5jdGlvbiBEZShuKXtyZXR1cm4gYnQoUW4obix0cnVlKSl9ZnVuY3Rpb24gcWUobix0LHIpe3ZhciB1PUNlKHQpLG89Y3QodCx1KTtudWxsIT1yfHxwZSh0KSYmKG8ubGVuZ3RofHwhdS5sZW5ndGgpfHwocj10LHQ9bixuPXRoaXMsbz1jdCh0LENlKHQpKSk7dmFyIGk9cGUocikmJlwiY2hhaW5cImluIHI/ci5jaGFpbjp0cnVlLGY9bGUobik7cmV0dXJuIGUobyxmdW5jdGlvbihyKXt2YXIgZT10W3JdO25bcl09ZSxmJiYobi5wcm90b3R5cGVbcl09ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9fY2hhaW5fXztpZihpfHx0KXt2YXIgcj1uKHRoaXMuX193cmFwcGVkX18pO3JldHVybihyLl9fYWN0aW9uc19fPVB0KHRoaXMuX19hY3Rpb25zX18pKS5wdXNoKHtcbmZ1bmM6ZSxhcmdzOmFyZ3VtZW50cyx0aGlzQXJnOm59KSxyLl9fY2hhaW5fXz10LHJ9cmV0dXJuIGUuYXBwbHkobixhKFt0aGlzLnZhbHVlKCldLGFyZ3VtZW50cykpfSl9KSxufWZ1bmN0aW9uIFBlKCl7fWZ1bmN0aW9uIFRlKG4pe3JldHVybiBFcihuKT9PdChuKTpFdChuKX1mdW5jdGlvbiBLZShuKXtyZXR1cm4gbiYmbi5sZW5ndGg/YihuLE5lKTpafUU9RT9Hbi5kZWZhdWx0cyh7fSxFLEduLnBpY2soS24sU24pKTpLbjt2YXIgR2U9RS5EYXRlLFZlPUUuRXJyb3IsSmU9RS5NYXRoLFllPUUuUmVnRXhwLEhlPUUuVHlwZUVycm9yLFFlPUUuQXJyYXkucHJvdG90eXBlLFhlPUUuT2JqZWN0LnByb3RvdHlwZSxudT1FLkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyx0dT1YZS5oYXNPd25Qcm9wZXJ0eSxydT0wLGV1PW51LmNhbGwoT2JqZWN0KSx1dT1YZS50b1N0cmluZyxvdT1Lbi5fLGl1PVllKFwiXlwiK251LmNhbGwodHUpLnJlcGxhY2UoZW4sXCJcXFxcJCZcIikucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZyxcIiQxLio/XCIpK1wiJFwiKSxmdT1FLmYsY3U9RS5TeW1ib2wsYXU9RS5VaW50OEFycmF5LGx1PUUuY2xlYXJUaW1lb3V0LHN1PWZ1P2Z1Lmc6WixodT1PYmplY3QuZ2V0UHJvdG90eXBlT2YscHU9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxfdT10eXBlb2YoX3U9Y3UmJmN1Lml0ZXJhdG9yKT09XCJzeW1ib2xcIj9fdTpaLGd1PVhlLnByb3BlcnR5SXNFbnVtZXJhYmxlLHZ1PUUuc2V0VGltZW91dCxkdT1RZS5zcGxpY2UseXU9SmUuY2VpbCxidT1KZS5mbG9vcix4dT1FLmlzRmluaXRlLG11PVFlLmpvaW4sanU9T2JqZWN0LmtleXMsd3U9SmUubWF4LEF1PUplLm1pbixPdT1FLnBhcnNlSW50LEV1PUplLnJhbmRvbSxrdT1RZS5yZXZlcnNlLEl1PXlyKEUsXCJNYXBcIiksUnU9eXIoRSxcIlNldFwiKSxTdT15cihFLFwiV2Vha01hcFwiKSxXdT15cihPYmplY3QsXCJjcmVhdGVcIiksQ3U9U3UmJm5ldyBTdSxVdT1JdT9udS5jYWxsKEl1KTpcIlwiLEJ1PVJ1P251LmNhbGwoUnUpOlwiXCIsenU9Y3U/Y3UucHJvdG90eXBlOlosTHU9Y3U/enUudmFsdWVPZjpaLCR1PWN1P3p1LnRvU3RyaW5nOlosRnU9e307XG5kbi50ZW1wbGF0ZVNldHRpbmdzPXtlc2NhcGU6SCxldmFsdWF0ZTpRLGludGVycG9sYXRlOlgsdmFyaWFibGU6XCJcIixpbXBvcnRzOntfOmRufX07dmFyIE11PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbigpe31yZXR1cm4gZnVuY3Rpb24odCl7aWYocGUodCkpe24ucHJvdG90eXBlPXQ7dmFyIHI9bmV3IG47bi5wcm90b3R5cGU9Wn1yZXR1cm4gcnx8e319fSgpLE51PVl0KGl0KSxadT1ZdChmdCx0cnVlKSxEdT1IdCgpLHF1PUh0KHRydWUpO3N1JiYhZ3UuY2FsbCh7dmFsdWVPZjoxfSxcInZhbHVlT2ZcIikmJihkdD1mdW5jdGlvbihuKXtyZXR1cm4gQihzdShuKSl9KTt2YXIgUHU9Q3U/ZnVuY3Rpb24obix0KXtyZXR1cm4gQ3Uuc2V0KG4sdCksbn06TmUsVHU9UnUmJjI9PT1uZXcgUnUoWzEsMl0pLnNpemU/ZnVuY3Rpb24obil7cmV0dXJuIG5ldyBSdShuKX06UGUsS3U9Q3U/ZnVuY3Rpb24obil7cmV0dXJuIEN1LmdldChuKX06UGUsR3U9T3QoXCJsZW5ndGhcIiksVnU9cHV8fGZ1bmN0aW9uKCl7cmV0dXJuW107XG59OyhJdSYmXCJbb2JqZWN0IE1hcF1cIiE9YnIobmV3IEl1KXx8UnUmJlwiW29iamVjdCBTZXRdXCIhPWJyKG5ldyBSdSkpJiYoYnI9ZnVuY3Rpb24obil7dmFyIHQ9dXUuY2FsbChuKTtpZihuPVwiW29iamVjdCBPYmplY3RdXCI9PXQ/bi5jb25zdHJ1Y3RvcjpudWxsLG49dHlwZW9mIG49PVwiZnVuY3Rpb25cIj9udS5jYWxsKG4pOlwiXCIpe2lmKG49PVV1KXJldHVyblwiW29iamVjdCBNYXBdXCI7aWYobj09QnUpcmV0dXJuXCJbb2JqZWN0IFNldF1cIn1yZXR1cm4gdH0pO3ZhciBKdT1mdW5jdGlvbigpe3ZhciBuPTAsdD0wO3JldHVybiBmdW5jdGlvbihyLGUpe3ZhciB1PWpvKCksbz0xNi0odS10KTtpZih0PXUsbz4wKXtpZigxNTA8PSsrbilyZXR1cm4gcn1lbHNlIG49MDtyZXR1cm4gUHUocixlKX19KCksWXU9ZWUoZnVuY3Rpb24obix0KXtXbyhuKXx8KG49bnVsbD09bj9bXTpbT2JqZWN0KG4pXSksdD11dCh0KTtmb3IodmFyIHI9bixlPXQsdT0tMSxvPXIubGVuZ3RoLGk9LTEsZj1lLmxlbmd0aCxjPUFycmF5KG8rZik7Kyt1PG87KWNbdV09clt1XTtcbmZvcig7KytpPGY7KWNbdSsrXT1lW2ldO3JldHVybiBjfSksSHU9ZWUoZnVuY3Rpb24obix0KXtyZXR1cm4gY2Uobik/dHQobix1dCh0LGZhbHNlLHRydWUpKTpbXX0pLFF1PWVlKGZ1bmN0aW9uKG4sdCl7dmFyIHI9TXIodCk7cmV0dXJuIGNlKHIpJiYocj1aKSxjZShuKT90dChuLHV0KHQsZmFsc2UsdHJ1ZSksdnIocikpOltdfSksWHU9ZWUoZnVuY3Rpb24obix0KXt2YXIgcj1Ncih0KTtyZXR1cm4gY2UocikmJihyPVopLGNlKG4pP3R0KG4sdXQodCxmYWxzZSx0cnVlKSxaLHIpOltdfSksbm89ZWUoZnVuY3Rpb24obil7dmFyIHQ9YyhuLFVyKTtyZXR1cm4gdC5sZW5ndGgmJnRbMF09PT1uWzBdP2h0KHQpOltdfSksdG89ZWUoZnVuY3Rpb24obil7dmFyIHQ9TXIobikscj1jKG4sVXIpO3JldHVybiB0PT09TXIocik/dD1aOnIucG9wKCksci5sZW5ndGgmJnJbMF09PT1uWzBdP2h0KHIsdnIodCkpOltdfSkscm89ZWUoZnVuY3Rpb24obil7dmFyIHQ9TXIobikscj1jKG4sVXIpO3JldHVybiB0PT09TXIocik/dD1aOnIucG9wKCksXG5yLmxlbmd0aCYmclswXT09PW5bMF0/aHQocixaLHQpOltdfSksZW89ZWUoTnIpLHVvPWVlKGZ1bmN0aW9uKG4sdCl7dD1jKHV0KHQpLFN0cmluZyk7dmFyIHI9WW4obix0KTtyZXR1cm4gSXQobix0LnNvcnQoaykpLHJ9KSxvbz1lZShmdW5jdGlvbihuKXtyZXR1cm4gJHQodXQobixmYWxzZSx0cnVlKSl9KSxpbz1lZShmdW5jdGlvbihuKXt2YXIgdD1NcihuKTtyZXR1cm4gY2UodCkmJih0PVopLCR0KHV0KG4sZmFsc2UsdHJ1ZSksdnIodCkpfSksZm89ZWUoZnVuY3Rpb24obil7dmFyIHQ9TXIobik7cmV0dXJuIGNlKHQpJiYodD1aKSwkdCh1dChuLGZhbHNlLHRydWUpLFosdCl9KSxjbz1lZShmdW5jdGlvbihuLHQpe3JldHVybiBjZShuKT90dChuLHQpOltdfSksYW89ZWUoZnVuY3Rpb24obil7cmV0dXJuIE50KG8obixjZSkpfSksbG89ZWUoZnVuY3Rpb24obil7dmFyIHQ9TXIobik7cmV0dXJuIGNlKHQpJiYodD1aKSxOdChvKG4sY2UpLHZyKHQpKX0pLHNvPWVlKGZ1bmN0aW9uKG4pe3ZhciB0PU1yKG4pO3JldHVybiBjZSh0KSYmKHQ9WiksXG5OdChvKG4sY2UpLFosdCl9KSxobz1lZShEcikscG89ZWUoZnVuY3Rpb24obil7dmFyIHQ9bi5sZW5ndGgsdD10PjE/blt0LTFdOlosdD10eXBlb2YgdD09XCJmdW5jdGlvblwiPyhuLnBvcCgpLHQpOlo7cmV0dXJuIHFyKG4sdCl9KSxfbz1lZShmdW5jdGlvbihuKXtmdW5jdGlvbiB0KHQpe3JldHVybiBZbih0LG4pfW49dXQobik7dmFyIHI9bi5sZW5ndGgsZT1yP25bMF06MCx1PXRoaXMuX193cmFwcGVkX187cmV0dXJuIDE+PXImJiF0aGlzLl9fYWN0aW9uc19fLmxlbmd0aCYmdSBpbnN0YW5jZW9mIHduJiZVKGUpPyh1PXUuc2xpY2UoZSwrZSsocj8xOjApKSx1Ll9fYWN0aW9uc19fLnB1c2goe2Z1bmM6VHIsYXJnczpbdF0sdGhpc0FyZzpafSksbmV3IGpuKHUsdGhpcy5fX2NoYWluX18pLnRocnUoZnVuY3Rpb24obil7cmV0dXJuIHImJiFuLmxlbmd0aCYmbi5wdXNoKFopLG59KSk6dGhpcy50aHJ1KHQpfSksZ289VnQoZnVuY3Rpb24obix0LHIpe3R1LmNhbGwobixyKT8rK25bcl06bltyXT0xO1xufSksdm89VnQoZnVuY3Rpb24obix0LHIpe3R1LmNhbGwobixyKT9uW3JdLnB1c2godCk6bltyXT1bdF19KSx5bz1lZShmdW5jdGlvbihuLHQsZSl7dmFyIHU9LTEsbz10eXBlb2YgdD09XCJmdW5jdGlvblwiLGk9RXIodCksZj1mZShuKT9BcnJheShuLmxlbmd0aCk6W107cmV0dXJuIE51KG4sZnVuY3Rpb24obil7dmFyIGM9bz90OmkmJm51bGwhPW4/blt0XTpaO2ZbKyt1XT1jP3IoYyxuLGUpOnB0KG4sdCxlKX0pLGZ9KSxibz1WdChmdW5jdGlvbihuLHQscil7bltyXT10fSkseG89VnQoZnVuY3Rpb24obix0LHIpe25bcj8wOjFdLnB1c2godCl9LGZ1bmN0aW9uKCl7cmV0dXJuW1tdLFtdXX0pLG1vPWVlKGZ1bmN0aW9uKG4sdCl7aWYobnVsbD09bilyZXR1cm5bXTt2YXIgcj10Lmxlbmd0aDtyZXR1cm4gcj4xJiZPcihuLHRbMF0sdFsxXSk/dD1bXTpyPjImJk9yKHRbMF0sdFsxXSx0WzJdKSYmKHQubGVuZ3RoPTEpLGp0KG4sdXQodCksW10pfSksam89R2Uubm93LHdvPWVlKGZ1bmN0aW9uKG4sdCxyKXtcbnZhciBlPTE7aWYoci5sZW5ndGgpdmFyIHU9TChyLHdvLnBsYWNlaG9sZGVyKSxlPTMyfGU7cmV0dXJuIHNyKG4sZSx0LHIsdSl9KSxBbz1lZShmdW5jdGlvbihuLHQscil7dmFyIGU9MztpZihyLmxlbmd0aCl2YXIgdT1MKHIsQW8ucGxhY2Vob2xkZXIpLGU9MzJ8ZTtyZXR1cm4gc3IodCxlLG4scix1KX0pLE9vPWVlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG50KG4sMSx0KX0pLEVvPWVlKGZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbnQobixFZSh0KXx8MCxyKX0pLGtvPWVlKGZ1bmN0aW9uKG4sdCl7dD1jKHV0KHQpLHZyKCkpO3ZhciBlPXQubGVuZ3RoO3JldHVybiBlZShmdW5jdGlvbih1KXtmb3IodmFyIG89LTEsaT1BdSh1Lmxlbmd0aCxlKTsrK288aTspdVtvXT10W29dLmNhbGwodGhpcyx1W29dKTtyZXR1cm4gcihuLHRoaXMsdSl9KX0pLElvPWVlKGZ1bmN0aW9uKG4sdCl7dmFyIHI9TCh0LElvLnBsYWNlaG9sZGVyKTtyZXR1cm4gc3IobiwzMixaLHQscil9KSxSbz1lZShmdW5jdGlvbihuLHQpe1xudmFyIHI9TCh0LFJvLnBsYWNlaG9sZGVyKTtyZXR1cm4gc3Iobiw2NCxaLHQscil9KSxTbz1lZShmdW5jdGlvbihuLHQpe3JldHVybiBzcihuLDI1NixaLFosWix1dCh0KSl9KSxXbz1BcnJheS5pc0FycmF5LENvPUp0KGZ1bmN0aW9uKG4sdCl7VHQodCxDZSh0KSxuKX0pLFVvPUp0KGZ1bmN0aW9uKG4sdCl7VHQodCxVZSh0KSxuKX0pLEJvPUp0KGZ1bmN0aW9uKG4sdCxyLGUpe0t0KHQsVWUodCksbixlKX0pLHpvPUp0KGZ1bmN0aW9uKG4sdCxyLGUpe0t0KHQsQ2UodCksbixlKX0pLExvPWVlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIFluKG4sdXQodCkpfSksJG89ZWUoZnVuY3Rpb24obil7cmV0dXJuIG4ucHVzaChaLFBuKSxyKEJvLFosbil9KSxGbz1lZShmdW5jdGlvbihuKXtyZXR1cm4gbi5wdXNoKFosU3IpLHIoWm8sWixuKX0pLE1vPWVlKHB0KSxObz1KdChmdW5jdGlvbihuLHQscil7bXQobix0LHIpfSksWm89SnQoZnVuY3Rpb24obix0LHIsZSl7bXQobix0LHIsZSl9KSxEbz1lZShmdW5jdGlvbihuLHQpe1xucmV0dXJuIG51bGw9PW4/e306KHQ9Yyh1dCh0KSxTdHJpbmcpLHd0KG4sdHQoVWUobiksdCkpKX0pLHFvPWVlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/e306d3Qobix1dCh0KSl9KSxQbz1ucihmdW5jdGlvbihuLHQscil7cmV0dXJuIHQ9dC50b0xvd2VyQ2FzZSgpLG4rKHI/TGUodCk6dCl9KSxUbz1ucihmdW5jdGlvbihuLHQscil7cmV0dXJuIG4rKHI/XCItXCI6XCJcIikrdC50b0xvd2VyQ2FzZSgpfSksS289bnIoZnVuY3Rpb24obix0LHIpe3JldHVybiBuKyhyP1wiIFwiOlwiXCIpK3QudG9Mb3dlckNhc2UoKX0pLEdvPVh0KFwidG9Mb3dlckNhc2VcIiksVm89WHQoXCJ0b1VwcGVyQ2FzZVwiKSxKbz1ucihmdW5jdGlvbihuLHQscil7cmV0dXJuIG4rKHI/XCJfXCI6XCJcIikrdC50b0xvd2VyQ2FzZSgpfSksWW89bnIoZnVuY3Rpb24obix0LHIpe3JldHVybiBuKyhyP1wiIFwiOlwiXCIpK0xlKHQpfSksSG89bnIoZnVuY3Rpb24obix0LHIpe3JldHVybiBuKyhyP1wiIFwiOlwiXCIpK3QudG9VcHBlckNhc2UoKTtcbn0pLFFvPWVlKGZ1bmN0aW9uKG4sdCl7dHJ5e3JldHVybiByKG4sWix0KX1jYXRjaChlKXtyZXR1cm4gYWUoZSk/ZTpuZXcgVmUoZSl9fSksWG89ZWUoZnVuY3Rpb24obix0KXtyZXR1cm4gZSh1dCh0KSxmdW5jdGlvbih0KXtuW3RdPXdvKG5bdF0sbil9KSxufSksbmk9ZXIoKSx0aT1lcih0cnVlKSxyaT1lZShmdW5jdGlvbihuLHQpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gcHQocixuLHQpfX0pLGVpPWVlKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiBwdChuLHIsdCl9fSksdWk9b3IoYyksb2k9b3IodSksaWk9b3IoaCksZmk9Y3IoKSxjaT1jcih0cnVlKSxhaT1scihcImNlaWxcIiksbGk9bHIoXCJmbG9vclwiKSxzaT1scihcInJvdW5kXCIpO3JldHVybiBkbi5wcm90b3R5cGU9bW4ucHJvdG90eXBlLGpuLnByb3RvdHlwZT1NdShtbi5wcm90b3R5cGUpLGpuLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1qbix3bi5wcm90b3R5cGU9TXUobW4ucHJvdG90eXBlKSx3bi5wcm90b3R5cGUuY29uc3RydWN0b3I9d24sXG5Vbi5wcm90b3R5cGU9V3U/V3UobnVsbCk6WGUsQm4ucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgVW4sbWFwOkl1P25ldyBJdTpbXSxzdHJpbmc6bmV3IFVufX0sQm4ucHJvdG90eXBlW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuX19kYXRhX187cmV0dXJuIGtyKG4pPyh0PXR5cGVvZiBuPT1cInN0cmluZ1wiP3Quc3RyaW5nOnQuaGFzaCxuPShXdT90W25dIT09Wjp0dS5jYWxsKHQsbikpJiZkZWxldGUgdFtuXSk6bj1JdT90Lm1hcFtcImRlbGV0ZVwiXShuKTpObih0Lm1hcCxuKSxufSxCbi5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuX19kYXRhX187cmV0dXJuIGtyKG4pPyh0PXR5cGVvZiBuPT1cInN0cmluZ1wiP3Quc3RyaW5nOnQuaGFzaCxXdT8obj10W25dLG49XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCI9PT1uP1o6bik6bj10dS5jYWxsKHQsbik/dFtuXTpaKTpuPUl1P3QubWFwLmdldChuKTpabih0Lm1hcCxuKSxcbm59LEJuLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcy5fX2RhdGFfXztyZXR1cm4ga3Iobik/KHQ9dHlwZW9mIG49PVwic3RyaW5nXCI/dC5zdHJpbmc6dC5oYXNoLG49V3U/dFtuXSE9PVo6dHUuY2FsbCh0LG4pKTpuPUl1P3QubWFwLmhhcyhuKTotMTxEbih0Lm1hcCxuKSxufSxCbi5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpcy5fX2RhdGFfXztyZXR1cm4ga3Iobik/KHR5cGVvZiBuPT1cInN0cmluZ1wiP3Iuc3RyaW5nOnIuaGFzaClbbl09V3UmJnQ9PT1aP1wiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiOnQ6SXU/ci5tYXAuc2V0KG4sdCk6cW4oci5tYXAsbix0KSx0aGlzfSx6bi5wcm90b3R5cGUucHVzaD1mdW5jdGlvbihuKXt2YXIgdD10aGlzLl9fZGF0YV9fO2tyKG4pPyh0PXQuX19kYXRhX18sKHR5cGVvZiBuPT1cInN0cmluZ1wiP3Quc3RyaW5nOnQuaGFzaClbbl09XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCIpOnQuc2V0KG4sXCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCIpO1xufSwkbi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPXthcnJheTpbXSxtYXA6bnVsbH19LCRuLnByb3RvdHlwZVtcImRlbGV0ZVwiXT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLl9fZGF0YV9fLHI9dC5hcnJheTtyZXR1cm4gcj9ObihyLG4pOnQubWFwW1wiZGVsZXRlXCJdKG4pfSwkbi5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuX19kYXRhX18scj10LmFycmF5O3JldHVybiByP1puKHIsbik6dC5tYXAuZ2V0KG4pfSwkbi5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuX19kYXRhX18scj10LmFycmF5O3JldHVybiByPy0xPERuKHIsbik6dC5tYXAuaGFzKG4pfSwkbi5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpcy5fX2RhdGFfXyxlPXIuYXJyYXk7cmV0dXJuIGUmJigxOTk+ZS5sZW5ndGg/cW4oZSxuLHQpOihyLmFycmF5PW51bGwsci5tYXA9bmV3IEJuKGUpKSksKHI9ci5tYXApJiZyLnNldChuLHQpLFxudGhpc30scmUuQ2FjaGU9Qm4sZG4uYWZ0ZXI9ZnVuY3Rpb24obix0KXtpZih0eXBlb2YgdCE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBIZShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIG49QWUobiksZnVuY3Rpb24oKXtyZXR1cm4gMT4tLW4/dC5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dm9pZCAwfX0sZG4uYXJ5PUhyLGRuLmFzc2lnbj1Dbyxkbi5hc3NpZ25Jbj1Vbyxkbi5hc3NpZ25JbldpdGg9Qm8sZG4uYXNzaWduV2l0aD16byxkbi5hdD1Mbyxkbi5iZWZvcmU9UXIsZG4uYmluZD13byxkbi5iaW5kQWxsPVhvLGRuLmJpbmRLZXk9QW8sZG4uY2hhaW49UHIsZG4uY2h1bms9ZnVuY3Rpb24obix0KXt0PXd1KEFlKHQpLDApO3ZhciByPW4/bi5sZW5ndGg6MDtpZighcnx8MT50KXJldHVybltdO2Zvcih2YXIgZT0wLHU9LTEsbz1BcnJheSh5dShyL3QpKTtyPmU7KW9bKyt1XT1XdChuLGUsZSs9dCk7cmV0dXJuIG99LGRuLmNvbXBhY3Q9ZnVuY3Rpb24obil7Zm9yKHZhciB0PS0xLHI9bj9uLmxlbmd0aDowLGU9LTEsdT1bXTsrK3Q8cjspe1xudmFyIG89blt0XTtvJiYodVsrK2VdPW8pfXJldHVybiB1fSxkbi5jb25jYXQ9WXUsZG4uY29uZD1mdW5jdGlvbihuKXt2YXIgdD1uP24ubGVuZ3RoOjAsZT12cigpO3JldHVybiBuPXQ/YyhuLGZ1bmN0aW9uKG4pe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG5bMV0pdGhyb3cgbmV3IEhlKFwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiKTtyZXR1cm5bZShuWzBdKSxuWzFdXX0pOltdLGVlKGZ1bmN0aW9uKGUpe2Zvcih2YXIgdT0tMTsrK3U8dDspe3ZhciBvPW5bdV07aWYocihvWzBdLHRoaXMsZSkpcmV0dXJuIHIob1sxXSx0aGlzLGUpfX0pfSxkbi5jb25mb3Jtcz1mdW5jdGlvbihuKXtyZXR1cm4gWG4oUW4obix0cnVlKSl9LGRuLmNvbnN0YW50PWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBufX0sZG4uY291bnRCeT1nbyxkbi5jcmVhdGU9ZnVuY3Rpb24obix0KXt2YXIgcj1NdShuKTtyZXR1cm4gdD9KbihyLHQpOnJ9LGRuLmN1cnJ5PVhyLGRuLmN1cnJ5UmlnaHQ9bmUsZG4uZGVib3VuY2U9dGUsXG5kbi5kZWZhdWx0cz0kbyxkbi5kZWZhdWx0c0RlZXA9Rm8sZG4uZGVmZXI9T28sZG4uZGVsYXk9RW8sZG4uZGlmZmVyZW5jZT1IdSxkbi5kaWZmZXJlbmNlQnk9UXUsZG4uZGlmZmVyZW5jZVdpdGg9WHUsZG4uZHJvcD1Mcixkbi5kcm9wUmlnaHQ9JHIsZG4uZHJvcFJpZ2h0V2hpbGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gbiYmbi5sZW5ndGg/RnQobix2cih0LDMpLHRydWUsdHJ1ZSk6W119LGRuLmRyb3BXaGlsZT1mdW5jdGlvbihuLHQpe3JldHVybiBuJiZuLmxlbmd0aD9GdChuLHZyKHQsMyksdHJ1ZSk6W119LGRuLmZpbGw9ZnVuY3Rpb24obix0LHIsZSl7dmFyIHU9bj9uLmxlbmd0aDowO2lmKCF1KXJldHVybltdO2ZvcihyJiZ0eXBlb2YgciE9XCJudW1iZXJcIiYmT3Iobix0LHIpJiYocj0wLGU9dSksdT1uLmxlbmd0aCxyPUFlKHIpLDA+ciYmKHI9LXI+dT8wOnUrciksZT1lPT09Wnx8ZT51P3U6QWUoZSksMD5lJiYoZSs9dSksZT1yPmU/MDpPZShlKTtlPnI7KW5bcisrXT10O3JldHVybiBufSxcbmRuLmZpbHRlcj1mdW5jdGlvbihuLHQpe3JldHVybihXbyhuKT9vOmV0KShuLHZyKHQsMykpfSxkbi5mbGF0TWFwPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP3V0KGMobix2cih0LDMpKSk6W119LGRuLmZsYXR0ZW49ZnVuY3Rpb24obil7cmV0dXJuIG4mJm4ubGVuZ3RoP3V0KG4pOltdfSxkbi5mbGF0dGVuRGVlcD1mdW5jdGlvbihuKXtyZXR1cm4gbiYmbi5sZW5ndGg/dXQobix0cnVlKTpbXX0sZG4uZmxpcD1mdW5jdGlvbihuKXtyZXR1cm4gc3Iobiw1MTIpfSxkbi5mbG93PW5pLGRuLmZsb3dSaWdodD10aSxkbi5mcm9tUGFpcnM9ZnVuY3Rpb24obil7Zm9yKHZhciB0PS0xLHI9bj9uLmxlbmd0aDowLGU9e307Kyt0PHI7KXt2YXIgdT1uW3RdO2VbdVswXV09dVsxXX1yZXR1cm4gZX0sZG4uZnVuY3Rpb25zPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT1uP1tdOmN0KG4sQ2UobikpfSxkbi5mdW5jdGlvbnNJbj1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09bj9bXTpjdChuLFVlKG4pKTtcbn0sZG4uZ3JvdXBCeT12byxkbi5pbml0aWFsPWZ1bmN0aW9uKG4pe3JldHVybiAkcihuLDEpfSxkbi5pbnRlcnNlY3Rpb249bm8sZG4uaW50ZXJzZWN0aW9uQnk9dG8sZG4uaW50ZXJzZWN0aW9uV2l0aD1ybyxkbi5pbnZlcnQ9ZnVuY3Rpb24obix0LHIpe3JldHVybiBsKENlKG4pLGZ1bmN0aW9uKGUsdSl7dmFyIG89blt1XTtyZXR1cm4gdCYmIXI/dHUuY2FsbChlLG8pP2Vbb10ucHVzaCh1KTplW29dPVt1XTplW29dPXUsZX0se30pfSxkbi5pbnZva2VNYXA9eW8sZG4uaXRlcmF0ZWU9WmUsZG4ua2V5Qnk9Ym8sZG4ua2V5cz1DZSxkbi5rZXlzSW49VWUsZG4ubWFwPWZ1bmN0aW9uKG4sdCl7cmV0dXJuKFdvKG4pP2M6eXQpKG4sdnIodCwzKSl9LGRuLm1hcEtleXM9ZnVuY3Rpb24obix0KXt2YXIgcj17fTtyZXR1cm4gdD12cih0LDMpLGl0KG4sZnVuY3Rpb24obixlLHUpe3JbdChuLGUsdSldPW59KSxyfSxkbi5tYXBWYWx1ZXM9ZnVuY3Rpb24obix0KXt2YXIgcj17fTtyZXR1cm4gdD12cih0LDMpLFxuaXQobixmdW5jdGlvbihuLGUsdSl7cltlXT10KG4sZSx1KX0pLHJ9LGRuLm1hdGNoZXM9RGUsZG4ubWF0Y2hlc1Byb3BlcnR5PWZ1bmN0aW9uKG4sdCl7cmV0dXJuIHh0KG4sUW4odCx0cnVlKSl9LGRuLm1lbW9pemU9cmUsZG4ubWVyZ2U9Tm8sZG4ubWVyZ2VXaXRoPVpvLGRuLm1ldGhvZD1yaSxkbi5tZXRob2RPZj1laSxkbi5taXhpbj1xZSxkbi5uZWdhdGU9ZnVuY3Rpb24obil7aWYodHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgSGUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiBmdW5jdGlvbigpe3JldHVybiFuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19LGRuLm50aEFyZz1mdW5jdGlvbihuKXtyZXR1cm4gbj1BZShuKSxmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHNbbl19fSxkbi5vbWl0PURvLGRuLm9taXRCeT1mdW5jdGlvbihuLHQpe3JldHVybiB0PXZyKHQsMiksQXQobixmdW5jdGlvbihuLHIpe3JldHVybiF0KG4scil9KX0sZG4ub25jZT1mdW5jdGlvbihuKXtcbnJldHVybiBRcigyLG4pfSxkbi5vcmRlckJ5PWZ1bmN0aW9uKG4sdCxyLGUpe3JldHVybiBudWxsPT1uP1tdOihXbyh0KXx8KHQ9bnVsbD09dD9bXTpbdF0pLHI9ZT9aOnIsV28ocil8fChyPW51bGw9PXI/W106W3JdKSxqdChuLHQscikpfSxkbi5vdmVyPXVpLGRuLm92ZXJBcmdzPWtvLGRuLm92ZXJFdmVyeT1vaSxkbi5vdmVyU29tZT1paSxkbi5wYXJ0aWFsPUlvLGRuLnBhcnRpYWxSaWdodD1Sbyxkbi5wYXJ0aXRpb249eG8sZG4ucGljaz1xbyxkbi5waWNrQnk9ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj97fTpBdChuLHZyKHQsMikpfSxkbi5wcm9wZXJ0eT1UZSxkbi5wcm9wZXJ0eU9mPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09bj9aOmF0KG4sdCl9fSxkbi5wdWxsPWVvLGRuLnB1bGxBbGw9TnIsZG4ucHVsbEFsbEJ5PWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbiYmbi5sZW5ndGgmJnQmJnQubGVuZ3RoP2t0KG4sdCx2cihyKSk6bn0sZG4ucHVsbEF0PXVvLFxuZG4ucmFuZ2U9ZmksZG4ucmFuZ2VSaWdodD1jaSxkbi5yZWFyZz1Tbyxkbi5yZWplY3Q9ZnVuY3Rpb24obix0KXt2YXIgcj1XbyhuKT9vOmV0O3JldHVybiB0PXZyKHQsMykscihuLGZ1bmN0aW9uKG4scixlKXtyZXR1cm4hdChuLHIsZSl9KX0sZG4ucmVtb3ZlPWZ1bmN0aW9uKG4sdCl7dmFyIHI9W107aWYoIW58fCFuLmxlbmd0aClyZXR1cm4gcjt2YXIgZT0tMSx1PVtdLG89bi5sZW5ndGg7Zm9yKHQ9dnIodCwzKTsrK2U8bzspe3ZhciBpPW5bZV07dChpLGUsbikmJihyLnB1c2goaSksdS5wdXNoKGUpKX1yZXR1cm4gSXQobix1KSxyfSxkbi5yZXN0PWVlLGRuLnJldmVyc2U9WnIsZG4uc2FtcGxlU2l6ZT1Kcixkbi5zZXQ9ZnVuY3Rpb24obix0LHIpe3JldHVybiBudWxsPT1uP246U3Qobix0LHIpfSxkbi5zZXRXaXRoPWZ1bmN0aW9uKG4sdCxyLGUpe3JldHVybiBlPXR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/ZTpaLG51bGw9PW4/bjpTdChuLHQscixlKX0sZG4uc2h1ZmZsZT1mdW5jdGlvbihuKXtcbnJldHVybiBKcihuLDQyOTQ5NjcyOTUpfSxkbi5zbGljZT1mdW5jdGlvbihuLHQscil7dmFyIGU9bj9uLmxlbmd0aDowO3JldHVybiBlPyhyJiZ0eXBlb2YgciE9XCJudW1iZXJcIiYmT3Iobix0LHIpPyh0PTAscj1lKToodD1udWxsPT10PzA6QWUodCkscj1yPT09Wj9lOkFlKHIpKSxXdChuLHQscikpOltdfSxkbi5zb3J0Qnk9bW8sZG4uc29ydGVkVW5pcT1mdW5jdGlvbihuKXtyZXR1cm4gbiYmbi5sZW5ndGg/enQobik6W119LGRuLnNvcnRlZFVuaXFCeT1mdW5jdGlvbihuLHQpe3JldHVybiBuJiZuLmxlbmd0aD96dChuLHZyKHQpKTpbXX0sZG4uc3BsaXQ9ZnVuY3Rpb24obix0LHIpe3JldHVybiBJZShuKS5zcGxpdCh0LHIpfSxkbi5zcHJlYWQ9ZnVuY3Rpb24obil7aWYodHlwZW9mIG4hPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgSGUoXCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIpO3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gcihuLHRoaXMsdCl9fSxkbi50YWlsPWZ1bmN0aW9uKG4pe3JldHVybiBMcihuLDEpO1xufSxkbi50YWtlPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbiYmbi5sZW5ndGg/KHQ9cnx8dD09PVo/MTpBZSh0KSxXdChuLDAsMD50PzA6dCkpOltdfSxkbi50YWtlUmlnaHQ9ZnVuY3Rpb24obix0LHIpe3ZhciBlPW4/bi5sZW5ndGg6MDtyZXR1cm4gZT8odD1yfHx0PT09Wj8xOkFlKHQpLHQ9ZS10LFd0KG4sMD50PzA6dCxlKSk6W119LGRuLnRha2VSaWdodFdoaWxlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP0Z0KG4sdnIodCwzKSxmYWxzZSx0cnVlKTpbXX0sZG4udGFrZVdoaWxlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP0Z0KG4sdnIodCwzKSk6W119LGRuLnRhcD1mdW5jdGlvbihuLHQpe3JldHVybiB0KG4pLG59LGRuLnRocm90dGxlPWZ1bmN0aW9uKG4sdCxyKXt2YXIgZT10cnVlLHU9dHJ1ZTtpZih0eXBlb2YgbiE9XCJmdW5jdGlvblwiKXRocm93IG5ldyBIZShcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIik7cmV0dXJuIHBlKHIpJiYoZT1cImxlYWRpbmdcImluIHI/ISFyLmxlYWRpbmc6ZSxcbnU9XCJ0cmFpbGluZ1wiaW4gcj8hIXIudHJhaWxpbmc6dSksdGUobix0LHtsZWFkaW5nOmUsbWF4V2FpdDp0LHRyYWlsaW5nOnV9KX0sZG4udGhydT1Ucixkbi50b0FycmF5PXdlLGRuLnRvUGFpcnM9QmUsZG4udG9QYWlyc0luPWZ1bmN0aW9uKG4pe3JldHVybiBtKG4sVWUobikpfSxkbi50b1BhdGg9ZnVuY3Rpb24obil7cmV0dXJuIFdvKG4pP2MobixTdHJpbmcpOkNyKG4pfSxkbi50b1BsYWluT2JqZWN0PWtlLGRuLnRyYW5zZm9ybT1mdW5jdGlvbihuLHQscil7dmFyIHU9V28obil8fG1lKG4pO2lmKHQ9dnIodCw0KSxudWxsPT1yKWlmKHV8fHBlKG4pKXt2YXIgbz1uLmNvbnN0cnVjdG9yO3I9dT9XbyhuKT9uZXcgbzpbXTpNdShsZShvKT9vLnByb3RvdHlwZTpaKX1lbHNlIHI9e307cmV0dXJuKHU/ZTppdCkobixmdW5jdGlvbihuLGUsdSl7cmV0dXJuIHQocixuLGUsdSl9KSxyfSxkbi51bmFyeT1mdW5jdGlvbihuKXtyZXR1cm4gSHIobiwxKX0sZG4udW5pb249b28sZG4udW5pb25CeT1pbyxcbmRuLnVuaW9uV2l0aD1mbyxkbi51bmlxPWZ1bmN0aW9uKG4pe3JldHVybiBuJiZuLmxlbmd0aD8kdChuKTpbXX0sZG4udW5pcUJ5PWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoPyR0KG4sdnIodCkpOltdfSxkbi51bmlxV2l0aD1mdW5jdGlvbihuLHQpe3JldHVybiBuJiZuLmxlbmd0aD8kdChuLFosdCk6W119LGRuLnVuc2V0PWZ1bmN0aW9uKG4sdCl7dmFyIHI7aWYobnVsbD09bilyPXRydWU7ZWxzZXtyPW47dmFyIGU9dCxlPUVyKGUscik/W2UrXCJcIl06THQoZSk7cj1XcihyLGUpLGU9TXIoZSkscj1udWxsIT1yJiZTZShyLGUpP2RlbGV0ZSByW2VdOnRydWV9cmV0dXJuIHJ9LGRuLnVuemlwPURyLGRuLnVuemlwV2l0aD1xcixkbi52YWx1ZXM9emUsZG4udmFsdWVzSW49ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW4/dyhuLFVlKG4pKTpbXX0sZG4ud2l0aG91dD1jbyxkbi53b3Jkcz1NZSxkbi53cmFwPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIHQ9bnVsbD09dD9OZTp0LElvKHQsbik7XG59LGRuLnhvcj1hbyxkbi54b3JCeT1sbyxkbi54b3JXaXRoPXNvLGRuLnppcD1obyxkbi56aXBPYmplY3Q9ZnVuY3Rpb24obix0KXtmb3IodmFyIHI9LTEsZT1uP24ubGVuZ3RoOjAsdT10P3QubGVuZ3RoOjAsbz17fTsrK3I8ZTspU3QobyxuW3JdLHU+cj90W3JdOlopO3JldHVybiBvfSxkbi56aXBXaXRoPXBvLGRuLmV4dGVuZD1Vbyxkbi5leHRlbmRXaXRoPUJvLHFlKGRuLGRuKSxkbi5hZGQ9ZnVuY3Rpb24obix0KXt2YXIgcjtyZXR1cm4gbiE9PVomJihyPW4pLHQhPT1aJiYocj1yPT09Wj90OnIrdCkscn0sZG4uYXR0ZW1wdD1Rbyxkbi5jYW1lbENhc2U9UG8sZG4uY2FwaXRhbGl6ZT1MZSxkbi5jZWlsPWFpLGRuLmNsYW1wPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gcj09PVomJihyPXQsdD1aKSxyIT09WiYmKHI9RWUocikscj1yPT09cj9yOjApLHQhPT1aJiYodD1FZSh0KSx0PXQ9PT10P3Q6MCksSG4oRWUobiksdCxyKX0sZG4uY2xvbmU9ZnVuY3Rpb24obil7cmV0dXJuIFFuKG4pO1xufSxkbi5jbG9uZURlZXA9ZnVuY3Rpb24obil7cmV0dXJuIFFuKG4sdHJ1ZSl9LGRuLmNsb25lRGVlcFdpdGg9ZnVuY3Rpb24obix0KXtyZXR1cm4gUW4obix0cnVlLHQpfSxkbi5jbG9uZVdpdGg9ZnVuY3Rpb24obix0KXtyZXR1cm4gUW4obixmYWxzZSx0KX0sZG4uZGVidXJyPSRlLGRuLmVuZHNXaXRoPWZ1bmN0aW9uKG4sdCxyKXtuPUllKG4pLHQ9dHlwZW9mIHQ9PVwic3RyaW5nXCI/dDp0K1wiXCI7dmFyIGU9bi5sZW5ndGg7cmV0dXJuIHI9cj09PVo/ZTpIbihBZShyKSwwLGUpLHItPXQubGVuZ3RoLHI+PTAmJm4uaW5kZXhPZih0LHIpPT1yfSxkbi5lcT11ZSxkbi5lc2NhcGU9ZnVuY3Rpb24obil7cmV0dXJuKG49SWUobikpJiZZLnRlc3Qobik/bi5yZXBsYWNlKFYsUik6bn0sZG4uZXNjYXBlUmVnRXhwPWZ1bmN0aW9uKG4pe3JldHVybihuPUllKG4pKSYmdW4udGVzdChuKT9uLnJlcGxhY2UoZW4sXCJcXFxcJCZcIik6bn0sZG4uZXZlcnk9ZnVuY3Rpb24obix0LHIpe3ZhciBlPVdvKG4pP3U6cnQ7cmV0dXJuIHImJk9yKG4sdCxyKSYmKHQ9WiksXG5lKG4sdnIodCwzKSl9LGRuLmZpbmQ9ZnVuY3Rpb24obix0KXtpZih0PXZyKHQsMyksV28obikpe3ZhciByPWcobix0KTtyZXR1cm4gcj4tMT9uW3JdOlp9cmV0dXJuIF8obix0LE51KX0sZG4uZmluZEluZGV4PWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP2cobix2cih0LDMpKTotMX0sZG4uZmluZEtleT1mdW5jdGlvbihuLHQpe3JldHVybiBfKG4sdnIodCwzKSxpdCx0cnVlKX0sZG4uZmluZExhc3Q9ZnVuY3Rpb24obix0KXtpZih0PXZyKHQsMyksV28obikpe3ZhciByPWcobix0LHRydWUpO3JldHVybiByPi0xP25bcl06Wn1yZXR1cm4gXyhuLHQsWnUpfSxkbi5maW5kTGFzdEluZGV4PWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP2cobix2cih0LDMpLHRydWUpOi0xfSxkbi5maW5kTGFzdEtleT1mdW5jdGlvbihuLHQpe3JldHVybiBfKG4sdnIodCwzKSxmdCx0cnVlKX0sZG4uZmxvb3I9bGksZG4uZm9yRWFjaD1Hcixkbi5mb3JFYWNoUmlnaHQ9VnIsZG4uZm9ySW49ZnVuY3Rpb24obix0KXtcbnJldHVybiBudWxsPT1uP246RHUobixCcih0KSxVZSl9LGRuLmZvckluUmlnaHQ9ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9uOnF1KG4sQnIodCksVWUpfSxkbi5mb3JPd249ZnVuY3Rpb24obix0KXtyZXR1cm4gbiYmaXQobixCcih0KSl9LGRuLmZvck93blJpZ2h0PWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4mJmZ0KG4sQnIodCkpfSxkbi5nZXQ9UmUsZG4uZ3Q9b2UsZG4uZ3RlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4+PXR9LGRuLmhhcz1TZSxkbi5oYXNJbj1XZSxkbi5oZWFkPUZyLGRuLmlkZW50aXR5PU5lLGRuLmluY2x1ZGVzPWZ1bmN0aW9uKG4sdCxyLGUpe3JldHVybiBuPWZlKG4pP246emUobikscj1yJiYhZT9BZShyKTowLGU9bi5sZW5ndGgsMD5yJiYocj13dShlK3IsMCkpLGJlKG4pP2U+PXImJi0xPG4uaW5kZXhPZih0LHIpOiEhZSYmLTE8dihuLHQscil9LGRuLmluZGV4T2Y9ZnVuY3Rpb24obix0LHIpe3ZhciBlPW4/bi5sZW5ndGg6MDtyZXR1cm4gZT8ocj1BZShyKSxcbjA+ciYmKHI9d3UoZStyLDApKSx2KG4sdCxyKSk6LTF9LGRuLmluUmFuZ2U9ZnVuY3Rpb24obix0LHIpe3JldHVybiB0PUVlKHQpfHwwLHI9PT1aPyhyPXQsdD0wKTpyPUVlKHIpfHwwLG49RWUobiksbj49QXUodCxyKSYmbjx3dSh0LHIpfSxkbi5pbnZva2U9TW8sZG4uaXNBcmd1bWVudHM9aWUsZG4uaXNBcnJheT1Xbyxkbi5pc0FycmF5TGlrZT1mZSxkbi5pc0FycmF5TGlrZU9iamVjdD1jZSxkbi5pc0Jvb2xlYW49ZnVuY3Rpb24obil7cmV0dXJuIHRydWU9PT1ufHxmYWxzZT09PW58fF9lKG4pJiZcIltvYmplY3QgQm9vbGVhbl1cIj09dXUuY2FsbChuKX0sZG4uaXNEYXRlPWZ1bmN0aW9uKG4pe3JldHVybiBfZShuKSYmXCJbb2JqZWN0IERhdGVdXCI9PXV1LmNhbGwobil9LGRuLmlzRWxlbWVudD1mdW5jdGlvbihuKXtyZXR1cm4hIW4mJjE9PT1uLm5vZGVUeXBlJiZfZShuKSYmIWRlKG4pfSxkbi5pc0VtcHR5PWZ1bmN0aW9uKG4pe3JldHVybiFfZShuKXx8bGUobi5zcGxpY2UpPyFZcihuKTohQ2UobikubGVuZ3RoO1xufSxkbi5pc0VxdWFsPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIF90KG4sdCl9LGRuLmlzRXF1YWxXaXRoPWZ1bmN0aW9uKG4sdCxyKXt2YXIgZT0ocj10eXBlb2Ygcj09XCJmdW5jdGlvblwiP3I6Wik/cihuLHQpOlo7cmV0dXJuIGU9PT1aP190KG4sdCxyKTohIWV9LGRuLmlzRXJyb3I9YWUsZG4uaXNGaW5pdGU9ZnVuY3Rpb24obil7cmV0dXJuIHR5cGVvZiBuPT1cIm51bWJlclwiJiZ4dShuKX0sZG4uaXNGdW5jdGlvbj1sZSxkbi5pc0ludGVnZXI9c2UsZG4uaXNMZW5ndGg9aGUsZG4uaXNNYXRjaD1mdW5jdGlvbihuLHQpe3JldHVybiBuPT09dHx8Z3Qobix0LGRyKHQpKX0sZG4uaXNNYXRjaFdpdGg9ZnVuY3Rpb24obix0LHIpe3JldHVybiByPXR5cGVvZiByPT1cImZ1bmN0aW9uXCI/cjpaLGd0KG4sdCxkcih0KSxyKX0sZG4uaXNOYU49ZnVuY3Rpb24obil7cmV0dXJuIHZlKG4pJiZuIT0rbn0sZG4uaXNOYXRpdmU9Z2UsZG4uaXNOaWw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW59LGRuLmlzTnVsbD1mdW5jdGlvbihuKXtcbnJldHVybiBudWxsPT09bn0sZG4uaXNOdW1iZXI9dmUsZG4uaXNPYmplY3Q9cGUsZG4uaXNPYmplY3RMaWtlPV9lLGRuLmlzUGxhaW5PYmplY3Q9ZGUsZG4uaXNSZWdFeHA9eWUsZG4uaXNTYWZlSW50ZWdlcj1mdW5jdGlvbihuKXtyZXR1cm4gc2UobikmJm4+PS05MDA3MTk5MjU0NzQwOTkxJiY5MDA3MTk5MjU0NzQwOTkxPj1ufSxkbi5pc1N0cmluZz1iZSxkbi5pc1N5bWJvbD14ZSxkbi5pc1R5cGVkQXJyYXk9bWUsZG4uaXNVbmRlZmluZWQ9ZnVuY3Rpb24obil7cmV0dXJuIG49PT1afSxkbi5qb2luPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4/bXUuY2FsbChuLHQpOlwiXCJ9LGRuLmtlYmFiQ2FzZT1Ubyxkbi5sYXN0PU1yLGRuLmxhc3RJbmRleE9mPWZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1uP24ubGVuZ3RoOjA7aWYoIWUpcmV0dXJuLTE7dmFyIHU9ZTtpZihyIT09WiYmKHU9QWUociksdT0oMD51P3d1KGUrdSwwKTpBdSh1LGUtMSkpKzEpLHQhPT10KXJldHVybiBXKG4sdSx0cnVlKTtmb3IoO3UtLTspaWYoblt1XT09PXQpcmV0dXJuIHU7XG5yZXR1cm4tMX0sZG4ubG93ZXJDYXNlPUtvLGRuLmxvd2VyRmlyc3Q9R28sZG4ubHQ9amUsZG4ubHRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIHQ+PW59LGRuLm1heD1mdW5jdGlvbihuKXtyZXR1cm4gbiYmbi5sZW5ndGg/cChuLE5lLG9lKTpafSxkbi5tYXhCeT1mdW5jdGlvbihuLHQpe3JldHVybiBuJiZuLmxlbmd0aD9wKG4sdnIodCksb2UpOlp9LGRuLm1lYW49ZnVuY3Rpb24obil7cmV0dXJuIEtlKG4pLyhuP24ubGVuZ3RoOjApfSxkbi5taW49ZnVuY3Rpb24obil7cmV0dXJuIG4mJm4ubGVuZ3RoP3AobixOZSxqZSk6Wn0sZG4ubWluQnk9ZnVuY3Rpb24obix0KXtyZXR1cm4gbiYmbi5sZW5ndGg/cChuLHZyKHQpLGplKTpafSxkbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIEtuLl89PT10aGlzJiYoS24uXz1vdSksdGhpc30sZG4ubm9vcD1QZSxkbi5ub3c9am8sZG4ucGFkPWZ1bmN0aW9uKG4sdCxyKXtuPUllKG4pLHQ9QWUodCk7dmFyIGU9RihuKTtyZXR1cm4gdCYmdD5lPyhlPSh0LWUpLzIsXG50PWJ1KGUpLGU9eXUoZSksaXIoXCJcIix0LHIpK24raXIoXCJcIixlLHIpKTpufSxkbi5wYWRFbmQ9ZnVuY3Rpb24obix0LHIpe3JldHVybiBuPUllKG4pLG4raXIobix0LHIpfSxkbi5wYWRTdGFydD1mdW5jdGlvbihuLHQscil7cmV0dXJuIG49SWUobiksaXIobix0LHIpK259LGRuLnBhcnNlSW50PWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gcnx8bnVsbD09dD90PTA6dCYmKHQ9K3QpLG49SWUobikucmVwbGFjZShvbixcIlwiKSxPdShuLHR8fChobi50ZXN0KG4pPzE2OjEwKSl9LGRuLnJhbmRvbT1mdW5jdGlvbihuLHQscil7aWYociYmdHlwZW9mIHIhPVwiYm9vbGVhblwiJiZPcihuLHQscikmJih0PXI9Wikscj09PVomJih0eXBlb2YgdD09XCJib29sZWFuXCI/KHI9dCx0PVopOnR5cGVvZiBuPT1cImJvb2xlYW5cIiYmKHI9bixuPVopKSxuPT09WiYmdD09PVo/KG49MCx0PTEpOihuPUVlKG4pfHwwLHQ9PT1aPyh0PW4sbj0wKTp0PUVlKHQpfHwwKSxuPnQpe3ZhciBlPW47bj10LHQ9ZX1yZXR1cm4gcnx8biUxfHx0JTE/KHI9RXUoKSxcbkF1KG4rcioodC1uK0ZuKFwiMWUtXCIrKChyK1wiXCIpLmxlbmd0aC0xKSkpLHQpKTpSdChuLHQpfSxkbi5yZWR1Y2U9ZnVuY3Rpb24obix0LHIpe3ZhciBlPVdvKG4pP2w6ZCx1PTM+YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4gZShuLHZyKHQsNCkscix1LE51KX0sZG4ucmVkdWNlUmlnaHQ9ZnVuY3Rpb24obix0LHIpe3ZhciBlPVdvKG4pP3M6ZCx1PTM+YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4gZShuLHZyKHQsNCkscix1LFp1KX0sZG4ucmVwZWF0PUZlLGRuLnJlcGxhY2U9ZnVuY3Rpb24oKXt2YXIgbj1hcmd1bWVudHMsdD1JZShuWzBdKTtyZXR1cm4gMz5uLmxlbmd0aD90OnQucmVwbGFjZShuWzFdLG5bMl0pfSxkbi5yZXN1bHQ9ZnVuY3Rpb24obix0LHIpe2lmKEVyKHQsbikpZT1udWxsPT1uP1o6blt0XTtlbHNle3Q9THQodCk7dmFyIGU9UmUobix0KTtuPVdyKG4sdCl9cmV0dXJuIGU9PT1aJiYoZT1yKSxsZShlKT9lLmNhbGwobik6ZX0sZG4ucm91bmQ9c2ksZG4ucnVuSW5Db250ZXh0PU4sXG5kbi5zYW1wbGU9ZnVuY3Rpb24obil7bj1mZShuKT9uOnplKG4pO3ZhciB0PW4ubGVuZ3RoO3JldHVybiB0PjA/bltSdCgwLHQtMSldOlp9LGRuLnNpemU9WXIsZG4uc25ha2VDYXNlPUpvLGRuLnNvbWU9ZnVuY3Rpb24obix0LHIpe3ZhciBlPVdvKG4pP2g6Q3Q7cmV0dXJuIHImJk9yKG4sdCxyKSYmKHQ9WiksZShuLHZyKHQsMykpfSxkbi5zb3J0ZWRJbmRleD1mdW5jdGlvbihuLHQpe3JldHVybiBVdChuLHQpfSxkbi5zb3J0ZWRJbmRleEJ5PWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gQnQobix0LHZyKHIpKX0sZG4uc29ydGVkSW5kZXhPZj1mdW5jdGlvbihuLHQpe3ZhciByPW4/bi5sZW5ndGg6MDtpZihyKXt2YXIgZT1VdChuLHQpO2lmKHI+ZSYmdWUobltlXSx0KSlyZXR1cm4gZX1yZXR1cm4tMX0sZG4uc29ydGVkTGFzdEluZGV4PWZ1bmN0aW9uKG4sdCl7cmV0dXJuIFV0KG4sdCx0cnVlKX0sZG4uc29ydGVkTGFzdEluZGV4Qnk9ZnVuY3Rpb24obix0LHIpe3JldHVybiBCdChuLHQsdnIociksdHJ1ZSk7XG59LGRuLnNvcnRlZExhc3RJbmRleE9mPWZ1bmN0aW9uKG4sdCl7aWYobiYmbi5sZW5ndGgpe3ZhciByPVV0KG4sdCx0cnVlKS0xO2lmKHVlKG5bcl0sdCkpcmV0dXJuIHJ9cmV0dXJuLTF9LGRuLnN0YXJ0Q2FzZT1Zbyxkbi5zdGFydHNXaXRoPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4gbj1JZShuKSxyPUhuKEFlKHIpLDAsbi5sZW5ndGgpLG4ubGFzdEluZGV4T2YodCxyKT09cn0sZG4uc3VidHJhY3Q9ZnVuY3Rpb24obix0KXt2YXIgcjtyZXR1cm4gbiE9PVomJihyPW4pLHQhPT1aJiYocj1yPT09Wj90OnItdCkscn0sZG4uc3VtPUtlLGRuLnN1bUJ5PWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4mJm4ubGVuZ3RoP2Iobix2cih0KSk6Wn0sZG4udGVtcGxhdGU9ZnVuY3Rpb24obix0LHIpe3ZhciBlPWRuLnRlbXBsYXRlU2V0dGluZ3M7ciYmT3Iobix0LHIpJiYodD1aKSxuPUllKG4pLHQ9Qm8oe30sdCxlLFBuKSxyPUJvKHt9LHQuaW1wb3J0cyxlLmltcG9ydHMsUG4pO3ZhciB1LG8saT1DZShyKSxmPXcocixpKSxjPTA7XG5yPXQuaW50ZXJwb2xhdGV8fGJuO3ZhciBhPVwiX19wKz0nXCI7cj1ZZSgodC5lc2NhcGV8fGJuKS5zb3VyY2UrXCJ8XCIrci5zb3VyY2UrXCJ8XCIrKHI9PT1YP2xuOmJuKS5zb3VyY2UrXCJ8XCIrKHQuZXZhbHVhdGV8fGJuKS5zb3VyY2UrXCJ8JFwiLFwiZ1wiKTt2YXIgbD1cInNvdXJjZVVSTFwiaW4gdD9cIi8vIyBzb3VyY2VVUkw9XCIrdC5zb3VyY2VVUkwrXCJcXG5cIjpcIlwiO2lmKG4ucmVwbGFjZShyLGZ1bmN0aW9uKHQscixlLGksZixsKXtyZXR1cm4gZXx8KGU9aSksYSs9bi5zbGljZShjLGwpLnJlcGxhY2UoeG4sUyksciYmKHU9dHJ1ZSxhKz1cIicrX19lKFwiK3IrXCIpKydcIiksZiYmKG89dHJ1ZSxhKz1cIic7XCIrZitcIjtcXG5fX3ArPSdcIiksZSYmKGErPVwiJysoKF9fdD0oXCIrZStcIikpPT1udWxsPycnOl9fdCkrJ1wiKSxjPWwrdC5sZW5ndGgsdH0pLGErPVwiJztcIiwodD10LnZhcmlhYmxlKXx8KGE9XCJ3aXRoKG9iail7XCIrYStcIn1cIiksYT0obz9hLnJlcGxhY2UoUCxcIlwiKTphKS5yZXBsYWNlKFQsXCIkMVwiKS5yZXBsYWNlKEssXCIkMTtcIiksXG5hPVwiZnVuY3Rpb24oXCIrKHR8fFwib2JqXCIpK1wiKXtcIisodD9cIlwiOlwib2JqfHwob2JqPXt9KTtcIikrXCJ2YXIgX190LF9fcD0nJ1wiKyh1P1wiLF9fZT1fLmVzY2FwZVwiOlwiXCIpKyhvP1wiLF9faj1BcnJheS5wcm90b3R5cGUuam9pbjtmdW5jdGlvbiBwcmludCgpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKX1cIjpcIjtcIikrYStcInJldHVybiBfX3B9XCIsdD1RbyhmdW5jdGlvbigpe3JldHVybiBGdW5jdGlvbihpLGwrXCJyZXR1cm4gXCIrYSkuYXBwbHkoWixmKX0pLHQuc291cmNlPWEsYWUodCkpdGhyb3cgdDtyZXR1cm4gdH0sZG4udGltZXM9ZnVuY3Rpb24obix0KXtpZihuPUFlKG4pLDE+bnx8bj45MDA3MTk5MjU0NzQwOTkxKXJldHVybltdO3ZhciByPTQyOTQ5NjcyOTUsZT1BdShuLDQyOTQ5NjcyOTUpO2Zvcih0PUJyKHQpLG4tPTQyOTQ5NjcyOTUsZT14KGUsdCk7KytyPG47KXQocik7cmV0dXJuIGV9LGRuLnRvSW50ZWdlcj1BZSxkbi50b0xlbmd0aD1PZSxkbi50b0xvd2VyPWZ1bmN0aW9uKG4pe1xucmV0dXJuIEllKG4pLnRvTG93ZXJDYXNlKCl9LGRuLnRvTnVtYmVyPUVlLGRuLnRvU2FmZUludGVnZXI9ZnVuY3Rpb24obil7cmV0dXJuIEhuKEFlKG4pLC05MDA3MTk5MjU0NzQwOTkxLDkwMDcxOTkyNTQ3NDA5OTEpfSxkbi50b1N0cmluZz1JZSxkbi50b1VwcGVyPWZ1bmN0aW9uKG4pe3JldHVybiBJZShuKS50b1VwcGVyQ2FzZSgpfSxkbi50cmltPWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4obj1JZShuKSk/cnx8dD09PVo/bi5yZXBsYWNlKG9uLFwiXCIpOih0Kz1cIlwiKT8obj1uLm1hdGNoKE9uKSx0PXQubWF0Y2goT24pLG4uc2xpY2UoQShuLHQpLE8obix0KSsxKS5qb2luKFwiXCIpKTpuOm59LGRuLnRyaW1FbmQ9ZnVuY3Rpb24obix0LHIpe3JldHVybihuPUllKG4pKT9yfHx0PT09Wj9uLnJlcGxhY2UoY24sXCJcIik6KHQrPVwiXCIpPyhuPW4ubWF0Y2goT24pLG4uc2xpY2UoMCxPKG4sdC5tYXRjaChPbikpKzEpLmpvaW4oXCJcIikpOm46bn0sZG4udHJpbVN0YXJ0PWZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4obj1JZShuKSk/cnx8dD09PVo/bi5yZXBsYWNlKGZuLFwiXCIpOih0Kz1cIlwiKT8obj1uLm1hdGNoKE9uKSxcbm4uc2xpY2UoQShuLHQubWF0Y2goT24pKSkuam9pbihcIlwiKSk6bjpufSxkbi50cnVuY2F0ZT1mdW5jdGlvbihuLHQpe3ZhciByPTMwLGU9XCIuLi5cIjtpZihwZSh0KSl2YXIgdT1cInNlcGFyYXRvclwiaW4gdD90LnNlcGFyYXRvcjp1LHI9XCJsZW5ndGhcImluIHQ/QWUodC5sZW5ndGgpOnIsZT1cIm9taXNzaW9uXCJpbiB0P0llKHQub21pc3Npb24pOmU7bj1JZShuKTt2YXIgbz1uLmxlbmd0aDtpZihFbi50ZXN0KG4pKXZhciBpPW4ubWF0Y2goT24pLG89aS5sZW5ndGg7aWYocj49bylyZXR1cm4gbjtpZihvPXItRihlKSwxPm8pcmV0dXJuIGU7aWYocj1pP2kuc2xpY2UoMCxvKS5qb2luKFwiXCIpOm4uc2xpY2UoMCxvKSx1PT09WilyZXR1cm4gcitlO2lmKGkmJihvKz1yLmxlbmd0aC1vKSx5ZSh1KSl7aWYobi5zbGljZShvKS5zZWFyY2godSkpe3ZhciBmPXI7Zm9yKHUuZ2xvYmFsfHwodT1ZZSh1LnNvdXJjZSxJZShzbi5leGVjKHUpKStcImdcIikpLHUubGFzdEluZGV4PTA7aT11LmV4ZWMoZik7KXZhciBjPWkuaW5kZXg7XG5yPXIuc2xpY2UoMCxjPT09Wj9vOmMpfX1lbHNlIG4uaW5kZXhPZih1LG8pIT1vJiYodT1yLmxhc3RJbmRleE9mKHUpLHU+LTEmJihyPXIuc2xpY2UoMCx1KSkpO3JldHVybiByK2V9LGRuLnVuZXNjYXBlPWZ1bmN0aW9uKG4pe3JldHVybihuPUllKG4pKSYmSi50ZXN0KG4pP24ucmVwbGFjZShHLE0pOm59LGRuLnVuaXF1ZUlkPWZ1bmN0aW9uKG4pe3ZhciB0PSsrcnU7cmV0dXJuIEllKG4pK3R9LGRuLnVwcGVyQ2FzZT1Ibyxkbi51cHBlckZpcnN0PVZvLGRuLmVhY2g9R3IsZG4uZWFjaFJpZ2h0PVZyLGRuLmZpcnN0PUZyLHFlKGRuLGZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuIGl0KGRuLGZ1bmN0aW9uKHQscil7dHUuY2FsbChkbi5wcm90b3R5cGUscil8fChuW3JdPXQpfSksbn0oKSx7Y2hhaW46ZmFsc2V9KSxkbi5WRVJTSU9OPVwiNC4wLjFcIixlKFwiYmluZCBiaW5kS2V5IGN1cnJ5IGN1cnJ5UmlnaHQgcGFydGlhbCBwYXJ0aWFsUmlnaHRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24obil7ZG5bbl0ucGxhY2Vob2xkZXI9ZG47XG59KSxlKFtcImRyb3BcIixcInRha2VcIl0sZnVuY3Rpb24obix0KXt3bi5wcm90b3R5cGVbbl09ZnVuY3Rpb24ocil7dmFyIGU9dGhpcy5fX2ZpbHRlcmVkX187aWYoZSYmIXQpcmV0dXJuIG5ldyB3bih0aGlzKTtyPXI9PT1aPzE6d3UoQWUociksMCk7dmFyIHU9dGhpcy5jbG9uZSgpO3JldHVybiBlP3UuX190YWtlQ291bnRfXz1BdShyLHUuX190YWtlQ291bnRfXyk6dS5fX3ZpZXdzX18ucHVzaCh7c2l6ZTpBdShyLDQyOTQ5NjcyOTUpLHR5cGU6bisoMD51Ll9fZGlyX18/XCJSaWdodFwiOlwiXCIpfSksdX0sd24ucHJvdG90eXBlW24rXCJSaWdodFwiXT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5yZXZlcnNlKClbbl0odCkucmV2ZXJzZSgpfX0pLGUoW1wiZmlsdGVyXCIsXCJtYXBcIixcInRha2VXaGlsZVwiXSxmdW5jdGlvbihuLHQpe3ZhciByPXQrMSxlPTE9PXJ8fDM9PXI7d24ucHJvdG90eXBlW25dPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC5fX2l0ZXJhdGVlc19fLnB1c2goe1xuaXRlcmF0ZWU6dnIobiwzKSx0eXBlOnJ9KSx0Ll9fZmlsdGVyZWRfXz10Ll9fZmlsdGVyZWRfX3x8ZSx0fX0pLGUoW1wiaGVhZFwiLFwibGFzdFwiXSxmdW5jdGlvbihuLHQpe3ZhciByPVwidGFrZVwiKyh0P1wiUmlnaHRcIjpcIlwiKTt3bi5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tyXSgxKS52YWx1ZSgpWzBdfX0pLGUoW1wiaW5pdGlhbFwiLFwidGFpbFwiXSxmdW5jdGlvbihuLHQpe3ZhciByPVwiZHJvcFwiKyh0P1wiXCI6XCJSaWdodFwiKTt3bi5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fX2ZpbHRlcmVkX18/bmV3IHduKHRoaXMpOnRoaXNbcl0oMSl9fSksd24ucHJvdG90eXBlLmNvbXBhY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5maWx0ZXIoTmUpfSx3bi5wcm90b3R5cGUuZmluZD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5maWx0ZXIobikuaGVhZCgpfSx3bi5wcm90b3R5cGUuZmluZExhc3Q9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucmV2ZXJzZSgpLmZpbmQobik7XG59LHduLnByb3RvdHlwZS5pbnZva2VNYXA9ZWUoZnVuY3Rpb24obix0KXtyZXR1cm4gdHlwZW9mIG49PVwiZnVuY3Rpb25cIj9uZXcgd24odGhpcyk6dGhpcy5tYXAoZnVuY3Rpb24ocil7cmV0dXJuIHB0KHIsbix0KX0pfSksd24ucHJvdG90eXBlLnJlamVjdD1mdW5jdGlvbihuKXtyZXR1cm4gbj12cihuLDMpLHRoaXMuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiFuKHQpfSl9LHduLnByb3RvdHlwZS5zbGljZT1mdW5jdGlvbihuLHQpe249QWUobik7dmFyIHI9dGhpcztyZXR1cm4gci5fX2ZpbHRlcmVkX18mJihuPjB8fDA+dCk/bmV3IHduKHIpOigwPm4/cj1yLnRha2VSaWdodCgtbik6biYmKHI9ci5kcm9wKG4pKSx0IT09WiYmKHQ9QWUodCkscj0wPnQ/ci5kcm9wUmlnaHQoLXQpOnIudGFrZSh0LW4pKSxyKX0sd24ucHJvdG90eXBlLnRha2VSaWdodFdoaWxlPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnJldmVyc2UoKS50YWtlV2hpbGUobikucmV2ZXJzZSgpfSx3bi5wcm90b3R5cGUudG9BcnJheT1mdW5jdGlvbigpe1xucmV0dXJuIHRoaXMudGFrZSg0Mjk0OTY3Mjk1KX0saXQod24ucHJvdG90eXBlLGZ1bmN0aW9uKG4sdCl7dmFyIHI9L14oPzpmaWx0ZXJ8ZmluZHxtYXB8cmVqZWN0KXxXaGlsZSQvLnRlc3QodCksZT0vXig/OmhlYWR8bGFzdCkkLy50ZXN0KHQpLHU9ZG5bZT9cInRha2VcIisoXCJsYXN0XCI9PXQ/XCJSaWdodFwiOlwiXCIpOnRdLG89ZXx8L15maW5kLy50ZXN0KHQpO3UmJihkbi5wcm90b3R5cGVbdF09ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KG4pe3JldHVybiBuPXUuYXBwbHkoZG4sYShbbl0sZikpLGUmJmg/blswXTpufXZhciBpPXRoaXMuX193cmFwcGVkX18sZj1lP1sxXTphcmd1bWVudHMsYz1pIGluc3RhbmNlb2Ygd24sbD1mWzBdLHM9Y3x8V28oaSk7cyYmciYmdHlwZW9mIGw9PVwiZnVuY3Rpb25cIiYmMSE9bC5sZW5ndGgmJihjPXM9ZmFsc2UpO3ZhciBoPXRoaXMuX19jaGFpbl9fLHA9ISF0aGlzLl9fYWN0aW9uc19fLmxlbmd0aCxsPW8mJiFoLGM9YyYmIXA7cmV0dXJuIW8mJnM/KGk9Yz9pOm5ldyB3bih0aGlzKSxcbmk9bi5hcHBseShpLGYpLGkuX19hY3Rpb25zX18ucHVzaCh7ZnVuYzpUcixhcmdzOlt0XSx0aGlzQXJnOlp9KSxuZXcgam4oaSxoKSk6bCYmYz9uLmFwcGx5KHRoaXMsZik6KGk9dGhpcy50aHJ1KHQpLGw/ZT9pLnZhbHVlKClbMF06aS52YWx1ZSgpOmkpfSl9KSxlKFwicG9wIHB1c2ggc2hpZnQgc29ydCBzcGxpY2UgdW5zaGlmdFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihuKXt2YXIgdD1RZVtuXSxyPS9eKD86cHVzaHxzb3J0fHVuc2hpZnQpJC8udGVzdChuKT9cInRhcFwiOlwidGhydVwiLGU9L14oPzpwb3B8c2hpZnQpJC8udGVzdChuKTtkbi5wcm90b3R5cGVbbl09ZnVuY3Rpb24oKXt2YXIgbj1hcmd1bWVudHM7cmV0dXJuIGUmJiF0aGlzLl9fY2hhaW5fXz90LmFwcGx5KHRoaXMudmFsdWUoKSxuKTp0aGlzW3JdKGZ1bmN0aW9uKHIpe3JldHVybiB0LmFwcGx5KHIsbil9KX19KSxpdCh3bi5wcm90b3R5cGUsZnVuY3Rpb24obix0KXt2YXIgcj1kblt0XTtpZihyKXt2YXIgZT1yLm5hbWUrXCJcIjsoRnVbZV18fChGdVtlXT1bXSkpLnB1c2goe1xubmFtZTp0LGZ1bmM6cn0pfX0pLEZ1W3VyKFosMikubmFtZV09W3tuYW1lOlwid3JhcHBlclwiLGZ1bmM6Wn1dLHduLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3ZhciBuPW5ldyB3bih0aGlzLl9fd3JhcHBlZF9fKTtyZXR1cm4gbi5fX2FjdGlvbnNfXz1QdCh0aGlzLl9fYWN0aW9uc19fKSxuLl9fZGlyX189dGhpcy5fX2Rpcl9fLG4uX19maWx0ZXJlZF9fPXRoaXMuX19maWx0ZXJlZF9fLG4uX19pdGVyYXRlZXNfXz1QdCh0aGlzLl9faXRlcmF0ZWVzX18pLG4uX190YWtlQ291bnRfXz10aGlzLl9fdGFrZUNvdW50X18sbi5fX3ZpZXdzX189UHQodGhpcy5fX3ZpZXdzX18pLG59LHduLnByb3RvdHlwZS5yZXZlcnNlPWZ1bmN0aW9uKCl7aWYodGhpcy5fX2ZpbHRlcmVkX18pe3ZhciBuPW5ldyB3bih0aGlzKTtuLl9fZGlyX189LTEsbi5fX2ZpbHRlcmVkX189dHJ1ZX1lbHNlIG49dGhpcy5jbG9uZSgpLG4uX19kaXJfXyo9LTE7cmV0dXJuIG59LHduLnByb3RvdHlwZS52YWx1ZT1mdW5jdGlvbigpe1xudmFyIG4sdD10aGlzLl9fd3JhcHBlZF9fLnZhbHVlKCkscj10aGlzLl9fZGlyX18sZT1Xbyh0KSx1PTA+cixvPWU/dC5sZW5ndGg6MDtuPW87Zm9yKHZhciBpPXRoaXMuX192aWV3c19fLGY9MCxjPS0xLGE9aS5sZW5ndGg7KytjPGE7KXt2YXIgbD1pW2NdLHM9bC5zaXplO3N3aXRjaChsLnR5cGUpe2Nhc2VcImRyb3BcIjpmKz1zO2JyZWFrO2Nhc2VcImRyb3BSaWdodFwiOm4tPXM7YnJlYWs7Y2FzZVwidGFrZVwiOm49QXUobixmK3MpO2JyZWFrO2Nhc2VcInRha2VSaWdodFwiOmY9d3UoZixuLXMpfX1pZihuPXtzdGFydDpmLGVuZDpufSxpPW4uc3RhcnQsZj1uLmVuZCxuPWYtaSx1PXU/ZjppLTEsaT10aGlzLl9faXRlcmF0ZWVzX18sZj1pLmxlbmd0aCxjPTAsYT1BdShuLHRoaXMuX190YWtlQ291bnRfXyksIWV8fDIwMD5vfHxvPT1uJiZhPT1uKXJldHVybiBNdCh0LHRoaXMuX19hY3Rpb25zX18pO2U9W107bjpmb3IoO24tLSYmYT5jOyl7Zm9yKHUrPXIsbz0tMSxsPXRbdV07KytvPGY7KXt2YXIgaD1pW29dLHM9aC50eXBlLGg9KDAsXG5oLml0ZXJhdGVlKShsKTtpZigyPT1zKWw9aDtlbHNlIGlmKCFoKXtpZigxPT1zKWNvbnRpbnVlIG47YnJlYWsgbn19ZVtjKytdPWx9cmV0dXJuIGV9LGRuLnByb3RvdHlwZS5hdD1fbyxkbi5wcm90b3R5cGUuY2hhaW49ZnVuY3Rpb24oKXtyZXR1cm4gUHIodGhpcyl9LGRuLnByb3RvdHlwZS5jb21taXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGpuKHRoaXMudmFsdWUoKSx0aGlzLl9fY2hhaW5fXyl9LGRuLnByb3RvdHlwZS5mbGF0TWFwPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLm1hcChuKS5mbGF0dGVuKCl9LGRuLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7dGhpcy5fX3ZhbHVlc19fPT09WiYmKHRoaXMuX192YWx1ZXNfXz13ZSh0aGlzLnZhbHVlKCkpKTt2YXIgbj10aGlzLl9faW5kZXhfXz49dGhpcy5fX3ZhbHVlc19fLmxlbmd0aCx0PW4/Wjp0aGlzLl9fdmFsdWVzX19bdGhpcy5fX2luZGV4X18rK107cmV0dXJue2RvbmU6bix2YWx1ZTp0fX0sZG4ucHJvdG90eXBlLnBsYW50PWZ1bmN0aW9uKG4pe1xuZm9yKHZhciB0LHI9dGhpcztyIGluc3RhbmNlb2YgbW47KXt2YXIgZT16cihyKTtlLl9faW5kZXhfXz0wLGUuX192YWx1ZXNfXz1aLHQ/dS5fX3dyYXBwZWRfXz1lOnQ9ZTt2YXIgdT1lLHI9ci5fX3dyYXBwZWRfX31yZXR1cm4gdS5fX3dyYXBwZWRfXz1uLHR9LGRuLnByb3RvdHlwZS5yZXZlcnNlPWZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fX3dyYXBwZWRfXztyZXR1cm4gbiBpbnN0YW5jZW9mIHduPyh0aGlzLl9fYWN0aW9uc19fLmxlbmd0aCYmKG49bmV3IHduKHRoaXMpKSxuPW4ucmV2ZXJzZSgpLG4uX19hY3Rpb25zX18ucHVzaCh7ZnVuYzpUcixhcmdzOltacl0sdGhpc0FyZzpafSksbmV3IGpuKG4sdGhpcy5fX2NoYWluX18pKTp0aGlzLnRocnUoWnIpfSxkbi5wcm90b3R5cGUudG9KU09OPWRuLnByb3RvdHlwZS52YWx1ZU9mPWRuLnByb3RvdHlwZS52YWx1ZT1mdW5jdGlvbigpe3JldHVybiBNdCh0aGlzLl9fd3JhcHBlZF9fLHRoaXMuX19hY3Rpb25zX18pfSxfdSYmKGRuLnByb3RvdHlwZVtfdV09S3IpLFxuZG59dmFyIFosRD0xLzAscT1OYU4sUD0vXFxiX19wXFwrPScnOy9nLFQ9L1xcYihfX3BcXCs9KScnXFwrL2csSz0vKF9fZVxcKC4qP1xcKXxcXGJfX3RcXCkpXFwrJyc7L2csRz0vJig/OmFtcHxsdHxndHxxdW90fCMzOXwjOTYpOy9nLFY9L1smPD5cIidgXS9nLEo9UmVnRXhwKEcuc291cmNlKSxZPVJlZ0V4cChWLnNvdXJjZSksSD0vPCUtKFtcXHNcXFNdKz8pJT4vZyxRPS88JShbXFxzXFxTXSs/KSU+L2csWD0vPCU9KFtcXHNcXFNdKz8pJT4vZyxubj0vXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLHRuPS9eXFx3KiQvLHJuPS9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdL2csZW49L1tcXFxcXiQuKis/KClbXFxde318XS9nLHVuPVJlZ0V4cChlbi5zb3VyY2UpLG9uPS9eXFxzK3xcXHMrJC9nLGZuPS9eXFxzKy8sY249L1xccyskLyxhbj0vXFxcXChcXFxcKT8vZyxsbj0vXFwkXFx7KFteXFxcXH1dKig/OlxcXFwuW15cXFxcfV0qKSopXFx9L2csc249L1xcdyokLyxobj0vXjB4L2kscG49L15bLStdMHhbMC05YS1mXSskL2ksX249L14wYlswMV0rJC9pLGduPS9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC8sdm49L14wb1swLTddKyQvaSxkbj0vXig/OjB8WzEtOV1cXGQqKSQvLHluPS9bXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZVxceGRmLVxceGY2XFx4ZjgtXFx4ZmZdL2csYm49LygkXikvLHhuPS9bJ1xcblxcclxcdTIwMjhcXHUyMDI5XFxcXF0vZyxtbj1cIltcXFxcdWZlMGVcXFxcdWZlMGZdPyg/OltcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyM1xcXFx1MjBkMC1cXFxcdTIwZjBdfFxcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXSk/KD86XFxcXHUyMDBkKD86W15cXFxcdWQ4MDAtXFxcXHVkZmZmXXwoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9fFtcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXSlbXFxcXHVmZTBlXFxcXHVmZTBmXT8oPzpbXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjNcXFxcdTIwZDAtXFxcXHUyMGYwXXxcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0pPykqXCIsam49XCIoPzpbXFxcXHUyNzAwLVxcXFx1MjdiZl18KD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfXxbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0pXCIrbW4sd249XCIoPzpbXlxcXFx1ZDgwMC1cXFxcdWRmZmZdW1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMF0/fFtcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyM1xcXFx1MjBkMC1cXFxcdTIwZjBdfCg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn18W1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdfFtcXFxcdWQ4MDAtXFxcXHVkZmZmXSlcIixBbj1SZWdFeHAoXCJbXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjNcXFxcdTIwZDAtXFxcXHUyMGYwXVwiLFwiZ1wiKSxPbj1SZWdFeHAoXCJcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0oPz1cXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0pfFwiK3duK21uLFwiZ1wiKSxFbj1SZWdFeHAoXCJbXFxcXHUyMDBkXFxcXHVkODAwLVxcXFx1ZGZmZlxcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXFxcXHUyMGQwLVxcXFx1MjBmMFxcXFx1ZmUwZVxcXFx1ZmUwZl1cIiksa249L1thLXpBLVowLTldKy9nLEluPVJlZ0V4cChbXCJbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXT9bYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmXSsoPz1bXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmN1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZlxcXFx1MjAxOFxcXFx1MjAxOVxcXFx1MjAxY1xcXFx1MjAxZCBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwXXxbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXXwkKXwoPzpbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXXxbXlxcXFx1ZDgwMC1cXFxcdWRmZmZcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3XFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmXFxcXHUyMDE4XFxcXHUyMDE5XFxcXHUyMDFjXFxcXHUyMDFkIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBcXFxcZCtcXFxcdTI3MDAtXFxcXHUyN2JmYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSkrKD89W1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmZcXFxcdTIwMThcXFxcdTIwMTlcXFxcdTIwMWNcXFxcdTIwMWQgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMF18W0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0oPzpbYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmXXxbXlxcXFx1ZDgwMC1cXFxcdWRmZmZcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3XFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmXFxcXHUyMDE4XFxcXHUyMDE5XFxcXHUyMDFjXFxcXHUyMDFkIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDBcXFxcZCtcXFxcdTI3MDAtXFxcXHUyN2JmYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSl8JCl8W0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0/KD86W2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZl18W15cXFxcdWQ4MDAtXFxcXHVkZmZmXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmN1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZlxcXFx1MjAxOFxcXFx1MjAxOVxcXFx1MjAxY1xcXFx1MjAxZCBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwXFxcXGQrXFxcXHUyNzAwLVxcXFx1MjdiZmEtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZkEtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZV0pK3xbQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlXSt8XFxcXGQrXCIsam5dLmpvaW4oXCJ8XCIpLFwiZ1wiKSxSbj0vW2Etel1bQS1aXXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS8sU249XCJBcnJheSBEYXRlIEVycm9yIEZsb2F0MzJBcnJheSBGbG9hdDY0QXJyYXkgRnVuY3Rpb24gSW50OEFycmF5IEludDE2QXJyYXkgSW50MzJBcnJheSBNYXAgTWF0aCBPYmplY3QgUmVmbGVjdCBSZWdFeHAgU2V0IFN0cmluZyBTeW1ib2wgVHlwZUVycm9yIFVpbnQ4QXJyYXkgVWludDhDbGFtcGVkQXJyYXkgVWludDE2QXJyYXkgVWludDMyQXJyYXkgV2Vha01hcCBfIGNsZWFyVGltZW91dCBpc0Zpbml0ZSBwYXJzZUludCBzZXRUaW1lb3V0XCIuc3BsaXQoXCIgXCIpLFduPXt9O1xuV25bXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09V25bXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIl09V25bXCJbb2JqZWN0IEludDhBcnJheV1cIl09V25bXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPVduW1wiW29iamVjdCBJbnQzMkFycmF5XVwiXT1XbltcIltvYmplY3QgVWludDhBcnJheV1cIl09V25bXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1XbltcIltvYmplY3QgVWludDE2QXJyYXldXCJdPVduW1wiW29iamVjdCBVaW50MzJBcnJheV1cIl09dHJ1ZSxXbltcIltvYmplY3QgQXJndW1lbnRzXVwiXT1XbltcIltvYmplY3QgQXJyYXldXCJdPVduW1wiW29iamVjdCBBcnJheUJ1ZmZlcl1cIl09V25bXCJbb2JqZWN0IEJvb2xlYW5dXCJdPVduW1wiW29iamVjdCBEYXRlXVwiXT1XbltcIltvYmplY3QgRXJyb3JdXCJdPVduW1wiW29iamVjdCBGdW5jdGlvbl1cIl09V25bXCJbb2JqZWN0IE1hcF1cIl09V25bXCJbb2JqZWN0IE51bWJlcl1cIl09V25bXCJbb2JqZWN0IE9iamVjdF1cIl09V25bXCJbb2JqZWN0IFJlZ0V4cF1cIl09V25bXCJbb2JqZWN0IFNldF1cIl09V25bXCJbb2JqZWN0IFN0cmluZ11cIl09V25bXCJbb2JqZWN0IFdlYWtNYXBdXCJdPWZhbHNlO1xudmFyIENuPXt9O0NuW1wiW29iamVjdCBBcmd1bWVudHNdXCJdPUNuW1wiW29iamVjdCBBcnJheV1cIl09Q25bXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiXT1DbltcIltvYmplY3QgQm9vbGVhbl1cIl09Q25bXCJbb2JqZWN0IERhdGVdXCJdPUNuW1wiW29iamVjdCBGbG9hdDMyQXJyYXldXCJdPUNuW1wiW29iamVjdCBGbG9hdDY0QXJyYXldXCJdPUNuW1wiW29iamVjdCBJbnQ4QXJyYXldXCJdPUNuW1wiW29iamVjdCBJbnQxNkFycmF5XVwiXT1DbltcIltvYmplY3QgSW50MzJBcnJheV1cIl09Q25bXCJbb2JqZWN0IE1hcF1cIl09Q25bXCJbb2JqZWN0IE51bWJlcl1cIl09Q25bXCJbb2JqZWN0IE9iamVjdF1cIl09Q25bXCJbb2JqZWN0IFJlZ0V4cF1cIl09Q25bXCJbb2JqZWN0IFNldF1cIl09Q25bXCJbb2JqZWN0IFN0cmluZ11cIl09Q25bXCJbb2JqZWN0IFN5bWJvbF1cIl09Q25bXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCJdPUNuW1wiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIl09Q25bXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiXT1DbltcIltvYmplY3QgVWludDMyQXJyYXldXCJdPXRydWUsXG5DbltcIltvYmplY3QgRXJyb3JdXCJdPUNuW1wiW29iamVjdCBGdW5jdGlvbl1cIl09Q25bXCJbb2JqZWN0IFdlYWtNYXBdXCJdPWZhbHNlO3ZhciBVbj17XCJcXHhjMFwiOlwiQVwiLFwiXFx4YzFcIjpcIkFcIixcIlxceGMyXCI6XCJBXCIsXCJcXHhjM1wiOlwiQVwiLFwiXFx4YzRcIjpcIkFcIixcIlxceGM1XCI6XCJBXCIsXCJcXHhlMFwiOlwiYVwiLFwiXFx4ZTFcIjpcImFcIixcIlxceGUyXCI6XCJhXCIsXCJcXHhlM1wiOlwiYVwiLFwiXFx4ZTRcIjpcImFcIixcIlxceGU1XCI6XCJhXCIsXCJcXHhjN1wiOlwiQ1wiLFwiXFx4ZTdcIjpcImNcIixcIlxceGQwXCI6XCJEXCIsXCJcXHhmMFwiOlwiZFwiLFwiXFx4YzhcIjpcIkVcIixcIlxceGM5XCI6XCJFXCIsXCJcXHhjYVwiOlwiRVwiLFwiXFx4Y2JcIjpcIkVcIixcIlxceGU4XCI6XCJlXCIsXCJcXHhlOVwiOlwiZVwiLFwiXFx4ZWFcIjpcImVcIixcIlxceGViXCI6XCJlXCIsXCJcXHhjY1wiOlwiSVwiLFwiXFx4Y2RcIjpcIklcIixcIlxceGNlXCI6XCJJXCIsXCJcXHhjZlwiOlwiSVwiLFwiXFx4ZWNcIjpcImlcIixcIlxceGVkXCI6XCJpXCIsXCJcXHhlZVwiOlwiaVwiLFwiXFx4ZWZcIjpcImlcIixcIlxceGQxXCI6XCJOXCIsXCJcXHhmMVwiOlwiblwiLFwiXFx4ZDJcIjpcIk9cIixcIlxceGQzXCI6XCJPXCIsXCJcXHhkNFwiOlwiT1wiLFwiXFx4ZDVcIjpcIk9cIixcIlxceGQ2XCI6XCJPXCIsXG5cIlxceGQ4XCI6XCJPXCIsXCJcXHhmMlwiOlwib1wiLFwiXFx4ZjNcIjpcIm9cIixcIlxceGY0XCI6XCJvXCIsXCJcXHhmNVwiOlwib1wiLFwiXFx4ZjZcIjpcIm9cIixcIlxceGY4XCI6XCJvXCIsXCJcXHhkOVwiOlwiVVwiLFwiXFx4ZGFcIjpcIlVcIixcIlxceGRiXCI6XCJVXCIsXCJcXHhkY1wiOlwiVVwiLFwiXFx4ZjlcIjpcInVcIixcIlxceGZhXCI6XCJ1XCIsXCJcXHhmYlwiOlwidVwiLFwiXFx4ZmNcIjpcInVcIixcIlxceGRkXCI6XCJZXCIsXCJcXHhmZFwiOlwieVwiLFwiXFx4ZmZcIjpcInlcIixcIlxceGM2XCI6XCJBZVwiLFwiXFx4ZTZcIjpcImFlXCIsXCJcXHhkZVwiOlwiVGhcIixcIlxceGZlXCI6XCJ0aFwiLFwiXFx4ZGZcIjpcInNzXCJ9LEJuPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiMzOTtcIixcImBcIjpcIiYjOTY7XCJ9LHpuPXtcIiZhbXA7XCI6XCImXCIsXCImbHQ7XCI6XCI8XCIsXCImZ3Q7XCI6XCI+XCIsXCImcXVvdDtcIjonXCInLFwiJiMzOTtcIjpcIidcIixcIiYjOTY7XCI6XCJgXCJ9LExuPXtcImZ1bmN0aW9uXCI6dHJ1ZSxvYmplY3Q6dHJ1ZX0sJG49e1wiXFxcXFwiOlwiXFxcXFwiLFwiJ1wiOlwiJ1wiLFwiXFxuXCI6XCJuXCIsXCJcXHJcIjpcInJcIixcIlxcdTIwMjhcIjpcInUyMDI4XCIsXCJcXHUyMDI5XCI6XCJ1MjAyOVwiXG59LEZuPXBhcnNlRmxvYXQsTW49cGFyc2VJbnQsTm49TG5bdHlwZW9mIGV4cG9ydHNdJiZleHBvcnRzJiYhZXhwb3J0cy5ub2RlVHlwZT9leHBvcnRzOm51bGwsWm49TG5bdHlwZW9mIG1vZHVsZV0mJm1vZHVsZSYmIW1vZHVsZS5ub2RlVHlwZT9tb2R1bGU6bnVsbCxEbj1FKExuW3R5cGVvZiBzZWxmXSYmc2VsZikscW49RShMblt0eXBlb2Ygd2luZG93XSYmd2luZG93KSxQbj1abiYmWm4uZXhwb3J0cz09PU5uP05uOm51bGwsVG49RShMblt0eXBlb2YgdGhpc10mJnRoaXMpLEtuPUUoTm4mJlpuJiZ0eXBlb2YgZ2xvYmFsPT1cIm9iamVjdFwiJiZnbG9iYWwpfHxxbiE9PShUbiYmVG4ud2luZG93KSYmcW58fERufHxUbnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLEduPU4oKTsocW58fERufHx7fSkuXz1Hbix0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBkZWZpbmUuYW1kPT1cIm9iamVjdFwiJiZkZWZpbmUuYW1kPyBkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gR259KTpObiYmWm4/KFBuJiYoKFpuLmV4cG9ydHM9R24pLl89R24pLFxuTm4uXz1Hbik6S24uXz1Hbn0pLmNhbGwodGhpcyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

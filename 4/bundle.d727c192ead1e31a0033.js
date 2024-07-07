(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=m;var $="$isDayjsObject",g=function(e){return e instanceof w||!(!e||!e[$])},M=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;b[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},D=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},S=_;S.l=M,S.i=g,S.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return D(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<D(e)},v.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,c=!!S.u(t)||t,f=S.p(e),h=function(e,t){var i=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},p=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case u:return c?h(1,0):h(31,11);case l:return c?h(1,v):h(0,v+1);case o:var b=this.$locale().weekStart||0,$=(m<b?m+7:m)-b;return h(c?_-$:_+(6-$),v);case a:case d:return p(y+"Hours",0);case r:return p(y+"Minutes",1);case s:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var o,c=S.p(e),f="set"+(this.$u?"UTC":""),h=(o={},o[a]=f+"Date",o[d]=f+"Date",o[l]=f+"Month",o[u]=f+"FullYear",o[r]=f+"Hours",o[s]=f+"Minutes",o[i]=f+"Seconds",o[n]=f+"Milliseconds",o)[c],p=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[h](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[S.p(e)]()},v.add=function(n,c){var d,f=this;n=Number(n);var h=S.p(c),p=function(e){var t=D(f);return S.w(t.date(t.date()+Math.round(e*n)),f)};if(h===l)return this.set(l,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===a)return p(1);if(h===o)return p(7);var m=(d={},d[s]=e,d[r]=t,d[i]=1e3,d)[h]||1,v=this.$d.getTime()+n*m;return S.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},h=function(e){return S.s(r%12||12,e,"0")},m=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(p,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(r);case"HH":return S.s(r,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(r,a,!0);case"A":return m(r,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var h,p=this,m=S.p(d),v=D(n),_=(v.utcOffset()-this.utcOffset())*e,y=this-v,b=function(){return S.m(p,v)};switch(m){case u:h=b()/12;break;case l:h=b();break;case c:h=b()/3;break;case o:h=(y-_)/6048e5;break;case a:h=(y-_)/864e5;break;case r:h=y/t;break;case s:h=y/e;break;case i:h=y/1e3;break;default:h=y}return f?h:S.a(h)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return b[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=M(e,t,!0);return i&&(n.$L=i),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),k=w.prototype;return D.prototype=k,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,w,D),e.$i=!0),D},D.locale=M,D.isDayjs=g,D.unix=function(e){return D(1e3*e)},D.en=b[y],D.Ls=b,D.p={},D}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,i=6e4,s=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,l=2628e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:o,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof y},f=function(e,t,n){return new y(e,n,t.$l)},h=function(e){return t.p(e)+"s"},p=function(e){return e<0},m=function(e){return p(e)?Math.ceil(e):Math.floor(e)},v=function(e){return Math.abs(e)},_=function(e,t){return e?p(e)?{negative:!0,format:""+v(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function p(e,t,n){var i=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return f(e*u[h(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){i.$d[h(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var s=e.match(c);if(s){var r=s.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=m(e/o),e%=o,this.$d.months=m(e/l),e%=l,this.$d.days=m(e/r),e%=r,this.$d.hours=m(e/s),e%=s,this.$d.minutes=m(e/i),e%=i,this.$d.seconds=m(e/n),e%=n,this.$d.milliseconds=e},v.toISOString=function(){var e=_(this.$d.years,"Y"),t=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3,a=Math.round(1e3*a)/1e3);var o=_(a,"S"),l=e.negative||t.negative||i.negative||s.negative||r.negative||o.negative,c=s.format||r.format||o.format?"T":"",u=(l?"-":"")+"P"+e.format+t.format+i.format+c+s.format+r.format+o.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(e,t){return t||String(i[e])}))},v.as=function(e){return this.$ms/u[h(e)]},v.get=function(e){var t=this.$ms,n=h(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?m(t/u[n]):this.$d[n],t||0},v.add=function(e,t,n){var i;return i=t?e*u[h(t)]:d(e)?e.$ms:f(e,this).$ms,f(this.$ms+i*(n?-1:1),this)},v.subtract=function(e,t){return this.add(e,t,!0)},v.locale=function(e){var t=this.clone();return t.$l=e,t},v.clone=function(){return f(this.$ms,this)},v.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}(),b=function(e,t,n){return e.add(t.years()*n,"y").add(t.months()*n,"M").add(t.days()*n,"d").add(t.hours()*n,"h").add(t.minutes()*n,"m").add(t.seconds()*n,"s").add(t.milliseconds()*n,"ms")};return function(n,i,s){e=s,t=s().$utils(),s.duration=function(e,t){var n=s.locale();return f(e,{$l:n},t)},s.isDuration=d;var r=i.prototype.add,a=i.prototype.subtract;i.prototype.add=function(e,t){return d(e)?b(this,e,1):r.bind(this)(e,t)},i.prototype.subtract=function(e,t){return d(e)?b(this,e,-1):a.bind(this)(e,t)}}}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}const i="HH:mm",s=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];var r=n(484),a=n.n(r),o=n(646),l=n.n(o);a().extend(l());const c=e=>e[Math.floor(Math.random()*e.length)],u=e=>[...new Set(Array.from({length:c(e)+1},(()=>e[c(e)])))],d=e=>Math.floor(Math.random*e),f=(e,t)=>new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime())),h=(e,t)=>e?a()(e).format(t):"",p=[{id:"cfe416cq-10xa-ye10-8077-2fs9a01edca1",description:"San Diego is a large coastal California city located in the southwestern corner of the continental United States. The population is close to 1,300,000, making it the second largest city in California and the eighth largest city in the nation, by population.",name:"San Diego",pictures:[{src:`https://loremflickr.com/248/152?random=${d(50)}`,description:"San Diego building"}]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edca2",description:"Denver  is a consolidated city and county, the capital, and most populous city of the U.S. state of Colorado. It is the 19th-most populous city in the United States and the fifth most populous state capital.",name:"Denver",pictures:[{src:`https://loremflickr.com/248/152?random=${d(50)}`,description:"Denver attractions"},{src:`https://loremflickr.com/248/152?random=${d(50)}`,description:"Denver buildings"}]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edca3",description:"Los Angeles is the largest city in the state of California, the second most populous city in the United States after New York City, and one of the worlds most populous megacities.",name:" Los Angeles",pictures:[{src:`https://loremflickr.com/248/152?random=${d(50)}`,description:"Los Angeles attractions"},{src:`https://loremflickr.com/248/152?random=${d(50)}`,description:"Los Angeles buildings"}]},{id:"cfe416cq-10xa-ye10-8077-2fs9a01edca4",description:"Seattle is a major port city and the largest city in the State of Washington. The major economic, cultural and educational center in the region, Seattle is the county seat of King County.",name:"Seattle",pictures:[]}],m=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade to a business class",price:d(600)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Order Uber",price:d(400)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa33",title:"Choose a client radio station",price:d(300)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa34",title:"Luggage assistance",price:d(100)}]},{type:"bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa41",title:"Wi-Fi",price:d(400)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa42",title:"Extra baggage",price:d(600)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa43",title:"Complimentary snacks and drinks",price:d(400)}]},{type:"train",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa51",title:"Wi-Fi",price:d(300)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa52",title:"Complimentary snacks and drinks",price:d(100)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa53",title:"Priority boarding",price:d(500)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa54",title:"Meal service",price:d(100)}]},{type:"ship",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa61",title:"Meal service",price:d(100)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa62",title:"Audio Guide",price:d(100)}]},{type:"drive",offers:[]},{type:"flight",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa71",title:"Travel by train",price:d(100)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa72",title:"Switch to comfort class",price:d(300)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa73",title:"Priority boarding",price:d(200)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa74",title:"Choose seats",price:d(500)}]},{type:"check-in",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa81",title:"Early Check-in",price:d(600)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa82",title:"Late checkout",price:d(250)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa83",title:"Room upgrade",price:d(100)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa84",title:"Add breakfast",price:d(300)}]},{type:"sightseeing",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa91",title:"Book tickets",price:d(500)},{id:"b4c3e4e6-9053-42ce-b747-e281314baa92",title:"Lunch in city",price:d(100)}]},{type:"restaurant",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa101",title:"Tasting Menu",price:d(200)}]}],v=e=>{const t=m.find((t=>t.type===e)).offers.map((e=>e.id));return u(t,d(t.length))},_=()=>{const e=u(s),t=p[d(p.length)].id;return{id:crypto.randomUUID(),basePrice:d(500),dateFrom:f(new Date(2024,7,7),new Date(2024,7,10)),dateTo:f(new Date(2024,7,10),new Date(2024,7,15)),destination:t,isFavorite:Math.random()>=.5,offers:v(e),type:e}},y=e=>e.trim().split(" ").slice(-1);class b{constructor({point:e,destinations:t,offers:n}){this.point=e,this.destinations=t,this.offers=n}getTemplate(){return((e,t,n)=>{const{id:r,type:a,dateFrom:o,dateTo:l,destination:c}=e,{description:u,pictures:d}=c,f=n.filter((e=>e.type===a));return`\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-${r}">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${a}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${r}" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n              ${p=s,m=a,p.map((e=>{return`<div class="event__type-item">\n      <input id="event-type-${e}-1"\n      class="event__type-input  visually-hidden"\n      type="radio"\n      name="event-type"\n      value=${e}\n      ${m===e?"checked":""}>\n      <label class="event__type-label\n        event__type-label--${e}"\n        for="event-type-${e}-1">${t=e,t[0].toUpperCase()+t.slice(1)}</label>\n  </div>`;var t})).join("")}\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-${r}">\n            ${a}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${c.name} list="destination-list-1">\n          <datalist id="destination-list-1">\n            ${(e=>e.map((e=>`<option value=${e.name}></option>`)).join(""))(t)}\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value=${h(o,i)}>\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${h(l,i)}">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-${r}">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      <section class="event__details">\n        ${(e=>`<section class="event__section  event__section--offers">\n    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n    <div class="event__available-offers">\n      ${(e=>e.map((e=>`<div class="event__offer-selector">\n      <input class="event__offer-checkbox\n        visually-hidden"\n        id="event-offer-${y(e.offers.title)}-1"\n        type="checkbox"\n        name="event-offer-${y(e.offers.title)}"\n        checked>\n      <label class="event__offer-label"\n        for="event-offer-${y(e.offers.title)}-1">\n        <span class="event__offer-title">${e.offers.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.offers.price}</span>\n      </label>\n    </div>`)).join(""))(e)}\n    </div>\n  </section>`)(f)}\n        ${((e,t)=>`<section class="event__section  event__section--destination">\n  <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n  <p class="event__destination-description">${e}</p>\n  <div class="event__photos-container">\n    <div class="event__photos-tape">\n      ${(e=>e.map((e=>`<img class="event__photo"\n      src=${e.src}\n      alt="${e.description}">\n    </img>`)).join(""))(t)}\n    </div>\n  </div>\n</section>`)(u,d)}\n      </section>\n    </form>\n  `;var p,m})(this.point,this.destinations,this.offers)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class ${getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class g{getTemplate(){return'\n          <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>\n        '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class M{constructor({point:e,offers:t,destination:n}){this.point=e,this.offers=t,this.destination=n}getTemplate(){return(e=>{const{type:t,destination:n,dateFrom:s,dateTo:r,isFavorite:o,price:l,offers:c}=e,u=c.map((e=>e?`<li class="event__offer">\n      <span class="event__offer-title">${e.offers.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.offers.price}</span>\n    </li>`:"")).join("");return`\n          <li class="trip-events__item">\n            <div class="event">\n              <time class="event__date" datetime=${s}>${h(s,"MMM DD")}</time>\n              <div class="event__type">\n                <img class="event__type-icon" width="42" height="42" src="img/icons/${t}.png" alt="Event type icon">\n              </div>\n              <h3 class="event__title">${t} ${n.name}</h3>\n              <div class="event__schedule">\n                <p class="event__time">\n                  <time class="event__start-time" datetime=${r}>${h(r,i)}</time>\n                  &mdash;\n                  <time class="event__end-time" datetime=${r}>${h(r,i)}</time>\n                </p>\n                <p class="event__duration">${((e,t)=>{const n=a()(t).diff(a()(e));return a().duration(n,"ms").format("DD[d] HH[h] mm[m]")})(s,r)}</p>\n              </div>\n              <p class="event__price">\n                &euro;&nbsp;<span class="event__price-value">${l}</span>\n              </p>\n              <h4 class="visually-hidden">Offers:</h4>\n              <ul class="event__selected-offers">\n              ${u}\n              </ul>\n              <button class="event__favorite-btn ${o?"event__favorite-btn--active":""}" type="button">\n                <span class="visually-hidden">Add to favorite</span>\n                <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                  <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                </svg>\n              </button>\n              <button class="event__rollup-btn" type="button">\n                <span class="visually-hidden">Open event</span>\n              </button>\n            </div>\n          </li>\n        `})(this.point,this.offers,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const D=document.querySelector(".page-body__page-main"),S=document.querySelector(".trip-controls__filters"),w=new class{points=Array.from({length:3},_);destinations=p;offers=m;getPoints(){return this.points}getDestinations(){return this.destinations}getDestinationById(e){return this.getDestinations().find((t=>t.id===e))}getOffers(){return this.offers}getOffersById(e,t){return this.getOffersByType(e).offers.filter((e=>t.find((t=>e.id===t))))}getOffersByType(e){return this.getOffers().find((t=>t.type===e))}},k=new class{tripListComponent=new $;constructor({listContainer:e,pointsModel:t}){this.listContainer=e,this.pointsModel=t}init(){this.points=[...this.pointsModel.getPoints()],this.offers=[...this.pointsModel.getOffers()],this.destinations=[...this.pointsModel.getDestinations()],t(new g,this.listContainer),t(this.tripListComponent,this.listContainer),t(new b({point:this.points[0],offers:this.offers,destinations:this.destinations}),this.tripEventListElement.getElement());for(let e=1;e<this.points.length;e++)t(new M({point:this.points[e],offers:this.offers,destinations:this.destinations}),this.listContainer.getElement())}}({listContainer:D,pointsModel:w});t(new class{getTemplate(){return'\n          <form class="trip-filters" action="#" method="get">\n            <div class="trip-filters__filter">\n              <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n              <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n            </div>\n\n            <div class="trip-filters__filter">\n              <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n              <label class="trip-filters__filter-label" for="filter-future">Future</label>\n            </div>\n\n            <div class="trip-filters__filter">\n              <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n              <label class="trip-filters__filter-label" for="filter-present">Present</label>\n            </div>\n\n            <div class="trip-filters__filter">\n              <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n              <label class="trip-filters__filter-label" for="filter-past">Past</label>\n            </div>\n\n            <button class="visually-hidden" type="submit">Accept filter</button>\n          </form>\n        '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},S),k.init(),w.init()})()})();
//# sourceMappingURL=bundle.d727c192ead1e31a0033.js.map
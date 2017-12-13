webpackJsonp([1],{"0MEn":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-dark",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",class:{"is-active":"Vote"==t.$route.name},attrs:{tag:"a",to:{name:"Vote"},exact:""}},[t._v("\n      Vote\n    ")])],1)])},n=[],o={render:s,staticRenderFns:n};e.a=o},"1rrJ":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("strong",[t._v("Made with")]),t._v(" ❤️ by "),a("a",{attrs:{href:"http://vinayak.website",target:"_blank"}},[t._v("Vinayak")]),t._v(". The source code is licensed\n        "),a("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(".\n      ")]),t._v(" "),a("p",[a("a",{staticClass:"icon",attrs:{href:"https://github.com/vinayakkulkarni/poll"}},[a("i",{staticClass:"fa fa-github"})])])])])])}],o={render:s,staticRenderFns:n};e.a=o},"2AW1":function(t,e,a){"use strict";var s=a("UnSZ"),n=a.n(s),o=a("q6Ae"),r=a.n(o),c=a("7+uW"),i=a("IZMb"),l=a.n(i),d=a("Y81h"),u=a.n(d);c.a.use(n.a),c.a.use(l.a,{position:"bottom-right",duration:3e3});var v=r.a.initializeApp({databaseURL:"https://gutenberg-poll.firebaseio.com"}),f=v.database(),h=f.ref("frameworks");e.a={name:"voting",firebase:{frameworks:h},localStorage:{voted:{type:Boolean}},data:function(){return{voted:!1,dataLoading:!1,checkedVotes:[]}},mounted:function(){var t=this;t.$localStorage.get("voted")&&void 0!==t.$localStorage.get("voted")&&(t.voted=t.$localStorage.get("voted"))},methods:{addVote:function(){var t=this,e=this;if(e.dataLoading=!0,u.a.start(),setTimeout(function(){t.dataLoading=!1},2e3),0!==e.checkedVotes.length)for(var a=0;a<e.checkedVotes.length;a+=1)h.child(e.checkedVotes[a][".key"]).child("votes").set(e.checkedVotes[a].votes+=1),e.$localStorage.set("voted",!0),e.voted=!0,u.a.done(!0),c.a.toasted.success("Thank you for Voting: "+e.checkedVotes[a].title+"!")}}}},HCTz:function(t,e,a){"use strict";e.a={name:"Header"}},M93x:function(t,e,a){"use strict";var s=a("xJD8"),n=a("bUdl"),o=a("VU/8"),r=o(s.a,n.a,null,null,null);e.a=r.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("1mcD"),o=a.n(n),r=a("M93x"),c=a("YaEn");s.a.use(o.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:c.a,template:"<App/>",components:{App:r.a}})},TVmP:function(t,e,a){"use strict";var s=a("UthT"),n=a("1rrJ"),o=a("VU/8"),r=o(s.a,n.a,null,null,null);e.a=r.exports},UthT:function(t,e,a){"use strict";e.a={name:"Footer"}},XE89:function(t,e){},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),n=a("/ocq"),o=a("cNwt");s.a.use(n.a);var r=[{path:"/poll",name:"Vote",component:o.a}];e.a=new n.a({mode:"history",routes:r})},bUdl:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),t._v(" "),a("router-view"),t._v(" "),a("Footer")],1)},n=[],o={render:s,staticRenderFns:n};e.a=o},cNwt:function(t,e,a){"use strict";function s(t){a("XE89")}var n=a("2AW1"),o=a("jZfS"),r=a("VU/8"),c=s,i=r(n.a,o.a,c,"data-v-6821ff76",null);e.a=i.exports},jZfS:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"column is-half is-offset-one-quarter"},[a("div",{staticClass:"box"},[t._l(t.frameworks,function(e){return a("div",{key:e.title,staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{staticClass:"checkbox",attrs:{for:"vote"}},[t.voted?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedVotes,expression:"checkedVotes"}],attrs:{type:"checkbox",name:"vote"},domProps:{value:e,checked:Array.isArray(t.checkedVotes)?t._i(t.checkedVotes,e)>-1:t.checkedVotes},on:{__c:function(a){var s=t.checkedVotes,n=a.target,o=!!n.checked;if(Array.isArray(s)){var r=e,c=t._i(s,r);n.checked?c<0&&(t.checkedVotes=s.concat([r])):c>-1&&(t.checkedVotes=s.slice(0,c).concat(s.slice(c+1)))}else t.checkedVotes=o}}}),t._v(" "),a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title)+" ("+t._s(e.votes)+")")])])])])}),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[t.voted?t._e():a("button",{staticClass:"button is-primary",class:{"is-loading":t.dataLoading},on:{"~click":function(e){t.addVote(e)}}},[t._v("Submit")])])])],2)])])},n=[],o={render:s,staticRenderFns:n};e.a=o},teIl:function(t,e,a){"use strict";var s=a("HCTz"),n=a("0MEn"),o=a("VU/8"),r=o(s.a,n.a,null,null,null);e.a=r.exports},xJD8:function(t,e,a){"use strict";var s=a("TVmP"),n=a("teIl");e.a={name:"app",components:{Footer:s.a,Header:n.a}}}},["NHnr"]);
//# sourceMappingURL=app.dbd441f808c795072776.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5,13],{307:function(t,e,o){var content=o(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("4e5b8f84",content,!0,{sourceMap:!1})},310:function(t,e,o){var content=o(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("4f98cd7c",content,!0,{sourceMap:!1})},311:function(t,e,o){"use strict";o(307)},312:function(t,e,o){var r=o(40)(!1);r.push([t.i,".pageHeader[data-v-3710cd2e]{position:relative;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.pageHeader__imageContainer[data-v-3710cd2e]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden}.pageHeader__imageContainer>img[data-v-3710cd2e]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;filter:blur(15px);transform:scale(1.1);opacity:.5;transition:all .2s ease}.pageHeader__imageContainer>img[lazy=loaded][data-v-3710cd2e]{transform:scale(1.05);filter:blur(5px)}.pageHeader__container[data-v-3710cd2e]{text-align:center;max-width:var(--max-width-lg);padding:5em 0;z-index:1}.pageHeader__title[data-v-3710cd2e]{font-size:3em}.pageHeader__subtitle[data-v-3710cd2e]{font-weight:500;margin-top:1em}",""]),t.exports=r},313:function(t,e){function o(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=313},314:function(t,e){function o(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=314},316:function(t,e,o){"use strict";o.r(e);var r={props:{title:{type:String,required:!0},subtitle:{type:String,default:null},image:{type:Object,default:null},color:{type:String,default:null}}},n=(o(311),o(11)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pageHeader",style:{background:t.color?"linear-gradient(to right, rgb("+t.color+"), var(--color-bg))":"linear-gradient(to right, var(--color-primary), var(--color-primary-light))"}},[t.image?o("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"pageHeader__imageContainer"},[o("img",{attrs:{"data-src":t.image.image,"data-loading":t.image.placeholder,alt:""}})]):t._e(),t._v(" "),o("div",{staticClass:"pageHeader__container"},[o("h1",{staticClass:"pageHeader__title"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),o("h2",{staticClass:"pageHeader__subtitle"},[t._v("\n      "+t._s(t.subtitle)+"\n    ")])])])}),[],!1,null,"3710cd2e",null);e.default=component.exports},317:function(t,e,o){"use strict";o(310)},318:function(t,e,o){var r=o(40)(!1);r.push([t.i,'.blogPostItem[data-v-5322e64a]{width:100%;min-width:0;border-radius:1em;display:flex;align-items:center;flex-wrap:wrap;align-content:flex-start;color:var(--color-text);text-decoration:none;padding:0 1em 1em}.blogPostItem__imageContainer[data-v-5322e64a],.blogPostItem__imageContainerNone[data-v-5322e64a]{position:relative;width:100%;height:-webkit-max-content;height:-moz-max-content;height:max-content;min-width:350px;border-radius:1em;overflow:hidden;background:var(--color-bg-alt);flex:2;margin-bottom:1em;border:3px solid var(--color-bg-alt);box-shadow:0 .25em 15px 0 rgba(0,0,0,.2)}.blogPostItem__imageContainer[data-v-5322e64a]:before,.blogPostItem__imageContainerNone[data-v-5322e64a]:before{content:"";display:block;height:0;width:100%;padding-top:56.25%}.blogPostItem__imageContainer img[data-v-5322e64a],.blogPostItem__imageContainerNone img[data-v-5322e64a]{position:absolute;top:-1px;left:-1px;width:calc(100% + 2px);height:calc(100% + 2px);-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;filter:blur(25px);transform:scale(1.1);transition:all .2s ease}.blogPostItem__imageContainer img[lazy=loaded][data-v-5322e64a],.blogPostItem__imageContainerNone img[lazy=loaded][data-v-5322e64a]{transform:scale(1);filter:none}.blogPostItem__color[data-v-5322e64a]{position:absolute;top:0;left:0;bottom:0;right:0;background:var(--color-primary)}.blogPostItem__info[data-v-5322e64a]{display:flex;flex-direction:column;justify-content:center;margin-left:1.5em;margin-right:1.5em;flex:1;min-width:350px}.blogPostItem__category[data-v-5322e64a]{text-transform:uppercase;font-size:.8em}.blogPostItem__title[data-v-5322e64a]{font-size:2em}.blogPostItem__excerpt[data-v-5322e64a]{color:var(--color-text-dark);line-height:1.5em}.blogPostItem__date[data-v-5322e64a]{padding:1em 0;color:var(--color-text-dark)}',""]),t.exports=r},329:function(t,e,o){"use strict";o.r(e);o(52);var r={props:{post:{type:Object,required:!0}},data:function(){return{thumbnailImage:null}},created:function(){this.thumbnailImage=this.getThumbnailImage()},methods:{getThumbnailImage:function(){var t=this.post.dir.substring(1).substr(0,this.post.dir.lastIndexOf("/")-1);if(this.post.thumbnailImage)try{return{image:o(309)("./".concat(t,"/").concat(this.post.thumbnailImage)),placeholder:o(308)("./".concat(t,"/").concat(this.post.thumbnailImage,""))}}catch(t){return null}else try{return{image:o(313)("./".concat(t,"/thumbnail.jpg")),placeholder:o(314)("./".concat(t,"/thumbnail.jpg"))}}catch(t){return null}}}},n=(o(317),o(11)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"blogPostItem",attrs:{to:t.localePath(t.post.dir.substr(0,t.post.dir.lastIndexOf("/")))}},[t.thumbnailImage?o("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"blogPostItem__imageContainer"},[o("img",{attrs:{"data-src":t.thumbnailImage.image,"data-loading":t.thumbnailImage.placeholder,alt:"Blog post thumbnail/preview image"}})]):o("div",{staticClass:"blogPostItem__imageContainerNone"},[o("div",{staticClass:"blogPostItem__color"})]),t._v(" "),o("div",{staticClass:"blogPostItem__info"},[o("p",{staticClass:"blogPostItem__category"},[t._v("\n      "+t._s(t.post.category?t.post.category:"Uncategorized")+"\n    ")]),t._v(" "),o("h2",{staticClass:"blogPostItem__title"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),o("p",{staticClass:"blogPostItem__excerpt"},[t._v("\n      "+t._s(t.post.description)+"\n    ")]),t._v(" "),o("p",{staticClass:"blogPostItem__date"},[t._v("\n      "+t._s(t.$t("blog.published"))+" "+t._s(t._f("formatDate")(t.post.createdAt))+"\n    ")])])])}),[],!1,null,"5322e64a",null);e.default=component.exports},379:function(t,e,o){var content=o(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("54eb6e9b",content,!0,{sourceMap:!1})},396:function(t,e,o){"use strict";o(379)},397:function(t,e,o){var r=o(40)(!1);r.push([t.i,".blogPosts__container[data-v-1d9ce168]{display:grid;grid-template-columns:1fr 1fr;grid-auto-flow:dense}@media(max-width:720px){.blogPosts__container[data-v-1d9ce168]{display:flex;flex-direction:column}}.blogPosts__feature[data-v-1d9ce168]{grid-column:1/-1}",""]),t.exports=r},715:function(t,e,o){"use strict";o.r(e);o(44),o(10),o(20),o(42),o(17),o(29),o(43),o(45),o(21);var r=o(3);o(32);function n(t,e){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c=!0,d=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return c=t.done,t},e:function(t){d=!0,n=t},f:function(){try{c||null==o.return||o.return()}finally{if(d)throw n}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,l,c,d,m,f,_,v,h,y,x,I;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,r=t.error,l=t.app,c=t.env,d=l.i18n.locale,m=c.DEFAULT_LOCALE,e.next=5,o("blog",{deep:!0}).only(["title","description","thumbnailImage","category","createdAt","dir"]).where({slug:m}).sortBy("createdAt","desc").fetch().catch((function(){r({statusCode:404,message:"Page not found"})}));case 5:if(f=e.sent,d===m){e.next=14;break}return _=d,e.next=10,o("blog",{deep:!0}).only(["title","description","thumbnailImage","category","createdAt","dir"]).where({slug:_}).sortBy("createdAt","desc").fetch().catch((function(){r({statusCode:404,message:"Page not found"})}));case 10:v=e.sent,h=f.reduce((function(t,e,o){return t[e.dir]=o,t}),Object.create(null)),y=n(v);try{for(y.s();!(x=y.n()).done;)I=x.value,Object.assign(f[h[I.dir]],I)}catch(t){y.e(t)}finally{y.f()}case 14:return e.abrupt("return",{posts:f});case 15:case"end":return e.stop()}}),e)})))()},head:{title:"Blog"}},d=(o(396),o(11)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blogPosts"},[o("PageHeader",{attrs:{title:t.$t("blog.pageTitle"),subtitle:t.$t("blog.pageDescription")}}),t._v(" "),o("PageContainer",{staticClass:"blogPosts__container"},t._l(t.posts,(function(t,e){return o("BlogPostItem",{key:e,class:{blogPosts__feature:0===e},attrs:{post:t}})})),1)],1)}),[],!1,null,"1d9ce168",null);e.default=component.exports;installComponents(component,{PageHeader:o(316).default,BlogPostItem:o(329).default,PageContainer:o(208).default})}}]);
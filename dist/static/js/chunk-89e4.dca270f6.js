(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-89e4"],{"677Q":function(t,e,n){"use strict";n.r(e);var i=n("obDJ"),o=n("lEg2");var r={name:"pluginSortable",data:function(){return{loading:!0,submitting:!1,dataList:[],sortLeftList:[],sortRightList:[],tempSortable:{},dragConfig:{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}}},created:function(){this.init()},mounted:function(){},watch:{$route:function(t,e){"pluginSortable"!=t.name&&this.$destroy()}},components:{draggable:i.a},methods:{init:function(){this.loading=!0,this.getPluginList()},getPluginList:function(){var t=this;o.b().then(function(e){t.dataList=e||[],t.loading=!1,t.getSortable()}).catch(function(){t.loading=!1})},getSortable:function(){var t=this;o.c().then(function(e){t.tempSortable=e||{},t.updateSortList()}).catch(function(){})},updateSortList:function(){var t=this,e=this.tempSortable.appliedIDs;if(e&&e.length>0){var n=[],i=[];this.dataList.forEach(function(t){var i={id:t.id,name:t.name,version:t.version};e.includes(t.id)||n.push(i)}),e.forEach(function(e){var n=t._getPluginById(e);if(n){var o={id:e,name:n.name,version:n.version};i.push(o)}}),n.length>0&&(this.sortLeftList=n),i.length>0&&(this.sortRightList=i)}else this.sortLeftList=this.dataList.map(function(t){return{id:t.id,name:t.name,version:t.version}})},updateItem:function(){var t=this;if(!this.submitting){this.submitting=!0;var e=[];this.sortRightList.length>0&&(e=this.sortRightList.map(function(t){return t.id}));var n={id:this.tempSortable.id,appliedIDs:e};o.e(n).then(function(){t.$message({type:"success",message:"修改成功!"}),setTimeout(function(){t.goList()},2e3)}).catch(function(){t.submitting=!1})}},handleRemoveRightItem:function(t,e){console.log(t),this.sortLeftList.unshift(t),this.sortRightList.splice(e,1)},goList:function(){this.$router.replace({path:"/plugin"}),this.$destroy()},_getPluginById:function(t){for(var e,n=0,i=this.dataList.length;n<i;n++){var o=this.dataList[n];if(o.id===t){e=o;break}}return e}}},s=(n("nLTY"),n("KHd+")),a=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-bottom":"18px"}},[n("el-alert",{attrs:{title:"通过'所有插件'通过拖拽的方式，移动到'已使用插件'来使用该插件 可以通过拖拽的方式，在'已使用插件'进行插件的使用排序。",type:"warning"}})],1),t._v(" "),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:6}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("所有插件")])]),t._v(" "),n("draggable",{staticClass:"list-group",attrs:{list:t.sortLeftList,group:"sortable",sort:!1}},t._l(t.sortLeftList,function(e,i){return n("div",{key:e.id,staticClass:"list-group-item"},[n("span",[t._v(t._s(e.name)+"(v"+t._s(e.version)+")")])])}),0)],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("已使用插件")])]),t._v(" "),n("draggable",t._b({staticClass:"list-group",attrs:{list:t.sortRightList,group:"sortable"},on:{start:function(e){t.isDragging=!0},end:function(e){t.isDragging=!1}}},"draggable",t.dragConfig,!1),[n("transition-group",{attrs:{type:"transition",name:"flip-list"}},t._l(t.sortRightList,function(e,i){return n("div",{key:e.id,staticClass:"list-group-item"},[n("span",[t._v(t._s(e.name)+"(v"+t._s(e.version)+")")]),t._v(" "),n("span",{staticClass:"el-icon-error",staticStyle:{float:"right",cursor:"pointer"},attrs:{title:"移除插件"},on:{click:function(n){t.handleRemoveRightItem(e,i)}}})])}),0)],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:8}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("插件执行顺序")])]),t._v(" "),n("div",[n("div",{staticClass:"list-group-show"},[n("el-timeline",t._l(t.sortRightList,function(e,i){return n("el-timeline-item",{key:i,attrs:{icon:"el-icon-caret-bottom",color:"#0bbd87",timestamp:"pre method",placement:"top"}},[n("el-card",{staticClass:"box-card"},[n("div",[t._v("\n                                        "+t._s(e.name)+" (v"+t._s(e.version)+")\n                                    ")])])],1)}),1)],1),t._v(" "),n("div",{staticClass:"list-group-show"},[n("el-timeline",t._l(t.sortRightList,function(e,i){return n("el-timeline-item",{key:i,attrs:{icon:"el-icon-caret-top",color:"#0bbd87",timestamp:"post method",placement:"top"}},[n("el-card",{staticClass:"box-card"},[n("div",[t._v("\n                                        "+t._s(e.name)+" (v"+t._s(e.version)+")\n                                    ")])])],1)}),1)],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.sortRightList.length>0,expression:"sortRightList.length > 0"}],staticClass:"list-bottom-tips"},[t._v("\n                        API 逻辑处理\n                    ")])])])],1)],1),t._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"btn-group1"},[n("el-button",{attrs:{size:"mini"},on:{click:t.goList}},[t._v("返回")]),t._v(" "),n("el-button",{attrs:{type:"primary",loading:t.submitting,icon:"el-icon-check",size:"mini"},on:{click:t.updateItem}},[t._v("提交\n            ")])],1)])],1)},[],!1,null,"42950808",null);a.options.__file="sortable.vue";e.default=a.exports},lEg2:function(t,e,n){"use strict";n.d(e,"b",function(){return l}),n.d(e,"d",function(){return u}),n.d(e,"f",function(){return c}),n.d(e,"a",function(){return d}),n.d(e,"c",function(){return h}),n.d(e,"e",function(){return p});var i=n("4d7F"),o=n.n(i),r=n("t3Un"),s=n("JDVc"),a="/plugins";function l(){return new o.a(function(t,e){var n=[],i="",o=s.c;!function s(l){(function(t){return Object(r.a)({url:a,method:"GET",params:t})})(l).then(function(e){var r=(e=e||[]).length;r>0?(n=n.concat(e),(i=e[r-1]||{}).id&&s({after:i.id,limit:o})):t(n)}).catch(function(){e()})}({after:"",limit:o})})}function u(t){return Object(r.a)({url:a+"/"+t,method:"GET"})}function c(t){return Object(r.a)({url:a,method:"PUT",data:t})}function d(t){return Object(r.a)({url:a+"/"+t,method:"DELETE"})}function h(){return Object(r.a)({url:a+"/apply",method:"GET"})}function p(t){return Object(r.a)({url:a+"/apply",method:"PUT",data:t})}},"nB/U":function(t,e,n){},nLTY:function(t,e,n){"use strict";var i=n("nB/U");n.n(i).a},obDJ:function(t,e,n){"use strict";(function(t){var i=n("P2sY"),o=n.n(i),r=n("m1cH"),s=n.n(r),a=n("U/5H");var l="undefined"!=typeof window?window.console:t.console;function u(t){null!==t.parentElement&&t.parentElement.removeChild(t)}function c(t,e,n){var i=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function d(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}var h=["Start","Add","Remove","Update","End"],p=["Choose","Sort","Filter","Clone"],f=["Move"].concat(h,p).map(function(t){return"on"+t}),g=null,m={name:"draggable",inheritAttrs:!0,props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},tag:{type:String,default:null},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},data:function(){return{transitionMode:!1,noneFunctionalComponentMode:!1,init:!1,isCloning:!1}},render:function(t){var e=this.$slots.default;if(e&&1===e.length){var n=e[0];n.componentOptions&&["transition-group","TransitionGroup"].includes(n.componentOptions.tag)&&(this.transitionMode=!0)}var i=0,o=e,r=this.$slots,a=r.header,l=r.footer;a&&(i=a.length,o=o?[].concat(s()(a),s()(o)):[].concat(s()(a))),l&&(o=o?[].concat(s()(o),s()(l)):[].concat(s()(l))),this.headerOffset=i;var u=null,c=function(t,e){u=function(t,e,n){return void 0==n?t:((t=null==t?{}:t)[e]=n,t)}(u,t,e)};if(this.componentData){var d=this.componentData,h=d.on,p=d.props;c("on",h),c("props",p)}return t(this.getTag(),u,o)},created:function(){null!==this.list&&null!==this.value&&l.error("Value and list props are mutually exclusive! Please set one or another."),"div"!==this.element&&l.warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props"),void 0!==this.options&&l.warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props")},mounted:function(){var t=this;if(this.noneFunctionalComponentMode=this.getTag().toLowerCase()!==this.$el.nodeName.toLowerCase(),this.noneFunctionalComponentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: "+this.getTag());var e={};h.forEach(function(n){e["on"+n]=function(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),d.call(e,t,n)}}.call(t,n)}),p.forEach(function(n){e["on"+n]=d.bind(t,n)});var n=o()({},this.options,this.$attrs,e,{onMove:function(e,n){return t.onDragMove(e,n)}});!("draggable"in n)&&(n.draggable=">*"),this._sortable=new a(this.rootContainer,n),this.computeIndexes()},beforeDestroy:function(){void 0!==this._sortable&&this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){this.updateOptions(t)},deep:!0},$attrs:{handler:function(t){this.updateOptions(t)},deep:!0},realList:function(){this.computeIndexes()}},methods:{getTag:function(){return this.tag||this.element},getIsCloning:function(){return function(t){if(!t)return!1;var e=t.pull;return"function"==typeof e?"clone"===e():"clone"===e}(this.$attrs.group||this.getOptionGroup())},getOptionGroup:function(){var t=this.options;if(t)return t.group},updateOptions:function(t){for(var e in t)-1==f.indexOf(e)&&this._sortable.option(e,t[e])},getChildrenNodes:function(){if(this.init||(this.noneFunctionalComponentMode=this.noneFunctionalComponentMode&&1==this.$children.length,this.init=!0),this.noneFunctionalComponentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=function(t,e,n){if(!t)return[];var i=t.map(function(t){return t.elm}),o=[].concat(s()(e)).map(function(t){return i.indexOf(t)});return n?o.filter(function(t){return-1!==t}):o}(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)})},getUnderlyingVm:function(t){var e=function(t,e){return t.map(function(t){return t.elm}).indexOf(e)}(this.getChildrenNodes()||[],t);return-1===e?null:{index:e,element:this.realList[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(s()(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,i=this.getUnderlyingPotencialDraggableComponent(e);if(!i)return{component:i};var r=i.realList,s={list:r,component:i};if(e!==n&&r&&i.getUnderlyingVm){var a=i.getUnderlyingVm(n);if(a)return o()(a,s)}return s},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),this.isCloning=this.getIsCloning(),t.item._underlying_vm_=this.clone(this.context.element),g=t.item},onDragAdd:function(t){var e=t.item._underlying_vm_;if(void 0!==e){u(t.item);var n=this.getVmIndex(t.newIndex);this.spliceList(n,0,e),this.computeIndexes();var i={element:e,newIndex:n};this.emitChanges({added:i})}},onDragRemove:function(t){if(c(this.rootContainer,t.item,t.oldIndex),this.isCloning)u(t.clone);else{var e=this.context.index;this.spliceList(e,1);var n={element:this.context.element,oldIndex:e};this.resetTransitionData(e),this.emitChanges({removed:n})}},onDragUpdate:function(t){u(t.item),c(t.from,t.item,t.oldIndex);var e=this.context.index,n=this.getVmIndex(t.newIndex);this.updatePosition(e,n);var i={element:this.context.element,oldIndex:e,newIndex:n};this.emitChanges({moved:i})},updateProperty:function(t,e){t.hasOwnProperty(e)&&(t[e]+=this.headerOffset)},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(s()(e.to.children)).filter(function(t){return"none"!==t.style.display}),i=n.indexOf(e.related),o=t.component.getVmIndex(i);return-1!=n.indexOf(g)||!e.willInsertAfter?o:o+1},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var i=this.getRelatedContextFromMoveEvent(t),r=this.context,s=this.computeFutureIndex(i,t);return o()(r,{futureIndex:s}),o()(t,{relatedContext:i,draggedContext:r}),n(t,e)},onDragEnd:function(){this.computeIndexes(),g=null}}};"undefined"!=typeof window&&"Vue"in window&&window.Vue.component("draggable",m),e.a=m}).call(this,n("yLpj"))},t3Un:function(t,e,n){"use strict";var i=n("4d7F"),o=n.n(i),r=n("vDqi"),s=n.n(r),a=n("XJYT"),l=s.a.create({baseURL:"/v1",timeout:6e4});l.interceptors.request.use(function(t){return t},function(t){console.error(t),o.a.reject(t)}),l.interceptors.response.use(function(t){var e=t.data||{};t.headers;return 0===e.code?e.data:(Object(a.Message)({message:e.data,type:"error",duration:5e3}),o.a.reject("error"))},function(t){return Object(a.Message)({message:t.response&&t.response.data&&t.response.data.data||"网络异常",type:"error",duration:5e3}),o.a.reject(t)}),e.a=l}}]);
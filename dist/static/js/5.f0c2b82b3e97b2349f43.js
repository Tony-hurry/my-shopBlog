webpackJsonp([5],{"1vdB":function(t,e){},BG4O:function(t,e,a){"use strict";var i=a("6z0J"),r={name:"Swriper",props:{info:{type:Array,default:function(){return[]}},swiperType:{type:Number,default:function(){return 1}}},mixins:[i.a],data:function(){return{}},mounted:function(){},methods:{gotoShopDetail:function(t){this.$router.push("/api/shopDetail/"+t)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return 0!=t.info.length?a("div",{staticClass:"swriper"},[1===t.swiperType?a("div",{staticClass:"style1"},[a("el-carousel",{attrs:{interval:4e3,type:"card",height:t.H+"px",loop:!0}},t._l(t.info,function(e,i){return a("el-carousel-item",{key:i},[a("img",{attrs:{src:e.image_src||e.pics_big_url,alt:""},on:{click:function(a){return t.gotoShopDetail(e.goods_id)}}})])}),1)],1):2===t.swiperType?a("div",{staticClass:"style2"},[a("el-carousel",{attrs:{interval:5e3,arrow:"always",height:2*t.H+"px",loop:!0}},t._l(t.info,function(t,e){return a("el-carousel-item",{key:e},[a("img",{directives:[{name:"image-preview",rawName:"v-image-preview"}],attrs:{src:t.pics_big_url,alt:""}})])}),1)],1):t._e()]):t._e()},staticRenderFns:[]};var n=a("VU/8")(r,s,!1,function(t){a("UdOQ")},"data-v-4ae9d84e",null);e.a=n.exports},U840:function(t,e){},UdOQ:function(t,e){},b5eY:function(t,e){},wXUp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("BG4O"),r=a("6z0J"),s={name:"CatItem",props:{info:{type:Array,default:function(){return[]}}},mixins:[r.a],mounted:function(){}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"catItem",style:{height:this.H+"px"}},this._l(this.info,function(t,a){return e("div",{key:a,staticClass:"navCard"},[e("img",{attrs:{src:t.image_src,alt:""}})])}),0)},staticRenderFns:[]};var o=a("VU/8")(s,n,!1,function(t){a("U840")},"data-v-0b4e1036",null).exports,c={name:"FloorData",props:{info:{type:Array,default:function(){return[]}}},mixins:[r.a],methods:{gotoShopList:function(t){var e=t.split("=")[1];this.$router.push("/api/shopList/"+e)}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"floorData"},t._l(t.info,function(e,i){return a("div",{key:i,staticClass:"container",style:{height:2*t.H+"px"}},[a("div",{staticClass:"title"},[a("img",{attrs:{src:e.floor_title.image_src,alt:""}})]),t._v(" "),a("div",{staticClass:"product"},[a("div",{staticClass:"shopLeft"},[a("img",{attrs:{src:e.product_list[0].image_src,alt:""},on:{click:function(a){return t.gotoShopList(e.product_list[0].navigator_url)}}})]),t._v(" "),a("div",{staticClass:"shopRight"},t._l(e.product_list,function(e,i){return 0!=i?a("div",{key:i,staticClass:"product-item"},[a("img",{attrs:{src:e.image_src,alt:""},on:{click:function(a){return t.gotoShopList(e.navigator_url)}}})]):t._e()}),0)])])}),0)},staticRenderFns:[]};var l=a("VU/8")(c,u,!1,function(t){a("b5eY")},"data-v-779d521a",null).exports,p=a("NaW9"),d={name:"Home",components:{Swriper:i.a,CatItems:o,FloorData:l},mounted:function(){var t,e=this;Object(p.b)({url:"/api/public/v1/home/swiperdata",methods:"GET",data:t}).then(function(t){e.swriperData=t.data.message}),function(t){return Object(p.b)({url:"/api/public/v1/home/catitems",methods:"GET",data:t})}().then(function(t){e.catItems=t.data.message}),function(t){return Object(p.b)({url:"/api/public/v1/home/floordata",methods:"GET",data:t})}().then(function(t){e.floorData=t.data.message})},data:function(){return{swriperData:[],catItems:[],floorData:[]}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("Swriper",{attrs:{info:this.swriperData}}),this._v(" "),e("CatItems",{attrs:{info:this.catItems}}),this._v(" "),e("FloorData",{attrs:{info:this.floorData}})],1)},staticRenderFns:[]};var m=a("VU/8")(d,f,!1,function(t){a("1vdB")},"data-v-11653618",null);e.default=m.exports}});
//# sourceMappingURL=5.f0c2b82b3e97b2349f43.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{GsTM:function(e,t,r){"use strict";var n=r("g09b"),a=r("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("IzEo");var o=n(r("bx4M"));r("T2oS");var u=n(r("W9HT"));r("+L6B");var i,l,c,f=n(r("2/Rp")),d=n(r("2Taf")),s=n(r("vZ4D")),g=n(r("MhPg")),p=n(r("l4Ni")),y=n(r("ujKo")),h=a(r("q1tI")),v=r("MuoO"),m=n(r("uUKN"));function E(e){var t=C();return function(){var r,n=(0,y.default)(e);if(t){var a=(0,y.default)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,p.default)(this,r)}}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var k=(i=(0,v.connect)(function(e){return{isloading:e.error.isloading}}),i((c=function(e){(0,g.default)(r,e);var t=E(r);function r(){var e;(0,d.default)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),e.state={isloading:!1},e.triggerError=function(t){e.setState({isloading:!0});var r=e.props.dispatch;r({type:"error/query",payload:{code:t}})},e.onChangePage=function(t){var r=e.props.location.onHandlePage;r({key:t})},e}return(0,s.default)(r,[{key:"render",value:function(){var e=this,t=this.state.isloading;return h.default.createElement(o.default,null,h.default.createElement(u.default,{spinning:t,wrapperClassName:m.default.trigger},h.default.createElement(f.default,{type:"danger",onClick:function(){return e.triggerError(401)}},"\u89e6\u53d1401"),h.default.createElement(f.default,{type:"danger",onClick:function(){return e.triggerError(403)}},"\u89e6\u53d1403"),h.default.createElement(f.default,{type:"danger",onClick:function(){return e.triggerError(500)}},"\u89e6\u53d1500"),h.default.createElement(f.default,{type:"danger",onClick:function(){return e.triggerError(404)}},"\u89e6\u53d1404"),h.default.createElement(f.default,{type:"danger",onClick:function(){return e.onChangePage("/libraries/braft-editor")}},"\u8df3\u8f6c\u5df2\u5b58\u5728Home\u9875\u9762"),h.default.createElement(f.default,{type:"danger",onClick:function(){return e.onChangePage("/home/homessss")}},"\u8df3\u8f6c\u4e0d\u5b58\u5728\u9875\u9762")))}}]),r}(h.PureComponent),l=c))||l),w=k;t.default=w},uUKN:function(e,t,r){e.exports={trigger:"antd-pro-pages-exception-style-trigger"}}}]);
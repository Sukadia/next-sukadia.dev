"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 2196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 8396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata
var favicon_next_metadata_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_namespaceObject);
__webpack_require__.d(favicon_next_metadata_namespaceObject, {
  "GET": () => (GET),
  "dynamic": () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(4664);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./app/favicon.ico?__next_metadata


const contentType = "image/x-icon"
const buffer = Buffer.from("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8v+jqf//hozw/+vr+f/////////////////Pz///kY15/8K/jf+EezfrR1xmMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj1Uck49VL65GLNv+g4uz/q/P+/7f1/v/P+P7/8v3///////////////////r7/v9wdN3/QUfp/2pv//+co/r/wcPu////////////+fn//6ys//+Libv/h4OC/4Z1Df9oj7XratX4JAAAAAAAAAAAAAAAAAAAAAAAAAAA4+NVCePWS9Sglzr/VHCC/57t/v+m8/7/pfL+/6Ty/v+j8v7/wvb+//X9//////////////39/v90eeL/VVn8/3h++P/Exe//////////////////8fH+/7e39P+NjfD/fXiB/1qOzP9YtPrUceP/CQAAAAAAAAAAAAAAAAAAAADj1UuLoJg6/5W3uv+EzPL/br3z/6Hv/v+l8v7/pPL+/6Hx/v+e8f7/oPH9/+D6/v////////////j4/f9cYOP/Sk7p//Pz/P////////////////////////////Pz+v+foOb/RoHi/0qZ+f9TqfuLAAAAAAAAAAAAAAAA5NdKJtPGRfp9kYr/q/P+/5Pm/v9ipub/hNj+/6Xy/v+b6/7/f9X+/5nt/f+Y7/3/k+79/9T4/v/y6ev/yJ2k/7ODl/+ZbZP/5dLV//////////////////z8/v/Y3/r/7/L9/+Tk//+PlPn/Unvi/0WP9PpDlPgmAAAAAAAAAADj1UudiYM3/7nr8/+f8f7/ne7+/3vK9v9frO7/i9/+/3fQ/v90zf7/jeP9/5fv/f+R7v3/id3t/59baP/FipP/8dHU//bU1//Xpqz/yqGo///////3+f7/Rmno/xlE4v8hSeP/hY33/5GR//+Oj/7/WXnk/0GF8p0AAAAA3cxED+PVS/V/h17/tPT9/57w/v+h8v7/etL+/2Cm6P9rxf7/cMn+/3DH/P9+1v3/l+/9/5Dt/P+VlqT/6aaw/+ihq/+9eoT/9tTX//fV2P/mvcH/z6yy/8fR+P8ZROL/GUTi/xlE4v88Uev/fYLz/1Bw4v9Qdeb/O3rs9UR37g/j1Upa49VL/3+KaP+v8/3/m+/+/5jq/v+K3/7/Xaru/1qy+P9anuT/V6Ls/23G/f+U7v3/j+38/7eFkf/lmKT/+bjB/8VzgP/txcn/9tLW//bU1//Gj5b/6uz3/yZO4/8UOOL/EC3i/1Rg8v+Dg///VHHn/zt6+f8+fvr/PoD5WuPUSpvj1Uv/goNK/7Lz/f+c8P3/i+D+/5Pm/v9ht/j/RIPb/5jo+v9Pmen/Yrv9/4Te/f+N6fn/wHB8/9hzgv/rr7f/+e/x//vz9P/43+L/8MDF/9+vtf/jz9L/ydH5/05g7f9aZvL/b4Lt/2mI6P9hc+r/OHLx/zt6+v8/f/qb49ZLzN/SSv9jc2n/oNfy/5vw/f+W6v7/bsf+/2W//v9mp+P/nvH+/1ig6P9asf3/bMT9/43s+/+sXmr/qCk2/75ZZP/05OX///////PZ3P/RbHj/y2t2/9rBxv/Ozv//np7//4uN/f99sOj/jOz7/2ao6f86cen/O3j6/z5++szk1kvqnZQ1/7DZ3/+Fs+X/n+z8/4/k/v9wyP7/aMD8/3i/7P+d8P7/abDp/1Sp+/9XrP3/ftz8/5l8iv+ZICr/nyUu/6AyPv/KX2j/y15n/8xgaf+1T1v/o5nn/5ub//+QkP//bYHs/5vn+f9x5/r/VrD6/0qT5/86dvb/Pn376uPVS/+BgkX/vPT9/7zq+v+BtOf/ftP9/3LL/v9ux/7/dLvr/5zw/f+E2Pj/SZPr/1Km/f9Zrfz/YozM/5UvNP+fNDT/pT1F/8pcXf/KXmD/v1tj/45Sgv+Nj/v/jIz+/3iC9P9XiNv/arfo/2nX9P9YtPr/Spf4/zl15/89fPr/49VL/4GCRv+49P3/nO/8/7Ln+P96tuj/fdL8/3DI/v9ster/m/D9/4jf/f9ZoOf/UKP8/06e/P9Mmvz/YWOj/4Q4Tf+Ea5f/hJrH/4K15P+Lxez/h8Tr/1mN2P9tquT/f9Hx/4fp+v9pxe3/aNT0/0qY+v9Chfr/Qofl/zt28f/k1kvqnZQ1/63Y3v+Y7vz/l+/9/6Pu/P99xe7/dMTz/2m58f+N3vT/lO39/2e79/9Jkev/Spn8/0iT/P9Ihuj/isHs/6bw/P+P7fz/fur7/27b9v9bref/e+X5/3Lo+/9x5/r/buL6/0mX5f9Gj/r/P4D6/0KE+v9Xg+L/e4D06uPWS8zf0kr/cYBq/7Hz/f+X7/3/mfD9/5vw/f+I3v3/ftX8/3vL8f+I3/n/asH9/1Gd7/9GkPT/SYbo/5zg9v+H6/v/duf7/3To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Lf/r6uP///////n59v+vq4r/sa6H/+jn0P/Fwp7/iIUe8JmXDXOMjA0U//8AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOPTTEDj1Uu31slG+qidOf+clEr/nZdg/5iUcP9vbnX/OTp7/xsfhv8WG5T/ExmV/xQZkf8dIYj/LjR7/z5AcP9HSGH/UVI7/2VjLv/Kyc///Pz+///////n5tz/uLWX/7i0lP+SjnD/mZUe/7i2EfqioA+3fX0MPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAB4tVLYuHTS+ijmjf+cm5R/8LBt//j4uD/6+vr//Ly8//s7Pb/3d73/56h6v89Q9f/HCTf/x0l5P8cJOD/HifZ/2Fo4P+jqfT/mqDn/32Cy/+bndP/0tLu/+Xl9f/7+/3/+Pj1//Dv6v/e3e7/mpm8/4uGIf+7uRL+ioY56Ojow2IAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANvbSQfk1kpx4NJK9JqRPP+OjYb/9vb2///////////////////////////////////////z8/z/lJfi/zE41v8dJd3/GSHX/0xR6v+WnP//qbD//5ui+f+go+r/+/z+///////////////////////8/P//s7P//3x3dP+JhD//ycaa/62ocfRdVhdxSW1tBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAeTWSnHj1UrtoZg1/22Egf/N8PX/2Pn+/+H7/v/u/P7//f///////////////////////////////////9PU8/9hZtz/HSTU/z1C5P9nbP//mJ7//6Kp/P+Sl+r/8PD7///////////////////////x8f//ra3//4mGof+5to//q6dx/31wGf9iYTrteqnJcQD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4tVLYuPVS/Tj1Uv/TFAs/6Ho8/+n8/7/qPP+/6vz/v+v8/7/uvX+/+D6/v/8///////////////////////////////t7fr/am7Z/ysy1v9aXv//Zmv//6Kp/v+Kj+n/6er5//////////////////v7///Nzf//oKD//5ST7v+HhLD/f3yg/3ZpEf9zc0f/grfh9GvY+mIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAHj00xA5NVL6NLFRv+Bfjr/NU9j/6Hv/v+m8/7/pvP+/6bz/v+l8v7/pPL+/6Py/v+19P7/5Pv///n+////////////////////////+/v+/2lu3P9OU/P/V1v//3p//f+Ijen/6ur5///////////////////////+/v//29v8/6Gh8/+Vlfj/kpL6/4B8mP9eZ1j/ca7p/1av+uhp2/s/AP//AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAObZTRTj1Uu3zcBD/m5uQP+JrbL/W5TZ/3/R+f+f7f7/pvP+/6by/v+l8v7/pPL+/6Ly/v+g8f7/ofH+/7/1/v/q/P7//v///////////////////+jp+f9pbeL/Ulb5/1lc+v+Giuf/8vL7//////////////////////////////////f3/f/T0/H/ra3q/4aG2/9adK7/Upvx/0yd+v5Zt/m3Wb/yFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOLTS3PYy0f6V1Qq/6bGy/+n7fz/fcTv/1ie5v+J3f7/o/D+/6by/v+l8v7/pPL+/6Ly/v+g8f7/nfD9/5rw/f+m8f3/4/v+//////////////////7+///P0PL/R0zf/09T8/+doOf//v7/////////////////////////////////////////////+Pj9/9HR9v9vguD/QHvh/0mW+P9Mnvr6Tp34cwAAAAAAAAAAAAAAAAAAAAAAAAAA39dIIOHTSvCOhzX/k6yq/7n1/v+h8v7/i9/+/1yb4P9twPb/leX+/6Xy/v+k8v7/n+/+/4zg/v+M4f7/nO/9/5nw/f+V7v3/le/9/9z5/v/8////+PP0/+TR1P/Koaf/hVaD/2lHkv/Yytn/+vf3/////////////////////////////f3///P1/f/z9f3//f3///b2//+ys///fIrv/0Vz2v9Fi/D/SZf68EiP/yAAAAAAAAAAAAAAAAD//0AE4tVKntDDRf93f17/uuXs/6Lx/v+h8v7/juH+/3/M9f9epef/eM78/57t/v+Y6f7/gNf+/3XO/v9/1v7/me39/5nw/f+V7v3/kO79/5Tu/P/D3OT/toKM/72Ejf/ftLr/5bzA/9iorv/FjZX/wpKa/+jY2//////////////////t8P3/mq3y/2iE7P9ohOz/lKfx/9fZ/f+np///lZX//4iO+P9YeuT/QYLr/0aR+p1AgP8EAAAAAAAAAADl1Ukx49RL47mvQ/9+lZX/s/L9/5/x/v+h8f7/n+/+/3fO/f9nq+f/aLz3/4HX/v980/7/dc7+/3XN/v93z/7/luv9/5jw/f+U7v3/j+79/4rk8/+Lf47/ql1p/7Jlcv/Ikpn/89PW//bV2P/00dT/573B/7Z5g//fyMz///////v8/v+QpfH/IUrj/xlE4v8ZROL/HETj/0td7P+Ulf//jo7//4yM//+JjPv/U3Tf/z1+7ONEjfoxAAAAAP//gALh1Ex24tRK+o6KPv+bu7//pvL9/57x/v+g8f7/ovL+/3/V/v9vvfP/V5/o/2zG/v9wyf7/csv+/3LK/f9yyv7/jOP9/5jw/f+U7v3/j+38/4vH1v+9gY3/6aOu/+igqv+9bnr/1aWr//bU1//31dj/99XY/+7Hy/+8hI3/7+Tm/+3w/f9Wdun/GUTi/xlE4v8ZROL/GUTi/yJA5f92evL/dH3s/2B26P9jeev/YHno/zVs2fpBhvl2AID/AuHSSxHk1Uux49VL/3h3PP+oztP/o/H9/5zw/v+b7f7/ofH+/5Hk/v9vx/3/To3e/2O+/f9mv/z/WqXs/1uo7f9ux/7/e9P9/5fv/f+T7v3/ju38/5CMm//bmKP/6J+q//e1v//poq3/qlxo//TQ1P/209f/9tTX//bU1//brLH/w5ad/+/y/f9dfOr/GUTi/xhC4v8VO+L/FDji/yA55v97fvv/gIP8/0ps3f82b+f/OXbu/z199f8/gvuxPHjwEejaSyLi1Uvm49VL/358Pf+jytD/ofH9/5zx/v+S5v7/nO7+/5vs/v9vyf7/Wp/n/1Om8v9Omuj/dbvr/0iK4P9pwv3/bMT9/5Ps/f+S7v3/ju38/5tjcf/noKv/5pmk//Svuv/zrLf/sFdl/+Cyt//20dX/9tLW//bT1v/00dT/rGhy//Tv8f+arvL/IErj/xU64v8RLuL/Dyri/0JS7v+Ghv//goL//3B79P85bub/O3r6/z19+v8+gPnmPID/IuHTSkzj1Uv/49VL/52XQf+PsbT/ovH9/5zw/f+W6v7/iN3+/5vt/v950f7/X7Dz/0KH4P9mq+b/mur7/0SE3f9ivP3/ZL39/4Da/f+R7v3/jOj3/6pea//cgI3/44qX/+6msP/01Nj/8uLl//Xq6//66On/9tPX//TLzv/1z9L/y5Oa/9a6vv/3+P7/hpvw/ydC5v8kPOb/RVTu/4CG+f9pfuv/cX7y/3N69v9Gb+b/OXb3/zt5+v89ffr/PID4TOLVS4Xj1Uv/49VL/6SeQP90kJ7/p/D8/5vw/f+d8P7/hdz+/37U/v9yy/7/YLn7/z1z0f+K1PP/nvH+/06N3f9asvv/X7b9/2zE/f+O6/3/jOf3/6hbaP/IXmz/vkVU/8hib//78/T/////////////////9d/i/92Nl//imqL/0o2V/8Wco///////1NT//5ye/f+Pkvz/j4///2eA5/+Cvur/dLrp/2SN4/9BbN//OXT2/zp4+v88fPr/P4D5hePVS7Xj1Uv/2cxI/01XTf9/qtj/rOb4/5rw/f+d8P3/len+/2/I/v9rxP7/ZL7+/02G2P+d7v3/nvH+/2et5/9PoPP/WbD9/1+2/f+A3P3/jO38/5VWZP+1SVX/picz/6wwPP/OhIz/9Obn///////9+vr/5a+1/9Bpdv/Ra3f/w2Fu/8SZof/v7///srL//56e//+UlP//g4f6/2SW3v+e7fv/eun6/2i69v9XkOH/OnPw/zp3+v88e/r/P3/5teTVS9fj1Uv/hHws/4yttP+cyu7/lcLr/6Lw/f+a7v3/kOX+/3HJ/v9txv7/Zb37/12c3/+e8f7/nPD+/4HP9P9Jken/Vaz9/1et/f9qw/z/iOr8/4p/jv+pQkz/nCEr/6AkLv+mKjX/mjNB/8hgav/NZG7/zF9q/81ha//NY23/rklW/6aNx/+lpf//nJz//5SU//+MjP//XXjk/5ra9P+J6/v/cef6/2PM+v9PmfX/PXrb/zt2+P88e/r/P3761+PVS/Lf0kr/TU4s/8Hv9v/D8vz/hLHl/4/H7v+N3/3/etH+/3LK/v9vyP7/acH8/16e4P+e8f7/nPD9/4LV+P9VnOf/Uqb6/1So/f9YrPz/dtP8/3yw0P+TO0n/mSYs/5wpLv+jMjn/nDQ//8lYXv/JWmD/ylxh/8tdYv/FWWD/lEVk/5qW9/+Wlv//kpL//42N//99hPf/bqDl/6Dw/P915/r/cef6/2jW+v9Chfr/UaXr/zZu5f88evr/Pn368uPVS//SxUb/V2JQ/8H1/f+08/3/w/D8/4Ow5f+FxvD/etH+/3PL/v9xyv7/bsb+/1eX3/+c8P7/m/D9/4rh/P9jquf/UJ/1/1Km/f9RpPz/Vaj8/1af8v9xUnz/lzEy/583Nf+ZMzn/t01Q/8tdXf/MX17/yGBh/7tdaP+bRVn/g2m4/4aL9f+LjP7/iYr+/3J/8P9Obtv/ToXW/1qW3P9VpOH/bd73/2fU+v8/f/r/Uab5/zt42v88evn/Pn36/+PVS//RxEX/WGNS/8H1/f+d7/z/rPH9/7/v+/+AsuX/gs3y/3rQ/f9zy/7/cMf+/12i5f+R4/j/mvD9/5Pp/f9wwPP/S5Dl/1Gl/f9Pofz/T5/8/02c/P9ShNv/ez9b/5U5PP+WQlH/oGZ//31xpP9kfMH/YJHY/22j4P91reP/dKzj/2GW2/9JedL/VYva/3e35/+R2/T/lez7/4Hh9/9dtef/bd73/1q4+v8+ffr/Ro76/0aR4P87d/P/PXr3/+PVS/Lf0Un/TU8t/7/v9v+m8f3/lO79/6Hw/f+r6vr/iMHr/3m/7P95zPj/csr9/2q68v99x+z/me/9/5Xt/f960vz/Vpvj/0qX8v9On/z/S5r8/0qY/P9IlPv/SnfV/15Vk/99lsj/i8Hq/5/f9f+k7vv/nfD8/5bv/P+M4Pb/eLfn/2605v980vL/hur7/3vp+v9y5/r/cef6/2XP8v9Nnef/Wrn6/0SJ+v8+fvr/Q4b6/0uV3/9IceX/UHTq8uTVS9fj1Uv/g3ss/4qrsP+08/3/lu79/5bu/f+a8P3/nu/8/5De9/93wO3/cb7v/3HG+v9tt+n/kuf4/5fv/f+A2P3/aL35/0eI3/9Mm/n/SZb8/0eS/P9BhO//V43f/6Ha9P+s7fv/le77/4Dq+/966fv/dun7/3Dh+P9Wquf/aczy/3Xm+v9z6Pv/cuj7/3Hn+v9x5/r/atn6/0yd4/9Ag/H/Qof6/0CA+v8+ffr/Roz6/0yH3v+Agvf/iIb71+PVS7Xj1Uv/2cxI/0xUQv+35ez/nvD9/5bu/f+Y8P3/mvD9/5vw/f+R5/3/gdj8/4bb+/96zvf/fMfq/4/n+/+F3v3/Zbv9/1mp8/9Eien/SJX7/0OK9P9gl+P/q+n5/5rv/P996vv/duf7/3Xo+/9z6Pv/c+j7/2XO9f9dvfL/cuf7/3Lo+/9y6Pv/cuj7/3Hm+v9q2vr/Wbbv/zl14f9Ch/r/QIL6/z9/+v8+ffr/SI/4/0xv3P+OiP//kIr/teLVS4Xj1Uv/49VL/6WdPf96j4f/tOz1/5jv/f+Y8P3/mvD9/5vw/f+b8P3/j+X9/3PL/f91zP3/d8z4/3jM9v9sw/3/Y7n9/1uv+/9LlO//Qonu/0iG4P+I1PX/h+z7/3rp+/915fv/cuH7/3To+/9z6Pv/cOL7/2DF+v9w4/v/cuj7/3Lo+/9y6Pv/cuj7/2jV+v9YtfH/P4Lg/0CD9/9Bg/r/P4D6/z59+v8+fPr/OnTo/2166/+Riv//kor/heHTSkzj1Uv/49VL/97QSf+Jgzj/f5iX/7Tz/f+Y8P3/mvD9/5rw/f+a8P3/mvD9/3/W/f9uxv3/a8P9/2nB/f9nvv3/Y7n9/16z/P9WqPv/SpX0/1ak8P953vv/fOr7/3jn+/9pz/v/ceD7/3Xo+/9y5Pv/W7n7/2zb+/9y6Pv/cuj7/3Lo+/9w5Pv/Xbz7/1Gn9f9BhuH/Pn/z/0CC+v8/gPr/Pn76/z5++v8+fPf/Q23c/4+L/f+Ujf//lI3/TOjaSyLj1Uvm49VL/+PVS//g0kr/d3Ao/2J3dv+b3ej/me/8/5rw/f+a8P3/mO79/33U/f9uxv3/a8P9/2nA/f9mvv3/a7z8/227/P9er/z/UqL8/1Ki/P9u0Pv/cdj7/1+7+/9ct/v/cuL7/3Hi+/9fv/v/TZz7/2TJ+/9v4Pv/bd37/2fM+v9Lmff/RY7t/zt53f87fPP/PoD6/z5/+v8+f/r/P4D6/0CA+f89c+X/d4Dt/5eP/P+Zkf7mnpb/IuHSSxHk1Uux49VL/9rNSP+flzn/h4lR/2R0a/93nrn/e73q/5Hg+P+L4v3/f9b9/3HI/f9zyP3/fcn9/2zB/f9tv/3/hcf8/4fF/P96vfz/Wqn8/1Cf/P9Tn/v/T577/1Cg+/9Vqfv/YsX7/1q0+/9Nnfv/SZX7/0mW+/9Nnfb/RIzt/1SK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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=X%3A%5CSome%20Useful%20Stuff%5CApplications%5CWeb%5Cnext-sukadia.dev%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: favicon_next_metadata_namespaceObject,
    pathname: "/favicon.ico",
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!X:\\Some Useful Stuff\\Applications\\Web\\next-sukadia.dev\\app\\favicon.ico?__next_metadata",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [405,572], () => (__webpack_exec__(8396)));
module.exports = __webpack_exports__;

})();
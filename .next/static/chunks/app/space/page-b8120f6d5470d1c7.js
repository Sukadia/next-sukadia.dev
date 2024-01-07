(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{4310:function(e,t,n){Promise.resolve().then(n.bind(n,341))},1128:function(e,t,n){"use strict";let a,r,d,o,i,s,l;n.d(t,{Z:function(){return BabylonInteractivity}});var c=n(9111),h=n(6086);let u=[];function hashString(e){var t,n=0;for(t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t)|0;return Math.abs(n)}function mulberry32(e){var t=e+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296}let BabylonInteractivity=class BabylonInteractivity{static generateFrame(){if(!a)return;let e=performance.now(),t=(0,h.g)();(a.width!=t.width||a.height!=t.height)&&this.resizeFrame(t.width,t.height),s!=t.seed&&(l=mulberry32(hashString(t.seed)),s=t.seed,console.log(1)),i.onApply=e=>{e.setFloat("seed",l+5),e.setFloat("density",t.density/100),e.setFloat("brightness",t.brightness/100)};for(let e=0;e<u.length;e++)o.detachPostProcess(u[e]);for(let e=0;e<t.count;e++)o.attachPostProcess(u[e]),u[e].onApply=n=>{n.setFloat("seed",1e3*l*(e+1)),n.setFloat4("color",t["color".concat(e+1)].r/255,t["color".concat(e+1)].g/255,t["color".concat(e+1)].b/255,1),n.setUInt("nebulascale",t.scale),n.setUInt("depth",t.depth),n.setFloat("intensity",t.intensity/100-1),n.setFloat("falloff",t.falloff),n.setFloat("persistence",t.persistence)},u[e].onApplyObservable.add(t=>{t.setTextureSampler("textureSamplerSampler",u[e].inputTexture.texture)});d.onAfterRenderObservable.addOnce(()=>{console.log("Rendered in ".concat(Math.round((performance.now()-e)*100)/100,"ms"))}),r.beginFrame(),d.render(),r.endFrame()}static resizeFrame(e,t){a.style.width=e.toString()+"px",a.style.height=t.toString()+"px",r.resize()}static async exportFrame(){let e=(0,h.g)();c.w1W.CreateScreenshotUsingRenderTarget(r,o,{width:a.width,height:a.height},void 0,void 0,void 0,void 0,"nebula-".concat(e.seed)),this.generateFrame()}static setTransparency(e){e?d.clearColor=new c.HEv(0,0,0,0):d.clearColor=new c.HEv(0,0,0,1)}static initialize(e,t,n,s){a=e,r=t,d=n,o=s,i=new c.Dso("StarShader","stars",null,null,1,o,void 0,r,!0,void 0,void 0,void 0,void 0,void 0,void 0,c.xeF.WGSL),o.attachPostProcess(i);for(let e=0;e<10;e++)u.push(new c.Dso("NebulaShader","nebulas",null,null,1,o,void 0,r,!0,void 0,void 0,void 0,void 0,void 0,void 0,c.xeF.WGSL))}}},6086:function(e,t,n){"use strict";let a;n.d(t,{Z:function(){return ParameterPanel},g:function(){return getParameters}});var r=n(7089),d=n(1128);function ParameterPanel(){a=new r.Pane({title:"Parameters",container:document.getElementById("TweakPane")||void 0});let e={width:window.innerWidth,height:window.innerHeight,transparent:!1,autoupdate:!1},t=a.addFolder({title:"Canvas",expanded:!0});t.addInput(e,"width",{min:100,max:7680,step:1}),t.addInput(e,"height",{min:100,max:4320,step:1}),t.addInput(e,"transparent").on("change",()=>{console.log(1),d.Z.setTransparency(e.transparent)});let n={density:1.5,brightness:100},o=a.addFolder({title:"Stars",expanded:!0});o.addInput(n,"density",{min:0,max:10,step:.01,format:e=>e.toFixed(2)+"%"}),o.addInput(n,"brightness",{min:0,max:200,step:.1,format:e=>e.toFixed(1)+"%"});let i={count:2,scale:5,depth:2,intensity:100,falloff:2,persistence:.5},s=a.addFolder({title:"Nebula",expanded:!0});s.addInput(i,"count",{min:0,max:3,step:1}).on("change",()=>{if(0==i.count)c.hidden=!0;else{c.hidden=!1;for(let e=0;e<h.length;e++)e<i.count?h[e].hidden=!1:h[e].hidden=!0}a.refresh()});let l={},c=s.addFolder({title:"Colors",expanded:!1}),h=[];for(let e=0;e<3;e++)l["color"+(e+1)]={r:Math.ceil(255*Math.random()),g:Math.ceil(255*Math.random()),b:Math.ceil(255*Math.random())},h.push(c.addInput(l,"color"+(e+1))),e>i.count-1&&(h[e].hidden=!0);s.addInput(i,"scale",{min:1,max:50,step:1}),s.addInput(i,"depth",{min:0,max:20,step:1}),s.addInput(i,"intensity",{min:50,max:150,step:1,format:e=>e+"%"}),s.addInput(i,"falloff",{min:1,max:10,step:.1}),s.addInput(i,"persistence",{min:0,max:1,step:.01});let u={seed:""+Math.floor(1e12*Math.random())},m=a.addFolder({title:"Seed",expanded:!1});m.addInput(u,"seed",{format:e=>e.toFixed(0)}),m.addButton({title:"Randomize seed"}).on("click",()=>{u.seed=Math.floor(1e12*Math.random()).toString(),a.refresh(),d.Z.generateFrame()}),a.addSeparator(),a.addButton({title:"Render"}).on("click",()=>{d.Z.generateFrame()}),a.addButton({title:"Render Random"}).on("click",()=>{u.seed=Math.floor(1e12*Math.random()).toString();for(let e=0;e<3;e++)l["color"+(e+1)]={r:Math.ceil(255*Math.random()),g:Math.ceil(255*Math.random()),b:Math.ceil(255*Math.random())};a.refresh(),d.Z.generateFrame()}),a.addSeparator(),a.addButton({title:"Save Image"}).on("click",()=>{d.Z.exportFrame()}),a.addSeparator(),a.addInput(e,"autoupdate"),a.on("change",t=>{let n=t.presetKey;e.autoupdate&&(("width"==n||"height"==n)&&d.Z.resizeFrame(e.width,e.height),d.Z.generateFrame())})}function getParameters(){return a.exportPreset()}},341:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Sp}});var a=n(7437),r=n(2265),d=n(8811),o=n.n(d);function Loading(){return(0,a.jsx)("div",{className:"flex h-screen justify-center items-center",children:(0,a.jsx)("div",{className:"flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-cyan-400 to-blue-900 animate-spin",children:(0,a.jsx)("div",{className:"h-10 w-10 rounded-full bg-black"})})})}var i=n(6086);let s=o()(()=>n.e(751).then(n.bind(n,2751)),{loadableGenerated:{webpack:()=>[2751]},ssr:!1});function Sp(){let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{t(!0),(0,i.Z)()},[]),(0,a.jsxs)("main",{children:[(0,a.jsx)("div",{id:"TweakPane",className:"fixed top-2.5 right-2.5"}),e&&(0,a.jsx)(s,{}),!e&&(0,a.jsx)(Loading,{})]})}}},function(e){e.O(0,[732,105,735,790,116,173,971,472,744],function(){return e(e.s=4310)}),_N_E=e.O()}]);
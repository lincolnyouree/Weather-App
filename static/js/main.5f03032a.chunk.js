(this["webpackJsonpweather-api-tutorial"]=this["webpackJsonpweather-api-tutorial"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),c=(n(14),n(1)),u=n.n(c),l=n(4),m=n(5),p=n(6),s=n(7),d=n(8),h=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Weather Info"),r.a.createElement("p",null,"Search for a city to see the current weather conditions."))},y=function(e){return r.a.createElement("form",{onSubmit:e.loadWeather},r.a.createElement("input",{type:"text",name:"city",placeholder:"City..."}),r.a.createElement("input",{type:"text",name:"country",placeholder:"Country..."}),r.a.createElement("button",null,"Get Weather"))},w=function(e){return r.a.createElement("div",null,e.country&&e.city&&r.a.createElement("p",null,"Location: ",e.city,",  ",e.country),e.temperature&&r.a.createElement("p",null,"Temperature: ",e.temperature," \xb0F"),e.tempLow&&e.tempHigh&&r.a.createElement("p",null,"High Temp: ",e.tempHigh,"\xb0F  Low Temp: ",e.tempLow,"\xb0F"),e.humidity&&r.a.createElement("p",null,"Humidity: ",e.humidity," %"),e.description&&r.a.createElement("p",null,"Conditions: ",e.description),e.windSpeed&&r.a.createElement("p",null,"Wind Speed: ",e.windSpeed," mph"),e.error&&r.a.createElement("p",null,e.error))},v=(n(16),function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={temperature:void 0,tempLow:void 0,tempHigh:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,windSpeed:void 0,error:void 0},e.getWeather=function(){var t=Object(l.a)(u.a.mark((function t(n){var a,r,i,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=n.target.elements.city.value,r=n.target.elements.country.value,t.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(r,"&appid=").concat("c847e4b8ed4b09d3d99d96dbb4702f54"));case 5:return i=t.sent,t.next=8,i.json();case 8:o=t.sent,e.setState({temperature:Math.trunc(1.8*(o.main.temp-273.15)+32),tempLow:Math.trunc(1.8*(o.main.temp_min-273.15)+32),tempHigh:Math.trunc(1.8*(o.main.temp_max-273.15)+32),city:o.name,country:o.sys.country,humidity:o.main.humidity,description:o.weather[0].description,windSpeed:o.wind.speed,error:""}),console.log(o);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"form"},r.a.createElement(h,null),r.a.createElement(y,{loadWeather:this.getWeather}),r.a.createElement(w,{temperature:this.state.temperature,tempLow:this.state.tempLow,tempHigh:this.state.tempHigh,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,windSpeed:this.state.windSpeed,error:this.state.error})))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.5f03032a.chunk.js.map
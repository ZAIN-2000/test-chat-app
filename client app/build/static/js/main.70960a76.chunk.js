(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{124:function(e,t,a){e.exports=a(317)},129:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),i=a.n(r),u=(a(129),a(46)),o=a(4),l=a(28),s=a(27),p=a.n(s),m=(a(132),p.a.initializeApp({apiKey:"AIzaSyCpQCInUHhzmzZWEKoD0xgVSdSlkTeUXvc",authDomain:"projectchat-85aaa.firebaseapp.com",projectId:"projectchat-85aaa",storageBucket:"projectchat-85aaa.appspot.com",messagingSenderId:"813822699471",appId:"1:813822699471:web:55d3aec753b0ecb64bd4ba"}).auth()),h=c.a.createContext();function d(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),i=r[0],u=r[1],s=Object(n.useState)(),p=Object(l.a)(s,2),d=p[0],f=p[1],b=Object(o.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){f(e),u(!1),b.push("/chats")}))}),[d,b]);var g={user:d};return c.a.createElement(h.Provider,{value:g},!i&&t)}var f=a(29),b=a.n(f),g=a(69),v=a(3),E=a.n(v),j=a(122);function O(){var e=Object(n.useRef)(!1),t=Object(n.useState)(!0),a=Object(l.a)(t,2),r=a[0],i=a[1],u=Object(n.useContext)(h).user,s=Object(o.f)();function p(){return(p=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.signOut();case 2:s.push("/");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"test.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(!e.current){if(e.current=!0,!u||null===u)return void s.push("/");E.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"4cda7a70-d44b-454a-8719-990a840ccb5e","user-name":u.email,"user-secret":u.uid}}).then((function(){return i(!1)})).catch((function(e){var t=new FormData;t.append("email",u.email),t.append("username",u.email),t.append("secret",u.uid),function(e){return d.apply(this,arguments)}(u.photoURL).then((function(e){t.append("avatar",e,e.name),E.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"437c0029-2617-4fe7-ac48-3b77f512da62"}}).then((function(){return i(!1)})).catch((function(e){return console.log("e",e.response)}))}))}))}}),[u,s]),!u||r?c.a.createElement("div",null):c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Unichat"),c.a.createElement("div",{onClick:function(){return p.apply(this,arguments)},className:"logout-tab"},"Logout")),c.a.createElement(j.d,{height:"calc(100vh - 66px)",projectID:"4cda7a70-d44b-454a-8719-990a840ccb5e",userName:u.email,userSecret:u.uid}))}var k=a(319),w=a(320);function S(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to Unichat!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(k.a,null)," Sign In with Google"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return m.signInWithRedirect(new p.a.auth.FacebookAuthProvider)}},c.a.createElement(w.a,null)," Sign In with Facebook")))}var y=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(u.a,null,c.a.createElement(d,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/chats",component:O}),c.a.createElement(o.a,{path:"/",component:S})))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.70960a76.chunk.js.map
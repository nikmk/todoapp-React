(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),r=a.n(c),l=(a(13),a(7)),s=a(1),i=a(2),d=a(4),u=a(3),m=function(e){var t=e.todos,a=e.deletetodo,n=t.length?t.map((function(e){return o.a.createElement("div",{className:"collection-item row",key:e.id},o.a.createElement("span",{className:"col s4 "},e.content),o.a.createElement("span",{className:"col s3 center push-s5"},o.a.createElement("span",{className:"centre"},o.a.createElement("button",{className:"waves-effect waves-green blue btn ",onClick:function(){a(e.id)}},o.a.createElement("i",{className:"material-icons right"},"check"),"Done"))))})):o.a.createElement("p",{className:"center"},"You have nothing");return o.a.createElement("div",{className:"todos collection"},n)},h=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={content:""},e.handleSubmit=function(t){t.preventDefault(),e.props.addtodo(e.state),e.setState({content:""})},e.handleChange=function(t){e.setState({content:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Add new todo: "),o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content})))}}]),a}(n.Component),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:1,content:"Buy some milk"},{id:2,content:"Play mario Kart"}]},e.deleteTodo=function(t){var a=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:a}),console.log("Deleted: "+t)},e.addtodo=function(t){t.id=Math.floor((new Date).getTime()*Math.random());var a=[].concat(Object(l.a)(e.state.todos),[t]);e.setState({todos:a})},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"todoapp container"},o.a.createElement("h1",{className:"center blue-text"}," Todo's (Made in React.js)"),o.a.createElement(m,{todos:this.state.todos,deletetodo:this.deleteTodo}),o.a.createElement(h,{addtodo:this.addtodo}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.469211a5.chunk.js.map
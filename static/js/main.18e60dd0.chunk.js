(this.webpackJsonpterfsvspikachu=this.webpackJsonpterfsvspikachu||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"jkrowling":[{"tweet":"\\"If sex isn\u2019t real, there\u2019s no same-sex attraction. If sex isn\u2019t real, the lived reality of women globally is erased. I know and love trans people, but erasing the concept of sex removes the ability of many to meaningfully discuss their lives. It isn\u2019t hate to speak the truth.\\" *"},{"tweet":"\\"Dress however you please. Call yourself whatever you like. Sleep with any consenting adult who\u2019ll have you. Live your best life in peace and security. But force women out of their jobs for stating that sex is real?\\" *"},{"tweet":"\\"\u2018People who menstruate.\u2019 I\u2019m sure there used to be a word for those people. Someone help me out. Wumben? Wimpund? Woomud?\\" *"},{"tweet":"\\"I love this truly fabulous Ickabog, with its bat ears, mismatched eyes, and terrifying bloodstained teeth! On court, Wolf claimed the Facebook post in which he\'d said he wanted to \'fuck up some TERFs\' was just \'bravado.\'\\" *"},{"tweet":"\\"I respect every trans person\u2019s right to live any way that feels authentic and comfortable to them. I\u2019d march with you if you were discriminated against on the basis of being trans. At the same time, my life has been shaped by being female. I do not believe it\u2019s hateful to say so.\\" *"},{"tweet":"\\"Many health professionals are concerned that young people struggling with their mental health are being shunted towards hormones and surgery when this may not be in their best interests.\\" *"},{"tweet":"\\"Many, myself included, believe we are watching a new kind of conversion therapy for young gay people, who are being set on a lifelong path of medicalisation that may result in the loss of their fertility and/or full sexual function.\\" *"}],"pikachu":[{"tweet":"Just...SHUT UP"},{"tweet":"You are...such a deception Johanne."},{"tweet":"I\'m not disappoint. I\'m just mad."},{"tweet":"Please, stop tweeting. Stop writing. Stop talking. Stop."},{"tweet":"SHUT the f*** UP !!!"},{"tweet":"The sorting Hat Johanne, what was it ??! Just some \'if-you-think-you\'re-a-Gryffindor,-you-are\' bullshit ?? "},{"tweet":"Run away, Johanne. Run. Run away, and never return."},{"tweet":"Open a book."}]}')},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/pikachu.d6b8f572.png"},function(e,t,a){e.exports=a.p+"static/media/jk.6ad49947.png"},,function(e,t,a){e.exports=a.p+"static/media/foudre.8cb4f463.gif"},function(e,t,a){e.exports=a.p+"static/media/vaginapenis.6635e811.gif"},function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(5),r=a.n(l),o=(a(18),a(1)),c=a(2),s=a(4),h=a(3),m=(a(7),a(8)),u=a.n(m),d=a(11),f=a.n(d),p=function(e){return function(t){Object(s.a)(n,t);var a=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={hits:0},e.addOne=function(){e.setState((function(e){return{hits:e.hits+1}}))},e}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(t,a){if(this.state!==a){var n=e.name;this.props.reduceHandler(n)}}},{key:"render",value:function(){return i.a.createElement(e,Object.assign({hocState:this.state,addOneHit:this.addOne},this.props))}}]),n}(n.Component)},g=p(function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={lightningOnOff:"hide-lightning"},e.handleOnClickPika=function(){e.props.addOneHit(),e.triggerLightningAnimation()},e.triggerLightningAnimation=function(){e.setState({lightningOnOff:""}),setTimeout((function(){e.setState({lightningOnOff:"hide-lightning"})}),600)},e}return Object(c.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.setState)}},{key:"render",value:function(){var e=this.props,t=e.attack,a=e.hocState,n=e.life,l=e.pikatweet,r=n>0?i.a.createElement("td",null,n," %"):i.a.createElement("td",null," ",i.a.createElement("span",{className:"badge badge-danger"},"K.O !")),o=n>0?i.a.createElement("button",{onClick:this.handleOnClickPika,className:"btn btn-warning m-3"},t," Attack"):i.a.createElement("button",{className:"btn btn-danger m-3 disabled"},"K.O"),c=n>0&&i.a.createElement("div",{className:"pika-tweet"}," ",i.a.createElement("span",null,l)),s=n>0?i.a.createElement("img",{width:"230px",src:u.a,alt:"pikachu"}):i.a.createElement("img",{className:"ko-animation-origin ko-animation",width:"230px",src:u.a,alt:"pikachu"});return i.a.createElement("div",{className:"col d-flex flex-column align-items-center"},i.a.createElement("h1",{id:"h1-pikachu"},"Pikachu"),s,i.a.createElement("img",{id:"lightning-id",className:this.state.lightningOnOff,src:f.a,alt:"foudre"}),o,i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"Hits"),i.a.createElement("th",{scope:"col"},"Life"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,a.hits),r))),c)}}]),a}(n.Component)),b=a(9),w=a.n(b),k=a(12),E=a.n(k),v=p(function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={vaginaOnOff:"hide-vagina"},e.handleOnClickJK=function(){e.props.addOneHit(),e.triggerVaginaAnimation()},e.triggerVaginaAnimation=function(){e.setState({vaginaOnOff:""}),setTimeout((function(){e.setState({vaginaOnOff:"hide-vagina"})}),800)},e}return Object(c.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.setState)}},{key:"render",value:function(){var e=this.props,t=e.attack,a=e.hocState,n=e.life,l=e.jktweet,r=e.handleKill,o=e.isStephenKiller,c=n>0?i.a.createElement("td",null,n," %"):i.a.createElement("td",null," ",i.a.createElement("span",{className:"badge badge-danger"},"K.O !")),s=n>0?i.a.createElement("button",{onClick:this.handleOnClickJK,className:"btn btn-info m-3"}," ",t," Attack"):i.a.createElement("button",{className:"btn btn-danger m-3 disabled",id:"btn-fixed"},"K.O"),h=n<20&&n>0?i.a.createElement("button",{onClick:r,className:"btn btn-danger m-1"},"Help Me Steven King!"):n<=0&&o&&i.a.createElement("button",{className:"btn btn-secondary m-1 disabled"},"'Trans women are women'"),m=n>0&&i.a.createElement("div",{className:"jk-tweet"}," ",i.a.createElement("span",null,l)," "),u=n>0?i.a.createElement("img",{width:"230px",src:w.a,alt:"jkrowling"}):i.a.createElement("img",{className:"ko-animation-origin ko-animation",width:"230px",src:w.a,alt:"jkrowling"});return i.a.createElement("div",{className:"col d-flex flex-column align-items-center"},i.a.createElement("h1",{id:"h1-terfs"},"Terfs"),i.a.createElement("img",{id:"vagina-id",className:this.state.vaginaOnOff,src:E.a,alt:"vagina"}),u,s,h,i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"Hits"),i.a.createElement("th",{scope:"col"},"Life"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,a.hits),c))),m)}}]),a}(n.Component)),y=a(6),O=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(e){return r.a.createPortal(i.a.createElement("div",{onClick:this.props.close,className:"modal"},i.a.createElement("div",null,i.a.createElement("h4",null,"Keep informed of",i.a.createElement("br",null),"  ",i.a.createElement("span",null,"JK Rowling's latest transphobic tweets"),i.a.createElement("br",null)," whith Pikachu !"),i.a.createElement("h5",null,"('cause otherwise, it hurts too much)"),i.a.createElement("br",null),i.a.createElement("h3",null,"Click ",i.a.createElement("span",null,"Anywhere")," to ",i.a.createElement("span",null,"start")))),document.getElementById("second-root"))}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleHide=function(){n.setState({showModal:!1})},n.randomNumb=function(){return Math.floor(Math.random()*(y.pikachu.length-1))},n.kill=function(){n.setState({jkrowling:0,isStephenKiller:!0})},n.reduceLife=function(e){"Pikachu"===e?n.setState({jkrowling:n.state.jkrowling-Math.floor(10*Math.random()+5),pikachuTweet:y.pikachu[n.randomNumb()].tweet}):n.setState({pikachu:n.state.pikachu-Math.floor(7*Math.random()+5),jkTweet:y.jkrowling[n.randomNumb()].tweet})},n.state={pikachu:100,jkrowling:100,jkTweet:"Good evening Pikachu",pikachuTweet:"Hi Johanne",isStephenKiller:!1,showModal:!0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.pikachu,a=e.jkrowling,n=e.jkTweet,l=e.pikachuTweet,r=e.isStephenKiller,o=this.state.showModal&&i.a.createElement(O,{close:this.handleHide});return i.a.createElement("div",{className:"app-div container text-center"},i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,"vs"),o),i.a.createElement("div",{className:"row pikajk"},i.a.createElement(v,{handleKill:this.kill,jktweet:n,attack:'"Say Transphobic Bullshit"',life:a,reduceHandler:this.reduceLife,isStephenKiller:r}),i.a.createElement(g,{pikatweet:l,attack:'"Thunder"',life:t,reduceHandler:this.reduceLife})),i.a.createElement("footer",null,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row d-flex"},i.a.createElement("div",{className:"col-lg-4 col-md-4 elem"},"*All tweets are from JK Rowling's account."),i.a.createElement("div",{className:"col-lg-4 col-md-4 elem"},"\xa9 2020 Shay Reichert"),i.a.createElement("div",{id:"logos",className:"col-lg-4 col-md-4 elem"},i.a.createElement("a",{href:"mailto:shay.reichert@outlook.fr"},i.a.createElement("i",{className:"fas fa-at fa-2x"})),i.a.createElement("a",{href:"https://twitter.com/ShayReichert",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-twitter-square fa-2x"})),i.a.createElement("a",{href:"https://github.com/ShayReichert",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-github fa-2x"})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.18e60dd0.chunk.js.map
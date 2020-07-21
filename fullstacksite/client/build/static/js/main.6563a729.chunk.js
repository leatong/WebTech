(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(41),i=t.n(c),o=(t(98),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=t(32),m=t(34),u=t(57),d=t.n(u),p=t(42),h=t.n(p),g=t(62),f=t.n(g),v=t(80),E=t.n(v),b=t(78),_=t.n(b),y=t(79),N=t.n(y),C=t(81),w=t.n(C),O=t(137);function S(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.link},r.a.createElement(e.icon,{className:f.a.icon})))}function P(e){return r.a.createElement("li",null,r.a.createElement("a",{href:e.link},r.a.createElement("div",{className:f.a.icon},r.a.createElement(O.a,{className:e.icon}))))}var x=function(){return r.a.createElement("div",{className:f.a.footer},r.a.createElement("ul",null,r.a.createElement(S,{link:"https://www.instagram.com/tangerinerye/",icon:_.a}),r.a.createElement(S,{link:"https://www.facebook.com/tangerinerye/",icon:N.a}),r.a.createElement(S,{link:"https://www.youtube.com/channel/UC18c12v12WXT4X-yljzwZwg",icon:E.a}),r.a.createElement(S,{link:"",icon:w.a}),r.a.createElement(P,{link:"https://open.spotify.com/artist/6N7HQGSTngvAUUqDquoXfI",icon:"fab fa-spotify"}),r.a.createElement(P,{link:"https://music.apple.com/gb/artist/tangerine-rye/id1441879382",icon:"fab fa-itunes-note"})))},k=t(82),j=t.n(k),A=t(140),D=j()({root:{background:"white",border:"1px solid",color:"black",height:48,margin:"10px",padding:"0 30px","&:hover":{backgroundColor:"#FF7A51",color:"white"}}})(A.a);function T(e){return r.a.createElement(s.b,{to:"/".concat(e.path),style:{textDecoration:"none"}},r.a.createElement(D,{variant:e.buttonStyle},e.name))}function B(e){return r.a.createElement(s.b,{to:"/merch/".concat(e.path),style:{textDecoration:"none"}},r.a.createElement(A.a,{variant:"contained",style:{width:"200px",margin:"2px",padding:0}},"DETAILS"))}function L(e){return e.path===e.currentPage?r.a.createElement(s.b,{to:"/".concat(e.path),style:{textDecoration:"none"}},r.a.createElement(A.a,{variant:"contained",disabled:!0,style:{background:"#FF7A51",color:"white",width:"120px",height:"45px",fontSize:"20px"},endIcon:e.endIcon},e.name)):r.a.createElement(s.b,{to:"/".concat(e.path),style:{textDecoration:"none"}},r.a.createElement(A.a,{color:"inherit",style:{color:"tomato",width:"120px",height:"45px",fontSize:"20px"},endIcon:e.endIcon},e.name))}var I=t(8),z=t(9),R=t(10),M=t(11),F=function(e){Object(M.a)(t,e);var a=Object(R.a)(t);function t(e){var n;return Object(I.a)(this,t),(n=a.call(this,e)).handleUserEmailChange=function(e){n.setState({userEmail:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.state.userEmail&&fetch("/api/subs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.userEmail})}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),alert("Success: ".concat(n.state.userEmail," added"))},n.state={userEmail:""},n}return Object(z.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:h.a.email},r.a.createElement("input",{className:h.a.subscribe,type:"email",name:"userEmail",placeholder:"Enter Email Address",value:this.state.userEmail,onChange:this.handleUserEmailChange}),r.a.createElement(D,{type:"submit",style:{fontSize:"2vh",padding:"0 2vh",height:40}},"Subscribe!")))}}]),t}(n.Component);var H=function(){return r.a.createElement("div",{className:h.a.center},r.a.createElement("img",{className:h.a.logo,src:d.a,alt:"Tangerine Rye logo"}),r.a.createElement(T,{name:"ENTER SITE",path:"music",buttonStyle:"outlined"}),r.a.createElement(T,{name:"TOUR",path:"tour",buttonStyle:"outlined"}),r.a.createElement(T,{name:"MERCH",path:"merch",buttonStyle:"outlined"}),r.a.createElement(T,{name:"ABOUT",path:"about",buttonStyle:"outlined"}),r.a.createElement(F,null),r.a.createElement(x,null))},J=t(61),U=t.n(J),W=t(84),V=t.n(W),X=t(85),q=t.n(X),G=t(86),Y=t.n(G),Z=t(27),Q=t.n(Z),K=t(13),$=t.n(K),ee=t(87),ae=t.n(ee);var te=function(e){return r.a.createElement("div",{className:$.a.center},r.a.createElement("img",{className:$.a.logo,src:d.a,alt:"Tangerine Rye logo"}),r.a.createElement("hr",{style:{backgroundColor:"#FF7A51",border:"transparent",height:"4px",margin:"-3px"}}),r.a.createElement("div",{className:$.a.bar},r.a.createElement("div",{className:$.a.side}),r.a.createElement("div",{className:$.a.buttons},r.a.createElement(L,{path:"",name:"PORTAL",currentPage:e.currentPage}),r.a.createElement(L,{path:"music",name:"MUSIC",currentPage:e.currentPage}),r.a.createElement(L,{path:"tour",name:"TOUR",currentPage:e.currentPage}),r.a.createElement(L,{path:"merch",name:"SHOP",currentPage:e.currentPage}),r.a.createElement(L,{path:"about",name:"ABOUT",currentPage:e.currentPage})),r.a.createElement("div",{className:$.a.side},r.a.createElement(L,{path:"cart",name:"cart",endIcon:r.a.createElement(ae.a,null),currentPage:e.currentPage}))),r.a.createElement("hr",{style:{backgroundColor:"#FF7A51",border:"transparent",height:"4px",margin:"-3px"}}))};var ne=function(){return r.a.createElement("div",{className:$.a.overview},r.a.createElement(te,{currentPage:"music"}),r.a.createElement("div",{className:Q.a.center},r.a.createElement("div",{className:Q.a.vinyl},r.a.createElement("img",{className:Q.a.img,src:U.a,alt:"Tangerine Rye members"}),r.a.createElement("img",{id:"album",className:Q.a.album,src:V.a,alt:"Tangerine Rye album cover"}),r.a.createElement("img",{className:Q.a.lemon,src:q.a,alt:"La la lemonade song cover"}),r.a.createElement("img",{className:Q.a.honey,src:Y.a,alt:"Honey song cover"}))),r.a.createElement("div",{className:Q.a.embed},r.a.createElement("iframe",{title:"Honey Youtube",width:"560",height:"315",src:"https://www.youtube.com/embed/haBxkGrYPUI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:Q.a.youtube}),r.a.createElement("iframe",{title:"Tangerine Rye Spotify",src:"https://open.spotify.com/embed/artist/6N7HQGSTngvAUUqDquoXfI",width:"300",height:"380",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"})),r.a.createElement(x,null))},re=t(19),ce=t.n(re),ie=t(30),oe=t(23),le=t.n(oe);var se=function(e){return r.a.createElement("div",{className:le.a.tile},r.a.createElement("div",{className:le.a.tag},r.a.createElement("p",{className:le.a.name},e.name),r.a.createElement("p",{className:le.a.price},e.price)))},me=function(e){Object(M.a)(t,e);var a=Object(R.a)(t);function t(){return Object(I.a)(this,t),a.apply(this,arguments)}return Object(z.a)(t,[{key:"render",value:function(){var e=this.props.product,a=e.picture,t=e.description,n=e.name,c=e.price,i=e.id;return r.a.createElement("div",null,r.a.createElement("div",{className:le.a.tile},r.a.createElement("img",{className:le.a.pic,src:"assets/".concat(a),alt:t}),r.a.createElement(se,{name:n,description:t,price:"\xa3 ".concat(c),id:i}),r.a.createElement(B,{path:i})))}}]),t}(n.Component),ue=function(e){Object(M.a)(t,e);var a=Object(R.a)(t);function t(){var e;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={loading:!0,productList:null},e}return Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ie.a)(ce.a.mark((function e(){var a,t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/products");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,this.setState({loading:!1,productList:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:$.a.overview},r.a.createElement(te,{currentPage:"merch"}),r.a.createElement("div",{className:le.a.overview},"loading..."),r.a.createElement(x,null)):this.state.productList?r.a.createElement("div",{className:$.a.overview},r.a.createElement(te,{currentPage:"merch"}),r.a.createElement("div",{className:le.a.overview},this.state.productList.map((function(e){return r.a.createElement(me,{product:e,key:e.id})}))),r.a.createElement(x,null)):r.a.createElement("div",null,r.a.createElement(te,{currentPage:"merch"}),"no product to display",r.a.createElement(x,null))}}]),t}(n.Component),de=t(37),pe=t.n(de),he=function(e){Object(M.a)(t,e);var a=Object(R.a)(t);function t(){return Object(I.a)(this,t),a.apply(this,arguments)}return Object(z.a)(t,[{key:"render",value:function(){var e=this.props.tour,a=e.city,t=e.country,n=e.date;return r.a.createElement("p",null,a,", ",t,", ",n)}}]),t}(n.Component),ge=function(e){Object(M.a)(t,e);var a=Object(R.a)(t);function t(){var e;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={loading:!0,tourDates:null},e}return Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ie.a)(ce.a.mark((function e(){var a,t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/tour");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,this.setState({loading:!1,tourDates:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",null,r.a.createElement(te,{currentPage:"tour"}),r.a.createElement("div",{className:pe.a.center},r.a.createElement("p",{className:pe.a.heading},"2020 WORLD TOUR"),r.a.createElement("p",null,"loading...")),r.a.createElement(x,null)):this.state.tourDates?r.a.createElement("div",null,r.a.createElement(te,{currentPage:"tour"}),r.a.createElement("div",{className:pe.a.center},r.a.createElement("p",{className:pe.a.heading},"2020 WORLD TOUR"),r.a.createElement("div",null,this.state.tourDates.map((function(e){return r.a.createElement(he,{tour:e,key:e.id})})))),r.a.createElement(x,null)):r.a.createElement("div",null,r.a.createElement(te,{currentPage:"tour"}),r.a.createElement("div",{className:pe.a.center},r.a.createElement("p",{className:pe.a.heading},"2020 WORLD TOUR"),r.a.createElement("p",null,"Sorry, no tours happening currently!")),r.a.createElement(x,null))}}]),t}(n.Component),fe=t(6),ve=t.n(fe),Ee=t(88),be=t.n(Ee),_e=t(89),ye=t.n(_e),Ne=t(90),Ce=t.n(Ne);var we=function(){return r.a.createElement("div",{className:$.a.overview},r.a.createElement(te,{currentPage:"about"}),r.a.createElement("div",{className:ve.a.tile},r.a.createElement("img",{className:ve.a.image,src:U.a,alt:"The band: Jordan (Guitarist/Vocalist), Hal (Bassist/Vocalist), Oscar (Drummer)"}),r.a.createElement("div",{className:ve.a.text},r.a.createElement("div",{className:ve.a.right},r.a.createElement("p",{className:ve.a.subtitle}," The Band"),r.a.createElement("p",{className:ve.a.content},"Jordan (vocals and guitar) and Hal (bass and vocals) met at a summer camp in Cambridge aged 15 and became friends over a shared interest in classic rock, which was very uncommon amongst their peers. The passion for music continues to grow and manifest itself in this current band with Oscar Reynolds on drums. Their journey from their teen-hood band to the upcoming EP to be released early next month is woven into the very fabric of the music...")))),r.a.createElement("div",{className:ve.a.tile},r.a.createElement("div",{className:ve.a.text},r.a.createElement("div",{className:ve.a.left},r.a.createElement("p",{className:ve.a.subtitle},"Jordan"),r.a.createElement("p",{className:ve.a.content},"Jordan is a singer-guitarist, who\u2019s a bit of an energetic scatterbrain. Much less serious than these photos suggest. Raised on popular music of the 20th century, and a student of the blues, his influences range from classic rock bands such as The Beatles and Led Zeppelin, to old school Soul like Sam Cooke and Ray Charles, and blues greats like BB King and T-Bone Walker. While he is a geek of all things guitar, he is first and foremost a songwriter and aims to \u201csay\u201d things with music in this respect, considering McCartney his one musical icon."))),r.a.createElement("img",{className:ve.a.image,src:Ce.a,alt:"Jordan Susanto Guitarist"})),r.a.createElement("div",{className:ve.a.tile},r.a.createElement("img",{className:ve.a.image,src:ye.a,alt:"Hal Bassist"}),r.a.createElement("div",{className:ve.a.text},r.a.createElement("div",{className:ve.a.right},r.a.createElement("p",{className:ve.a.subtitle},"Hal"),r.a.createElement("p",{className:ve.a.content},"Hal is a bass player. And bass players will be bass players. He also has some serious singing chops! Though generally on the more reserved side, the inception of his passion for music initially stemmed from the real heavy stuff in his teens!! Nowadays he\u2019d name Led Zeppelin\u2019s John Paul Jones the bass player he aspires to be, as Jonesy is the sweet spot between Funk/Soul groove and hard driving Blues based Rock music! His other rock influences include Duff Mckagan of Guns N\u2019 Roses; and being classically trained, has always had deep admiration for Queen in their operatic approach to popular rock. Hal also enjoys contemporary RnB such as Daniel Caesar & Labrinth.")))),r.a.createElement("div",{className:ve.a.tile},r.a.createElement("div",{className:ve.a.text},r.a.createElement("div",{className:ve.a.left},r.a.createElement("p",{className:ve.a.subtitle},"Oscar"),r.a.createElement("p",{className:ve.a.content},"Apart from being a seriously grooving mofo and all around excellent drummer/musician, Oscar\u2019s also the most endearing sweetheart. He mainly comes from the funk & soul side of things, but loves everything from James Brown, The Meters & Lettuce to Little Feat and the Tedeschi/Trucks BandWhich, according to this band\u2019s general approach, aren\u2019t very different at all. In addition being a highly proficient drummer, he is also a passionate songwriter and composer."))),r.a.createElement("img",{className:ve.a.image,src:be.a,alt:"Oscar Drummer"})),r.a.createElement("div",{className:ve.a.footer},r.a.createElement(A.a,{onClick:function(){return document.body.scrollTop=0,void(document.documentElement.scrollTop=0)},style:{fontWeight:"bold"}},"Back to top")),r.a.createElement(x,null))},Oe=t(5),Se=t.n(Oe);function Pe(e,a){var t=e.size,n=e.count,r=localStorage.getItem("myCart");if(r){for(var c=JSON.parse(r),i=!1,o=0;o<c.length;o++)c[o].id===a&&c[o].size===t&&(console.log(c[o].count,n),c[o].count+=n,c[o].cost+=n*c[o].price,i=!0,o=c.length),localStorage.setItem("myCart",JSON.stringify(c));i||localStorage.setItem("myCart",JSON.stringify(xe(c,e,a)))}else{localStorage.setItem("myCart",JSON.stringify(xe([],e,a)))}alert("Added to shopping cart")}function xe(e,a,t){var n=a.count,r=a.size,c=a.details[0],i=c.name,o=c.price,l={id:t,name:i,picture:c.picture,size:r,count:n,price:o,cost:o*n};return console.log(l),e.push(l),e}var ke=function(e){Object(M.a)(t,e);var a=Object(R.a)(t);function t(){var e;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={loading:!0,details:null,picId:0,size:"S",count:0},e.decrement=function(){e.setState({count:e.state.count<=0?0:e.state.count-1})},e.increment=function(){e.setState({count:e.state.count+1})},e.addToCart=function(){return Pe(e.state,e.props.match.params.id)},e}return Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ie.a)(ce.a.mark((function e(){var a,t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/products/".concat(this.props.match.params.id));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,this.setState({loading:!1,details:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.loading)return r.a.createElement("div",null,"loading...");if(!this.state.details)return r.a.createElement("div",null,"no detail to display");var a=this.state.details[0],t=a.name,n=a.description,c=a.price;return r.a.createElement("div",{className:$.a.overview},r.a.createElement(te,{currentPage:"shop"}),r.a.createElement("div",{className:Se.a.overview},r.a.createElement("div",{className:Se.a.image},r.a.createElement("div",{className:Se.a.left},this.state.details.map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement("img",{className:Se.a.smallpic,onClick:function(){e.setState({picId:n})},src:"/assets/".concat(a.picture),alt:t}))}))),r.a.createElement("div",{className:Se.a.right},r.a.createElement("img",{className:Se.a.largepic,src:"/assets/".concat(this.state.details[this.state.picId].picture),alt:t}))),r.a.createElement("div",{className:Se.a.text},r.a.createElement("div",{className:Se.a.name},t),r.a.createElement("div",{className:Se.a.description},n),r.a.createElement("div",{className:Se.a.price},"\xa3 ".concat(c)),r.a.createElement("div",{className:Se.a.sizebox},r.a.createElement(A.a,{className:"S"===this.state.size?Se.a.sizebuttonActive:Se.a.sizebuttonInactive,onClick:function(){return e.setState({size:"S"})},disableElevation:!0,key:0},"S"),r.a.createElement(A.a,{className:"M"===this.state.size?Se.a.sizebuttonActive:Se.a.sizebuttonInactive,onClick:function(){return e.setState({size:"M"})},disableElevation:!0,key:1},"M"),r.a.createElement(A.a,{className:"L"===this.state.size?Se.a.sizebuttonActive:Se.a.sizebuttonInactive,onClick:function(){return e.setState({size:"L"})},disableElevation:!0,key:2},"L")),r.a.createElement("div",{className:Se.a.amountbox},r.a.createElement("button",{className:Se.a.incrementButton,id:"decrement",onClick:this.decrement},"-"),r.a.createElement("input",{className:Se.a.amount,type:"number",value:this.state.count,readOnly:!0}),r.a.createElement("button",{className:Se.a.incrementButton,id:"increment",onClick:this.increment},"+")),r.a.createElement("div",{className:Se.a.cartButton},r.a.createElement(A.a,{variant:"outlined",color:"default",style:{background:"white",fontWeight:"bold",width:"100%"},onClick:this.state.count>0?this.addToCart:null},"Add to cart")))),r.a.createElement(x,null))}}]),t}(n.Component),je=t(33),Ae=t(2),De=t.n(Ae),Te=function(e){Object(M.a)(t,e);var a=Object(R.a)(t);function t(){var e;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={count:e.props.product.count},e.decrement=function(){e.setState({count:e.state.count<=0?0:e.state.count-1})},e.increment=function(){e.setState({count:e.state.count+1})},e.updateCart=function(){if(0===e.state.count)e.props.zeroCount();else{var a=JSON.parse(localStorage.getItem("myCart"));a[e.props.index].count=e.state.count,a[e.props.index].cost=e.state.count*a[e.props.index].price,localStorage.setItem("myCart",JSON.stringify(a)),e.props.updateCart()}},e}return Object(z.a)(t,[{key:"render",value:function(){var e=this,a=this.props.product,t=a.picture,n=a.name,c=a.size,i=a.price;return r.a.createElement("div",{className:De.a.product},r.a.createElement("div",{className:De.a.left},r.a.createElement("div",{className:De.a.picContainer},r.a.createElement("img",{className:De.a.pic,src:"assets/".concat(t),alt:n}))),r.a.createElement("div",{className:De.a.text},r.a.createElement("div",{className:De.a.labels},r.a.createElement("div",null,"Name:\xa0"),r.a.createElement("div",null,n)),r.a.createElement("div",null,"Size: ",c),r.a.createElement("div",null,"Price: ","\xa3 ".concat(i)),r.a.createElement("div",{className:Se.a.amountbox},r.a.createElement("button",{className:Se.a.incrementButton,id:"decrement",onClick:this.decrement},"-"),r.a.createElement("input",{className:Se.a.amount,type:"number",value:this.state.count,readOnly:!0}),r.a.createElement("button",{className:Se.a.incrementButton,id:"increment",onClick:this.increment},"+")),r.a.createElement("div",{className:De.a.link},r.a.createElement(A.a,{className:De.a.update,variant:"outlined",style:{padding:"0",fontSize:"14px",backgroundColor:"transparent",color:"tomato",textTransform:"inherit",borderColor:"tomato"},onClick:this.updateCart},"Update cart"),r.a.createElement("button",{className:De.a.remove,onClick:function(){return e.props.onRemove(e.props.index)}},"Remove item"))))}}]),t}(n.Component),Be=t(50),Le=t(51),Ie=function(e){Object(M.a)(t,e);var a=Object(R.a)(t);function t(e){var n;return Object(I.a)(this,t),(n=a.call(this,e)).compulsoryChange=function(e){var a=e.target.value,t=e.target.name;n.setState((function(e){return Object(Le.a)({},e,{formCompulsory:Object(Le.a)({},e.formCompulsory,Object(Be.a)({},t,a))})}))},n.optionalChange=function(e){var a=e.target.value,t=e.target.name;n.setState((function(e){return Object(Le.a)({},e,{formOptional:Object(Le.a)({},e.formOptional,Object(Be.a)({},t,a))})}))},n.checkout=function(e){e.preventDefault();var a=n.state.formCompulsory;for(var t in a)if(""===a[t])return void alert("ERROR: Please fill in all required fields.");n.props.onCheckout(n.state)},n.state={formCompulsory:{firstName:"",lastName:"",email:"",address1:"",city:"",country:"",postcode:"",cardNumber:"",nameOnCard:"",CVV:""},formOptional:{phone:"",address2:"",address3:""}},n.compulsoryChange=n.compulsoryChange.bind(Object(je.a)(n)),n.optionalChange=n.optionalChange.bind(Object(je.a)(n)),n}return Object(z.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:De.a.formList},r.a.createElement("div",{className:De.a.row},r.a.createElement("div",{className:De.a.fieldForm},r.a.createElement("div",{className:De.a.doubleLeft},r.a.createElement("button",{className:De.a.remove,onClick:function(){return e.props.onClear()}},"Empty cart"))),r.a.createElement("div",{className:De.a.fieldForm,style:{fontWeight:"bold",fontSize:"20px",fontFamily:"'Arial Narrow', serif"}},"Total: \xa3 ",this.props.money)),r.a.createElement("div",{className:De.a.row},r.a.createElement("div",{className:De.a.doubleLeft},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"First Name"),r.a.createElement("input",{className:De.a.fieldForm,type:"text",name:"firstName",onChange:this.compulsoryChange}))),r.a.createElement("div",{className:De.a.doubleRight},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"Last Name"),r.a.createElement("input",{className:De.a.fieldForm,type:"text",name:"lastName",onChange:this.compulsoryChange})))),r.a.createElement("div",{className:De.a.row},r.a.createElement("div",{className:De.a.doubleLeft},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"Email"),r.a.createElement("input",{className:De.a.fieldForm,type:"email",name:"email",onChange:this.compulsoryChange}))),r.a.createElement("div",{className:De.a.doubleRight},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"Phone number"),r.a.createElement("input",{className:De.a.fieldForm,type:"number",name:"phone",placeholder:"Optional",onChange:this.optionalChange})))),r.a.createElement("div",{className:De.a.row},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"Address line 1"),r.a.createElement("input",{className:De.a.fieldForm,type:"text",name:"address1",onChange:this.compulsoryChange}))),r.a.createElement("div",{className:De.a.row},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"Address line 2"),r.a.createElement("input",{className:De.a.fieldForm,type:"text",name:"address2",placeholder:"Optional",onChange:this.optionalChange}))),r.a.createElement("div",{className:De.a.row},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"Address line 3"),r.a.createElement("input",{className:De.a.fieldForm,type:"text",name:"address3",placeholder:"Optional",onChange:this.optionalChange}))),r.a.createElement("div",{className:De.a.row},r.a.createElement("div",{className:De.a.doubleLeft},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"City"),r.a.createElement("input",{className:De.a.fieldForm,type:"text",name:"city",onChange:this.compulsoryChange}))),r.a.createElement("div",{className:De.a.doubleRight},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"Postcode"),r.a.createElement("input",{className:De.a.fieldForm,type:"text",name:"postcode",onChange:this.compulsoryChange})))),r.a.createElement("div",{className:De.a.row},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"Country"),r.a.createElement("input",{className:De.a.fieldForm,type:"text",name:"country",onChange:this.compulsoryChange}))),r.a.createElement("div",{className:De.a.row},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"Bank card number"),r.a.createElement("input",{className:De.a.fieldForm,type:"number",name:"cardNumber",onChange:this.compulsoryChange}))),r.a.createElement("div",{className:De.a.row},r.a.createElement("div",{className:De.a.doubleLeft},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"Name on card"),r.a.createElement("input",{className:De.a.fieldForm,type:"text",name:"nameOnCard",onChange:this.compulsoryChange}))),r.a.createElement("div",{className:De.a.doubleRight},r.a.createElement("div",{className:De.a.fieldPair},r.a.createElement("div",{className:De.a.fieldName},"CVV"),r.a.createElement("input",{className:De.a.fieldForm,type:"number",name:"CVV",onChange:this.compulsoryChange})))),r.a.createElement("div",{className:De.a.row},r.a.createElement(D,{type:"submit",style:{fontSize:"2vh",padding:"0 2vh",height:40,width:"100%"},onClick:this.checkout},"Checkout")))}}]),t}(n.Component),ze=function(e){Object(M.a)(t,e);var a=Object(R.a)(t);function t(e){var n;return Object(I.a)(this,t),(n=a.call(this,e)).removeItem=function(e){var a=JSON.parse(localStorage.getItem("myCart"));a.splice(e,1),localStorage.setItem("myCart",JSON.stringify(a)),n.setState({productList:a});var t=n.totalCost();n.setState({totalCost:t})},n.emptyCart=function(){localStorage.clear(),n.setState({productList:null,totalCost:0})},n.checkoutCart=function(e){fetch("/api/orders/createNewOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:e.formCompulsory.firstName,lastName:e.formCompulsory.lastName,email:e.formCompulsory.email,address1:e.formCompulsory.address1,city:e.formCompulsory.city,country:e.formCompulsory.country,postcode:e.formCompulsory.postcode,address2:e.formOptional.address2,address3:e.formOptional.address3,phone:e.formOptional.phone,products:n.state.productList})}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),alert("Success"),n.emptyCart()},n.state={loading:!0,totalCost:0,productList:null},n.checkoutCart=n.checkoutCart.bind(Object(je.a)(n)),n.removeItem=n.removeItem.bind(Object(je.a)(n)),n}return Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ie.a)(ce.a.mark((function e(){var a,t,n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("myCart");case 2:a=e.sent,(t=JSON.parse(a))&&this.setState({productList:t}),n=this.totalCost(),this.setState({totalCost:n}),this.setState({loading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"totalCost",value:function(){var e=this.state.productList,a=0;for(var t in e)a+=e[t].cost;return a.toFixed(2)}},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement("div",null,r.a.createElement(te,{currentPage:"cart"}),"loading..."):this.state.productList&&0!==this.state.productList.length?r.a.createElement("div",{className:$.a.overview},r.a.createElement(te,{currentPage:"cart"}),r.a.createElement("div",{className:De.a.overview},r.a.createElement("div",{className:De.a.productList},this.state.productList.map((function(a,t){return r.a.createElement(Te,{product:a,index:t,key:"".concat(a.id,"-").concat(a.size),onRemove:e.removeItem,updateCart:function(){return e.componentDidMount()},zeroCount:function(){return e.removeItem(t)}})}))),r.a.createElement("div",{className:De.a.right},r.a.createElement(Ie,{onClear:this.emptyCart,onCheckout:this.checkoutCart,money:this.totalCost()}))),r.a.createElement(x,null)):r.a.createElement("div",null,r.a.createElement(te,{currentPage:"cart"}),r.a.createElement("div",{className:De.a.empty},r.a.createElement("p",null,"Empty cart"),r.a.createElement("p",null,"Go shopping!")),r.a.createElement(x,null))}}]),t}(n.Component);var Re=function(){return r.a.createElement("div",null,r.a.createElement(m.a,{path:"/",exact:!0,render:H}),r.a.createElement(m.a,{path:"/music",exact:!0,render:ne}),r.a.createElement(m.a,{path:"/tour",exact:!0,component:ge}),r.a.createElement(m.a,{path:"/merch",exact:!0,component:ue}),r.a.createElement(m.a,{path:"/about",exact:!0,render:we}),r.a.createElement(m.a,{path:"/merch/:id",exact:!0,component:ke}),r.a.createElement(m.a,{path:"/cart",exact:!0,component:ze}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(Re,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");o?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(a,e)}))}}()},13:function(e,a,t){e.exports={overview:"OverHeadBar_overview__2BqRH",center:"OverHeadBar_center__1Xasw",bar:"OverHeadBar_bar__1d010",buttons:"OverHeadBar_buttons__39voZ",side:"OverHeadBar_side__12U4W",logo:"OverHeadBar_logo__1vDH1"}},2:function(e,a,t){e.exports={overview:"ShoppingCart_overview__btkn5",productList:"ShoppingCart_productList__ogYjI",empty:"ShoppingCart_empty__1WDv_",product:"ShoppingCart_product__3VfWz",left:"ShoppingCart_left__2howD",picContainer:"ShoppingCart_picContainer__3Ig1d",pic:"ShoppingCart_pic__1rf-5",text:"ShoppingCart_text__1OEPX",labels:"ShoppingCart_labels__3bAZN",link:"ShoppingCart_link__3CAB-",update:"ShoppingCart_update__2Uxq8",remove:"ShoppingCart_remove__3sPMK",right:"ShoppingCart_right__zPuy5",formList:"ShoppingCart_formList__6wSY9",row:"ShoppingCart_row__2cEWr",fieldPair:"ShoppingCart_fieldPair__3qXyw",doubleLeft:"ShoppingCart_doubleLeft__2nipd",doubleRight:"ShoppingCart_doubleRight__10H33",fieldName:"ShoppingCart_fieldName__8mbxb",fieldForm:"ShoppingCart_fieldForm__148lK"}},23:function(e,a,t){e.exports={overview:"MerchPage_overview__29v_W",tile:"MerchPage_tile__1fceH",pic:"MerchPage_pic__3xPJv",tag:"MerchPage_tag__ySfZ0",name:"MerchPage_name__3z1Cy",price:"MerchPage_price__3Vcjk",button:"MerchPage_button__1XhjB"}},27:function(e,a,t){e.exports={center:"MusicPage_center__1wsXf",embed:"MusicPage_embed__1OjrB",youtube:"MusicPage_youtube__OnEyY",img:"MusicPage_img__3kIrx",album:"MusicPage_album__36O6e",lemon:"MusicPage_lemon__3riYE",honey:"MusicPage_honey__14363",vinyl:"MusicPage_vinyl__2XBF-",spin:"MusicPage_spin__1UVO-","song-spin":"MusicPage_song-spin__3A16j"}},37:function(e,a,t){e.exports={center:"TourPage_center__2nbIm",heading:"TourPage_heading__3YT6Q"}},42:function(e,a,t){e.exports={center:"HomePage_center__27WZb",logo:"HomePage_logo__2ZiA4",email:"HomePage_email__2cp1O",subscribe:"HomePage_subscribe__22MI6"}},5:function(e,a,t){e.exports={overview:"DetailPage_overview__1uoUa",image:"DetailPage_image__2FEDz",left:"DetailPage_left__jpS6v",smallpic:"DetailPage_smallpic__1SG-Y",largepic:"DetailPage_largepic__vnEk2",right:"DetailPage_right__13wCQ",text:"DetailPage_text__2DO97",name:"DetailPage_name__1IOUa",description:"DetailPage_description__1UVz2",price:"DetailPage_price__3Su-C",sizebox:"DetailPage_sizebox__2efbG",sizebuttonInactive:"DetailPage_sizebuttonInactive__3mBXR",sizebuttonActive:"DetailPage_sizebuttonActive__1HKvv",amountbox:"DetailPage_amountbox__3SAj_",amount:"DetailPage_amount__1yJV1",incrementButton:"DetailPage_incrementButton__25TmR",cartButton:"DetailPage_cartButton__16J3w"}},57:function(e,a,t){e.exports=t.p+"static/media/tangerinerye_logo.19d4410f.png"},6:function(e,a,t){e.exports={tile:"AboutPage_tile__13gMA",image:"AboutPage_image__3J_1q",subtitle:"AboutPage_subtitle__3mFxE",content:"AboutPage_content__2dNk3",text:"AboutPage_text__2gAfC",left:"AboutPage_left__3StBJ",right:"AboutPage_right__2a518",footer:"AboutPage_footer__3Lia8"}},61:function(e,a,t){e.exports=t.p+"static/media/bandpic.0184f60a.jpg"},62:function(e,a,t){e.exports={footer:"IconBar_footer__cdcxC",icon:"IconBar_icon__2R0_1"}},84:function(e,a,t){e.exports=t.p+"static/media/album1.cdafe508.png"},85:function(e,a,t){e.exports=t.p+"static/media/lalalemon.d7eea16d.png"},86:function(e,a,t){e.exports=t.p+"static/media/honey.063f9495.png"},88:function(e,a,t){e.exports=t.p+"static/media/Oscar.f2d6519a.png"},89:function(e,a,t){e.exports=t.p+"static/media/Hal.ffc33d87.png"},90:function(e,a,t){e.exports=t.p+"static/media/Jordan.3b0ce6a3.png"},93:function(e,a,t){e.exports=t(126)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.6563a729.chunk.js.map
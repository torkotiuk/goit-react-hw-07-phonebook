(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{32:function(t,e,n){t.exports={Modal__backdrop:"Modal_Modal__backdrop__2-2Or",Modal__content:"Modal_Modal__content__3BGTR",button_x:"Modal_button_x__1Zh_K"}},34:function(t,e,n){t.exports={btnAdd:"ContactForm_btnAdd__qgwHq"}},35:function(t,e,n){t.exports={section:"Section_section__z_CG-",section__title:"Section_section__title__3PMQq"}},48:function(t,e,n){t.exports={container:"Container_container__1f-SE"}},51:function(t,e,n){t.exports={Stat:"Stat_Stat__2jPm8"}},52:function(t,e,n){t.exports={ContactList__item:"ContactList_ContactList__item__21OTB"}},53:function(t,e,n){t.exports={IconButton:"IconButton_IconButton__3tHgw"}},97:function(t,e,n){},98:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),i=n(12),s=n.n(i),l=n(16),u=n(17),d=n(20),b=n(18),j=n(9),h=n(35),f=n.n(h),p=n(48),O=n.n(p),m=n(2),v=function(t){var e=t.children;return Object(m.jsx)("div",{className:O.a.container,children:e})},x=function(t){var e=t.children,n=t.title;t.className;return Object(m.jsx)("section",{className:f.a.section,children:Object(m.jsxs)(v,{children:[n&&Object(m.jsx)("h2",{className:f.a.section__title,children:n}),e]})})},_=n(5),g=n(36),C=n.n(g),y=n(34),w=n.n(y),k=n(115),N=n(37),M=n.n(N),I=n(49),S=n(31),E=n.n(S),B=n(4),D=Object(B.b)("contacts/fetchContactsRequest"),L=Object(B.b)("contacts/fetchContactsSuccess"),A=Object(B.b)("contacts/fetchContactsError"),q=Object(B.b)("contacts/addContactRequest"),F=Object(B.b)("contacts/addContactSuccess"),P=Object(B.b)("contacts/addContactError"),R=Object(B.b)("contacts/delContactRequest"),T=Object(B.b)("contacts/delContactSuccess"),z=Object(B.b)("contacts/delContactError"),H=Object(B.b)("contacts/changeFilter"),K=function(){return function(){var t=Object(I.a)(M.a.mark((function t(e){var n,c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(D()),t.prev=1,t.next=4,E.a.get("http://localhost:3000/contacts");case 4:n=t.sent,c=n.data,e(L(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(A(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},G=function(t){return function(e){var n={name:t.name,number:t.number};e(q()),E.a.post("http://localhost:3000/contacts",n).then((function(t){var n=t.data;return e(F(n))})).catch((function(t){return e(P(t))}))}},J=function(t){return function(e){e(R()),E.a.delete("http://localhost:3000/contacts/".concat(t)).then((function(){return e(T(t))})).catch((function(t){return e(z(t))}))}},Q=n(30),U=n(6),V=n(50),W=n.n(V),X=n(15),Z=Object(B.c)([],(c={},Object(_.a)(c,L,(function(t,e){return e.payload})),Object(_.a)(c,F,(function(t,e){return[].concat(Object(Q.a)(t),[e.payload])})),Object(_.a)(c,T,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),Y=Object(B.c)("",Object(_.a)({},H,(function(t,e){return e.payload}))),$=Object(B.c)(!1,(a={},Object(_.a)(a,D,(function(){return!0})),Object(_.a)(a,L,(function(){return!1})),Object(_.a)(a,A,(function(){return!1})),Object(_.a)(a,q,(function(){return!0})),Object(_.a)(a,F,(function(){return!1})),Object(_.a)(a,P,(function(){return!1})),Object(_.a)(a,R,(function(){return!0})),Object(_.a)(a,T,(function(){return!1})),Object(_.a)(a,z,(function(){return!1})),a)),tt=Object(U.b)({items:Z,filter:Y,loading:$}),et=[].concat(Object(Q.a)(Object(B.d)({serializableCheck:{ignoredActions:[X.a,X.f,X.b,X.c,X.d,X.e]}})),[W.a]),nt=Object(U.b)({contacts:tt}),ct=Object(B.a)({reducer:nt,middleware:et,devtools:!1}),at=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=C.a.generate(),t.numberInputId=C.a.generate(),t.handleChange=function(e){t.setState(Object(_.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;ct.getState().contacts.items.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts.")):(t.props.getData(t.state),t.props.onCloseModal(),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{htmlFor:this.nameInputId,className:"form__label",children:["Name:",Object(m.jsx)("input",{className:"Form_input",id:this.nameInputId,type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(m.jsxs)("label",{htmlFor:this.numberInputId,children:["Number:",Object(m.jsx)("input",{className:"Form_input",id:this.numberInputId,type:"tel",name:"number",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(m.jsx)("div",{className:w.a.btnAdd,children:Object(m.jsx)(k.a,{variant:"contained",className:"btn",type:"submit",children:"Add"})})]})}}]),n}(r.Component),rt=Object(j.b)(null,(function(t){return{getData:function(e){return t(G(e))}}}))(at),ot=n(51),it=n.n(ot),st=function(t){var e=t.total;return Object(m.jsxs)("div",{className:it.a.Stat,children:["(",e,")"]})},lt=n(27),ut=function(t){return jt(t).length},dt=function(t){return t.contacts.loading},bt=function(t){return t.contacts.filter},jt=function(t){return t.contacts.items},ht=Object(lt.a)([jt,bt],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),ft=Object(j.b)((function(t){return{total:ut(t)}}))(st),pt=n(52),Ot=n.n(pt),mt=n(114),vt=Object(mt.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}},TitleContainer:{display:"flex",alignItems:"baseline"},container:{width:"350px"},list:{display:"flex",justifyContent:"space-between",width:"400px",border:"1px solid grey",borderRadius:"4px",padding:"10px"},number:{paddingRight:"20px"}}})),xt=Object(j.b)((function(t){return{items:ht(t)}}),(function(t){return{onDeleteContact:function(e){return t(J(e))}}}))((function(t){var e=t.items,n=t.onDeleteContact,c=t.children,a=vt();return Object(m.jsxs)("div",{className:a.root,children:[Object(m.jsxs)("div",{className:a.TitleContainer,children:[Object(m.jsx)("h3",{className:"title",children:"Contacts"}),Object(m.jsx)(ft,{})]}),c,e.map((function(t){return Object(m.jsxs)("li",{className:Ot.a.ContactList__item,children:[Object(m.jsx)("p",{children:t.name}),Object(m.jsx)("p",{className:a.number,children:t.number}),Object(m.jsx)(k.a,{variant:"contained",type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))]})})),_t=Object(j.b)((function(t){return{valueState:bt(t)}}),(function(t){return{filterByName:function(e){return t(H(e.target.value))}}}))((function(t){var e=t.valueState,n=t.filterByName;return Object(m.jsxs)("label",{className:"filter",children:["Filter by name:",Object(m.jsx)("input",{type:"text",value:e,onChange:n})]})})),gt=n(32),Ct=n.n(gt),yt=document.getElementById("modal-root"),wt=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this;return Object(i.createPortal)(Object(m.jsx)("div",{className:Ct.a.Modal__backdrop,onClick:this.handleBackdropClick,children:Object(m.jsxs)("div",{className:Ct.a.Modal__content,children:[Object(m.jsx)("button",{className:Ct.a.button_x,onClick:function(){return t.props.onClose()},children:"X"}),this.props.children]})}),yt)}}]),n}(r.Component),kt=n(38),Nt=n(54),Mt=n(53),It=n.n(Mt),St=function(t){var e=t.children,n=t.onClick,c=Object(Nt.a)(t,["children","onClick"]);return Object(m.jsx)("button",Object(kt.a)(Object(kt.a)({type:"button",className:It.a.IconButton,onClick:n},c),{},{children:e}))};St.defaultProps={onClick:function(){return null},children:null};var Et,Bt,Dt=St;function Lt(){return(Lt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function At(t,e){if(null==t)return{};var n,c,a=function(t,e){if(null==t)return{};var n,c,a={},r=Object.keys(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function qt(t,e){var n=t.title,c=t.titleId,a=At(t,["title","titleId"]);return r.createElement("svg",Lt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,Et||(Et=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Bt||(Bt=r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var Ft=r.forwardRef(qt),Pt=(n.p,function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={showModal:!1},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(m.jsxs)(x,{children:[Object(m.jsxs)(Dt,{onClick:this.toggleModal,"arial-label":"Add contact",children:[Object(m.jsx)("h2",{children:"Create contact"}),Object(m.jsx)(Ft,{width:"40",height:"40",fill:"green"})]}),this.state.showModal&&Object(m.jsxs)(wt,{onClose:this.toggleModal,children:[Object(m.jsx)("h2",{className:"title_form",children:"Create new contact"}),Object(m.jsx)(rt,{onCloseModal:this.toggleModal})]}),this.props.isLoadingContacts&&Object(m.jsx)("h1",{children:"Loading..."}),Object(m.jsx)(_t,{}),Object(m.jsx)(xt,{})]})}}]),n}(r.Component)),Rt=Object(j.b)((function(t){return{isLoadingContacts:dt(t)}}),(function(t){return{fetchContacts:function(){return t(K())}}}))(Pt);n(96),n(97);s.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(j.a,{store:ct,children:Object(m.jsx)(Rt,{})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.23ea93b6.chunk.js.map
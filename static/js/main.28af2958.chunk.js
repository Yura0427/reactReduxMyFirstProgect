(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{130:function(e,t,n){e.exports={selectedPage:"paginator_selectedPage__gbomT"}},131:function(e,t,n){e.exports={userFoto:"users_userFoto__1Q5_u"}},133:function(e,t,n){e.exports={item:"Post_item__7ArEN"}},134:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2u-_I"}},16:function(e,t,n){e.exports={nav:"Navbar_nav__1mHLE",item:"Navbar_item__XvO0f",activeLink:"Navbar_activeLink__LCivP"}},165:function(e,t,n){},245:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),a=n.n(r),i=n(63),c=n.n(i),o=(n(165),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),a(e),i(e)}))}),u=n(8),l=n(12),d=n.n(l),j=n(20),p=n(3),b=n(38),f=n(126),h=n.n(f).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b9ef1148-56d0-49b1-936f-e5de19905ac8"}}),O=function(e,t){return h.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},g=function(e){return h.post("follow/".concat(e))},m=function(e){return h.delete("follow/".concat(e))},x=function(e){return console.warn("Obsolete metod, please profileAPI object"),v.getProfile(e)},v={getProfile:function(e){return h.get("profile/"+e)},getStatus:function(e){return h.get("profile/status/"+e)},updateStatus:function(e){return h.put("profile/status",{status:e})}},_=function(){return h.get("auth/me")},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return h.post("auth/login",{email:e,password:t,rememberMe:n})},P=function(e,t){return h.delete("auth/login")},S="SET_USER_DATA",C={userId:null,email:null,login:null,isAuth:!1},y=function(e,t,n,s){return{type:S,payload:{userId:e,email:t,login:n,isAuth:s}}},k=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var n,s,r,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:0===(n=e.sent).data.resultCode&&(s=n.data.data,r=s.id,a=s.login,i=s.email,t(y(r,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(p.a)(Object(p.a)({},e),t.payload);default:return e}},N=n(43),T="ADD-MESSAGE",A={messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],dialogs:[{id:1,name:"Dima"},{id:2,name:"Andriy"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(p.a)(Object(p.a)({},e),{},{messages:[].concat(Object(N.a)(e.messages),[{id:3,message:t.newMessageText}])});default:return e}},E="ADD-POST",L="SET_USER_PROFILE",U="SET_STATUS",M="DELETE_POST",z={posts:[{id:1,message:"Hi how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:10},{id:3,message:"Blabla",likesCount:10},{id:4,message:"Dada",likesCount:10}],profile:null,status:""},D=function(e){return{type:U,status:e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var n={id:6,message:t.newPostText,likesCount:0};return Object(p.a)(Object(p.a)({},e),{},{posts:[].concat(Object(N.a)(e.posts),[n])});case M:return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case L:return Object(p.a)(Object(p.a)({},e),{},{profile:t.profile});case U:return Object(p.a)(Object(p.a)({},e),{},{status:t.status});default:return e}},R={friends:[{id:1,name:"Andriy"},{id:2,name:"Sveta"},{id:3,name:"Sasha"}]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return e},H="FOLLOW",W="UNFOLLOW",Y="SET_USERS",J="SET_CURENT_PAGE",Q="SET_TOTAL_USERS_COUNT",Z="TOGLE_IS_FETHING",K="TOGLE_IS_FOLLOWING_PROGRESS",V={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},X=function(e){return{type:H,userId:e}},q=function(e){return{type:W,userId:e}},$=function(e){return{type:Z,isFetching:e}},ee=function(e,t){return{type:K,isFetching:e,userId:t}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(p.a)(Object(p.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(p.a)(Object(p.a)({},e),{},{followed:!0}):e}))});case W:return Object(p.a)(Object(p.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(p.a)(Object(p.a)({},e),{},{followed:!1}):e}))});case Y:return Object(p.a)(Object(p.a)({},e),{},{users:t.users});case J:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case Q:return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.count});case Z:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case K:return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(N.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},ne=n(127),se=n(125),re="INITIALIZED_SUCCESS",ae={initialized:!1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}},ce=Object(u.c)({profilePage:B,dialogsPage:F,sidebar:G,usersPage:te,auth:I,form:se.a,app:ie}),oe=Object(u.e)(ce,Object(u.a)(ne.a));window.store=oe;var ue=oe,le=n(25),de=n(26),je=n(28),pe=n(27),be=(n(245),n(13)),fe=(n(86),n(16)),he=n.n(fe),Oe=function(e){return Object(s.jsxs)("nav",{className:he.a.nav,children:[Object(s.jsx)("div",{className:he.a.item,children:Object(s.jsx)(be.b,{activeClassName:he.a.activeLink,to:"/profile",children:"Profile"})}),Object(s.jsx)("div",{className:he.a.item,children:Object(s.jsx)(be.b,{activeClassName:he.a.activeLink,to:"/dialogs",children:"Messages"})}),Object(s.jsx)("div",{className:he.a.item,children:Object(s.jsx)(be.b,{activeClassName:he.a.activeLink,to:"/users",children:"Users"})}),Object(s.jsx)("div",{className:he.a.item,children:Object(s.jsx)(be.b,{activeClassName:he.a.activeLink,to:"/news",children:"News"})}),Object(s.jsx)("div",{className:he.a.item,children:Object(s.jsx)(be.b,{activeClassName:he.a.activeLink,to:"/music",children:"Music"})}),Object(s.jsx)("div",{className:he.a.item,children:Object(s.jsx)(be.b,{activeClassName:he.a.activeLink,to:"/settings",children:"Settings"})})]})},ge=n(11),me=n(10),xe=function(e){return{isAuth:e.auth.isAuth}},ve=n(29),_e=n.n(ve),we=function(e){return Object(s.jsxs)("div",{className:_e.a.dialog+" "+_e.a.active,children:[Object(s.jsx)("img",{className:_e.a.dialogImg,src:"https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg",alt:""}),Object(s.jsx)(be.b,{to:"/dialogs/"+e.id,children:e.name})]})},Pe=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:_e.a.dialog,children:e.message})})},Se=n(123),Ce=n(124),ye=n(44),ke=n(53),Ie=n.n(ke),Ne=function(e){e.input;var t=e.meta,n=(e.child,Object(ye.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(s.jsxs)("div",{className:Ie.a.formControl+" "+(r?Ie.a.error:""),children:[Object(s.jsx)("div",{children:n.children}),r&&Object(s.jsx)("span",{children:t.error})]})},Te=function(e){var t=e.input,n=(e.meta,e.child,Object(ye.a)(e,["input","meta","child"]));return Object(s.jsx)(Ne,Object(p.a)(Object(p.a)({},e),{},{children:Object(s.jsx)("textarea",Object(p.a)(Object(p.a)({},t),n))}))},Ae=function(e){var t=e.input,n=(e.meta,e.child,Object(ye.a)(e,["input","meta","child"]));return Object(s.jsx)(Ne,Object(p.a)(Object(p.a)({},e),{},{children:Object(s.jsx)("input",Object(p.a)(Object(p.a)({},t),n))}))},Fe=function(e){if(!e)return"Field is required"},Ee=function(e){return function(t){if(t.length>e)return"max length > ".concat(e," sumbols")}},Le=Ee(50),Ue=Object(Ce.a)({form:"dialogAddMessageForm"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(Se.a,{validate:[Fe,Le],component:Te,name:"newMessageText",placeholder:"enter you message"})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"addMes"})})]})})),Me=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(s.jsx)(we,{name:e.name,id:e.id},e.id)})),r=t.messages.map((function(e){return Object(s.jsx)(Pe,{message:e.message},e.id)}));return Object(s.jsxs)("div",{className:_e.a.dialogs,children:[Object(s.jsx)("div",{className:_e.a.dialogsItems,children:n}),Object(s.jsxs)("div",{className:_e.a.messages,children:[Object(s.jsx)("div",{children:r}),Object(s.jsx)(Ue,{onSubmit:function(t){e.sendMessage(t.newMessageText)}})]})]})},ze=Object(u.d)(Object(me.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:T,newMessageText:e}}(t))}}})),(function(e){var t=function(t){Object(je.a)(r,t);var n=Object(pe.a)(r);function r(){return Object(le.a)(this,r),n.apply(this,arguments)}return Object(de.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(s.jsx)(e,Object(p.a)({},this.props)):Object(s.jsx)(ge.a,{to:"/login"})}}]),r}(a.a.Component);return Object(me.b)(xe)(t)}))(Me),De=n(130),Be=n.n(De),Re=function(e){for(var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,i=Math.ceil(t/n),c=[],o=1;o<=i;o++)c.push(o);return Object(s.jsx)("div",{children:c.map((function(e){return Object(s.jsx)("span",{className:r===e&&Be.a.selectedPage,onClick:function(){a(e)},children:e})}))})},Ge=n(131),He=n.n(Ge),We=n.p+"static/media/ava.c4f0f2e0.gif",Ye=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(be.b,{to:"/profile/"+t.id,children:Object(s.jsx)("img",{src:t.photos.small?t.photos.small:We,className:He.a.userFoto})})}),Object(s.jsx)("div",{children:t.followed?Object(s.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unollow"}):Object(s.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(s.jsx)("span",{children:Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:t.name}),Object(s.jsx)("div",{children:t.status})]})})]})},Je=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,i=e.users,c=Object(ye.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]);return Object(s.jsxs)("div",{children:[Object(s.jsx)(Re,{currentPage:t,onPageChanged:n,totalUsersCount:r,pageSize:a}),Object(s.jsx)("div",{children:i.map((function(e){return Object(s.jsx)(Ye,{user:e,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow},e.id)}))})]})},Qe=n.p+"static/media/preloader.413b5564.svg",Ze=function(){return Object(s.jsx)("div",{style:{backgroundColor:"white"},children:Object(s.jsx)("img",{src:Qe})})},Ke=n(132),Ve=Object(Ke.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Xe=function(e){return e.usersPage.pageSize},qe=function(e){return e.usersPage.totalUsersCount},$e=function(e){return e.usersPage.currentPage},et=function(e){return e.usersPage.isFetching},tt=function(e){return e.usersPage.followingInProgress},nt=function(e){Object(je.a)(n,e);var t=Object(pe.a)(n);function n(){var e;Object(le.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.recuestUsers(t,e.props.pageSize)},e}return Object(de.a)(n,[{key:"componentDidMount",value:function(){this.props.recuestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[this.props.isFetching?Object(s.jsx)(Ze,{}):null,Object(s.jsx)(Je,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),st=Object(u.d)(Object(me.b)((function(e){return{users:Ve(e),pageSize:Xe(e),totalUsersCount:qe(e),currentPage:$e(e),isFetching:et(e),followingInProgress:tt(e)}}),{follow:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(ee(!0,e)),t.next=3,g(e);case 3:0==t.sent.data.resultCode&&n(X(e)),n(ee(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(ee(!0,e)),t.next=3,m(e);case 3:0==t.sent.data.resultCode&&n(q(e)),n(ee(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},recuestUsers:function(e,t){return function(){var n=Object(j.a)(d.a.mark((function n(s){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s($(!0)),s({type:J,currentPage:e}),n.next=4,O(e,t);case 4:r=n.sent,s($(!1)),s((i=r.items,{type:Y,users:i})),s((a=r.totalCount,{type:Q,count:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},togleFollowingProgress:ee}))(nt),rt=n(91),at=n.n(rt),it=n(133),ct=n.n(it),ot=function(e){return Object(s.jsxs)("div",{className:ct.a.item,children:[Object(s.jsx)("img",{src:"https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg"}),e.massage,Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:"like"})," ",e.likesCount]})]})},ut=Ee(10),lt=a.a.memo((function(e){var t=e.posts.map((function(e){return Object(s.jsx)(ot,{massage:e.message,likesCount:e.likesCount},e.id)}));return Object(s.jsxs)("div",{className:at.a.postsBlock,children:[Object(s.jsx)("h3",{children:"My posts"}),Object(s.jsx)(dt,{onSubmit:function(t){e.addPost(t.newPostText),console.log(t.newPostText)}}),Object(s.jsx)("div",{className:at.a.posts,children:t})]})})),dt=Object(Ce.a)({form:"ProfileAddNewPostsForm"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(Se.a,{placeholder:"new post text",name:"newPostText",component:Te,validate:[Fe,ut]})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Add post"})})]})})),jt=lt,pt=Object(me.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:E,newPostText:e}}(t))}}}))(jt),bt=n(134),ft=n.n(bt),ht=n(93),Ot=function(e){var t=a.a.useState(!1),n=Object(ht.a)(t,2),r=n[0],i=n[1],c=a.a.useState(e.status),o=Object(ht.a)(c,2),u=o[0],l=o[1];a.a.useEffect((function(){l(e.status)}),[e.status]);return Object(s.jsxs)("div",{children:[!r&&Object(s.jsx)("div",{children:Object(s.jsxs)("span",{onDoubleClick:function(){i(!0)},children:["status: ",e.status]})}),r&&Object(s.jsx)("div",{children:Object(s.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(u)},onChange:function(e){l(e.currentTarget.value)},value:u})})]})},gt=function(e){return e.profile?Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:ft.a.descriptionBlock,children:[Object(s.jsx)("img",{src:e.profile.photos.large?e.profile.photos.large:We}),Object(s.jsx)("div",{children:Object(s.jsxs)("span",{children:["fullName : ",e.profile.fullName," "]})}),e.profile.aboutMe&&Object(s.jsx)("div",{children:Object(s.jsxs)("span",{children:["aboutMe : ",e.profile.aboutMe," "]})}),Object(s.jsx)(Ot,{status:e.status,updateStatus:e.updateStatus})]})}):Object(s.jsx)(Ze,{})},mt=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(gt,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(s.jsx)(pt,{})]})},xt=function(e){Object(je.a)(n,e);var t=Object(pe.a)(n);function n(){return Object(le.a)(this,n),t.apply(this,arguments)}return Object(de.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(mt,Object(p.a)(Object(p.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),n}(a.a.Component),vt=Object(u.d)(Object(me.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:s=t.sent,n((r=s.data,{type:L,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getStatus(e);case 2:s=t.sent,n(D(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(D(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ge.f)(xt),_t=n(92),wt=n.n(_t),Pt=n.p+"static/media/logo.141eac0e.gif",St=function(e){return Object(s.jsxs)("header",{className:wt.a.header,children:[Object(s.jsx)("img",{src:Pt}),Object(s.jsx)("div",{className:wt.a.loginBlock,children:e.isAuth?Object(s.jsxs)("div",{children:[e.login," - ",Object(s.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(s.jsx)(be.b,{to:"/login",children:"Login"})})]})},Ct=function(e){Object(je.a)(n,e);var t=Object(pe.a)(n);function n(){return Object(le.a)(this,n),t.apply(this,arguments)}return Object(de.a)(n,[{key:"render",value:function(){return Object(s.jsx)(St,Object(p.a)({},this.props))}}]),n}(a.a.Component),yt=Object(me.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:0===e.sent.data.resultCode&&t(y(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ct),kt=Object(Ce.a)({form:"login"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(Se.a,{name:"email",placeholder:"Email",component:Ae,type:"text",validate:[Fe]})}),Object(s.jsx)("div",{children:Object(s.jsx)(Se.a,{name:"password",placeholder:"Password",component:Ae,type:"text",validate:[Fe]})}),Object(s.jsxs)("div",{children:[Object(s.jsx)(Se.a,{name:"rememberMe",component:Ae,type:"checkbox"})," remember me"]}),e.error&&Object(s.jsx)("div",{className:Ie.a.formSumaryError,children:e.error}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Login"})})]})})),It=Object(me.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var s=Object(j.a)(d.a.mark((function s(r){var a,i;return d.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,w(e,t,n);case 2:0===(a=s.sent).data.resultCode?r(k()):(i=a.data.messages.length>0?a.data.messages[0]:"Some error",r(Object(b.a)("login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(s.jsx)(ge.a,{to:"/profile"}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsx)(kt,{onSubmit:function(t){console.log(t),e.login(t.email,t.password,t.rememberMe)}})]})})),Nt=function(e){Object(je.a)(n,e);var t=Object(pe.a)(n);function n(){return Object(le.a)(this,n),t.apply(this,arguments)}return Object(de.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(yt,{}),Object(s.jsx)(Oe,{}),Object(s.jsxs)("div",{className:"aap-wrapper-content",children:[Object(s.jsx)(ge.b,{path:"/dialogs",render:function(){return Object(s.jsx)(ze,{})}}),Object(s.jsx)(ge.b,{path:"/profile/:userId?",render:function(){return Object(s.jsx)(vt,{})}}),Object(s.jsx)(ge.b,{path:"/users",render:function(){return Object(s.jsx)(st,{})}}),Object(s.jsx)(ge.b,{path:"/login",render:function(){return Object(s.jsx)(It,{})}})]})]}):Object(s.jsx)(Ze,{})}}]),n}(a.a.Component),Tt=Object(u.d)(ge.f,Object(me.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(k());Promise.all([t]).then((function(){e({type:re})}))}}}))(Nt);c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(me.a,{store:ue,children:Object(s.jsx)(be.a,{children:Object(s.jsx)(Tt,{})})})}),document.getElementById("root")),o()},29:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3OmoS",dialogsItems:"Dialogs_dialogsItems__UjJZb",dialogImg:"Dialogs_dialogImg__3fePW",dialog:"Dialogs_dialog__2ltG_",active:"Dialogs_active___cJ8h",messages:"Dialogs_messages__2mkon",message:"Dialogs_message__YKfh1"}},53:function(e,t,n){e.exports={formControl:"FormsControl_formControl__312TZ",error:"FormsControl_error__BRWnQ",formSumaryError:"FormsControl_formSumaryError__xuS7l"}},86:function(e,t,n){e.exports={fAva:"Friends_fAva__10WPn",item:"Friends_item__1FsFd"}},91:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1w3zc",posts:"MyPosts_posts__XsRQL"}},92:function(e,t,n){e.exports={header:"Header_header__2PC2P",loginBlock:"Header_loginBlock__2xjwl"}}},[[287,1,2]]]);
//# sourceMappingURL=main.28af2958.chunk.js.map
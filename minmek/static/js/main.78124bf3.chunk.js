(this["webpackJsonpproject-minimek"]=this["webpackJsonpproject-minimek"]||[]).push([[0],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="DATA_LOADED"},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="TAB_SELECTED"},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="MECH_SELECT"},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o}));var a=n(46),r=n(34),i=function(e){return e.entities},l=Object(a.a)(i,(function(e){return r.a.session(e)})),o=function(e){var t=i(e);return r.a.session(t)}},304:function(e,t,n){e.exports=n(532)},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(547),r=n(25),i=n(12),l=n(13),o=n(17),c=n(16),u=n(146),s=n(137),d={name:"New Pilot",rank:"Private",gunnery:4,piloting:5,age:25},m=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"toJSON",value:function(){return Object(r.a)({},this.ref)}},{key:"updateFrom",value:function(e){this.update(e.ref)}}],[{key:"parse",value:function(e){return this.upsert(e)}},{key:"generate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.a)({},d,{},e);return this.create(t)}},{key:"fields",get:function(){return{id:Object(u.a)(),name:Object(u.a)(),rank:Object(u.a)(),gunnery:Object(u.a)(),piloting:Object(u.a)(),age:Object(u.a)(),mech:Object(u.b)("Mech")}}}]),n}(s.a);m.modelName="Pilot";var p=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"toJSON",value:function(){return Object(r.a)({},this.ref)}},{key:"updateFrom",value:function(e){this.update(e.ref)}}],[{key:"parse",value:function(e){return this.upsert(e)}},{key:"fields",get:function(){return{id:Object(u.a)()}}}]),n}(s.a);p.modelName="MechDesign";var f=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"toJSON",value:function(){return Object(r.a)({},this.ref)}},{key:"updateFrom",value:function(e){this.update(e.ref)}}],[{key:"parse",value:function(e){return this.upsert(e)}},{key:"fields",get:function(){return{id:Object(u.a)(),type:Object(u.b)("MechDesign"),pilot:Object(u.b)("Pilot")}}}]),n}(s.a);f.modelName="Mech";var h=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,null,[{key:"parse",value:function(e){var t=this.session,n=t.Pilot,a=t.Mech,i=t.Lance,l=Object(r.a)({},e,{lances:e.lances.map((function(e){return i.parse(e)})),pilots:e.pilots.map((function(e){return n.parse(e)})),mechs:e.mechs.map((function(e){return a.parse(e)}))});return this.upsert(l)}}]),n}(s.a);h.modelName="Unit",h.fields={id:Object(u.a)(),name:Object(u.a)(),affiliation:Object(u.b)("Faction"),color:Object(u.a)(),lances:Object(u.c)("Lance"),pilots:Object(u.c)("Pilot"),mechs:Object(u.c)("Mech")};var b=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,null,[{key:"parse",value:function(e){return this.upsert(e)}}]),n}(s.a);b.modelName="Lance",b.fields={id:Object(u.a)(),name:Object(u.a)(),pilots:Object(u.c)("Pilot")};var v=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,null,[{key:"parse",value:function(e){return this.upsert(e)}}]),n}(s.a);v.modelName="Faction",v.fields={id:Object(u.a)(),name:Object(u.a)()};var E=new a.a;E.register(m,p,f,h,v,b);var O=E},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return c}));var a="EDIT_ITEM_EXISTING",r="EDIT_ITEM_NEW",i="EDIT_ITEM_UPDATE",l="EDIT_ITEM_APPLY",o="EDIT_ITEM_STOP",c="EDIT_ITEM_RESET"},49:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l}));var a="PILOT_SELECT",r="PILOT_EDIT_START",i="PILOT_EDIT_STOP",l=["Private","Corporal","Sergeant","Lieutenant","Captain","Major","Colonel"]},530:function(e,t,n){},531:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(13),i=n(17),l=n(16),o=n(0),c=n.n(o),u=n(556),s=n(543),d=n(23),m=n(294),p=n(552),f=n(270),h=n.n(f),b=function(e){var t=e.name,n=e.label,a=e.onClick,r=e.active;return c.a.createElement(p.a.Item,{name:t,content:n,active:r,onClick:function(){return a(t)}})},v=function(e){var t=e.tabs,n=e.currentTab,a=e.onTabClick,r=Object(m.a)(e,["tabs","currentTab","onTabClick"]),i=t.map((function(e){var t=e.name,r=e.label;return c.a.createElement(b,{key:t,name:t,label:r,active:n===t,onClick:a})})),l=t.map((function(e){var t=e.name,a=e.component;return c.a.createElement(h.a,{show:t===n,key:t},c.a.createElement(a,null))}));return c.a.createElement("div",null,c.a.createElement(p.a,Object.assign({tabular:!0,attached:"top"},r),i),l)},E=n(46),O=Object(E.a)((function(e){return e.tabs}),(function(e){return e.currentTab})),y=n(139);var j={onTabClick:function(e){return{type:y.a,payload:{tabName:e}}}},g=Object(d.b)((function(e){return{currentTab:O(e)}}),j)(v),C=n(554),k=n(555),I=n(548),w=n(29),P={name:"Unknown",rank:""},M={id:"N/A",name:""},T=Object(d.b)((function(e,t){var n,a,r=Object(w.a)(e).Pilot;if(r.hasId(t.pilotID)){var i=r.withId(t.pilotID);n=i.ref,i.mech&&(a=i.mech.type.ref)}return{pilot:n,mech:a}}))((function(e){var t=e.pilot,n=void 0===t?P:t,a=e.mech,r=void 0===a?M:a,i=n.name,l=n.rank,o=r.id,u=r.name;return c.a.createElement(I.a.Item,null,c.a.createElement(I.a.Icon,{name:"user"}),c.a.createElement(I.a.Content,null,c.a.createElement(I.a.Header,null,l," ",i," - ",o," ",u)))})),D={name:"Unknown"},A=Object(d.b)((function(e,t){var n,a,r=Object(w.a)(e).Lance;if(r.hasId(t.lanceID)){var i=r.withId(t.lanceID);n=i.ref,a=i.pilots.toRefArray().map((function(e){return e.id}))}return{lance:n,pilots:a}}))((function(e){var t=e.lance,n=void 0===t?D:t,a=e.pilots,r=void 0===a?[]:a,i=n.name,l=r.map((function(e){return c.a.createElement(T,{key:e,pilotID:e})}));return c.a.createElement(I.a.Item,null,c.a.createElement(I.a.Icon,{name:"cube"}),c.a.createElement(I.a.Content,null,c.a.createElement(I.a.Header,null,i),c.a.createElement(I.a.List,null,l)))})),S={name:"Unknown"},N=Object(d.b)((function(e){var t,n,a,r=Object(w.a)(e).Unit.all().first();return r&&(t=r.ref,n=r.affiliation.ref,a=r.lances.toRefArray().map((function(e){return e.id}))),{unit:t,faction:n,lances:a}}))((function(e){var t=e.unit,n=void 0===t?S:t,a=e.faction,r=void 0===a?{}:a,i=e.lances,l=void 0===i?[]:i,o=n.name,u=n.color,s=r.name,d=c.a.createElement("div",{style:{marginLeft:10,backgroundColor:u,border:"1px solid black",height:20,width:40}}),m=s?"".concat(o," / ").concat(s):o,p=l.map((function(e){return c.a.createElement(A,{key:e,lanceID:e})}));return c.a.createElement(I.a,{size:"large"},c.a.createElement(I.a.Item,null,c.a.createElement(I.a.Icon,{name:"cubes"}),c.a.createElement(I.a.Content,null,c.a.createElement(I.a.Header,{style:{display:"flex"}},m," ",d),c.a.createElement(I.a.List,null,p))))})),R=n(20),x=n(544),L=n(549),H=n(56),F=n.n(H),_=n(97);function U(e,t){return{type:_.b,payload:{modalType:e,modalProps:t}}}function W(){return{type:_.a}}function G(e){var t,n=e.target;if(n){var a="checkbox"===n.type?n.checked:n.value;t=Object(R.a)({},n.name,a)}else Object(H.isObject)(e)&&(t=e);return t}var J=n(25),z=n(136),B=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var r;Object(a.a)(this,n),(r=t.call(this,e)).onChildChange=function(e){if(r.props.isEditing){var t=G(e);if(t){var n=Object(J.a)({},r.state.value,{},t);r.setState({value:n}),r.dispatchAttributeChange(n)}}};var i=r.dispatchAttributeChange.bind(Object(z.a)(r));return r.dispatchAttributeChange=Object(H.debounce)(i,e.dispatchDelay),r.state={value:{}},r}return Object(r.a)(n,[{key:"componentWillReceiveProps",value:function(){this.setState({value:{}})}},{key:"dispatchAttributeChange",value:function(e){this.props.onChange(e)}},{key:"render",value:function(){var e,t=this.props,n=t.value,a=t.children,r=this.props,i=r.isEditing,l=r.passIsEditing,o=r.valuePropName,u=r.onChangePropName,s=r.singleValue,d=this.state.value,m=void 0===d?{}:d,p=Object(H.defaults)({},m,n),f=p;s&&(f=Object(H.values)(p)[0]);var h=l?{isEditing:i}:{},b=c.a.Children.only(a);return c.a.cloneElement(b,Object(J.a)((e={},Object(R.a)(e,o,f),Object(R.a)(e,u,this.onChildChange),e),h))}}]),n}(o.Component);B.defaultProps={isEditing:!0,onChange:H.noop,valuePropName:"value",onChangePropName:"onChange",singleValue:!1,passIsEditing:!0,dispatchDelay:250};var V=B,X=n(551),Y=function(e){var t=e.value,n=e.onClick,a=e.disabled,r=void 0!==a&&a;return c.a.createElement(X.a,{type:"button",style:{padding:"4px",margin:0},disabled:r,onClick:n},c.a.createElement("div",{style:{width:30,height:15,backgroundColor:t}}))},K=Object(E.a)(w.a,(function(e){var t=e.Unit.all().first(),n=null;return t&&(n=t.ref),n})),q=n(96);function Q(e){return{type:q.a,payload:{color:e}}}var Z={updateUnitInfo:function(e){return{type:q.b,payload:e}},showColorPicker:function(e,t){return U("ColorPickerDialog",{color:e,onColorPicked:t})}},$=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).onAffiliationChanged=function(t,n){var a=n.name,r=n.value,i=Object(R.a)({},a,r);e.props.updateUnitInfo(i)},e.onNameChanged=function(t){var n=G(t);e.props.updateUnitInfo(n)},e.onColorClicked=function(){var t=Q();e.props.showColorPicker(e.props.unitInfo.color,t)},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.unitInfo,n=e.factions,a=Boolean(t),r="",i=null,l=null;a&&(r=t.name,i=t.affiliation,l=t.color);var o=n.map((function(e){return{value:e.id,text:e.name}}));return c.a.createElement(x.a,{size:"large"},c.a.createElement(x.a.Field,{name:"name"},c.a.createElement("label",null,"Unit Name"),c.a.createElement(V,{singleValue:!0,value:{name:r},onChange:this.onNameChanged,passIsEditing:!1},c.a.createElement("input",{placeholder:"Name",name:"name",disabled:!a}))),c.a.createElement(x.a.Group,null,c.a.createElement(x.a.Field,{name:"affiliation",width:12},c.a.createElement("label",null,"Affiliation"),c.a.createElement(L.a,{name:"affiliation",selection:!0,options:o,value:i,disabled:!a,onChange:this.onAffiliationChanged})),c.a.createElement(x.a.Field,{name:"color"},c.a.createElement("label",null,"Color"),c.a.createElement(Y,{value:l,disabled:!a,onClick:this.onColorClicked}))))}}]),n}(o.Component),ee=Object(d.b)((function(e){return{factions:Object(w.a)(e).Faction.all().toRefArray(),unitInfo:K(e)}}),Z)($),te=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(C.a,null,c.a.createElement(k.a,null,c.a.createElement(k.a.Column,{width:10},c.a.createElement(u.a,{as:"h3"},"Unit Table of Organization"),c.a.createElement(C.a,null,c.a.createElement(N,null))),c.a.createElement(k.a.Column,{width:6},c.a.createElement(u.a,{as:"h3"},"Edit Unit"),c.a.createElement(C.a,null,c.a.createElement(ee,null)))))}}]),n}(o.Component),ne=n(550),ae=function(){return c.a.createElement(ne.a.Header,null,c.a.createElement(ne.a.Row,null,c.a.createElement(ne.a.HeaderCell,{width:5},"Name"),c.a.createElement(ne.a.HeaderCell,{width:3},"Rank"),c.a.createElement(ne.a.HeaderCell,{width:2},"Age"),c.a.createElement(ne.a.HeaderCell,{width:2},"Skills"),c.a.createElement(ne.a.HeaderCell,{width:3},"Mech"),c.a.createElement(ne.a.HeaderCell,{width:1})))},re=n(72),ie=n(58);function le(e,t){return{type:ie.b,payload:{itemType:e,itemID:t}}}var oe=n(98);function ce(e,t,n,a){return{type:oe.b,payload:{location:{x:e,y:t},type:n,menuArgs:a}}}function ue(){return{type:oe.a}}var se={deleteEntity:le,showContextMenu:ce},de=Object(d.b)((function(e,t){var n,a=Object(w.a)(e).Pilot;if(a.hasId(t.pilotID)){var r=a.withId(t.pilotID);n=Object(J.a)({},r.ref);var i=r.mech;i&&i.type&&(n.mechType=i.type.id)}return{pilot:n}}),se)((function(e){var t=e.pilot,n=void 0===t?{}:t,a=e.onPilotClicked,r=void 0===a?F.a.noop:a,i=e.selected,l=e.deleteEntity,o=e.showContextMenu,u=n.id,s=void 0===u?null:u,d=n.name,m=void 0===d?"":d,p=n.rank,f=void 0===p?"":p,h=n.age,b=void 0===h?"":h,v=n.gunnery,E=void 0===v?"":v,O=n.piloting,y=void 0===O?"":O,j=n.mechType,g=void 0===j?"":j;return c.a.createElement(ne.a.Row,{onClick:function(){return r(s)},onContextMenu:function(e){e.preventDefault(),e.stopPropagation();var t=e.pageX,a=e.pageY;o(t,a,"PilotsListItemMenu",{text:n.name,pilotId:s})},active:i},c.a.createElement(ne.a.Cell,null,m),c.a.createElement(ne.a.Cell,null,f),c.a.createElement(ne.a.Cell,null,b),c.a.createElement(ne.a.Cell,null,E,"/",y),c.a.createElement(ne.a.Cell,null,g),c.a.createElement(ne.a.Cell,null,c.a.createElement(X.a,{compact:!0,basic:!0,circular:!0,size:"tiny",color:"red",icon:c.a.createElement(re.a,{name:"delete"}),onClick:function(e){e.stopPropagation(),e.preventDefault(),l("Pilot",s)}})))})),me=n(283),pe=n.n(me),fe=n(44);function he(e,t){return{type:fe.a,payload:{itemType:e,itemID:t}}}function be(e,t){return{type:fe.e,payload:{itemType:e,itemID:t}}}var ve=n(49),Ee=function(e){return e.pilots},Oe=Object(E.a)(Ee,(function(e){return e.currentPilot})),ye=Object(E.a)(Ee,(function(e){return e.isEditing}));function je(e){return function(t,n){var a=n();ye(a)&&t(Ce()),t({type:ve.d,payload:{currentPilot:e}})}}function ge(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t,n){var a=Oe(n()),r=!Object(w.a)(n()).Pilot.hasId(a);t({type:ve.b}),e&&t(he("Pilot",a)),t(be("Pilot",a)),r&&t({type:ve.d,payload:{currentPilot:null}})}}function Ce(){return function(e,t){e(ge(!1))}}var ke={selectPilot:je},Ie=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pilots,n=void 0===t?[]:t,a=e.selectPilot,r=e.currentPilot,i=n.map((function(e){return c.a.createElement(de,{pilotID:e,key:e,onPilotClicked:a,selected:e===r})}));return c.a.createElement(ne.a,{celled:!0},c.a.createElement(ae,null),c.a.createElement(ne.a.Body,null,i))}}]),n}(o.Component),we=Object(d.b)((function(e){return{pilots:Object(w.a)(e).Pilot.all().toModelArray().map((function(e){return e.getId()})),currentPilot:Oe(e)}}),ke)(Ie),Pe=n(73),Me=ve.c.map((function(e){return{value:e,text:e}})),Te=[{value:0,text:0},{value:1,text:1},{value:2,text:2},{value:3,text:3},{value:4,text:4},{value:5,text:5},{value:6,text:6},{value:7,text:7},{value:8,text:8}],De=[{value:"WHM-6R",text:"Warhammer WHM-6R"}],Ae={startEditingPilot:function(){return function(e,t){var n,a,r=Oe(t());e((n="Pilot",a=r,{type:fe.b,payload:{itemType:n,itemID:a}})),e({type:ve.a})}},stopEditingPilot:function(){return function(e,t){e(ge(!0))}},editItemAttributes:function(e,t,n){return{type:fe.f,payload:{itemType:e,itemID:t,newItemAttributes:n}}},resetEditedItem:function(e,t){return{type:fe.d,payload:{itemType:e,itemID:t}}},cancelEditingPilot:Ce},Se=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).onInputChanged=function(t){var n=G(t),a=e.props.pilot.id;e.props.editItemAttributes("Pilot",a,n)},e.onDropdownChanged=function(t,n){var a=n.name,r=n.value,i=Object(R.a)({},a,r),l=e.props.pilot.id;e.props.editItemAttributes("Pilot",l,i)},e.onStartEditingClicked=function(){e.props.startEditingPilot()},e.onStopEditingClicked=function(){e.props.stopEditingPilot()},e.onResetClicked=function(){var t=e.props.pilot.id;e.props.resetEditedItem("Pilot",t)},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pilot,n=void 0===t?{}:t,a=e.pilotIsSelected,r=void 0!==a&&a,i=e.isEditingPilot,l=void 0!==i&&i,o=n.name,u=void 0===o?"":o,s=n.rank,d=void 0===s?"":s,m=n.age,p=void 0===m?"":m,f=n.gunnery,h=void 0===f?"":f,b=n.piloting,v=void 0===b?"":b,E=n.mechType,O=void 0===E?"":E,y=r&&!l,j=r&&l;return c.a.createElement(x.a,{size:"large"},c.a.createElement(V,{singleValue:!0,value:{name:u},onChange:this.onInputChanged,passIsEditing:!1},c.a.createElement(x.a.Field,{name:"name",label:"Name",width:16,placeholder:"Name",disabled:!j,control:"input"})),c.a.createElement(x.a.Group,null,c.a.createElement(x.a.Field,{name:"rank",label:"Rank",width:10,control:L.a,fluid:!0,selection:!0,options:Me,value:d,onChange:this.onDropdownChanged,disabled:!j}),c.a.createElement(V,{singleValue:!0,value:{age:p},onChange:this.onInputChanged,passIsEditing:!1},c.a.createElement(x.a.Field,{name:"age",width:6,label:"Age",placeholder:"Age",control:"input",disabled:!j}))),c.a.createElement(x.a.Group,{widths:"equal"},c.a.createElement(x.a.Field,{name:"gunnery",label:"Gunnery",control:L.a,fluid:!0,selection:!0,options:Te,value:h,onChange:this.onDropdownChanged,disabled:!j}),c.a.createElement(x.a.Field,{name:"piloting",label:"Piloting",control:L.a,fluid:!0,selection:!0,options:Te,value:v,onChange:this.onDropdownChanged,disabled:!j})),c.a.createElement(x.a.Field,{name:"mech",label:"Mech",width:16,control:L.a,fluid:!0,selection:!0,options:De,value:O,disabled:!0}),c.a.createElement(k.a.Row,{width:16},c.a.createElement(X.a,{primary:!0,disabled:!y,type:"button",onClick:this.onStartEditingClicked,style:{width:140,marginRight:10}},"Start Editing"),c.a.createElement(X.a,{secondary:!0,disabled:!j,type:"button",style:{width:140},onClick:this.onStopEditingClicked},"Save Edits")),c.a.createElement(k.a.Row,{width:16},c.a.createElement(X.a,{disabled:!j,type:"button",onClick:this.onResetClicked,style:{width:140,marginRight:10}},"Reset Values"),c.a.createElement(X.a,{negative:!0,disabled:!j,type:"button",style:{width:140},onClick:this.props.cancelEditingPilot},"Cancel Edits")))}}]),n}(o.Component),Ne=Object(d.b)((function(e){var t,n=Oe(e),a=Boolean(n),r=ye(e);if(a){var i=(r?Object(Pe.a)(e):Object(w.a)(e)).Pilot;i.hasId(n)&&(t=i.withId(n).ref)}return{pilot:t,pilotIsSelected:a,isEditingPilot:r}}),Ae)(Se),Re={addNewPilot:function(){return function(e,t){var n,a,r,i=Object(w.b)(t()).Pilot,l=pe()(),o=i.generate({id:l}).toJSON();e((n="Pilot",a=l,r=o,{type:fe.c,payload:{itemType:n,itemID:a,newItemAttributes:r}})),e(je(l)),e({type:ve.a})}}},xe=Object(d.b)((function(e){return{isEditingPilot:ye(e)}}),Re)((function(e){return c.a.createElement(X.a,{primary:!0,disabled:e.isEditingPilot,type:"button",onClick:e.addNewPilot,style:{width:140,marginRight:10}},"Add New Pilot")})),Le=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(C.a,null,c.a.createElement(k.a,null,c.a.createElement(k.a.Column,{width:10},c.a.createElement(u.a,{as:"h3"},"Pilot List"),c.a.createElement(we,null)),c.a.createElement(k.a.Column,{width:6},c.a.createElement(u.a,{as:"h3"},"Pilot Details"),c.a.createElement(C.a,null,c.a.createElement(Ne,null)),c.a.createElement(C.a,null,c.a.createElement(xe,null)))))}}]),n}(o.Component),He=function(){return c.a.createElement(ne.a.Header,null,c.a.createElement(ne.a.Row,null,c.a.createElement(ne.a.HeaderCell,{width:1},"IDs"),c.a.createElement(ne.a.HeaderCell,{width:5},"Name"),c.a.createElement(ne.a.HeaderCell,{width:3},"Model"),c.a.createElement(ne.a.HeaderCell,{width:3},"Weight (tons)"),c.a.createElement(ne.a.HeaderCell,{width:2},"Class")))},Fe=[{name:"Light",weights:[20,25,30,35]},{name:"Medium",weights:[40,45,50,55]},{name:"Heavy",weights:[60,65,70,75]},{name:"Assault",weights:[80,85,90,95,100]}];function _e(e){return(Fe.find((function(t){return t.weights.includes(e)}))||{name:"Unknown"}).name}var Ue=Object(E.a)((function(e){return e.mechs}),(function(e){return e.currentMech})),We=Object(d.b)((function(e,t){var n,a=Object(w.a)(e).Mech;if(a.hasId(t.mechID)){var r=a.withId(t.mechID);n=Object(J.a)({},r.ref,{mechType:{}}),r.type&&(n.mechType=Object(J.a)({},r.type.ref))}return{mech:n}}))((function(e){var t=e.mech,n=void 0===t?{}:t,a=e.onMechClicked,r=e.selected,i=n.id,l=void 0===i?null:i,o=n.type,u=void 0===o?"":o,s=n.mechType,d=void 0===s?{}:s,m=d.name,p=void 0===m?"":m,f=d.weight,h=void 0===f?"":f,b=_e(h);return c.a.createElement(ne.a.Row,{onClick:function(){return a(l)},active:r},c.a.createElement(ne.a.Cell,null,l),c.a.createElement(ne.a.Cell,null,p),c.a.createElement(ne.a.Cell,null,u),c.a.createElement(ne.a.Cell,null,h),c.a.createElement(ne.a.Cell,null,b))})),Ge=n(140);var Je={selectMech:function(e){return{type:Ge.a,payload:{currentMech:e}}}},ze=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.mechs,n=void 0===t?[]:t,a=e.currentMech,r=e.selectMech,i=n.map((function(e){return c.a.createElement(We,{mechID:e,key:e,onMechClicked:r,selected:e===a})}));return c.a.createElement(ne.a,{celled:!0},c.a.createElement(He,null),c.a.createElement(ne.a.Body,null,i))}}]),n}(o.Component),Be=Object(d.b)((function(e){return{mechs:Object(w.a)(e).Mech.all().toModelArray().map((function(e){return e.getId()})),currentMech:Ue(e)}}),Je)(ze),Ve=Object(d.b)((function(e){var t,n=Ue(e),a=Object(w.a)(e).Mech;if(a.hasId(n)){var r=a.withId(n);t=Object(J.a)({},r.ref,{mechType:{}}),r.type&&(t.mechType=Object(J.a)({},r.type.ref))}return{mech:t}}))((function(e){var t=e.mech,n=void 0===t?{}:t,a=n.id,r=void 0===a?"":a,i=n.type,l=void 0===i?"":i,o=n.mechType,u=void 0===o?{}:o,s=u.name,d=void 0===s?"":s,m=u.weight,p=void 0===m?"":m,f=_e(p);return c.a.createElement(x.a,{size:"large"},c.a.createElement(x.a.Field,{name:"id",width:6},c.a.createElement("label",null,"ID"),c.a.createElement("input",{placeholder:"ID",value:r,disabled:!0})),c.a.createElement(x.a.Field,{name:"name",width:16},c.a.createElement("label",null,"Name"),c.a.createElement("input",{placeholder:"Name",value:d,disabled:!0})),c.a.createElement(x.a.Field,{name:"model",width:6},c.a.createElement("label",null,"Model"),c.a.createElement("input",{placeholder:"Model",value:l,disabled:!0})),c.a.createElement(x.a.Field,{name:"weight",width:6},c.a.createElement("label",null,"Weight"),c.a.createElement("input",{value:p,disabled:!0})),c.a.createElement(x.a.Field,{name:"class",width:6},c.a.createElement("label",null,"Class"),c.a.createElement("input",{value:f,disabled:!0})))})),Xe=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(C.a,null,c.a.createElement(k.a,null,c.a.createElement(k.a.Column,{width:10},c.a.createElement(u.a,{as:"h3"},"Mechs List"),c.a.createElement(Be,null)),c.a.createElement(k.a.Column,{width:6},c.a.createElement(u.a,{as:"h3"},"Mech Details"),c.a.createElement(C.a,null,c.a.createElement(Ve,null)))))}}]),n}(o.Component),Ye={unit:{id:1,name:"Black Widow Company",affiliation:"wd",color:"black",lances:[{id:1,name:"Command Lance",pilots:[1,2,3,4]},{id:2,name:"Fire Lance",pilots:[5,6,7,8]},{id:3,name:"Recon Lance",pilots:[9,10,11,12]}],pilots:[{id:1,name:"Natasha Kerensky",rank:"Captain",gunnery:2,piloting:2,age:52,mech:1},{id:2,name:"Colin Maclaren",rank:"Sergeant",gunnery:3,piloting:4,age:43,mech:2},{id:3,name:"Lynn Sheridan",rank:"Corporal",gunnery:4,piloting:5,age:27,mech:3},{id:4,name:"John Hayes",rank:"Sergeant",gunnery:3,piloting:4,age:34,mech:4},{id:5,name:"Takiro Ikeda",rank:"Lieutenant",gunnery:3,piloting:4,age:41,mech:5},{id:6,name:"Miklos Delius",rank:"Corporal",gunnery:4,piloting:4,age:31,mech:6},{id:7,name:"Nikolai Koniev",rank:"Private",gunnery:3,piloting:4,age:39,mech:7},{id:8,name:"Alex Ward",rank:"Corporal",gunnery:4,piloting:5,age:36,mech:8},{id:9,name:"John 'Gentlemen Johnny' Clavell",rank:"Lieutenant",gunnery:3,piloting:4,age:40,mech:9},{id:10,name:"Piet Nichols",rank:"Corporal",gunnery:4,piloting:5,age:37,mech:10},{id:11,name:"Simon Fraser",rank:"Sergeant",gunnery:3,piloting:4,age:32,mech:11},{id:12,name:"Mohammar Jahan",rank:"Corporal",gunnery:3,piloting:5,age:29,mech:12}],mechs:[{id:1,type:"WHM-6R",pilot:1},{id:2,type:"MAD-3R",pilot:2},{id:3,type:"CRD-3R",pilot:3},{id:4,type:"GRF-1N",pilot:4},{id:5,type:"ARC-2R",pilot:5},{id:6,type:"ARC-2R",pilot:6},{id:7,type:"WSP-1A",pilot:7},{id:8,type:"STG-3R",pilot:8},{id:9,type:"RFL-3N",pilot:9},{id:10,type:"PXH-1K",pilot:10},{id:11,type:"STG-3R",pilot:11},{id:12,type:"STG-3R",pilot:12}]},designs:[{id:"STG-3R",name:"Stinger",weight:20},{id:"WSP-1A",name:"Wasp",weight:20},{id:"PXH-1K",name:"Phoenix Hawk",weight:45},{id:"GRF-1N",name:"Griffin",weight:55},{id:"RFL-3N",name:"Rifleman",weight:60},{id:"CRD-3R",name:"Crusader",weight:65},{id:"ARC-2R",name:"Archer",weight:70},{id:"WHM-6R",name:"Warhammer",weight:70},{id:"MAD-3R",name:"Marauder",weight:75}],factions:[{id:"cc",name:"Capellan Confederation"},{id:"dc",name:"Draconis Combine"},{id:"elh",name:"Eridani Light Horse"},{id:"fs",name:"Federated Suns"},{id:"fwl",name:"Free Worlds League"},{id:"hr",name:"Hansen's Roughriders"},{id:"lc",name:"Lyran Commonwealth"},{id:"wd",name:"Wolf's Dragoons"}]};var Ke=n(135);var qe={loadUnitData:function(){return function(e,t){Promise.resolve(Ye).then((function(t){e({type:Ke.a,payload:t})}))}},showContextMenu:ce},Qe=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).onShowContextMenuClicked=function(){e.props.showContextMenu(600,200,"TestContextMenu",{text:"Blah"})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.loadUnitData;return c.a.createElement(C.a,{attached:"bottom"},c.a.createElement(X.a,{onClick:e},"Reload Unit Data"),c.a.createElement(X.a,{primary:!0,onClick:this.onShowContextMenuClicked},"Show Test Context Menu"))}}]),n}(o.Component),Ze=Object(d.b)(null,qe)(Qe),$e=n(545),et={openModal:U,closeModal:W},tt=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).onNextModalClick=function(){var t=e.props.counter;e.props.openModal("TestModal",{counter:t+1})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.counter,n=e.closeModal;return c.a.createElement($e.a,{closeIcon:"close",open:!0,onClose:n},c.a.createElement($e.a.Header,null,"Modal #",t),c.a.createElement($e.a.Content,{image:!0},c.a.createElement($e.a.Description,null,c.a.createElement("h4",null,"Value from props:"),c.a.createElement("div",null,"counter = ",t),c.a.createElement("div",null,c.a.createElement(X.a,{onClick:this.onNextModalClick},"Add Another Modal")))),c.a.createElement($e.a.Actions,null))}}]),n}(o.Component),nt=Object(d.b)(null,et)(tt),at=n(292),rt={closeModal:W,colorSelected:function(e,t){return function(n){if(t){var a=F.a.cloneDeep(t);a.payload.color=e,n(a)}}}},it=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this)).onSelectClicked=function(){r.props.colorSelected(r.state.color,r.props.onColorPicked),r.props.closeModal()},r.onSelectedColorChanged=function(e){r.setState({color:e.hex})},r.state={color:e.color},r}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.closeModal;return c.a.createElement($e.a,{closeIcon:"close",open:!0,onClose:e,size:"small"},c.a.createElement($e.a.Header,null,"Select Color"),c.a.createElement($e.a.Content,null,c.a.createElement(at.SketchPicker,{color:this.state.color,onChangeComplete:this.onSelectedColorChanged})),c.a.createElement($e.a.Actions,null,c.a.createElement(X.a,{positive:!0,onClick:this.onSelectClicked},"Select"),c.a.createElement(X.a,{secondary:!0,onClick:e},"Cancel")))}}]),n}(o.Component);it.defaultProps={color:"red"};var lt={ColorPickerDialog:Object(d.b)(null,rt)(it),TestModal:nt},ot=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.currentModals.map((function(e,t){var n=e.modalType,a=e.modalProps,r=void 0===a?{}:a,i=lt[n];return c.a.createElement(i,Object.assign({},r,{key:n+t}))}));return c.a.createElement("span",null,e)}}]),n}(o.Component),ct=Object(d.b)((function(e){return{currentModals:e.modals}}))(ot),ut=n(553),st=function(e){var t=e.children,n=e.nodeRef,a={position:"absolute",top:e.top,bottom:e.bottom,left:e.left,right:e.right,width:e.width};return c.a.createElement("div",{style:a,className:e.className,ref:n},t)},dt={hideContextMenu:ue},mt=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).handleClickOutside=function(t){e.node&&e.node.contains(t.target)||e.props.hideContextMenu()},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClickOutside,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickOutside,!0)}},{key:"render",value:function(){var e=this,t=this.props.location;return c.a.createElement(st,{left:t.x+2,top:t.y,className:"contextMenu",nodeRef:function(t){return e.node=t}},this.props.children)}}]),n}(o.Component),pt=Object(d.b)(null,dt)(mt),ft=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(p.a,{vertical:!0},c.a.createElement(p.a.Item,null,c.a.createElement(p.a.Header,null,"Menu Header: ",this.props.text," "),c.a.createElement(p.a.Menu,null,c.a.createElement(p.a.Item,null,"First Menu Item"),c.a.createElement(p.a.Item,null,"Second Menu Item"))))}}]),n}(o.Component),ht={selectPilot:je,deleteEntity:le,hideContextMenu:ue},bt=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).onSelectClicked=function(){e.props.selectPilot(e.props.pilotId),e.props.hideContextMenu()},e.onDeleteClicked=function(){e.props.deleteEntity("Pilot",e.props.pilotId),e.props.hideContextMenu()},e}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(p.a,{vertical:!0},c.a.createElement(p.a.Item,null,c.a.createElement(p.a.Header,null,"Pilot: ",this.props.text," "),c.a.createElement(p.a.Menu,null,c.a.createElement(p.a.Item,{onClick:this.onSelectClicked},"Select Pilot"),c.a.createElement(p.a.Item,{onClick:this.onDeleteClicked},"Delete Pilot"))))}}]),n}(o.Component),vt=Object(d.b)(null,ht)(bt),Et=function(e){return e.contextMenu},Ot={TestContextMenu:ft,PilotsListItemMenu:vt};var yt=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.contextMenu,t=e.show,n=e.location,a=e.type,r=e.menuArgs,i=void 0===r?{}:r,l=null;if(t){var o=Ot[a];o&&(l=c.a.createElement(ut.a,{isOpened:!0},c.a.createElement(pt,{location:n},c.a.createElement(o,i))))}return l}}]),n}(o.Component),jt=Object(d.b)((function(e){return{contextMenu:Et(e)}}))(yt),gt=(n(530),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=[{name:"unitInfo",label:"Unit Info",component:te},{name:"pilots",label:"Pilots",component:Le},{name:"mechs",label:"Mechs",component:Xe},{name:"tools",label:"Tools",component:Ze}];return c.a.createElement("div",{className:"App"},c.a.createElement(ct,null),c.a.createElement(jt,null),c.a.createElement("div",{className:"App-header"},c.a.createElement(u.a,{inverted:!0,as:"h1"},"Project Mini-Mek")),c.a.createElement(s.a,null,c.a.createElement(g,{tabs:e,size:"massive"})))}}]),n}(o.Component));t.default=gt},532:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(39),l=n.n(i),o=n(23),c=(n(313),n(67)),u=n(265),s=n(266),d=n(20),m=n(25);function p(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0,r=a.type,i=a.payload,l=t[r];return l?l(n,i):n}}function f(e,t){var n=p({},t);return function(a,r){return t[r.type]?Object(m.a)({},a,Object(d.a)({},e,n(a[e],r))):a}}var h=n(135),b=n(34);var v=p(b.a.getEmptyState(),Object(d.a)({},h.a,(function(e,t){var n=b.a.session(e),a=n.Unit,r=n.Faction,i=n.Pilot,l=n.Mech,o=n.MechDesign,c=t.unit,u=t.factions,s=t.designs;return[a,r,i,l,o].forEach((function(e){e.all().toModelArray().forEach((function(e){return e.delete()}))})),a.parse(c),u.forEach((function(e){return r.parse(e)})),s.forEach((function(e){return o.parse(e)})),n.state}))),E=p(b.a.getEmptyState(),{}),O=n(139);var y,j=p({currentTab:"unitInfo"},Object(d.a)({},O.a,(function(e,t){return{currentTab:t.tabName}}))),g=n(96);var C,k=f("entities",(y={},Object(d.a)(y,g.b,(function(e,t){var n=b.a.session(e),a=n.Unit.all().first();return a&&a.update(t),n.state})),Object(d.a)(y,g.a,(function(e,t){var n=t.color,a=b.a.session(e),r=a.Unit.all().first();return r&&(r.color=n),a.state})),y)),I=n(49),w=n(58);var P=p({currentPilot:null,isEditing:!1},(C={},Object(d.a)(C,I.d,(function(e,t){var n=e.currentPilot,a=t.currentPilot,r=n===a;return Object(m.a)({},e,{currentPilot:r?null:a})})),Object(d.a)(C,I.a,(function(e,t){return Object(m.a)({},e,{isEditing:!0})})),Object(d.a)(C,I.b,(function(e,t){return Object(m.a)({},e,{isEditing:!1})})),Object(d.a)(C,w.b,(function(e,t){var n=t.itemType,a=t.itemID,r=e.currentPilot;return"Pilot"===n&&a===r?Object(m.a)({},e,{isEditing:!1,currentPilot:null}):e})),C)),M=n(140);var T,D=p({currentMech:null},Object(d.a)({},M.a,(function(e,t){var n=e.currentMech,a=t.currentMech;return{currentMech:n===a?null:a}}))),A=n(97);var S,N=p([],(T={},Object(d.a)(T,A.b,(function(e,t){var n=t.modalType,a=t.modalProps;return e.concat({modalType:n,modalProps:a})})),Object(d.a)(T,A.a,(function(e,t){var n=e.slice();return n.pop(),n})),T)),R=n(98),x={show:!1,location:{x:null,y:null},type:null,menuArgs:void 0};var L,H=p(x,(S={},Object(d.a)(S,R.b,(function(e,t){return Object(m.a)({},e,{show:!0},t)})),Object(d.a)(S,R.a,(function(e,t){return Object(m.a)({},x)})),S));function F(e,t){var n=t.itemType,a=t.itemID,r=t.newItemAttributes,i=b.a.session(e),l=i[n];l.hasId(a)&&l.withId(a).update(r);return i.state}function _(e,t){var n=t.itemID,a=t.itemType,r=b.a.session(e),i=r[a];i.hasId(n)&&i.withId(n).delete();return r.state}function U(e,t){var n=t.itemType,a=t.newItemAttributes,r=b.a.session(e);return r[n].parse(a),r.state}var W=f("entities",(L={},Object(d.a)(L,w.c,F),Object(d.a)(L,w.a,U),Object(d.a)(L,w.b,_),L)),G=n(44);function J(e,t,n){return e[t].withId(n)}var z,B=n(29),V=n(73);function X(e,t){return Object(m.a)({},e,{editingEntities:t})}function Y(e,t,n){var a=n.itemID,r=n.itemType;return U(t,{itemType:r,itemID:a,newItemAttributes:function(e,t,n){return J(b.a.session(e),t,n).toJSON()}(e,r,a)})}function K(e,t){return X(e,Y(Object(B.c)(e),Object(V.b)(e),t))}function q(e,t){return X(e,_(Object(V.b)(e),t))}var Q=p({},(z={},Object(d.a)(z,G.b,K),Object(d.a)(z,G.c,(function(e,t){return X(e,U(Object(V.b)(e),t))})),Object(d.a)(z,G.f,(function(e,t){return X(e,F(Object(V.b)(e),t))})),Object(d.a)(z,G.a,(function(e,t){var n=Object(B.c)(e);return function(e,t){return Object(m.a)({},e,{entities:t})}(e,function(e,t,n){var a=b.a.session(e),r=n.itemType,i=n.itemID,l=J(a,r,i),o=b.a.session(t),c=o[r];if(c.hasId(i)){var u=c.withId(i);u.updateFrom&&u.updateFrom(l)}else{var s=l.toJSON();c.parse(s)}return o.state}(Object(V.b)(e),n,t))})),Object(d.a)(z,G.e,q),Object(d.a)(z,G.d,(function(e,t){return K(q(e,t),t)})),z)),Z=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n){return t.reduce((function(e,t){return t(e,n)}),e)}}(Object(c.combineReducers)({entities:v,editingEntities:E,pilots:P,mechs:D,tabs:j,modals:N,contextMenu:H}),W,Q,k);var $=function(e){var t=[s.a],n=[c.applyMiddleware.apply(void 0,t)],a=u.composeWithDevTools.apply(void 0,n);return Object(c.createStore)(Z,e,a)}(),ee=document.getElementById("root");(function(){var e=n(531).default;l.a.render(r.a.createElement(o.a,{store:$},r.a.createElement(e,null)),ee)})()},58:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var a="ENTITY_UPDATE",r="ENTITY_CREATE",i="ENTITY_DELETE"},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var a=n(46),r=n(34),i=function(e){return e.editingEntities},l=Object(a.a)(i,(function(e){return r.a.session(e)}))},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a="UNIT_INFO_UPDATE",r="UNIT_INFO_SET_COLOR"},97:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a="MODAL_OPEN",r="MODAL_CLOSE"},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a="CONTEXT_MENU_SHOW",r="CONTEXT_MENU_HIDE"}},[[304,1,2]]]);
//# sourceMappingURL=main.78124bf3.chunk.js.map
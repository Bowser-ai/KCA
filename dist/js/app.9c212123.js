(function(e){function t(t){for(var a,l,c=t[0],o=t[1],d=t[2],u=0,b=[];u<c.length;u++)l=c[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);s&&s(t);while(b.length)b.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},i=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/KCA-webapp/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=o;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3673:function(e,t,n){},"42df":function(e,t,n){},"4c73":function(e,t,n){"use strict";n("42df")},"501a":function(e,t,n){"use strict";n("9258")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"main-bar"},i=Object(a["h"])("h1",{style:{"font-style":"italic","font-size":"2.2em"}},"KCA",-1),l={id:"nav"},c=Object(a["g"])("Hoofdscherm"),o=Object(a["g"])("Mededelingen");function d(e,t,n,d,s,u){var b=Object(a["y"])("router-link"),f=Object(a["y"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("div",r,[i,Object(a["h"])("div",l,[Object(a["h"])(b,{to:"/"},{default:Object(a["E"])((function(){return[c]})),_:1}),Object(a["h"])(b,{to:"/mededelingen"},{default:Object(a["E"])((function(){return[o]})),_:1})])]),Object(a["h"])(f,{filialen:e.filialen},null,8,["filialen"])],64)}var s=n("1da1"),u=n("5530"),b=(n("96cf"),n("5502")),f={computed:Object(u["a"])({},Object(b["b"])({filialen:function(e){return e.filialen}})),mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("getAllFilialen");case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.error=t.t0;case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}};n("b21f");f.render=d;var h=f,p=n("6c02"),m=(n("ac1f"),n("841c"),Object(a["H"])("data-v-23639760"));Object(a["t"])("data-v-23639760");var g={class:"container"},O=Object(a["h"])("h2",{style:{"text-align":"center","font-size":"1.4em"}},"Filiaal Zoeken",-1),j={class:"search-choices"},v=Object(a["g"])(" FiliaalNummer "),y=Object(a["g"])(" Adres/plaats "),M=Object(a["g"])(" Postcode "),w={class:"search-form"},S={class:"results"},k={key:0,class:"error"};Object(a["r"])();var A=m((function(e,t,n,r,i,l){var c=Object(a["y"])("Pagination"),o=Object(a["y"])("FiliaalCard");return Object(a["q"])(),Object(a["d"])("div",g,[O,Object(a["h"])("div",j,[Object(a["h"])("label",null,[Object(a["h"])("input",{id:"filiaal-number",onChange:t[1]||(t[1]=function(){return l.changeSearchMode&&l.changeSearchMode.apply(l,arguments)}),checked:"",type:"radio",name:"search-type",value:"filiaal-nummer"},null,32),v]),Object(a["h"])("label",null,[Object(a["h"])("input",{type:"radio",onChange:t[2]||(t[2]=function(){return l.changeSearchMode&&l.changeSearchMode.apply(l,arguments)}),name:"search-type",value:"adres/plaats"},null,32),y]),Object(a["h"])("label",null,[Object(a["h"])("input",{type:"radio",onChange:t[3]||(t[3]=function(){return l.changeSearchMode&&l.changeSearchMode.apply(l,arguments)}),name:"search-type",value:"postcode"},null,32),M])]),Object(a["h"])("div",w,[Object(a["h"])("input",{placeholder:l.searchBarMode.placeholder,type:l.searchBarMode.type,id:"search-field",class:"search-input-field",onKeyup:t[4]||(t[4]=Object(a["G"])((function(e){return l.search(e,l.searchBarMode.fn)}),["enter"]))},null,40,["placeholder","type"])]),e.showPagination?(Object(a["q"])(),Object(a["d"])(c,{key:0,onPaginationChanged:t[5]||(t[5]=function(t){return e.changePagination(t)}),resultAmount:i.resultSet.length},null,8,["resultAmount"])):Object(a["e"])("",!0),Object(a["h"])("div",S,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(l.results,(function(e){return Object(a["q"])(),Object(a["d"])(o,{key:e.filiaalnummer,filiaal:e},null,8,["filiaal"])})),128)),i.error?(Object(a["q"])(),Object(a["d"])("p",k,Object(a["A"])(i.error),1)):Object(a["e"])("",!0)])])})),P=(n("caad"),n("2532"),n("5319"),n("07ac"),Object(a["H"])("data-v-53075ece"));Object(a["t"])("data-v-53075ece");var q={class:"result-card"},x=Object(a["h"])("p",{class:"header"},"FiliaalNummer:",-1),C=Object(a["h"])("p",{class:"header"},"Adres:",-1),F={key:0,class:"header"},R={key:1},_={key:2,class:"header"},I={key:3},N={key:4,class:"header"},B={key:5,class:"mededeling"};Object(a["r"])();var z=P((function(e,t,n,r,i,l){return Object(a["q"])(),Object(a["d"])("div",q,[x,Object(a["h"])("p",null,Object(a["A"])(n.filiaal.filiaalnummer),1),C,Object(a["h"])("a",{class:"address-link",href:l.addressMapUrl},[Object(a["h"])("p",null,Object(a["A"])(n.filiaal.address),1)],8,["href"]),n.filiaal.postcode?(Object(a["q"])(),Object(a["d"])("p",F,"Postcode")):Object(a["e"])("",!0),n.filiaal.postcode?(Object(a["q"])(),Object(a["d"])("p",R,Object(a["A"])(n.filiaal.postcode),1)):Object(a["e"])("",!0),n.filiaal.info?(Object(a["q"])(),Object(a["d"])("p",_,"Info:")):Object(a["e"])("",!0),n.filiaal.info?(Object(a["q"])(),Object(a["d"])("p",I,Object(a["A"])(n.filiaal.info),1)):Object(a["e"])("",!0),n.filiaal.mededeling?(Object(a["q"])(),Object(a["d"])("p",N,"Mededeling")):Object(a["e"])("",!0),n.filiaal.mededeling?(Object(a["q"])(),Object(a["d"])("p",B,[Object(a["h"])("pre",null,Object(a["A"])(n.filiaal.mededeling),1)])):Object(a["e"])("",!0),Object(a["x"])(e.$slots,"default",{},void 0,!0)])})),E=(n("99af"),{props:{filiaal:{type:Object}},computed:{addressMapUrl:function(){return"".concat("https://maps.google.com/","?q=").concat(this.filiaal.address)}}});n("72dd");E.render=z,E.__scopeId="data-v-53075ece";var L=E,T=Object(a["H"])("data-v-250c7032");Object(a["t"])("data-v-250c7032");var H={class:"pagination-container"},$={class:"result-amount"},K={key:0,class:"pagination-btns"};Object(a["r"])();var D=T((function(e,t,n,r,i,l){return Object(a["q"])(),Object(a["d"])("div",H,[Object(a["h"])("p",$,"Resultaten: "+Object(a["A"])(n.resultAmount),1),l.paginationSize.length>1?(Object(a["q"])(),Object(a["d"])("div",K,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(l.paginationSize,(function(e){return Object(a["q"])(),Object(a["d"])("button",{class:"pagination-btn",role:"button",onClick:function(t){return l.setPagination(e)},key:e,style:l.paginationButtonSelected(e)},Object(a["A"])(e),13,["onClick"])})),128))])):Object(a["e"])("",!0)])})),G=(n("a9e3"),{data:function(){return{currentPage:1}},props:{resultAmount:{type:Number,default:0}},computed:{paginationSize:function(){var e=this.resultAmount/"10"+1,t=[];if(e>0){for(var n=1;n<e;++n)t.push(n);return t}return[]}},methods:{paginationButtonSelected:function(e){return e===this.currentPage?{backgroundColor:"#f9bca3"}:{}},setPagination:function(e){this.currentPage=e,this.$emit("paginationChanged",this.currentPage)}}});n("cd6c");G.render=D,G.__scopeId="data-v-250c7032";var Q=G,U=(n("fb6a"),{data:function(){return{currentPaginatedResultSet:[]}},computed:{showPagination:function(){return this.resultSet.length>"10"}},methods:{changePagination:function(e){this.currentPaginatedResultSet=this.resultSet.slice("10"*(e-1),"10"*e)}}}),V=U,J={mixins:[V],components:{FiliaalCard:L,Pagination:Q},props:{filialen:{type:Object}},data:function(){return{resultSet:[],error:"",searchMode:"filiaal-nummer"}},computed:{searchBarMode:function(){var e={"filiaal-nummer":{type:"number",placeholder:"Voer filiaalnummer in",fn:this.searchFiliaalNummer},"adres/plaats":{type:"text",placeholder:"Voer adres of plaats in",fn:this.searchAddress},postcode:{type:"text",placeholder:"Voer postcode in",fn:this.searchPostcode}};return e[this.searchMode]},results:function(){return this.currentPaginatedResultSet.length>0?this.currentPaginatedResultSet:this.resultSet}},methods:{searchFiliaalNummer:function(e){var t=e.target.value,n=this.filialen[t];void 0!==n?this.resultSet.push(n):this.error='filiaal met nummer: "'.concat(t,'" niet gevonden')},searchAddress:function(e){var t=e.target.value;""!==t&&this.searchImpl(t,"address",(function(e){return e.toLowerCase().includes(t.toLowerCase())}))},searchPostcode:function(e){var t=e.target.value,n=/(^\d{4}\s*\w{2}$)|(^[B|b]*\s*\d{4,5}$)/;if(n.test(t)){var a=/\s+/g;this.searchImpl(t,"postcode",(function(e){return e.toLowerCase().replace(a,"")===t.toLowerCase().replace(a,"")}))}else this.error="Postcode moet naar geldig Nederlandse of Belgische conventie ingevoerd worden"},searchImpl:function(e,t,n){for(var a=0,r=Object.values(this.filialen);a<r.length;a++){var i=r[a];i&&i[t]&&n(i[t])&&this.resultSet.push(i)}0===this.resultSet.length&&(this.error='Geen filialen gevonden met zoekterm: "'.concat(e,'"'))},search:function(e,t){this.resetScreen(),t(e);var n=1;this.changePagination(n),this.clearInput()},resetScreen:function(){this.resultSet=[],this.error=""},changeSearchMode:function(e){this.searchMode=e.target.value},clearInput:function(){document.querySelector("#search-field").value=""}}};n("4c73");J.render=A,J.__scopeId="data-v-23639760";var W=J,Z=Object(a["H"])("data-v-b9611e3e");Object(a["t"])("data-v-b9611e3e");var X={class:"container"},Y={key:1,class:"modal"},ee={class:"modal-body"},te=Object(a["f"])('<p class="modal-body-text" data-v-b9611e3e>Mededeling toevoegen</p><span class="input-field" data-v-b9611e3e><label for="modal-filiaal-nummer" data-v-b9611e3e>FiliaalNummer:</label><input style="width:4.5em;" type="Number" id="modal-filiaal-nummer" data-role="input-filiaalnummer" data-v-b9611e3e></span><span class="input-field" data-v-b9611e3e><label for="modal-mededeling" data-v-b9611e3e>Mededeling:</label><textarea id="modal-mededeling" data-role="input-mededeling" cols="50" rows="5" data-v-b9611e3e></textarea></span>',3),ne={class:"modal-btns"},ae={class:"results"};Object(a["r"])();var re=Z((function(e,t,n,r,i,l){var c=Object(a["y"])("Pagination"),o=Object(a["y"])("FiliaalCard");return Object(a["q"])(),Object(a["d"])("div",X,[Object(a["F"])(Object(a["h"])("div",{class:"message"},Object(a["A"])(i.message),513),[[a["C"],i.message]]),Object(a["h"])("button",{class:"btn add-mededeling-btn",role:"button",onClick:t[1]||(t[1]=function(){return l.toggleAddMededelingModal&&l.toggleAddMededelingModal.apply(l,arguments)})}," Mededeling toevoegen "),e.showPagination?(Object(a["q"])(),Object(a["d"])(c,{key:0,onPaginationChanged:t[2]||(t[2]=function(t){return e.changePagination(t)}),resultAmount:l.resultSet.length},null,8,["resultAmount"])):Object(a["e"])("",!0),i.showAddMededelingModal?(Object(a["q"])(),Object(a["d"])("div",Y,[Object(a["h"])("div",ee,[te,Object(a["h"])("div",ne,[Object(a["h"])("button",{role:"button",class:"modal-btn",onClick:t[3]||(t[3]=function(){return l.addMededeling&&l.addMededeling.apply(l,arguments)})}," Toevoegen "),Object(a["h"])("button",{onClick:t[4]||(t[4]=function(){return l.toggleAddMededelingModal&&l.toggleAddMededelingModal.apply(l,arguments)}),role:"button",class:"modal-btn"}," Annuleren ")])])])):Object(a["e"])("",!0),Object(a["h"])("div",ae,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(l.results,(function(e){return Object(a["q"])(),Object(a["d"])(o,{key:e.filiaalnummer,filiaal:e},{default:Z((function(){return[i.editMode[e.filiaalnummer]?(Object(a["q"])(),Object(a["d"])("button",{key:0,role:"button",class:"btn edit-mededeling-btn",onClick:function(t){return l.editMededeling(t,e)}}," Opslaan ",8,["onClick"])):(Object(a["q"])(),Object(a["d"])("button",{key:1,onClick:function(t){return l.enableEditMode(t,e.filiaalnummer)},role:"button",class:"btn edit-mededeling-btn"}," Aanpassen ",8,["onClick"]))]})),_:2},1032,["filiaal"])})),128))])])})),ie=(n("d81d"),n("4de4"),{mixins:[V],components:{FiliaalCard:L,Pagination:Q},props:{filialen:{type:Object}},data:function(){return{showAddMededelingModal:!1,editMode:{},message:""}},computed:{resultSet:function(){return Object.values(this.filialen).filter((function(e){return e.mededeling})).map((function(e){return{filiaalnummer:e["filiaalnummer"],address:e["address"],mededeling:e["mededeling"]}}))},results:function(){return 0===this.currentPaginatedResultSet.length?this.resultSet.slice(0,"10"):this.currentPaginatedResultSet}},methods:{toggleAddMededelingModal:function(){this.showAddMededelingModal=!this.showAddMededelingModal,this.toggleScrolling()},toggleScrolling:function(){var e=document.querySelector("body");this.showAddMededelingModal?e.style.overflow="hidden":e.style.overflow="auto"},enableEditMode:function(e,t){this.elementCache||(this.elementCache={}),this.editMode[t]=!0;var n=document.createElement("textarea");n.setAttribute("rows",5);var a=e.target.parentNode.querySelector(".mededeling");this.elementCache.mededelingParagraph=a,n.innerHTML=a.innerText,a.replaceWith(n),n.classList.add("edit-mededeling")},disableEditMode:function(e){this.editMode[e]=!1;var t=this.elementCache.mededelingParagraph,n=document.querySelector(".edit-mededeling");n.replaceWith(t)},editMededeling:function(e,t){var n=e.target.parentNode.querySelector(".edit-mededeling").value;t.mededeling=n,this.updateMededeling(t),this.disableEditMode(t.filiaalnummer)},addMededeling:function(){var e=document.querySelector('[data-role="input-filiaalnummer"]').value,t=this.filialen[e];if(void 0===t)this.setMessage("Filiaal met nummer: ".concat(e," bestaat niet"),!1);else{var n=document.querySelector('[data-role="input-mededeling"]').value;t.mededeling?t.mededeling+="\n"+n:t.mededeling=n,this.updateMededeling(t)}this.toggleAddMededelingModal()},updateMededeling:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$store.dispatch("addMededeling",e);case 3:e.mededeling?t.setMessage("Mededeling toevoegd aan filiaal met nummer: ".concat(e.filiaalnummer),!0):t.setMessage("Mededeling verwijderd van filiaal met nummer: ".concat(e.filiaalnummer),!0),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),t.setMessage(n.t0,!1);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},setMessage:function(e,t){var n=this;this.message=e;var a=t?"success":"error",r=document.querySelector(".message");r.classList.add(a),setTimeout((function(){r.classList.remove(a),n.message=""}),3e3)}}});n("501a");ie.render=re,ie.__scopeId="data-v-b9611e3e";var le=ie,ce=[{path:"/",name:"mainScreen",component:W},{path:"/mededelingen",name:"Mededelingen",component:le}],oe=Object(p["a"])({history:Object(p["b"])("/KCA-webapp/"),routes:ce}),de=oe,se=(n("b64b"),n("260b")),ue=(n("66ce"),{apiKey:"AIzaSyDF2m4vvAS0zQXfn2NQgQxrDZGRblq0wY8",authDomain:"tielbeke3.firebaseapp.com",databaseURL:"https://tielbeke3.firebaseio.com",projectId:"tielbeke3",storageBucket:"tielbeke3.appspot.com",messagingSenderId:"1010883935820",appId:"1:1010883935820:web:7666663961f7de9f4afee9"});se["a"].initializeApp(ue);var be=se["a"].database(),fe=be,he=Object(b["a"])({state:{filialen:{}},mutations:{setAllFilialen:function(e,t){for(var n=0,a=Object.values(t);n<a.length;n++){var r=a[n];e.filialen[r.filiaalnummer]=r}},setMededeling:function(e,t){e.filialen[t.filiaalnummer].mededeling=t.mededeling}},actions:{getAllFilialen:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fe.ref().once("value");case 3:if(a=t.sent,a.exists()){t.next=6;break}throw new Error("database error, try again later");case 6:return t.next=8,a.val();case 8:r=t.sent,n("setAllFilialen",r);case 10:case"end":return t.stop()}}),t)})))()},addMededeling:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,fe.ref().orderByChild("filiaalnummer").equalTo(t.filiaalnummer).once("value");case 3:if(r=n.sent,r.exists()){n.next=6;break}throw new Error("filiaal niet gevonden in de database");case 6:return n.next=8,fe.ref(Object.keys(r.val())[0]).update(t);case 8:a("setMededeling",t);case 9:case"end":return n.stop()}}),n)})))()}},modules:{}});Object(a["c"])(h).use(he).use(de).mount("#app")},"72dd":function(e,t,n){"use strict";n("b99f")},9258:function(e,t,n){},b21f:function(e,t,n){"use strict";n("f0f6")},b99f:function(e,t,n){},cd6c:function(e,t,n){"use strict";n("3673")},f0f6:function(e,t,n){}});
//# sourceMappingURL=app.9c212123.js.map
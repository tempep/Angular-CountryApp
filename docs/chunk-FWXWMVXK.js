import{A as y,B as F,C as L,D,E as w,F as X,G as M,H as g,I as N,J as Y,K as Z,O as ee,Q as te,R as ie,S as A,U as j,V as E,X as ne,a as k,b as z,c as U,d as J,e as C,f as H,g as B,h as G,i as h,j as T,k as K,l as Q,m as R,n as s,o as f,p as d,q as m,r,s as n,t as p,u as W,v as b,w as S,x as P,y as a,z as u}from"./chunk-VEAB4R47.js";var v=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountry:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(i){return this.http.get(i).pipe(U(()=>k([])))}searchCountryByAlphaCode(i){return this.http.get(`${this.apiUrl}/alpha/${i}`).pipe(z(o=>o.length>0?o[0]:null),U(()=>k(null)))}searchCapital(i){let o=`${this.apiUrl}/capital/${i}`;return this.getCountriesRequest(o).pipe(C(l=>this.cacheStore.byCapital={term:i,countries:l}),C(()=>this.saveToLocalStorage()))}searchCountry(i){let o=`${this.apiUrl}/name/${i}`;return this.getCountriesRequest(o).pipe(C(l=>this.cacheStore.byCountry={term:i,countries:l}),C(()=>this.saveToLocalStorage()))}searchRegion(i){let o=`${this.apiUrl}/region/${i}`;return this.getCountriesRequest(o).pipe(C(l=>this.cacheStore.byRegion={region:i,countries:l}),C(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(o){return new(o||e)(G(Z))},e.\u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var pe=t=>["/countries/by/",t];function ue(t,e){t&1&&(r(0,"div",2),a(1,` No hay pa\xEDses que mostrar
`),n())}function de(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),n(),r(3,"td"),p(4,"img",5),n(),r(5,"td"),a(6),n(),r(7,"td"),a(8),n(),r(9,"td"),a(10),L(11,"number"),n(),r(12,"td")(13,"a",6),a(14,"Ver m\xE1s"),n()()()),t&2){let c=e.$implicit,i=e.index;s(2),u(i+1),s(2),m("src",c.flags.svg,R)("alt",c.name.common),s(2),y(" ",c.name.common," "),s(2),y(" ",c.capital," "),s(2),y(" ",D(11,7,c.population)," "),s(3),m("routerLink",F(9,pe,c.cca3))}}function he(t,e){if(t&1&&(r(0,"table",3)(1,"thead")(2,"th"),a(3,"#"),n(),r(4,"th"),a(5,"Bandera"),n(),r(6,"th"),a(7,"Nombre"),n(),r(8,"th"),a(9,"Capital"),n(),r(10,"th"),a(11,"Poblaci\xF3n"),n(),p(12,"th"),n(),r(13,"tbody"),d(14,de,15,11,"tr",4),n()()),t&2){let c=S();s(14),m("ngForOf",c.countries)}}var I=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["countries-country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(o,l){if(o&1&&d(0,ue,2,0,"div",1)(1,he,15,1,"ng-template",null,0,w),o&2){let _=P(2);m("ngIf",l.countries.length===0)("ngIfElse",_)}},dependencies:[M,g,ie,N],styles:["img[_ngcontent-%COMP%]{width:30px}"]});let t=e;return t})();function ge(t,e){t&1&&p(0,"shared-loading-spinner")}var re=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.initialValue="",this.isLoading=!1}searchByCapital(i){this.isLoading=!0,this.countriesService.searchCapital(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}};e.\u0275fac=function(o){return new(o||e)(f(v))},e.\u0275cmp=h({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(o,l){o&1&&(r(0,"h2"),a(1,"Por Capital"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function($){return l.searchByCapital($)}),n()()(),r(6,"div",0)(7,"div",1),p(8,"hr"),d(9,ge,1,0,"shared-loading-spinner",3),p(10,"countries-country-table",4),n()()),o&2&&(s(5),m("initialValue",l.initialValue),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[g,j,E,I],encapsulation:2});let t=e;return t})();function ye(t,e){t&1&&p(0,"shared-loading-spinner")}var ae=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.initialValue="",this.isLoading=!1}searchByCountry(i){this.isLoading=!0,this.countriesService.searchCountry(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountry.countries,this.initialValue=this.countriesService.cacheStore.byCountry.term}};e.\u0275fac=function(o){return new(o||e)(f(v))},e.\u0275cmp=h({type:e,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(o,l){o&1&&(r(0,"h2"),a(1,"Por Pa\xEDs"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function($){return l.searchByCountry($)}),n()()(),r(6,"div",0)(7,"div",1),p(8,"hr"),d(9,ye,1,0,"shared-loading-spinner",3),p(10,"countries-country-table",4),n()()),o&2&&(s(5),m("initialValue",l.initialValue),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[g,j,E,I]});let t=e;return t})();var ve=t=>({"btn-outline-primary":t});function Ce(t,e){if(t&1){let c=W();r(0,"button",6),b("click",function(){let o=K(c).$implicit,l=S();return Q(l.searchByRegion(o))}),a(1),n()}if(t&2){let c=e.$implicit,i=S();m("ngClass",F(2,ve,i.selectedRegion===c)),s(),y(" ",c," ")}}function Se(t,e){t&1&&p(0,"shared-loading-spinner")}var se=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(i){this.selectedRegion=i,this.isLoading=!0,this.countriesService.searchRegion(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(f(v))},e.\u0275cmp=h({type:e,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(o,l){o&1&&(r(0,"h2"),a(1,"Por Regi\xF3n"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1),d(5,Ce,2,4,"button",2),n()(),r(6,"div",0)(7,"div",3),p(8,"hr"),d(9,Se,1,0,"shared-loading-spinner",4),p(10,"countries-country-table",5),n()()),o&2&&(s(5),m("ngForOf",l.regions),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries))},dependencies:[X,M,g,E,I]});let t=e;return t})();function xe(t,e){t&1&&(r(0,"div",2),a(1,"Espere por favor"),n())}function be(t,e){if(t&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4," Pa\xEDs: "),r(5,"strong"),a(6),n(),p(7,"hr"),n()()(),r(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),n(),p(12,"img",6),n(),r(13,"div",7)(14,"h3"),a(15,"Infomaci\xF3n"),n(),r(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblaci\xF3n:"),n(),a(20),L(21,"number"),n(),r(22,"li",9),a(23," C\xF3digo: "),r(24,"strong"),a(25),n()()()()(),r(26,"div",10)(27,"div",7)(28,"h3"),a(29,"Traducciones"),n(),r(30,"div",11)(31,"span",12),a(32),n(),r(33,"span",12),a(34),n(),r(35,"span",12),a(36),n(),r(37,"span",12),a(38),n(),r(39,"span",12),a(40),n(),r(41,"span",12),a(42),n(),r(43,"span",12),a(44),n(),r(45,"span",12),a(46),n(),r(47,"span",12),a(48),n(),r(49,"span",12),a(50),n(),r(51,"span",12),a(52),n()()()()()),t&2){let c=S();s(6),u(c.country.name.common),s(6),m("src",c.country.flags.svg,R)("alt",c.country.name.common),s(8),y(" ",D(21,16,c.country.population)," "),s(5),y(" ",c.country.cca3," "),s(7),u(c.country.translations.ara.common),s(2),u(c.country.translations.bre.common),s(2),u(c.country.translations.ces.common),s(2),u(c.country.translations.cym.common),s(2),u(c.country.translations.deu.common),s(2),u(c.country.translations.est.common),s(2),u(c.country.translations.fra.common),s(2),u(c.country.translations.ita.common),s(2),u(c.country.translations.jpn.common),s(2),u(c.country.translations.rus.common),s(2),u(c.country.translations.kor.common)}}var ce=(()=>{let e=class e{constructor(i,o,l){this.activatedRoute=i,this.router=o,this.countriesService=l}ngOnInit(){this.activatedRoute.params.pipe(J(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}};e.\u0275fac=function(o){return new(o||e)(f(ee),f(te),f(v))},e.\u0275cmp=h({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(o,l){if(o&1&&d(0,xe,2,0,"ng-template",null,0,w)(2,be,53,18,"div",1),o&2){let _=P(1);s(2),m("ngIf",l.country)("ngIfElse",_)}},dependencies:[g,N]});let t=e;return t})();var Ee=[{path:"by-capital",component:re},{path:"by-country",component:ae},{path:"by-region",component:se},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],le=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=B({imports:[A.forChild(Ee),A]});let t=e;return t})();var We=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=T({type:e}),e.\u0275inj=B({imports:[Y,le,ne]});let t=e;return t})();export{We as CountriesModule};

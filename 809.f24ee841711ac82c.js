"use strict";(self.webpackChunkcontas_front=self.webpackChunkcontas_front||[]).push([[809],{7809:(T,f,s)=>{s.r(f),s.d(f,{RegisterModule:()=>U});var C=s(4755),m=s(8522),n=s(9401),u=s(5926);const d=(0,u.PH)("[REGISTER] Create User",(0,u.Ky)());var t=s(2223),g=s(1728),i=s(9114),p=s(8097);const M=[{path:"",component:(()=>{class e{constructor(o){this.store=o,this.visible_password=!1}matchValues(o){return r=>r.parent&&r.parent.value&&r.value===r?.parent?.get(o)?.value?null:{isMatching:!1}}ngOnInit(){this.form=new n.cw({name:new n.NI("",{nonNullable:!1,validators:[n.kI.required,n.kI.minLength(2)]}),email:new n.NI("",{nonNullable:!1,validators:[n.kI.required,n.kI.email]}),password:new n.NI("",{nonNullable:!1,validators:[n.kI.required]}),confirmPassword:new n.NI("",{nonNullable:!1,validators:[n.kI.required,this.matchValues("password")]}),receive_mail:new n.NI(!0)})}submit(){this.form.valid&&this.store.dispatch(d({data:this.form.value}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:44,vars:4,consts:[[1,"forget-password-container"],[1,"card"],["autocomplete","off",3,"formGroup","submit"],["matPrefix","",1,"material-symbols-rounded"],["type","text","matInput","","formControlName","name"],["type","email","matInput","","formControlName","email"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],[1,"material-symbols-rounded"],["matInput","","formControlName","confirmPassword",3,"type"],["mat-flat-button","","color","primary",3,"disabled"],["routerLink","/login"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3,"Novo aqui?"),t.qZA(),t.TgZ(4,"p"),t._uU(5," Preencha os campos para realizar seu cadastro e aproveitar nossas ferramentas "),t.qZA(),t.TgZ(6,"form",2),t.NdJ("submit",function(){return r.submit()}),t.TgZ(7,"mat-form-field")(8,"span",3),t._uU(9," person "),t.qZA(),t.TgZ(10,"mat-label"),t._uU(11,"Nome"),t.qZA(),t._UZ(12,"input",4),t.qZA(),t.TgZ(13,"mat-form-field")(14,"span",3),t._uU(15," mail "),t.qZA(),t.TgZ(16,"mat-label"),t._uU(17,"E-mail"),t.qZA(),t._UZ(18,"input",5),t.qZA(),t.TgZ(19,"mat-form-field")(20,"span",3),t._uU(21," lock "),t.qZA(),t.TgZ(22,"mat-label"),t._uU(23,"Senha"),t.qZA(),t._UZ(24,"input",6),t.TgZ(25,"button",7),t.NdJ("click",function(){return r.visible_password=!r.visible_password}),t.TgZ(26,"span",8),t._uU(27," visibility "),t.qZA()()(),t.TgZ(28,"mat-form-field")(29,"span",3),t._uU(30," lock "),t.qZA(),t.TgZ(31,"mat-label"),t._uU(32,"Confirme a nova senha"),t.qZA(),t._UZ(33,"input",9),t.TgZ(34,"button",7),t.NdJ("click",function(){return r.visible_password=!r.visible_password}),t.TgZ(35,"span",8),t._uU(36," visibility "),t.qZA()()(),t.TgZ(37,"button",10),t._uU(38," Criar conta "),t.qZA()(),t.TgZ(39,"p"),t._uU(40," J\xe1 possui conta? "),t.TgZ(41,"a",11)(42,"strong"),t._uU(43,"Fa\xe7a login!"),t.qZA()()()()()),2&o&&(t.xp6(6),t.Q6J("formGroup",r.form),t.xp6(18),t.Q6J("type",r.visible_password?"text":"password"),t.xp6(9),t.Q6J("type",r.visible_password?"text":"password"),t.xp6(4),t.Q6J("disabled",r.form.invalid))},dependencies:[m.rH,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,g.lW,g.RK,i.KE,i.hX,i.qo,i.R9,p.Nt],styles:["[_nghost-%COMP%]{display:flex;background-color:#f8f9fd;height:100vh;width:100vw}[_nghost-%COMP%]   .forget-password-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100%;width:100%}[_nghost-%COMP%]   .forget-password-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#fff;border-radius:.25rem;box-shadow:0 0 3rem #cecece;padding:2rem 3rem;display:flex;flex-direction:column;text-align:center;min-width:320px}[_nghost-%COMP%]   .forget-password-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:.5rem}[_nghost-%COMP%]   .forget-password-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:center;margin:3rem 0}[_nghost-%COMP%]   .forget-password-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin-left:auto;margin-bottom:1rem;font-weight:500;font-size:.75rem}[_nghost-%COMP%]   .forget-password-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.825rem}[_nghost-%COMP%]   .forget-password-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#565656}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(M),m.Bz]}),e})();var y=s(430),l=s(9507),b=s(4004),w=s(3161),h=s(9596),O=s(1261);let v=(()=>{class e extends w.b{constructor(){super()}create(o){this.setLoading(!0),this._http.post(`${O.N.api_url}/users/create`,o).subscribe({next:r=>{this.setLoading(!1),this._store.dispatch(h.k.newAlert({data:{type:"success",message:r?.message||"Usu\xe1rio criado com sucesso!"}})),this._router.navigate(["/login"])},error:r=>{this.setLoading(!1),this._store.dispatch(h.k.newAlert({data:{type:"error",message:r.error.message}}))}})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),R=(()=>{class e{constructor(o,r){this.actions=o,this.service=r,this.createUser$=(0,l.GW)(()=>this.actions.pipe((0,l.l4)(d),(0,b.U)(({data:c})=>{this.service.create(c)})),{dispatch:!1})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(l.eX),t.LFG(v))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),U=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[v],imports:[C.ez,P,n.u5,n.UX,g.ot,i.lN,p.c,y.Ps,l.sQ.forFeature([R])]}),e})()}}]);
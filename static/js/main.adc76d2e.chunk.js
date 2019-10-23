(this["webpackJsonpgoit-react-hw-05-budget-planner"]=this["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{18:function(e,t,a){e.exports={container:"App_container__1B0Xp"}},2:function(e,t,a){e.exports={content:"Values_content__14tVJ",iner:"Values_iner__zOYo_",valLablel:"Values_valLablel__2tODx",valVall:"Values_valVall__3XQJB",redMinus:"Values_redMinus__1VRsw Values_valVall__3XQJB"}},21:function(e,t,a){e.exports={styledTable:"ExpensesTable_styledTable__1YWk3"}},24:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),u=a.n(r),c=a(3),s=a(1),o=function(e){return function(t){return l.a.createElement(e,t)}},m=a(8),i=a(9),b=a(11),d=a(10),p=a(12),E=(a(36),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={value:""},a.handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.value;Number.isNaN(Number(t))||a.props.onSave(Number(t)),a.setState({value:""})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.value;return l.a.createElement("div",null,l.a.createElement("form",{className:"styledForm",onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"total_budget",className:"labelStyles"},"Enter your total budget",l.a.createElement("input",{type:"number",placeholder:"...",value:e,className:"styledInput",onChange:this.handleChange,name:"total_budget",id:"total_budget"})),l.a.createElement("button",{type:"submit",className:"styledButton"},"save")))}}]),t}(n.Component)),v="SET_BUDGET",h="ADD_EXPENSE",f="DELETE_EXPENSE",y={onSave:function(e){return{type:v,payload:e}}},g=Object(s.compose)(Object(c.b)(null,y),o)(E),_=a(18),N=a.n(_),O=a(2),j=a.n(O),x=function(e){var t=e.budget,a=e.expenses,n=e.balance;return l.a.createElement("div",{className:j.a.content},l.a.createElement("div",{className:j.a.iner},l.a.createElement("span",{className:j.a.valLablel},"Budget"),l.a.createElement("span",{className:j.a.valVall},t,"\xa0$")),l.a.createElement("div",{className:j.a.iner},l.a.createElement("span",{className:j.a.valLablel},"Expenses"),l.a.createElement("span",{className:j.a.valVall},a,"\xa0$")),l.a.createElement("div",{className:j.a.iner},l.a.createElement("span",{className:j.a.valLablel},"Balance"),l.a.createElement("span",{className:n<=0?j.a.redMinus:j.a.valVall},n,"\xa0$")))},S=function(e){return e.budget.budget},V=function(e){return e.budget.expenses.reduce((function(e,t){return e+t.amount}),0)},C=function(e){return S(e)-V(e)},B=function(e){return e.budget.expenses},w=Object(s.compose)(Object(c.b)((function(e){return{budget:S(e),expenses:V(e),balance:C(e)}})),o)(x),T=a(19),k=a(20),D=a.n(k),F=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",amount:0},a.handleChange=function(e){a.setState(Object(T.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,l=t.amount,r={id:D.a.generate(),name:n,amount:Number(l)};a.props.onSaveExpense(r),a.setState({name:"",amount:0})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.amount;return l.a.createElement("div",null,l.a.createElement("form",{className:"styledForm",onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"name",className:"labelStyles"},"Enter expense name",l.a.createElement("input",{type:"text",value:t,className:"styledInput",onChange:this.handleChange,name:"name",id:"name"})),l.a.createElement("label",{htmlFor:"expense_amount",className:"labelStyles"},"Enter expense amount",l.a.createElement("input",{type:"number",placeholder:"...",value:0===a?"":a,className:"styledInput",onChange:this.handleChange,name:"amount",id:"expense_amount"})),l.a.createElement("button",{type:"submit",className:"styledButton"},"add")))}}]),t}(n.Component),L={onSaveExpense:function(e){return{type:h,payload:e}}},J=Object(s.compose)(Object(c.b)(null,L),o)(F),R=a(21),X=a.n(R),A=function(e){var t=e.expense,a=e.onRemove;return l.a.createElement(l.a.Fragment,null," ",t.length>0&&l.a.createElement("table",{className:X.a.styledTable},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Expense name"),l.a.createElement("th",null,"Expense amount"),l.a.createElement("th",null))),l.a.createElement("tbody",null,t.map((function(e){var t=e.id,n=e.name,r=e.amount;return l.a.createElement("tr",{key:t},l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"styledButton",onClick:function(){return a(t)}},"dell")))})))))},I={onRemove:function(e){return{type:f,payload:e}}},M=Object(s.compose)(Object(c.b)((function(e){return{expense:B(e)}}),I),o)(A),$=function(){return l.a.createElement("main",{className:N.a.container},l.a.createElement(g,null),l.a.createElement(w,null),l.a.createElement(J,null),l.a.createElement(M,null))},P=a(22),Q=a(23),Y=Object(s.combineReducers)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case v:return n;default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case h:return[n].concat(Object(Q.a)(e));case f:return e.filter((function(e){return e.id!==n}));default:return e}}}),z=Object(s.combineReducers)({budget:Y}),G=Object(s.createStore)(z,Object(P.devToolsEnhancer)());u.a.render(l.a.createElement(c.a,{store:G},l.a.createElement($,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.adc76d2e.chunk.js.map
var T={
en:{register:"Register",regT:"Online Registration",regIntro:"Register from anywhere. Fill in the form, then send it to the school by WhatsApp or email.",rName:"Student's full name",rDob:"Date of birth",rDistrict:"District / place where you live",rSchool:"Last school attended",rParent:"Parent or guardian name",rPhone:"Parent or guardian phone",rEmail:"Email (optional)",rMsg:"Message or question (optional)",rSubmit:"Prepare my registration",rReady:"Your registration is ready. Send it to the school:",rWA:"Send by WhatsApp",rMail:"Send by email",rNext:"After sending, pay the registration fee (see Fees above) and keep your receipt.",sch:"Our school",formT:"Choose how to pay",fname:"Full name",fphone:"Phone number",fprog:"Program",fmethod:"Payment method",choose:"Select",momo:"MoMo (Mobile Money)",submit:"Continue",payD:"Payment details",code:"MoMo code",accno:"Account number",accname:"Account name",thanks:"Thank you",instr:"Please pay using the details above, keep your receipt or SMS, and bring it to school.",welcomeTo:"Welcome to",eyebrow:"A SCHOOL OF TECHNICS",desc:"Saint Michael Technical High School trains students with practical skills for the world of work. Our five programs (Software Development, Food and Beverage, Computer Systems, Architecture and Multimedia) combine classroom learning with hands-on practice, so every graduate leaves ready to start a career or continue to higher education.",home:"Home",programs:"Programs",fees:"Fees",contact:"Contact",welcome:"Welcome to Saint Michael Technical High School",tag:"A school of technics: skills today, a career tomorrow.",v0:"A School of Technics",v0p:"Learn. Practice. Succeed.",p1:"Software Development",p1d:"Build apps and websites.",p2:"Food and Beverage",p2d:"Cook, serve and manage with skill.",p3:"Computer Systems",p3d:"Networks, hardware and support.",p4:"Architecture",p4d:"Design and plan buildings.",p5:"Multimedia",p5d:"Video, graphics and animation.",feesT:"Registration and Payment Fees",item:"Item",amount:"Amount (RWF)",reg:"Registration fee",term:"School fees per term",uni:"Uniform",mat:"Learning materials",apply:"Apply now"},
rw:{register:"Iyandikishe",regT:"Kwiyandikisha kuri Interineti",regIntro:"Iyandikishe aho uri hose. Uzuza urupapuro, hanyuma urwohereze ku ishuri kuri WhatsApp cyangwa kuri imeri.",rName:"Amazina yose y'umunyeshuri",rDob:"Italiki y'amavuko",rDistrict:"Akarere / aho utuye",rSchool:"Ishuri wize ubushize",rParent:"Izina ry'umubyeyi cyangwa umurera",rPhone:"Telefoni y'umubyeyi cyangwa umurera",rEmail:"Imeri (si ngombwa)",rMsg:"Ubutumwa cyangwa ikibazo (si ngombwa)",rSubmit:"Tegura iyandikishwa ryanjye",rReady:"Iyandikishwa ryawe riteguye. Rihe ishuri:",rWA:"Ohereza kuri WhatsApp",rMail:"Ohereza kuri imeri",rNext:"Nyuma yo kohereza, ishyura amafaranga yo kwiyandikisha (reba Amafaranga hejuru) ubike inyemezabwishyu.",sch:"Ishuri ryacu",formT:"Hitamo uko wishyura",fname:"Amazina yose",fphone:"Nimero ya telefoni",fprog:"Ishami",fmethod:"Uburyo bwo kwishyura",choose:"Hitamo",momo:"MoMo (Mobile Money)",submit:"Komeza",payD:"Amakuru yo kwishyura",code:"Kode ya MoMo",accno:"Nimero ya konti",accname:"Izina rya konti",thanks:"Murakoze",instr:"Mwishyure mukoresheje amakuru yo hejuru, mubike inyemezabwishyu cyangwa SMS, muyizane ku ishuri.",welcomeTo:"Murakaza neza kuri",eyebrow:"ISHURI RY'IMYUGA",desc:"Saint Michael Technical High School itegura abanyeshuri n'ubumenyi ngiro bubafasha ku isoko ry'umurimo. Amashami yacu atanu (Gukora Porogaramu, Ibiribwa n'Ibinyobwa, Sisitemu za Mudasobwa, Ubwubatsi na Multimedia) ahuza amasomo yo mu ishuri no kwimenyereza gukora, kugira ngo buri wese arangize yiteguye gutangira umurimo cyangwa gukomeza kaminuza.",home:"Ahabanza",programs:"Amashami",fees:"Amafaranga",contact:"Twandikire",welcome:"Murakaza neza kuri Saint Michael Technical High School",tag:"Ishuri ry'imyuga: ubumenyi uyu munsi, umurimo ejo.",v0:"Ishuri ry'Imyuga",v0p:"Iga. Itoze. Ugere ku ntego.",p1:"Gukora Porogaramu za Mudasobwa",p1d:"Kubaka porogaramu n'imbuga za interineti.",p2:"Ibiribwa n'Ibinyobwa",p2d:"Guteka, gutegura no gucunga neza.",p3:"Sisitemu za Mudasobwa",p3d:"Imiyoboro, ibikoresho n'ubufasha bwa tekiniki.",p4:"Ubwubatsi n'Igishushanyo",p4d:"Gushushanya no gutegura inyubako.",p5:"Multimedia",p5d:"Amashusho, ibishushanyo n'ubuhanzi bw'amashusho.",feesT:"Amafaranga yo Kwiyandikisha no Kwishyura",item:"Icyishyurwa",amount:"Amafaranga (RWF)",reg:"Amafaranga yo kwiyandikisha",term:"Amafaranga y'ishuri ku gihembwe",uni:"Impuzankano",mat:"Ibikoresho by'amasomo",apply:"Iyandikishe none"}
};
var lang="en",theme="light";
try{lang=localStorage.getItem("lang")||"en";theme=localStorage.getItem("theme")||"light"}catch(e){}
var SUN='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
var MOON='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/></svg>';
function render(){
  document.documentElement.lang=lang;
  document.documentElement.setAttribute("data-theme",theme);
  document.querySelectorAll("[data-i]").forEach(function(el){el.textContent=T[lang][el.dataset.i]});
  document.getElementById("lang").textContent=lang==="en"?"Kinyarwanda":"English";
  var tb=document.getElementById("theme");
  tb.innerHTML=theme==="light"?SUN:MOON;
  tb.setAttribute("aria-label",theme==="light"?(lang==="en"?"Light mode (switch to dark)":"Umucyo (hindura ujye mu mwijima)"):(lang==="en"?"Dark mode (switch to light)":"Umwijima (hindura ujye mu mucyo)"));
  if(window.updatePay)updatePay();
  if(window.capUpdate)capUpdate();
  if(window.regRender)regRender();
}
document.getElementById("lang").onclick=function(){lang=lang==="en"?"rw":"en";try{localStorage.setItem("lang",lang)}catch(e){}render()};
document.getElementById("theme").onclick=function(){theme=theme==="light"?"dark":"light";try{localStorage.setItem("theme",theme)}catch(e){}render()};
// Payment form
var ACC="Saint Michael Technical High School";
var PAY={momo:{n:null,code:"XXXXXX"},bk:{n:"Bank of Kigali (BK)",acc:"0000-0000000-00"},bpr:{n:"BPR Bank",acc:"0000-0000000-00"},equity:{n:"Equity Bank",acc:"0000-0000000-00"}};
var sub=null;
function methodName(m){return m==="momo"?T[lang].momo:PAY[m].n}
function updatePay(){
  var m=document.getElementById("f_method").value,box=document.getElementById("paybox"),t=T[lang];
  if(!m){box.className="paybox";box.innerHTML=""}
  else{
    var p=PAY[m],h="<b>"+t.payD+" - "+methodName(m)+"</b><br>";
    h+=m==="momo"?t.code+": "+p.code+"<br>":t.accno+": "+p.acc+"<br>";
    h+=t.accname+": "+ACC;
    box.className="paybox show";box.innerHTML=h;
  }
  var r=document.getElementById("payresult");
  r.textContent=sub?t.thanks+", "+sub.name+". "+methodName(sub.m)+". "+t.instr:"";
}
document.getElementById("f_method").onchange=updatePay;
document.getElementById("payForm").onsubmit=function(e){
  e.preventDefault();
  sub={name:document.getElementById("f_name").value,m:document.getElementById("f_method").value};
  updatePay();
};
// Changing background videos
var bv=[].slice.call(document.querySelectorAll(".bgv video")),cur=-1,bvPlay=true,bvTimer;
function capUpdate(){var c=document.getElementById("vcap");c.textContent=cur>=0?T[lang][bv[cur].dataset.k]:""}
function showBv(i){
  bv.forEach(function(v,j){v.classList.toggle("on",j===i);if(j!==i)v.pause()});
  cur=i;var v=bv[i];v.currentTime=0;
  if(bvPlay){var p=v.play();if(p&&p.catch)p.catch(function(){})}
  capUpdate();clearTimeout(bvTimer);bvTimer=setTimeout(nextBv,8000);
}
function nextBv(){
  if(!bvPlay)return;
  for(var k=1;k<=bv.length;k++){var j=(cur+k+bv.length)%bv.length;if(bv[j].dataset.ok){showBv(j);return}}
}
bv.forEach(function(v){
  v.addEventListener("loadedmetadata",function(){v.dataset.ok="1";if(cur<0)showBv(bv.indexOf(v))});
  v.addEventListener("ended",nextBv);
});
document.getElementById("vpause").onclick=function(){
  bvPlay=!bvPlay;this.innerHTML=bvPlay?"&#10074;&#10074;":"&#9654;";
  if(cur>=0){if(bvPlay){bv[cur].play();bvTimer=setTimeout(nextBv,8000)}else{bv[cur].pause();clearTimeout(bvTimer)}}
};
// Hover menus (Programs, Fees, Contact)
(function(){
  var rows=document.querySelectorAll("#fees table tr"),li="";
  for(var i=1;i<rows.length;i++){var c=rows[i].cells;li+='<li><span data-i="'+c[0].dataset.i+'"></span><b>'+c[1].textContent+'</b></li>'}
  document.getElementById("mega-fees").innerHTML='<div class="mega-grid"><div class="fee-col"><h4 data-i="feesT"></h4><ul>'+li+'</ul></div><div class="fee-col"><h4 data-i="fmethod"></h4><div class="pills"><span data-i="momo"></span><span>Bank of Kigali (BK)</span><span>BPR Bank</span><span>Equity Bank</span></div><a class="mbtn" href="#register" data-i="apply"></a></div></div>';
  var cp=document.querySelector("#contact p");
  document.getElementById("mega-contact").innerHTML='<div class="mega-grid"><div class="fee-col"><h4 data-i="contact"></h4><p>'+(cp?cp.innerHTML:"")+'</p></div></div>';
  var items=[].slice.call(document.querySelectorAll(".has-mega"));
  items.forEach(function(it){
    it.firstElementChild.addEventListener("click",function(e){
      if(window.matchMedia("(hover:none)").matches&&!it.classList.contains("open")){
        e.preventDefault();items.forEach(function(x){x.classList.remove("open")});it.classList.add("open");
      }
    });
  });
  document.addEventListener("click",function(e){if(!e.target.closest(".nav-item"))items.forEach(function(x){x.classList.remove("open")})});
})();
// Online registration (sent by WhatsApp or email)
var SCHOOL_WA="2507XXXXXXXX",SCHOOL_EMAIL="info@yourschool.rw",lastReg=null;
function regText(r){
  var t=T[lang];
  return [t.regT+" - Saint Michael Technical High School",t.rName+": "+r.name,t.rDob+": "+r.dob,t.rDistrict+": "+r.district,t.rSchool+": "+(r.school||"-"),t.fprog+": "+t[r.prog],t.rParent+": "+r.parent,t.rPhone+": "+r.phone,t.rEmail+": "+(r.email||"-"),t.rMsg+": "+(r.msg||"-")].join("\n");
}
function regRender(){
  var o=document.getElementById("regOut");
  if(!lastReg){o.className="paybox";o.innerHTML="";return}
  var t=T[lang],x=regText(lastReg),safe=x.replace(/&/g,"&amp;").replace(/</g,"&lt;");
  o.className="paybox show";
  o.innerHTML="<b>"+t.rReady+"</b><pre class=\"regpre\">"+safe+"</pre>"+
    "<a class=\"btn\" target=\"_blank\" rel=\"noopener\" href=\"https://wa.me/"+SCHOOL_WA+"?text="+encodeURIComponent(x)+"\">"+t.rWA+"</a>"+
    "<a class=\"btn\" href=\"mailto:"+SCHOOL_EMAIL+"?subject="+encodeURIComponent(t.regT+" - "+lastReg.name)+"&amp;body="+encodeURIComponent(x)+"\">"+t.rMail+"</a>"+
    "<p>"+t.rNext+"</p>";
}
document.getElementById("regForm").onsubmit=function(e){
  e.preventDefault();
  var g=function(id){return document.getElementById(id).value.trim()};
  lastReg={name:g("r_name"),dob:g("r_dob"),district:g("r_district"),school:g("r_school"),prog:g("r_prog"),parent:g("r_parent"),phone:g("r_phone"),email:g("r_email"),msg:g("r_msg")};
  regRender();
  document.getElementById("regOut").scrollIntoView({behavior:"smooth",block:"nearest"});
};
render();

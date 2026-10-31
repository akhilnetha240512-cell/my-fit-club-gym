(() => {
 const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
 menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰";});
 nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.textContent="☰";}));
 let lang="en";const langBtn=document.getElementById("languageToggle");
 langBtn?.addEventListener("click",()=>{lang=lang==="en"?"te":"en";document.documentElement.lang=lang;document.querySelectorAll("[data-en][data-te]").forEach(el=>el.textContent=el.dataset[lang]);langBtn.textContent=lang==="en"?"తెలుగు":"English";});
 let scale=1;const apply=()=>document.documentElement.style.fontSize=(16*scale)+"px";
 document.getElementById("increaseText")?.addEventListener("click",()=>{scale=Math.min(1.25,+(scale+.05).toFixed(2));apply();});
 document.getElementById("decreaseText")?.addEventListener("click",()=>{scale=Math.max(.85,+(scale-.05).toFixed(2));apply();});
 document.getElementById("resetText")?.addEventListener("click",()=>{scale=1;apply();});
 const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
})();
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const trainerNav=document.getElementById('trainerNav');
trainerNav?.addEventListener('click',e=>{e.preventDefault();if(trainerPanel){trainerPanel.hidden=false;trainerToggle?.setAttribute('aria-expanded','true');if(trainerToggle)trainerToggle.innerHTML='HIDE TRAINER INFORMATION <span aria-hidden="true">−</span>';document.getElementById('about')?.scrollIntoView({behavior:'smooth',block:'start'});}});
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();

// Reliable page-wide text scaling, including headings and buttons.
let scale=1;
function applyScale(){document.body.style.zoom=String(scale);}
document.getElementById('decreaseText')?.addEventListener('click',()=>{scale=Math.max(.8,Math.round((scale-.1)*10)/10);applyScale()});
document.getElementById('resetText')?.addEventListener('click',()=>{scale=1;applyScale()});
document.getElementById('increaseText')?.addEventListener('click',()=>{scale=Math.min(1.3,Math.round((scale+.1)*10)/10);applyScale()});

// Expand/collapse trainer details; hidden by default.
const trainerToggle=document.getElementById('trainerToggle');
const trainerPanel=document.getElementById('trainer');
trainerToggle?.addEventListener('click',()=>{
  const opening=trainerPanel.hidden;
  trainerPanel.hidden=!opening;
  trainerToggle.setAttribute('aria-expanded',String(opening));
  trainerToggle.innerHTML=opening?'HIDE TRAINER INFORMATION <span aria-hidden="true">−</span>':'ABOUT THE TRAINER <span aria-hidden="true">＋</span>';
  if(opening) trainerPanel.scrollIntoView({behavior:'smooth',block:'start'});
});

// English/Telugu labels for navigation, section titles, equipment and membership names.
const translations={
 'About':'మా గురించి','About Trainer':'ట్రైనర్ గురించి','Membership':'సభ్యత్వం','Gallery':'గ్యాలరీ','Reviews':'సమీక్షలు','Contact':'సంప్రదించండి',
 'KORUTLA\'S FITNESS DESTINATION':'కోరుట్లలో మీ ఫిట్‌నెస్ కేంద్రం','GET UP.':'లేవండి.','GET STRONGER.':'మరింత బలంగా మారండి.','Train with focus. Build strength. Make every session count.':'ఏకాగ్రతతో శిక్షణ పొందండి. బలాన్ని పెంచుకోండి. ప్రతి వ్యాయామాన్ని సద్వినియోగం చేసుకోండి.',
 'VIEW MEMBERSHIP':'సభ్యత్వ వివరాలు చూడండి','CHAT ON WHATSAPP ↗':'వాట్సాప్‌లో సంప్రదించండి ↗','STRENGTH TRAINING':'శక్తి శిక్షణ','CARDIO':'కార్డియో','WEIGHT TRAINING':'బరువులతో వ్యాయామం','PERSONAL TRAINING':'వ్యక్తిగత శిక్షణ','CROSS-TRAINING':'క్రాస్ ట్రైనింగ్','FITNESS GUIDANCE':'ఫిట్‌నెస్ మార్గదర్శకం',
 '01 / ABOUT THE CLUB':'01 / జిమ్ గురించి','BUILT FOR':'మీ అభివృద్ధి కోసం','YOUR NEXT LEVEL.':'మీ తదుపరి స్థాయి.','SHOW UP. PUT IN THE WORK.':'రండి. కష్టపడి సాధన చేయండి.','Strength & weight training':'శక్తి మరియు బరువుల శిక్షణ','Cardio and cross-training':'కార్డియో మరియు క్రాస్ ట్రైనింగ్','Personal training support':'వ్యక్తిగత శిక్షణ సహాయం','Diet and fitness guidance':'ఆహారం మరియు ఫిట్‌నెస్ మార్గదర్శకం','ABOUT THE TRAINER':'ట్రైనర్ గురించి','HIDE TRAINER INFORMATION':'ట్రైనర్ వివరాలను దాచండి',
 '02 / TRAINING':'02 / శిక్షణ','FIND YOUR':'మీకు సరిపోయే','TRAINING STYLE.':'శిక్షణను ఎంచుకోండి.','STRENGTH TRAINING':'శక్తి శిక్షణ','CARDIO FITNESS':'కార్డియో ఫిట్‌నెస్','PERSONAL TRAINING':'వ్యక్తిగత శిక్షణ',
 '03 / EQUIPMENT GALLERY':'03 / పరికరాల గ్యాలరీ','MORE GEAR.':'మరిన్ని పరికరాలు.','MORE WAYS TO TRAIN.':'వ్యాయామానికి మరిన్ని మార్గాలు.','FREE WEIGHTS':'ఫ్రీ వెయిట్స్','DUMBBELLS':'డంబెల్స్','BARBELLS & PLATES':'బార్‌బెల్స్ మరియు ప్లేట్లు','WEIGHT BENCH':'వెయిట్ బెంచ్','CABLE MACHINE':'కేబుల్ మెషీన్','TREADMILL':'ట్రెడ్‌మిల్','EXERCISE CYCLE':'వ్యాయామ సైకిల్','STRENGTH':'శక్తి శిక్షణ','LEG PRESS / MACHINES':'లెగ్ ప్రెస్ / మెషీన్లు','FUNCTIONAL':'ఫంక్షనల్ శిక్షణ','RESISTANCE TRAINING':'రెసిస్టెన్స్ శిక్షణ','KETTLEBELLS':'కెటిల్‌బెల్స్','FUNCTIONAL TRAINING':'ఫంక్షనల్ ట్రైనింగ్','STRENGTH MACHINES':'శక్తి వ్యాయామ యంత్రాలు','FITNESS':'ఫిట్‌నెస్','FLOOR & CORE TRAINING':'ఫ్లోర్ మరియు కోర్ వ్యాయామాలు',
 '04 / MEMBERSHIP':'04 / సభ్యత్వం','MAKE THE':'నిర్ణయం తీసుకోండి','COMMITMENT.':'నిబద్ధతతో కొనసాగండి.','MONTHLY':'నెలవారీ','QUARTERLY':'మూడు నెలల','YEARLY':'వార్షిక','POPULAR CHOICE':'ప్రజాదరణ పొందిన ఎంపిక','ENQUIRE ↗':'వివరాలు అడగండి ↗',
 '05 / GOOGLE REVIEWS':'05 / గూగుల్ సమీక్షలు','REAL WORDS.':'నిజమైన అభిప్రాయాలు.','LOCAL COMMUNITY.':'మన స్థానిక సమాజం.','READ GOOGLE REVIEWS ↗':'గూగుల్ సమీక్షలు చదవండి ↗','WRITE A REVIEW ↗':'సమీక్ష రాయండి ↗',
 'READY TO':'సిద్ధంగా ఉన్నారా','GET STARTED?':'ప్రారంభించడానికి?','CALL / WHATSAPP':'కాల్ / వాట్సాప్','ADDRESS':'చిరునామా','INSTAGRAM':'ఇన్‌స్టాగ్రామ్','GOOGLE MAPS DIRECTIONS ↗':'గూగుల్ మ్యాప్స్ దారి ↗'
};
let telugu=false;
const languageToggle=document.getElementById('languageToggle');
function collectTranslatable(){
 const selectors=' .nav a,.eyebrow,h1,h2,h3,.hero-sub,.hero-buttons a,.ticker,.about-copy li,.training-grid h3,.equipment-grid small,.equipment-grid h3,.plans small,.plans h3,.plans label,.plans p,.plans a,.google-rating a,.contact-grid small,.contact-grid p,.contact-grid .button,.trainer-toggle';
 return [...document.querySelectorAll(selectors)].filter(el=>el.children.length===0 || el.classList.contains('trainer-toggle'));
}
const nodes=collectTranslatable();
const originals=new Map(nodes.map(el=>[el,el.textContent.trim()]));
const headingHtml={
 'GET UP.<br><em>GET STRONGER.</em>':'లేవండి.<br><em>మరింత బలంగా మారండి.</em>',
 'BUILT FOR<br><em>YOUR NEXT LEVEL.</em>':'మీ అభివృద్ధి కోసం<br><em>మీ తదుపరి స్థాయి.</em>',
 'FIND YOUR<br><em>TRAINING STYLE.</em>':'మీకు సరిపోయే<br><em>శిక్షణను ఎంచుకోండి.</em>',
 'MORE GEAR.<br><em>MORE WAYS TO TRAIN.</em>':'మరిన్ని పరికరాలు.<br><em>వ్యాయామానికి మరిన్ని మార్గాలు.</em>',
 'MAKE THE<br><em>COMMITMENT.</em>':'నిర్ణయం తీసుకోండి<br><em>నిబద్ధతతో కొనసాగండి.</em>',
 'REAL WORDS.<br><em>LOCAL COMMUNITY.</em>':'నిజమైన అభిప్రాయాలు.<br><em>మన స్థానిక సమాజం.</em>',
 'READY TO<br><em>GET STARTED?</em>':'సిద్ధంగా ఉన్నారా<br><em>ప్రారంభించడానికి?</em>'
};
const headingOriginals=[...document.querySelectorAll('h1,h2')].map(el=>[el,el.innerHTML]);
function setLanguage(){
 nodes.forEach(el=>{const en=originals.get(el);el.textContent=telugu?(translations[en]||en):en;});
 headingOriginals.forEach(([el,html])=>{el.innerHTML=telugu?(headingHtml[html]||html):html;});
 if(languageToggle) languageToggle.textContent=telugu?'English':'తెలుగు';
 document.documentElement.lang=telugu?'te':'en';
}
languageToggle?.addEventListener('click',()=>{telugu=!telugu;setLanguage()});

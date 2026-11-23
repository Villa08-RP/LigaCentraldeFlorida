import * as fb from "./fb.js";

const LOGO = "logo.jpg";
const VIEWS = ['schedule','gameday','table','payouts','graphic','history','setup','refs'];
const L = {
en:{schedule:'Schedule',gameday:'Game day',payouts:'Ref pay',graphic:'Post graphic',history:'History',setup:'Setup',week:'Week',date:'Date',time:'Time',park:'Park',field:'Field',home:'Home',away:'Away',center:'Center',ar1:'AR 1',ar2:'AR 2',addGame:'+ Add game',addSlot:'+ Add time slot (3 games)',del:'Delete',sure:'Tap again',kickoff:'KICKOFF',
st_sched:'Scheduled',st_live:'Playing',st_final:'Final',st_cancel:'Cancelled',paid:'Paid',notPaid:'Not paid',feesPaid:'Teams paid',gamesFinal:'Games final',collected:'Collected',player:'Player name',yellow:'Yellow',red:'Red',
refName:'Referee',centers:'Center',lines:'Line',total:'Total',owed:'Total to pay refs',paidOut:'Paid out',left:'Left to pay',paidQ:'Paid?',noRefs:'No referees assigned yet. Add them on the Schedule page.',
dl:'Download',share:'Share',posted:'Posted on social media',markPosted:'Mark as posted',graphicHint:'Share sends the image straight to Instagram, Facebook or WhatsApp. You can also press and hold the image to save it.',
newWeek:'+ Create next week',open:'Open',current:'Viewing',games:'games',results:'Results & cards',noCards:'No cards',
teamFee:'Ref fee per team ($)',feeUnset:'not set yet',centerPay:'Center ref pay ($)',sidePay:'Line ref pay ($)',teamsL:'Teams (one per line)',refsL:'Referees (one per line)',parksL:'Parks (one per line)',
refLink:'Referee link',refLinkHint:'Send this to the referees. No login needed — they only see games, fields, times and assignments.',copy:'Copy link',copied:'Copied!',preview:'Preview',wa:'Send by WhatsApp',waMsg:'Referee assignments this Sunday:',
findMe:'Find your name',all:'Everyone',refTitle:'Referee assignments',noPublic:'The schedule isn\'t ready yet. Check back later.',
w_field:'Two games on {f} at {p} at {t}',w_ref:'{r} is on 2 games at {t}',w_team:'{x} is scheduled twice this week',w_same:'{r} is listed twice in the same game',warnTitle:'Check these:',
remind:'Next Sunday ({d}) isn\'t posted yet.',remindNew:'Create it',remindOpen:'Open it',
saving:'Saving…',saved:'Saved ✓',offline:'Offline — will sync',err:'Not saved',
cash:'Cash check',cashTxt:'Fees collected minus ref pay',refSummary:'Pay per referee',noGames:'No games yet.',copyFrom:'The new week copies this week\'s times, fields and parks with blank teams and referees.',unpaidTeams:'Still owe the ref fee',
login:'Staff login',email:'Email',password:'Password',signIn:'Sign in',signOut:'Sign out',loginErr:'Wrong email or password.',noAccess:'This account doesn\'t have staff access. Ask the admin to add your email.',signedAs:'Signed in as',loading:'Loading…',refsLink:'Referee? Open the assignments',table:'Standings',team:'Team',pj:'P',w:'W',d:'D',l:'L',gf:'GF',ga:'GA',gd:'GD',pts:'Pts',edit:'Edit',editTeam:'Edit {x}',
totalsHint:'Change the numbers so they match the real table (games played before the app, or corrections). Points are recalculated from wins and draws unless you change Pts.',saveChanges:'Save changes',penalty:'Points penalty',penPts:'Points (use - to take away, e.g. -3)',reason:'Reason',applyPen:'Apply penalty',pens:'Penalties',noPens:'No penalties',withdraw:'Mark as withdrawn',withdrawn:'Withdrew',reinstate:'Bring back to the table',
confirmTitle:'Please confirm',confirm:'Yes, confirm',cancel:'Cancel',close:'Close',cTake:'Take {n} points away from {x}?',cGive:'Give {n} points to {x}?',cDelPen:'Remove this penalty from {x}? ({n} pts)',cOut:'Mark {x} as withdrawn? The team moves to the bottom of the table.',cIn:'Bring {x} back into the table?',cEdit:'Change these numbers for {x}?',noChange:'Nothing changed.',
restart:'Restart the league',restartTxt1:'This starts a new season from zero. The table, penalties and manual changes go back to zero and only games from the start date on will count. Teams, referees, parks, ref fee and settings stay the same. Past games stay saved in History under previous seasons.',restartStart:'New season starts on',cont:'Continue',restartTxt2:'Last check. Type {w} below to restart the league.',restartWord:'RESTART',restartBtn:'Restart now',season:'Season',since:'since',prevSeasons:'Previous seasons',curSeason:'This season',tableHint:'Counts games marked Final with a score. Win = 3 pts, draw = 1 pt.',gfxSub:'MATCH SCHEDULE'},
es:{schedule:'Programación',gameday:'Día de juego',payouts:'Pago árbitros',graphic:'Imagen para redes',history:'Historial',setup:'Ajustes',week:'Semana',date:'Fecha',time:'Hora',park:'Parque',field:'Cancha',home:'Local',away:'Visitante',center:'Central',ar1:'Línea 1',ar2:'Línea 2',addGame:'+ Agregar partido',addSlot:'+ Agregar horario (3 partidos)',del:'Borrar',sure:'Toca otra vez',kickoff:'INICIO',
st_sched:'Programado',st_live:'En juego',st_final:'Final',st_cancel:'Cancelado',paid:'Pagó',notPaid:'No ha pagado',feesPaid:'Equipos pagaron',gamesFinal:'Partidos finalizados',collected:'Cobrado',player:'Nombre del jugador',yellow:'Amarilla',red:'Roja',
refName:'Árbitro',centers:'Central',lines:'Línea',total:'Total',owed:'Total a pagar árbitros',paidOut:'Pagado',left:'Falta pagar',paidQ:'¿Pagado?',noRefs:'Todavía no hay árbitros asignados. Agrégalos en Programación.',
dl:'Descargar',share:'Compartir',posted:'Publicado en redes',markPosted:'Marcar como publicado',graphicHint:'Compartir manda la imagen directo a Instagram, Facebook o WhatsApp. También puedes mantener presionada la imagen para guardarla.',
newWeek:'+ Crear próxima semana',open:'Abrir',current:'Viendo',games:'partidos',results:'Resultados y tarjetas',noCards:'Sin tarjetas',
teamFee:'Cuota de árbitro por equipo ($)',feeUnset:'sin definir',centerPay:'Pago árbitro central ($)',sidePay:'Pago árbitro de línea ($)',teamsL:'Equipos (uno por línea)',refsL:'Árbitros (uno por línea)',parksL:'Parques (uno por línea)',
refLink:'Enlace para árbitros',refLinkHint:'Envíalo a los árbitros. No necesitan cuenta — solo ven partidos, canchas, horas y asignaciones.',copy:'Copiar enlace',copied:'¡Copiado!',preview:'Ver',wa:'Enviar por WhatsApp',waMsg:'Asignación de árbitros de este domingo:',
findMe:'Busca tu nombre',all:'Todos',refTitle:'Asignación de árbitros',noPublic:'La programación todavía no está lista. Vuelve más tarde.',
w_field:'Dos partidos en {f} de {p} a las {t}',w_ref:'{r} tiene 2 partidos a las {t}',w_team:'{x} juega dos veces esta semana',w_same:'{r} aparece dos veces en el mismo partido',warnTitle:'Revisa esto:',
remind:'El próximo domingo ({d}) todavía no está publicado.',remindNew:'Crearlo',remindOpen:'Abrirlo',
saving:'Guardando…',saved:'Guardado ✓',offline:'Sin conexión — se sincroniza luego',err:'No se guardó',
cash:'Cuadre de caja',cashTxt:'Cuotas cobradas menos pago a árbitros',refSummary:'Pago por árbitro',noGames:'Todavía no hay partidos.',copyFrom:'La nueva semana copia las horas, canchas y parques de esta semana, con equipos y árbitros en blanco.',unpaidTeams:'Deben la cuota de árbitro',
login:'Acceso staff',email:'Correo',password:'Contraseña',signIn:'Entrar',signOut:'Cerrar sesión',loginErr:'Correo o contraseña incorrectos.',noAccess:'Esta cuenta no tiene acceso de staff. Pide al administrador que agregue tu correo.',signedAs:'Sesión de',loading:'Cargando…',refsLink:'¿Eres árbitro? Ver asignaciones',table:'Tabla',team:'Equipo',pj:'PJ',w:'G',d:'E',l:'P',gf:'GF',ga:'GC',gd:'DG',pts:'Pts',edit:'Editar',editTeam:'Editar {x}',
totalsHint:'Cambia los números para que coincidan con la tabla real (partidos jugados antes de la app, o correcciones). Los puntos se calculan con victorias y empates, a menos que cambies Pts.',saveChanges:'Guardar cambios',penalty:'Sanción de puntos',penPts:'Puntos (usa - para quitar, ej. -3)',reason:'Motivo',applyPen:'Aplicar sanción',pens:'Sanciones',noPens:'Sin sanciones',withdraw:'Marcar como retirado',withdrawn:'Retirado',reinstate:'Regresar a la tabla',
confirmTitle:'Confirma por favor',confirm:'Sí, confirmar',cancel:'Cancelar',close:'Cerrar',cTake:'¿Quitar {n} puntos a {x}?',cGive:'¿Dar {n} puntos a {x}?',cDelPen:'¿Quitar esta sanción a {x}? ({n} pts)',cOut:'¿Marcar a {x} como retirado? El equipo pasa al final de la tabla.',cIn:'¿Regresar a {x} a la tabla?',cEdit:'¿Cambiar estos números de {x}?',noChange:'No hay cambios.',
restart:'Reiniciar la liga',restartTxt1:'Esto empieza una temporada nueva desde cero. La tabla, las sanciones y los cambios manuales vuelven a cero y solo cuentan los partidos desde la fecha de inicio. Equipos, árbitros, parques, cuota y ajustes se quedan igual. Los partidos pasados quedan guardados en Historial como temporadas anteriores.',restartStart:'La nueva temporada empieza el',cont:'Continuar',restartTxt2:'Última confirmación. Escribe {w} abajo para reiniciar la liga.',restartWord:'REINICIAR',restartBtn:'Reiniciar ahora',season:'Temporada',since:'desde',prevSeasons:'Temporadas anteriores',curSeason:'Esta temporada',tableHint:'Cuenta los partidos marcados como Final con marcador. Victoria = 3 pts, empate = 1 pt.',gfxSub:'PROGRAMACIÓN DE PARTIDOS'}};

let lang = 'es'; try { lang = localStorage.getItem('lcf-lang') || 'es'; } catch (e) {}
const t = (k, v) => { let s = (L[lang][k] ?? L.en[k] ?? k); if (v) for (const x in v) s = s.split('{' + x + '}').join(v[x]); return s; };
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => Math.random().toString(36).slice(2, 9);
const APP_URL = location.origin + location.pathname.replace(/[^/]*$/, '');
const REF_URL = APP_URL + 'arbitros.html';

// ---------- state ----------
let user = null, authReady = false, loginErr = '';
let S = { settings: { fee: null, center: 70, side: 45 }, teams: [], refs: [], parks: [], weeks: [] };
let mainLoaded = false, weeksLoaded = false, accessDenied = false;
let PUB = null, pubErr = false;
let viewWeekId = null, refFilter = '';
let unsub = [];

const newest = ws => ws.slice().sort((a, b) => b.date.localeCompare(a.date))[0];
const week = () => S.weeks.find(w => w.id === viewWeekId) || newest(S.weeks);
const view = () => { if (window.REF_ONLY) return 'refs'; const h = location.hash.slice(1); return VIEWS.includes(h) ? h : 'schedule'; };

// ---------- helpers ----------
function fmtTime(hm){if(!hm)return '';let[h,m]=hm.split(':').map(Number);const ap=h>=12?'PM':'AM';h=h%12||12;return h+':'+String(m).padStart(2,'0')+' '+ap}
function pDate(s){const[y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)}
function iso(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function fmtDate(s,long){if(!s)return'';const o=long==='y'?{weekday:'short',year:'numeric',month:'short',day:'numeric'}:long==='g'?{weekday:'long',month:'long',day:'numeric'}:long?{weekday:'long',year:'numeric',month:'long',day:'numeric'}:{weekday:'short',month:'short',day:'numeric'};return pDate(s).toLocaleDateString(lang==='es'?'es-MX':'en-US',o)}
const money=n=>'$'+(Math.round(n*100)/100).toLocaleString('en-US');
function groups(w){const m={};(w.games||[]).forEach(g=>{(m[g.time]=m[g.time]||[]).push(g)});return Object.keys(m).sort().map(k=>({time:k,games:m[k].sort((a,b)=>(parseInt(a.field)||0)-(parseInt(b.field)||0))}))}
function payouts(w){const m={};w.games.filter(g=>g.status!=='cancel').forEach(g=>{[['c',1],['a1',0],['a2',0]].forEach(([k,c])=>{const n=(g[k]||'').trim();if(!n)return;m[n]=m[n]||{c:0,s:0};c?m[n].c++:m[n].s++})});return m}
function payTotal(w){const p=payouts(w);let tot=0,paid=0;for(const n in p){const a=p[n].c*S.settings.center+p[n].s*S.settings.side;tot+=a;if(w.refPaid&&w.refPaid[n])paid+=a}return{tot,paid}}
function feeStats(w){const gs=w.games.filter(g=>g.status!=='cancel'&&g.home&&g.away);const teams=gs.length*2;const paid=gs.reduce((s,g)=>s+(g.paidH?1:0)+(g.paidA?1:0),0);return{teams,paid,amt:S.settings.fee?paid*S.settings.fee:null}}
function warnings(w){const out=[];const byT={};w.games.forEach(g=>{(byT[g.time]=byT[g.time]||[]).push(g)});
 for(const tm in byT){const fs={},rs={};byT[tm].forEach(g=>{const fk=(g.park+'|'+g.field).toLowerCase();if(g.field){if(fs[fk])out.push(t('w_field',{f:t('field')+' '+g.field,p:g.park,t:fmtTime(tm)}));fs[fk]=1}
  const inG={};['c','a1','a2'].forEach(k=>{const n=(g[k]||'').trim().toLowerCase();if(!n)return;if(inG[n])out.push(t('w_same',{r:g[k]}));inG[n]=1;if(rs[n]&&rs[n]!==g.id)out.push(t('w_ref',{r:g[k],t:fmtTime(tm)}));rs[n]=g.id})})}
 const tc={};w.games.forEach(g=>[g.home,g.away].forEach(x=>{const n=(x||'').trim().toLowerCase();if(!n)return;if(tc[n])out.push(t('w_team',{x}));tc[n]=1}));return [...new Set(out)]}

// ---------- saving ----------
// Every edit becomes a small "patch" (only what changed). Patches wait 0.7s, then go to Firebase.
const pending = {}; let wtimer = null, saveState = '', saveErr = '';
const isObj = o => o && typeof o === 'object' && !Array.isArray(o);
function merge(a, b){ for (const k in b){ if (b[k] === fb.DEL) delete a[k]; else if (isObj(b[k])) a[k] = merge(isObj(a[k]) ? a[k] : {}, b[k]); else a[k] = b[k]; } return a; }
// Pending patches merged for display: keep DEL markers so they also apply to incoming data
function mergeKeep(a, b){ for (const k in b){ if (isObj(b[k])) a[k] = mergeKeep(isObj(a[k]) ? a[k] : {}, b[k]); else a[k] = b[k]; } return a; }
function setSave(s){saveState=s;const el=document.getElementById('save');if(!el)return;
 const st=s==='busy'&&!navigator.onLine?'off':s;
 el.className='save '+(st==='busy'||st==='off'?'busy':st==='err'?'err':st?'ok':'');
 el.textContent=st==='busy'?t('saving'):st==='off'?t('offline'):st==='err'?t('err'):st==='ok'?t('saved'):''}
function patch(key, obj){ pending[key] = mergeKeep(pending[key] || {}, obj); setSave('busy'); clearTimeout(wtimer); wtimer = setTimeout(flush, 700); }
const PUBK = ['time','park','field','home','away','c','a1','a2','status'];
function patchGame(w, g, ch){ patch('weeks/'+w.id, { games: { [g.id]: ch } });
 const p = {}; for (const k in ch) if (PUBK.includes(k)) p[k] = ch[k];
 if (Object.keys(p).length) patch('public/'+w.id, { num: w.num, date: w.date, games: { [g.id]: p } }); }
const pubGame = g => Object.fromEntries(PUBK.map(k => [k, g[k] ?? '']));
function patchWeekFields(w, ch){ patch('weeks/'+w.id, ch); const p = {}; if ('num' in ch) p.num = ch.num; if ('date' in ch) p.date = ch.date; if (Object.keys(p).length) patch('public/'+w.id, p); }
const saveM = () => patch('league/main', { settings: S.settings, teams: S.teams, refs: S.refs, parks: S.parks });
async function flush(){ clearTimeout(wtimer); const keys = Object.keys(pending); if (!keys.length) return;
 const jobs = keys.map(k => { const obj = pending[k]; delete pending[k]; const [c, id] = k.split('/'); return fb.patch(c, id, obj); });
 try { await Promise.all(jobs); if (!Object.keys(pending).length) { saveErr = ''; setSave('ok'); } }
 catch (e) { console.error(e); saveErr = (e && (e.code || e.message)) || 'error'; setSave('err'); if (e && e.code === 'permission-denied') accessDenied = true; render(); } }
window.addEventListener('online', () => setSave(saveState));
window.addEventListener('offline', () => setSave(saveState));
// Save right away if the app is closed or put in the background
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
window.addEventListener('pagehide', () => flush());

// Don't redraw while someone is typing; redraw when they leave the field.
let pendingRender = false;
const typing = () => { const a = document.activeElement; return a && /INPUT|TEXTAREA|SELECT/.test(a.tagName) && a.closest('main, .modal'); };
function softRender(){ if (typing()) { pendingRender = true; syncInputs(); } else render(); }
// While someone types, still show other staff's changes in the other boxes
function syncInputs(){ const w = week(); if (!w) return; document.querySelectorAll('main input[data-act=g]').forEach(el => { if (el === document.activeElement) return; const g = w.games.find(x => x.id === el.dataset.id); const v = g ? (g[el.dataset.k] ?? '') : ''; if (g && el.value !== v) el.value = v; }); }
document.addEventListener('focusout', () => setTimeout(() => { if (pendingRender && !typing()) { pendingRender = false; render(); } }, 60));

// ---------- reading data from Firebase ----------
const toMap = gs => Array.isArray(gs) ? Object.fromEntries(gs.map(g => [g.id, g])) : (gs || {});
const toArr = (m) => Object.entries(m || {}).map(([id, g]) => ({ ...g, id, cards: g.cards || [] }));
function mainFrom(d){ const m = merge(JSON.parse(JSON.stringify(d || {})), pending['league/main'] || {}); S.settings = m.settings || { fee: null, center: 70, side: 45 }; S.teams = m.teams || []; S.refs = m.refs || []; S.table = m.table || {}; S.parks = m.parks || []; }
function weekFrom(raw){ const d = { ...raw, games: toMap(raw.games) }; const p = pending['weeks/' + raw.id]; const m = p ? merge(JSON.parse(JSON.stringify(d)), p) : d;
 return { id: raw.id, num: m.num, date: m.date, posted: !!m.posted, refPaid: m.refPaid || {}, games: toArr(m.games) }; }
const migrated = new Set();
function migrate(raw){ // old format (games as a list) -> games by id
 if (!Array.isArray(raw.games) || migrated.has(raw.id)) return; migrated.add(raw.id);
 const w = weekFrom(raw); const { id, ...data } = w; data.games = Object.fromEntries(w.games.map(g => { const { id: gid, ...rest } = g; return [gid, rest]; }));
 fb.replace('weeks', id, data).catch(console.error);
 fb.replace('public', id, { num: w.num, date: w.date, games: Object.fromEntries(w.games.map(g => [g.id, pubGame(g)])) }).catch(console.error); }

// ---------- seed (first login ever, only if the database is really empty) ----------
function seedData(){
 const g=[["09:00","8","Monarcas FC","La Gartos"],["09:00","9","Jalisco","Winter Haven"],["09:00","10","Los Juniors","Teno Jr"],["11:00","8","DP Oaxaca","San Juan"],["11:00","9","Huatulco","Franco Cana"],["11:00","10","La Union FC","Dragones FC"],["13:00","8","La Mesilla FC","Pachuca"],["13:00","9","Haitian Utd","Zapata"],["13:00","10","Wahneta","Rebano Sagrado"]];
 const games=g.map(([time,field,home,away])=>newGame({time,field,home,away,park:'Simmers Young Park'}));
 const teams=[...new Set(g.flatMap(x=>[x[2],x[3]]))].sort((a,b)=>a.localeCompare(b));
 return { main:{settings:{fee:null,center:70,side:45},teams,refs:[],parks:['Simmers Young Park','Wahneta Fields']}, week:{id:'w15',num:15,date:'2026-11-22',posted:true,refPaid:{},games} };
}
async function seedIfEmpty(){ try { if (!(await fb.isEmptyOnServer())) return; } catch (e) { return; }
 const s = seedData(); const w = s.week;
 await fb.replace('league', 'main', s.main);
 await fb.replace('weeks', w.id, { num: w.num, date: w.date, posted: w.posted, refPaid: {}, games: Object.fromEntries(w.games.map(g => { const { id, ...r } = g; return [id, r]; })) });
 await fb.replace('public', w.id, { num: w.num, date: w.date, games: Object.fromEntries(w.games.map(g => [g.id, pubGame(g)])) }); }

// ---------- auth + live data ----------
const INITIAL_REFS = ['Antonio','Ruso','Arturo','Chago','Bruno','Armando','Wilmer','Sobrino','Albaro','Charly','Corsel','Davide','Ramon','Alex'];
let mainSeen = false, weeksSeen = false;
function startStaff(){
 const onErr = e => { console.error(e); if (e && e.code === 'permission-denied') { accessDenied = true; render(); } };
 unsub.push(fb.watchMain(d => { mainFrom(d); mainLoaded = !!d;
  if (d && !d.refsAdded1) { INITIAL_REFS.forEach(n => addList('refs', n)); patch('league/main', { refs: S.refs, refsAdded1: true }); }
  softRender(); }, onErr));
 unsub.push(fb.watchWeeks(ws => { ws.forEach(migrate); S.weeks = ws.map(weekFrom);
  weeksLoaded = true; if (!viewWeekId || !S.weeks.some(w => w.id === viewWeekId)) viewWeekId = S.weeks.length ? newest(S.weeks).id : null; softRender(); }, onErr));
 seedIfEmpty().catch(onErr);
}
function startPublic(){ if (unsub.length) return; unsub.push(fb.watchPublic(ws => { PUB = ws.map(w => ({ id: w.id, num: w.num, date: w.date, games: toArr(toMap(w.games)) })); softRender(); }, () => { pubErr = true; render(); })); }
function stopAll(){ unsub.forEach(u => { try { u(); } catch (e) {} }); unsub = []; }

fb.onAuth(u => { stopAll(); user = u; authReady = true; accessDenied = false; mainLoaded = weeksLoaded = false; S.weeks = []; viewWeekId = null; PUB = null;
 if (u) startStaff(); else if (view() === 'refs') startPublic(); render(); });


// ---------- league table ----------
const tkey=s=>(s||'').trim().toLowerCase();
function inSeason(w){const st=S.settings.seasonStart;return !st||w.date>=st}
function standings(){const T=S.table||{};const adj=T.adj||{},pens=T.pens||{},out=T.out||{};const m={};
 const get=n=>{const k=tkey(n);if(!k)return null;if(!m[k]){const canon=S.teams.find(x=>tkey(x)===k)||String(n).trim();m[k]={name:canon,k,pj:0,w:0,d:0,l:0,gf:0,ga:0,pen:0}}return m[k]};
 S.teams.forEach(get);
 S.weeks.filter(inSeason).forEach(w=>w.games.forEach(g=>{if(g.status!=='final')return;const hs=parseInt(g.hs),as=parseInt(g.as);if(isNaN(hs)||isNaN(as))return;const H=get(g.home),A=get(g.away);if(!H||!A)return;
  H.pj++;A.pj++;H.gf+=hs;H.ga+=as;A.gf+=as;A.ga+=hs;if(hs>as){H.w++;A.l++}else if(hs<as){A.w++;H.l++}else{H.d++;A.d++}}));
 Object.values(pens).forEach(p=>{const tm=p&&get(p.team);if(tm)tm.pen+=Number(p.pts)||0});
 const rows=Object.values(m).map(x=>{const a=adj[x.k]||{};const r={...x,calc:{pj:x.pj,w:x.w,d:x.d,l:x.l,gf:x.gf,ga:x.ga}};
  ['pj','w','d','l','gf','ga'].forEach(f=>r[f]=x[f]+(Number(a[f])||0));r.ptsAdj=Number(a.pts)||0;r.pts=3*r.w+r.d+r.pen+r.ptsAdj;r.gd=r.gf-r.ga;r.out=!!out[x.k];return r});
 rows.sort((a,b)=>(a.out-b.out)||(b.pts-a.pts)||(b.gd-a.gd)||(b.gf-a.gf)||a.name.localeCompare(b.name));return rows}
const F6=['pj','w','d','l','gf','ga'];
function vTable(){const rows=standings();let pos=0;
 let h='<h2>'+t('table')+(S.settings.seasonStart?' <span class="muted" style="font-weight:600">· '+t('season')+' '+t('since')+' '+esc(fmtDate(S.settings.seasonStart))+'</span>':'')+'</h2><p class="muted">'+t('tableHint')+'</p>';
 h+='<div class="card tw"><table class="tbl"><tr><th>#</th><th class="tn">'+t('team')+'</th><th>'+t('pts')+'</th>'+F6.map(f=>'<th>'+t(f)+'</th>').join('')+'<th>'+t('gd')+'</th><th></th></tr>'
 +rows.map(r=>{if(!r.out)pos++;return '<tr class="'+(r.out?'outr':'')+'"><td>'+(r.out?'—':pos)+'</td><td class="tn"><b>'+esc(r.name)+'</b>'+(r.out?' <span class="pk">'+t('withdrawn')+'</span>':'')+(r.pen?' <span class="pk" style="background:#5a1f1a">'+(r.pen>0?'+':'')+r.pen+'</span>':'')+'</td><td><b style="color:var(--or);font-size:15px">'+r.pts+'</b></td>'+F6.map(f=>'<td>'+r[f]+'</td>').join('')+'<td>'+(r.gd>0?'+':'')+r.gd+'</td><td><button class="btn sm" data-act="editteam" data-k="'+esc(r.k)+'" title="'+t('edit')+'">✎</button></td></tr>'}).join('')+'</table></div>';
 h+='<div class="card mt" style="border-color:#7a2a22"><button class="btn warn" data-act="restart">⟲ '+t('restart')+'</button><div class="muted mt">'+t('restartTxt1')+'</div></div>';
 return h}
// ---------- dialogs ----------
let dlg=null,editK=null,editVals={};
function nextSunday(){const d=new Date();d.setDate(d.getDate()+((7-d.getDay())%7||7));return iso(d)}
function modals(){let h='';
 if(editK){const r=standings().find(x=>x.k===editK);if(r){const pens=Object.entries((S.table||{}).pens||{}).filter(([,p])=>p&&tkey(p.team)===editK);
  h+='<div class="modal"><div class="box"><div class="row" style="justify-content:space-between"><h2 style="margin:0">'+esc(t('editTeam',{x:r.name}))+'</h2><button class="btn sm" data-act="closeedit">'+t('close')+'</button></div>'
  +'<p class="muted">'+t('totalsHint')+'</p><div class="g4">'+F6.concat('pts').map(f=>'<label class="f">'+t(f)+'<input type="number" inputmode="numeric" data-act="ev" data-f="'+f+'" value="'+esc(editVals[f])+'"></label>').join('')+'</div>'
  +'<button class="btn pri mt" data-act="savetotals">'+t('saveChanges')+'</button>'
  +'<hr><b>'+t('penalty')+'</b><div class="g2 mt"><label class="f">'+t('penPts')+'<input type="number" inputmode="numeric" data-act="ev" data-f="penPts" value="'+esc(editVals.penPts||'')+'"></label><label class="f">'+t('reason')+'<input data-act="ev" data-f="penWhy" value="'+esc(editVals.penWhy||'')+'"></label></div><button class="btn mt" data-act="applypen">'+t('applyPen')+'</button>'
  +'<div class="mt"><b>'+t('pens')+'</b>'+(pens.length?pens.map(([id,p])=>'<div class="row mt" style="justify-content:space-between"><span><b style="color:'+(p.pts<0?'#ff9b8f':'var(--gr)')+'">'+(p.pts>0?'+':'')+p.pts+'</b> · '+esc(p.reason||'')+' <span class="muted">'+esc(fmtDate(p.date))+'</span></span><button class="btn sm del" data-act="delpen" data-id="'+id+'">×</button></div>').join(''):'<div class="muted">'+t('noPens')+'</div>')+'</div>'
  +'<hr><button class="btn '+(r.out?'':'del')+'" data-act="toggleout">'+(r.out?t('reinstate'):t('withdraw'))+'</button></div></div>'}}
 if(dlg)h+='<div class="modal top"><div class="box"><h2 style="margin-top:0">'+t('confirmTitle')+'</h2><div>'+dlg.body+'</div>'
  +(dlg.date?'<label class="f mt">'+t('restartStart')+'<input type="date" id="dlg-date" value="'+dlg.date+'"></label>':'')
  +(dlg.word?'<input id="dlg-text" class="mt" autocomplete="off" placeholder="'+dlg.word+'">':'')
  +'<div class="row mt" style="justify-content:flex-end"><button class="btn" data-act="dlg-cancel">'+t('cancel')+'</button>'+(dlg.ok===false?'':'<button class="btn '+(dlg.danger?'warn':'pri')+'" data-act="dlg-ok">'+(dlg.okLabel||t('confirm'))+'</button>')+'</div></div></div>';
 return h}
function ask(body,onOk,opt){dlg=Object.assign({body,onOk},opt||{});render()}
function patchMain(obj){merge(S,obj);patch('league/main',obj)}

// ---------- views ----------
function dl(id,arr){return '<datalist id="'+id+'">'+arr.map(x=>'<option value="'+esc(x)+'">').join('')+'</datalist>'}
const langBtns = () => '<div class="lang"><button data-act="lang" data-v="en" class="'+(lang==='en'?'on':'')+'">EN</button><button data-act="lang" data-v="es" class="'+(lang==='es'?'on':'')+'">ES</button></div>';
function header(v){const ws=S.weeks.slice().sort((a,b)=>b.date.localeCompare(a.date));const staff=user&&v!=='refs';
 return '<header><div class="top"><img src="'+LOGO+'" alt=""><div class="brand">LIGA CENTRAL<small>DE FLORIDA</small></div><div class="sp"></div><span id="save" class="save"></span>'
 +(staff&&ws.length?'<select data-act="weeksel" style="width:auto;padding:6px 8px">'+ws.map(w=>'<option value="'+w.id+'"'+(w.id===viewWeekId?' selected':'')+'>'+esc(fmtDate(w.date,'y'))+'</option>').join('')+'</select>':'')
 +langBtns()+'</div>'
 +(staff?'<nav>'+VIEWS.filter(x=>x!=='refs').map(x=>'<a href="#'+x+'" class="'+(x===v?'on':'')+'">'+t(x)+'</a>').join('')+'</nav>':'')+'</header>'}
function reminder(){const now=new Date();const dow=now.getDay();if(dow===0)return'';const ns=new Date(now);ns.setDate(now.getDate()+(7-dow));const d=iso(ns);const w=S.weeks.find(x=>x.date===d);if(w&&w.posted)return'';
 return '<div class="notice">🔔 '+esc(t('remind',{d:fmtDate(d)}))+' '+(w?'<button class="btn sm pri" data-act="openweek" data-id="'+w.id+'">'+t('remindOpen')+'</button>':'<button class="btn sm pri" data-act="newweek">'+t('remindNew')+'</button>')+'</div>'}
function warnHtml(w){const ws=warnings(w);return ws.length?'<div class="warns"><b>⚠ '+t('warnTitle')+'</b>'+ws.map(x=>'<div>• '+esc(x)+'</div>').join('')+'</div>':''}
function vLogin(){return '<div class="login card"><img src="'+LOGO+'" alt=""><h2 style="text-align:center">'+t('login')+'</h2><form id="loginf"><label class="f mb">'+t('email')+'<input type="email" id="le" autocomplete="username" required></label><label class="f mb">'+t('password')+'<input type="password" id="lp" autocomplete="current-password" required></label><button class="btn pri" style="width:100%">'+t('signIn')+'</button>'+(loginErr?'<div class="err">'+esc(loginErr)+'</div>':'')+'</form><p style="text-align:center" class="mt"><a href="#refs" style="color:var(--or)">'+t('refsLink')+'</a></p></div>'}
function vSchedule(w){let h=reminder();
 h+='<div class="card"><div class="g3" style="grid-template-columns:1fr"><label class="f">'+t('date')+'<input type="date" data-act="wk" data-k="date" value="'+w.date+'"></label></div></div>';
 h+='<div id="warns">'+warnHtml(w)+'</div>';
 const gs=groups(w);if(!gs.length)h+='<div class="empty">'+t('noGames')+'</div>';
 gs.forEach(gr=>{h+='<div class="band">'+fmtTime(gr.time)+'<small>'+t('kickoff')+'</small></div>';
  gr.games.forEach(g=>{h+='<div class="card"><div class="gm"><label class="f">'+t('time')+'<input type="time" data-act="g" data-id="'+g.id+'" data-k="time" data-rr="1" value="'+g.time+'"></label><label class="f">'+t('park')+'<input list="dlp" data-act="g" data-id="'+g.id+'" data-k="park" value="'+esc(g.park)+'"></label><label class="f">'+t('field')+'<input inputmode="numeric" data-act="g" data-id="'+g.id+'" data-k="field" data-rr="1" value="'+esc(g.field)+'"></label></div>'
  +'<div class="vs mt"><label class="f">'+t('home')+'<input list="dlt" data-act="g" data-id="'+g.id+'" data-k="home" value="'+esc(g.home)+'"></label><span class="x">VS</span><label class="f">'+t('away')+'<input list="dlt" data-act="g" data-id="'+g.id+'" data-k="away" value="'+esc(g.away)+'"></label></div>'
  +'<div class="g3 r mt">'+[['c','center'],['a1','ar1'],['a2','ar2']].map(([k,l])=>'<label class="f">'+t(l)+'<input list="dlr" data-act="g" data-id="'+g.id+'" data-k="'+k+'" value="'+esc(g[k])+'"></label>').join('')+'</div>'
  +'<div class="row mt" style="justify-content:flex-end"><button class="btn sm del" data-act="delgame" data-id="'+g.id+'">'+t('del')+'</button></div></div>'})});
 h+='<div class="row mt"><button class="btn" data-act="addgame">'+t('addGame')+'</button><button class="btn" data-act="addslot">'+t('addSlot')+'</button></div>';
 const link=REF_URL;
 h+='<div class="card mt"><b>'+t('refLink')+'</b><div class="muted mt mb">'+t('refLinkHint')+'</div><input readonly value="'+esc(link)+'" class="mb"><div class="row"><button class="btn pri sm" data-act="copylink">'+t('copy')+'</button><a class="btn sm" style="text-decoration:none;background:#1f7a45;border-color:#1f7a45" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent(t('waMsg')+' '+link)+'">'+t('wa')+'</a><a class="btn sm" href="#refs" style="text-decoration:none">'+t('preview')+'</a></div></div>';
 return h}
function vGameday(w){const f=feeStats(w);const fin=w.games.filter(g=>g.status==='final').length;
 let h='<div class="chips"><div class="chip"><span>'+t('feesPaid')+'</span><b>'+f.paid+' / '+f.teams+'</b></div>'+(f.amt!=null?'<div class="chip"><span>'+t('collected')+'</span><b>'+money(f.amt)+'</b></div>':'')+'<div class="chip"><span>'+t('gamesFinal')+'</span><b>'+fin+' / '+w.games.length+'</b></div></div>';
 const unpaid=[];w.games.forEach(g=>{if(g.status==='cancel')return;if(g.home&&!g.paidH)unpaid.push(g.home);if(g.away&&!g.paidA)unpaid.push(g.away)});
 if(unpaid.length&&unpaid.length<f.teams)h+='<div class="muted mb">'+t('unpaidTeams')+': <b style="color:#ffb3a8">'+unpaid.map(esc).join(', ')+'</b></div>';
 groups(w).forEach(gr=>{h+='<div class="band">'+fmtTime(gr.time)+'<small>'+t('kickoff')+'</small></div>';
  gr.games.forEach(g=>{h+='<div class="card"><div class="row" style="justify-content:space-between"><span><span class="fb">'+t('field')+' '+esc(g.field)+'</span> <span class="pk">'+esc(g.park)+'</span></span>'
  +'<div class="seg">'+['sched','live','final','cancel'].map(s=>'<button data-act="status" data-id="'+g.id+'" data-v="'+s+'" class="'+(g.status===s?'on '+s:'')+'">'+t('st_'+s)+'</button>').join('')+'</div></div>'
  +'<div class="match"><div class="team h">'+esc(g.home||'—')+'</div><div class="score"><input inputmode="numeric" data-act="g" data-id="'+g.id+'" data-k="hs" value="'+esc(g.hs)+'"><span class="muted">-</span><input inputmode="numeric" data-act="g" data-id="'+g.id+'" data-k="as" value="'+esc(g.as)+'"></div><div class="team">'+esc(g.away||'—')+'</div></div>'
  +'<div class="paids">'+[['paidH',g.home],['paidA',g.away]].map(([k,n])=>'<label class="paid '+(g[k]?'yes':'')+'"><input type="checkbox" data-act="paid" data-id="'+g.id+'" data-k="'+k+'"'+(g[k]?' checked':'')+'>'+(g[k]?'✓ '+t('paid'):t('notPaid'))+' · '+esc(n||'')+'</label>').join('')+'</div>'
  +'<div class="cards">'+(g.cards||[]).map((c,i)=>'<span class="ck"><i class="'+c.type+'"></i>'+esc(c.player)+' <span class="muted">('+esc(c.team==='h'?g.home:g.away)+')</span><button data-act="delcard" data-id="'+g.id+'" data-i="'+i+'">×</button></span>').join('')+'</div>'
  +'<div class="addc"><input id="cp-'+g.id+'" placeholder="'+t('player')+'"><select id="ct-'+g.id+'"><option value="h">'+esc(g.home||t('home'))+'</option><option value="a">'+esc(g.away||t('away'))+'</option></select><button class="btn sm" data-act="addcard" data-id="'+g.id+'" data-v="Y" style="background:var(--ye);color:#2a2100">+ '+t('yellow')+'</button><button class="btn sm" data-act="addcard" data-id="'+g.id+'" data-v="R" style="background:var(--rd);color:#fff">+ '+t('red')+'</button></div>'
  +'<div class="refs">'+t('center')+': <b>'+esc(g.c||'—')+'</b> · '+t('ar1')+': <b>'+esc(g.a1||'—')+'</b> · '+t('ar2')+': <b>'+esc(g.a2||'—')+'</b></div></div>'})});
 return h}
function vPayouts(w){const p=payouts(w);const names=Object.keys(p).sort((a,b)=>a.localeCompare(b));const pt=payTotal(w);const f=feeStats(w);
 let h='<div class="chips"><div class="chip"><span>'+t('owed')+'</span><b>'+money(pt.tot)+'</b></div><div class="chip"><span>'+t('paidOut')+'</span><b style="color:var(--gr)">'+money(pt.paid)+'</b></div><div class="chip"><span>'+t('left')+'</span><b style="color:var(--or)">'+money(pt.tot-pt.paid)+'</b></div></div>';
 if(!names.length)return h+'<div class="empty">'+t('noRefs')+'</div>';
 h+='<div class="card"><b>'+t('refSummary')+'</b> <span class="muted">('+t('center')+' '+money(S.settings.center)+' · '+t('lines')+' '+money(S.settings.side)+')</span><table class="mt"><tr><th>'+t('refName')+'</th><th class="n">'+t('centers')+'</th><th class="n">'+t('lines')+'</th><th class="n">'+t('total')+'</th><th class="n">'+t('paidQ')+'</th></tr>'
 +names.map(n=>{const a=p[n].c*S.settings.center+p[n].s*S.settings.side;return '<tr><td><b>'+esc(n)+'</b></td><td class="n">'+p[n].c+'</td><td class="n">'+p[n].s+'</td><td class="n"><b>'+money(a)+'</b></td><td class="n"><input type="checkbox" style="width:22px;height:22px;accent-color:var(--gr)" data-act="refpaid" data-n="'+esc(n)+'"'+(w.refPaid[n]?' checked':'')+'></td></tr>'}).join('')
 +'<tr class="tot"><td>'+t('total')+'</td><td class="n">'+names.reduce((s,n)=>s+p[n].c,0)+'</td><td class="n">'+names.reduce((s,n)=>s+p[n].s,0)+'</td><td class="n">'+money(pt.tot)+'</td><td></td></tr></table></div>';
 if(f.amt!=null)h+='<div class="card"><b>'+t('cash')+'</b><div class="muted">'+t('cashTxt')+'</div><div style="font-size:22px;font-weight:900;margin-top:6px">'+money(f.amt)+' − '+money(pt.tot)+' = <span style="color:'+(f.amt-pt.tot<0?'var(--rd)':'var(--gr)')+'">'+money(f.amt-pt.tot)+'</span></div></div>';
 return h}
function vGraphic(w){return '<div class="row mb" style="justify-content:space-between"><label class="paid '+(w.posted?'yes':'')+'"><input type="checkbox" data-act="posted"'+(w.posted?' checked':'')+'>'+(w.posted?'✓ '+t('posted'):t('markPosted'))+'</label><div class="row">'+(navigator.share?'<button class="btn pri" data-act="sharegfx">↗ '+t('share')+'</button>':'')+'<button class="btn" data-act="dlgfx">⬇ '+t('dl')+'</button></div></div><img id="gimg" class="gimg" alt=""><p class="muted" style="text-align:center">'+t('graphicHint')+'</p>'}
function vHistory(){const ws=S.weeks.slice().sort((a,b)=>b.date.localeCompare(a.date));
 let h='<div class="row mb"><button class="btn pri" data-act="newweek">'+t('newWeek')+'</button></div><p class="muted">'+t('copyFrom')+'</p>';
 let shownPrev=false;if(S.settings.seasonStart)h+='<h2 style="font-size:16px">'+t('curSeason')+' <span class="muted">('+t('since')+' '+esc(fmtDate(S.settings.seasonStart))+')</span></h2>';
 ws.forEach(w=>{if(!inSeason(w)&&!shownPrev){shownPrev=true;h+='<h2 style="font-size:16px;margin-top:24px">'+t('prevSeasons')+'</h2>'}const f=feeStats(w),pt=payTotal(w),cards=[];w.games.forEach(g=>(g.cards||[]).forEach(c=>cards.push({c,g})));
  h+='<div class="card"><div class="hist"><div><b style="font-size:16px">'+esc(fmtDate(w.date,true))+'</b><div class="muted">'+w.games.length+' '+t('games')+' · '+t('feesPaid')+' '+f.paid+'/'+f.teams+' · '+t('owed')+' '+money(pt.tot)+'</div></div>'
  +(w.id===week().id?'<span class="pk">'+t('current')+'</span>':'<button class="btn sm" data-act="openweek" data-id="'+w.id+'">'+t('open')+'</button>')+'</div>'
  +'<details class="mt"><summary class="muted" style="cursor:pointer">'+t('results')+'</summary><div class="mt">'+groups(w).map(gr=>gr.games.map(g=>'<div class="res">'+fmtTime(g.time)+' · '+t('field')+' '+esc(g.field)+' — <b>'+esc(g.home)+'</b> '+(g.status==='cancel'?'<span class="muted">('+t('st_cancel')+')</span>':(g.hs!==''||g.as!==''?'<b style="color:var(--or)">'+esc(g.hs)+' - '+esc(g.as)+'</b>':'vs'))+' <b>'+esc(g.away)+'</b></div>').join('')).join('')
  +'<div class="cards mt">'+(cards.length?cards.map(({c,g})=>'<span class="ck"><i class="'+c.type+'"></i>'+esc(c.player)+' <span class="muted">('+esc(c.team==='h'?g.home:g.away)+')</span></span>').join(''):'<span class="muted">'+t('noCards')+'</span>')+'</div></div></details></div>'});
 return h}
function vSetup(){const s=S.settings;
 return '<div class="card"><div class="g3"><label class="f">'+t('teamFee')+'<input type="number" min="0" step="1" data-act="set" data-k="fee" placeholder="'+t('feeUnset')+'" value="'+(s.fee??'')+'"></label><label class="f">'+t('centerPay')+'<input type="number" min="0" data-act="set" data-k="center" value="'+s.center+'"></label><label class="f">'+t('sidePay')+'<input type="number" min="0" data-act="set" data-k="side" value="'+s.side+'"></label></div></div>'
 +'<div class="g3">'+[['parks','parksL'],['teams','teamsL'],['refs','refsL']].map(([k,l])=>'<div class="card"><label class="f">'+t(l)+'<textarea rows="12" data-act="list" data-k="'+k+'">'+esc(S[k].join('\n'))+'</textarea></label></div>').join('')+'</div>'
 +'<div class="card row" style="justify-content:space-between"><span class="muted">'+t('signedAs')+' <b>'+esc(user&&user.email)+'</b></span><button class="btn" data-act="signout">'+t('signOut')+'</button></div>'}
function pickPublic(ws){if(!ws||!ws.length)return null;const today=iso(new Date());const up=ws.filter(w=>w.date>=today).sort((a,b)=>a.date.localeCompare(b.date));return up[0]||ws.slice().sort((a,b)=>b.date.localeCompare(a.date))[0]}
function vRefs(w){if(!w)return '<div class="empty">'+(PUB||pubErr?t('noPublic'):t('loading'))+'</div>';
 const names=[...new Set(w.games.flatMap(g=>[g.c,g.a1,g.a2]).map(x=>(x||'').trim()).filter(Boolean))].sort();const me=refFilter.toLowerCase();
 let h='<h2 style="text-align:center;margin-bottom:2px">'+t('refTitle')+'</h2><div style="text-align:center;color:var(--or);font-weight:900;font-size:22px">'+esc(fmtDate(w.date,true))+'</div><div style="margin-bottom:12px"></div>';
 h+='<label class="f mb">'+t('findMe')+'<select data-act="reffilter"><option value="">'+t('all')+'</option>'+names.map(n=>'<option'+(n===refFilter?' selected':'')+'>'+esc(n)+'</option>').join('')+'</select></label>';
 groups(w).forEach(gr=>{const gs=gr.games.filter(g=>g.status!=='cancel');if(!gs.length)return;let rows='';
  gs.forEach(g=>{const mine=me&&[g.c,g.a1,g.a2].some(x=>(x||'').trim().toLowerCase()===me);if(me&&!mine)return;const rn=(k,l)=>'<span class="'+(me&&(g[k]||'').trim().toLowerCase()===me?'me':'')+'">'+t(l)+': <b>'+esc(g[k]||'—')+'</b></span>';
  rows+='<div class="card'+(mine?' hl':'')+'"><div class="row" style="justify-content:space-between"><span class="fb">'+t('field')+' '+esc(g.field)+'</span><span class="pk">'+esc(g.park)+'</span></div><div class="match" style="margin:8px 0"><div class="team h">'+esc(g.home)+'</div><span class="muted">vs</span><div class="team">'+esc(g.away)+'</div></div><div class="refs" style="display:flex;gap:12px;flex-wrap:wrap">'+rn('c','center')+rn('a1','ar1')+rn('a2','ar2')+'</div></div>'});
  if(rows)h+='<div class="band">'+fmtTime(gr.time)+'<small>'+t('kickoff')+'</small></div>'+rows});
 if(user&&!window.REF_ONLY)h+='<p style="text-align:center"><a href="#schedule" style="color:var(--or)">← '+t('schedule')+'</a></p>';
 return h}
function render(){const v=view();const app=document.getElementById('app');document.documentElement.lang=lang;
 if(!authReady){app.innerHTML='<div class="empty">'+t('loading')+'</div>';return}
 if(v==='refs'){if(!user)startPublic();const w=user?week():pickPublic(PUB);app.innerHTML=header(v)+'<main>'+vRefs(w)+'</main>';return}
 if(!user){app.innerHTML=header(v)+'<main>'+vLogin()+'</main>';return}
 if(accessDenied){app.innerHTML=header(v)+'<main><div class="notice">'+t('noAccess')+'</div><button class="btn" data-act="signout">'+t('signOut')+'</button></main>';return}
 if(!mainLoaded||!weeksLoaded||!S.weeks.length){app.innerHTML=header(v)+'<main><div class="empty">'+t('loading')+'</div></main>';return}
 const w=week();
 const body=v==='schedule'?vSchedule(w):v==='gameday'?vGameday(w):v==='table'?vTable():v==='payouts'?vPayouts(w):v==='graphic'?vGraphic(w):v==='history'?vHistory():vSetup();
 const title=v==='history'||v==='setup'||v==='table'?'':'<h2>'+t(v)+' <span class="muted" style="font-weight:600">· '+esc(fmtDate(w.date,true))+'</span></h2>';
 app.innerHTML=header(v)+'<main>'+(saveErr?'<div class="warns"><b>⚠ '+t('err')+'</b> ('+esc(saveErr)+')</div>':'')+title+body+'</main>'+modals()+dl('dlt',S.teams)+dl('dlr',S.refs)+dl('dlp',S.parks);
 setSave(saveState);if(v==='graphic')drawGraphic(w)}

// ---------- graphic ----------
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function fit(c,txt,max,size,weight){let s=size;do{c.font=weight+' '+s+'px Montserrat, sans-serif';s--}while(c.measureText(txt).width>max&&s>12)}
let gcanvas=null;
async function drawGraphic(w){try{await document.fonts.load('900 40px Montserrat');await document.fonts.load('700 20px Montserrat')}catch(e){}
 const img=new Image();img.src=LOGO;await new Promise(r=>{img.onload=r;img.onerror=r});
 const gs=groups(w).map(g=>({time:g.time,games:g.games.filter(x=>x.status!=='cancel')})).filter(g=>g.games.length);
 const W=1080,P=56,rowH=78,gap=12,bandH=66;let H=470;gs.forEach(g=>{H+=bandH+18+g.games.length*(rowH+gap)+14});H+=40;
 const cv=document.createElement('canvas');cv.width=W;cv.height=H;const c=cv.getContext('2d');
 c.fillStyle='#171f32';c.fillRect(0,0,W,H);
 const LS=230;c.save();rr(c,W/2-LS/2,40,LS,LS,18);c.clip();if(img.naturalWidth)c.drawImage(img,W/2-LS/2,40,LS,LS);c.restore();
 c.fillStyle='#f7941d';rr(c,W/2-60,300,120,8,4);c.fill();
 c.textAlign='center';c.textBaseline='middle';c.fillStyle='#f7941d';const big=fmtDate(w.date,'g').toUpperCase();fit(c,big,W-2*P,84,'900');c.fillText(big,W/2,368);
 c.fillStyle='#ffffff';c.font='800 30px Montserrat, sans-serif';c.fillText(t('gfxSub')+' · '+pDate(w.date).getFullYear(),W/2,428);
 let y=470;
 gs.forEach(g=>{c.fillStyle='#f7941d';rr(c,P,y,W-2*P,bandH,12);c.fill();c.fillStyle='#16120a';c.textAlign='left';c.font='900 34px Montserrat, sans-serif';c.fillText(fmtTime(g.time),P+26,y+bandH/2+1);
  c.textAlign='right';c.font='800 18px Montserrat, sans-serif';c.fillText(t('kickoff'),W-P-26,y+bandH/2+1);y+=bandH+18;
  g.games.forEach(x=>{c.fillStyle='#22304d';rr(c,P,y,W-2*P,rowH,12);c.fill();
   const bx=P+20,bw=130,bh=40,by=y+(rowH-bh)/2;c.strokeStyle='#f7941d';c.lineWidth=2.5;rr(c,bx,by,bw,bh,8);c.stroke();c.fillStyle='#f7941d';c.textAlign='center';c.font='800 19px Montserrat, sans-serif';c.fillText(t('field')+' '+x.field,bx+bw/2,by+bh/2+1);
   const pw=230,px=W-P-20-pw;c.fillStyle='#33446b';rr(c,px,by,pw,bh,8);c.fill();c.fillStyle='#e6ecf7';fit(c,x.park,pw-20,18,'700');c.fillText(x.park,px+pw/2,by+bh/2+1);
   const mid=(bx+bw+px)/2,half=(px-(bx+bw))/2-40;
   c.fillStyle='#ffffff';c.textAlign='right';fit(c,x.home,half-14,28,'800');c.fillText(x.home,mid-24,y+rowH/2+1);
   c.textAlign='left';fit(c,x.away,half-14,28,'800');c.fillText(x.away,mid+24,y+rowH/2+1);
   c.textAlign='center';c.fillStyle='#9aa7c0';c.font='700 18px Montserrat, sans-serif';c.fillText('vs',mid,y+rowH/2+1);
   y+=rowH+gap});y+=14});
 gcanvas=cv;const el=document.getElementById('gimg');if(el)el.src=cv.toDataURL('image/png')}
const gfxName=()=>'liga-central-'+week().date+'.png';
function gfxBlob(){return new Promise(r=>gcanvas.toBlob(r,'image/png'))}

// ---------- actions ----------
function addList(k,v){v=(v||'').trim();if(v&&!S[k].some(x=>x.toLowerCase()===v.toLowerCase())){S[k].push(v);S[k].sort((a,b)=>a.localeCompare(b));return true}return false}
function game(id){return week().games.find(g=>g.id===id)}
function newGame(o){return Object.assign({id:uid(),time:'09:00',park:(S.parks&&S.parks[0])||'',field:'',home:'',away:'',c:'',a1:'',a2:'',status:'sched',hs:'',as:'',paidH:false,paidA:false,cards:[]},o)}
const fullGame = g => { const { id, ...r } = g; return r; };
let armed=null;
document.addEventListener('submit',async e=>{if(e.target.id!=='loginf')return;e.preventDefault();loginErr='';
 try{await fb.signIn(document.getElementById('le').value.trim(),document.getElementById('lp').value)}catch(x){loginErr=t('loginErr');render()}});
// Save text while typing (not only when leaving the box)
document.addEventListener('input',e=>{const el=e.target;if(el.dataset.act!=='g'||!user)return;const w=week(),g=game(el.dataset.id);if(!g)return;const k=el.dataset.k;g[k]=el.value;patchGame(w,g,{[k]:el.value.trim()})});
document.addEventListener('change',e=>{const el=e.target,a=el.dataset.act;if(!a||!user&&a!=='reffilter')return;const w=week();
 if(a==='g'){const g=game(el.dataset.id),k=el.dataset.k;if(!g)return;g[k]=el.value.trim();patchGame(w,g,{[k]:g[k]});let m=false;if(k==='home'||k==='away')m=addList('teams',g[k]);if(['c','a1','a2'].includes(k))m=addList('refs',g[k]);if(k==='park')m=addList('parks',g[k]);if(m)saveM();
  if(el.dataset.rr)render();else{const wb=document.getElementById('warns');if(wb)wb.innerHTML=warnHtml(w)}}
 else if(a==='paid'){const g=game(el.dataset.id);g[el.dataset.k]=el.checked;patchGame(w,g,{[el.dataset.k]:el.checked});render()}
 else if(a==='wk'){const k=el.dataset.k;w[k]=k==='num'?(parseInt(el.value)||w.num):(el.value||w.date);patchWeekFields(w,{[k]:w[k]});render()}
 else if(a==='weeksel'){viewWeekId=el.value;render()}
 else if(a==='refpaid'){w.refPaid[el.dataset.n]=el.checked;patch('weeks/'+w.id,{refPaid:{[el.dataset.n]:el.checked}});render()}
 else if(a==='posted'){w.posted=el.checked;patchWeekFields(w,{posted:w.posted});render()}
 else if(a==='set'){const k=el.dataset.k;const n=parseFloat(el.value);S.settings[k]=k==='fee'?(isNaN(n)?null:n):(isNaN(n)?S.settings[k]:n);saveM()}
 else if(a==='list'){S[el.dataset.k]=[...new Set(el.value.split('\n').map(x=>x.trim()).filter(Boolean))];saveM()}
 else if(a==='reffilter'){refFilter=el.value;render()}});
document.addEventListener('click',async e=>{const el=e.target.closest('[data-act]');if(!el||/SELECT|INPUT|TEXTAREA/.test(el.tagName))return;const a=el.dataset.act;
 if(a==='lang'){lang=el.dataset.v;try{localStorage.setItem('lcf-lang',lang)}catch(x){}render();return}
 if(a==='signout'){el.disabled=true;try{await flush();await fb.waitWrites()}catch(x){}stopAll();await fb.signOut();location.hash='';return}
 if(!user)return;const w=week();
 if(a==='status'){const g=game(el.dataset.id);g.status=el.dataset.v;patchGame(w,g,{status:g.status});render()}
 else if(a==='addcard'){const id=el.dataset.id,p=document.getElementById('cp-'+id),tm=document.getElementById('ct-'+id);if(!p.value.trim()){p.focus();return}const g=game(id);g.cards=g.cards||[];g.cards.push({type:el.dataset.v,team:tm.value,player:p.value.trim()});patchGame(w,g,{cards:g.cards});render()}
 else if(a==='delcard'){const g=game(el.dataset.id);g.cards.splice(+el.dataset.i,1);patchGame(w,g,{cards:g.cards});render()}
 else if(a==='addgame'||a==='addslot'){let add=[];if(a==='addgame'){const last=w.games[w.games.length-1];add=[newGame(last?{time:last.time,park:last.park,field:String((parseInt(last.field)||7)+1)}:{})]}
  else{const gs=groups(w);const last=gs[gs.length-1];let tm='09:00',park=S.parks[0]||'',fields=['8','9','10'];if(last){const[h,m]=last.time.split(':').map(Number);tm=String(Math.min(h+2,23)).padStart(2,'0')+':'+String(m).padStart(2,'0');park=last.games[0].park;fields=last.games.map(g=>g.field)}add=fields.map(f=>newGame({time:tm,park,field:f}))}
  add.forEach(g=>{w.games.push(g);patch('weeks/'+w.id,{games:{[g.id]:fullGame(g)}});patch('public/'+w.id,{num:w.num,date:w.date,games:{[g.id]:pubGame(g)}})});render()}
 else if(a==='delgame'){if(armed!==el.dataset.id){armed=el.dataset.id;el.textContent=t('sure');el.classList.add('warn');setTimeout(()=>{if(armed===el.dataset.id){armed=null;el.textContent=t('del');el.classList.remove('warn')}},3000);return}armed=null;const id=el.dataset.id;w.games=w.games.filter(g=>g.id!==id);patch('weeks/'+w.id,{games:{[id]:fb.DEL}});patch('public/'+w.id,{games:{[id]:fb.DEL}});render()}
 else if(a==='newweek'){const base=newest(S.weeks);const d=pDate(base.date);d.setDate(d.getDate()+7);
  let id='w'+iso(d).replace(/-/g,'');if(S.weeks.some(x=>x.id===id))id+='-'+uid();
  const nw={id,num:base.num+1,date:iso(d),posted:false,refPaid:{},games:base.games.filter(g=>g.status!=='cancel').map(g=>newGame({time:g.time,park:g.park,field:g.field}))};
  S.weeks.push(nw);viewWeekId=nw.id;
  patch('weeks/'+id,{num:nw.num,date:nw.date,posted:false,refPaid:{},games:Object.fromEntries(nw.games.map(g=>[g.id,fullGame(g)]))});
  patch('public/'+id,{num:nw.num,date:nw.date,games:Object.fromEntries(nw.games.map(g=>[g.id,pubGame(g)]))});
  location.hash='schedule';render()}
 else if(a==='openweek'){viewWeekId=el.dataset.id;location.hash='schedule';render()}
 else if(a==='copylink'){try{await navigator.clipboard.writeText(REF_URL);el.textContent=t('copied')}catch(x){const i=el.closest('.card').querySelector('input');if(i)i.select()}}
 else if(a==='dlgfx'){if(!gcanvas)return;const b=await gfxBlob();const u=URL.createObjectURL(b);const l=document.createElement('a');l.href=u;l.download=gfxName();document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(u),3000)}
 else if(a==='sharegfx'){if(!gcanvas)return;const b=await gfxBlob();const f=new File([b],gfxName(),{type:'image/png'});
  try{if(navigator.canShare&&navigator.canShare({files:[f]}))await navigator.share({files:[f]});else await navigator.share({title:'Liga Central',url:APP_URL})}catch(x){}}});

// ---------- table actions ----------
document.addEventListener('input',e=>{const el=e.target;if(el.dataset.act==='ev')editVals[el.dataset.f]=el.value});
document.addEventListener('click',e=>{const el=e.target.closest('[data-act]');if(!el||!user)return;const a=el.dataset.act;
 if(a==='editteam'){const r=standings().find(x=>x.k===el.dataset.k);if(!r)return;editK=r.k;editVals={};F6.concat('pts').forEach(f=>editVals[f]=String(r[f]));render()}
 else if(a==='closeedit'){editK=null;render()}
 else if(a==='dlg-cancel'){dlg=null;render()}
 else if(a==='dlg-ok'){if(!dlg)return;if(dlg.word){const v=(document.getElementById('dlg-text')||{}).value||'';if(v.trim().toUpperCase()!==dlg.word){const i=document.getElementById('dlg-text');i.style.outline='2px solid var(--rd)';i.focus();return}}
  const ctx={date:(document.getElementById('dlg-date')||{}).value};const f=dlg.onOk;dlg=null;if(f)f(ctx);render()}
 else if(a==='savetotals'){const r=standings().find(x=>x.k===editK);if(!r)return;const E={};let bad=false;F6.concat('pts').forEach(f=>{const n=parseInt(editVals[f]);if(isNaN(n))bad=true;E[f]=n});if(bad)return;
  const ch=F6.concat('pts').filter(f=>E[f]!==r[f]);if(!ch.length){ask(t('noChange'),null,{ok:false});return}
  const ptsChanged=E.pts!==r.pts;const adj={};F6.forEach(f=>adj[f]=E[f]-r.calc[f]);adj.pts=ptsChanged?E.pts-(3*E.w+E.d+r.pen):0;
  ask('<b>'+esc(t('cEdit',{x:r.name}))+'</b><div class="mt">'+ch.map(f=>t(f)+': '+r[f]+' → <b>'+E[f]+'</b>').join('<br>')+'</div>',()=>{patchMain({table:{adj:{[r.k]:adj}}});editK=null})}
 else if(a==='applypen'){const r=standings().find(x=>x.k===editK);const n=parseInt(editVals.penPts);if(!r||!n)return;const why=(editVals.penWhy||'').trim();
  ask('<b>'+esc(n<0?t('cTake',{n:-n,x:r.name}):t('cGive',{n,x:r.name}))+'</b>'+(why?'<div class="muted mt">'+t('reason')+': '+esc(why)+'</div>':''),()=>{patchMain({table:{pens:{[uid()]:{team:r.name,pts:n,reason:why,date:iso(new Date())}}}});editVals.penPts='';editVals.penWhy=''},{danger:n<0})}
 else if(a==='delpen'){const id=el.dataset.id;const p=((S.table||{}).pens||{})[id];if(!p)return;ask(esc(t('cDelPen',{x:p.team,n:(p.pts>0?'+':'')+p.pts})),()=>patchMain({table:{pens:{[id]:fb.DEL}}}),{danger:true})}
 else if(a==='toggleout'){const r=standings().find(x=>x.k===editK);if(!r)return;ask('<b>'+esc(r.out?t('cIn',{x:r.name}):t('cOut',{x:r.name}))+'</b>',()=>{patchMain({table:{out:{[r.k]:r.out?fb.DEL:true}}});editK=null},{danger:!r.out})}
 else if(a==='restart'){ask('<b>'+t('restart')+'</b><p class="muted">'+t('restartTxt1')+'</p>',ctx=>{const date=ctx.date||nextSunday();
   ask(esc(t('restartTxt2',{w:t('restartWord')})),()=>{patchMain({settings:{seasonStart:date,season:(S.settings.season||1)+1},table:fb.DEL});S.table={}},{danger:true,word:t('restartWord'),okLabel:t('restartBtn')})},
  {danger:true,date:nextSunday(),okLabel:t('cont')})}
});
window.addEventListener('hashchange',()=>{editK=null;dlg=null;render()});
render();

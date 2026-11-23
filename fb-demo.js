// DEMO data layer: same functions as fb.js, but everything stays in this browser only.
// Nothing here ever reaches the real league database.
export const DEL = Symbol("delete");
const KEY = "lcf-demo-db";
const isObj = o => o && typeof o === "object" && !Array.isArray(o);
const clone = o => JSON.parse(JSON.stringify(o));
function merge(a, b) { for (const k in b) { if (b[k] === DEL) delete a[k]; else if (isObj(b[k])) a[k] = merge(isObj(a[k]) ? a[k] : {}, b[k]); else a[k] = clone(b[k]); } return a; }

let db = { league: {}, weeks: {}, public: {} };
try { const s = localStorage.getItem(KEY); if (s) db = JSON.parse(s); } catch (e) {}
const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) {} };
const subs = { league: [], weeks: [], public: [] };
const emit = c => subs[c].forEach(f => f());
const user = { email: "demo@ligacentral" };

export const onAuth = cb => { setTimeout(() => cb(user), 10); };
export const signIn = async () => {};
export const signOut = async () => { resetDemo(); };
export const waitWrites = async () => {};
export function resetDemo() { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); }

const sub = (c, f) => { subs[c].push(f); setTimeout(f, 10); return () => { const i = subs[c].indexOf(f); if (i >= 0) subs[c].splice(i, 1); }; };
export const watchMain = cb => sub("league", () => cb(db.league.main ? clone(db.league.main) : null));
export const watchWeeks = cb => sub("weeks", () => cb(Object.entries(db.weeks).map(([id, d]) => ({ id, ...clone(d) }))));
export const watchPublic = cb => sub("public", () => cb(Object.entries(db.public).map(([id, d]) => ({ id, ...clone(d) }))));

export const patch = async (c, id, obj) => { db[c][id] = merge(db[c][id] || {}, obj); persist(); emit(c); };
export const replace = async (c, id, obj) => { db[c][id] = clone(obj); persist(); emit(c); };
export const remove = async (c, id) => { delete db[c][id]; persist(); emit(c); };
export const isEmptyOnServer = async () => !db.league.main && !Object.keys(db.weeks).length;

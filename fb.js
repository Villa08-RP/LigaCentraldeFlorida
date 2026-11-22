// Data layer: everything that talks to Firebase lives here.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut as fbSignOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, doc, collection, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db;
try { db = initializeFirestore(app, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) }); }
catch (e) { db = initializeFirestore(app, {}); }

export const onAuth = cb => onAuthStateChanged(auth, cb);
export const signIn = (email, pw) => signInWithEmailAndPassword(auth, email, pw);
export const signOut = () => fbSignOut(auth);

// League settings + lists: league/main
export const watchMain = (cb, onErr) => onSnapshot(doc(db, "league", "main"), { includeMetadataChanges: true }, s => cb(s.exists() ? s.data() : null, s.metadata.fromCache), onErr);
// Weeks: weeks/{id}
export const watchWeeks = (cb, onErr) => onSnapshot(collection(db, "weeks"), s => cb(s.docs.map(d => ({ id: d.id, ...d.data() }))), onErr);
// Public referee view (no login): public/{weekId}
export const watchPublic = (cb, onErr) => onSnapshot(collection(db, "public"), s => cb(s.docs.map(d => ({ id: d.id, ...d.data() }))), onErr);

export const saveMain = data => setDoc(doc(db, "league", "main"), data);
export const saveWeek = w => { const { id, ...data } = w; return setDoc(doc(db, "weeks", id), data); };
export const savePublic = w => setDoc(doc(db, "public", w.id), {
  num: w.num, date: w.date,
  games: w.games.map(g => ({ time: g.time, park: g.park, field: g.field, home: g.home, away: g.away, c: g.c, a1: g.a1, a2: g.a2, status: g.status }))
});

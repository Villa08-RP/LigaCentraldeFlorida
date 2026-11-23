// Data layer: everything that talks to Firebase lives here.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut as fbSignOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, doc, collection, onSnapshot, setDoc, deleteDoc, deleteField, getDocFromServer, getDocsFromServer, waitForPendingWrites } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db;
try { db = initializeFirestore(app, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) }); }
catch (e) { db = initializeFirestore(app, {}); }

export const DEL = Symbol("delete");
const conv = o => o === DEL ? deleteField() : (o && typeof o === "object" && !Array.isArray(o)) ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, conv(v)])) : o;

export const onAuth = cb => onAuthStateChanged(auth, cb);
export const signIn = (email, pw) => signInWithEmailAndPassword(auth, email, pw);
export const signOut = () => fbSignOut(auth);
export const waitWrites = () => waitForPendingWrites(db);

export const watchMain = (cb, onErr) => onSnapshot(doc(db, "league", "main"), s => cb(s.exists() ? s.data() : null), onErr);
export const watchWeeks = (cb, onErr) => onSnapshot(collection(db, "weeks"), s => cb(s.docs.map(d => ({ id: d.id, ...d.data() }))), onErr);
export const watchPublic = (cb, onErr) => onSnapshot(collection(db, "public"), s => cb(s.docs.map(d => ({ id: d.id, ...d.data() }))), onErr);

// Only the fields that changed are sent, so two staff editing different games never erase each other.
export const patch = (coll, id, obj) => setDoc(doc(db, coll, id), conv(obj), { merge: true });
export const replace = (coll, id, obj) => setDoc(doc(db, coll, id), obj);
export const remove = (coll, id) => deleteDoc(doc(db, coll, id));

export async function isEmptyOnServer() {
  const m = await getDocFromServer(doc(db, "league", "main"));
  if (m.exists()) return false;
  const w = await getDocsFromServer(collection(db, "weeks"));
  return w.empty;
}

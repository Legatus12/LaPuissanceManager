import { initializeApp } from "firebase/app"
import { getFirestore, doc, collection, query, orderBy, onSnapshot, updateDoc } from "firebase/firestore"

initializeApp({
    apiKey: "AIzaSyAWOmRueaO-gurRxbbhG6EMSWwSXSdLgT4",
    authDomain: "la-puissance-firebase.firebaseapp.com",
    projectId: "la-puissance-firebase",
    storageBucket: "la-puissance-firebase.appspot.com",
    messagingSenderId: "140227962175",
    appId: "1:140227962175:web:c31fdba4adfa886b3f9f8a",
    measurementId: "G-378CN8566R"
})

const db = getFirestore()

export const getPlayers = (callback) => onSnapshot(query(collection(db, "/squad"), orderBy("number")), callback)

export const getSeasonsPlayed = (player, callback) => onSnapshot(collection(db, `/squad/${player}/stats`), callback)

export const getPlayerStats = (player, season, callback) => onSnapshot(doc(db, `squad/${player}/stats/${season}`), callback)

export const updateStat = (player, season, stat) => updateDoc(doc(db, `squad/${player}/stats`, season), stat)
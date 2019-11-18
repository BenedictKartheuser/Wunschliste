"use strict";

/**
 * Klasse Database: Kümmert sich um die Datenhaltung der App
 *
 * Diese Klasse beinhaltet alle Datensätze der App. Entgegen dem Namen handelt
 * es sich nicht wirklich um eine Datenbank, da sie lediglich ein paar statische
 * Testdaten enthält. Ausgefeilte Methoden zum Durchsuchen, Ändern oder Löschen
 * der Daten fehlen komplett, könnten aber in einer echten Anwendung relativ
 * einfach hinzugefügt werden.
 */
class Database {
    /**
     * Konstruktor.
     */
    constructor() {

        firebase.initializeApp( {
            apiKey: "AIzaSyDCN9B8__bNcwa4svqJ3jxd1aqSTxyzZAw",
            authDomain: "wunschliste-f5526.firebaseapp.com",
            databaseURL: "https://wunschliste-f5526.firebaseio.com",
            projectId: "wunschliste-f5526",
            storageBucket: "wunschliste-f5526.appspot.com",
            messagingSenderId: "101191923300",
            appId: "1:101191923300:web:bcbce78d4ea1b7cb4a5171",
            measurementId: "G-MPBZKMKM93"
        });
        // Initialize Firebase
        this._db = firebase.firestore();
        this._wuensche = this._db.collection('Wuensche');

    }

    async saveWunsch(neuerWunsch) {
      this._wuensche.add(neuerWunsch);
    }

    async selectAllWuensche(){
        let result = await this._wuensche.orderBy("wichtig").get();
        let Wuensche = [];

        result.forEach(docs => {
            let wunsch = docs.data();
            Wuensche.push(wunsch);
        })
        return Wuensche;
    }

    /**
     * Diese Methode sucht einen Datensazt anhand seiner ID in der Datenbank
     * und liefert den ersten, gefundenen Treffer zurück.
     *
     * @param  {Number} id Datensatz-ID
     * @return {Object} Gefundener Datensatz
     */
    getRecordById(id) {
        id = parseInt(id);
        return this._data.find(r => r.id === id);
    }

    /**
     * Diese Methode gibt eine Liste mit allen Datensätzen zurück.
     * @return {Array} Liste aller Datensätze
     */
    getAllRecords() {
        return this._data;
    }
}

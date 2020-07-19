const dbPromised = idb.open("Barcelona-DB", 5, (BarcelonaDB) => {
    switch (BarcelonaDB.oldVersion) {
        case 0:
            const playerStore = BarcelonaDB.createObjectStore('players', {keyPath: 'id'});
            playerStore.createIndex('name', 'name');
        case 1:
            const leagueStore = BarcelonaDB.createObjectStore('league', {keyPath: 'id'});
            leagueStore.createIndex('name', 'name');
        case 2:
            BarcelonaDB.createObjectStore('Barcelona', {keyPath: 'id'});
        case 3:
            BarcelonaDB.createObjectStore('OffLeague', {keyPath: 'id'});
        case 4:
            BarcelonaDB.createObjectStore('OffPlayer', {keyPath: 'id'});
    }
});


/** ------------------------- OFFLINE MODE ------------------------- */

export function saveBarcelonaData(team) {
    dbPromised.then(db => {
        const tx = db.transaction("Barcelona", "readwrite");
        const store = tx.objectStore("Barcelona");
        store.put(team);
        return tx.complete;
    })
}

export function getBarcelonaData(id) {
    return new Promise((resolve, reject) => {
        dbPromised
        .then((db) => {
            const tx = db.transaction("Barcelona", "readonly");
            const store = tx.objectStore("Barcelona");
            return store.get(id);
        })
        .then((data) => resolve(data));
    });
}

export function saveLeagueByID(league) {
    dbPromised.then(db => {
        const tx = db.transaction("OffLeague", "readwrite");
        const store = tx.objectStore("OffLeague");
        store.put(league);
        return tx.complete;
    })
}

export function getLeagueByID(id) {
    return new Promise((resolve, reject) => {
        dbPromised
        .then((db) => {
            const tx = db.transaction("OffLeague", "readonly");
            const store = tx.objectStore("OffLeague");
            return store.get(id);
        })
        .then((data) => resolve(data));
    });
}

export function savePlayerByID(player) {
    dbPromised.then(db => {
        const tx = db.transaction("OffPlayer", "readwrite");
        const store = tx.objectStore("OffPlayer");
        store.put(player);
        return tx.complete;
    })
}

export function getPlayerByID(id) {
    return new Promise((resolve, reject) => {
        dbPromised
        .then((db) => {
            const tx = db.transaction("OffPlayer", "readonly");
            const store = tx.objectStore("OffPlayer");
            return store.get(id);
        })
        .then((data) => resolve(data));
    });
}



/** ------------------------- BOOKMARK PLAYER ------------------------- */

export function bookmarkPlayer(player) {
    dbPromised.then(db => {
        const tx = db.transaction("players", "readwrite");
        const store = tx.objectStore("players");
        store.put(player);

        return tx.complete;
    })
    .then(() => console.log(`Add ${player.name} to Favorite List`));
}

export function getAllBookmarkPlayer() {
    return new Promise(async (resolve, reject) => {
        dbPromised
        .then((db) => {
            const tx = db.transaction("players", "readonly");
            const store = tx.objectStore("players");
            return store.getAll();
        })
        .then((players) => resolve(players));
    });
}

export function getBookmarkPlayerById(id) {
    return new Promise((resolve, reject) => {
        dbPromised
        .then((db) => {
            const tx = db.transaction("players", "readonly");
            const store = tx.objectStore("players");
            
            return store.get(id);
        })
        .then((player) => resolve(player));
    });
}

export function deleteBookmarkPlayer(player) {
    dbPromised
    .then((db) => {
        var tx = db.transaction('players', 'readwrite');
        var store = tx.objectStore('players');
        store.delete(player.id);

        return tx.complete;
    }).then(() => console.log(`Remove ${player.name} from Favorite List`));
}


/** ------------------------- BOOKMARK LEAGUE ------------------------- */

export function bookmarkLeague(league) {
    dbPromised.then(db => {
        const tx = db.transaction("league", "readwrite");
        const store = tx.objectStore("league");
        store.put(league);
        return tx.complete;
    })
    .then(() => console.log(`Add ${league.competition.name} to Favorite List`));
}

export function getAllBookmarkLeague() {
    return new Promise(async (resolve, reject) => {
        dbPromised
        .then((db) => {
            const tx = db.transaction("league", "readonly");
            const store = tx.objectStore("league");
            return store.getAll();
        })
        .then((league) => resolve(league));
    });
}

export function getBookmarkLeagueById(id) {
    return new Promise(async (resolve, reject) => {
        dbPromised
        .then((db) => {
            const tx = db.transaction("league", "readonly");
            const store = tx.objectStore("league");
            
            return store.get(id);
        })
        .then((league) => resolve(league));
    });
}

export function deleteBookmarkLeague(league) {
    dbPromised
    .then((db) => {
        var tx = db.transaction('league', 'readwrite');
        var store = tx.objectStore('league');
        store.delete(league.id);

        return tx.complete;
    }).then(() => console.log(`Remove ${league.name} from Favorite List`));
}
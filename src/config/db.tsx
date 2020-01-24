import Dexie from 'dexie'

import IUser from '../models/IUser'
import ISearch from '../models/ISearch'

class Database extends Dexie {
    users: Dexie.Table<IUser, number>;
    searchs: Dexie.Table<ISearch, number>;

    constructor() {
        super("Acert");
        this.version(1).stores({
            users: "++id, name, &email, password",
            searchs: "++id, idUser, name"
        });

        this.users = this.table("users")
        this.searchs = this.table("searchs")
    }

}

const db = new Database()

export default db
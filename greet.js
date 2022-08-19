
module.exports = function greet(db) {


    async function objectAdd(name) {
        let results = await db.manyOrNone('SELECT name FROM Users where name = $1', [name])
        if (results.length === 0 & name !== "") {
            results = await db.any('INSERT INTO Users (name, name_count) VALUES ($1,$2)',
                [name, 1]);
        }
        else {
            results = await db.manyOrNone('UPDATE Users SET name_count = name_count+1 where name = $1', [name])
        }
        return results;
    }


    //counts how namy times one name is greeted
    async function getCounter() {
        let results = await db.manyOrNone('SELECT name FROM Users');
        return results.length;
    }

    async function personCounter(name) {

        let results = await db.one('SELECT name_count FROM Users where name = $1', [name])
        return results.name_count
    }

    //get the list of names on second page
    async function getNames() {
        let results = await db.manyOrNone('SELECT name FROM Users ORDER BY name_count DESC');
        return results;

    }
    async function clearNames() {
        let results = await db.none('Delete from Users');
    }

    async function deleteOne(name) {
        let getname = await db.manyOrNone('DELETE FROM Users WHERE id = (SELECT id from Users where name = $1) returning *', [name])

    }

    return {
        getNames,
        getCounter,
        clearNames,
        objectAdd,
        personCounter,
        deleteOne
    }
}
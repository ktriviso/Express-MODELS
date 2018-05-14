const db = require('../config/dbConfig.js')

// makeOne(pizzaData){
//    const queryPromise = db.one(`
//         INSERT INTO pizza (id, flavor, description, location)
//         VALUES (
//             id = $/id/,
//             flavor = $/flavor/,
//             location = $/location/,
//             description = $/description/
//         )
//         RETURING id
//     `, pizzaData);
// return queryPromise
// }

// Write your model in this file!
module.exports = {
    // Get all
    findAll(){
        return db.many(`
            SELECT *
            FROM pizza
        `);
    },
    // Get one
    findOne(id){
        return db.one(`
            SELECT *
            FROM pizza
            WHERE id = $1
        `, id)
    },
    // Create
    makeOne(pizzaData){
        db.one(`
            INSERT INTO pizza (id, flavor, description, location)
            VALUES (
                id = $/id/,
                flavor = $/flavor/,
                location = $/location/,
                description = $/description/
            )
            RETURING id
        `, pizzaData);
    },
    save(pizzaData){
        db.one(`
            INSERT INTO pizza (flavor, description, location)
            VALUES (
                flavor = $/flavor/,
                location = $/location/,
                description = $/description/
            )
            RETURING *
        `,pizzaData);
    },
    destroy(id){
        return db.none(`
            DELETE FROM pizza
            WHERE id = $1
        `, id)
    }
};

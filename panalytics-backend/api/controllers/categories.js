
const db = require('../../postgres/connection');

const categories = async (req, res, next) => {
    try {
        let result = await db.query(`select * from categories`);
        res.status(200).json(result.rows);
    } catch (err) {
        const error = new Error('DB Error fetching time categories');
        error.statusCode = 500;
        next(err);
    }
}

module.exports = {categories};


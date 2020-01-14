
const db = require('../');

const services = async (req, res, next) => {
    try {
        let result = await db.query(`select * from services`);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        const error = new Error('DB Error fetching time slots');
        error.statusCode = 500;
        next(err);
    }
}

module.exports = {services};
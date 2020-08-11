import { bool } from 'chance';

module.exports = (_req, res) => {
    res.status(200).json({status: 'ok', data: bool()});
};
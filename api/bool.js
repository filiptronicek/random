import { bool } from 'chance';

module.exports = (_req, res) => {
    res.status(200).send({status: 'ok', data: bool()});
};
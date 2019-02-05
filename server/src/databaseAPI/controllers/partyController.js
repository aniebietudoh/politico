import uuidv4 from 'uuid/v4';
import db from '../models/query';

const Party = {
  async createParty(req, res) {
    const text = `INSERT INTO
      parties(id, party_name, party_address, party_logo)
      VALUES($1, $2, $3, $4)
      returning *`;
    const values = [
      uuidv4(),
      req.body.partyName,
      req.body.partyAddress,
      req.body.partyLogo,
    ];

    try {
      const { rows } = await db.query(text, values);
      return res.status(201).send(rows[0]);
    } catch(error) {
      return res.status(400).send(error);
    }
  },
 async getAllParty(req, res) {
    const findAllQuery = 'SELECT * FROM parties';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch(error) {
      return res.status(400).send(error);
    }
  },
}

export default Party;
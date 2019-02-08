import uuidv4 from 'uuid/v4';
import db from '../models/query';
import Helper from '../helpers/helper';

const Office = {
  async createOffice(req, res) {
  if (!req.body.name || !req.body.type) {
      return res.status(400).send({ status: 400, 'Error': 'Some details are missing'});
    }
     if (!isNaN(req.body.name) || !isNaN(req.body.type) || req.body.name.length < 3 || req.body.type.length < 3  ) {
      return res.status(400).send({ status: 400, 'Error': 'Please enter valid details' });
    }
    const text = `INSERT INTO
      offices(id, name, type)
      VALUES($1, $2, $3)
      returning *`;
    const values = [
      uuidv4(),
      Helper.trimString(req.body.name),
      Helper.trimString(req.body.type)
    ];

    try {
      const { rows } = await db.query(text, values);
      return res.status(201).send({
        status: 201,
        data: [rows[0]]
      });
    } catch(error) {
      return res.status(400).send({status: 400, "error":"Bad Request"});
    }
  },
 async getAllOffice(req, res) {
    const findAllQuery = 'SELECT * FROM offices';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ 
        status: 201,
        data: rows 
      });
    } catch(error) {
      return res.status(400).send({status: 400, "error":"Cannot get office"});
    }
  },
  async getOneOffice(req, res) {
    const text = 'SELECT * FROM offices WHERE id = $1';
    try {
      const { rows } = await db.query(text, [req.params.id]);
      if (!rows[0]) {
        return res.status(404).send({status: 404, 'message': 'Office not found'});
      }
      return res.status(200).send(rows[0]);
    } catch(error) {
      return res.status(400).send(error)
    }
  }
}

export default Office;

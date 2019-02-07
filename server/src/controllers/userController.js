import uuidv4 from 'uuid/v4';
import db from '../models/query';
import Helper from '../helpers/helper';

const User = {
  async create(req, res) {
    if (!req.body.firstname || !req.body.email || !req.body.password) {
      return res.status(400).send({ status: 400, 'Error': 'Name or email is missing'});
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400).send({ status: 400, 'Error': 'Please enter a valid email address' });
    }
    if (isNaN(req.body.phoneNumber) || req.body.phoneNumber.length < 8) {
      return res.status(400).send({ status: 400, 'Error': 'Please enter a valid phone number' });
    }
    const hashPassword = Helper.hashPassword(req.body.password);

    const createQuery = `INSERT INTO
      users(id, firstname, lastname, othername, email, phoneNumber, passportUrl, isAdmin, password)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
      returning *`;
    const values = [
      uuidv4(),
      Helper.trimString(req.body.firstname),
      Helper.trimString(req.body.lastname),
      Helper.trimString(req.body.othername),
      req.body.email,
      Helper.makeInteger(req.body.phoneNumber),
      req.body.passportUrl,
      false,
      hashPassword
    ];

    try {
      const { rows } = await db.query(createQuery, values);
      const token = Helper.generateToken(rows[0].id);
      return res.status(201).header('x-auth-header', token).send({ 
      	status: 201, 
        data: [{ "token": token, "user": rows[0] }] });
    } catch(error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).send({status: 400, 'error': 'User with that EMAIL already exist' })
      }
      return res.status(400).send(error);
    }
  },

  async login(req, res) {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({status: 400, 'error': 'Name or email is missing'});
    }
    if (!Helper.isValidEmail(req.body.email)) {
      return res.status(400).send({ status: 400, 'error': 'Please enter a valid email address' });
    }
    const text = 'SELECT * FROM users WHERE email = $1';
    try {
      const { rows } = await db.query(text, [req.body.email]);
      if (!rows[0]) {
        return res.status(400).send({status: 400, 'error': 'The credentials you provided is incorrect'});
      }
      if(!Helper.comparePassword(rows[0].password, req.body.password)) {
        return res.status(400).send({ status: 400, 'error': 'The credentials you provided is incorrect' });
      }
      const token = Helper.generateToken(rows[0].id);
      return res.status(200).header('x-auth-header', token).send({ token });
    } catch(error) {
      return res.status(400).send(error)
    }
  }
}

export default User;

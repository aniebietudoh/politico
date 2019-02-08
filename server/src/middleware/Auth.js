import jwt from 'jsonwebtoken';
import db from '../models/query';

const Auth = {
  async verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if(!token) {
      return res.status(400).send({ status: 401, 'error': 'You are not authorized to view this page' });
    }
    try {
      const decoded = await jwt.verify(token, process.env.SECRET);
      const text = 'SELECT * FROM users WHERE id = $1';
      const { rows } = await db.query(text, [decoded.userId]);
      if(!rows[0]) {
        return res.status(400).send({ status: 400, 'error': 'The token you provided is invalid' });
      }
      req.user = { id: decoded.userId };
     // req.role = { isAdmin: decoded.role }
      next();
    } catch(error) {
      return res.status(400).send(error);
    }
  }
}
export default Auth;

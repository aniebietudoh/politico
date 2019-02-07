import Auth from '../middleware/Auth';
import Party from '../controllers/partyController';

export default app => {
  app.post('/api/v1/parties', Auth.verifyToken, Party.createParty);
  app.get('/api/v1/parties', Auth.verifyToken, Party.getAllParty);
  app.get('/api/v1/parties/:id', Auth.verifyToken, Party.getOneParty);
  app.put('/api/v1/parties/:id', Auth.verifyToken, Party.updateParty);
  app.delete('/api/v1/parties/:id', Auth.verifyToken, Party.deleteParty);

};
import Party from '../controllers/partyController';

export default app => {
  app.post('/api/v1/parties', Party.createParty);
  app.get('/api/v1/parties', Party.getAllParty);
  app.get('/api/v1/parties/:id', Party.getOneParty);
  app.patch('/api/v1/parties/:id', Party.updateParty);
  app.delete('/api/v1/parties/:id', Party.deleteParty);
	
};

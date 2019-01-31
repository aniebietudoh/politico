import Office from '../controllers/officeController';

export default app => {
  app.post('/api/v1/offices', Office.createOffice);	
  app.get('/api/v1/offices', Office.getAllOffice);
};

import Office from '../controllers/officeController';

module.exports = (app) => {
  app.post('/api/v1/offices', Office.createOffice);	
};

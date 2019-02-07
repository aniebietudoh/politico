import Auth from '../middleware/Auth';
import Office from '../controllers/officeController';

export default app => {
app.post('/api/v1/offices', Auth.verifyToken, Office.createOffice);
app.get('/api/v1/offices', Auth.verifyToken, Office.getAllOffice);
app.get('/api/v1/offices/:id', Auth.verifyToken, Office.getOneOffice);
};
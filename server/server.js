import express from 'express';
import Party from './src/controllers/partyController';
import Office from './src/controllers/officeController';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to politico API' }));


app.post('/api/v1/parties', Party.createParty);
app.get('/api/v1/parties', Party.getAllParty);
app.get('/api/v1/parties/:id', Party.getOneParty);
app.patch('/api/v1/parties/:id', Party.updateParty);
app.delete('/api/v1/parties/:id', Party.deleteParty);

app.post('/api/v1/offices', Office.createOffice);
app.get('/api/v1/offices', Office.getAllOffice);
app.get('/api/v1/offices/:id', Office.getOneOffice);


app.listen(3000);
console.log('app running on port ', 3000);
export default app;

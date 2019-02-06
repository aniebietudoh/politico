import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import objectsAPI from './src/objectsAPI/controllers/officeController';
import databaseAPI from './src/databaseAPI/controllers/partyController';
import databaseAPIoffice from './src/databaseAPI/controllers/officeController';


dotenv.config();
const Party = process.env.TYPE === 'database' ? databaseAPI : objectsAPI;
const Office = process.env.TYPE === 'database' ? databaseAPIoffice : objectsAPI;
const app = express()

app.use(express.json())
app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to politico API' }));


app.post('/api/v1/parties', Party.createParty);
app.get('/api/v1/parties', Party.getAllParty);
app.get('/api/v1/parties/:id', Party.getOneParty);
app.patch('/api/v1/parties/:id', Party.updateParty);
//app.delete('/api/v1/parties/:id', Party.deleteParty);

// Routes for office
app.post('/api/v1/offices', Office.createOffice);
app.get('/api/v1/offices', Office.getAllOffice);
app.get('/api/v1/offices/:id', Office.getOneOffice);

app.listen(3000);
console.log('app running on port ', 3000);
export default app;

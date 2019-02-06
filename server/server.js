import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import objectsAPI from './src/objectsAPI/controllers/officeController';
import databaseAPI from './src/databaseAPI/controllers/partyController';
import databaseAPIoffice from './src/databaseAPI/controllers/officeController';
import dbUser from './src/databaseAPI/controllers/userController';
import Auth from './src/databaseAPI/middleware/Auth';


dotenv.config();
const Party = process.env.TYPE === 'database' ? databaseAPI : objectsAPI;
const Office = process.env.TYPE === 'database' ? databaseAPIoffice : objectsAPI;
const User = process.env.TYPE === 'database' ? dbUser : objectsAPI;
const app = express()

app.use(express.json())
app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to politico API' }));

// Routes for parties
app.post('/api/v1/parties', Auth.verifyToken, Party.createParty);
app.get('/api/v1/parties', Auth.verifyToken, Party.getAllParty);
app.get('/api/v1/parties/:id', Auth.verifyToken, Party.getOneParty);
app.patch('/api/v1/parties/:id', Auth.verifyToken, Party.updateParty);
app.delete('/api/v1/parties/:id', Auth.verifyToken, Party.deleteParty);

// Routes for office
app.delete('/api/v1/parties/:id', Auth.verifyToken, Party.deleteParty);
app.post('/api/v1/offices', Auth.verifyToken, Office.createOffice);
app.get('/api/v1/offices', Auth.verifyToken, Office.getAllOffice);
app.get('/api/v1/offices/:id', Auth.verifyToken, Office.getOneOffice);

// Routes for users
app.post('/api/v1/users', dbUser.create);
app.post('/api/v1/users/login', dbUser.login);

app.listen(3000);
console.log('app running on port ', 3000);
export default app;

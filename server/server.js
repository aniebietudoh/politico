import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import partyRoutes from './src/routes/partyRoute';
import officeRoutes from './src/routes/officeRoute';
import userRoutes from './src/routes/userRoute';


const port = process.env.PORT || 8000;
dotenv.config();
const app = express()

app.use(express.json())
app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to politico API' }));


app.listen(port);
console.log('app running on port ', 3000);

partyRoutes(app);
officeRoutes(app);
userRoutes(app);
export default app;

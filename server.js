import express from 'express';
import partyRoutes from './src/routes/partyRoute';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Welcome to Politico API' });
});

app.listen(3000);
console.log('app running on port ', 3000);

partyRoutes(app);
export default app;

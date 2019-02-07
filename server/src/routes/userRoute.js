import Auth from '../middleware/Auth';
import dbUser from '../controllers/userController';

export default app => {
	app.post('/api/v1/users', dbUser.create);
	app.post('/api/v1/users/login', dbUser.login);
};
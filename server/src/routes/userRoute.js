import Auth from '../middleware/Auth';
import dbUser from '../controllers/userController';

export default app => {
	app.post('/auth/signup', dbUser.create);
	app.post('/auth/login', dbUser.login);
};
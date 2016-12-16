
import Home from './views/Home'
import Me from './views/Me'
import Shoucang from './views/Shoucang'
import Setting from './views/Setting'

const routes = [
		{path: '/',component: Home},
		{path: '/Home',component: Home},
		{path: '/Me',component: Me},
		{path: '/Shoucang',component: Shoucang},
		{path: '/Setting',component: Setting}
	] 
export default routes;
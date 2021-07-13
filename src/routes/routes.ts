import { paths } from './paths';
import Inbox from '@material-ui/icons/Inbox';
import NotFound from '../components/NotFound';
import Landing from '../components/LandingFolder/Landing';
import Home from '../components/HomeFolder/Home';

import { rolesName } from './roles';
import Statistics from '../components/StatisticsFolder/Statistics';
import LogIn from '../components/LogInFolder/LogIn';
import React from 'react';

const { admin, user } = rolesName;

interface Route {
	private: boolean;
	component: React.ComponentType;
	route?: string;
	name?: string;
	icon?: React.ComponentType;
	inLayout?: boolean;
	roles?: Array<string>;
}

export const routes: Array<Route> = [
	{
		route: paths.index,
		name: 'Inicio',
		icon: Inbox,
		inLayout: true,
		component: Landing,
		private: false,
	},
	{
		route: paths.login,
		name: 'Login',
		component: LogIn,
		private: false,
	},
	{
		route: paths.home,
		component: Home,
		private: true,
		inLayout: true,
		roles: [user, admin],
	},
	{
		route: paths.statistics,
		component: Statistics,
		private: true,
		inLayout: true,
		roles: [admin],
	},
	{
		component: NotFound,
		private: false,
	},
];

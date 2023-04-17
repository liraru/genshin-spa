import { IMenuItem } from '../interfaces/menu.interface';
import { ROUTES } from './routes.constant';

export const MENU: IMenuItem[] = [
  {
    key: 'MENU.DASHBOARD',
    route: ROUTES.DASHBOARD,
    icon: ''
  },
  {
    key: 'MENU.RESIN_PLAN',
    route: ROUTES.RESIN_PLAN,
    icon: ''
  },
  {
    key: 'MENU.SAVINGS',
    route: ROUTES.SAVINGS,
    icon: ''
  },
  {
    key: 'MENU.TEAMS',
    route: ROUTES.TEAMS,
    icon: ''
  },
  {
    key: 'MENU.WEEKLY_PLANNING',
    route: ROUTES.WEEKLY_PLANNING,
    icon: ''
  },
  {
    key: 'MENU.WISH_HISTORY',
    route: ROUTES.WISH_HISTORY,
    icon: ''
  }
];

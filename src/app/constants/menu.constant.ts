import {
  faCalendarWeek,
  faCertificate,
  faChartSimple,
  faClockRotateLeft,
  faPeopleGroup,
  faTrowelBricks
} from '@fortawesome/free-solid-svg-icons';
import { IMenuItem } from '../interfaces/menu.interface';
import { ROUTES } from './routes.constant';

export const MENU: IMenuItem[] = [
  {
    key: 'MENU.DASHBOARD',
    route: ROUTES.DASHBOARD,
    icon: faChartSimple
  },
  {
    key: 'MENU.RESIN_PLAN',
    route: ROUTES.RESIN_PLAN,
    icon: faTrowelBricks
  },
  {
    key: 'MENU.SAVINGS',
    route: ROUTES.SAVINGS,
    icon: faCertificate
  },
  {
    key: 'MENU.TEAMS',
    route: ROUTES.TEAMS,
    icon: faPeopleGroup
  },
  {
    key: 'MENU.WEEKLY_PLANNING',
    route: ROUTES.WEEKLY_PLANNING,
    icon: faCalendarWeek
  },
  {
    key: 'MENU.WISH_HISTORY',
    route: ROUTES.WISH_HISTORY,
    icon: faClockRotateLeft
  }
];

import {
  faCalendarWeek,
  faCertificate,
  faChartSimple,
  faClock,
  faClockRotateLeft,
  faLayerGroup,
  faPeopleGroup,
  faPersonRays,
  faTrowelBricks
} from '@fortawesome/free-solid-svg-icons';
import { ROUTES } from 'src/app/constants/routes.constant';
import { IMenuItem } from 'src/app/interfaces/menu.interface';

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
    key: 'MENU.OWNED_CHARACTERS',
    route: ROUTES.OWNED_CHARACTERS,
    icon: faPersonRays
  },
  {
    key: 'MENU.ABYSS_RECORDS',
    route: ROUTES.ABYSS_RECORDS,
    icon: faLayerGroup
  },
  {
    key: 'MENU.TIMERS',
    route: ROUTES.TIMERS,
    icon: faClock
  },
  {
    key: 'MENU.WISH_HISTORY',
    route: ROUTES.WISH_HISTORY,
    icon: faClockRotateLeft
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
  }
];

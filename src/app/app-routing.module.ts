import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './constants/routes.constant';

const routes: Routes = [
  {
    path: ROUTES.DASHBOARD,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: ROUTES.RESIN_PLAN,
    loadChildren: () => import('./modules/resin-plan/resin-plan.module').then((m) => m.ResinPlanModule)
  },
  {
    path: ROUTES.SAVINGS,
    loadChildren: () => import('./modules/savings/savings.module').then((m) => m.SavingsModule)
  },
  {
    path: ROUTES.TEAMS,
    loadChildren: () => import('./modules/teams/teams.module').then((m) => m.TeamsModule)
  },
  {
    path: ROUTES.WEEKLY_PLANNING,
    loadChildren: () =>
      import('./modules/weekly-planning/weekly-planning.module').then((m) => m.WeeklyPlanningModule)
  },
  {
    path: ROUTES.WISH_HISTORY,
    loadChildren: () => import('./modules/wish-history/wish-history.module').then((m) => m.WishHistoryModule)
  },
  {
    path: ROUTES.ABYSS_RECORDS,
    loadChildren: () =>
      import('./modules/abyss-records/abyss-records.module').then((m) => m.AbyssRecordsModule)
  },
  {
    path: ROUTES.OWNED_CHARACTERS,
    loadChildren: () =>
      import('./modules/owned-characters/owned-characters.module').then((m) => m.OwnedCharactersModule)
  },
  {
    path: ROUTES.TIMERS,
    loadChildren: () => import('./modules/timers/timers.module').then((m) => m.TimersModule)
  },
  { path: '**', redirectTo: ROUTES.DASHBOARD, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

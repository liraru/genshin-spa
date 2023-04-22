import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbyssRecordsComponent } from 'src/app/modules/abyss-records/abyss-records/abyss-records.component';

const routes: Routes = [{ path: '', component: AbyssRecordsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbyssRecordsRoutingModule {}

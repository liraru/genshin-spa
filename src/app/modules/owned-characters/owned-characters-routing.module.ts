import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnedCharactersComponent } from 'src/app/modules/owned-characters/owned-characters/owned-characters.component';

const routes: Routes = [{ path: '', component: OwnedCharactersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnedCharactersRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OwnedCharactersRoutingModule } from 'src/app/modules/owned-characters/owned-characters-routing.module';
import { OwnedCharactersComponent } from './owned-characters/owned-characters.component';

@NgModule({
  declarations: [OwnedCharactersComponent],
  imports: [CommonModule, OwnedCharactersRoutingModule]
})
export class OwnedCharactersModule {}

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Accueil } from './accueil.page';

import { AccueilRoutingModule } from './accueil-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AccueilRoutingModule,

  ],
  declarations: [Accueil],
})
export class AccueilModule {}

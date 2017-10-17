import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
	declarations: [],
  imports: [
    IonicModule,
    MomentModule,
    PipesModule
  ],
	exports: [],
  entryComponents: []
})
export class ComponentsModule {}

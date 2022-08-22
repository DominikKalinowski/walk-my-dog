import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MyDogsFeatureComponent} from "./my-dogs-feature.component";

const routes: Routes = [
  {
    path: '',
    component: MyDogsFeatureComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
  ],
  entryComponents: []
})
export class MyDogsFeatureModule {
}

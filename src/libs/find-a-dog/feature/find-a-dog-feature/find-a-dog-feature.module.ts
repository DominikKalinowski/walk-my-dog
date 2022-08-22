import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FindADogFeatureComponent} from "./find-a-dog-feature.component";

const routes: Routes = [
  {
    path: '',
    component: FindADogFeatureComponent
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
export class FindADogFeatureModule {
}

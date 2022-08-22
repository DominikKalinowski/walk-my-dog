import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../libs/home/ui/home/home.component';
import {MyDogsFeatureComponent} from "../libs/my-dogs/feature/my-dogs-feature/my-dogs-feature.component";

// @TODO: 12) Użyj guard'a na odpowiednich ścieżkach
const routes: Routes = [
  // @TODO: 3) Zadeklaruj scieżki
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'my-dogs',
    loadChildren: () => import('../libs/my-dogs/feature/my-dogs-feature/my-dogs-feature.module')
      .then(m => m.MyDogsFeatureModule)
  },

  {
    path: 'find-a-dog',
    loadChildren: () => import('../libs/find-a-dog/feature/find-a-dog-feature/find-a-dog-feature.module')
      .then(m => m.FindADogFeatureModule)
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

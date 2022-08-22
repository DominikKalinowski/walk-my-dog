import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../libs/home/ui/home/home.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { FindADogFeatureComponent } from '../libs/find-a-dog/feature/find-a-dog-feature/find-a-dog-feature.component';
import { MyDogsFeatureComponent } from '../libs/my-dogs/feature/my-dogs-feature/my-dogs-feature.component';

// @TODO: 12) Użyj guard'a na odpowiednich ścieżkach
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'find-a-dog',
    canActivate: [LoggedInGuard],
    loadChildren: () =>
      import(
        '../libs/find-a-dog/feature/find-a-dog-feature/find-a-dog-feature.component'
      ).then((m) => m.FindADogFeatureComponentModule),
  },
  {
    path: 'my-dogs',
    canActivate: [LoggedInGuard],
    loadChildren: () =>
      import(
        '../libs/my-dogs/feature/my-dogs-feature/my-dogs-feature.component'
      ).then((m) => m.MyDogsFeatureComponentModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

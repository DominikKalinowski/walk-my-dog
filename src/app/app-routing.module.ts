import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../libs/home/ui/home/home.component';
import { LoggedInGuard } from './guards/logged-in.guard';

// @TODO: 12) Użyj guard'a na odpowiednich ścieżkach
const ROUTES: Routes = [
  {path: 'my-dogs', canLoad:[LoggedInGuard], loadChildren: () => import('src/libs/my-dogs/feature/my-dogs-feature/my-dogs-feature.component').then(m => m.MyDogsFeatureComponentModule)},
  {path: 'find-a-dog', canLoad:[LoggedInGuard], loadChildren: () => import('src/libs/find-a-dog/feature/find-a-dog-feature/find-a-dog-feature.component').then(m => m.FindADogFeatureComponentModule)},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

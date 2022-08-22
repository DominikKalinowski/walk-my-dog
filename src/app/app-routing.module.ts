import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindADogFeatureComponent } from 'src/libs/find-a-dog/feature/find-a-dog-feature/find-a-dog-feature.component';
import { MyDogsFeatureComponent } from 'src/libs/my-dogs/feature/my-dogs-feature/my-dogs-feature.component';
import { HomeComponent } from '../libs/home/ui/home/home.component';
import { LoggedInGuard } from './guards/logged-in.guard';

// @TODO: 12) Użyj guard'a na odpowiednich ścieżkach
const routes: Routes = [
  // @TODO: 3) Zadeklaruj scieżki
  {path:'my-dogs',component:MyDogsFeatureComponent},
  {path:'find-a-dog',component:FindADogFeatureComponent},
  {path:'',component:HomeComponent},
  //nie łączę ich razem, chociaż logika dała by ten sam wynik
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

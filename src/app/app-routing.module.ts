import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../libs/home/ui/home/home.component";

// @TODO: 12) Użyj guard'a na odpowiednich ścieżkach
const routes: Routes = [

  {
    path: "my-dogs",
    loadChildren: () => import("../libs/my-dogs/feature/my-dogs-feature/my-dogs-feature.component").then(mod => mod.MyDogsFeatureComponentModule)
  },
  {
    path: "find-a-dog",
    loadChildren: () => import("../libs/find-a-dog/feature/find-a-dog-feature/find-a-dog-feature.component").then(mod => mod.FindADogFeatureComponentModule)
  },
  {
    path: "",
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../libs/home/ui/home/home.component';
import { LoggedInGuard } from './guards/logged-in.guard';

// @TODO: 12) Użyj guard'a na odpowiednich ścieżkach
const routes: Routes = [
  // @TODO: 3) Zadeklaruj scieżki
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCardComponent {}

@NgModule({
  declarations: [PageCardComponent],
  imports: [MatCardModule],
  exports: [PageCardComponent],
})
export class PageCardComponentModule {}

import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DateRange, DefaultMatCalendarRangeStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-gestiondeusuarios',
  imports: [MatCardModule, MatDatepickerModule],
  templateUrl: './gestiondeusuarios.component.html',
  styleUrl: './gestiondeusuarios.component.css',
  providers: [
    provideNativeDateAdapter(),
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GestiondeusuariosComponent {
  // selected = model<Date | null>(null);

  // selectedDateRange: DateRange<Date>;

  // _onSelectedChange(date: Date): void {
  //   if (
  //     this.selectedDateRange &&
  //     this.selectedDateRange.start &&
  //     date > this.selectedDateRange.start &&
  //     !this.selectedDateRange.end
  //   ) {
  //     this.selectedDateRange = new DateRange(
  //       this.selectedDateRange.start,
  //       date
  //     );
  //   } else {
  //     this.selectedDateRange = new DateRange(date, null);
  //   }
  // }
}

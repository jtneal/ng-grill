import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreakfastComponent } from './breakfast/breakfast.component';
import { DinnerComponent } from './dinner/dinner.component';
import { RemoteEntryComponent } from './entry.component';
import { LunchComponent } from './lunch/lunch.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          {
            path: 'breakfast',
            component: BreakfastComponent,
          },
          {
            path: 'lunch',
            component: LunchComponent,
          },
          {
            path: 'dinner',
            component: DinnerComponent,
          },
        ],
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}

import { Component } from '@angular/core';

@Component({
  selector: 'ng-grill-locations-entry',
  template: `
    <h2>Locations</h2>
    <p>Our locations system is currently undergoing scheduled maintenance.</p>
  `,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'ng-grill-order-entry',
  template: `
    <h2>Order</h2>
    <p>Our online order system is currently undergoing scheduled maintenance.</p>
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-markets',
  template: '<iframe class="frame" src="/markets/" title="Markets"></iframe>',
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
      .frame {
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
      }
    `,
  ],
})
export class MarketsComponent {}

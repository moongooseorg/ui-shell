import { Component } from '@angular/core';

@Component({
  selector: 'app-steganography',
  template: '<iframe class="frame" src="/steganography/" title="Steganography"></iframe>',
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
export class SteganographyComponent {}

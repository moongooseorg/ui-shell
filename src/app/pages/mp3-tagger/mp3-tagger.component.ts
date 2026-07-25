import { Component } from '@angular/core';

@Component({
  selector: 'app-mp3-tagger',
  template: '<iframe class="frame" src="/mp3-tagger/" title="MP3 Tagger"></iframe>',
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
export class Mp3TaggerComponent {}

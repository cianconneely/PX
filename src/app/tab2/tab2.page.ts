import { Component } from '@angular/core';
// Import the Browser plugin
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  // Opens a Browser Window to the designated URL
  async openBrowser() {
    await Browser.open({ url: 'https://google.com' });
  }

}

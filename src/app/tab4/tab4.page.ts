import { Component, OnInit } from '@angular/core';
// Import the Storage module
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  // The setup and punchline variables are used to store the joke data.
  setup: string = "";
  punchline: string = "";

  // Create a constructor to create an instance of the Storage class.
  constructor(private storage: Storage) {}

  async ngOnInit() {
    // The create method is called from the Storage class to create a new storage instance.
    
    await this.storage.create(); // Make sure the storage is ready
    // The get method is called from the Storage class to get the setup and punchline data from the storage, if does not exist, it will return the default value for either variable.
    this.setup = await this.storage.get('setup') || "No joke setup found";
    this.punchline = await this.storage.get('punchline') || "No punchline found";
  }

}

import { Component, OnInit } from '@angular/core';
import { jokeService } from './joke.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  // OnInit is a lifecycle hook that is called after Angular is initialized.

  // The setup and punchline variables are used to store the joke data.
  setup: string = "";
  punchline: string = "";

  // We must also use a constructor in the componenet. This creates an instance of the jokeService class.
  constructor(private serv: jokeService, private str:Storage) {}
  ngOnInit(): void { // This method is called after the constructor, and will be ran when the component is activated.
    // The getJoke method is called from the jokeService class, and the data is stored in the setup and punchline variables.
    this.serv.getJoke().subscribe((data) => {
      this.setup = data.setup;
      this.punchline = data.punchline;
    }
    );
  }
  // This method is used to save the joke to the storage.
  async onSave () {
    // The create method is called from the Storage class to create a new storage instance.
    await this.str.create();

    // The set method is called from the Storage class to save the joke data to the storage.
    await this.str.set('setup', this.setup);
    await this.str.set('punchline', this.punchline);

  }
}

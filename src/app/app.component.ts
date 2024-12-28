import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  // all the other standalone components created should be present in import array of app comp in order to use them.
  imports: [TestComponent,RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = "shubham";

  public sendMsg = "data is send from parent app comp to child test comp successfully";

  public message = "";


}

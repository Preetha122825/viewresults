import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewresultComponent } from './viewresult/viewresult.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ViewresultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'viewresult';
}

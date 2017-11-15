import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spotlightViewPin = '';
  constructor(private http: HttpClient){

  }
  // https://www.spotlight.com/8014-6727-0395
// https://www.spotlight.com/photo/~540x540/ffffff/loose/1/M153065.0103.jpg
  onSubmit() {
    this.http.get('https://www.spotlight.com/8014-6727-0395').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
    console.log(this.spotlightViewPin);
  }
}

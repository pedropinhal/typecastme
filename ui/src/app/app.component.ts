import {
  Component
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  HttpHeaders
} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spotlightViewPin = '';
  apiUrl = 'http://localhost:5000/api/spotlight';
  spotlightImage = '';
  json;
  constructor(private http: HttpClient) {

  }

  onSubmit() {
    var headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:5000');
    this.http.get(`${this.apiUrl}/${this.spotlightViewPin}`, {
      headers
    }).subscribe(data => {
      this.json = data;
      this.spotlightImage = this.json.url;
    });
   
  }
}

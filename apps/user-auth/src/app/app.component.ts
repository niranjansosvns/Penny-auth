import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@pennu-auth/api-interfaces';

@Component({
  selector: 'pennu-auth-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}

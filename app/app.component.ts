import { Component } from '@angular/core';
import { GithubService } from './services/github.services';
@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [GithubService]
})
export class AppComponent  { name = 'Angular'; }
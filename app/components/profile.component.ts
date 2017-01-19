import { Component } from '@angular/core';
import { GithubService } from '../services/github.services';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})

export class ProfileComponent {

  user:any[];

  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

}
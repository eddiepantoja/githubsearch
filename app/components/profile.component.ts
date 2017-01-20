import { Component, AfterViewInit } from '@angular/core';
import { GithubService } from '../services/github.services';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})

export class ProfileComponent {

  user:any;
  repos:any[];
  username:string;

  constructor(private _githubService: GithubService) {
    this.user = false;
  }

  ngAfterViewInit() {
    // Ensure material-design-lite effects are applied
    componentHandler.upgradeDom();
  }

  searchUser(){
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(repos);
    });
  }
}
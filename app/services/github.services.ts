import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
  private username:string;
  private client_id = '4c92807a2aa30bd5a331';
  private client_secret ='31daefcbbd2ebba461543591181454134d400154';

  constructor(private _http: Http){
    console.log('Github Service Ready...');
    this.username = 'eddiepantoja';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
    .map(res => res.json());
  }
}
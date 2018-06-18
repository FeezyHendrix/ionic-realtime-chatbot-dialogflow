import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


declare const Pusher: any;

@Injectable()
export class PusherProvider {
  public _pusher : any;

  constructor(public http: HttpClient) {
    this._pusher = new Pusher('a18c3dadaaf9cb21e5f9', {
      cluster: 'eu',
      encrypted: true
    });
  }


  getPusher(){
    return this._pusher;
  }

}

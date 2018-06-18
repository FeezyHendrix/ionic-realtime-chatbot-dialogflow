import { PusherProvider } from './../pusher/pusher';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ChatProvider {


  private _url = 'http://localhost:5000';

  private _channel : any;

  constructor(public http: HttpClient, private _pusher : PusherProvider) {
    this._channel = this._pusher.getPusher().subscribe('chat-bot');  
  }



  sendMessage( message : string) : Observable<any>{
    const param = {
      type: 'human',
      message,
    };
    return this.http.post(`${this._url}/message`, param)
  }

  getChannel(){
    return this._channel;
  }

}

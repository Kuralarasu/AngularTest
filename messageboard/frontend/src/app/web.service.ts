import {Http} from '@angular/http'; 
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Rx';

import {Injectable} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Injectable()
export class WebService{

    BASE_URL= 'http://localhost:12345/api';

    private messageStore = [];

    private messageSubject = new Subject();

    messages=this.messageSubject.asObservable();

    
    constructor(private http:Http,private sb:MdSnackBar){

        //this.getMessages();
    }

    getMessages(user)
        {
            user=user ? '/'+user:'';
            this.http.get(this.BASE_URL+'/messages').subscribe(response=>{
                this.messageStore=response.json();
                this.messageSubject.next(this.messageStore);
            },error=>{
                this.handleError("Unable to get messages");
            });
               
               }

   async postMessages(message)
    {
        try 
        {
            var response = await this.http.post(this.BASE_URL+'/message',message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } 
        catch (error) 
        {
            this.handleError("Unable to post message");
        }
       
}

    private handleError(error) {
        console.log(error);
        this.sb.open(error,'close',{duration:2000});
      }
}
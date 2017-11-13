import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()

export class AuthService {

    BASE_URL= 'http://localhost:12345/auth';
    NAME_KEY='name';
    TOKEN_KEY='token';

    constructor (private http:Http,private router:Router) {}

    get name(){
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

login(loginData){
    this.http.post(this.BASE_URL+'/login',loginData).subscribe(res=>
        {
            console.log(res.json());
            this.authenticate(res);
        });
}

    register(user){
        this.http.post(this.BASE_URL+'/register',user).subscribe(res=>
        {
           this.authenticate(res);
    });
    }

    logout()
    {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.NAME_KEY);

    }

    authenticate(res)
    {
        var authResponse=res.json();
        if(!authResponse.token)
        return;
        localStorage.setItem(this.TOKEN_KEY,authResponse.token)
        localStorage.setItem(this.NAME_KEY,authResponse.firstName)
        this.router.navigate(['/']);
    }
}

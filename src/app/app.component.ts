import { Component } from '@angular/core';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private fb: FacebookService) {

    console.log('Initializing Facebook');

    fb.init({
      appId: '353752978410402',
      version: 'v2.9'
    });

  }

  hideLogin: string;
  hideMain: string;
  hideLoad: string;

  getLoginStatus() {
    this.fb.getLoginStatus()
    .then((res: any) => {
      console.log(res.status);
      this.hideLoad = "true";
      if(res.status == "unknown"){
        this.hideMain = "true";
      } else if(res.status == "connected"){
        this.hideLogin = "true";
      }

    })
    .catch(console.error.bind(console));
  }

   logout(){
     this.fb.logout()
     .then(response => {
       console.log(response)
     });
   }

   loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);

        if(res.status == "connected"){
          console.log("hello");
          //this.router.navigate(['/test'])
          this.hideLogin = "true";
          this.hideMain = "false"
          //this.router.navigate(['/test'])
          location.reload();
        } else {
          this.hideLogin = "false";
          this.hideMain = "true";
        }

      })
      .catch(this.handleError);

  }

  private handleError(error) {
    console.error('Error processing action', error);
  }

  ngOnInit() {
    this.getLoginStatus()
  }

}

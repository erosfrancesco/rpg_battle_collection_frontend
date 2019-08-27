import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'


// import { AuthService } from '../services/utils/auth/auth.service'
// import { User } from '../user.model'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // standard user
  // private username :string = "jason"
  // private password :string = "darthvent"

  // dataSource: [User]


  constructor(public app: AppComponent) {
    // app.navTitle = "RPG Battle Framework"
    // app.fabButtonIcon = ""
    // app.showSpinner = false
  }

  ngOnInit(): void {
    // this.app.showSpinner = true

    // this.authService.getUsers().subscribe( users => {
    //     this.app.showSpinner = false
    //     this.dataSource = users;
    //   }
    // );
  }

  // loginAs(user: User) {
  //   // this.authService.authorize(user.username, this.password)
    
  // }

  // login() {
  //   //this.app.resources.AuthService.authorize(this.username, this.password, token => this.app.initializeServices(token, new User(this.username)) );
  // }

  // isNotAuthenticated() :boolean {
  //   return !Boolean(this.authService.isAuthenticated())
  // }

  // // saveSprites() {
  // //   this.app.getTopicService("Sprites").spriteService.getItems((err, items) => {
  // //     if (err) {
  // //       console.error(err)
  // //       return
  // //     }
  // //     this.saveData(items, "sprites");
  // //   })
  // // }

  // // // Function to download data to a file
  // // saveData(data, filename) :void {

  // //   filename = filename + ".json";
  // //   data = JSON.stringify(data)

  // //   const file = new Blob([data], {type: "json"});

  // //   // IE10+
  // //   if (window.navigator.msSaveOrOpenBlob) {
  // //     window.navigator.msSaveOrOpenBlob(file, filename);
  // //     return;
  // //   }

  // //   // Others
  // //   const a = document.createElement("a");
  // //   const url = URL.createObjectURL(file);
  // //   a.href = url;
  // //   a.download = filename;
  // //   document.body.appendChild(a);
  // //   a.click();

  // //   setTimeout(() => {
  // //       document.body.removeChild(a);
  // //       window.URL.revokeObjectURL(url);  
  // //   }, 0); 
  // // }
  

}

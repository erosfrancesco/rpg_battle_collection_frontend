import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  constructor(private appComponent: AppComponent) {
    appComponent.navTitle = "RPG Battle Framework"
    appComponent.fabButtonIcon = ""
  }

  ngOnInit() {
  }

  saveSprites() {
    this.appComponent.getTopicService("Sprites").spriteService.getItems((err, items) => {
      if (err) {
        console.error(err)
        return
      }
      this.saveData(items, "sprites");
    })
  }

  // Function to download data to a file
  saveData(data, filename) :void {

    filename = filename + ".json";
    data = JSON.stringify(data)

    const file = new Blob([data], {type: "json"});

    // IE10+
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file, filename);
      return;
    }

    // Others
    const a = document.createElement("a");
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0); 
  }
  

}

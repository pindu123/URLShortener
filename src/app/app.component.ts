import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgTinyUrlService} from 'ng-tiny-url';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urlShortener';
  url = new FormControl('')
  
  constructor(private tinyurl:NgTinyUrlService)
  {

  }

  nv:string="Shortened-url";
   onClick()
  {
    let v=this.url.value;
     let p="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})";

    if(v?.match(p))
    { 
      this.tinyurl.shorten(v).subscribe(res=>{
         this.nv=res;
         console.log(this.nv);
      }
      );
     }
    else{
      this.nv="not a valid url"
      console.log(this.nv)
     }
  }
}

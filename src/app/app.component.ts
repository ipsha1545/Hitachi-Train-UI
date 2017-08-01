import { Component, ViewEncapsulation } from '@angular/core';
import * as JQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {


  architecture: String = 'FUNCTIONAL';
  footerView: String = 'SPATIAL';
  startVideo : boolean = true;

  constructor() { }

  ngAfterViewInit() { 
    jQuery(document).ready(function ($) { 
    
     // for image zoom in out
    ($('img#spatialmap')as any).addpowerzoom({
      largeimage:"./assets/img/geo_map_hd.jpg"
    });

    ($('img#EdgeImage')as any).addpowerzoom({
      magnifiersize:[100, 100]
    });

    ($('img#CloudImage')as any).addpowerzoom({
      magnifiersize:[100, 100]
    });

    ($('img#FogImage')as any).addpowerzoom({
      magnifiersize:[100, 100]
    });

    ($('img#right-1')as any).addpowerzoom({
      magnifiersize:[100, 100]
    });

    $(".carousel-indicators").hide(); // hide bottom slide option
    

  });
}
/*getstart(){
var ul = document.getElementById(a);
a.onclick = getstartVideo();
}*/


getstartVideo(){
  this.startVideo = false;
  this.startVideo = true;
}
  getSoftwareArchitectureView(){

  //console.log('getSoftwareArchitectureView');
 
    jQuery(document).ready(function ($) { 
      
     
    ($('img#EdgeImage')as any).addpowerzoom({
      magnifiersize:[300, 300]
    });

    ($('img#CloudImage')as any).addpowerzoom({
      magnifiersize:[300, 300]
    });

    ($('img#FogImage')as any).addpowerzoom({
      magnifiersize:[300, 300]
    });

    ($('img#EdgeImage1')as any).addpowerzoom({
      magnifiersize:[300, 300]
    });
      $(".carousel-indicators").hide();
  });

  }

  architectureViewChange(view) {
    this.architecture = view;
  }
  footerViewChange(view) {
    this.footerView = view;
  }

}

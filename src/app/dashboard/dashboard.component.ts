import { Component } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'hitachi-train',
  templateUrl: './dashboard.component.html'
})

class DashboardComponent {
  architecture: String = 'FUNCTIONAL';
  footerView: String = 'SPATIAL';
 
  constructor() { }

ngAfterViewInit() {}

  architectureViewChange(view) {
    this.architecture = view;
  }
  footerViewChange(view) {
    this.footerView = view;
  }
}

export { DashboardComponent }

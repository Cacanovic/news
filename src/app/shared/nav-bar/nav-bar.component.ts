import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{

  constructor() { }
  mobileOpen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 768) {
      this.mobileOpen = false;
    }
  }

  toggleNav() {
    this.mobileOpen = !this.mobileOpen;
  }

}

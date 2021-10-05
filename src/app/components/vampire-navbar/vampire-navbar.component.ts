import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faBars, faMapMarkedAlt, faTimes, faTint, faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vampire-navbar',
  templateUrl: './vampire-navbar.component.html',
  styleUrls: ['./vampire-navbar.component.css']
})
export class VampireNavbarComponent implements OnInit {

  public bloodIcon: IconDefinition = faTint;
  public roadmapIcon: IconDefinition = faMapMarkedAlt;
  public walletIcon: IconDefinition = faWallet;
  public menuIcon: IconDefinition = faBars;
  public closeIcon: IconDefinition = faTimes;
  public pumpkinIcon: IconDefinition = {
    prefix: 'fas',
    iconName: 'jack-o-lantern',
    icon: [
      576,
      512,
      [],
      '',
      'M352 106.6V35.81c0-6.06-3.42-11.6-8.84-14.31l-39.6-19.8c-8.37-4.19-18.54-.32-22.01 8.37l-36.06 90.15C258.62 97.58 272.65 96 288 96c24.28 0 45.23 3.99 64 10.6zm143.3 46.53c-27-23.09-65.36-29.76-99.49-20.93 6.09 5.5 12.16 11.02 17.19 17.8 3.1 4.26 5.46 9.42 8.15 14.17C389.39 140.55 345.54 128 288 128s-101.39 12.54-133.15 36.17c2.69-4.75 5.04-9.91 8.15-14.17 5.02-6.78 11.1-12.29 17.19-17.8-34.13-8.83-72.49-2.16-99.49 20.93-107.6 92.01-107.6 241.72 0 333.74 38.63 33.03 100.82 33.34 140.12 1.25C238.65 503.51 260.72 512 288 512s49.35-8.49 67.19-23.88c39.3 32.09 101.49 31.78 140.12-1.25 107.59-92.01 107.59-241.73-.01-333.74zM320.85 278L362 211.33c2.33-4.57 8.6-4.42 12 0L415.15 278c1.66 3.25.9 10-6 10h-82.29c-6.9 0-7.7-6.69-6.01-10zm-160 0L202 211.33c2.33-4.57 8.6-4.42 12 0L255.15 278c1.66 3.25.9 10-6 10h-82.29c-6.9 0-7.7-6.69-6.01-10zm308.95 67.6c-5.96 17.04-12.75 28.62-18.7 36.96-9.38 12.94-21.34 23.8-35.19 32.99-.25-8.62-7.23-15.55-15.91-15.55h-16c-8.84 0-16 7.16-16 16v21.48c-23.46 6.88-50.16 10.52-79.98 10.52-29.85 0-56.56-3.65-80.02-10.51V416c0-8.84-7.16-16-16-16h-16c-8.7 0-15.71 6.97-15.92 15.63-13.71-9.08-25.53-19.79-34.75-32.51-6.12-8.59-13.02-20.31-19.04-37.46-4.87-13.89 10.56-26.15 23.24-18.67 32.94 19.44 70.39 32.74 110.47 38.84V384c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-14.26h.02c58.38 0 112.72-15.74 158.54-42.79 12.66-7.48 28.09 4.77 23.24 18.65z'
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  public openMobileNavbar() {
    const mobileMenu = document.getElementById('offcanvas-menu');
    mobileMenu?.classList.add('show');
  }

  public closeMobileNavbar() {
    const mobileMenu = document.getElementById('offcanvas-menu');
    mobileMenu?.classList.remove('show');
  }

}

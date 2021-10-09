import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VampireSwap';

  constructor() {
    document.addEventListener("click", (ev) => {
      if ((<HTMLElement>ev.target).closest(".modal") && !(<HTMLElement>ev.target).closest(".modal-box")) {
        (<HTMLElement>ev.target).closest(".modal")?.classList.remove('modal-open')
      }
    })
  }
}

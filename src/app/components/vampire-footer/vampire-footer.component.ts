import { Component, OnInit } from '@angular/core';
import { faMedium, faTelegram, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'vampire-footer',
  templateUrl: './vampire-footer.component.html',
  styleUrls: ['./vampire-footer.component.css']
})
export class VampireFooterComponent implements OnInit {

  public twitterIcon: IconDefinition = faTwitter;
  public telegramIcon: IconDefinition = faTelegram;
  public mediumIcon: IconDefinition = faMedium;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faChartLine, faCoins, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { IntroService } from 'src/app/services/intro.service';
import { Token } from 'src/app/utils/Token';

@Component({
  selector: 'stats-banner',
  templateUrl: './stats-banner.component.html',
  styleUrls: ['./stats-banner.component.css']
})
export class StatsBannerComponent implements OnInit {

  public tvlIcon: IconDefinition = faCoins;
  public marketCapIcon: IconDefinition = faChartLine;
  public circulatingIcon: IconDefinition = {
    prefix: 'fas',
    iconName: 'bat',
    icon: [
      576,
      512,
      [],
      '',
      'M558.44 129.7c-7.64-17.82-29.25-24.81-45.88-14.83L411.83 175.3 384 64l-42.67 32h-42.67L256 64l-27.83 111.3-100.74-60.44c-16.63-9.98-38.24-2.99-45.88 14.83L0 320l49.62-16.54c27.38-9.13 57.48 1.2 73.49 25.21L160 384l11.82-11.82c27.54-27.54 73.09-24.3 96.46 6.85L320 448l51.72-68.97c23.37-31.16 68.91-34.39 96.46-6.85L480 384l36.88-55.33c16.01-24.01 46.11-34.34 73.49-25.21L640 320l-81.56-190.3z'
    ]
  }

  public tokenData: Observable<Token> = new Observable();
  public burnedTokens: Observable<string> = new Observable();
  public totalSupply: Observable<string> = new Observable();

  constructor(private introService: IntroService) { 
    
  }

  ngOnInit(): void {
    this.tokenData = this.introService.getIntroInfo();
    this.burnedTokens = this.introService.getBurnedTokens();
    this.totalSupply = this.introService.getTotalSupply();
  }

}

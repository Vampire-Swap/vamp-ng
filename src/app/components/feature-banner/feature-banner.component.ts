import { Component, OnInit } from '@angular/core';
import { FeatureCard } from '../feature-card/FeatureCard';

@Component({
  selector: 'feature-banner',
  templateUrl: './feature-banner.component.html',
  styleUrls: ['./feature-banner.component.css']
})
export class FeatureBannerComponent implements OnInit {

  public featureCards: Array<FeatureCard> = [
    new FeatureCard("../../../assets/Cauldron.png", 'Blood Pools', 'Earn new tokens by staking VMP. Drain the victims and satiate your crypto needs.', 'Taste Now', '/pools'),
    new FeatureCard("../../../assets/Pumpkin.png", 'Pumpkin Patches', "Provide liquidity and grow your VMP coven. Don't forget to harvest your crops often.", 'Farm now', '/patches'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

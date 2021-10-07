import { Component, Input, OnInit } from '@angular/core';
import { FeatureCard } from './FeatureCard';

@Component({
  selector: 'feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  @Input()
  public featureCard: FeatureCard = new FeatureCard();

  constructor() { }

  ngOnInit(): void {
  }

}

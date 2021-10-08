import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VampireNavbarComponent } from './components/vampire-navbar/vampire-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroBannerComponent } from './components/intro-banner/intro-banner.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { StatsBannerComponent } from './components/stats-banner/stats-banner.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { FeatureBannerComponent } from './components/feature-banner/feature-banner.component';
import { VampireFooterComponent } from './components/vampire-footer/vampire-footer.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SumPipe } from './pipes/sum.pipe';
import { KformatPipe } from './pipes/kformat.pipe';
import { UsdPipe } from './pipes/usd.pipe';
import { EthformatPipe } from './pipes/ethformat.pipe';
import { DifPipe } from './pipes/dif.pipe';
import { MulPipe } from './pipes/mul.pipe';
import { PoolsComponent } from './views/pools/pools.component';
import { PoolBannerComponent } from './components/pool-banner/pool-banner.component';
import { PoolCardComponent } from './components/pool-card/pool-card.component';
import { AddressFmtPipe } from './pipes/address-fmt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VampireNavbarComponent,
    IntroBannerComponent,
    HomeViewComponent,
    StatsBannerComponent,
    FeatureCardComponent,
    FeatureBannerComponent,
    VampireFooterComponent,
    SumPipe,
    KformatPipe,
    UsdPipe,
    EthformatPipe,
    DifPipe,
    MulPipe,
    PoolsComponent,
    PoolBannerComponent,
    PoolCardComponent,
    AddressFmtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

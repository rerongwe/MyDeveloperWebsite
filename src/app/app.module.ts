import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';

import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { NovidadesComponent } from './views/novidades/novidades.component';
import { RoupasComponent } from './views/roupas/roupas.component';
import { ModaintimaComponent } from './views/modaintima/modaintima.component';
import { BelezaComponent } from './views/beleza/beleza.component';
import { EsportivoComponent } from './views/esportivo/esportivo.component';
import { CalcadosComponent } from './views/calcados/calcados.component';
import { PlussizeComponent } from './views/plussize/plussize.component';
import { JeansComponent } from './views/jeans/jeans.component';
import { PraiaComponent } from './views/praia/praia.component';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    NovidadesComponent,
    RoupasComponent,
    ModaintimaComponent,
    BelezaComponent,
    EsportivoComponent,
    CalcadosComponent,
    PlussizeComponent,
    JeansComponent,
    PraiaComponent,
    AcessoriosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    MatCardModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

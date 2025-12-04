import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './views/home/home.component';
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

const routes: Routes = [{
  path:"home",
  component: HomeComponent,
},{
  path:"novidades",
  component: NovidadesComponent
},{
  path:"roupas",
  component:RoupasComponent
},{
  path:"modaintima",
  component:ModaintimaComponent
},{
  path:"beleza",
  component:BelezaComponent
},{
  path:"esportivo",
  component:EsportivoComponent
},{
  path:"calcados",
  component:CalcadosComponent
},{
  path:"plussize",
  component:PlussizeComponent
},{
  path:"jeans",
  component:JeansComponent
},{
  path:"praia",
  component:PraiaComponent
},{
  path:"acessorios",
  component:AcessoriosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

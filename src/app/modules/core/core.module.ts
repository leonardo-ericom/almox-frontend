import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppPrimengModule } from '../app-primeng/app-primeng.module';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
    declarations: [
        LoginComponent,
        BarraSuperiorComponent,
        MainComponent,
        RodapeComponent,
    ],
    imports: [CommonModule, CoreRoutingModule, AppPrimengModule],
})
export class CoreModule {}

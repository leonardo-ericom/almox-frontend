import { CoreModule } from './modules/core/core.module';
import { UsuarioModule } from "./modules/usuario/usuario.module";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";

// Application Components
import { AppComponent } from "./app.component";
import { ConfirmationService, MessageService } from "primeng/api";
import { UsuarioService } from "./modules/usuario/usuario.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        UsuarioModule,
        CoreModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MessageService,
        ConfirmationService,
        UsuarioService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

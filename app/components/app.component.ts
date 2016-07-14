import {Component} from "@angular/core"
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button"
//import {MD_ICON_DIRECTIVES} from"@angular2-material/icon"
@Component({
    selector:"my-app",
    template:`<h1>Hello Angular 2</h1>
        <button md-button color="primary">Flat</button>
        <button md-raised-button class="btn1">Raised</button>
        <button md-icon-button>
            <md-icon class="md-24">Favourite</md-icon>
        </button>
    
    `,
    directives: [MD_BUTTON_DIRECTIVES]
})

export class AppComponent{
//test
}
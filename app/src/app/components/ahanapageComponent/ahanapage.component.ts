/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-ahanapage',
    templateUrl: './ahanapage.template.html'
})

export class ahanapageComponent extends NBaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {

    }

    first(){
        console.log("first")
    }
}

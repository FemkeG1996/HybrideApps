import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, Input} from '@angular/core';
import { gebruiker } from '../main/gebruiker';
import { GebruikerService } from '../gebruiker.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input() element:gebruiker = new gebruiker('','','','');
  constructor(private   GebruikerService : GebruikerService) { }
public verwijderGebr(id : any){
this.GebruikerService.deleteGebruiker(id);
}

}

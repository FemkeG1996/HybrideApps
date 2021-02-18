import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Recept } from '../recept';
import { ReceptenService } from '../recepten.service';

@Component({
  selector: 'app-receptform',
  templateUrl: './receptform.page.html',
  styleUrls: ['./receptform.page.scss'],
})
export class ReceptformPage implements OnInit {

  recept: Recept;
  context: string = 'insert';
  constructor(private rs: ReceptenService, private router: Router, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.paramMap.subscribe
      ((route: ParamMap) => {
        if ((route.get('id')) === 'nieuw') {
          this.recept = new Recept();
        }
        else {
          this.recept = this.rs.getRecept(route.get('id'));
          this.context = 'update';
        }
      })
  }
  opslaan() {
    if (this.context === 'insert') {
      this.rs.addRecept(this.recept);
    }
    else {
      this.rs.updateRecept(this.recept);
    }

    this.router.navigateByUrl('/recepten');
  }

}

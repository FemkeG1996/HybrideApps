import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HondenService } from '../honden.service';
import { IHond } from '../i-hond';

@Component({
  selector: 'app-hondedit',
  templateUrl: './hondedit.component.html',
  styleUrls: ['./hondedit.component.scss']
})
export class HondeditComponent implements OnInit {
  selectedHond: IHond;
  mode: string;
  constructor(private hs: HondenService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (route: ParamMap) => {
        if (route.get('mode') == 'update') {
          this.mode = 'update';
          this.hs.getHond(route.get('id'))
            .subscribe(
              data => {
                // this.selectedHond.naam = data['naam'];
                // this.selectedHond.ras = data['ras'];
                // this.selectedHond.kleur = data['kleur'];
                // this.selectedHond.inenting = data['inenting'];
                // this.selectedHond.geslacht = data['geslacht'];
                data['id'] = route.get('id');

                this.selectedHond = data;
                console.log(this.selectedHond)
              }
            )
        } else {
          this.mode = 'new';
          this.selectedHond = {
            naam: "",
            ras: "",
            geslacht: "",
            inenting: false,
            kleur: "",
            foto: "",
            bio: ""

          }
        }
      }
    )
  }

  onSubmit() {
    if (this.mode == 'update') {
      this.hs.updateHond(this.selectedHond).subscribe(data => {
        this.router.navigateByUrl('');
      });
    } else {
      this.hs.addHond(this.selectedHond).subscribe(data => {
        this.router.navigateByUrl('');
      });
    }
  }

}

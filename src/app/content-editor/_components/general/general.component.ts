import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GeneralService } from '../../_services/general.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  providers: [ GeneralService ]
})
export class GeneralComponent implements OnInit {

  fields: { label: string; controlName: string; }[] = [];
  form: FormGroup;
  loading = true;

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.generalService.getGeneralInfo().subscribe(generalInfo => {
      this.form.setValue(generalInfo);
      this.loading = false;
    }, error => {
      this.generalService.postGeneralInfo(this.form.value).subscribe();
    });
  }

  submitForm(): void {
    this.generalService.putGeneralInfo(this.form.value).subscribe();
  }

  private createForm() {
    this.fields = [
      { label: 'Nazwa', controlName: 'name' },
      { label: 'Tytuł', controlName: 'title' },
      { label: 'Opis stopki', controlName: 'footerDescription' },
      { label: 'Facebook link', controlName: 'facebookLink' },
      { label: 'Instagram link', controlName: 'instagramLink' },
      { label: 'Snapchat link', controlName: 'snapchatLink' },
      { label: 'Twitter link', controlName: 'twitterLink' }
    ];
    this.form = new FormGroup({
      id: new FormControl(),
      firstContent: new FormControl(),
      secondContent: new FormControl(),
    });
    this.fields.forEach(field => {
      this.form.addControl(field.controlName, new FormControl());
    });
  }
}

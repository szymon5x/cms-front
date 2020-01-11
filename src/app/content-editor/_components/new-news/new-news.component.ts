import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../_services/news.service';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.component.html',
  styleUrls: ['./new-news.component.scss'],
  providers: [ NewsService ]
})
export class NewNewsComponent implements OnInit {

  fields: { label: string; controlName: string; }[] = [];
  form: FormGroup;
  id: string;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newService: NewsService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.loading = true;
      this.newService.getNews(+this.id).subscribe(news => {
        Object.keys(news).forEach(key => {
          this.form.get(key).setValue(news[key]);
        });
        this.loading = false;
      });
    }

  }

  submitForm(createNew: boolean): void {
    if (this.id) {
      this.newService.putNews(+this.id, this.form.value).subscribe(() => {
        createNew ? this.form.reset() : this.router.navigate([ '/admin', 'news' ]);
      });
    } else {
      this.newService.postNews(this.form.value).subscribe(() => {
        createNew ? this.form.reset() : this.router.navigate([ '/admin', 'news' ]);
      });
    }
  }

  private createForm() {
    this.fields = [
      { label: 'Tytuł', controlName: 'title' },
    ];
    this.form = new FormGroup({
      content: new FormControl()
    });
    this.fields.forEach(field => {
      this.form.addControl(field.controlName, new FormControl());
    });
  }
}


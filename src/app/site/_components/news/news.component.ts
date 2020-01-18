import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../_services/site.service';
import { News } from '../../../content-editor/_models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsTable: News[];

  constructor(
    private siteService: SiteService
  ) { }

  ngOnInit() {
    this.siteService.getNews().subscribe(news => {
      this.newsTable = news;
    });
  }

}

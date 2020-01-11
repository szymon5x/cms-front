import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../_services/news.service';
import { News } from '../../_models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: [ './news.component.scss' ],
  providers: [ NewsService ]
})
export class NewsComponent implements OnInit {

  news: { description: string; id: number, endpoint: (string | number)[] }[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getNews();
  }

  deleteNews(id: number) {
    this.newsService.deleteNews(id).subscribe(() => this.getNews());
  }

  private getNews() {
    this.newsService.getNewsAll().subscribe((news: News[]) => {
      this.news = news.map(newss => {
        return {
          id: newss.id,
          description: `Tytył: ${newss.title} Zawartość: ${newss.content}`,
          endpoint: [ '/admin', 'new-news', newss.id ]
        };
      });
    });
  }
}

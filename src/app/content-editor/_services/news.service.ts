import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../_models';
import { endpoints } from '../../_core/misc/endpoints/endpoints';

@Injectable()
export class NewsService {
  constructor(
    private http: HttpClient
  ) { }

  getNewsAll(): Observable<News[]> {
    return this.http.get<News[]>(endpoints.create(endpoints.news));
  }

  getNews(id: number): Observable<News> {
    return this.http.get<News>(`${endpoints.create(endpoints.news)}/${id}/`);
  }

  postNews(news): Observable<News> {
    return this.http.post<News>(endpoints.create(endpoints.news), news);
  }

  putNews(id: number, news: News): Observable<News> {
    return this.http.put<News>(`${endpoints.create(endpoints.news)}/${id}/`, news);
  }

  deleteNews(id: number): Observable<null> {
    return this.http.delete<null>(`${endpoints.create(endpoints.news)}/${id}/`);
  }
}

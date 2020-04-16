import {Component, OnInit} from '@angular/core';
import {News} from "../models/News";
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-liste-news',
  templateUrl: './liste-news.component.html',
  styleUrls: ['./liste-news.component.css']
})
export class ListeNewsComponent implements OnInit {

  public listeNews: News[];

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.newsService.getToutesNews().subscribe((liste: News[]) => {
      this.listeNews = liste;
    });
  }

}

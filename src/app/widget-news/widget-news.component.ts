import { Component, OnInit } from '@angular/core';

import {PostsService} from '../posts.service';

@Component({
  selector: 'app-widget-news',
  templateUrl: './widget-news.component.html',
  styleUrls: ['./widget-news.component.css']
})
export class WidgetNewsComponent implements OnInit {

	posts:any = [];

  constructor(private postsService: PostsService) { }

  // API call to get list of Posts
  ngOnInit(): void {
  		this.postsService.getPosts().subscribe(data =>{
  			this.posts = data;
  		});
  }

}

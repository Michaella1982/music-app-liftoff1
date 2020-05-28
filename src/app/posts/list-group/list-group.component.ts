import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnInit, OnDestroy {
   posts: Post[] = [];
   private postsSub: Subscription;

   constructor(public postsService: PostsService) {}

   ngOnInit(){
     this.posts = this.postsService.getPosts();
     this.postsSub = this.postsService.getPostUpdateListener()
     .subscribe((posts: Post[]) => {
      this.posts = posts;

    });
   }
    ngOnDestroy(){
      this.postsSub.unsubscribe();
    }

 /* posts = [{
    title :'The Man Who Sold the World',
    artist: 'David Bowie',
    genre: 'Rock',
    content:'This is the first post\'s content!!'},

    {
      title :'Stankonia',
      artist: 'Outkast',
      genre: 'Hip Hop/Rap',
      content:'This is the second post\'s content!!'},

      {
        title :'Viva La Woman',
        artist: 'Cibo Matto',
        genre: 'Trip Hop - Electronica',
        content:'This is the third post\'s content!!'},



  ]*/ //dummy data for testing functionality of accordion^^//


}

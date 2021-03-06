import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
    .get<{message: string, posts: Post[]}>
     ('http://localhost:3000/api/posts')
    .pipe(map((postData) => {
     return postData.posts.map(post => {
       return {
         _id: post._id,
         title:post.title,
         artist: post.artist,
         genre: post.genre,
         content:post.content

       };
     });
    }))
    .subscribe((transformedPosts) => {
     this.posts =  transformedPosts;
     this.postsUpdated.next([...this.posts]);

    });
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  };

  addPost( title:string, artist:string, genre:string, content:string){
      const post: Post = {
        _id: null,
        title:title,
        artist:artist,
        genre:genre,
        content:content };
      this.http
      .post<{message: string}>('http://localhost:3000/api/posts', post)
        .subscribe(responseData => {
          console.log(responseData.message);
          this.posts.push(post);
          this.postsUpdated.next([...this.posts]);

        });
  }
  deletePost (postId: string) {
    this.http.delete("http://localhost:3000/api/posts/" + postId)
    .subscribe( () => {
      const updatedPosts = this.posts.filter( post =>post._id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }
}

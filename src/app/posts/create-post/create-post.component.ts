import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  newPost = "";
  enteredTitle= "";
  enteredArtist="";
  enteredGenre="";
  enteredContent="";

  constructor(public postsService: PostsService) {}


  onCreatePost(form: NgForm){
    if(form.invalid){
      return;
  }

   this.postsService.addPost(

     form.value.title,
     form.value.artist,
     form.value.genre,
     form.value.content

     );
     form.resetForm();

  }


}

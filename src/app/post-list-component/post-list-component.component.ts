import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
   @Input() postTitle: string;
   @Input() postContent: string ;
   @Input() postLoveIts: number;
   postDate= new Date();

   constructor() { }

  ngOnInit() {
  }

  getColor(){
   if (this.postLoveIts > 0){
      return 'green';
   }else if (this.postLoveIts < 0){
      return 'red';
    }return 'black';

   }
lovePlus(){
   this.postLoveIts += 1;
}
loveLess(){
   this.postLoveIts -= 1;
}

}

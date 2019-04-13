import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

     posts = [
      {
         title:'Premier post',
         content:'Premier essais pour voir si une première apparition est là.',
          loveIts: 2,
        },
        {
          title:'Deuxième post',
          content:'Deuxième essais pour voir si une première apparition est là.',
           loveIts: 0,
         },
         {
            title:'Troisième post',
            content:'Celui-ci et le troisième et dernier post du tableau. Par défaut il a 0 Love.',
             loveIts: 0,
           },
      ]
}

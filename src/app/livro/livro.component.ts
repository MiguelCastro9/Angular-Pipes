import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livro: any = {
    titulo: 'Angular Book',
    avaliacao: 4.54321,
    paginas: 300,
    preco: 44.99,
    lancamento: new Date(2022, 6, 9)
  };

  constructor() { }

  //Promise
  valorAsync1 = new Promise((resolve) => {
    setTimeout(() => resolve('Valor assíncrono - Promise'))
  });

  //Observable (programação reativa)
   valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => {
      observable.next('Valor assíncrono - Observable');
    });
  });

  ngOnInit(): void {

  }

}

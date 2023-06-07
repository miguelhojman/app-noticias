import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appNoticias';
  listNoticias: any[] = [];
  loading: boolean = false;
  constructor(private servicio: NoticiaService) {}

  buscarNews(param: any) {
    this.loading = true;
    this.listNoticias = []; //para limpíar la pantalla al hacer otra busqueda

    //lo meto en un setTimeOut para que tarde un poco y siempre tarde lo mismo
    //si no es muy brusco
    setTimeout(() => {
      this.servicio.getNoticias(param).subscribe((data) => {
        this.listNoticias = data.articles;
        this.loading = false;
      });
    }, 700);
  }
}

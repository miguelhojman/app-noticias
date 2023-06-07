import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ar';
  categorias: any[] = [
    { value: 'general', name: 'General' },
    { value: 'business', name: 'Negocios' },
    { value: 'entertainment', name: 'Entretenimiento' },
    { value: 'health', name: 'Salud' },
    { value: 'science', name: 'Ciencia' },
    { value: 'sports', name: 'Deportes' },
    { value: 'tecnology', name: 'Tecnología' },
  ];
  paises: any[] = [
    { value: 'ar', name: 'Argentina' },
    { value: 'br', name: 'Brasil' },
    { value: 'fr', name: 'Francia' },
    { value: 'hu', name: 'Hungría' },
    { value: 'mx', name: 'México' },
    { value: 'gb', name: 'Reino Unido' },
    { value: 'es', name: 'España' },
    { value: 'it', name: 'Italia' },
    { value: 'us', name: 'Estados Unidos' },
  ];

  ngOnInit(): void {}

  buscarNoticia(): void {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    };
    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}

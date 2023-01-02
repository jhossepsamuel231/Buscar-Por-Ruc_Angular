import { Component, OnInit } from '@angular/core';
// Importamos el servicio
import { SunatService } from 'src/app/services/sunat.service';

@Component({
  selector: 'app-buscar-ruc',
  templateUrl: './buscar-ruc.component.html',
  styleUrls: ['./buscar-ruc.component.css']
})
export class BuscarRucComponent implements OnInit {

  // Declaramos variable pública
  public empresa: any;

  // Declaramos una variable del servicio importado
  constructor(
    private sSunat: SunatService
  ) { }



  ngOnInit(): void {
  }

  // Creamos metodo para ejecutar api
  buscarRuc(ruc: string) {
    this.sSunat.buscarRuc(ruc).subscribe(r => {
      console.log("probando: ", r);
      if (!r.success) {
        alert(r.message);
        this.empresa.razonSocial = "";
      }
      else {
        this.empresa = r.result;
      }
    });
  }

}

import { Component } from '@angular/core';
import { Banda } from './banda';
@Component({
  selector: 'bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})
export class BandasComponent {

  datos: Array<any> = [
    {idEmpresas:[], empresas:[], idArtistas:[], artistas:[], op:[]}
  ]

  idEmpresas : String[] = ["1", "1", "2", "2", "3", "4", "4"];
  empresas : String[] = ["YouTube", "YouTube", "itunes", "itunes", "MICELULAR", "Local", "Local"];
  idArtistas : number[] = [100, 658, 115, 205, 326, 107, 401];
  artistas : String[] = ["NoFeedBack", "Shakira", "Cabas", "Beyonce", "Coldplay" ,"DrKrapula", "Juanes"];
  op : number[] = [10, 8, 6, 6, 8, 10, 2];

}
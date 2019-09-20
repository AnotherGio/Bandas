import { Component} from '@angular/core';

@Component({
  selector: 'disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent{

  data : Array <any> = [
    {artista:[],medio:[],ganancia:[]}
  ]

  artista : String[] = ["NoFeedBack", "Shakira", "Cabas", "Beyonce", "Coldplay" ,"DrKrapula", "Juanes"];
  medio : String [] = ["YouTube", "YouTube", "itunes", "itunes", "MICELULAR", "Local", "Local"];
  ganancia : String[] = ["5.00","4.00","2.40","2.40","1.60","80","16"]


}
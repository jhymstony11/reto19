import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {


  constructor(private userServices: UserserviceService){}

listado = new Array();

ngOnInit(){


  this.userServices.getUsersAllInterceptor().subscribe({
    next: (response: any) => {this.listado = response.body;
    console.log(response)},
    error: (e) => console.error(e),
    complete: () => console.info("La API devolcio todos los registros")
    });
  
  }
}


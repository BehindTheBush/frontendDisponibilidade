import { Component, OnInit } from '@angular/core';
import { Disponibilidade } from 'src/app/model/disponibilidade/disponibilidade';
import { DisponibilidadesService } from 'src/app/service/disponibilidades/disponibilidades.service';
import {DisponibilidadeDTO} from 'src/app/model/disponibilidade/DTO/disponibilidade-dto';


@Component({
  selector: 'app-disponibilidade-home',
  templateUrl: './disponibilidade-home.component.html',
  styleUrls: ['./disponibilidade-home.component.scss']
})
export class DisponibilidadeHomeComponent implements OnInit {

  _autorizadorMaisIndisp:DisponibilidadeDTO;
  _disponibilidadesAtuais:Disponibilidade[] = [];
  _disponibilidadesFiltro:Disponibilidade[] = [];
  _showDialog:boolean = false;
  _filtrarData:boolean = false;
  _autorizadoresOptions:any[]=[];
  _selectedAutorizador:any;
  _dataInicial:Date;
  _dataFinal:Date;


  constructor(
    public service:DisponibilidadesService
  ) { }

  ngOnInit(): void {

    this._autorizadoresOptions = [
      {name: 'AM'},
      {name: 'BA'},
      {name: 'CE'},
      {name: 'GO'},
      {name: 'MG'},
      {name: 'MS'},
      {name: 'MT'},
      {name: 'PE'},
      {name: 'PR'},
      {name: 'RS'},
      {name: 'SP'},
      {name: 'SVAN'},
      {name: 'SVRS'},
      {name: 'SVC-AN'},
      {name: 'SVC-RS'},
    ];
    this.service.getAutorizadorMaiorIndisponibilidade().subscribe((f)=>{
      this._autorizadorMaisIndisp = f;
    });

    this.service.getUltimosStatus().subscribe((f)=>{
      this._disponibilidadesAtuais = f;
    });
  }

  onClickFiltrar(){
    this._disponibilidadesFiltro = [];
    if(this._filtrarData){
      if(this._dataFinal != undefined  && this._dataInicial != undefined ){
        this.service.getStatusPorIntervalo(this._dataInicial, this._dataFinal).subscribe((f)=>{
          this._disponibilidadesFiltro = f;
        });
      }

    }else{
      if(this._selectedAutorizador != undefined){
        this.service.getUltimoStatusPorAutorizador(this._selectedAutorizador.name).subscribe((f)=>{
          this._disponibilidadesFiltro.push(f);
        });
      }
    }
  }

}

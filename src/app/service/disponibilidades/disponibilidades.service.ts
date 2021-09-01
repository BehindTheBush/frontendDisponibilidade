import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Disponibilidade } from 'src/app/model/disponibilidade/disponibilidade';
import {DisponibilidadeDTO} from 'src/app/model/disponibilidade/DTO/disponibilidade-dto';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DisponibilidadesService {

  _endpoint = "http://localhost:8080/api/disponibilidades";

  constructor(
    private http:HttpClient
  ) { }

  //Busca os ultimos status de disponibilidade de todos os estados
  getUltimosStatus():Observable<Disponibilidade[]>{
    return this.http.get<Disponibilidade[]>(this._endpoint + '/status')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  //Retorna o ultimo status do autorizador
  getUltimoStatusPorAutorizador(autorizador:string): Observable<Disponibilidade> {

    return this.http.get<Disponibilidade>(this._endpoint + '/status/estado?autorizador='+autorizador)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //Busca status por intervalo de data
  getStatusPorIntervalo(dataInicial:Date, dataFinal:Date): Observable<Disponibilidade[]> {
    let params = new HttpParams();

    params.append("data_inicial", dataInicial.toISOString());
    params.append("data_final", dataFinal.toISOString());

    return this.http.get<Disponibilidade[]>(this._endpoint + '/status/data?data_inicial='+dataInicial.toISOString()+'&data_final='+dataFinal.toISOString())
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  //pega autorizador com maior indisponibilidade
  getAutorizadorMaiorIndisponibilidade(): Observable<DisponibilidadeDTO> {

    return this.http.get<DisponibilidadeDTO>(this._endpoint + '/status/indisponibilidade')
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }



  //Tratamento de Erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = "Ocorreu um erro: "+ error.status+", " + "menssagem: "+ error.message;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}

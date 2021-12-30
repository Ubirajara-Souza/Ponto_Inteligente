import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CadastroPj } from '..';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';

@Injectable()
export class CadastroPjService {

  private readonly PATH: string = 'cadastrar-pj';

  constructor(private http: HttpClient) {}

  cadastrar(cadastroPj: CadastroPj): Observable<any> {
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPj);
  }
}

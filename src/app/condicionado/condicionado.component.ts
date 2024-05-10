import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-condicionado',
  templateUrl: './condicionado.component.html',
  styleUrls: ['./condicionado.component.css']
})
export class CondicionadoComponent {

  favA: number | undefined;
  posA: number | undefined;
  favB: number | undefined;
  posB: number | undefined;
  res: number | undefined;
  condDataList: any[] = []; // Variável para armazenar os dados do JSON

  constructor(private http: HttpClient) {}



  ngOnInit() {
    // Atualiza os dados pela primeira vez ao inicializar o componente
    this.updateData();
    
  }

  updateData() {
    // Faz uma requisição GET para obter os dados do JSON
    this.http.get<any[]>('http://localhost:3001/cond').subscribe(
      response => {
        console.log('Dados recebidos:', response);
        this.condDataList = response; // Atualiza a variável condDataList com os dados recebidos
      },
      error => {
        console.error('Erro ao buscar os dados:', error);
      }
    );
  }

  submitForm() {
    if (this.favA !== undefined && this.posA !== undefined && this.favB !== undefined && this.posB !== undefined) {
      const data = {
        favA: this.favA,
        posA: this.posA,
        favB: this.favB,
        posB: this.posB
      };

      const url = 'http://localhost:3001/cond';

      this.http.post<any>(url, data).subscribe(
        response => {
          console.log('Resposta do servidor:', response);
          if (response.res !== undefined) {
            this.res = response.res;  // Atualizar o valor de 'res'
            this.updateData();
          } else {
            console.error('Resposta do servidor incompleta ou inválida.');
          }
        },
        error => {
          console.error('Erro ao enviar os dados:', error);
        }
      );
    } else {
      console.error('Por favor, preencha todos os campos necessários.');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-telainicial',
  templateUrl: './telainicial.component.html',
  styleUrls: ['./telainicial.component.css']
})
export class TelainicialComponent implements OnInit {

  fav: string | undefined;
  pos: string | undefined;
  res: string | undefined;
  jsonData: any[] = []; // Variável para armazenar os dados do JSON

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Atualiza os dados pela primeira vez ao inicializar o componente
    this.updateData();
    
  }

  updateData() {
    // Faz uma requisição GET para obter os dados do JSON
    this.http.get<any[]>('http://localhost:3000/data').subscribe(
      response => {
        console.log('Dados recebidos:', response);
        this.jsonData = response; // Atualiza a variável jsonData com os dados recebidos
      },
      error => {
        console.error('Erro ao buscar os dados:', error);
      }
    );
  }

  submitForm() {
    const data = {
      fav: this.fav,
      pos: this.pos
    };

    const url = 'http://localhost:3000/data';

    this.http.post<any>(url, data).subscribe(
      response => {
        console.log('Resposta do servidor:', response);
        // Atualiza o valor de 'res' com o resultado mais recente
        this.res = response.res;
        // Após enviar o formulário com sucesso, atualiza os dados da tabela
        this.updateData();
      },
      error => {
        console.error('Erro ao enviar os dados:', error);
      }
    );
  }
}

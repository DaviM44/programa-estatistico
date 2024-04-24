import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interface para os dados da probabilidade simples
export interface Data {
  fav: number;
  pos: string;
  res: string;
  id:string;
}

// Interface para os dados da probabilidade condicional
export interface Data2 {
  probA: number;
  probB: number;
  probAB: number;
  resultado: number;
}

@Component({
  selector: 'app-telainicial',
  templateUrl: './telainicial.component.html',
  styleUrls: ['./telainicial.component.css']
})
export class TelainicialComponent implements OnInit {

  fav: string | undefined;
  pos: string | undefined;
  res: string | undefined;
  id: string | undefined;
  jsonData: Data[] = []; // Variável para armazenar os dados do JSON

  probA: number | undefined;
  probB: number | undefined;
  probAB: number | undefined;
  resultado: number | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Atualiza os dados pela primeira vez ao inicializar o componente
    this.updateData();
  }

  updateData() {
    // Faz uma requisição GET para obter os dados do JSON
    this.http.get<Data[]>('http://localhost:3000/data').subscribe(
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
    const data: Data = {
      fav: parseInt(this.fav || '0'), // Converte para número
      pos: this.pos || '',
      res: this.res || '',
      id: this.id || '',
    };

    const url = 'http://localhost:3000/data';

    this.http.post<Data>(url, data).subscribe(
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

  submitConditionalProbabilityForm() {
    if (this.probA && this.probB && this.probAB) {
      // Fórmula da probabilidade condicional: P(A|B) = P(A ∩ B) / P(B)
      this.resultado = this.probAB / this.probB;

      const data2: Data2 = {
        probA: this.probA,
        probB: this.probB,
        probAB: this.probAB,
        resultado: this.resultado
      };

      const url = 'http://localhost:4000/data2'; // Endpoint para dados de probabilidade condicional

      this.http.post<Data2>(url, data2).subscribe(
        response => {
          console.log('Resposta do servidor:', response);
          // Atualiza os dados da tabela, se necessário
        },
        error => {
          console.error('Erro ao enviar os dados:', error);
        }
      );
    } else {
      console.error('Por favor, preencha todos os campos.');
    }
  }
}

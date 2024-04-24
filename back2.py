from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permitir todas as origens para todos os endpoints

# Lista para armazenar os dados da probabilidade condicional
data_list2 = []
# Contador para IDs sequenciais
id_counter = 1

@app.route('/data2', methods=['POST'])
def process_data2():
    global data_list2, id_counter
    
    data = request.json
    
    prob_b_given_a = float(data.get('probBGivenA'))
    prob_a = float(data.get('probA'))
    
    # Calcular o resultado da probabilidade condicional
    res_conditional = prob_b_given_a / prob_a
    
    # Adicionar um ID sequencial ao objeto JSON da probabilidade condicional
    data['id'] = id_counter
    data['res_conditional'] = res_conditional
    
    # Incrementar o contador de IDs
    id_counter += 1
    
    # Adicionar os dados à lista correspondente
    data_list2.append(data)
    
    return jsonify(data)

@app.route('/data2', methods=['GET'])
def get_data2():
    global data_list2
    
    return jsonify(data_list2)

if __name__ == '__main__':
    app.run(port=4000, debug=True)

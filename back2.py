from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todos os endpoints

# Lista para armazenar os dados de probabilidade condicional
cond_data_list = []
cond_id_counter = 1

@app.route('/cond', methods=['POST'])
def process_conditional_data():
    global cond_data_list, cond_id_counter
    
    data = request.json
    
    favA = float(data.get('favA'))
    posA = float(data.get('posA'))
    favB = float(data.get('favB'))
    posB = float(data.get('posB'))
    
    # Calcular a probabilidade condicional P(A | B)
    if posA != 0 and posB != 0:  # Evitar divisão por zero
        probability_A_given_B = (favA / posA) * (favB / posB) / (favB / posB)
    else:
        probability_A_given_B = 0  # Se denominador for zero, resultado é zero
    
    # Criar objeto JSON com os resultados
    result = {
        'id': cond_id_counter,
        'favA': favA,
        'posA': posA,
        'favB': favB,
        'posB': posB,
        'res': probability_A_given_B
    }
    
    # Incrementar o contador de IDs
    cond_id_counter += 1
    
    # Adicionar dados à lista de probabilidade condicional
    cond_data_list.append(result)
    
    return jsonify(result)

@app.route('/cond', methods=['GET'])
def get_conditional_data():
    global cond_data_list
    return jsonify(cond_data_list)

if __name__ == '__main__':
    app.run(port=3001, debug=True)

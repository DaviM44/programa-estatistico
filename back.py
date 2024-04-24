from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todos os endpoints

# Lista para armazenar os dados
data_list = []
# Contador para IDs sequenciais
id_counter = 1

@app.route('/data', methods=['POST'])
def process_data():
    global data_list, id_counter
    
    data = request.json
    
    fav = float(data.get('fav'))
    pos = float(data.get('pos'))
    
    # Calcular o resultado
    res = fav / pos
    
    # Adicionar um ID sequencial ao objeto JSON
    data['id'] = id_counter
    data['res'] = res
    
    # Incrementar o contador de IDs
    id_counter += 1
    
    # Adicionar os dados à lista
    data_list.append(data)
    
    return jsonify(data)

@app.route('/data', methods=['GET'])
def get_data():
    global data_list
    
    return jsonify(data_list)

if __name__ == '__main__':
    app.run(port=3000, debug=True)

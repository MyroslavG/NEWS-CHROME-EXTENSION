from flask import Flask, jsonify, render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def home():
    return "HOME"

@app.route('/get_url')
@cross_origin()
def get_url():
    result = "https://chat.openai.com/"
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, jsonify, render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
@cross_origin()
def home():
    result = "https://chat.openai.com/"
    return render_template('main.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
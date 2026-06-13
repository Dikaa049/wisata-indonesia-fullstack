from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "API Wisata Berjalan"

@app.route("/api/login", methods=["POST"])
def login():

    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    # sementara dummy dulu
    if username == "admin" and password == "123":

        return jsonify({
            "success": True,
            "message": "Login berhasil",
            "user": {
                "id": 1,
                "name": "Administrator",
                "username": "admin"
            }
        })

    return jsonify({
        "success": False,
        "message": "Username atau password salah"
    }), 401


if __name__ == "__main__":
    app.run(debug=True, port=5000)
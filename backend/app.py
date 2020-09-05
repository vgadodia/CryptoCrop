from pymongo import MongoClient
import bcrypt
from flask import Flask, request
import pickle
from weather import *
app = Flask(__name__)

from flask_cors import CORS
import json
import requests
CORS(app)


client = MongoClient("mongodb+srv://user:pwd@cluster0.fdpi8.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = client.get_database("data")

def register(phone, password, name):
    if db.users.find_one({"phone":phone}) == None:
        hashp = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        k = {"phone":phone, "password":hashp, "name":name}
        db.users.insert_one(k)
        return {"status":"success"}
    else:
        return {"status":"failed"}

def login(phone, password):
    k = db.users.find_one({"phone":phone})

    if k != None:
        x = bcrypt.hashpw(password.encode('utf-8'), k["password"])
        
        
        if x == k["password"]:
            return {"status":"success"}
        else:
            return {"status":"failed"}

    else:
        return {"status":"failed"}

model = pickle.load(open("model.pickle", "rb"))

@app.route('/register', methods=["GET", "POST"])
def register_endpoint():
    data = request.json

    return register(data["phone"], data["password"], data["name"])

@app.route('/login', methods=["GET", "POST"])
def login_endpoint():
    data = request.json

    return login(data["phone"], data["password"])

@app.route('/predict', methods=["GET", "POST"])
def predict_endpoint():
    data = request.json
    rain = get_rain(int(data["date"]), int(data["month"]), int(data["year"]), int(data["place"]))
    return {"result": float(model.predict([[int(data["date"]), int(data["month"]), int(data["year"]), int(data["place"]), int(data["crop"]), float(rain)]])[0])}

if __name__ == "__main__":
    app.run()


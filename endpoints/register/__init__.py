import logging
import json
import azure.functions as func

from pymongo import MongoClient
import bcrypt

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

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    phone = req.get_json().get("phone")
    password = req.get_json().get("password")
    name = req.get_json().get("name")
    return func.HttpResponse(json.dumps(register(phone, password, name)))

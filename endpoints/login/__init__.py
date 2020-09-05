import logging
import json
import azure.functions as func

from pymongo import MongoClient
import bcrypt

client = MongoClient("mongodb+srv://user:pwd@cluster0.fdpi8.mongodb.net/<dbname>?retryWrites=true&w=majority")

db = client.get_database("data")

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

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    phone = req.get_json().get("phone")
    password = req.get_json().get("password")
    return func.HttpResponse(json.dumps(login(phone, password)))
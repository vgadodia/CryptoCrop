import logging
import json
import azure.functions as func
import requests
import pickle
from datetime import datetime
from datetime import timedelta

def convert(month, day, year):
    year = 2000 + year

    predictionDay = datetime(year, month, day)
    startDate = predictionDay - timedelta(days=365)
    endDate = predictionDay - timedelta(days=182)
    startDate = startDate.strftime("%Y-%m-%d")
    endDate = endDate.strftime("%Y-%m-%d")
    
    return [startDate, endDate]

def get_rain(day, month, year, id):
    places = ['DELHI', 'AMRITSAR', 'LUDHIANA', 'BHOPAL', 'JAIPUR', 'BHUBANESHWAR', 'BENGALURU', 'CHENNAI', 'LUCKNOW', 'DEHRADUN', 'AHMEDABAD', 'MUMBAI', 'GUWAHATI', 'T.PURAM', 'HYDERABAD', 'PATNA', 'JAMMU', 'KOLKATA', 'SHIMLA', 'KANPUR', 'VIJAYWADA', 'DINDIGUL', 'RAJKOT', 'SHILLONG', 'KOHIMA', 'HISAR', 'KARNAL', 'INDORE', 'NAGPUR', 'THIRUCHIRAPALLI', 'VARANASI', 'AGRA', 'BHAGALPUR', 'CUTTACK', 'SAMBALPUR', 'DIMAPUR', 'DHARWAD', 'BATHINDA', 'SILIGURI', 'JODHPUR', 'RAIPUR', 'ERNAKULAM', 'RANCHI', 'ITANAGAR', 'CHANDIGARH', 'MANDI', 'PORT BLAIR', 'PUDUCHERRY', 'KOTA', 'GWALIOR', 'JABALPUR', 'KOZHIKODE', 'ROURKELA', 'VISAKHAPATNAM', 'PANAJI', 'PANCHKULA', 'GURGAON', 'REWA', 'COIMBATORE', 'TIRUNELVELI', 'SAGAR', 'PURNIA', 'THRISSUR', 'PALAKKAD', 'WAYANAD', 'HALDWANI', 'MANGALORE', 'MYSORE', 'AGARTALA', 'AIZWAL', 'DHARAMSHALA', 'SRINAGAR']

    place = places[id]

    dates = convert(month, day, year)

    x =  requests.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?&aggregateHours=4392&startDateTime=" + dates[0] + "T00:00:00&endDateTime=" + dates[1] + "T00:00:00&unitGroup=uk&contentType=json&dayStartTime=0:0:00&dayEndTime=0:0:00&location=" + place.lower() + ",India&key=1NQT78C8XDTR67E3CNZBAZFCP").json()["locations"]

    for i in x:
        return x[i]["values"][0]["precip"]

model = pickle.load(open("model.pickle", "rb"))


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    date = int(req.get_json().get("date"))
    month = int(req.get_json().get("month"))
    year = int(req.get_json().get("year"))
    place = int(req.get_json().get("place"))
    crop = int(req.get_json().get("crop"))
    rain = float(get_rain(date, month, year, place))
    final = {"result": float(model.predict([[int(date), int(month), int(year), int(place), int(crop), float(rain)]])[0])}
    return func.HttpResponse(json.dumps(final))
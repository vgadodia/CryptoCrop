from datetime import datetime
from datetime import timedelta
import requests


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

#print(convert(9,4,20))
#print(get_rain(1, 10, 10, 7))


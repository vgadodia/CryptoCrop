import csv

d ={'DELHI': "HARYANA DELHI & CHANDIGARH", 'AMRITSAR': "PUNJAB", 'LUDHIANA': "PUNJAB", 'BHOPAL': "WEST MADHYA PRADESH", 'JAIPUR': "WEST RAJASTHAN", 'BHUBANESHWAR': "ORISSA", 'BENGALURU': "SOUTH INTERIOR KARNATAKA", 'CHENNAI': "TAMIL NADU", 'LUCKNOW': "EAST UTTAR PRADESH", 'DEHRADUN': "UTTARAKHAND", 'AHMEDABAD': "GUJARAT REGION", 'MUMBAI': "MADHYA MAHARASHTRA", 'GUWAHATI': "ASSAM & MEGHALAYA", 'T.PURAM': "KERALA", 'HYDERABAD': "TELANGANA", 'PATNA': "BIHAR", 'JAMMU': "JAMMU & KASHMIR", 'KOLKATA': "GANGETIC WEST BENGAL", 'SHIMLA': "HIMACHAL PRADESH", 'KANPUR': "EAST UTTAR PRADESH", 'VIJAYWADA': "COASTAL ANDHRA PRADESH", 'DINDIGUL': "TAMIL NADU", 'RAJKOT': "GUJARAT REGION", 'SHILLONG': "ASSAM & MEGHALAYA", 'KOHIMA': "NAGA MANI MIZO TRIPURA", 'HISAR': "HARYANA DELHI & CHANDIGARH", 'KARNAL': "HARYANA DELHI & CHANDIGARH", 'INDORE': "WEST MADHYA PRADESH", 'NAGPUR': "MADHYA MAHARASHTRA", 'THIRUCHIRAPALLI': "TAMIL NADU", 'VARANASI': "WEST UTTAR PRADESH", 'AGRA': "WEST UTTAR PRADESH", 'BHAGALPUR': "BIHAR", 'CUTTACK': "ORISSA", 'SAMBALPUR': "ORISSA", 'DIMAPUR': "NAGA MANI MIZO TRIPURA", 'DHARWAD': "NORTH INTERIOR KARNATAKA", 'BATHINDA': "PUNJAB", 'SILIGURI': "GANGETIC WEST BENGAL", 'JODHPUR': "WEST RAJASTHAN", 'RAIPUR': "CHHATTISGARH", 'ERNAKULAM': "KERALA", 'RANCHI': "JHARKHAND", 'ITANAGAR': "ARUNACHAL PRADESH", 'CHANDIGARH': "HARYANA DELHI & CHANDIGARH", 'MANDI': "HIMACHAL PRADESH", 'PORT BLAIR': "ANDAMAN & NICOBAR ISLANDS", 'PUDUCHERRY': "KERALA", 'KOTA': "WEST RAJASTHAN", 'GWALIOR': "WEST MADHYA PRADESH", 'JABALPUR': "WEST MADHYA PRADESH", 'KOZHIKODE': "KERALA", 'ROURKELA': 
"ORISSA", 'VISAKHAPATNAM': "COASTAL ANDHRA PRADESH", 'PANAJI': "KONKAN & GOA", 'PANCHKULA': "HARYANA DELHI & CHANDIGARH", 'GURGAON': "HARYANA DELHI & CHANDIGARH", 'REWA': "EAST MADHYA PRADESH", 'COIMBATORE': "TAMIL NADU", 'TIRUNELVELI': "TAMIL NADU", 'SAGAR': "EAST MADHYA PRADESH", 'PURNIA': "BIHAR", 'THRISSUR': "KERALA", 'PALAKKAD': "KERALA", 'WAYANAD': "KERALA", 'HALDWANI': "UTTARAKHAND", 'MANGALORE': "COASTAL KARNATAKA", 'MYSORE': "COASTAL KARNATAKA", 'AGARTALA': "NAGA MANI MIZO TRIPURA", 'AIZWAL': "NAGA MANI MIZO TRIPURA", 'DHARAMSHALA': "HIMACHAL PRADESH", 'SRINAGAR': "JAMMU & KASHMIR"}

def load_rain():
    final = {}
    with open('rain.csv', mode ='r') as file:     
        csvFile = csv.reader(file) 
        for line in csvFile: 
            if int(line[1]) > 2007:
                if line[0] in final:
                    try:
                        final[line[0]].append(float(line[14])/2)
                    except:
                        continue
                else:
                    final[line[0]] = [line[14]]

    return final

rain_data = load_rain()

for i in rain_data:
    if len(rain_data[i]) < 8:
        rain_data[i].append(rain_data[i][6])
def get_date(k):
    return [int(k[0] + k[1]), int(k[3]+ k[4]), int(k[6] + k[7])]

def map_int(k):
    d = {}
    ii = 0
    for i in k:
        if i in d:
            continue
        else:
            d[i] = ii
            ii += 1
    return d

places = []
crops = []

with open('data.csv', mode ='r') as file:     
       csvFile = csv.reader(file) 
       for line in csvFile: 
            if line[3] != "NA":
                places.append(line[1])
                crops.append(line[2])

places = map_int(places)
crops = map_int(crops)

print(places)
print(crops)

f = open('final_data.csv', mode = 'w', newline='')
w = csv.writer(f)

with open('data.csv', mode ='r') as file:     
       csvFile = csv.reader(file) 
       for line in csvFile: 
            if line[3] != "NA":
                dd = get_date(line[0])
                w.writerow(dd + [places[line[1]]] + [crops[line[2]]] + [rain_data[d[line[1]]][dd[2] - 8]] + [line[3]])
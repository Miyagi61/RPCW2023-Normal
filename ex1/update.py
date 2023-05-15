import json
from datetime import datetime

with open("emprego-cientifico.json","r",encoding='utf-8') as f:
    data = json.load(f)
    
    new_json = []
    id = 0
    for item in data:
        item["id"] = id
        if item["DataInicioContrato"] != "":
            item["DataInicioContrato"] =  datetime.strptime(item["DataInicioContrato"], "%d/%m/%Y").isoformat()
        if item["DataFimContrato"] != "":
            item["DataFimContrato"] = datetime.strptime(item["DataFimContrato"], "%d/%m/%Y").isoformat()
        id +=1
        new_json.append(item)

    with open("emprego-cientifico2.json","w",encoding='utf-8') as f:
        json.dump(new_json,f,ensure_ascii=False)
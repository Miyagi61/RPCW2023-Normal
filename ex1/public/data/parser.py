import csv
import json

def check_mes(input):
    if input == '1':
        return 1
    else:
        return 0

def parse_pag(filename):
    with open(filename, newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='|')
        array = []

        for row in reader:
            dic = {
                'fracao': row[0],
                'meses': [check_mes(mes) for mes in row[1:]]
            }
            array.append(dic)
        
        with open('pag.json', 'w') as outfile:
            json.dump(array, outfile)

def parse_mov(filename):
    with open(filename, newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='|')
        array = []

        for row in reader:
            dic = {
                'numero': row[0],
                'tipo': row[1],
                'data': row[2],
                'valor': float(row[3]),
                'entidade': row[4],
                'descricao': row[5],
            }
            array.append(dic)
        
        with open('mov.json', 'w') as outfile:
            json.dump(array, outfile)

def parse_frac(filename):
    with open(filename, newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='|')
        array = []

        for row in reader:
            dic = {
                'fracao' : row[0],
                'permilagem' : row[1],
                'mensalidade': row[2],
                'responsavel': {
                    'nome': 'gcf',
                    'email': 'pg50398@alunos.uminho.pt',
                    'telefone': '123456789'
                }
            }
            array.append(dic)
        
        with open('frac.json', 'w') as outfile:
            json.dump(array, outfile)

parse_pag('pag.csv')
parse_mov('mov.csv')
parse_frac('frac.csv')
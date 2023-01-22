from flask import Blueprint, request, jsonify
import requests
from flask_restful import Api, Resource

cars_api = Blueprint('cars_api', __name__ ,
                    url_prefix='/api/cars')

api = Api(cars_api)

def carsAPI():
    global cars_api  
    try: cars_info
    except: cars_info = None
       
    url = "https://car-data.p.rapidapi.com/cars"

    querystring = {"limit":"49","page":"0"}

    headers = {
	"X-RapidAPI-Key": "d3a3e94748msh74bb629320d5734p160ceajsn7f28f4859ea2",
	"X-RapidAPI-Host": "car-data.p.rapidapi.com"
    }
    response = requests.request("GET", url, headers=headers, params=querystring)
    cars_info = response
    return response

class CarsAPI(Resource):
    def get(self):
        response = carsAPI()
        return response.json()

api.add_resource(CarsAPI, '/')
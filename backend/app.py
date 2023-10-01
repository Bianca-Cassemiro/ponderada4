# -*- coding: utf-8 -*-
import pandas as pd
from fastapi import FastAPI, HTTPException
import uvicorn
from pydantic import BaseModel
import pickle
from model.model import User
from model.auth.jwt_handler import signJWT
from fastapi.middleware.cors import CORSMiddleware


# Create the app
app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Você pode especificar os métodos permitidos
    allow_headers=["*"],  # Você pode especificar os cabeçalhos permitidos
)

users = {
    "email":"bia@gmail.com",
    "password":"123"
}

df = pd.read_csv('Mall_Customers.csv')

def generate_insights():
    
    age_counts = df['Age'].value_counts().reset_index()
    age_counts.columns = ['Age', 'Count']

    # Retorna os dados como um JSON
    return age_counts.to_dict(orient='records')

# Load trained Pipeline

class InputModel(BaseModel):
    CustomerID: int
    Gender: int
    Age: float
    Annual: float

class OutputModel(BaseModel):
    prediction: float

@app.options("/predict")
async def options_predict():
    return {"allow": "POST"}

# Define predict function
@app.post("/predict", response_model=OutputModel)
def predict(data: InputModel):
    input_data = [[
        data.CustomerID,
        data.Age,
        data.Gender,
        data.Annual
    ]]

    model = pickle.load(open('random_forest.pkl', 'rb'))
   
    prediction = model.predict(input_data)
    return {"prediction": prediction[0]}


@app.post("/login", tags=["user"])
def login(user: User):
    if user.email == users["email"] and user.password == users["password"]:
        # Autenticação bem-sucedida, retorne o token JWT ou qualquer outra resposta apropriada
        token = signJWT(user.email)
        return {"token": token}
    
    raise HTTPException(status_code=401, detail="Credenciais de login inválidas")
if __name__ == "__main__":
    uvicorn.run(app, port=5000)



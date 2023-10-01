import time
import jwt
from decouple import config

JWT_SECRET = config('secret')
JWR_ALGORITHM = config('algorithm')

def tokens_response(token:str):
    return {
        "access token": token,
    }

def signJWT(userID: str):
    payload = {
        "userID": userID,
        "expires": time.time() + 600
    }
    token = jwt.encode(payload, JWT_SECRET, algorithm=JWR_ALGORITHM)

    return tokens_response(token)

def decodeJWT(token: str):
    decode_token = jwt.decode(token, JWT_SECRET, algorithms=[JWR_ALGORITHM])
    return decode_token if decode_token["expires"] >= time.time() else None
# 
FROM python:3.9

# 
WORKDIR /app

# 
COPY ./requirements.txt /app/requirements.txt
COPY ./random_forest.pkl /app/random_forest.pkl
# 
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

# 
COPY ./app.py /app/app.py

EXPOSE 5000
# 
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "5000"]
FROM python:3.7.0

WORKDIR /app/

COPY ./app/ /app/

RUN pip install -r requirements.txt

CMD uvicorn --host=0.0.0.0 --port 18000 main:app
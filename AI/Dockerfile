FROM python:3.7.0

COPY ./ ./

WORKDIR /AI/app/

RUN pip install -r requirements.txt

CMD uvicorn --host=0.0.0.0 --port 18000 main:app
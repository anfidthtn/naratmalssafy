From python:3.6.13
 
COPY ./ ./AI/

WORKDIR ./AI/app

RUN pip install --use-deprecated=legacy-resolver -r requirements.txt

RUN pip install --use-deprecated=legacy-resolver -r fontmaker/requirements.txt


CMD ["uvicorn", "main:app", "--port", "18080"]

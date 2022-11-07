from typing import Union

from fastapi import FastAPI

import pymysql

import json

import os

import sys

sys.path.append(os.path.join(os.path.dirname(__file__), "fontmaker"))

from fontmaker.generate import FontMaker

app = FastAPI()

pwd = os.path.dirname(os.path.realpath(__file__))

with open(os.path.join(pwd, "config", "mysql_conf.json")) as f:
    mysql_config = json.load(f)


@app.get("/")
def read_root():
    maker = FontMaker('fontname')
    
    return {"a" : "a"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
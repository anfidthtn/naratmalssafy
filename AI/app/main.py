from typing import Union

from fastapi import FastAPI

import json

import os

import sys

sys.path.append(os.path.join(os.path.dirname(__file__), "fontmaker"))

from fontmaker.generate import FontMaker

app = FastAPI()

pwd = os.path.dirname(os.path.realpath(__file__))



@app.post("/")
def read_root():
    maker = FontMaker('fontname')
    
    return {"a" : "a"}
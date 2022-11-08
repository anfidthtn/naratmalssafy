from typing import Union

from fastapi import FastAPI

import json

import os

import sys

sys.path.append(os.path.join(os.path.dirname(__file__), "fontmaker"))

from fontmaker.generate import FontMaker

from pydantic import BaseModel


app = FastAPI()

class Item(BaseModel):
    fontSeq: int
    fontName: str

pwd = os.path.dirname(os.path.realpath(__file__))


@app.post("/makefont/")
def read_root(data : Item):
    print(data)
    maker = FontMaker(data.fontName)
    print(maker)
    maker.makeTTF(data.fontSeq, data.fontName)
    
    return {"a" : "a"}
from typing import Union

from fastapi import FastAPI

import os

import sys

sys.path.append(os.path.join(os.path.dirname(__file__), "fontmaker"))

from fontmaker.generate import FontMaker

from pydantic import BaseModel

from s3linker import s3_connection

import models_, database

import hashlib

import requests





app = FastAPI()

class Item(BaseModel):
    fontSeq: int
    fontName: str

pwd = os.path.dirname(os.path.realpath(__file__))

s3 = s3_connection()


@app.post("/fastapi/makefont")
def read_root(data : Item):
    nameHash = hashlib.sha1(data.fontName.encode('utf-8')).hexdigest()
    maker = FontMaker(nameHash)
    maker.makeTTF(data.fontSeq, maker.fontname)
    ttfURL = 'https://naratmalssafy.s3.ap-northeast-2.amazonaws.com/' + maker.fontname + '.ttf'
    woffURL = 'https://naratmalssafy.s3.ap-northeast-2.amazonaws.com/' + maker.fontname + '.woff'
    try:
        s3.upload_file(os.path.join("fontmaker", "FONT", maker.fontname, "ttf_fonts", maker.fontname + ".ttf"), "naratmalssafy", maker.fontname + ".ttf")
        s3.upload_file(os.path.join("fontmaker", "FONT", maker.fontname, "ttf_fonts", maker.fontname + ".woff"), "naratmalssafy", maker.fontname + ".woff")
    except Exception as e:
        return {"msg" : "s3 저장 중 에러발생"}

    session = database.Session(database.engine)
    
    db_file = models_.TFile(file_original_name=maker.fontname + '.ttf', file_saved_name=nameHash, file_saved_path=ttfURL, woff_saved_path=woffURL)
    
    session.add(db_file)
    db_font = session.query(models_.TFont).filter(models_.TFont.font_seq == data.fontSeq).first()
    db_font.t_file = db_file
    
    session.commit()
    return {"ttfURL" : ttfURL, 'woffURL' : woffURL}
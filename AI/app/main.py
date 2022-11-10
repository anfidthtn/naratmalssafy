from typing import Union

from fastapi import FastAPI

import os

import sys

sys.path.append(os.path.join(os.path.dirname(__file__), "fontmaker"))

from fontmaker.generate import FontMaker

from pydantic import BaseModel

from s3linker import s3_connection

import models_, database





app = FastAPI()

class Item(BaseModel):
    fontSeq: int
    fontName: str

pwd = os.path.dirname(os.path.realpath(__file__))

s3 = s3_connection()


@app.post("/fastapi/makefont")
def read_root(data : Item):
    maker = FontMaker(data.fontName)
    savedURL = 'https://naratmalssafy.s3.ap-northeast-2.amazonaws.com/' + maker.fontname + '.ttf'
    try:
        s3.upload_file(os.path.join("fontmaker", "FONT", maker.fontname, "ttf_fonts", maker.fontname + ".ttf"),"naratmalssafy", maker.fontname + ".ttf")
        savedURL = 'https://naratmalssafy.s3.ap-northeast-2.amazonaws.com/' + maker.fontname + ".ttf"
    except Exception as e:
        print(e)

    session = database.Session(database.engine)
    
    db_file = models_.TFile(file_original_name=maker.fontname + '.ttf', file_saved_name=maker.fontname + '.ttf', file_saved_path=savedURL)
    
    session.add(db_file)
    db_font = session.query(models_.TFont).filter(models_.TFont.font_seq == data.fontSeq).first()
    db_font.t_file = db_file
    
    
    session.commit()
    return {"savedURL" : savedURL}
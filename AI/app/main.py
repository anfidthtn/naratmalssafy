from typing import Union

from fastapi import FastAPI

import pymysql

import json

import os

app = FastAPI()

pwd = os.path.dirname(os.path.realpath(__file__))

with open(os.path.join(pwd, "config", "mysql_conf.json")) as f:
    mysql_config = json.load(f)


@app.get("/")
def read_root():
    db = pymysql.connect(host=mysql_config['host'], port=mysql_config['port'], user=mysql_config['user'], passwd=mysql_config['passwd'], charset=mysql_config['charset'], db=mysql_config['db'])
    select_cursor = db.cursor()
    select_cursor.execute('select * from new_table')
    res = select_cursor.fetchall()
    print(res)
    return {"result": f'test_table 상태 : {str(len(res))}개 {res}'}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
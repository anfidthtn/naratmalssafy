import numpy as np
from PIL import Image
import os

def img2png(font_gen, nowDir, fontname, common_han):
    def bold(x):
        if x != 255:
            return max(255 - (255 - x) * 3, 0)
        return x

    bfunc = np.vectorize(bold)

    for i in range(len(font_gen)):
        try:
            img = Image.fromarray(np.uint8(abs(font_gen[i])))
            img = img.resize((128,128))
            img = bfunc(img)
            img = np.array(img)
            tmp = np.where(img!=255) # 흰색 아닌 부분의 위치들 저장
            ws,we = max(min(tmp[1]-5),0), min(max(tmp[1]+5),128)
            img = img[0:128, ws:we] # 글자 있는 부분만 자르기
            img = Image.fromarray(np.uint8(abs(img)))
            img.save(os.path.join(nowDir, 'FONT', fontname, 'img', f'{hex(ord(common_han[i]))[2:].upper()}.png'), 'PNG')
        except:
            pass
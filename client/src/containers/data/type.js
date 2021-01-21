let ch2num,typetable;
ch2num = {
    "一般": 0,  
    "火": 1, 
    "水": 2,
    "電": 3 ,
    "草": 4, 
    "冰": 5,  
    "格鬥": 6, 
    "毒": 7, 
    "地面": 8, 
    "飛行": 9, 
    "超能力": 10, 
    "蟲": 11, 
    "岩石": 12,
    "幽靈": 13, 
    "龍": 14, 
    "惡": 15, 
    "鋼": 16, 
    "妖精": 17,
}
typetable = 
[[1,1,1,1,1,1,1,1,1,1,1,1,0.5,0,1,1,0.5,1],
[1,0.5,0.5,1,2,2,1,1,1,1,1,2,0.5,1,0.5,1,2,1],
[1,2,0.5,1,0.5,1,1,1,2,1,1,1,2,1,0.5,1,1,1],
[1,1,2,0.5,0.5,1,1,1,0,2,1,1,1,1,0.5,1,1,1],
[1,0.5,2,1,0.5,1,1,0.5,2,0.5,1,0.5,2,1,0.5,1,0.5,1],
[1,0.5,0.5,1,2,0.5,1,1,2,2,1,1,1,1,2,1,0.5,1],
[2,1,1,1,1,2,1,0.5,1,0.5,0.5,0.5,2,0,1,2,2,0.5],
[1,1,1,1,2,1,1,0.5,0.5,1,1,1,0.5,0.5,1,1,0,2],
[1,2,1,2,0.5,1,1,2,1,0,1,0.5,2,1,1,1,2,1],
[1,1,1,0.5,2,1,2,1,1,1,1,2,0.5,1,1,1,0.5,1],
[1,1,1,1,1,1,2,2,1,1,0.5,1,1,1,1,0,0.5,1],
[1,0.5,1,1,2,1,0.5,0.5,1,0.5,2,1,1,0.5,1,2,0.5,0.5],
[1,2,1,1,1,2,0.5,1,0.5,2,1,2,1,1,1,1,0.5,1],
[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,0.5,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,0.5,0],
[1,1,1,1,1,1,0.5,1,1,1,2,1,1,2,1,0.5,1,0.5],
[1,0.5,0.5,0.5,1,2,1,1,1,1,1,1,2,1,1,1,0.5,2],
[1,0.5,1,1,1,1,2,0.5,1,1,1,1,1,1,2,2,0.5,1]]
export  {ch2num,typetable}
launchDate=new Date(2018,11,16)
currentDate=new Date()
day=Math.abs(currentDate.getDate()-launchDate.getDate())
lettersReveal=["6-E-yellow.png","2-E-yellow.png","4-A-yellow.png","8-N-yellow.png","7-A-yellow.png"]
days=[["_","_","_","_","_","E","_","_"],["_","E","_","_","_","E","_","_"],["_","E","_","A","_","E","_","_"],["_","E","_","A","_","E","_","N"],["_","E","_","A","_","E","A","N"],]
progress=["13%","37%","56%","85%","100%"]
progressStage=["green","green","yellow","red","red"]
cssBar=["loading load-green","loading load-green","loading load-yellow","loading load-red","loading load-red"]
progressText=["Ada banyak, mungkin besok habis","Ada banyak, mungkin besok habis","Tinggal setengah, jangan lengah!","Bentar lagi ludes","Yah, habis... tapi, tau jawabannya gak?"]
ko.applyBindings({days:days,day:day,lettersReveal:lettersReveal,progress:progress})
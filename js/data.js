var userData = {

  "info": {
    handicap: 0,
    currentHole: 0,
    teePosition: "red"
  },

  "score": {
      induvidualHole: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      total: 0,
      coursePar: 0
  }
}

var courtData = {
    "grafarholt": {
        par: [4,3,4,5,4,3,4,4,4,4,3,5,4,4,5,4,3,4],
        handicap: [15,17,3,11,1,5,13,9,7,8,6,12,16,18,2,4,10,14],
        yellowLength: [296,36,360,420,317,176,310,283,335,353,145,433,282,306,494,333,160,339],
        blueLength: [296,129,300,388,256,151,299,283,294,353,145,425,272,306,442,278,160],
        redLength: [264,121,300,380,256,151,231,250,294,309,99,391,265,275,379,278,151,275,2422]
    }
  }

var graphData = {
    labels : ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],
    datasets :
     [
        {
          label: "Þitt Skor",
          backgroundColor : "#006064",
          borderColor: "#006064",
          fill: false,
          data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
          label: "Par",
          backgroundColor : "#d3d3d3",
          borderColor: "#d3d3d3",
          fill: false,
          data : []
        }
     ]
    }


var menuView = {

  displayMenu: function($holeNumber) {
    // Menu
   displayMenu = '<div class="pure-g header">';
   displayMenu += '<div class="hole-number-wrap pure-u-1-2">';
   displayMenu += '<div class="hole-number">'
   displayMenu += '<h5>Hola nr ';
   displayMenu += $holeNumber + 1;
   displayMenu +=  '</h5>';
   displayMenu += '</div>';
   displayMenu +=  '</div>';
   //Back
   displayMenu += '<div class="switch-view-button-wrap pure-u-1-2">';
   displayMenu += '<button id="hole-button" type="button">Til Baka</button>'
   displayMenu +=  '</div>';
   displayMenu +=  '</div>';

   $(".menu").append(displayMenu);
  }

}


var holeView = {

  displayMenu: function($holeNumber) {
     // Menu
    displayMenu = '<div class="pure-g header">';
    displayMenu += '<div class="hole-number-wrap pure-u-1-3">';
    displayMenu += '<div class="hole-number">'
    displayMenu += '<h5>Hola nr ';
    displayMenu += $holeNumber + 1;
    displayMenu +=  '</h5>';
    displayMenu += '</div>';
    displayMenu +=  '</div>';
    //OverView Button
    displayMenu += '<div class="switch-view-button-wrap pure-u-1-3">';
    displayMenu += '<button id="holeinfo-button" type="button">Yfirlit</button>'
    displayMenu +=  '</div>';
    //OverView Button
    displayMenu += '<div class="switch-view-button-wrap pure-u-1-3">';
    displayMenu += '<button id="scorecard-button" type="button">Skorkort</button>'
    displayMenu +=  '</div>';
    displayMenu +=  '</div>';

    $(".menu").append(displayMenu);

  },


  displayInput: function() {

     // User Input
    var displayInput = '<div class="user-input-wrap item-wrap pure-u-1">';
    displayInput += '<div class="user-input item-inner">'
    displayInput += '<input id="score" placeholder="3">';
    displayInput += '<p>Fjöldi högga</p>';
    displayInput += '</div>';
    displayInput += '</div>';

    $(".container").append(displayInput);
  },


  displayStats: function() {
     // Course Par
    var displayStats = '<div class="pure-g">';
    displayStats += '<div class="course-par-wrap item-wrap pure-u-1-2">';
    displayStats += '<div class="item-inner total-score-wrap">'
    displayStats += '<h4>';
    displayStats += userData.score.coursePar;
    displayStats += '</h4>';
    displayStats += '<p>Vallar Skor</p>';
    displayStats += '</div>';
    displayStats += '</div>';
    // Total Skor
    displayStats += '<div class="item-wrap pure-u-1-2">';
    displayStats += '<div class="item-inner total-score-wrap">'
    displayStats += '<h4>';
    displayStats += userData.score.total;
    displayStats += '</h4>';
    displayStats += '<p>Samtals Skor</p>';
    displayStats += '</div>';
    displayStats +=  '</div>';

    $(".container").append(displayStats);

  },


    displayChart: function() {

      console.log(graphData.datasets[0].data[0]);

      var itemWrap = document.createElement("div");
      itemWrap.className = "item-wrap canvas-wrap pure-u-md-1-2";
      var itemInner = document.createElement("div");
      itemInner.className = "item-inner canvas-item";
      var canvas = document.createElement("CANVAS");
      canvas.id = "graph";
      canvas.style.width = "100%";
      canvas.style.height = "400px";

      $(".container").append(itemWrap);
      $(".canvas-wrap").append(itemInner);
      $(".canvas-item").append(canvas);



      for (var i = 0; i < userData.score.induvidualHole.length; i++) {
        graphData.datasets[0].data[i] = userData.score.induvidualHole[i];
        graphData.datasets[1].data[i] = courtData.grafarholt.par[i];
      }


      var graph = document.getElementById('graph').getContext('2d');
      var chart = new Chart(graph , {
          type: "line",
          data: graphData,
          duration: 10000,
          easing: 'easeInQuad',
          animateScale : true
      });

    },

    displayInfo: function($holeNumber) {
      var holeInfo = '<div class="item-wrap pure-u-md-1-2">';
      holeInfo += '<div pure-g';
      holeInfo += '<div class="item-inner pure-u-1-2">';
      holeInfo += '<h4>';
      holeInfo += $holeNumber + 1;
      holeInfo += '</h4>';
      holeInfo += '<p>Hola nr</p>';
      holeInfo += '</div>';
      holeInfo += '<div class="item-inner pure-u-1-2">';
      holeInfo += '<h4>';
      holeInfo += courtData.grafarholt.par[$holeNumber];
      holeInfo += '</h4>';
      holeInfo += '<p>Par</p>';
      holeInfo += '</div>';
      holeInfo += '<div class="item-inner pure-u-1">';
      holeInfo += '<h4>';
      holeInfo += courtData.grafarholt.yellowLength[$holeNumber] + "m";
      holeInfo += '</h4>';
      holeInfo += '<p>Lengd</p>';
      holeInfo += '</div>';
      holeInfo += '</div>';
      holeInfo += '</div>';

      $('.container').append(holeInfo);
    }
}

 var scorecardView = {

   displayScorecard: function() {

     var scoreWrap = '<div class="table-overview-wrap">';
     scoreWrap += '<div class="table-overview-item-wrap">';
     scoreWrap += '<div class="table-overview-item">';
     scoreWrap += '<h3>Hola</h3>';
     scoreWrap += '</div>';
     scoreWrap += '<div class="table-overview-item">';
     scoreWrap += '<h3>Par</h3>'
     scoreWrap += '</div>';
     scoreWrap += '<div class="table-overview-item">';
     scoreWrap += '<h3>Skor</h3>'
     scoreWrap += '</div>';
     scoreWrap += '<div class="table-overview-item">';
     scoreWrap += '<h3>Skor m/Par</h3>'
     scoreWrap += '</div>';
     scoreWrap += '</div>';

      for (i = 0; i < courtData.grafarholt.par.length; i++) {
       scoreWrap += '<div class="table-overview-item-wrap">';
       scoreWrap += '<div class="table-overview-item bold">';
       scoreWrap += '<h5>';
       scoreWrap += i + 1;
       scoreWrap += '</h5>';
       scoreWrap += '</div>';
       scoreWrap += '<div class="table-overview-item">';
       scoreWrap += '<h5>';
       scoreWrap += courtData.grafarholt.par[i];
       scoreWrap += '</h5>';
       scoreWrap += '</div>';
       scoreWrap += '<div class="table-overview-item">';
       scoreWrap += '<h5>';
       scoreWrap += userData.score.induvidualHole[i];
       scoreWrap += '</h5>';
       scoreWrap += '</div>';
       scoreWrap += '<div class="table-overview-item">';
       scoreWrap += '<h5>';
       if (userData.score.induvidualHole[i] == 0) {scoreWrap += '0' }
       else {
         if (userData.score.induvidualHole[i] > courtData.grafarholt.par[i]) {scoreWrap += '+'}
         else {} scoreWrap += Number(userData.score.induvidualHole[i]) - Number(courtData.grafarholt.par[i])
       }
       scoreWrap += '</h5>';
       scoreWrap += '</div>';
       scoreWrap += '</div>';
      }

    scoreWrap += '</div>';

    $('.container').append(scoreWrap);
  }

}

   var holeInfoView = {
     displayHoleInfo: function($holeNumber) {
        // Par
      var displayHoleInfo = '<div class="pure-g">';
      displayHoleInfo += '<div class="course-par-wrap item-wrap pure-u-1-2">';
      displayHoleInfo += '<div class="item-inner total-score-wrap">'
      displayHoleInfo += '<h4>';
      displayHoleInfo += courtData.grafarholt.par[$holeNumber];
      displayHoleInfo += '</h4>';
      displayHoleInfo += '<p>Par</p>';
      displayHoleInfo += '</div>';
      displayHoleInfo += '</div>';
      // Forgjöf
      displayHoleInfo += '<div class="item-wrap pure-u-1-2">';
      displayHoleInfo += '<div class="item-inner total-score-wrap">'
      displayHoleInfo += '<h4>';
      displayHoleInfo += courtData.grafarholt.handicap[$holeNumber];
      displayHoleInfo += '</h4>';
      displayHoleInfo += '<p>Forgjöf</p>';
      displayHoleInfo += '</div>';
      displayHoleInfo +=  '</div>';
      displayHoleInfo +=  '</div>';
      // Lengd
      displayHoleInfo += '<div class="item-wrap pure-u-1">';
      displayHoleInfo += '<div class="item-inner total-score-wrap">'
      displayHoleInfo += '<h4>';
      displayHoleInfo += courtData.grafarholt.blueLength[$holeNumber];
      displayHoleInfo += 'm</h4>';
      displayHoleInfo += '<p>Lengd</p>';
      displayHoleInfo += '</div>';
      displayHoleInfo +=  '</div>';
      displayHoleInfo +=  '</div>';

       $(".container").append(displayHoleInfo);
     },
   }

   var elementsView = {

     displayError: function ($text) {
       var errorMessage = '<div class="error-message-wrap" id="error-message">';
       errorMessage += '<p>';
       errorMessage += $text;
       errorMessage += '</p>';
       errorMessage +=  '</div>';

       $(".container").prepend(errorMessage);
       setTimeout(function() { $("#error-message").hide(); }, 4000);
     }

 }

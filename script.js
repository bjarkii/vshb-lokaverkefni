$(function() {

  var userData = {
    "info": {
      handicap: 0,
      currentHole: 0
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
          length: [15,17,3,11,1,5,13,9,7,8,6,12,16,18,2,4,10,14]
      }
    }



   var modelActivity = {

    clearAll: function() {
       $( "div" ).hide( "100", "linear", function() {});
     },

     switchView: function () {

      $('#overview-button, #hole-button').click(function () {
        if (this.id == 'overview-button') {
            modelActivity.clearAll();
            initializeView.overallView(userData.info.currentHole);

        }
        else if (this.id == 'hole-button') {
            modelActivity.clearAll();
            initializeView.holeView(userData.info.currentHole);
        }
      });

    }

   }


   var modelScore = {

     updateScore: function($hole) {
       $('input#score').on('keypress', function (e) {
        if(e.which === 13){
          var score = $( this ).val();
          var hole  = userData.info.currentHole;
          var total = userData.score.total;
          if (isNaN(score)) {
            elementsView.displayError("Sláðu inn tölu");
          }

          else {
            modelScore.updateInduvidualScore(hole, score);
            modelScore.updateOverallScore(score);
            var total = userData.score.total;
            modelScore.updateCoursePar(hole, total, score);
            holeView.nextHole(hole);
          }

        }
      });
    },

     updateInduvidualScore: function($hole, $score) {
       userData.score.induvidualHole[$hole] = $score;
     },

     updateOverallScore: function($score) {

       var total = userData.score.total;
       total = Number(total) + Number($score);
       userData.score.total = total;
     },

     updateCoursePar: function($hole, $totalStrokes, $score) {

       var totalPar = 0; // Miðað við holu
       var coursePar = 0;

       for (var i = 0; i < $hole + 1; i++) {
         totalPar += courtData.grafarholt.par[i];
       }

       console.log(totalPar);

        coursePar = $totalStrokes - totalPar;


       userData.score.coursePar = coursePar;
     }

    };


   var holeView = {

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
       //OverView Button
       displayMenu += '<div class="switch-view-button-wrap pure-u-1-2">';
       displayMenu += '<button id="overview-button" type="button">Skoða Yfirlit</button>'
       displayMenu +=  '</div>';
       displayMenu +=  '</div>';

       $("body").append(displayMenu);

     },


     displayInput: function() {

        // User Input
       var displayInput = '<div class="user-input-wrap item-wrap pure-u-1">';
       displayInput += '<div class="user-input item-inner">'
       displayInput += '<input id="score" placeholder="3">';
       displayInput += '<p>Fjöldi högga</p>';
       displayInput += '</div>';
       displayInput += '</div>';

       $("body").append(displayInput);
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
       displayStats +=  '</div>';

       $("body").append(displayStats);

     },

     displayHoleInfo: function($holeNumber) {
        // Hole Info
       var displayHoleInfo = '<div class="hole-par-wrap item-wrap pure-u-1">';
       displayHoleInfo += '<div class="item-sidebar pure-g">'

       displayHoleInfo += '<div class="item-sidebar-inner right-border pure-u-md-1-3 pure-u-1">'
       displayHoleInfo += '<h3>Par ';
       displayHoleInfo += courtData.grafarholt.par[$holeNumber];
       displayHoleInfo +=  '</h3>';
       displayHoleInfo +=  '</div>';

       displayHoleInfo += '<div class="item-sidebar-inner right-border pure-u-md-1-3 pure-u-1">'
       displayHoleInfo += '<h3>Forgjöf ';
       displayHoleInfo += courtData.grafarholt.handicap[$holeNumber];
       displayHoleInfo +=  '</h3>';
       displayHoleInfo +=  '</div>';

       displayHoleInfo += '<div class="item-sidebar-inner pure-u-md-1-3 pure-u-1">'
       displayHoleInfo += '<h3>';
       displayHoleInfo += courtData.grafarholt.length[$holeNumber];
       displayHoleInfo +=  'm </h3>';
       displayHoleInfo +=  '</div>';

       displayHoleInfo +=  '</div>';
       displayHoleInfo +=  '</div>';

       $("body").append(displayHoleInfo);
     },


     nextHole: function() {
       var currentHole = userData.info.currentHole;
       var nextHole = currentHole + 1;
       userData.info.currentHole = nextHole;
       modelActivity.clearAll();
       initializeView.holeView(nextHole);
     }


    };


    var overallView = {

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
        //OverView Button
        displayMenu += '<div class="switch-view-button-wrap pure-u-1-2">';
        displayMenu += '<button id="hole-button" type="button">Skoða holu</button>'
        displayMenu +=  '</div>';
        displayMenu +=  '</div>';

        $("body").append(displayMenu);

      },

      displayOverall: function() {

        var overWrap = '<div class="table-overview-wrap">';
        overWrap += '<div class="table-overview-item-wrap">';
        overWrap += '<div class="table-overview-item">';
        overWrap += '<h3>Hola</h3>';
        overWrap += '</div>';
        overWrap += '<div class="table-overview-item">';
        overWrap += '<h3>Par</h3>'
        overWrap += '</div>';
        overWrap += '<div class="table-overview-item">';
        overWrap += '<h3>Skor</h3>'
        overWrap += '</div>';
        overWrap += '<div class="table-overview-item">';
        overWrap += '<h3>Skor m/Par</h3>'
        overWrap += '</div>';
        overWrap += '</div>';

         for (i = 0; i < courtData.grafarholt.par.length; i++) {
          overWrap += '<div class="table-overview-item-wrap">';
          overWrap += '<div class="table-overview-item bold">';
          overWrap += '<h5>';
          overWrap += i + 1;
          overWrap += '</h5>';
          overWrap += '</div>';
          overWrap += '<div class="table-overview-item">';
          overWrap += '<h5>';
          overWrap += courtData.grafarholt.par[i];
          overWrap += '</h5>';
          overWrap += '</div>';
          overWrap += '<div class="table-overview-item">';
          overWrap += '<h5>';
          overWrap += userData.score.induvidualHole[i];
          overWrap += '</h5>';
          overWrap += '</div>';
          overWrap += '<div class="table-overview-item">';
          overWrap += '<h5>';
          if (userData.score.induvidualHole[i] == 0) {overWrap += '0' }
          else {
            if (userData.score.induvidualHole[i] > courtData.grafarholt.par[i]) {overWrap += '+'}
            else {} overWrap += Number(userData.score.induvidualHole[i]) - Number(courtData.grafarholt.par[i])
          }
          overWrap += '</h5>';
          overWrap += '</div>';
          overWrap += '</div>';
         }

       overWrap += '</div>';

       $('body').append(overWrap);
     }

   }

      var elementsView = {

        displayError: function ($text) {
          var errorMessage = '<div class="error-message-wrap" id="error-message">';
          errorMessage += '<p>';
          errorMessage += $text;
          errorMessage += '</p>';
          errorMessage +=  '</div>';

          $("body").prepend(errorMessage);
          setTimeout(function() { $("#error-message").hide(); }, 4000);
        }

    }


      var initializeView = {

        holeView: function($hole) {
          // View
          holeView.displayMenu($hole);
          holeView.displayInput();
          holeView.displayStats();
          holeView.displayHoleInfo($hole);
          // Model
          modelScore.updateScore($hole);
          modelActivity.switchView();

        },

        overallView: function($hole) {
          overallView.displayMenu($hole);
          overallView.displayOverall();
          modelActivity.switchView();
        }

      }

      initializeView.holeView(userData.info.currentHole);



}());


    var activityView = {

     clearAll: function() {
        $( "div" ).not(".container, .menu").remove();
      },

      switchView: function () {

       $('#scorecard-button, #hole-button, #holeinfo-button').click(function () {
         if (this.id == 'scorecard-button') {
             activityView.clearAll();
             initializeView.scorecardView(userData.info.currentHole);
         }
         else if (this.id == 'hole-button') {
             activityView.clearAll();
             initializeView.holeView(userData.info.currentHole);
         }
         else if (this.id == 'holeinfo-button') {
             activityView.clearAll();
             initializeView.holeInfoView(userData.info.currentHole);
         }
       });

     },

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
            updateScore.updateInduvidualScore(hole, score);
            updateScore.updateOverallScore(score);
            var total = userData.score.total;
            updateScore.updateCoursePar(hole, total, score);
            activityView.nextHole(hole);
          }

        }
      });
    },

     nextHole: function() {
       var currentHole = userData.info.currentHole;
       var nextHole = currentHole + 1;
       userData.info.currentHole = nextHole;
       activityView.clearAll();
       initializeView.holeView(nextHole);
     }


    }

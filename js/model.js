
   var updateScore = {

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

        coursePar = $totalStrokes - totalPar;
        userData.score.coursePar = coursePar;
     }

    };


      var initializeView = {

        holeView: function($hole) {
          // View
          holeView.displayMenu($hole);
          holeView.displayInput();
          holeView.displayStats();
          holeView.displayChart();
          holeView.displayInfo($hole);
          // Model
          activityView.updateScore($hole);
          activityView.switchView();
        },

        scorecardView: function($hole) {
          menuView.displayMenu($hole);
          scorecardView.displayScorecard();
          activityView.switchView();
        },

        holeInfoView: function($hole) {
          menuView.displayMenu($hole);
          holeInfoView.displayHoleInfo($hole);
          activityView.switchView();

        }

      }


      // Starting point
      initializeView.holeView(userData.info.currentHole);


var app = angular.module('AngularApp', []);

app.controller('MainController', ['$http', function ($http) {


    var self = this;

    self.message = "Angular is sourced correctly";

// -------------- NAVIGATION ------------------- //
    self.buisnessHeader = "Buisness Name or Logo";

// --------------- SHOWCASE -------------------- //
    self.homeMainTitle = "Home Main Title";
    self.homeMainDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
                                "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// ------------- SECTION ONE ------------------ //
    self.windowTwoHeader = "Welcome Home";
    self.windowTwoDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
                                "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// ------------- SECTION TWO ------------------ //
    self.windowThreeHeader = "Let's Begin";
    self.windowThreeDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
                                "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// ---------------- ABOUT --------------------- //
    self.windowOneWhatWeDoHeader = "What We Do One";
    self.windowOneWhatWeDoDescription = "ONE Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
                                        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    self.windowTwoWhatWeDoHeader = "What We Do Two";
    self.windowTwoWhatWeDoDescription = "TWO Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
                                        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    self.windowThreeWhatWeDoHeader = "What We Do Three";
    self.windowThreeWhatWeDoDescription = "THREE Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
                                          "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                                          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// ----------- SERVICES HEADING ---------------- //
    self.servicesHeader = "Our Sevices";
    self.servicesDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
                                "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// ------------ SERVICES ICONS ----------------- //
// MUST change icons in index.html file
    self.iconOneHeader = "Internet Marketing";
    self.iconOneDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.iconTwoHeader = "SEO";
    self.iconTwoDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.iconThreeHeader = "Software Development";
    self.iconThreeDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.iconFourHeader = "Cloud Hosting";
    self.iconFourDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

// ----------- CONTACT HEADING --------------- //
    self.contactHeader = "GET IN TOUCH";
    self.contactDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
                                "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
                                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// ------------ CONTACT EMAIL --------------- //
    self.contactEmailHeader = "Email Us!";

// ---------------- FOOTER ------------------ //
    self.footer = "Copyright (C) 2017 Company Name. All Rights Reserved";

// ---------------- MODAL ------------------ //
    self.modalHeader = "Get Started";
    self.modalContainer = "This is the Modal Container.  HTML gets built out in index.html file " +
                          "using HTML5 and CSS3 elements and styling.  Must EDIT this area BEFORE USE. " +
                          "The modal is mobile friendly and the height dynamically changes with the amount of HTML content.";



    self.accFunction = function(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    };


// sends email request and data to server side
    self.sendEmail = function(mailObject) {
      $http.post('/mail', mailObject).then(function(response){
        console.log("Email has been sent: ", response.data);
        self.mailObject = "";
    });
  }


}]);//ennd of app.controller


var app = angular.module('AngularApp', []);

app.controller('MainController', function () {


    var self = this;

    self.message = "Angular is sourced correctly";

// -------------- NAVIGATION ------------------- //
    self.buisnessHeader = "Buisness Name or Logo";

// --------------- SHOWCASE -------------------- //
    self.homeMainTitle = "Home Main Title";
    self.homeMainDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION " +
                                "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

// ------------- SECTION ONE ------------------ //
    self.windowTwoHeader = "Welcome Home";
    self.windowTwoDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

// ------------- SECTION TWO ------------------ //
    self.windowThreeHeader = "Let's Begin";
    self.windowThreeDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

// ---------------- ABOUT --------------------- //
    self.windowOneWhatWeDoHeader = "What We Do One";
    self.windowOneWhatWeDoDescription = "One DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION " +
                                        "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.windowTwoWhatWeDoHeader = "What We Do Two";
    self.windowTwoWhatWeDoDescription = "Two DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION " +
                                        "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.windowThreeWhatWeDoHeader = "What We Do Three";
    self.windowThreeWhatWeDoDescription = "Three DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION " +
                                          "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

// ----------- SERVICES HEADING ---------------- //
    self.servicesHeader = "Our Sevices";
    self.servicesDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

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
    self.contactDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

// ------------ CONTACT EMAIL --------------- //
    self.contactEmailHeader = "Email Us!";

// ---------------- FOOTER ------------------ //
    self.footer = "BUISNESS NAME COPYRIGHT; 2017";

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

});//ennd of app.controller


var app = angular.module('AngularApp', []);

app.controller('MainController', function () {


    var self = this;

    self.message = "Angular is sourced correctly";
    self.buisnessHeader = "Buisness Name or Logo";

    self.homeMainTitle = "Home Main Title";
    self.homeMainDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION " +
                                "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";
    self.windowTwoHeader = "Welcome Home";
    self.windowTwoDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.windowThreeHeader = "Let's Begin";
    self.windowThreeDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.windowOneWhatWeDoHeader = "What We Do One";
    self.windowOneWhatWeDoDescription = "One DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION " +
                                        "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.windowTwoWhatWeDoHeader = "What We Do Two";
    self.windowTwoWhatWeDoDescription = "Two DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION " +
                                        "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.windowThreeWhatWeDoHeader = "What We Do Three";
    self.windowThreeWhatWeDoDescription = "Three DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION " +
                                          "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.servicesHeader = "Our Sevices";
    self.servicesDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.iconOneHeader = "Internet Marketing";
    self.iconOneDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.iconTwoHeader = "SEO";
    self.iconTwoDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.iconThreeHeader = "Software Development";
    self.iconThreeDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";

    self.iconFourHeader = "Cloud Hosting";
    self.iconFourDescription = "DISCRIPTION DISCRIPTION DISCRIPTION DISCRIPTION";


    self.accFunction = function(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    };

});//ennd of app.controller

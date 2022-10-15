$("#start").click();
var goal = $("#endpagelink0 > a").attr('href').replace("http://en.wikipedia.org/", ""); 
var goalArray = $("#wiki").attr("src").split("?"); 
goalArray[1] = "?" + goalArray[1];
goalArray[0] = goal;
$("#wiki").attr("src", goalArray.join().replace(",", ""));

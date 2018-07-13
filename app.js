const banner = new Vue({
    el: ".wrap",
    data: {
        bnrLst: banners
    }
})
$('.mySlides:first').attr('checked', true);


var myLength = $('.wrap header label').length;
mynum = 0;

$('.wrap header label').on('click', function() {
    mynum = $(this).index();
    console.log(mynum);
})

function nextBanner() {
    $('#slide-' + mynum + '-trigger').attr('checked', false);
    mynum += 1;
    if (mynum == myLength) {
        $('#slide-' + '0' + '-trigger').attr('checked', true);
        mynum = 0; 
    } else {
        $('#slide-' + mynum + '-trigger').attr('checked', true);
    }
    console.log("Banner - " + mynum + " is active");
}
function lastBanner() {
    $('#slide-' + mynum + '-trigger').attr('checked', false);
    (mynum == 0) ? mynum = myLength - 1 : mynum -= 1;
    $('#slide-' + mynum + '-trigger').attr('checked', true);
    console.log("Banner - " + mynum + " is active")
}

$('.box.right').on('click', function() {nextBanner();});
$('.box.left').on('click', function() {lastBanner();})

var myVar;
myStartFunction();
function myStartFunction() {
    myVar = setInterval(function(){ alertFunc("First parameter", "Second parameter"); }, 4500);
}

function myStopFunction() {
    clearInterval(myVar);
}
function alertFunc(param1, param2) {
    nextBanner();
}


$('.wrap').on({
    mouseenter: function() {myStopFunction();},
    mouseleave: function() {myStartFunction();}
})

$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    lastBanner();
    myStopFunction();
  }
  else if(e.keyCode == 39) { // right
    nextBanner();
    myStopFunction();
  }
});
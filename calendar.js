
// Set the date we're counting down to
var countDownDate = new Date("Aug 5, 2022 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "VACATION!";
  }
}, 1000);

// saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();
		}
/*var contacts = [
{
name: "Jamie", 
email: "jamie.spang@test.test", 
phone: "859-555-0123"
}, {
name: "Sara", 
email: "sara.smith@test.test", 
phone: "859-555-0124"
}, {
name: "Savanna", 
email: "savanna.barnes@test.test", 
phone: "859-555-0125"
}, {
name: "Jake", 
email: "jake.miles@test.test", 
phone: "859-555-0126"
}, {
name: "David", 
email: "david.bates@test.test", 
phone: "859-555-0127"
}]; 
$(function(){
	$.each(contacts, function(index, value){
	$('#example').append(''+value.name+'<br>'); 
	console.log(index); 
	}); 
});*/

//Contact Array
const ArraySara = ['Sara Smith', "sara.smith@test.test","859-555-0124"]; 
const ArrayJake = ['Jake Miles', "jake.miles@test.test","859-555-0126"]; 
const ArraySavanna = ['Savanna Barnes', "savanna.barnes@test.test","859-555-0125"]; 
const ArrayDavid = ['David Bates', "david.bates@test.test","859-555-0127"]; 




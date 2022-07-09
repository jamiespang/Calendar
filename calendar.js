const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "4ea217fed2msh49eb425424a96c4p103595jsnc6798693c974",
		"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

// Create a new chore when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
var selectedObjs;
var draggableOptions = {
  helper: function() {
    return $("<div class='Dragbox'> You have selected" + $('div.selected').length + "Item <div>");
  },
  cursor: "move",
  cursorAt: {
    top: 10,
    left: 50
  },

  start: function() {
    selectedObjs = $('div.selected');
  }
};

$(".checkbox-drag").click(function() {
  if ($(this).is(":checked")) {
    $(this).closest(".draggable").addClass("selected");
  } else {
    $(this).closest(".draggable").removeClass("selected");
  }

  var selectedObjects = $('div.selected');

  $(".draggable").draggable();
  if (selectedObjects.length > 0) {
    $(".draggable").draggable("destroy");
    $(selectedObjects).draggable(draggableOptions);
  } else {
    $(".draggable").draggable("destroy");

  }

});
$('.droppable').droppable({
  hoverClass: "darggablehover",
  drop: function(event, ui) {
    counterEle = $(this).find(".counter");
    counter = Number(counterEle.text()) + selectedObjs.length;
    $(counterEle).html(counter);
    $(selectedObjs).hide("slow", function() {
      $(selectedObjs).remove();
    });
  }
});
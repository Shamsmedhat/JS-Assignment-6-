$(".singer").on("click", function () {
  let singerContent = $(this).find("p");
  singerContent.slideToggle(500);
});

let partyDate = new Date("Oct 10,2023  18:00:00").getTime();

let countDownDate = setInterval(function () {
  let currentTime = new Date().getTime();
  var distance = partyDate - currentTime;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // document.getElementById("eventDate").innerHTML =
  //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  document.getElementById("eventDate").children[0].innerText = `${days} D`;
  document.getElementById("eventDate").children[1].innerText = `${hours} H`;
  document.getElementById("eventDate").children[2].innerText = `${minutes} M`;
  document.getElementById("eventDate").children[3].innerText = `${seconds} S`;

  if (seconds && days <= 0) {
    document.getElementById("eventDate").innerHTML = "Party Started";
  }
}, 1000);

let textArea = document.getElementsByTagName("textarea")[0];
textArea.maxLength = 100;

$(".navBtn").on("click", function () {
  if ($("#links").css("left") < `${0}px`) {
    $("#links").animate({ left: "0%" }, 500);
  } else {
    $("#links").animate({ left: "-25%" }, 500);
  }
});

$(".closeBtn").on("click", function () {
  $("#links").animate({ left: "-25%" }, 500);
});

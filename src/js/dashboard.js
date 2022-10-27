let doctortab = $('.doctortab');
let alldoctortab = $('.alldoctortab');
let appointmenttab = $('.appointmenttab');
let timetab = $('.timetab');
let specialitytab = $('.specialitytab');
let adddoctorbtn = $('.adddoctorbtn');
let calender = $('#calender');
let starttime = $('.starttime');
let clinictime = document.getElementById('#clinictime');
let timeslots = $('.timeslots');



$('.addoptions').hide();
$('.addbtn')[0].addEventListener('click', function () {

    // if ($('.addoptions').hide(500)){
    //     $('.addoptions').show(500)
    //     $('.addoptions').css('width', '150%');
    // }
    $('.addoptions').toggle(500);
});

$('.patientinfosection').hide();
$('.patient')[0].addEventListener('click', function () {
    $('.patientinfosection').slideToggle();
    $('.appointmentinfosection').hide();
    $('.doctorinfosection').hide();
    $('.addoptions').hide(500);
})

$('.appointmentinfosection').hide();
$('.appointment')[0].addEventListener('click', function () {
    $('.appointmentinfosection').slideToggle();
    $('.patientinfosection').hide();
    $('.doctorinfosection').hide();
    $('.addoptions').hide(500)
})

$('.doctorinfosection').hide();
$('.doctorslot')[0].addEventListener('click', function () {
    $('.doctorinfosection').slideToggle();
    $('.patientinfosection').hide();
    $('.appointmentinfosection').hide();
    $('.addoptions').hide(500)
})



for (var i = 20; i >= 0; i--) {
    let doctorarray = [];
    doctorarray[i] = `<button class="btn m-1"><h6 class="m-0">Doctors Name ${[i]}</h6><p class="m-0"></button>`;
    doctortab.html(doctorarray[i] += doctortab.html());
}

for (var l = 10; l >= 0; l--) {
    let timearray = [];
    timearray[l] = `<button class="btn timebtns m-1"><h6 class="m-0">Time Slot ${[l]}</h6><p class="m-0"></button>`;
    timetab.html(timearray[l] += timetab.html());
}


for (var m = 10; m >= 0; m--) {
    let timeslotarray = [];
    timeslotarray[m] = `<button class="btn timeslotbtns m-1"><h6 class="m-0">Time Slot ${[m]}</h6><p class="m-0"></button>`;
    timeslots.html(timeslotarray[m] += timeslots.html());
}

var specialityvalue = [
    { id: 1, name: "Cardilogy" },
    { id: 2, name: "Internal Medicine" },
    { id: 12, name: "Child Health" },
    { id: 22, name: "Rheumatology" },
    { id: 23, name: "General Surgery" },
    { id: 24, name: "Urology" },
    { id: 25, name: "Endocrine" },
    { id: 26, name: "Family Medicine" },
    { id: 27, name: "Hemetology" },
    { id: 28, name: "Psychiatry" },
    { id: 29, name: "Men&#039;s Sexual Health" },
    { id: 30, name: "Dermatology" },
    { id: 31, name: "Digestive Diseases" },
    { id: 32, name: "Respiratory Medicine" },
    { id: 33, name: "Orthopedics" },
    { id: 34, name: "Spine Surgeon" },
    { id: 35, name: "Oncology" },
    { id: 36, name: "Physiotherapy" },
    { id: 37, name: "ENT, Head &amp; Neck" },
    { id: 38, name: "Nephrology" },
    { id: 39, name: "Women&#039;s health" },
    { id: 40, name: "Nutrition &amp; Dietics" },
].reverse();

for (var m = 0; m < specialityvalue.length; m++) {
    specialityvalue[m] = `<button class="btn specialitybtns m-1"><h6 class="m-0">${specialityvalue[m].name} [${specialityvalue[m].id}]</h6><p class="m-0"></button>`;
    specialitytab.html(specialityvalue[m] += specialitytab.html());
}




function reset() {
    window.reload();
}

function closeform() {
    if ($('.patientinfosection').show()) {
        $('.patientinfosection').hide();
    }
    if ($('.appointmentinfosection').show()) {
        $('.appointmentinfosection').hide()
    }
    if ($('.doctorinfosection').show()) {
        $('.doctorinfosection').hide()
    }
 
   
}


const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let monthname = month[d.getMonth()];
var fullDate = new Date()
var currentDate = monthname + " " + fullDate.getDate() + "," + fullDate.getFullYear();
calender.html(currentDate);

$(document).ready(function() {
    clockUpdate();
    setInterval(clockUpdate, 1000);
  })
  
  function clockUpdate() {
    var date = new Date();
    $('.digital-clock').css({'color': '#fff', 'text-shadow': '0 0 6px #ff0'});
    function addZero(x) {
      if (x < 10) {
        return x = '0' + x;
      } else {
        return x;
      }
    }
  
    function twelveHour(x) {
      if (x > 12) {
        return x = x - 12;
      } else if (x == 0) {
        return x = 12;
      } else {
        return x;
      }
    }
  
    var h = addZero(twelveHour(date.getHours()));
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());

    $('#livetime').text(h + ':' + m + ':' + s);
    
  }

$('#startbtn').attr('disabled', true);
$('#starttime').on('input', function () {
    $('#startbtn').attr('disabled', false);
})

var starttimeval=""
$('#starttime').on('change',function(){
  
    starttimeval = this.value;
       console.log(starttimeval);
       console.log(typeof(starttimeval));
})

var roomnumber = "";
$('#clinicroom').on('change', function() {
    roomnumber = this.value;
    console.log(roomnumber);
    console.log(typeof(roomnumber));
  });

 function timeview1(){
    $('#starttime').attr('disabled',true);
    $('#startbtn').attr('disabled', true);
 }




 let timecard=[];
 
 const timeobj={starttime:"",room:"",endtime:"",totalhours:""};

 document.getElementById('addslotbutton').addEventListener('click',function(){
    timecard.push(timeobj);
    console.log(timecard.length);
    console.log(starttime)
    for(n=0;n<timecard.length;n++){
        timecard[n].room=roomnumber;
        timecard[n].starttimeval = starttime;
        console.log(timecard[n].room)
        console.log(timecard[n].starttime);
        console.log(timecard[n]);
    }
 })

function closeslot(){
    if ($('.card1').show()) {
        $('.card1').hide()
    }
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
 
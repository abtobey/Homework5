
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var scheduleList=JSON.parse(localStorage.getItem("scheduleList"));
if(scheduleList=== null){
    scheduleList=[];
    for(let i=0; i<24; i++){
        scheduleList.push({hour: i, task: ""});
    }
}

//creating all the divs using DOM
let currentHour=moment().format('H')
for(let i=9; i<18; i++){
    //create the row to contain the elements
    let newRow=document.createElement("div");
    newRow.classList="row past";
    if(i>currentHour){
        newRow.classList="row future";
    }else if(i===Math.round(currentHour)){
        newRow.classList="row present";
    }
    $(".container").append(newRow);
    //create the box that sirplays the hours
    let hourBox=document.createElement("div");
    hourBox.classList="hour col-1";
    hourBox.innerText=(i+":00");
    newRow.append(hourBox);
    //create the text area
    let newtextArea=document.createElement("textarea");
    newtextArea.classList="col-10";
    newtextArea.id=(i);
    newtextArea.innerText=scheduleList[i].task;
    newRow.append(newtextArea);
    //create the buttons
    let newBtn = document.createElement("button");
    newBtn.classList="saveBtn col-1";
    newBtn.value=i;
    newBtn.innerText="Save";
    newRow.append(newBtn);
}
//save to local storage
    $(".saveBtn").on("click", function(event){
        event.stopPropagation();
        scheduleList[this.value].task=document.getElementById(this.value).value;
        console.log(this.value);
        localStorage.setItem("scheduleList",JSON.stringify(scheduleList));
    })
    

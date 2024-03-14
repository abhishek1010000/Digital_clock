// let hr = document.getElementById("hr");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");

setInterval(()=>{
    let date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    seconds =date.getSeconds();
    // console.log(hour,minute,seconds);

    let d;
    d = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 0 : hour;

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = minute;
    document.querySelector(".sec_num").innerText = seconds;
    document.querySelector(".am_pm").innerText = d;
    
}, 1000)
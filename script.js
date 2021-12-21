function calculate(speed) {
    function convertHourstoMinute(str) {
        let [hours, minutes] = str.split(':');
        return (+hours * 60) + (+minutes);
    }
    let hr = document.querySelector("input").value;
    // console.log(hr);
    let spd = document.querySelector("input#speed").value;
    // console.log(spd);
    let totalMinutes = convertHourstoMinute(hr);
    let speed1 = Math.round(totalMinutes / spd);
    document.getElementById("info").innerHTML = `<center>Playback Time: <span>${speed1}</span> Minutes</center>`
    // console.log("Time: " + speed1 + " Minutes");
}
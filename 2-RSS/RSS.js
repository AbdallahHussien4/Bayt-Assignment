APIKEY = "AIzaSyBrxMji_hGo6bc2iuw7xHV80SDlV0EjUZY"
function buildTable(jobs) {
    var table =
        `<tr><th>Title</th>
            <th>Country</th>
            <th>City</th>
            <th>Location in Map</th>
        </tr>`;
    for (var i = 0; i < jobs.length; i++) {
        table += "<tr><td>" +
        jobs[i].childNodes[1].textContent +                     // Title
        "</td><td>" +
        jobs[i].childNodes[13].textContent +                    //Country
        "</td><td>" +
        jobs[i].childNodes[12].textContent+                     //City
        "</td><td>" + "<button class='MapButton' onClick = \"updateFrame('"+jobs[i].childNodes[12].textContent+ "')\"> View in Map</button>";          //Loccation
    }

    // Print the xml data in table form
    document.getElementById("table").innerHTML = table;
}

function run()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "all-rss.xml", true);
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(this.responseText,"text/xml");
            var jobs = xmlDoc.getElementsByTagName("item");
            buildTable(jobs);
            // console.log(xmlDoc.getElementsByTagName("item")[1].childNodes[1].textContent); // Title
            // console.log(xmlDoc.getElementsByTagName("item")[1].childNodes[13].textContent); //Country
            // console.log(xmlDoc.getElementsByTagName("item")[1].childNodes[12].textContent); //City
        }
    };
    xmlhttp.send(null);

}

function updateFrame(city)
{
  document.getElementById("map").src = "https://www.google.com/maps/embed/v1/place?key="+APIKEY+"&q="+city;
}
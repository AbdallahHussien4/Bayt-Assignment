function buildTable(xmlDoc) {
    var table =
        `<tr><th>Title</th>
            <th>Country</th>
            <th>City</th>
        </tr>`;
    var jobs = xmlDoc.getElementsByTagName("item");

    for (var i = 0; i < jobs.length; i++) {
        table += "<tr><td>" +
        jobs[i].childNodes[1].textContent +         // Title
        "</td><td>" +
        jobs[i].childNodes[13].textContent +         //Country
        "</td><td>" +
        jobs[i].childNodes[12].textContent;         //City
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
            buildTable(xmlDoc);
            // console.log(xmlDoc.getElementsByTagName("item")[1].childNodes[1].textContent); // Title
            // console.log(xmlDoc.getElementsByTagName("item")[1].childNodes[13].textContent); //Country
            // console.log(xmlDoc.getElementsByTagName("item")[1].childNodes[12].textContent); //City
        }
    };
    xmlhttp.send(null);

}

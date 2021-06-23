// from data.js
var tableData = data;

// select button and form
var button = d3.select("#filter-btn"); 
var form = d3.select("#form");

// function on event change
function formChange() {
    // prevent refresh 
    d3.event.preventDefault();

    // grab inserted date
    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");
    
    // filter data based on date given 
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // grab table body
    var tbody = d3.select("tbody");

    // empty body 
    tbody.html("");

    // insert table 
    filteredData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
            row.append("td").text(value);
        });
    });
}

// call function on event change 
button.on("click", formChange);
form.on("submit", formChange);


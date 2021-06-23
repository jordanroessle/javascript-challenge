// from data.js
var tableData = data;

// select button and form 
var form = d3.select("#form");

// function to grab all inserted filters 
function grabFilters () {
    var filters = [];
    filters.push(d3.select("#datetime").property("value"));
    filters.push(d3.select("#city").property("value").toLowerCase());
    filters.push(d3.select("#state").property("value").toLowerCase());
    filters.push(d3.select("#country").property("value").toLowerCase());
    filters.push(d3.select("#shape").property("value").toLowerCase());
    return filters;
}

// function on event change
function formChange() {
    // prevent refresh 
    d3.event.preventDefault();

    // grab inserted date
    var inputValues = grabFilters();
    
    // filter data based on date given 
    var filteredData = tableData; 
    inputValues.forEach((value, index) => {
        if(value !== "") {
            // switch to do the correct filter
            switch(index) {
                case 0:
                    filteredData = filteredData.filter(sighting => sighting.datetime === value)
                    break;
                case 1:
                    filteredData = filteredData.filter(sighting => sighting.city === value)
                    break;
                case 2:
                    filteredData = filteredData.filter(sighting => sighting.state === value)
                    break;
                case 3:
                    filteredData = filteredData.filter(sighting => sighting.country === value)
                    break;
                case 4:
                    filteredData = filteredData.filter(sighting => sighting.shape === value)
                    break;
                default:
                    console.log("Something went very wrong!!!");
            }
        }
    });

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
form.on("submit", formChange);


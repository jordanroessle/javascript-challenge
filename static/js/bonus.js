// from data.js
var tableData = data;

// select button and form 
var form = d3.select("#form");

// function to grab all inserted filters 
function grabFilters () {
    var filters = [];
    filters.push(d3.select("#datetime").property("value"));
    filters.push(d3.select("#city").property("value"));
    filters.push(d3.select("#state").property("value"));
    filters.push(d3.select("#country").property("value"));
    filters.push(d3.select("#shape").property("value"));
    return filters;
}

// function on event change
function formChange() {
    // prevent refresh 
    d3.event.preventDefault();

    // grab inserted date
    var inputValues = grabFilters();
    
    console.log(inputValues)

    // filter data based on date given 
    // var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // // grab table body
    // var tbody = d3.select("tbody");

    // // empty body 
    // tbody.html("");

    // // insert table 
    // filteredData.forEach(sighting => {
    //     var row = tbody.append("tr");
    //     Object.values(sighting).forEach(value => {
    //         row.append("td").text(value);
    //     });
    // });
}

// call function on event change 
form.on("submit", formChange);


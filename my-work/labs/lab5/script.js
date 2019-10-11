
let w = 1200;
let h = 800;
let viz = d3.select("#container").append("svg")
                                    .attr("width", w)
                                    .attr("height", h)
                                    .style("background-color", "lavender")
;

d3.csv("new-cases-of-hiv-infection.csv").then(gotData);

function gotData(data){
    console.log(data);

    // Filter the data   --------- array.filter(...);
    function filterFunction(d){
        if (d.Code == "CHN"){
          return true;
        }
        else{
          return false;
        }
    }
    let filteredData = data.filter(filterFunction);
    console.log(filteredData);

    // this converts a data to date object (It is an object!!!!) --------- d3.timeParse();
    let yearToDateObjectConverter = d3.timeParse("%Y");
    let test = yearToDateObjectConverter("2001");
    // console.log(test)

    // this finds the minimum and maximum of an array --------- d3.min() / d3.max() / d3.extent()
    function findMinFunction(d){
        let year = d.Year;
        let properlyFormattedYear = yearToDateObjectConverter(year);
        return properlyFormattedYear;
    }
    let minYear = d3.min(filteredData, findMinFunction);
    let maxYear = d3.max(filteredData, findMinFunction);

    let domainArray = [minYear, maxYear];

    // alternative way of finding the max and min
    let alternativeDomainArray = d3.extent(filteredData, findMinFunction);
    console.log(domainArray);
    console.log(alternativeDomainArray);

    // create and position axis in D3 -------- d3.axisBottom() & group.call(axis);
    let xPadding = 50;
    let xScale = d3.scaleTime().domain(alternativeDomainArray).range([xPadding, w - xPadding]);
    // console.log(xScale( yearToDateObjectConverter("2007")));
    let xAxis = d3.axisBottom(xScale);

    let xAxisGroup = viz.append("g").attr("class", "xAxis");
    xAxisGroup.call(xAxis);

    let xAxisYPos = h - 30;
    xAxisGroup.attr("transform", "translate(0, " + xAxisYPos + ")");


    let valueKey = "Incidence - HIV/AIDS - Sex: Both - Age: All Ages (Number) (new cases of HIV)";
    // when there is space in the key, call it with data[keyString]
    let yScale = d3.scaleLinear().domain( d3.extent(filteredData, function(d) { return d[valueKey] } ) ).range([xAxisYPos, 30]);

    let yAxis = d3.axisLeft(yScale);
    let yAxisGroup = viz.append("g").attr("class", "yAxis");
    yAxisGroup.call(yAxis);

    let yAxisXPos =  xPadding;
    yAxisGroup.attr("transform", "translate(" + yAxisXPos + " , 0)");

}

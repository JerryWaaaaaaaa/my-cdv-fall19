
// load the json file from local
d3.json("data/trash.json").then(gotData);

// calculate how many weeks we have

// create an array to divide data based on day
// let processedData = new Array(numOfWeeks);

// 7 days a week
let days = new Array(7);

// in each day, there are six locations, each location has several items
for (let i = 0; i < days.length; i ++ ){
  days[i] = new Array(6);
  for(let j = 0; j < days[i].length; j ++ ){
    days[i][j] = new Array();
  }
}

//console.log(days);

function gotData(myData){
  divideData(myData);
  visualizeData(days);
}

function divideData(data){

    //console.log(data);
    // get the shared keys of the data
    let keys = Object.keys(data[0]);
    //console.log(keys);

    // loop through the data and divide them based on "day"
    for (let i = 0; i < data.length; i ++ ){
        let datum = data[i];
        for (let j = 0; j < keys.length; j ++ ){
          let k = keys[j];
          let index = getLocation(datum);
          if (k == "day") {
              switch(datum[k]){
                case "Monday":
                    days[0][index].push(datum);
                    break;
                case "Tuesday":
                    days[1][index].push(datum);
                    break;
                case "Wednesday":
                    days[2][index].push(datum);
                    break;
                case "Thursday":
                    days[3][index].push(datum);
                    break;
                case "Friday":
                    days[4][index].push(datum);
                    break;
                case "Saturday":
                    days[5][index].push(datum);
                    break;
                case "Sunday":
                    days[6][index].push(datum);
                    break;
              }
          }
        }

    }

    console.log(days);

}

function visualizeData(days){

      // create a chart
      let chart = d3.select("#container")
                                    .append("svg")
                                      .attr("id", "chart")
                                      .attr("width", 2400)
                                      .attr("height", 800)
                                      .style("background-color", "white")
      ;

      // create Day divs
      let locationGroups = chart.selectAll(".days").data(days).enter().append("g")
                                      .attr("class", getDaysClass)
                                      .attr("transform", getDaysPos)

                                      .selectAll(".locations").data(function(d,i,j) { console.log(d, i, j); return d; } ).enter().append("g")
                                                                      .attr("class", getLocationsClass)
                                                                      .attr("transform", getLocationsPos)
                                                                      .selectAll(".items").data(function(d,i,j) { return d; }).enter()
      ;

      // get the location
      locationGroups.append("rect")
                .attr("class", getItemsClass)
                .attr("x", 0)
                .attr("y", getItemsY)
                .attr("width", 30)
                .attr("height", 30)
                .attr("fill", getLocationFill)
      ;

      // get the material
      locationGroups.append("circle")
                .text(function(datum){
                    return datum["item"];
                })
                .attr("cx", 0)
                .attr("cy", getItemsY)
                .attr("r", 6)
                .attr("fill", getMaterialFill)
      ;

      // get the item
      locationGroups.append("text")
                .text(function(datum){
                    return datum["item"];
                })
                .attr("x", 0)
                .attr("y", getItemsY)
                .attr("fill", "#c8c8c8")
      ;

      // get throw away




}


function getDaysClass(data, i){
    return "day" + i;
}

function getDaysPos(data, i){
    let x = 330 * i + 45;
    let y = 50;
    return "translate(" + x + "," + y + ")";
}

function getLocationsPos(data, i){
    let x = i * 50;;
    let y = 25
    return "translate(" + x + "," + y + ")";
}

function getLocationsClass(data, i){
    return "location" + i
}

function getItemsClass(datum){
    return datum["day"] + "-" + datum["location"] + "-" + datum["item"];
}

function getItemsY(datum, i){
    return i * 50;
}



function getLocationFill(datum){
    let location = datum["location"];
    //console.log(datum, location);
    switch(location){
        case "home":
            return "#F1D4D4";
        case "cafe/restaurant":
            return "#AC8DAF";
        case "familyMart/store":
            return "#42B883";
        case "school":
            return "#484c7f";
        case "office":
            return "#315B96";
        default:
            return "#505050";
    }
}

function getMaterialFill(datum){
    let m = datum["material"];
    switch(m){
        case "plastic":
            return "#64b2cd";
        case "paper":
            return "#eaebd8";
        default:
            return "#f8a978";
    }
}

function getLocation(datum){
    let location = datum["location"];
    //console.log(datum, location);
    switch(location){
        case "home":
            return 0; // as an index
        case "cafe/restaurant":
            return 1; // as an index
        case "familyMart/store":
            return 2; // as an index
        case "school":
            return 3; // as an index
        case "office":
            return 4; // as an index
        default:
            return 5;
    }
}

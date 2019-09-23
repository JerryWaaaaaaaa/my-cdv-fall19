
// load the json file from local
d3.json("data/trash.json").then(gotData);

// calculate how many weeks we have

// create an array to divide data based on day
// let processedData = new Array(numOfWeeks);

// 7 days a week
let days = new Array(7);

// location for each day item (in the future I will have them further developed into weeks)
for (let i = 0; i < days.length; i ++ ){
  days[i] = new Array(5);
}

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
      let chart01 = d3.select("#viz-container")
                                    .append("svg")
                                      .attr("id", "chart01")
                                      .attr("width", 800)
                                      .attr("height", 1600)
                                      .style("background-color", "black")
      ;

      // create Monday shapes
      let items = chart01.selectAll(".groupedElement").data(days[1]).enter().append("g")
                                      .attr("class", "groupedElement")
                                      // .attr("transform", getPosition)
                                      .append("rect")
                                      .attr("width", 50)
                                      .attr("height", 50)
                                      .attr("fill", "white")
      ;

}

function getPosition(datum, i){
    let location = datum["location"];
    console.log(datum, i);
    let x;
    let y = 100 + i * 60;
    switch(location){
        case "home":
            x = 100 + 0 * 60;
            break;
        case "cafe/restaurant":
            x = 100 + 1 * 60;
            break;
        case "familyMart/store":
            x = 100 + 2 * 60;
            break;
        case "school":
            x = 100 + 3 * 60;
            break;
        case "office":
            x = 100 + 4 * 60;
            break;
    }
    return "translate(" + x + "," + y + ")";
}

function getLocation(datum){
    let location = datum["location"];
    console.log(datum);
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
    }
}

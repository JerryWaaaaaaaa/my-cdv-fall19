// 1. find *real* data (array containing JS objects) in JSON format

// 2. load data (make it *console.loggable* (what a word!) in our script)
d3.json("trash.json").then(gotData);

function gotData(data){

  console.log(data);

  // create svg
  let viz = d3.select("#viz-container")
                    .append("svg")
                      .attr("width", 800)
                      .attr("height", 800)
  ;

  // 3. concept: data and datapoint
  // 4. make on circle for each datapoint (size and position doesn't matter)

  // bin data
  viz.selectAll(".circles").data(data).enter().append("circle")
                                            .attr("cx", 400)
                                            .attr("cy", getYPos)
                                            .attr("r", getRadius)
                                            .attr("class", "circles")
                                            .attr("fill", getColor);
  ;

}

// 5. concept: functions that "return"
// 6. use function to position circles randomly


function getYPos(d3Pass, index){
  return (index + 1) * 30
}

function getRadius(d3Pass){
  console.log(d3Pass);
  return d3Pass.quantity * 5;
}

function getRandom(){
  return Math.random() * 800;
}

function getColor(d3Pass){
  if (d3Pass.material == "plastic") {
    return "orange";
  }
  else if (d3Pass.material == "paper"){
    return "blue";
  }
  else if (d3Pass.material == "wooden"){
    return "black";
  }
}



// 7. realize "who" calls this function / why is there no `()`?
// 8. concept: "passing value into function"
// 9. let's assume: "D3 passes value into the data function"
// 10. if D3 passes a value, how can we receive it?
// 11. use *real* information to impact the x position
// 12. let's assume: "D3 passes another value!"
// 13. how can we receive that value?
// 14. in which ways is D3 making our live easy?

let viz = d3.select("#viz-container")
                .append("svg")
                    .attr("id", "viz")
                    .attr("width", 800)
                    .attr("height", 800)
;
//
// let myRect = viz.append("rect")
//                     .attr("x", 100)
//                     .attr("y", 100)
//                     .attr("width", 100)
//                     .attr("height", 50)
// ;

let myData = [1, 2, 3, 4, 5];

function checkData(data){
  let d = data * 100;
  return d;
}

viz.selectAll("circle").data(myData).enter().append("circle")
                                                  .attr("cx", checkData)
                                                  .attr("cy", 400)
                                                  .attr("r", 20)
                                                  .attr("fill", "black")
;

// data we work with
let data = [
  {
    "laughs": 0,
    "mood": 0
  },
  {
    "laughs": 3,
    "mood": 6
  },
  {
    "laughs": 4,
    "mood": 3
  },
  {
    "laughs": 8,
    "mood": 9
  }
];


const w = 900;
const h = 500;
const padding = 20;
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("outline", "solid black")
;



let xScale = d3.scaleLinear().domain([0,9]).range([padding,w-padding]);
let yScale = d3.scaleLinear().domain([0,9]).range([h-padding,padding]);

function getX(d){
    return xScale(d.laughs)
}

function getY(d){
    return yScale(d.mood);
}


// let theSituation = viz.selectAll(".circles").data(data);
// let entering = theSituation.enter();
//
// entering.append("circle")
//     .attr("cx", getX)
//     .attr("cy", getY)
//     .attr("r", 10)
//     .attr("fill", "#303030")
// ;

let lineMaker = d3.line()
                 .x(getX)
                 .y(getY)
;

let test = lineMaker(data);
console.log(test);

let theSituation = viz.datum(data);
theSituation.append("path")
          .attr("d", lineMaker)
          .attr("fill", "none")
          .attr("stroke", "seagreen")
;

// viz.append("path").attr("d", test).attr("fill", "none").attr("stroke","black");

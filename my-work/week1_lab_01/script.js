let data = [
    {
        "timestamp": "2019-09-04T05:48:07.519Z",
        "milkTea": 10,
        "ramen": 10,
        "spaghettiBolognese": 7,
        "mango": 10,
        "dumpling": 8
    },
    {
        "timestamp": "2019-09-04T05:48:11.427Z",
        "milkTea": 7,
        "ramen": 5,
        "spaghettiBolognese": 6,
        "mango": 1,
        "dumpling": 7
    },
    {
        "timestamp": "2019-09-04T05:48:11.509Z",
        "milkTea": 7,
        "ramen": 9,
        "spaghettiBolognese": 10,
        "mango": 1,
        "dumpling": 8
    },
    {
        "timestamp": "2019-09-04T05:48:15.178Z",
        "milkTea": 10,
        "ramen": 10,
        "spaghettiBolognese": 4,
        "mango": 10,
        "dumpling": 10
    },
    {
        "timestamp": "2019-09-04T05:48:19.690Z",
        "milkTea": 5,
        "ramen": 10,
        "spaghettiBolognese": 8,
        "mango": 8,
        "dumpling": 7
    },
    {
        "timestamp": "2019-09-04T05:48:23.595Z",
        "milkTea": 1,
        "ramen": 10,
        "spaghettiBolognese": 10,
        "mango": 10,
        "dumpling": 5
    },
    {
        "timestamp": "2019-09-04T05:48:32.244Z",
        "milkTea": 10,
        "ramen": 10,
        "spaghettiBolognese": 9,
        "mango": 1,
        "dumpling": 8
    },
    {
        "timestamp": "2019-09-04T05:48:35.279Z",
        "milkTea": 10,
        "ramen": 9,
        "spaghettiBolognese": 8,
        "mango": 10,
        "dumpling": 7
    },
    {
        "timestamp": "2019-09-04T05:48:36.009Z",
        "milkTea": 10,
        "ramen": 10,
        "spaghettiBolognese": 9,
        "mango": 10,
        "dumpling": 9
    },
    {
        "timestamp": "2019-09-04T05:48:40.293Z",
        "milkTea": 10,
        "ramen": 10,
        "spaghettiBolognese": 10,
        "mango": 10,
        "dumpling": 10
    },
    {
        "timestamp": "2019-09-04T05:48:40.671Z",
        "milkTea": 8,
        "ramen": 8,
        "spaghettiBolognese": 7,
        "mango": 9,
        "dumpling": 7
    },
    {
        "timestamp": "2019-09-04T05:49:14.027Z",
        "milkTea": 1,
        "ramen": 10,
        "spaghettiBolognese": 1,
        "mango": 10,
        "dumpling": 1
    }
]

let container = document.getElementById("container");

let foodlist = averageData(data);

console.log(foodlist);

for(let i = 0; i < foodlist.length; i ++ ){
  let dataPoint = foodlist[i];
  // get the values we need
  let name = dataPoint.name;
  let average = dataPoint.score;

  // create the paragraph
  let node = document.createElement("P");
  let textNode = document.createTextNode(name);
  node.style.color = "white";

  // create the bar
  let nodeContainer = document.createElement("DIV");

  // give a class name to the nodeContainer
  nodeContainer.className = "bar";

  // size the nodeContainer based on the average
  nodeContainer.style.width = average * 20 + "px";

  node.appendChild(textNode);
  nodeContainer.appendChild(node);
  container.appendChild(nodeContainer);
}

function averageData(data){

  // create an empty array to save the new datums
  let newData = [];

  // get the sharing keys of each datum
  let keys = Object.keys(data[0]);

  console.log(keys);

  // for each key, loop through the data list to calculate average
  for(let i = 0; i < keys.length; i ++ ){

    let key = keys[i];
    let sum = 0;
    let num = 0;

    // loop through the data list
    for(let j = 0; j < data.length; j ++ ){

      let datum = data[j];

      // to see if the key is in the datum
      if(key in datum){
        sum += datum[key]; // this is how to get the value according to the key in an object
        num ++;
      }

    }

    // calculate the average score
    let avg = sum/num;

    // create an object with the key as the name and the average as the score (only when the key is a food type)
    if(!isNaN(avg)){
      // if avg is Nan it means that the key is not a food type
      let newDatum = {name: key, score: avg}
      // add the object to an array
      newData.push(newDatum);
    }

  }
  // return the value
  return newData;

}

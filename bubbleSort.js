let values = [];
let i =  0;
function setup() {
  createCanvas(400, 400);
  for(let i = 0;i<width;i++){
    values.push(random(height));
  }
}

function draw() {
  background(0);
  if(i<values.length){
    for(let j = 0;j<values.length-i-1;j++){
      let temp = values[j];
      if(values[j] > values[j+1]){
        values[j] = values[j+1];
        values[j+1] = temp;
      }
    }
  }
  else{
    console.log("Finished Sorting");
    noLoop();
  }
  i++;
  for(let i = 0;i<values.length;i++){
   stroke(random(255),random(255),random(255));
    //noStroke();
    //fill(random(255),random(255),random(255));
    rect(i , height, 1, -values[i]);
  }
}
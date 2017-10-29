var opacity = 255;

function scaleX(x) {
  x = (x + 24); // set to zero for origin
  x = (x * -1); // made positive
  x = ((x / 16) * 480); // scaled
  return x;
}

function scaleY(y) {
  y = (y - 6);
  y = ((y / 34) * 1020);
  return y;
}

function scaler() {
  for (var i = 0; i < allShips.length; i++) {
    allShips[i].x1 = scaleX(allShips[i].x1);
    allShips[i].x2 = scaleX(allShips[i].x2);
    allShips[i].x3 = scaleX(allShips[i].x3);
    allShips[i].x4 = scaleX(allShips[i].x4);
    allShips[i].y1 = scaleY(allShips[i].y1);
    allShips[i].y2 = scaleY(allShips[i].y2);
    allShips[i].y3 = scaleY(allShips[i].y3);
    allShips[i].y4 = scaleY(allShips[i].y4);
  }
}

scaler();

var sketch = function (p) {

  p.setup = function () {
    p.createCanvas(1100, 600);
    p.background(0);
    p.stroke(255);
    p.strokeWeight(1);
    console.log(allShips);
    p.lines();
  };

  p.lines = function () {
    for (var i = 0; i < allShips.length; i++) {
      p.tint(255, opacity);
      p.bezier(allShips[i].y1, allShips[i].x1, allShips[i].y2, allShips[i].x2, allShips[i].y3, allShips[i].x3, allShips[i].y4, allShips[i].x4);
      opacity = -50;
      console.log(opacity);
    }
  };

  p.draw = function () {
  };
};

var myp5 = new p5(sketch, "sketch");
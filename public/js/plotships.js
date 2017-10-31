var opacity = 255;

function scaleX(x) {
  x = (x + 22); // set to zero for origin
  x = (x * -1); // made positive
  x = ((x / 17) * 425); // scaled
  return x;
}

function scaleY(y) {
  y = (y - 9);
  y = ((y / 29) * 725);
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
    p.createCanvas(725, 425);
    p.background(0);
    p.strokeWeight(2);
    p.stroke(50);
    p.fill(50);
    console.log(allShips);
    p.lines();
  };

  p.lines = function () {
    for (var i = 0; i < allShips.length; i++) {
      p.stroke(opacity);
      p.strokeWeight(2);
      p.fill(opacity);
      p.bezier(allShips[i].y1, allShips[i].x1, allShips[i].y2, allShips[i].x2,
          allShips[i].y3, allShips[i].x3, allShips[i].y4, allShips[i].x4);
      if (i < (allShips.length - 1)) {
        p.stroke(opacity - 50);
        p.strokeWeight(0.5);
        p.line(allShips[i].y4, allShips[i].x4, allShips[i + 1].y1, allShips[i + 1].x1);
        p.ellipse(allShips[i].y4, allShips[i].x4, 3, 3);
        p.ellipse(allShips[i].y1, allShips[i].x1, 3, 3);
      };
      opacity = (opacity - 10);
      console.log(opacity);
    }
  };

  p.draw = function () {
  };
};

var myp5 = new p5(sketch, "sketch");
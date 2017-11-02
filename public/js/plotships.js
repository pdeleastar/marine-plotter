var opacity = 255;
var strokewidth = (allShips.length * 2);

function colourvalue(c) {
  c = ((c / allShips.length) * 255);
  return c;
}

function scaleX(x) {
  x = (x + 22);
  x = (x * -1);
  x = ((x / 17) * 425);
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
    p.lines();
  };

  p.lines = function () {
    for (var i = 0; i < allShips.length - 1; i++) {
      p.stroke(colourvalue(i), 0, 0);
      p.strokeWeight(strokewidth);
      p.bezier(allShips[i].y1, allShips[i].x1, allShips[i].y2, allShips[i].x2,
          allShips[i].y3, allShips[i].x3, allShips[i].y4, allShips[i].x4);
      if (i < allShips.length -1) {
        p.strokeWeight(0.3);
        p.noFill();
        p.line(allShips[i].y4, allShips[i].x4, allShips[i + 1].y1, allShips[i + 1].x1);
      }
      opacity = (opacity - 5);
      strokewidth = (strokewidth - 2);
    }
    p.strokeWeight(5);
    p.stroke(255);
    p.bezier(allShips[allShips.length-1].y1, allShips[allShips.length-1].x1, allShips[allShips.length-1].y2, allShips[allShips.length-1].x2,
        allShips[allShips.length-1].y3, allShips[allShips.length-1].x3, allShips[allShips.length-1].y4, allShips[allShips.length-1].x4);
  };

  p.draw = function () {
  };
};

var myp5 = new p5(sketch, "sketch");

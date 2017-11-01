'use strict';

exports.getMsiNumbersFromForm = function (payload) {
  let msiNumbers = [];
  msiNumbers.push(payload.msi1);
  msiNumbers.push(payload.msi2);
  msiNumbers.push(payload.msi3);
  msiNumbers.push(payload.msi4);
  msiNumbers.push(payload.msi5);
  msiNumbers.push(payload.msi6);
  return msiNumbers;
};

exports.reportError = function (err, msi) {
  console.log(JSON.stringify({
    error: err.message + 'Msi: ' + msi,
  }));
};

exports.getMsiDetails = function (result) {
  let shipCourse = {};
  if (result.raw.length > 1) {
    shipCourse.x1 = result.raw[0].latlng[0];
    shipCourse.y1 = result.raw[0].latlng[1];
    shipCourse.x2 = result.raw[Math.round(result.raw.length * 0.25)].latlng[0];
    shipCourse.y2 = result.raw[Math.round(result.raw.length * 0.25)].latlng[1];
    shipCourse.x3 = result.raw[Math.round(result.raw.length * 0.75)].latlng[0];
    shipCourse.y3 = result.raw[Math.round(result.raw.length * 0.75)].latlng[1];
    shipCourse.x4 = result.raw[(result.raw.length - 1)].latlng[0];
    shipCourse.y4 = result.raw[(result.raw.length - 1)].latlng[1];
  }

  return shipCourse;
};

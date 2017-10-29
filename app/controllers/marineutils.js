'use strict';

exports.getMsiNumbersFromForm = function (payload) {
  let msiNumbers = [];
  msiNumbers.push(payload.msi1);
  msiNumbers.push(payload.msi2);
  msiNumbers.push(payload.msi3);
  msiNumbers.push(payload.msi4);
  msiNumbers.push(payload.msi5);
  msiNumbers.push(payload.msi6);
  ;
  return msiNumbers;
};

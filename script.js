function isSameType(value1, value2) {
  const isValue1NaN = Number.isNaN(value1);
  const isValue2NaN = Number.isNaN(value2);


  if (isValue1NaN && isValue2NaN) return true;

  if (isValue1NaN || isValue2NaN) return false;

  return typeof value1 === typeof value2;
}

// do not change the code below.
// let value1 = prompt("Enter Start of the Range.");
// let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

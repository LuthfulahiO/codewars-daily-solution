/* You will be given two dimensions

a positive integer length (parameter named lng)
a positive integer width (parameter named wdth)
You will return an array of the size of each of the squares.*/
function sqInRect(lng, wdth) {
  //your code here
  if (lng === wdth) return null;
  let result = [];
  while (lng !== wdth) {
    if (lng > wdth) {
      lng -= wdth;
      result.push(wdth);
    } else if (wdth > lng) {
      wdth -= lng;
      result.push(lng);
    }
  }
  result.push(lng);
  return result;
}

console.log(sqInRect(5, 3));

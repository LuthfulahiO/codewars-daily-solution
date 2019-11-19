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

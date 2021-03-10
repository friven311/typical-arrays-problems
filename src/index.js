exports.min = function min (array) {
  if (undefined !== array && array.length > 0){
  return Math.min.apply( Math, array );}
  else {
    return 0;
  }
 }



exports.max = function max (array) {
  if (undefined !== array && array.length > 0){
  return Math.max.apply( Math, array );}
  else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (undefined !== array && array.length > 0){
   return array.reduce((a, b) => (a + b)) / array.length;}
   else {
     return 0;
   }
}

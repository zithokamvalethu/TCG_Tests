// function getTotal(marks) {
//     return marks.length
// }
// console.log([20+30+50])

const marks = [20, 12, 45];
const getTotal = (marks) => {
  return marks.reduce((array, current) => array + current, 0);
};
console.log(getTotal(marks));
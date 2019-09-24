const listA = [1, 2, 3];
const listB = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

console.log(zipList(listA, listB));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(listA, listB));
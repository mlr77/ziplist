function zipList(list1, list2) {
  console.assert(list2.length === list1.length);
  const list3 = [];
  let j = 0;
  for (let i = 0; i < list1.length; i++) {
    list3[j] = list1[i];
    j++;
    list3[j] = list2[i];
    j++;
  }
  return list3;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));

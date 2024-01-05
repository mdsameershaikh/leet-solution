//21. Merge Two Sorted Lists

/**
 * 
 * Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
 */
let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
// var mergeTwoLists = function (list1, list2) {
//   return list1.flatMap((item, index) => [item, list2[index]]);
// }; this flatmap is not supported by leetcode compiler

console.log(mergeTwoLists(list1, list2));

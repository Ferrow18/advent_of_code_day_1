import inputs from "./input.ts";

console.log("working I guess?");

const formatList = (list: string) => {
  let firstList: number[] = [];
  let secondList: number[] = [];
  // convert that list to two arrays
  list.split(" ").forEach((item, index) => {
    if (index % 2 === 0) {
      // console.log("item index: ", index, " of item: ", item);
      firstList.push(Number(item));
    } else {
      // console.log("item index: ", index, " of item: ", item);
      secondList.push(Number(item));
    }
  });
  return [firstList, secondList];
};

const sortLists = (firstList: number[], secondList: number[]) => {
  firstList.sort((a, b) => a - b);
  secondList.sort((a, b) => a - b);
  // console.log(firstList, secondList);
  return [firstList, secondList];
};

const checkDistance = (firstList: number[], secondList: number[]) => {
  let distanceDifference: number[] = [];
  for (let i = 0; i < firstList.length; i++) {
    distanceDifference.push(Math.abs(firstList[i] - secondList[i]));
  }
  // count the total distance difference
  const totalDistance = distanceDifference.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  // console.log("distance difference: ", "distanceDifference);
  console.log("total distance: ", totalDistance);
  return totalDistance;
};

const totalDistance = () => {
  const startTime = Date.now();
  const [firstList, secondList] = formatList(inputs);
  sortLists(firstList, secondList);
  checkDistance(firstList, secondList);
  const endTime = Date.now();
  console.log("totalDistance time in ms: ", endTime - startTime);
};

totalDistance();

// Part two, two solutions

// first solution
//avg 177ms

// const similarityCheck = (firstList: number[], secondList: number[]) => {
//   let count = {};
//   for (let i = 0; i < firstList.length; i++) {
//     let numberCounted = 0;
//     for (let j = 0; j < secondList.length; j++) {
//       if (firstList[i] === secondList[j]) {
//         numberCounted = numberCounted + 1;
//       }
//     }
//     count = { ...count, [firstList[i]]: firstList[i] * numberCounted };
//   }
//   const similarityScoreTotal = Object.values(count).reduce((a, b) => {
//     if (typeof a !== "number" || typeof b !== "number") {
//       throw new Error("a is not a number");
//     }
//     return a + b;
//   }, 0);
//   // console.log("counted: ", similarityScoreTotal);
//   return similarityScoreTotal;
// };

// second solution
// avg 9ms

const similarityCheck = (firstList: number[], secondList: number[]) => {
  const count = firstList.reduce((acc, num) => {
    acc[num] =
      (acc[num] || 0) + num * secondList.filter((n) => n === num).length;
    // console.log("acc: ", acc);
    return acc;
  }, {});

  const similarityScoreTotal = Object.values(count).reduce((a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("a is not a number");
    }
    return a + b;
  }, 0);
  console.log("similarityScore: ", similarityScoreTotal);
  return similarityScoreTotal;
};

const totalSimilarityScore = () => {
  const startTime = Date.now();
  const [firstList, secondList] = formatList(inputs);
  sortLists(firstList, secondList);
  similarityCheck(firstList, secondList);
  const endTime = Date.now();
  console.log("similarityScore time in ms: ", endTime - startTime);
};

totalSimilarityScore();

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
  const [firstList, secondList] = formatList(inputs);
  sortLists(firstList, secondList);
  checkDistance(firstList, secondList);
};

totalDistance();

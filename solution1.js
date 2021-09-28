const names = ["sbu", "vuli", "mark", "cindy"];

const removeItem = (itemList, itemName) => {
  const listWithRemovedItems = [];
  for (var i in itemList) {
    if (itemList[i] !== itemName) {
      listWithRemovedItems.push(itemList[i]);
    }
  }
  return listWithRemovedItems;
};

const removeItem1 = (itemList, itemName) => {
  return itemList.filter((element) => element !== itemName);
};


console.log(removeItem1(names, "mark"));

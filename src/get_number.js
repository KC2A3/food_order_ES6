function getNumber(listArr) {
  let order = [];
  for (let category of listArr) {
    let list = category.split('x');
    order.push({
      id: list[0],
      num: list[1]
    });
  }
  return order;
}
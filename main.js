var person = {
  money: 100,
  cals: 100,
  fat: 50
};
var chips = {
  money: 5,
  buy: function() {
    person.money = person.money - chips.money;
  }
};

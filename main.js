var person = {
  money: 100,
  cals: 100,
  fat: 50
};
var chips = {
  money: 5,
  chips: 0,
  buy: function() {
    person.money = person.money - chips.money;
    chips.chips = chips.chips + 1;
  },
  eat: function() {
    person.fat = person.fat + 10;
    person.cals = person.cals + 50;
  }
};

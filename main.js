var person = {
  money: 100,
  cals: 100,
  fat: 50
};
var chips = {
  money: 5,
  chips: 0,
  buy: function() {
    if (person.money > chips.money) {
      person.money = person.money - chips.money;
      chips.chips = chips.chips + 1;
    } else {
      alert("Not enough money")
    }
  },
  eat: function() {
    if (chips.chips > 0) {
      person.fat = person.fat + 10;
      person.cals = person.cals + 50;
      chips.chips = chips.chips - 1;
    } else {
      alert("Not enough chips")
    }
  }
};

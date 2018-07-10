class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  show() {
    console.log("Suit: " + this.suit +  ", Value: " + this.value + "\n");
  }
}

class Deck {
  constructor() {
    this.deck = [];
    this.suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    this.values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]

    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.values.length; j++) {
        this.deck.push(new Card(this.suits[i], this.values[j]))
      }
    }
  }

  shuffle() {
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor((Math.random() * this.deck.length));
      let location2 = Math.floor((Math.random() * this.deck.length));
      [this.deck[location1], this.deck[location2]] = [this.deck[location2], this.deck[location1]];
    }
    return this;
  }

  reset() {
    this.deck = [];
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.values.length; j++) {
        this.deck.push(new Card(this.suits[i], this.values[j]))
      }
    }
  }

  deal() {
    return this.deck.pop();
  }

  show() {
    console.log(this.deck)
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  discard() {
    return this.hand.pop();
  }

  takeCard(deck) {
    if (deck instanceof Deck) {
      this.hand.push(deck.deal());
    }
  }

  showHand() {
    console.log(this.hand);
  }
}

deck = new Deck();
deck.shuffle();
player = new Player("Patrick");
// deck.show();
// deck.shuffle();
// deck.show();
// console.log(deck.deal())
// deck.show()
player.takeCard(deck);
player.takeCard(deck);
player.takeCard(deck);
player.takeCard(deck);
player.takeCard(deck);
player.showHand();
// deck.show();
player.discard();
player.showHand();
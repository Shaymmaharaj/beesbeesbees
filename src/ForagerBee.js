var ForagerBee = function() {
	Bee.call(this, this.color)
	this.age = 10;
	this.job = "find pollen"
	this.canFly = true
	this.treasureChest = []
};
	ForagerBee.prototype.eat = function(){
		this.prototype.eat()
	}

	ForagerBee.prototype.forage = function(treasrue){
		this.treasureChest.push(treasrue)
	}

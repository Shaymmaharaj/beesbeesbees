var HoneyMakerBee = function() {
	Grub.call(this, this.food)
	Bee.call(this, this.color)
	this.age = 10
	this.job = 'make honey'
	this.honeyPot = 0
};
	HoneyMakerBee.prototype.eat = function(){
		this.prototype.eat()
	}

	HoneyMakerBee.prototype.makeHoney = function(){
		this.honeyPot += 1
	}

	HoneyMakerBee.prototype.giveHoney = function(){
		this.honeyPot -= 1
	}

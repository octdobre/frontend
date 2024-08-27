var purchase1 = {
    cost: 100,
    tax: 1.2,
    totalPrice: function(){
        console.log("Total price is", this.cost * this.tax)
    }
}

purchase1.totalPrice();
const cart = {
    added: [],
    add: function(toAdd) {
        this.added.push(toAdd);
        this.totalCost = this.totalCost + toAdd.price;
    },
    remove: function(toRemove){
        if(this.added.includes(toRemove)) {
            this.added.filter(entry => entry !== toRemove);
            this.totalCost = this.totalCost - toRemove.price;
        }
    },
    totalCost: 0,
}


export default cart
import uniqid from 'uniqid';

const cart = {
    added: [],
    add: function(toAdd) {
        const randomId = [Math.random() * 10, Math.random() * 10, Math.random() * 10];
        this.added = this.added.concat(toAdd);
        this.totalCost = this.totalCost + toAdd.price;
        console.log(this.added);

    },
    remove: function(toRemove){
        console.log(this.added);
        console.log(toRemove);
        if(this.added.includes(toRemove)) {
            const index = this.added.indexOf(toRemove);
            this.added.splice(index, 1);
            this.totalCost = this.totalCost - toRemove.price;
        }
    },
    totalCost: 0,
}


export default cart
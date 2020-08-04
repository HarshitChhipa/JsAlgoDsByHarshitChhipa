class Queue {
    data = [];
    maxSize;
    constructor(initialData, maxSize = -1) {
        this.data = Array.isArray(initialData) ? initialData : (typeof initialData == "undefined" ? [] : [initialData]);
        this.maxSize = maxSize;
    }

    isFull(){
       return this.maxSize !== -1 ? (this.data.length === this.maxSize): false; 
    }
    
    isEmpty(){
        return this.data.length === 0;
    }

    enqueue(){
        if(this.isFull){
            return false;
        }
        this.data.push(item); 
    }
    *generator(){
        while(!this.isEmpty){
            yield this.data.shift()
        }
    }
    dequeue(){
        const {value, done} = this.generator().next();
        if(done) return false
        return value
    }
}
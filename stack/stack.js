class Stack {
    data = [];
    maxSize;
    constructor( initialData, maxSize = -1){
        this.data = initialData;
        this.maxSize = maxSize;
    }
}
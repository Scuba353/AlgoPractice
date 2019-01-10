//Link to join live lectures: https://codingdojo.zoom.us/j/262169545
//Link to join discussions: academy.codingdojo.com

//SLL node structure
function SLNode(val){
    this.val= val;
    this.next= null;
}

//SSL Queue
function SLQueue(){
    this.head= null;
    this.tail= null;
    this.isEmpty= function(){
        return this.head === null;
    }
    this.hasOne = function(){
        return (!this.isEmpty()&& this.head.next == null)
    }
    //add a node to the queue
        //from here to end can add to the prototype method
    this.enqueue= function(val){
        //create new node with val
        var newNode= new SLNode(val);
        //point current tail to the new node
        this.tail= newNode;
        //check if there is anything in the queue
        if(this.isEmpty()){
            this.head = newNode;
            return this
        }
        // then traverse to end of queue, add new item at end
        var curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }
}

var testQ= new SLQueue();
testQ.enqueue(1).enqueue(2).enqueue(3)

//better for memory for defining methods.
SLQueue.prototype.newMethod = function(arg){
    return arg;
}

//DEQUEUE
SLQueue.prototype.dequeue = function(val){
    //empty
    if(this.isEmpty()){
        return -1
    }
    //store value to return
    var valToReturn = this.head.val;
    
    //single node
    if(this.hadOne()){
        this.head= null;
        this.tail= null;
        return valToReturn
    }
    //multiple nodes
    this.head =this.head.next;
    return valToReturn
}

function SLStack(){
    this.head= null;
    this.tail= null;
    this.isEmpty= function(){
        return this.head === null;
    }
    this.hasOne = function(){
        return (!this.isEmpty()&& this.head.next == null)
    }
}

SLStack.prototype.push = function (val){
    var newNode = new SLNode(val);

    if(this.isEmpty()){
        this.head= newNode;
        return;
    }
    //address pointers of nodes
    newNode.next = this.head;
    this.head = newNode;
    return this
}

SLStack.prototype.pop = function (val){
    if(this.isEmpty()){
        return -1;
    }
    var valToReturn= this.head.val
    this.head = this.head.next;
    return valToReturn;
}

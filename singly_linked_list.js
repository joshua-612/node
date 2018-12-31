class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
         var newNode = new Node(val);
         if (!this.head){
             this.head = newNode;
             this.tail = this.head;
         }else{
             this.tail.next = newNode;
             this.tail = newNode;
         }
         this.length ++;
         return this;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
        
    }
    pop(){
        // List Empty
        if(!this.head){
            console.log("List empty")
        }else{
            let current = this.head;
            let temp = null
            while(current.next){
                temp = current;
                current = current.next;
            }
            this.tail = temp;
            this.tail.next = null;
            console.log("popped",this.tail.val);
        }
    }
}

let list = new SinglyLinkedList()
list.push("Hello 1");
list.push("Hello 2");
list.push("Hello");
list.push("shiki");
list.push("oppai");
list.pop();
list.pop();
list.pop();
list.pop();

//console.log(list.print());
// list.pop("hello");
list.print();

console.log("HI")
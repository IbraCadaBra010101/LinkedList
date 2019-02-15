function LinkedList(head, tail) {
    this.head = head;
    this.tail = tail;
}

function Node(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
}

LinkedList.prototype.addToHead = function (value) {
    let newNode = new Node(value, this.head, null);
    if (this.head) this.head.previous = newNode;
    else this.head = newNode;
    this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
    let anotherNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = anotherNode;
    else this.tail = anotherNode;
    this.tail = anotherNode;
};

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null;

    let val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.previous = null;
    else this.tail = null;
    return val;
};

LinkedList.prototype.removeTail = function () {
    if (!this.tail) return null;
    let tailValue = this.tail.value;
    this.tail = this.tail.previous;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return tailValue;
};

LinkedList.prototype.searchLinkedList = function (searchValue) {
    let traverseNodes = this.head;
    while (traverseNodes) {
        // if loop ignores if statement it will move to searching
        // through the nodes below.
        if (traverseNodes.value === searchValue) return traverseNodes;

        traverseNodes = traverseNodes.next;
    }
    return null;

};


LinkedList.prototype.indexOf = function (value) {
    let indexArray = [];
    let index = 0;
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === value) {
            indexArray.push("Index number "+ index + " contains " + value);
        }
        currentNode = currentNode.next;
        index++;
    }
    return indexArray;
};
let linkedList = new LinkedList();
linkedList.addToHead("Pizza");
linkedList.addToHead("Tofu");
linkedList.addToHead("Tofu");
linkedList.addToHead("Pizza");
linkedList.addToHead("Tofu");

linkedList.addToHead("Hard boiled eggs");
linkedList.addToHead("Pizza");
console.log(linkedList.indexOf("Pizza"));
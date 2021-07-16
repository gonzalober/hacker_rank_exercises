//Insert a node at a specific position in a linked list
const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const insertNodeAtPosition = (head, data, position) => {
  // Write your code here
  if (head === null) {
    head = new SinglyLinkedListNode(data, null);
    return head;
  }
  let current = head;
  let i = 1;
  while (current) {
    if (i === position) {
      const node = new SinglyLinkedListNode(data, null);
      node.next = current.next;
      current.next = node;

      return head;
    }

    i++;
    current = current.next;
    console.log(head);
  }
};
let aa = new SinglyLinkedListNode(16);
let bb = new SinglyLinkedListNode(13);
let cc = new SinglyLinkedListNode(7);
aa.next = bb;
bb.next = cc;
insertNodeAtPosition(aa, 1, 2);

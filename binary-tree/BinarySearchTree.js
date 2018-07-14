class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const addNode = (node, data) => {
  if (data < node.data) {
    if (node.left === null) {
      node.left = new Node(data);
      return;
    } else {
      return searchTree(node.left);
    }
  } else if (data > node.data) {
    if (node.right === null) {
      node.right = new Node(node.right);
      return;
    } else {
      return searchTree(node.right);
    }
  } else return null;
};

const removeNode = (node, data) => {
  //In this function returning anything will set the value of the node passed as parameter to the one we are returning.

  //node is null
  if (node == null) return null;
  if (data == node.data) {
    //node has no children
    if (node.left == null && node.right == null) {
      return null;
    }
    //node has no left child
    if (node.left == null) return node.right;

    //node has no right child
    if (node.right == null) return node.left;
    //node has two children
    //In this case we will have to switch to right sub node and then go to the left leaf node.
    let tempNode = node.right;
    while (tempNode.left != null) {
      tempNode = tempNode.left;
    }
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
  } else {
    node.right = removeNode(node.right, data);
  }
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
   add(data){
    const node = this.root;
    //If this is first node then value of node will be null so we will create a New Node ie root node.
    if (node == null) {
      this.root == new Node(data);
      return;
    }
    return addNode(this.root, data);
  };

  remove(data){
    const node = this.root;
    this.root = removeNode(node, data);
  };

  findMin(){
    let current = this.root;
    while (current!==null && current.left !== null) {
      current = current.left;
    }
    return current.data;
  };

  findMax(){
    let current = this.root;
    while (current!=null&& current.right !== null) {
      current = current.right;
    }
    return current.data;
  };

  find(data){
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  };

  isPresent(data){
    let current = this.root;
    while (current) {
      if (data == current.data) {
        return true;
      }
      if (data > current.data) current = current.right;
      else current = current.left;
    }
    return false;
  };
}


const bst = new BinarySearchTree();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
// bst.remove(4);
// console.log(bst.findMin())
// console.log(bst.findMax())
// console.log(bst.isPresent(4))
// console.log(bst.findMin())
// console.log(bst.find(3))
console.log(bst)


//TODO -- Inorder, Postorder, Preorder
//Lowest common anccesstor
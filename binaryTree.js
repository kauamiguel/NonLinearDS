class Tree {
  constructor(left, right, value) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insertLeft(root, node) {
    if (root.left === null) {
      root.left = node;
      return;
    } else {
      this.insertLeft(root.left, node);
      return;
    }
  }

  insertRight(root, node) {
    if (root.right === null) {
      root.right = node;
      return;
    } else {
      this.insertLeft(root.right, node);
      return;
    }
  }

  inOrder(root) {
    if (root) {
      console.log(root.value);
      this.inOrder(root.left);
      this.inOrder(root.right);
    }
  }
}

const root = new Tree(new Tree(null, null, 20), new Tree(null, null, 40), 10);
root.insertLeft(root, new Tree(null, null, 5));
root.insertRight(root.left, new Tree(null, null, 15));
root.inOrder(root);

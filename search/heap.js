function BinaryTree(value) {
    this.left = null;
    this.right = null;
    this.value = value;
    this.preOrder = function(visit) {
        visit(this);
        if (this.left) this.left.preOrder(visit);
        if (this.right) this.right.preOrder(visit);
    }
    this.inOrder = function(visit) {
        if (this.left) this.left.inOrder(visit);
        visit(this);
        if (this.right) this.right.inOrder(visit);
    }
    this.postOrder = function(visit) {
        if (this.left) this.left.postOrder(visit);
        if (this.right) this.right.postOrder(visit);
        visit(this);
    }
}

function SortBinaryTree(value, compare) {
    compare = compare || new Function("a", "b", "return a-b");
    BinaryTree.call(this, value);
    this.insert = function(value) {
        if (compare(value, this.value) == 0) return false;
        if (compare(value, this.value) < 0) {
            if (this.left) return this.left.insert(value);
            this.left = new SortBinaryTree(value, compare);
            return true;
        }
        if (compare(value, this.value) > 0) {
            if (this.right) return this.right.insert(value);
            this.right = new SortBinaryTree(value, compare);
            return true;
        }
    }

    this.search = function(value) {
        if (compare(value, this.value) == 0) return this;
        if (compare(value, this.value) < 0) {
            if (this.left) return this.left.search(value);
            return null;
        }
        if (compare(value, this.value) > 0) {
            if (this.right) return this.right.search(value);
            return null;
        }
    }

    this.toArray = function() {
        var r = new Array();
        this.inOrder(function(node) {
            r.push(node.value);
        })
        return r;
    }

}

var sb = new SortBinaryTree(3);

console.log(sb.search(4));
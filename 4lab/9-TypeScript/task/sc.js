var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.hello = function () {
        console.log("Hi! My name is ".concat(this.name, ". And I am ").concat(this.age, " years old."));
    };
    return User;
}());
var new_user1 = new User('Adnrey', 21);
new_user1.hello();
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    User2.prototype.hello = function () {
        console.log("Hi! My name is ".concat(this.name, ". And I am ").concat(this.age, " years old."));
    };
    return User2;
}());
var new_user2 = new User2('Adnrey', 21);
new_user2.hello();
function distance(x1, y1, x2, y2) {
    var x1_value, y1_value, x2_value, y2_value;
    if (typeof x1 === "number" && typeof y1 === "number" && typeof x2 === "number" && typeof y2 === "number") {
        x1_value = x1;
        y1_value = y1;
        x2_value = x2;
        y2_value = y2;
    }
    else if (typeof x1 === "object" && typeof y1 === "object") {
        x1_value = x1.x;
        y1_value = x1.y;
        x2_value = y1.x;
        y2_value = y1.y;
    }
    else {
        throw new Error("Invalid arguments");
    }
    var x = x2_value - x1_value;
    var y = y2_value - y1_value;
    return Math.sqrt(x * x + y * y);
}
var point1 = { x: 1, y: 2 };
var point2 = { x: 4, y: 6 };
var distance1 = distance(point1, point2);
console.log(distance1);
var distance2 = distance(1, 2, 4, 6);
console.log(distance2);
// Задание 5
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
    }
    return TreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
    }
    BinaryTree.prototype.insert = function (value) {
        var new_node = new TreeNode(value);
        if (!this.root) {
            this.root = new_node;
            return;
        }
        this.insert_node(this.root, new_node);
    };
    BinaryTree.prototype.insert_node = function (node, new_node) {
        if (new_node.value < node.value) {
            if (!node.left) {
                node.left = new_node;
            }
            else {
                this.insert_node(node.left, new_node);
            }
        }
        else {
            if (!node.right) {
                node.right = new_node;
            }
            else {
                this.insert_node(node.right, new_node);
            }
        }
    };
    BinaryTree.prototype.search = function (value) {
        return this.search_node(this.root, value);
    };
    BinaryTree.prototype.search_node = function (node, value) {
        if (!node) {
            return null;
        }
        if (value === node.value) {
            return node;
        }
        else if (value < node.value) {
            return this.search_node(node.left, value);
        }
        else {
            return this.search_node(node.right, value);
        }
    };
    BinaryTree.prototype.delete = function (value) {
        this.root = this.delete_node(this.root, value);
    };
    BinaryTree.prototype.delete_node = function (node, value) {
        if (!node) {
            return null;
        }
        if (value === node.value) {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            var temp = this.get_min_value(node.right);
            node.value = temp.value;
            node.right = this.delete_node(node.right, temp.value);
            return node;
        }
        else if (value < node.value) {
            node.left = this.delete_node(node.left, value);
            return node;
        }
        else {
            node.right = this.delete_node(node.right, value);
            return node;
        }
    };
    BinaryTree.prototype.get_min_value = function (node) {
        var current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    };
    BinaryTree.prototype.height = function () {
        return this.calculate_height(this.root);
    };
    BinaryTree.prototype.calculate_height = function (node) {
        if (!node) {
            return 0;
        }
        var left_height = this.calculate_height(node.left);
        var right_height = this.calculate_height(node.right);
        return Math.max(left_height, right_height) + 1;
    };
    BinaryTree.prototype.print_obhod = function (node) {
        if (!node) {
            return;
        }
        console.log(node.value);
        this.print_obhod(node.right);
        this.print_obhod(node.left);
    };
    BinaryTree.prototype.print = function () {
        this.print_obhod(this.root);
    };
    return BinaryTree;
}());
var tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(11);
tree.insert(9);
tree.print();
console.log("Tree Height:", tree.height());
console.log("Search 13:", tree.search(13));
console.log("Search 3:", tree.search(3));
tree.delete(3);
console.log("Search after deleting 3:", tree.search(3));
tree.print();

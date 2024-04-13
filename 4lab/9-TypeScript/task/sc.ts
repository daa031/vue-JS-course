// 2
interface IUser {
    name: string
    age: number
    hello(): void
  }
  
  class User implements IUser {
    constructor(public name: string, public age: number) {}
  
    hello(): void {
      console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`)
    }
  }
  
  let new_user1: IUser = new User('Adnrey', 21)
  new_user1.hello()
  
  // 3
  type TUser = {
    name: string
    age: number
    hello(): void
  }
  
  class User2 implements TUser {
    constructor(public name: string, public age: number) {}
  
    hello(): void {
      console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`)
    }
  }
  
  let new_user2: User = new User2('Adnrey', 21)
  new_user2.hello()
  
  
  // Задание 4
  interface Point {
    x: number
    y: number
  }
  
  function distance(x1: number, y1: number, x2: number, y2: number): number
  function distance(p1: Point, p2: Point): number
  function distance(x1: number | Point, y1 : number | Point, x2?: number, y2?: number): number {
  
    let x1_value: number, y1_value: number, x2_value: number, y2_value: number
  
    if (typeof x1 === "number" && typeof y1 === "number" && typeof x2 === "number" && typeof y2 === "number") {
      x1_value = x1
      y1_value = y1
      x2_value = x2
      y2_value = y2
    } else if (typeof x1 === "object" && typeof y1 === "object") {
      x1_value = x1.x
      y1_value = x1.y
      x2_value = y1.x
      y2_value = y1.y
    } else {
      throw new Error("Invalid arguments")
    }
  
    let x = x2_value - x1_value
    let y = y2_value - y1_value
    return Math.sqrt(x * x + y * y)
  }
  
  let point1: Point = { x: 1, y: 2 }
  let point2: Point = { x: 4, y: 6 }
  
  let distance1 = distance(point1, point2)
  console.log(distance1)
  
  let distance2 = distance(1, 2, 4, 6)
  console.log(distance2)
  
  
  // Задание 5
  class TreeNode {
    value: number
    left: TreeNode | null
    right: TreeNode | null
  
    constructor(value: number) {
      this.value = value
    }
  }
  
  class BinaryTree {
    root: TreeNode | null
  
    insert(value: number): void {
      let new_node = new TreeNode(value)
      if (!this.root) {
        this.root = new_node
        return
      }
      this.insert_node(this.root, new_node)
    }
  
    private insert_node(node: TreeNode, new_node: TreeNode): void {
      if (new_node.value < node.value) {
        if (!node.left) {
          node.left = new_node
        } else {
          this.insert_node(node.left, new_node)
        }
      } else {
        if (!node.right) {
          node.right = new_node
        } else {
          this.insert_node(node.right, new_node)
        }
      }
    }
  
    search(value: number): TreeNode | null {
      return this.search_node(this.root, value)
    }
  
    private search_node(node: TreeNode | null, value: number): TreeNode | null {
      if (!node) {
        return null
      }
  
      if (value === node.value) {
        return node
      } else if (value < node.value) {
        return this.search_node(node.left, value)
      } else {
        return this.search_node(node.right, value)
      }
    }
  
    delete(value: number): void {
      this.root = this.delete_node(this.root, value)
    }
  
    private delete_node(node: TreeNode | null, value: number): TreeNode | null {
      if (!node) {
        return null
      }
  
      if (value === node.value) {
        if (!node.left && !node.right) {
          return null
        }
  
        if (!node.left) {
          return node.right
        }
  
        if (!node.right) {
          return node.left
        }
  
        let temp = this.get_min_value(node.right)
        node.value = temp.value
        node.right = this.delete_node(node.right, temp.value)
        return node
      } else if (value < node.value) {
        node.left = this.delete_node(node.left, value)
        return node
      } else {
        node.right = this.delete_node(node.right, value)
        return node
      }
    }
  
    private get_min_value(node: TreeNode): TreeNode {
      let current = node
      while (current.left) {
        current = current.left
      }
      return current
    }
  
    height(): number {
      return this.calculate_height(this.root)
    }
  
    private calculate_height(node: TreeNode | null): number {
      if (!node) {
        return 0
      }
  
      let left_height = this.calculate_height(node.left)
      const right_height = this.calculate_height(node.right)
  
      return Math.max(left_height, right_height) + 1
    }
  
    private print_obhod(node: TreeNode | null): void {
      if (!node) {
        return
      }
      console.log(node.value)
      this.print_obhod(node.right)
      this.print_obhod(node.left)
    }
  
    print(): void {
      this.print_obhod(this.root)
    }
  
  }
  
  let tree = new BinaryTree()
  
  tree.insert(5)
  tree.insert(3)
  tree.insert(7)
  tree.insert(2)
  tree.insert(4)
  tree.insert(6)
  tree.insert(11)
  tree.insert(9)
  
  tree.print()
  
  console.log("Tree Height:", tree.height())
  
  console.log("Search 13:", tree.search(13))
  console.log("Search 3:", tree.search(3))
  
  tree.delete(3)
  
  console.log("Search after deleting 3:", tree.search(3))
  
  tree.print()
  
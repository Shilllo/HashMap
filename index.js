class Node {
    constructor(value) {
        this.value = value
        this.nextNode = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')
    }

    toString() {
        let result = 'head -> '
        let link = this.head.nextNode
        while (link != null) {
            result += `${link.value} -> `
            link = link.nextNode
        }

        return console.log(result + 'null')
    }

    append(value) {
        let link = this.head
        while (true) {
            if (link.nextNode != null) {
                link = link.nextNode
            } else {
                link.nextNode = new Node(value)
                break
            }
        }
    }

    prepend(value) {
        let newNode = new Node(value)
        newNode.nextNode = this.head.nextNode
        this.head.nextNode = newNode
    }

    size() {
        let count = 0
        let link = this.head.nextNode
        while (link != null) {
            count += 1
            link = link.nextNode
        }

        return console.log(count)
    }

    showHead() {
        return console.log(this.head.nextNode)
    }

    showTail() {
        let link = this.head
        while (true) {
            if (link.nextNode != null) {
                link = link.nextNode
            } else {
                return console.log(link)
            }
        }
    }

    at(index) {
        let count = 0
        let link = this.head.nextNode
        while (true) {
            if (count == index) {
                return console.log(link)
            } else if (link.nextNode == null) {
                return console.log('Такого узла нет')
            } else {
                link = link.nextNode
                count += 1
            }
        }
    }

    pop() {
        let link = this.head
        while (true) {
            if (link.nextNode.nextNode == null) {
                console.log(link)
                link.nextNode = null
                break
            } else {
                link = link.nextNode
            }
        }
    }

    contains(value) {
        let link = this.head.nextNode
        while (link != null) {
            if (link.value == value) {
                return console.log(true)
            }
            link = link.nextNode
        }
        return console.log(false)
    }
    
    find(value) {
        let count = 0
        let link = this.head.nextNode
        while (link != null) {
            if (link.value == value) {
                return console.log(count)
            }
            link = link.nextNode
            count += 1
        }
        return console.log(null)
    }

    insertAt(value, index) {
        let count = 0
        let link = this.head
        let a = this
        while (true) {
            if (count == index) {
                let newNode = new Node(value)
                newNode.nextNode = link.nextNode
                link.nextNode = newNode
                a.toString()
                break
            } else if (link.nextNode == null) {
                return console.log('Такого индекса нет')
            } else {
                link = link.nextNode
                count += 1
            }
        }
    }

    removeAt(index) {
        let count = 0
        let link = this.head
        let a = this
        while (true) {
            if (count == index) {
                link.nextNode = link.nextNode.nextNode
                a.toString()
                break
            } else if (link.nextNode == null) {
                return console.log('Такого индекса нет')
            } else {
                link = link.nextNode
                count += 1
            }
        }
    }
}

class HashMap {
    constructor(initialLength = 16) {
        this.table = new Array(initialLength).fill(null)
        this.size = 0
    }

    hash(key) {
        let hashCode = 0
        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.table.length
        }
        return hashCode;
    } 

    set(key, value) {
        let index = this.hash(key)
        if (!this.table[index]) {
            let element = new LinkedList()
            element.append({key, value})
            this.table[index] = element
        } else {
            let IsItCollision = true

            let link = this.table[index].head.nextNode
            while (link != null) {
                if (link.value.key == key) {
                    link.value.value = value
                    IsItCollision = false
                    break
                }
            }
            if (IsItCollision) {
                this.table[index].append({key, value})
            }
        } 
        this.show()
    }
    
    show() {
        return console.log(this.table)
    }
}

let table = new HashMap() 

table.set('Simon', '89850567307')
table.set('Igor', '898505673071')
table.set('Anna', '898505673072')


// table.get('Anna')
// table.get('Sasha')

// table.has('Anna')
// table.has('Sasha')

// table.remove('Anna')

// table.length()

// // table.clear()

// table.keys()

// table.values()

// table.entries()
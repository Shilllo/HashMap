class HashMap {
    constructor() {
        this.table = {}
    }
    hash(key) {
        let hashCode = 0

        const primeNumber = 31

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i) 
            if (this.table.length) {
                hashCode = hashCode % this.table.length
            }
        }

        return hashCode;
    } 

    set(key, value) {
        this.table[this.hash(key)] = value
        console.log(this.table)
    }

    get(key) {
        if (this.table[this.hash(key)]) {
            return console.log(this.table[this.hash(key)])
        } else {
            return console.log(null)
        }
    }

    has(key) {
        if (this.table[this.hash(key)]) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }

    remove(key) {
        if ((this.table[this.hash(key)])) {
            delete this.table[this.hash(key)] 
            return console.log(true)
        } else {
            return console.log(false)
        }
    }

    length() {
        let count = 0
        for (let key in this.table) {
            if (this.table[key]) {
                count += 1
            }
        }
        return console.log(count)
    }

    clear() {
        for (let key in this.table) {
            delete this.table[key] 
        }
    }

    keys() {
        let array = []
        for (let key in this.table) {
            array.push(key)
        }

        return console.log(array)
    }

    values() {
        let array = []
        for (let key in this.table) {
            array.push(this.table[key])
        }

        return console.log(array)
    }

    entries() {
        let array = []
        for (let key in this.table) {
            let pair = [key, this.table[key]]
            array.push(pair)
        }
        return console.log(array)
    }
}

let table = new HashMap() 

table.set('Simon', '89850567307')
table.set('Igor', '898505673071')
table.set('Anna', '898505673072')
table.set('Anna', '898505673073')

table.get('Anna')
table.get('Sasha')

table.has('Anna')
table.has('Sasha')

table.remove('Anna')

table.length()

// table.clear()

table.keys()

table.values()

table.entries()
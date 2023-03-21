enum AnimalType {
    CAT = "Cat",
    KODOK = "Kodok",
    KUDA = "Kuda"
}

// parent class
class Animal {
    protected name: string
    protected type: AnimalType

    constructor(name: string, type: AnimalType) {
        this.name = name
        this.type = type
    }

    protected get _name(): string {
        return this.name
    }

    protected set _name(name: string) {
        this.name = name
    }

    public nameAndTypeFormat(): string {
        return `Animal with name: ${this.name} and type: ${this.type}`
    }
}

class Cat extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super("", AnimalType.CAT)
        this._name = name
        this.sound = sound
    }

    public makeSound(): void {
        console.log(`Name: ${this._name} Type: ${this.type} make a sound ${this.sound}`)
    }

    public nameAndTypeFormat(): string {
        return `Cat with name: ${this.name} and type : ${AnimalType.CAT}`
    }
}

class Kodok extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super("", AnimalType.KODOK)
        this._name = name
        this.sound = sound
    }

    public makeSound(): void {
        console.log(`Name: ${this._name} Type: ${this.type} make a sound ${this.sound}`)
    }

    public nameAndTypeFormat(): string {
        return `Kodok with name: ${this.name} and type : ${AnimalType.KODOK}`
    }
}

class Kuda extends Animal {
    sound: string

    constructor(name: string, sound: string) {
        super("", AnimalType.KUDA)
        this._name = name
        this.sound = sound
    }

    public makeSound(): void {
        console.log(`Name: ${this._name} Type: ${this.type} make a sound ${this.sound}`)
    }

    public nameAndTypeFormat(): string {
        return `Kodok with name: ${this.name} and type : ${AnimalType.KUDA}`
    }
}

let cat: Cat = new Cat("Cat", "Miaongg")
let kodok: Kodok = new Kodok("Kodok", "ngoook")
let kuda: Kuda = new Kuda("Kuda", "ngiiihaaa")

kuda.makeSound()
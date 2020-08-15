class Customer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    announce() {
        return "Hello, my name is "+ this.name;
    }
}

//criar uma nova instancia
let firstCustomer = new Customer('Alice');
let newMessage: string = firstCustomer.announce();

//Mudar o texto da página
let webHeading = document.querySelector('h1');
webHeading!.textContent = newMessage
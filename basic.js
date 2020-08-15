var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.announce = function () {
        return "Hello, my name is " + this.name;
    };
    return Customer;
}());
//criar uma nova instancia
var firstCustomer = new Customer('Alice');
var newMessage = firstCustomer.announce();
//Mudar o texto da página
var webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;

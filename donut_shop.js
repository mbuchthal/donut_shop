

var Store = function(name, averageDonuts, minCustomers, maxCustomers) {
  this.name = name;
  this.averageDonuts = averageDonuts;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.totalHourly = [];
}
// var locations = ['Downtown', 'Capitol Hill', 'South Lake Union', 'Wedgewood', 'Ballard'];
// var times = ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

Store.prototype.randomCustomers = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

Store.prototype.hourlyEats = function() {
  var customers = this.randomCustomers() * this.averageDonuts;
  return Math.round(customers);
};

Store.prototype.dailyEats = function() {
  var totalDaily = 0
  for (var i = 0; i <= 10; i++) {
    var tempVar = this.hourlyEats();
    this.totalHourly.push(tempVar);
    totalDaily += tempVar;
    }
  return totalDaily;
};

Store.prototype.render = function() {
  var totalEats = this.dailyEats();
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);
  for (var i = 0; i <= this.totalHourly.length; i++) {
    var field = document.createElement('td');
    field.textContent = this.totalHourly[i];
    tr.appendChild(field);
    }
  field.textContent = totalEats;
  tr.appendChild(field);
  console.log(document.getElementById('tablebody'));
  document.getElementById('tablebody').appendChild(tr);
  return tr;
};

var allStores = []
var Downtown = new Store('Downtown', 4.50, 8, 43);
var CapHill = new Store('Capitol Hill', 2.00, 4, 37);
var South = new Store('South Lake Union', 6.33, 9, 23);
var Wedge = new Store('Wedgewood', 1.25, 2, 28);
var Ballard = new Store('Ballard', 3.75, 8, 58);
allStores.push(Downtown);
allStores.push(CapHill);
allStores.push(South);
allStores.push(Wedge);
allStores.push(Ballard);

Downtown.render();
CapHill.render();
South.render();
Wedge.render();
Ballard.render();


window.Store = Store;
window.allStores = allStores;



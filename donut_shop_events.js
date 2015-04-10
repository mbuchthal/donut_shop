var Store = window.Store;
var allStores = window.allStores;
var tableList = document.getElementById('tablebody');
var newRow = document.createElement('tr');
var locationForm = document.getElementById('new-location-form');

var handleNoteSubmit = function(event) {
  event.preventDefault();
  if (!(event.target.storelocation.value || event.target.averagedonuts.value || event.target.mincustomers.value || event.target.maxcustomers.value)) {             // this is to prevent a blank note from being made
      return alert('note cannot be blank');
    }
  var newStore = new Store(event.target.storelocation.value, Number.parseInt(event.target.averagedonuts.value), Number.parseInt(event.target.mincustomers.value), Number.parseInt(event.target.maxcustomers.value));            // this is to prevent a blank note from being made
      event.target.storelocation.value = null;
      event.target.averagedonuts.value = null;
      event.target.mincustomers.value = null;
      event.target.maxcustomers.value = null;
      newStore.render();
  };

locationForm.addEventListener('submit', handleNoteSubmit);

var pie = new d3pie("pie", {
  header: {
    title: {
      text: "A Simple Donut Pie"
    },
    location: "pie-center"
  },
  size: {
    pieInnerRadius: "80%"
  },
  data: {
    sortOrder: "label-asc",
    content: [
      { label: "JavaScript", value: 1 },
      { label: "Ruby", value: 2 },
      { label: "Java", value: 3 },
      { label: "C++", value: 2 },
      { label: "Objective-C", value: 6 }
    ]
  }
});


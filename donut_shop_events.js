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
  var newStore = new Store(event.target.storelocation.value, event.target.averagedonuts.value, event.target.mincustomers.value, event.target.maxcustomers.value);            // this is to prevent a blank note from being made
      event.target.storelocation.value = null;
      event.target.averagedonuts.value = null;
      event.target.mincustomers.value = null;
      event.target.maxcustomers.value = null;
      // allStores.push(newStore);
      newStore.render();
      // tableList.appendChild(newStore.render());
      console.log(newStore);
  };

locationForm.addEventListener('submit', handleNoteSubmit);

// var updateRender = function() {

//   tableList.innerHTML = '';
//   allStores.forEach(function(store) {
//     tableList.appendChild(store.render());

//   });

// }



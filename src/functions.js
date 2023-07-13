//data send to local storage

function sendData(data, key) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getData(key) {
  JSON.parse(localStorage.getItem(key));
}

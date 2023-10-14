function addingEventListener() {

const input = document.getElementById('input');//direct adding 
input.addEventListener('click', function() {
  alert('I was clicked!');
});
}
/*const input2 = document.getElementById('input');//creating a callback function so as it can be reused later

function clickAlert() {
  alert('I was clicked!');
}

input2.addEventListener('click', clickAlert);*/
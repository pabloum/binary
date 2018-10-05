$(document).ready(function() {

  $('.option').on('click',showTab);

  $('#toLetters').on('click',toLetters);
  $('#toBinary').on('click',toBinary);

});

function showTab(){
  alert('ready');
}

function toLetters() {
  var input = document.getElementById('binaryInput').value;
  var inputBinary = [];
  var message = [];

  var index = 0;
  for (var i = 0; i < input.length; i = i+9) {
    inputBinary[index] = input.substr(i, 8);
    index++;
  }

  for (var i = 0; i < inputBinary.length; i++) {
    message[i] = String.fromCharCode(parseInt(inputBinary[i], 2));
  }

  message = message.join("");

  $('.app-output').html(message);
}

function toBinary() {
  var input = document.getElementById('normalInput').value;
  var inputAscii = [];
  var binary = [];

  for (var i = 0; i < input.length; i++) {
    inputAscii[i] = input.charCodeAt(i);
    binary[i] = inputAscii[i].toString(2)
  }

  for (var i = 0; i < binary.length; i++) {
    while (binary[i].length < 8) {
      binary[i] = '0' + binary[i];
    }
  }

  binary = binary.join("  ");

  $('.app-output').html(binary);
}

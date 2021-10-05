var list = document.getElementById('list-item')
var btnAdd = document.getElementById('btn-add-item');

function inputL(){
  var lit = document.createElement('li');
  lit.classList.add('pt-3', 'text-light');
  var inputItem = document.getElementById('input-item')
  var item = list.getElementsByTagName('li');

  var btn = document.createElement("button");
  btn.innerHTML = "delete";
  btn.onclick = function () {
    list.removeChild(lit)
  }
  btn.classList.add('btn', 'btn-danger')
      if (inputItem.value === '') {
        alert('tidak boleh kosong')
        inputItem.focus();
        return;
      }

  lit.innerHTML = inputItem.value;
  var l = String(lit.innerHTML);
  console.log(l);
  for (var i = 0; i < item.length; i++) {
    var it = item[i].innerText;
    it = it.substring(0, it.length - 7);
    if (l === it) {
      alert(`${l} telah ada dalam list`)
      inputItem.value = '';
      inputItem.focus();
      return;
    }
  }
  document.getElementById('list-item').appendChild(lit);
  lit.append('   ', btn)

  inputItem.value = '';
  inputItem.focus();
}

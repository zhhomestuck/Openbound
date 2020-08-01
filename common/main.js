function toggleSpoilers() {
  var logButtom = document.getElementById("log-buttom").childNodes[1];
  if (logButtom.value == "0") {
    logButtom.innerText = "顯示劇情攻略";
    logButtom.parentNode.parentNode.lastElementChild.style.display = "block";
    logButtom.value = "1";
  }
  else
  {
    logButtom.innerText  = "隱藏劇情攻略";
    logButtom.parentNode.parentNode.lastElementChild.style.display = "none";
    logButtom.value = "0";
  }
}

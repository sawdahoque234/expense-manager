// start add friends
let frndinput = document.querySelector("#addfriendinput");
let frndAddBtn = document.querySelector("#addfriendbtn");
let frndlist = document.querySelector("#list");
frndAddBtn.addEventListener("click", function () {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    frndlist = [];
  } else {
    frndlist = localItems;
  }
  frndlist.push(frndinput.value);
  localStorage.setItem("localItem", JSON.stringify(frndlist));

  showFrndList();
});

function showFrndList() {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    frndlist = [];
  } else {
    frndlist = localItems;
  }

  let html = "";
  let itemShow = document.querySelector("#list");

  frndlist.forEach((data, index) => {
    html += `
            <option value="">${data}</option>
    `;
  });
  itemShow.innerHTML = html;
}
showFrndList();

// end add friends

function validateForm() {
  var type = document.getElementById("type").value;
  var name = document.getElementById("name").value;
  var friend = document.getElementById("addfriendfrom").value;
  var amount = document.getElementById("amount").value;
  var currency = document.getElementById("currency").value;
  var date = document.getElementById("date").value;
  if (type == "") {
    alert("type is required!");
    return false;
  }
  if (name == "") {
    alert("Name is required!");
    return false;
  }
  if (friend == "") {
    alert("fName is required!");
    return false;
  }
  if (amount == "") {
    alert("Name is required!");
    return false;
  }
  if (currency == "") {
    alert("Name is required!");
    return false;
  }
  if (date == "") {
    alert("Name is required!");
    return false;
  }
  if (currency == "") {
    alert("Name is required!");
    return false;
  }
  return true;
}
function showData() {
  var expenseList;
  if (localStorage.getItem("expenseList") == null) {
    expenseList = [];
  } else {
    expenseList = JSON.parse(localStorage.getItem("expenseList"));
  }
  var html = "";
  expenseList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.type + "</td>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.friend + "</td>";
    html += "<td>" + element.amount + "</td>";
    html += "<td>" + element.currency + "</td>";
    html += "<td>" + element.date + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')">Delete</button> <button onclick="updateData(' +
      index +
      ')">Edit</button></td>';
    html += "</tr>";
  });
  document.querySelector("#table tbody").innerHTML = html;
}

document.onload = showData();

function addData() {
  if (validateForm() == true) {
    var type = document.getElementById("type").value;
    var name = document.getElementById("name").value;
    var friend = document.getElementById("addfriendinput").value;
    var amount = document.getElementById("amount").value;
    var currency = document.getElementById("currency").value;
    var date = document.getElementById("date").value;
  }
  var expenseList;
  if (localStorage.getItem("expenseList") == null) {
    expenseList = [];
  } else {
    expenseList = JSON.parse(localStorage.getItem("expenseList"));
  }
  expenseList.push({
    type: type,
    name: name,
    friend: friend,
    amount: amount,
    currency: currency,
    date: date,
  });
  localStorage.setItem("expenseList", JSON.stringify(expenseList));
  showData();
  document.getElementById("type").value = "";
  document.getElementById("name").value = "";
  document.getElementById("addfriendinput").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("currency").value = "";
  document.getElementById("date").value = "";
}

//delete
function deleteData(index) {
  var expenseList;
  if (localStorage.getItem("expenseList") == null) {
    expenseList = [];
  } else {
    expenseList = JSON.parse(localStorage.getItem("expenseList"));
  }
  expenseList.splice(index, 1);
  localStorage.setItem("expenseList", JSON.stringify(expenseList));
  showData();
}
//update
function updateData(index) {
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";
  var expenseList;
  if (localStorage.getItem("expenseList") == null) {
    expenseList = [];
  } else {
    expenseList = JSON.parse(localStorage.getItem("expenseList"));
  }
  document.getElementById("type").value = expenseList[index].type;
  document.getElementById("name").value = expenseList[index].name;
  document.getElementById("addfriendinput").value =
    expenseList[index].addfriendinput;
  document.getElementById("amount").value = expenseList[index].amount;
  document.getElementById("currency").value = expenseList[index].currency;
  document.getElementById("date").value = expenseList[index].date;

  document.querySelector("#Update").onclick = function () {
    if (validateForm() == true) {
      expenseList[index].type = document.getElementById("type").value;
      expenseList[index].name = document.getElementById("name").value;
      expenseList[index].addfriendinput =
        document.getElementById("addfriendinput").value;
      expenseList[index].amount = document.getElementById("amount").value;
      expenseList[index].currency = document.getElementById("currency").value;
      expenseList[index].date = document.getElementById("date").value;
      localStorage.setItem("expenseList", JSON.stringify(expenseList));
      showData();
      document.getElementById("type").value = "";
      document.getElementById("name").value = "";
      document.getElementById("addfriendinput").value = "";
      document.getElementById("amount").value = "";
      document.getElementById("currency").value = "";
      document.getElementById("date").value = "";

      document.getElementById("Submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }
  };
}

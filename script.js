var form_select = document.querySelector("#full_form");
form_select.addEventListener("submit", (e) => {
  e.preventDefault();
  var first_name = document.querySelector('[placeholder="First name"]');
  var last_name = document.querySelector('[placeholder="Last name"]');
  var address = document.querySelector('[placeholder="address"]');
  var pincode = document.querySelector('[placeholder="zip"]');
  var gender = document.querySelector('[placeholder="Gender"]');
  var state = document.querySelector('[placeholder="state"]');
  var City = document.querySelector('[placeholder="City"]');
  var ele = [first_name, last_name, address, gender, City, state, pincode];
  var count = 0;
  for (let i of ele) {
    if (i.value) {
      count++;
    }
  }
  if (count > 1) {
    var trow = document.createElement("tr");
    for (var j = 0; j < 7; j++) {
      var td_col = document.createElement("td");
      td_col.innerText = ele[j].value;
      trow.append(td_col);
    }
    document.querySelector("tbody").append(trow);
    for (let k = 0; k < ele.length; k++) {
      ele[k].value = "";
    }
  }
});

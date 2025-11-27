const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

for (select of dropdowns) {
  for (countryCode in countryList) {
    let newOptions = document.createElement("option");
    newOptions.innerText = countryCode;
    newOptions.value = countryCode;
    select.appendChild(newOptions);
  }
}

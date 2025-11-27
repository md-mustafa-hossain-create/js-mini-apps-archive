// IMPORTANT: Get your free API key from https://www.exchangerate-api.com/ and paste it below
const API_KEY = "8ca76c61afb9914fa1c56876"; // written by Gemini

const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`; // written by Gemini

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromcurrency = document.querySelector(".from select");
const tocurrency = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate currency options
for (select of dropdowns) {
  for (currencyCode in countryList) {
    let newOptions = document.createElement("option");
    newOptions.innerText = currencyCode;
    newOptions.value = currencyCode;
    if (select.name === "from" && currencyCode === "USD") {
      newOptions.selected = "selected";
    } else if (select.name === "to" && currencyCode === "INR") {
      newOptions.selected = "selected";
    }
    select.append(newOptions);
  }
  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}

// Fetch and update exchange rate
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const fromCode = fromcurrency.value; // written by Gemini
  const toCode = tocurrency.value; // written by Gemini

  if (fromCode === toCode) {
    // written by Gemini
    msg.innerText = `${amtVal} ${fromCode} = ${amtVal} ${toCode}`; // written by Gemini
    return; // written by Gemini
  }

  const URL = `${BASE_URL}/latest/${fromCode}`; // written by Gemini
  try {
    // written by Gemini
    let response = await fetch(URL); // written by Gemini
    let data = await response.json(); // written by Gemini

    if (
      data.result === "success" &&
      data.conversion_rates &&
      data.conversion_rates[toCode]
    ) {
      // written by Gemini
      const rate = data.conversion_rates[toCode]; // written by Gemini
      const finalAmount = amtVal * rate; // written by Gemini
      msg.innerText = `${amtVal} ${fromCode} = ${finalAmount.toFixed(
        2
      )} ${toCode}`; // written by Gemini
    } else {
      // written by Gemini
      msg.innerText = "Exchange rate not available."; // written by Gemini
    }
  } catch (error) {
    // written by Gemini
    msg.innerText = "An error occurred while fetching data."; // written by Gemini
  }
};

// Update flag based on selected currency
const updateflag = (element) => {
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// The following event listener was written by Gemini
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});

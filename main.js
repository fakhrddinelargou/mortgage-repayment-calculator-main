const secondryCard = document.querySelector(".secondry-card");

const monthlyPaymentL = document.getElementById("monthlyPayment");
const check = document.querySelectorAll(".check");

const inputAmount = document.getElementById("mortgage-amount");
const inputTerm = document.getElementById("mortgage-term");
const inputRate = document.getElementById("mortgage-rate");

const input = document.querySelectorAll("input");




check.forEach((Element) => {
  Element.addEventListener('click', () => {
    const changeColor = document.querySelectorAll(".changeColor");
    
    // Add the class to each element in the NodeList
    for (let i = 0; i < changeColor.length; i++) {
      changeColor[i].classList.add("changeColorBlue");
    }
    
    // Remove the class from all elements after the click event
    // changeColor.forEach((item) => {
    //   item.classList.remove("changeColorBlue");
    // });
  });
});




function addButton() {
  var inputAmountValue = inputAmount.value;
  var inputTermValue = inputTerm.value;
  var inputRateValue = inputRate.value;

  if (
    inputAmountValue >= 1 &&
    inputAmountValue <= 1000000 &&
    inputRateValue > 0 &&
    inputRateValue <= 100 &&
    inputTermValue >= 1 &&
    inputTermValue <= 50
  ) {
    let TotalPayment =
      (inputAmountValue * inputRateValue) /
      (1 - Math.pow(1 + inputRateValue, -inputTermValue));
    let In = inputTermValue * 12;

    let monthlyPayment = TotalPayment / In;
    console.log(monthlyPayment);
    secondryCard.innerHTML = `
      <div class="page-2">
      <span class="result">Your results</span>
      <p class="paragraph-2">Your result are shown below based on the information you provided. To adjust the result, edit the form and click"calculate repayment" again</p>
      <div class="all-result">
      <span class="Your-monthly">Your monthly repayments</span>
      <span class="finly-result" id="monthlyPayment">$${monthlyPayment.toFixed(
        2
      )}</span>
      <span class="total">Total you'll repay over the them</span>
      <span class="total-price">$${TotalPayment.toFixed(2)}</span>
      </div>
      </div>
      
      `;
  } else {
    input.forEach((inputElement) => {
      inputElement.classList.add("if-not");
    });
  }
}

// const queries = new URLSearchParams(window.location.search);
// const selectedTerm = queries.get("term");
// const selectedRate = queries.get("rate");
// const selectedAmount = queries.get("amount");

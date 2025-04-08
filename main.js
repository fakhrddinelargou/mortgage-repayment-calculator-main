const secondryCard = document.querySelector(".secondry-card");

const monthlyPaymentL = document.getElementById("monthlyPayment");
const check = document.querySelectorAll(".check");

const inputAmount = document.getElementById("mortgage-amount");
const inputTerm = document.getElementById("mortgage-term");
const inputRate = document.getElementById("mortgage-rate");

const divAmount = document.querySelector(".mortgage-amount");
const divTerm = document.querySelector(".mortgage-term");
const divRate = document.querySelector(".mortgage-rate");
const mortgageYrs = document.querySelector(".mortgage-yrs");
const mortgagePsnt = document.querySelector(".mortgage-psnt");
const amountMon = document.querySelector(".amount-mon");


const error1 = document.querySelector(".error1")
const error2 = document.querySelector(".error2")
const error3 = document.querySelector(".error3")


function amountValide() {
  let inputAmountValue = parseFloat(inputAmount.value);
  
  if (inputAmountValue >= 1 && inputAmountValue <= 1000000) {
    divAmount.style.backgroundColor = "hsl(202, 86%, 94%)";
    divAmount.style.border = "solid hsl(200, 24%, 40%) .15rem";
    amountMon.style.color = "hsl(200, 24%, 40%)";
    error1.classList.add('hidden')
    return true;
  } else {
    divAmount.style.backgroundColor = "hsl(4, 69%, 50%)";
    divAmount.style.border = "solid hsl(4, 69%, 50%) .15rem";
    amountMon.style.color = "white";
    error1.classList.remove('hidden')
    return false;
  }
}

function termValide(){


   let inputTermValue = parseFloat(inputTerm.value);

if (inputTermValue >= 1 && inputTermValue <= 50) {
  divTerm.style.backgroundColor = "hsl(202, 86%, 94%)";
  divTerm.style.border = " solid  hsl(200, 24%, 40%)  .15rem";
  mortgageYrs.style.color = "hsl(200, 24%, 40%)";
  error2.classList.add('hidden')
  return true
} else {
  divTerm.style.backgroundColor = "hsl(4, 69%, 50%)";
  divTerm.style.border = " solid  hsl(4, 69%, 50%)  .15rem";
  mortgageYrs.style.color = "white";
  console.log("not");
  error2.classList.remove('hidden')
  return false
}



}



function rateValide(){


  let inputRateValue = parseFloat(inputRate.value);

  if (inputRateValue > 0 && inputRateValue <= 100) {
    divRate.style.backgroundColor = "hsl(202, 86%, 94%)";
    divRate.style.border = " solid  hsl(200, 24%, 40%)  .15rem";
    mortgagePsnt.style.color = "hsl(200, 24%, 40%)";
    error3.classList.add('hidden')
    return true
  } else {
    divRate.style.backgroundColor = "hsl(4, 69%, 50%)";
    divRate.style.border = " solid hsl(4, 69%, 50%) .15rem";
    mortgagePsnt.style.color = "white";
    error3.classList.remove('hidden')
    return false
  }

}



function addButton() {
  let inputAmountValue = inputAmount.value;
  let inputTermValue = inputTerm.value;
  let inputRateValue = inputRate.value;

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
    console.log("hello");
    
   amountValide() 
    termValide()
    rateValide()
  }
}


function clearAll(){

   inputAmount.value = "e"
    inputTerm.value = "e"
   inputRate.value = "e"

   console.log(inputAmount,inputTerm,inputRate)

   secondryCard.innerHTML = `
   
    <img class="illustration-img" src="/assets/images/illustration-empty.svg" alt="illustration">
          <span class="result">Results shown here</span>
          <p class="paragraph">
            Complete the form and click "calculate repayments" to see what your monthly repayments would be.
          </p> 
   `

}
const submitDeposit = document.getElementById("submit-deposit");
const submitWithdraw = document.getElementById("submit-withdraw");
const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const totalAmount = document.getElementById("amount3");
submitDeposit.addEventListener('click', function() {

    const previousDeposit = document.getElementById("amount").innerText;
    const newDeposit = deposit.value;
    document.getElementById("amount").innerText = parseFloat(newDeposit) + parseFloat(previousDeposit);
    totalAmount.innerText = parseFloat(totalAmount.innerText) + parseFloat(newDeposit);

});

submitWithdraw.addEventListener("click", function() {

    const previousWithdraw = document.getElementById("amount2").innerText;
    const newWithdraw = withdraw.value;
    document.getElementById("amount2").innerText = parseFloat(newWithdraw) + parseFloat(previousWithdraw);
    const total = parseFloat(totalAmount.innerText) - parseFloat(newWithdraw);
    if (total <= 0) {
        submitWithdraw.disabled = true;
        submitWithdraw.style.backgroundColor = "bg-red-200";
        totalAmount.innerText = 0;
    } else {
        totalAmount.innerText = total;
        submitWithdraw.disabled = false;
    }
});
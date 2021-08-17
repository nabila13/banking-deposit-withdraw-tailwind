function getInputValue(inputID) {
    const inputs = document.getElementById(inputID);
    const inputsText = inputs.value;
    const inputVal = parseFloat(inputsText);
    inputs.value = "";
    return inputVal;
}

function addValue(updateID, value) {
    const update = document.getElementById(updateID);
    const updateText = update.innerText;
    const updateValue = parseFloat(updateText);
    const totalAmountVal = getBalanceValue();
    if (value <= totalAmountVal) {
        const newUpdate = updateValue + value;
        update.innerText = newUpdate;
    }
}

function getBalanceValue() {
    const totalAmount = document.getElementById("amount3");
    const totalAmountText = totalAmount.innerText;
    const totalAmountVal = parseFloat(totalAmountText);
    return totalAmountVal;
}

function updateBalance(updateAmount, isAdd) {

    let totalAmountv = getBalanceValue();
    if (isAdd === true) {
        totalAmountv = totalAmountv + updateAmount;
    } else {
        if (updateAmount <= totalAmountv) {
            totalAmountv = totalAmountv - updateAmount;
        }
    }
    document.getElementById("amount3").innerText = totalAmountv;
}
document.getElementById("submit-deposit").addEventListener('click', function() {
    const previousDeposit = "amount";
    const deposit = "deposit";
    const newDeposit = getInputValue(deposit);

    if (newDeposit > 0) {
        addValue(previousDeposit, newDeposit);
        updateBalance(newDeposit, true);
    }

    // totalAmount.innerText = parseFloat(totalAmount.innerText) + newDeposit;
});

document.getElementById("submit-withdraw").addEventListener("click", function() {
    const withdraw = "withdraw";
    const previousWithdraw = "amount2";
    const newWithdraw = getInputValue(withdraw);
    if (newWithdraw > 0) {
        addValue(previousWithdraw, newWithdraw);
        updateBalance(newWithdraw, false);
    }

    // totalAmount.innerText = parseFloat(totalAmount.innerText) - newWithdraw;
    // if (total <= 0) {
    //     submitWithdraw.disabled = true;
    //     submitWithdraw.classList.add("bg-red-100");
    //     totalAmount.innerText = 0;
    // } else {
    //     totalAmount.innerText = total;
    //     submitWithdraw.disabled = false;
    //     submitWithdraw.classList.remove("bg-red-100");
    // }
});
// Deposit Button
document.getElementById("deposit").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-amount");
    const depositAmount = parseFloat(depositField.value);
    console.log(depositAmount)

    depositField.value = "";
    if (isNaN(depositAmount)) {
        alert("Insert Valid Amount!");
        return;
    }

    const totalDepositElement = document.getElementById("total-deposit");
    const totalDepositText = totalDepositElement.innerText;
    let totalDeposit = parseFloat(totalDepositText);
    totalDeposit += depositAmount;
    totalDepositElement.innerText = totalDeposit;

});

// Withdraw Button
document.getElementById("withdraw").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-amount");
    const withdrawAmount = parseFloat(withdrawField.value);

    withdrawField.value = "";
    if (isNaN(withdrawAmount)) {
        alert("Insert Valid Amount!");
        return;
    }

    const balanceElement = document.getElementById("balance");
    let balanceAmount = balanceElement.innerText;
    balanceAmount = parseFloat(balanceAmount);

    if (withdrawAmount > balanceAmount) {
        alert("Not Enough Money!");
        return;
    }

    const totalWithdrawElement = document.getElementById("total-withdraw");
    const totalWithdrawText = totalWithdrawElement.innerText;
    totalWithdraw = parseFloat(totalWithdrawText);
    totalWithdraw += withdrawAmount;
    totalWithdrawElement.innerText = totalWithdraw;

    // Balance Field Update
    balanceAmount -= withdrawAmount;
    balanceElement.innerText = balanceAmount;
});

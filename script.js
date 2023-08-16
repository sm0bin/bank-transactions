// Deposit Button
document.getElementById("deposit").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-amount");
    const depositValue = parseFloat(depositField.value);
    console.log(depositValue, typeof (depositValue));

    depositField.value = "";
    if (isNaN(depositValue)) {
        alert("Insert Valid Amount!");
        return;
    }

    const totalDepositElement = document.getElementById("total-deposit");
    let depositAmount = totalDepositElement.innerText;
    depositAmount = parseFloat(depositAmount);
    depositAmount += depositValue;
    totalDepositElement.innerText = depositAmount;

});

// Withdraw Button
document.getElementById("withdraw").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-amount");
    const withdrawValue = parseFloat(withdrawField.value);

    withdrawField.value = "";
    if (isNaN(withdrawValue)) {
        alert("Insert Valid Amount!");
        return;
    }

    const totalWithdrawElement = document.getElementById("total-withdraw");
    let withdrawAmount = totalWithdrawElement.innerText;
    withdrawAmount = parseFloat(withdrawAmount);
    withdrawAmount += withdrawValue;
    totalWithdrawElement.innerText = withdrawAmount;

    // Balance Field Update
    const balanceElement = document.getElementById("balance");
    let balanceAmount = balanceElement.innerText;
    balanceAmount = parseFloat(balanceAmount);
    balanceAmount -= withdrawValue;
    balanceElement.innerText = balanceAmount;
});

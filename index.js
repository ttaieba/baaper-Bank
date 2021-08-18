document.getElementById('dep').addEventListener('click', function () {
    const userInput = document.getElementById('input-amount');
    const userValue = userInput.value;
    const currentAmount = parseFloat(userValue);


    //update deposit total/set deposite;
    const depositTotal = document.getElementById('show-amount');

    const preAmount = depositTotal.innerText;
    const preadd = parseFloat(preAmount);

    const newAmount = preadd + currentAmount;
    depositTotal.innerText = newAmount;


    // Update balance 3 no.box;
    const balanceTotal = document.getElementById('balance-up')
    const preAmountTotal = balanceTotal.innerText;
    const AmountInNumber = parseFloat(preAmountTotal);

    const newbalanceTOtal = AmountInNumber + newAmount;
    balanceTotal.innerText = newbalanceTOtal;
    userInput.value = '';



});

const w = document.getElementById('wit').addEventListener('click', function () {
    const exitAmount = document.getElementById('exit-amount');
    const userExit = exitAmount.value;
    const AmountExit = parseFloat(userExit);

    // update withdraw
    const withdrawtTotal = document.getElementById('withdraw-Amount');

    const witAmount = withdrawtTotal.innerText;
    const preexit = parseFloat(witAmount);

    const newwithdrawAmount = preexit + AmountExit;
    withdrawtTotal.innerText = newwithdrawAmount;



    exitAmount.value = '';


    // Update balance 3 no.box;
    const balances = document.getElementById('balance-up')
    const prebalanceAmountTotal = balances.innerText;
    const AmountoutNumber = parseFloat(prebalanceAmountTotal);

    const newbalanceTOtal = AmountoutNumber - newwithdrawAmount;
    balances.innerText = newbalanceTOtal;
    userInput.value = '';
});

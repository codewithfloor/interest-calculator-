function calculateInterest() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    if (principal && rate && time) {
        const interest = (principal * rate * time) / 100;
        document.getElementById('result').innerText = interest.toFixed(2);
    } else {
        alert("Please fill in all fields.");
    }
}

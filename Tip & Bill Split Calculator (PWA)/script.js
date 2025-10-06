const tipPercent = document.getElementById('tipPercent');
const customTip = document.getElementById('customTip');
const darkModeToggle = document.getElementById('darkMode');
const billInput = document.getElementById('billAmount');
const numPeopleInput = document.getElementById('numPeople');
const currencySelect = document.getElementById('currency');
const resultDiv = document.getElementById('result');

// Show custom tip field
tipPercent.addEventListener('change', () => {
  customTip.style.display = tipPercent.value === 'custom' ? 'block' : 'none';
  calculate();
});

// Dark mode toggle
darkModeToggle.addEventListener('change', () => {
  document.documentElement.setAttribute(
    'data-theme',
    darkModeToggle.checked ? 'dark' : 'light'
  );
});

// Auto calculate on input change
[tipPercent, customTip, billInput, numPeopleInput, currencySelect].forEach(el => {
  el.addEventListener('input', calculate);
});

// Core calculation function
function calculate() {
  const bill = parseFloat(billInput.value);
  let tip = parseFloat(tipPercent.value);
  const numPeople = parseInt(numPeopleInput.value);
  const currency = currencySelect.value;

  if (tipPercent.value === 'custom') {
    tip = parseFloat(customTip.value);
  }

  if (isNaN(bill) || isNaN(tip) || isNaN(numPeople) || bill <= 0 || tip < 0 || numPeople <= 0) {
    resultDiv.innerHTML = "⚠️ Please enter valid values.";
    return;
  }

  const tipAmount = bill * (tip / 100);
  const totalAmount = bill + tipAmount;
  const perPerson = totalAmount / numPeople;

  resultDiv.innerHTML = `
    Tip Amount: ${currency}${tipAmount.toFixed(2)}<br>
    Total Bill: ${currency}${totalAmount.toFixed(2)}<br>
    Each Person Pays: ${currency}${perPerson.toFixed(2)}
  `;
}

// Initialize calculation on load
calculate();

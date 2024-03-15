function convert() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('from').value;
    var toCurrency = document.getElementById('to').value;
    
    // Dummy conversion rates for demonstration
    var conversionRates = {
      'usd': { 'usd': 1, 'eur': 0.85, 'gbp': 0.73 },
      'eur': { 'usd': 1.18, 'eur': 1, 'gbp': 0.86 },
      'gbp': { 'usd': 1.38, 'eur': 1.16, 'gbp': 1 }
    };
    
    var result = amount * conversionRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = result.toFixed(2) + ' ' + toCurrency.toUpperCase();
  }
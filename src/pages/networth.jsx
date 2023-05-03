const NetWorthCalculator = () => {
    const totalLiabilities = () => {
    let sum = 0;
    for (let el of debts) {
      sum += parseFloat(el.Balance.replace("$", ''));
    }
    return  sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };


  const totalAssets = () => {
    let sum = 0;
    for (let el of assets) {
      sum += parseFloat(el.Worth.replace("$", ''));
    }
    return sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

 const calculateNetworth = () => {
    const assetsValue = parseFloat(totalAssets().replace(/[^\d.-]/g, ''));
    const liabilitiesValue = parseFloat(totalLiabilities().replace(/[^\d.-]/g, ''));
    const netWorthValue = assetsValue - liabilitiesValue;
    return '$' + netWorthValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };
}
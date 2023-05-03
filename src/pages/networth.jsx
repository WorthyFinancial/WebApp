import Layout from "@/components/layout";
import debts from "../lib/debts"; 
import assets from "../lib/assets";

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

function quickSort(arr, low, high, key) {
  if (low < high) {
    const pi = partition(arr, low, high, key);

    quickSort(arr, low, pi - 1, key);
    quickSort(arr, pi + 1, high, key);
  }
}

function partition(arr, low, high, key) {
  const pivot = parseFloat(arr[high][key].replace('$', ''));
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (parseFloat(arr[j][key].replace('$', '')) <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const sortedAssets = [...assets];
const sortedLiabilities = [...debts];
quickSort(sortedAssets, 0, sortedAssets.length - 1, "Worth");
quickSort(sortedLiabilities, 0, sortedLiabilities.length - 1, "Balance");

return (
  <>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 flex-col">
        <h1 className='text-3xl font-bold mb-4 ml-5'>Net Worth: {calculateNetworth()}</h1>
        <div className="p-8 mb-10 bg-red-100 border-solid border-4 border-red-600 w-11/12"> {/* Updated width here */}
          <h2 className="text-2xl font-bold pb-4">Liabilities: ${totalLiabilities()}</h2>
          <div className="flex flex-row">
            <ul className="space-y-1">
              {sortedLiabilities.map((debt, index) => (
                <li key={index}>
                  <div className="grid grid-cols-4 gap-4" style={{ gridTemplateColumns: '2fr 2.5fr 1fr' }}>
                    <span>{debt.Creditor}</span>
                    <span className="text-right">{parseFloat(debt.Balance.replace('$', '')).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })} 
                    </span>
                    <span>{debt.Debt_Type}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-8 bg-green-100 border-solid border-4 border-green-700 w-11/12"> {/* Updated width here */}
          <h2 className="text-2xl font-bold pb-4">Assets: ${totalAssets()}</h2>
          <ul className="space-y-1">
            {sortedAssets.map((asset, index) => (
              <li key={index}>
                <div className="grid grid-cols-4 gap-4" style={{ gridTemplateColumns: '.8fr 1fr .8fr' }}>
                  <span>{asset.Asset}</span>
                  <span className="text-right">{parseFloat(asset.Worth.replace('$', '')).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}  
                 </span>
                  <span>{asset.Asset_account}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-solid border-4 border-grey-400 w-full mt-12 md:w-1/4 md:p-8 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Stats</h2>
        <p className="text-lg mb-20 font-medium">Top 40% of users aged 30-35</p>
        <p className="text-lg mb-20 font-medium">Increase $20k in the last 6 months</p>
        <p className="text-lg mb-20 font-medium">0% of your lifetime earnings</p>
      </div>
    </div>
    <div>
      {/* Networth Graph Area */}
    </div>
  </>
);
}



NetWorthCalculator.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default NetWorthCalculator;
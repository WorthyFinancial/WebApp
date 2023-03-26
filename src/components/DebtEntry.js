import { Divider } from '@chakra-ui/react';
import React from 'react';


const DebtEntry = ( {creditor, debtType, balance, minPayment} ) => {
  return (
    <div className='bg-washed-blue dib ma2 pa3 shadow-5'>
        <div className='tc'>
          <span>{creditor} {debtType}</span>
          <span>{balance}</span>
          <span> {minPayment}</span>
          <span>$0.00</span>
          <span>5/15/2023</span>
      </div>
      <Divider />
    </div>  
  );
}

export default DebtEntry;
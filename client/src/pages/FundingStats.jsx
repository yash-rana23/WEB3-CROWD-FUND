import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const FundingStats = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);
    const [totalFundedAmount, setTotalFundedAmount] = useState(0);
    const [totalFundedCampaigns, setTotalFundedCampaigns] = useState(0);
  
    const { address, contract, getCampaigns, getTotalFundedAmount } = useStateContext();
  
    const fetchCampaigns = async () => {
      setIsLoading(true);
      const data = await getCampaigns();
      setCampaigns(data);
      setIsLoading(false);
    }

    const getFundedAmount = async() => {
        const amount = await getTotalFundedAmount();
        setTotalFundedAmount(amount);
    }
  
    useEffect(() => {
      if(contract){
        fetchCampaigns();
        getFundedAmount();
      } 
    }, [address, contract]);

  return (
    <div >
        <h1 className='text-white text-[2rem] font-semibold text-center'>Your Funding Stats</h1>

        {/* Stats Cards */}
        <div className='flex justify-between my-[40px] md:mx-[80px] mx-[40px]'>
        <div className="flex flex-col items-center w-[170px]">
      <h4 className="font-epilogue font-bold text-[30px] text-white p-3 bg-[#1c1c24] rounded-t-[10px] w-full text-center truncate">{totalFundedAmount}</h4>
      <p className="font-epilogue font-normal text-[16px] text-[#808191] bg-[#28282e] px-3 py-2 w-full rouned-b-[10px] text-center">Total Amount Funded</p>
    </div>
    <div className="flex flex-col items-center w-[170px]">
      <h4 className="font-epilogue font-bold text-[30px] text-white p-3 bg-[#1c1c24] rounded-t-[10px] w-full text-center truncate">{totalFundedCampaigns}</h4>
      <p className="font-epilogue font-normal text-[16px] text-[#808191] bg-[#28282e] px-3 py-2 w-full rouned-b-[10px] text-center">Total Funded Campaigns</p>
    </div>
    </div>

    {/* List of funded campaigns */}

    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />

    </div>
  )
}

export default FundingStats
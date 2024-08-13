import React from 'react'

function Home() {
  return (
    <div className='bg-white flex'>
      <div>
        <div className='text-[60px] font-bold text-[#4C4C4C] pt-28 pl-24'>Your Favourite Food Delivered Hot & Fresh</div>
        <div className='text-[25px] text-[#828282] pl-24 pt-5'>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food</div>
        <button className='text-[25px] pl-[27px] pt-[13px] pr-[27px] pb-[13px] rounded-[40px] ml-24 mt-14 shadow-2xl bg-[#FE9E0D] '>Order Now</button>
      </div>
      <div>
        <img className='w-[1146px] ' src='https://s3-alpha-sig.figma.com/img/abe8/4e47/423636f6c54c2472f8d47c1e19b8c9cb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=blOSl0EEB1zm-DVcFnwmKiiODhlUk~XUnuLOeje7lUQIM-jc6zI0TSC446mciKuzUX81JCpMCdKQUDzcjufrwCaFpqxHbnnYl9lId98OfXjFb7f5zzcWxfSM-EVfpb6mybAerYfJ3Y-9sahBDUFSw-keoq-Lf-5rsIJTrIjrVNDYUfSVtkbtus4QQbJgZDfXf5fid599SMy1ArOT0~iKtqaRejSACJ0lTlCzWRus9SqO-8hMS-eveL21J9r8k50Azll2o0D3xbLc5O9o0zprCUDszZ75Rf8Pj3UHnOzO~JcHjpB5veZshDoUpvVYFHN~9ih-RmYCCg6njqAy5fw51w__' alt='my img'></img>
      </div>
    </div>
  )
}

export default Home
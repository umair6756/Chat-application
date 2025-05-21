import React from 'react'

export default function MessageBox() {
  return (
    <div>
        
<div class="flex items-start gap-2.5">
   <div class="w-8 h-8 rounded-full bg-gray-700" ></div>
   <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl ">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900 ">Bonnie Green</span>
         <span class="text-sm font-normal text-gray-500 ">11:46</span>
      </div>
      <p class="text-sm font-normal py-2.5 text-gray-900 ">That's awesome. I think our users will really appreciate the improvements.</p>
      <span class="text-sm font-normal text-gray-500 ">Delivered</span>
   </div>

</div>

    </div>
  )
}

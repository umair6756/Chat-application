import React from 'react';

export default function MessageBox({ user, time, message, images = [], isOwn = false }) {
  return (
    <div className="flex items-start gap-2.5">
      {/* Avatar */}
      <img
        className="w-8 h-8 rounded-full"
        src={user.image || '/default-profile.jpg'}
        alt={`${user.name} profile`}
      />

      <div className="flex flex-col gap-1">
        <div className={`flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl   ${isOwn ? 'bg-white text-right text-black' : 'bg-gray-700 text-white '}`}>
          {/* Name and Time */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
            <span className={`text-sm font-semibold ${isOwn ? 'text-gray-900 ' : 'text-white'}`} >
              {user.name}
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {time}
            </span>
          </div>

          {/* Message Text */}
          {message && (
            <p className={`text-sm font-normal font-bold  ${isOwn ? 'text-gray-900 ' : 'text-white'}`}>
              {message}
            </p>
          )}

          {/* Image(s) */}
          {images.length === 1 && (
            <div className="group relative my-2.5">
              <HoverImage image={images[0]} tooltipId="download-image" />
            </div>
          )}

          {images.length > 1 && (
            <div className="grid gap-4 grid-cols-2 my-2.5">
              {images.map((img, index) => (
                <div className="group relative" key={index}>
                  <HoverImage image={img} tooltipId={`download-image-${index}`} />
                </div>
              ))}
            </div>
          )}

          {/* Delivery Status */}
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
      </div>
    </div>
  );
}

// Hoverable Image Component
function HoverImage({ image, tooltipId }) {
  return (
    <>
      <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
        <button
          data-tooltip-target={tooltipId}
          className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
        >
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
            />
          </svg>
        </button>
        <div
          id={tooltipId}
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
        >
          Download image
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <img src={image} className="rounded-lg" alt="Message image" />
    </>
  );
}





// import React from 'react';

// export default function MessageBox({ user, time, message, images = [], isOwn = false }) {
//   return (
//     <div className={`flex items-start gap-2.5 `}>
//       {/* Avatar */}
//       <img
//         className="w-8 h-8 rounded-full"
//         src={user.image || '/default-profile.jpg'}
//         alt={`${user.name} profile`}
//       />

//       <div className={`flex flex-col gap-1 max-w-[326px] leading-1.5 p-4 border-gray-200 rounded-lg
//         ${isOwn ? 'bg-white rounded-s-xl rounded-se-xl text-right' : 'bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700'}
//       `}>
//         {/* Name and Time */}
//         <div className={`flex items-center space-x-2 rtl:space-x-reverse mb-2 `}>
//           <span className={`text-sm font-semibold ${isOwn ? 'text-gray-900' : 'text-gray-900 dark:text-white'}`}>
//             {user.name}
//           </span>
//           <span className={`text-sm font-normal ${isOwn ? 'text-gray-500' : 'text-gray-500 dark:text-gray-400'}`}>
//             {time}
//           </span>
//         </div>

//         {/* Message Text */}
//         {message && (
//           <p className={`text-sm font-normal ${isOwn ? 'text-gray-900' : 'text-gray-900 dark:text-white'}`}>
//             {message}
//           </p>
//         )}

//           {/* Image(s) */}
//           {images.length === 1 && (
//             <div className="group relative my-2.5">
//               <HoverImage image={images[0]} tooltipId="download-image" />
//             </div>
//           )}

//           {images.length > 1 && (
//             <div className="grid gap-4 grid-cols-2 h-[50%] p-5 w-full">
//               {images.map((img, index) => (
//                 <div className=" group relative" key={index}>
//                   <HoverImage image={img} tooltipId={`download-image-${index}`} />
//                 </div>
//               ))}
//             </div>
//           )}

//         {/* Delivery Status */}
//         <span className={`text-sm font-normal ${isOwn ? 'text-gray-500' : 'text-gray-500 dark:text-gray-400'}`}>
//           Delivered
//         </span>
//       </div>
//     </div>
//   );
// }

// // Hoverable Image Component (keep your existing code for this)
// function HoverImage({ image, tooltipId, height, width }) {
//   return (
//     <>
//       <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
//         <button
//           data-tooltip-target={tooltipId}
//           className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
//         >
//           <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
//             />
//           </svg>
//         </button>
//         <div
//           id={tooltipId}
//           role="tooltip"
//           className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
//         >
//           Download image
//           <div className="tooltip-arrow" data-popper-arrow></div>
//         </div>
//       </div>
//       <img
//         src={image}
//         alt="attachment"
//         className="rounded-lg max-w-[300px] max-h-[300px] cursor-pointer"
//       />
//     </>
//   );
// }

export default function InputField({label, icon, placeholder, type}) {
    return (
       <>
       
       <div className=" py-3 ">
  <label
    htmlFor="website-admin"
    className="block mb-2 text-md font-bold text-gray-700 "
  >
    {label}
  </label>
  <div className="flex">
    <span className="inline-flex items-center px-3 text-sm text-gray-700 bg-gray-200 border border-e-0 border-gray-300 ">
      <div
        className=""
    
      >
        {icon}
      </div>
    </span>
    <input
      type={type}
      id="website-admin"
      className=" bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
      placeholder={placeholder}
    />
  </div>
</div>
       </>
    )

}
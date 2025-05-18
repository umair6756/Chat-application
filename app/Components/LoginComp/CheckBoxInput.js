import React from 'react'

const CheckBoxInput = () => {
  return (
    <div>
        <div className="flex items-center mb-4 mt-3">
  <input
    id="checkbox-3"
    type="checkbox"
    defaultValue=""
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm  "
  />
  <label
    htmlFor="checkbox-3"
    className="ms-2 text-sm font-medium text-gray-900 "
  >
    Remember me
  </label>
</div>

    </div>
  )
}

export default CheckBoxInput
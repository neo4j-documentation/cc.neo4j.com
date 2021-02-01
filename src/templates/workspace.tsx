import React from "react"


const Workspace:React.FC = ({ children }) => {
  return (
    <main className="flex-1 relative overflow-y-auto focus:outline-none" tabIndex={0}>
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-0 bg-yellow-200">
        <div className="py-4">
          {children}
        </div>
      </div>
    </div>
  </main>
  )
}

export default Workspace;
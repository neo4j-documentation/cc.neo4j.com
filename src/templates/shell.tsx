import React, { FC } from "react"

// import Sidebar from "components/Sidebar";
// import MobileMenu from "./mobile-menu";
// import TopBar from "./topbar";
import Workspace from "./workspace";

const Layout:FC = function ({ children }) {
  return (
    <div className="h-screen bg-white overflow-hidden flex">
      {/* {/* <MobileMenu /> */}
      {/* <Sidebar /> */}
      <div className="bg-green-400 flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0">
        {/* <TopBar className="relative z-10 flex-shrink-0" /> */}
        <Workspace>{children}</Workspace>
      </div>
    </div>
  )
}

export default Layout
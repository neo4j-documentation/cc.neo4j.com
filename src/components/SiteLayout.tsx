import React, { FC } from "react"
import { Helmet } from "react-helmet"

// import Sidebar from "components/Sidebar";
// import MobileMenu from "./mobile-menu";
// import TopBar from "./topbar";
import {SiteHeader} from "./SiteHeader";
import {SiteFooter} from "./SiteFooter";
import {Workspace} from "./Workspace";

const alertWith = (msg:string) => () => { alert(msg) }

export interface LayoutProps {
  title?: string;
}

const Layout:FC<LayoutProps> = function ({ title, children }) {
  return (
    <div className="layout h-screen bg-white overflow-hidden flex">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Neo4j:cc ${title ? title : ""}`}</title>
      </Helmet>

      {/* {/* <MobileMenu /> */}
      {/* <Sidebar /> */}
      <div className="bg-green-400 flex-1 max-w-none mx-auto w-0 flex flex-col md:px-8 xl:px-0">
        <SiteHeader onCreateAccount={alertWith('create account')} onLogin={alertWith('sign in')} onLogout={alertWith('sign out')}/>
        <Workspace>{children}</Workspace>
        <SiteFooter />
      </div>
    </div>
  )
}

export default Layout
import React,{Suspense} from "react";
import HeaderNavBar from "components/containers/HeaderNavBar";
import SideNavBar from "components/containers/SideNavbar";

const Layout = props => {
    return (
        <>
            <div className='wrapper'>
                <SideNavBar />
                <div className="main">
                    <HeaderNavBar />
                    <main className="content">
                        <Suspense fallback={<div>Loading...</div>}>
                            {props.children}
                        </Suspense>
                        
                    </main>
                </div>
            </div>

        </>
    );
};

export default Layout;
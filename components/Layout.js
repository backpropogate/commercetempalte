import Footer from "./Footer"
import Nav from "./Nav"
import Announcement from "./Announcement"
import Navbar from "./Navbar"
import FacebookChat from "./FacebookChat"


export default function Layout ({children})  {
    return (
        
            
        <div className="flex flex-col justify-between min-h-screen">
            <Announcement/>
            <Nav/>
            <main>
                {children}
            </main>
            <FacebookChat/>
            <Footer/>
        
        </div>
        
    )
}

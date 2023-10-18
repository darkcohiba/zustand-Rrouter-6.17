import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function RootLayout() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
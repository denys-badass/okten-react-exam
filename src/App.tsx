import {Outlet} from "react-router-dom";
import {Header} from "./components/header/Header.tsx";

function App() {

    return (
        <div className='bg-gray-400/50'>
            <div className='w-[75dvw] mx-auto relative'>
                <header className='h-[10dvh] bg-emerald-600 w-[75dvw] fixed z-30'>
                    <Header/>
                </header>
            </div>
            <main className='min-h-[90dvh] pt-[10dvh] bg-slate-50 w-[75dvw] mx-auto'>
                <Outlet/>
            </main>
        </div>
    )
}

export default App

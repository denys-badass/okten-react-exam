import {Outlet} from "react-router-dom";
import {Header} from "./components/header/Header.tsx";

function App() {

    return (
        <div className='bg-gray-400/50'>
            <header className='h-[10dvh] bg-emerald-700/80 w-3/4 mx-auto rounded-t-2xl'>
                <Header/>
            </header>
            <main className='min-h-[90dvh] bg-slate-50 w-3/4 mx-auto'>
                <Outlet/>
            </main>
        </div>
    )
}

export default App

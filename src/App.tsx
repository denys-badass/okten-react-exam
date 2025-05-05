import {Outlet} from "react-router-dom";
import {Header} from "./components/header/Header.tsx";
import {useInitUserSession} from "./hooks/useInitUserSession.ts";

function App() {
    useInitUserSession();

    return (
        <div className='bg-gray-400/50 min-h-[100dvh]'>
            <div className='w-[75dvw] max-[1000px]:w-full mx-auto relative'>
                <header className='h-[10dvh] bg-emerald-600 w-[75dvw] max-[1000px]:w-full fixed z-30'>
                    <Header/>
                </header>
            </div>
            <main className='min-h-[100dvh] pt-[10dvh] bg-slate-50 w-[75dvw] max-[1000px]:w-full mx-auto'>
                <Outlet/>
            </main>
        </div>
    );
}

export default App

import logo from './assets/logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-white">
      <header className="flex flex-col sm:flex-row gap-8 sm:gap-0  h-auto items-center px-6 py-4 justify-between" >
        <div className="code-font bg-zinc-50 h-fit px-4 py-2 rounded-lg border-[1.5px] border-zinc-200 text-sm text-center" >Get started by editing <span className="font-bold">src/index.jsx</span></div>

        <div className="flex gap-6">
          <div class="flex relative rounded-lg items-center justify-center w-9 h-9 bg-zinc-50 border-zinc-200 border-[1.75px] rotate-45 cursor-pointer transistion-all duration-300 hover:bg-zinc-200">
            <svg class="-rotate-45 text-xl mt-[2px] ml-[1px]" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em" style="overflow: visible;"><path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8Zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm9 6h1v5h-8v-5h1v-1a3 3 0 1 1 6 0v1Zm-2 0v-1a1 1 0 1 0-2 0v1h2Z"></path></svg>
          </div>   
          <div class="flex relative rounded-lg items-center justify-center w-9 h-9 bg-zinc-50 border-zinc-200 border-[1.75px] rotate-45 cursor-pointer transistion-all duration-300 hover:bg-zinc-200">
            <svg  class="-rotate-45 text-xl mt-[2px] ml-[1px]" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em" style="overflow: visible;"><path fill="currentColor" d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5ZM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19ZM5 15.337A3.486 3.486 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1v10.337Z"></path></svg>
          </div>
          <div class="flex relative rounded-lg items-center justify-center w-9 h-9 bg-zinc-50 border-zinc-200 border-[1.75px] rotate-45 cursor-pointer transistion-all duration-300 hover:bg-zinc-200">
            <svg class="-rotate-45 text-xl mt-[2px] ml-[1px]" fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" height="1em" width="1em" style="overflow: visible;"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center pattern-bg flex-1 gap-16" >
        <img src={ (WEBSITE_ENVIORNMENT === "development" ? "http://localhost:3000" : "" ) + logo} class="logo" alt="logo" />

        <div className="flex items-center justify-around flex-row flex-wrap gap-12 px-6 ">
          <div class="relative group flex flex-col h-auto cursor-pointer my-2 w-48 sm:w-64" >
            <div class="absolute -inset-0.5 bg-gradient-to-r via-cyan-600 to-emerald-300 from-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
            <div class="relative flex flex-col gap-2 h-full w-full bg-white border-[1.5px] border-zinc-200 group-hover:bg-zinc-50 rounded-lg px-6 py-6 items-center transition duration-1000 group-hover:duration-200 animate-tilt"> 
                <h2 className="w-full text-left font-bold text-lg" >Docs</h2>
                <p className="text-sm" >Unlock detailed insights into Solid Press features.</p>
            </div>
          </div>

          <div class="relative group flex flex-col h-auto cursor-pointer my-2 w-48 sm:w-64" >
            <div class="absolute -inset-0.5 bg-gradient-to-r via-cyan-600 to-emerald-300 from-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
            <div class="relative flex flex-col gap-2 h-full w-full bg-white border-[1.5px] border-zinc-200 group-hover:bg-zinc-50 rounded-lg px-6 py-6 items-center transition duration-1000 group-hover:duration-200 animate-tilt"> 
                <h2 className="w-full text-left font-bold text-lg" >Tutorials</h2>
                <p className="text-sm" >Master the art of creation with our insightful tutorials & guides.</p>
            </div>
          </div>

          <div class="relative group flex flex-col h-auto cursor-pointer my-2 w-48 sm:w-64" >
            <div class="absolute -inset-0.5 bg-gradient-to-r via-cyan-600 to-emerald-300 from-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
            <div class="relative flex flex-col gap-2 h-full w-full bg-white border-[1.5px] border-zinc-200 group-hover:bg-zinc-50 rounded-lg px-6 py-6 items-center transition duration-1000 group-hover:duration-200 animate-tilt"> 
                <h2 className="w-full text-left font-bold text-lg" >Templates</h2>
                <p className="text-sm" >Craft your vision efortlessly with our custom templates.</p>
            </div>
          </div>

          <div class="relative group flex flex-col h-auto cursor-pointer my-2 w-48 sm:w-64" >
            <div class="absolute -inset-0.5 bg-gradient-to-r via-cyan-600 to-emerald-300 from-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt"></div>
            <div class="relative flex flex-col gap-2 h-full w-full bg-white border-[1.5px] border-zinc-200 group-hover:bg-zinc-50 rounded-lg px-6 py-6 items-center transition duration-1000 group-hover:duration-200 animate-tilt"> 
                <h2 className="w-full text-left font-bold text-lg" >Deploy</h2>
                <p className="text-sm" >Utilize one of our recommended deployment solutions.</p>
            </div>
          </div>
        </div>
       
      </main>
      <footer className="min-h-[64px] h-16 max-h-16 flex justify-center items-center text-sm text-slate-400">
        <a href="https://simplicitytechsolutions.com" target="_blank" className="cursor-pointer">A Simplicty Tech Solution</a>
      </footer>
    </div>
  );
}

export default App;


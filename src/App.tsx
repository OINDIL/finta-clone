import BigImage from "./components/global/BigImage";
import Hero from "./components/global/Hero";
import Navbar from "./components/global/Navbar";
import { ThemeProvider } from "./components/providers/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-blue-50 relative">
        <div className="w-full h-[1px] absolute left-0 bottom-[625px] bg-neutral-200"></div>
        <div className="max-w-5xl mx-auto px-8 relative">
          <div className="bg-radial-[at_50%_10%] from-white to-blue-50 to-75% h-[200px] w-full absolute top-0 left-0"></div>

          <Navbar />
          <Hero />
          <BigImage />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

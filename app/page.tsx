import Image from "next/image";
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>This is the main content of your page.</p>
      </main>
      <footer>
        <p>&copy; 2024 GearheadsGo</p>
      </footer>
    </>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <h1>Your Page Header</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>This is the main content of your page.</p>
      </main>
      <footer>
        <p>&copy; 2024 GearheadsGo</p>
      </footer>
    </>
  );
}

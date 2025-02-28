import BannerNav from "./BannerNav";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="font-sans">
      <BannerNav />
      <Navbar />
    </header>
  );
}

import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow grid grid-rows-[1fr_auto]">
          {children}
          <Footer />
        </main>
      </div>
      <Sidebar />
    </div>
  );
}

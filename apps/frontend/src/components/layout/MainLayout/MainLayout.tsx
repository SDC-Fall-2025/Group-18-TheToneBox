import { Button } from "@heroui/react";
import { NavLink, Outlet } from "react-router-dom";
import { Home, Sparkles, Info } from "lucide-react";
import logo from "@/assets/TheToneBox.png";

function SideBar() {
  return (
    <aside className="h-full w-64 shrink-0 border-r border-divider">
      <div className="flex h-16 items-center px-4 border-b border-divider">
        <img src={logo} alt="TheToneBox Logo" className="h-10 w-auto" />
      </div>
      <nav className="p-3 space-y-1">
        <Button
          as={NavLink}
          to="/"
          color="default"
          variant="flat"
          radius="full"
          className="w-full font-logo justify-start"
          startContent={<Home size={18} />}
        >
          Overview
        </Button>
        <Button
          as={NavLink}
          to="/creator"
          color="default"
          variant="flat"
          radius="full"
          className="w-full font-logo justify-start"
          startContent={<Sparkles size={18} />}
        >
          Creator
        </Button>
        <Button
          as={NavLink}
          to="/about"
          color="default"
          variant="flat"
          radius="full"
          className="w-full font-logo justify-start"
          startContent={<Info size={18} />}
        >
          About
        </Button>
      </nav>
    </aside>
  );
}

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

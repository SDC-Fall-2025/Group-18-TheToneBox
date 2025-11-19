import WaveformDivider from "@/components/WaveformDivider/WaveformDivider";
import { Button } from "@heroui/react";
import { Home, Info, Sparkles } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

function SideBar() {
  return (
    <aside className="h-full w-64 shrink-0 bg-linear-to-b from-content1 to-content2 shadow-xl relative">
      <div className="flex flex-col h-16 items-center justify-center px-4 relative">
        <div className="font-logo text-2xl text-primary mb-2">TheToneBox</div>
        <WaveformDivider barCount={40} animated={true} />
      </div>
      <nav className="p-3 space-y-2">
        <Button
          as={NavLink}
          to="/"
          color="default"
          variant="flat"
          radius="full"
          className="w-full font-logo justify-start transition-all hover:shadow-md hover:scale-[1.02] data-[active=true]:bg-primary/10 data-[active=true]:shadow-lg"
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
          className="w-full font-logo justify-start transition-all hover:shadow-md hover:scale-[1.02] data-[active=true]:bg-primary/10 data-[active=true]:shadow-lg"
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
          className="w-full font-logo justify-start transition-all hover:shadow-md hover:scale-[1.02] data-[active=true]:bg-primary/10 data-[active=true]:shadow-lg"
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
    <div className="flex h-screen bg-linear-to-br from-background to-content1">
      <SideBar />
      <main className="flex-1 overflow-auto">
        <div className="p-6 min-h-full bg-linear-to-br from-transparent to-content1/30">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

import WaveformDivider from "@/components/WaveformDivider/WaveformDivider";
import EqualizerIcon from "@/components/EqualizerIcon";
import { Button } from "@heroui/react";
import { Home, Info, Sparkles, AudioLines } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import styles from "./MainLayout.module.scss";

function SideBar() {
  const location = useLocation();

  return (
    <aside className="h-full w-80 shrink-0 bg-linear-to-b from-content1 to-content2 shadow-xl relative">
      <div className="flex flex-col h-24 items-center justify-center px-6 relative">
        <div className="font-logo text-3xl text-primary mb-3">TheToneBox</div>
        <WaveformDivider barCount={50} animated={true} />
      </div>
      <nav className="p-6 space-y-4">
        <Button
          as={NavLink}
          to="/"
          color="default"
          variant="flat"
          radius="full"
          className={styles.navButton}
          startContent={location.pathname === "/" ? <EqualizerIcon size={20} /> : <Home size={20} />}
        >
          Overview
        </Button>
        <Button
          as={NavLink}
          to="/creator"
          color="default"
          variant="flat"
          radius="full"
          className={styles.navButton}
          startContent={location.pathname === "/creator" ? <EqualizerIcon size={20} /> : <Sparkles size={20} />}
        >
          Creator
        </Button>
         <Button
          as={NavLink}
          to="/extraction"
          color="default"
          variant="flat"
          radius="full"
          className={styles.navButton}
          startContent={location.pathname === "/extraction" ? <EqualizerIcon size={20} /> : <AudioLines size={20} />}
        >
          Extraction
        </Button>
        <Button
          as={NavLink}
          to="/about"
          color="default"
          variant="flat"
          radius="full"
          className={styles.navButton}
          startContent={location.pathname === "/about" ? <EqualizerIcon size={20} /> : <Info size={20} />}
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

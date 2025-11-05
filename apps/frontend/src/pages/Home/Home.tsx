import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import "./Home.module.scss";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to TheToneBox</h1>
      <p>This is the home page.</p>
      <nav>
        <Link to="/about">Go to About</Link>
      </nav>
      <div className="relative">
        <Button color="primary">Get Started</Button>
      </div>
    </div>
  );
}

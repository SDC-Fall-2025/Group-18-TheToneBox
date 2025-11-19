import { Button } from "@heroui/react";
import "./Home.module.scss";

export default function Home() {
  return (
    <div className="home">
      <h1 className="text-2xl font-semibold mb-2">Welcome to TheToneBox</h1>
      <p className="text-gray-600 mb-4">This is the home page.</p>
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <Button color="primary">Get Started</Button>
      </div>
    </div>
  );
}

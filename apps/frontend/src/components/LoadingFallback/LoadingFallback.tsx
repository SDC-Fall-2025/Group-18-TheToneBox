import { Spinner } from "@heroui/react";

export default function LoadingFallback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <Spinner
        size="lg"
        color="primary"
        label="Loading..."
        classNames={{
          label: "font-logo text-lg text-foreground/70",
        }}
      />
    </div>
  );
}

import { Button, Card } from "@heroui/react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import type { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-background to-content1 p-6">
      <Card className="max-w-2xl w-full p-12 bg-content1 border-2 border-danger/50">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Error Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-danger/20 blur-2xl rounded-full" />
            <AlertTriangle size={80} className="text-danger relative" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-logo font-bold text-foreground">
            Something Went Wrong
          </h1>

          {/* Description */}
          <p className="text-foreground/70 text-lg max-w-md">
            We encountered an unexpected error. Don't worry, your data is safe.
            Try reloading the page to continue.
          </p>

          {/* Error Details (for development) */}
          {import.meta.env.NODE_ENV === "development" && (
            <details className="w-full mt-4">
              <summary className="cursor-pointer text-sm text-foreground/60 hover:text-foreground transition-colors">
                Error Details (Development Only)
              </summary>
              <pre className="mt-4 p-4 bg-content2 rounded-lg text-left text-xs text-danger overflow-auto max-h-40">
                {error.message}
                {"\n\n"}
                {error.stack}
              </pre>
            </details>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <Button
              color="primary"
              size="lg"
              radius="full"
              startContent={<RotateCcw size={20} />}
              onPress={resetErrorBoundary}
              className="font-logo"
            >
              Reload Page
            </Button>
            <Button
              color="default"
              variant="bordered"
              size="lg"
              radius="full"
              onPress={() => window.location.href = "/"}
              className="font-logo"
            >
              Go Home
            </Button>
          </div>

          {/* Branding */}
          <div className="mt-8 pt-6 border-t border-divider w-full">
            <p className="text-sm text-foreground/50">
              <span className="font-logo text-primary">TheToneBox</span> - AI-Powered Synthesizer Parameter Generation
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

import ParameterInput from "@/components/ParameterInput";
import { useState, useRef, type DragEvent, type ChangeEvent } from "react";
import { Upload, AudioLines } from "lucide-react";
import "./Extraction.module.scss";

export default function Extraction() {
  const [tags, setTags] = useState<string[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("audio/")) {
      setUploadedFile(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="extraction flex flex-col items-center pt-12 pb-12">
      <h1 className="text-3xl font-logo font-bold mb-8">Extraction Mode</h1>

      {/* File Upload Section */}
      <div className="w-full max-w-3xl mb-8">
        <div
          className={`relative border-2 border-dashed rounded-xl p-12 transition-all cursor-pointer ${
            isDragging
              ? "border-primary bg-primary/10"
              : "border-divider hover:border-primary/50 bg-content1"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleUploadClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex flex-col items-center justify-center gap-4">
            {uploadedFile ? (
              <AudioLines
                size={48}
                className="text-primary"
              />
            ) : (
              <Upload
                size={48}
                className={`transition-colors ${
                  isDragging ? "text-primary" : "text-foreground/40"
                }`}
              />
            )}
            {uploadedFile ? (
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">
                  {uploadedFile.name}
                </p>
                <p className="text-sm text-foreground/60 mt-1">
                  Click or drag to replace
                </p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">
                  Drop your audio file here
                </p>
                <p className="text-sm text-foreground/60 mt-1">
                  or click to browse
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Parameter Input Section */}
      <ParameterInput
        placeholder="Describe/Type in parameters..."
        tags={tags}
        onTagsChange={setTags}
        className="max-w-3xl mb-12"
      />

      {/* Extraction Results Section - Placeholder for now */}
      {uploadedFile && (
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl font-logo font-semibold mb-6 text-foreground">
            Extracted Parameters
          </h2>
          <div className="bg-content1 rounded-xl p-8 border-2 border-divider">
            <p className="text-center text-foreground/60">
              AI extraction results will appear here
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

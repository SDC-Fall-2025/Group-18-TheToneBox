import TypewriterPlaceholder from "@/components/TypewriterPlaceholder/TypewriterPlaceholder";
import { Chip, Input } from "@heroui/react";
import { useState, type KeyboardEvent } from "react";

interface ParameterInputProps {
  placeholder?: string;
  tags: string[];
  onTagsChange: (tags: string[]) => void;
  className?: string;
}

export default function ParameterInput({
  placeholder = "Type in Parameters...",
  tags,
  onTagsChange,
  className = "",
}: ParameterInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        onTagsChange([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    onTagsChange(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-wrap items-center gap-2 p-4 min-h-[60px] bg-content1 rounded-xl border-2 border-divider focus-within:border-primary transition-colors relative">
        {tags.map((tag) => (
          <Chip
            key={tag}
            color="primary"
            variant="solid"
            onClose={() => removeTag(tag)}
            classNames={{
              base: "h-8",
              content: "font-medium text-foreground",
              closeButton: "text-foreground",
            }}
          >
            {tag}
          </Chip>
        ))}
        <div className="flex-1 min-w-[200px] relative">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder=""
            variant="flat"
            classNames={{
              base: "w-full",
              inputWrapper:
                "!bg-transparent shadow-none border-0 p-0 hover:!bg-transparent data-[hover=true]:!bg-transparent",
              input: "text-base",
            }}
          />
          {tags.length === 0 && !inputValue && (
            <div className="absolute inset-0 flex items-center pointer-events-none">
              <TypewriterPlaceholder
                text={placeholder}
                typingSpeed={100}
                blinkCount={3}
                blinkSpeed={400}
                pauseAfterTyping={0}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

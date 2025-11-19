import TypewriterPlaceholder from "@/components/TypewriterPlaceholder/TypewriterPlaceholder";
import { Chip, Input } from "@heroui/react";
import { useState, type KeyboardEvent } from "react";
import { parameterOptions, categoryLabels } from "@/data/parameterOptions";
import type { ParameterOptions } from "@/data/parameterOptions";
import "./Creator.module.scss";

export default function Creator() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  return (
    <div className="creator flex flex-col items-center pt-12 pb-12">
      <h1 className="text-3xl font-logo font-bold mb-8">Creator Mode</h1>

      {/* Input Section */}
      <div className="w-full max-w-3xl mb-12">
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
                  text="Type in Parameters..."
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

      {/* Explore Section */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-logo font-semibold mb-6 text-foreground">
          Explore Parameters
        </h2>

        <div className="space-y-8">
          {(Object.keys(parameterOptions) as Array<keyof ParameterOptions>).map(
            (category) => (
              <div key={category} className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground/80">
                  {categoryLabels[category]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {parameterOptions[category].map((item) => (
                    <Chip
                      key={item}
                      color="default"
                      variant="flat"
                      className="cursor-pointer hover:bg-primary/20 hover:scale-105 transition-all"
                      onClick={() => addTag(item)}
                    >
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

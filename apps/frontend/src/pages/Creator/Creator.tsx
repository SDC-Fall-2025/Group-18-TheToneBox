import ParameterInput from "@/components/ParameterInput";
import { Chip } from "@heroui/react";
import { useState } from "react";
import { parameterOptions, categoryLabels } from "@/mockdata/parameterOptions";
import type { ParameterOptions } from "@/mockdata/parameterOptions";
import "./Creator.module.scss";

export default function Creator() {
  const [tags, setTags] = useState<string[]>([]);

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  return (
    <div className="creator flex flex-col items-center pt-12 pb-12">
      <h1 className="text-3xl font-logo font-bold mb-8">Creator Mode</h1>

      {/* Input Section */}
      <ParameterInput
        placeholder="Type in Parameters..."
        tags={tags}
        onTagsChange={setTags}
        className="max-w-3xl mb-12"
      />

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

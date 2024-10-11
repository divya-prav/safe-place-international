"use client";

import React from "react";
import { ToggleSwitch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";

const sensitiveTopics = [
  "Abortion",
  "Homophobia or transphobia",
  "Mental health",
  "Politics",
  "Racism, sexism, or ableism",
  "Religious beliefs",
  "Intimate partner violence",
  "Sexual or domestic violence",
  "Suicide or self-harm",
  "Trauma",
  "Violence",
] as const;

interface SensitiveTopicsProps {
  isSensitive: boolean;
  setIsSensitive: (isSensitive: boolean) => void;
  selectedTopics: string[];
  setSelectedTopics: (topics: string[]) => void;
}

const SensitiveTopics: React.FC<SensitiveTopicsProps> = ({
  isSensitive,
  setIsSensitive,
  selectedTopics,
  setSelectedTopics,
}) => {
  const handleTopicToggle = (
    topic: string,
    selectedTopics: string[],
    setSelectedTopics: (topics: string[]) => void
  ) => {
    setSelectedTopics(
      selectedTopics.includes(topic)
        ? selectedTopics.filter((t) => t !== topic)
        : [...selectedTopics, topic]
    );
  };

  return (
    <>
      <section className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">Sensitive topic</span>
          <Info className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
        </div>
        <ToggleSwitch
          checked={isSensitive}
          onCheckedChange={setIsSensitive}
          aria-label="Toggle sensitive content"
        />
      </section>
      {isSensitive && (
        <section className="space-y-2">
          <h2 className="text-sm font-medium">Select topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {sensitiveTopics.map((topic) => (
              <div key={topic} className="flex items-center space-x-2">
                <Checkbox
                  id={topic}
                  checked={selectedTopics.includes(topic)}
                  onCheckedChange={() =>
                    handleTopicToggle(topic, selectedTopics, setSelectedTopics)
                  }
                />
                <label htmlFor={topic} className="text-sm font-medium">
                  {topic}
                </label>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default SensitiveTopics;

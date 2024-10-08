"use client";

import React, { useState } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import SensitiveTopics from "./SensitiveTopics";
import PostFooter from "./PostFooter";

const NewPostForm: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [isSensitive, setIsSensitive] = useState<boolean>(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedAudience, setSelectedAudience] = useState<string>("Community");

  return (
    <main className="w-full min-w-[360px] max-w-2xl mx-auto bg-background p-4 space-y-4 sm:p-6 md:p-8">
      <PostHeader
        selectedAudience={selectedAudience}
        setSelectedAudience={setSelectedAudience}
      />
      <PostContent
        content={content}
        setContent={setContent}
      />
      <SensitiveTopics
        isSensitive={isSensitive}
        setIsSensitive={setIsSensitive}
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
      />
      <PostFooter onSaveDraft={() => {}} onPost={() => {}} />
    </main>
  );
};

export default NewPostForm;

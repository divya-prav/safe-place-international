"use client";

import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

interface PostContentProps {
  content: string;
  setContent: (content: string) => void;
}

const PostContent: React.FC<PostContentProps> = ({ content, setContent }) => {
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Textarea
        value={content}
        onChange={handleContentChange}
        placeholder="Share your thoughts..."
        className="min-h-[300px] resize-none"
      />
      <Button
        variant="outline"
        className="w-full justify-center items-center h-24 border-2 border-dashed border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
      >
        <div className="flex flex-col items-center">
          <span>Add Photo</span>
          <Image className="h-6 w-6 m-2" />
        </div>
      </Button>
    </>
  );
};

export default PostContent;
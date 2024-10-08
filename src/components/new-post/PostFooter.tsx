"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface PostFooterProps {
  onSaveDraft: () => void;
  onPost: () => void;
}

const PostFooter: React.FC<PostFooterProps> = ({ onSaveDraft, onPost }) => {
  return (
    <footer className="flex flex-row justify-center items-center pt-4 space-x-4">
      <Button variant="outline" className="w-auto" onClick={onSaveDraft}>
        Save draft
      </Button>
      <Button 
        className="w-auto bg-primary text-white hover:bg-primary/90 transition-colors"
        onClick={onPost}
      >
        Post
      </Button>
    </footer>
  );
};

export default PostFooter;
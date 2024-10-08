"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, ArrowRightSquare } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaGlobe, FaUserFriends, FaUsers } from "react-icons/fa";

type AudienceOption = {
  label: string;
  icon: React.ElementType;
};

const audienceOptions: AudienceOption[] = [
  { label: 'Community', icon: FaGlobe },
  { label: 'Friends', icon: FaUserFriends },
  { label: 'Groups', icon: FaUsers },
];

interface PostHeaderProps {
  selectedAudience: string;
  setSelectedAudience: (audience: string) => void;
}

const PostHeader: React.FC<PostHeaderProps> = ({ selectedAudience, setSelectedAudience }) => {
  return (
    <>
      <header className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Go back">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-lg font-semibold">New Post</h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-primary bg-primary/10"
          aria-label="Next step"
        >
          <ArrowRightSquare className="h-6 w-6" />
        </Button>
      </header>
      <section className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/avatar.jpg" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Select onValueChange={setSelectedAudience} defaultValue={selectedAudience}>
            <SelectTrigger className="w-40 justify-between">
              <SelectValue placeholder="Select audience" />
            </SelectTrigger>
            <SelectContent>
              {audienceOptions.map((option) => (
                <SelectItem key={option.label} value={option.label}>
                  <option.icon className="mr-2 inline" aria-hidden="true" />
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <span className="text-gray-500">Drafts</span>
      </section>
    </>
  );
};

export default PostHeader;
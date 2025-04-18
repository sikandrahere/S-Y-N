"use client";
import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/Avatar";
import { EllipsisVertical } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PostCard = ({ post }) => {
    const [avatarUrl, setAvatarUrl] = useState("");

    // Generate unique avatar URL for each post
    useEffect(() => {
        
        const randomNumber = Math.floor(Math.random() * 100);
        const avatarApiUrl = `https://avatar.iran.liara.run/public/${randomNumber}`;
        setAvatarUrl(avatarApiUrl);
    }, []);

    return (
        <div>
            {post && (<CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem translateZ="50">
                        <div className="flex flex-col h-full w-full text-white m-2">
                            <div className="flex items-center justify-between gap-3 p-2 sm:w-[25rem] m-auto">
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src={avatarUrl} alt="Random Avatar" />
                                        <AvatarFallback>?</AvatarFallback>
                                    </Avatar>
                                    <h1>{post?.name || "Anonymous"}</h1>
                                </div>
                                <div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <EllipsisVertical />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem>
                                                <h1>Report</h1>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <div>
                                <h1>{post?.content || "Freedom is a right, not a privilege!"}</h1>
                                <p className="text-blue-300">
                                    {post?.hashtags?.join(" ") || "#FreedomToShare #BreakingBoundaries #UnfilteredVoice"}
                                </p>
                            </div>
                        </div>
                    </CardItem>
                </CardBody>
            </CardContainer>)}
        </div>
    );
};

export default PostCard;
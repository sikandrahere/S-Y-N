"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({classname}) => {
    const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
        <Menu setActive={setActive} >
        <Link href={"/topics"}><MenuItem setActive={setActive} active={active} item="Topics"></MenuItem></Link>
        <Link href={"/trending"}><MenuItem setActive={setActive} active={active} item="Trending"></MenuItem></Link>
        <Link href={"/"}><MenuItem setActive={setActive} active={active} item="S Y N"></MenuItem></Link>
        <Link href={"/explore"}><MenuItem setActive={setActive} active={active} item="Explore"></MenuItem></Link>
        <Link href={"/express"}><MenuItem setActive={setActive} active={active} item="Express"></MenuItem></Link>
        </Menu>
    </div>
  )
}

export default Navbar
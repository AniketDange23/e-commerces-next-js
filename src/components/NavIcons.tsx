"use client";
import { FaRegUserCircle } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const isLoggendIn = false;

    const router = useRouter();

    const handleProfile = () => {
        if (!isLoggendIn) {
            router.push("/login");
        }
        setIsProfileOpen((prev) => !prev);
    };
    return (
        <div className=" nav-icons flex items-center gap-4  xl:gap-6 relative">
            <FaRegUserCircle className="cursor-pointer " onClick={handleProfile} />
            {isProfileOpen && (
                <div className="profile  flex flex-col absolute  p-2 rounded-md  top-8  bg-white left-0 text-sm shadow-sm  z-20 ">
                    <Link href="/">Profile</Link>
                    <Link href="/logout">Logout</Link>
                </div>
            )}
            <div className="relative">
                <IoIosNotificationsOutline
                    className="cursor-pointer"
                />
                <div className="absolute bg-green-600 rounded-full -top-2 -right-2 items-center   justify-center text-white flex  w-5 h-5   text-sm">2</div>
            </div>
            <div className="relative">
            <PiShoppingCartLight onClick={() => setIsCartOpen((prev) => !prev)}
            />
                <div className="absolute bg-green-600 rounded-full -top-2 -right-2 items-center   justify-center text-white flex  w-5 h-5   text-sm">4</div>
            </div>
            
       

            {isCartOpen && <CartModal />}
        </div>
    );
};

export default NavIcons;

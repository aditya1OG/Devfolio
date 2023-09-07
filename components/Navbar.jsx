'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Typed from 'typed.js';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const textRef = useRef();

    useEffect(() => {
        const options = {
            strings: ['Aditya Tiwari'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            startDelay: 0,
            showCursor: true,
            cursorChar: '|',
            loop: true,
        };

        const typed = new Typed(textRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='bg-[#131921] w-[100%] h-20 text-white shadow-2xl py-3 md:py-0 md:items-center flex justify-center gap-2 md:gap-4 '>
            <nav className="w-[100%] items-center justify-center">
                <div className="md:items-center md:flex gap-16 mdl:gap-24 md:justify-around">
                    <div className="flex items-center justify-between md:block">
                        <Link className='flex items-center md:mt-1 justify-center gap-2 ml-4 lg:ml-0' href="/">
                            <h1 className="shadow-xs font-cursive2 text-[2rem] md:text-2xl text-white" ref={textRef}></h1>
                        </Link>
                        <div className="md:hidden bg-white rounded-full">
                            <button
                                className="p-2 text-gray-700 rounded-full outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <Image src="/assests/close.svg" width={20} height={20} alt="logo" />
                                ) : (
                                    <Image
                                        src="/assests/Hamburger-menu.svg"
                                        width={20}
                                        height={20}
                                        alt="logo"
                                        className=" focus:border-none active:border-none"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className='text-white'>
                        <div
                            className={`pb-3 mt-2 md:block md:bg-inherit md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block ' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen text-[12px] lg:text-[14px] gap-7 lg:gap-12 md:h-auto justify-center md:flex text-center text-white ">
                                <li className="border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#home" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                        About
                                    </Link>
                                </li>
                                <li className=" border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#skills" onClick={() => setNavbar(!navbar)}>
                                        Skills
                                    </Link>
                                </li>
                                <li className=" border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                        Projects
                                    </Link>
                                </li>
                                <li className="border-b md:border-b-0 border-white p-4 md:p-0 ">
                                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

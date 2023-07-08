"use client"
import { useState, Fragment } from "react";
import { AiFillEnvironment } from 'react-icons/ai'
import { BsArrowLeftShort, BsChevronDown } from 'react-icons/bs'
import { RiDashboardFill } from 'react-icons/ri'
import { SidebarData } from './sidebardata'
import Link from 'next/link'
import Navbar from './navbar/page'

export default function MainLayout({ children }) {


    const [open, setOpen] = useState(true);
    const [subnav, setSubnav] = useState(false);
    const [rowInd, setrowInd] = useState();
    const [link, setLink] = useState("/");

    const showSubnav = () => setSubnav(!subnav);

    function setPath(path, index, call, isSubmenu) {
        //    console.log(path);
        if (call == 0) {
            setrowInd(index);
        }
        if (isSubmenu) {
            setSubnav(!subnav)
        }
        setLink(path);
    }

    return (
        <section>
            <div>
                <Navbar />
                <div className="flex">
                    <div className={`bg-red-100 h-screen p-5 pt-8 relative duration-300 ${open ? "w-auto" : "w-20 "}`}>
                        <BsArrowLeftShort className={`bg-white text-purple-800 absolute cursor-pointer -right-3 top-9 w-7 rounded-full text-3xl ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                        <div className="flex gap-x-4 items-center">
                            <AiFillEnvironment className={`bg-amber-300 text-4xl rounded block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
                        </div>
                        <ul className="pt-2">
                            {
                                SidebarData.map((data, index) => (
                                    <Fragment key={index}>
                                        <Link href={data.path}>
                                            <li key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-orange-300 text-sm text-black items-center gap-x-4 
                             ${data.gap ? "mt-4" : "mt-2"}`} onClick={() => setPath(data.path, index, 0, data.submenu)}>

                                                <span className="text-2xl block float-left">
                                                    {data.icon ? data.icon : <RiDashboardFill />}
                                                </span>
                                                <span className={`${!open && "hidden"} mx-2 text-base font-medium duration-200 flex-1`}>
                                                    {data.title}
                                                </span>
                                                {
                                                    data.submenu && (<BsChevronDown className={`${subnav && "rotate-180"}`} />)
                                                }
                                            </li>
                                        </Link>
                                        {rowInd == index && data.submenu && data.row == index && subnav &&
                                            (
                                                <ul>
                                                    {
                                                        open && data.submenuItems.map((item, index_new) => (
                                                            <li key={index_new} className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white rounded-md font-bold"
                                                                onClick={() => setPath(item.path, index_new, 1, "")}>

                                                                <Link href={item.path} key={index_new}>
                                                                    {item.title}
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )}
                                    </Fragment>
                                ))
                            }
                        </ul>

                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>

        </section>
    )
}



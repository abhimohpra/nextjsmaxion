import React from "react";
import { AiOutlineMergeCells } from 'react-icons/ai'
import { BsPersonBoundingBox, BsUiChecks } from 'react-icons/bs'
import { RiDashboardFill } from 'react-icons/ri'

export const SidebarData = [
    { title: "Dashboard", icon: <RiDashboardFill/>, path:"/main/dashboard" },
    {
        title: "Org.Setup",
        icon: <AiOutlineMergeCells />,
        path:"/main/org",
        gap: true,
        row: 1,
        submenu: true,
        submenuItems: [
            { title: "Process", path:"/main/org/process" },
            { title: "Department", path:"/main/org/dept" },
            { title: "Sub-Department", path:"/main/subdept" },
            { title: "Sub-process" , path:"/main/subprocess"},
            { title: "Areas" , path:"/main/areas"},
            { title: "Machines", path:"/main/machines", }]
    },
    {
        title: "Emp. Mgmt.",
        icon: <BsPersonBoundingBox />,
        path:"/empmgt",
        submenu: true,
        row: 2,
        submenuItems: [
            { title: "Employee List", path:"/main/emplist" },
            { title: "Employee Assign" , path:"/main/empassign"},
            { title: "Account reset" , path:"/main/accreset"},]
    },
    {
        title: "Emp. Skills",
        icon: <BsUiChecks />,
        path:"/skills",
        submenu: true,
        row: 3,
        submenuItems: [
            { title: "Questionnires", path:"/main/ques" },
            { title: "Skills set" , path:"/main/skillset"},]
    },
];
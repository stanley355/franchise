import {LuBox, LuBoxes, LuUser} from "react-icons/lu";

export const HEADER_MENU = [
    // {
    //     icon: <LuNotepadText />,
    //     title: 'Bills',
    //     href:  '/bills',
    // },
    {
        icon: <LuBox />,
        title: "Inventories",
        href: "/inventories"
    },
    {
        icon: <LuBoxes />,
        title: "Inventories Logs",
        href: "/inventories-logs"
    },
    {
        icon: <LuUser/>,
        title: "Account",
        href: "/accounts"
    }
]
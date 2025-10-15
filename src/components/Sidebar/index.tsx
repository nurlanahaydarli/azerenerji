import { Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./sidebar.module.css";

import FinanceIcon from "@/assets/icon/FinanceIcon";
import HomeIcon from "@/assets/icon/HomeIcon";
import JournalIcon from "@/assets/icon/Journalcon";
import MenuIcon from "@/assets/icon/MenuIcon";
import ProjectIcon from "@/assets/icon/Projecticon";
import RepairIcon from "@/assets/icon/RepairIcon";
import ReportIcon from "@/assets/icon/ReportIcon";
import Searchicon from "@/assets/icon/Searchicon";
import SettingIcon from "@/assets/icon/SettingIcon";
import StationIcon from "@/assets/icon/StationsIcon";
import TaskIcon from "@/assets/icon/TaskIcon";
import userImg from "@/assets/img/user.jpg";
import { ROUTER } from "@/constants/routes";


type SidebarItem = {
    key: string;
    label: string;
    icon?: React.ReactNode;
    children?: SidebarItem[];
};

export default function Sidebar({
    handleMenuClick,
    open,
}: {
    handleMenuClick: () => void;
    open: boolean;
}) {
    const location = useLocation();


    // -----------------------------
    // 1. Sidebar structure
    // -----------------------------
    const sidebarItems: SidebarItem[] = [
        {
            key: ROUTER.HOME,
            label: "Əsas səhifə",
            icon: <HomeIcon />,
        },
        {
            key: ROUTER.REPAIRS,
            label: "Cari təmirlər",
            icon: <RepairIcon />,
            children: [
                {
                    key: ROUTER.REPAIRS,
                    label: "Cari təmirlər",
                },
            ],
        },
        {
            key: ROUTER.STATIONS,
            label: "Stansiyalar",
            icon: <StationIcon />,
            children: [
                {
                    key: ROUTER.STATIONS,
                    label:"Stansiyalar",
                },
            ],
        },
        {
            key: ROUTER.HR,
            label: "İR idarəetməsi",
            icon: <FinanceIcon />,
            children: [
                {
                    key: ROUTER.FINANCE,
                    label:"İR idarəetməsi",
                },
            ],
        },
        {
            key: ROUTER.FINANCE,
            label: "Maliyyə",
            icon: <FinanceIcon />,
            children: [
                {
                    key: ROUTER.FINANCE,
                    label:"Maliyyə",
                },
            ],
        },
        {
            key: ROUTER.PROJECTS,
            label: "Layihələr",
            icon: <ProjectIcon />,
            children: [
                {
                    key: ROUTER.PROJECTS,
                    label: "Layihələr",
                },
            ],
        },
        {
            key: ROUTER.TASKS,
            label: "Tapşırıqlar",
            icon: <TaskIcon />,
        },
        {
            key: ROUTER.REPORTS,
            label: "Hesabatlar",
            icon: <ReportIcon />,
        },
        {
            key: ROUTER.JOURNAL,
            icon: <JournalIcon />,
            label: "Hadisə jurnalı",
        },
        {
            key: ROUTER.SEARCH,
            label: "Axtarış",
            icon: <Searchicon />,
        },
        {
            key: ROUTER.SETTINGS.INDEX,
            label: "Ayarlar",
            icon: <SettingIcon />,
            children: [
                {
                    key: ROUTER.SETTINGS.INDEX,
                    label: "Ayarlar",
                },
            ],
        },
        
    ];

    // -----------------------------
    // 2. Recursive Menu builder
    // -----------------------------
    const buildMenuItems = (items: SidebarItem[]): any =>
        items.map(({ key, label, icon, children }) => ({
            key,
            icon,
            label: children ? label : <Link to={key}>{label}</Link>,
            children: children ? buildMenuItems(children) : undefined,
        }));

    const findItemKeyFromLocation = (
        pathname: string,
        search: string,
        items: SidebarItem[]
    ): string | undefined => {
        const fullPath = pathname + search;
        for (const item of items) {
            if (item.key === fullPath) return item.key;
            if (item.children) {
                const found = findItemKeyFromLocation(pathname, search, item.children);
                if (found) return found;
            }
        }
        return undefined;
    };

    // -----------------------------
    // 3. Get open keys by path
    // -----------------------------
    const getOpenKeysFromPath = (
        path: string,
        items: SidebarItem[],
        parents: string[] = []
    ): string[] => {
        for (const item of items) {
            if (item.key === path) return parents;
            if (item.children) {
                const found = getOpenKeysFromPath(path, item.children, [
                    ...parents,
                    item.key,
                ]);
                if (found.length) return found;
            }
        }
        return [];
    };

    // -----------------------------
    // 4. State + Effect
    // -----------------------------
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const [selectedKey, setSelectedKey] = useState<string>(location.pathname);

    // useEffect(() => {
    //   setSelectedKey(location.pathname);
    //   const foundOpenKeys = getOpenKeysFromPath(location.pathname, sidebarItems);
    //   setOpenKeys(foundOpenKeys);
    // }, [location.pathname]);

    useEffect(() => {
        const currentKey = findItemKeyFromLocation(
            location.pathname,
            location.search,
            sidebarItems
        );
        if (currentKey) {
            setSelectedKey(currentKey);
            const foundOpenKeys = getOpenKeysFromPath(currentKey, sidebarItems);
            setOpenKeys(foundOpenKeys);
        }
    }, [location.pathname, location.search]);

    // -----------------------------
    // 5. Render
    // -----------------------------
    return (
        <div
            className={`${styles.sidebar_box} ${!open ? "" : `${styles.mini_sidebar} mini_sidebar `}`}
        >
            <div className={`${styles.sidebar_menu}`} onClick={handleMenuClick}>
                <MenuIcon />
            </div>
            <div className={`${styles.sidebar_user} ${!open ? "" : `${styles.hide_menu} `}`}>
                <img src={userImg} alt="User" />
                <span className="typography-body1">
                    Seyran Huseynov
                </span>
            </div>
            <div className={`${styles.menu_list} menu_list  ${!open ? "" : `${styles.hide_menu} `}`}>
                <Menu
                    mode="inline"
                    style={{ width: 256 }}
                    selectedKeys={[selectedKey]}
                    openKeys={openKeys}
                    onOpenChange={setOpenKeys}
                    items={buildMenuItems(sidebarItems)}
                />
            </div>
        </div>
    );
}

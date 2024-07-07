import React, { ReactNode } from "react"
import {AppstoreFilled, WalletFilled, DatabaseFilled, UserAddOutlined, SettingFilled, CustomerServiceFilled} from '@ant-design/icons'

type Props = {
    label: string,
    key: string,
    icon: React.ComponentType<any>
}

export const SIDENAVS:Props[] = [
    {
        label: "Overview",
        key: "/overview",
        icon: AppstoreFilled
    },
    {
        label: "Wallet",
        key: "/wallet",
        icon: WalletFilled
    },
    {
        label: "Activity",
        key: "/activity",
        icon: DatabaseFilled
    },
    {
        label: "Users",
        key: "/users",
        icon: UserAddOutlined
    },
    {
        label: "Settings",
        key: "/settings",
        icon: SettingFilled
    },
]
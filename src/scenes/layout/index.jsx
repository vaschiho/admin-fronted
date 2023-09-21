import React from 'react'
import { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useGetUserQuery } from '../../state/api'

const Layout = () => {
    const isNotMoblie = useMediaQuery("(min-width:600px)")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const userId = useSelector((state) => state.global.userId);
    console.log(userId)
    const { data } = useGetUserQuery(userId)
    // console.log("🚀 ~ file: index.jsx:17 ~ Layout ~ data:", data)
 


    return (
        <Box display={isNotMoblie ? "flex" : "block"} width="100%" height="100%">
            <Sidebar
                user={data || {}}
                isNotMoblie={isNotMoblie}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box flexGrow={1}>
                <Navbar
                    user={data || {}}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout
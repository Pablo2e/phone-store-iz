import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../components/Header'

export const MainLayout = () => {
  return (
    <div>
        <h1>MainLayout</h1>
        <Header />
        <Outlet />
    </div>
  )
}

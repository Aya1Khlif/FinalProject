import React from 'react'
import { Outlet } from 'react-router'
import AllNav from '../../../components/NavBarAll/AllNav'

export default function Gest() {
  return (
    <>
    <AllNav />
    <Outlet />
    </>
  )
}

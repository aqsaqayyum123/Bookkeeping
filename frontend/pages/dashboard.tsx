import Head from 'next/head'
//import Sidebar from './components/sidebar'
//import Header from "./components/Header"
//import Container from './components/Container'
//import Drawer from './components/drawer'
import Drawer from './components/drawer'

export default function Home() {
  return (
    <div>
        {/* <myDrawer /> */}
        <Drawer />
      <div className="flex w-screen h-screen" >

        {/* <div className="w-screen ">
          <Header />
          <Container />
        </div> */}
      </div>

    </div>
  )
}
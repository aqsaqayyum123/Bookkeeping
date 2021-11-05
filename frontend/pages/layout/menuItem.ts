
// import Head from 'next/head';
// import { Navbar } from '../components/navbar';

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Create Next App</title>
//         <link rel='icon' href='/favicon.ico' />
//       </Head>
//       <Navbar />
//       <div>Hello World</div>
//     </div>
//   );
//}




/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
// import Dashboard from '@material-ui/icons/Dashboard';
// import Person from '@material-ui/icons/Person';
// import LibraryBooks from '@material-ui/icons/LibraryBooks';
// import BubbleChart from '@material-ui/icons/BubbleChart';
// import LocationOn from '@material-ui/icons/LocationOn';
// import Notifications from '@material-ui/icons/Notifications';
// import Unarchive from '@material-ui/icons/Unarchive';
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.js";
// import UserProfile from "views/UserProfile/UserProfile.js";
// import TableList from "views/TableList/TableList.js";
// import Typography from "views/Typography/Typography.js";
// import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
//import RTLPage from "views/RTLPage/RTLPage.js";
//const index = () => {
//const items: MenuItemType[] = [
//const HomePage = () => (
  // const dashboardRoutes = [
  //   {
  //     path: '/dashboard',
  //     name: 'Dashboard',
  //     icon: Dashboard,
  //     //component: DashboardPage,
  //     layout: '/admin',
  //   },
  //   {
  //     path: '/user',
  //     name: 'User Profile',
  //     icon: Person,
  //     //component: UserProfile,
  //     layout: '/admin',
  //   },
  //   {
  //     path: '/table',
  //     name: 'Table List',
  //     icon: 'content_paste',
  //     //component: TableList,
  //     layout: '/admin',
  //   },
  //   {
  //     path: '/typography',
  //     name: 'Typography',
  //     icon: LibraryBooks,
  //     //component: Typography,
  //     layout: '/admin',
  //   },
  //   {
  //     path: '/icons',
  //     name: 'Icons',
  //     icon: BubbleChart,
  //     //component: Icons,
  //     layout: '/admin',
  //   },
  //   {
  //     path: '/maps',
  //     name: 'Maps',
  //     icon: LocationOn,
  //     //component: Maps,
  //     layout: '/admin',
  //   },
  //   {
  //     path: '/notifications',
  //     name: 'Notifications',
  //     icon: Notifications,
  //     //component: NotificationsPage,
  //     layout: '/admin',
  //   },

  //   {
  //     path: '/upgrade-to-pro',
  //     name: 'Upgrade To PRO',
  //     icon: Unarchive,
  //     //component: UpgradeToPro,
  //     layout: '/admin',
  //   },
  // ];
//)

// export default dashboardRoutes;

import React from 'react'
import { MenuItem } from '@material-ui/core';

const items: MenuItem[] = [
  {
    title: 'Home Page',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Roles',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Add A New Role',
        link: { href: '/roles/create' },
      },
      {
        title: 'View all Roles',
        link: { href: '/roles' },
      },
    ],
  },
  {
    title: 'Users',
    icon: { name: 'person-outline' },
    children: [
      {
        title: 'Add A New User',
        link: { href: '/users/create' },
      },
      {
        title: 'View all Users',
        link: { href: '/users' },
      },
    ],
  },
  {
    title: 'Question Banks',
    icon: { name: 'book-outline' },
    children: [
      {
        title: 'Add A New Question Bank',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'View all Question Banks',
        link: { href: '/extra-components/actions' },
      },
    ],
  },
  {
    title: 'Questions',
    icon: { name: 'copy-outline' },
    children: [
      {
        title: 'Add A New Question',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'View all Questions',
        link: { href: '/extra-components/actions' },
      },
    ],
  },
  {
    title: 'Options',
    icon: { name: 'options-outline' },
    children: [
      {
        title: 'Add A New Option',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'View all Options',
        link: { href: '/extra-components/actions' },
      },
    ],
  },
  {
    title: 'Schedule Quizzes',
    icon: { name: 'clock-outline' },
    children: [
      {
        title: 'Set A New Schedule Quiz',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'View all Schedule Quizzes',
        link: { href: '/extra-components/actions' },
      },
    ],
  },
  {
    title: 'User Quiz Attempts',
    icon: { name: 'file-outline' },
    children: [
      {
        title: 'View all User Quiz Attempts',
        link: { href: '/extra-components/actions' },
      },
    ],
  },
];

export default items;


import { AiFillDashboard } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineArrowDropDown, MdPayment } from "react-icons/md"
import { IoMdArrowDropup } from "react-icons/io";
import { FaCcMastercard } from "react-icons/fa";
import { FaUserTie, FaUserCog } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { IoGift } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { LuLineChart } from "react-icons/lu";
import { FaUsersViewfinder } from "react-icons/fa6";
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiFillDashboard />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
  },
  {
    title: 'Staff & Users ',
    path: '/staff/users',
    icon: <FaUserDoctor />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,

    subNav: [
      {
        title: 'Staff',
        path: '/staff/users/staff',
        icon: <FaUserTie />
      },
      {
        title: 'User Account',
        path: '/staff/users/user/account',
        icon: <FaUserCog />
      },
      {
        title: 'Reset Password',
        path: '/staff/users/user/resetpw',
        icon: <TbPasswordUser />,
      }
    ]
  },
  {
    title: 'Subscription',
    path: '/subscription',
    icon: <IoGift />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
    subNav: [
      {
        title: 'Individuals Subscriptions',
        path: '/subscription/individuals',
        icon: <FaCcMastercard />,
        cName: 'sub-nav'
      },
      {
        title: 'Individuals & Groups',
        path: '/subscriptions/groups',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },

      {
        title: 'Staff & Users ',
        path: '/staff/users',
        icon: <FaUserDoctor />,
        iconClosed: <MdOutlineArrowDropDown />,
        iconOpened: <IoMdArrowDropup />,
        subNav: [
          {
            title: 'Family Subscriptions',
            path: '/subscription/family',
            // icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'Family Plan Members',
            path: '/subscription/family/plan',
            // icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
          {
            title: 'View Family Subs',
            path: '/subscription/family/viewsubs',
            // icon: <IoIcons.IoIosPaper />,
            cName: 'sub-nav'
          },
        ]

      }
    ],

  },
  {
    title: 'Payments',
    path: '/payments',
    icon: < MdPayment />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,

    subNav: [
      {
        title: 'View Payments',
        path: '/payments/view/payments',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Make Payments',
        path: '/payments/make/payments',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Payments Confirmation',
        path: '/payments/payments/confirmation',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Customer Care Center',
    path: '/customer/care',
    icon: <RiCustomerService2Fill />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,

    subNav: [
      {
        title: 'Call Subscribers',
        path: '/payments/view/payments',
        // icon: <IoIcons.IoIosPaper />
      },

    ]
  },
  {
    title: 'Auto-Debit OPS',
    path: '/autodebits',
    icon: <BsCashCoin />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
    subNav: [
      {
        title: 'Check Mandate Details',
        path: '/autodebits/mandate',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'UnMandated Subscribers',
        path: '/autodebits/unmandated/subs',
        // icon: <IoIcons.IoIosPaper />
      },

    ]
  },
  {
    title: 'Reports & Analysis',
    path: '/reports',
    icon: <LuLineChart />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
    subNav: [
      {
        title: 'Subscribers View',
        path: '/subscribers',
        icon: <FaUsersViewfinder />
      },
      {
        title: 'UnMandated Subscribers',
        path: '/autodebits/unmandated/subs',
        // icon: <IoIcons.IoIosPaper />
      },

    ]
  }
];
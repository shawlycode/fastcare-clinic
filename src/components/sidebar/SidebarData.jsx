import { IoCardOutline } from "react-icons/io5";
import { VscDashboard } from "react-icons/vsc";
import { FaUserDoctor } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri"
import { GiPayMoney } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { FaChartPie } from "react-icons/fa6";




export const SidebarData = [
  { id: 1, title: 'Dashboard', icon: <VscDashboard />, link: '/dashboard' },
  { id: 2, title: 'Staff and Users', icon: <FaUserDoctor />, link: '/staff-users' },
  { id: 3, title: 'Subscription', icon: <IoCardOutline />, link: '/subscription' },
  { id: 4, title: 'Payments', icon: <BsCashCoin />, link: '/payments' },
  { id: 5, title: 'Customer Care Center', icon: <RiCustomerService2Fill />, link: '/carecenter' },
  { id: 6, title: 'Auto-Debit OPS', icon: <GiPayMoney />, link: '/debit' },
  { id: 7, title: 'Reports and Analysis', icon: <BsGraphUp />, link: '/reports' },
  { id: 8, title: 'Settings', icon: <GoGear />, link: '/settings' },
  { id: 9, title: 'Charts', icon: <FaChartPie />, link: '/charts' },
];
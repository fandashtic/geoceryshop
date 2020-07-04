import React, { lazy } from "react";

// Main Routes
const Home = lazy(() => import("pages/Dashboard"));

// Master Routes
//const Brand = lazy(() => import("pages/Master/Brand"));
const Asset = lazy(() => import("pages/Master/Asset"));
// const Bank = lazy(() => import("pages/Master/Bank"));
// const BankBranch = lazy(() => import("pages/Master/BankBranch"));
// const Batches = lazy(() => import("pages/Master/Batches"));
// const Branch = lazy(() => import("pages/Master/Branch"));
// const Category = lazy(() => import("pages/Master/Category"));
// const Company = lazy(() => import("pages/Master/Company"));
// const CreditTerm = lazy(() => import("pages/Master/CreditTerm"));
// const CustomerCategory = lazy(() => import("pages/Master/CustomerCategory"));
// const Customers = lazy(() => import("pages/Master/Customers"));
// const CustomerType = lazy(() => import("pages/Master/CustomerType"));
// const DeliveryType = lazy(() => import("pages/Master/DeliveryType"));
// const Location = lazy(() => import("pages/Master/Location"));
// const Family = lazy(() => import("pages/Master/Family"));
// const Products = lazy(() => import("pages/Master/Product"));
// const Options = lazy(() => import("pages/Master/Option"));
// const PaymentType = lazy(() => import("pages/Master/PaymentType"));
// const Reginal = lazy(() => import("pages/Master/Reginal"));
// const Tax = lazy(() => import("pages/Master/Tax"));
// const vendor = lazy(() => import("pages/Master/vendor"));
// const Zone = lazy(() => import("pages/Master/Zone"));
// const Manufacture = lazy(() => import("pages/Master/Manufacture"));

//Authentication Routes 
const Login = lazy(() => import("pages/Auth/Login"))

const routes = [
  {
    path: '/',
    name: 'Login',
    icon: '',
    menu: 'auth',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'fas fa-fw fa-sliders-h',
    menu: 'main',
    component: Home,
  },
  {
    path: '/asset',
    name: 'Asset',
    icon: 'fas fa-fw fa-briefcase',
    menu: 'master',
    component: Asset,
  },
  // {
  //   path: '/bank',
  //   name: 'Bank',
  //   icon: 'fas fa-fw fa-piggy-bank',
  //   menu: 'master',
  //   component: Bank,
  // },
  // {
  //   path: '/BankBranch',
  //   name: 'Bank Branch',
  //   icon: 'fas fa-fw fa-piggy-bank',
  //   menu: 'master',
  //   component: BankBranch,
  // },
  // {
  //   path: '/Batches',
  //   name: 'Batches',
  //   icon: 'fas fa-fw fa-cube',
  //   menu: 'master',
  //   component: Batches,
  // },
  // {
  //   path: '/Branch',
  //   name: 'Branch',
  //   icon: 'fas fa-fw fa-code-branch',
  //   menu: 'master',
  //   component: Branch,
  // },
  // {
  //   path: '/brand',
  //   name: 'Brand',
  //   icon: 'fas fa-fw fa-leaf',
  //   menu: 'master',
  //   component: Brand,
  // },
  // {
  //   path: '/category',
  //   name: 'Category',
  //   icon: 'fas fa-fw fa-object-group',
  //   menu: 'master',
  //   component: Category,
  // },
  // {
  //   path: '/Company',
  //   name: 'Company',
  //   icon: 'fas fa-fw fa-briefcase',
  //   menu: 'master',
  //   component: Company,
  // },
  // {
  //   path: '/CreditTerm',
  //   name: 'Credit Term',
  //   icon: 'fas fa-fw fa-credit-card',
  //   menu: 'master',
  //   component: CreditTerm,
  // },
  // {
  //   path: '/CustomerCategory',
  //   name: 'Customer Category',
  //   icon: 'fas fa-fw fa-user-cog',
  //   menu: 'master',
  //   component: CustomerCategory,
  // },
  // {
  //   path: '/Customers',
  //   name: 'Customers',
  //   icon: 'fas fa-fw fa-user',
  //   menu: 'master',
  //   component: Customers,
  // },
  // {
  //   path: '/CustomerType',
  //   name: 'Customer Type',
  //   icon: 'fas fa-fw fa-user-tag',
  //   menu: 'master',
  //   component: CustomerType,
  // },
  // {
  //   path: '/DeliveryType',
  //   name: 'Delivery Type',
  //   icon: 'fas fa-fw fa-envelope',
  //   menu: 'master',
  //   component: DeliveryType,
  // },
  // {
  //   path: '/Family',
  //   name: 'Family',
  //   icon: 'fas fa-fw fa-users',
  //   menu: 'master',
  //   component: Family,
  // },
  // {
  //   path: '/Location',
  //   name: 'Location',
  //   icon: 'fas fa-fw fa-location-arrow',
  //   menu: 'master',
  //   component: Location,
  // },
  // {
  //   path: '/manufacture',
  //   name: 'Manufacture',
  //   icon: 'fas fa-fw fa-compact-disc',
  //   menu: 'master',
  //   component: Manufacture,
  // },
  // {
  //   path: '/options',
  //   name: 'Options',
  //   icon: 'fas fa-fw fa-copy',
  //   menu: 'master',
  //   component: Options,
  // },
  // {
  //   path: '/PaymentType',
  //   name: 'Payment Type',
  //   icon: 'fas fa-fw fa-suitcase',
  //   menu: 'master',
  //   component: PaymentType,
  // },
  // {
  //   path: '/products',
  //   name: 'Products',
  //   icon: 'fas fa-fw fa-cubes',
  //   menu: 'master',
  //   component: Products,
  // },
  // {
  //   path: '/Reginal',
  //   name: 'Reginal',
  //   icon: 'fas fa-fw fa-location-arrow',
  //   menu: 'master',
  //   component: Reginal,
  // },
  // {
  //   path: '/Tax',
  //   name: 'Tax',
  //   icon: 'fas fa-fw fa-money-check-alt',
  //   menu: 'master',
  //   component: Tax,
  // },
  // {
  //   path: '/vendor',
  //   name: 'vendor',
  //   icon: ' fas fa-fw fa-user-tie',
  //   menu: 'master',
  //   component: vendor,
  // },
  // {
  //   path: '/Zone',
  //   name: 'Zone',
  //   icon: ' fas fa-fw fa-haykal',
  //   menu: 'master',
  //   component: Zone,
  // },
];

export  {routes}

"use client"
import styles from './page.module.css'
import { Icon } from '@iconify/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/Logo.png'
import NextNProgress from 'nextjs-progressbar';
import Link from 'next/link';
import $ from "jquery";
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function Navbar() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      <div className={styles.navWrapper + " d-flex py-3 justify-content-between align-items-center px-2 px-lg-4 px-md-3 px-sm-2"}>

        <p className={styles.navBrand + " px-2 px-lg-4 px-md-3 px-sm-2"}><Image src={logo} alt={'logo'} /></p>
        {/* <p className={styles.navBrand + " px-2 px-lg-4 px-md-3 px-sm-2"}>AYZILL WATER</p> */}
        <div className={styles.navLinksWrapper + " px-5"}>
          <Link href={"/"} className={styles.navLinks + " active mx-3"}>Home</Link>
          <a href="/#products" className={styles.navLinks + " mx-3"}>Products</a>
          {/* <Link href={"/blogs"} className={styles.navLinks + "  mx-3"}>Blogs</Link> */}
          <Link href={"/about"} className={styles.navLinks + "  mx-3"}>About us</Link>
          {/* <Link href={"/cart"} className={styles.navLinks + "  mx-3"}>Cart</Link> */}
          <Link href={"/contact"} className={styles.btnSignup + " mx-3 px-3 py-2"}>Contact</Link>
        </div>
        <div className={styles.phoneMenuBtn + " px-2 px-lg-4 px-md-3 px-sm-2"}>
          <Icon icon="heroicons-solid:menu-alt-3" />
        </div>
      </div>


    </>
  )
}
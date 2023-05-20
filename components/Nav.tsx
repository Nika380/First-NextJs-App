"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { createContext } from "react";

const Nav = () => {
  return (
    <div>
      <Link href="/profile"> Profile </Link>
      <Link href={'/'}>Home</Link>
    </div>
  );
};

export default Nav;

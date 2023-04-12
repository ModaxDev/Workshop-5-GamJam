import Head from "next/head";
import Image from "next/image";
import PageTuto from "./PageTuto.jsx";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "./HomePage.jsx";

export default function Home() {
  return (
    <>
        <PageTuto />
        <HomePage />
    </>
  );
}

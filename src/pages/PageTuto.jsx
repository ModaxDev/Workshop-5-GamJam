import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

import React, { useState } from "react";

const PageTuto = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tutoriels - React Couleur</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
        <h1 className={styles.title}>React Couleur</h1>
        <h4 className={styles.title}> Testez vos reflèxes !</h4>
        <br />
        <p>Tester vos temps de réaction avec les changements de couleurs.
        Le jeu est conçu pour améliorer votre temps de réaction. 
        Il est également un excellent moyen de s'amuser et de se détendre tout en défiant vos compétences mentales.
        <br />
        Plusieurs mode de jeu sont disponibles, vous pouvez choisir entre le mode classique, le mode expert et les modes 3 et 4 prochainement.
        </p>
        <br />
        <h4 className={styles.title}> Mode Classique :</h4>
        <h6 className={styles.title}>Dans ce mode le but est de cliquer sur le bouton "stop" lorsque la couleur choisie apparait à l'écran, après avoir cliqué sur "Commencer".</h6>
        <br />
        <h4 className={styles.title}> Mode Expert :</h4>
        <h6 className={styles.title}>Le mode expert est le mode de jeu avancé.</h6>
        <br />
        <h4 className={styles.title}> Mode 3 et 4 :</h4>
        <p>Les modes 3 et 4 sont les modes de jeu prochainement disponibles.</p>
        </div>
         <div className={styles.grid}>
          <Link
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={styles.title}>Accueil</h2>
            </Link>
        </div>
      </main>
    </div>
  );
};

export default PageTuto;

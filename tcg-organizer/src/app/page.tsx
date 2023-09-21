"use client";
// import Image from 'next/image'
// import styles from './page.module.css'
import Axios from "axios";
import React, { useState } from "react";


export default function Home() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  let inputField = document.getElementById("inputField");

  const mtg = require('mtgsdk')

// partial name match

const search = (e: { target: { value: React.SetStateAction<string>; }; }) => {
  setSearchValue(e.target.value);
  console.log(e.target.value)
};

function submit () {
  console.log(searchValue, "search value")
  // getAPI();
  Axios.get(`https://api.magicthegathering.io/v1/cards?name=${searchValue}`).then((response) => {
    setData(response.data)
    console.log(data,"first data");
  }, (error) => {
    console.log(error);
  });
  console.log(data, "second data");
}


// mtg.card.where({name: {searchValue}})
// .then((response: any) => {
//     console.log(response)
// })
//     mtg.card.find(3)
//   .then((result: { card: { name: any; }; }) => {
//     console.log(result.card.name) // "Black Lotus"
// })
// inputField.value = "";


  function getAPI(){
  }


  return (
    <main>
      <div className="">
        <input type="text" onChange={search} id="inputField"/>
        <button onClick={submit} >Search</button>
      </div>


    <div className="container w-100 h-50">
      <div >

      </div>
    </div>


    </main>
  )
}

{/* <div className={styles.description}>
  <p>
    Get started by editing&nbsp;
    <code className={styles.code}>src/app/page.tsx</code>
  </p>
  <div>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      By{' '}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </a>
  </div>
</div>

<div className={styles.center}>
  <Image
    className={styles.logo}
    src="/next.svg"
    alt="Next.js Logo"
    width={180}
    height={37}
    priority
  />
</div>

<div className={styles.grid}>
  <a
    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Docs <span>-&gt;</span>
    </h2>
    <p>Find in-depth information about Next.js features and API.</p>
  </a>

  <a
    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Learn <span>-&gt;</span>
    </h2>
    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
  </a>

  <a
    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Templates <span>-&gt;</span>
    </h2>
    <p>Explore the Next.js 13 playground.</p>
  </a>

  <a
    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Deploy <span>-&gt;</span>
    </h2>
    <p>
      Instantly deploy your Next.js site to a shareable URL with Vercel.
    </p>
  </a>
</div> */}
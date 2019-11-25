import React,{useState} from 'react';

// import { useRouter } from 'next/router';
// import Link from 'next/link';
import Head from 'next/head';

import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";
import Notes from "../components/NotesContainer.jsx";
import '../styles/index.scss';

const dummyData = [
  { note: "Finish this app.", isComplete: false }, 
  { note: "Git Commit", isComplete: false }, 
  { note: "Git push", isComplete: false }, 
  { note: "Git High", isComplete: false }
]

const Index = () => {
  // const router = useRouter();
  
  const [notes, setNotes] = useState(dummyData)
  
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <link rel="shortcut icon" href="../static/favicon.ico" />
      </Head>

      <section className="app">
        <Header notes={notes} setNotes={setNotes} />

        <Notes notes={notes} />
        <Form  setNotes={(newNote)=> setNotes([...notes, {note:newNote, isCompete: false}])} />

      </section>
    </>
  )
}



export default Index;



// import logo from './logo.svg';
import './App.css';
import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import {data} from "/.data"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {

    const [notes, setNotes] = React.useState(
      JSON.parse(localStorage.getItem("notes")) || []
    )

    const [currentNoteId, setCurrentNoteId] = React.useState(
      (notes[0] && note[0].id) || ""
    )

    React.useEffect(()=>{
      localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    function createNewNote(){
      const newNote = {
        id: nanoid(),
        body: "# Type your markdown note's title here"
      }
      setNotes(preNotes => [newNote, ...preNotes])
      setCurrentNoteId(newNote.id)
    }

    function updateNote(text){
      setNotes(oldNotes => oldNotes.map(oldNote => {
        return oldNote.id === currentNoteId
          ? {...oldNote, body: text} 
          : oldNote
      }))
    }

    function findCurrentNote() {
      return notes.find(note => {
        return note.id === currentNoteId
      }) || notes[0]
    }

    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode(){
      setDarkMode(prevMode => !prevMode)
    }

    return (
      <main>
        {
          notes.length > 0 
          ?
          <Split sizes={[30, 70]} direction="horizontal" className="split">
            <Sidebar notes={notes} currentNote={findCurrentNote()} setCurrentNoteId={setCurrentNoteId} newNote={createnewNote} />
            {currentNoteId && notes.length > 0 && <Editor currentNote={findCurrentNote()} updateNote={updateNote} />}
          </Split>
          : 
          <div className='no-notes'>
            <h1>You have no notes</h1>
            <button className="first-note" onClick={createNewNote}>
              Create one now
            </button>
          </div>
        }
        <div className="container">
        <Navbar 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Main darkMode={darkMode} />
      </div>
      </main>
      
    )
    
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}



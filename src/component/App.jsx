import React ,{ useState } from "react";

import Heading from "./Header";
import Footer from "./Footer"
import Notes from "./Note"
import CreateArea from "./createArea";

function App(){

    const [notes, setNotes]=useState([])

function addNote(newNote){
console.log(newNote);

setNotes(prevNotes=>{
  return  [...prevNotes, newNote]
})
}

function deleteNote(id){
  setNotes(prevNotes=>{
    return prevNotes.filter((noteItem, index)=>{
return index !== id;
    })
  })
}

    return <div>
        <Heading />
        <CreateArea 
        onAdd={addNote}
         />
         {notes.map((noteItem, index)=>{
            return <Notes
            key={index}
            id={index}
            title ={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            />
         })
         }
        <Footer />
        
    </div>
}

export default App
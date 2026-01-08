import { useState, useEffect } from 'react';

function App() {
    const[notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    //fetch notes

    useEffect(() => {
        fetch("http://localhost:5000/notes")
            .then(res => res.json())
            .then(data => setNotes(data));
    }, []);

    function addNote(e) {
        e.preventDefault();

        fetch("http://localhost:5000/notes", {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify( {title,content }),

        })
            .then(res => res.json())
            .then(newNote => {
                setNotes([...notes, newNote]);
                setTitle("");
                setContent("");
            });
    }
    
    return (
        <div>
            <h1>Notes App</h1>

            <form onSubmit={addNote}>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                <br />

                <textarea 
                    placeholder="Content"
                    
            </form>
        </div>
    )
}


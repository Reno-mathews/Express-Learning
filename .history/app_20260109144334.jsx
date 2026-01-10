import { useState, useEffect } from 'react';

function App() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("http:localhost:5000/notes")
            .then(res => res.json())
            .then(data => setNotes(data));
    }, []);

    function addNote(e) {
        e.preventDefault();

        fetch("http:/localhost:5000/notes", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify([ title, content]),
        })
            .then(res => res.json())
            .then(newNote => {
                setNotes([...notes,newNote]);
                setTitle("");
                setContent("");
            });
    }

    return(
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
                    value={content}
                    onChange={e => setTitle(e.target.value)}
                />

                <br />
                <button>Add Note</button>
            </form>

            {notes.length === 0 && <p>No notes yet</p>}
                <ul>
                    {notes.map(note => (
                        <li key={note._id}>
                            <strong>{note.title}</strong>
                            <p>{note.content}</p>
                        </li>
                    ))}
                </ul>
        </div>
    );
}

export default App;
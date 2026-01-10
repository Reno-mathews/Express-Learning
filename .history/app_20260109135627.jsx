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

    }
}
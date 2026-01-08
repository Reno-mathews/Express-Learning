import { useState, useEffect } from 'react';

function App() {
    const[notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    //fetch notes

    useEffect(() => {
        fetch("http://localhost:5000/notes")
            .then(res => res.json())
            .then
    })
}


import { useState } from 'react'
import './Form.css'




export const Form = ({ handleForm }) => {

    const [blog, setBlog] = useState({
        title: 'titulo',
        text: 'texto'
    })

    const handleTitle = (e) => {
        console.log(e.target.value)
        setBlog({ ...blog, title: e.target.value })
    }

    const handleText = (e) => {
        console.log(e.target.value)
        setBlog({ ...blog, text: e.target.value })
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setBlog({ title: '', text: '' })

        console.log(e)
    }

    const handleCreate = (e) => {
        e.preventDefault();
        handleForm(blog)

    }

    return <form className='form'>

        <input value={blog.title} onChange={handleTitle} placeholder="Buscar" />
        <textarea value={blog.text} onChange={handleText} placeholder="texto"></textarea>
        <div>
            <button onClick={handleDelete}>BORRAR</button>
            <button onClick={handleCreate}>CREAR</button>

        </div>
    </form>
}
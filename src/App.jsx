import { useState } from 'react'
import { Form } from './components/Form'
import { Blog } from './components/Blog'
import './App.css'

function App() {

    const [blogs, setBlogs] = useState([])
    const handleForm = (valor) => {
        setBlogs([...blogs, valor])
    }

    const handleDelete = (valor) => {
        const newArray = blogs.filter(blog => blog.title !== valor)
        setBlogs(newArray)
    }

    return (<>
        <div className='container'>
            <Form handleForm={handleForm} />
            <div>
                {blogs.map((valor, posicion) => {
                    return (
                        <Blog handleDelete={handleDelete} key={posicion} title={valor.title} text={valor.text} />

                    )
                })}
            </div>
        </div>
    </>)






}

export default App
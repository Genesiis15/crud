export const Blog = ({ title, text, handleDelete, handlebtn2 }) => {

    const handlebtn = () => {
        handleDelete(title)
    }

    return <div className="card">
        <h2>{title}</h2>
        <h3>{text}</h3>
        <button onClick={handlebtn}>Borrar</button>
        <button onClick={handlebtn2}>Editar</button>

    </div>
}
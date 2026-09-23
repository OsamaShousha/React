
function Hello(
    {
    name, job, 
    title, bild, 
    foto
    })
{
    return (
        <div>
            <h1 className="name">{name}</h1>
            <p className="job">{job}</p>
            <span className="title">{title}</span>
            <img className="bild" src={bild} alt="" />
            <br></br>
            <img  className="foto" src={foto} alt="" />
        </div>
    )
}

export default Hello
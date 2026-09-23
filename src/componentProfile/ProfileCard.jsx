
 function ProfileCard({

  name, work, 
  twitter,  inst, 
  lin

})


{
  return (
    <>
       <div className="profile-card">
      <img className="avatar" src="https://placehold.co/200x140" alt="Foto" />

      <h1 className="name">{name}</h1>

      <span className="web">{work}</span>

      <p className="lorem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet
        possimus eius molestias, eaque veniam in voluptas atque inventore iusto
        doloribus repudiandae similique pariatur accusantium cupiditate.
        Voluptate eos nesciunt autem.
      </p>

      {/* <div className="social">
        <a  className="twitter" href="#">{props.twitter}</a>
        <a  className="inst" href="#">{props.inst}</a>
        <a  className="lin" href="#">{props.lin}</a>
      </div> */}
    </div>
    </>
 
  )
}

export default ProfileCard

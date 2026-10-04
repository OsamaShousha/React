export default function Header({heading,src,
    teitterLink, faceLink, instLink,
    twitter, face, inst
})
{
    return(
        <div className="header">
        <h1 className="heading">{heading}</h1>

           <div>
        <img src={src} alt="" />

        <p className="pragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eius nemo, quidem laboriosam delectus corrupti sunt est quod? Officiis voluptatem ipsa blanditiis quo cupiditate animi aut esse temporibus magnam reprehenderit?</p>
          <div className="social">
            <a href={teitterLink} target="_blank">{twitter}</a>
            <a href={faceLink} target="_blank">{face}</a>
            <a href={instLink} target="_blank">{inst}</a>
        </div>
           </div>
        </div>
    )
}
import ProfileCard from "./ProfileCard";
import   profile from "./Prof"

function App() {
  const profile = [
    {
      id: 1,
      name: "Osama Shousha",
      work: "Web Developer",
      twitter: "Twetter.com",
      inst: "instigram.con",
      lin: "linkln.com",
    },

    {
      id:2,
      name: "Amira Sallam",
      work: "E-commerce",
      twetter: "Twett.se",
      ins: "instegram.com",
      lin: "linkln",
    },

    {
      id:3,
      name: "OMar",
      work: "Enginjor",
    
    },
  ];

  return (
    <>
      <div className="container">
        {/*
    <ProfileCard name="Osama Shousha"   work="Web Developer"    twitter="Twetter.com" 
    inst ="instigram.con"
    lin="linkln.com"/>
    <ProfileCard name="Amira" work="E-commerce" twetter ="Twett.se"  ins ="instegram.com" lin="linkln" />
    <ProfileCard name="OMar" work="Enginjor"     /> */}
        <ProfileCard name="Maria" work="Artist" />
        <ProfileCard name="Sofia" work="bisness wommen" />
        <ProfileCard name="Ahmed" work="Bisness Man" />

        {profile.map((data) => (
          <ProfileCard
            key={data.id }
            name={data.name}
            work={data.work}
            twitter={data.twitter}
            inst={data.inst || data.ins}
            lin={data.lin}
          />
        ))}
      </div>
    </>
  );
}

export default App;

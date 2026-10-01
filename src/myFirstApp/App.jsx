
import Hello from "./Hello";

function App()
{
  const profile = [{
    id: 1,
    name: "Osama",
    job: "Web Developer",
    title: "Fornbacken",
    
    bild: 34,
    foto: "foto"
  }];

  return (
    <>
      {profile.map((data) => (
        <Hello
          key={data.id}
          name={data.name}
          job={data.job}
          title={data.title}
          bild={data.bild}
          foto={data.foto}
        />
      ))}
    </>
  );
}

export default App
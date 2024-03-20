
export default async function Home() {

  const resposta = await fetch("https://back-end-ifms-lovat.vercel.app/",{
    method:"GET"
  
  });
  const campus = await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campi.map((campus) =>
        <div>
             <p>{campus.nome_campus}</p>
        </div>
      )}
    </main>
  )
}




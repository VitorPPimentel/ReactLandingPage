import { useState } from "react"

function Home() {


    const [count, setCount] = useState(0)

    return (
      <>
        <div>
          <p>HOME</p>
            <button onClick={() => setCount((count) => count + 1)}>
                VOCE CLICOU NESSE BOTÃO {count} VEZES
            </button>
        </div>
      </>
    )
  }
  
  export default Home
  
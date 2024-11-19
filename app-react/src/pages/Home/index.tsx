import React  from "../../assets/react.svg"
import Node  from "../../assets/node.svg"
import TypeScript  from "../../assets/ts.svg"
import Vite  from "../../assets/vite.svg"

interface HomeProps {
  className?: string
}

const Home = ({ className }: HomeProps) => {
  return (
    <>
      <main className={`${className}`}>
        <section >
          <div className="card">
            <p>
              Desenvolvedor FullStack:
            </p>
            <div className="tecnologias">
              <a href="https://react.dev/"><img src={React} alt="" /></a>
              <a href="https://nodejs.org/pt"><img src={Node} alt="" /></a>
              <a href="https://www.typescriptlang.org/"><img src={TypeScript} alt="" /></a>
              <a href="https://vite.dev/"><img src={Vite} alt="" /></a>
            </div>
          </div>

        </section>
      </main>
    </>

  )
}

export default Home;
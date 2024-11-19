import Profile from "../../assets/profile.jpg"
import GitHub from "../../assets/github.svg"
import Linkedin from "../../assets/linkedin.svg"
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
        <aside >
          <div className="logo">
            <img src={ Profile } alt="" />
          </div>
          <div className="info">
            <div className="links">
              <a href="https://github.com/wagnerworst">
                <img src={GitHub} alt="" />
              </a>
              <a href="https://linkedin.com/in/wagner-worst-229986129">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </div>
            <div className="contato">
              <p>wagner.worst@gmail.com</p>
              <p>Parobé - RS Brasil</p>
            </div>
          </div>
        </aside>

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
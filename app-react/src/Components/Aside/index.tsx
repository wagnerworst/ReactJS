import Profile from "../../assets/profile.jpg"
import GitHub from "../../assets/github.svg"
import Linkedin from "../../assets/linkedin.svg"

interface AsideProps{
  className?: string;
}

const Aside = ({className}: AsideProps) => {
  return(
    <>
      <aside className={`${className}`}>
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
    </>

  )
}

export default Aside;
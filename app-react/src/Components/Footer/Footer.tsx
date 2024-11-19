interface FooterProps{
  className?: string
}

const Footer = ({className}: FooterProps) => {
  return (
    <>
      <footer className={`${className}`}>
        <h4>Desnvolvido por Wagner Willian Worst, Novembro 2024®</h4>
      </footer>
    </>
  )
}

export default Footer;
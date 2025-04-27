export const Header = ({datos}) => {
  const {nombre} = datos;
  return (
    <header className="header">
      <h1>PORTAFOLIO - {nombre}</h1>
      <hr />
    </header>
  )
}

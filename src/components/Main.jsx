export const Main = ({ datos }) => {
  return (
    <main>
      <section>
        <h2>Hola, soy {datos.nombre} {datos.apellido}</h2>
        <img src={datos.imagen} alt="Foto del alumno" style={{ width: '200px' }} />

        <article>
          <p>
            Soy un joven estudiante de programación en la UTN-FRT, en la carrera de Tecnicatura Universitaria en Programación.
            Actualmente me manejo en los siguientes lenguajes:
            <ul>
              <li>C#</li>
              <li>JS</li>
              <li>React</li>
              <li>HTML/CSS</li>
            </ul>
          </p>
        </article>
      </section>
    </main>
  )
}

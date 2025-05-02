const Info = ({ title, text }) => {
  return (
    <section className='info'>
      <div className='contenedor'>
        <h2 className='titulo left'>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}
export default Info

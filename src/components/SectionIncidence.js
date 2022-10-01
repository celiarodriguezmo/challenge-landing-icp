import telefonoRoto from "../images/telefono-roto.jpg";

function SectionIncidence(props) {
  const handleClickEditButton = (ev) => {
    props.handleClickEdit({
      idButton: ev.currentTarget.id,
    });
  };

  return (
    <section className='section-incidence'>
      <img
        className='section-incidence__image'
        src={telefonoRoto}
        alt='imagen de teléfono con pantalla rota'
      />
      <div className='section-incidence__wrap'>
        <h3 className='wrap__title'>Título de la incidencia</h3>
        <p className='wrap__date'>12/08/22</p>
      </div>
      <article className='section-incidence__article'>
        <h3 className='article__title'>Descripción:</h3>
        <p className='article__text'>
          Lorem ipsum adipisicing elit. Mollitia impedit perspiciatis voluptatem
          laboriosam, obcaecati veniam. Dolorem minus dolore repudiandae atrium
          reprehenderit ie sequi. Laudantium, quis.
        </p>
        <input
          className='input-button'
          type='submit'
          value='Modificar incidencia'
          onClick={handleClickEditButton}
          id='editButton'
        />
      </article>
    </section>
  );
}
export default SectionIncidence;

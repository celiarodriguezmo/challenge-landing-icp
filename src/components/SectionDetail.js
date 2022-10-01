function SectionDetail(props) {
  return (
    <section className={`section-detail ${props.hidden} `}>
      <form action='' className='form'>
        <h3 className='form__title'>Modificar incidencia</h3>
        <fieldset className='form__section'>
          <div className='input-wraper'>
            <label htmlFor='name' className='label-text'>
              Nombre
            </label>
            <input className='input' type='text' name='name' id='name' />
          </div>
          <div className='input-wraper'>
            <label htmlFor='surname' className='label-text'>
              Apellidos
            </label>
            <input className='input' type='text' name='surname' id='surname' />
          </div>

          <div className='input-wraper'>
            <label htmlFor='id-employee' className='label-text'>
              Id Empleado
            </label>
            <input
              className='input'
              type='text'
              name='id-employee'
              id='id-employee'
            />
          </div>
        </fieldset>

        <fieldset className='form__section'>
          <div className='input-wraper'>
            <label htmlFor='warehouse-sector' className='label-text'>
              Sector almacén
            </label>
            <input
              className='input'
              type='text'
              name='warehouse-sector'
              id='warehouse-sector'
            />
          </div>
          <div className='input-wraper'>
            <label htmlFor='position' className='label-text'>
              Posición
            </label>
            <input
              className='input'
              type='text'
              name='position'
              id='position'
            />
          </div>

          <input
            className='input--file'
            type='file'
            name='attached-image'
            id='attached-image'
            width='170'
          />
        </fieldset>

        <fieldset className='form__section--area'>
          <div className='input-wraper--area'>
            <label htmlFor='comments' className='label-text'>
              Descripción incidencia
            </label>
            <textarea
              className='input--area'
              id='comments'
              name='comments'
              rows='8'
              cols='80'
            ></textarea>
            <div className='button-wraper'>
              <input
                className='button-wraper__reset'
                type='reset'
                value='Cancelar'
              />

              <input
                className='button-wraper__send'
                type='submit'
                value='Enviar'
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
export default SectionDetail;

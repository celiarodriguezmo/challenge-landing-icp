import SectionIncidence from "./SectionIncidence";
import SectionDetail from "./SectionDetail";

function Main(props) {
  return (
    <main className='main'>
      <SectionIncidence handleClickEdit={props.handleClickEdit} />
      <SectionDetail
        hidden={props.hidden}
        handleClickReset={props.handleClickReset}
      />
    </main>
  );
}
export default Main;

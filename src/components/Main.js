import SectionIncidence from "./SectionIncidence";
import SectionDetail from "./SectionDetail";

function Main(props) {
  return (
    <main className='main'>
      <SectionIncidence handleClickButton={props.handleClickButton} />
      <SectionDetail hidden={props.hidden} />
    </main>
  );
}
export default Main;

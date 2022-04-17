import './scss/App.scss';
import Container from './components/Container/Container';
import Dialogues from './components/Dialogues/Dialogues';
import Messages from './components/Messages/Messages';

function App() {
  return (
    <Container>
      <Dialogues />
      <Messages />
    </Container>
  );
}

export default App;

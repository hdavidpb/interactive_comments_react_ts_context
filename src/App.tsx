import { commentsContext } from "./context/CommentsContext";
import { AppContainer } from "./globlasStyles";
import InteractiveComments from "./pages/interactiveComments/InteractiveComments";

function App() {
  return (
    <AppContainer>
      <InteractiveComments />
    </AppContainer>
  );
}

export default App;

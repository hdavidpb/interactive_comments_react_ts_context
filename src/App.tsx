import { commentsContext } from "./context/CommentsContext";
import { AppContainer } from "./globlasStyles";
import InteractiveComments from "./pages/interactiveComments/InteractiveComments";

import * as auth from "firebase/auth";
function App() {
  const authenticathion = auth.getAuth();
  const provider = new auth.GoogleAuthProvider();

  const getAuth = () => {
    auth
      .signInWithPopup(authenticathion, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = auth.GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = auth.GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <AppContainer>
      <button onClick={getAuth}>Google</button>
      <InteractiveComments />
    </AppContainer>
  );
}

export default App;

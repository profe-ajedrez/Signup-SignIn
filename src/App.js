import logo from "./logo.svg";
import "./App.css";
import {
  ButtonLoader,
  ButtonLoaderWithMessage,
} from "./componentes/forms/buttons";
import { IconInput } from "./componentes/forms/inputs";
import { SignupForm } from "./componentes/forms/signup";
import { SigninForm } from "./componentes/forms/signin";
import HelloPeep from "./componentes/lotties/peeps";
import RandomLottie from "./componentes/lotties/RandoLottie";


function App() {
  return (
    <div className="p-3">
      <SignupForm 
        title="Registro"
        containerClassName="border shadow-alt-sm p-3 rounded"
      />
      <br/>
      <SigninForm 
        title="Ingresar"
        containerClassName="border shadow-alt-sm p-3 rounded"
      />
    </div>
  );
}

export default App;

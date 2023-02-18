import { Provider } from "react-redux";
import InputSection from "./pages/InputSection";
import Navigation from "./pages/Navigation";
import PreviewSection from "./pages/PreviewSection";
import store from "./redux/store";
import './styles.css'
function App() {
  return (
    <Provider store={store}>
      {/* header */}
      <Navigation />
      {/*  Input Data */}
      <section>
        <InputSection />
        <PreviewSection />
      </section>
    </Provider>
  );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Navbar from "./components/Navbar";





function App(props) {
    const { notes } = props;

   
    return (
        <div className="App">

           
            <Navbar/>

            <Header />

            <Section notes={notes}/>

            <Footer />
        </div>
    );
}

export default App;
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/";
import BookList from "./pages/components/BookList/";
import BookDetails from "./pages/components/BookDetails/";
import BookDetailsFunctional from "./pages/components/BookDetailsFunctional";
import BookListFunctional from "./pages/components/BookListFunctional";
import Footer from "./components/Footer/";
import HomePage from "./pages/components/HomePage/";

function App() {
  return (
    <Router>
    <div className="root-container">
      
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/books" component={BookList} exact />
          <Route path="/book-details/:id" component={BookDetails} exact />
        </Switch>
        </div>
        <Footer />
      </Router>
   
  );
}

export default App;

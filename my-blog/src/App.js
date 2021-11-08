import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/";
import BooksList from "./pages/components/BooksList";
import BookDetails from "./pages/components/BookDetails/";
import BookDetailsFunctional from "./pages/components/BookDetailsFunctional";
import BooksListFunctional from "./pages/components/BooksListFunctional";
import Footer from "./components/Footer/";
import HomePage from "./pages/components/HomePage/";

function App() {
  return (
    <Router>
      <div className="root-container">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/books" component={BooksListFunctional} exact />
          <Route
            path="/book-details/:id"
            component={BookDetailsFunctional}
            exact
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

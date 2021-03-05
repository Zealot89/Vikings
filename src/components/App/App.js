import React from "react";
import "./App.css";
import Header from "../header/header";
import About from "../about/about";
import Slogan from "../slogan/slogan";
import Footer from "../footer/footer";
import Seasons from "../seasons/seasons";
import Heroes from "../heroes/heroes";
import SeasonHeader from "../seasonHeader/seasonHeader";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
function App() {
  const history = useHistory();
  const location = window.location;

  function handleRedirect(evt) {
    console.log(evt.target.id);
    if (evt.target.id === "s1") {
      history.push("/season-one");
    } else if (evt.target.id === "s2") {
      history.push("/season-two");
    } else if (evt.target.id === "s3") {
      history.push("/season-three");
    } else if (evt.target.id === "s4") {
      history.push("/season-four");
    } else if (evt.target.id === "s5") {
      history.push("/season-five");
    } else if (evt.target.id === "s6") {
      history.push("/season-six");
    } else {
      history.push("/");
    }
  }

  function redirectToMain() {
    if (location.pathname !== "/") history.push("/");
  }
  return (
    <div className="page">
      <Route exact path="/">
        <Header history={history} handleRedirect={handleRedirect} />
        <About />
        <Slogan />
        <Seasons header={"Все сезоны"} />
        <Heroes />
        <Footer />
      </Route>
      <Switch>
        <Route path="/season-one">
          <SeasonHeader
            seasonNum={"01"}
            handleRedirect={handleRedirect}
            redirectToMain={redirectToMain}
          />
          <Seasons header={"Все серии 1 сезона"} />
        </Route>
        <Route path="/season-two">
          <SeasonHeader
            seasonNum={"02"}
            handleRedirect={handleRedirect}
            redirectToMain={redirectToMain}
          />
          <Seasons header={"Все серии 2 сезона"} />
        </Route>
        <Route path="/season-three">
          <SeasonHeader
            seasonNum={"03"}
            handleRedirect={handleRedirect}
            redirectToMain={redirectToMain}
          />
          <Seasons header={"Все серии 3 сезона"} />
        </Route>
        <Route path="/season-four">
          <SeasonHeader
            seasonNum={"04"}
            handleRedirect={handleRedirect}
            redirectToMain={redirectToMain}
          />
          <Seasons header={"Все серии 4 сезона"} />
        </Route>
        <Route path="/season-five">
          <SeasonHeader
            seasonNum={"05"}
            handleRedirect={handleRedirect}
            redirectToMain={redirectToMain}
          />
          <Seasons header={"Все серии 5 сезона"} />
        </Route>
        <Route path="/season-six">
          <SeasonHeader
            seasonNum={"06"}
            handleRedirect={handleRedirect}
            redirectToMain={redirectToMain}
          />
          <Seasons header={"Все серии 6 сезона"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

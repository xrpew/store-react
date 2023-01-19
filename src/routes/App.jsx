import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "../containers";
import { AppContext } from "../context/AppContext";
import { Checkout, CreateAccount, Login, Home, MyAccount, NewPassword, NotFound, Orders, RecoveryPassword, SendEmail } from "../pages";
import "../styles/global.css";




export const App = () => {
  return (
    <AppContext.Provider value={''}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/recovery-password" component={ RecoveryPassword } />
          <Route exact path="/send-email" component={ SendEmail } />
          <Route exact path="/new-password" component={ NewPassword } />
          <Route exact path="/account" component={ MyAccount } />
          <Route exact path="/singup" component={ CreateAccount } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/orders" component={ Orders } />
          <Route  path='*' component={ NotFound } />

        </Switch>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

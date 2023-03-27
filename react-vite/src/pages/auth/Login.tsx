import { Component } from "react";

import Layout from "../../components/Layout";

class Login extends Component {
  render() {
    return (
      <Layout>
        <form className="flex flex-col">
          <input placeholder="Username" />
          <input placeholder="Password" type="password" />
          <button className="bg-blue-500 rounded-lg text-white font-bold py-2">
            Login
          </button>
        </form>
      </Layout>
    );
  }
}

export default Login;

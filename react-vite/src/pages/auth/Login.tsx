import { Component, FormEvent } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Image from "@/assets/react.svg";
import { Input } from "@/components/Input"; // named import
import Layout from "@/components/Layout";
import Button from "@/components/Button"; // import default
import withRouter, { NavigateParam } from "@/utils/navigation";

interface PropsType extends NavigateParam {}

interface StateType {
  username: string;
  password: string;
  loading: boolean;
}

class Login extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("login", body)
      .then((response) => {
        const { data } = response;
        alert(data.message);
        this.props.navigate("/");
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  render() {
    return (
      <Layout>
        <form
          className="flex flex-col items-center gap-4 w-[40%]"
          // onSubmit={this.handleSubmit}
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <div className="flex">
            <img src="/vite.svg" alt="Test 1" className="w-28 h-28" />
            <img src={Image} alt="Test 2" className="w-28 h-28" />
          </div>
          <Input
            placeholder="Username"
            id="input-uname"
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          />
          <Input
            placeholder="Password"
            id="input-password"
            type="password"
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <p className="text-white">
            Already have and account? Login{" "}
            <Link className="font-bold" to="/register">
              here!
            </Link>
          </p>
          <Button
            label="Login"
            id="button-login"
            type="submit"
            disabled={this.state.username === "" || this.state.password === ""}
          />
        </form>
      </Layout>
    );
  }
}

export default withRouter(Login);

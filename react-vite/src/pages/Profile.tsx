import { Component } from "react";

import Layout from "../components/Layout";
import { UserType } from "../utils/types/user";

interface PropsType {}

interface StateType {
  data: UserType;
}

class Profile extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      data: {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        username: "john_doe1",
        image: "image",
      },
    };
  }

  render() {
    // tulis destructuring dari state data agar penulisan code jadi lebih ringkas
    return (
      <Layout>
        <div>
          <p>{this.state.data.first_name}</p>
          <p>{this.state.data.last_name}</p>
          <p>{this.state.data.username}</p>
        </div>
      </Layout>
    );
  }
}

export default Profile;

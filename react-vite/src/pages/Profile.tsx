import { FC, FormEvent, useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import { RootState } from "@/utils/types/redux";
import { UserEdit } from "@/utils/types/user";
import { useTitle } from "@/utils/hooks";
import Swal from "@/utils/swal";
import { Input } from "@/components/Input";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

const Profile: FC = () => {
  const { token, uname } = useSelector((state: RootState) => state.data);
  // const [state, updater] = useState(initialValue)
  const [objSubmit, setObjSubmit] = useState<Partial<UserEdit>>({});
  const [data, setData] = useState<Partial<UserEdit>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const params = useParams();
  const MySwal = withReactContent(Swal);
  // useTitle("Profile | User Management");

  /*
  PUT & POST -> method(url, body?, options?)
  GET & DELETE -> method(url, options?)
  */

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const { username: uname } = params;
    // const uname = params.username
    // const { username } = params
    axios
      .get(`users/${uname}`)
      .then((response) => {
        const { data } = response.data;
        document.title = `${data.username} | User Management`;
        setData(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  function handleChange(value: string | File, key: keyof typeof objSubmit) {
    let temp = { ...objSubmit }; // duplikat state objSubmit yang nantinya akan dimutasi nilainya
    temp[key] = value;
    setObjSubmit(temp);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    axios
      .put("users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { message } = response.data;
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
        setIsEdit(false);
        setObjSubmit({});
      })
      .catch((error) => {
        const { data } = error.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => fetchData());
  }

  const handleDeleteAccount = () => {
    axios
      .delete("/users", {
        headers: {
          Authorization: "", // TODO: Add JWT token to authorization
        },
      })
      .then((response) => {
        const { message } = response.data;
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
        // TODO: Delete cookies for token and username and redirect to the root page "/"
      })
      .catch((error) => {
        const { data } = error.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      });
  };

  // tulis destructuring dari state data agar penulisan code jadi lebih ringkas
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <img
          src={data.image}
          alt={`${data.username}'s profile picture`}
          className="w-44 h-44 rounded-full"
        />
        {isEdit ? (
          <form onSubmit={(event) => handleSubmit(event)}>
            <Input
              placeholder="Select Image"
              type="file"
              onChange={(event) => {
                if (!event.currentTarget.files) {
                  return;
                }
                // setImage(URL.createObjectURL(event.currentTarget.files[0]));
                setData({
                  ...data,
                  image: URL.createObjectURL(event.currentTarget.files[0]),
                });
                handleChange(event.currentTarget.files[0], "image");
              }}
            />
            <Input
              placeholder="First Name"
              defaultValue={data.first_name}
              onChange={(event) =>
                handleChange(event.target.value, "first_name")
              }
            />
            <Input
              placeholder="Last Name"
              defaultValue={data.last_name}
              onChange={(event) =>
                handleChange(event.target.value, "last_name")
              }
            />
            <Input
              placeholder="Password"
              defaultValue={data.password}
              onChange={(event) => handleChange(event.target.value, "password")}
            />
            <Button label="Submit" id="button-submit" type="submit" />
          </form>
        ) : (
          <div>
            <p>
              {data.first_name} {data.last_name}
            </p>
            <p>{data.username}</p>
          </div>
        )}
      </div>

      {uname === params.username && (
        <>
          <Button
            label="Edit Profile"
            id="button-edit"
            onClick={() => setIsEdit(!isEdit)}
          />
          <Button
            label="Delete Account"
            id="button-delete"
            onClick={() => handleDeleteAccount()}
          />
        </>
      )}
    </Layout>
  );
};

export default Profile;

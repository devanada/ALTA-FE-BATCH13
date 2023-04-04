import { FC, useState, useEffect } from "react";
import axios from "axios";

import { Spinner } from "@/components/Loading";
import Layout from "@/components/Layout"; // default import
import Button from "@/components/Button";
import Card from "@/components/Card";
import { UserType } from "@/utils/types/user"; // named import
import { useTitle, useFetchGet } from "@/utils/hooks";

const Home: FC = () => {
  // Constructor start
  const [datas, setDatas] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(true);
  const [data] = useFetchGet(
    "https://virtserver.swaggerhub.com/devanada/hells-kitchen/1.1.0/users"
  );
  useTitle("Homepage | User Management");
  // Constructor end

  // Side effect
  useEffect(() => {
    fetchData();
  }, []);

  /*
  Ketika ada perubahan state pada saat side effect berjalan, maka terjadi sebuah re-render component

  Side effect dijalankan sekali setelah component telah dimuat, mirip seperti dengan componentDidMount (menambahkan empty scope sebagai deps)
  useEffect(() => {
    ...
  }, []);

  Side effect dijalankan sekali pada saat component telah dibuat, lalu akan dijalankan kembali ketika ada perubahan nilai dari salah satu state yang ditulis didalam scope, mirip seperti componentDidMount + componentDidUpdate
  useEffect(() => {
    ...
  }, [refresh]);

  Side effect akan jalan secara terus menerus kalau penulisannya tanpa scope ([])
  useEffect(() => {
    ...
  })

  Side effect akan dijalankan setiap waktu (mirip dengan penulisan useEffect tanpa scope), namun dia akan berhenti/unsubscribe ketika kita meninggalkan halaman, dengan harap agar performa dari web tetap terjaga karena tidak ada proses berjalan dibelakang layar, contoh implementasi di real life adalah OTP (ada perhitungan mundur yang dijalankan setiap detik), ataupun status online. useEffect ini sendiri mirip dengan componentDidMount + componentDidUpdate + componentWillUnmount
  useEffect(() => {
    ...
    return () => {
      ...
    }
  })
  */

  function fetchData() {
    axios
      .get("users")
      .then((response) => {
        // Akan resolve ketika server memberikan response OK ke Frontend
        const { data } = response.data;
        setDatas(data);
        // console.log(data);
      })
      .catch((error) => {
        // Akan reject ketika server memberikan response failed ke Frontend
        console.log(error);
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  function fetchAlternative() {
    fetch(
      "https://virtserver.swaggerhub.com/devanada/hells-kitchen/1.1.0/users"
    )
      .then((result) => result.json())
      .then((response) => {
        // Akan resolve ketika server dapat memberikan jawaban/response entah berhasil atau gagal kepada Frontend
        const { data } = response;
        // setDatas(data); // Updater untuk merubah nilai dari sebuah state
        console.log(data);
      })
      .catch((error) => {
        // Akan reject ketika server tidak memberikan response sama sekali ke Frontend
        console.log(error);
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {loading ? (
          <Spinner />
        ) : (
          datas.map((data, index) => {
            return (
              <Card
                key={data.id} // <~~ wajib ada sebagai pengenal satu sama lain
                first_name={data.first_name}
                last_name={data.last_name}
                username={data.username}
                image={data.image}
              />
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default Home;

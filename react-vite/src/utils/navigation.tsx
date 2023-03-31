import {
  NavigateFunction,
  useNavigate,
  useParams,
  Params,
} from "react-router-dom";

export interface NavigateParam {
  navigate: NavigateFunction;
  params: Readonly<Params<string>>;
}

// TODO: Change the data type of Component
const withRouter = (Component: any) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} navigate={navigate} params={params} />;
  };

  return Wrapper;
};

export default withRouter;

/*
withRouter merupakan sebuah HOC (High Order Component), yang nantinya bakal membungkus suatu component agar bisa menggunakan hooks seperti useNavigate dan useParams didalam sebuah class component.

FYI hooks tidak bisa digunakan didalam class component.
*/

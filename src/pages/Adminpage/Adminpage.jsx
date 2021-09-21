// Style
import { useContext } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { AppContext } from "../../Context/Context";
import Style from "./Adminpage.module.scss";

import { MyReviews } from "../../components/MyReviews/MyReviews";
import { CreateReview } from "../../components/CreateReview/CreateReview";
import { ClearFix } from "../../components/ClearFix/ClearFix";
import { UpdateReview } from "../../components/UpdataReview/UpdateReview";
import { Helmet } from "react-helmet";
//FIX
export const Adminpage = () => {
  const { loginData, setLoginData } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!loginData.user_id) {
      history.push("/Login");
    }
  }, []);

  const handleLogout = () => {
    setLoginData({});
    history.push("/frontpage");
  };

  return (
      <>
       <Helmet>
        <title>Admin</title>
        <meta name="Admin" content="Admin panel" />
      </Helmet>
    <section className={Style.admin}>
        <main>
          <header>
            <h3>Anmeldelser</h3>
          </header>
          <MyReviews />
          <UpdateReview />
          <CreateReview />
          <footer>
            <p>
              Du er nu logget ind som <strong>{loginData.username}</strong>
            </p>
            <button className="btn btn--logout" onClick={handleLogout} type="button">
              Logud
            </button>
          </footer>
        </main>
    </section>
    <ClearFix height="lg" />
    </>
  );
};


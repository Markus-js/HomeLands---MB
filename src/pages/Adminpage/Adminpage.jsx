// Style
import { useContext } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { AppContext } from "../../Context/Context";
import Style from "./Adminpage.module.scss";

import { Favorites } from "../../components/Favorites/Favorites";
import { EditReview } from "../../components/EditReview/EditReview";
import { MyReviews } from "../../components/MyReviews/MyReviews";
import { CreateReview } from "../../components/CreateReview/CreateReview";
import { ClearFix } from "../../components/ClearFix/ClearFix";

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
    <section className={Style.admin}>
      

        <main>
          <header>
            <h3>Anmeldelser</h3>
          </header>
          <MyReviews />
          <EditReview />
          <CreateReview />
          <Favorites />
          <footer>
            <p>
              Du er nu logget ind som <strong>{loginData.username}</strong>
            </p>
            <button onClick={handleLogout} type="button">
              Logud
            </button>
          </footer>
        </main>
    </section>
    <ClearFix height="lg" />
    </>
  );
};


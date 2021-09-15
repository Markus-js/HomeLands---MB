// Style
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { AppContext } from '../../Context/Context';
import Style from './Adminpage.module.scss';

const Adminpage = () => {
    const { loginData, setLoginData } = useContext(AppContext);
    const history = useHistory();

    useEffect(() => {
        if(!loginData.user_id) {
            history.push('/Login');
        }
    }, []);

    const handleLogout = () => {
        setLoginData({});
        history.push('/frontpage');
    }

    return (
        <main className={Style.adminPage}>
            <header className={Style.adminPage_header}>
                <h2>Administration</h2>
            </header>

            <section className={Style.adminPage_section}>
                <article className={Style.adminPage_section_reviews}>
                    <header>
                        <h3>Anmeldelser</h3>
                    </header>
                </article>
                <article className={Style.adminPage_section_liked}>
                    <header>
                        <h3>Favoritter</h3>
                    </header>
                </article>
                <aside className={Style.adminPage_section_login}> 
                    <p>Du er nu logget ind som <strong>{loginData.username}</strong></p>
                    <button onClick={handleLogout} type="button">Logud</button>
                </aside>
            </section>
        </main>
    )
}

export { Adminpage };
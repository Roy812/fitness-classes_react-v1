import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const history = useHistory();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    });

    async function fetchUserData(jwtToken) {
        try {
            const result = await axios.get(`http://localhost:8080/users/id/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                },
            });
            console.log(result);
            setAuthState({
                user: {
                    username: result.data.username,
                    password: result.data.password,
                    id: result.data.id,
                },
                status: 'done',
            });
        } catch (e) {
            localStorage.clear();
            history.push("/");
            console.error(e);
        }
    }

    useEffect(() => {
        if (token && authState.user === null) {
            fetchUserData(token);
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    }, []);

    async function loginFunction(userData) {
        setAuthState({
            user: {
                username: userData.username,
                email: userData.email,
                id: userData.id,
            },
            status: 'done',
        });
        history.push('/login');
    }

    function logoutFunction() {
        localStorage.clear();
        setAuthState({
            ...authState,
           user: null,
        });
        history.push('/');
    }

    const data = {
        ...authState,
        login: loginFunction,
        logout: logoutFunction,
        fetch: fetchUserData,
    }

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'done' ? children : <p>LOADING...REFRESH THE PAGE TO RETURN TO THE HOME</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const authContext = createContext(null)

const ContextApi = ({ children }) => {
    const[logedUser , setLogedUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
        // console.log(token)
        setLoading(false)
    }, [])
    console.log(logedUser)

    const authInfo = {
        token,
        loading,
        setLogedUser,
        logedUser
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextApi;

ContextApi.propTypes = {
    children: PropTypes.node.isRequired
}
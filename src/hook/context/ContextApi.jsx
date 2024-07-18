import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const authContext = createContext(null)

const ContextApi = ({ children }) => {
    const [token, setToken] = useState(null)
    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
        console.log(token)
    }, [])

    const authInfo = {
        token
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
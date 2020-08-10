import React, {useState, useEffect} from 'react';

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLoacationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLoacationChange)

        return () => {
            window.removeEventListener('popstate', onLoacationChange)
        };

    }, []);
    return currentPath === path 
    ? children
    : null;
};

export default Route;
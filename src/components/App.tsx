import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount((p) => p + 1);
    return (
        <div>
            <Link to="/about">To about</Link>
            <Link to="/shop">To shop</Link>
            <Link to="/">To main</Link>

            <h1 className={classes.value}>{count}</h1>

            <button className={classes.button} onClick={increment}>
                Increment
            </button>

            <Outlet />
        </div>
    );
};

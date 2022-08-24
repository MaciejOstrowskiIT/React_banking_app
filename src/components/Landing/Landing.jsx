import React from 'react';
import CheckToken from '../../hooks/CheckToken';

import './landing.css';

export const Landing = () => {
    CheckToken();
    return (
        <>
            <div className="landing-div">
                {/* <p>
                    Welcome into React Banking App. You are
                    currently on landing page!
                </p>
                <p>Pick one from menu above and continue!</p> */}
                <p>Witaj na stronie React Bankiing App.</p>
                <p>
                    Wybierz opcję z menu powyżej, aby
                    kontynuować
                </p>
            </div>
        </>
    );
};

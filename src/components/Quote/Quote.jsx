import React, { useContext, useState } from 'react';
import setQuoteInDB from '../../api/setQuoteInDB';
import { UserContext } from '../../context/UserContextProvider';
import CheckToken from '../../functions/CheckToken';

export const Quote = () => {
    const userContextValue = useContext(UserContext);
    const [tempQuote, setTempQuote] = useState('');

    CheckToken();

    return (
        <>
            <h2>
                Twój status:{' '}
                <UserContext.Consumer>
                    {(context) => context.contextQuote}
                </UserContext.Consumer>
            </h2>
            <form onSubmit={() => setQuoteInDB(tempQuote)}>
                <input
                    type="text"
                    placeholder="Status"
                    value={tempQuote}
                    onChange={(e) =>
                        setTempQuote(e.target.value)
                    }
                />
                <input
                    type="submit"
                    value="Zaktualizuj status"
                />
            </form>
            <h2>
                Stan konta:{' '}
                {parseFloat(
                    userContextValue.contextBalance
                ).toFixed(2)}{' '}
                {userContextValue.contextCurrency}
            </h2>
        </>
    );
};

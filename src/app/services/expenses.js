import { ActionCreators } from '../store/reducers/expencesReducer';

export const GetExpenses = async (dispatch) => {
    try {
        // api call
        const expenses = [
            {
                id: 1,
                description: 'Groceries',
                amount: 8024.00
            },
            {
                id: 2,
                description: 'Gas',
                amount: 1490.00
            },
            {
                id: 3,
                description: 'Loan',
                amount: 3455.47
            }
        ]

        dispatch(ActionCreators.setExpenses(expenses));
    } catch (error) {
        console.log(error)
    }
};
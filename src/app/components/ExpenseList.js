import { React, useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetExpenses } from '../services/expenses';
import ExpenseForm from './ExpenseForm';

const ListRow = ({ expense }) => {
    const [isEditing, setIsEditing] = useState(false);
    return isEditing
        ? <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
        : <div>
            <Row>
                <Col>{expense.description}</Col>
                <Col>{expense.amount}</Col>
                <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>Edit</Button>
            </Row>
            <hr />
        </div>
};

const ExpenseList = () => {
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expensesReducer.expenses);

    useEffect(() => {
        GetExpenses(dispatch);
    }, [dispatch]);

    return expenses.map(e =>
        <div style={{ marginBottom: '1rem' }}>
            <ListRow expense={e} />
        </div>
    );
    // return 'afadasdasd';
};

export default ExpenseList;
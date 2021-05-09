import { React, useState, useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { DeleteExpense, EditExpense, PostExpense } from '../services/expenses';

const ExpenseForm = ({ expense, setIsEditing }) => {
    const descriptions = ['Groceries', 'Gas', 'Traveling', 'Loan', 'Restaurant'];
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState(descriptions[0]);
    const [isNewExpense, setIsNewExpense] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (expense !== undefined) {
            setIsNewExpense(false);
            setAmount(expense.amount);
        } else {
            setIsNewExpense(true);
        }
    }, [expense]);

    return <Form onSubmit={event => {
        event.preventDefault();
        if (isNewExpense) {
            PostExpense(dispatch, { description: description, amount: amount });
        } else {
            EditExpense(dispatch, { id: expense.id, description: description, amount: amount });
            setIsEditing(false);
        }
    }}>
        <Row>
            <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control as='select'
                    onChange={event => setDescription(event.target.value)}
                >
                    {descriptions.map(d => <option>{d}</option>)}
                </Form.Control>
            </Col>
            <Col>
                <Form.Label>Amount</Form.Label>
                <Form.Control type='number' step='0.01'
                    placeholder={amount}
                    onChange={event => setAmount(event.target.value)}
                ></Form.Control>
            </Col>
            <div style={{ marginTop: 'auto' }}>
                {isNewExpense
                    ? <Button variant='primary' type='submit'>Add</Button>
                    : <div>
                        <Button variant='danger' onClick={() => DeleteExpense(dispatch, expense)}>Delete</Button>
                        <Button variant='success' type='submit'>Save</Button>
                        <Button variant='default' onClick={() => setIsEditing(false)}>Cancel</Button>
                    </div>
                }
            </div>
        </Row>
    </Form >
};

export default ExpenseForm;
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('add expense by id', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: 4,
            description: 'BlaBla',
            note: '',
            amount: 200,
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ]);
});

test('edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note: "something"
        }
    };
    const state = expensesReducer(expenses, action);
    expenses[1].note = "something";
    expect(state[1].note).toBe(action.updates.note);
});

test('edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            note: "something"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
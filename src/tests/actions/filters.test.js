import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";


test('set start date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('set end date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('set text filter with text', () => {
    const action = setTextFilter("bill");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: "bill"
    });
});

test('set text filter without text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ""
    });
});

test('sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});
import React, {memo} from 'react';
import Input from './Input';
import Bar from './Bar';
import List from './List';

const cloneDeep = function (obj) {
    if (typeof obj !== 'object') return obj;
    const isArray = Array.isArray(obj);
    const copy = isArray ? [] : {};
    if (isArray) obj.forEach((element) => copy.push(cloneDeep(element)));
    else for (let key in obj) copy[key] = cloneDeep(obj[key]);
    return copy;
};

export default class TodoList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            status: 0,
            list: [],
        };
    }

    addItem = () => {
        this.setState((prevState, props) => {
            const {list, inputValue} = prevState;
            return {
                list: list.concat([
                    {
                        content: inputValue,
                        key: list.length,
                        status: 2,
                    },
                ]),
                inputValue: '',
            };
        });
    };

    modify = (key, status) => {
        this.setState((prevState) => {
            const copy = cloneDeep(prevState.list);
            const target = copy.find((item) => item.key === key);
            if (target) {
                target.status = status;
                return {list: copy};
            }
        });
    };

    render() {
        const state = this.state;
        return (
            <>
                <Input
                    value={state.inputValue}
                    onChange={(inputValue) => this.setState({inputValue})}
                    add={this.addItem}
                />
                <Bar onChange={(status) => this.setState({status})} />
                <List
                    list={state.list}
                    fiterStatus={state.status}
                    modify={this.modify}
                />
            </>
        );
    }
}

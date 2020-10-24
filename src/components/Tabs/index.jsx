import React from 'react';
import Tab from './Tab';

class Tabs extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }

    render() {
        const children = Array.isArray(this.props.children)
            ? this.props.children
            : [this.props.children];
        return (
            <>
                {children.map((child, index) =>
                    React.cloneElement(child, {
                        key: `li-${index}`,
                        active: this.state.activeIndex === index,
                        onClick: () => this.setState({activeIndex: index}),
                    })
                )}
            </>
        );
    }
}

export default () => (
    <Tabs>
        <Tab>1</Tab>
        <Tab>1</Tab>
    </Tabs>
);

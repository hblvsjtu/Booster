import React, {memo} from 'react';

function areEqual(prevProps, nextProps) {
    return prevProps.active === nextProps.active;
}

const Tab = (props) => {
    return (
        <li
            style={{color: props.active ? 'red' : '#000'}}
            onClick={props.onClick}
        >
            {props.children}
        </li>
    );
};

export default memo(Tab, areEqual);

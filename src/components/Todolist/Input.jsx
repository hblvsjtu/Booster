import React, {memo} from 'react';

function areEqual(prevProps, nextProps) {
    return prevProps.value === nextProps.value;
}

export default memo((props) => {
    console.log('Input fresh!');
    return (
        <>
            <input
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
            <button onClick={props.add}>添加</button>
        </>
    );
}, areEqual);

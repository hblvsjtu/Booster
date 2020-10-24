import React, {
    memo,
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';
import {isFunction} from 'lodash-es';
import classnames from 'classnames';
import Loading from 'react-svg-loader!./../../style/icon/loading.svg';
import './index.less';

const areEqual = (prevProps, nextProps) => {
    return ['type', 'disabled', 'size', 'children', 'className', 'href'].every(
        (key) => prevProps[key] === nextProps[key]
    );
};

const Button = (props) => {
    const {
        btnType = 'default',
        disabled,
        size,
        children,
        href,
        onClick,
        ...restProps
    } = props;
    const className = classnames([
        'btn',
        `btn-${size}`,
        `btn-${btnType}`,
        {disabled},
    ]);
    const loadingSizeStyle = classnames(['loading', `loading-${size}`]);
    const [loading, setLoadingStatus] = useState(false);
    const ref = useRef('btn');
    let timer;
    const proxyClick = (event) => {
        if (isFunction(onClick)) {
            const res = onClick(event);
            if (res instanceof Promise) {
                setLoadingStatus(true);
                res.then((res) => {
                    setLoadingStatus(false);
                    timer = setTimeout(() => ref.current.blur(), 200);
                });
            } else {
                timer = setTimeout(() => ref.current.blur(), 200);
            }
        }
    };
    useEffect(() => {
        return () => timer && clearTimeout(timer);
    }, [loading]);

    return btnType && btnType === 'link' ? (
        <a
            className={className}
            href={href}
            onClick={proxyClick}
            {...restProps}
        >
            {children}
        </a>
    ) : (
        <>
            <button
                type="button"
                disabled={disabled}
                className={className}
                onClick={proxyClick}
                ref={ref}
                {...restProps}
            >
                <Loading className={loadingSizeStyle} />
                {children}
            </button>
        </>
    );
};

export default memo(Button, areEqual);

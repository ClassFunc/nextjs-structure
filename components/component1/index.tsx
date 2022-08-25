import React from 'react';

type MyProps = {}

function MyComponent1(props: MyProps) {
    return (
        <div className={"text-cyan-900 text-[100px] font-bold"}>Hello world!</div>
    );
}

export default React.memo(MyComponent1);
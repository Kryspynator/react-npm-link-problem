import { useState } from "react";
import { useCount } from "./useCount";
import { Button as AriaButton } from "react-aria-components";
const Button = () => {
    const [count, setCount] = useState(0);
    const { count: count2, increment } = useCount();

    return (
        <AriaButton onPress={() => setCount((prev) => prev + 1)}>
            Count: {count}
            <AriaButton onPress={() => increment()}>
                Count Using Custom Hook: {count2}
            </AriaButton>
        </AriaButton>
    );
};

export default Button;

1.  What is JSX, and why is it used?
    => **JSX (JavaScript XML)**
    JSX is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code inside JavaScript ,which make it easier to create visualize UI components.

    **why used**
    Makes code more readable and expressive.
    Allows embedding JavaScript logic directly inside UI markup.
    Transpiles to regular JavaScript which React can understand.

2.  What is the difference between State and Props?
    =>
    **State**
    State represent data managed within a component.
    Used for data changes over time.
    Owned and mananged by the component itself.
    **Props**
    Props are inputs passed from a parent component to a child.
    Used to pass data and functions between components.

3.  What is the useState hook, and how does it work?
    =>The useState hook is React hook that allows functional components to manage state.
    **How it works**
    The curent state value.
    A function to update that state
    **Example**

        import { useState } from "react";

        function Counter() {
        const [count, setCount] = useState(0);

        return (
        <div>
        <p>Count: {count}</p>

    <button onClick={() => setCount(count + 1)}>Increase</button>
       </div>
       );
    }

4.  How can you share state between components in React?
    =>
    **Lift State Up**
    Move the shared state to the nearest common parent and pass it down via props.
    **Ract Context API**
    Provides a way to share global state without prop drilling.
    **State Management Libraries**
    For complex apps , libraries like Redux , Zustand are often used

5.  How is event handling done in React?
    =>
    Event handling in React is similar to DOM events but follows camelCase naming.
    Instead of strings ,you pass a function as the event handler.
    Funtions are usually written inline or defined separately.
    **Example**
    function Button() {
    function handleClick() {
    alert("Button clicked!");
    }

    return <button onClick={handleClick}>Click Me</button>;

    }

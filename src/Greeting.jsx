const Greeting = () => {
    return <h1>&quot; I live in a pineapple under the sea!&quot;</h1>
}

function Food() {
    return (
        <>
            <h1>Test title</h1>
            <svg>
            <circle cx="25" cy="75" r="20" stroke="red" strokeWidth="3" />
            </svg>
            <form>
                <input type="text" />
            </form>
        </>
    );
}

export { Greeting, Food }
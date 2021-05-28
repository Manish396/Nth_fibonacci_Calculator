import "./Sequence.css"
function Sequence(props) {
    return (
        <>
        <div className = "resultDescription">
            <h3>Result:</h3>
            <div className="para">
                <label>The F({props.val}) term of Fibonacci sequence are : </label>
                {props.ans}
            </div>
        </div>
        <div className = "sequence">
                First 10 number of Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
        </div>
            </>
    )
}
export default Sequence;
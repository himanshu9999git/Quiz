const StartScreen = () =>
{
    const start = () =>{
        console.log("Start fn called")
    }
    return<>
        <div className="box">
            <button className="btn" onClick={start}>
                Start Quiz
            </button>
        </div>
    </>
}

export default StartScreen;
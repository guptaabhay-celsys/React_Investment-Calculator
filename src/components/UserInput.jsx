export default function UserInput({userInput, handleInputChange}){

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(e) => { handleInputChange('initialInvestment', e.target.value)} }/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(e) => handleInputChange('annualInvestment', e.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(e) => handleInputChange('expectedReturn', e.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(e) => handleInputChange('duration', e.target.value)}/>
                </p>
            </div>
        </section>
    )
}
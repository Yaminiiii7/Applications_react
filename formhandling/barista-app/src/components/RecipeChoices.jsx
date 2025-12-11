
const RecipeChoices = ({handleChange, label,choices,checked}) => {
    return(
        <div className="radio-buttons">
            <input type="text"
                        name={label}
                        value={checked}
                        placeholder="Guess the ingredient..."
                        onChange={handleChange}
                        className = "textbox"
                    />
            {choices &&
                choices.map((choice) => (
                    
                    <li key={choice}>
                        {choice}
                    </li>
            ))}
            
        </div>
    )

}

export default RecipeChoices;

{/* <div className="radio-buttons">
            {choices &&
                choices.map((choice) => (
                    
                    <li key={choice}>
                        <input
                        id={choice}
                        value={choice}
                        name={label}
                        type="radio"
                        onChange={handleChange}
                        checked={checked == choice}
                        /> radiobutton usage
                        {choice}
                    </li>
            ))}
            
</div> */}
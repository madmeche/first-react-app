function Spidey(props) {
const {superhero, countHere} = props


        return (
            <>
            <h3 style={{fontSize: countHere}}>{superhero.name}</h3>
            <blockquote>{superhero.catchPhrase}</blockquote>
            <cite>{superhero.alterEgo}</cite>
            </>
        )

}
export default Spidey
//get in the habit of capitalizing functions (Components folder and Welcome.jsx)
function Welcome(props) {
    return(
        <div className = 'Welcome'>
            <h2>Hello {props.name2}</h2> 
            {/* why are there two sets, and why does h2 only show 
            'Hello' on the first set, but says 'Hello John' on the second set?
            And vice versa for Welcome. */}
            <h3>Welcome {props.name}</h3>

            {props.children}
        </div>
    )
}

export default Welcome;
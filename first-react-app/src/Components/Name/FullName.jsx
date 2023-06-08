/* eslint-disable react prop-types*/
function NamePart(props) {
    return(
        <span className = "NamePart">{props.value}</span>
    )
}

function FullName(props) {
    return(
        <div className= "FullName componentBox">
            Full name: <NamePart value={props.first} /> <NamePart value = {props.last} />
        </div>
    )
}

export default FullName;

//add the above to FullName.jsx, then export it and import into App.jsx

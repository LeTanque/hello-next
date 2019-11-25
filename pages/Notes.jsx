import Note from "../components/Note.jsx";


const Notes = props => {
    console.log("props in notes", props)
    return (
        <>
            {props.notes ? props.notes.map((noteObject, index) => (
                <Note key={index} noteObject={noteObject} />
            )) : null}
        </>
    );
}

export default Notes

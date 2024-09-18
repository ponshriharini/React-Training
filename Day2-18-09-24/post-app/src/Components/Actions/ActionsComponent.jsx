import "./ActionsStyles.css";

function ActionsComponent() {

    return(
        <div className="action-buttons mb-3">
            <button type="button" className="btn btn-primary edit">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
        </div>
    )
}

export default ActionsComponent;
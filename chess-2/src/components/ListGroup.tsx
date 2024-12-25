import { MouseEvent } from "react";

function ListGroup() {

    let selectedIndex = 0;

    const items = [
        "Shooting",
        "Editing",
        "Building",
    ];

    const getMessage = () => {
        return items.length === 0 ? <p>"There are no items in the list"</p> : null;
    };

    const handleClick = (event: MouseEvent) => { console.log(event) }

    return (
        <>
            <h1>Things to learn in Fortnite:</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => <li 
                    className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
                    key={item} 
                    onClick={handleClick}>{item}
                </li>)}
            </ul>
        </>
    );
}

export default ListGroup;
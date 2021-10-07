export const TaskItem = ({ isChecked, taskName}) => {

    

    const styleOfTheComponent = {
        textDecoration: isChecked ? "line-through" : "",

    };

    return (
        <li>
            <input cheked={isChecked} type="checkbox"/>
            <span style={styleOfTheComponent}>{taskName}</span>
        </li>

    );


};
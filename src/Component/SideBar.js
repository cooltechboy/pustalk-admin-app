import '../App.css';

export const sideBar = () => {
    return(
        <div className="list">
            <button className="listItem">Dash Board</button>
            <button className="listItem">Business</button>
            <button className="listItem subItem">Activation</button>
            <button className="listItem subItem">Payment</button>
            <button className="listItem subItem">FAQs</button>
            <button className="listItem">Messaging</button>
            <button className="listItem subItem">News Letters</button>
            <button className="listItem">Blog</button>
            <button className="listItem subItem">All</button>
            <button className="listItem subItem">Categories</button>
            <button className="listItem">Report</button>
            <button className="listItem subItem">Contact Form</button>
            <button className="listItem subItem">Contact Email</button>
            <button className="listItem">Frontend Settings</button>
            <button className="listItem">Employee</button>
            <button className="listItem subItem">All</button>
            <button className="listItem subItem">Permissions</button>
            <button className="listItem">Admin Profile</button>
        </div>
    )
}
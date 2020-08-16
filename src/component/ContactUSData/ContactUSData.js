import React from "react";

const ContactUSData = ({ contactObjects, onDelete, setCurrentId }) => {
  return (
    <table className="table table-borderless table-stripped table-dark">
      <thead className="thead-light">
        <tr>
          <th>Full Name</th>
          <th>Mobile</th>
          {/* <th>Email</th> */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(contactObjects).map((id) => {
          return (
            <tr key={id}>
              <td>{contactObjects[id].fullname}</td>
              <td>{contactObjects[id].mobile}</td>
              {/* <td>{contactObjects[id].email.slice(0, 7)}</td> */}
              <td>
                <a
                  className="btn btn-info mr-3"
                  onClick={() => setCurrentId(id)}
                >
                  <i className="fa fa-pencil-alt sm"></i>
                </a>
                <a className="btn btn-danger" onClick={() => onDelete(id)}>
                  <i className="fa fa-trash-alt sm"></i>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactUSData;

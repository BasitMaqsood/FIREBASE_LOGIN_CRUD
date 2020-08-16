import React, { Fragment, useEffect, useState } from "react";
import ContactUS from "./contactForm";

import Loader from "./loader/loader";
import ContactUSData from "./ContactUSData/ContactUSData";

import firebaseObj from "../firebase";

const Contact = () => {
  const [contactObjects, setContactObjects] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    firebaseObj.firebase.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
        setLoader(false);
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseObj.firebase.child("contacts").push(obj, (err) => {
        if (err) {
          console.log(err);
        }
      });
    else
      firebaseObj.firebase.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        }
        setCurrentId("");
      });
  };
  const onDelete = (key) => {
    if (window.confirm("Are you sure to Delete this record")) {
      firebaseObj.firebase.child(`contacts/${key}`).remove((err) => {
        if (err) {
          console.log(err);
        }
        setCurrentId("");
      });
    }
  };
  const handleLogout = () => {
    firebaseObj.fireDB.auth().signOut();
  };

  return (
    <Fragment>
      <div className="jumbotron">
        <div className="text-right">
          <button
            type="button"
            className="btn btn-light"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <ContactUS {...{ addOrEdit, currentId, contactObjects }} />
          </div>
          <div className="col-md-7">
            {loader ? (
              <Loader />
            ) : (
              <ContactUSData
                contactObjects={contactObjects}
                onDelete={onDelete}
                setCurrentId={setCurrentId}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;

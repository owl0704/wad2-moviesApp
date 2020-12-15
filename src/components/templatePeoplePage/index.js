import React from "react";
import PeopleHeader from '../headerPeople'
import "./peoplePage.css";

const TemplatePeoplePage = ({ people, children }) => {
    return (
        <>
            <PeopleHeader people={people} />
            <div className="row">
                
                <div className="col-9">{children}</div>
            </div>
        </>
    );
};

export default TemplatePeoplePage;

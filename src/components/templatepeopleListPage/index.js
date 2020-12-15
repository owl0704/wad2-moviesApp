import React, { useState } from "react";
import Header from "../headerPeopleList";
import PeopleList from "../peopleList";


const PeopleListPageTemplate = ({ peoples, title, action }) => {
    const [nameFilter] = useState("");
    let displayedPeoples = peoples
        .filter(p => {
            return p.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
     return (
        <>
            <Header title={title} numPeoples={displayedPeoples.length} />
            {}
            <PeopleList
                action={action}
                peoples={displayedPeoples}
            />
        </>
    );
};

export default PeopleListPageTemplate;

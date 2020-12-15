import React, { useContext } from "react";
import PageTemplate from '../components/templatePeopleListPage'
import { PeoplesContext } from "../contexts/peoplesContext";

const PeopleListPage = () => {
  
  const context = useContext(PeoplesContext)
  const peoples = context.peoples.filter((p) => {
    return !("mark" in p)
  })

  
  return (
    <PageTemplate
      title='Popular People'
      peoples={peoples}
      action={(people) => {
       
      }}
    />
  );
};

export default PeopleListPage;

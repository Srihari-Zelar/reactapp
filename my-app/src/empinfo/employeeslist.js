import React, { Fragment, useEffect, useState } from 'react';

const employeeslist = () => {
  const [employees, setemployees] = useState([]);

  const getemployees = async() => {
    try {

      const response = await fetch("http://172.31.30.28:4000/emp");
      console.log(response);
      const jsonData = await response.json();

      setemployees(jsonData);

    } catch (err) {
      console.error(err.message);
    }
  };

export default employeeslist;

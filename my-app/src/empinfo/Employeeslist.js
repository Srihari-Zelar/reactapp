import React { useState } from 'react';

const Employeeslist = () => {
  const [Employeeslist] = useState([]);

  const getemployees = async() => {
    try {

      const response = await fetch("http://52.207.236.8:4000/emp");
      console.log(response);
      const jsonData = await response.json();

      setemployees(jsonData);

    } catch (err) {
      console.error(err.message);
    }
  }
};

export default Employeeslist;

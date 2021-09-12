import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SearchBar.scss";

const SearchBar = ({ data }) => {
  const [filterData, setFilterData] = useState([]);

  console.log(filterData)
  
  const handleChange = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
      return value.login.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };



  // const showItem = id=> {
  //   const url=`/explore/${id}`;
  // history.push(url);
  // }

  return (
    <div>
      {/* Navbar */}

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ marginLeft: "470px" }}>
            Github profile
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className="ui-search text-center" style={{ margin: "10px" }}>
        <div className="ui-icon">
          <input
            type="text"
            placeholder="Search User"
            className="prompt"
            onChange={handleChange}
          />
        </div>
        
        {filterData.length > 0 && (
          <div className="dataResult">
          
            {filterData.map((value, key,index) => {

              const { login,id } = value;
              return (
                // <Link to='/nav'className="dataItem" href={value.html_url}>
                //   <p>{value.login}</p>
                // </Link>
                 

              
                  <div className="dataItem" > 
                  <Link to={`/user/${id}`}>
                  <p >{login}</p>
                  </Link>
                  </div>
              
              );
            })}
            
          </div>
        )}
      </div>
      
      
      
        
        
    
      

      
    </div>
  );
};

export default SearchBar;

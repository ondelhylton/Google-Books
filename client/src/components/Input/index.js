import React from "react";
import "./input.css";
import PropTypes from 'prop-types';




const Input = ({ type, query, queryObject }) => {

    let _type, _query;

    const submit = (e) => {
        e.preventDefault();
        queryObject({
            type: _type.value,
            query: _query.value
        });
    };

    const categoryChange = () => {
    }

    return (
        <nav className="input-group input-group-lg" >
            <form onSubmit={submit}>
                <select className="dropDown" aria-label="Drop-down list for book search category"
                    defaultValue={type}
                    ref={option => _type = option}>
                    <option onClick={() => categoryChange()} value="q=intitle:">Title</option>
                    <option onClick={() => categoryChange()} value="q=inauthor:">Author</option>
                    <option onClick={() => categoryChange()} value="q=subject:">Subject</option>
                </select>
                <br></br><br></br>
                <input className="form-control" aria-label="Book search box"
                    type="text" 
                    placeholder="Search Google for a Book"
                    defaultValue={query}
                    ref={input => _query = input}
                    autoFocus />
                    <br></br>
                <input className="searchButton" type="submit"
                    value="Search" />
            </form>
        </nav>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    query: PropTypes.string
};


export default Input;



// import React from "react";

// function Input(props) {
//   return (
//     <div className="input-group input-group-lg">
//       <input className="form-control" type="text" {...props} />
//     </div>
//   );
// }

// export default Input;



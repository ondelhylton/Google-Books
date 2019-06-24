import React from "react";
import "./Highlight.css";
import PropTypes from 'prop-types';
import { MdStarHalf } from 'react-icons/md/';
import { MdStars } from 'react-icons/md/';
import { MdStar } from 'react-icons/md/';
import { MdHighlightOff } from 'react-icons/md/';

const Highlight = ({ data, visibility, addBook, removeBook }) => {

    const color = {background: 'white', border: 'white', color: 'red'};
	

	const addToBooks = () => {
		console.log("Favouriting...");
		addBook(data);
	};

	const removeFromBooks = () => {
		removeBook(data);
	};

	if (visibility.highlight) {
		return (
			<section id="book-highlight" 
							 aria-label="Area showing information about book selected from list">
				<h2>{data.title}</h2>
				<h3>{(data.authors) ? <span>by</span> : null}{data.authors}</h3>
				<figure>
					<img src={data.thumbnail} alt={data.title}/>
					<figcaption>{data.description}</figcaption>
				</figure>
				<div>
					<span>{data.publisher}</span>
					<span>{data.publishedDate}</span>
				</div>
				
		
			</section>
		)
	} else {
		return null;
	}
}

Highlight.propTypes = {
	data: PropTypes.object
};


export default Highlight;

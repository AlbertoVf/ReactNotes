import React, {Component} from 'react';
import './Note.css';

class Note extends Component {
	constructor(props) {
		super(props);
		this.noteContent=props.noteContent;
		this.noteId=props.noteId;
	}

	render(){
		return(
			<section className='Note'>
				<li>{this.noteId} - {this.noteContent}</li>
			</section>
		)
	}
}
export default Note;

import React, {Component} from 'react';
import './Note.css';

class Note extends Component {
	constructor(props) {
		super(props);
		this.noteContent=props.noteContent;
		this.noteId=props.noteId;
	}
	handleRemove(id){
		console.log(id);
		alert('remove',id);
	}
	render(){
		return(
			<section className='Note'>
				<span className='delete' onClick={()=>{this.handleRemove(this.noteId)}}>&times;</span>
				<header>{this.noteId}</header>
				<div className='content'>{this.noteContent}</div>
			</section>
		)
	}
}
export default Note;

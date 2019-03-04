import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import {DB_CONFIG} from './config/config';
import firebase from 'firebase';
import './App.css';
import 'firebase/database';

class App extends Component {
	constructor(){
		super();
		this.state={ notes:[] };
		this.app=firebase.initializeApp(DB_CONFIG);
		this.db=this.app.database().ref().child('notes');
		this.addNote=this.addNote.bind(this);
		this.removeNote=this.removeNote.bind(this);
	}

	componentDidMount(){
		const {notes} = this.state;

		this.db.on('child_added',snap=>{
			notes.push({
				noteId:snap.key,
				noteContent:snap.val().noteContent
			})
			this.setState({notes});
		});

		this.db.on('child_removed',snap=>{
			for (var i = 0; i < notes.length; i++) {
				if(notes[i].noteId===snap.key){
					notes.splice(i,1);
				}
			}
			this.setState({notes});
		});
	}
	removeNote(noteId){
		this.db.child(noteId).remove();
	}

	addNote(note){
		this.db.push().set({noteContent:note});
	}

	render() {
		return (
			<article className='notesContainer'>
				<header className='notesHeader'>
					<h1>Bloc de notas</h1>
				</header>
				<section className='notesBody'>
					<ul>{
						this.state.notes.map(note=>{
							return(
								<Note noteContent={note.noteContent} noteId={note.noteId} key={note.noteId} removeNote={this.removeNote} />
							)
						})
					}</ul>
				</section>
				<footer className='notesFooter'>
					<NoteForm addNote={this.addNote}></NoteForm>
				</footer>
			</article>
		);
	}
}
export default App;

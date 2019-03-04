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
	/**
	 * Gestiona los elementos de la base de datos al realizar un borrado o añadido.
	 * @return {void}
	 */
	componentDidMount(){
		const {notes} = this.state;//notas de la base de datos

		/**
		 * Accion que se desencadena al agregar una nota
		 */
		this.db.on('child_added',snap=>{
			//Agrega una nota
			notes.push({
				noteId:snap.key,
				noteContent:snap.val().noteContent
			})
			this.setState({notes});//Actualiza el estado de las notas
		});

		/**
		 * Accion que se desencadena al eliminar una nota
		 */
		this.db.on('child_removed',snap=>{
			for (var i = 0; i < notes.length; i++) {
				//Elimina una nota
				if(notes[i].noteId===snap.key){
					notes.splice(i,1);
					break;
				}
			}
			this.setState({notes});
		});
	}

	/**
	 * Elimina una nota de la base de datos
	 * @param  {string} noteId clave de la nota que se elimina
	 */
	removeNote(noteId){
		this.db.child(noteId).remove();
	}

	/**
	 * Agrega una nota a la base de datos
	 * @param {Note} note texto del input de la interfaz que sera el contenido de la nueva nota
	 */
	addNote(note){
		this.db.push().set({noteContent:note});
	}

	/**
	 * Renderiza la lista de notas.
	 */
	render() {
		return (
			<article className='notesContainer'>
				<header className='notesHeader'>
					<h1>Bloc de notas</h1>
				</header>
				<section className='notesBody'>
					<ul>{
						this.state.notes.map(note=>{
							return( <Note noteContent={note.noteContent} noteId={note.noteId} key={note.noteId} removeNote={this.removeNote} /> )
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

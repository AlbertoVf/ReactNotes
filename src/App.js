import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';

class App extends Component {
	constructor(){
		super();
		this.state={
			notes:[
				{noteId:1,noteContent:'nota1'},
				{noteId:2,noteContent:'nota2'},
				{noteId:3,noteContent:'nota3'},
				{noteId:4,noteContent:'nota4'}
			]
		};
	}
	render() {
		return (
			<article className='notesContainer'>
				<header class='notesHeader'>
					<h1>Bloc de notas</h1>
				</header>
				<section class='notesBody'>
					<ul>
					{
						this.state.notes.map(note=>{
							return(
								<Note
									noteContent={note.noteContent}
									noteId={note.noteId}
									key={note.noteId}
								/>
							)
						})
					}
					</ul>
				</section>
				<footer class='notesFooter'></footer>
			</article>
		);
	}
}

export default App;

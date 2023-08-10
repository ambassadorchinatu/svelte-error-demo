<script>
	import { onMount } from 'svelte';
	import app, { storage } from './Firebase'
	import { ref, list, uploadBytes } from "firebase/storage"

	let selectedFile;
	
	// This function will be triggered when a file is selected
	const onFileChange = (event) => {
	  selectedFile = event.target.files[0];
	  console.log(selectedFile)
	};
  
	// This function will upload the selected file to Firebase
	const onFileUpload = () => {
		uploadBytes(ref(storage, '/images/'), selectedFile).then(function(snapshot) {
			console.log(snapshot)
		console.log("Uploaded ", selectedFile.name); 
	  }).catch((error) => {
		console.error("Error uploading file: ", error);
	  });
	};
  
	// This function will retrieve the file URL from Firebase
	// const onGetFileUrl = async () => {
	//   try {
	// 	const fileRef = storage.child(selectedFile.name);
	// 	const url = await fileRef.getDownloadURL();
	// 	console.log("File URL: ", url);
	//   } catch (error) {
	// 	console.error("Error fetching file URL: ", error);
	//   }
	// };
  
	// This will install global error listeners
	onMount(() => {
	  window.onerror = (message, source, lineno, colno, error) => {
		console.error('Global error', {message, source, lineno, colno, error});
	  };
	});
  </script>
  
  <main>
	<h1>Firebase File Upload in Svelte</h1>
  
	<input type="file" on:change="{onFileChange}" />
	<button on:click="{onFileUpload}">Upload</button>
	<!-- <button on:click="{onGetFileUrl}">Get File URL</button> -->
  </main>
  
  <style>
	main {
	  text-align: center;
	  padding: 1em;
	  max-width: 260px;
	  margin: 0 auto;
	}
  
	h1 {
	  color: #333;
	}
  
	button {
	  margin-top: 0.5em;
	  padding: 0.5em;
	  font-size: 1em;
	  color: #fff;
	  background-color: #333;
	  border: none;
	  border-radius: 5px;
	}
  
	button:hover {
	  background-color: #666;
	}
  </style>
  

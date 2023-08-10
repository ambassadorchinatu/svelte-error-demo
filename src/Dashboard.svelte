<script>
  import { onMount } from "svelte";
  import { collection, addDoc, getDocs, query } from "firebase/firestore";
  import app, { db, auth } from "./Firebase";
  import ErrorBoundary from "./ErrorBoundary.svelte";
  import { error } from "./authStore";

  const signOutWithGoogle = () => {
  auth.signOut()
    .then(() => {
      console.log("User signed out"); // Redirect or update state as needed
    })
    .catch(error => {
      console.error(error); // Handle any errors during sign-out
    });
  };

  let fullName = "";
  let email = "";
  let complaint = "";
  let tickets = [];
  let date = new Date();

  const tryAgain = () => {
    // logic to retry the action
  };

  const handleError = (err) => {
    $error = err; // Set the error using the error store
  };

  const setError = (err) => {
    $error = err; // Set the error in the store
    console.error("Error caught:", err);
  };

  // Simulate an error for demonstration purposes
  setTimeout(() => handleError(new Error("Test Error")), 10000);
  setTimeout(() => {
    function throwError() {
      throw new Error("This is a test error!");
    }
    throwError();
  }, 10000);

  // Function to create a new ticket
  const createTicket = async () => {
    try {
      await addDoc(collection(db, "tickets"), {
        fullName,
        email,
        complaint,
        date,
      });
      fullName = email = complaint = ""; // Reset the form
      fetchTickets(); // Refresh the tickets list
    } catch (err) {
      setError(err); // Use the setError function from ErrorBoundary
    }
  };

  // Function to fetch all the tickets
  const fetchTickets = async () => {
    try {
      const querySnapshot = await getDocs(query(collection(db, "tickets")));
      tickets = querySnapshot.docs.map((doc) => doc.data());
      console.log(tickets);
    } catch (err) {
      setError(err); // Use the setError function from ErrorBoundary
    }
  };

  onMount(fetchTickets);
</script>

<main>
  <h1>Support Ticket System</h1>
  <ErrorBoundary {tryAgain}>
    <form on:submit|preventDefault={createTicket}>
      <input
        type="text"
        placeholder="Full Name"
        bind:value={fullName}
        required
      />
      <input type="email" placeholder="Email" bind:value={email} required />
      <textarea placeholder="Complaint" bind:value={complaint} required />
      <button type="submit">Submit</button>
    </form>
  </ErrorBoundary>

  <section>
    {#each tickets as ticket}
      <div class="ticket">
        <h2>{ticket.fullName}</h2>
        <p><strong>Email:</strong> {ticket.email}</p>
        <p><strong>Complaint:</strong> {ticket.complaint}</p>
      </div>
    {/each}
  </section>

  <button on:click={signOutWithGoogle}>Sign out</button>

</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 400px;
    margin: 0 auto;
  }

  input,
  textarea {
    display: block;
    margin: 0.5em auto;
    padding: 0.5em;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    margin-top: 0.5em;
    padding: 0.5em;
    font-size: 1em;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #666;
  }

  .ticket {
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em 0;
    border-radius: 5px;
  }

  h2 {
    color: #333;
    margin: 0;
  }

  p {
    margin: 0.5em 0;
  }
</style>

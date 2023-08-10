<!-- Auth.svelte -->
<script>
  import { auth } from "./Firebase";
  import { tracker } from "./main";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        tracker.setUserID(result.user.displayName);
        console.log(result.user.displayName); // Redirect to another page
      })
      .catch((error) => {
        console.error(error);
      });
  };
</script>

<main>
  <button on:click={signInWithGoogle}>Sign In with Google</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 400px;
    margin: 0 auto;
  }
</style>

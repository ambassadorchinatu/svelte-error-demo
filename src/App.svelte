<!-- App.svelte -->
<script>
	import Tracker from '@openreplay/tracker';
	import { user } from './authStore';
	import Auth from './Auth.svelte';
	import Dashboard from './Dashboard.svelte';

	const tracker = new Tracker({
	projectKey: "KCo3EcM88NprK8I5be8v",  
	});
	tracker.start();
  </script>
  
  {#if $user}
	<Dashboard />
  {:else}
	<Auth />
  {/if}
  
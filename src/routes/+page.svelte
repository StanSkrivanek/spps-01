<script>
	// @ts-ignore
	import Signup from '$lib/components/forms/Signup.svelte';

	/**
	 * @type {any[]}
	 */
	let users = [];
	async function getAllUsers() {
		const response = await fetch('/api/v1/users');

		const data = await response.json();
		console.log(data);
		return (users = data);
	}
</script>

<h1>POC: SvelteKit and PlanetScale DB</h1>
<div class="wrapper">
	<Signup />
</div>

<div class="wrapper">
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Password</th>
			</tr>
		</thead>
		{#each users as { name, email, password }}
			<!-- content here -->
			<tr>
				<td>{name}</td>
				<td>{email}</td>
				<td>{password}</td>
			</tr>
		{/each}
	</table>
	<div class="button__w">
		<button class="btn" on:click={getAllUsers}>get all users</button>
	</div>
</div>

<style>
	h1 {
		text-align: center;
		font-weight: 100;
	}
	.wrapper {
		max-width: 60%;
		margin: 0 auto;
		height: 100%;
		overflow: auto;
		margin-bottom: 2rem;
	}
	table {
		border-collapse: collapse;
		width: 100%;
	}
	th {
		background-color: rgb(241, 246, 255);
		color: 1d2025;
		font-weight: 400;
	}
	th,
	td {
		border: 1px solid rgb(181, 182, 182);
		padding: 0.5rem;
	}
	.button__w {
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		margin-top: 1rem;
	}
	.btn {
		max-width: max-content;
		font-size: 12px;
		text-transform: uppercase;
		background: #1d2025;
		color: #dce4ec;
		padding: 10px 12px;
		border: 0px solid;
		border-radius: 0.25em;
		cursor: pointer;
		transition: 250ms ease-out;
	}

	.btn:hover {
		color: #262c32;
		background: #52f1a1;
	}
</style>

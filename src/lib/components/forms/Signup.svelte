<script>
	//submit form data
	async function submit() {
		// @ts-ignore
		const fd = new FormData(this);
		const values = Object.fromEntries([...fd]);
		console.log('VALUES', values);

		const settings = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		};

		try {
			const url = `/api/v1/users`;
			const response = await fetch(url, settings);
			const data = await response.json();
			// console.log("DATA",data);
			return data;
		} catch (e) {
			console.log('Error', e);
			return e;
		}
	}
</script>

<form on:submit|preventDefault={submit} class="app-form" action="/api/v1/users" method="POST">
	<input placeholder="Full name" type="text" class="input-text" name="name" />
	<input placeholder="Email" type="email" class="input-text" name="email" />
	<input placeholder="Password" type="password" class="input-text" name="password" />
	<div class="button__w">
	<button type="submit" class="btn fa-solid fa-plus">Register user</button>
	</div>
</form>

<style>
	.app-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.input-text {
		background: #f7f7f7;
		font-size: 1rem;
		border: 1px solid #a2a8ad;
		color: #191e22;
		border-radius: 0.25rem;
		padding: 1rem;
		margin-bottom: 10px;
		transition: border 250ms ease-out;
	}

	.input-text:focus {
		border: 1px solid #ffffff;
		background: #1d2025;
		outline: none;
		color: #dce4ec;
	}

	::placeholder {
		opacity: 0.7;
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

	.btn:focus {
		outline: none;
	}
</style>

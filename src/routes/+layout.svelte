<script>
	//add global css route only once into main +lauout.svelte to take effect on all pages of the app in routes folder 
	import '../app.css';
</script>
<!-- HOMEPAGE -->
<div>
	<!-- Homepage Content is poulated via <slot />-->
	<slot />
</div>
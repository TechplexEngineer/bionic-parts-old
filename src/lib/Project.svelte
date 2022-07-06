<script lang="ts">
	export let project: { name: string, photo: string, partNumberPrefix: string };
</script>

<div
	class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg"
	style="background-image: url('{project.photo}');"
>
	<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
		<h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-white">{project.name}</h2>
		<ul class="d-flex list-unstyled mt-auto">
			<li class="me-auto">
<!--				<img-->
<!--					src="https://github.com/twbs.png"-->
<!--					alt="Bootstrap"-->
<!--					width="32"-->
<!--					height="32"-->
<!--					class="rounded-circle border border-white"-->
<!--				/>-->
			</li>
<!--			<li class="d-flex align-items-center me-3">-->
<!--				<svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill" /></svg>-->
<!--				<small>Earth</small>-->
<!--			</li>-->
			<li class="d-flex align-items-center">
				<small>{project.partNumberPrefix}</small>
			</li>
		</ul>
	</div>
</div>

<style>
	.feature-icon {
		width: 4rem;
		height: 4rem;
		border-radius: 0.75rem;
	}

	.icon-link > .bi {
		margin-top: 0.125rem;
		margin-left: 0.125rem;
		fill: currentcolor;
		transition: transform 0.25s ease-in-out;
	}
	.icon-link:hover > .bi {
		transform: translate(0.25rem);
	}

	.icon-square {
		width: 3rem;
		height: 3rem;
		border-radius: 0.75rem;
	}

	.text-shadow-1 {
		text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
	}
	.text-shadow-2 {
		text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
	}
	.text-shadow-3 {
		text-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
	}

	.card-cover {
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
	}
</style>

<template>
	<footer class="bg-brown">
		<b-container>
			<section class="text-center mx-auto w-75 p-4">
				<div class="footer-brand">Pet Pal</div>
				<p>
					Pet Pal là hệ thống pet shop cung cấp thức ăn cho chó mèo uy tín hàng
					đầu tại Hà Nội. Với tôn chỉ phục vụ và chăm sóc khách hàng và thú cưng
					như người thân trong gia đình
				</p>
			</section>
			<section class="p-4">
				<div class="row g-4">
					<div class="col-md">
						<h2 class="text-center mb-4">Contacts</h2>
						<ul class="list-group list-group-flush lead">
							<li class="list-group-item bg-brown">
								<span class="fw-bold">Location:</span> 130 Trung Phung Str
							</li>
							<li class="list-group-item bg-brown">
								<span class="fw-bold">Phone 1:</span> (555) 555-5555
							</li>
							<li class="list-group-item bg-brown">
								<span class="fw-bold">Phone 2:</span> (333) 333-3333
							</li>
							<li class="list-group-item bg-brown">
								<span class="fw-bold">Email 1:</span>
								@gmail.com
							</li>
							<li class="list-group-item bg-brown">
								<span class="fw-bold">Email 2:</span>
								@gmail.com
							</li>
						</ul>
					</div>

					<div class="col-md">
						<Mapbox />
					</div>
				</div>
			</section>
		</b-container>
	</footer>
</template>

<script>
import Mapbox from "./Mapbox.vue";

export default {
	name: "Footer",
	components: {
		Mapbox,
	},
};
</script>

<style>
.bg-brown {
	background-color: #54473e;
	color: white;
}
.footer-brand {
	font-size: 2.5rem;
	font-family: var(--headerFont);
}
@media (max-width: 768px) {
	.list-group {
		text-align: center;
	}
}
</style>

<template>
<div>
	<section class="bg6 p-t-15 m-b-100">
		<div class="container">
			<div class="text-center">
				<h3 class="mtext-103 cl5 m-b-10"><b>Shopping Cart</b></h3>
			</div>
			<div id="isi_cart">
								<div class="card">
						<div class="card-body p-all-0">
							<form id="cartform" action="https://www.eurekabookhouse.co.id/frontend/pemesanan/checkout" method="POST">
								<input type="hidden" name="customer_id" value="98005" />
								<div class="">
									<table class="transfer-group-table table">
										<tbody class="stext-101">
																				
																						<tr class="bgu3">
													<td></td>
													<td colspan="2">
														<a href="https://www.eurekabookhouse.co.id/mall/detail?mall=bukuerlangga"><p class="cl2 text-left">Buku Erlangga</p></a>
													</td>
												</tr>
																								<tr>
														<td>
															<div class="m-auto p-l-80">
																<input id="tanda_22253" type="checkbox" class="tandai m-auto" name="dipilih[]" value="90671">
															</div>
														</td>
														<td>
															<div class="img-produk-cart m-auto p-l-10">
																<img src="https://cdn.eurekabookhouse.co.id/ebh/product/all/2014005020.jpg" alt="kartu-angka-dan-huruf-hijaiah" onerror="this.src='https://www.eurekabookhouse.co.id/assets/front/images/eureka-bookhouse-bg-grey.jpg';">
															</div>
														</td>
														<td>
															<a href="https://www.eurekabookhouse.co.id/product/kartu-angka--huruf-hijaiah-erlangga-efk-eurekabookhouse.co.id"><h6 class="m-b-5 cl1 text1l text-left">Kartu Angka & Huruf Hijaiah</h6></a>
															<div class="flex-l-m">
																<div class="wrap-num-product flex-w m-r-0 m-b-10 ">
																	<div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m " data-id="90671">
																		<i class="fa fa-minus"></i>
																	</div>
																	<input id="jum" class="mtext-104 cl3 txt-center num-product qty" type="text" name="num-product1" value="1">
																	<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" data-id="90671" data-max="49">
																		<i class="fa fa-plus"></i>
																	</div>
																</div>
																<input type="hidden" id="minimum" name="minimum" value="0">
																<span class="pl-2">Stok <span class="stext-101 cl1 berapastok">49</span></span>
																<button type="button" class=" btn-danger js-del-cart m-l-10 " data-id="90671"><i class="fa fa-times "></i></button>
															</div>
															<div class="col-3 col-md-2 px-2 mb-2 text-center">
																<s><small>Rp.65.000</small></s><strong class="text-left"> Rp.52.000</strong>	
															</div>																											<input class="harga" type="hidden" name="harga[]" value="52000">
															<input class="berat" type="hidden" name="berat[]" value="0.15">
														</td>
													</tr>
																
																				</tbody>
									</table>
								</div>
							</form>
						</div>
					</div>
					<div class="card m-t-10">
						<div class="card-body">
							<div class="row">
								<div class="col-2">
									<div class="p-tb-15 p-lr-2">
										<input type="checkbox" id="select_all" class="m-auto" onchange="select_all()" checked>
									</div>
								</div>
								<div class="col-7 p-lr-0">
									<div class="p-all-6 m-l-15 flex-l">
										<h5 class="p-t-8 m-r-10">Rp.</h5>
										<input class="form-control grdtot" id="totalharga" type="text" name="grandTotal" readonly>
									</div>
								</div>
								<div class="col-3 p-tb-5 p-r-20 p-l-1">
									<router-link :to="'/checkout'" id="sub-cart" class="btn bgu1 flex-c-m stext-101 cl0 bor3 hov-btn1 hov-cl0 btn-block">
										<div class="icon-mobile-nav text-center">
											<span>Checkout</span>
										</div>
									</router-link>
								</div>
							</div>
						</div>
					</div>
						</div>
		</div>
	</section>
	<div class="modal fade vertically-modal" id="modal_cart" tabindex="-1">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div id="modal-tampil" class="modal-body">
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script scope>
export default {
  name: "cartPage",
}
</script>

<style type="text/css">
	.text1l{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display:block;
		width:100%;
		min-width:1px;
	}
	td:not(:last-child){
		white-space: nowrap;
		width: 1px;
	}
	.transfer-group-table{
		overflow: hidden;
		white-space: nowrap;

		width:100%;
		min-width:1px;
	}
	/*	.img-produk-cart{width: 20%;}*/
	.img-produk-cart img{
		width:50px;
	}
	.mobile-nav{display: none;}
	.js-del-cart{height: 30px;padding: .5rem;line-height: 1;}
	.table td, .table th{vertical-align: middle}
</style>
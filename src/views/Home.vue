<template>
	<div class="wrap">
		<my-header :page-title="pageTitle"></my-header>
		<my-footer></my-footer>	  
		<div class="content">
	    	<div class="card demo-card-header-pic">
			    <div valign="bottom" class="card-header color-white no-border no-padding">
			      <img class='card-cover' src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" alt="">
			    </div>
			    <div class="card-content">
			      <div class="card-content-inner">
			        <p class="color-gray">发表于 2015/01/15</p>
			        <p>此处是内容...</p>
			      </div>
			    </div>
			    <div class="card-footer">
			      <a href="#" class="link">赞</a>
			      <a href="#" class="link">更多</a>
			    </div>
		  	</div>
	  	</div>
	</div>
</template>
<script>
	import Footer from '../components/footer'
	import Header from '../components/header'
	export default{
		data(){
			return{
				msg:'hello vuejs',
				pageTitle: '首页'
			}
		},
		components:{
			'myHeader':Header,
			'myFooter':Footer
		}
	}
</script>
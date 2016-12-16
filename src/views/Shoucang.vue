<template>
	<div class="wrap">
		<my-header :page-title="pageTitle"></my-header>
		<my-footer></my-footer>	  
		<div class="content">
	    {{msg}}
	  	</div>
	</div>
</template>
<script>
	import Footer from '../components/footer'
	import Header from '../components/header'
	export default{
		data(){
			return{
				msg:'shoucang page',
				pageTitle: '收藏'
			}
		},
		components:{
			'myHeader':Header,
			'myFooter':Footer
		}
	}
</script>
<template>
	<header class="bar bar-nav" @click="GoBack">
	    <a class="button button-link button-nav pull-left">
	      <span class="iconfont icon-zuo" style="color:black"></span>
	    </a>
	    <h1 class="title">{{pageTitle}}</h1>
	</header>
</template>
<script>
	export default{
		props:{
          pageTitle:{type:String,default(){return'标题'}},          
        },
		methods:{
          GoBack:function(){
            window.history.back();
          }
        }
	}
</script>
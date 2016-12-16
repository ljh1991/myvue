<template>
	<nav class="bar bar-tab">
	    <router-link v-bind:class="['tab-item',$route.path=='/' ?'active':'']" active-class="active" to="/Home">
	      <span class="iconfont icon-index"></span>
	      <div class="tab-label">首页</div>
	    </router-link>
	    <router-link class="tab-item" active-class="active" to="/Me">
	      <span class="iconfont icon-my"></span>
	      <div class="tab-label">我</div>
	    </router-link>
	    <router-link class="tab-item" active-class="active" to="/Shoucang">
	      <span class="iconfont icon-shoucang"></span>
	      <div class="tab-label">收藏</div>
	    </router-link>
	    <router-link class="tab-item" active-class="active" to="/Setting">
	      <span class="iconfont icon-set"></span>
	      <div class="tab-label">设置</div>
	    </router-link>
	</nav>
</template>
<script>
	export default {

	}
</script>
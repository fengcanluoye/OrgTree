<!-- 组织结构树插件 -->
<template>
	<div class="org-tree-content">
		<template v-for="(item,index) in data">
			<OrgTreeNode :data="item" :key="index"></OrgTreeNode>
		</template>
	</div>
</template>

<script>
import OrgTreeNode from './OrgTreeNode';
export default {
	name:'OrgTree',
	props: ["data"],
	components:{
	    OrgTreeNode
	},
	methods:{
	}
}
</script>

<style lang="scss" scoped="scoped">
.org-tree-content{
	margin: auto;
	display: table;
	&>.org-tree-node:after {
	    border-left: 0;
		border-top: 0;
	}
	&>.org-tree-node:before {
		border-top: 0;
	}
}
</style>

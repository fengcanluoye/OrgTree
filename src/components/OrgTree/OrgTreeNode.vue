<!-- 组织结构树插件 -->

<template>
	<div class="org-tree-node">
		<div class="org-tree-node-label">
			<div class="org-tree-node-label-box">{{data.label}}</div>
			<span class="org-tree-node-btn" :class="data.hideChild?'':'expanded'" v-if="data.children" @click="switchChild(data)"><i></i></span>
		</div>
		<div class="org-tree-node-children" v-if="data.children&&!data.hideChild">
			<OrgTreeNode v-for="(node, name, index) in data.children" :data="node" :key="index"></OrgTreeNode>
		</div>
	</div>
</template>

<script>
export default {
	name:'OrgTreeNode',
	props: ["data"],
	computed:{
	},
	methods:{
		switchChild(data){
			data.hideChild=!data.hideChild;
			this.$forceUpdate();//强制刷新
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
.org-tree-node,
.org-tree-node-children {
  position: relative;
  margin: 0;
  padding: 0;
  list-style-type: none;
  &:before, &:after {
    transition: all .35s;
  }
}
.org-tree-node-label {
  position: relative;
  display: inline-block;
  .org-tree-node-label-box {
	margin: 0px 10px;
    padding: 10px 15px;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .15);
  }
}
.org-tree-node {
  padding-top: 20px;
  display: table-cell;
  vertical-align: top;
  &.is-leaf, &.collapsed {
    padding-left: 10px;
    padding-right: 10px;
  }
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 19px;
  }
  &:after {
    left: 50%;
    border-left: 1px solid #ddd;
  }
  &:not(:first-child):before,
  &:not(:last-child):after {
    border-top: 1px solid #ddd;
  }
}
.org-tree-node-children {
  padding-top: 20px;
  display: table;
  margin: 0px 10px;
  // &:before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 50%;
  //   width: 0;
  //   height: 20px;
  //   border-left: 1px solid #ddd;
  // }
  &:after {
    content: '';
    display: table;
    clear: both;
  }
}
.org-tree-node-btn {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 20px;
  height: 20px;
  z-index: 10;
  margin-left: -11px;
  margin-top: 9px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, .15);
  cursor: pointer;
  transition: all .35s ease;
  &:hover {
    background-color: #e7e8e9;
    // transform: scale(1.15);
  }
  &:before, &:after {
    content: '';
    position: absolute;
  }
  &:before {
    top: 50%;
    left: 4px;
    right: 4px;
    height: 0;
    border-top: 1px solid #ccc;
  }
  &:after {
    top: 4px;
    left: 50%;
    bottom: 4px;
    width: 0;
    border-left: 1px solid #ccc;
  }
  &.expanded:after {
    border: none;
  }
  i{
	position: absolute;
	top: -10px;
	left: 50%;
	width: 0;
	height: 10px;
	border-left: 1px solid #ddd;
  }
}
</style>

<template>
	 <div class="ad">
		 <div class="org-content">
			 <OrgTree :data="data"></OrgTree>
		 </div>
	</div>
</template>

<script>
import OrgTree from '@/components/OrgTree/index.vue';
export default {
	name: 'home',
	components:{
	    OrgTree
	},
	data(){
	    return{
			data:[
				{
				  id: 2,
				  label: '产品研发部',
				  children: [
					  {
						id: 5,
						label: '研发-前端'
					  }, 
					  {
						id: 6,
						label: '研发-后端'
					  },
					  {
						id: 6,
						label: '研发-后端'
					  }, {
						id: 9,
						label: 'UI设计',
						children:[
							{
								id: 7,
								label: '销售一部'
							}, {
								id: 8,
								label: '销售二部'
							},
						]
					  }, {
						id: 10,
						label: '产品经理',
						children:[
							{
								id: 7,
								label: '销售一部'
							}, {
								id: 8,
								label: '销售二部'
							},
						]
					  },
				  ]
				}, 
				{
				  id: 3,
				  label: '销售部',
				  children: [
					  {
						id: 7,
						label: '销售一部'
					  }, {
						id: 8,
						label: '销售二部'
					  },
				  ]
				}
			]
        }
	},
	methods:{
	},
}
</script>

<style lang="scss" scoped="scoped">

</style>

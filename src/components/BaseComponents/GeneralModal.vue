<template>
    <div class="modal-container open">
		 <div class="modal ">
			<div class="close-button" @click="closeModal">+</div>
			<div class="modal-title">{{modalTitle}}</div>
			<div class="modal-body">
				<slot></slot>
			</div>
			<div class="modal-buttons"></div>
		</div>
    </div>
</template>

<script>

export default {
    props:{
			modalTitle:{
				type: String
			}
		},
	methods:{
		closeModal(){
			this.$emit('closeModal')
		}
	},
	created(){
       document.getElementsByTagName('body')[0].classList.add('modal-in');
	},
	destroyed(){
			document.getElementsByTagName('body')[0].classList.remove('modal-in');
	}
}
</script>

<style lang="scss" scoped>
	@keyframes glowing {
		0% { box-shadow: 0 0 -10px white; }
		40% { box-shadow: 0 0 20px white; }
		60% { box-shadow: 0 0 20px white; }
		100% { box-shadow: 0 0 -10px white;}
	}

	.modal-container{
		background-color: rgba(43, 42, 42, 0.51);
		position:fixed;
		width:100%;
		height:100%;
		top:0;
		left:0;
		z-index:99;
		font-size:14px;
		display:none;
		&.open{
			display:block;
		}

		.modal{
			width:80%;
			max-width:700px;
			height:600px;
			position:absolute;
			left:50%;
			transform: translateX(-50%);
			background-color:white;
			margin-top:150px;
			border-radius: 5px 5px 0 0 ;

			.close-button{
				background-color: black;
				width: 50px;
				height: 50px;
				right: 0;
				position: absolute;
				transform: translate(50%, -50%) rotate(45deg);
				border-radius:50%;
				color: white;
				text-align: center;
				font-size: 40px;
				transition: all .3s;

				&:hover{
					cursor:pointer;
					font-weight:700;
					transition: all .3s;
					animation: glowing 2000ms infinite;	
				}
			}
				
			.modal-title{
				font-size: 24px;
				height:50px;
				padding: 10px;
				width:100%;
				border-bottom: 1px solid #e6e8ee
			}

			.modal-body{
				padding:10px 10px;
				height: 450px;
				text-align:center;
			
			}
		}
	}
</style>
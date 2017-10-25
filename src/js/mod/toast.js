require('less/toast.less')

var $ = require('jquery')

function toast(msg,time) {
	this.msg = msg
	this.dismissTime = time||1000
	this.createToast()
	this.showToast()
}

toast.prototype.createToast = function(){
	var tpl = '<div class="toast">'+this.msg+'</div>'
	this.$toast = $(tpl)
	$('body').append(this.$toast)
}

toast.prototype.showToast = function(){
	var self = this
	self.$toast.fadeIn(300,function(){
		setTimeout(function(){
			self.$toast.fadeOut(300,function(){
				self.$toast.remove()
			})
		},self.dismissTime)
	})
}

function Toast(msg,time){
	return new toast(msg,time)
}

module.exports.Toast = Toast
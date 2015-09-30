
var start = + new Date();
var DCKleanse = {

	triggerWords: /\b(Coimbra?|DAVID COIMBRA|David?)\b/i,
	articleNames: ["li", ".post",".article",".story", ".g", ".zergentity", ".unit", ".lede", ".item", ".item-box", ".archive-item", ".news", ".entry", ".highlight"],

	checkClass: function(element) {
		if ($(element).hasClass("checked")) {
			return false
		}
		else {
			return true;
		}
	},

	findDCs: function(element) {
		var containsDC = false;
		var searchThis = $(element).text();

		if (searchThis != undefined) {
			if (searchThis.match(DCKleanse.triggerWords) != null) {
				containsDC = true;
			}
		}
		
		return containsDC;
	},



	eraseDCs: function() {

		this.articleNames.forEach(function(name) {
			$(name  + ':not(.checked)').addClass("checked").filter(function() {
				return DCKleanse.findDCs(this);
			}).css("display", "none")
		})
	},

	blockDCs: function() {
		setInterval(this.eraseDCs.bind(this), 1000);
		this.eraseDCs();		
	}


}

DCKleanse.blockDCs();
var end = + new Date();
console.log(end-start);




	eraseDCs: function() {

		this.articleNames.forEach(function(name) {
			$(name  + ':not(.checked)').addClass("checked").filter(function() {
				return DCKleanse.findDC(this);
			}).css("display", "none")
		})
	},

	blockDCs: function() {
		setInterval(this.eraseDCs.bind(this), 1000);
		this.eraseDCs();		
	}


}

DCKleanse.blockDCs();
var end = + new Date();
console.log(end-start);


var start = + new Date();
var KardashianKleanse = {

	triggerWords: /\b(KARDASHIANS?|KRIS JENNER|KENDALL JENNER|KYLIE JENNER|NORTH WEST|KIMYE|DISICKS?)\b/i,
	articleNames: ["li", ".post",".article",".story", ".g", ".zergentity", ".unit", ".lede", ".item", ".item-box", ".archive-item", ".news", ".entry", ".highlight"],

	checkClass: function(element) {
		if ($(element).hasClass("checked")) {
			return false
		}
		else {
			return true;
		}
	},

	findKardashians: function(element) {
		var containsKardashian = false;
		var searchThis = $(element).text();

		if (searchThis != undefined) {
			if (searchThis.match(KardashianKleanse.triggerWords) != null) {
				containsKardashian = true;
			}
		}
		
		return containsKardashian;
	},



	eraseKardashians: function() {

		this.articleNames.forEach(function(name) {
			$(name  + ':not(.checked)').addClass("checked").filter(function() {
				return KardashianKleanse.findKardashians(this);
			}).css("display", "none")
		})
	},

	blockKardashians: function() {
		setInterval(this.eraseKardashians.bind(this), 1000);
		this.eraseKardashians();		
	}


}

KardashianKleanse.blockKardashians();
var end = + new Date();
console.log(end-start);

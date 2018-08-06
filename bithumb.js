
	
function ProcessBithumb() {

		$.getJSON("http://test.com/investment/bithumbRequest.php?name=btc", function(json){
			$('#bithumbBTC').text(Math.round(json.data.closing_price));
		});

		$.getJSON("http://test.com/investment/bithumbRequest.php?name=bch", function(json){
			$('#bithumbBCC').text(Math.round(json.data.closing_price));
		});

		$.getJSON("http://test.com/investment/bithumbRequest.php?name=ltc", function(json){
			$('#bithumbLTC').text(Math.round(json.data.closing_price));
		});

		$.getJSON("http://test.com/investment/bithumbRequest.php?name=eth", function(json){
			$('#bithumbETH').text(Math.round(json.data.closing_price));
		});

		$.getJSON("http://test.com/investment/bithumbRequest.php?name=etc", function(json){
			$('#bithumbETC').text(Math.round(json.data.closing_price));
		});

		$('#lastTime').text(Date());
		$('#huobiBithumbBTC').text((parseFloat($('#bithumbBTC').text())/parseFloat($('#huobiBTC').text())).toFixed(3));
		$('#huobiBithumbBCC').text((parseFloat($('#bithumbBCC').text())/parseFloat($('#huobiBCH').text())).toFixed(3));
		$('#huobiBithumbLTC').text((parseFloat($('#bithumbLTC').text())/parseFloat($('#huobiLTC').text())).toFixed(3));
		$('#huobiBithumbETH').text((parseFloat($('#bithumbETH').text())/parseFloat($('#huobiETH').text())).toFixed(3));
		$('#huobiBithumbETC').text((parseFloat($('#bithumbETC').text())/parseFloat($('#huobiETC').text())).toFixed(3));

		setTimeout(function(){
				console.log("bithumb new query");
    			ProcessBithumb();
				}, 1000);
		
}

ProcessBithumb();
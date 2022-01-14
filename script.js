
var apgadajamie = document.getElementById('apgadajamie');
var neapliekamais = document.getElementById('neapliekamais');
var bruto = document.getElementById('bruto');
var button = document.getElementById('aprekinat');
var socIemaksa = document.getElementById('vsao');
var iedzIenNod = document.getElementById('iin');
var apgadIemaksa = document.getElementById('apgPers');
var neapliekMIn = document.getElementById('neapMin');
var vsao, neapMin, sum, iin, procenti23;

button.addEventListener('click', aprekinat);

function aprekinat() {
	//aprēķina vsao
	vsao = bruto.value * 0.105;
	if (neapliekamais.value > 350) {
		neapliekamais.value = 350;
	}
	//aprēķina ienākuma nodokli
	if (bruto.value <= 1667) {
		iin = (bruto.value - vsao) - ((20 / 100) * (bruto.value - vsao));
	}
	//ienākuma nodoklis ja bruto>1667	
	else {
		procenti23 = (bruto.value - 1667) * 0.23;
		console.log(procenti23);
		procenti20 = (bruto.value - (bruto.value - 1667) - vsao) * 0.20;
		console.log(procenti20);
		iin = bruto.value - vsao - procenti23 - procenti20;
	}
	//apŗēķina "uz rokas"
	if ((bruto.value - vsao) - neapliekamais.value >= apgadajamie.value * 250) {
		neapMin = neapliekamais.value - (neapliekamais.value - ((20 / 100) * neapliekamais.value));
		sum = iin + (apgadajamie.value * 50) + neapMin;
	} else {
		sum = bruto.value - vsao;

	}
	//izvada summu
	document.querySelector('.summary').style.display = 'block';
	document.getElementById('neto').style.cssText = "color:magenta; font-size:24px; text-decoration: underline";
	document.getElementById("neto").innerText = parseFloat(sum).toFixed(2) + " EUR";
	//output vsao
	socIemaksa.innerText = parseFloat(vsao).toFixed(2);
	console.log(socIemaksa.value);

	//output iin 
	if (bruto.value <= 1667) {
		x = parseFloat(((bruto.value - vsao) - neapliekamais.value) * 0.2 - (apgadajamie.value * 50)).toFixed(2);
		if (x > 0) {
			iedzIenNod.innerText = x;
		} else {
			iedzIenNod.innerText = 0;
		}
	} else {
		x = parseFloat(((1667 - vsao) - neapliekamais.value) * 0.2 - (apgadajamie.value * 50) + procenti23).toFixed(2);
		if (x > 0) {
			iedzIenNod.innerText = x;
		}
		else {
			iedzIenNod.innerText = 0;
		}
	}


	//output apgādājamos
	apgadIemaksa.innerText = apgadajamie.value * 250;

	//output neapliekamo minimumu
	neapliekMIn.innerText = neapliekamais.value;

}
$(document).ready(function () {
	$('#apgadajamie').prop('disabled', true);
	$('#plus-btn').click(function () {
		$('#apgadajamie').val(parseInt($('#apgadajamie').val()) + 1);
		if ($('#apgadajamie').val() > 10) {
			$('#apgadajamie').val(10);
		}
	});
	$('#minus-btn').click(function () {
		$('#apgadajamie').val(parseInt($('#apgadajamie').val()) - 1);
		if ($('#apgadajamie').val() < 0) {
			$('#apgadajamie').val(0);
		}
	});
});

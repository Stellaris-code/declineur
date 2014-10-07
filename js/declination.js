
		    if (typeof String.prototype.trim !== 'function') {
	    String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	    }
	}

	var puerAndCo = ["puer", "gener", "socer", "vesper"];
	var febrisAndCo = ["febris", "puppis", "securis", "sitis", "turris", "tussis"];
	var paterAndCo = ["pater", "mater", "frater", "juvenis", "senex", "canis"];
	var urbsAndCo = ["urbs"];

	function declination1(inradic) {
	    var radic = inradic.toLowerCase();
	    document.getElementById("s_nominative").innerHTML = radic + "a";
	    document.getElementById("s_vocative").innerHTML = radic + "a";
	    document.getElementById("s_accusative").innerHTML = radic + "am";
	    document.getElementById("s_genitive").innerHTML = radic + "ae";
	    document.getElementById("s_dative").innerHTML = radic + "ae";
	    document.getElementById("s_ablative").innerHTML = radic + "a";

	    document.getElementById("p_nominative").innerHTML = radic + "ae";
	    document.getElementById("p_vocative").innerHTML = radic + "ae";
	    document.getElementById("p_accusative").innerHTML = radic + "as";
	    document.getElementById("p_genitive").innerHTML = radic + "arum";
	    document.getElementById("p_dative").innerHTML = radic + "is";
	    document.getElementById("p_ablative").innerHTML = radic + "is";

	}

	function declination2(inword) {
	    var word = inword.toLowerCase();
	    var radic = word.substr(0, word.length - 2);
			if(word === "virus")
				{
					document.getElementById("s_nominative").innerHTML = radic + "us";
					document.getElementById("s_vocative").innerHTML = radic + "us";
					document.getElementById("s_accusative").innerHTML = radic + "us";
					document.getElementById("s_genitive").innerHTML = radic + "i";
					document.getElementById("s_dative").innerHTML = radic + "o";
					document.getElementById("s_ablative").innerHTML = radic + "o";

					document.getElementById("p_nominative").innerHTML = "-";
					document.getElementById("p_vocative").innerHTML = "-";
					document.getElementById("p_accusative").innerHTML = "-";
					document.getElementById("p_genitive").innerHTML = "-";
					document.getElementById("p_dative").innerHTML = "-";
					document.getElementById("p_ablative").innerHTML = "-";
				}

	    else if (word.substr(-2) === "us") {
		document.getElementById("s_nominative").innerHTML = radic + "us";
		document.getElementById("s_vocative").innerHTML = radic + "e";
		document.getElementById("s_accusative").innerHTML = radic + "um";
		document.getElementById("s_genitive").innerHTML = radic + "i";
		document.getElementById("s_dative").innerHTML = radic + "o";
		document.getElementById("s_ablative").innerHTML = radic + "o";

		document.getElementById("p_nominative").innerHTML = radic + "i";
		document.getElementById("p_vocative").innerHTML = radic + "i";
		document.getElementById("p_accusative").innerHTML = radic + "os";
		document.getElementById("p_genitive").innerHTML = radic + "orum";
		document.getElementById("p_dative").innerHTML = radic + "is";
		document.getElementById("p_ablative").innerHTML = radic + "is";
	    } else if (word.substr(-2) === "er" && puerAndCo.indexOf(word) < 0) {
		var erRadic = radic + "r";
		document.getElementById("s_nominative").innerHTML = word;
		document.getElementById("s_vocative").innerHTML = word;
		document.getElementById("s_accusative").innerHTML = erRadic + "um";
		document.getElementById("s_genitive").innerHTML = erRadic + "i";
		document.getElementById("s_dative").innerHTML = erRadic + "o";
		document.getElementById("s_ablative").innerHTML = erRadic + "o";

		document.getElementById("p_nominative").innerHTML = erRadic + "i";
		document.getElementById("p_vocative").innerHTML = erRadic + "i";
		document.getElementById("p_accusative").innerHTML = erRadic + "os";
		document.getElementById("p_genitive").innerHTML = erRadic + "orum";
		document.getElementById("p_dative").innerHTML = erRadic + "is";
		document.getElementById("p_ablative").innerHTML = erRadic + "is";
	    } else if (word.substr(-2) === "er") {
		document.getElementById("s_nominative").innerHTML = word;
		document.getElementById("s_vocative").innerHTML = word;
		document.getElementById("s_accusative").innerHTML = word + "um";
		document.getElementById("s_genitive").innerHTML = word + "i";
		document.getElementById("s_dative").innerHTML = word + "o";
		document.getElementById("s_ablative").innerHTML = word + "o";

		document.getElementById("p_nominative").innerHTML = word + "i";
		document.getElementById("p_vocative").innerHTML = word + "i";
		document.getElementById("p_accusative").innerHTML = word + "os";
		document.getElementById("p_genitive").innerHTML = word + "orum";
		document.getElementById("p_dative").innerHTML = word + "is";
		document.getElementById("p_ablative").innerHTML = word + "is";
	    } else if (word.substr(-2) === "um") {
		document.getElementById("s_nominative").innerHTML = radic + "um";
		document.getElementById("s_vocative").innerHTML = radic + "um";
		document.getElementById("s_accusative").innerHTML = radic + "um";
		document.getElementById("s_genitive").innerHTML = radic + "i";
		document.getElementById("s_dative").innerHTML = radic + "o";
		document.getElementById("s_ablative").innerHTML = radic + "o";

		document.getElementById("p_nominative").innerHTML = radic + "a";
		document.getElementById("p_vocative").innerHTML = radic + "a";
		document.getElementById("p_accusative").innerHTML = radic + "a";
		document.getElementById("p_genitive").innerHTML = radic + "orum";
		document.getElementById("p_dative").innerHTML = radic + "is";
		document.getElementById("p_ablative").innerHTML = radic + "is";
	    } else {
		alert("Terminaison du nominatif non reconnue !");
	    }

	}

	function declination4(inword) {
	    var word = inword.toLowerCase();
	    var radic = word.substr(0, word.length - 2);
	    if (word.substr(-2) === "us" && word != "domus") {
		document.getElementById("s_nominative").innerHTML = radic + "us";
		document.getElementById("s_vocative").innerHTML = radic + "us";
		document.getElementById("s_accusative").innerHTML = radic + "um";
		document.getElementById("s_genitive").innerHTML = radic + "us";
		document.getElementById("s_dative").innerHTML = radic + "ui";
		document.getElementById("s_ablative").innerHTML = radic + "u";

		document.getElementById("p_nominative").innerHTML = radic + "us";
		document.getElementById("p_vocative").innerHTML = radic + "us";
		document.getElementById("p_accusative").innerHTML = radic + "us";
		document.getElementById("p_genitive").innerHTML = radic + "uum";
		document.getElementById("p_dative").innerHTML = radic + "ibus";
		document.getElementById("p_ablative").innerHTML = radic + "ibus";
	    } else if (word.substr(-1) === "u" && word != "domus") {
		document.getElementById("s_nominative").innerHTML = radic + "u";
		document.getElementById("s_vocative").innerHTML = radic + "u";
		document.getElementById("s_accusative").innerHTML = radic + "u";
		document.getElementById("s_genitive").innerHTML = radic + "us";
		document.getElementById("s_dative").innerHTML = radic + "ui";
		document.getElementById("s_ablative").innerHTML = radic + "u";

		document.getElementById("p_nominative").innerHTML = radic + "ua";
		document.getElementById("p_vocative").innerHTML = radic + "ua";
		document.getElementById("p_accusative").innerHTML = radic + "ua";
		document.getElementById("p_genitive").innerHTML = radic + "uum";
		document.getElementById("p_dative").innerHTML = radic + "ibus";
		document.getElementById("p_ablative").innerHTML = radic + "ibus";
	    } else if (word === "domus") {
		document.getElementById("s_nominative").innerHTML = radic + "us";
		document.getElementById("s_vocative").innerHTML = radic + "us";
		document.getElementById("s_accusative").innerHTML = radic + "um";
		document.getElementById("s_genitive").innerHTML = radic + "us";
		document.getElementById("s_dative").innerHTML = radic + "ui";
		document.getElementById("s_ablative").innerHTML = radic + "o";

		document.getElementById("p_nominative").innerHTML = radic + "us";
		document.getElementById("p_vocative").innerHTML = radic + "us";
		document.getElementById("p_accusative").innerHTML = radic + "os";
		document.getElementById("p_genitive").innerHTML = radic + "orum";
		document.getElementById("p_dative").innerHTML = radic + "ibus";
		document.getElementById("p_ablative").innerHTML = radic + "ibus";
	    } else {
		alert("Terminaison du nominatif non reconnue !\n (Si ce nom existe bel et bien, n'hésitez pas à le signaler !)");
	    }
	}

	function declination5(inradic) {
	    var radic = inradic.toLowerCase();
	    document.getElementById("s_nominative").innerHTML = radic + "es";
	    document.getElementById("s_vocative").innerHTML = radic + "es";
	    document.getElementById("s_accusative").innerHTML = radic + "em";
	    document.getElementById("s_genitive").innerHTML = radic + "ei";
	    document.getElementById("s_dative").innerHTML = radic + "ei";
	    document.getElementById("s_ablative").innerHTML = radic + "e";

	    document.getElementById("p_nominative").innerHTML = radic + "es";
	    document.getElementById("p_vocative").innerHTML = radic + "es";
	    document.getElementById("p_accusative").innerHTML = radic + "es";
	    document.getElementById("p_genitive").innerHTML = radic + "erum";
	    document.getElementById("p_dative").innerHTML = radic + "ebus";
	    document.getElementById("p_ablative").innerHTML = radic + "ebus";
	}


	function declination3(inword) {

	var word = inword.toLowerCase();
	var radic = word.substr(0, word.length - 2);
	var radic1 = word.substr(0, word.length - 1);
	if (word === "vis")
	{
	    document.getElementById("s_nominative").innerHTML = word;
	    document.getElementById("s_vocative").innerHTML = word;
	    document.getElementById("s_accusative").innerHTML = radic + "im";
	    document.getElementById("s_genitive").innerHTML = "-";
	    document.getElementById("s_dative").innerHTML = "-";
	    document.getElementById("s_ablative").innerHTML = radic + "i";

	    document.getElementById("p_nominative").innerHTML = radic + "ires";
	    document.getElementById("p_vocative").innerHTML = radic + "ires";
	    document.getElementById("p_accusative").innerHTML = radic + "ires";
	    document.getElementById("p_genitive").innerHTML = radic + "irium";
	    document.getElementById("p_dative").innerHTML = radic + "iribus";
	    document.getElementById("p_ablative").innerHTML = radic + "iribus";
	}
	else if (paterAndCo.indexOf(word) >= 0)
	{
	    document.getElementById("s_nominative").innerHTML = word;
	    document.getElementById("s_vocative").innerHTML = word;
	    document.getElementById("s_accusative").innerHTML = radic + "rem";
	    document.getElementById("s_genitive").innerHTML = radic + "ris";
	    document.getElementById("s_dative").innerHTML = radic + "ri";
	    document.getElementById("s_ablative").innerHTML = radic + "re";

	    document.getElementById("p_nominative").innerHTML = radic + "res";
	    document.getElementById("p_vocative").innerHTML = radic + "res";
	    document.getElementById("p_accusative").innerHTML = radic + "res";
	    document.getElementById("p_genitive").innerHTML = radic + "rum";
	    document.getElementById("p_dative").innerHTML = radic + "ribus";
	    document.getElementById("p_ablative").innerHTML = radic + "ribus";
	}
	else if (urbsAndCo.indexOf(word) >= 0)
	{
	    document.getElementById("s_nominative").innerHTML = word;
	    document.getElementById("s_vocative").innerHTML = word;
	    document.getElementById("s_accusative").innerHTML = radic1 + "em";
	    document.getElementById("s_genitive").innerHTML = radic1 + "is";
	    document.getElementById("s_dative").innerHTML = radic1 + "i";
	    document.getElementById("s_ablative").innerHTML = radic1 + "e";

	    document.getElementById("p_nominative").innerHTML = radic1 + "es";
	    document.getElementById("p_vocative").innerHTML = radic1 + "es";
	    document.getElementById("p_accusative").innerHTML = radic1 + "es";
	    document.getElementById("p_genitive").innerHTML = radic1 + "ium";
	    document.getElementById("p_dative").innerHTML = radic1 + "ibus";
	    document.getElementById("p_ablative").innerHTML = radic1 + "ibus";
	}
	else if (document.getElementById("list3").selectedIndex == 0)
		{
			document.getElementById("s_nominative").innerHTML = radic + "is";
			document.getElementById("s_vocative").innerHTML = radic + "is";
			document.getElementById("s_accusative").innerHTML = radic + "em";
			document.getElementById("s_genitive").innerHTML = radic + "is";
			document.getElementById("s_dative").innerHTML = radic + "i";
			document.getElementById("s_ablative").innerHTML = radic + "e";

			document.getElementById("p_nominative").innerHTML = radic + "es";
			document.getElementById("p_vocative").innerHTML = radic + "es";
			document.getElementById("p_accusative").innerHTML = radic + "es";
			document.getElementById("p_genitive").innerHTML = radic + "ium";
			document.getElementById("p_dative").innerHTML = radic + "ibus";
			document.getElementById("p_ablative").innerHTML = radic + "ibus";
		}
		else if (document.getElementById("list3").selectedIndex == 1)
			{
			document.getElementById("s_nominative").innerHTML = word;
			document.getElementById("s_vocative").innerHTML = word;
			document.getElementById("s_accusative").innerHTML = word + "em";
			document.getElementById("s_genitive").innerHTML = word + "is";
			document.getElementById("s_dative").innerHTML = word + "i";
			document.getElementById("s_ablative").innerHTML = word + "e";

			document.getElementById("p_nominative").innerHTML = word + "es";
			document.getElementById("p_vocative").innerHTML = word + "es";
			document.getElementById("p_accusative").innerHTML = word + "es";
			document.getElementById("p_genitive").innerHTML = word + "um";
			document.getElementById("p_dative").innerHTML = word + "ibus";
			document.getElementById("p_ablative").innerHTML = word + "ibus";
			}
	/*else if (word.substr(-2) === "is" && febrisAndCo.indexOf(word) < 0 && paterAndCo.indexOf(word) < 0)
	{
	    document.getElementById("s_nominative").innerHTML = radic + "is";
	    document.getElementById("s_vocative").innerHTML = radic + "is";
	    document.getElementById("s_accusative").innerHTML = radic + "em";
	    document.getElementById("s_genitive").innerHTML = radic + "is";
	    document.getElementById("s_dative").innerHTML = radic + "i";
	    document.getElementById("s_ablative").innerHTML = radic + "e";

	    document.getElementById("p_nominative").innerHTML = radic + "es";
	    document.getElementById("p_vocative").innerHTML = radic + "es";
	    document.getElementById("p_accusative").innerHTML = radic + "es";
	    document.getElementById("p_genitive").innerHTML = radic + "ium";
	    document.getElementById("p_dative").innerHTML = radic + "ibus";
	    document.getElementById("p_ablative").innerHTML = radic + "ibus";
	}
	else if (word.substr(-2) === "ul")
	{
	    document.getElementById("s_nominative").innerHTML = word;
	    document.getElementById("s_vocative").innerHTML = word;
	    document.getElementById("s_accusative").innerHTML = word + "em";
	    document.getElementById("s_genitive").innerHTML = word + "is";
	    document.getElementById("s_dative").innerHTML = word + "i";
	    document.getElementById("s_ablative").innerHTML = word + "e";

	    document.getElementById("p_nominative").innerHTML = word + "es";
	    document.getElementById("p_vocative").innerHTML = word + "es";
	    document.getElementById("p_accusative").innerHTML = word + "es";
	    document.getElementById("p_genitive").innerHTML = word + "um";
	    document.getElementById("p_dative").innerHTML = word + "ibus";
	    document.getElementById("p_ablative").innerHTML = word + "ibus";
	}
	else if (word.substr(-2) === "us")
	{
	    document.getElementById("s_nominative").innerHTML = word;
	    document.getElementById("s_vocative").innerHTML = word;
	    document.getElementById("s_accusative").innerHTML = word;
	    document.getElementById("s_genitive").innerHTML = radic + "oris";
	    document.getElementById("s_dative").innerHTML = radic + "ori";
	    document.getElementById("s_ablative").innerHTML = radic + "ore";

	    document.getElementById("p_nominative").innerHTML = radic + "ora";
	    document.getElementById("p_vocative").innerHTML = radic + "ora";
	    document.getElementById("p_accusative").innerHTML = radic + "ora";
	    document.getElementById("p_genitive").innerHTML = radic + "orum";
	    document.getElementById("p_dative").innerHTML = radic + "oribus";
	    document.getElementById("p_ablative").innerHTML = radic + "oribus";
	}
	else if (word.substr(-2) === "al") {
	    document.getElementById("s_nominative").innerHTML = word;
	    document.getElementById("s_vocative").innerHTML = word;
	    document.getElementById("s_accusative").innerHTML = word;
	    document.getElementById("s_genitive").innerHTML = word + "is";
	    document.getElementById("s_dative").innerHTML = word + "i";
	    document.getElementById("s_ablative").innerHTML = word + "i";

	    document.getElementById("p_nominative").innerHTML = word + "ia";
	    document.getElementById("p_vocative").innerHTML = word + "ia";
	    document.getElementById("p_accusative").innerHTML = word + "ia";
	    document.getElementById("p_genitive").innerHTML = word + "ium";
	    document.getElementById("p_dative").innerHTML = word + "ibus";
	    document.getElementById("p_ablative").innerHTML = word + "ibus";
	}*/
	else if (febrisAndCo.indexOf(word) >= 0) {
	    document.getElementById("s_nominative").innerHTML = word;
	    document.getElementById("s_vocative").innerHTML = word;
	    document.getElementById("s_accusative").innerHTML = radic + "im";
	    document.getElementById("s_genitive").innerHTML = radic + "is";
	    document.getElementById("s_dative").innerHTML = radic + "i";
	    document.getElementById("s_ablative").innerHTML = radic + "i";

	    document.getElementById("p_nominative").innerHTML = radic + "es";
	    document.getElementById("p_vocative").innerHTML = radic + "es";
	    document.getElementById("p_accusative").innerHTML = radic + "es";
	    document.getElementById("p_genitive").innerHTML = radic + "ium";
	    document.getElementById("p_dative").innerHTML = radic + "ibus";
	    document.getElementById("p_ablative").innerHTML = radic + "ibus";
	}
	else if (word.substr(-1) === "e") {
	    document.getElementById("s_nominative").innerHTML = radic1 + "e";
	    document.getElementById("s_vocative").innerHTML = radic1 + "e";
	    document.getElementById("s_accusative").innerHTML = radic1 + "e";
	    document.getElementById("s_genitive").innerHTML = radic1 + "is";
	    document.getElementById("s_dative").innerHTML = radic1 + "i";
	    document.getElementById("s_ablative").innerHTML = radic1 + "i";

	    document.getElementById("p_nominative").innerHTML = radic1 + "ia";
	    document.getElementById("p_vocative").innerHTML = radic1 + "ia";
	    document.getElementById("p_accusative").innerHTML = radic1 + "ia";
	    document.getElementById("p_genitive").innerHTML = radic1 + "ium";
	    document.getElementById("p_dative").innerHTML = radic1 + "ibus";
	    document.getElementById("p_ablative").innerHTML = radic1 + "ibus";

	}
	}

	function decline() {
	    var word = document.getElementById("latinW").value.split(",")[0].trim().toLowerCase();
	    if (document.getElementById("latinW").value.split(",")[1] == null)
	    {
		alert("Le génitif doit être indiqué ! (ex: rosa, ae)");
	    }
	    else {
	    var genitive = document.getElementById("latinW").value.split(",")[1].trim().toLowerCase();
	    if (genitive === "ae") {
		declination1(word.substr(0, word.length - 1));
	    } else if (genitive === "i") {
		declination2(word);
	    } else if (genitive === "us") {
		declination4(word);
	    } else if (genitive === "ei") {
		declination5(word.substr(0, word.length - 2));
	    } else if (genitive === "is") {
		declination3(word);
	    } else {
		alert("Décliaison non reconnue !");
	    }
	    }
	}

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
    if (inradic == "respublic") {
        document.getElementById("s_nominative").innerHTML = "respublica";
        document.getElementById("s_vocative").innerHTML = "respublica";
        document.getElementById("s_accusative").innerHTML = "rempublicam";
        document.getElementById("s_genitive").innerHTML = "reipublicae";
        document.getElementById("s_dative").innerHTML = "reipublicae";
        document.getElementById("s_ablative").innerHTML = "republica";

        document.getElementById("p_nominative").innerHTML = "respublicae";
        document.getElementById("p_vocative").innerHTML = "respublicae";
        document.getElementById("p_accusative").innerHTML = "respublicas";
        document.getElementById("p_genitive").innerHTML = "rerumpublicarum";
        document.getElementById("p_dative").innerHTML = "rebuspublicis";
        document.getElementById("p_ablative").innerHTML = "rebuspublicis";
    }
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
    if (word === "virus") {
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
    } else if (word.substr(-2) === "us") {
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

function declination3(inword, ingenitive, gender) {
    var nounType = document.getElementById("list3").selectedIndex;
    var radic = ingenitive.substr(0, ingenitive.length - 2);

    if (inword == "vis") {
        document.getElementById("s_nominative").innerHTML = "vis";
        document.getElementById("s_vocative").innerHTML = "vis";
        document.getElementById("s_accusative").innerHTML = "vim";
        document.getElementById("s_genitive").innerHTML = "-";
        document.getElementById("s_dative").innerHTML = "-";
        document.getElementById("s_ablative").innerHTML = "vi";

        document.getElementById("p_nominative").innerHTML = "vires";
        document.getElementById("p_vocative").innerHTML = "vires";
        document.getElementById("p_accusative").innerHTML = "vires";
        document.getElementById("p_genitive").innerHTML = "virium";
        document.getElementById("p_dative").innerHTML = "viribus";
        document.getElementById("p_ablative").innerHTML = "viribus";
    } else if (nounType == 0 && gender == "m" || gender == "f") {
        document.getElementById("s_nominative").innerHTML = inword;
        document.getElementById("s_vocative").innerHTML = inword;
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
    } else if (nounType == 0 && gender == "n") {
        document.getElementById("s_nominative").innerHTML = inword;
        document.getElementById("s_vocative").innerHTML = inword;
        document.getElementById("s_accusative").innerHTML = inword;
        document.getElementById("s_genitive").innerHTML = radic + "is";
        document.getElementById("s_dative").innerHTML = radic + "i";
        document.getElementById("s_ablative").innerHTML = radic + "i";

        document.getElementById("p_nominative").innerHTML = radic + "ia";
        document.getElementById("p_vocative").innerHTML = radic + "ia";
        document.getElementById("p_accusative").innerHTML = radic + "ia";
        document.getElementById("p_genitive").innerHTML = radic + "ium";
        document.getElementById("p_dative").innerHTML = radic + "ibus";
        document.getElementById("p_ablative").innerHTML = radic + "ibus";
    } else if (nounType == 1 && gender == "m" || gender == "f") {
        document.getElementById("s_nominative").innerHTML = inword;
        document.getElementById("s_vocative").innerHTML = inword;
        document.getElementById("s_accusative").innerHTML = radic + "em";
        document.getElementById("s_genitive").innerHTML = radic + "is";
        document.getElementById("s_dative").innerHTML = radic + "i";
        document.getElementById("s_ablative").innerHTML = radic + "e";

        document.getElementById("p_nominative").innerHTML = radic + "es";
        document.getElementById("p_vocative").innerHTML = radic + "es";
        document.getElementById("p_accusative").innerHTML = radic + "es";
        document.getElementById("p_genitive").innerHTML = radic + "um";
        document.getElementById("p_dative").innerHTML = radic + "ibus";
        document.getElementById("p_ablative").innerHTML = radic + "ibus";
    } else if (nounType == 1 && gender == "n") {
        document.getElementById("s_nominative").innerHTML = inword;
        document.getElementById("s_vocative").innerHTML = inword;
        document.getElementById("s_accusative").innerHTML = inword;
        document.getElementById("s_genitive").innerHTML = radic + "is";
        document.getElementById("s_dative").innerHTML = radic + "i";
        document.getElementById("s_ablative").innerHTML = radic + "e";

        document.getElementById("p_nominative").innerHTML = radic + "a";
        document.getElementById("p_vocative").innerHTML = radic + "a";
        document.getElementById("p_accusative").innerHTML = radic + "a";
        document.getElementById("p_genitive").innerHTML = radic + "um";
        document.getElementById("p_dative").innerHTML = radic + "ibus";
        document.getElementById("p_ablative").innerHTML = radic + "ibus";
    } else if (nounType == 2 && gender == "m" || gender == "f") {
        document.getElementById("s_nominative").innerHTML = inword;
        document.getElementById("s_vocative").innerHTML = inword;
        document.getElementById("s_accusative").innerHTML = radic + "em";
        document.getElementById("s_genitive").innerHTML = radic + "is";
        document.getElementById("s_dative").innerHTML = radic + "i";
        document.getElementById("s_ablative").innerHTML = radic + "e";

        document.getElementById("p_nominative").innerHTML = radic + "es";
        document.getElementById("p_vocative").innerHTML = radic + "es";
        document.getElementById("p_accusative").innerHTML = radic + "es";
        document.getElementById("p_genitive").innerHTML = radic + "um";
        document.getElementById("p_dative").innerHTML = radic + "ibus";
        document.getElementById("p_ablative").innerHTML = radic + "ibus";
    } else if (nounType == 2 && gender == "n") {
        alert("Il n'existe pas de faux parisyllabiques neutres !");
    } else if (nounType == 3 && gender == "m" || gender == "f") {
        document.getElementById("s_nominative").innerHTML = inword;
        document.getElementById("s_vocative").innerHTML = inword;
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
    } else if (nounType == 3 && gender == "n") {
        document.getElementById("s_nominative").innerHTML = inword;
        document.getElementById("s_vocative").innerHTML = inword;
        document.getElementById("s_accusative").innerHTML = inword;
        document.getElementById("s_genitive").innerHTML = radic + "is";
        document.getElementById("s_dative").innerHTML = radic + "i";
        document.getElementById("s_ablative").innerHTML = radic + "i";

        document.getElementById("p_nominative").innerHTML = radic + "ia";
        document.getElementById("p_vocative").innerHTML = radic + "ia";
        document.getElementById("p_accusative").innerHTML = radic + "ia";
        document.getElementById("p_genitive").innerHTML = radic + "ium";
        document.getElementById("p_dative").innerHTML = radic + "ibus";
        document.getElementById("p_ablative").innerHTML = radic + "ibus";
    } else if (febrisAndCo.indexOf(inword) >= 0) {
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
}

function decline() {
    var word = document.getElementById("latinW").value.split(",")[0].trim().toLowerCase();
    if (word == "vis")
        declination3(word, "", "");
    else {
        if (document.getElementById("latinW").value.split(",")[1] == null) {
            alert("Le génitif doit être indiqué ! (ex: rosa, ae)");
        } else {
            var genitive = document.getElementById("latinW").value.split(",")[1].trim().toLowerCase().substr(-2);
            if (genitive === "ae") {
                declination1(word.substr(0, word.length - 1));
            } else if (genitive === "i") {
                declination2(word);
            } else if (genitive === "us") {
                declination4(word);
            } else if (genitive === "ei") {
                declination5(word.substr(0, word.length - 2));
            } else if (genitive === "is") {
                if (document.getElementById("latinW").value.split(",")[1].trim().length <= 2) {
                    alert("Le génitif doit être indiqué en entier pour la 3ème déclinaison !");
                }
                if (document.getElementById("latinW").value.split(",")[2] == null) {
                    alert("Le genre doit être indiqué pour la 3ème déclinaison !");
                }
                var gender = document.getElementById("latinW").value.split(",")[2].trim().toLowerCase();
                if (gender != "m" && gender != "n" && gender != "f") {
                    alert("Le genre doit être sous la forme de 'n','m' ou 'f' !");
                }
                declination3(word, document.getElementById("latinW").value.split(",")[1].trim().toLowerCase(),
                    gender);
            } else {
                alert("Décliaison non reconnue !");
            }
        }
    }
}

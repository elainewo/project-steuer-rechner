let input = document.getElementById("betrag");
input.onchange = function () {
  let output = document.getElementById("ergebnis");
  output.value = "";
};

let jahr = document.getElementById("years");
jahr.onchange = function () {
  let output = document.getElementById("ergebnis");
  output.value = "";
};

let person = document.getElementById("pers");
person.onchange = function () {
  let output = document.getElementById("ergebnis");
  output.value = "";
};

function pers1of20() {
  x = document.getElementById("betrag").value;

  if (x <= 9408) {
    document.getElementById("ergebnis").value += 0;
  } else if (x > 9408 && x <= 14532) {
    y = (x - 9408) / 10000;
    ESt = (972.87 * y + 1400) * y;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  } else if (x > 14532 && x <= 57051) {
    z = (x - 14532) / 10000;
    ESt = (212.02 * z + 2397) * z + 972.79;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  } else if (x > 57051 && x <= 270500) {
    ESt = 0.42 * x - 8963.74;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  } else if (x > 270500) {
    ESt = 0.42 * x - 17078.74;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  }
}

function pers2of20() {
  x = document.getElementById("betrag").value;
  a = x / 2;

  if (a <= 9408) {
    document.getElementById("ergebnis").value += 0;
  } else if (a > 9408 && a <= 14532) {
    y = (a - 9408) / 10000;
    ESt = (972.87 * y + 1400) * y;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  } else if (a > 14532 && a <= 57051) {
    z = (a - 14532) / 10000;
    ESt = (212.02 * z + 2397) * z + 972.79;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  } else if (a > 57051 && a <= 270500) {
    ESt = 0.42 * a - 8963.74;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  } else if (a > 270500) {
    ESt = 0.42 * a - 17078.74;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  }
}

function pers1of19() {
  x = document.getElementById("betrag").value;

  if (x <= 9168) {
    document.getElementById("ergebnis").value += 0;
  } else if (x > 9168 && x <= 14254) {
    y = (x - 9168) / 10000;
    ESt = (980.14 * y + 1400) * y;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  } else if (x > 14254 && x <= 55960) {
    z = (x - 14254) / 10000;
    ESt = (216.16 * z + 2397) * z + 965.58;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  } else if (x > 55960 && x <= 265326) {
    ESt = 0.42 * x - 8780.9;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  } else if (x > 265326) {
    ESt = 0.45 * x - 16740.68;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  }
}

function pers2of19() {
  x = document.getElementById("betrag").value;
  a = x / 2;

  if (a <= 9168) {
    document.getElementById("ergebnis").value += 0;
  } else if (a > 9168 && a <= 14254) {
    y = (a - 9168) / 10000;
    ESt = (980.14 * y + 1400) * y;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  } else if (a > 14254 && a <= 55960) {
    z = (a - 14254) / 10000;
    ESt = (216.16 * z + 2397) * z + 965.58;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  } else if (a > 55960 && a <= 265326) {
    ESt = 0.42 * a - 8780.9;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  } else if (a > 265326) {
    ESt = 0.45 * a - 16740.68;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  }
}

function pers1of18() {
  x = document.getElementById("betrag").value;

  if (x <= 9000) {
    document.getElementById("ergebnis").value += 0;
  } else if (x > 9001 && x <= 13996) {
    y = (x - 9000) / 10000;
    ESt = (997.8 * y + 1400) * y;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  } else if (x > 13996 && x <= 54949) {
    z = (x - 13996) / 10000;
    ESt = (220.13 * z + 2397) * z + 948.49;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  } else if (x > 54949 && x <= 260532) {
    ESt = 0.42 * x - 8621.75;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  } else if (x > 260532) {
    ESt = 0.45 * x - 16437.7;
    document.getElementById("ergebnis").value += Math.floor(ESt) + ".00";
  }
}

function pers2of18() {
  x = document.getElementById("betrag").value;
  a = x / 2;

  if (a <= 9000) {
    document.getElementById("ergebnis").value += 0;
  } else if (a > 9001 && a <= 13996) {
    y = (a - 9000) / 10000;
    ESt = (997.8 * y + 1400) * y;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  } else if (a > 13996 && a <= 54949) {
    z = (a - 13996) / 10000;
    ESt = (220.13 * z + 2397) * z + 948.49;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  } else if (a > 54949 && a <= 260532) {
    ESt = 0.42 * a - 8621.75;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  } else if (a > 260532) {
    ESt = 0.45 * a - 16437.7;
    for2 = ESt * 2;
    document.getElementById("ergebnis").value += Math.floor(for2) + ".00";
  }
}

function combo() {
  let x = document.getElementById("years").selectedIndex;
  let y = document.getElementById("pers").selectedIndex;
  if (x == 0 && y == 0) {
    pers1of20();
  } else if (x == 0 && y == 1) {
    pers2of20();
  } else if (x == 1 && y == 0) {
    pers1of19();
  } else if (x == 1 && y == 1) {
    pers2of19();
  } else if (x == 2 && y == 0) {
    pers1of18();
  } else if (x == 2 && y == 1) {
    pers2of18();
  }
  event.preventDefault();
}

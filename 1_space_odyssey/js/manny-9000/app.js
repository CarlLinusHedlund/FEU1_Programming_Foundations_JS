const bootUpManny9000 = () => {
  let manny9000 = {
    isAlive: true,
    name: "hello ",
    hasJetPack: undefined,
    suitColor: "Chrome",
    eyes: 2,
    eyeColor: "brown",
    hairColor: "black",
    legs: 2,
    arms: 2,
    hands: 2,
    ears: 2,
    canWalk: true,
    canRun: true,
    canFly: true,
    hasWeapon: true,
    isInGoodMood: true,
    changeMyName: function(paramName) {
      this.name = paramName
    }
  };
  return manny9000;
};





















const alienSpaceCraft = () => {
  console.log("\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::");

  let enemyCraft = true;
  let photonLaser = true;
  let photonLaserEnabled = true;
  let bullets = 100;

  if (enemyCraft && photonLaser && photonLaserEnabled) {
    if (bullets >= 100) {
      bullets = i;
      for (let i = 0; i < 100; i++) {
        console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!");
      }
    } else {
      console.log("\u{1F9E8} DEAD \u{1F9E8} ");
    }
  }
};

const lunarLanding = () => {
  console.log("\u{1F311} LUNAR LANDING:::::");

  var lunarRadar = {
    isEnabled: undefined,
    long: undefined,
    lat: undefined,
    approachSpeed: undefined // "ft per minute"
  };

  lunarRadar.approachSpeed = 240;
  lunarRadar.lat = 20;
  lunarRadar.long = 10;
  lunarRadar.isEnabled = true;

  if (
    lunarRadar.isEnabled === true &&
    lunarRadar.lat !== undefined &&
    lunarRadar.long !== undefined
  ) {
    console.log(
      "\u{1F91F} looking good " +
        name +
        " we are making our descent, now entering approach speed"
    );
    if (lunarRadar.approachSpeed >= 200 && lunarRadar.approachSpeed < 299) {
      console.log(
        "\u{269B} well done " +
          name +
          " we have touched down safely. Lets get some samples and get heck outta here!"
      );
    } else if (lunarRadar.approachSpeed >= 300) {
      console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
    } else if (lunarRadar.approachSpeed >= 400) {
      console.log(
        "\u{1F627} coming in way too hot " + name + " decrease pitch!"
      );
    } else if (lunarRadar.approachSpeed >= 500) {
      console.log(
        "\u{1F627} coming in way too hot " + name + " decrease pitch!"
      );
    } else if (lunarRadar.approachSpeed >= 600) {
      console.log(
        "\u{1F627} coming in way too hot " + name + " decrease pitch!"
      );
    } else if (lunarRadar.approachSpeed <= 100) {
      console.log(
        "\u{1F47D} hmmm need a bit more heat " +
          name +
          " lets increase pitch and we should have a smooth landing"
      );
    } else {
      console.log(
        "\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " +
          name +
          " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance."
      );
    }
  } else {
    console.log("Please enter an approach speed");
  }
};

const enableJetPack = pressed => {
  var hasJetPack;
  return (hasJetPack = pressed);
};

const spaceWalk = turnJetPackOn => {
  // pass in a function into this function
  console.log(
    " \u{2747} BROKEN SATELLITE:::::: \u{2747} \u{2747} \u{2747} \u{2747}"
  );

  if (turnJetPackOn) {
    console.log("JetPack is enabled!!! off I go outside to fix the satellite");
  } else {
    console.log(
      "JetPack NOT enabled, please enable jetPack before doing a space walk"
    );
  }
};

const meteorShower = () => {
  console.log("\u{1F327} METEOR SHOWER::::::");

  var responses = [
    "Call basecamp and ask for assistance, but they are far away",
    "Do nothing, just push through",
    "initiate core thrusters, punch 180degrees into dash-nav and warp away from danger",
    "ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
  ];

  var numResponses = responses.length;
  for (var i = 0; i <= numResponses; i++) {
    if (responses[i] === responses[2]) {
      console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");
    }
  }
};

const planetaryDashBoard = () => {
  console.log("\u{1F319} PLANETARY INFO-DASH:::::");

  var planets = [
    [
      "MERCURY",
      [
        "The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.",
        "-173 to 427°C",
        "330,104,000,000,000 billion kg (0.055 x Earth)"
      ]
    ],
    [
      "JUPITER",
      [
        "Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.",
        "-108°C",
        "1,898,130,000,000,000,000 billion kg (317.83 x Earth)"
      ]
    ],
    [
      "EARTH",
      [
        "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.",
        "110 degrees Fahrenheit / 48 degrees Celsius, and the lowest around -126 degrees Fahrenheit / -88 degrees Celsius, maybe even lower",
        "6.6 sextillion tons"
      ]
    ],
    [
      "MARS",
      [
        "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.",
        "87 to -5 °C",
        "641,693,000,000,000 billion kg (0.107 x Earth)"
      ]
    ]
  ];

  planets.unshift(
    [
      "NEPTUNE",
      [
        "Neptune is the fourth largest and the farthest planet of the Solar System with the most powerful wind speeds out of all the planets. It is the smallest of the gas giants and is the first planet to be discovered by mathematical predictions in 1846.",
        "-201°C",
        "102,410,000,000,000,000 billion kg (17.15x Earth)"
      ]
    ],
    [
      "VENUS",
      [
        "The second planet from the Sun and the sixth largest. Together with Mercury, they are the only planets without a satellite, even though Mercury is closer to the sun, Venus is the hottest planet.",
        "462° C",
        "4,867,320,000,000,000 billion kg (0.815 x Earth)"
      ]
    ]
  );

  console.group(planets[0][0]); // Neptune.
  console.log("Description:", planets[0][1][0]);
  console.log("Surface temperature:", planets[0][1][1]);
  console.log("Mass:", planets[0][1][2]);
  console.groupEnd();

  console.group(planets[1][0]); // Venus.
  console.log("Description:", planets[1][1][0]);
  console.log("Surface temperature:", planets[1][1][1]);
  console.log("Mass:", planets[1][1][2]);
  console.groupEnd();

  console.group(planets[2][0]); // Mercury.
  console.log("Description:", planets[2][1][0]);
  console.log("Surface temperature:", planets[2][1][1]);
  console.log("Mass:", planets[2][1][2]);
  console.groupEnd();

  console.group(planets[3][0]); // Jupiter.
  console.log("Description:", planets[3][1][0]);
  console.log("Surface temperature:", planets[3][1][1]);
  console.log("Mass:", planets[3][1][2]);
  console.groupEnd();

  console.group(planets[4][0]); // Earth.
  console.log("Description:", planets[4][1][0]);
  console.log("Surface temperature:", planets[4][1][1]);
  console.log("Mass:", planets[4][1][2]);
  console.groupEnd();

  console.group(planets[5][0]); // Mars.
  console.log("Description:", planets[5][1][0]);
  console.log("Surface temperature:", planets[5][1][1]);
  console.log("Mass:", planets[5][1][2]);
  console.groupEnd();
};

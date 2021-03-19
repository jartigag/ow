import { MapNode, MapNodeSize, PlanetColour } from './types';

const nodes: MapNode[] = [
  {
    id: 'alignment-angle-diagram',
    name: 'Alignment Angle Diagram',
    image: 'BH_WARP_ALIGNMENT_MAP.png',
    logs: [
      'A diagram depicting the alignment angle between a warp tower and its corresponding astral body.',
      'Warp tower alignment angles are not exact. They only need to be within five degress of the astral body’s center.',
      'This results in slightly longer warp windows that last roughly several seconds.',
      'Anyone stepping onto the warp platform during the active window will be immediately warped.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'anglerfish-fossil',
    name: 'Anglerfish Fossil',
    image: 'CT_ANGLERFISH_FOSSIL.png',
    logs: [
      'Nomai children used to play a game here. One player was the anglerfish and wore a blindfold. The rest of the children (the littlefish) lined up against one wall. When the anglerfish said go, the littleifish had to sneak across to the other side.',
      'The blindfold rule was added because real anglerfish are blind.',
      'The adult Nomai were delighted to see the children incorporate their research into the game’s rules.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'ash-twin-project',
    name: 'Ash Twin Project',
    image: 'TT_TIME_LOOP_DEVICE.png',
    logs: [
      'A hollowed-out chamber inside Ash Twin. The energy cables from the surface are plugged into a protective casing at the center of the planet.',
      'There are eight monoliths with Nomai masks attached. Three of the masks are actively receiving data from the Probe Tracking Module, Giant’s Deep, and Timber Hearth respectively.',
      'The Ash Twin Project was designed to use the energy from a supernova (triggered by the Sun Station) to send probe data from the Orbital Probe Canon 22 minutes into the past.',
      'The Sun Station did not work. Although the Ash Twin Project was theoretically sound, the Nomai were unable to power it.',
      'There is an advanced warp core inside the protective casing at the center of the planet. Removing the core will disable the Ash Twin Project.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.LARGE,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'ash-twin-towers',
    name: 'Ash Twin Towers',
    image: 'TT_WARP_TOWERS.png',
    logs: [
      'Several large Nomai towers form a ring around Ash Twin’s equator.',
      'The White Hole Station was used as a model for these towers, which were buolt for the Ash Twin Project.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'ash-twin-tower-designs',
    name: 'Ash Twin Tower Designs',
    image: 'CT_WARP_TOWER_MAP.png',
    logs: [
      'Designs for each of the towers in Ash Twin’s equator.',
      'Each tower warps to a different planet (although many Nomai were quick to note that the sun is not actually a planet).',
      'Each tower was designed to visually reflect its warp destination.',
      'The towers allowed the Nomai to quickly travel between Ash Twin and all other locations crucial to the Ash Twin Project.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.XSMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'black-hole-forge',
    name: 'Black Hole Forge',
    image: 'BH_BLACK_HOLE_FORGE.png',
    logs: [
      'A warp tower’s alignment point is not its warp receiver. Rather, a warp tower always aligns with the center of its corresponding astral body.',
      'The warp receiver must be located on (or in close orbit around) the relevant astral body.',
      'The Hourglass Twins are so close together they function as a single astral body, with a shared alignment point in between them.',
      'All of the warp towers were being constructed on Ash Twin, while the six warp receivers were being constructed at different locations.',
      'A Nomai named Poke successfully forged an advanced warp core for the Ash Twin Project.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'bramble-island',
    name: 'Bramble Island',
    image: 'GD_BRAMBLE_ISLAND.png',
    logs: [
      'An island of thorny vines and what appears to be a frozen jellyfish. It looks like Feldspar camped here before heading off to Dark Bramble.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "chert's-camp",
    name: 'Chert’s Camp',
    image: "CT_CHERTS_CAMP.png",
    logs: [
      'Chert has set up their astronomy gear on the north pole of Ember Twin.',
      'Cher has spotted an unusually high number of supernovae recently.',
      'All of the stars in the universe are dying, including our own sun.',
      'The stars are simply dying from old age. Apparently they’re much older than we realized.',
      'Chert has become catatonic in response to our sun’s imminent death.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'construction-yard',
    name: 'Construction Yard',
    image: 'GD_CONSTRUCTION_YARD.png',
    logs: [
      'This island is where the Nomai built the Orbital Probe Cannon.',
      'For some reason, the Nomai put the Orbital Probe Cannon on indefinite hiatus. The cannon was not asked to fire.',
      'According to a Nomai computer, a long-range probe was recently launched from the Orbital Probe Cannon.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'control-module',
    name: 'Control Module',
    image: 'OPC_INTACT_MODULE.png',
    logs: [
      'The Control Module (recently) received a request from the Ash Twin Project to launch the probe. The Cannon was aligned with a randomly selected probe trajectory.',
      'The Probe was successfully launched, but the cannon’s structural integrity was compromised in the process. Damage is deteced in multiple modules.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.XSMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'dark-bramble-seed',
    name: 'Dark Bramble Seed',
    image: 'TH_IMPACT_CRATER.png',
    logs: [
      'A seed from Dark Bramble crashed here and has already taken root. Tektite wants to use a scout launcher to get a look at what’s inside.',
      'My signalscope picks up harmonica music when I aim it at the seed.',
      'I launched my Little Scout into the seed. Somehow the seed is much bigger on the inside.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'escape-pod-1',
    name: 'Escape Pod 1',
    image: 'BH_ESCAPE_POD.png',
    logs: [
      'One of three Nomai escape pods that crashed in our solar system.',
      'All three escape pods were launched from something called the Vessel, which was badly damaged.',
    ],
    colour: PlanetColour.RED,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'escape-pod-2',
    name: 'Escape Pod 2',
    image: 'CT_ESCAPE_POD.png',
    logs: [
      'One of three Nomai escape pods that crashed in our solar system.',
      'All three escape pods were launched from something called the Vessel, which was badly damaged.',
    ],
    colour: PlanetColour.RED,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'escape-pod-3',
    name: 'Escape Pod 3',
    image: 'DB_ESCAPE_POD.png',
    logs: [
      'One of three Nomai escape pods that crashed in our solar system.',
      'All three escape pods were launched from something called the Vessel, which was badly damaged.',
      'The survivors from Escape Pod 3 detected two distinct beacons from the Vessel, as if it was in two locations at once.',
    ],
    colour: PlanetColour.RED,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "esker's-camp",
    name: 'Esker’s Camp',
    image: "TM_ESKER.png",
    logs: [
      'Esker is growing a crop of trees at their camp. They seemed to be doing ok, but they’ve probably been alone on the moon for too long.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'eye-signal-locator',
    name: 'Eye Signal Locator',
    image: 'TM_EYE_LOCATOR.png',
    logs: [
      'A Nomai device created to pinpoint the sources of distant signals.',
      'The Nomai were disappointed by their failure to detect a signal from something called the Eye of the universe.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "feldspar's-camp",
    name: 'Feldspar’s Camp',
    image: "DB_FELDSPAR.png",
    logs: [
      'Feldspar is alive! They crashed their ship and is now camping inside a huge anglerfish skeleton.',
      'Feldspar doesn’t think my scout tracker is wrong when it says my scout is in two places at once. They have a theory that space doesn’t work the same inside Dark Bramble.',
      'Feldspar doesn’t sound overly eager to return to civilization. They’ve been enjoying the (relative) peace and quiet.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'frozen-jellyfish',
    name: 'Frozen Jellyfish',
    image: 'DB_FROZEN_JELLYFISH.png',
    logs: [
      'Feldspar documented their attempts to eat this enormous jellyfish frozen in the ice. The outside was all rubbery and tough, possibly because it insulates the jellyfish’s insides from getting zapped by electricity.',
      'Feldspar decided to venture into the jellyfish’s interior cavity to see if it tasted any better on the inside.',
      'After tasting the inside of the jellyfish, Feldspar concluded that these jellyfish are only useful for insulation from electricity.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'frozen-nomai-shuttle',
    name: 'Frozen Nomai Shuttle',
    image: 'COMET_SHUTTLE_ALT.png',
    logs: [
      'I found a Nomai shuttle almost completely encase in ice.',
      'The Nomai landed on the Interloper not longer after its arrival in the solar system. The shuttle’s equipment heard strange energy readings coming from somewhere beneath the surface.',
      'There were three Nomai aboard the shuttle. One of them stayed behind to keep the shuttle warm while the other two explored the Interloper.',
      'Clary, the Nomai who stayed behind, lost contact with the other two after they descended below the Interloper’s surface.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "gabbro's-island",
    name: 'Gabbro’s Island',
    image: "GD_GABBRO_ISLAND.png",
    logs: [
      'Gabbro is lounging in a hammock near the island’s shore.',
      'Gabbro found a Nomai statue on another island. The staute’s eyes started glowing and Gabbro saw their memories flash before their eyes.',
      'Gabbro remembers dying. They saw their memories flash before their eyes, just like the time with the statue.',
      'Gabbro and I seem to be the only ones aware that we’re in a time loop.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'gravity-cannon',
    name: 'Gravity Cannon',
    image: 'CT_GRAVITY_CANNON.png',
    logs: [
      'A huge cylindrical structure that generates a strong upward gravity field.',
      'I recalled a Nomai shuttle from the Quantum Moon.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'gravity-cannon',
    name: 'Gravity Cannon',
    image: 'BH_GRAVITY_CANNON.png',
    logs: [
      'A huge cylindrical structure that generates a strong upward gravity field.',
      'I recalled a Nomai shuttle from the Interloper.',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'the-hanging-city',
    name: 'The Hanging City',
    image: 'BH_HANGING_CITY.png',
    logs: [
      'A Nomai city suspended beneath Brittle Hollow’s northern glacier. The city is divided vertically into four districts.',
      'I found a switch in the Meltwater District that raises and lowers the Black Hole Forge.',
      'The Nomai debated how to obtain the powerful, highly advanced warp core required for the Ash Twin Project.',
      'The Nomai traveled to this solar system in pursuit of a signal from something older than the universe itself. They named the source of this signal the “Eye of the universe.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'high-energy-lab',
    name: 'High Energy Lab',
    image: 'CT_HIGH_ENERGY_LAB.png',
    logs: [
      'The Nomai successfully reproduced the temporal anomaly first observed at the White Hole Station (warped objects appear to arrive before they depart).',
      'The Nomai discovered they could increase the negative time interval between arrival and departure by adding energy to the warp cores.',
      'The Nomai wanted to know if a 22-minute negative time interval was possible. They concluded it would require new technology to produce the necessary energy as well as an advanced warp core to handle those energies. Ash Twin was proposed as a location for the project.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'lakebed-caves',
    name: 'Lakebed Caves',
    image: 'CT_LAKEBED_CAVERN.png',
    logs: [
      'A Nomai named Coleus was standing on the wandering rock when another Nomai’s lantern died. When they relit the lantern, Coleus and the rock were both gone.',
      'To travel with a qantum object, I must stand on the object and cease to observe my surroundings (meaning I must be in complete darkness). Coleus used this quantum rule to escape the cave he was trapped in.',
      'Coleus and Melorae returned to examine the rock. They theorized that when a conscious being is in contact with a quantum object and ceases to observe his or her surroundings, the being can become entangled with that quantum object, and they both move together.',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'launch-module',
    name: 'Launch Module',
    image: 'OPC_BROKEN_MODULE.png',
    logs: [
      'The Launch Module is badly damaged, but its projection pool is still intact.',
      'A Nomai named Mallow argued that it wouldn’t matter if the cannon’s structural integrity was compromised, since they only needed to fire the probe once.',
      'A Nomai named Privet countered that they wouldn’t be capable if receiving the probe’s data if the Probe Tracking Module was destroyed.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.SMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'lunar-lookout',
    name: 'Lunar Lookout',
    image: 'TM_NORTH_POLE.png',
    logs: [
      'A lookout platform with a spectacular view of the solar system. Esker uses their signalscope here to keep tabs on the other travelers.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'mural-(panel-1)',
    name: 'Mural (Panel 1)',
    image: 'BH_MURAL_1.png',
    logs: ['A mural of a Nomai vessel ecountering a signal.'],
    colour: PlanetColour.RED,
    size: MapNodeSize.XSMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'mural-(panel-2)',
    name: 'Mural (Panel 2)',
    image: 'BH_MURAL_2.png',
    logs: ['A mural of Dark Bramble ensnaring the Nomai vessel.'],
    colour: PlanetColour.RED,
    size: MapNodeSize.XSMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'mural-(panel-3)',
    name: 'Mural (Panel 3)',
    image: 'BH_MURAL_3.png',
    logs: ['A mural of three escape pods evacuating the Nomai vessel.'],
    colour: PlanetColour.RED,
    size: MapNodeSize.XSMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'nomai-grave',
    name: 'Nomai Grave',
    image: 'DB_NOMAI_GRAVE.png',
    logs: [
      'The survivors from Escape Pod 3 followed one of the two Vessel beacons to a small Dark Bramble seed, where they could go no further.',
      'The Nomai could faintly hear the Vessel’s beacon from within the seed, but the opening was too small for a single Nomai to fit through, much less an escape pod.',
      'The Vessel’s beacon was dying, and would soon be gone completely.',
      'If I launch my scout into the seed, I can take photos of an enormous derelict Nomai ship.',
    ],
    colour: PlanetColour.RED,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'nomai-mines',
    name: 'Nomai Mines',
    image: 'TH_NOMAI_MINE.png',
    logs: [
      'The Nomai mined ore from this site to craft a protective shell designed to physically seal off the central chamber inside Ash Twin.',
      'Once the shell was finished, the Nomai checked to ensure there were no longer any physical entrances or cracks.',
      'The Nomai discovered a species of four-eyed, semi-aquatic lifeforms in the waterways near the mine.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'northern-glacier',
    name: 'Northern Glacier',
    image: 'BH_WARP_RECEIVER.png',
    logs: [
      'The north pole of Brittle Hollow is covered in snow and ice. There is a uniquely shaped Nomai ruin on the surface.',
      'The Nomai were able to warp here from the White Hole Station. This is where they first recreated warp technology.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'ocean-depths',
    name: 'Ocean Depths',
    image: 'GD_OCEAN.png',
    logs: [
      'The ocean is surprisingly calm beneath the current. Some sort of electrical field surrounds the planet’s core.',
      'I passed through the electric barrier and reached the coral forest at the planet’s core.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'old-settlement',
    name: 'Old Settlement',
    image: 'BH_OLD_SETTLEMENT.png',
    logs: [
      'The Nomai constructed a temporary settlement beneath their crashed escape pod.',
      'The Nomai worked together to recall an eye-shaped signal they encountered while aboard the Vessel.',
      'The signal was somehow older than the universe itself. The Nomai decided to call it the “Eye of the universe.',
      'The Nomai abandoned this settlement over growing concerns about its stability.',
    ],
    colour: PlanetColour.RED,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'orbital-probe-cannon',
    name: 'Orbital Probe Cannon',
    image: 'OPC_ORBITAL_PROBE_CANNON.png',
    logs: [
      'The broken remains of a Nomai space station in orbit around Giant’s Deep. There are three accessways branching off from the central hub area.',
      'The Orbital Probe Cannon was created to find the precise location of the Eye of the Universe.',
      'The Nomai pushed the Orbital Probe Cannon above its maximum power setting to create the greatest chance of finding the Eye of the universe.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.LARGE,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'probe-tracking-module',
    name: 'Probe Tracking Module',
    image: 'OPC_EYE_COORDINATES.png',
    logs: [
      'The Orbital Probe Cannon has launched millions of probes.',
      'The 9 ,318 ,054th probe located a deep space anomaly matching all known criteria for the Eye of the universe.',
      'The Probe Tracking Module automatically records each probe’s trajectory and transmits the data to the Ash Twin Project.',
      'I found Nomai coordinated marking the location of the Eye of the universe.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.SMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'quantum-caves',
    name: 'Quantum Caves',
    image: 'CT_QUANTUM_CAVES.png',
    logs: [
      'The Nomai noticed a strange wandering rock that appeared in multiple caves on Ember Twin’s northern hemishpere.',
      'I found a strange rock shard that moves when I’m not watching. It emits a signal on the Quantum Fluctuations frequency.',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'quantum-grove',
    name: 'Quantum Grove',
    image: 'TH_QUANTUM_SHARD.png',
    logs: [
      'There is a strange rock shard in this grove that moves when I’m not watching. It emits a signal on the Quantum Fluctuations frequency.',
      'I found a poem written on one of the trees in the grove.',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'quantum-moon',
    name: 'Quantum Moon',
    image: 'QM_QUANTUM_MOON.png',
    logs: [
      'I was able to land on the surface of the Quantum Moon.',
      'I found a dead Nomai in a space suit near the south pole.',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.LARGE,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'quanum-moon-locator',
    name: 'Quanum Moon Locator',
    image: 'CT_QUANTUM_MOON_LOCATOR.png',
    logs: [
      'A Nomai device created to track the Quantum Moon’slocation.',
      'The Nomai hypothesized that the Quantum Moon might be a form of macroscopic quantum mechanic.',
      'The Quantum Moon travels to a total of five locations.',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'quantum-shard',
    name: 'Quantum Shard',
    image: 'BH_QUANTUM_SHARD.png',
    logs: [
      'A strange rock that wanders when no one is watching. The Nomai determined this shard is the reason objects in this grove behave in a quantum manner.',
      'The Nomai hypothesized that this shard is actually a piece of the Quantum Moon.',
      'This shard emits the same signal as the Quantum Moon.',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.XSMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'quantum-shrine',
    name: 'Quantum Shrine',
    image: 'QM_SHRINE.png',
    logs: [
      'A Nomai shrine that wanders about the Quantum Moon.',
      '’You have recalled the rule of quantum imagining’ is inscribed next to a mural of a tower on an island.',
      '’Recall the rule of quantum entanglement’ is inscribed next to a mural of a quantum shard in a cave.',
      '’Recall the rule of the sixth location’ is inscribed next to a mural of a tower hanging above a black hole.',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.SMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "riebeck's-camp",
    name: 'Riebeck’s Camp',
    image: "BH_RIEBECK.png",
    logs: [
      'Riebeck has set up camp at the bottom of the Crossroads. Their excitement at being surrounded by so much Nomai history is matched only by their terror of the black hole.',
      'Riebeck is Timber Hearth’s only archaeologist. They overcame their fear of space to explore Brittle Hollow’s treasure trove of Nomai culture.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'ruptured-core',
    name: 'Ruptured Core',
    image: 'COMET_INTERIOR.png',
    logs: [
      'I found the two missing members of the Nomai shuttle crew near a large ruptured stone that looks like it exploded from the inside.',
      'The Nomai traced the strange energy readings to a spherical stone casing filled with some form of exotic matter.',
      'They determined the exotic matter was both lethal and under extreme pressure. If the stone were to rupture, the exotic matter within would rapidly expand, completely blanketing the solar system almost instantaneously.',
      'One of the Nomai stayed behind to examine the alien matter while the other rushed back to the surface to warn the rest of the Nomai.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.LARGE,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'sixth-location',
    name: 'Sixth Location',
    image: 'QM_SIXTH_LOCATION.png',
    logs: [
      'I met a living Nomai named Solanum at the south pole!',
      'The Quantum Moon is the Eye of the universe’s moon.',
      'At this location, the Quantum Moon becomes a reflection of the Eye itself.',
      'The Eye is likely the source of all macroscopic quantum phenomena in the solar system.',
      'Solanum wonders what would happen if a concious observer were to enter the Eye.',
      'Solanum has a hypothesis that she may not be entirely alive.',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "solanum's-shuttle",
    name: 'Solanum’s Shuttle',
    image: "QM_SHUTTLE_ALT.png",
    logs: [
      'A Nomai named Solanum landed her shuttle at the Quanum Moon’s south pole and prepared to make the rest of the journey on foot.',
      'Visitors to the Quanum Moon always arrive at the south pole (for reasons unknown to the Nomai).',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.SMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'southern-observatory',
    name: 'Southern Observatory',
    image: 'BH_OBSERVATORY.png',
    logs: [
      'The new, more sensitive locator the Nomai built in this observatory was unable to detect any trace of the Eye’s signal.',
      'Based on their knowledge of the Quantum Moon, the Nomai believed the Eye was in a distant orbit around the sun.',
      'The Nomai decided to stop searching for the Eye’s signal and instead look for it visually by sending out a deep space probe.',
      'There were concerns that the probability of launching a probe in the correct direction would be absurdly small.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'statue-island',
    name: 'Statue Island',
    image: 'GD_STATUE_ISLAND.png',
    logs: [
      'This island must be where the Nomai created statues like the one in our observatory.',
      'I found a Nomai statue lying on the beach. It looks just like the one in our observatory.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'statue-workshop',
    name: 'Statue Workshop',
    image: 'GD_STATUE_WORKSHOP.png',
    logs: [
      'Nomai statues were designed to pair with a single user, record their memories, and send those memories to a storage unit within the Ash Twin Project.',
      'Each storage unit inside the Ash Twin Project was equipped with a mask (the statue’s counterpart), which could then send those stored memories back to the corresponding user.',
      'The statues were designed to only activate once the Ash Twin Project succeeded, or in the event that it failed.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.XSMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'the-sunless-city',
    name: 'The Sunless City',
    image: 'CT_SUNLESS_CITY.png',
    logs: [
      'A Nomai city built into the walls of a huge underground cavern. The city is divided vertically into four districts.',
      'The Nomai debated building a Sun Station in order to power the Ash Twin Project. Several Nomai opposed its construction, arguing that failure could result in the destruction of the solar system.',
      'The Nomai traveled to this solar system in pursuit of a signal from something older than the universe itself. They named the source of this signal the “Eye of the universe.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'sun-station',
    name: 'Sun Station',
    image: 'S_SUNSTATION.png',
    logs: [
      'The Sun Station was designed to make the sun go supernova.',
      'The Nomai fired the Sun Station but it had no effect on the sun. They concluded that the Sun Station could never cause the sun to go supernova.',
      'After the failure of the Sun Station, the Nomai took a break to investigate the newly arrived comet.',
      'According to a Nomai computer, our sun has reached the end if its natural life cycle.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'tornado-simulation',
    name: 'Tornado Simulation',
    image: 'BH_TORNADO_SIMULATION.png',
    logs: [
      'Most cyclone’s on Giant’s Deep rotate clockwise. These are the cyclones the Nomai used to send components into orbit.',
      'There also exists a rarer type of cyclone that spins the opposite direction and pushes objects beneath the waters and below the current.',
    ],
    colour: PlanetColour.GREEN,
    size: MapNodeSize.SMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'tower-of-quantum-knowledge',
    name: 'Tower of Quantum Knowledge',
    image: 'BH_QUANTUM_RESEARCH_TOWER.png',
    logs: [
      'The Nomai built a shrine on the Quantum Moon to aid in the pilgrimage to its sixth location. ‘Remember this final rule: To explore the sixth location, the shrine must be on the moon’s north pole.',
      'The pilgrimage to the Quantum Moon was a deeply significant journey for the Nomai.',
      'After the two groups of Nomai stranded on Ember Twin and Brittle Hollow were reunited, it became their united goal to find and visit the Quantum Moon.',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'tower-of-quantum-trials',
    name: 'Tower of Quantum Trials',
    image: 'GD_QUANTUM_TOWER.png',
    logs: [
      'This tower held knowledge a Nomai needed to make his or her first quantum journey.',
      '’Observing a quantum object; observing an image of a quantum object. These are the same.’',
      'The Nomai called this the ‘Rule of Quantum Imagining.’',
      '’Remember, the other quantum shards have other lessons to teach.’',
    ],
    colour: PlanetColour.PURPLE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'the-vessel',
    name: 'The Vessel',
    image: 'DB_VESSEL.png',
    logs: [
      'I found the derelict Nomai Vessel deep within Dark Bramble.',
      'The Vessel’s warp core is long dead.',
      'I activated a three-sided pillar on the Vessel’s bridge that appears to be some sort of input device.',
      'The Nomai tried to call for help, but the Vessel’s outgoing message system broke during the crash.',
      'The Vessel can still hear incoming messages from other Nomai vessels. The remaining Nomai clans are regrouping in response to the impending death of the universe.',
      'I found a recording of the original signal the Nomai encountered from the Eye of the universe. The Nomai were worried the signal might disappear, so they warped before they could tell another clan where theye were going.',
    ],
    colour: PlanetColour.RED,
    size: MapNodeSize.LARGE,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'village',
    name: 'Village',
    image: 'TH_VILLAGE.png',
    logs: [
      'The one and only Hearthian village, as well as the main source of explosions on this planet.',
      'The Nomai statue in the observatory opened its eyes and looked at me! I saw strange glowing lights and my own memories flashed before my eyes.',
      "('Hal says the statue has never opened its eyes before (despite Hornfels’ best efforts).”)*",
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'volcanic-testing-site',
    name: 'Volcanic Testing Site',
    image: 'VM_VOLCANO.png',
    logs: [
      'Ore samples from the Nomai Mine on Timber Hearth were sent to this volcano for durability testing.',
      'The Nomai were trying to craft a (briefly) supernova-proof shell to encase the Ash Twin Project.',
      'Even the smallest crack or opening in the protective shell would destroy everything.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'white-hole-station',
    name: 'White Hole Station',
    image: 'WHITE_HOLE_STATION.png',
    logs: [
      'Every Nomai warp tower is tuned to a specific astral body.',
      'To use a tower, you must be standing on the warp platform during the tower’s alignment with its corresponding astral body (the alignment happens when the astral body is directly overhead).',
      'The Nomai noticed something strange: Warped objects appeared to arrive at the receiver on Brittle Hollow slightly before they departed the White Hole Station.',
      'This negative time interval between an object arriving and departing was incredibly miniscule (roughly one hundred-thousandth of a second). The Nomai were skeptical if their equipment could even measure time to such a small degree.',
    ],
    colour: PlanetColour.ORANGE,
    size: MapNodeSize.MEDIUM,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 'zero-g-cave',
    name: 'Zero-G Cave',
    image: 'TH_ZERO_G_CAVE.png',
    logs: [
      'A cave at the very center of Timber Hearth used by Outer Wilds Ventures to train new astronauts.',
      'I successfully repaired another ‘satellite’ for Gossan.',
    ],
    colour: PlanetColour.GREY,
    size: MapNodeSize.XSMALL,
    connections: [],
    location: {
      x: 0,
      y: 0,
    },
  },
];

export default nodes;

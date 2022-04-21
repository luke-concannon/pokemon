const pokeArray = [
    {name:"Bulbasaur",image:"http://img.pokemondb.net/artwork/bulbasaur.jpg"},
    {name:"Ivysaur",image:"http://img.pokemondb.net/artwork/ivysaur.jpg"},
    {name:"Venusaur",image:"http://img.pokemondb.net/artwork/venusaur.jpg"},
    {name:"Charmander",image:"http://img.pokemondb.net/artwork/charmander.jpg"},
    {name:"Charmeleon",image:"http://img.pokemondb.net/artwork/charmeleon.jpg"},
    {name:"Charizard",image:"http://img.pokemondb.net/artwork/charizard.jpg"},
    {name:"Squirtle",image:"http://img.pokemondb.net/artwork/squirtle.jpg"},
    {name:"Wartortle",image:"http://img.pokemondb.net/artwork/wartortle.jpg"},
    {name:"Blastoise",image:"http://img.pokemondb.net/artwork/blastoise.jpg"},
    {name:"Caterpie",image:"http://img.pokemondb.net/artwork/caterpie.jpg"},
    {name:"Metapod",image:"http://img.pokemondb.net/artwork/metapod.jpg"},
    {name:"Butterfree",image:"http://img.pokemondb.net/artwork/butterfree.jpg"},
    {name:"Weedle",image:"http://img.pokemondb.net/artwork/weedle.jpg"},
    {name:"Kakuna",image:"http://img.pokemondb.net/artwork/kakuna.jpg"},
    {name:"Beedrill",image:"http://img.pokemondb.net/artwork/beedrill.jpg"},
    {name:"Pidgey",image:"http://img.pokemondb.net/artwork/pidgey.jpg"},
    {name:"Pidgeotto",image:"http://img.pokemondb.net/artwork/pidgeotto.jpg"},
    {name:"Pidgeot",image:"http://img.pokemondb.net/artwork/pidgeot.jpg"},
    {name:"Rattata",image:"http://img.pokemondb.net/artwork/rattata.jpg"},
    {name:"Raticate",image:"http://img.pokemondb.net/artwork/raticate.jpg"},
    {name:"Spearow",image:"http://img.pokemondb.net/artwork/spearow.jpg"},
    {name:"Fearow",image:"http://img.pokemondb.net/artwork/fearow.jpg"},
    {name:"Ekans",image:"http://img.pokemondb.net/artwork/ekans.jpg"},
    {name:"Arbok",image:"http://img.pokemondb.net/artwork/arbok.jpg"},
    {name:"Pikachu",image:"http://img.pokemondb.net/artwork/pikachu.jpg"},
    {name:"Raichu",image:"http://img.pokemondb.net/artwork/raichu.jpg"},
    {name:"Sandshrew",image:"http://img.pokemondb.net/artwork/sandshrew.jpg"},
    {name:"Sandslash",image:"http://img.pokemondb.net/artwork/sandslash.jpg"},
    {name:"Nidoran?",image:"http://img.pokemondb.net/artwork/nidoran-f.jpg"},
    {name:"Nidorina",image:"http://img.pokemondb.net/artwork/nidorina.jpg"},
    {name:"Nidoqueen",image:"http://img.pokemondb.net/artwork/nidoqueen.jpg"},
    {name:"Nidoran",image:"http://img.pokemondb.net/artwork/nidoran-m.jpg"},
    {name:"Nidorino",image:"http://img.pokemondb.net/artwork/nidorino.jpg"},
    {name:"Nidoking",image:"http://img.pokemondb.net/artwork/nidoking.jpg"},
    {name:"Clefairy",image:"http://img.pokemondb.net/artwork/clefairy.jpg"},
    {name:"Clefable",image:"http://img.pokemondb.net/artwork/clefable.jpg"},
    {name:"Vulpix",image:"http://img.pokemondb.net/artwork/vulpix.jpg"},
    {name:"Ninetales",image:"http://img.pokemondb.net/artwork/ninetales.jpg"},
    {name:"Jigglypuff",image:"http://img.pokemondb.net/artwork/jigglypuff.jpg"},
    {name:"Wigglytuff",image:"http://img.pokemondb.net/artwork/wigglytuff.jpg"},
    {name:"Zubat",image:"http://img.pokemondb.net/artwork/zubat.jpg"},
    {name:"Golbat",image:"http://img.pokemondb.net/artwork/golbat.jpg"},
    {name:"Oddish",image:"http://img.pokemondb.net/artwork/oddish.jpg"},
    {name:"Gloom",image:"http://img.pokemondb.net/artwork/gloom.jpg"},
    {name:"Vileplume",image:"http://img.pokemondb.net/artwork/vileplume.jpg"},
    {name:"Paras",image:"http://img.pokemondb.net/artwork/paras.jpg"},
    {name:"Parasect",image:"http://img.pokemondb.net/artwork/parasect.jpg"},
    {name:"Venonat",image:"http://img.pokemondb.net/artwork/venonat.jpg"},
    {name:"Venomoth",image:"http://img.pokemondb.net/artwork/venomoth.jpg"},
    {name:"Diglett",image:"http://img.pokemondb.net/artwork/diglett.jpg"},
    {name:"Dugtrio",image:"http://img.pokemondb.net/artwork/dugtrio.jpg"},
    {name:"Meowth",image:"http://img.pokemondb.net/artwork/meowth.jpg"},
    {name:"Persian",image:"http://img.pokemondb.net/artwork/persian.jpg"},
    {name:"Psyduck",image:"http://img.pokemondb.net/artwork/psyduck.jpg"},
    {name:"Golduck",image:"http://img.pokemondb.net/artwork/golduck.jpg"},
    {name:"Mankey",image:"http://img.pokemondb.net/artwork/mankey.jpg"},
    {name:"Primeape",image:"http://img.pokemondb.net/artwork/primeape.jpg"},
    {name:"Growlithe",image:"http://img.pokemondb.net/artwork/growlithe.jpg"},
    {name:"Arcanine",image:"http://img.pokemondb.net/artwork/arcanine.jpg"},
    {name:"Poliwag",image:"http://img.pokemondb.net/artwork/poliwag.jpg"},
    {name:"Poliwhirl",image:"http://img.pokemondb.net/artwork/poliwhirl.jpg"},
    {name:"Poliwrath",image:"http://img.pokemondb.net/artwork/poliwrath.jpg"},
    {name:"Abra",image:"http://img.pokemondb.net/artwork/abra.jpg"},
    {name:"Kadabra",image:"http://img.pokemondb.net/artwork/kadabra.jpg"},
    {name:"Alakazam",image:"http://img.pokemondb.net/artwork/alakazam.jpg"},
    {name:"Machop",image:"http://img.pokemondb.net/artwork/machop.jpg"},
    {name:"Machoke",image:"http://img.pokemondb.net/artwork/machoke.jpg"},
    {name:"Machamp",image:"http://img.pokemondb.net/artwork/machamp.jpg"},
    {name:"Bellsprout",image:"http://img.pokemondb.net/artwork/bellsprout.jpg"},
    {name:"Weepinbell",image:"http://img.pokemondb.net/artwork/weepinbell.jpg"},
    {name:"Victreebel",image:"http://img.pokemondb.net/artwork/victreebel.jpg"},
    {name:"Tentacool",image:"http://img.pokemondb.net/artwork/tentacool.jpg"},
    {name:"Tentacruel",image:"http://img.pokemondb.net/artwork/tentacruel.jpg"},
    {name:"Geodude",image:"http://img.pokemondb.net/artwork/geodude.jpg"},
    {name:"Graveler",image:"http://img.pokemondb.net/artwork/graveler.jpg"},
    {name:"Golem",image:"http://img.pokemondb.net/artwork/golem.jpg"},
    {name:"Ponyta",image:"http://img.pokemondb.net/artwork/ponyta.jpg"},
    {name:"Rapidash",image:"http://img.pokemondb.net/artwork/rapidash.jpg"},
    {name:"Slowpoke",image:"http://img.pokemondb.net/artwork/slowpoke.jpg"},
    {name:"Slowbro",image:"http://img.pokemondb.net/artwork/slowbro.jpg"},
    {name:"Magnemite",image:"http://img.pokemondb.net/artwork/magnemite.jpg"},
    {name:"Magneton",image:"http://img.pokemondb.net/artwork/magneton.jpg"},
    {name:"Farfetch'd",image:"http://img.pokemondb.net/artwork/farfetchd.jpg"},
    {name:"Doduo",image:"http://img.pokemondb.net/artwork/doduo.jpg"},
    {name:"Dodrio",image:"http://img.pokemondb.net/artwork/dodrio.jpg"},
    {name:"Seel",image:"http://img.pokemondb.net/artwork/seel.jpg"},
    {name:"Dewgong",image:"http://img.pokemondb.net/artwork/dewgong.jpg"},
    {name:"Grimer",image:"http://img.pokemondb.net/artwork/grimer.jpg"},
    {name:"Muk",image:"http://img.pokemondb.net/artwork/muk.jpg"},
    {name:"Shellder",image:"http://img.pokemondb.net/artwork/shellder.jpg"},
    {name:"Cloyster",image:"http://img.pokemondb.net/artwork/cloyster.jpg"},
    {name:"Gastly",image:"http://img.pokemondb.net/artwork/gastly.jpg"},
    {name:"Haunter",image:"http://img.pokemondb.net/artwork/haunter.jpg"},
    {name:"Gengar",image:"http://img.pokemondb.net/artwork/gengar.jpg"},
    {name:"Onix",image:"http://img.pokemondb.net/artwork/onix.jpg"},
    {name:"Drowzee",image:"http://img.pokemondb.net/artwork/drowzee.jpg"},
    {name:"Hypno",image:"http://img.pokemondb.net/artwork/hypno.jpg"},
    {name:"Krabby",image:"http://img.pokemondb.net/artwork/krabby.jpg"},
    {name:"Kingler",image:"http://img.pokemondb.net/artwork/kingler.jpg"},
    {name:"Voltorb",image:"http://img.pokemondb.net/artwork/voltorb.jpg"},
    {name:"Electrode",image:"http://img.pokemondb.net/artwork/electrode.jpg"},
    {name:"Exeggcute",image:"http://img.pokemondb.net/artwork/exeggcute.jpg"},
    {name:"Exeggutor",image:"http://img.pokemondb.net/artwork/exeggutor.jpg"},
    {name:"Cubone",image:"http://img.pokemondb.net/artwork/cubone.jpg"},
    {name:"Marowak",image:"http://img.pokemondb.net/artwork/marowak.jpg"},
    {name:"Hitmonlee",image:"http://img.pokemondb.net/artwork/hitmonlee.jpg"},
    {name:"Hitmonchan",image:"http://img.pokemondb.net/artwork/hitmonchan.jpg"},
    {name:"Lickitung",image:"http://img.pokemondb.net/artwork/lickitung.jpg"},
    {name:"Koffing",image:"http://img.pokemondb.net/artwork/koffing.jpg"},
    {name:"Weezing",image:"http://img.pokemondb.net/artwork/weezing.jpg"},
    {name:"Rhyhorn",image:"http://img.pokemondb.net/artwork/rhyhorn.jpg"},
    {name:"Rhydon",image:"http://img.pokemondb.net/artwork/rhydon.jpg"},
    {name:"Chansey",image:"http://img.pokemondb.net/artwork/chansey.jpg"},
    {name:"Tangela",image:"http://img.pokemondb.net/artwork/tangela.jpg"},
    {name:"Kangaskhan",image:"http://img.pokemondb.net/artwork/kangaskhan.jpg"},
    {name:"Horsea",image:"http://img.pokemondb.net/artwork/horsea.jpg"},
    {name:"Seadra",image:"http://img.pokemondb.net/artwork/seadra.jpg"},
    {name:"Goldeen",image:"http://img.pokemondb.net/artwork/goldeen.jpg"},
    {name:"Seaking",image:"http://img.pokemondb.net/artwork/seaking.jpg"},
    {name:"Staryu",image:"http://img.pokemondb.net/artwork/staryu.jpg"},
    {name:"Starmie",image:"http://img.pokemondb.net/artwork/starmie.jpg"},
    {name:"Scyther",image:"http://img.pokemondb.net/artwork/scyther.jpg"},
    {name:"Jynx",image:"http://img.pokemondb.net/artwork/jynx.jpg"},
    {name:"Electabuzz",image:"http://img.pokemondb.net/artwork/electabuzz.jpg"},
    {name:"Magmar",image:"http://img.pokemondb.net/artwork/magmar.jpg"},
    {name:"Pinsir",image:"http://img.pokemondb.net/artwork/pinsir.jpg"},
    {name:"Tauros",image:"http://img.pokemondb.net/artwork/tauros.jpg"},
    {name:"Magikarp",image:"http://img.pokemondb.net/artwork/magikarp.jpg"},
    {name:"Gyarados",image:"http://img.pokemondb.net/artwork/gyarados.jpg"},
    {name:"Lapras",image:"http://img.pokemondb.net/artwork/lapras.jpg"},
    {name:"Ditto",image:"http://img.pokemondb.net/artwork/ditto.jpg"},
    {name:"Eevee",image:"http://img.pokemondb.net/artwork/eevee.jpg"},
    {name:"Vaporeon",image:"http://img.pokemondb.net/artwork/vaporeon.jpg"},
    {name:"Jolteon",image:"http://img.pokemondb.net/artwork/jolteon.jpg"},
    {name:"Flareon",image:"http://img.pokemondb.net/artwork/flareon.jpg"},
    {name:"Porygon",image:"http://img.pokemondb.net/artwork/porygon.jpg"},
    {name:"Omanyte",image:"http://img.pokemondb.net/artwork/omanyte.jpg"},
    {name:"Omastar",image:"http://img.pokemondb.net/artwork/omastar.jpg"},
    {name:"Kabuto",image:"http://img.pokemondb.net/artwork/kabuto.jpg"},
    {name:"Kabutops",image:"http://img.pokemondb.net/artwork/kabutops.jpg"},
    {name:"Aerodactyl",image:"http://img.pokemondb.net/artwork/aerodactyl.jpg"},
    {name:"Snorlax",image:"http://img.pokemondb.net/artwork/snorlax.jpg"},
    {name:"Articuno",image:"http://img.pokemondb.net/artwork/articuno.jpg"},
    {name:"Zapdos",image:"http://img.pokemondb.net/artwork/zapdos.jpg"},
    {name:"Moltres",image:"http://img.pokemondb.net/artwork/moltres.jpg"},
    {name:"Dratini",image:"http://img.pokemondb.net/artwork/dratini.jpg"},
    {name:"Dragonair",image:"http://img.pokemondb.net/artwork/dragonair.jpg"},
    {name:"Dragonite",image:"http://img.pokemondb.net/artwork/dragonite.jpg"},
    {name:"Mewtwo",image:"http://img.pokemondb.net/artwork/mewtwo.jpg"},
    {name:"Mew",image:"http://img.pokemondb.net/artwork/mew.jpg"}
]

export default pokeArray
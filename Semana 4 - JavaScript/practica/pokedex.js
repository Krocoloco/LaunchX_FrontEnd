const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pikachu_sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);

            let pokemonName = data.name;
            pokeNombre(pokemonName);

            let pokeImg = data.sprites.other.dream_world.front_default;
            pokeImage(pokeImg);

            let pokeImgFront = data.sprites.front_default;
            pokeImageFront(pokeImgFront);

            let pokeImgBack = data.sprites.back_default;
            pokeImageBack(pokeImgBack);

            let tipos = data.types;
            for (i =0; i < tipos.length; i++){
                var pokeTipo = [];
                pokeTipo.push(tipos[i].type.name);
            }
            pokeTipos(pokeTipo);
            console.log(pokeTipo);
            
            let stats = data.stats
            for (i =0; i < stats.length; i++){
                var pokeStat = stats[i].base_stat;

                switch (i) {
                    case 0:
                        pokeStatsHP(pokeStat);
                        break;
                    case 1:
                        pokeStatsAtk(pokeStat);
                        break;
                    case 2:
                        pokeStatsDf(pokeStat);
                        break;
                    case 3:
                        pokeStatsSpAtk(pokeStat);
                        break;
                    case 4:
                        pokeStatsSpDf(pokeStat);
                        break;
                    case 5:
                        pokeStatsSp(pokeStat);
                        break;
                    default:
                        break;
                }
            }
            
            let moves = data.moves
            for (i =0; i < moves.length; i++){
                var pokeMove = moves[i].name;
                console.log(pokeMoves(pokeMove));

            }
        }
    });
}
const pokeNombre = (url) => {
    const pokeNom = document.getElementById("pokemon");
    pokeNom.innerHTML = url;
}

// Pokemon Image
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeImageFront = (url) => {
    const pokePhotoFront = document.getElementById("pokeImgFront");
    pokePhotoFront.src = url;
}

const pokeImageBack = (url) => {
    const pokePhotoBack = document.getElementById("pokeImgBack");
    pokePhotoBack.src = url;
}

// Pokemon Type
const pokeTipos = (url) => {
    const pokeTipo = document.getElementById("tipo");
    pokeTipo.innerHTML = url;
}
// Pokemon Stats
const pokeStatsHP = (url) => {
    const pokeStat_HP = document.getElementById("stats_hp");
    pokeStat_HP.innerHTML = url;
}

const pokeStatsAtk = (url) => {
    const pokeStat_ATK = document.getElementById("stats_atk");
    pokeStat_ATK.innerHTML = url;
}

const pokeStatsDf = (url) => {
    const pokeStat_DF = document.getElementById("stats_df");
    pokeStat_DF.innerHTML = url;
}

const pokeStatsSpAtk = (url) => {
    const pokeStat_SP_ATK = document.getElementById("stats_sp_atk");
    pokeStat_SP_ATK.innerHTML = url;
}

const pokeStatsSpDf = (url) => {
    const pokeStat_SP_DF = document.getElementById("stats_sp_df");
    pokeStat_SP_DF.innerHTML = url;
}
const pokeStatsSp = (url) => {
    const pokeStat_SP = document.getElementById("stats_spd");
    pokeStat_SP.innerHTML = url;
}

//Pokemon Movements
const pokeMoves = (url) => {
    const pokeMove = document.getElementById("moves");
    pokeMove.innerHTML = url;
}
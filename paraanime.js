let obras = [
{
	"anime": "Shin Seiki Evangelion",
	"estudio": "Gainax",
	"genero": "mecha-psicologic",
	"año": 1995,
	"temporada": 1
},

{
	"anime": "Serial Experimental Lain",
	"estudio": "Triangle Staff",
	"genero": "psicologic",
	"año": 1998,
	"temporada": 1
},
{
	"anime": "Psycho-Pass",
	"estudio": "Production I.G",
	"genero": "mecha-psicologic",
	"año": 1995,
	"temporada": 3

},
{
	"anime": "Overlord",
	"estudio": "Kabushiki-gaisha Maddohausu",
	"genero": "Isekai",
	"año": 2015,
	"temporada": 4
},
{
	"anime": "Metantei Konan",
	"estudio": "TMS Entertainment",
	"genero": "detective",
	"año": 1996,
	"temporada": 27
},
{
	"anime": "Digimon",
	"estudio": "Toei Animation",
	"genero": "kodomo",
	"año": 1996,
	"temporada": 7
},
{
	"anime": "Pokemon",
	"estudio": "OLM Inc.",
	"genero": "kodomo",
	"año": 1996,
	"temporada": 23
},

{
	"anime": "Dragon Ball",
	"estudio": "Toei Animation",
	"genero": "Isekai",
	"año": 2015,
	"temporada": 4
},
{
	"anime": "Sword Art Online",
	"estudio": "Kabushiki-gaisha Maddohausu",
	"genero": "Isekai",
	"año": 2014,
	"temporada": 2
},
{
	"anime": ".Hack",
	"estudio": "Bee Train",
	"genero": "Isekai",
	"año": 2006,
	"temporada": 2
},
{
	"anime": "Made In abyys",
	"estudio": "Kinema Citrus",
	"genero": "Ciencia ficcion",
	"año": 2019,
	"temporada": 2
},
{
	"anime": "Sailor Moon",
	"estudio": "Toei Animation",
	"genero": "Ciencia ficcion",
	"año": 1992,
	"temporada": 5
},
{
	"anime": "Fairy Tails",
	"estudio": "A-1 Pictures",
	"genero": "Aventura",
	"año": 2006,
	"temporada": 9
},
{
	"anime": "World Trigger",
	"estudio": "Toei Animation",
	"genero": "Ciencia ficcion",
	"año": 2014,
	"temporada": 3
},
{
	"anime": "Tokio revengers",
	"estudio": "Liden Films",
	"genero": "Mafia",
	"año": 2021,
	"temporada": 1

}]

	let table = document.getElementById("intro")
	let contenido = ""
	obras.forEach(elemento => {
		contenido+="<tr><td>"+elemento.anime+"</td><td>"+ elemento.estudio+"</td><td>"+elemento.genero+"</td><td>"+elemento.año+ "</td><td>"+ elemento.temporada+"</td></tr>"
		table.innerHTML = contenido	
	})


	
	//voy a usar eso para mostrar solo genero de cada anime
	for (let i=0; i< obras.length; i++){
		console.log(obras[i].genero)
	}
	//usare el for solo para mostrar anime de genero psicologico

	//ordenar los anime segun el año de transmision

	function añoestreno() {
	for (let i=0; i<obras.length; i++) {
		for (let j=0; j<obras.length - 1; j++){
			if (obras[j].año> obras[j+1].año){
				let aux=obras[j]
				obras[j]=obras[j+1]
				obras[j+1]=aux
			};
		};
	};
	obras.forEach(elemento => {
	contenido+="<tr><td>"+elemento.anime+"</td><td>"+ elemento.estudio+"</td><td>"+elemento.genero+"</td><td>"+elemento.año+ "</td><td>"+ elemento.temporada+"</td></tr>"
	table.innerHTML = contenido
})
};


function mostrarPsico() {
		for (let j=0; j<obras.length; j++){
			if(obras[j].genero == "psicologic"){
				console.log(obras[j].anime);
				document.write(obras[j].anime);
			};
		};
		
	};
	
function mostrarIsekai(){
	for (let j=0; j<obras.length; j++){
		if(obras[j].genero == "Isekai") {
			console.log(obras[j].anime);
			document.write(obras[j].anime);
		}
	}
}	


function mostrarUna(){
	for(let j=0; j<obras.length; j++){
		if(obras[j].temporada =1){
			console.log(obras[j].anime);
			document.write(obras[j].anime);
		};
	};
}

function mostrarDosoMas(){
	for(let j=0; j<obras.length; j++){
		if(obras[j].temporada >1){
			console.log(obras[j].anime);
			document.write(obras[j].anime);
		};
	};
}

function numeroTemporadas(){
let cantidad=window.prompt("Cuantas temporadas queres que tenga el anime a ver: ")
for (let j=0; j<obras.length; j++){
	if(cantidad == obras[j].temporada){
		console.log(obras[j].anime)
	}
	};
}


function segunTemporada() {
		let numero=document.getElementsByName("entrada")[0].value;
		for (var j=0; j<obras.length; j++){
			if(numero == obras[j].temporada){
				console.log(obras[j].anime);
				document.write(obras[j].anime);
			};
		};
	};


function segunEstudio() {
	let busqueda=document.getElementsByName("segunestudio")[0].value;
	for (var j=0; j<obras.length; j++){
		if(busqueda == obras[j].estudio){
			console.log(obras[j].anime);
			document.write(obras[j].anime);	
		}
	}
}


function segunNombre() {
	let buscar=document.getElementsByName("buscarNombre")[0].value;
	for (var j=0; j<obras.length; j++){
		if (buscar == obras[j].anime){
			console.log(obras[j].anime);
			document.write(obras[j].anime);
		}
	}
}
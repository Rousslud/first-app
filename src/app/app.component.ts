import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homerland';
  title2 ="Liste des scientifiques";
  personne1 ={
    nom :"Curie",
    prenom:"Marie",
    description :"Marie Skłodowska-Curie, née Maria Salomea Skłodowska (prononcé [ˈmarja salɔˈmɛa skwɔˈdɔfska] Médaille Nobel audio) le 7 novembre 1867 à Varsovie, au sein du Royaume du Congrès (actuelle Pologne), et morte le 4 juillet 1934 au sanatorium de Sancellemoz situé à Passy (Haute-Savoie, France), est une physicienne et chimiste polonaise, naturalisée française. Pierre Curie — son époux — et Marie Curie reçoivent une moitié du prix Nobel de physique de 1903 (l'autre moitié est remise à Henri Becquerel) pour leurs recherches sur les radiations1. En 1911, elle obtient le prix Nobel de chimie pour ses travaux sur le polonium et le radium2. Scientifique d'exception, elle est la première femme à avoir reçu le prix Nobel, et à ce jour la seule femme à en avoir reçu deux. Elle reste à ce jour la seule lauréate à avoir été récompensée dans deux domaines scientifiques distincts (par la suite, et en dehors strictement des sciences, Linus Pauling obtint le prix Nobel de chimie en 1954 et le prix Nobel de la paix en 19623). Elle est également la première femme lauréate en 1903, avec son mari, de la médaille Davy pour ses travaux sur le radium4."
    }
  personne2 ={
    nom2 :"Simpson",
    prenom2:"Homer",
    description2:"A fait sauter la centrale de Springfield"
  }
  personne3={
    nom:String,
    prenom:String,
    description:String,
    travail:String, 
    constructor(nom:String, prenom:String, description:String,travail:String){
      this.travail=travail,
      this.nom=nom,
      this.prenom=prenom,
      this.description=description
    }
  }

  screen=""; 
  count=0;
  clickOn=function(number){
    //this.count++
    if (number==10){
      this.screen=this.screen+"+";
    }
    // Operateur -
    else if (number==11){
      this.screen=this.screen+"-";
    }
    // Operateur //
    else if (number==12){
      this.screen=this.screen+"/";
    }
    // Operateur fois 
    else if (number==13){
      this.screen=this.screen+"*";
    }
    // test de github
    else if (number==14){
      this.screen=eval(this.screen);
    }
    else if (number==15){
      this.screen=this.screen+".";
    }
    else if (number==16){
      this.screen="";
      this.count=0; 
    }
    else if (number==17){
      this.screen=this.screen+"(";
      this.count=this.count+1; 
      document.getElementById("egal").style.pointerEvents = 'none';
    }
    else if (number==18){
      this.screen=this.screen+")";
      this.count=this.count-1;
      if (this.count==0){
        document.getElementById("egal").style.pointerEvents = 'auto';
      }
    }
    else if (number==19){
      this.screen=this.screen.substring(0, this.screen.length - 1);
    }
    else{
      this.screen=this.screen+number.toString();
    }
  }

  liste=[
    {nom:'Einstein', prenom:'Albert',description: 'il a volé les idées des autres', travail:' a inventé la relativité'},
    {nom:'Curie', prenom:'Marie',description: "s'est faite cramer par la radioactivité",travail:'a inventé le poulet sauce curry'},
    {nom:'Pasteur', prenom:'Louis',description: "s'est fait mordre par un chien et est devenu rage de folie",travail:" a inventé le lait pasteurisé"},
    {nom:'De Vinci', prenom:'Leonard',description: "a inventé les autoroutes",travail:"s'est fait flashé à 200km/h sur l'autoroute qu'il avait inventée"},
    {nom:'Schrödinger', prenom:'Erwin',description: "aimait son chat fortement",travail:"mais a fait des expériences sur lui"}
  ]

}

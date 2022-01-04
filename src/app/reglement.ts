export class Reglement{
    numrecu: String ;
    numech: String ;
    numpret : String ;
    daterecu: String ;
    matsal : String;
    intsal: String ;
    montant: String ;
    echeance : String;
    modep: String ;
    typedep: String ;

      constructor ( numech: String , numrecu: String , numpret : String ,daterecu: String ,matsal : String,intsal: String ,montant: String ,echeance : String,modep: String ,typedep: String )  {
          this.numrecu=numrecu;
          this.numech=numech;
          this.numpret=numpret;
          this.daterecu=daterecu;
          this.matsal=matsal;
          this.intsal=intsal;
          this.montant=montant;
          this.echeance=echeance;
          this.modep=modep;
          this.typedep=typedep;0
        }
      }
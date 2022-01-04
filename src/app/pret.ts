export class Pret{
    _id :String;
    numpret:String;
    typepret:String;
    date:String;
    matsal:String;
    montantp:String;
    nbrech:String;
    dated:String;
    etat:Number;
    constructor( _id :String="",numpret:String="",typepret:String="",date:String="",matsal:String="" ,montantp:String ,nbrech:String , dated:String,etat:Number=0) {
        this._id=_id
        this.numpret=numpret
        this.typepret = typepret
        this.date = date
        this.matsal = matsal
        this.montantp = montantp
        this.nbrech = nbrech
        this.dated = dated
        this.etat= etat
    }
}

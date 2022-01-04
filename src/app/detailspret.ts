export class detailspret{
    _id :String;
    numrecu:String;
    numpret:String;
    typepret:String;
    date:String;
    matsal:String;
    montantp:String;
    nbrech:String;
    dated:String;
    modepay:String;
    etat :String
    constructor( _id :String="",numpret:String="",typepret:String="",date:String="",matsal:String="",montantp:String="",montantr:String="",montantrs:String="", etat :String , modepay:String , numrecu:String) {
        this._id=_id
        this.numrecu =numrecu
        this.numpret=numpret
        this.typepret = typepret
        this.date = date
        this.matsal = matsal
        this.montantp = montantp
        this.nbrech = montantr
        this.dated = montantrs
        this.modepay =modepay
        this.etat=etat
    }
}
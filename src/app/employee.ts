export class Employee{
    _id :String;
    matsal: String ;
    intsal : String ;
    adresse : String ;
    ntelephone : Number ;
    email  : String ;
    Cin  : number ;
    constructor(id: string ="",mat: string ="",intsal:string="",adresse:string="",ntelephone : Number=0, email  : String="",Cin  : number=0) {
        this._id = id
        this.matsal = mat
        this.intsal = intsal
        this.adresse = adresse
        this.ntelephone = ntelephone
        this.email = email
        this.Cin = Cin
    }
}

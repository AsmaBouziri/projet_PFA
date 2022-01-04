export class utilisateur{
  _id: String ;
    utilisateur: String ;
    mdp : String;
    
    constructor (_id: String  ,utilisateur: String ,mdp : String)  {
        this._id=_id;
        this.utilisateur=utilisateur;
        this.mdp=mdp;
      }
    }
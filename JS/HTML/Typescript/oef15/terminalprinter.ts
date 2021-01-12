import { IAfdrukbaar } from "./IAfrdrukbaar";

export class terminalprinter{

    public afdrukken(document : IAfdrukbaar){

        console.log(
            document.GeefTitel() + '\n'
            +
            document.GeefTeDrukkentxt()
            + Date()
            );

    }

}
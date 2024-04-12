
import { UserCircle } from "lucide-react"
import {AtSign} from "lucide-react"
import { FormInput } from "./forminput"
export function Form() {
    return (
        <div>
            <form action="">
                <fieldset>
                    <legend>Inscrição</legend>
                </fieldset>
                <div>
                    <div className="input-wrapper">
                        <UserCircle size={18} color="#9ff9cc" />
                        <FormInput type="text" placeholder="Nome Completo" />
                    </div>
                    <div className="input-wrapper">
                        <AtSign size={18} color="#9ff9cc" />
                        <FormInput type="email" placeholder="E-mail" />
                    </div>
                    <button>REALIZAR INSCRIÇÃO</button>
                </div>
            </form>
        </div>
    )
}
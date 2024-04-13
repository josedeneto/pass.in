
import { UserCircle } from "lucide-react"
import { AtSign } from "lucide-react"
import { FormInput } from "./forminput"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import 'dayjs/locale/pt-br'
import { ChangeEvent, useState } from "react"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { Table } from "./table/table"
dayjs.extend(relativeTime)
dayjs.locale('pt-br')
interface Participante {
    name: string,
    email: string,

}
export function Form() {
    let [participant, setPartcipant] = useState<Participante[]>([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    function addParticipant(event: React.FormEvent) {
        event.preventDefault()
        const newParticipant: Participante = { name: nome, email };
        setPartcipant([...participant, newParticipant])
        setNome('')
        setEmail('')
    }
    function insertName(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function insertEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }

    return (
        <div>
            <form onSubmit={addParticipant}>
                <fieldset>
                    <legend>Inscrição</legend>
                </fieldset>
                <div>
                    <div className="input-wrapper">
                        <UserCircle size={18} color="#9ff9cc" />
                        <FormInput type="text" value={nome} placeholder="Nome Completo" onChange={insertName} />
                    </div>
                    <div className="input-wrapper">
                        <AtSign size={18} color="#9ff9cc" />
                        <FormInput type="email" value={email} placeholder="E-mail" onChange={insertEmail} />
                    </div>
                    <button type="submit">REALIZAR INSCRIÇÃO</button>
                </div>
            </form>
            <h1>Participantes</h1>
            
                <Table>
                    <thead>
                        <tr>
                            <TableHeader colSpan={2}>Participante</TableHeader>
                            <TableHeader>Data de inscrição</TableHeader>
                            <TableHeader>Data de check-in</TableHeader>
                        </tr>
                    </thead>

                    {participant.map((p) => {
                        return (
                            <tbody>
                                <tr>
                                    <TableCell colSpan={2}><strong>{p.name}</strong><br />
                                        <small>{p.email}</small>
                                    </TableCell>
                                    <TableCell>{dayjs().to(Date.now())}</TableCell>
                                    <TableCell>{dayjs().to(Date.now())}</TableCell>
                                </tr>
                            </tbody>

                        )
                    })}

                </Table>
            </div>

        
    )
}
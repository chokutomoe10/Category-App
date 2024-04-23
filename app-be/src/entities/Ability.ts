import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity({ name: "abilities" })
export class Ability {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    slot: string

    @Column()
    displayName: string

    @Column()
    description: string

    @Column()
    displayIcon: string

    @ManyToOne(() => User, (user) => user.abilities)
    user: User
}
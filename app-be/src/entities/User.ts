import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Ability } from "./Ability"

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    displayName: string

    @Column()
    description: string

    @Column()
    displayIcon: string

    @Column()
    fullPortrait: string

    @Column()
    role: string

    @Column({nullable: true})
    video: string

    @OneToMany(() => Ability, (ability) => ability.user)
    abilities: Ability[]
}
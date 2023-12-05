import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Qrdata {

    @PrimaryGeneratedColumn()
    sacnID: number

    @Column(
        {
            nullable: false,
        }
    )
    Barcode: string

    @Column(
        {
            nullable: false,
        }
    )
    ScanState: number

    @Column(
        {
            nullable: false,
        }
    )
    UserID: number 

    @Column(
        {
            nullable: false,
        }
    )
    UserName: string

    @Column(
        {
            nullable: false,
            type: "datetime",
            default: (new Date).toString()
        }
    )
    Recieved: string

    @Column(
        {
            nullable: false,
            type: "datetime",
        }
    )
    Scanned: string

    @Column(
        {
            nullable: true,
        }
    )
    Location: string

    @Column(
        {
            nullable: false,
        }
    )
    Timezone: string
}

import { Sequelize, Table, Column, Model, HasMany, HasOne, IsUUID, PrimaryKey, BeforeCreate, ForeignKey, Default, DataType, BelongsTo, BelongsToMany } from "sequelize-typescript";
import * as bcrypt from "bcrypt";

@Table
export class Usuario extends Model {
  @Column firstName: string;
  @Column lastName: string;
  @Column email: string;
  @Column telefone: string;
  @Column password: string;

  @BeforeCreate
  static async hashPassword(user: Usuario){
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }

  async validPassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }

  @BelongsToMany(() => Carona, 'UsuarioViagens', 'userId', 'caronaId')
  viagens: Carona[];

  @HasMany(() => Carona, 'motoristaId')
  ofertas: Carona[];

  @ForeignKey(() => Session) sessionsUUID: string;
  @HasMany(() => Session, 'sessionsUUID')
  sessions: Session[];

  getSafeObj(whitelist: Record<string, boolean|undefined> = {}){
    var ret = Object.assign({}, this.dataValues)
    delete ret.password;
    if(whitelist.email !== true)    delete ret.email;
    if(whitelist.telefone !== true) delete ret.telefone;
    //if(whitelist.viagens !== true)  delete ret.viagens;
    //if(whitelist.ofertas !== true)  delete ret.ofertas;
    //if(whitelist.sessions !== true) delete ret.sessions;
    return ret;
  }
}

@Table
export class Carona extends Model {
  @Column origem: string;
  @Column destino: string;
  @Column data: Date;

  @BelongsTo(() => Usuario, 'motoristaId')
  motorista: Usuario;

  @BelongsToMany(() => Carona, 'UsuarioViagens', 'caronaId', 'userId')
  passageiros: Usuario[];
}

@Table({ createdAt: false })
export class Session extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  uuid: string;

  @ForeignKey(() => Usuario) userId: number;
  @BelongsTo(() => Usuario)
  user: Usuario;
}


const sequelize = new Sequelize(
  "postgres://postgres:123456789@localhost:5432/projeto_carona"
, { models: [ Usuario, Carona, Session ] });
export const db = sequelize;
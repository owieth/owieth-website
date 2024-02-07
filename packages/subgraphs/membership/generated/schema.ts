// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from '@graphprotocol/graph-ts';

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save Token entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('Token', id.toString(), this);
    }
  }

  static loadInBlock(id: string): Token | null {
    return changetype<Token | null>(store.get_in_block('Token', id));
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get('Token', id));
  }

  get id(): string {
    let value = this.get('id');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get('tokenID');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt) {
    this.set('tokenID', Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get('name');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set('name', Value.fromString(value));
  }

  get description(): string {
    let value = this.get('description');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set description(value: string) {
    this.set('description', Value.fromString(value));
  }

  get attributes(): string {
    let value = this.get('attributes');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set attributes(value: string) {
    this.set('attributes', Value.fromString(value));
  }

  get imageUri(): string {
    let value = this.get('imageUri');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set imageUri(value: string) {
    this.set('imageUri', Value.fromString(value));
  }

  get totalAmount(): BigInt {
    let value = this.get('totalAmount');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set totalAmount(value: BigInt) {
    this.set('totalAmount', Value.fromBigInt(value));
  }

  get transactions(): Array<string> {
    let value = this.get('transactions');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toStringArray();
    }
  }

  set transactions(value: Array<string>) {
    this.set('transactions', Value.fromStringArray(value));
  }
}

export class TokenTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save TokenTransaction entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenTransaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('TokenTransaction', id.toString(), this);
    }
  }

  static loadInBlock(id: string): TokenTransaction | null {
    return changetype<TokenTransaction | null>(
      store.get_in_block('TokenTransaction', id)
    );
  }

  static load(id: string): TokenTransaction | null {
    return changetype<TokenTransaction | null>(
      store.get('TokenTransaction', id)
    );
  }

  get id(): string {
    let value = this.get('id');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get('tokenID');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt) {
    this.set('tokenID', Value.fromBigInt(value));
  }

  get from(): Bytes {
    let value = this.get('from');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes) {
    this.set('from', Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get('to');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes) {
    this.set('to', Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get('amount');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt) {
    this.set('amount', Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get('txHash');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBytes();
    }
  }

  set txHash(value: Bytes) {
    this.set('txHash', Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get('timestamp');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set('timestamp', Value.fromBigInt(value));
  }
}

export class Badge extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save Badge entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Badge must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('Badge', id.toString(), this);
    }
  }

  static loadInBlock(id: string): Badge | null {
    return changetype<Badge | null>(store.get_in_block('Badge', id));
  }

  static load(id: string): Badge | null {
    return changetype<Badge | null>(store.get('Badge', id));
  }

  get id(): string {
    let value = this.get('id');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get('tokenID');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt) {
    this.set('tokenID', Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get('name');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set('name', Value.fromString(value));
  }

  get description(): string {
    let value = this.get('description');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set description(value: string) {
    this.set('description', Value.fromString(value));
  }

  get attributes(): string {
    let value = this.get('attributes');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set attributes(value: string) {
    this.set('attributes', Value.fromString(value));
  }

  get imageUri(): string {
    let value = this.get('imageUri');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set imageUri(value: string) {
    this.set('imageUri', Value.fromString(value));
  }

  get holders(): Array<string> {
    let value = this.get('holders');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toStringArray();
    }
  }

  set holders(value: Array<string>) {
    this.set('holders', Value.fromStringArray(value));
  }
}

export class Guild extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save Guild entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Guild must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('Guild', id.toString(), this);
    }
  }

  static loadInBlock(id: string): Guild | null {
    return changetype<Guild | null>(store.get_in_block('Guild', id));
  }

  static load(id: string): Guild | null {
    return changetype<Guild | null>(store.get('Guild', id));
  }

  get id(): string {
    let value = this.get('id');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get('tokenID');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt) {
    this.set('tokenID', Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get('name');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set('name', Value.fromString(value));
  }

  get description(): string {
    let value = this.get('description');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set description(value: string) {
    this.set('description', Value.fromString(value));
  }

  get imageUri(): string {
    let value = this.get('imageUri');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set imageUri(value: string) {
    this.set('imageUri', Value.fromString(value));
  }

  get holders(): Array<string> {
    let value = this.get('holders');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toStringArray();
    }
  }

  set holders(value: Array<string>) {
    this.set('holders', Value.fromStringArray(value));
  }
}

export class Membership extends Entity {
  constructor(id: string) {
    super();
    this.set('id', Value.fromString(id));
  }

  save(): void {
    let id = this.get('id');
    assert(id != null, 'Cannot save Membership entity without an ID');
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Membership must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set('Membership', id.toString(), this);
    }
  }

  static loadInBlock(id: string): Membership | null {
    return changetype<Membership | null>(store.get_in_block('Membership', id));
  }

  static load(id: string): Membership | null {
    return changetype<Membership | null>(store.get('Membership', id));
  }

  get id(): string {
    let value = this.get('id');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set('id', Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get('tokenID');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set tokenID(value: BigInt) {
    this.set('tokenID', Value.fromBigInt(value));
  }

  get holder(): Bytes {
    let value = this.get('holder');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBytes();
    }
  }

  set holder(value: Bytes) {
    this.set('holder', Value.fromBytes(value));
  }

  get nickname(): string {
    let value = this.get('nickname');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set nickname(value: string) {
    this.set('nickname', Value.fromString(value));
  }

  get profileImageUri(): string {
    let value = this.get('profileImageUri');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set profileImageUri(value: string) {
    this.set('profileImageUri', Value.fromString(value));
  }

  get joinedAt(): BigInt {
    let value = this.get('joinedAt');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toBigInt();
    }
  }

  set joinedAt(value: BigInt) {
    this.set('joinedAt', Value.fromBigInt(value));
  }

  get experiencePoints(): string {
    let value = this.get('experiencePoints');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set experiencePoints(value: string) {
    this.set('experiencePoints', Value.fromString(value));
  }

  get activityPoints(): string {
    let value = this.get('activityPoints');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set activityPoints(value: string) {
    this.set('activityPoints', Value.fromString(value));
  }

  get attendedEvents(): string {
    let value = this.get('attendedEvents');
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error('Cannot return null for a required field.');
    } else {
      return value.toString();
    }
  }

  set attendedEvents(value: string) {
    this.set('attendedEvents', Value.fromString(value));
  }

  get isAdmin(): boolean {
    let value = this.get('isAdmin');
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isAdmin(value: boolean) {
    this.set('isAdmin', Value.fromBoolean(value));
  }

  get guilds(): GuildLoader {
    return new GuildLoader('Membership', this.get('id')!.toString(), 'guilds');
  }

  get badges(): BadgeLoader {
    return new BadgeLoader('Membership', this.get('id')!.toString(), 'badges');
  }
}

export class GuildLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Guild[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Guild[]>(value);
  }
}

export class BadgeLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Badge[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Badge[]>(value);
  }
}

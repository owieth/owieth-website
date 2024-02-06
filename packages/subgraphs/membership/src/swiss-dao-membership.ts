import {
  AddBadge as AddBadgeEvent,
  AddGuild as AddGuildEvent,
  EditBadge as EditBadgeEvent,
  EditGuild as EditGuildEvent,
  EditMembership as EditMembershipEvent,
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../generated/SwissDAOMembership/SwissDAOMembership';
import {
  handleMembershipEdit,
  handleMembershipTransfer
} from './membership/membership';
import { fetchBadge, fetchGuild, fetchHolder } from './utils';

export function handleBadge(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let badge = fetchBadge(tokenId.toString());

  const badgeStruct = contract.getBadgeStructByTokenId(tokenId);
  const member = fetchHolder(event.address, event.params.to);

  badge.imageUri = badgeStruct.imageUri;
  badge.name = badgeStruct.name;
  badge.description = badgeStruct.description;
  badge.attributes = badgeStruct.attributes;

  if (badge.id == '1') {
    member.experiencePoints = member.experiencePoints.plus(event.params.value);
  } else if (badge.id == '2') {
    member.activityPoints = member.activityPoints.plus(event.params.value);
  } else if (badge.id == '3') {
    member.attendedEvents = member.attendedEvents.plus(event.params.value);
  }

  member.save();
  badge.save();
}

export function handleGuild(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let guild = fetchGuild(tokenId.toString());

  const holders = guild.holders;

  const holder = fetchHolder(event.address, event.params.to);

  const badgeStruct = contract.getBadgeStructByTokenId(tokenId);

  guild.imageUri = badgeStruct.imageUri;
  guild.name = badgeStruct.name;
  guild.description = badgeStruct.description;

  holders.push(holder.id);

  guild.holders = holders;

  guild.save();
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  switch (event.params.id.toString().length) {
    case 1:
    case 3:
      handleBadge(event);
      break;

    case 2:
      handleGuild(event);
      break;

    case 5:
      handleMembershipTransfer(event);
      break;

    default:
      break;
  }
}

export function handleAddBadge(event: AddBadgeEvent): void {
  const badge = fetchBadge(event.params._badgeId.toString());
  badge.save();
}

export function handleEditBadge(event: EditBadgeEvent): void {
  const badge = fetchBadge(event.params._badgeId.toString());

  badge.name = 'bruh';

  badge.save();
}

export function handleAddGuild(event: AddGuildEvent): void {
  const guild = fetchGuild(event.params._guildId.toString());
  guild.save();
}

export function handleEditGuild(event: EditGuildEvent): void { }

export function handleEditMembership(event: EditMembershipEvent): void {
  handleMembershipEdit(event);
}

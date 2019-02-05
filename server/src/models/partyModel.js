import uuid from 'uuid';

class Party {
  constructor() {
    this.parties = [];
  }

  create(data) {
    const newParty = {
      id: uuid.v4(),
      partyName: data.partyName || '',
      partyAddress: data.partyAddress || '',
      partyLogo: data.partyLogo || '',
    };
    this.parties.push(newParty);
    return newParty;
  }

  findOne(id) {
    return this.parties.find(item => item.id === id);
  }

  findAll() {
    return this.parties;
  }

  update(id, data) {
    const party = this.findOne(id);
    const index = this.parties.indexOf(party);
    this.parties[index].partyName = data.partyName || party.partyName;
    this.parties[index].partyAddress = data.partyAddress || party.partyAddress;
    this.parties[index].partyLogo = data.partyLogo || party.partyLogo;
    return this.parties[index];
  }

  delete(id) {
    const party = this.findOne(id);
    const index = this.parties.indexOf(party);
    this.parties.splice(index, 1);
    return {};
  }
}

export default new Party();
